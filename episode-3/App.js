import React from "react";
import ReactDOM from "react-dom/client";
import image from "./asserts/newplot.png";

//React Functional Component

const HeadingComponent = () => {
  return <h1 className="heading"> Welcome to React Functional Component </h1>;
};

const container = (
  <>
    <h1 className="heading">Welcome to React from JSX</h1>
    <img src={image} />
    <HeadingComponent />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);
root.render(<HeadingComponent />);
