import React from "react";
import socialMediaData from "../../data/socialMediaData";
import { CardGroup, Card, Col } from "react-bootstrap";
import customStyling from "../../styles/custom-styling";

function SocialMediaCardsDesktop() {
  const cardStyle = {
    width: customStyling.socialMediaCardsStyles.cardStyleWidth,
    minHeight: customStyling.socialMediaCardsStyles.cardStyleMinHeight
  }

  return (
    <div>
      <CardGroup>
        {socialMediaData.map((service, key) => (
          <Col key={key}>
            <a href={service.link}>
              <Card style={cardStyle}>
                <Card.Body>
                  <i className={service.icon}></i>

                  <Card.Title className={customStyling.socialMediaCardsStyles.title}>{service.name}</Card.Title>
                  <Card.Text>{service.text}</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </CardGroup>
    </div>
  );
}

export default SocialMediaCardsDesktop;
