export default RestroMenuBodyNestedItemCategory = ({ cardData }) => {
  const { name } = cardData;
  return <div className="accordion-content-item">{name}</div>;
};
