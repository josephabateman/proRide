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

const aboutPhil = importAll(
  require.context(
    "../static/images/about_phil",
    false,
    /\.(png|jpe?g|JPEG|svg)$/
  )
);

function fileName(folder, fileName) {
  return folder[fileName].default;
}

const aboutData = {
  header: content.aboutPhil.heading,
  text1: renderContent(content.aboutPhil.body),
  text2: renderContent(content.aboutPhil.body2),
  img: fileName(aboutPhil, "phil_profile_pic.jpeg"),
  imgAlt: "Phil Bateman, founder of Pro Ride Coaching",
  img2: fileName(aboutPhil, "cycling_weekly.jpg"),
  img2Alt: "Phil Bateman racing on the front cover of Cycling Weekly in 1988",
};

export default aboutData;
