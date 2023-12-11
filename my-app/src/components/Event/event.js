import React from 'react';
import '../../General.css';
import './CreateAccount.css';

export default function CreateEvent() {
  return(
    <div className="login-wrapper">
      <h2>Create an Event</h2>
      <form>
        <label>Event Name : <input type="text" name="eventName" /></label>
        <label>Date Begin : <input type="date" name="dateBegin" /></label>
        <label>Date Ending : <input type="date" name="dateEnding" /></label>
        <label>Department : <input type="text" name="department" /></label>
        <label>Description : <input type="text" name="description" /></label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
