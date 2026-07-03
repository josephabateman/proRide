import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";
import SuccessPage from "./SuccessPage";
import XLogo from "../XLogo";
import Seo from "../Seo";
import emailjs from "emailjs-com";
import content from "../../data/siteContent.json";
import { phoneParts } from "../../data/renderContent";

const phone = phoneParts(content.contact.phone);

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
          <h1 className="section-heading">{content.contactPage.heading}</h1>
          <p className="section-sub">{content.contactPage.subtitle}</p>
        </div>

        <Row className="g-4 justify-content-center align-items-stretch">
          {/* Info sidebar */}
          <Col lg={5}>
            <div className="contact-info">
              <h2 className="contact-info__title">
                {content.contactPage.sidebarHeading}
              </h2>
              <p className="contact-info__lead">
                {content.contactPage.sidebarText}
              </p>

              <a className="contact-info__item" href={`tel:${phone.intl}`}>
                <span className="contact-info__icon"><i className="fas fa-phone"></i></span>
                <span>
                  <strong>Call us</strong>
                  <small>{phone.display}</small>
                </span>
              </a>

              <a className="contact-info__item" href={`mailto:${content.contact.email}`}>
                <span className="contact-info__icon"><i className="far fa-envelope"></i></span>
                <span>
                  <strong>Email us</strong>
                  <small>{content.contact.email}</small>
                </span>
              </a>

              <div className="contact-info__social">
                <a
                  href={content.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href={content.contact.x}
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
