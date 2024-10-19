import React from 'react';
import book from '../../assets/book.png';

const AppointmentForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-center h-screen p-4"> {/* Added padding */}
      {/* Left Section (Image) */}
      <div className="md:w-1/3 h-full relative mb-4 md:mb-0"> {/* Added margin-bottom for smaller screens */}
        <img
          src={book}
          alt="Person on Call"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section (Form) */}
      <div className="md:w-2/3 bg-blue-700 text-white p-10 flex flex-col md:ml-8 shadow-lg rounded-lg"> {/* Changed background color to blue */}
        {/* Bold and Large Text above the form */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Book an Appointment
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-lg" htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" // Changed focus color
            />
          </div>
          
          <div>
            <label className="block text-lg" htmlFor="contactNumber">Contact Number *</label>
            <input
              type="tel"
              id="contactNumber"
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" // Changed focus color
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2 pr-2 mb-4 md:mb-0">
              <label className="block text-lg" htmlFor="appointmentDate">Appointment Date *</label>
              <input
                type="date"
                id="appointmentDate"
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" // Changed focus color
              />
            </div>
            <div className="md:w-1/2 pl-2">
              <label className="block text-lg" htmlFor="appointmentTime">Appointment Time *</label>
              <input
                type="time"
                id="appointmentTime"
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" // Changed focus color
              />
            </div>
          </div>

          <div>
            <label className="block text-lg" htmlFor="address">Address *</label>
            <input
              type="text"
              id="address"
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" // Changed focus color
            />
          </div>

          <div>
            <label className="block text-lg" htmlFor="injury">Injury *</label>
            <textarea
              id="injury"
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" // Changed focus color
              rows="3"
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
