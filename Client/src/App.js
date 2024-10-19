import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Admin from './portion/admin';
import Staff from './portion/staff';
import Patient from './portion/patient';
<<<<<<< HEAD
import BookAppointment from '../src/components/patient/BookAppointment';
import Footer from '../src/components/patient/Footer';
import Appointment from '../src/components/patient/Appointment'; 
import Reports from '../src/portion/patient/pages/Reports';
import Appointmentpage from '../src/components/Appointmentpage';
import Loginpage from '../src/components/Loginpage';
import Review from '../src/components/Review.jsx';
=======
import Appointmentpage from '../src/components/Appointmentpage';
import Loginpage from '../src/components/Loginpage';
import Review from '../src/components/Review.jsx';
   
>>>>>>> 11416f383a8df7850b7eefa48c685bc2e52d0ff4

const NotFound = () => {
  return <div className="text-center text-2xl text-red-500">Page Not Found</div>;
};

function App() {
  return (
<<<<<<< HEAD
    <Suspense fallback={<div>Loading...</div>}>
=======
    <BrowserRouter>
>>>>>>> 11416f383a8df7850b7eefa48c685bc2e52d0ff4
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
<<<<<<< HEAD
    </Suspense>
=======
    </BrowserRouter>

    
>>>>>>> 11416f383a8df7850b7eefa48c685bc2e52d0ff4
  );
}

export default App;
