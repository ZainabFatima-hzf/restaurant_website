import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Menu from './pages/Menu'; 
import About from './pages/About'; 
// Menu, Contact, About to be added later

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        { <Route path="/about" element={<About />} /> }
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
