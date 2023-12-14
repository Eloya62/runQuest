import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Connect from './components/Connect/Connect';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import CreateAccount from './components/CreateAccount/CreateAccount';
import CreateEvent from './components/CreateEvent/CreateEvent';
import CreateRace from './components/CreateRace/CreateRace';
import Agenda from './components/Agenda/Agenda';
import Favorite from './components/Favorite/Favorite';
import App from './components/App/App';
import Maps from './components/Maps/Maps';


export default function Index() {
  const [token, setToken] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/connect" element={<Connect setToken={setToken} />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/create-race" element={<CreateRace />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/map" element={<Maps />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
