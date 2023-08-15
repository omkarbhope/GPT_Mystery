from flask import Flask, request, jsonify
from flask_cors import CORS  # Import the CORS extension
import requests
import gpt_langchain
import hints
app = Flask(__name__)
CORS(app)


# Replace this with your custom langchain function
def generate_answer(question, era):
    # Call your custom langchain function to generate the answer
    # For this example, we'll return a simple hardcoded response
    db = gpt_langchain.create_db_from_text_directory()
    response, docs = gpt_langchain.get_response_from_query(db, question, era)
    # print(textwrap.fill(response, width=50))
    return "This is the answer to your question: " + str(response)

def generate_password(original_password, password):
    if str(password).isdigit() and str(original_password).isdigit():
        if password == original_password:
            return "100"
        else:
            return "0"
    # Call your custom langchain function to generate the answer
    # For this example, we'll return a simple hardcoded response
    response = gpt_langchain.get_response_for_password(original_password, password)
    # print(textwrap.fill(response, width=50))
    return str(response)

@app.route('/ask', methods=['POST'])
def ask_question():
    data = request.json
    question = data.get('question', '')
    print(data.get('era', ''))
    
    era = data.get('era', '')

    eraTemplate = hints.speaking[str(era)]
    print(eraTemplate)
    if not question:
        return jsonify({'error': 'Question is missing.'}), 400

    # Call the custom langchain function to generate the answer
    answer = generate_answer(question, eraTemplate)
    return jsonify({'answer': answer}), 200

@app.route('/password', methods=['POST'])
def ask_password():
    data = request.json
    password = data.get('password', '')
    era = data.get('era', '')
    print(era)
    if not password:
        return jsonify({'error': 'Question is missing.'}), 400

    # Call the custom langchain function to generate the answer
    answer = generate_password(hints.password[str(era)], password)

    print("The passwords are:", hints.password[str(era)], password)

    if answer.isdigit():
        return jsonify({'answer': answer}), 200
    else:
        return jsonify({'answer': "0"}), 200

    # answer = "The password is " + password + "for era " + era
    # return jsonify({'answer': answer}), 200

@app.route('/objective', methods=['POST'])
def ask_objective():
    data = request.json
    era = data.get('era', '')
    print(era)

    # Call the custom langchain function to generate the answer
    objective = hints.objective[str(era)]
    story = hints.story[str(era)]
    print(objective)
    print(story)
    # answer = "The password is " + password + "for era " + era
    return jsonify({'objective': objective, 'story': story}), 200

@app.route('/passwordHint', methods=['POST'])
def ask_password_hint():
    data = request.json
    era = data.get('era', '')
    print(era)

    # Call the custom langchain function to generate the answer
    passwordHint = hints.passwordHint[str(era)]
    story = hints.story[str(era)]
    print(passwordHint)

    # answer = "The password is " + password + "for era " + era
    return jsonify({'passwordHint': passwordHint}), 200

if __name__ == '__main__':
    app.run(debug=True, port= '8080')
