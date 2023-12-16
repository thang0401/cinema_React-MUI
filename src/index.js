import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App"; // Adjust the path based on your file structure
import reportWebVitals from "./reportWebVitals";
import Blog from "./pages/homepage";
import Checkout from "./pages/Checkout";
import SignInSide from "./pages/login_form";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
