import React from "react";
import girl from "../../assets/girls.png";
import logo from "../../assets/logo.png";
const Appointment = () => {
  return (
    <div className="flex flex-col md:flex-row items-center h-screen">
      {/* Left Section (Blue Background) */}
      <div className="md:w-1/2 bg-blue-700 text-white flex flex-col justify-start p-10 h-full">
        <div className="h-[10vh] mb-5"> {/* Adjusted margin bottom */}
          <img src={logo} alt="Logo" className="w-28" />
        </div>
        <div className="h-[75vh] md:flex md:justify-center md:flex-col">
          <h1 className="text-10xl md:text-6xl font-bold mb-4">Appointment</h1> {/* Increased size */}
          <p className="text-lg">
            Communication is the key to success, and we're always here to answer your questions.
          </p>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="md:w-1/2 h-full">
        <img
          src={girl}
          alt="Person on Call"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Appointment;
