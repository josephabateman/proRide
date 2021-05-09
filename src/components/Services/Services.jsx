import React from "react";
import { Link } from "react-router-dom";
import servicesData from "../../data/services";
// import ContentTemplate from "../ContentTemplate";
import { Card, CardGroup, Container, Row, Col, Button } from "react-bootstrap";

function ServicesCards() {
  return (
    <div>
      <Container fluid>
        <CardGroup>
          <Row>
            {servicesData.map((service, key) => (
              <Col lg={6} sm={12} key={key}>
                <Card className="full-screen-info">
                  <Card.Img
                    variant="top"
                    src="http://www.gatewaycycling.org.uk/wp-content/uploads/2016/04/GC-25062016-0005.jpg"
                  />
                  <Card.Body
                    className={
                      key % 2 == 0 ? "blue-gradient" : "green-gradient"
                    }
                  >
                    <Card.Title as="h3">{service.name}</Card.Title>
                    <Card.Text>{service.header}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Link to={`/${service.name.replace(/[()\s+]/g, "")}`}>
                      <Button variant="outline-primary">
                        <small>More info</small>
                      </Button>
                    </Link>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </CardGroup>
      </Container>
    </div>
  );
}

{
  /* <ContentTemplate
  header={props.name}
  header2={props.header2}
  description={props.description}
  flyer={props.flyer}
  flyer2={props.flyer2}
/>; */
}

function Services() {
  return (
    <div>
      <ServicesCards />
    </div>
  );
}

export default Services;
