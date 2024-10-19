
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookAppointment from '../components/patient/BookAppointment';
import Footer from '../components/patient/Footer';
import Appointment from '../components/patient/Appointment'; 

function Appointmentpage() {
    return (
        <div>
          <Appointment /> 
            <BookAppointment /> 
           <Footer />  
        
        </div>
    );
}

export default Appointmentpage;
