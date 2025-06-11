import React from "react";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Favorite from "../pages/Favorite";
import Stats from "../pages/Stats";

function MainLayout({ children }) {
  return (
    // NavBar (Home Fav Stats)
    <div>
      <NavBar />
      {/* dynamic content */}
      {/* home fav stat  */}
      {children}
    </div>
  );
}

export default MainLayout;