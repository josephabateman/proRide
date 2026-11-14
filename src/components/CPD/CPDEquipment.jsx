import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import Seo from "../Seo";
import content from "../../data/siteContent.json";
import { renderContent } from "../../data/renderContent";
import heroImg from "../../static/images/cpd/happy-boys.webp";
import riderImg from "../../static/images/cpd/rider-portrait.webp";
import rampImg from "../../static/images/cpd/coach-ramp.webp";
import groupImg from "../../static/images/cpd/group-coach.webp";
import kitImg from "../../static/images/cpd/kit-starter.webp";
import bike12Img from "../../static/images/cpd/bike-12s.webp";
import bike14Img from "../../static/images/cpd/bike-14x.webp";
import helmetImg from "../../static/images/cpd/helmet.webp";

const c = content.cpdEquipment;

const equipment = [
  { img: bike12Img, label: "Strider 12 Sport balance bike" },
  { img: bike14Img, label: "Strider 14X balance-to-pedal bike" },
  { img: helmetImg, label: "Hardshell helmets" },
  { img: kitImg, label: "Equipment starter kit" },
];

function CPDEquipment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cpd-page">
      <Seo
        title="Balance Bike CPD & Equipment for Schools | Pro Ride Coaching"
        description="One-day balance bike CPD for EYFS and KS1 staff, with bikes, helmets, kit, sessions for 3 classes, manual and video. Built around the DfE PE and sport premium priority of sustainable staff CPD."
        image={heroImg}
      />

      {/* Hero */}
      <section className="cpd-hero">
        <Container>
          <span className="cpd-tag">
            <i className="fas fa-chalkboard-teacher me-2"></i>
            {c.tag}
          </span>
          <h1 className="cpd-hero__title">{c.heading}</h1>
          <p className="cpd-hero__sub">{c.subtitle}</p>
          <div className="cpd-hero__cta">
            <Link to="/contact" className="button">
              {c.ctaButton}
            </Link>
            <a href="#packages" className="button button--ghost">
              See packages
            </a>
          </div>
        </Container>
        <img
          src={heroImg}
          alt="Two smiling boys on balance bikes during a Pro Ride session"
          className="cpd-hero__img"
        />
      </section>

      <Container className="cpd-body">
        {/* Intro */}
        <Row className="g-4 align-items-center cpd-intro">
          <Col lg={7} className="text-start">
            {renderContent(c.intro)}
          </Col>
          <Col lg={5}>
            <div className="cpd-photos">
              <img src={rampImg} alt="A Pro Ride coach helping a child ride over a ramp" />
              <img src={riderImg} alt="A young child on a Strider balance bike" />
            </div>
          </Col>
        </Row>

        {/* PE and sport premium */}
        <section className="cpd-premium">
          <div className="cpd-premium__head">
            <i className="fas fa-pound-sign"></i>
            <h2>{c.premiumHeading}</h2>
          </div>
          <p className="cpd-premium__intro">{c.premiumIntro}</p>
          <Row className="g-3">
            {c.quotes.map((q, i) => (
              <Col md={6} key={i}>
                <figure className="cpd-quote">
                  <blockquote>“{q.text}”</blockquote>
                  <figcaption>{q.note}</figcaption>
                </figure>
              </Col>
            ))}
          </Row>
          <p className="cpd-premium__source">
            {c.sourceText}{" "}
            <a href={c.sourceUrl} target="_blank" rel="noopener noreferrer">
              Read the guidance on GOV.UK
            </a>
          </p>
        </section>

        {/* How it works */}
        <section className="cpd-section">
          <h2 className="section-heading">{c.stepsHeading}</h2>
          <Row className="g-4 mt-1">
            {c.steps.map((s, i) => (
              <Col md={4} key={i}>
                <div className="cpd-step">
                  <span className="cpd-step__num">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </Col>
            ))}
          </Row>
        </section>

        {/* Packages */}
        <section className="cpd-section" id="packages">
          <h2 className="section-heading">{c.packagesHeading}</h2>
          <Row className="g-4 mt-1 justify-content-center">
            {c.packages.map((p, i) => (
              <Col md={6} lg={5} key={i}>
                <div className={"cpd-package" + (i === 0 ? " cpd-package--featured" : "")}>
                  {i === 0 && <span className="cpd-package__ribbon">Best value</span>}
                  <h3>{p.name}</h3>
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
                    Enquire now
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </section>

        {/* Takeaways + group photo */}
        <Row className="g-4 align-items-center cpd-section">
          <Col lg={5}>
            <img
              src={groupImg}
              alt="Children on balance bikes gathered around a Pro Ride coach"
              className="cpd-rounded-img"
            />
          </Col>
          <Col lg={7} className="text-start">
            <h2 className="faq-section__title">{c.takeawayHeading}</h2>
            <ul className="cpd-ticks">
              {c.takeaways.map((t, i) => (
                <li key={i}>
                  <i className="fas fa-check-circle"></i>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Equipment */}
        <section className="cpd-section">
          <h2 className="section-heading">{c.equipmentHeading}</h2>
          <p className="section-sub">{c.equipmentText}</p>
          <Row className="g-3">
            {equipment.map((e, i) => (
              <Col xs={6} lg={3} key={i}>
                <figure className="cpd-kit">
                  <img src={e.img} alt={e.label} />
                  <figcaption>{e.label}</figcaption>
                </figure>
              </Col>
            ))}
          </Row>
        </section>

        {/* Testimonials */}
        <section className="cpd-section">
          <h2 className="section-heading">{c.testimonialsHeading}</h2>
          <Row className="g-3 mt-1">
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
        </section>

        {/* FAQs */}
        <div className="faq-section cpd-faq">
          <h2 className="faq-section__title">{c.faqHeading}</h2>
          <Accordion>
            {c.faqs.map((item, i) => (
              <Accordion.Item eventKey={`${i}`} key={i}>
                <Accordion.Header>{item.q}</Accordion.Header>
                <Accordion.Body>{item.a}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

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
