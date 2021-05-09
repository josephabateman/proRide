import React from "react";
import aboutProRideData from "../../data/aboutProRideData";
import ContentTemplate from "../ContentTemplate";

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
