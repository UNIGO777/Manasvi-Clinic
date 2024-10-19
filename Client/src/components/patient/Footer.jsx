import React from "react";
import Image1 from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full bg-[#FAFAFA] flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="bg-[#3539B5] p-5 md:p-10 flex flex-col items-center justify-center md:w-[35%]">
        <img className="w-[70%] h-auto md:w-[45%] md:h-28" src={Image1} alt="Logo" />
        <div className="flex gap-x-3 mt-4">
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
        <div className="flex flex-col items-center mt-4 text-center md:text-left text-white">
          <h1 className="text-sm md:text-base">111B Old Ashoka garden, 80 feet road in front of Manpreet Hotel</h1>
          <h1 className="text-sm md:text-base">+91 8747646498</h1>
          <h1 className="text-sm md:text-base">sales@manasvi.in</h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="p-5 md:p-10 flex flex-col gap-y-8 md:w-[65%]">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Services Section */}
          <div className="flex flex-col mb-4 md:mb-0 w-full md:w-[30%]">
            <h1 className="text-xl md:text-2xl font-semibold">Services</h1>
            <h3 className="text-zinc-500 text-sm md:text-base">24/7 Support</h3>
            <h3 className="text-zinc-500 text-sm md:text-base">Good Consultancy</h3>
            <h3 className="text-zinc-500 text-sm md:text-base">Medicine Support</h3>
            <h3 className="text-zinc-500 text-sm md:text-base">Team Support</h3>
          </div>

          {/* Company Section */}
          <div className="flex flex-col mb-4 md:mb-0 w-full md:w-[30%]">
            <h1 className="text-xl md:text-2xl font-semibold">Company</h1>
            <h3 className="text-zinc-500 text-sm md:text-base">Home</h3>
            <h3 className="text-zinc-500 text-sm md:text-base">Service</h3>
            <h3 className="text-zinc-500 text-sm md:text-base">About</h3>
            <h3 className="text-zinc-500 text-sm md:text-base">+91 9696969696</h3>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col w-full md:w-[30%]">
            <h1 className="text-xl md:text-2xl font-semibold">Our Newsletter</h1>
            <h3 className="text-xs md:text-md">
              Never miss out on our company's latest news, updates, and exclusive offers! Subscribe to our newsletter today and get the inside scoop delivered straight to your inbox.
            </h3>
            <button className="w-full px-6 py-2 rounded-md text-white bg-[#3337AF] mt-4 hover:bg-[#1A1C74] transition">
              Appointment
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-300 my-4"></div>

        {/* Copyright Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-sm md:text-base">© 2023. Manasvi Technologies.</h3>
          <h3 className="text-zinc-500 text-xs md:text-sm">Built by Manasvi Technologies. ♥</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
