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
    title: "Get every child riding",
    color: "blue-gradient text-white pt-2",
    description: "Fun, expert-led cycling days and staff training for primary schools.",
    imageDescription: "phil bateman coaching in schools",
    imageSrc: fileName(proRideImages, "proride-kids-1.webp"),
  },
];

const collapsingBanners = [
  {
    description: "View our range of services",
    imageDescription: "Phil Bateman with a class of smiling primary school children",
    imageSrc: fileName(proRideImages, "proride-kids-1.webp"),
  },
];

export { fullScreenBanners, collapsingBanners };
