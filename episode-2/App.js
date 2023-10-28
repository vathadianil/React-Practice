// const heading = React.createElement(
//   "h1",
//   { id: "heading", class: "heading" },
//   "Hello world From React"
// );

// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// root.render(heading);

/* 
 <div id="parent">
      <div id="child">
        <h1 id="heading">Hello world</h1>
        <h3 id="subheading">sub heading</h3>
      </div>
       <div id="child">
        <h1 id="heading">Hello world</h1>
        <h3 id="subheading">sub heading</h3>
      </div>
    </div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "Hello world"),
    React.createElement("h3", { id: "subheading" }, "Sub Heading"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Hello world2"),
    React.createElement("h3", { id: "subheading" }, "Sub Heading2"),
  ]),
  React.createElement("div", { id: "child3" }, [
    React.createElement("h1", { id: "heading" }, "Hello world2"),
    React.createElement("h3", { id: "subheading" }, "Sub Heading2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
