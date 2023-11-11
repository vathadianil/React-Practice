import React from "react";
import starIcon from "../../asserts/images/icons-star.png";
import { CDN_URL } from "../utils/constants";

function RestroCard({ restaurant }) {
  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    sla,
    cuisines,
    areaName,
    aggregatedDiscountInfoV3,
  } = restaurant.info;

  return (
    <div className="res-card">
      <div
        className="res-image"
        style={{
          backgroundImage: `url(
                ${CDN_URL}${cloudinaryImageId}
              )`,
        }}
      >
        <h3 className="res-image-title">
          {aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}
        </h3>
      </div>

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
}

export default RestroCard;
