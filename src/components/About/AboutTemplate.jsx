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
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="rotatated-bg-green about-img mb-5 float-md-left mx-md-5 d-block mx-auto ">
              <Image src={props.img} />
            </div>

            <div className="text-center">
              <a
                target="_blank"
                href="https://www.teamgb.com/athlete/phil-bateman/2mwMbevo5ycAot8uOtFW3O"
              >
                <img className="mb-2"
                  style={{ width: 100 }}
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Team-gb-logo.svg/1200px-Team-gb-logo.svg.png"
                />
                <p className={customStyling.aboutTemplateStyles.linkText}>Read about Phil on the British Cycling website</p>
              </a>
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
