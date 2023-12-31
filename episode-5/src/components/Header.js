import React from "react";
import Logo from "../../asserts/images/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="btn">Logout</button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
