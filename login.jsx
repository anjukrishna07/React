import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h2>Login Form</h2>
        </div>
        <form>
          <div className="input-container">
            <span className="icon">&#128100;</span>
            <input
              type="text"
              placeholder="Email or Phone"
              className="login-input"
            />
          </div>
          <div className="input-container">
            <span className="icon">&#128274;</span>
            <input
              type="password"
              placeholder="Password"
              className="login-input"
            />
          </div>
          <a href="#" className="forgot-password">Forgot password?</a>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-section">
          Not a member? <a href="#" className="signup-link">Signup now</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
