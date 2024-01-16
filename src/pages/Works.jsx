import React, { Fragment } from "react";
import WorkContainer from "../components/WorkContainer";
import { projects } from "../variables/variables";
import Reveal from "../components/framerMotionComponents/Reveal";

const Works = () => {
  return (
    <div className="relative flex min-h-[80vh] min-w-full gap-5 text-white">
      <div className="hidden w-[50%] grid-cols-1 gap-5 md:grid">
        {projects.map((project, ind) => {
          if (project.id < 2)
            return (
              <WorkContainer key={`WorkContainer-${ind}`} project={project} />
            );
        })}
      </div>
      <div className="flex w-full flex-col items-center justify-start gap-5">
        <Reveal>
          <h1 className="flex items-center justify-center gap-2 pb-7 text-3xl font-bold uppercase tracking-wide sm:tracking-widest md:text-4xl">
            <span className="text-gray-txt">{"<"}</span> All Projects
            <span className="text-gray-txt">{"/>"}</span>
          </h1>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((project, ind) => {
            if (project.id >= 2)
              return (
                <div className="hidden md:block">
                  <WorkContainer
                    key={`WorkContainer-${ind}`}
                    project={project}
                  />
                </div>
              );
          })}
          {projects.map((project, ind) => (
            <div className="block md:hidden">
              <WorkContainer key={`WorkContainer-${ind}`} project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
