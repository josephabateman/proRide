"use strict";(self.webpackChunkproride=self.webpackChunkproride||[]).push([[303],{3303:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var o=n(2791),r=n(7821),a=n.n(r),c=n(7022),i=n(9743),s=n(2677),l=n(2592),d=n(8949),u=n(1523),f=n(6795),m=function(){return m=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},m.apply(this,arguments)};var v="",p=null,h=null,y=null;function x(){v="",null!==p&&p.disconnect(),null!==h&&(window.clearTimeout(h),h=null)}function b(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function g(){var e=null;if("#"===v)e=document.body;else{var t=v.replace("#","");null===(e=document.getElementById(t))&&"#top"===v&&(e=document.body)}if(null!==e){y(e);var n=e.getAttribute("tabindex");return null!==n||b(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==n||b(e)||(e.blur(),e.removeAttribute("tabindex")),x(),!0}return!1}function w(e){return o.forwardRef((function(t,n){var r="";"string"===typeof t.to&&t.to.includes("#")?r="#"+t.to.split("#").slice(1).join("#"):"object"===typeof t.to&&"string"===typeof t.to.hash&&(r=t.to.hash);var a={};e===u.OL&&(a.isActive=function(e,t){return e&&e.isExact&&t.hash===r});var c=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(t,["scroll","smooth","timeout","elementId"]);return o.createElement(e,m({},a,c,{onClick:function(e){var n;x(),v=t.elementId?"#"+t.elementId:r,t.onClick&&t.onClick(e),""===v||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(y=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},n=t.timeout,window.setTimeout((function(){!1===g()&&(null===p&&(p=new MutationObserver(g)),p.observe(document,{attributes:!0,childList:!0,subtree:!0}),h=window.setTimeout((function(){x()}),n||1e4))}),0))},ref:n}),t.children)}))}var j=w(u.rU),N=(w(u.OL),n(184));var Z=function(e){return(0,N.jsxs)("div",{children:[window.scrollTo(0,0),(0,N.jsx)(a(),{smooth:!0}),(0,N.jsx)("img",{src:e.tile,className:f.Z.specificServicePage.tileImageStyle}),(0,N.jsx)(c.Z,{className:f.Z.specificServicePage.container,children:(0,N.jsxs)(i.Z,{className:"m-auto",children:[(0,N.jsx)(s.Z,{xs:12,className:"",children:(0,N.jsx)("h1",{className:f.Z.specificServicePage.title,children:e.title})}),(0,N.jsx)(s.Z,{xs:12,className:"mb-5",children:(0,N.jsx)("h4",{className:f.Z.specificServicePage.header,children:e.header})}),(0,N.jsxs)(i.Z,{className:"m-auto",children:[(0,N.jsxs)(s.Z,{xs:12,lg:5,children:[(0,N.jsx)("div",{className:"rotatated-bg-green mb-4",children:(0,N.jsx)(l.Z,{src:e.img})}),e.flyer?(0,N.jsx)("a",{href:e.flyer,target:"_blank",className:f.Z.specificServicePage.flyer1Style,children:e.dropdown1?"".concat(e.dropdown1," PDF"):"".concat(e.title," PDF")}):"",e.flyer2?(0,N.jsx)("a",{href:e.flyer2,target:"_blank",className:f.Z.specificServicePage.flyer2Style,children:e.dropdown2?"".concat(e.dropdown2," PDF"):"Further info PDF"}):""]}),(0,N.jsxs)(s.Z,{xs:12,lg:7,className:"p-0 p-md-4",children:[e.dropdown1&&e.dropdown2?(0,N.jsxs)(d.Z,{id:"acc1",defaultActiveKey:"0",flush:!0,children:[(0,N.jsxs)(d.Z.Item,{eventKey:"0",children:[(0,N.jsx)(j,{to:"#acc1",children:(0,N.jsx)(d.Z.Header,{className:"m-lg-3 p-1",children:(0,N.jsx)("span",{className:"ml-auto d-block",children:e.dropdown1})})}),(0,N.jsx)(d.Z.Body,{className:"p-0",children:e.text1})]}),(0,N.jsxs)(d.Z.Item,{eventKey:"1",children:[(0,N.jsx)(j,{to:"#acc1",children:(0,N.jsx)(d.Z.Header,{className:"m-lg-3 p-1",children:(0,N.jsx)("span",{className:"ml-auto d-block",children:e.dropdown2})})}),(0,N.jsx)(d.Z.Body,{className:"p-0",children:e.text2})]})]}):(0,N.jsx)("span",{className:"ml-auto d-block",children:e.text1}),(0,N.jsx)(u.rU,{to:"/contact",className:"button",children:"Get in touch"})]})]})]})})]})}},6795:function(e,t){t.Z={serviceCardsFullPageWidth:{container:"text-white pt-2",color:"green-gradient",title:"display-5",h5:"font-weight-light",column:"align-self-center",buttonStyle:"button",imgStyle:"my-2",imgHeight:300},serviceCardSmall:{container:"text-decoration-none",h2:"pt-3",button:"button"},servicesCardsCollection:{subHeaderText:"display-5 mb-4",firstRow:{row:"justify-content-center",column:"my-3",containerStyle:"service-card-img green-gradient shadow bg-white rounded font-weight-light"},secondRow:{row:"justify-content-center",containerStyle:"service-card-img blue-gradient shadow bg-white rounded font-weight-light"},thirdRow:{row:"justify-content-center",column:"px-0"},fourthRow:{row:"justify-content-center",column:"my-3",containerStyle:"service-card-img green-gradient shadow bg-white rounded font-weight-light"}},servicesPage:{container:"mt-3",title:"display-5",h5Column:"m-auto",h5:"font-weight-light"},specificServicePage:{tileImageStyle:"service-card-img green-gradient",container:"pl-2",title:"py-3 display-5",text1:"text-left",text2:"mt-5 text-left",flyer1Col:"mb-5",flyer1Style:"button mr-3",flyer2Style:"button"},collapsingBanners:{mainCard:"blue-gradient text-white pt-2",container:"px-0",title:"display-5",h5:"font-weight-light",buttonStyle:"button",rowContainerAfterMainBanner:"collapsing-rows",minHeight_rowContainerAfterMainBanner:"450px",row:"mt-2",column:"p-0"},promoVideo:{container:"mt-2 mt-md-0",src:"https://www.youtube.com/embed/KPvxQjljIgo"},aboutTemplateStyles:{container:"pl-2 text-left",h1:"py-3 display-5 text-center text-md-left",linkText:"text-info",img2AndText2Section:"mt-4 mb-4"},contactFormStyles:{emailInput:"mt-3 mb-3",buttonPosition:"d-flex justify-content-sm-start mt-3",buttonStyle:"button"},contactPageStyles:{firstRow:"mt-3 mb-3 justify-content-md-center d-none d-lg-block",secondRow:"d-lg-none justify-content-center mt-3 mb-3"},socialMediaCardsStyles:{cardStyleWidth:"18rem",cardStyleMinHeight:"200px",title:"mt-3"},socialMediaCardsMobileStyles:{container:"d-inline-block p-sm-4 p-3",iconText:"d-none d-sm-block"}}},8949:function(e,t,n){n.d(t,{Z:function(){return I}});var o=n(1413),r=n(5987),a=n(1694),c=n.n(a),i=n(2791),s=n(239),l=n(162),d=n(7858);function u(e,t){return Array.isArray(e)?e.includes(t):e===t}var f=i.createContext({});f.displayName="AccordionContext";var m=f,v=n(184),p=["as","bsPrefix","className","children","eventKey"],h=i.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,s=e.bsPrefix,f=e.className,h=e.children,y=e.eventKey,x=(0,r.Z)(e,p),b=(0,i.useContext)(m).activeEventKey;return s=(0,l.vE)(s,"accordion-collapse"),(0,v.jsx)(d.Z,(0,o.Z)((0,o.Z)({ref:t,in:u(b,y)},x),{},{className:c()(f,s),children:(0,v.jsx)(a,{children:i.Children.only(h)})}))}));h.displayName="AccordionCollapse";var y=h,x=i.createContext({eventKey:""});x.displayName="AccordionItemContext";var b=x,g=["as","bsPrefix","className"],w=i.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,s=e.bsPrefix,d=e.className,u=(0,r.Z)(e,g);s=(0,l.vE)(s,"accordion-body");var f=(0,i.useContext)(b).eventKey;return(0,v.jsx)(y,{eventKey:f,children:(0,v.jsx)(a,(0,o.Z)((0,o.Z)({ref:t},u),{},{className:c()(d,s)}))})}));w.displayName="AccordionBody";var j=w,N=n(2982),Z=["as","bsPrefix","className","onClick"];var P=i.forwardRef((function(e,t){var n=e.as,a=void 0===n?"button":n,s=e.bsPrefix,d=e.className,f=e.onClick,p=(0,r.Z)(e,Z);s=(0,l.vE)(s,"accordion-button");var h=(0,i.useContext)(b).eventKey,y=function(e,t){var n=(0,i.useContext)(m),o=n.activeEventKey,r=n.onSelect,a=n.alwaysOpen;return function(n){var c=e===o?null:e;a&&(c=Array.isArray(o)?o.includes(e)?o.filter((function(t){return t!==e})):[].concat((0,N.Z)(o),[e]):[e]),null==r||r(c,n),null==t||t(n)}}(h,f),x=(0,i.useContext)(m).activeEventKey;return"button"===a&&(p.type="button"),(0,v.jsx)(a,(0,o.Z)((0,o.Z)({ref:t,onClick:y},p),{},{"aria-expanded":h===x,className:c()(d,s,!u(x,h)&&"collapsed")}))}));P.displayName="AccordionButton";var C=P,S=["as","bsPrefix","className","children","onClick"],E=i.forwardRef((function(e,t){var n=e.as,a=void 0===n?"h2":n,i=e.bsPrefix,s=e.className,d=e.children,u=e.onClick,f=(0,r.Z)(e,S);return i=(0,l.vE)(i,"accordion-header"),(0,v.jsx)(a,(0,o.Z)((0,o.Z)({ref:t},f),{},{className:c()(s,i),children:(0,v.jsx)(C,{onClick:u,children:d})}))}));E.displayName="AccordionHeader";var O=E,A=["as","bsPrefix","className","eventKey"],k=i.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,s=e.bsPrefix,d=e.className,u=e.eventKey,f=(0,r.Z)(e,A);s=(0,l.vE)(s,"accordion-item");var m=(0,i.useMemo)((function(){return{eventKey:u}}),[u]);return(0,v.jsx)(b.Provider,{value:m,children:(0,v.jsx)(a,(0,o.Z)((0,o.Z)({ref:t},f),{},{className:c()(d,s)}))})}));k.displayName="AccordionItem";var K=k,T=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],R=i.forwardRef((function(e,t){var n=(0,s.Ch)(e,{activeKey:"onSelect"}),a=n.as,d=void 0===a?"div":a,u=n.activeKey,f=n.bsPrefix,p=n.className,h=n.onSelect,y=n.flush,x=n.alwaysOpen,b=(0,r.Z)(n,T),g=(0,l.vE)(f,"accordion"),w=(0,i.useMemo)((function(){return{activeEventKey:u,onSelect:h,alwaysOpen:x}}),[u,h,x]);return(0,v.jsx)(m.Provider,{value:w,children:(0,v.jsx)(d,(0,o.Z)((0,o.Z)({ref:t},b),{},{className:c()(p,g,y&&"".concat(g,"-flush"))}))})}));R.displayName="Accordion";var I=Object.assign(R,{Button:C,Collapse:y,Item:K,Header:O,Body:j})},2677:function(e,t,n){var o=n(885),r=n(1413),a=n(5987),c=n(1694),i=n.n(c),s=n(2791),l=n(162),d=n(184),u=["as","bsPrefix","className"],f=["className"];var m=s.forwardRef((function(e,t){var n=function(e){var t=e.as,n=e.bsPrefix,o=e.className,c=(0,a.Z)(e,u);n=(0,l.vE)(n,"col");var s=(0,l.pi)(),d=[],f=[];return s.forEach((function(e){var t,o,r,a=c[e];delete c[e],"object"===typeof a&&null!=a?(t=a.span,o=a.offset,r=a.order):t=a;var i="xs"!==e?"-".concat(e):"";t&&d.push(!0===t?"".concat(n).concat(i):"".concat(n).concat(i,"-").concat(t)),null!=r&&f.push("order".concat(i,"-").concat(r)),null!=o&&f.push("offset".concat(i,"-").concat(o))})),[(0,r.Z)((0,r.Z)({},c),{},{className:i().apply(void 0,[o].concat(d,f))}),{as:t,bsPrefix:n,spans:d}]}(e),c=(0,o.Z)(n,2),s=c[0],m=s.className,v=(0,a.Z)(s,f),p=c[1],h=p.as,y=void 0===h?"div":h,x=p.bsPrefix,b=p.spans;return(0,d.jsx)(y,(0,r.Z)((0,r.Z)({},v),{},{ref:t,className:i()(m,!b.length&&x)}))}));m.displayName="Col",t.Z=m},7022:function(e,t,n){var o=n(1413),r=n(5987),a=n(1694),c=n.n(a),i=n(2791),s=n(162),l=n(184),d=["bsPrefix","fluid","as","className"],u=i.forwardRef((function(e,t){var n=e.bsPrefix,a=e.fluid,i=e.as,u=void 0===i?"div":i,f=e.className,m=(0,r.Z)(e,d),v=(0,s.vE)(n,"container"),p="string"===typeof a?"-".concat(a):"-fluid";return(0,l.jsx)(u,(0,o.Z)((0,o.Z)({ref:t},m),{},{className:c()(f,a?"".concat(v).concat(p):v)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.Z=u},9743:function(e,t,n){var o=n(1413),r=n(5987),a=n(1694),c=n.n(a),i=n(2791),s=n(162),l=n(184),d=["bsPrefix","className","as"],u=i.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.as,u=void 0===i?"div":i,f=(0,r.Z)(e,d),m=(0,s.vE)(n,"row"),v=(0,s.pi)(),p="".concat(m,"-cols"),h=[];return v.forEach((function(e){var t,n=f[e];delete f[e],t=null!=n&&"object"===typeof n?n.cols:n;var o="xs"!==e?"-".concat(e):"";null!=t&&h.push("".concat(p).concat(o,"-").concat(t))})),(0,l.jsx)(u,(0,o.Z)((0,o.Z)({ref:t},f),{},{className:c().apply(void 0,[a,m].concat(h))}))}));u.displayName="Row",t.Z=u},7821:function(e,t,n){var o,r=n(2791),a=(o=r)&&"object"===typeof o&&"default"in o?o.default:o,c=function(){return c=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)};var i="styles_scroll-to-top__2A70v";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".styles_scroll-to-top__2A70v {\n  background-color: white;\n  right: 40px;\n  bottom: 40px;\n  position: fixed;\n  z-index: 2;\n  cursor: pointer;\n  border-radius: 7px;\n  width: 40px;\n  height: 40px;\n  transition: opacity 1s ease-in-out;\n  box-shadow: 0 9px 25px 0 rgba(132, 128, 177, 0.28);\n  border: none;\n  outline: none;\n}\n\n.styles_scroll-to-top__2A70v:active {\n  transform: matrix(0.95, 0, 0, 0.95, 0, 0);\n}\n");e.exports=function(e){var t=e.top,n=void 0===t?20:t,o=e.className,s=void 0===o?i:o,l=e.color,d=void 0===l?"black":l,u=e.smooth,f=void 0!==u&&u,m=e.component,v=void 0===m?"":m,p=e.viewBox,h=void 0===p?"0 0 256 256":p,y=e.svgPath,x=void 0===y?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":y,b=e.width,g=void 0===b?"28":b,w=e.height,j=void 0===w?"28":w,N=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(e,["top","className","color","smooth","component","viewBox","svgPath","width","height"]),Z=r.useState(!1),P=Z[0],C=Z[1],S=function(){C(document.documentElement.scrollTop>n)};return r.useEffect((function(){return document.addEventListener("scroll",S),function(){return document.removeEventListener("scroll",S)}}),[]),a.createElement(a.Fragment,null,P&&a.createElement("button",c({className:s,onClick:function(){return function(e){void 0===e&&(e=!1),e?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0}(f)}},N),v||a.createElement("svg",{width:g,height:j,fill:d,viewBox:h},a.createElement("path",{d:x}))))}}}]);
//# sourceMappingURL=303.fbed568b.chunk.js.map