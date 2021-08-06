import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import customStyling from "../../styles/custom-styling";

function AboutTemplate(props) {
  return (
    <>
      <Container
        fluid="sm"
        className={customStyling.aboutTemplateStyles.container}
      >
        <Row>
          <Col>
            <div className="row mb-3">
              <div className="col-lg-4"></div>
              <div className="col-lg-8">
                <h1 className={customStyling.aboutTemplateStyles.h1}>
                  {props.header}
                </h1>
              </div>
            </div>
            <div className="rotatated-bg-green about-img mb-5 float-md-left mx-md-5 d-block mx-auto ">
              <Image src={props.img} />
            </div>

            <div className="text-center p-2">
              {props.text1}
              <Link
                to={props.btnLinkSrc}
                className={customStyling.aboutTemplateStyles.linkText}
              >
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

            <div className="text-center p-2">{props.text2}</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutTemplate;
