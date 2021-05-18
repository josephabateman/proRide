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

      <Container fluid className={customStyling.collapsingBanners.container}>
        <Row
          style={rowContainerAfterMainBanner}
          className={customStyling.collapsingBanners.row}
        >
          {collapsingBanners.map((data, key) => (
            <Col
              className={customStyling.collapsingBanners.column}
              md={6}
              key={key}
            >
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
          <Col md={6} className={customStyling.promoVideo.container}>
            <PromoVideo src={customStyling.promoVideo.src} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
