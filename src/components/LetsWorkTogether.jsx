import React from "react";
import Reveal from "./framerMotionComponents/Reveal";
import handshake from "../assets/handshake.png";
import share from "../assets/share.png";
import { useNavigate } from "react-router-dom";

const LetsWorkTogether = () => {
  const navigate = useNavigate();
  return (
    <Reveal>
      <div className="gradient relative flex h-52 w-full items-center justify-between rounded-2xl px-10 py-5">
        <h1 className="text-3xl sm:text-4xl">
          Let's <br /> work <span className="text-blue-600">together.</span>
        </h1>
        <img src={handshake} alt="pic" className="h-24 w-auto" />
        <img
          src={share}
          alt="redirect"
          className="absolute bottom-4 right-6 h-6 cursor-pointer"
          onClick={() => {
            navigate("/contact");
          }}
        />
      </div>
    </Reveal>
  );
};

export default LetsWorkTogether;
