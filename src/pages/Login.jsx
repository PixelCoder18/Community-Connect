import React from "react";
import "../pages css/login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        
        <div className="login-left">
          <h1>Welcome Back!</h1>
          <p>A platform designed to bring people together, share ideas, and support each other.
Join our community, stay informed, and participate in meaningful conversations.</p>
        </div>

        <div className="login-right">
          <h2>Login</h2>

          <div className="input-group">
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-group">
            <input type="password" placeholder="Password" />
          </div>
            <div class="options">
            <label><input type="checkbox"/> Remember</label>
            <Link to ="#">Forgot password?</Link>
        </div>
          <button className="login-btn">Login</button>
        </div>

      </div>
    </div>
  );
};

export default Login;
