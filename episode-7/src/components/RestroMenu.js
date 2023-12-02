import React, { useState } from "react";
import { useEffect } from "react";
import { RESTRO_MENU_URL, SHIMMER_CARD_COUNT } from "../utils/constants";
import ShimmerCard from "./ShimmerCard";
import RestroMenuHeader from "./RestroMenuHeader";
import RestroMenuBody from "./RestroMenuBody";
import { useParams } from "react-router-dom";

const RestroMenu = () => {
  const { resId } = useParams();
  const SHIMMER_CARD_ARRAY = [];
  const [resInfo, setResInfo] = useState([]);
  if (resInfo.length === 0) {
    for (let i = 0; i < SHIMMER_CARD_COUNT; i++) {
      SHIMMER_CARD_ARRAY.push(i + 1);
    }
  }

  const fetchData = async () => {
    const data = await fetch(
      `${RESTRO_MENU_URL}?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setResInfo(() => json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return resInfo.length === 0 ? (
    <div className="res-container body">
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
