import React from "react";
import CollapsingBanners from "./CollapsingBanners";
import { fullScreenBanners, collapsingBanners } from "../../data/homePageData";
import { Container, Row, Col } from "react-bootstrap";
import PromoVideo from "./PromoVideo";
import customStyling from "../../styles/custom-styling";

function Home() {
  const rowContainerAfterMainBanner = {
    minHeight:
      customStyling.collapsingBanners.minHeight_rowContainerAfterMainBanner,
  };

  return (
    <div>
      {window.scrollTo(0, 0)}
      {fullScreenBanners.map((data, key) => (
        <CollapsingBanners
          key={key}
          cardContainerPreferences={customStyling.collapsingBanners.mainCard}
          title={data.title}
          description={data.description}
          buttonText={data.buttonText}
          buttonLink={data.buttonLink}
          imageDescription={data.imageDescription}
          imageSrc={data.imageSrc}
        />
      ))}

      <Container fluid className="pt-1">
        <Row>
          {collapsingBanners.map((data, key) => (
            <Col lg={6} className="p-0 pb-1" key={key}>
              <CollapsingBanners
                cardContainerPreferences={data.color}
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

          <Col lg={6} className="p-0 pb-1">
            <div className="ml-lg-1">
              <PromoVideo src={customStyling.promoVideo.src} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
