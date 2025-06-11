import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{background:"#273c75", padding: "1rem"}}>
      <ul style={{display: "flex", listStyle: "none", margin:0, padding:0}}>
        <li style={{marginRight: "1rem"}}>
          <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "#fff" : "#ccc" , textDecoration: "none" , fontWeight: isActive ? "bold" : "normal"})}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" style={({ isActive })=>({color:isActive?"#fbc524":"#fff",textDecoration:"none",fontWeight:isActive?"bold":"normal",})}>Login</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;