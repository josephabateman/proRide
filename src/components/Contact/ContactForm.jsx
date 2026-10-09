import React from "react";
import { Form, Row, Col, FloatingLabel, Alert } from "react-bootstrap";

function ContactForm({ onSubmit, sending, failed, phone, email }) {
  return (
    <Form onSubmit={onSubmit} className="contact-form text-start">
      {failed ? (
        <Alert variant="danger" className="contact-form__error">
          <strong>Sorry, your message didn't send.</strong> Please try again, or
          contact us directly on <a href={`tel:${phone.intl}`}>{phone.display}</a>{" "}
          or <a href={`mailto:${email}`}>{email}</a>.
        </Alert>
      ) : null}

      <Row className="g-3">
        <Col md={6}>
          <FloatingLabel controlId="contact-name" label="Your name *">
            <Form.Control
              name="name"
              type="text"
              placeholder="Your name"
              autoComplete="name"
              required
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="contact-school" label="School *">
            <Form.Control
              name="school"
              type="text"
              placeholder="School"
              autoComplete="organization"
              required
            />
          </FloatingLabel>
        </Col>

        <Col md={6}>
          <FloatingLabel controlId="contact-email" label="Email *">
            <Form.Control
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              required
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="contact-postcode" label="Postcode">
            <Form.Control
              name="postcode"
              type="text"
              placeholder="Postcode"
              autoComplete="postal-code"
            />
          </FloatingLabel>
        </Col>

        <Col xs={12}>
          <FloatingLabel controlId="contact-date" label="Preferred date(s)">
            <Form.Control
              name="date"
              type="text"
              placeholder="e.g. Any weekday in the week of 2 March"
            />
          </FloatingLabel>
        </Col>

        <Col md={6}>
          <FloatingLabel controlId="contact-total" label="Total children taking part">
            <Form.Control
              name="total_number_of_children_taking_part"
              type="text"
              placeholder="e.g. Approximately 60"
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="contact-classes" label="Classes & numbers">
            <Form.Control
              name="num_in_each_class"
              type="text"
              placeholder="e.g. 18 in Nursery, 21 in Reception, 30 in Year 1"
            />
          </FloatingLabel>
        </Col>

        <Col xs={12}>
          <FloatingLabel controlId="contact-message" label="Message">
            <Form.Control
              name="message"
              as="textarea"
              placeholder="Message"
              style={{ height: "140px" }}
            />
          </FloatingLabel>
        </Col>

        <Col xs={12}>
          <button
            id="submit-button"
            className="button w-100"
            type="submit"
            disabled={sending}
          >
            {sending ? "Sending…" : "Send message"}
          </button>
        </Col>
      </Row>

      {/* Spam trap: hidden from people and screen readers, so only bots fill it in. */}
      <div className="contact-form__hp" aria-hidden="true">
        <label htmlFor="contact-company-website">Leave this field empty</label>
        <input
          id="contact-company-website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <p className="contact-form__alt">
        Prefer to talk? Call us on{" "}
        <a href={`tel:${phone.intl}`}>{phone.display}</a>
      </p>
    </Form>
  );
}

export default ContactForm;
