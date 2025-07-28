import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Flavor Haven</h1>
          <p>Experience the taste of tradition and innovation</p>
          <a href="/menu" className="btn">View Menu</a>
        </div>
      </header>
      
      <section className="intro-section">
        <h2>Why Choose Us?</h2>
        <p>We offer fresh ingredients, delightful ambiance, and top-notch service that make every meal memorable.</p>
      </section>
      <section className="featured-section">
  <h2>Featured Dishes</h2>
  <div className="dish-grid">
    <div className="dish-card">
      <img src="https://recipesfiber.com/wp-content/uploads/2025/06/creamy-garlic-sauce-over-perfectly-grilled-steak-2025-06-24-154823.webp" width="50%" alt="Grilled Steak" />
      <h3>Grilled Steak</h3>
      <p>₨ 1,200</p>
    </div>
    <div className="dish-card">
      <img src="https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2015/03/Homemade-Stuffed-Crust-Pizza-H2-WP-WT-S.jpg?ssl=1" alt="StuffCrust Pizza" />
      <h3>Stuffed Crust Pizza</h3>
      <p>₨ 850</p>
    </div>
    <div className="dish-card">
      <img src="https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-tall1-44.webp" alt="Classic Burger" />
      <h3>Classic Burger</h3>
      <p>₨ 700</p>
    </div>
    <div className="dish-card">
      <img src="https://www.saltandlavender.com/wp-content/uploads/2020/10/sausage-penne-bake-11.jpg" alt="Creamy Pasta" />
      <h3>Creamy Pasta</h3>
      <p>₨ 950</p>
    </div>
  </div>
</section>
      <section className="testimonial-section">
        <h2>What Our Customers Say</h2>
        <blockquote>
          "The best dining experience I've ever had! The food was exquisite and the service impeccable."
          <footer>- Ahmad Aziz</footer>
        </blockquote>
        <blockquote>"Flavor Haven is my go-to place for family dinners. The ambiance is perfect and the dishes are always delicious."
          <footer>- Rabia Kiran</footer>
          </blockquote>
      </section>
      <section className="order-section">
  <h2>Order Online</h2>
  <p>Craving something delicious? Get your favorites delivered fast!</p>
  <a
    className="order-btn"
    href="https://wa.me/923001234567"  // Replace with real number if needed
    target="_blank"
    rel="noopener noreferrer"
  >
    Order Now on WhatsApp
  </a>
</section>
    </div>
    
  );
};

export default Home;
