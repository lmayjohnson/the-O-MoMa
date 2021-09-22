import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <li>
        <Link to="/Gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/Contact">Contact</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
    </div>
  );
};
export default NavBar;
