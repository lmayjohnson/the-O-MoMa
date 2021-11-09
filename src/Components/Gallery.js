import React from "react";
import "./Gallery.css";
import { Card } from "react-bootstrap";
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
  return (
    <Container className="container-style">
      <Row>
        <Col sm={4}>
          <Card.Img variant="top" src={img1} />
          <div className="p-cap">Pop Show</div>
          <p className="artist-cap">Keith Haring</p>
        </Col>
        <Col sm={4}>
          <Card.Img variant="top" src={img2} />
          <div className="p-cap">Self Portrait</div>
          <p className="artist-cap">Vincent Van Gogh</p>
        </Col>
        <Col sm={4}>
          <Card.Img variant="top" src={img3} />
          <div className="p-cap">At the Sursock Museum</div>
          <p className="artist-cap">Pablo Picasso</p>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={4}>
          <Card.Img variant="top" src={img4} />
          <div className="p-cap">The Water Lily Pond</div>
          <p className="artist-cap">Claude Monet</p>
        </Col>
        <Col sm={4}>
          <Card.Img variant="top" src={img5} />
          <div className="p-cap">Noah's Ark</div>
          <p className="artist-cap">Takashi Murakami</p>
        </Col>
        <Col sm={4}>
          <Card.Img variant="top" src={img6} />
          <div className="p-cap">Untitled</div>
          <p className="artist-cap">Jean-Michael Basquiat</p>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={4}>
          <Card.Img variant="top" src={img7} />
          <div className="p-cap">947-5</div>
          <p className="artist-cap">Gerard Richter</p>
        </Col>
        <Col sm={4}>
          <Card.Img variant="top" src={img8} />
          <div className="p-cap">Diego On My Mind</div>
          <p className="artist-cap">Frida Kahlo</p>
        </Col>
        <Col sm={4}>
          <Card.Img variant="top" src={img9} />
          <div className="p-cap">The Virgins</div>
          <p className="artist-cap">Gustav Klimt</p>
        </Col>
      </Row>
      <br />
    </Container>
  );
};
export default Gallery;
