import React from "react";
import AboutTemplate from "./AboutTemplate";
import Seo from "../Seo";
import data from "../../data/aboutProRideData";

function AboutProRide() {
  return (
    <div>
      <Seo
        title="About Pro Ride Coaching | Cycling for Schools"
        description="Learn about Pro Ride Coaching — fun, professional cycling days for primary schools across West Yorkshire, founded by former Team GB and Olympic cyclist Phil Bateman."
      />
      {window.scrollTo(0, 0)}
      <AboutTemplate
        img={data.img}
        img2={data.img2}
        text1={data.text1}
        text2={data.text2}
        header={data.header}
        btnLinkSrc="/aboutPhil"
        btnText="Learn about the founder"
      />
    </div>
  );
}

export default AboutProRide;
