import React from "react";
import servicesData from "../../data/services";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCardSmall from "./ServiceCardSmall";

function ServicesCardsCollection() {
  return (
    <Container className="services-grid">
      <Row className="g-4 justify-content-center">
        {servicesData.map((service, key) => (
          <Col xs={12} sm={6} lg={4} className="d-flex" key={key}>
            <ServiceCardSmall
              img={service.tile}
              title={service.name}
              text={service.header}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ServicesCardsCollection;
