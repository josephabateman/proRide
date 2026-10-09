import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Seo from "./Seo";

function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="not-found-page text-center">
      <Seo
        title="Page not found | Pro Ride Coaching"
        description="Sorry, we couldn't find that page. Explore Pro Ride Coaching's cycling days and coaching for primary schools."
        noindex
      />
      <h1 className="section-heading">Sorry, we can't find that page</h1>
      <p className="section-sub">
        It may have moved when we updated the website. Try one of these instead:
      </p>
      <div className="hero-cta">
        <Link to="/" className="button">
          Home page
        </Link>
        <Link to="/services" className="button button--ghost">
          Our services
        </Link>
        <Link to="/contact" className="button button--ghost">
          Contact us
        </Link>
      </div>
    </Container>
  );
}

export default NotFound;
