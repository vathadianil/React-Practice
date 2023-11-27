import React, { useState } from "react";
import { useEffect } from "react";
import { SHIMMER_CARD_COUNT } from "../utils/constants";
import ShimmerCard from "./ShimmerCard";
import RestroMenuHeader from "./RestroMenuHeader";
import RestroMenuBody from "./RestroMenuBody";

const RestroMenu = () => {
  const SHIMMER_CARD_ARRAY = [];
  const [resInfo, setResInfo] = useState([]);
  if (resInfo.length === 0) {
    for (let i = 0; i < SHIMMER_CARD_COUNT; i++) {
      SHIMMER_CARD_ARRAY.push(i + 1);
    }
  }

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=109168&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(() => json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return resInfo.length === 0 ? (
    <div className="res-container">
      {SHIMMER_CARD_ARRAY.map((item) => (
        <ShimmerCard key={item} />
      ))}
    </div>
  ) : (
    <div className="body">
      <RestroMenuHeader resInfo={resInfo} />
      <RestroMenuBody resInfo={resInfo} />
    </div>
  );
};

export default RestroMenu;
