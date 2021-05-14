import React from "react";
import aboutProRideData from "../../data/aboutProRideData";
import SpecificService from "../Services/SpecificService";

function AboutProRide() {
  return (
    <div>
      <SpecificService
        header={aboutProRideData.header}
        description={aboutProRideData.description}
        img={aboutProRideData.img}
      />
    </div>
  );
}

export default AboutProRide;
