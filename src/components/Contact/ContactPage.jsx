import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMediaCardsDesktop from "./SocialMediaCardsDesktop";
import SocialMediaCardsMobile from "./SocialMediaCardsMobile";

import ContactForm from "./ContactForm";

function ContactPage() {
  return (
    <>
    {window.scrollTo(0, 0)}
      <Container>
        <Row>
          {/* <Col>
            {" "}
            <h1 className="display-5 text-sm-left">Contact</h1>
          </Col> */}
        </Row>
        <Row className="mt-3 mb-3 justify-content-md-center d-none d-lg-block">
          <SocialMediaCardsDesktop />
        </Row>
        <Row className="d-lg-none justify-content-center mt-3 mb-3">
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
