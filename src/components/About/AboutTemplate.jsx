import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function AboutTemplate(props) {

  return (
    <div className="mx-md-5">
      

      <Container fluid="md" className="pl-2 text-left">
        <h1 className="py-3 display-5 text-center">{props.header}</h1>

        <Row>
          <Col>
            <Image src={props.img} rounded className="about-img float-md-left mr-md-5 d-block mx-auto m-3" />
            {/* <img
              className="about-img img-shadow rounded float-md-left mr-md-5 d-block mx-auto m-3"
              src={props.img}
            /> */}
            {props.text1}
            <Link to={props.btnLinkSrc} className="text-info">
              {props.btnText}
            </Link>
          </Col>
        </Row>
        <Row>
          <Col md={{ order: "first" }} className="mt-4 mb-4">
            <Image src={props.img2} rounded className="about-img mb-5 float-md-right mx-md-4 d-block mx-auto" />
            {/* <img
              className="about-img img-shadow mb-5 float-md-right mx-md-4 d-block mx-auto"
              src={props.img2}
            /> */}
            {props.text2}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutTemplate;
