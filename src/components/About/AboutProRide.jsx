import React, { useEffect } from "react";
import AboutTemplate from "./AboutTemplate";
import Seo from "../Seo";
import data from "../../data/aboutProRideData";

function AboutProRide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Seo
        title="About Pro Ride Coaching | Cycling for Schools"
        description="Learn about Pro Ride Coaching — fun, professional cycling days for primary schools across the UK, founded by former Team GB and Olympic cyclist Phil Bateman."
      />
      <AboutTemplate
        img={data.img}
        imgAlt={data.imgAlt}
        img2={data.img2}
        img2Alt={data.img2Alt}
        text1={data.text1}
        text2={data.text2}
        header={data.header}
        btnLinkSrc="/about/phil-bateman"
        btnText="Learn about the founder"
      />
    </div>
  );
}

export default AboutProRide;
