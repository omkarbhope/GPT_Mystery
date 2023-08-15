import React, { useState } from 'react';

function MyQuestions() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8080/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: question, era: "Modern" })
      });

      if (response.ok) {
        const data = await response.json();
        setAnswer(data.answer);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Ask a Question</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit">Ask</button>
      </form>
      {answer && (
        <div>
          <h2>Answer</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default MyQuestions;
