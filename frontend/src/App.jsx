// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardAdmin from './pages/DashboardAdmin';
import DashboardUser from './pages/DashboardUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/user" element={<DashboardUser />} />
      </Routes>
    </Router>
  );
}

export default App;
