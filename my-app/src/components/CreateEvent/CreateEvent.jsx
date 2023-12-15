import React, { useState } from 'react';
import '../../General.css';
import axios from 'axios';

export const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [dateBegin, setDateBegin] = useState('');
  const [dateEnding, setDateEnding] = useState('');
  const [ville, setVille] = useState('');
  const [department, setDepartment] = useState('');
  const [description, setDescription] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault(); // Move this line to the beginning
  
    if (eventName === '' || department === '' || ville === '' || description === '' || dateBegin == null || dateEnding == null) {
      alert('Please fill out all fields');
      return;
    }
    //TODO : check dates are date
  
    const data = new FormData();
    // TODO : check values and add admin or organiser name
    data.append('nom_event', eventName);
    data.append('date_debut', dateBegin);
    data.append('date_fin', dateEnding);
    data.append('ville', ville); 
    data.append('departement', department); 
    data.append('descr', description);
  
    const url = 'http://localhost:5000/create-event.php';
    axios.post(url, data)
      .then(response => {
        // Access the response data
        const responseData = response.data;
  
        // Check if there is an error
        if (responseData.error) {
          alert(responseData.error);
        } else {
          // Registration was successful
          alert(responseData.success);
  
          // Redirect to another page (you can replace the URL below)
          window.location.href = '/create-event';
        }
      })
      .catch(error => {
        // Handle the error
        console.error("An error occurred:", error);
      });
  }

  return (
    <div className="Connect">
      <p>Create an event</p>
      <form onSubmit={handleSubmit}>
        <label>Event Name : <input value={eventName} onChange={(e) => setEventName(e.target.value)} type="text" name="eventName" /></label>
        <label>Date Begin : <input value={dateBegin} onChange={(e) => setDateBegin(e.target.value)} type="date" name="dateBegin" /></label>
        <label>Date Ending : <input value={dateEnding} onChange={(e) => setDateEnding(e.target.value)} type="date" name="dateEnding" /></label>
        <label>Ville : <input value={ville} onChange={(e) => setVille(e.target.value)} type="text" name="ville" /></label>
        <label>Department : <input value={department} onChange={(e) => setDepartment(e.target.value)} type="text" name="department" /></label>
        <label>Description : <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" /></label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CreateEvent;