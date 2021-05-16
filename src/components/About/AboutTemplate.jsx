import React from "react";
// import { Card } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function AboutTemplate(props) {
  const button5 = {
    backgroundColor: "#4e9af1",
  };

  return (
    <div className="mx-md-5">
      {window.scrollTo(0, 0)}
      <ScrollToTop smooth />

      <Container fluid="md" className="text-left">
        <h1 className="pt-3 display-4">{props.header}</h1>

        <Row>
          <Col className="mt-4 mb-4">
            <img
              className="about-img img-shadow rounded float-md-left mr-md-5 d-block mx-auto m-3"
              src={props.img}
            />
            {props.text1}
            <Link to={props.btnLinkSrc} className="text-info">
              {props.btnText}
            </Link>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={{ order: "first" }} className="mt-4 mb-4">
            <img
              className="about-img img-shadow mb-5 float-md-right mx-md-4 d-block mx-auto"
              src={props.img2}
            />
            {props.text2}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutTemplate;
