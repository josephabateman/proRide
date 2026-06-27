import React from "react";
import { Form, Row, Col, FloatingLabel } from "react-bootstrap";

function ContactForm(props) {
  return (
    <Form onSubmit={props.onSubmit} className="contact-form text-start">
      <Row className="g-3">
        <Col md={6}>
          <FloatingLabel label="Your name">
            <Form.Control name="name" type="text" placeholder="Your name" />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel label="School">
            <Form.Control name="school" type="text" placeholder="School" />
          </FloatingLabel>
        </Col>

        <Col md={6}>
          <FloatingLabel label="Email">
            <Form.Control name="email" type="email" placeholder="Email" />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel label="Postcode">
            <Form.Control name="postcode" type="text" placeholder="Postcode" />
          </FloatingLabel>
        </Col>

        <Col xs={12}>
          <FloatingLabel label="Preferred date(s)">
            <Form.Control
              name="date"
              type="text"
              placeholder="e.g. Any week day commencing 25/03/23"
            />
          </FloatingLabel>
        </Col>

        <Col md={6}>
          <FloatingLabel label="Total children taking part">
            <Form.Control
              name="total_number_of_children_taking_part"
              type="text"
              placeholder="e.g. Approximately 60"
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel label="Classes & numbers">
            <Form.Control
              name="num_in_each_class"
              type="text"
              placeholder="e.g. 18 in Nursery, 21 in Reception, 30 in Year 1"
            />
          </FloatingLabel>
        </Col>

        <Col xs={12}>
          <FloatingLabel label="Message">
            <Form.Control
              name="message"
              as="textarea"
              placeholder="Message"
              style={{ height: "140px" }}
            />
          </FloatingLabel>
        </Col>

        <Col xs={12}>
          <button id="submit-button" className="button w-100" type="submit">
            Send message
          </button>
        </Col>
      </Row>

      <p className="contact-form__alt">
        Prefer to talk? Call us on{" "}
        <a href="tel:+447960534012">07960 534 012</a>
      </p>
    </Form>
  );
}

export default ContactForm;
