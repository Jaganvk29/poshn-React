import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.js";
import "./CSS/main.css";
import { BrowserRouter } from "react-router-dom";
import { PoshProvider } from "./PoshContext.js";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <PoshProvider>
      <App />
    </PoshProvider>
  </BrowserRouter>
);
