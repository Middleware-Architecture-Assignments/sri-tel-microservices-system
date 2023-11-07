import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const billApiURL = 'http://localhost:8222/api/bill-retrieval/pending-bills';

function BillView() {
    const [billData, setBillData] = useState([]);

    useEffect(() => {
        axios.get(billApiURL)
            .then(response => {
                const data = response.data;
                setBillData(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    const navigate = useNavigate();

    const goToPaymentHistory = () => {
        navigate('/payment-history');
    };

    const handlePayNow = (bill) => {
        navigate('/pay-now', { state: { billData: bill } });
    };

    return (
        <>
            <a href="/dashboard" className="back-to-dashboard">Back to Dashboard</a>
            <div className="form-container">
                <h2>Bill Viewing & Payment</h2>
                <div>
                    <button onClick={goToPaymentHistory}>View Payment History</button>
                </div><br />
                <div className="form form-dashboard table-bill">
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Bill Number</th>
                                    <th>Bill Name</th>
                                    <th>Due Date</th>
                                    <th>Amount (LKR)</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {billData.length > 0 ? (
                                    billData.map((bill, index) => (
                                        <tr key={index}>
                                            <td>{bill.billNumber}</td>
                                            <td>{bill.billName}</td>
                                            <td>{bill.dueDate}</td>
                                            <td>{bill.amount}</td>
                                            <td>
                                                <button onClick={() => handlePayNow(bill)}>Pay now</button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5">No Bills to Pay available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BillView;
