import React from "react";
import Reveal from "../components/framerMotionComponents/Reveal";
import variables from "../variables/variables";
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
          <FaLinkedinIn className="text-3xl" />
        </div>
        <div
          onClick={() => window.open(variables.instagramURL, "_blank")}
          className="flex cursor-pointer justify-center text-center"
        >
          <FaInstagram className="text-3xl" />
        </div>
        <div
          onClick={() => window.open(variables.githubURL, "_blank")}
          className="flex cursor-pointer justify-center text-center"
        >
          <PiGithubLogoFill className="text-3xl" />
        </div>
        <div
          onClick={() => window.open(variables.leetcodeURL, "_blank")}
          className="flex cursor-pointer justify-center text-center"
        >
          <SiLeetcode className="text-3xl" />
        </div>
        <div
          onClick={() => window.open(variables.fiverrURL, "_blank")}
          className="flex cursor-pointer justify-center text-center"
        >
          <SiFiverr className="text-3xl" />
        </div>
        <div
          onClick={() => window.open(variables.upworkURL, "_blank")}
          className="flex cursor-pointer justify-center text-center"
        >
          <SiUpwork className="text-3xl" />
        </div>
      </div>
    </Reveal>
  );
};

export default Profiles;
