import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TopBar.css";

const TopBar = ({ setAuth, userdata }) => {
  const navigateTo = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const logOutHandler = () => {
    setAuth(false);
    navigateTo("/");
  };
  return (
    <div className="topbar">
      <div className="topbar-left">
        <input type="text" className="search-input" placeholder="Search..." />
      </div>
      <div className="topbar-right">
        <div className="profile-container">
          <button
            className="profile-button"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            👤 {userdata.userName}
          </button>
          {showProfileMenu && (
            <div className="profile-dropdown">
              <div className="dropdown-item">Profile</div>
              {/* <div className="dropdown-item">Settings</div> */}
              <div className="dropdown-item" onClick={logOutHandler}>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
