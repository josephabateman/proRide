(this.webpackJsonpproride=this.webpackJsonpproride||[]).push([[5],{151:function(e,t,n){"use strict";t.a={serviceCardsFullPageWidth:{container:"text-white pt-2",color:"green-gradient",title:"display-5",h5:"font-weight-light",column:"align-self-center",buttonStyle:"button",imgStyle:"my-2",imgHeight:300},serviceCardSmall:{container:"text-decoration-none",h2:"pt-3",button:"button"},servicesCardsCollection:{subHeaderText:"display-5 mb-4",firstRow:{row:"justify-content-center",column:"my-3",containerStyle:"service-card-img green-gradient shadow bg-white rounded font-weight-light"},secondRow:{row:"justify-content-center",containerStyle:"service-card-img blue-gradient shadow bg-white rounded font-weight-light"},thirdRow:{row:"justify-content-center",column:"px-0"},fourthRow:{row:"justify-content-center",column:"my-3",containerStyle:"service-card-img green-gradient shadow bg-white rounded font-weight-light"}},servicesPage:{container:"mt-3",title:"display-5",h5Column:"text-left",h5:"font-weight-light"},specificServicePage:{tileImageStyle:"service-card-img green-gradient",container:"pl-2",title:"py-3 display-5",text1:"text-left",text2:"mt-5 text-left",flyer1Col:"mb-5",flyer1Style:"button mr-3",flyer2Style:"button"},collapsingBanners:{mainCard:"blue-gradient text-white pt-2",container:"px-0",title:"display-5",h5:"font-weight-light",buttonStyle:"button",rowContainerAfterMainBanner:"collapsing-rows",minHeight_rowContainerAfterMainBanner:"450px",row:"mt-2",column:"p-0"},promoVideo:{container:"mt-2 mt-md-0",src:"https://www.youtube.com/embed/KPvxQjljIgo"},aboutTemplateStyles:{container:"pl-2 text-left",h1:"py-3 display-5 text-center text-md-left",linkText:"text-info",img2AndText2Section:"mt-4 mb-4"},contactFormStyles:{emailInput:"mt-3 mb-3",buttonPosition:"d-flex justify-content-sm-start mt-3",buttonStyle:"button"},contactPageStyles:{firstRow:"mt-3 mb-3 justify-content-md-center d-none d-lg-block",secondRow:"d-lg-none justify-content-center mt-3 mb-3"},socialMediaCardsStyles:{cardStyleWidth:"18rem",cardStyleMinHeight:"200px",title:"mt-3"},socialMediaCardsMobileStyles:{container:"d-inline-block p-sm-4 p-3",iconText:"d-none d-sm-block"}}},153:function(e,t,n){"use strict";var a=n(2),i=n(3),c=n(6),r=n.n(c),o=n(0),s=n(5),l=n(1),d=["bsPrefix","className","as"],h=["xxl","xl","lg","md","sm","xs"],u=o.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,o=e.as,u=void 0===o?"div":o,m=Object(i.a)(e,d),f=Object(s.a)(n,"col"),b=[],g=[];return h.forEach((function(e){var t,n,a,i=m[e];if(delete m[e],"object"===typeof i&&null!=i){var c=i.span;t=void 0===c||c,n=i.offset,a=i.order}else t=i;var r="xs"!==e?"-".concat(e):"";t&&b.push(!0===t?"".concat(f).concat(r):"".concat(f).concat(r,"-").concat(t)),null!=a&&g.push("order".concat(r,"-").concat(a)),null!=n&&g.push("offset".concat(r,"-").concat(n))})),b.length||b.push(f),Object(l.jsx)(u,Object(a.a)(Object(a.a)({},m),{},{ref:t,className:r.a.apply(void 0,[c].concat(b,g))}))}));u.displayName="Col",t.a=u},154:function(e,t,n){"use strict";var a=n(2),i=n(3),c=n(6),r=n.n(c),o=n(0),s=n(5),l=n(1),d=["bsPrefix","fluid","as","className"],h=o.forwardRef((function(e,t){var n=e.bsPrefix,c=e.fluid,o=e.as,h=void 0===o?"div":o,u=e.className,m=Object(i.a)(e,d),f=Object(s.a)(n,"container"),b="string"===typeof c?"-".concat(c):"-fluid";return Object(l.jsx)(h,Object(a.a)(Object(a.a)({ref:t},m),{},{className:r()(u,c?"".concat(f).concat(b):f)}))}));h.displayName="Container",h.defaultProps={fluid:!1},t.a=h},155:function(e,t,n){"use strict";var a=n(2),i=n(3),c=n(6),r=n.n(c),o=n(0),s=n(5),l=n(1),d=["bsPrefix","className","as"],h=["xxl","xl","lg","md","sm","xs"],u=o.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,o=e.as,u=void 0===o?"div":o,m=Object(i.a)(e,d),f=Object(s.a)(n,"row"),b="".concat(f,"-cols"),g=[];return h.forEach((function(e){var t,n=m[e];delete m[e],t=null!=n&&"object"===typeof n?n.cols:n;var a="xs"!==e?"-".concat(e):"";null!=t&&g.push("".concat(b).concat(a,"-").concat(t))})),Object(l.jsx)(u,Object(a.a)(Object(a.a)({ref:t},m),{},{className:r.a.apply(void 0,[c,f].concat(g))}))}));u.displayName="Row",t.a=u},156:function(e,t,n){"use strict";n(0);var a=n(154),i=n(155),c=n(153),r=n(147),o=n(49),s=n(151),l=n(1);t.a=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(a.a,{fluid:"sm",className:s.a.aboutTemplateStyles.container,children:[Object(l.jsx)(i.a,{children:Object(l.jsxs)(c.a,{children:[Object(l.jsxs)("div",{className:"row mb-3",children:[Object(l.jsx)("div",{className:"col-lg-4"}),Object(l.jsx)("div",{className:"col-lg-8",children:Object(l.jsx)("h1",{className:s.a.aboutTemplateStyles.h1,children:e.header})})]}),Object(l.jsx)("div",{className:"rotatated-bg-green about-img mb-5 float-md-left mx-md-5 d-block mx-auto ",children:Object(l.jsx)(r.a,{src:e.img})}),Object(l.jsxs)("div",{className:"text-center p-2",children:[e.text1,Object(l.jsx)(o.b,{to:e.btnLinkSrc,className:s.a.aboutTemplateStyles.linkText,children:e.btnText})]})]})}),Object(l.jsx)(i.a,{children:Object(l.jsxs)(c.a,{className:s.a.aboutTemplateStyles.img2AndText2Section,children:[Object(l.jsx)("div",{className:"rotatated-bg-blue about-img mb-5 float-md-right mx-md-5 d-block mx-auto",children:Object(l.jsx)(r.a,{src:e.img2})}),Object(l.jsx)("div",{className:"text-center p-2",children:e.text2})]})})]})})}},164:function(e,t,n){var a={"./phil_with_three_kids.jpg":165,"./starting_line.jpg":166};function i(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=c,e.exports=i,i.id=164},165:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/phil_with_three_kids.8b073d6a.jpg"},166:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/starting_line.cac6cfc1.jpg"},183:function(e,t,n){"use strict";n.r(t);n(0);var a=n(156),i=n(1);var c=function(e){var t={};return e.keys().forEach((function(n){t[n.replace("./","")]=e(n)})),t}(n(164));function r(e,t){return e[t].default}var o={header:"About ProRide",text1:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("p",{children:"Pro-Ride Coaching was set up in 2014 by ex-teacher and former Olympic cyclist, Phil Bateman in response to the growing popularity of cycling thanks to the visit of the Tour de France and the success of a growing number of British cyclists such as Chris Froome, Mark Cavendish and Bradley Wiggins."}),Object(i.jsx)("p",{children:"Aimed at giving school children a taste of bike racing and access to the sport rather than a road safety course, the program was a huge success with both children and staff and by the end of the year over 3,000 children had taken part in a Pro-Ride session."})]}),text2:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("p",{children:"Based in Yorkshire, Phil expanded the service to include the whole of the north of England the following year and expanded the range of services to include after-school clubs and a one-day CPD training course for schools wanting to continue running similar the sessions as part of the curriculum. This also proved popular with over 20 schools requesting the training and Durham CC commissioning their own course."}),Object(i.jsx)("p",{children:"In 2016 more services were added including competitions where schools ran a range of day, half day and inter-school events. Phil is a qualified teacher, British Cycling level 2 coach, and registered Bikeability instructor. His experience extends over 25 years and includes coaching at all levels from absolute beginners to elite athletes."})]}),img:r(c,"phil_with_three_kids.jpg"),img2:r(c,"starting_line.jpg"),imgDescription:"kid on bike"};t.default=function(){return Object(i.jsxs)("div",{children:[window.scrollTo(0,0),Object(i.jsx)(a.a,{img:o.img,img2:o.img2,text1:o.text1,text2:o.text2,header:o.header,btnLinkSrc:"/aboutPhil",btnText:"Learn about the founder"})]})}}}]);
//# sourceMappingURL=5.308cdb76.chunk.js.map