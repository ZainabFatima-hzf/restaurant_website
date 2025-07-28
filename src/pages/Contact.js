import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      
      <div className="contact-info">
        <p><strong>Address:</strong> 123 Foodie Street, Lahore, Pakistan</p>
        <p><strong>Phone:</strong> (042) 123-4567</p>
        <p><strong>Email:</strong> contact@flavorhaven.com</p>
        <p><strong>Opening Hours:</strong> Mon-Sun: 10 AM - 11 PM</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
