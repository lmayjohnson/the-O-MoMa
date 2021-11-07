import React from "react";
import "./Gallery.css";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import img1 from "../imgs/POP SHOW.png";
import img2 from "../imgs/self portrait.png";
import img3 from "../imgs/at the sursock museum.png";
import img4 from "../imgs/the water-lily pond.png";
import img5 from "../imgs/noahs ark.png";
import img6 from "../imgs/untitled.png";
import img7 from "../imgs/947-5.png";
import img8 from "../imgs/diego on my mind.png";
import img9 from "../imgs/the virgins.png";

import { Container, Row, Col } from "react-grid-system";

const Gallery = () => {
  let req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState === XMLHttpRequest.DONE) {
      const resultAsObj = JSON.parse(req.response);
      console.log({ resultAsObj });
    }
  };

  req.open("GET", "https://api.jsonbin.io/b/6185fce6c4eaa14d5846b96b", true);
  req.setRequestHeader(
    "x-master-key",
    "$2b$10$s7H4sIMBHHg90w2OHbw.WOabecMFwItIyyY9Oi3HxZV5ANKnwcGo6"
  );
  req.send();

  return (
    <Container className="container-style">
      <Row>
        <Col sm={4}>
          <Card.Img classname="img-sizing" variant="top" src={img1} />
        </Col>
        <Col sm={4}>
          <Card.Img classname="img-sizing" variant="top" src={img2} />
        </Col>
        <Col sm={4}>
          <Card.Img classname="img-sizing" variant="top" src={img3} />
        </Col>
      </Row>
      <br /> <br />
      <Row>
        <Col sm={4}>
          <Card.Img classname="img-sizing" variant="top" src={img4} />
        </Col>
        <Col sm={4}>
          <Card.Img classname="img-sizing" variant="top" src={img5} />
        </Col>
        <Col sm={4}>
          <Card.Img classname="img-sizing" variant="top" src={img6} />
        </Col>
      </Row>
      <br /> <br />
      <Row>
        <Col sm={4}>
          <Card.Img variant="top" src={img7} />
        </Col>
        <Col sm={4}>
          <Card.Img variant="top" src={img8} />
        </Col>
        <Col sm={4}>
          <Card.Img variant="top" src={img9} />
        </Col>
      </Row>
    </Container>
  );
};
export default Gallery;
