import React, { useState } from 'react';

function ActiveChatbot() {
  // State to store the selected answer
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Array containing questions and answers
  const questionsAndAnswers = [
    { question: 'Question 1', answer: 'Answer 1' },
    { question: 'Question 2', answer: 'Answer 2' },
    { question: 'Question 3', answer: 'Answer 3' },
    { question: 'Question 4', answer: 'Answer 4' },
    { question: 'Question 5', answer: 'Answer 5' },
    { question: 'Question 6', answer: 'Answer 6' },
    { question: 'Question 7', answer: 'Answer 7' },
    { question: 'Question 8', answer: 'Answer 8' },
    { question: 'Question 9', answer: 'Answer 9' },
    { question: 'Question 10', answer: 'Answer 10' },
    { question: 'Question 11', answer: 'Answer 11' },
    { question: 'Question 12', answer: 'Answer 12' }
  ];

  return (
    <div className='container ' style={{maxWidth:'400px', maxHeight:'400px', overflowY:'auto', background: 'rgb(4,212,250)',
    background: 'linear-gradient(90deg, rgba(4,212,250,0.854954481792717) 0%, rgba(60,174,213,1) 0%, rgba(243,225,194,1) 100%)'}}>
      <div className="card-body d-flex flex-column">
      <h1>Get Started with zeptoX</h1>
        {questionsAndAnswers.map((item, index) => (
          <div key={index}> 
          
            <button className='btn btn-outline-success text-center text-white' onClick={() => setSelectedAnswer(item.answer)}>
              {item.question}
            </button>
            {selectedAnswer === item.answer && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActiveChatbot;
