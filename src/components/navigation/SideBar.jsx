import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className=" bg-gray-400 bg-opacity-30 backdrop-filter backdrop-blur-lg absolute w-[100%] z-40 ">
      <nav className="w-full h-screen  flex flex-col justify-start items-center    pt-20">
        <NavLink
          to="/"
          className="text-black font-thin text-3xl py-5 hover:text-blue-500"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="text-black font-thin text-3xl py-5 hover:text-blue-500"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="text-black font-thin text-3xl py-5 hover:text-blue-500"
        >
          Contact
        </NavLink>
        <NavLink
          to="/products"
          className="text-black font-thin text-3xl py-5 hover:text-blue-500"
        >
          Products
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
