import React from "react";
import Image1 from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full md:h-[90vh] bg-[#FAFAFA] md:flex">
      <div className="md:w-[35%] bg-[#3539B5] md:flex p-20 justify-evenly flex-col">
        <img className="w-[45%] h-28" src={Image1} alt="" />
        <div className="flex gap-x-3">
          <FontAwesomeIcon icon={faFacebook} className="text-2xl text-[#3539B5] p-3 rounded-md bg-white" />
          <FontAwesomeIcon icon={faInstagram} className="text-2xl text-[#3539B5] p-3 rounded-md bg-white" />
          <FontAwesomeIcon icon={faTwitter} className="text-2xl text-[#3539B5] p-3 rounded-md bg-white" />
          <FontAwesomeIcon icon={faYoutube} className="text-2xl text-[#3539B5] p-3 rounded-md bg-white" />
        </div>
        <div className="flex flex-col gap-y-3">
          <h1 className="text-white">
            111B Old Ashoka garden 80 feet road in front of Manpreet Hotel
          </h1>
          <h1 className="text-white">
            +91 8747646498
          </h1>
          <h1 className="text-white">
            sales@manasvi.in
          </h1>
        </div>
      </div>
      <div className="md:w-[65%] md:flex flex-col gap-x-28 p-20 justify-between">
        <div className="flex">
          <div className="w-[60%] flex flex-col justify-between h-[35vh]">
            <h1 className="text-2xl font-semibold">Services</h1>
            <h3 className="text-zinc-500">24/7 Support</h3>
            <h3 className="text-zinc-500">Good Consultancy</h3>
            <h3 className="text-zinc-500">Medicine Support</h3>
            <h3 className="text-zinc-500">Team Support</h3>
          </div>
          <div className="w-[60%] flex flex-col justify-between h-[35vh]">
            <h1 className="text-2xl font-semibold">Company</h1>
            <h3 className="text-zinc-500">Home</h3>
            <h3 className="text-zinc-500">Service</h3>
            <h3 className="text-zinc-500">About</h3>
            <h3 className="text-zinc-500">+91 9696969696</h3>
          </div>
          <div className="flex flex-col justify-between h-[35vh]">
            <h1 className="text-2xl font-semibold">Our Newsletter</h1>
            <h3 className="text-md">
              Never miss out on our company's latest news, updates, and
              exclusive offers! Subscribe to our newsletter today and get the
              inside scoop delivered straight to your inbox.
            </h3>
            <button className="w-full px-10 py-2 rounded-md text-white bg-[#3337AF]">
              Appointment
            </button>
          </div>
        </div>
        <div className="border-[1px]"></div>

        <div className="flex flex-col gap-y-1">
          <h3>© 2023. Manasvi Technologies.</h3>
          <h3 className="text-zinc-500">Built by Manasvi Technologies. ♥</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
