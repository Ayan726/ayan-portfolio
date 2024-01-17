import React from "react";
import Reveal from "./framerMotionComponents/Reveal";
import portfolio from "../assets/portfolio-pic.png";
import { variables } from "../variables/variables";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfileSidebar = () => {
  const navigate = useNavigate();

  return (
    <Reveal>
      <aside className="gradient flex flex-col items-center gap-8 rounded-3xl p-10 sm:min-h-[87dvh]">
        <img
          src={portfolio}
          alt="my pic"
          className="h-[15rem] w-[15rem] rounded-3xl sm:h-[18rem] sm:w-[18rem]"
        />

        <div className="flex flex-col">
          <h3 className="text-center text-xl font-semibold tracking-widest">
            Ayan Ghosh
          </h3>
          <span className="text-center text-sm text-gray-txt">
            @in.vincible._
          </span>

          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              onClick={() => window.open(variables.instagramURL)}
              className="cursor-pointer rounded-full bg-gray-light bg-opacity-[0.15] p-[0.4rem] text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black"
            >
              <FaInstagram className="text-xl" />
            </button>
            <button
              onClick={() => window.open(variables.facebookURL, "_blank")}
              className="cursor-pointer rounded-full bg-gray-light bg-opacity-[0.15] p-[0.4rem] text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black"
            >
              <FaFacebookF className="text-xl" />
            </button>
            <button
              onClick={() => window.open(variables.linkedInURL)}
              className="cursor-pointer rounded-full bg-gray-light bg-opacity-[0.15] p-[0.4rem] text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black"
            >
              <FaLinkedinIn className="text-xl" />
            </button>
          </div>

          <button
            onClick={() => {
              navigate("/contact");
            }}
            className="mt-7 h-10 w-60 cursor-pointer rounded-2xl bg-gray-light bg-opacity-20 px-3 py-1 backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black"
          >
            Contact me
          </button>
        </div>
      </aside>
    </Reveal>
  );
};

export default ProfileSidebar;
