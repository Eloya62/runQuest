import React from 'react';
import '../../General.css';
import { Login } from '../Connect/Connect.jsx';
import { Register } from '../Connect/Register.jsx';


function App() {
  return (
    <div>
      <h1>AAA</h1>
      <Login />
      <Register />
      <a href="connect">Connect to your account</a>
      <a href="create-account">Create an account</a>
      <a href="dashboard">Dashboard</a>
      <a href="preferences">Preferences</a>
    </div>
  );
}

export default App;
