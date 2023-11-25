import React from "react";
import Logo from "../../asserts/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}> About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}> Contact Us</Link>{" "}
          </li>
          <li>Cart</li>
          <button className="btn">Logout</button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
