//data from line 23 on
//YOU NEED TO STORE LOCAL IMAGES OF DAD

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
  header: "About Phil",
  text1: (
    <>
      <p>
        Phil started racing as a junior in 1977 winning his first one road race
        in Beverley near Hull. Following other local success including winning
        the Yorkshire Junior Championships in Halifax, Phil began to compete
        nationally finishing second in the Junior national time trial
        championships (BBAR) and later represented GB for the first time in the
        Junior World Championships in Mexico.
      </p>
    </>
  ),
  text2: (
    <>
      <p>
        Success at national and international level followed with strong
        performances in the Tour of Britain a bronze medal at the National Road
        Race Championships and a win against top professionals in the 1988
        Pro-am Tour of Lancashire.
      </p>
      <p>
        During his career, Phil won over 50 road races, five Yellow Jerseys and
        represented Team GB at three world championships and the 1988 Olympic
        Games in Seoul, Korea.
      </p>
      <p>
        Today Phil lives in Bradford where he continues to ride locally as much as
        possible whilst coaching full time for Pro-Ride.
      </p>
    </>
  ),
  img: fileName(aboutPhil, "phil_profile_pic.jpeg"),
  imgDescription: "Phil Bateman Sports Article 1988",
  img2: fileName(aboutPhil, "cycling_weekly.png"),
  img2Description: "Phil Bateman 2021",
};

export default aboutData;
