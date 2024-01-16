import React from "react";
import { FaShare } from "react-icons/fa";
import resume from "../assets/resume.png";
import { variables } from "../variables/variables";
import Reveal from "./framerMotionComponents/Reveal";

const Resume = () => {
  return (
    <Reveal>
      <div className="gradient relative flex h-52 w-full items-start justify-center rounded-2xl p-6 pt-2">
        <img src={resume} alt="project" className="h-auto w-36 rounded-lg " />
        <button
          className="absolute bottom-4 right-6 h-6 cursor-pointer rounded-full bg-gray-light bg-opacity-[0.15] p-[0.4rem] text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black"
          onClick={() => {
            window.open(variables.resumeURL, "_blank");
          }}
        >
          <FaShare />
        </button>

        <p className="absolute bottom-10 left-6 text-sm text-gray-txt">
          My resume
        </p>
        <h3 className="absolute bottom-3 left-6 text-lg font-semibold">
          Check out
        </h3>
      </div>
    </Reveal>
  );
};

export default Resume;
