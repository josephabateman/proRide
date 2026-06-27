import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { Accordion, Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Seo from "../Seo";

function SpecificService(props) {
  return (
    <div className="service-detail-page">
      <Seo
        title={`${props.title} for Schools | Pro Ride Coaching`}
        description={`${props.header} ${props.title} from Pro Ride Coaching — fun, professionally coached cycling sessions for schools across West Yorkshire. All equipment provided.`}
      />
      {window.scrollTo(0, 0)}
      <ScrollToTop smooth />

      {/* Hero */}
      <div
        className="service-hero"
        style={{ backgroundImage: `url(${props.tile})` }}
      >
        <div className="service-hero__overlay">
          <h1 className="service-hero__title">{props.title}</h1>
          {props.header ? (
            <p className="service-hero__sub">{props.header}</p>
          ) : (
            ""
          )}
        </div>
      </div>

      <Container className="service-detail">
        <Row className="g-4 g-lg-5 justify-content-center">
          {/* Body — the main content, shown first */}
          <Col xs={12} lg={7}>
            <div className="service-detail__body text-start">
              {props.dropdown1 && props.dropdown2 ? (
                <Accordion id="acc1" defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{props.dropdown1}</Accordion.Header>
                    <Accordion.Body>{props.text1}</Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>{props.dropdown2}</Accordion.Header>
                    <Accordion.Body>{props.text2}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ) : (
                <p className="service-detail__text">{props.text1}</p>
              )}
            </div>

            <div className="text-center text-lg-start">
              <Link to="/contact" className="button">
                Get in touch
              </Link>
            </div>
          </Col>

          {/* Photo + downloads — supporting sidebar */}
          <Col xs={12} lg={5}>
            <div className="service-detail__media mb-3">
              <Image
                src={props.img}
                alt={`${props.title} — Pro Ride Coaching cycling day for schools`}
              />
            </div>

            <div className="service-detail__downloads">
              {props.flyer ? (
                <a
                  href={props.flyer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--ghost me-2"
                >
                  <i className="fas fa-file-pdf me-2"></i>
                  {props.dropdown1
                    ? `${props.dropdown1} PDF`
                    : `${props.title} PDF`}
                </a>
              ) : (
                ""
              )}

              {props.flyer2 ? (
                <a
                  href={props.flyer2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--ghost"
                >
                  <i className="fas fa-file-pdf me-2"></i>
                  {props.dropdown2 ? `${props.dropdown2} PDF` : "Further info PDF"}
                </a>
              ) : (
                ""
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SpecificService;
