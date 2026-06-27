import React from "react";
import { Container } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import ServicesCardsCollection from "./ServicesCardsCollection";
import Seo from "../Seo";

function HeaderText() {
  return (
    <>
      {window.scrollTo(0, 0)}
      <ScrollToTop smooth />
      <Seo
        title="Our Cycling Services for Schools | Pro Ride Coaching"
        description="Explore Pro Ride's cycling sessions for schools: balance bike days, KS1 fun days, KS2 cyclesport, whole-school days, after-school clubs, competition days, road safety training and staff CPD. Serving West Yorkshire schools."
      />

      <Container className="text-center pt-4">
        <h1 className="section-heading">Our services</h1>
        <p className="section-sub">
          Fun, professionally coached cycling sessions for every age and
          ability — browse our programmes for Nursery, KS1 and KS2.
        </p>
      </Container>
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <HeaderText />
      <ServicesCardsCollection />
    </>
  );
}

export default ServicesPage;
