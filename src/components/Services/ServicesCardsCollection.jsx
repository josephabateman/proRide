import React from "react";
import servicesData from "../../data/services";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCardSmall from "./ServiceCardSmall";
import ServiceCardFullWidth from "./ServiceCardFullWidth";
import customStyling from "../../styles/custom-styling";

function ServicesCardsCollection() {
  return (
    <div>
      <Container fluid>
        <Row className={customStyling.servicesCardsCollection.firstRow.row}>
          {servicesData.map((service, key) =>
            key >= 0 && key <= 2 ? (
              <Col lg={4} md={6} className={customStyling.servicesCardsCollection.firstRow.column} key={key}>
                <ServiceCardSmall
                  img={service.svg}
                  className={customStyling.servicesCardsCollection.firstRow.containerStyle}
                  title={service.name}
                  text={service.header}
                />
              </Col>
            ) : (
              ""
            )
          )}
        </Row>
        <h2 className={customStyling.servicesCardsCollection.subHeaderText}>Explore our most popular services</h2>
        <Row className={customStyling.servicesCardsCollection.secondRow.row}>
          {servicesData.map((service, key) =>
            key >= 3 && key <=4 ? (
              <Col
                md={5}
                className={customStyling.servicesCardsCollection.secondRow.column}
                key={key}
              >
                <ServiceCardSmall
                  img={service.svg}
                  className={customStyling.servicesCardsCollection.secondRow.containerStyle}
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
        <Row className={customStyling.servicesCardsCollection.thirdRow.row}>
          <Col className={customStyling.servicesCardsCollection.thirdRow.column}>
            <ServiceCardFullWidth
              img={servicesData[5].svg}
              title={servicesData[5].name}
              description={servicesData[5].header}
              color={customStyling.serviceCardsFullPageWidth.color}
            />
          </Col>
        </Row>
        <hr />
        <h2 className={customStyling.servicesCardsCollection.subHeaderText}>Specialist services</h2>

        <Row className={customStyling.servicesCardsCollection.fourthRow.row}>
          {servicesData.map((service, key) =>
            key > 5 ? (
              <Col lg={4} md={6} className={customStyling.servicesCardsCollection.fourthRow.column} key={key}>
                <ServiceCardSmall
                  img={service.svg}
                  className={customStyling.servicesCardsCollection.fourthRow.containerStyle}
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

export default ServicesCardsCollection;
