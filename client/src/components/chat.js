import React, { useState } from 'react';
import '../styles/style.css';
import axios from 'axios';

function CustomerSupportChat() {
  const initialQuestions = [
    "How can I reach customer support?",
    "Tell me more about our services.",
    "Where can I access my current and past bills on the Sri-Care platform?",
    "How can I make online payments for my telecommunications services?",
    "How can I view my payment history?",
    "What payment methods are accepted for online bill payments?",
    "How do I configure email notifications for my account?",
    "What are the live chat support hours for our customer care agents?"
  ];

  const [chatMessages, setChatMessages] = useState([
    { text: "Hello! How may I assist you? :)", className: "message" }
  ]);

  const handleQuestionSelection = (question, id) => {
    setChatMessages(prevMessages => [
      ...prevMessages,
      { text: question, className: "message user" }
    ]);
    sendQuestionToBackend(id);
  };

  const sendQuestionToBackend = (id) => {
    axios.get(`http://localhost:8222/api/chat/messages/${id}`)
      .then(response => {
        const responseData = response.data;
        setChatMessages(prevMessages => [
          ...prevMessages,
          { text: responseData, className: "message" }
        ]);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <a href="/dashboard" className="back-to-dashboard center">Back to Dashboard</a>
      <div>
        <h2>Customer Support Chat</h2>
        <div className="chat-container">
          <div className="chat-messages">
            {chatMessages.map((message, index) => (
              <div key={index} className={message.className}>
                {message.text}
              </div>
            ))}
          </div>
          <br />
          <hr />
          <div className="default-questions">
            {initialQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuestionSelection(question, index + 1)}
                className="question-button"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerSupportChat;
