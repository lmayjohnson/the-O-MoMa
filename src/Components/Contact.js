import "./Contact.css";
import React from "react";
import Map from "./Map";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { useState } from "react";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="div">
      <br />
      <br />
      <div className="HeaderStyle1">Questions or Feedback?</div>
      <br />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label className="FormStyle">First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue=""
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label className="FormStyle">Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue=""
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label className="FormStyle">Message</Form.Label>
          <InputGroup hasValidation>
            <Form.Control required type="text" placeholder="" defaultValue="" />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
      <Map />
    </div>
  );
};
export default Contact;
