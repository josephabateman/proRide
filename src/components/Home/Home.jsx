import React from "react";
// import BookSession from "./BookSession";
import CollapsingBanners from "../Templates/CollapsingBanners";
import { fullScreenBanners, collapsingBanners } from "../../data/homePageData";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div>
    {window.scrollTo(0, 0)}
      {fullScreenBanners.map((data, key) => (
        <CollapsingBanners
          key={key}
          color={data.color}
          title={data.title}
          description={data.description}
          buttonText={data.buttonText}
          buttonLink={data.buttonLink}
          imageDescription={data.imageDescription}
          imageSrc={data.imageSrc}
        />
      ))}

      <Container fluid className="px-0">
        <Row className="collapsing-rows">
          {collapsingBanners.map((data, key) => (
            <Col md={6} key={key}>
              <CollapsingBanners
                color={data.color}
                title={data.title}
                description={data.description}
                buttonText={data.buttonText}
                buttonLink={data.buttonLink}
                videoSrc={data.videoSrc}
                imageDescription={data.imageDescription}
                imageSrc={data.imageSrc}
              />
            </Col>
          ))}
          <Col md={6} className="mt-2 mt-md-0">
            {/* <h3 className="font-weight-light">Watch our video</h3> */}
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/KPvxQjljIgo"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
          {/* <Col>
            <BookSession />
          </Col> */}
        </Row>
        {/* <Row className="row justify-content-center">
         
        </Row> */}
      </Container>
    </div>
  );
}

export default Home;
