import React from "react";
import servicesData from "../../data/services";
import {
  Accordion,
  Card,
  CardGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function ServicesHeader(props) {
  return (
    <div>
      <span className="service-icons">
        <i className={props.fontAwesomeIcon}></i>
      </span>
      <h2>{props.name}</h2>
    </div>
  );
}

function ServicesCard(props) {
  return (
    <div className="card-body blue-gradient">
      <a href={props.flyer} target="_blank">
        <button type="button" className="btn btn-outline-info">
          More info (printable pdf)
        </button>
      </a>
      {props.flyer2 ? (
        <a href={props.flyer2} target="_blank">
          <button type="button" className="btn btn-outline-info">
            Extra info (printable pdf)
          </button>
        </a>
      ) : (
        ""
      )}
      <h3>{props.header}</h3>
      {props.description}
    </div>
  );
}

// function Services() {
//   return (
//     <div>
//       <Accordion>
//         {servicesData.map((service, key) => (
//           <Card key={key}>
//             <Accordion.Toggle as={Card.Header} eventKey={`card-${key}`}>
//               <ServicesHeader
//                 fontAwesomeIcon={service.fontAwesomeIcon}
//                 name={service.name}
//               />
//             </Accordion.Toggle>
//             <Accordion.Collapse eventKey={`card-${key}`}>
//               <Card.Body>
//                 <ServicesCard
//                   flyer={service.flyer}
//                   flyer2={service.flyer2}
//                   header={service.header}
//                   description={service.description}
//                 />
//               </Card.Body>
//             </Accordion.Collapse>
//           </Card>
//         ))}
//       </Accordion>
//     </div>
//   );
// }

function Services() {
  return (
    <div>
      <Container fluid>
        <CardGroup>
          <Row>
            {servicesData.map((service, key) => (
              <Col lg={4} sm={6}>
                <Card className="mb-2">
                  <Card.Img
                    variant="top"
                    src="http://www.gatewaycycling.org.uk/wp-content/uploads/2016/04/GC-25062016-0005.jpg"
                  />
                  <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>{service.header}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">More info</small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </CardGroup>
      </Container>
    </div>
  );
}

export default Services;
