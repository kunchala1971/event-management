import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-custom navbar-fixed-top"
        role="navigation"
      >
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggle"
              type="button"
              data-toggle="collapse"
              data-target="#custom-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" style={{"color":"white"}} >
              <Link to="/">Titan</Link>
              
            </a>
          </div>
          <div className="collapse navbar-collapse" id="custom-collapse">
            <ul className="nav navbar-nav navbar-right">
             <li className="dropdown"><Link className="dropdown" to="/">HOME</Link></li> 
              <li className="dropdown"><Link className="dropdown" to="/about">ABOUT</Link></li> 
              <li className="dropdown"><Link className="dropdown" to="/services">SERVICES</Link></li> 
              <li className="dropdown"><Link className="dropdown" to="/gallary">Gallery</Link></li> 
              <li className="dropdown"><Link className="dropdown" to="/contactus">Contact Us</Link></li> 
              <li className="dropdown"><Link className="dropdown" to="/login">LOGIN</Link></li> 
            </ul>
          </div>
        </div>
      </nav>
    
    </>
  );
};

export default Navbar;
