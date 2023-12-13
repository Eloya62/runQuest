import React, { useState } from 'react';
import '../../General.css';
import axios from 'axios';

export const CreateRace = () => {
  const [raceName, setRaceName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [distance, setDistance] = useState('');
  const [posDrop, setPosDrop] = useState('');
  const [negDrop, setNegDrop] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [dateStart, setDateStart] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Move this line to the beginning
  
    if (raceName === '' || location === '' || description === '' || distance == null || posDrop == null || negDrop == null || longitude == null || latitude == null) {
      alert('Please fill out all fields');
      return;
    }
    if (isNaN(distance) || isNaN(posDrop)  || isNaN(negDrop) || isNaN(longitude)  || isNaN(latitude)) {
      alert("Numeric values aren't filled with numbers. Please only put numbers inside the numerical fields");
      return;
    }
    if (distance <= 0) {
      alert('The distance cannot be of 0 or less');
      return;
    }
    if (posDrop < negDrop) {
      alert("The positive drop's value must be above the negative drop's value");
      return;
    }
    //TODO : check dateStart is date
  
    const data = new FormData();
    // TODO : check values and add admin or organiser name
    data.append('raceName', raceName);
    data.append('location', location);
    data.append('description', description);
    data.append('distance', distance);
    data.append('posDrop', posDrop);
    data.append('negDrop', negDrop);
    data.append('longitude', longitude);
    data.append('latitude', latitude);
    data.append('dateStart', dateStart); //TODO check valid
  
    const url = 'http://localhost:5000/create-race.php';
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
          window.location.href = '/create-race';
        }
      })
      .catch(error => {
        // Handle the error
        console.error("An error occurred:", error);
      });
  }

  return (
    <div className="Connect">
      <p>Create a race</p>
      <form onSubmit={handleSubmit}>
        <label>Race name : <input value={raceName} onChange={(e) => setRaceName(e.target.value)} type="text" name="raceName" /></label>
        <label>Starting Date : <input value={dateStart} onChange={(e) => setDateStart(e.target.value)} type="date" name="startDate" /></label>
        <label>Distance : <input value={distance} onChange={(e) => setDistance(e.target.value)} type="number" step="0.01" name="distance" /></label>
        <label>Positive drop : <input value={posDrop} onChange={(e) => setPosDrop(e.target.value)} type="number" step="0.01" name="posDrop" /></label>
        <label>Negative drop : <input value={negDrop} onChange={(e) => setNegDrop(e.target.value)} type="number" step="0.01" name="negDrop" /></label>
        <label>Longitude : <input value={longitude} onChange={(e) => setLongitude(e.target.value)} type="number" step="0.01" name="longitude" /></label>
        <label>Latitude : <input value={latitude} onChange={(e) => setLatitude(e.target.value)} type="number" step="0.01" name="latitude" /></label>
        <label>Location Info : <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" name="location" /></label>
        <label>Description : <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" /></label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CreateRace;