import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import customStyling from '../../styles/custom-styling'

function AboutTemplate(props) {
  return (
    <>
      <Container fluid="sm" className={customStyling.aboutTemplateStyles.container}>
        <h1 className={customStyling.aboutTemplateStyles.h1}>
          {props.header}
        </h1>

        <Row>
          <Col>
            <Image
              src={props.img}
              rounded
              className={customStyling.aboutTemplateStyles.image1}
            />

            {props.text1}
            <Link to={props.btnLinkSrc} className={customStyling.aboutTemplateStyles.linkText}>
              {props.btnText}
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className={customStyling.aboutTemplateStyles.img2AndText2Section}>
            <Image
              src={props.img2}
              rounded
              className={customStyling.aboutTemplateStyles.image2}
            />

            {props.text2}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutTemplate;
