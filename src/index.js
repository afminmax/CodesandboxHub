import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";

// an h1 React component within the index.js
// function Heading() {
//   return <h1> Little Warship</h1>;
// }

// ReactDOM.render(
//   <div>
//     <Heading />
//     <ul>
//       <li>Fast</li>
//       <li>Light</li>
//       <li>Upgradeable</li>
//       <li>Iconic</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <div>
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);
