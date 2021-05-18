import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMediaCardsDesktop from "./SocialMediaCardsDesktop";
import SocialMediaCardsMobile from "./SocialMediaCardsMobile";
import ContactForm from "./ContactForm";
import customStyling from "../../styles/custom-styling";

function ContactPage() {

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
            <ContactForm />
          </Col>
        </Row>
      </Container>
      <hr />
    </>
  );
}

export default ContactPage;
