import React from "react";
import { NavLink } from "react-router-dom";
import variables from "../variables/variables";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <div className="mb-16 mt-16 w-full border-t-[1.3px] border-white pt-3 text-center">
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
          className="cursor-pointer rounded-full bg-white p-1 text-sm text-black"
        >
          <EmailIcon />
        </li>
        <li
          onClick={() => window.open(variables.facebookURL, "_blank")}
          className="cursor-pointer rounded-full bg-white p-1 text-sm text-black"
        >
          <FacebookIcon />
        </li>
        <li
          onClick={() => window.open(variables.phone)}
          className="cursor-pointer rounded-full bg-white p-1 text-sm text-black"
        >
          <PhoneIcon />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
