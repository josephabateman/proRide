// Service text (name/header/body) comes from siteContent.json (edit via SITE-CONTENT.md).
// Images, flyers and dropdown labels are matched to each service by position below.

import content from "./siteContent.json";
import { renderContent } from "./renderContent";

function importAll(r) {
  let importedFile = {};
  r.keys().forEach((item) => {
    importedFile[item.replace("./", "")] = r(item);
  });
  return importedFile;
}

const flyers = importAll(require.context("../static/flyers", false, /\.(pdf)$/));
const tile = importAll(
  require.context("../static/images/tiles", false, /\.(png|jpe?g|tile)$/)
);
const specificServiceImages = importAll(
  require.context(
    "../static/images/specific_service_images",
    false,
    /\.(png|jpe?g|jpg|tile)$/
  )
);

function fileName(folder, fileName) {
  return folder[fileName].default;
}

// Per-service assets — SAME ORDER as the services in SITE-CONTENT.md / siteContent.json.
const assets = [
  {
    tile: fileName(tile, "balance_bike_tile.jpg"),
    flyer: fileName(flyers, "Balance Bike Day flyer.pdf"),
    img: fileName(specificServiceImages, "balance_bike.jpg"),
  },
  {
    tile: fileName(tile, "ks1_fun_day_tile.jpg"),
    flyer: fileName(flyers, "Fun Cycling Days flyer.pdf"),
    img: fileName(specificServiceImages, "ks1_fun_day.jpg"),
  },
  {
    tile: fileName(tile, "cycle_sport_ks2_tile.jpg"),
    flyer: fileName(flyers, "CycleSport flyer.pdf"),
    img: fileName(specificServiceImages, "cycle_sport_ks2.jpg"),
  },
  {
    tile: fileName(tile, "whole_school_day_tile.jpg"),
    flyer: fileName(flyers, "Whole School Day flyer.pdf"),
    img: fileName(specificServiceImages, "whole_school_day.jpg"),
  },
  {
    tile: fileName(tile, "after school clubs.jpg"),
    flyer: fileName(flyers, "School Clubs flyer.pdf"),
    img: fileName(specificServiceImages, "limbo_boy_2.jpg"),
  },
  {
    tile: fileName(tile, "cpd_tile.jpg"),
    flyer: fileName(flyers, "Cycling Instructor Course.pdf"),
    img: fileName(specificServiceImages, "cpd.jpg"),
  },
  {
    tile: fileName(tile, "competition_day_tile.jpg"),
    flyer: fileName(flyers, "Training & Competition Day flyer.pdf"),
    flyer2: fileName(flyers, "Inter-school Competition flyer.pdf"),
    dropdown1: "Competition Day",
    dropdown2: "Inter-School Cycling Tournament",
    img: fileName(specificServiceImages, "competition_day.jpg"),
  },
  {
    tile: fileName(tile, "road_safety_training_tile.jpg"),
    flyer: fileName(flyers, "Road Safety Training flyer.pdf"),
    img: fileName(specificServiceImages, "road_safety_training.jpg"),
  },
];

const servicesData = content.services.map((s, i) => ({
  name: s.name,
  header: s.header,
  text1: renderContent(s.body),
  text2: s.body2 ? renderContent(s.body2) : undefined,
  ...(assets[i] || {}),
}));

export default servicesData;
