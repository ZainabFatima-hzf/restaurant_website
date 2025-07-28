import React from 'react';
import './Menu.css';

const menuItems = [
  {
    name: 'Pepperoni Pizza',
    price: '₨ 1950',
    description: 'Crispy crust topped with spicy pepperoni and mozzarella cheese.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHoML_RWrNhS3xbZNeWhpj9jjsyG7Ex-43aw&s',
  },
  {
    name: 'Fried Chicken',
    price: '₨ 750',
    description: 'Crispy golden fried chicken served with sauces.',
    image: 'https://i.ytimg.com/vi/0LJpff1jhmI/maxresdefault.jpg',
  },
  {
    name: 'Chicken Wings',
    price: '₨ 680',
    description: 'Spicy chicken wings tossed in our signature sauce.',
    image: 'https://www.thecookierookie.com/wp-content/uploads/2018/12/baked-chicken-wings-reshoot.jpg',
  },
  {
    name: 'Loaded Fries',
    price: '₨ 850',
    description: 'Crispy fries loaded with cheese, sauces, and toppings.',
    image: 'https://mastersofkitchen.com/wp-content/uploads/2025/06/Chicken-Loaded-Fries.webp',
  },
  {
    name: 'Smash Burger',
    price: '₨ 1050',
    description: 'Double smashed beef patties with cheese and pickles.',
    image: 'https://flavorado.com/wp-content/uploads/2021/09/Smash-burger-960x640.jpg',
  },
  {
    name: 'Flavor hevan Special Sandwich',
    price: '₨ 600',
    description: 'A delicious sandwich with grilled chicken, cheese, and our special sauce.',   
    image: 'https://allthehealthythings.com/wp-content/uploads/2024/12/Grown-Up-Grilled-Cheese-Sandwich-6-scaled.jpg',}
];


const Menu = () => {
  return (
    <div className="menu-container">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="menu-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
