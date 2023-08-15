import textwrap
from langchain.document_loaders import DirectoryLoader
from langchain.document_loaders import YoutubeLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chat_models import ChatOpenAI
from langchain.chains import LLMChain
from dotenv import find_dotenv, load_dotenv
from langchain.prompts.chat import (
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate,
)

import os

os.environ["OPENAI_API_KEY"] = "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"

import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

load_dotenv(find_dotenv())
embeddings = OpenAIEmbeddings()


def create_db_from_text_directory():
    loader = DirectoryLoader("data/", glob = "*.txt")

    transcript = loader.load()
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
    docs = text_splitter.split_documents(transcript)

    db = FAISS.from_documents(docs, embeddings)
    return db


def get_response_from_query(db, query, eraTemplate, k=4):
    """
    gpt-3.5-turbo can handle up to 4097 tokens. Setting the chunksize to 1000 and k to 4 maximizes
    the number of tokens to analyze.
    """

    docs = db.similarity_search(query, k=k)
    docs_page_content = " ".join([d.page_content for d in docs])

    chat = ChatOpenAI(model_name="gpt-3.5-turbo", temperature=0.3)

    # Template to use for the system message prompt
    template = """
        You are an advanced AI named G.O.S.T that that can answer questions from the docuemnt: {docs}
        
        Only use the factual information from the transcript.

        If the question is in general and you know the answer from your database, then give answer in 10-20 words.
        
        If you feel like you don't have enough information to answer the question, say "Master this is out of G.O.S.T protocol".
        
        Your answers should be verbose and detailed.
        """ + eraTemplate

    system_message_prompt = SystemMessagePromptTemplate.from_template(template)

    # Human question prompt
    human_template = "Answer the following question: {question}"
    human_message_prompt = HumanMessagePromptTemplate.from_template(human_template)

    chat_prompt = ChatPromptTemplate.from_messages(
        [system_message_prompt, human_message_prompt]
    )

    chain = LLMChain(llm=chat, prompt=chat_prompt)

    response = chain.run(question=query, docs=docs_page_content)
    response = response.replace("\n", "")
    return response, docs


def get_response_for_password(original_password, query, k=4):
    """
    gpt-3.5-turbo can handle up to 4097 tokens. Setting the chunksize to 1000 and k to 4 maximizes
    the number of tokens to analyze.
    """

    chat = ChatOpenAI(model_name="gpt-3.5-turbo", temperature=0.1)

    # Template to use for the system message prompt
    template = """
        You are an advanced AI named G.O.S.T that that can answer questions from your knowledge.
        """

    system_message_prompt = SystemMessagePromptTemplate.from_template(template)

    # Human question prompt
    human_template = "Answer the following question: How similar in terms of meaning is the word {question} from {original_password} in scale from 0 to 100. Words can also be a synonym or spelling or digits. Only give the number."
    human_message_prompt = HumanMessagePromptTemplate.from_template(human_template)

    chat_prompt = ChatPromptTemplate.from_messages(
        [system_message_prompt, human_message_prompt]
    )

    chain = LLMChain(llm=chat, prompt=chat_prompt)

    response = chain.run(question=query, original_password = original_password)
    response = response.replace("\n", "")
    return response



# db = create_db_from_text_directory()

# query = "Who is george washington? answer in 100 words"
# response, docs = get_response_from_query(db, query)
# print(textwrap.fill(response, width=50))