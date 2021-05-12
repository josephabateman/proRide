import React from "react";
import BookSession from "./BookSession";
import HomePageBanners from "../Templates/HomePageBanners";
import bannerData from "../../data/homePageBanners";
import collapsingBannerData from "../../data/collapsingBanners";

function Home() {
  return (
    <div>
      {bannerData.map((data, key) => (
        <HomePageBanners
          key={key}
          color={data.color}
          title={data.title}
          description={data.description}
          buttonText={data.buttonText}
          buttonLink={data.buttonLink}
          imageDescription={data.imageDescription}
          imageSrc={data.imageSrc}
        />
      ))}

      <div class="row">
        <div class="col-md-6">
          {collapsingBannerData.map((data, key) => (
            <HomePageBanners
              key={key}
              color={data.color}
              title={data.title}
              description={data.description}
              buttonText={data.buttonText}
              buttonLink={data.buttonLink}
              videoSrc={data.videoSrc}
              imageDescription={data.imageDescription}
              imageSrc={data.imageSrc}
            />
          ))}
        </div>
        <div class="col-md-6">
          <BookSession />
        </div>
      </div>
    </div>
  );
}

export default Home;
