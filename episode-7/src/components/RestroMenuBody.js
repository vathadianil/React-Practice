import RestroMenuBodyItemCategory from "./RestroMenuBodyItemCategory";

export default RestroMenuBody = ({ resInfo }) => {
  const itemInfo =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  let cardsInfo = [];
  itemInfo.map(
    (item) =>
      item?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" &&
      cardsInfo.push(item?.card?.card)
  );

  return (
    <>
      {cardsInfo.map((item, index) => (
        <RestroMenuBodyItemCategory
          key={index}
          cardsData={item}
          cardsIndex={index + 1}
        />
      ))}
    </>
  );
};
