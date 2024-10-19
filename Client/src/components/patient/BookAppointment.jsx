import React from 'react';
import book from '../../assets/book.png';

const AppointmentForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-center min-h-screen p-4 overflow-hidden">
      {/* Left Section (Image) */}
      <div className="md:w-1/2 h-1/2 md:h-full relative mb-4 md:mb-0"> 
        <img
          src={book}
          alt="Person on Call"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section (Form) */}
      <div className="md:w-1/2 max-w-lg bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-white  p-6 md:p-8 flex flex-col shadow-lg rounded-lg w-full h-full">
        {/* Bold and Large Text above the form */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Book an Appointment
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-base md:text-lg" htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              required
              className="w-full h-12 p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
            />
          </div>
          
          <div>
            <label className="block text-base md:text-lg" htmlFor="contactNumber">Contact Number *</label>
            <input
              type="tel"
              id="contactNumber"
              placeholder="Enter your contact number"
              required
              className="w-full h-12 p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2 pr-2 mb-4 md:mb-0">
              <label className="block text-base md:text-lg" htmlFor="appointmentDate">Appointment Date *</label>
              <input
                type="date"
                id="appointmentDate"
                required
                className="w-full h-12 p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
              />
            </div>
            <div className="md:w-1/2 pl-2">
              <label className="block text-base md:text-lg" htmlFor="appointmentTime">Appointment Time *</label>
              <input
                type="time"
                id="appointmentTime"
                required
                className="w-full h-12 p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
              />
            </div>
          </div>

          <div>
            <label className="block text-base md:text-lg" htmlFor="address">Address *</label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              required
              className="w-full h-12 p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
            />
          </div>

          <div>
            <label className="block text-base md:text-lg" htmlFor="injury">Injury *</label>
            <textarea
              id="injury"
              placeholder="Describe your injury"
              required
              className="w-full h-28 p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
            ></textarea>
          </div>

          {/* Updated Button */}
          <button
            type="submit"
            className="bg-yellow-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-yellow-600 transition duration-200"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
