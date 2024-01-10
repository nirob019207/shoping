// Navbar.js
import React from 'react';
import logo from '../../images/logo.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartProduct = useSelector((state) => state.shopping.cartProduct);

  // Calculate the total quantity by summing up the quantities of all items in the cart
  const totalQuantity = cartProduct.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a href="index.html">
            <img src={logo} alt="LWS" className="max-w-[140px]" />
          </a>

          <div className="flex gap-4">
            <a href="#home" className="navHome" id="lws-home">
              Home
            </a>
            <Link to="/cart" className="navCart" id="lws-cart">
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span className="ml-1">{totalQuantity}</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
