import React from "react";
import { FaFacebookF, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { variables } from "../variables/variables";

const Footer = () => {
  return (
    <div className="mt-16 w-full border-t-[1.3px] border-white pt-3 text-center">
      <NavLink
        to="/"
        className="w-24 -translate-y-[2px] cursor-pointer text-2xl font-bold no-underline hover:text-white"
      >
        ayan.
      </NavLink>

      <ul className="mt-5 flex items-center justify-center gap-5 rounded-full px-6 leading-3 text-gray-txt no-underline">
        <NavLink
          to="/"
          className="cursor-pointer no-underline hover:text-white"
          activeclassname="active"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="cursor-pointer no-underline hover:text-white"
          activeclassname="active"
        >
          About
        </NavLink>
        <NavLink
          to="/works"
          className="cursor-pointer no-underline hover:text-white"
          activeclassname="active"
        >
          Works
        </NavLink>
        <NavLink
          to="/contact"
          className="cursor-pointer no-underline hover:text-white"
          activeclassname="active"
        >
          Contact
        </NavLink>
      </ul>
      <ul className="mt-5 flex items-center justify-center gap-4 rounded-full px-6 leading-3 text-white no-underline">
        <li
          onClick={() => window.open(variables.gmail)}
          className="flex cursor-pointer justify-center text-center"
        >
          <div className="cursor-pointer rounded-full bg-gray-light bg-opacity-[0.15] p-[0.5rem] text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black">
            <MdEmail className="text-xl" />
          </div>
        </li>
        <li
          onClick={() => window.open(variables.facebookURL, "_blank")}
          className="flex cursor-pointer justify-center text-center"
        >
          <div className="cursor-pointer rounded-full bg-gray-light bg-opacity-[0.15] p-[0.5rem] text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black">
            <FaFacebookF className="text-xl" />
          </div>
        </li>
        <li
          onClick={() => window.open(variables.phone)}
          className="flex cursor-pointer justify-center text-center"
        >
          <div className="cursor-pointer rounded-full bg-gray-light bg-opacity-[0.15] p-[0.5rem] text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black">
            <FaPhone className="text-xl" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
