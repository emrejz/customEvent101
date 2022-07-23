import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { emit } from "./events";

let count = 0;
const counterButton = document.querySelector("#counterButton");
counterButton.addEventListener("click", () => {
  emit("counterInc", ++count);
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
