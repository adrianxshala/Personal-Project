import React from "react";
import { IoCall } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import logo from "../../assets/icon/logo oringinal.png"

const Footer = () => {
  return (
    <div className="bg-customBlue py-[30px] md:flex">
      <div className="container mx-auto">
        <div className="lg:flex justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-white font-montserrat">LUXURY</h1>
          <h6 className="text-white font-montserrat font-thin">
            Discover the assortment of exqusite,high-
            <br />
            prescision timepleces
          </h6>
          <h6 className="flex gap-4 text-white font-thin">
            {" "}
            <IoCall /> +383 49 1533 002 <FiMail /> rolexllc@gmail.com
          </h6>
          <h5 className="flex gap-4 text-white">
            <FaHome /> Prishtina,North Albania
          </h5>
        </div>
        <div>
          <img src={logo} alt="logo-footer" className="w-[400px] h-[100px]" />
          <div>
            
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
