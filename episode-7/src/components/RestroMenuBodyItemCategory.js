import RestroMenuBodyNestedCategory from "./RestroMenuBodyNestedCategory";
import upArrow from "../../asserts/images/up-arrow.svg";
import { useState } from "react";

export default RestroMenuBodyItemCategory = ({ cardsData, cardsIndex }) => {
  const { itemCards, title } = cardsData;

  return (
    <div>
      <ul className="accordion">
        <li className="accordion-list">
          <input
            type="checkbox"
            className="acoordion-input"
            name="accordion"
            id={cardsIndex}
            defaultChecked={cardsIndex === 1}
          />
          <label className="accordion-label" htmlFor={cardsIndex}>
            <h3>{`${title} (${itemCards?.length})`}</h3>
            <img src={upArrow} className="accordion-caret"></img>
          </label>
          <div className="accordion-content-container">
            <div className="accordion-content">
              {itemCards?.map((item, index) => (
                <RestroMenuBodyNestedCategory
                  key={item?.card?.info?.id}
                  cardData={item?.card?.info}
                  index={index}
                />
              ))}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
