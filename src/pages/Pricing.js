import React from 'react';

function Pricing() {
  return (
    <div className="pricing-container">
      <h1>Simple, Transparent Pricing</h1>
      <p>Choose the plan that best fits your Amazon selling needs. All plans include access to the mobile app, Chrome extension, and web app.</p>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h2>Starter</h2>
          <p className="price">$19.95<span>/month</span></p>
          <ul>
            <li>Basic Sourcing Analysis</li>
            <li>Limited History</li>
            <li>Single User</li>
            <li>For Trail</li>
          </ul>
          <a href="https://whop.com/checkout/4WjgWEt7wqNHow8b7z-xYg9-CuuR-5TT4-eLZ2SipLUXZ1/" target="_blank" rel="noopener noreferrer">
            <button className="pricing-button">Try for Trial</button>
          </a>
        </div>
        <div className="pricing-card featured">
          <h2>Pro</h2>
          <p className="price">$29.95<span>/month</span></p>
          <ul>
            <li>Advanced Sourcing Analysis</li>
            <li>Extended History</li>
            <li>Multi-User Access</li>
            <li>Priority Support</li>
          </ul>
          <a href="https://whop.com/checkout/4WjgWEt7wqNHow8b7z-xYg9-CuuR-5TT4-eLZ2SipLUXZ1/" target="_blank" rel="noopener noreferrer">
            <button className="pricing-button">Choose Pro</button>
          </a>
        </div>
        <div className="pricing-card">
          <h2>Premium</h2>
          <p className="price">$49.95<span>/month</span></p>
          <ul>
            <li>All Pro Features</li>
            <li>Unlimited History</li>
            <li>Dedicated Account Manager</li>
            <li>API Access</li>
          </ul>
          <a href="https://whop.com/checkout/4WjgWEt7wqNHow8b7z-xYg9-CuuR-5TT4-eLZ2SipLUXZ1/" target="_blank" rel="noopener noreferrer">
            <button className="pricing-button">Choose Premium</button>
          </a>
        </div>
      </div>
      <p>Need more? Contact us for enterprise solutions.</p>
    </div>
  );
}

export default Pricing;
