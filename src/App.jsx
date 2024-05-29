// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar, Home, Features, Planner, Connect, Support, Settings, Contact } from './components'; // Importing from index file

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/planner" element={<Planner />} /> 
        <Route path="/connect" element={<Connect />} />
        <Route path="/support" element={<Support />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
