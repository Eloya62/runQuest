import React from 'react';
import '../../General.css';

export default function CreateEvent() {
  return(
    <div className="login-wrapper">
      <h2>Create a race</h2>
      <form>
        <label>Race name : <input type="text" name="racename" /></label>
        <label>Starting Date : <input type="date" name="startdate" /></label>
        <label>Distance : <input type="number" step="0.01" name="eventaddress" /></label>
        <label>Positive drop : <input type="number" step="0.01" name="posdrop" /></label>
        <label>Negative drop : <input type="number" step="0.01" name="negdrop" /></label>
        <label>Longitude : <input type="number" step="0.01" name="longitude" /></label>
        <label>Latitude : <input type="number" step="0.01" name="latitude" /></label>
        <label>Location Info : <input type="text" name="location" /></label>
        <label>Description : <input type="text" name="description" /></label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}