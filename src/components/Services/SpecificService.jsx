import React from "react";
// import { Card } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import { Container, Row, Col } from "react-bootstrap";

function SpecificService(props) {
  const button5 = {
    backgroundColor: "#4e9af1",
  };

  return (
    <div>
      {window.scrollTo(0, 0)}
      <ScrollToTop smooth />

      <Container fluid className="text-left">
        <h1 className="text-primary pt-3 display-3">{props.header}</h1>

        <Row>
          <Col md={5} sm={6}>
            <img className="img-circle img-shadow" src={props.proRideImg} />
          </Col>
          <Col className="pt-4">{props.text1}</Col>
        </Row>
        <hr />
        <Row>
          <Col md={4} sm={6}>
            <img
              className="img-circle img-shadow mb-5"
              src={props.proRideImg2}
            />
          </Col>
          <Col md={{ order: 'first' }} className="pt-4">
            {props.text2}
            <a
              href={props.flyer}
              target="_blank"
              className="button"
              style={button5}
            >
              Extra info (printable pdf)
            </a>
            {props.flyer2 ? (
              <a
                href={props.flyer2}
                target="_blank"
                className="button"
                style={button5}
              >
                Extra info (printable pdf)
              </a>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Container>

      {/* <Card>
        <Card.Header className="blue-gradient full-screen-info" as="h2">
          {props.header}
        </Card.Header>

        <img
          className="svg green-gradient"
          src={props.img}
          alt={props.imgDescription}
        />
        {props.img2 ? <img src={props.img2} alt={props.img2Description} /> : ""}
        <div className="d-flex justify-content-center text-left">
          <Card.Body className="col-lg-8 col-md-10">
            <Card.Title as="h3">{props.header2}</Card.Title>
            {props.description}
            {props.flyer ? (
              <a href={props.flyer} target="_blank">
                <Button variant="primary">More info (printable pdf)</Button>
              </a>
            ) : (
              ""
            )}
            {props.flyer2 ? (
              <a href={props.flyer2} target="_blank">
                <Button variant="secondary">Extra info (printable pdf)</Button>
              </a>
            ) : (
              ""
            )}
          </Card.Body>
        </div>
      </Card> */}
    </div>
  );
}

export default SpecificService;
