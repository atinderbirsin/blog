import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { Provider } from "./context/post";

const divEl = document.getElementById("root");
const root = ReactDOM.createRoot(divEl);
root.render(
  <Provider>
    <App />
  </Provider>
);
