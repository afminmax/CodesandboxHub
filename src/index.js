import React from "react";
import ReactDOM from "react-dom";

const ship = "Viper Mk 4";
const size = "large";

ReactDOM.render(
  <div>
    <h1>Type: {ship}</h1>
    <h2>Size: {size}</h2>
    <h2>Item ID: {67 + 9}</h2>
    <h2>Random plate: {Math.floor(Math.random() * 10) + 5}</h2>
    <h2>Plate name: {ship + " " + size}</h2>
    <h2>String Interpolation: {`${ship}`}</h2>
    <ul>
      <li>Fast</li>
      <li>Light</li>
      <li>Upgradeable</li>
      <li>Iconic</li>
    </ul>
  </div>,
  document.getElementById("root")
);
