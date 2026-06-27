import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";
import SuccessPage from "./SuccessPage";
import XLogo from "../XLogo";
import Seo from "../Seo";
import emailjs from "emailjs-com";

function ContactPage() {
  const [form, formSubmitted] = useState(false);

  const service_id = "proridecoaching";
  const template_id = "proridetemplate";
  const user_id = "user_rhsl2oZqwgrD38edYovoz";

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(service_id, template_id, e.target, user_id).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    formSubmitted(true);
    e.target.reset();
  }

  return (
    <>
      {window.scrollTo(0, 0)}

      <Seo
        title="Book a School Cycling Day | Contact Pro Ride Coaching"
        description="Get in touch to book a fun, professional cycling day for your school in West Yorkshire. Send your preferred dates or call 07960 534 012 — balance bikes to KS2 cycle sport, all equipment provided."
      />
      <Container className="contact-page">
        <div className="text-center">
          <h1 className="section-heading">Get in touch</h1>
          <p className="section-sub">
            Want to book a cycling day, ask a question, or check availability?
            Send us a message and we'll get right back to you.
          </p>
        </div>

        <Row className="g-4 justify-content-center align-items-stretch">
          {/* Info sidebar */}
          <Col lg={5}>
            <div className="contact-info">
              <h2 className="contact-info__title">Let's plan your day</h2>
              <p className="contact-info__lead">
                Based in West Yorkshire and coaching across the region — from
                balance bikes to KS2 cycle sport.
              </p>

              <a className="contact-info__item" href="tel:+447960534012">
                <span className="contact-info__icon"><i className="fas fa-phone"></i></span>
                <span>
                  <strong>Call us</strong>
                  <small>07960 534 012</small>
                </span>
              </a>

              <a className="contact-info__item" href="mailto:admin@proridecoaching.co.uk">
                <span className="contact-info__icon"><i className="far fa-envelope"></i></span>
                <span>
                  <strong>Email us</strong>
                  <small>admin@proridecoaching.co.uk</small>
                </span>
              </a>

              <div className="contact-info__social">
                <a
                  href="https://www.facebook.com/proridecoaching"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://x.com/proridecoaching"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter)"
                >
                  <XLogo size={16} />
                </a>
              </div>
            </div>
          </Col>

          {/* Form card */}
          <Col lg={7}>
            <div className="contact-card">
              {!form ? <ContactForm onSubmit={sendEmail} /> : <SuccessPage />}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactPage;
