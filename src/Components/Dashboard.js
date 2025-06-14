import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const Dashboard = ({ role }) => {
  return <div> {role}Dashboard
   <div style={{ marginTop: "29px" }}>
    <Sidebar/>
        <Outlet />
      </div>
  </div>;
};
