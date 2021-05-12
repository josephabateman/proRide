import React from "react";
import aboutProRideData from "../../data/aboutProRideData";
import ContentTemplate from "../Templates/ContentTemplate";

function AboutProRide() {
  return (
    <div>
      <ContentTemplate
        header={aboutProRideData.header}
        description={aboutProRideData.description}
        img={aboutProRideData.img}
      />
    </div>
  );
}

export default AboutProRide;
