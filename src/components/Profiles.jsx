import React from "react";
import Reveal from "../components/framerMotionComponents/Reveal";
import { variables } from "../variables/variables";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import { SiFiverr, SiLeetcode, SiUpwork } from "react-icons/si";

const Profiles = () => {
  return (
    <Reveal>
      <div className="gradient relative grid h-52 w-full grid-cols-3 grid-rows-2 place-content-center gap-2 rounded-2xl px-6 pb-14 pt-6">
        <h3 className="absolute bottom-3 left-6 text-lg font-semibold">
          Profiles
        </h3>
        <p className="absolute bottom-10 left-6 text-sm text-gray-txt">
          Stay with me
        </p>
        <div
          onClick={() => window.open(variables.linkedInURL, "_blank")}
          className="flex cursor-pointer justify-center text-center"
        >
          <div>
            <button className="cursor-pointer rounded-full bg-gray-light bg-opacity-[0.15] p-[0.4rem] text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black">
              <FaLinkedinIn className="text-2xl" />
            </button>
          </div>
        </div>
        <div
          onClick={() => window.open(variables.instagramURL, "_blank")}
          className="flex cursor-pointer justify-center text-center"
        >
          <div>
            <button className="cursor-pointer rounded-full bg-gray-light bg-opacity-[0.15] p-[0.4rem] text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black">
              <FaInstagram className="text-2xl" />
            </button>
          </div>
        </div>
        <div
          onClick={() => window.open(variables.githubURL, "_blank")}
          className="flex cursor-pointer justify-center text-center"
        >
          <div>
            <button className="cursor-pointer rounded-full bg-gray-light bg-opacity-[0.15] p-[0.4rem] text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black">
              <PiGithubLogoFill className="text-2xl" />
            </button>
          </div>
        </div>
        <div
          onClick={() => window.open(variables.leetcodeURL, "_blank")}
          className="flex cursor-pointer justify-center text-center"
        >
          <div>
            <button className="cursor-pointer rounded-full bg-gray-light bg-opacity-[0.15] p-[0.4rem] text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black">
              <SiLeetcode className="text-2xl" />
            </button>
          </div>
        </div>
        <div
          onClick={() => window.open(variables.fiverrURL, "_blank")}
          className="flex cursor-pointer justify-center text-center"
        >
          <div>
            <button className="cursor-pointer rounded-full bg-gray-light bg-opacity-[0.15] p-[0.4rem] text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black">
              <SiFiverr className="text-2xl" />
            </button>
          </div>
        </div>
        <div
          onClick={() => window.open(variables.upworkURL, "_blank")}
          className="flex cursor-pointer justify-center text-center"
        >
          <div>
            <button className="cursor-pointer rounded-full bg-gray-light bg-opacity-[0.15] p-[0.4rem] text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black">
              <SiUpwork className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Profiles;
