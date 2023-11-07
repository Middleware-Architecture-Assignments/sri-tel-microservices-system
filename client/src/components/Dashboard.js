import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css';

function UserDashboard() {
  const navigate = useNavigate();

  const goToServices = () => {
    navigate('/services');
  };

  const goToBills = () => {
    navigate('/bills');
  };

  const goToChat = () => {
    navigate('/chat');
  };

  const goToNotifications = () => {
    navigate('/notifications');
  };

  const goToProfile = () => {
    navigate('/profile');
  };

  const goToHelpdesk = () => {
    navigate('/help');
  };

  const logout = () => {
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>User Dashboard</h2>
      <p>Welcome John :)</p>
      <div className="form form-dashboard">
        <div>
          <button onClick={goToServices}>Services</button>
        </div>
        <div>
          <button onClick={goToBills}>E-Bills</button>
        </div>
        <div>
          <button onClick={goToChat}>Chat</button>
        </div>
        <div>
          <button onClick={goToNotifications}>Notifications - <label>3</label></button>
        </div>
        <div>
          <button onClick={goToProfile}>Profile</button>
        </div>
        <div>
          <button onClick={goToHelpdesk}>Feedback and Helpdesk</button>
        </div>
        <div>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
