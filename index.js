import React from "react";
import ReactDOM from "react-dom";

var date = new Date();

var hour = date.getHours();
var timeOfDay;
var customStyle = {};

if (hour > 0 && hour < 12) timeOfDay = "morning";
customStyle = { color: "red" };
if (hour >= 12 && hour < 18) timeOfDay = "afternoon";
customStyle = { color: "green" };
if (hour >= 18 && hour <= 24) timeOfDay = "evening";
customStyle = { color: "purple" };

console.log(timeOfDay);

ReactDOM.render(
  <div>
    <h1 style={customStyle}>Good {timeOfDay}!</h1>
  </div>,
  document.getElementById("root")
);
