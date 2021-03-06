import "./NavBar.css";
import { Nav } from "react-bootstrap";

const NavBar = () => {


  return (
  
    <div className="nav">
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link className="Nav-element" href="/HomePage">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="Nav-element" href="/Gallery">
            Gallery
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="Nav-element" href="/About">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="Nav-element" href="/Contact">
            Contact
          </Nav.Link>
        </Nav.Item>

      </Nav>
    </div>
  );
};
export default NavBar;
