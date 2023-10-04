import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Explore from "./components/Explore";
import Resume from "./pages/Resume/Resume";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/dashboard" element={<Profile />} />
          <Route path="/community" element={<Explore />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}
