import React from "react";

// react router
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

// pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import RewardCard from "./pages/RewardCard";

// This is the router for the whole website
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* These are the individual routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/reward-card" element={<RewardCard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
