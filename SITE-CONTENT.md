# ProRide — Website Text

**This is the one file you edit to change wording on the website.**

## How to use it
1. Change any text **to the right of a `:` or inside a text block** below.
2. **Save the file.**
3. Tell Claude: **"implement the site content"** (optionally add "and publish" to push it live).
4. Claude reads this file, applies only what you changed to the real site code, and (if asked) deploys it.

## Rules that keep things working
- Only change the **wording**. Don't rename the **LABELS** (the bits in `[SQUARE BRACKETS]` or before a `:`), and don't delete the `--- ... ---` separator lines.
- For long blocks, leave a **blank line between paragraphs** — that's how a new paragraph is made on the page.
- Phone number and email appear in several places on the site. Change them **once** in the CONTACT DETAILS section below and Claude will update every place for you.
- Ignore the small grey `<!-- ... -->` notes — they're just bookmarks Claude uses to find the right spot. Leave them alone.

---
---

# 1. CONTACT DETAILS
<!-- map: shared — footer(App.js), ContactPage.jsx, FAQ.jsx, socialMediaData.js -->
*(Used across the whole site — change here and it updates everywhere.)*

Phone: 07960 534 012
Email: admin@proridecoaching.co.uk
Facebook page: https://www.facebook.com/proridecoaching
X (Twitter) page: https://x.com/proridecoaching

---
---

# 2. HOME PAGE

## Hero buttons
<!-- map: Home.jsx hero-cta -->
Button 1: Book your school in
Button 2: Explore our services

## "Why schools choose" section
<!-- map: Home.jsx feature-band heading/sub -->
Heading: Why schools choose ProRide
Subtitle: Professionally coached cycling days that get every child riding, smiling and building confidence for life.

### The four cards
<!-- map: Home.jsx features[] — icon names are Font Awesome; change wording, ask Claude if you want a different icon -->

[CARD 1]
Icon: shield
Title: Fully Insured & Risk Assessed
Body: Public liability cover, DBS-checked coaches and risk assessments provided — everything sorted before we arrive.

[CARD 2]
Icon: truck
Title: Zero Prep for Staff
Body: We bring and run everything — bikes, helmets, equipment. Your teachers just turn up with the kids.

[CARD 3]
Icon: hand-holding-heart
Title: Fully Inclusive
Body: From wobbly first-timers to confident riders, every child improves and leaves with a smile — all ages and abilities, including SEND.

[CARD 4]
Icon: award
Title: Expertly Delivered
Body: Experienced, fully qualified coaches who are friendly, patient and genuinely enthusiastic about getting kids riding well.

## "See ProRide in action" section
<!-- map: Home.jsx home-action heading/sub -->
Heading: See ProRide in action
Subtitle: Take a look at what a Pro Ride day looks like — then explore the full range of sessions we bring to schools.

Promo video link: https://www.youtube.com/embed/KPvxQjljIgo
<!-- map: custom-styling.js promoVideo.src -->

## Closing call-to-action (bottom of home page)
<!-- map: Home.jsx cta-band -->
Heading: Ready to get your school riding?
Text: Tell us your preferred dates and we'll plan a brilliant cycling day around your school.
Button: Get in touch

---
---

# 3. SERVICES
<!-- map: services.js servicesData[] — matched by [SERVICE] name. Change the name, header (one-line summary) and body text. -->
*(Each service has a **Name**, a one-line **Header**, and a **Body**. Blank line = new paragraph.)*

--- SERVICE: Balance Bike Days ---
Header: Develop control, balance and confidence with a Pro-Ride Balance Bike Fun Day
Body:
Our balance bike fun days are a great way for Early Years and Key Stage 1 children of all abilities to develop coordination, balance and control, preparing them for a lifetime of confident cycling.

Each day delivers a series of small group sessions lasting 45 minutes to an hour (depending on age and number of sessions) where we cover basic bike handling, stopping, turning and of course, balancing through a program of fun games, challenges and obstacle activities.

We usually cater for up to 60 children a day in 4 half class sessions but extra sessions can be added to accommodate larger numbers if needed.

To book a day for your school or to check availability and prices, please feel free to get in touch or check the website for details.

--- SERVICE: Key Stage 1 Fun Days ---
Header: Professionally coached fun cycling day for Key Stage 1 classes
Body:
Our KS1 Cycling Fun Days are a great way for Key Stage 1 children of all abilities to develop coordination, balance and control, preparing them for a lifetime of confident cycling.

Each day delivers a series of small group sessions lasting about an hour (depending on age and number of sessions) where we cover basic bike handling, starting, stopping, cornering, riding in a line, riding in pairs and various team activities, fun games, challenges and obstacle activities.

Balance bikes can be provided for younger and small children, with older children encouraged to bring in their own bikes (larger pedal bikes can be hired if required). No special clothing or preparation is necessary as we take care of all risk assessments and planning. We usually cater for up to 60 children a day in 4 half class sessions but extra sessions can be added to accommodate larger numbers if needed.

To book a day for your school or to check availability and prices, please feel free to get in touch or check the website for details.

--- SERVICE: Key Stage 2 Cyclesport Days ---
Header: A great way to introduce KS2 children to the exciting sport of cycling in a child-safe environment
Body:
Each day offers up to 4 sessions of fast fun action for up to 60 children (larger numbers can be accommodated subject to site conditions and price supplements). Activities take place around a circuit and obstacle course marked out on your school playground or field where the children learn technical skills and take part in a series of fun challenges, games, and mini competitions.

All activities are risk assessed and suitable for all KS2 classes, with sessions adapted to suit the range of abilities of each group or class. Children bring their own bikes and helmets (spares can be made available upon request)

--- SERVICE: Whole School Days ---
Header: Increase awareness, interest new skills in cycling with a pro ride whole school day
Body:
Whole School Days are designed for small schools usually with less than 60 students across the primary age range. During the day, every child in the school takes part in an age related session with their class mates where sessions are tailored to age and ability of the group and use a combination of other Pro-Ride programs to deliver a fun-filled memorable cycling experience.

A program is put together based on the number of children and age range of the classes. A typical program for a school with 40 children for example, might start with a 45 min session for 10-12 nursery/reception using balance bikes (we provide). Next, two KS1 sessions with 8-10 children in each session would be delivered mainly using their own bikes (we provide spares), and a final session for approx 15 children on their own bikes would run in the afternoon (again, we can provide spares if needed).

To book a day for your school or to check availability and prices, please feel free to get in touch or check the website for details.

--- SERVICE: School clubs ---
Header: Have fun developing new skills, confidence and friendships through a Pro Ride club program
Body:
Our School Clubs are designed for children of all ages and abilities from those who just want to have fun cycling with friends in a safe, inclusive environment to those keen to learn new skills and get more involved.

### After school clubs
Our qualified coaches will visit your school each week or run your club sessions on-site for up to 25 children. The program is tailored to the age and ability of the group and can be changed from term to term if required. The weekly format is similar to our day programs but with a more relaxed feel and focus on play and friendships. Children bring their own bike and helmet to school each week.

### Holiday Clubs
Our holiday clubs are based on a 4 or 5-day program offering mornings or afternoons. Clubs follow a similar style to our weekly club sessions with lots of games and fun activities where children can try out different activities and learn new skills under the supervision of a qualified instructor. Our service includes session plans together with a pre-club risk assessment and certificates and medals options for each attendee. To book a club for your school or to check availability and prices, please feel free to get in touch or check the website for details.

--- SERVICE: Staff Training (CPD) ---
Header: One day practical workshop to enable schools to run their own sessions
Body:
This one-day course delivered by Pro-Ride Founder and Director, Phil Bateman is an ideal way to train your staff to run progressive cycling sessions.

Suitable for up to 5 members of staff (teaching or non-teaching), the course covers everything you need to know to run sessions for PE lessons, after-school clubs, or occasional activities in school.

The course requires no prior learning or experience of cycling and includes a comprehensive instruction manual, example lesson plans, and printable activity card pack covering a wide variety of fun games, challenges, and mini-races.

No special equipment or clothing is required to attend the course.

--- SERVICE: Competition Days ---
Header: A full day of racing including a mini tournament for one Key Stage 2 class
Body:
Our Training & Competition Day is a unique opportunity for up to 30 children in Years 5 or 6 to be trained in different forms of cycle racing and prepare for open competition.

The one-day event is delivered by Pro-Ride founder and former Olympic cyclist, Phil Bateman and consists of an introduction to the various forms of racing with specific training in road, track and off-road techniques, followed by a series of races where riders gain points towards a mini-competition and selection for an inter-school competition at a later date.

Body (second section):
Following successful events in West and North Yorkshire in recent years, we are now offering school partnerships, trusts and local authorities the opportunity to run similar events in their area.

Our service is fully managed, providing everything from planning and contacting schools, to developing the program, providing equipment and delivering the event at a selected school location.

We are happy to work with individual schools as well as sports partnerships, clusters or trusts wanting to introduce a cycling element to their competitive school's sport provision. We are also happy to help organise and run area-wide qualifying and inter-school events. We can also provide training for schools planning on entering a team into the School Games festivals and regional qualifying events.

--- SERVICE: Road Safety Training ---
Header: Develop road safety skills and awareness through our KS2 Road Safety Program
Body:
Our one day and two day road safety training courses are designed for full classes of approx 30 children in Years 5 or 6.

Led by qualified Bikeability instructors, the training consists of basic skills training in the playground (known as Level 1) where skills are observed and developed with an assessment for suitability to go on to the next phase.

Following on from Level 1, children are split into groups and taken out onto quiet roads where they work on hazard awareness and taught how to carry out maneuvers at key junctions (level 2). Further input is provided by preparing school staff to deliver classroom theory sessions and supervise additional fun skill-games sessions in the playground.

All support materials, risk assessment and staff instructions together with student certificates are included.

---
---

# 4. ABOUT PRORIDE PAGE
<!-- map: aboutProRideData.js -->
Heading: About ProRide
Body:
Pro-Ride Coaching was set up in 2014 by ex-teacher and former Olympic cyclist, Phil Bateman in response to the growing popularity of cycling thanks to the visit of the Tour de France and the success of a growing number of British cyclists such as Chris Froome, Mark Cavendish and Bradley Wiggins.

Aimed at giving school children a taste of bike racing and access to the sport rather than a road safety course, the program was a huge success with both children and staff and by the end of the year over 3,000 children had taken part in a Pro-Ride session.

Body (second section):
Based in Yorkshire, Phil expanded the service to include the whole of the north of England the following year and expanded the range of services to include after-school clubs and a one-day CPD training course for schools wanting to continue running similar sessions as part of the curriculum. This also proved popular with over 20 schools requesting the training and Durham CC commissioning their own course.

In 2016 more services were added including competitions where schools ran a range of day, half day and inter-school events. Phil is a qualified teacher, British Cycling level 2 coach, and registered Bikeability instructor. His experience extends over 25 years and includes coaching at all levels from absolute beginners to elite athletes.

---
---

# 5. ABOUT PHIL PAGE
<!-- map: aboutPhilData.js -->
Heading: About Phil
Body:
Phil started racing as a junior in 1977 winning his first one road race in Beverley near Hull. Following other local success, including winning the Yorkshire Junior Championships in Halifax, Phil began to compete nationally finishing second in the Junior national time trial championships (BBAR) and later represented GB for the first time in the Junior World Championships in Mexico.

Body (second section):
Success at national and international level followed with strong performances in the Tour of Britain a bronze medal at the National Road Race Championships and a win against top professionals in the 1988 Pro-am Tour of Lancashire.

During his career, Phil won over 50 road races, five Yellow Jerseys and represented Team GB at three world championships and the 1988 Olympic Games in Seoul, Korea.

Today Phil lives in Bradford where he continues to ride locally as much as possible whilst coaching full time for Pro-Ride.

---
---

# 6. FAQ PAGE
<!-- map: FAQ.jsx generalFaqs[] and balanceBikeFaqs[] -->
Page heading: Frequently asked questions
Page subtitle: Everything schools usually want to know about booking a Pro Ride cycling day. Can't find your answer? We're happy to help.

## General questions
*(Each question is `Q:` then `A:`. Add or remove whole Q/A pairs as you like.)*

Q: What does Pro Ride Coaching offer schools?
A: We run fun, professionally coached cycling days for primary schools — from balance bike days for Early Years and KS1 to cycle sport, competitions and whole-school days for KS2. Every session is designed to build confidence, skills and a lifelong love of cycling.

Q: What areas do you cover?
A: We're based in West Yorkshire and bring our cycling days to primary schools right across the region.

Q: What ages and year groups do you work with?
A: Everyone from Nursery and Reception through to KS1 and KS2. Every session is tailored to the age group and ability of the children taking part.

Q: Do you provide the bikes and equipment?
A: Yes — we bring everything needed for the day, including bikes and helmets. Children simply turn up ready to ride, and no special clothing or footwear is required.

Q: Who runs the sessions?
A: Pro Ride was founded by former Team GB and Olympic cyclist Phil Bateman. Our friendly, qualified coaches keep groups small so every child gets plenty of attention.

Q: How do we book a cycling day for our school?
A: Head to our contact page to send a booking request with your preferred dates, or call us on 07960 534 012. We'll plan your sessions and send a suggested outline for your visit.

## Balance bike day questions

Q: How many children can take part in a day?
A: Our usual day caters for up to 60 children in four one-hour sessions, however extra sessions can be added by reducing the duration of sessions. Our standard charges cater for up to 60, 75 or 90 children. Please see the current price list.

Q: What ages are catered for?
A: We run balance bike sessions for all FS/KS1 classes from Nursery to Year Two. All equipment is provided for up to and including year one, whilst year 2 bring in their own bikes. We can provide larger balance bikes that convert to pedal bikes for year 2 if they are needed, but these are subject to availability and carry an additional hire charge.

Q: Some of our children can already ride a pedal bike, can they take part in the sessions?
A: Yes, absolutely. Those who have recently learned to pedal still enjoy taking part in the sessions and always develop new skills and greater confidence that can then be applied to their riding once they return to their pedal bike.

Q: Do you provide the bikes or do the children need to bring their own?
A: Yes, we provide everything needed for the sessions so children simply rock-up to their sessions and we take it from there. No special clothing or footwear is needed. In particularly cold weather we do however advise the children wear gloves if possible.

Q: Do you run sessions for children that can already ride a bike?
A: Yes, our "Beginner" sessions are designed specifically for this purpose. We offer a one-day beginner program for up to 60 children aimed at helping them transition from balance bike to pedal bike. Intended for Years 1 and 2, the day is split into groups of 10 where the children are taught how to control, balance and pedal using special convertible bikes.

Q: How do I book a balance bike day for my school?
A: You can check availability and reserve a date online by going to the contact page on this website and filling out a booking request form. Once your form is received, we will plan your sessions and send you a booking form with a suggested outline for your visit. You will then have two weeks to sign and return or amend your booking. No payment is taken prior to the visit, but late cancellations will incur a penalty, details of which are outlined in the terms attached to your booking confirmation.

Q: Can I change my date once I've booked?
A: If you are unable to go ahead with your planned visit, we will try to arrange an alternative date providing we have at least 30 days notice. Last minute cancellations will usually incur penalty charges as it may not be possible to fill your booking.

## "Still have a question?" box (bottom of FAQ page)
<!-- map: FAQ.jsx faq-cta -->
Heading: Still have a question?
Text: Drop us a message or give us a call — we'd love to hear from you.
Button: Get in touch

---
---

# 7. CONTACT PAGE
<!-- map: ContactPage.jsx -->
Page heading: Get in touch
Page subtitle: Want to book a cycling day, ask a question, or check availability? Send us a message and we'll get right back to you.
Sidebar heading: Let's plan your day
Sidebar text: Based in West Yorkshire and coaching across the region — from balance bikes to KS2 cycle sport.

---
---

# 8. JOBS PAGE
<!-- map: Jobs.jsx -->
Heading: Join the team
Text: We're always on the lookout for enthusiastic cycling coaches and would love to hear from you. Download the form below, fill it out and return it to admin@proridecoaching.co.uk to be considered. Thank you!
Download button: Download Coach Information Form

---
---

# 9. FOOTER (bottom of every page)
<!-- map: App.js Footer -->
Blurb: Professional cycling coaching and fun biking days for schools across West Yorkshire — from balance bikes to KS2 cycle sport.
Bottom line: Cycling for Schools

---
---

# 10. NAVIGATION MENU
<!-- map: NavBar.jsx -->
*(The top menu links. Change the wording only — the pages they point to stay the same.)*
Menu: Home | Services | Contact | About (ProRide / Phil) | FAQ | Jobs
