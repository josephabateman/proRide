import React from "react";
import { Card, Button } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";

function ContentTemplate(props) {
  return (
    <div>
      <ScrollToTop smooth />
      {window.scrollTo(0, 0)}
      <Card>
        <Card.Header as="h5">{props.header}</Card.Header>
        <div className="d-flex justify-content-center">
          <Card.Body className="col-lg-8 col-md-10">
            <Card.Title>{props.header2}</Card.Title>
            {props.description}
            {props.flyer ? (
              <a href={props.flyer} target="_blank">
                <Button variant="primary">More info (printable pdf)</Button>
              </a>
            ) : (
              ""
            )}
            {props.flyer2 ? (
              <a href={props.flyer2} target="_blank">
                <Button variant="secondary">Extra info (printable pdf)</Button>
              </a>
            ) : (
              ""
            )}
            <img src={props.img} alt={props.imgDescription} />
            {props.img2 ? (
              <img src={props.img2} alt={props.img2Description} />
            ) : (
              ""
            )}
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}

export default ContentTemplate;
