import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { Outlet } from "react-router-dom";
import Slider from "./Slider";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div style={{marginTop:"29px"}}>
<Outlet />
      </div>
      
    </div>
  );
};

export default Layout;
