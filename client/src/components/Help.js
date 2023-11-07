import React, { useState } from 'react';
import '../styles/style.css';

function FeedbackAndHelpdesk() {
  const [feedback, setFeedback] = useState('');
  const [helpdesk, setHelpdesk] = useState('');
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);
  const [isHelpdeskSubmitted, setIsHelpdeskSubmitted] = useState(false);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleHelpdeskChange = (event) => {
    setHelpdesk(event.target.value);
  };

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    setIsFeedbackSubmitted(true);
  };

  const handleHelpdeskSubmit = (event) => {
    event.preventDefault();
    setIsHelpdeskSubmitted(true);
  };

  return (
    <>
      <a href="/dashboard" className="back-to-dashboard center">Back to Dashboard</a>
      <div className="form-container">
        <h2>Feedback and Helpdesk</h2>
        <div className="form">
          <div>
            <p>Feedback</p>
            {isFeedbackSubmitted ? (
              <p>Thank you for your feedback!</p>
            ) : (
              <form onSubmit={handleFeedbackSubmit}>
                <textarea
                  rows="4"
                  cols="50"
                  value={feedback}
                  onChange={handleFeedbackChange}
                  placeholder="Type your feedback here..."
                  required
                /><br />
                <button type="submit">Submit Feedback</button>
              </form>
            )}
          </div>
          <div><br />
            <p>Helpdesk</p>
            {isHelpdeskSubmitted ? (
              <p>Your helpdesk request has been submitted.</p>
            ) : (
              <form onSubmit={handleHelpdeskSubmit}>
                <textarea
                  rows="4"
                  cols="50"
                  value={helpdesk}
                  onChange={handleHelpdeskChange}
                  placeholder="Type your helpdesk request here..."
                  required
                /><br />
                <button type="submit">Submit Helpdesk Request</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedbackAndHelpdesk;
