import React from "react";
import ReactDOM from "react-dom";

const ship = "Viper Mk 4";
const size = "large";
var date = new Date();
// console.log(date);
const img = "https://picsum.photos/200";
const customStyle = { color: "tan", border: "1px solid white" };

customStyle.color = "aqua";

ReactDOM.render(
  <div>
    <h1 className="heading" spellCheck="false">
      Type: {ship}
    </h1>
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
    <ul>
      <img className="shipPics" src="asp_explorer.jpg" alt="picture" />
      <img className="shipPics" src="sidewinder.jpg" alt="picture" />
      <img className="shipPics" src="cobra_mk3.jpg" alt="picture" />
      <img className="shipPics" src={img + "?grayscale"} alt="ship picture" />
    </ul>
    <h1 style={{ color: "blue" }}>A fleet carrier is moot.</h1>
    <h1 style={customStyle}>Planetary Landings</h1>
  </div>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <div>
//     <p>Starship Name: {ship}</p>
//     <p>Game year: {date.getFullYear()}</p>
//   </div>,
//   document.getElementById("root")
// );
