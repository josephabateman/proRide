import ProrideImg1 from "../static/images/proride-kids-1.png";
import ProrideImg2 from "../static/images/proride-kids-2.png";

const fullScreenBanners = [
  {
    title: "ProRide Coaching",
    color: "blue-gradient",
    description: "Making cycling in school fun",
    imageDescription: "phil bateman coaching in schools",
    imageSrc: ProrideImg1,
  },
  
];

const collapsingBanners = [
  {
    description: "View Our Range Of Services",
    color: "green-gradient",
    // description: "Making cycling in school fun",
    buttonText: "Learn More",
    buttonLink: "/services",
    imageDescription: "Range of services",
    imageSrc: ProrideImg2,
  },
  // {
  //   color: "blue-gradient",
  //   description: "Watch Our Video",
  //   description: "Watch our Video",
  //   videoSrc: "https://www.youtube.com/embed/KPvxQjljIgo"
  // }
];


export { fullScreenBanners, collapsingBanners }
