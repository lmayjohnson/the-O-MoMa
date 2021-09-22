import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <li className="list">
        <Link className="list-element" to="/">
          Home
        </Link>
      </li>
      <li className="list">
        <Link className="list-element" to="/Gallery">
          Gallery
        </Link>
      </li>
      <li className="list">
        <Link className="list-element" to="/Contact">
          Contact
        </Link>
      </li>
      <li className="list">
        <Link className="list-element" to="/About">
          About
        </Link>
      </li>
    </div>
  );
};
export default NavBar;
