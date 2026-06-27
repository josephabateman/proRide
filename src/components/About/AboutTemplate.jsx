import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import customStyling from "../../styles/custom-styling";

function AboutTemplate(props) {
  return (
    <>
      <Container fluid="sm" className="about-page">
        <div className="text-center">
          <h1 className="section-heading">{props.header}</h1>
        </div>

        <Row>
          <Col>
            <div className="rotatated-bg-green about-img mb-5 float-md-left mx-md-5 d-block mx-auto ">
              <Image src={props.img} />
            </div>

            <div className="text-center">
              <a
                className="credential-badge"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.teamgb.com/athlete/phil-bateman/2mwMbevo5ycAot8uOtFW3O"
              >
                <i className="fas fa-medal"></i>
                <span>Read about Phil on the Team GB website</span>
              </a>
            </div>

            <div className="about-text p-2">
              {props.text1}
            </div>
            <div className="text-center">
              <Link to={props.btnLinkSrc} className="button">
                {props.btnText}
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            className={customStyling.aboutTemplateStyles.img2AndText2Section}
          >
            <div className="rotatated-bg-blue about-img mb-5 float-md-right mx-md-5 d-block mx-auto">
              <Image src={props.img2} />
            </div>

            <div className="about-text p-2">{props.text2}</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutTemplate;
