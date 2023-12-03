export default RestroMenuBodyNestedItemCategory = ({ cardData }) => {
  const { name, price, description, imageId } = cardData;
  console.log(cardData);
  return (
    <div className="accordion-content-item">
      <div>
        <p className="accordion-content-item-title"> {name}</p>
        <p className="accordion-content-item-price">&#8377; {price / 100}</p>
        <p className="accordion-content-item-description">{description}</p>
      </div>
      <div className="accordion-content-item-image-container">
        <img
          className="accordion-content-item-image"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}
        />
        <button className="accordion-content-item-btn">ADD</button>
      </div>
    </div>
  );
};
