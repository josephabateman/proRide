import React from "react";
import { Card, Button } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";

function ContentTemplate(props) {
  return (
    <div>
      {window.scrollTo(0, 0)}
      <ScrollToTop smooth />
      <Card>
        <Card.Header className="blue-gradient full-screen-info" as="h2">
          {props.header}
        </Card.Header>

        <img
          className="svg green-gradient"
          src={props.img}
          alt={props.imgDescription}
        />
        {props.img2 ? <img src={props.img2} alt={props.img2Description} /> : ""}
        <div className="d-flex justify-content-center text-left">
          <Card.Body className="col-lg-8 col-md-10">
            <Card.Title as="h3">{props.header2}</Card.Title>
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
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}

export default ContentTemplate;
