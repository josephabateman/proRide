(this.webpackJsonpproride=this.webpackJsonpproride||[]).push([[9],{143:function(e,t,a){"use strict";t.a={serviceCardsFullPageWidth:{container:"text-white pt-2",color:"green-gradient",title:"display-5",h5:"font-weight-light",column:"align-self-center",buttonStyle:"button",imgStyle:"my-2",imgHeight:300},serviceCardSmall:{container:"text-decoration-none",h2:"pt-3",button:"button"},servicesCardsCollection:{subHeaderText:"display-5 mb-4",firstRow:{row:"justify-content-center",column:"my-3",containerStyle:"service-card-img green-gradient shadow bg-white rounded font-weight-light"},secondRow:{row:"justify-content-center",containerStyle:"service-card-img blue-gradient shadow bg-white rounded font-weight-light"},thirdRow:{row:"justify-content-center",column:"px-0"},fourthRow:{row:"justify-content-center",column:"my-3",containerStyle:"service-card-img green-gradient shadow bg-white rounded font-weight-light"}},servicesPage:{container:"mt-3",title:"display-5",h5Column:"text-left",h5:"font-weight-light"},specificServicePage:{svgImageStyle:"service-card-img green-gradient",container:"pl-2",title:"py-3 display-5",text1:"text-left",text2:"mt-5 text-left",flyer1Col:"mb-5",flyer1Style:"button mr-3",flyer2Style:"button"},collapsingBanners:{mainCard:"blue-gradient text-white pt-2",container:"px-0",title:"display-5",h5:"font-weight-light",buttonStyle:"button",rowContainerAfterMainBanner:"collapsing-rows",minHeight_rowContainerAfterMainBanner:"450px",row:"mt-2",column:"p-0"},promoVideo:{container:"mt-2 mt-md-0",src:"https://www.youtube.com/embed/KPvxQjljIgo"},aboutTemplateStyles:{container:"pl-2 text-left",h1:"py-3 display-5 text-center text-md-left",linkText:"text-info",img2AndText2Section:"mt-4 mb-4"},contactFormStyles:{emailInput:"mt-3 mb-3",buttonPosition:"d-flex justify-content-sm-start mt-3",buttonStyle:"button"},contactPageStyles:{firstRow:"mt-3 mb-3 justify-content-md-center d-none d-lg-block",secondRow:"d-lg-none justify-content-center mt-3 mb-3"},socialMediaCardsStyles:{cardStyleWidth:"18rem",cardStyleMinHeight:"200px",title:"mt-3"},socialMediaCardsMobileStyles:{container:"d-inline-block p-sm-4 p-3",iconText:"d-none d-sm-block"}}},152:function(e,t,a){"use strict";var n=a(2),i=a(3),r=a(6),o=a.n(r),s=a(0),c=a(21),l=a(5),d=a(50),b=s.createContext({});b.displayName="AccordionContext";var h=b,u=a(1),m=["bsPrefix","className","children","eventKey"],j=s.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,c=e.children,b=e.eventKey,j=Object(i.a)(e,m),y=Object(s.useContext)(h).activeEventKey;return a=Object(l.a)(a,"accordion-collapse"),Object(u.jsx)(d.a,Object(n.a)(Object(n.a)({ref:t,in:y===b},j),{},{className:o()(r,a),children:Object(u.jsx)("div",{children:s.Children.only(c)})}))}));j.displayName="AccordionCollapse";var y=j,f=s.createContext({eventKey:""});f.displayName="AccordionItemContext";var v=f,p=["as","bsPrefix","className"],g=s.forwardRef((function(e,t){var a=e.as,r=void 0===a?"div":a,c=e.bsPrefix,d=e.className,b=Object(i.a)(e,p);c=Object(l.a)(c,"accordion-body");var h=Object(s.useContext)(v).eventKey;return Object(u.jsx)(y,{eventKey:h,children:Object(u.jsx)(r,Object(n.a)(Object(n.a)({ref:t},b),{},{className:o()(d,c)}))})}));g.displayName="AccordionBody";var x=g,O=["as","bsPrefix","className","onClick"];var w=s.forwardRef((function(e,t){var a=e.as,r=void 0===a?"button":a,c=e.bsPrefix,d=e.className,b=e.onClick,m=Object(i.a)(e,O);c=Object(l.a)(c,"accordion-button");var j=Object(s.useContext)(v).eventKey,y=function(e,t){var a=Object(s.useContext)(h),n=a.activeEventKey,i=a.onSelect;return function(a){i&&i(e===n?null:e,a),t&&t(a)}}(j,b),f=Object(s.useContext)(h).activeEventKey;return"button"===r&&(m.type="button"),Object(u.jsx)(r,Object(n.a)(Object(n.a)({ref:t,onClick:y},m),{},{"aria-expanded":j===f,className:o()(d,c,j!==f&&"collapsed")}))}));w.displayName="AccordionButton";var N=w,k=["as","bsPrefix","className","children","onClick"],C=s.forwardRef((function(e,t){var a=e.as,r=void 0===a?"h2":a,s=e.bsPrefix,c=e.className,d=e.children,b=e.onClick,h=Object(i.a)(e,k);return s=Object(l.a)(s,"accordion-header"),Object(u.jsx)(r,Object(n.a)(Object(n.a)({ref:t},h),{},{className:o()(c,s),children:Object(u.jsx)(N,{onClick:b,children:d})}))}));C.displayName="AccordionHeader";var S=C,K=["as","bsPrefix","className","eventKey"],P=s.forwardRef((function(e,t){var a=e.as,r=void 0===a?"div":a,c=e.bsPrefix,d=e.className,b=e.eventKey,h=Object(i.a)(e,K);c=Object(l.a)(c,"accordion-item");var m=Object(s.useMemo)((function(){return{eventKey:b}}),[b]);return Object(u.jsx)(v.Provider,{value:m,children:Object(u.jsx)(r,Object(n.a)(Object(n.a)({ref:t},h),{},{className:o()(d,c)}))})}));P.displayName="AccordionItem";var I=P,B=["as","activeKey","bsPrefix","className","onSelect","flush"],H=s.forwardRef((function(e,t){var a=Object(c.a)(e,{activeKey:"onSelect"}),r=a.as,d=void 0===r?"div":r,b=a.activeKey,m=a.bsPrefix,j=a.className,y=a.onSelect,f=a.flush,v=Object(i.a)(a,B),p=Object(l.a)(m,"accordion"),g=Object(s.useMemo)((function(){return{activeEventKey:b,onSelect:y}}),[b,y]);return Object(u.jsx)(h.Provider,{value:g,children:Object(u.jsx)(d,Object(n.a)(Object(n.a)({ref:t},v),{},{className:o()(j,p,f&&"".concat(p,"-flush"))}))})}));H.displayName="Accordion";t.a=Object.assign(H,{Button:N,Collapse:y,Item:I,Header:S,Body:x})},169:function(e,t,a){"use strict";a.r(t);a(0);var n=a(152),i=(a(143),a(1));t.default=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"my-4",children:"FAQs"}),Object(i.jsx)("div",{id:"balance_bike_faqs",children:Object(i.jsxs)(n.a,{className:"container-lg bg-light p-3",children:[Object(i.jsx)("h3",{className:"",children:"Balance Bike Session FAQs"}),Object(i.jsxs)(n.a.Item,{eventKey:"0",className:"border-0",children:[Object(i.jsx)(n.a.Header,{children:Object(i.jsx)("span",{className:"ml-auto",children:"How many children can take part in a day?"})}),Object(i.jsx)(n.a.Body,{children:"Our usual day caters for up to 60 children in four one hour sessions, however extra sessions can be added by reducing the duration of sessions. Our standard charges cater for up to 60, 75 or 90 children. Please see the current price list."})]}),Object(i.jsxs)(n.a.Item,{eventKey:"1",className:"border-0",children:[Object(i.jsx)(n.a.Header,{children:Object(i.jsx)("div",{className:"ml-auto",children:"What ages are catered for?"})}),Object(i.jsx)(n.a.Body,{children:"We run balance bike sessions for all FS/KS1 classes from Nursery to Year Two. All equipment is provided for up to and including year one, whilst year 2 bring in their own bikes. We can provide larger balance bikes that convert to pedal bikes for year 2 if they are needed but these are subject to availability and carry an additional hire charge."})]}),Object(i.jsxs)(n.a.Item,{eventKey:"2",className:"border-0",children:[Object(i.jsx)(n.a.Header,{children:Object(i.jsx)("div",{className:"ml-auto",children:"Some of our children can already ride a pedal bike, can they take part in the sessions?"})}),Object(i.jsx)(n.a.Body,{children:"Yes, absolutely, those who have recently learned to pedal still enjoy taking part in the sessions and always develop new skills and greater confidence that can then be applied to their riding once they return to their pedal bike."})]}),Object(i.jsxs)(n.a.Item,{eventKey:"3",className:"border-0",children:[Object(i.jsx)(n.a.Header,{children:Object(i.jsx)("div",{className:"ml-auto",children:"Do you provide the bikes or do the children need to bring their own?"})}),Object(i.jsx)(n.a.Body,{children:"Yes, we provide everything needed for the sessions so children simply rock-up to their sessions and we take it from there. No special clothing or footwear is needed. In particularly cold weather we do however advise the children wear gloves if possible."})]}),Object(i.jsxs)(n.a.Item,{eventKey:"4",className:"border-0",children:[Object(i.jsx)(n.a.Header,{children:Object(i.jsx)("div",{className:"ml-auto",children:"Do you run sessions for children that can already ride a bike?"})}),Object(i.jsx)(n.a.Body,{children:'Yes, our "Beginner" sessions are designed specifically for this purpose. We offer a one-day beginner program for up to 60 children aimed at helping them transition from balance bike to pedal bike. Intended for Years 1 and 2, the day is split into groups of 10 where the children are taught how to control, balance and pedal using special convertible bikes.'})]}),Object(i.jsxs)(n.a.Item,{eventKey:"5",className:"border-0",children:[Object(i.jsx)(n.a.Header,{children:Object(i.jsx)("div",{className:"ml-auto",children:"How do I book a balance bike day for my school?"})}),Object(i.jsx)(n.a.Body,{children:"You can check availability and reserve a date online by going to the bookings page on this website and filling out a booking request form. Once your form is received, we will plan your sessions and send you a booking form with a suggested outline for your visit. You will then have two weeks to sign and return or amend your booking (minor changes to session timings and group numbers can be made in the days prior to the visit). No payment is taken prior to the visit but late cancellations will incur a penalty, details of which are outlined in terms attached to your booking confirmation."})]}),Object(i.jsxs)(n.a.Item,{eventKey:"6",className:"border-0",children:[Object(i.jsx)(n.a.Header,{children:Object(i.jsx)("div",{className:"ml-auto",children:"Can I change my date once I've booked?"})}),Object(i.jsx)(n.a.Body,{children:"If you are unable to go ahead with your planned visit, we will try to arrange an alternative date providing we have at least 30 days notice. Last minute cancellations will usually incur penalty charges as it may not be possible to fill your booking."})]})]})})]})}}}]);
//# sourceMappingURL=9.a6f8f294.chunk.js.map