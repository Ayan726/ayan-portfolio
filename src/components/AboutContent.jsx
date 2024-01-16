import React from "react";
import SlideReveal from "./framerMotionComponents/SlideReveal";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { BiLogoCPlusPlus } from "react-icons/bi";

const AboutContent = () => {
  return (
    <div className="flex flex-1 flex-col gap-14">
      <div className="flex flex-col gap-7">
        <SlideReveal>
          <h2 className="text-xl uppercase">About me</h2>
        </SlideReveal>
        <SlideReveal delay="0.3">
          <p className="text-gray-light">
            I&apos;m a MERN full-stack developer who turns ideas into seamless
            digital experiences. With a passion for clean code and user-centric
            design, I craft applications that stand out. Let's collaborate to
            bring your project to life and make an impact in the digital space.
            Ready to innovate together? 🚀
            <br />
          </p>
        </SlideReveal>
        <SlideReveal delay="0.4">
          <p className="text-gray-light">
            And always remember "I am batman!!" 🦇
          </p>
        </SlideReveal>
      </div>

      <div className="flex flex-col gap-7">
        <SlideReveal>
          <h2 className="text-xl uppercase">Education</h2>
        </SlideReveal>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <SlideReveal delay="0.1">
              <h2 className="text-gray-txt">2017 - 2018</h2>
            </SlideReveal>
            <SlideReveal delay="0.2">
              <h2 className="text-blue-600">Secondary Education</h2>
            </SlideReveal>
            <SlideReveal delay="0.3">
              <h3 className="text-[0.8rem] text-sm text-gray-txt">
                Gyandeep Vidyapith
              </h3>
            </SlideReveal>
            <SlideReveal delay="0.4">
              <p className="mt-1 text-gray-light">
                Completed my secondary education with 93.70&#37; final score.
              </p>
            </SlideReveal>
          </div>
          <div className="flex flex-col">
            <SlideReveal delay="0.1">
              <h2 className="text-gray-txt">2018 - 2020</h2>
            </SlideReveal>
            <SlideReveal delay="0.2">
              <h2 className="text-blue-600">Higher Secondary Education</h2>
            </SlideReveal>
            <SlideReveal delay="0.3">
              <h3 className="text-[0.8rem] text-sm text-gray-txt">
                Egra J.L High School
              </h3>
            </SlideReveal>
            <SlideReveal delay="0.4">
              <p className="mt-1 text-gray-light">
                Completed my higher secondary education with 94.60&#37; final
                score.
              </p>
            </SlideReveal>
          </div>
          <div className="flex flex-col">
            <SlideReveal delay="0.1">
              <h2 className="text-gray-txt">2020 - 2024</h2>
            </SlideReveal>
            <SlideReveal delay="0.2">
              <h2 className="text-blue-600">
                Bachelors of Technology in Electronics & Communication
              </h2>
            </SlideReveal>
            <SlideReveal delay="0.3">
              <h3 className="text-[0.8rem] text-sm text-gray-txt">
                Institute of Engineering & Management
              </h3>
            </SlideReveal>
            <SlideReveal delay="0.4">
              <p className="mt-1 text-gray-light">
                Final year student with 9.1 CGPA.
              </p>
            </SlideReveal>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <SlideReveal>
          <h2 className="text-xl uppercase">Skills</h2>
        </SlideReveal>
        <div className="grid grid-cols-2 gap-5">
          <SlideReveal delay="0.1">
            <div className="flex items-center gap-2">
              <FaHtml5 className="text-2xl text-orange-700" />
              <span className="text-gray-light">Html</span>
            </div>
          </SlideReveal>
          <SlideReveal delay="0.2">
            <div className="flex items-center gap-2">
              <FaCss3Alt className="text-2xl text-blue-600" />
              <span className="text-gray-light">Css</span>
            </div>
          </SlideReveal>
          <SlideReveal delay="0.2">
            <div className="flex items-center gap-2">
              <IoLogoJavascript className="text-2xl text-yellow-400" />
              <span className="text-gray-light">Javascript</span>
            </div>
          </SlideReveal>
          <SlideReveal delay="0.3">
            <div className="flex items-center gap-2">
              <SiTypescript className="text-2xl text-blue-500" />
              <span className="text-gray-light">Typescript</span>
            </div>
          </SlideReveal>
          <SlideReveal delay="0.3">
            <div className="flex items-center gap-2">
              <SiTailwindcss className="text-2xl text-blue-400" />
              <span className="text-gray-light">Tailwind Css</span>
            </div>
          </SlideReveal>
          <SlideReveal delay="0.4">
            <div className="flex items-center gap-2">
              <FaBootstrap className="text-2xl text-purple-600" />
              <span className="text-gray-light">Bootstrap</span>
            </div>
          </SlideReveal>
          <SlideReveal delay="0.4">
            <div className="flex items-center gap-2">
              <FaReact className="text-2xl text-blue-300" />
              <span className="text-gray-light">React Js</span>
            </div>
          </SlideReveal>
          <SlideReveal delay="0.5">
            <div className="flex items-center gap-2">
              <TbBrandNextjs className="text-2xl" />
              <span className="text-gray-light">Next Js</span>
            </div>
          </SlideReveal>
          <SlideReveal delay="0.5">
            <div className="flex items-center gap-2">
              <FaNodeJs className="text-2xl text-green-600" />
              <span className="text-gray-light">Node Js</span>
            </div>
          </SlideReveal>
          <SlideReveal delay="0.6">
            <div className="flex items-center gap-2">
              <SiExpress className="text-2xl" />
              <span className="text-gray-light">Express Js</span>
            </div>
          </SlideReveal>
          <SlideReveal delay="0.6">
            <div className="flex items-center gap-2">
              <SiMongodb className="text-2xl text-green-500" />
              <span className="text-gray-light">MongoDB</span>
            </div>
          </SlideReveal>
          <SlideReveal delay="0.7">
            <div className="flex items-center gap-2">
              <GrMysql className="text-2xl text-blue-600" />
              <span className="text-gray-light">MySql</span>
            </div>
          </SlideReveal>
          <SlideReveal delay="0.7">
            <div className="flex items-center gap-2">
              <BiLogoCPlusPlus className="text-2xl text-blue-500" />
              <span className="text-gray-light">C++</span>
            </div>
          </SlideReveal>
          <SlideReveal delay="0.8">
            <div className="flex items-center gap-2">
              <FaPython className="text-2xl text-yellow-400" />
              <span className="text-gray-light">Python</span>
            </div>
          </SlideReveal>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
