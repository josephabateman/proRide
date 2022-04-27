import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import ServicesCardsCollection from "./ServicesCardsCollection";
import customStyling from "../../styles/custom-styling";

function HeaderText() {
  return (
    <>
      {window.scrollTo(0, 0)}
      <ScrollToTop smooth />

      <Container>
        <Row className={customStyling.servicesPage.container}>
          {/* <Col md={5} lg={7}>
            <h1 className={customStyling.servicesPage.title}>Our Services</h1>
          </Col> */}
          <Col md={7} lg={6} className={customStyling.servicesPage.h5Column}>
            <p className={customStyling.servicesPage.h5}>
              We offer a range of services to meet the needs of all ages and
              abilities. Browse below to see our programs for Nursery, KS1 and
              KS2.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <HeaderText />
      <hr />
      <ServicesCardsCollection />
    </>
  );
}

export default ServicesPage;
