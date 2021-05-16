import React from "react";
import AboutTemplate from "./AboutTemplate";
import data from "../../data/aboutProRideData";

function AboutProRide() {
  return (
    <div>
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
