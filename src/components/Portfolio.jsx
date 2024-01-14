import React from "react";
import Reveal from "./framerMotionComponents/Reveal";
import dashboard from "../assets/dashboard.png";
import share from "../assets/share.png";
import { useNavigate } from "react-router-dom";

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

        <img
          src={share}
          alt="redirect"
          className="absolute bottom-4 right-6 h-6 cursor-pointer"
          onClick={() => {
            navigate("/works");
          }}
        />
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
