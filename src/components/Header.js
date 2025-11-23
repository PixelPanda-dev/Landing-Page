import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Corrected import path for the logo

function Header() {
  return (
    <header className="main-header">
      <div className="top-announcement-bar">
        <p>See All of SellerAmp's Latest News & Updates <a href="#">Here</a></p>
        
      </div>
      <div className="main-navbar">
        <div className="navbar-logo">
          <Link to="/"> {/* Logo now links to home page */}
            <img src={logo} alt="eSouct Logo" className="selleramp-logo"/>
          </Link>
        </div>
        <nav className="navbar-links">
          <ul>
            <li><Link to="/features">Features</Link></li> {/* Re-added Features link */}
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <button className="free-trial-button">FREE TRIAL</button>
      </div>
    </header>
  );
}

export default Header;
