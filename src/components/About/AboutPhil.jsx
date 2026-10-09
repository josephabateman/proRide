import React, { useEffect } from "react";
import AboutTemplate from "./AboutTemplate";
import Seo from "../Seo";
import data from "../../data/aboutPhilData";

function AboutPhil() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Seo
        title="About Phil Bateman | Former Team GB Cyclist & Founder of Pro Ride"
        description="Meet Phil Bateman — former Team GB and Olympic cyclist and founder of Pro Ride Coaching, bringing professional cycling coaching and fun cycling days to primary schools across the UK."
      />
      <AboutTemplate
        img={data.img}
        imgAlt={data.imgAlt}
        img2={data.img2}
        img2Alt={data.img2Alt}
        text1={data.text1}
        text2={data.text2}
        header={data.header}
        btnLinkSrc="/about"
        btnText="Learn about Pro Ride"
      />
    </div>
  );
}

export default AboutPhil;
