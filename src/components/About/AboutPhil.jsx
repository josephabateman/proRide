import React from "react";
import aboutPhilData from "../../data/aboutPhilData";
import ContentTemplate from "../Templates/ContentTemplate";
import HomePageBanners from "../Templates/HomePageBanners";

function AboutPhil() {
  return (
    <div>
      <ContentTemplate
        header={aboutPhilData.header}
        description={aboutPhilData.description}
      />

      <div className="row">
        <div className="col-md-6">
          <HomePageBanners
            color="blue-gradient"
            imageDescription={aboutPhilData.imageDescription}
            imageSrc={aboutPhilData.img}
          />
        </div>
        <div className="col-md-6">
          <HomePageBanners
            color="green-gradient"
            imageDescription={aboutPhilData.imageDescription2}
            imageSrc={aboutPhilData.img2}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPhil;
