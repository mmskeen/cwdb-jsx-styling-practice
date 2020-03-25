//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

const date = new Date(2020, 3, 25, 10);
const timeOfDay =
  date.getHours() < 12
    ? "Morning"
    : date.getHours() < 18
    ? "Afternoon"
    : "Evening";

const style = { color: "" };
style.color =
  date.getHours() < 12 ? "red" : date.getHours() < 18 ? "green" : "blue";

ReactDom.render(
  <div>
    <h1 className="heading" style={style}>
      Good {timeOfDay}
    </h1>
  </div>,
  document.getElementById("root")
);
