import bikeImg from "../../asserts/images/bike.svg";
import starImg from "../../asserts/images/icons-star.png";

export default RestroMenuHeader = ({ resInfo }) => {
  const {
    name,
    cuisines,
    areaName,
    feeDetails,
    avgRatingString,
    totalRatingsString,
  } = resInfo?.data?.cards[0]?.card?.card?.info;
  return (
    <div className="res-desc">
      <div className="res-desc--left">
        <h1 className="res-desc--title">{name}</h1>
        <p className="res-desc--cuisine"> {cuisines?.join(", ")} </p>
        <p className="res-desc--area"> {areaName}</p>
        <p className="res-desc--delivery-message">
          <img src={bikeImg} /> <span> {feeDetails?.message} </span>
        </p>
      </div>
      <div className="res-desc--right">
        <div className="res-desc--star">
          <img src={starImg} />
          <h3>{avgRatingString}</h3>
        </div>
        <p className="res-desc--total-rating"> {totalRatingsString} </p>
      </div>
    </div>
  );
};
