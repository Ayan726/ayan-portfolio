import React from "react";
import Reveal from "./framerMotionComponents/Reveal";
import resume from "../assets/resume.png";
import share from "../assets/share.png";
import variables from "../variables/variables";

const Resume = () => {
  return (
    <Reveal>
      <div className="gradient relative flex h-52 w-full items-start justify-center rounded-2xl p-6 pt-2">
        <img src={resume} alt="project" className="h-auto w-36 rounded-lg " />
        <img
          src={share}
          alt="redirect"
          className="absolute bottom-4 right-6 h-6 cursor-pointer"
          onClick={() => {
            window.open(variables.resumeURL, "_blank");
          }}
        />
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
