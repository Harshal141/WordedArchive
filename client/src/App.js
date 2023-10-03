import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Explore from "./components/Explore";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/dashboard" element={<Profile />} />
          <Route path="/community" element={<Explore />} />
        </Routes>
      </Router>
    </>
  );
}
