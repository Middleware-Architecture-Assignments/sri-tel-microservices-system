import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Notification.css';
import { Link } from 'react-router-dom';

function UserNotifications() {
  const [notificationData, setNotificationData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/userNotification/list')
      .then((response) => {
        setNotificationData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <a href="/dashboard" className="back-to-dashboard center">Back to Dashboard</a>
      <div className="notifications-page">
        <h2>Notifications</h2>
        <div className="notification-list">
          {notificationData.map((notification) => (
            <Link to={`/${notification.url}`} key={notification.id}>
              <div className="notification">
                <div className="notification-title">
                  <h4>{notification.notification}</h4>
                  <h5>{notification.date}</h5>
                </div>
                <p>{notification.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserNotifications;
