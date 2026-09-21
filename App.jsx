import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Your one‑stop shop for beautiful plants</p>

          <button className="get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
};

export default App;
