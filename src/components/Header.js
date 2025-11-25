import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Corrected import path for the logo

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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
        <nav className={`navbar-links ${isOpen ? 'open' : ''}`}> {/* Conditionally apply 'open' class */}
          <ul>
            <li><Link to="/features" onClick={handleToggle}>Features</Link></li>
            <li><Link to="/pricing" onClick={handleToggle}>Pricing</Link></li>
            <li><Link to="/resources" onClick={handleToggle}>Resources</Link></li>
            <li><a href="https://app.emoneyamz.com/" target="_blank" rel="noopener noreferrer" onClick={handleToggle}>Login</a></li>
          </ul>
        </nav>
        
          <a href="https://whop.com/checkout/4WjgWEt7wqNHow8b7z-xYg9-CuuR-5TT4-eLZ2SipLUXZ1/" target="_blank" rel="noopener noreferrer">
            <button className="free-trial-button">FREE TRIAL</button>
          </a>
        
        <div className="hamburger-menu-icon" onClick={handleToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {isOpen && <div className="nav-overlay" onClick={handleToggle}>
        <nav className="mobile-navbar-links">
          <ul className="mobile-navbar-links-list">
            <li><Link to="/features" onClick={handleToggle}>Features</Link></li>
            <li><Link to="/pricing" onClick={handleToggle}>Pricing</Link></li>
            <li><Link to="/resources" onClick={handleToggle}>Resources</Link></li>
            <li><a href="https://app.emoneyamz.com/" target="_blank" rel="noopener noreferrer" onClick={handleToggle}>Login</a></li>
          </ul>
        </nav>

        
        </div>} {/* Overlay for mobile menu */}
    </header>
  );
}

export default Header;
