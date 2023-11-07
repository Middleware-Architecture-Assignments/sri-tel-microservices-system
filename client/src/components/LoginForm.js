import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css';
import axios from 'axios';

const loginURL = 'http://localhost:8222/api/authenticate/login';

function UserLoginForm() {
  const [formData, setFormData] = useState({
    userEmail: '',
    userPassword: '',
  });

  const navigate = useNavigate();

  const navigateToRegistration = () => {
    navigate('/registration');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { userEmail, userPassword } = formData;

    try {
      const response = await axios.post(`${loginURL}/${userEmail}/${userPassword}`);

      if (response.data === "No Credentials") {
        alert("Login failed. Please provide both username and password.");
      } else if (response.data === "User not found") {
        alert("Login Failed. Invalid username or password.");
      } else if (response.data === "Success") {
        alert("Login Successful!");
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const { userEmail, userPassword } = formData;

  return (
    <div className="form-container">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="userEmail"
            value={userEmail}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="userPassword"
            value={userPassword}
            onChange={handleInputChange}
            required
          />
        </div><br/>
        <button type="submit">Login</button><br/>
      </form>
      Don't have an account? <button onClick={navigateToRegistration}>Register</button>
    </div>
  );
}

export default UserLoginForm;
