import React from 'react';
import { Link } from 'react-router-dom'; // New: Import Link for navigation

function Login() {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <p>Please sign in to your account.</p>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Email or Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your email or username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="signup-text">Don't have an account? <Link to="/signup">Sign Up</Link></p> {/* New: Sign Up link */}
    </div>
  );
}

export default Login;
