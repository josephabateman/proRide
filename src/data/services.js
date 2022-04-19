// data from line 29 on

function importAll(r) {
  let importedFile = {};
  r.keys().forEach((item) => {
    importedFile[item.replace("./", "")] = r(item);
  });
  return importedFile;
}

const flyers = importAll(
  require.context("../static/flyers", false, /\.(pdf)$/)
);
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

const servicesData = [
  {
    name: "Balance Bike Days",
    tile: fileName(tile, "balance_bike_tile.jpg"),
    header:
      "Develop control, balance and confidence with a Pro-Ride Balance Bike Fun Day",
    flyer: fileName(flyers, "Balance Bike Day flyer.pdf"),
    img: fileName(specificServiceImages, "balance_bike.jpg"),
    // img2: fileName(specificServiceImages, "balance_bike_limbo.jpeg"),
    // dropdown1: "About the day",
    // dropdown2: "More info",
    // dropdown3: "Where does it take place?",
    // dropdown4: "Who's it for?",
    text1: (
      <>
        <p>
          Our balance bike fun days are a great way for Early Years and Key
          Stage 1 children of all abilities to develop coordination, balance and
          control, preparing them for a lifetime of confident cycling.
          <br></br>
          <br></br>
          Each day delivers a series of small group sessions lasting 45 minutes
          to an hour (depending on age and number of sessions) where we cover
          basic bike handling, stopping, turning and of course, balancing
          through a program of fun games, challenges and obstacle activities.{" "}
          <br></br>
          <br></br>
          All equipment is provided so no special clothing or preparation is
          necessary. We can cater for up to 90 children a day with options 60,
          75 or 90 places. Sessions usually take place outdoors but can be
          switched indoors in unsuitable weather.
          <br></br>
          <br></br>
          To book a day for your school or to check availability and prices,
          please feel free to get in touch or check the website for details.
        </p>
      </>
    ),
    // text2: (
    //   <>
    //     <p>
    //       All equipment is provided so no special clothing or preparation is
    //       necessary. We can cater for up to 90 children a day with options 60,
    //       75 or 90 places. Sessions usually take place outdoors but can be
    //       switched indoors in unsuitable weather. To book a day for your school
    //       or to check availability and prices, please feel free to get in touch
    //       or check the website for details.
    //     </p>
    //   </>
    // ),
    // text3: (
    //   <>
    //     <p>
    //       Sessions can take place indoors or out depending on weather and are
    //       suitable for all levels of ability from absolute beginners to
    //       confident pedlers. All equipment is provided including Strider balance
    //       bikes and helmets.
    //     </p>
    //   </>
    // ),
    // text4: (
    //   <>
    //     <p>
    //       Balance bike days are designed as a stand-alone activity day and as
    //       such are suitable for use as a one-off experience but can be used to
    //       trial balance biking as a regular activity, perhaps prior to starting
    //       a school club or investing in equipment and training or running a
    //       Freewheelerz Learn to Ride Course.
    //     </p>
    //   </>
    // ),
  },
  {
    name: "Key Stage 1 Fun Days",
    tile: fileName(tile, "ks1_fun_day_tile.jpg"),
    header: "Professionally coached fun cycling day for Key Stage 1 classes",
    //wrong flyer
    flyer: fileName(flyers, "Fun Cycling Days flyer.pdf"),
    // dropdown1: "About the day",
    // dropdown2: "What happens at a KS1 Day?",
    // dropdown3: "How does the day look?",
    // dropdown4: "Whole School KS1 Days",
    text1: (
      <>
        <p>
          Our KS1 Cycling Fun Days are a great way for Key Stage 1 children of
          all abilities to develop coordination, balance and control, preparing
          them for a lifetime of confident cycling.
          <br></br>
          <br></br>
          Each day delivers a series of small group sessions lasting about an
          hour (depending on age and number of sessions) where we cover basic
          bike handling, starting, stopping, cornering, riding in a line, riding
          in pairs and various team activities, fun games, challenges and
          obstacle activities.
          <br></br>
          <br></br>
          Balance bikes can be provided for younger and small children, with
          older children encouraged to bring in their own bikes (larger pedal
          bikes can be hired if required). No special clothing or preparation is
          necessary as we take care of all risk assessments and planning. We can
          cater for up to 90 children a day with options 60, 75 or 90 places.
          Sessions usually take place outdoors but can be switched indoors in
          unsuitable weather.
          <br></br>
          <br></br>
          To book a day for your school or to check availability and prices,
          please feel free to get in touch or check the website for details.
        </p>
      </>
    ),
    // text2: (
    //   <>
    //     <p>
    //       Once you have booked a date for your KS1 Day, we get in touch 2 weeks
    //       prior to the vist to find out more about your school and who will be
    //       taking part. Based on this information, we put together a plan for the
    //       day for your approval.
    //     </p>
    //   </>
    // ),
    // text3: (
    //   <>
    //     <p>
    //       KS1 days usually consist of 4 sessions - 2 in the morning and 2 in the
    //       afternoon. The sessions vary in content depending on the age and
    //       ability of those taking part but a typical session will start with a
    //       bike and helmet check, then get underway by developing basic riding
    //       skills on a track set up on the playground or, in summer, on the
    //       grass.
    //     </p>
    //     <p>
    //       Skills such as starting, stopping, cornering, riding close to others,
    //       overtaking, riding in single file, in pairs, and in small groups are
    //       all covered here. The focus then switches to developing bike handling
    //       skills by using a series of activity stations where the children
    //       tackle different obstacles such as slalom, limbo, and ramps. Finally,
    //       the children get their chance to take on their friends in a series of
    //       fun races tailored to the age and ability of the group and the space
    //       available.
    //     </p>
    //     <p>
    //       Children bring in their own bikes and helmets, but spares can be
    //       provided by prior arrangement. Helmets can be supplied.
    //     </p>
    //   </>
    // ),
    // text4: (
    //   <>
    //     <p>
    //       For smaller schools, we operate a program that combines the above
    //       program with our balance bike taster. This enables every child in the
    //       school from Nursery to Year 6 to take part in a session. Days are
    //       usually split into 3 with 2 sessions in the morning and one all
    //       afternoon. The older children bring in their bikes, whilst the younger
    //       one's can either borrow one of our balance/pedal bikes or bring in
    //       their own.
    //     </p>
    //   </>
    // ),
    img: fileName(specificServiceImages, "ks1_fun_day.jpg"),
    // img2: fileName(specificServiceImages, "ramp_young_kids.jpg"),
    //the ks1 and ks2 flyer is same
  },
  {
    name: "Key Stage 2 Cyclesport Days",
    tile: fileName(tile, "cycle_sport_ks2_tile.jpg"),
    header:
      "A great way to introduce KS2 children to the exciting sport of cycling in a child-safe environment",
    flyer: fileName(flyers, "CycleSport flyer.pdf"),
    // dropdown1: "Get your kids pedaling with a ProRide Cycling KS2 Day",
    // dropdown2: "What happens at a KS2 Day?",
    // dropdown3: "Tell me more!",
    // dropdown4: "Whole School KS2 Days",
    text1: (
      <>
        <p>
          Each day offers up to four sessions of fast, fun action and can cater
          for 2, 3 or 4 classes. Activities take place around a circuit and
          obstacle course marked out on your school playground or field where
          the children learn technical skills and take part in a series of fun
          challenges, games, and mini competitions.
          <br></br>
          <br></br>
          All activities are risk assessed and suitable for all KS2 classes,
          with sessions adapted to suit the range of abilities ofo each group or
          class. Children bring their own bikes and helmets (spares can be made
          available upon request)
        </p>
      </>
    ),
    // text2: (
    //   <>
    //     <p>
    //       Once you have booked a date for your KS2 Day, we get in touch 2 weeks
    //       prior to the vist to find out more about your school and who will be
    //       taking part. Based on this information, we put together a plan for the
    //       day for your approval.
    //     </p>
    //   </>
    // ),
    // text3: (
    //   <>
    //     <p>
    //       KS2 days usually consist of 4 sessions - 2 in the morning and 2 in the
    //       afternoon. The sessions vary in content depending on the age and
    //       ability of those taking part but a typical session will start with a
    //       bike and helmet check, then get underway by developing basic riding
    //       skills on a track set up on the playground or, in summer, on the
    //       grass.
    //     </p>
    //     <p>
    //       Skills such as starting, stopping, cornering, riding close to others,
    //       overtaking, riding in single file, in pairs, and in small groups are
    //       all covered here. The focus then switches to developing bike handling
    //       skills by using a series of activity stations where the children
    //       tackle different obstacles such as slalom, limbo, and ramps. Finally,
    //       the children get their chance to take on their friends in a series of
    //       fun races tailored to the age and ability of the group and the space
    //       available.
    //     </p>
    //     <p>
    //       Children bring in their own bikes and helmets, but spares can be
    //       provided by prior arrangement. Helmets can be supplied.
    //     </p>
    //   </>
    // ),
    // text4: (
    //   <>
    //     <p>
    //       For smaller schools, we operate a program that combines the above
    //       program with our balance bike program. This enables every child in the
    //       school from Nursery to Year 6 to take part in a session. Days are
    //       usually split into 3 with 2 sessions in the morning and one all
    //       afternoon. The older children bring in their bikes, whilst the younger
    //       one's can either borrow one of our balance/pedal bikes or bring in
    //       their own.
    //     </p>
    //   </>
    // ),
    img: fileName(specificServiceImages, "cycle_sport_ks2.jpg"),
    // img2: fileName(specificServiceImages, "group_on_ramp.jpg"),
  },
  {
    name: "Whole School Days",
    tile: fileName(tile, "whole_school_day_tile.jpg"),
    header:
      "Develop control, balance and confidence with a Pro-Ride Balance Bike Fun Day",
    flyer: fileName(flyers, "Whole School Day flyer.pdf"),
    // dropdown1: "About the day...",
    // dropdown2: 'What happens at a "Whole School" Day?',
    // dropdown3: 'More on "Whole School" Days...',
    // dropdown4: "Whole School Days",
    text1: (
      <>
        <p>
          Whole School Days are designed for small schools usually with less
          than 60 students across the primary age range. During the day, every
          child in the school takes part in an age related session with their
          class mates where sessions are tailored to age and ability of the
          group and use a combination of other Pro-Ride programs to deliver a
          fun-filled memorable cycling experience.
          <br></br>
          <br></br>A program is put together based on the number of children and
          age range of the classes. A typical program for a school with 40
          children for example, might start with a 45 min session for 10-12
          nursery/reception using balance bikes (we provide). Next, two KS1
          sessions with 8- 10 children in each session would be delivered mainly
          using their own bikes (we provide spares), and a final session for
          approx 15 children on their own bikes would run in the afternoon
          (again, we can provide spares if needed).
          <br></br>
          <br></br>
          To book a day for your school or to check availability and prices,
          please feel free to get in touch or check the website for details.
        </p>
      </>
    ),
    // text2: (
    //   <>
    //     <p>
    //       Once you have booked a date for your Whole School Day, we get in touch
    //       2 weeks prior to the visit to find out more about your school and who
    //       will be taking part. Based on this information, we put together a plan
    //       for the day for your approval.
    //     </p>
    //   </>
    // ),
    // text3: (
    //   <>
    //     <p>
    //       Whole School days usually consist of 4 sessions - 2 in the morning and
    //       2 in the afternoon. The sessions vary in content depending on the age
    //       and ability of those taking part but a typical session will start with
    //       a bike and helmet check, then get underway by developing basic riding
    //       skills on a track set up on the playground or, in summer, on the
    //       grass.
    //     </p>
    //     <p>
    //       Skills such as starting, stopping, cornering, riding close to others,
    //       overtaking, riding in single file, in pairs, and in small groups are
    //       all covered here. The focus then switches to developing bike handling
    //       skills by using a series of activity stations where the children
    //       tackle different obstacles such as slalom, limbo, and ramps. Finally,
    //       the children get their chance to take on their friends in a series of
    //       fun races tailored to the age and ability of the group and the space
    //       available.
    //     </p>
    //     <p>
    //       Children bring in their own bikes and helmets, but spares can be
    //       provided by prior arrangement. Helmets can be supplied.
    //     </p>
    //   </>
    // ),
    // text4: (
    //   <>
    //     <p>
    //       For smaller schools, we operate a program that combines the above
    //       program with our balance bike sessions. This enables every child in
    //       the school from Nursery to Year 6 to take part in a session. Days are
    //       usually split into 3 with 2 sessions in the morning and one all
    //       afternoon. The older children bring in their bikes, whilst the younger
    //       one's can either borrow one of our balance/pedal bikes or bring in
    //       their own.
    //     </p>
    //   </>
    // ),
    img: fileName(specificServiceImages, "whole_school_day.jpg"),
    // img2: fileName(specificServiceImages, "kids_podium.jpg"),
  },
  {
    name: "School clubs",
    tile: fileName(tile, "after school clubs.jpg"),
    header:
      "Develop control, balance and confidence with a Pro-Ride Balance Bike Fun Day",
    flyer: fileName(flyers, "School Clubs flyer.pdf"),
    // dropdown1: "School Clubs",
    // dropdown2: "Who is it for?",
    // dropdown3: "How does it work?",
    // dropdown4: "How do I book on?",
    text1: (
      <>
        <p>
          Our School Clubs are designed for children of all ages and abilities
          from those who just want to have fun cycling with friends in a safe,
          inclusive environment to those keen to learn new skills and get more
          involved.
        </p>
        <br></br>
        <h3>After school clubs</h3>
        <p>
          Our qualified coaches twill visit your school each week o run your
          club sessions on-site for up to 25 children. The program is tailored
          to the age and ability of the group and can be changed from term to
          term if required. The weekly format is similar to our day programs but
          with a more relaxed feel and focus on play and friendships. Children
          bring their own bike and helmet to school each week.
        </p>

        <h3>Holiday Clubs</h3>
        <p>
          Our holiday clubs are based on a 4 or 5-day program offering mornings
          or afternoons. Clubs follow a similar style to our weekly club
          sessions with lots of games and fun activities where children can try
          out different activities and learn new skills under the supervision of
          a qualified instructor. Our service includes session plans together
          with a pre-club risk assessment and certificates and medals options
          for each attendee To book a club for your school or to check
          availability and prices, please feel free to get in touch or check the
          website for details.
        </p>
      </>
    ),
    // text2: (
    //   <>
    //     <p>
    //       Our clubs can run independently for just one age group or be offered
    //       to the whole school as 3 consecutive key stage sessions on one day of
    //       the week. Clubs run all year round (weather permitting) and usually
    //       last between 45 minutes to an hour depending on age. Smaller schools
    //       may prefer a mixed-age club where sessions can be split into higher
    //       and lower abilities or by age with a coach working in each group.
    //     </p>
    //   </>
    // ),
    // text3: (
    //   <>
    //     <p>
    //       Bookings are usually made by parents/guardians using our online
    //       booking and payment system and where possible encouraged to set up a
    //       monthly direct debit payment which can be cancelled with one month
    //       notice. We are also able to take bookings on a block basis if
    //       preferred. This is usually for 6-7 week blocks paid at the start of a
    //       half term. On occasion, schools provide clubs free of charge to their
    //       students, in this case, we agree to charge the school a fixed amount
    //       to deliver a set number of sessions and places over a specific period.
    //       An invoice is then issued to the school following the last club
    //       session - as we do for most of our other programs.
    //     </p>
    //     <p>
    //       To help schools promote their clubs internally, we design and deliver
    //       posters and flyers (as electronic artwork) and provide a registration
    //       form for schools to print and use to minimise administration if
    //       required.
    //     </p>
    //   </>
    // ),
    // text4: (
    //   <>
    //     <p>
    //       Parents/Carers are required to complete an application form detailing
    //       any special needs or medical conditions together with the arrangements
    //       for pick up after the club.
    //     </p>
    //     <p>
    //       If you have any questions or wish to arrange a club for your school,
    //       please contact us or email{" "}
    //       <a href="mailto: admin@proridecoaching.co.uk">
    //         admin@proridecoaching.co.uk
    //       </a>
    //       .
    //     </p>
    //   </>
    // ),
    img: fileName(specificServiceImages, "limbo_boy_2.jpg"),
    // img2: fileName(specificServiceImages, "limbo_rear_shot_young.jpg"),
  },
  {
    name: "Staff Training (CPD)",
    tile: fileName(tile, "cpd_tile.jpg"),
    header:
      "One day practical workshop to enable school staff to run balance bike sessions in school",
    flyer: fileName(flyers, "Cycling Instructor Course.pdf"),
    flyer2: fileName(flyers, "CPD Advertising Flyer.pdf"),
    // flyer2: fileName(flyers, "View Draft Agenda pdf.pdf"),
    // dropdown1:
    //   "Run your own sessions with our one-day CDP Instructor courses...",
    // dropdown2: "What happens on the day?",
    // dropdown3: "What do trainees learn?",
    // dropdown4: "How do you deliver the course?",
    text1: (
      <>
        <p>
          This one-day course delivered by Pro-Ride Founder and Director, Phil
          Bateman is an ideal way to train your staff to run progressive cycling
          sessions for children in Key Stage One.
          <br></br>
          <br></br>
          Suitable for up to 5 members of staff (teaching or non-teaching), the
          course covers everything you need to know to run sessions for PE
          lessons, after-school clubs, or occasional activities in school.
          <br></br>
          <br></br>
          The course requires no prior learning or experience of cycling and
          includes a comprehensive instruction manual, example lesson plans, and
          printable activity card pack covering a wide variety of fun games,
          challenges, and mini-races.
          <br></br>
          <br></br>
          No special equipment or clothing is required to attend the course.
        </p>
      </>
    ),
    // text2: (
    //   <>
    //     <p>
    //       The workshop-style courses use a practical, hands-on approach to
    //       demonstrate how to set up a range of different cycling circuits and
    //       deliver a wide range of activities including games, challenges and
    //       races.
    //     </p>
    //   </>
    // ),
    // text3: (
    //   <>
    //     <p>
    //       Trainees learn how to tailor the program to different group sizes and
    //       abilities and how to prepare for and organise sessions on the school
    //       site. Live sessions using children from the host school help trainees
    //       to see the program in action and enable them to get alongside the
    //       trainer first hand.
    //     </p>
    //   </>
    // ),
    // text4: (
    //   <>
    //     <p>
    //       The KS1/2 workshops are delivered mainly outdoors with short classroom
    //       sessions covering elements of health & safety and risk assessment, the
    //       EYFS course can be delivered in or outdoors or a combination of both.
    //       A detailed training manual containing sample session plans, activity
    //       text1s and lots of helpful hints and tips is delivered with each
    //       course.
    //     </p>
    //   </>
    // ),
    img: fileName(specificServiceImages, "cpd.jpg"),
    // img2: fileName(specificServiceImages, "starting_line_six_boys.jpg"),
  },
  // {
  //   name: "Learn-to-Ride Program (Freewheelerz)",
  //   tile: fileName(tile, "6.tile"),
  //   header:
  //     "Our Learn to ride program, Freewheelers is designed to teach kids to ride a bike in 10 weeks using special convertible bikes. The course can be delivered by one of our instructors or by your own staff after training.",
  //   flyer: fileName(flyers, "Freewheelerz flyer.pdf"),
  //   dropdown1: "Our new Freewheelerz Learn to Ride program for EYFS.",
  //   dropdown2: "Tell me more!",
  //   dropdown3: "About the course",
  //   dropdown4: "What will the kids learn?",
  //   text1: (
  //     <>
  //       <p>
  //         Think how amazing it would be if every child in your school could be
  //         taught how to ride a bike in the first couple of years of them
  //         joining! Well, now they can with Freewheelerz, our latest program for
  //         EYFS.
  //       </p>
  //       <p>
  //         The drive behind this new program came about as a result of the
  //         positive feedback we have been getting from our Balance Bike Taster
  //         Days. Almost without exception, schools tell us how quickly the
  //         children take to the activity and want to continue with more sessions.
  //       </p>
  //     </>
  //   ),
  //   text2: (
  //     <>
  //       <p>
  //         For this reason, we have designed a program that uses the successful
  //         format and methods used in the taster days but builds progressively
  //         into a full 10-week course resulting in most children being able to
  //         ride independently by the end.
  //       </p>
  //     </>
  //   ),
  //   text3: (
  //     <>
  //       <p>
  //         The course follows a structured program that each week sees the
  //         children progress steadily from initially sitting and walking to
  //         pushing and stepping, followed by striding and steering, ducking and
  //         weaving, and eventually confidently freewheeling - at which point we
  //         add pedals (the Strider 14X bike used for the course converts from
  //         balance bike to pedal bike) to continue the course on a conventional
  //         pedal bike.
  //       </p>
  //     </>
  //   ),
  //   text4: (
  //     <>
  //       <p>
  //         The program encourages the children to learn through play and fun,
  //         exploring and learning at their own pace - there is no pressure to
  //         keep up with other children, instead, they learn the skills they need
  //         through taking part in lots of fun games and challenges that they love
  //         and want to practice and repeat.
  //       </p>
  //       <p>
  //         For more information on getting started with the program, choose one
  //         of the options below to continue.
  //       </p>
  //     </>
  //   ),
  //   img: fileName(specificServiceImages, "girl_ramp_young.jpg"),
  //   img2: fileName(specificServiceImages, "older_kid_action.jpg"),
  // },

  {
    name: "Competition Days",
    tile: fileName(tile, "competition_day_tile.jpg"),
    header:
      "A full day of racing including a mini tournament for one Key Stage 2 class",
    flyer: fileName(flyers, "Training & Competition Day flyer.pdf"),
    flyer2: fileName(flyers, "Inter-school Competition flyer.pdf"),
    dropdown1: "Competition Day",
    dropdown2: "Inter-School Cycling Tournament",
    // dropdown3: "KS2 Training & Competition Day",
    // dropdown4: "Get in touch",
    text1: (
      <>
        <p>
          Our Training & Competition Day is a unique opportunity for up to 30
          children in Years 5 or 6 to be trained in different forms of cycle
          racing and prepare for open competition.
          <br></br>
          <br></br>
          The one-day event is delivered by Pro-Ride founder and former Olympic
          cyclist, Phil Bateman and consists of an introduction to the various
          forms of racing with specific training in road, track and off-road
          techniques, followed by a series of races where riders gain points
          towards a mini-competition and selection for a an inter-school
          competition at a later date.
        </p>
      </>
    ),
    text2: (
      <>
        <p>
          Following successful events in West and North Yorkshire in recent
          years, we are now offereing school partnerships, trusts and local
          auhtorities the opportunity to run similar events in their area.
          <br></br>
          <br></br>
          Our service is fully managed, providing everything from planning and
          contacting schools, to developing the program, providing equipment and
          delivering the event at a selected school location.
          <br></br>
          <br></br>
          We are happy to work with individual schools as well as sports
          partnerships, clusters or trusts wanting to introduce a cycling
          element to their competitive school's sport provision. We are also
          happpy to help organise and run area-wide qualifying and inter-school
          events. (see our. Competiton & Training Days) We can also provide
          training for schools planning on entering team into the Sainsbury's
          School Games festivals and regional qualifying events.
        </p>
      </>
    ),
    // text3: (
    //   <>
    //     <p>
    //       This one-day event is designed for one KS2 class (usually year 5 or 6)
    //       and is split into a morning training session which is spent coaching
    //       the basic skills needed for racing such as starting, cornering,
    //       climbing, group riding, and sprinting, followed by a mini-tournament
    //       in the afternoon which introduces the children to some of the
    //       different kinds of races found in the sport. Points are awarded for
    //       each race and totaled at the end where the winners are presented with
    //       certificates, medals, and/or a trophy.
    //     </p>
    //   </>
    // ),
    // text4: (
    //   <>
    //     <p>
    //       If you have any questions or wish to arrange a competition day, please
    //       contact us or email{" "}
    //       <a href="mailto: admin@proridecoaching.co.uk">
    //         admin@proridecoaching.co.uk
    //       </a>
    //       .
    //     </p>
    //   </>
    // ),
    img: fileName(specificServiceImages, "competition_day.jpg"),
    // img2: fileName(specificServiceImages, "medal_award.jpg"),
  },
  {
    name: "Road Safety Training",
    tile: fileName(tile, "road_safety_training_tile.jpg"),
    header:
      "Develop control, balance and confidence with a Pro-Ride Balance Bike Fun Day",
    flyer: fileName(flyers, "Training & Competition Day flyer.pdf"),
    // dropdown1: "Description to follow soon",
    // dropdown2: "Description to follow soon",
    // dropdown3: "Description to follow soon",
    // dropdown4: "Description to follow soon",
    text1: (
      <p>
        Our one day and two day road safety training courses are designed for
        full classes of approx 30 children in Years 5 or 6.
        <br></br>
        <br></br>
        Led by qualified Bikeability instructors, the training consists of basic
        skills training in the playground (known as Level 1) where skills are
        observed and developed with an assessment for suitability to go on to
        the next phase.
        <br></br>
        <br></br>
        Following on from Level 1, children are split into groups and taken out
        onto quiet roads where they work on hazard awareness and taught how to
        carry out maneuvers at key junctions (level 2). Further input is
        provided by preparing school staff to deliver classroom theory sessions
        and supervise additional fun skill-games sessions in the playground.
        <br></br>
        <br></br>
        All support materials, risk assessment and staff instructions together
        with student certificates are included.
      </p>
    ),
    // text2:
    //   "Description to follow soon. In the meantime please download our printable pdf",
    // text3:
    //   "Description to follow soon. In the meantime please download our printable pdf",
    // text4:
    //   "Description to follow soon. In the meantime please download our printable pdf",
    img: fileName(specificServiceImages, "road_safety_training.jpg"),
    // img2: fileName(specificServiceImages, "phil_coaching_hat.jpg"),
  },
];

export default servicesData;
