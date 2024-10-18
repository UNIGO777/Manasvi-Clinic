import React, { useRef } from 'react';
import Navbar from './Components/navbar/Nav_bar';
import Patient from '../../../../src/assets/Patient.png';
import doctor from '../../../../src/assets/doctor.png';
import medicine from '../../../../src/assets/medicine.png';
import appointment from '../../../../src/assets/support.png';
import handshake from '../../../../src/assets/handshake.png';
import dr_about from '../../../../src/assets/dr.png';
import about from '../../../../src/assets/About.png'

const Home = () => {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      {/* Home Section */}
      <div ref={homeRef} className="min-h-screen flex flex-col md:flex-row">
        <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-white p-8 md:w-1/2 flex flex-col justify-center px-20">
          <h1 className="text-4xl font-bold mb-4">HealthHub Clinic</h1>
          <p className="text-xl mb-6">
            "Empowering health through compassionate care and cutting-edge technology."
          </p>
          <button
            onClick={() => scrollToSection(servicesRef)}
            // className="bg-gradient-to-r from-white to-blue-100 text-blue-600  hover:text-white font-bold py-2 px-4 hover:py-3 hover:px-6 rounded-full hover:from-blue-700 hover:to-blue-400 transition-all duration-300 ease-in-out self-start flex items-center group"
            className="bg-gradient-to-r from-white to-blue-100 text-blue-600 hover:text-white font-bold py-2 px-4 hover:py-3 hover:px-6 rounded-full hover:from-blue-700 hover:to-blue-400 transition-all duration-300 ease-in-out self-start flex items-center group hover:m-20 "
            >
            <span className="mr-0 group-hover:mr-2 transition-all duration-200">
              {'Book-Appointments'.split('').map((char, index) => (
                <span key={index} className="inline-block transition-transform duration-200 hover:translate-y-[-2px]">
                  {char}
                </span>
              ))}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-0 w-0 group-hover:h-5 group-hover:w-5 transition-all duration-100 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
        <div className="bg-gray-100 md:w-1/2 flex items-center justify-center">
          <div className="w-full h-full">
            <img 
              src={Patient} 
              alt="HealthHub Clinic" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div ref={servicesRef} className="min-h-screen flex flex-col items-center justify-center m-20">
        <h4 className="text-xl font-bold text-blue-700 mb-8">WHAT WE DO?</h4>
        <h1 className="text-4xl font-bold text-blue-700 mb-8 px-10 text-center">We provide a wide range of services to meet your health needs,This is the best clinic in the world.</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <img src={doctor} alt="Doctor" className="mx-auto h-24 w-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-center">General Checkups</h3>
            <p className="text-center">Comprehensive health assessments to keep you in top shape.</p>
          <div className="mt-4 text-center">
            <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center group transition-all duration-300 ease-in-out">
              <span className="text-lg font-semibold mr-2">Learn more</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <img src={medicine} alt="Medicine" className="mx-auto h-24 w-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-center">Specialized Care</h3>
            <p className="text-center">Expert care in various medical specialties and we are the best in the world.</p>
            <div className="mt-4 text-center">
            <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center group transition-all duration-300 ease-in-out">
              <span className="text-lg font-semibold mr-2">Learn more</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <img src={appointment} alt="Appointment" className="mx-auto h-24 w-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-center">Telemedicine</h3>
            <p className="text-center">Virtual consultations for your convenience.</p>
            <div className="mt-4 text-center">
            <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center group transition-all duration-300 ease-in-out">
              <span className="text-lg font-semibold mr-2">Learn more</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutRef} className="min-h-screen flex flex-col md:flex-row">
      <div className="bg-gray-100 md:w-1/2 flex items-center justify-center">
          <div className="w-full h-full">
            <img 
              src={about} 
              alt="HealthHub Clinic" 
              className="rounded-lg shadow-xl"
            />
          </div>
      </div>
      <div className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 text-white p-8 md:w-1/2 flex flex-col justify-center px-20">
          <h1 className="text-7xl font-bold mb-6">Who Are We?</h1>
          <p className="text-xl mb-8">
            "Empowering Health, Inspiring Wellness: Who We Are for Clinic."
          </p>
          <div className="mb-6 flex items-center">
            <img src={dr_about} alt="dr_about" className="w-10 h-10 mr-4" />
            <h3 className="text-3xl font-semibold">Experience Doctor</h3>
          </div>
          <p className="text-l px-16 mb-6">
            A good doctor's comforting and reassuring words are sometimes more powerful than the medicines.
          </p>
          <div className="mb-6 flex items-center">
            <img src={handshake} alt="handshake" className="w-10 h-10 mr-4" />
            <h3 className="text-3xl font-semibold">24/7 Support Team</h3>
          </div>
          <p className="text-l px-16 mb-6">
            A clinic is a sanctuary where compassion meets expertise, and patients find solace in the care they receive.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

