import React from "react";
import RestroCard from "./RestroCard";
import { resData } from "../../data";
function Body() {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resData.map((restaurant) => (
          <RestroCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
