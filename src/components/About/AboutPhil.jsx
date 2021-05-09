import React from "react";
import aboutPhilData from "../../data/aboutPhilData";
import ContentTemplate from "../ContentTemplate";
import HomePageBanners from "../HomePageBanners";

function AboutPhil() {
  return (
    <div>
      <ContentTemplate
        header={aboutPhilData.header}
        description={aboutPhilData.description}
      />

      <div className="home-divider">
        <div className="row">
          <div className="column">
            <HomePageBanners
              color="blue-gradient"
              imageDescription={aboutPhilData.imageDescription}
              imageSrc={aboutPhilData.img}
            />
          </div>
          <div className="column">
            <div className="book-session-div">
              <HomePageBanners
                color="green-gradient"
                imageDescription={aboutPhilData.imageDescription2}
                imageSrc={aboutPhilData.img2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPhil;
