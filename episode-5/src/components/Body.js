import React from "react";
import { useState } from "react";
import RestroCard from "./RestroCard";
import { resData } from "../utils/mockData";
function Body() {
  const [restaurentList, setRestaurantList] = useState(resData);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurantList = restaurentList.filter(
              (item) => item.info.avgRating >= 4
            );
            setRestaurantList(filteredRestaurantList);
          }}
        >
          {" "}
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurentList.map((restaurant) => (
          <RestroCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
