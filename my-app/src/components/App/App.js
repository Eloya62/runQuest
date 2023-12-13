import React from 'react';
import '../../General.css';
import NavBar from '../NavBar/NavBar';
import HomePage from '../HomePage/HomePage';

function App() {
  return (
    /*<div>
      <a href="connect">Connect to your account</a>
      <a href="create-account">Create an account</a>
      <a href="dashboard">Dashboard</a>
      <a href="preferences">Preferences</a>
      <a href="create-event">CreateEvent</a>
      <a href="create-race">CreateRace</a>
    </div>*/
    
    <div>
      <NavBar></NavBar>
      <HomePage></HomePage>
      
    </div>
  );
}

export default App;
