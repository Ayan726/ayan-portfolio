import React, { useState } from "react";
import Batman from "../assets/Batman-Cartoon-PNG-Photos.png";
import { useNavigate } from "react-router-dom";
import Reveal from "./framerMotionComponents/Reveal";
import share from "../assets/share.png";

const WhoAmI = () => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  return (
    <Reveal>
      <div
        onMouseLeave={() => setHover(false)}
        onMouseEnter={() => setHover(true)}
        className="gradient relative flex h-full w-full flex-col items-center justify-center gap-5 rounded-2xl px-14 pb-14 pt-6 sm:h-72 sm:flex-row sm:gap-10 sm:pb-10 lg:justify-between lg:gap-0"
      >
        <div className="batman-gradient rounded-br-2xl rounded-tl-2xl bg-gray-light px-1 py-3">
          <img src={Batman} alt="My pic" className="h-32 w-auto" />
        </div>

        <div className="flex h-28 w-44 flex-col justify-center gap-2">
          <h3 className={`${!hover && "hidden"} text-gray-txt`}>
            A WEB DEVELOPER
          </h3>
          {hover ? (
            <h2 className="text-2xl sm:text-3xl">Ayan Ghosh.</h2>
          ) : (
            <h2 className="text-2xl sm:text-3xl">I am vengeance.</h2>
          )}
          {hover ? (
            <p className="text-[0.8rem] text-gray-txt">
              I am a MERN full-stack developer based on India.
            </p>
          ) : (
            <p className="text-[0.8rem] text-gray-txt">
              Just kidding, hover on me.
            </p>
          )}
        </div>

        <img
          src={share}
          alt="redirect"
          className="absolute bottom-4 right-6 h-6 cursor-pointer"
          onClick={() => {
            navigate("/about");
          }}
        />

        <h3 className="absolute bottom-3 left-6 text-lg font-semibold">
          Who am I ?
        </h3>
      </div>
    </Reveal>
  );
};

export default WhoAmI;
