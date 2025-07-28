import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Flavor Haven. All rights reserved.</p>
        <p>123 Foodie Street, Lahore, Pakistan | Phone: (042) 123-4567</p>
      </div>
    </footer>
  );
};

export default Footer;
