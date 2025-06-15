import React, { useState } from "react";
import "./TopBar.css";

const TopBar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className="topbar">
      <div className="topbar-left">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
        />
      </div>
      <div className="topbar-right">
        <div className="profile-container">
          <button
            className="profile-button"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            👤
          </button>
          {showProfileMenu && (
            <div className="profile-dropdown">
              <div className="dropdown-item">Profile</div>
              <div className="dropdown-item">Settings</div>
              <div className="dropdown-item">Logout</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
