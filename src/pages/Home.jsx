import React from "react";


import LetsWorkTogether from "../components/LetsWorkTogether";
import MarqueeComponent from "../components/MarqueeComponent";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import WhoAmI from "../components/WhoAmI";

import Profiles from "../components/Profiles";

const Home = () => {
  return (
    <main className="relative min-h-[80vh] min-w-full bg-mybg-dark text-white">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <WhoAmI />
        <div className="flex h-72 w-full flex-col gap-3">
          <MarqueeComponent />
          <Portfolio />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_2fr_1fr]">
        <Resume />
        <LetsWorkTogether />
        <Profiles />
      </div>
    </main>
  );
};

export default Home;
