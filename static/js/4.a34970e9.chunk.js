(this.webpackJsonpproride=this.webpackJsonpproride||[]).push([[4],{106:function(e,t,n){"use strict";t.a={serviceCardsFullPageWidth:{container:"text-white pt-2",color:"green-gradient",title:"display-5",h5:"font-weight-light",column:"align-self-center",buttonStyle:"button",imgStyle:"my-2",imgHeight:300},serviceCardSmall:{container:"text-decoration-none",h2:"pt-3",button:"button"},servicesCardsCollection:{subHeaderText:"display-5 mb-4",firstRow:{row:"justify-content-center",column:"my-3",containerStyle:"service-card-img green-gradient shadow bg-white rounded font-weight-light"},secondRow:{row:"justify-content-center",containerStyle:"blue-gradient service-card-img-taller"},thirdRow:{row:"justify-content-center",column:"px-0"},fourthRow:{row:"justify-content-center",column:"my-3",containerStyle:"service-card-img blue-gradient shadow bg-white rounded font-weight-light"}},servicesPage:{container:"mt-3",title:"display-5",h5Column:"text-left",h5:"font-weight-light"},specificServicePage:{svgImageStyle:"service-card-img green-gradient",container:"pl-2",title:"py-3 display-5",text1:"text-left",text2:"mt-5 text-left",flyer1Col:"mb-5",flyer1Style:"button mr-3",flyer2Style:"button"},collapsingBanners:{mainCard:"blue-gradient text-white pt-2",container:"px-0",title:"display-5",h5:"font-weight-light",buttonStyle:"button",rowContainerAfterMainBanner:"collapsing-rows",minHeight_rowContainerAfterMainBanner:"450px",row:"mt-2",column:"p-0"},promoVideo:{container:"mt-2 mt-md-0",src:"https://www.youtube.com/embed/KPvxQjljIgo"},aboutTemplateStyles:{container:"pl-2 text-left",h1:"py-3 display-5 text-center text-md-left",image1:"about-img float-md-left mr-md-5 d-block mx-auto m-3",image2:"about-img mb-5 float-md-right mx-md-4 d-block mx-auto",linkText:"text-info",img2AndText2Section:"mt-4 mb-4"},contactFormStyles:{emailInput:"mt-3 mb-3",buttonPosition:"d-flex justify-content-sm-start mt-3",buttonStyle:"button"},contactPageStyles:{firstRow:"mt-3 mb-3 justify-content-md-center d-none d-lg-block",secondRow:"d-lg-none justify-content-center mt-3 mb-3"},socialMediaCardsStyles:{cardStyleWidth:"18rem",cardStyleMinHeight:"200px",title:"mt-3"},socialMediaCardsMobileStyles:{container:"d-inline-block p-sm-4 p-3",iconText:"d-none d-sm-block"}}},108:function(e,t,n){"use strict";var i=n(2),a=n(3),r=n(5),o=n.n(r),l=n(0),s=n.n(l),c=n(6),d=["xl","lg","md","sm","xs"],m=s.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,l=e.as,m=void 0===l?"div":l,u=Object(a.a)(e,["bsPrefix","className","as"]),f=Object(c.a)(n,"col"),h=[],p=[];return d.forEach((function(e){var t,n,i,a=u[e];if(delete u[e],"object"===typeof a&&null!=a){var r=a.span;t=void 0===r||r,n=a.offset,i=a.order}else t=a;var o="xs"!==e?"-"+e:"";t&&h.push(!0===t?""+f+o:""+f+o+"-"+t),null!=i&&p.push("order"+o+"-"+i),null!=n&&p.push("offset"+o+"-"+n)})),h.length||h.push(f),s.a.createElement(m,Object(i.a)({},u,{ref:t,className:o.a.apply(void 0,[r].concat(h,p))}))}));m.displayName="Col",t.a=m},109:function(e,t,n){"use strict";var i=n(2),a=n(3),r=n(5),o=n.n(r),l=n(0),s=n.n(l),c=n(6),d=s.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.fluid,l=e.as,d=void 0===l?"div":l,m=e.className,u=Object(a.a)(e,["bsPrefix","fluid","as","className"]),f=Object(c.a)(n,"container"),h="string"===typeof r?"-"+r:"-fluid";return s.a.createElement(d,Object(i.a)({ref:t},u,{className:o()(m,r?""+f+h:f)}))}));d.displayName="Container",d.defaultProps={fluid:!1},t.a=d},110:function(e,t,n){"use strict";var i=n(2),a=n(3),r=n(5),o=n.n(r),l=n(0),s=n.n(l),c=n(6),d=["xl","lg","md","sm","xs"],m=s.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,l=e.noGutters,m=e.as,u=void 0===m?"div":m,f=Object(a.a)(e,["bsPrefix","className","noGutters","as"]),h=Object(c.a)(n,"row"),p=h+"-cols",b=[];return d.forEach((function(e){var t,n=f[e];delete f[e];var i="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&b.push(""+p+i+"-"+t)})),s.a.createElement(u,Object(i.a)({ref:t},f,{className:o.a.apply(void 0,[r,h,l&&"no-gutters"].concat(b))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},t.a=m},111:function(e,t,n){"use strict";n(0);var i=n(109),a=n(110),r=n(108),o=n(102),l=n(35),s=n(106),c=n(1);t.a=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(i.a,{fluid:"sm",className:s.a.aboutTemplateStyles.container,children:[Object(c.jsx)("h1",{className:s.a.aboutTemplateStyles.h1,children:e.header}),Object(c.jsx)(a.a,{children:Object(c.jsxs)(r.a,{children:[Object(c.jsx)(o.a,{src:e.img,rounded:!0,className:s.a.aboutTemplateStyles.image1}),e.text1,Object(c.jsx)(l.b,{to:e.btnLinkSrc,className:s.a.aboutTemplateStyles.linkText,children:e.btnText})]})}),Object(c.jsx)(a.a,{children:Object(c.jsxs)(r.a,{className:s.a.aboutTemplateStyles.img2AndText2Section,children:[Object(c.jsx)(o.a,{src:e.img2,rounded:!0,className:s.a.aboutTemplateStyles.image2}),e.text2]})})]})})}},120:function(e,t,n){var i={"./cycling_weekly.png":121,"./phil_profile_pic.jpeg":122};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=r,e.exports=a,a.id=120},121:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/cycling_weekly.f116f283.png"},122:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/phil_profile_pic.56ef698c.jpeg"},137:function(e,t,n){"use strict";n.r(t);n(0);var i=n(111),a=n(1);var r=function(e){var t={};return e.keys().forEach((function(n){t[n.replace("./","")]=e(n)})),t}(n(120));function o(e,t){return e[t].default}var l={header:"About Phil",text1:Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("p",{children:"Phil started racing as a junior in 1977 winning his first one road race in Beverley near Hull. Following other local success, including winning the Yorkshire Junior Championships in Halifax, Phil began to compete nationally finishing second in the Junior national time trial championships (BBAR) and later represented GB for the first time in the Junior World Championships in Mexico."})}),text2:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:"Success at national and international level followed with strong performances in the Tour of Britain a bronze medal at the National Road Race Championships and a win against top professionals in the 1988 Pro-am Tour of Lancashire."}),Object(a.jsx)("p",{children:"During his career, Phil won over 50 road races, five Yellow Jerseys and represented Team GB at three world championships and the 1988 Olympic Games in Seoul, Korea."}),Object(a.jsx)("p",{children:"Today Phil lives in Bradford where he continues to ride locally as much as possible whilst coaching full time for Pro-Ride."})]}),img:o(r,"phil_profile_pic.jpeg"),imgDescription:"Phil Bateman Sports Article 1988",img2:o(r,"cycling_weekly.png"),img2Description:"Phil Bateman 2021"};t.default=function(){return Object(a.jsxs)("div",{children:[window.scrollTo(0,0),Object(a.jsx)(i.a,{img:l.img,img2:l.img2,text1:l.text1,text2:l.text2,header:l.header,btnLinkSrc:"/aboutProRide",btnText:"Learn about Pro Ride"})]})}}}]);
//# sourceMappingURL=4.a34970e9.chunk.js.map