import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./asserts/images/logo.png";
import { resData } from "./data";
import starIcon from "./asserts/images/icons-star.png";

const HeaderComponent = () => {
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
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ restaurant }) => {
  console.log(restaurant);
  const { cloudinaryImageId, name, avgRatingString, sla, cuisines, areaName } =
    restaurant.info;

  return (
    <div className="res-card">
      <img
        className="res-image"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h4 className="res-card-title">
        {name.length > 20 ? name.substring(0, 20) + "..." : name}
      </h4>
      <div className="rating-container">
        <img className="star-icon" src={starIcon} />
        <div className="rating-desc">
          <span>{avgRatingString} - </span>
          <span>{sla.slaString}</span>
        </div>
      </div>
      <p className="cuisone-container">
        {cuisines.join(", ").length > 20
          ? cuisines.join(", ").substring(0, 20) + "..."
          : cuisines.join(", ")}
      </p>
      <p className="area-container">{areaName}</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
