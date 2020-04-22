import React from "react";

import Heading from "./Heading";
import List from "./List";
import { add, subtract, multiply, divide } from "./Calculator";

function App() {
  return (
    <div>
      <Heading />
      <List />
      <h1>And a wee bit of math...</h1>
      <ul>
        <li>adding: 15 + 5 = {add(15, 5)}</li>
        <li>multiplying: 5 * 5 = {multiply(5, 5)}</li>
        <li>dividing: 25 / 5 = {divide(25, 5)}</li>
        <li>subtracting: 30 - 5 = {subtract(30, 5)}</li>
      </ul>
    </div>
  );
}
export default App;
