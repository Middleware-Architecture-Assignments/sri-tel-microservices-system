import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const paymentURL = 'http://localhost:8222/api/bill-payment/verify-card';

function Payment() {
    const [formData, setFormData] = useState({
        cardHolderName: '',
        cardNumber: '',
        cardExpiryMonth: '',
        cardExpiryYear: '',
        cardCVV: '',
    });

    const [showConfirmation, setShowConfirmation] = useState(false);

    const navigate = useNavigate();

    const location = useLocation();
    const billData = location.state?.billData;

    if (!billData) {
        return (
            <div>
                <h2>Payment Details</h2>
                <p>No payment data available.</p>
            </div>
        );
    }

    const showConfirmationDialog = () => {
        if (!formData.cardHolderName || !formData.cardNumber || !formData.cardExpiryMonth || !formData.cardExpiryYear || !formData.cardCVV) {
            alert("Please fill in all the required fields before proceeding.");
        } else {
            setShowConfirmation(true);
        }
    }

    const handleConfirmation = () => {
        setShowConfirmation(false);
        // Implement your payment logic here
    }

    const closeConfirmationDialog = () => {
        setShowConfirmation(false);
        navigate('/bills');
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { cardHolderName, cardNumber, cardExpiryMonth, cardExpiryYear, cardCVV } = formData;

        try {
            const response = await axios.post(`${paymentURL}/${cardNumber}/${cardHolderName}/${cardExpiryMonth}/${cardExpiryYear}/${cardCVV}`);
            alert(response.data);
            navigate('/bills');
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
        <a href="/dashboard" className="back-to-dashboard center">Back to Dashboard</a>
        <div>
            <h2>Payment Details</h2>
            <div>
                <p>Bill Number: {billData.billNumber}</p>
                <p>Bill Name: {billData.billName}</p>
                <p>Due Date: {billData.dueDate}</p>
                <p>Amount: {billData.amount}</p>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit} className="form">
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="cardHolderName"
                            value={formData.cardHolderName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Card Number:</label>
                        <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Expiration (mm/yy):</label>
                        <div className="cardExpiry">
                            <input
                                type="text"
                                name="cardExpiryMonth"
                                placeholder='MM'
                                value={formData.cardExpiryMonth}
                                onChange={handleInputChange}
                                required
                            />/
                            <input
                                type="text"
                                name="cardExpiryYear"
                                placeholder='YY'
                                value={formData.cardExpiryYear}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label>Security Code:</label>
                        <input
                            type="text"
                            name="cardCVV"
                            value={formData.cardCVV}
                            onChange={handleInputChange}
                            required
                        />
                    </div><br />
                    <button onClick={showConfirmationDialog}>Pay now</button><br />
                </form>
                {showConfirmation && (
                    <div className="confirmation-dialog">
                        <p>Are you sure you want to make the payment?</p>
                        <button onClick={handleConfirmation}>Yes</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={closeConfirmationDialog}>No</button>
                    </div>
                )}
            </div>
        </div>
        </>
    );
}

export default Payment;
