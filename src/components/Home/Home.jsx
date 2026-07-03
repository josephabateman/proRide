import React from "react";
import CollapsingBanners from "./CollapsingBanners";
import { fullScreenBanners, collapsingBanners } from "../../data/homePageData";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PromoVideo from "./PromoVideo";
import Seo from "../Seo";
import customStyling from "../../styles/custom-styling";
import content from "../../data/siteContent.json";

const features = content.home.cards;

function Home() {
  return (
    <div>
      <Seo
        title="Pro Ride Coaching | Fun Cycling Days for Schools in West Yorkshire"
        description="Pro Ride Coaching brings fun, professional cycling days to primary schools across West Yorkshire. Balance bike days, learn-to-ride, KS1 & KS2 cycle sport and whole-school days — all equipment provided. Founded by former Team GB cyclist Phil Bateman."
      />
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

      {/* Hero call-to-action */}
      <div className="hero-cta">
        <Link to="/contact" className="button">
          {content.home.heroButton1}
        </Link>
        <Link to="/services" className="button button--ghost">
          {content.home.heroButton2}
        </Link>
      </div>

      {/* Why ProRide — trust / features band */}
      <section className="feature-band">
        <Container>
          <h2 className="section-heading">{content.home.whyHeading}</h2>
          <p className="section-sub">{content.home.whySubtitle}</p>
          <Row className="justify-content-center">
            {features.map((f, key) => (
              <Col md={6} lg={3} className="mb-4" key={key}>
                <div className="feature-card">
                  <div className="feature-card__icon">
                    <i className={f.icon}></i>
                  </div>
                  <h3 className="feature-card__title">{f.title}</h3>
                  <p className="feature-card__text">{f.body}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Services teaser + promo video */}
      <section className="home-action">
        <Container>
          <h2 className="section-heading">{content.home.actionHeading}</h2>
          <p className="section-sub">{content.home.actionSubtitle}</p>
          <Row className="g-3 align-items-stretch">
            {collapsingBanners.map((data, key) => (
              <Col lg={6} key={key}>
                <div className="home-tile h-100">
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
                </div>
              </Col>
            ))}

            <Col lg={6}>
              <div className="home-tile home-tile--video h-100">
                <PromoVideo src={content.home.promoVideo} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Closing call-to-action */}
      <section className="cta-band">
        <Container>
          <h2 className="cta-band__title">{content.home.ctaHeading}</h2>
          <p className="cta-band__text">{content.home.ctaText}</p>
          <Link to="/contact" className="button">
            {content.home.ctaButton}
          </Link>
        </Container>
      </section>
    </div>
  );
}

export default Home;
