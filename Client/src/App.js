import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './hoc/ProtectedRoute';
import Admin from './portion/admin';
import Staff from './portion/staff';
import Patient from './portion/patient';

const NotFound = () => {
  return <div className="text-center text-2xl text-red-500">Page Not Found</div>;
};

function App() {
  return (
    
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/user" />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/staff/*" element={<Staff />} />
          <Route path="/user/*" element={<Patient />} />
          <Route path="*" element={<NotFound />} />
          {/* Add more routes as needed */}
        </Routes>
      </Suspense>
    
  );
}

export default App;
