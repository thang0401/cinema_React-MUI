import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SignInSide from "./pages/login_form";
import Checkout from "./pages/Checkout";
import Blog from "./pages/homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="Checkout" element={<Checkout />} />
        <Route path="SignInSide" element={<SignInSide />} />
      </Routes>
    </div>
  );
}

export default App;
