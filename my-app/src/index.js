import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Connect from './components/Connect/Connect';
import reportWebVitals from './reportWebVitals';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import App from './components/App/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
