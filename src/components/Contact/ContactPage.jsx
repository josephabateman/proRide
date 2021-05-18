import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMediaCardsDesktop from "./SocialMediaCardsDesktop";
import SocialMediaCardsMobile from "./SocialMediaCardsMobile";
import ContactForm from "./ContactForm";
import SuccessPage from "./SuccessPage";
import customStyling from "../../styles/custom-styling";
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

      <Container>
        <Row className={customStyling.contactPageStyles.firstRow}>
          <SocialMediaCardsDesktop />
        </Row>
        <Row className={customStyling.contactPageStyles.secondRow}>
          <SocialMediaCardsMobile />
        </Row>
        <Row>
          <Col>
            {" "}
            {!form ? <ContactForm onSubmit={sendEmail} /> : <SuccessPage />}
          </Col>
        </Row>
      </Container>
      <hr />
    </>
  );
}

export default ContactPage;
