import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Admin from './portion/admin';
import Staff from './portion/staff';
import Patient from './portion/patient';
<<<<<<< HEAD
import BookAppointment from '../src/components/patient/BookAppointment';
import Footer from '../src/components/patient/Footer';
import Appointment from '../src/components/patient/Appointment'; 
import Reports from '../src/portion/patient/pages/Reports';
=======
import Appointmentpage from '../src/components/Appointmentpage';
import Loginpage from '../src/components/Loginpage';
import Review from '../src/components/Review.jsx';
   
>>>>>>> 3c1c6a12b537b69a6756c84a31b0452d9cb3f8d9

const NotFound = () => {
  return <div className="text-center text-2xl text-red-500">Page Not Found</div>;
};

function App() {
  return (
<<<<<<< HEAD
    
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/user" />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/staff/*" element={<Staff />} />
          <Route path="/user/*" element={<Patient />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/reports" element={<Reports />} />
          
          {/* Add more routes as needed */}
        </Routes>
        <Appointment/>
        <BookAppointment/>
        <Footer/>
      </Suspense>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/user" />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/staff/*" element={<Staff />} />
        <Route path="/user/*" element={<Patient />} />
        <Route path="/appointment" element={<Appointmentpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/review" element={<Review/>} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 3c1c6a12b537b69a6756c84a31b0452d9cb3f8d9
    
  );
}

export default App;
