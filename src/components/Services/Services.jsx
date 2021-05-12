import React from "react";
import { Link } from "react-router-dom";
import servicesData from "../../data/services";
// import ContentTemplate from "../ContentTemplate";
import { Card, CardGroup, Container, Row, Col, Button } from "react-bootstrap";
import MostPopular from "./MostPopular";
import Card1 from "../Templates/Card1";
import CardSingleBanner from "../Templates/Card-singleBanner";

function ServiceLinks() {
  return (
    <div>
      {/* shadow box with links */}

      <Container fluid>
        <Row>
          {servicesData.map((service, key) => {
            return (
              <Col
                key={key}
                className="shadow p-3 m-2 bg-white rounded font-weight-light"
              >
                <Link
                  className="text-decoration-none"
                  to={`/${service.name.replace(/[()\s+]/g, "")}`}
                >
                  {service.name}
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

// function ServicesCards() {
//   return (
//     <div>
//       {/* cards */}
//       <Container fluid>
//         <CardGroup>
//           <Row>
//             {servicesData.map((service, key) => (
//               <Col lg={3} sm={6} key={key}>
//                 <Card className="full-screen-info">
//                   <Card.Img
//                     className="content-template-img"
//                     variant="top"
//                     src={service.img}
//                   />

//                   <Card.Body
//                     className={
//                       key % 2 == 0 ? "blue-gradient" : "green-gradient"
//                     }
//                   >
//                     <Card.Title as="h3">{service.name}</Card.Title>
//                     <Card.Text>{service.header}</Card.Text>
//                   </Card.Body>
//                   <Card.Footer>
//                     <Link to={`/${service.name.replace(/[()\s+]/g, "")}`}>
//                       <Button variant="outline-primary">
//                         <small>More info</small>
//                       </Button>
//                     </Link>
//                   </Card.Footer>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </CardGroup>
//       </Container>
//     </div>
//   );
// }

function ServicesCards() {
  return (
    <div>
      <Container fluid>
        {/* <Row> */}
        {/* <Col lg={2} className="d-none d-lg-block">
            <ServiceLinks />
          </Col> */}
        {/* <Col> */}
        <Row className="row justify-content-center">
          {servicesData.map((service, key) =>
            key > 1 && key < 5 ? (
              <Col lg={4} md={6} className="mb-5">
                <Card1
                  img={service.img}
                  className="service-card-img green-gradient shadow bg-white rounded font-weight-light"
                  title={service.name}
                  text={service.header}
                />
              </Col>
            ) : (
              ""
            )
          )}
        </Row>
        <h2 className="display-4">Explore our most popular services</h2>
        <Row className="row justify-content-center mt-5">
          {servicesData.map((service, key) =>
            key < 2 ? (
              <Col
                md={5}
                className="mb-5 mx-4 shadow bg-white rounded font-weight-light"
              >
                <Card1
                  img={service.img}
                  className="blue-gradient service-card-img-taller"
                  title={service.name}
                  text={service.header}
                />
              </Col>
            ) : (
              ""
            )
          )}
        </Row>
        <hr />
        <Row>
          <Col className="px-0">
            <CardSingleBanner
            img={servicesData[3].img}
              title={servicesData[3].name}
              description={servicesData[3].header}
              color="green-gradient"
            />
          </Col>
        </Row>
        <hr />
        <h2 className="display-4">Specialist services</h2>

        <Row>
          {servicesData.map((service, key) =>
            key > 5 ? (
              <Col lg={4} md={6} className="my-5">
                <Card1
                  img={service.img}
                  className="service-card-img blue-gradient shadow bg-white rounded font-weight-light"
                  title={service.name}
                  text={service.header}
                />
              </Col>
            ) : (
              ""
            )
          )}
        </Row>
        {/* </Col> */}
        {/* </Row> */}
      </Container>
    </div>
  );
}

function HeaderText() {
  return (
    <>
      <Container>
        <Row className="mt-3">
          <Col md={5} lg={7}>
            <h1 className="text-left display-3">Services</h1>
          </Col>
          <Col md={7} lg={4} className="text-left">
            <h5 className="font-weight-light">
              We offer a wide range of services to meet the needs of of teachers
              and students. Browse below for further information
            </h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}

function Services() {
  return (
    <>
      <HeaderText />
      <hr />
      <ServicesCards />
    </>
  );
}

export default Services;
