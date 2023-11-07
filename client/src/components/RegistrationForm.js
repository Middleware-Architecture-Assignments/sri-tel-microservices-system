import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/style.css';

const register_URL = 'http://localhost:8222/api/register/register';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        password: '',
    });

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/');
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const requestData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        contactNumber: formData.contactNumber,
        password: formData.password
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(register_URL + "/" + formData.firstName + "/" + formData.lastName + "/" + formData.email + "/" + formData.password + "/" + formData.contactNumber);

            if (response.data === "Error") {
                alert("Registration failed. Please provide all the details.");
            } else if (response.data === "Success") {
                alert("Registration successful!");
                navigateToLogin();
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="form-container">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Contact Number:</label>
                    <input
                        type="text"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div><br/>
                <button type="submit">Register</button><br/>
            </form>
           Already have an account? <button onClick={navigateToLogin}>Login</button>
        </div>
    );
}

export default RegistrationForm;
