import React from "react";
import servicesData from "../../data/services";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCardTemplate from "./ServiceCardTemplate";
import CardFullWidth from "../Services/CardFullWidth";

function ServicesCards() {
  return (
    <div>
      <Container fluid>
        <Row className="row justify-content-center">
          {servicesData.map((service, key) =>
            key > 1 && key < 5 ? (
              <Col lg={4} md={6} className="mb-5" key={key}>
                <ServiceCardTemplate
                  img={service.svg}
                  className="service-card-img green-gradient shadow bg-white rounded font-weight-light"
                  title={service.name}
                  text={service.header}
                />
              </Col>
            ) : (
              ""
            )
          )}
        </Row>
        <h2 className="display-5">Explore our most popular services</h2>
        <Row className="row justify-content-center mt-5">
          {servicesData.map((service, key) =>
            key < 2 ? (
              <Col
                md={5}
                className="mb-5 mx-4 shadow bg-white rounded font-weight-light"
                key={key}
              >
                <ServiceCardTemplate
                  img={service.svg}
                  className="blue-gradient service-card-img-taller"
                  title={service.name}
                  text={service.header}
                />
              </Col>
            ) : (
              ""
            )
          )}
        </Row>
        <hr />
        <Row>
          <Col className="px-0">
            <CardFullWidth
              img={servicesData[3].svg}
              title={servicesData[3].name}
              description={servicesData[3].header}
              color="green-gradient"
            />
          </Col>
        </Row>
        <hr />
        <h2 className="display-5">Specialist services</h2>

        <Row>
          {servicesData.map((service, key) =>
            key > 5 ? (
              <Col lg={4} md={6} className="my-5" key={key}>
                <ServiceCardTemplate
                  img={service.svg}
                  className="service-card-img blue-gradient shadow bg-white rounded font-weight-light"
                  title={service.name}
                  text={service.header}
                />
              </Col>
            ) : (
              ""
            )
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ServicesCards;
