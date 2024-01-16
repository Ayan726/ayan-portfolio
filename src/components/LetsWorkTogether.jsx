import React from "react";
import { FaShare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import handshake from "../assets/handshake.png";
import Reveal from "./framerMotionComponents/Reveal";

const LetsWorkTogether = () => {
  const navigate = useNavigate();
  return (
    <Reveal>
      <div className="gradient relative flex h-52 w-full items-center justify-between rounded-2xl px-10 py-5">
        <h1 className="text-3xl sm:text-4xl">
          Let's <br /> work <span className="text-blue-600">together.</span>
        </h1>
        <img src={handshake} alt="pic" className="h-24 w-auto" />
        <button
          className="absolute bottom-4 right-6 h-6 cursor-pointer rounded-full bg-gray-light bg-opacity-[0.15] p-[0.4rem] text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black"
          onClick={() => {
            navigate("/contact");
          }}
        >
          <FaShare />
        </button>
      </div>
    </Reveal>
  );
};

export default LetsWorkTogether;
