// Text comes from siteContent.json (edit via SITE-CONTENT.md). Images kept here.
import content from "./siteContent.json";
import { renderContent } from "./renderContent";

function importAll(r) {
  let importedFile = {};
  r.keys().forEach((item) => {
    importedFile[item.replace("./", "")] = r(item);
  });
  return importedFile;
}

const aboutProRide = importAll(
  require.context(
    "../static/images/about_pro_ride",
    false,
    /\.(png|jpe?g|JPEG|svg)$/
  )
);

function fileName(folder, fileName) {
  return folder[fileName].default;
}

const aboutData = {
  header: content.aboutProRide.heading,
  text1: renderContent(content.aboutProRide.body),
  text2: renderContent(content.aboutProRide.body2),
  img: fileName(aboutProRide, "phil_with_three_kids.jpg"),
  imgAlt: "Phil Bateman with three pupils on their bikes on the school field",
  img2: fileName(aboutProRide, "starting_line.jpg"),
  img2Alt: "Children on their bikes at the start line during a Pro Ride cycling day",
};

export default aboutData;
