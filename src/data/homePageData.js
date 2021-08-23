//data from line 23 on

function importAll(r) {
  let importedFile = {};
  r.keys().forEach((item) => {
    importedFile[item.replace("./", "")] = r(item);
  });
  return importedFile;
}

const proRideImages = importAll(
  require.context("../static/images", false, /\.(png|jpe?g|JPEG|svg)$/)
);

function fileName(folder, fileName) {
  return folder[fileName].default;
}

const fullScreenBanners = [
  {
    title: "ProRide Coaching",
    color: "blue-gradient text-white pt-2",
    description: "Making cycling fun!",
    imageDescription: "phil bateman coaching in schools",
    imageSrc: fileName(proRideImages, "proride-kids-1.png"),
  },
];

const collapsingBanners = [
  {
    description: "View Our Range Of Services",
    color: "green-gradient text-white pt-2",
    // description: "Making cycling in school fun",
    buttonText: "Learn More",
    buttonLink: "/services",
    imageDescription: "Range of services",
    imageSrc: fileName(proRideImages, "proride-kids-2.png"),
  },
];

export { fullScreenBanners, collapsingBanners };
