import React from "react";
// import { Card } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function SpecificService(props) {
  const button5 = {
    backgroundColor: "#4e9af1",
  };

  return (
    <div>
      {window.scrollTo(0, 0)}
      <ScrollToTop smooth />
      <img src={props.img} className="service-card-img green-gradient" />

      <Container className='pl-2'>
        <Row>
          <Col xs={12}>
            <h1 className="py-3 display-5">{props.header}</h1>
          </Col>
          <Col xs={12} className="text-left">
            {props.text1}
          </Col>
          <Col xs={12} className="mb-5">
            <a
              href={props.flyer}
              target="_blank"
              className="button mr-3"
              style={button5}
            >
              Info (printable pdf)
            </a>
            {props.flyer2 ? (
              <a
                href={props.flyer2}
                target="_blank"
                className="button"
                style={button5}
              >
                Further info (printable pdf)
              </a>
            ) : (
              ""
            )}
          </Col>

          <Col xs={12} md={6}>
            <Image src={props.proRideImg} rounded />
          </Col>
          <Col xs={12} md={6} className="m-md-0 mt-4">
            <Image src={props.proRideImg2} rounded />
          </Col>

          <Col className="mt-5 text-left" xs={12}>
            {props.text2}
          </Col>
        </Row>
      </Container>
      <Link to="/contact" className="button" style={button5}>
        Get in touch
      </Link>
    </div>
  );
}

export default SpecificService;
