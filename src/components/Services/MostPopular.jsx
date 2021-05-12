import React from "react";
import servicesData from "../../data/services";
import Banner from "../Templates/HomePageBanners";

function MostPopular() {
  return (
    <div>
      <Banner
        title={servicesData[3].name}
        color="green-gradient"
        img
        imgDescription
        description={servicesData[3].header}
      />
       <Banner
        title={servicesData[3].name}
        color="green-gradient"
        img
        imgDescription
        description={servicesData[3].header}
      />
      <div class="row">
        <div class="col-md-6">
          <Banner
            title={servicesData[3].name}
            color="green-gradient"
            img
            imgDescription
            description={servicesData[3].header}
          />
        </div>
        <div class="col-md-6">
          <Banner
            title={servicesData[3].name}
            color="green-gradient"
            img
            imgDescription
            description={servicesData[3].header}
          />
        </div>
      </div>
    </div>
  );
}

export default MostPopular;
