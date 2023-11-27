import RestroMenuBodyItemCategory from "./RestroMenuBodyItemCategory";

export default RestroMenuBody = ({ resInfo }) => {
  const itemInfo =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  return (
    <div>
      {itemInfo.map((item, index) => (
        <div key={index}>
          {item?.card?.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" && (
            <RestroMenuBodyItemCategory
              cardsData={item?.card?.card?.itemCards}
            />
          )}
        </div>
      ))}
    </div>
  );
};
