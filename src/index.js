import React from "react";
import ReactDOM from "react-dom";

const lucky = 347;
const fName = "Mark";
const lName = "Wood-Patrick";

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>
      My name is {fName + " " + lName} and my lucky number is {lucky}{" "}
    </p>
  </div>,
  document.getElementById("root")
);
