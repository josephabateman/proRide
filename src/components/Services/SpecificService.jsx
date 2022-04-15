import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { Accordion, Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import customStyling from "../../styles/custom-styling";
import { HashLink } from "react-router-hash-link";

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
        <Row className="m-auto">
          <Col xs={12} className="mb-5">
            <h1 className={customStyling.specificServicePage.title}>
              {props.header}
            </h1>
          </Col>

          <Row className="m-auto">
            <Col xs={12} lg={5}>
              <div className="rotatated-bg-green mb-4">
                <Image src={props.img} />
              </div>

              {props.flyer ? (
                <a
                  href={props.flyer}
                  target="_blank"
                  className={customStyling.specificServicePage.flyer1Style}
                >
                  Info (printable pdf)
                </a>
              ) : (
                ""
              )}

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
            <Col xs={12} lg={7} className="p-0 p-md-4">
              <span className="ml-auto d-block">{props.text1}</span>
              <Link to="/contact" className="button">
                Get in touch
              </Link>

              {/* <Accordion id="acc1" defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <HashLink to="#acc1">
                    <Accordion.Header className="m-lg-3 p-1">
                      <span className="ml-auto d-block">{props.dropdown1}</span>
                    </Accordion.Header>
                  </HashLink>
                  <Accordion.Body className="p-0">{props.text1}</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <HashLink to="#acc1">
                    <Accordion.Header className="m-lg-3 p-1">
                      <span className="ml-auto d-block">{props.dropdown2}</span>
                    </Accordion.Header>
                  </HashLink>
                  <Accordion.Body className="p-0">{props.text2}</Accordion.Body>
                </Accordion.Item>
              </Accordion> */}
            </Col>
          </Row>

          {/* <Row className="m-auto mt-lg-5">
            <Col xs={12} lg={5} className="order-lg-2">
              <div className="rotatated-bg-blue m-auto mb-4">
                <Image src={props.img2} />
              </div>
              <Link to="/contact" className="button">
                Get in touch
              </Link>
            </Col>
            <Col xs={12} lg={7} className="m-auto p-0 p-md-4">
              <Accordion id="acc2" defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <HashLink to="#acc2">
                    <Accordion.Header className="m-lg-3 p-1">
                      <span className="ml-auto d-block">{props.dropdown3}</span>
                    </Accordion.Header>
                  </HashLink>
                  <Accordion.Body className="p-0">{props.text3}</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <HashLink to="#acc2">
                    <Accordion.Header className="m-lg-3 p-1">
                      <span className="ml-auto d-block">{props.dropdown4}</span>
                    </Accordion.Header>
                  </HashLink>
                  <Accordion.Body className="p-0">{props.text4}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row> */}
        </Row>
      </Container>
    </div>
  );
}

export default SpecificService;
