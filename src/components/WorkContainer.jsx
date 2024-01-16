import React from "react";
import Reveal from "./framerMotionComponents/Reveal";
import { FaGlobe } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

const WorkContainer = ({ project }) => {
  return (
    <Reveal classProp="h-full">
      <div className="gradient relative flex h-full min-h-60 w-full flex-col gap-5 rounded-2xl p-6">
        <div
          className="h-36 overflow-hidden rounded-xl border border-gray-txt bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        <div className="mb-2">
          <h3 className="text-lg capitalize">{project.name}</h3>
          <p className="text-sm text-gray-txt">{project.summary}</p>
        </div>

        <div className="flex w-full flex-col lg:items-center justify-between lg:flex-row items-start gap-4">
          <div className="cursor-default rounded-full bg-gray-light bg-opacity-[0.15] px-3 py-1 text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black">
            <p className="text-sm">{project.tech}</p>
          </div>

          <div className="flex gap-2">
            <button
              className="cursor-pointer rounded-full bg-gray-light bg-opacity-[0.15] p-[0.4rem] text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black"
              onClick={() => {
                window.open(project.github, "_blank");
              }}
            >
              <PiGithubLogoFill className="text-xl" />
            </button>

            {project.site && (
              <button
                className="cursor-pointer rounded-full bg-gray-light bg-opacity-[0.15] p-[0.4rem] text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black"
                onClick={() => {
                  window.open(project.site, "_blank");
                }}
              >
                <FaGlobe className="text-xl" />
              </button>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default WorkContainer;
