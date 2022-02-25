import React from "react";

// react router
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

// pages
import Login from "./pages/Login";
import Home from "./pages/Home";

// This is the router for the whole website
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* These are the individual routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
