import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import ContactForm from "./ContactForm";
import SuccessPage from "./SuccessPage";
import XLogo from "../XLogo";
import Seo from "../Seo";
import content from "../../data/siteContent.json";
import { phoneParts } from "../../data/renderContent";

const phone = phoneParts(content.contact.phone);

const SERVICE_ID = "proridecoaching";
const TEMPLATE_ID = "proridetemplate";
const PUBLIC_KEY = "user_rhsl2oZqwgrD38edYovoz";

function ContactPage() {
  // "idle" | "sending" | "sent" | "error"
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function sendEmail(e) {
    e.preventDefault();
    const form = e.target;

    // Spam trap filled in: pretend it worked but don't send anything.
    if (form.elements.company_website && form.elements.company_website.value) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    // Only show "Message sent!" once EmailJS confirms delivery; on failure the
    // form (and everything the visitor typed) stays put with an error message.
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY }).then(
      () => setStatus("sent"),
      (error) => {
        console.error("Contact form failed to send", error);
        setStatus("error");
      }
    );
  }

  return (
    <>
      <Seo
        title="Book a School Cycling Day | Contact Pro Ride Coaching"
        description={`Book a fun, professionally coached cycling day for your primary school. Send us your preferred dates or call ${phone.display}.`}
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
              {status === "sent" ? (
                <SuccessPage />
              ) : (
                <ContactForm
                  onSubmit={sendEmail}
                  sending={status === "sending"}
                  failed={status === "error"}
                  phone={phone}
                  email={content.contact.email}
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactPage;
