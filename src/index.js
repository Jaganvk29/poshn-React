import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.js";
import "./CSS/main.css";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav/Nav";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Nav>
      <App />
    </Nav>
  </BrowserRouter>
);
