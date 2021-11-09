import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ftimage from "../VincentVanGogh.jpeg";
import "./About.css";

const About = () => {
  const history = useHistory();
  const handleClick = () => history.push("/Contact");

  return (
    <center>
      <br />
      <br />
      <br />
      <br />

      <Card className="Card" style={{ width: "30rem" }}>
        <Card.Title className="Card-title">About Us </Card.Title>
        <br />
        <Card.Img variant="top" src={ftimage} />

        <Card.Body>
          <Card.Text className="Card-body">
            The O Mo Ma originated in St.Louis, Missouri during the rise of a
            world wide pandemic in December of 2020. It arose amongst Modern
            Arts museum closures with a birthright to serve as a safe space for
            continuing the appreciation of the modern arts.
          </Card.Text>
          <br />
          <Button variant="primary" onClick={handleClick}>
            Contact Us!
          </Button>
        </Card.Body>
      </Card>
    </center>
  );
};
export default About;
