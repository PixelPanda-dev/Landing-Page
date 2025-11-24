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
            <li><a href="https://app.emoneyamz.com/" target="_blank" rel="noopener noreferrer">Login</a></li>
          </ul>
        </nav>
        <a href="https://whop.com/checkout/4WjgWEt7wqNHow8b7z-xYg9-CuuR-5TT4-eLZ2SipLUXZ1/" target="_blank" rel="noopener noreferrer">
          <button className="free-trial-button">FREE TRIAL</button>
        </a>
      </div>
    </header>
  );
}

export default Header;
