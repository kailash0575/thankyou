import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ThankYou from './Thankyou';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/seo-lp">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
