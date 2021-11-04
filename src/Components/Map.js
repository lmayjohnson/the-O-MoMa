import React from "react";
import { Card } from "react-bootstrap";

import "./Map.css";

const Map = () => {
  return (
    <Card className="Cardex" style={{ width: "20rem" }}>
      <Card.Body>
        <iframe
          className="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429157.55422380543!2d-117.38985986003388!3d32.824238882544236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1636059067551!5m2!1sen!2sus"
        ></iframe>
      </Card.Body>
    </Card>
  );
};
export default Map;
