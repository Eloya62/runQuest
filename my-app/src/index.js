import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Connect from './components/Connect/Connect';
import Register from './components/Connect/Register';
import Preferences from './components/Preferences/Preferences';
import CreateEvent from './components/CreateEvent/CreateEvent';
import CreateRace from './components/CreateRace/CreateRace';
import Agenda from './components/Agenda/Agenda';
import Favorite from './components/Favorite/Favorite';
import App from './components/App/App';
import EventDetails from './components/EventDetails/EventDetails';
import RaceDetails from './components/RaceDetails/RaceDetails';





export default function Index() {
  const [token, setToken] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/connect" element={<Connect setToken={setToken} />} />
        <Route path="/create-account" element={<Register />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/create-race" element={<CreateRace />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/race-details" element={<RaceDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
