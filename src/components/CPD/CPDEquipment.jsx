import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Seo from "../Seo";
import content from "../../data/siteContent.json";
import photo from "../../static/images/cpd/happy-boys.webp";

const c = content.cpdEquipment;

function CPDEquipment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cpd-page">
      <Seo
        title="Balance Bike CPD & Equipment for Schools | Pro Ride Coaching"
        description="One-day balance bike CPD for EYFS and KS1 staff, with bikes, helmets, kit, sessions for 3 classes, manual and video. From £525. Ideal for the PE and sport premium."
        image={photo}
      />

      {/* Short header */}
      <section className="cpd-hero">
        <Container>
          <span className="cpd-tag">
            <i className="fas fa-chalkboard-teacher me-2"></i>
            {c.tag}
          </span>
          <h1 className="cpd-hero__title">{c.heading}</h1>
          <p className="cpd-hero__sub">{c.subtitle}</p>
        </Container>
      </section>

      <Container className="cpd-body">
        {/* Packages — first thing after the header */}
        <section className="cpd-packages" id="packages">
          <Row className="g-4 justify-content-center">
            {c.packages.map((p, i) => (
              <Col md={6} lg={5} key={i}>
                <div className={"cpd-package" + (i === 0 ? " cpd-package--featured" : "")}>
                  {i === 0 && <span className="cpd-package__ribbon">Best value</span>}
                  <h2>{p.name}</h2>
                  <div className="cpd-package__price">{p.price}</div>
                  <p className="cpd-package__badge">{p.badge}</p>
                  <ul>
                    {p.items.map((item, j) => (
                      <li key={j}>
                        <i className="fas fa-check-circle"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="button">
                    {c.ctaButton}
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </section>

        {/* PE and sport premium */}
        <Row className="g-4 align-items-center cpd-section">
          <Col lg={5}>
            <img
              src={photo}
              alt="Two smiling boys on balance bikes during a Pro Ride session"
              className="cpd-rounded-img"
            />
          </Col>
          <Col lg={7} className="text-start">
            <h2 className="cpd-premium__title">{c.premiumHeading}</h2>
            <p className="cpd-premium__intro">{c.premiumIntro}</p>
            {c.quotes.map((q, i) => (
              <figure className="cpd-quote" key={i}>
                <blockquote>“{q.text}”</blockquote>
                <figcaption>{q.note}</figcaption>
              </figure>
            ))}
            <p className="cpd-premium__source">
              {c.sourceText}{" "}
              <a href={c.sourceUrl} target="_blank" rel="noopener noreferrer">
                Read it on GOV.UK
              </a>
            </p>
          </Col>
        </Row>

        {/* Testimonials */}
        <Row className="g-3 cpd-section">
          {c.testimonials.map((t, i) => (
            <Col md={6} key={i}>
              <figure className="cpd-testimonial">
                <i className="fas fa-quote-left"></i>
                <blockquote>{t.quote}</blockquote>
                <figcaption>{t.who}</figcaption>
              </figure>
            </Col>
          ))}
        </Row>

        <div className="faq-cta cpd-cta">
          <h3>{c.ctaHeading}</h3>
          <p>{c.ctaText}</p>
          <Link to="/contact" className="button">
            {c.ctaButton}
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default CPDEquipment;
