import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import "./Dashboard.css";

const Dashboard = ({ role }) => {
  return (
    <div className="layout">
      <Sidebar userRole={role} />
      <div className="content-area">
        <TopBar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
