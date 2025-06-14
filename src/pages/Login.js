import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <body className="bg-light">
      <div className="container form-container">
        <div className="row g-0">
          <div className="col-md-6 image-section d-none d-md-block"></div>
          <div className="col-md-6 p-5">
            <h2 className="mb-4">Sign In</h2>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberCheck"
                />
                <label className="form-check-label" for="rememberCheck">
                  Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Log in
              </button>
            </form>

            <div className="mt-4">
              <a href="signup.html" className="text-decoration-underline">
                Create an account
              </a>
            </div>

            <p className="mt-3 mb-2">Or login with</p>
            <div className="social-icons">
              <a href="#" className="facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="google">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </body>
  );
};

export default Login;
