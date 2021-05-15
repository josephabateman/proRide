import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardSingleBanner(props) {
  const button5 = {
    backgroundColor: "#4e9af1",
  };

  return (
    <div className={`${props.color} full-screen-info`}>
      <Container>
        <Row>
          <Col md={6} className="align-self-center">
            <h1 className="display-4">{props.title}</h1>
            <h4 className="font-weight-light">{props.description}</h4>
            <Link
              className="button text-decoration-none"
              to={`/${props.title.replace(/[()\s+]/g, "")}`}
              style={button5}
            >
              Learn More
            </Link>
          </Col>
          <Col>
            <img
              className="my-2"
              style={{
                height: 300,
              }}
              src={props.img}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardSingleBanner;