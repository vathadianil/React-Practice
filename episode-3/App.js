import React from "react";
import ReactDOM from "react-dom/client";
import image from "./asserts/newplot.png";

//React Functional Component

const HeadingComponent = () => {
  return <h1 className="heading"> Welcome to React Functional Component </h1>;
};

//React Element
// const container =  (
//   <>
//     <h1 className="heading">Welcome to React from JSX</h1>
//     <img src={image} />
//     <HeadingComponent />
//   </>
// );
const number = 1000;
//React Functional Component
const Container = () => (
  <>
    <h1 className="heading">Welcome to React from JSX</h1>
    <img src={image} />
    {number}
    <HeadingComponent />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering using React Element
// root.render(container);

//Rendering using React component
root.render(<Container />);
