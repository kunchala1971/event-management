import React, { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = ({ setAuth, setRole ,setUserData}) => {
  const navigateTo = useNavigate();
  const userNameRef = useRef("");
  const userPasswordRef = useRef("");
  const registerUserNameRef = useRef("");
  const registerEmailIdRef = useRef("");
  const userRegisterPasswordRef = useRef("");
  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `http://localhost:8088/api/user/login`,
        {
          userEmail: userNameRef.current.value,
          userPassword: userPasswordRef.current.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (result.status === 200 || result.status === 201) {
        setAuth(true);
        setRole(result.data.userRole);
        setUserData(result.data);
        navigateTo("/dashboard");
      } else {
        setAuth(false);
      }
    } catch (err) {
      alert("Please Enter Correct User Name and Password!");
      setAuth(true);
    }
  };
  const registerSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `http://localhost:8088/api/user`,
        {
          userName: registerUserNameRef.current.value,
          userEmail: registerEmailIdRef.current.value,
          userPassword: userRegisterPasswordRef.current.value,
          userRole: "user",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (result.status === 200 || result.status === 201) {
        alert("Registration Successfully Completed.");
      } else {
        alert("Please Enter Correct Details");
      }
    } catch (err) {
      alert("Please Enter Correct Details");
    }
  };

  return (
    <div className="containers bodys">
      <input type="checkbox" id="flip" />
      <div className="cover">
        <div className="front">
          <img src="images/frontImg.jpg" alt="" />
          <div className="text">
            <span className="text-1">
              Every new friend is a <br /> new adventure
            </span>
            <span className="text-2">Let's get connected</span>
          </div>
        </div>
        <div className="back">
          <img className="backImg" src="images/backImg.jpg" alt="" />
          <div className="text">
            <span className="text-1">
              Complete miles of journey <br /> with one step
            </span>
            <span className="text-2">Let's get started</span>
          </div>
        </div>
      </div>
      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
            <form onSubmit={loginSubmitHandler}>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    ref={userNameRef}
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    ref={userPasswordRef}
                    required
                  />
                </div>
                <div className="text">
                  <a href="#">Forgot password?</a>
                </div>
                <div className="button input-box">
                  <input type="submit" value="Sumbit" />
                </div>
                <div className="text sign-up-text">
                  Don't have an account? <label htmlFor="flip">Sigup now</label>
                </div>
                <div className="text sign-up-text">
                  <Link to="/">
                    <label htmlFor="flip">Home</label>
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="signup-form">
            <div className="title">Signup</div>
            <form onSubmit={registerSubmitHandler}>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    ref={registerUserNameRef}
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    ref={registerEmailIdRef}
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    ref={userRegisterPasswordRef}
                    required
                  />
                </div>
                <div className="button input-box">
                  <input type="submit" value="Sumbit" />
                </div>
                <div className="text sign-up-text">
                  Already have an account?{" "}
                  <label htmlFor="flip">Login now</label>
                </div>
                <div className="text sign-up-text">
                  <Link to="/">
                    <label htmlFor="flip">Home</label>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
