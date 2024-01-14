import React from "react";
import Reveal from "./framerMotionComponents/Reveal";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
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
  );
};

export default MarqueeComponent;
