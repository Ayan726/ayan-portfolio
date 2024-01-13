import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Batman from "../assets/Batman-Cartoon-PNG-Photos.png";
import share from "../assets/share.png";
import dashboard from "../assets/dashboard.png";
import resume from "../assets/resume.png";
import handshake from "../assets/handshake.png";
import { SiLeetcode } from "react-icons/si";
import { SiFiverr } from "react-icons/si";
import { SiUpwork } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import Marquee from "react-fast-marquee";
import variables from "../variables/variables";
import Reveal from "../components/Reveal";

const Home = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  return (
    <main className="relative min-h-[80vh] min-w-full bg-mybg-dark text-white">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
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

        <div className="flex h-72 w-full flex-col gap-3">
          <Reveal className="h-10">
            <div className="gradient relative h-10 w-full overflow-hidden rounded-full px-8 py-2">
              <Marquee className="whitespace-nowrap rounded-full text-sm uppercase text-gray-txt">
                <p>
                  I am available for{" "}
                  <span className="text-white">freelance work.&nbsp;</span>
                </p>
                <p>
                  I am available for{" "}
                  <span className="text-white">freelance work.&nbsp;</span>
                </p>
                <p>
                  I am available for{" "}
                  <span className="text-white">freelance work.&nbsp;</span>
                </p>
              </Marquee>
            </div>
          </Reveal>

          <Reveal classProp="flex-grow">
            <div className="gradient relative flex h-full w-full items-center justify-center rounded-2xl">
              <div className="z-10 h-24 w-44">
                <img
                  src={dashboard}
                  alt="project"
                  className="h-24 w-44 rounded-lg"
                />
              </div>

              <h1 className="absolute top-9 bg-gradient-to-b from-gray-700 to-white bg-clip-text text-5xl font-extrabold text-transparent">
                MY WORKS
              </h1>

              <img
                src={share}
                alt="redirect"
                className="absolute bottom-4 right-6 h-6 cursor-pointer"
                onClick={() => {
                  navigate("/works");
                }}
              />
              <p className="absolute bottom-10 left-6 text-sm text-gray-txt">
                Showcase
              </p>
              <h3 className="absolute bottom-3 left-6 text-lg font-semibold">
                Portfolios
              </h3>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_2fr_1fr]">
        <Reveal>
          <div className="gradient relative flex h-52 w-full items-start justify-center rounded-2xl p-6 pt-2">
            <img
              src={resume}
              alt="project"
              className="h-auto w-36 rounded-lg "
            />
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
      </div>
    </main>
  );
};

export default Home;
