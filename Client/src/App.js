import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Admin from './portion/admin';
import Staff from './portion/staff';
import Patient from './portion/patient';
import Appointmentpage from '../src/components/Appointmentpage';
import Loginpage from '../src/components/Loginpage';
import Review from '../src/components/Review.jsx';

   


const NotFound = () => {
  return <div className="text-center text-2xl text-red-500">Page Not Found</div>;
};

function App() {
  return (

    <Suspense fallback={<div>Loading...</div>}>
    {/* <BrowserRouter> */}

      <Routes>
        <Route path="/" element={<Navigate to="/user" />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/staff/*" element={<Staff />} />
        <Route path="/user/*" element={<Patient />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/appointment" element={<Appointmentpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/review" element={<Review />} />
        {/* <Route path="/reports" element={<Reports />} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </Suspense>

    // </BrowserRouter>
  )
}

export default App;
