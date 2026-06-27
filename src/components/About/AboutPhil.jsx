import React from "react";
import AboutTemplate from "./AboutTemplate";
import Seo from "../Seo";
import data from "../../data/aboutPhilData";

function AboutPhil() {
  return (
    <div>
      <Seo
        title="About Phil Bateman | Former Team GB Cyclist & Founder of Pro Ride"
        description="Meet Phil Bateman — former Team GB and Olympic cyclist and founder of Pro Ride Coaching, bringing professional cycling coaching and fun biking days to schools across West Yorkshire."
      />
      {window.scrollTo(0, 0)}
      <AboutTemplate
        img={data.img}
        img2={data.img2}
        text1={data.text1}
        text2={data.text2}
        header={data.header}
        btnLinkSrc="/aboutProRide"
        btnText="Learn about Pro Ride"
      />
    </div>
  );
}

export default AboutPhil;
