import React from "react";
import Image1 from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full bg-[#FAFAFA] flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-white p-5 md:p-8 flex flex-col items-center justify-center md:w-[35%] lg:w-[30%]">
        <img className="w-[60%] h-auto md:w-[40%] md:h-auto mb-4" src={Image1} alt="Logo" />
        <div className="flex gap-x-3 mt-2">
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-xl text-[#3539B5] p-2 rounded-md bg-white hover:bg-gray-200 transition"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-xl text-[#3539B5] p-2 rounded-md bg-white hover:bg-gray-200 transition"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-xl text-[#3539B5] p-2 rounded-md bg-white hover:bg-gray-200 transition"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            className="text-xl text-[#3539B5] p-2 rounded-md bg-white hover:bg-gray-200 transition"
          />
        </div>
        <div className="text-center text-white mt-4">
          <p className="text-sm md:text-base">
            111B Old Ashoka Garden, 80 Feet Road in front of Manpreet Hotel
          </p>
          <p className="text-sm md:text-base">+91 8747646498</p>
          <p className="text-sm md:text-base">sales@manasvi.in</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="p-5 md:p-8 flex flex-col gap-y-8 md:w-[65%] lg:w-[65%]">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Services Section */}
          <div className="flex flex-col w-full md:w-[30%]">
            <h1 className="text-lg md:text-xl font-semibold">Services</h1>
            <ul className="text-zinc-500 text-sm md:text-base space-y-2 mt-2">
              <li>24/7 Support</li>
              <li>Good Consultancy</li>
              <li>Medicine Support</li>
              <li>Team Support</li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="flex flex-col w-full md:w-[30%]">
            <h1 className="text-lg md:text-xl font-semibold">Company</h1>
            <ul className="text-zinc-500 text-sm md:text-base space-y-2 mt-2">
              <li>Home</li>
              <li>Service</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col w-full md:w-[30%]">
            <h1 className="text-lg md:text-xl font-semibold">Our Newsletter</h1>
            <p className="text-zinc-500 text-sm md:text-base mt-2">
              Never miss out on our company's latest news, updates, and exclusive offers! Subscribe to our newsletter today and get the inside scoop delivered straight to your inbox.
            </p>
            <button className="w-full px-4 py-2 text-white bg-[#3337AF] rounded-md mt-4 hover:bg-[#1A1C74] transition">
              Appointment
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-300 my-4"></div>

        {/* Copyright Section */}
        <div className="flex flex-col items-center text-center">
          <p className="text-sm md:text-base">© 2023. Manasvi Technologies.</p>
          <p className="text-zinc-500 text-xs md:text-sm">
            Built by Manasvi Technologies. ♥
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
