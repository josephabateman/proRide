import React from "react";
import AboutTemplate from "./AboutTemplate";
import data from "../../data/aboutPhilData";

function AboutPhil() {
  return (
    <div>
    {window.scrollTo(0, 0)}
      <AboutTemplate
        img={data.img}
        img2={data.img2}
        text1={data.text1}
        text2={data.text2}
        header={data.header}
        btnLinkSrc='/aboutProRide'
        btnText="Learn about Pro Ride"
      />
    </div>
  );
}

export default AboutPhil;
