import React from "react";
import { useState, useEffect } from "react";
import RestroCard from "./RestroCard";
import ShimmerCard from "./ShimmerCard";
import { SHIMMER_CARD_COUNT } from "../utils/constants";
import SearchIcon from "../../asserts/images/search-icon.png";

function Body() {
  const SHIMMER_CARD_ARRAY = [];
  const [restaurentList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  if (restaurentList.length === 0) {
    for (let i = 0; i < SHIMMER_CARD_COUNT; i++) {
      SHIMMER_CARD_ARRAY.push(i + 1);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3956556&lng=78.556148&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonResponse = await data.json();
    setRestaurantList(
      jsonResponse?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredResturant(
      jsonResponse?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button
            className="btn"
            onClick={() => {
              const filteredRestaurantList = searchText
                ? restaurentList.filter((item) =>
                    item?.info?.name
                      ?.toLowerCase()
                      .includes(searchText.toLowerCase())
                  )
                : restaurentList;

              setFilteredResturant(filteredRestaurantList);
            }}
          >
            <img src={SearchIcon} className="search-icon" />
          </button>
        </div>
        <button
          className="btn"
          onClick={() => {
            const filteredRestaurantList = restaurentList.filter(
              (item) => item.info.avgRating >= 4
            );
            setFilteredResturant(filteredRestaurantList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {restaurentList.length === 0 ? (
        <div className="res-container">
          {SHIMMER_CARD_ARRAY.map((item) => (
            <ShimmerCard key={item} />
          ))}
        </div>
      ) : (
        <div className="res-container">
          {filteredRestaurant?.map((restaurant) => (
            <RestroCard key={restaurant.info.id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Body;
