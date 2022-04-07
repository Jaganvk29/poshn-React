import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.js";
import "./CSS/main.css";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { PoshProvider } from "./PoshContext.js";
import ScrollToTop from "./ScrollToTop.js";
import Admin from "./components/Admin/Admin.js";
import AdminNav from "./components/Nav/AdminNav.js";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <PoshProvider>
      <App />
    </PoshProvider>
  </BrowserRouter>
);
