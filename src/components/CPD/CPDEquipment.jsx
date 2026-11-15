import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Seo from "../Seo";
import content from "../../data/siteContent.json";
import photo from "../../static/images/cpd/happy-boys.webp";
import striderImg from "../../static/images/cpd/strider-14x.webp";
import striderFlyer from "../../static/flyers/Strider 14x Balance Bike flyer.pdf";

const c = content.cpdEquipment;

function CPDEquipment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cpd-page">
      <Seo
        title="Balance Bikes & CPD for Schools | Pro Ride Coaching"
        description="One-day balance bike CPD for Reception to Year 2 staff, with demo sessions, manual, game cards and video, plus your own fleet of Strider 14x bikes. From £525. Ideal for the PE and sport premium."
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
                  {p.priceNote && <div className="cpd-package__vat">{p.priceNote}</div>}
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

        {/* Strider 14x offer */}
        <section className="cpd-strider">
          <Row className="g-0 align-items-stretch">
            <Col md={5}>
              <img
                src={striderImg}
                alt="A Strider 14x balance bike"
                className="cpd-strider__img"
              />
            </Col>
            <Col md={7}>
              <div className="cpd-strider__body text-start">
                <span className="cpd-strider__tag">Offer</span>
                <h2>{c.striderHeading}</h2>
                <p>{c.striderText}</p>
                <ul className="cpd-ticks">
                  {c.striderFeatures.map((f, i) => (
                    <li key={i}>
                      <i className="fas fa-check-circle"></i>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="cpd-strider__price">
                  <span>{c.striderPriceLead}</span> <strong>{c.striderPrice}</strong>{" "}
                  <span>{c.striderPriceNote}</span>
                  <div className="cpd-strider__discount">{c.striderDiscount}</div>
                </div>
                <a
                  href={striderFlyer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  <i className="fas fa-file-pdf me-2"></i>
                  {c.striderButton}
                </a>
              </div>
            </Col>
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
