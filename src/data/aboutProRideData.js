//data from line 23 on

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
  header: "About ProRide",
  text1: (
    <>
      <p>
        Pro-Ride Coaching was set up in 2014 by ex-teacher and former Olympic
        cyclist, Phil Bateman in response to the growing popularity of cycling
        thanks to the visit of the Tour de France and the success of a growing
        number of British cyclists such as Chris Froome, Mark Cavendish and
        Bradley Wiggins.
      </p>
      <p>
        Aimed at giving school children a taste of bike racing and access to the
        sport rather than a road safety course, the program was a huge success
        with both children and staff and by the end of the year over 3,000
        children had taken part in a Pro-Ride session.
      </p>
    </>
  ),
  text2: (
    <>
      <p>
        Based in Yorkshire, Phil expanded the service to include the whole of
        the north of England the following year and expanded the range of
        services to include after-school clubs and a one-day CPD training course
        for schools wanting to continue running similar the sessions as part of
        the curriculum. This also proved popular with over 20 schools requesting
        the training and Durham CC commissioning their own course.
      </p>
      <p>
        In 2016 more services were added including competitions where schools
        ran a range of day, half day and inter-school events. Phil is a
        qualified teacher, British Cycling level 2 coach, and registered
        Bikeability instructor. His experience extends over 25 years and
        includes coaching at all levels from absolute beginners to elite
        athletes.
      </p>
    </>
  ),
  img: fileName(aboutProRide, "phil_with_three_kids.jpg"),
  img2: fileName(aboutProRide, "starting_line.jpg"),
  imgDescription: "kid on bike",
};

export default aboutData;
