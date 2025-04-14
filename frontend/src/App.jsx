// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PhonesList from './pages/phonesList';
import CreatePhone from './pages/CreatePhone';
import UpdatePhone from './pages/UpdatePhone';

const App = () => {
  return (
    <Router>
      <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/phones" element={<PhonesList />} />
      <Route path="/create-phone" element={<CreatePhone />} />
      <Route path="/update-phone/:id" element={<UpdatePhone />} />
    </Routes>
      </div>
    </Router>
  );
};

export default App;
