import React from 'react';

const TestimonialCard = ({ image, quote, name, company }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-image-container">
        <img src={image} alt={name} className="testimonial-image" />
      </div>
      <p>"{quote}"</p>
      <h4>{name}</h4>
      <span>{company}</span>
    </div>
  );
};

export default TestimonialCard;
