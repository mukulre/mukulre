import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Favorite from "../pages/Favorite";
import Stats from "../pages/Stats";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MainLayout from "../layouts/MainLayout";

//props - Parent -> Child
function AppRouter() {
  return (
    <div>
      <Router>
        <MainLayout>
          {/* props as children */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 page */}
          </Routes>
        </MainLayout>
      </Router>
    </div>
  );
}

export default AppRouter;

// default export - while import the file, you can use any name
// named export - while import the file, you have to use the same name