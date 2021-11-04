import React from "react";
import "./NavBar.css";
import { Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="Nav-bar">
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item className="Nav-element">
          <Nav.Link href="/HomePage">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item className="Nav-element">
          <Nav.Link href="/Contact">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item className="Nav-element">
          <Nav.Link href="/About">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item className="Nav-element">
          <Nav.Link href="/Gallery">Gallery</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
export default NavBar;
