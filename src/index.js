import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.js";
import "./CSS/main.css";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { PoshProvider } from "./PoshContext.js";
import ScrollToTop from "./ScrollToTop.js";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <PoshProvider>
      <Nav>
        <ScrollToTop />
        <App />
      </Nav>
    </PoshProvider>
  </BrowserRouter>
);
