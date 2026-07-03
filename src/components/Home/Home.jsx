import React from "react";
import CollapsingBanners from "./CollapsingBanners";
import { fullScreenBanners, collapsingBanners } from "../../data/homePageData";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PromoVideo from "./PromoVideo";
import Seo from "../Seo";
import customStyling from "../../styles/custom-styling";

const features = [
  {
    icon: "fas fa-shield-alt",
    title: "Fully Insured & Risk Assessed",
    text: "Public liability cover, DBS-checked coaches and risk assessments provided — everything sorted before we arrive.",
  },
  {
    icon: "fas fa-truck",
    title: "Zero Prep for Staff",
    text: "We bring and run everything — bikes, helmets, equipment. Your teachers just turn up with the kids.",
  },
  {
    icon: "fas fa-hand-holding-heart",
    title: "Fully Inclusive",
    text: "From wobbly first-timers to confident riders, every child improves and leaves with a smile — all ages and abilities, including SEND.",
  },
  {
    icon: "fas fa-award",
    title: "Expertly Delivered",
    text: "Experienced, fully qualified coaches who are friendly, patient and genuinely enthusiastic about getting kids riding well.",
  },
];

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
          Book your school in
        </Link>
        <Link to="/services" className="button button--ghost">
          Explore our services
        </Link>
      </div>

      {/* Why ProRide — trust / features band */}
      <section className="feature-band">
        <Container>
          <h2 className="section-heading">Why schools choose ProRide</h2>
          <p className="section-sub">
            Professionally coached cycling days that get every child riding,
            smiling and building confidence for life.
          </p>
          <Row className="justify-content-center">
            {features.map((f, key) => (
              <Col md={6} lg={3} className="mb-4" key={key}>
                <div className="feature-card">
                  <div className="feature-card__icon">
                    <i className={f.icon}></i>
                  </div>
                  <h3 className="feature-card__title">{f.title}</h3>
                  <p className="feature-card__text">{f.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Services teaser + promo video */}
      <section className="home-action">
        <Container>
          <h2 className="section-heading">See ProRide in action</h2>
          <p className="section-sub">
            Take a look at what a Pro Ride day looks like — then explore the full
            range of sessions we bring to schools.
          </p>
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
                <PromoVideo src={customStyling.promoVideo.src} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Closing call-to-action */}
      <section className="cta-band">
        <Container>
          <h2 className="cta-band__title">Ready to get your school riding?</h2>
          <p className="cta-band__text">
            Tell us your preferred dates and we'll plan a brilliant cycling day
            around your school.
          </p>
          <Link to="/contact" className="button">
            Get in touch
          </Link>
        </Container>
      </section>
    </div>
  );
}

export default Home;
