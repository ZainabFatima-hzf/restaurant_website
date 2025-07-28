import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p className="about-intro">
        At <strong>Flavor Haven</strong>, we’re passionate about crafting delicious, high-quality meals that bring people together.
        Whether you're here for a casual dinner, a celebration, or just to satisfy a craving — you're family.
      </p>

      <div className="about-section">
        <div className="about-text">
          <h3>Our Story</h3>
          <p>
            Founded in 2022, Flavor Haven was born from a love for comfort food made with care. 
            What started as a small family eatery has grown into a well-loved destination for foodies across Lahore.
          </p>

          <h3>What We Offer</h3>
          <p>
            We specialize in pizza, burgers, wings, and loaded fries — all made fresh with the best ingredients. 
            Our warm ambiance and friendly staff ensure a memorable dining experience.
          </p>
        </div>

        <div className="about-image">
          <img src="https://www.robertsdentalgroup.com/wp-content/uploads/2024/12/team-24.jpg" alt="Our Team" width="60%" />
        </div>
      </div>
    </div>
  );
};

export default About;
