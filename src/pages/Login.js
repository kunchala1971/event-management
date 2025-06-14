import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const userNameRef = useRef("");
  const userPasswordRef = useRef("");
  const registerUserNameRef = useRef("");
  const registerEmailIdRef = useRef("");
  const userRegisterPasswordRef = useRef("");
  const loginSubmitHandler = () => {
    alert(
      "User Name :" +
        userNameRef.current.value +
        "\nPassword:" +
        userPasswordRef.current.value
    );
  };
  const registerSubmitHandler = () => {
    alert(
      "User Name" +
        registerUserNameRef.current.value +
        "\nEmail ID: " +
        registerEmailIdRef.current.value +
        "\nPassword : " +
        userRegisterPasswordRef.current.value
    );
  };
  return (
    <div class="containers bodys">
      <input type="checkbox" id="flip" />
      <div class="cover">
        <div class="front">
          <img src="images/frontImg.jpg" alt="" />
          <div class="text">
            <span class="text-1">
              Every new friend is a <br /> new adventure
            </span>
            <span class="text-2">Let's get connected</span>
          </div>
        </div>
        <div class="back">
          <img class="backImg" src="images/backImg.jpg" alt="" />
          <div class="text">
            <span class="text-1">
              Complete miles of journey <br /> with one step
            </span>
            <span class="text-2">Let's get started</span>
          </div>
        </div>
      </div>
      <div class="forms">
        <div class="form-content">
          <div class="login-form">
            <div class="title">Login</div>
            <form onSubmit={loginSubmitHandler}>
              <div class="input-boxes">
                <div class="input-box">
                  <i class="fas fa-envelope"></i>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    ref={userNameRef}
                    required
                  />
                </div>
                <div class="input-box">
                  <i class="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    ref={userPasswordRef}
                    required
                  />
                </div>
                <div class="text">
                  <a href="#">Forgot password?</a>
                </div>
                <div class="button input-box">
                  <input type="submit" value="Sumbit" />
                </div>
                <div class="text sign-up-text">
                  Don't have an account? <label for="flip">Sigup now</label>
                </div>
                <div class="text sign-up-text">
                  <Link to="/">
                    <label for="flip">Home</label>
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div class="signup-form">
            <div class="title">Signup</div>
            <form onSubmit={registerSubmitHandler}>
              <div class="input-boxes">
                <div class="input-box">
                  <i class="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    ref={registerUserNameRef}
                    required
                  />
                </div>
                <div class="input-box">
                  <i class="fas fa-envelope"></i>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    ref={registerEmailIdRef}
                    required
                  />
                </div>
                <div class="input-box">
                  <i class="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    ref={userRegisterPasswordRef}
                    required
                  />
                </div>
                <div class="button input-box">
                  <input type="submit" value="Sumbit" />
                </div>
                <div class="text sign-up-text">
                  Already have an account? <label for="flip">Login now</label>
                </div>
                <div class="text sign-up-text">
                  <Link to="/">
                    <label for="flip">Home</label>
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
