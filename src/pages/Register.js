import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <body className="bg-light">
      <div className="container form-container">
        <div className="row g-0">
          <div className="col-md-6 p-5">
            <h2 className="mb-4">Sign up</h2>
            <form>
              <div className="mb-3 form-group">
                <i className="fas fa-user form-control-icon"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3 form-group">
                <i className="fas fa-envelope form-control-icon"></i>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-3 form-group">
                <i className="fas fa-lock form-control-icon"></i>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3 form-group">
                <i className="fas fa-lock form-control-icon"></i>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Repeat your password"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="termsCheck"
                />
                <label className="form-check-label" for="termsCheck">
                  I agree all statements in <a href="#">Terms of service</a>
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Register
              </button>
            </form>

            <div className="mt-4">
              <a href="login.html" className="text-decoration-underline">
                I am already member
              </a>
            </div>
          </div>
          <div className="col-md-6 image-section d-none d-md-block"></div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    
  );
};

export default Register;
