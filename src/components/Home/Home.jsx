import React from "react";
import BookSession from "./BookSession";
import HomePageBanners from "../HomePageBanners";
import bannerData from "../../data/homePageBanners";
import collapsingBannerData from "../../data/collapsingBanners";

// const removeSpaces = (str) => {
//   return str.replace(/[()\s+]/g,'')
// }

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

      <div className="home-divider">
        <div className="row">
          <div className="column">
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
          <div className="column">
            <div className="book-session-div">
              <BookSession />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
