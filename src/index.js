import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { emit } from "./events";
import "./index.css";

let count = 0;
window.count = 0;
const counterButton = document.querySelector("#counterButton");
counterButton.addEventListener("click", () => {
  // solution 1 => custom event
  emit("counterCustomEvent", ++count);

  // solution 2 => without custom event
  ++window.count;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
