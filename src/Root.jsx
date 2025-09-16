import React from "react";
import Footer from "./Components/Footer";
import NavBar from "./Components/Header/NavBar";
import TopHeader from "./Components/Header/TopHeader";
import { Outlet } from "react-router-dom";
import MouseAnimation from "./Components/MouseAnimation";
import MidHeader from "./Components/Header/MidHeader";
import ScrollButton from "./Components/ScrollButton";

const Root = () => {
  return (
    <div className="bg-white">
      {/* <MouseAnimation /> */}
      <div className="sticky top-0 z-10">
        <TopHeader />
      </div>
      <MidHeader />
      <div className="sticky top-0 z-20">
        <NavBar />
      </div>
      <div className="w-11/12 mx-auto">
        <Outlet />
      </div>
      <Footer />
      <ScrollButton />
    </div>
  );
};

export default Root;
