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
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

import { Container, Row, Col } from "react-grid-system";

const Gallery = () => {
  let req = new XMLHttpRequest();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var resultAsObj;
  req.onreadystatechange = () => {
    if (req.readyState === XMLHttpRequest.DONE) {
      resultAsObj = JSON.parse(req.response);
      console.log({ resultAsObj });
      console.log(
        " ++++ ARTIST NAME IS:",
        resultAsObj.artist_biographies[0].name
      );
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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Painting Name {}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Bio: {}</Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
        <Col sm={4}>
          <Card.Img
            classname="img-sizing"
            variant="top"
            src={img1}
            onClick={handleShow}
          />
        </Col>
        <Col sm={4}>
          <Card.Img
            classname="img-sizing"
            variant="top"
            src={img2}
            onClick={handleShow}
          />
        </Col>
        <Col sm={4}>
          <Card.Img
            classname="img-sizing"
            variant="top"
            src={img3}
            onClick={handleShow}
          />
        </Col>
      </Row>
      <br /> <br />
      <Row>
        <Col sm={4}>
          <Card.Img
            classname="img-sizing"
            variant="top"
            src={img4}
            onClick={handleShow}
          />
        </Col>
        <Col sm={4}>
          <Card.Img
            classname="img-sizing"
            variant="top"
            src={img5}
            onClick={handleShow}
          />
        </Col>
        <Col sm={4}>
          <Card.Img
            classname="img-sizing"
            variant="top"
            src={img6}
            onClick={handleShow}
          />
        </Col>
      </Row>
      <br /> <br />
      <Row>
        <Col sm={4}>
          <Card.Img variant="top" src={img7} onClick={handleShow} />
        </Col>
        <Col sm={4}>
          <Card.Img variant="top" src={img8} onClick={handleShow} />
        </Col>
        <Col sm={4}>
          <Card.Img variant="top" src={img9} onClick={handleShow} />
        </Col>
      </Row>
    </Container>
  );
};
export default Gallery;
