(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[9021],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,v=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6742:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(7294),o=r(3727),i=r(2263),a=r(3919),c=r(412);const s=(0,n.createContext)({collectLink:()=>{}});var l=r(4996),u=r(8780);const p=function({isNavLink:e,to:t,href:r,activeClassName:p,isActive:d,"data-noBrokenLinkCheck":f,autoAddBaseUrl:v=!0,...m}){var h;const{siteConfig:{trailingSlash:y}}=(0,i.Z)(),{withBaseUrl:b}=(0,l.C)(),g=(0,n.useContext)(s),w=t||r,O=(0,a.Z)(w),k=null==w?void 0:w.replace("pathname://","");let E=void 0!==k?(P=k,v&&(e=>e.startsWith("/"))(P)?b(P):P):void 0;var P;E&&O&&(E=(0,u.applyTrailingSlash)(E,y));const T=(0,n.useRef)(!1),x=e?o.OL:o.rU,j=c.Z.canUseIntersectionObserver;let C;(0,n.useEffect)((()=>(!j&&O&&null!=E&&window.docusaurus.prefetch(E),()=>{j&&C&&C.disconnect()})),[E,j,O]);const S=null!==(h=null==E?void 0:E.startsWith("#"))&&void 0!==h&&h,_=!E||!O||S;return E&&O&&!S&&!f&&g.collectLink(E),_?n.createElement("a",{href:E,...w&&!O&&{target:"_blank",rel:"noopener noreferrer"},...m}):n.createElement(x,{...m,onMouseEnter:()=>{T.current||null==E||(window.docusaurus.preload(E),T.current=!0)},innerRef:e=>{var t,r;j&&e&&O&&(t=e,r=()=>{null!=E&&window.docusaurus.prefetch(E)},C=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(C.unobserve(t),C.disconnect(),r())}))})),C.observe(t))},to:E||"",...e&&{isActive:d,activeClassName:p}})}},3919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>o})},4996:(e,t,r)=>{"use strict";r.d(t,{C:()=>i,Z:()=>a});var n=r(2263),o=r(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(n)return t+r;const a=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[r]=e.split(/[#?]/),n="/"===r?"/":t?(o=r).endsWith("/")?o:`${o}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(r);var o;return e.replace(r,n)}},8780:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(o).default}});var i=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(6742),o=r(7294),i=r(6010);const a="root_2PFE";function c({title:e,description:t,link:r}){return o.createElement("div",{className:(0,i.Z)("card-demo",a)},o.createElement("div",{className:"card"},o.createElement("div",{className:"card__header"},o.createElement("h3",null,e)),o.createElement("div",{className:"card__body"},o.createElement("p",null,t)),o.createElement("div",{className:"card__footer"},o.createElement(n.Z,{className:"button button--secondary button--block",to:r},"Get Started"))))}},7763:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(7294);const o="root_NqT0";function i({children:e}){return n.createElement("div",{className:o},e)}},4674:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>u,toc:()=>p,default:()=>f});var n=r(2122),o=(r(7294),r(3905)),i=r(4996),a=r(1962),c=r(7763);const s={title:"SDK Overview",description:"Geocortex Reporting - Overview of the SDK"},l=void 0,u={unversionedId:"reporting/sdk-overview",id:"reporting/sdk-overview",isDocsHomePage:!1,title:"SDK Overview",description:"Geocortex Reporting - Overview of the SDK",source:"@site/docs/reporting/sdk-overview.mdx",sourceDirName:"reporting",slug:"/reporting/sdk-overview",permalink:"/docs/reporting/sdk-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/reporting/sdk-overview.mdx",version:"current",frontMatter:{title:"SDK Overview",description:"Geocortex Reporting - Overview of the SDK"},sidebar:"reporting",previous:{title:"Key Concepts",permalink:"/docs/reporting/key-concepts"},next:{title:"Run a report from JavaScript",permalink:"/docs/reporting/sdk-js-overview"}},p=[],d={toc:p};function f({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Geocortex Reporting REST API is responsible for generating all reports. In Geocortex viewer applications there are built-in features that handle the communication with the REST API. If you want to leverage Geocortex Reporting from another application you will need to handle the communication with the REST API yourself. You can interact directly with the REST API by issuing your own HTTP requests, or you can use a pre-built library that provides an easier to use interface that hides all the HTTP request details. The latter is much simpler and more reliable."),(0,o.kt)(c.Z,{mdxType:"UseCaseContainer"},(0,o.kt)(a.Z,{title:"Run a report from JavaScript",description:"Use a pre-built library to run a report from a JavaScript application",link:(0,i.Z)("docs/reporting/sdk-js-overview"),mdxType:"UseCaseCard"}),(0,o.kt)(a.Z,{title:"Run a report from Python",description:"Use a pre-built library to run a report from Python",link:(0,i.Z)("docs/reporting/sdk-py-overview"),mdxType:"UseCaseCard"})))}f.isMDXComponent=!0},6010:(e,t,r)=>{"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:()=>o})}}]);