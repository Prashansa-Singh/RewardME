import React from "react";

// react router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import RewardCard from "./pages/RewardCard";
import Discover from "./pages/Discover";

//navbar
import BottomNav from "./pages/BottomNav";

// This is the router for the whole website
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BottomNav />}>
          <Route path="/home" element={<Home />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="reward-card" element={<RewardCard />} />
          <Route path="/discover" element={<Discover />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
