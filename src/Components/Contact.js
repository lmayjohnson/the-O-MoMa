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
      <br /> <br />
      <div className="HeaderStyle1">Questions or Feedback?</div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Form.Group className="mb-2">
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label className="FormStyle">Name</Form.Label>
              <Form.Control
                required
                type="text"
                id="name"
                placeholder="Pablo Ruiz Picasso"
                defaultValue=""
              />
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-2">
            <Form.Group as={Col} controlId="validationCustom02">
              <Form.Label className="FormStyle">Email</Form.Label>
              <Form.Control
                required
                type="text"
                id="email"
                placeholder="pablopicasso1881@gmail.com"
                defaultValue=""
              />
              <Form.Text>
                <p className="caption">
                  We'll never share your email with anyone else.
                </p>
              </Form.Text>
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label className="FormStyle">Message</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              as="textarea"
              rows={3}
              required
              type="text"
              placeholder=""
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
      <Map />
    </div>
  );
};
export default Contact;
