import React from "react";
import socialMediaData from "../../data/socialMediaData";
import { CardGroup, Card, Col } from "react-bootstrap";

function SocialMediaCardsDesktop() {
  return (
    <div>
      <CardGroup>
        {socialMediaData.map((service, key) => (
          <Col key={key}>
            <a href={service.link}>
              <Card style={{ width: "18rem" }} className="social-media-cards">
                <Card.Body>
                  <i className={service.icon}></i>

                  <Card.Title className="mt-3">{service.name}</Card.Title>
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
