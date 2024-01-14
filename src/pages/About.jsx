import React from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import AboutContent from "../components/AboutContent";
import Reveal from "../components/framerMotionComponents/Reveal";

const About = () => {
  return (
    <div className="relative flex min-h-[70vh] flex-col items-start gap-7 lg:flex-row lg:gap-14">
      <div className="w-full lg:sticky lg:top-0 lg:w-1/3">
        <ProfileSidebar />
        <Reveal>
          <hr className="mt-7 text-white lg:hidden" />
        </Reveal>
      </div>
      <AboutContent />
    </div>
  );
};

export default About;
