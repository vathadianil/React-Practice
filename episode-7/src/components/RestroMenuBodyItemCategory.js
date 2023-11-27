import RestroMenuBodyNestedCategory from "./RestroMenuBodyNestedCategory";

export default RestroMenuBodyItemCategory = ({ cardsData }) => {
  console.log(cardsData);
  return (
    <div>
      {cardsData?.map((item, index) => (
        <RestroMenuBodyNestedCategory
          key={item?.card?.info?.id}
          cardData={item?.card?.info}
          index={index}
        />
      ))}
    </div>
  );
};
