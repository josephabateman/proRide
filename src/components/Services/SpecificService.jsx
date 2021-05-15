import React from "react";
// import { Card } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import line from "../../static/images/line.png";

function SpecificService(props) {
  const button5 = {
    backgroundColor: "#4e9af1",
  };

  return (
    <div className="mx-md-5">
    
      {window.scrollTo(0, 0)}
      <ScrollToTop smooth />

      <Container fluid className="text-left">
        <h1 className="text-primary pt-3 display-3">{props.header}</h1>

        <Row>
          <Col className="pt-4">
            <img
              className="img-circle img-shadow rounded float-md-left mx-md-4 d-block mx-auto m-3"
              src={props.proRideImg}
            />
            {props.text1}
            <Link to="/aboutProRide" className="text-info">
              Learn about us as a company
            </Link>
          </Col>
        </Row>
        {/* <img className="p-3" src={line} /> */}
        <hr />
        <Row>
          <Col md={{ order: "first" }} className="pt-4">
            <img
              className="img-circle img-shadow mb-5 float-md-right mx-md-4 d-block mx-auto m-3"
              src={props.proRideImg2}
            />
            {props.text2}
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
        </Row>
      </Container>
    </div>
  );
}

export default SpecificService;
