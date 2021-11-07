import React from "react";
import { Card } from "react-bootstrap";

import "./Map.css";

const Map = () => {
  return (
    <Card className="Cardex" style={{ width: "20rem" }}>
      <Card.Body>
        <iframe
          className="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199412.48571308967!2d-90.38354701067739!3d38.65301691773768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4a9faed8ef9%3A0xbe39eaca22bbe05b!2sSt.%20Louis%2C%20MO!5e0!3m2!1sen!2sus!4v1636316812629!5m2!1sen!2sus"
        ></iframe>
      </Card.Body>
    </Card>
  );
};
export default Map;
