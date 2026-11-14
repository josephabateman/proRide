//data from line 23 on

function importAll(r) {
  let importedFile = {};
  r.keys().forEach((item) => {
    importedFile[item.replace("./", "")] = r(item);
  });
  return importedFile;
}

const proRideImages = importAll(
  require.context("../static/images", false, /\.(png|jpe?g|JPEG|svg|webp)$/)
);

function fileName(folder, fileName) {
  return folder[fileName].default;
}

const fullScreenBanners = [
  {
    title: "Pro Ride Coaching",
    color: "blue-gradient text-white pt-2",
    description: "Developing Cycling in Schools",
    imageDescription: "Phil Bateman with a class of smiling primary school children on bikes",
    imageSrc: fileName(proRideImages, "proride-front.webp"),
  },
];

const collapsingBanners = [
  {
    description: "View Our Range Of Services",
    color: "green-gradient text-white pt-2",
    // description: "Making cycling in school fun",
    buttonText: "Learn More",
    buttonLink: "/services",
    imageDescription: "Reception children lined up on Strider balance bikes at a Pro Ride session",
    imageSrc: require("../static/images/cpd/session-line-up.webp").default,
  },
];

export { fullScreenBanners, collapsingBanners };
