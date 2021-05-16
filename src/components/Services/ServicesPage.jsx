import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import ServicesCards from "./ServicesCards";

function HeaderText() {
  return (
    <>
      {window.scrollTo(0, 0)}
      <ScrollToTop smooth />

      <Container>
        <Row className="mt-3">
          <Col md={5} lg={7}>
            <h1 className="display-5">Our Services</h1>
          </Col>
          <Col md={7} lg={4} className="text-left">
            <h5 className="font-weight-light">
              We offer a wide range of services to meet the needs of of teachers
              and students. Browse below for further information
            </h5>
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
      <ServicesCards />
    </>
  );
}

export default ServicesPage;
