import React from "react";
import SpecificService from "../Services/SpecificService";
import data from '../../data/aboutPhilData'

function AboutPhil() {
  return (
    <div>
      <SpecificService
        proRideImg={data.img}
        proRideImg2={data.img2}
        text1={data.text1}
        text2={data.text2}
        header={data.header}
      />
    </div>
  );
}

export default AboutPhil;
