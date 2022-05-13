import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.js";
import "./CSS/main.css";
import { BrowserRouter } from "react-router-dom";
import { PoshProvider } from "./PoshContext.js";
import { SurveyProvider } from "./SurveyContext.js";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <PoshProvider>
      <SurveyProvider>
        <App />
      </SurveyProvider>
    </PoshProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
