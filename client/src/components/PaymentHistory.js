import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css';
import axios from 'axios';

const paidBillsURL = 'http://localhost:8222/api/bill-retrieval/paid-bills';

function PaymentHistory() {
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    axios.get(paidBillsURL)
      .then(response => {
        const data = response.data;
        setPaymentData(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const navigate = useNavigate();

  const navigateToBills = () => {
    navigate('/bills');
  };

  return (
    <>
      <a href="/dashboard" className="back-to-dashboard">Back to Dashboard</a>
      <div className="form-container">
        <h2>Payment History</h2>
        <div>
          <button onClick={navigateToBills}>View Current Bills</button>
        </div><br />
        <div className="form form-dashboard table-bill">
          <div>
            <table>
              <thead>
                <tr>
                  <th>Bill number</th>
                  <th>Bill name</th>
                  <th>Due date</th>
                  <th>Amount</th>
                  <th>Payment Date</th>
                </tr>
              </thead>
              <tbody>
                {paymentData.map((payment, key) => (
                  <tr key={key}>
                    <td>{payment.billNumber}</td>
                    <td>{payment.billName}</td>
                    <td>{payment.dueDate}</td>
                    <td>{payment.amount}</td>
                    <td>{payment.paidDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentHistory;
