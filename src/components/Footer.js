import React from 'react';
import logo from '../assets/logo.png';
import newsletterPeopleImage from '../assets/newsletter.webp'; // Corrected: Using existing newsletter.webp image
import appStoreBadge from '../assets/app-store.webp'; // Placeholder: Please provide the correct path to your image
import googlePlayBadge from '../assets/google-play.webp'; // Placeholder: Please provide the correct path to your image
import chromeWebStoreBadge from '../assets/chrome-store.webp'; // Placeholder: Please provide the correct path to your image

// Removed: Social Media Icons imports as files were not found

function Footer() {
  return (
    <>
      {/* Newsletter Section */}
      <section className="newsletter-section-footer">
        <div className="newsletter-content">
          <div className="newsletter-text-and-form">
            <h2>Get Weekly Insights, Arbitrage Advice and Amazon Selling Top Tips – Subscribe to Our Newsletter Today!</h2>
            <form className="newsletter-form">
              <div className="name-inputs">
                <input type="text" placeholder="First" className="form-input" />
                <input type="text" placeholder="Last" className="form-input" />
              </div>
              <input type="email" placeholder="Enter your email address..." required className="form-input email-input" />
              <button type="submit" className="submit-button">SUBMIT</button>
            </form>
          </div>
          <div className="newsletter-image-container">
            <img src={newsletterPeopleImage} alt="People using phones" className="newsletter-people-image" />
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="footer-container">
        <div className="footer-top-content">
          <div className="footer-logo-section">
            <img src={logo} alt="SellerAmp Logo" className="footer-selleramp-logo" />
          </div>

          <div className="footer-links-group">
            <h3>New to eSouct?</h3>
            <ul>
              <li><a href="#">About eSouct</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">News & Updates</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h3>Login</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy, Legal, Terms</a></li>
              <li><a href="#">Become an Affiliate</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>

          <div className="footer-app-social">
            <div className="app-badges">
              <a href="#"><img src={appStoreBadge} alt="Available on the App Store" /></a>
              <a href="#"><img src={googlePlayBadge} alt="GET IT ON Google Play" /></a>
              <a href="#"><img src={chromeWebStoreBadge} alt="Available in the Chrome Web Store" /></a>
            </div>
            <div className="social-icons">
              {/* Removed: Social Media Icons as files were not found */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2025 eSouct Ltd | Registered in England & Wales No. 12239960 | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
