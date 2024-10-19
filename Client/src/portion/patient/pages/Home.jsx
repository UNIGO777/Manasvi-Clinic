import React, { useRef } from 'react';
import Navbar from './Components/navbar/Nav_bar';
import Patient from '../../../../src/assets/patient.png';
import doctor from '../../../../src/assets/doctor.png';
import medicine from '../../../../src/assets/medicine.png';
import appointment from '../../../../src/assets/support.png';
import handshake from '../../../../src/assets/handshake.png';
import dr_about from '../../../../src/assets/dr.png';
import about from '../../../../src/assets/About.png';
import Dr_1 from '../../../../src/assets/Dr_1.png';
import Dr_2 from '../../../../src/assets/Dr_2.png';
import Dr_3 from '../../../../src/assets/Dr_3.png'; 

const Home = () => {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const specialistsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      {/* Home Section */}
      <div ref={homeRef} className="min-h-screen flex flex-col lg:flex-row">
        <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-white p-8 lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-20">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">HealthHub Clinic</h1>
          <p className="text-lg sm:text-xl mb-6">
            "Empowering health through compassionate care and cutting-edge technology."
          </p>
          <button
            onClick={() => scrollToSection(servicesRef)}
            className="bg-gradient-to-r from-white to-blue-100 text-blue-600 hover:text-white font-bold py-2 px-4 hover:py-3 hover:px-6 rounded-full hover:from-blue-700 hover:to-blue-400 transition-all duration-300 ease-in-out self-start flex items-center group"
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
        <div className="bg-gray-100 lg:w-1/2 flex items-center justify-center p-4 lg:p-0">
          <div className="w-full h-full">
            <img 
              src={Patient} 
              alt="HealthHub Clinic" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Specialists Section */}
      <div ref={servicesRef} className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-8 lg:px-20">
        <h4 className="text-lg sm:text-xl font-bold text-blue-700 mb-4 sm:mb-8">The Best Specialists We Have</h4>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-20 font-bold text-blue-700 mb-8 text-center">The Best specialists we have are there to serve you the best pre-diagnosis and post-diagnosis</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { img: Dr_1, title: "General Checkups", desc: "Comprehensive health assessments to keep you in top shape." },
            { img: Dr_2, title: "Specialized Care", desc: "Expert care in various medical specialties and we are the best in the world." },
            { img: Dr_3, title: "Telemedicine", desc: "Virtual consultations for your convenience." }
          ].map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <img src={service.img} alt={service.title} className="mx-auto h-24 w-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
              <p className="text-center">{service.desc}</p>
              <div className="mt-4 text-center">
                <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center group transition-all duration-300 ease-in-out">
                  <span className="text-lg font-semibold mr-2">Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div ref={servicesRef} className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-8 lg:px-20">
        <h4 className="text-lg sm:text-xl font-bold text-blue-700 mb-4 sm:mb-8">WHAT WE DO?</h4>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-700 mb-8 text-center">We provide a wide range of services to meet your health needs, This is the best clinic in the world.</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { img: doctor, title: "General Checkups", desc: "Comprehensive health assessments to keep you in top shape." },
            { img: medicine, title: "Specialized Care", desc: "Expert care in various medical specialties and we are the best in the world." },
            { img: appointment, title: "Telemedicine", desc: "Virtual consultations for your convenience." }
          ].map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <img src={service.img} alt={service.title} className="mx-auto h-24 w-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
              <p className="text-center">{service.desc}</p>
              <div className="mt-4 text-center">
                <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center group transition-all duration-300 ease-in-out">
                  <span className="text-lg font-semibold mr-2">Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutRef} className="min-h-screen flex flex-col lg:flex-row">
        <div className="bg-gray-100 w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-0">
          <div className="w-full h-full">
            <img 
              src={about} 
              alt="HealthHub Clinic" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 text-white p-8 lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-20">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">Who Are We?</h1>
          <p className="text-lg sm:text-xl mb-8">
            "Empowering Health, Inspiring Wellness: Who We Are for Clinic."
          </p>
          {[
            { img: dr_about, title: "Experience Doctor", desc: "A good doctor's comforting and reassuring words are sometimes more powerful than the medicines." },
            { img: handshake, title: "24/7 Support Team", desc: "A clinic is a sanctuary where compassion meets expertise, and patients find solace in the care they receive." }
          ].map((item, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center mb-2">
                <img src={item.img} alt={item.title} className="w-10 h-10 mr-4" />
                <h3 className="text-2xl sm:text-3xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-base sm:text-lg pl-14">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
