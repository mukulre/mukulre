import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/favorite">Favorite</NavLink>
        </li>
        <li>
          <NavLink to="/stats">Stats</NavLink>
        </li>
        <li>
          <NavLink to="/counter1">Counter 1x</NavLink>
        </li>
        <li>
          <NavLink to="/counter5">Counter 5x</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
// div.acitve>h1#heading-1+h2*2
// > - parent child
// + - sibling
// * - rep
// . - class
// # - id
