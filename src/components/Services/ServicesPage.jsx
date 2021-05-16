import React from "react";
import servicesData from "../../data/services";
// import ContentTemplate from "../ContentTemplate";
import { Container, Row, Col } from "react-bootstrap";
import Card1 from "../Templates/Card1";
import CardSingleBanner from "../Templates/Card-singleBanner";

function ServicesCards() {
  return (
    <div>
      <Container fluid>
        <Row className="row justify-content-center">
          {servicesData.map((service, key) =>
            key > 1 && key < 5 ? (
              <Col lg={4} md={6} className="mb-5" key={key}>
                <Card1
                  img={service.img}
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
        <h2 className="display-4">Explore our most popular services</h2>
        <Row className="row justify-content-center mt-5">
          {servicesData.map((service, key) =>
            key < 2 ? (
              <Col
                md={5}
                className="mb-5 mx-4 shadow bg-white rounded font-weight-light"
                key={key}
              >
                <Card1
                  img={service.img}
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
            <CardSingleBanner
              img={servicesData[3].img}
              title={servicesData[3].name}
              description={servicesData[3].header}
              color="green-gradient"
            />
          </Col>
        </Row>
        <hr />
        <h2 className="display-4">Specialist services</h2>

        <Row>
          {servicesData.map((service, key) =>
            key > 5 ? (
              <Col lg={4} md={6} className="my-5" key={key}>
                <Card1
                  img={service.img}
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

function HeaderText() {
  return (
    <>
      <Container>
        <Row className="mt-3">
          <Col md={5} lg={7}>
            <h1 className="text-left display-3">Services</h1>
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
