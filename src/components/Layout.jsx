import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative font-poppins text-white">
      <Header/>
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
