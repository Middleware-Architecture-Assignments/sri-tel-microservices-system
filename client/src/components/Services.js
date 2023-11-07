import React, { useState } from 'react';
import '../styles/style.css';
import axios from 'axios';

function Services() {
    const [selectedSong, setSelectedSong] = useState('');
    const [showSongSelector, setShowSongSelector] = useState(false);
    const [ringtoneStatus, setRingtoneStatus] = useState('');

    const [selectedDataTopUp, setSelectedDataTopUp] = useState('');
    const [showDataTopUpSelector, SetDataTopUpSelector] = useState(false);
    const [dataTopUpsStatus, setDataTopUpsStatus] = useState('');

    const [data, setData] = useState([
        { service: "Roaming", status: "Deactivate", action: "" },
        { service: "Data top ups", status: dataTopUpsStatus === "" ? "Deactivate" : dataTopUpsStatus, action: "Activate", action2: "" },
        { service: "Other services", status: "Deactivate", action: "" },
        { service: "Ringtone", status: ringtoneStatus === "" ? "Deactivate" : ringtoneStatus, action: "Activate", action2: "" },
    ]);

    const handleServiceStatus = async (serviceName) => {
        try {
            if (serviceName === 'Ringtone') {
                const updatedData = [...data];
                const index = updatedData.findIndex(item => item.service === "Ringtone");
                if (index !== -1) {
                    updatedData[index].status = "Deactivate";
                    updatedData[index].action = "Activate";
                    updatedData[index].action2 = "";
                }
                setData([...updatedData]);

                const response = await axios.post(`http://localhost:8082/telco/ringingTone/unsub/${selectedSong}`);

                alert(response.data.message);
                setRingtoneStatus("Deactivate");

            } else if (serviceName === 'Data top ups') {
                const updatedData = [...data];
                const index = updatedData.findIndex(item => item.service === "Data top ups");
                if (index !== -1) {
                    updatedData[index].status = "Deactivate";
                    updatedData[index].action = "Activate";
                    updatedData[index].action2 = "";
                }
                setData([...updatedData]);

                const response = await axios.post(`http://localhost:8082/telco/dataTopUp/unsub/${selectedDataTopUp}`);

                alert(response.data.message);
                setDataTopUpsStatus("Deactivate");

            } else {
                const serviceIndex = data.findIndex((item) => item.service === serviceName);

                if (serviceIndex !== -1) {
                    data[serviceIndex].status =
                        data[serviceIndex].status === 'Active' ? 'Deactivate' : 'Active';

                    setData([...data]);
                }

                if (serviceName === 'Roaming') {
                    const response = await axios.post(`http://localhost:8082/telco/roaming/${data[serviceIndex].status === 'Active' ? 'sub' : 'unsub'}`);
                    alert(response.data.message);
                    console.log(response);
                }
                else {
                    const response = await axios.post(`http://localhost:8082/api/othertelco/${data[serviceIndex].status === 'Active' ? 'subscribe' : 'unsubscribe'}`, {
                        service: serviceName,
                        status: data[serviceIndex].status,
                    });
                    alert(response.data);
                }
            }
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const handleSongChange = async () => {
        if (!selectedSong) {
            alert('Please select a song');
            return;
        }
        const confirmChange = window.confirm('Are you sure you want to change the song?');
        if (!confirmChange) {
            return;
        }

        const updatedData = [...data];
        const index = updatedData.findIndex(item => item.service === "Ringtone");
        if (index !== -1) {
            if (selectedSong === "1") {
                updatedData[index].status = "Mahada Namathi Wana Bambara: Ringing Tone Activated";
            } else if (selectedSong === "2") {
                updatedData[index].status = "Bambara Wage Visekaraya: Ringing Tone Activated";
            } else {
                updatedData[index].status = "Nim Him Sewwa: Ringing Tone Activated";
            }
            updatedData[index].action = "Change";
            updatedData[index].action2 = "Deactivate";
        }

        try {
            const response = await axios.post(`http://localhost:8082/telco/ringingTone/sub/${selectedSong}`);
            alert(response.data.message);
            setShowSongSelector(false);
        } catch (error) {
            console.error('Error:', error);
        }
        setShowSongSelector(false);
    };

    const handleDataTopUpChange = async () => {
        if (!selectedDataTopUp) {
            alert('Please select a data top up');
            return;
        }
        const confirmChange = window.confirm('Are you sure you want to change the data top up?');
        if (!confirmChange) {
            return;
        }

        const updatedData = [...data];
        const index = updatedData.findIndex(item => item.service === "Data top ups");
        if (index !== -1) {
            if (selectedDataTopUp === "1") {
                updatedData[index].status = "Data top up 1GB Activated for 1 month";
            } else if (selectedDataTopUp === "2") {
                updatedData[index].status = "Data top up 3GB Activated for 1 month";
            } else {
                updatedData[index].status = "Data top up 5GB Activated for 1 month";
            }
            updatedData[index].action = "Change";
            updatedData[index].action2 = "Deactivate";
        }

        try {
            const response = await axios.post(`http://localhost:8082/telco/dataTopUp/sub/${selectedDataTopUp}`);
            alert(response.data.message);
            SetDataTopUpSelector(false);
        } catch (error) {
            console.error('Error:', error);
        }
        SetDataTopUpSelector(false);
    };

    return (
        <>
            <a href="/dashboard" className="back-to-dashboard">Back to Dashboard</a>
            <div className="form-container">
                <h2>Services</h2>
                <div className="form form-dashboard">
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Telco service</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((val, key) => (
                                    <tr key={key}>
                                        <td>{val.service}</td>
                                        <td style={{ color: val.status === 'Deactivate' ? 'red' : 'green' }}>
                                            {val.status}
                                        </td>
                                        <td>
                                            {val.service === 'Ringtone' && val.action === 'Activate' ? (
                                                <button onClick={() => setShowSongSelector(true)}>
                                                    {val.action}
                                                </button>
                                            ) : val.service === 'Ringtone' && val.action === 'Change' ? (
                                                <div>
                                                    <button onClick={() => setShowSongSelector(true)}>
                                                        {val.action}
                                                    </button><br />
                                                    <button onClick={() => handleServiceStatus(val.service)}>
                                                        {val.action2}
                                                    </button>
                                                </div>
                                            ) : val.service === 'Data top ups' && val.action === 'Activate' ? (
                                                <button onClick={() => SetDataTopUpSelector(true)}>
                                                    {val.action}
                                                </button>
                                            ) : val.service === 'Data top ups' && val.action === 'Change' ? (
                                                <div>
                                                    <button onClick={() => SetDataTopUpSelector(true)}>
                                                        {val.action}
                                                    </button><br />
                                                    <button onClick={() => handleServiceStatus(val.service)}>
                                                        {val.action2}
                                                    </button>
                                                </div>
                                            ) : (
                                                <button onClick={() => handleServiceStatus(val.service)}>
                                                    {val.status === 'Active' ? 'Deactivate' : 'Activate'}
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {showSongSelector && (
                    <div className="song-selector">
                        <h3>Available Songs List:</h3>
                        <select onChange={(e) => setSelectedSong(e.target.value)}>
                            <option value="">Select a song</option>
                            <option value="1">Mahada Namathi Wana Bambara</option>
                            <option value="2">Bambara Wage Visekaraya</option>
                            <option value="3">Nim Him Sewwa</option>
                        </select>&nbsp;
                        <button onClick={handleSongChange}>Confirm</button>
                    </div>
                )}

                {showDataTopUpSelector && (
                    <div className="song-selector">
                        <h3>Available Data Top Ups:</h3>
                        <select onChange={(e) => setSelectedDataTopUp(e.target.value)}>
                            <option value="">Select a data top up</option>
                            <option value="1">1GB - Rs.100</option>
                            <option value="2">3GB - Rs.250</option>
                            <option value="3">5GB - Rs.400</option>
                        </select>&nbsp;
                        <button onClick={handleDataTopUpChange}>Confirm</button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Services;
