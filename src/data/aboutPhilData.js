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
  imgDescription: "Phil Bateman Sports Article 1988",
  img2: fileName(aboutPhil, "cycling_weekly.png"),
  img2Description: "Phil Bateman 2021",
};

export default aboutData;
