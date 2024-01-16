import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(true);

  return (
    <header className="z-20 md:mb-12 sm:mb-8 mb-6 h-24 text-white">
      <nav className="flex h-full w-full items-center justify-between">
        <NavLink
          to="/"
          className="-translate-y-[2px] cursor-pointer text-2xl font-bold no-underline hover:text-white"
        >
          ayan.
        </NavLink>
        <ul
          className={`gradient fixed ${
            hidden ? "-right-96" : "right-0"
          }  top-0 z-30 flex h-[100dvh] w-1/2 flex-col items-center justify-center gap-10 rounded-md p-6 text-xl leading-3 text-gray-txt no-underline transition-all duration-700 md:relative md:right-0 md:h-10 md:w-fit md:flex-row md:gap-5 md:rounded-full md:py-0 md:text-base`}
        >
          <IoClose
            className="absolute right-3 top-3 cursor-pointer text-3xl md:hidden"
            onClick={() => setHidden((prev) => !prev)}
          />

          <NavLink
            onClick={() => setHidden(true)}
            to="/"
            className="cursor-pointer no-underline hover:text-white"
            activeclassname="active"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setHidden(true)}
            to="/about"
            className="cursor-pointer no-underline hover:text-white"
            activeclassname="active"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setHidden(true)}
            to="/works"
            className="cursor-pointer no-underline hover:text-white"
            activeclassname="active"
          >
            Works
          </NavLink>
          <NavLink
            onClick={() => setHidden(true)}
            to="/contact"
            className="cursor-pointer no-underline hover:text-white"
            activeclassname="active"
          >
            Contact
          </NavLink>
        </ul>
        <div className="flex items-center justify-center gap-8">
          <button onClick={() => navigate("/contact")} className="btn">
            Let's Talk
          </button>
          <FaHamburger
            onClick={() => setHidden((prev) => !prev)}
            className="cursor-pointer text-2xl md:hidden"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
