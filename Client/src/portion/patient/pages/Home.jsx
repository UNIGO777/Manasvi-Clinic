import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Components/navbar/Nav_bar';
import Patient from '../../../../src/assets/Patient.png';

const Home = () => {
  return (
    <><Navbar />
    <div className="min-h-screen flex flex-col md:flex-row">
      
      {/* Left side */}
      <div className="bg-blue-600 text-white p-8 md:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">HealthHub Clinic</h1>
        <p className="text-xl mb-6">
          "Empowering health through compassionate care and cutting-edge technology."
        </p>
        
        <Link 
          to="/appointments" 
          className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300 ease-in-out self-start"
        >
          Book an Appointment
        </Link>
      </div>

      {/* Right side */}
      <div className="bg-gray-100 md:w-1/2 flex items-center justify-center ">
        <div className="w-full h-full">
          <img 
            src={Patient} 
            alt="HealthHub Clinic" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div></>
   
  );
};

export default Home;

