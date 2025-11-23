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
          </ul>
          <button className="pricing-button">Choose Starter</button>
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
          <button className="pricing-button">Choose Pro</button>
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
          <button className="pricing-button">Choose Premium</button>
        </div>
      </div>
      <p>Need more? Contact us for enterprise solutions.</p>
    </div>
  );
}

export default Pricing;
