import React, { useState } from 'react';
import '../styles/style.css';

function UserProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        firstName: 'John',
        lastName: 'De Silva',
        email: 'john@gmail.com',
    });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        const confirmSave = window.confirm('Are you sure you want to save changes?');

        if (confirmSave) {
            console.log('Edited Data:', formData);
            setIsEditing(false);
        }
    };

    const handleCancelClick = () => {
        setFormData({
            firstName: 'John',
            lastName: 'De Silva',
            email: 'john@gmail.com',
        });
        setIsEditing(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
        <a href="/dashboard" className="back-to-dashboard center" >Back to Dashboard</a>
        <div className="form-container">
            <h2>User Profile</h2>
            <div className="form">
                <div>
                    <label>
                        First Name: {isEditing ? (
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                            />
                        ) : (
                            formData.firstName
                        )}
                    </label>
                </div>
                <div>
                    <label>
                        Last Name: {isEditing ? (
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                            />
                        ) : (
                            formData.lastName
                        )}
                    </label>
                </div>
                <div>
                    <label>
                        Email: {isEditing ? (
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        ) : (
                            formData.email
                        )}
                    </label>
                </div><br/>
                {isEditing ? (
                    <div>
                        <button onClick={handleSaveClick}>Save</button>&nbsp;
                        <button onClick={handleCancelClick}>Cancel</button>
                    </div>
                ) : (
                    <button onClick={handleEditClick}>Edit</button>
                )}
            </div>
        </div>
        </>
    );
}

export default UserProfile;
