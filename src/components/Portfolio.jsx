import React from "react";
import { FaShare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import dashboard from "../assets/dashboard.png";
import Reveal from "./framerMotionComponents/Reveal";

const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <Reveal classProp="flex-grow">
      <div className="gradient relative flex h-full w-full items-center justify-center rounded-2xl">
        <div className="z-10 h-24 w-44">
          <img src={dashboard} alt="project" className="h-24 w-44 rounded-lg" />
        </div>

        <h1 className="absolute top-9 bg-gradient-to-b from-gray-700 to-white bg-clip-text text-5xl font-extrabold text-transparent">
          MY WORKS
        </h1>

        <button
          className="absolute bottom-4 right-6 h-6 cursor-pointer rounded-full bg-gray-light bg-opacity-[0.15] p-[0.4rem] text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black"
          onClick={() => {
            navigate("/works");
          }}
        >
          <FaShare />
        </button>
        <p className="absolute bottom-10 left-6 text-sm text-gray-txt">
          Showcase
        </p>
        <h3 className="absolute bottom-3 left-6 text-lg font-semibold">
          Portfolios
        </h3>
      </div>
    </Reveal>
  );
};

export default Portfolio;
