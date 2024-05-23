// AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SelectRole from './SelectRole';
import UseDeal from './UseDeal';
import EnterPhone from './EnterPhone'; // Ensure this path is correct

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/select-role" />} />
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/use-deal/:role" element={<UseDeal />} /> 
        <Route path="/enter-phone" element={<EnterPhone />} /> {/* Update path */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
