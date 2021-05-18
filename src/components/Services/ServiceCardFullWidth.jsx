import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import customStyling from "../../styles/custom-styling";

function CardFullWidth(props) {

  const imgHeight = {
    height: customStyling.serviceCardsFullPageWidth.imgHeight,
  }

  return (
    <div className={`${props.color} ${customStyling.serviceCardsFullPageWidth.container}`}>
      <Container>
        <Row>
          <Col md={6} className={customStyling.serviceCardsFullPageWidth.column}>
            <h1 className={customStyling.serviceCardsFullPageWidth.title}>{props.title}</h1>
            <h5 className={customStyling.serviceCardsFullPageWidth.h5}>{props.description}</h5>
            <Link
              className={customStyling.serviceCardsFullPageWidth.buttonStyle}
              to={`/${props.title.replace(/[()\s+]/g, "")}`}
            >
              Learn More
            </Link>
          </Col>
          <Col>
            <img
              className={customStyling.serviceCardsFullPageWidth.imgStyle}
              style={imgHeight}
              src={props.img}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardFullWidth;
