import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <p>Create your new account.</p>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email address" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Create a password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <p className="login-text">Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default SignUp;

