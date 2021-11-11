import "./HomePage.css";
import ftimage from "../featured.png";
import ftText from "../imgs/featured.png"
import selfie from "../TMselfie.png";

import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";


const HomePage = () => {
  let req = new XMLHttpRequest();

  const [show, setShow] = useState(false);
  const [data, setData] = useState("");
  const [flag, setFlag] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var resultAsObj;
  req.onreadystatechange = () => {
    if (flag && req.readyState === XMLHttpRequest.DONE) {
      resultAsObj = JSON.parse(req.response);
      setData(resultAsObj);
      console.log("HII IM A LOOP!");
      console.log("YOUR DATA", data.painting);

      setFlag(false);
    }
  };
  req.open("GET", "https://api.jsonbin.io/b/618a2a07763da443125dd4d2", true);
  req.setRequestHeader(
    "x-master-key",
    "$2b$10$Isd9AO58n5sWFzENppvcj.Gn.DXkc/h/jws6DafeReXJfDzCzAhVG"
  );

  req.send();

  return (
    <Container className="container-style">
    <Row>
      <Col sm={4}>
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="title-style">{data.painting}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <center>
            <Card.Img className="selfie" variant="top" src={selfie} />
          </center>
          <br />
          <div className="body-style">{data.bio}</div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
            </Modal>
      <img className="ftText" src={ftText} height="100px" alt="logo" />

      <Card.Img
        className="Ft-image"
        variant="top"
        src={ftimage}
        onClick={handleShow}
      />
          </div>
        </Col>
      </Row>
      </Container>
  );
};
export default HomePage;
