(this.webpackJsonpproride=this.webpackJsonpproride||[]).push([[4],{124:function(e,t,n){"use strict";t.a={serviceCardsFullPageWidth:{container:"text-white pt-2",color:"green-gradient",title:"display-5",h5:"font-weight-light",column:"align-self-center",buttonStyle:"button",imgStyle:"my-2",imgHeight:300},serviceCardSmall:{container:"text-decoration-none",h2:"pt-3",button:"button"},servicesCardsCollection:{subHeaderText:"display-5 mb-4",firstRow:{row:"justify-content-center",column:"my-3",containerStyle:"service-card-img green-gradient shadow bg-white rounded font-weight-light"},secondRow:{row:"justify-content-center",containerStyle:"service-card-img blue-gradient shadow bg-white rounded font-weight-light"},thirdRow:{row:"justify-content-center",column:"px-0"},fourthRow:{row:"justify-content-center",column:"my-3",containerStyle:"service-card-img blue-gradient shadow bg-white rounded font-weight-light"}},servicesPage:{container:"mt-3",title:"display-5",h5Column:"text-left",h5:"font-weight-light"},specificServicePage:{svgImageStyle:"service-card-img green-gradient",container:"pl-2",title:"py-3 display-5",text1:"text-left",text2:"mt-5 text-left",flyer1Col:"mb-5",flyer1Style:"button mr-3",flyer2Style:"button"},collapsingBanners:{mainCard:"blue-gradient text-white pt-2",container:"px-0",title:"display-5",h5:"font-weight-light",buttonStyle:"button",rowContainerAfterMainBanner:"collapsing-rows",minHeight_rowContainerAfterMainBanner:"450px",row:"mt-2",column:"p-0"},promoVideo:{container:"mt-2 mt-md-0",src:"https://www.youtube.com/embed/KPvxQjljIgo"},aboutTemplateStyles:{container:"pl-2 text-left",h1:"py-3 display-5 text-center text-md-left",linkText:"text-info",img2AndText2Section:"mt-4 mb-4"},contactFormStyles:{emailInput:"mt-3 mb-3",buttonPosition:"d-flex justify-content-sm-start mt-3",buttonStyle:"button"},contactPageStyles:{firstRow:"mt-3 mb-3 justify-content-md-center d-none d-lg-block",secondRow:"d-lg-none justify-content-center mt-3 mb-3"},socialMediaCardsStyles:{cardStyleWidth:"18rem",cardStyleMinHeight:"200px",title:"mt-3"},socialMediaCardsMobileStyles:{container:"d-inline-block p-sm-4 p-3",iconText:"d-none d-sm-block"}}},126:function(e,t,n){"use strict";var i=n(2),a=n(3),c=n(6),o=n.n(c),r=n(0),s=n(5),l=n(1),d=["bsPrefix","className","as"],m=["xxl","xl","lg","md","sm","xs"],u=r.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,r=e.as,u=void 0===r?"div":r,h=Object(a.a)(e,d),f=Object(s.a)(n,"col"),b=[],p=[];return m.forEach((function(e){var t,n,i,a=h[e];if(delete h[e],"object"===typeof a&&null!=a){var c=a.span;t=void 0===c||c,n=a.offset,i=a.order}else t=a;var o="xs"!==e?"-".concat(e):"";t&&b.push(!0===t?"".concat(f).concat(o):"".concat(f).concat(o,"-").concat(t)),null!=i&&p.push("order".concat(o,"-").concat(i)),null!=n&&p.push("offset".concat(o,"-").concat(n))})),b.length||b.push(f),Object(l.jsx)(u,Object(i.a)(Object(i.a)({},h),{},{ref:t,className:o.a.apply(void 0,[c].concat(b,p))}))}));u.displayName="Col",t.a=u},127:function(e,t,n){"use strict";var i=n(2),a=n(3),c=n(6),o=n.n(c),r=n(0),s=n(5),l=n(1),d=["bsPrefix","fluid","as","className"],m=r.forwardRef((function(e,t){var n=e.bsPrefix,c=e.fluid,r=e.as,m=void 0===r?"div":r,u=e.className,h=Object(a.a)(e,d),f=Object(s.a)(n,"container"),b="string"===typeof c?"-".concat(c):"-fluid";return Object(l.jsx)(m,Object(i.a)(Object(i.a)({ref:t},h),{},{className:o()(u,c?"".concat(f).concat(b):f)}))}));m.displayName="Container",m.defaultProps={fluid:!1},t.a=m},128:function(e,t,n){"use strict";var i=n(2),a=n(3),c=n(6),o=n.n(c),r=n(0),s=n(5),l=n(1),d=["bsPrefix","className","as"],m=["xxl","xl","lg","md","sm","xs"],u=r.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,r=e.as,u=void 0===r?"div":r,h=Object(a.a)(e,d),f=Object(s.a)(n,"row"),b="".concat(f,"-cols"),p=[];return m.forEach((function(e){var t,n=h[e];delete h[e],t=null!=n&&"object"===typeof n?n.cols:n;var i="xs"!==e?"-".concat(e):"";null!=t&&p.push("".concat(b).concat(i,"-").concat(t))})),Object(l.jsx)(u,Object(i.a)(Object(i.a)({ref:t},h),{},{className:o.a.apply(void 0,[c,f].concat(p))}))}));u.displayName="Row",t.a=u},129:function(e,t,n){"use strict";n(0);var i=n(127),a=n(128),c=n(126),o=n(120),r=n(49),s=n(124),l=n(1);t.a=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(i.a,{fluid:"sm",className:s.a.aboutTemplateStyles.container,children:[Object(l.jsx)(a.a,{children:Object(l.jsxs)(c.a,{children:[Object(l.jsxs)("div",{className:"row mb-3",children:[Object(l.jsx)("div",{className:"col-lg-4"}),Object(l.jsx)("div",{className:"col-lg-8",children:Object(l.jsx)("h1",{className:s.a.aboutTemplateStyles.h1,children:e.header})})]}),Object(l.jsx)("div",{className:"rotatated-bg-green about-img mb-5 float-md-left mx-md-5 d-block mx-auto ",children:Object(l.jsx)(o.a,{src:e.img})}),Object(l.jsxs)("div",{className:"text-center p-2",children:[e.text1,Object(l.jsx)(r.b,{to:e.btnLinkSrc,className:s.a.aboutTemplateStyles.linkText,children:e.btnText})]})]})}),Object(l.jsx)(a.a,{children:Object(l.jsxs)(c.a,{className:s.a.aboutTemplateStyles.img2AndText2Section,children:[Object(l.jsx)("div",{className:"rotatated-bg-blue about-img mb-5 float-md-right mx-md-5 d-block mx-auto",children:Object(l.jsx)(o.a,{src:e.img2})}),Object(l.jsx)("div",{className:"text-center p-2",children:e.text2})]})})]})})}},139:function(e,t,n){var i={"./cycling_weekly.png":140,"./phil_profile_pic.jpeg":141};function a(e){var t=c(e);return n(t)}function c(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=c,e.exports=a,a.id=139},140:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/cycling_weekly.f116f283.png"},141:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/phil_profile_pic.56ef698c.jpeg"},155:function(e,t,n){"use strict";n.r(t);n(0);var i=n(129),a=n(1);var c=function(e){var t={};return e.keys().forEach((function(n){t[n.replace("./","")]=e(n)})),t}(n(139));function o(e,t){return e[t].default}var r={header:"About Phil",text1:Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("p",{children:"Phil started racing as a junior in 1977 winning his first one road race in Beverley near Hull. Following other local success, including winning the Yorkshire Junior Championships in Halifax, Phil began to compete nationally finishing second in the Junior national time trial championships (BBAR) and later represented GB for the first time in the Junior World Championships in Mexico."})}),text2:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:"Success at national and international level followed with strong performances in the Tour of Britain a bronze medal at the National Road Race Championships and a win against top professionals in the 1988 Pro-am Tour of Lancashire."}),Object(a.jsx)("p",{children:"During his career, Phil won over 50 road races, five Yellow Jerseys and represented Team GB at three world championships and the 1988 Olympic Games in Seoul, Korea."}),Object(a.jsx)("p",{children:"Today Phil lives in Bradford where he continues to ride locally as much as possible whilst coaching full time for Pro-Ride."})]}),img:o(c,"phil_profile_pic.jpeg"),imgDescription:"Phil Bateman Sports Article 1988",img2:o(c,"cycling_weekly.png"),img2Description:"Phil Bateman 2021"};t.default=function(){return Object(a.jsxs)("div",{children:[window.scrollTo(0,0),Object(a.jsx)(i.a,{img:r.img,img2:r.img2,text1:r.text1,text2:r.text2,header:r.header,btnLinkSrc:"/aboutProRide",btnText:"Learn about Pro Ride"})]})}}}]);
//# sourceMappingURL=4.9c6ad25f.chunk.js.map