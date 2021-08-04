import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import customStyling from "../../styles/custom-styling";

function SpecificService(props) {
  return (
    <div>
      {window.scrollTo(0, 0)}
      <ScrollToTop smooth />
      <img
        src={props.svg}
        className={customStyling.specificServicePage.svgImageStyle}
      />

      <Container className={customStyling.specificServicePage.container}>
        <Row>
          <Col xs={12}>
            <h1 className={customStyling.specificServicePage.title}>
              {props.header}
            </h1>
          </Col>
          <Col xs={12} className={customStyling.specificServicePage.text1}>
            {props.text1}
          </Col>
          <Col xs={12} className={customStyling.specificServicePage.flyer1Col}>
            <a
              href={props.flyer}
              target="_blank"
              className={customStyling.specificServicePage.flyer1Style}
            >
              Info (printable pdf)
            </a>
            {props.flyer2 ? (
              <a
                href={props.flyer2}
                target="_blank"
                className={customStyling.specificServicePage.flyer2Style}
              >
                Further info (printable pdf)
              </a>
            ) : (
              ""
            )}
          </Col>

          <Col xs={10} md={5} className="rotatated-bg-green mb-5 ml-auto mr-auto m-md-auto">
              <Image src={props.img} rounded />

          </Col>
          <Col xs={10} md={5} className="rotatated-bg-blue m-auto">
              <Image src={props.img2} rounded />
          </Col>


          <Col className={customStyling.specificServicePage.text2} xs={12}>
            {props.text2}
          </Col>
        </Row>
      </Container>
      <Link to="/contact" className="button">
        Get in touch
      </Link>
    </div>
  );
}

export default SpecificService;
