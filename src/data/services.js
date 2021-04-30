//need to import all from the directory
import balanceBikeDaysFlyer from '../static/flyers/balance bike days flyer.pdf'
import CPDCourse from '../static/flyers/CPD Course Title- Pro Ride Cycling Instructor Workshop (1 day) flyer.pdf'
import FreewheelerzFlyer from '../static/flyers/Freewheelerz flyer.pdf'
import IterSchoolCompetitions from '../static/flyers/INTER-SCHOOL COMPETITIONS flyer.pdf'
import SchoolClubs from '../static/flyers/School Clubs flyer.pdf'
import TasterDays from '../static/flyers/taster days brochure.pdf'
import TrainingAndCompetitions from '../static/flyers/Training & Competition Day flyer.pdf'
import DraftAgenda from '../static/flyers/View Draft Agenda pdf.pdf'

const servicesData = [
    {
        name: "Balance Biking Days",
        img: "https://static.wixstatic.com/media/0583da_eab05d723e4a48d895ce92d3d95ee0a3~mv2.jpg/v1/crop/x_7,y_24,w_710,h_694/fill/w_598,h_576,al_c,q_80,usm_0.66_1.00_0.01/77fb10c75a797b3b8b6b37501e3ee3d5--striders-motocross.webp", 
        header: "A fun way to help early years children develop coordination, concentration and balance skills",
        featured: true,
        flyer: balanceBikeDaysFlyer,
        description: <div>
            <h4>Develop confidence and coordination with a Balance Bike Taster Day</h4>
            <p>Our Balance Bike Taster days are a great way to see how Early Years children respond to balance biking and how quickly they develop their confidence and coordination. Within minutes children who have never been on a bike before are walking confidently, sat on the saddle. Soon they are weaving in and out of cones, ducking under limbos and flying over ramps. Before long and within the session the same children are beginning to balance and freewheel as they continue to grow in confidence.</p>
            <p>Each Taster Day offers multiple sessions (4-6 in a school day) catering for up to 60 children in 30-45 minute sessions. Under the watchful eye of a qualified instructor, each child as young as three learns the basics of stepping, striding, balancing, starting and stopping, and turning through a series of fun activities in an action-packed session.</p>
            <p>Sessions can take place indoors or out depending on weather and are suitable for all levels of ability from absolute beginners to confident pedlers. All equipment is provided including Strider balance bikes and helmets.</p>
            <p>Taster days are designed as a stand-alone activity day and as such are suitable for use as a one-off experience but can be used to trial balance biking as a regular activity, perhaps prior to starting a school club or investing in equipment and training or running a Freewheelerz Learn to Ride Course.</p>
        </div>,
        fontAwesomeIcon: "fas fa-balance-scale-left"
    },
    {
        name: "KS1 Taster Days",
        img: "https://static.wixstatic.com/media/0583da_2a23f2f85f5a47a299fc9f9a689e3e26~mv2.png/v1/crop/x_76,y_1,w_294,h_282/fill/w_412,h_389,al_c,lg_1,q_85/Untitled12.webp",
        header: "Fun interactive sessions for KS1 to stimulate interest, develop confidence and gain new skills through games and challenges.",
        featured: false,
        //wrong flyer
        flyer: TasterDays,
        description: <div>
            <p>Get your kids pedaling with a ProRide Cycling Taster Day</p> 
            <p>Cycling is a great activity for children in so many ways, yet for many, finding somewhere safe and fun to ride their bikes and learn new skills is difficult. Now, with a Pro-Ride Taster day, they can do just that in the safety and security of their own school playground under the supervision of a qualified coach.</p>  
            <p>Pro-Ride Taster days comprise multiple sessions in a day (usually 4) that offer children in KS1 or KS2 the chance to learn new skills, gain confidence and have fun with their friends. Prices depend on the number of children taking part in the day which can vary from one class to four.</p> 
            <p>What happens at a Taster Day?</p>
            <p>Once you have booked a date for your Taster Day, we get in touch 2 weeks prior to the vist to find out more about your school and who will be taking part. Based on this information, we put together a plan for the day for your approval.</p>
            <p>Taster days usually consist of 4 sessions - 2  in the morning and 2 in the afternoon. The sessions vary in content depending on the age and ability of those taking part but a typical session will start with a bike and helmet check, then get underway by developing basic riding skills on a track set up on the playground or, in summer, on the grass.</p>
            <p>Skills such as starting, stopping, cornering, riding close to others, overtaking, riding in single file, in pairs, and in small groups are all covered here. The focus then switches to developing bike handling skills by using a series of activity stations where the children tackle different obstacles such as slalom, limbo, and ramps. Finally, the children get their chance to take on their friends in a series of fun races tailored to the age and ability of the group and the space available.</p> 
            <p>Children bring in their own bikes and helmets, but spares can be provided by prior arrangement. Helmets can be supplied.</p> 
            <p>Whole School Taster Days</p>
            <p>For smaller schools, we operate a program that combines the above program with our balance bike taster. This enables every child in the school from Nursery to Year 6 to take part in a session. Days are usually split into 3 with 2 sessions in the morning and one all afternoon. The older children bring in their bikes, whilst the younger one's can either borrow one of our balance/pedal bikes or bring in their own.</p>
        </div>,
        fontAwesomeIcon: "fas fa-cookie-bite"
        //the ks1 and ks2 flyer is same
    },
    {
        name: "KS2 Taster Days", 
        img: "https://static.wixstatic.com/media/0583da_de3a829e6ebf4b0d898df710ded5ad81~mv2_d_3264_2448_s_4_2.jpg/v1/crop/x_1842,y_252,w_1422,h_1372/fill/w_614,h_576,al_c,q_80,usm_0.66_1.00_0.01/0583da_de3a829e6ebf4b0d898df710ded5ad81~mv2_d_3264_2448_s_4_2.webp",
        header: "A great way to encourage children to cycle more and sample cycle racing in a safe, controlled environment.",
        featured: false,
        flyer: 'https://ea67bc9c-a6b0-438e-82a8-d0e4df398e62.filesusr.com/ugd/0583da_5af40c0aa624483ea7edd16ef5eec163.pdf',
        description: <div>
                <h3>Get your kids pedaling with a ProRide Cycling Taster Day</h3> 
                <p>Cycling is a great activity for children in so many ways, yet for many, finding somewhere safe and fun to ride their bikes and learn new skills is difficult. Now, with a Pro-Ride Taster day, they can do just that in the safety and security of their own school playground under the supervision of a qualified coach.</p>  
                <p>Pro-Ride Taster days comprise multiple sessions in a day (usually 4) that offer children in KS1 or KS2 the chance to learn new skills, gain confidence and have fun with their friends. Prices depend on the number of children taking part in the day which can vary from one class to four.</p>  
                <h4>What happens at a Taster Day?</h4>
                <p>Once you have booked a date for your Taster Day, we get in touch 2 weeks prior to the vist to find out more about your school and who will be taking part. Based on this information, we put together a plan for the day for your approval.</p>  
                <p>Taster days usually consist of 4 sessions - 2  in the morning and 2 in the afternoon. The sessions vary in content depending on the age and ability of those taking part but a typical session will start with a bike and helmet check, then get underway by developing basic riding skills on a track set up on the playground or, in summer, on the grass.</p>  
                <p>Skills such as starting, stopping, cornering, riding close to others, overtaking, riding in single file, in pairs, and in small groups are all covered here. The focus then switches to developing bike handling skills by using a series of activity stations where the children tackle different obstacles such as slalom, limbo, and ramps. Finally, the children get their chance to take on their friends in a series of fun races tailored to the age and ability of the group and the space available.</p>  
                <p>Children bring in their own bikes and helmets, but spares can be provided by prior arrangement. Helmets can be supplied.</p> ​
                <h4>Whole School Taster Days</h4>
                <p>For smaller schools, we operate a program that combines the above program with our balance bike taster. This enables every child in the school from Nursery to Year 6 to take part in a session. Days are usually split into 3 with 2 sessions in the morning and one all afternoon. The older children bring in their bikes, whilst the younger one's can either borrow one of our balance/pedal bikes or bring in their own.</p>
            </div>,
            fontAwesomeIcon: "fas fa-cookie"
    },
    {
        name: "Staff Training (CPD)",
        img: "https://static.wixstatic.com/media/11062b_21b1d0912b4749d2bafc19d001719e66~mv2.jpeg/v1/crop/x_1517,y_39,w_5713,h_5713/fill/w_576,h_576,al_c,q_80,usm_0.66_1.00_0.01/Work%20Presentation.webp",
        header: "Our CPD workshops are designed to support teachers and other staff who want to run their own sessions and programs in their school. We provide one-day courses for EYFS, KS1 and KS2.",
        featured: true,
        flyer: CPDCourse,
        flyer2: DraftAgenda,
        description: <div>
                <h4>Run your own sessions with our one-day CDP Instructor courses</h4> 
                <p>Our one-day training courses are designed for teachers and school staff who want to run their own sessions in school for curriculum-based activities or after-school clubs and competitions. Three courses are currently available, one for EYFS and the others for KS1 and KS2. All are delivered on-site by arrangement and incorporate taster sessions.</p> 
                <p>The workshop-style courses use a practical, hands-on approach to demonstrate how to set up a range of different cycling circuits and deliver a wide range of activities including games, challenges and races.</p> 
                <p>Trainees learn how to tailor the program to different group sizes and abilities and how to prepare for and organise sessions on the school site. Live "Taster" sessions using children from the host school help trainees to see the program in action and enable them to get alongside the trainer first hand. The KS1/2 workshops are delivered mainly outdoors with short classroom sessions covering elements of health & safety and risk assessment, the EYFS course can be delivered in or outdoors or a combination of both.</p> 
                <p>A detailed training manual containing sample session plans, activity descriptions and lots of helpful hints and tips is delivered with each course.</p>
            </div>,
            fontAwesomeIcon: "fas fa-user-tie"
    },
    {
        name: "Whole School Days",
        img: "https://static.wixstatic.com/media/0583da_ff93cf3464ad4b718fea7aeb8d8e87bc~mv2.jpg/v1/crop/x_91,y_0,w_446,h_446/fill/w_533,h_535,al_c,lg_1,q_80/2794591382.webp",
        header: "Ideal for smaller schools, our Whole School Program ensures every child gets to take part in all inclusive, age related fun session",
        featured: false,
        flyer: TrainingAndCompetitions,
        description: <div>
                <p>Get your kids pedaling with a ProRide Cycling Taster Day</p> 
                <p>Cycling is a great activity for children in so many ways, yet for many, finding somewhere safe and fun to ride their bikes and learn new skills is difficult. Now, with a Pro-Ride Taster day, they can do just that in the safety and security of their own school playground under the supervision of a qualified coach.</p>  
                <p>Pro-Ride Taster days comprise multiple sessions in a day (usually 4) that offer children in KS1 or KS2 the chance to learn new skills, gain confidence and have fun with their friends. Prices depend on the number of children taking part in the day which can vary from one class to four.</p> 
                <h4>What happens at a Taster Day?</h4>
                <p>Once you have booked a date for your Taster Day, we get in touch 2 weeks prior to the vist to find out more about your school and who will be taking part. Based on this information, we put together a plan for the day for your approval.</p> 
                <p>Taster days usually consist of 4 sessions - 2  in the morning and 2 in the afternoon. The sessions vary in content depending on the age and ability of those taking part but a typical session will start with a bike and helmet check, then get underway by developing basic riding skills on a track set up on the playground or, in summer, on the grass.</p> 
                <p>Skills such as starting, stopping, cornering, riding close to others, overtaking, riding in single file, in pairs, and in small groups are all covered here. The focus then switches to developing bike handling skills by using a series of activity stations where the children tackle different obstacles such as slalom, limbo, and ramps. Finally, the children get their chance to take on their friends in a series of fun races tailored to the age and ability of the group and the space available.</p> 
                <p>Children bring in their own bikes and helmets, but spares can be provided by prior arrangement. Helmets can be supplied.</p> 
                <h4>Whole School Taster Days</h4>
                <p>For smaller schools, we operate a program that combines the above program with our balance bike taster. This enables every child in the school from Nursery to Year 6 to take part in a session. Days are usually split into 3 with 2 sessions in the morning and one all afternoon. The older children bring in their bikes, whilst the younger one's can either borrow one of our balance/pedal bikes or bring in their own.</p>
            </div>,
            fontAwesomeIcon: "fas fa-school"
    },
    {
        name: "Learn-to-Ride Program (Freewheelerz)",
        img: "https://static.wixstatic.com/media/0583da_8e33945dfdca4f81852fa6949ee477a1~mv2.jpg/v1/crop/x_30,y_0,w_218,h_209/fill/w_301,h_293,al_c,lg_1,q_80/278_209__1_IMG_48241.webp",
        header: "Our Learn to ride program, Freewheelers is designed to teach kids to ride a bike in 10 weeks using special convertible bikes. The course can be delivered by one of our instructors or by your own staff after training.",
        featured: false,
        flyer: FreewheelerzFlyer,
        description: <div>
                <h4>Our new Freewheelerz Learn to Ride program for EYFS.</h4>​
                <p>Think how amazing it would be if every child in your school could be taught how to ride a bike in the first couple of years of them joining!  Well, now they can with Freewheelerz, our latest program for EYFS.</p>
                <p>The drive behind this new program came about as a result of the positive feedback we have been getting from our Balance Bike Taster Days. Almost without exception, schools tell us how quickly the children take to the activity and want to continue with more sessions.</p>
                <p>For this reason, we have designed a program that uses the successful format and methods used in the taster days but builds progressively into a full 10-week course resulting in most children being able to ride independently by the end.</p>
                <p>The course follows a structured program that each week sees the children progress steadily from initially sitting and walking to pushing and stepping, followed by striding and steering, ducking and weaving, and eventually confidently freewheeling - at which point we add pedals (the Strider 14X bike used for the course converts from balance bike to pedal bike) to continue the course on a conventional pedal bike.</p>
                <p>The program encourages the children to learn through play and fun, exploring and learning at their own pace - there is no pressure to keep up with other children, instead, they learn the skills they need through taking part in lots of fun games and challenges that they love and want to practice and repeat.</p>
                <p>For more information on getting started with the program, choose one of the options below to continue.</p>
            </div>,
            fontAwesomeIcon: "fas fa-graduation-cap"
    },
    {
        name: "After-School Clubs",
        img: "https://static.wixstatic.com/media/0583da_d84b1d629b3f47ed9332b7fa62fc52f7.jpg/v1/crop/x_436,y_0,w_2392,h_2448/fill/w_612,h_596,al_c,q_85,usm_0.66_1.00_0.01/Whingate%20Armley_0775_JPG.webp",
        header: "Our clubs are not only great for those who want to fuel their interest and develop new skills, but also for those who just want to hang out on their bikes with friends.",
        featured: false,
        flyer: SchoolClubs,
        description: <div>
            <h3>School Clubs</h3>
                <p>We offer clubs for all ages and abilities, from Early Years balance bike clubs for those who just want to have fun on two wheels (or learn to ride a pedal bike) to those older, perhaps more competitive children who want to try out cycle racing for the first time or develop their hobby and improve their technical skills.</p>
                <p>Our clubs can run independently for just one age group or be offered to the whole school as 3 consecutive key stage sessions on one day of the week.  Clubs run all year round (weather permitting) and usually last between 45 minutes to an hour depending on age. Smaller schools may prefer a mixed-age club where sessions can be split into higher and lower abilities or by age with a coach working in each group.</p>
                ​<p>Bookings are usually made by parents/guardians using our online booking and payment system and where possible encouraged to set up a monthly direct debit payment which can be cancelled with one month notice. We are also able to take bookings on a block basis if preferred. This is usually for 6-7 week blocks paid at the start of a half term. On occasion, schools provide clubs free of charge to their students, in this case, we agree to charge the school a fixed amount to deliver a set number of sessions and places over a specific period. An invoice is then issued to the school following the last club session - as we do for most of our other programs.</p>
                <p>To help schools promote their clubs internally, we design and deliver posters and flyers (as electronic artwork) and provide a registration form for schools to print and use to minimise administration if required.</p>
                <p>Parents/Carers are required to complete an application form detailing any special needs or medical conditions together with the arrangements for pick up after the club.</p>
                <p>If you have any questions or wish to arrange a club for your school, please contact us or email admin@proridecoaching.co.uk.</p>
            </div>,
            fontAwesomeIcon: "fas fa-users"
    },
    {
        name: "Competition Days",
        img: "https://static.wixstatic.com/media/0583da_70ac16b227e241e494562d64f806b70d.jpg/v1/crop/x_72,y_4,w_569,h_547/fill/w_602,h_576,al_c,lg_1,q_80/SAMPLED_2294512_740_600___.webp",
        header: "We provide everything from a School-based KS2 Competition with race training prior to competition, to fully organised Trust-wide or regional inter-school competitions and -tournaments.",
        featured: false,
        flyer: IterSchoolCompetitions,
        flyer2: TrainingAndCompetitions,
        description: <div>
                <h3>School Competitions</h3>
                <p>Pro-Ride provide two programs aimed at competitive cycle racing, these are:</p>
                <ul>
                    <li>KS2 training and competition days, and</li>
                    <li>KS2 inter-school competition.</li>
                </ul>
                <p>Both programs can be run on an individual or team basis and are offered as road, track or off-road options depending on facilities and time of year.</p> 
                <h4>KS2 Training & Competition Day</h4>
                ​<p>This one-day event is designed for one KS2 class (usually year 5 or 6) and is split into a morning training session which is spent coaching the basic skills needed for racing such as starting, cornering, climbing, group riding, and sprinting, followed by a mini-tournament in the afternoon which introduces the children to some of the different kinds of races found in the sport. Points are awarded for each race and totaled at the end where the winners are presented with certificates, medals, and/or a trophy.</p>
            </div>,
            fontAwesomeIcon: "fas fa-biking"
    },
    {
        name: "Road Safety Training",
        img: "https://cyclingsolutions.info/wp-content/uploads/2019/05/Børnecykling_topfoto_Mikkel-Østergaard_1080-440.jpg",
        // img: "https://static.wixstatic.com/media/0583da_42dd4d30d252402c818d43c70c5896fa.jpg/v1/crop/x_56,y_0,w_249,h_239/fill/w_349,h_326,al_c,lg_1,q_80/20141020_join_us_cycle_training_hr_14138.webp",
        header: "Our Road Safety program covers basic traffic awareness and road safety for children in years 5 and 6. The 2-day course is part on-site and part on local roads and delivered by qualified Bikeability instructors.",
        featured: false,
        flyer: TrainingAndCompetitions,
        description: '',
        fontAwesomeIcon: "fas fa-user-md"
    }
]

export default servicesData;