(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[4118],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),v=l(n),p=o,f=v["".concat(c,".").concat(p)]||v[p]||d[p]||s;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=v;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(7294),o=n(3727),s=n(2263),i=n(3919),a=n(412);const c=(0,r.createContext)({collectLink:()=>{}});var l=n(4996),u=n(8780);const d=function({isNavLink:e,to:t,href:n,activeClassName:d,isActive:v,"data-noBrokenLinkCheck":p,autoAddBaseUrl:f=!0,...m}){var b;const{siteConfig:{trailingSlash:h}}=(0,s.Z)(),{withBaseUrl:w}=(0,l.C)(),g=(0,r.useContext)(c),y=t||n,k=(0,i.Z)(y),O=null==y?void 0:y.replace("pathname://","");let E=void 0!==O?(x=O,f&&(e=>e.startsWith("/"))(x)?w(x):x):void 0;var x;E&&k&&(E=(0,u.applyTrailingSlash)(E,h));const C=(0,r.useRef)(!1),N=e?o.OL:o.rU,_=a.Z.canUseIntersectionObserver;let j;(0,r.useEffect)((()=>(!_&&k&&null!=E&&window.docusaurus.prefetch(E),()=>{_&&j&&j.disconnect()})),[E,_,k]);const P=null!==(b=null==E?void 0:E.startsWith("#"))&&void 0!==b&&b,T=!E||!k||P;return E&&k&&!P&&!p&&g.collectLink(E),T?r.createElement("a",{href:E,...y&&!k&&{target:"_blank",rel:"noopener noreferrer"},...m}):r.createElement(N,{...m,onMouseEnter:()=>{C.current||null==E||(window.docusaurus.preload(E),C.current=!0)},innerRef:e=>{var t,n;_&&e&&k&&(t=e,n=()=>{null!=E&&window.docusaurus.prefetch(E)},j=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(j.unobserve(t),j.disconnect(),n())}))})),j.observe(t))},to:E||"",...e&&{isActive:v,activeClassName:d}})}},3919:(e,t,n)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>o})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>s,Z:()=>i});var r=n(2263),o=n(3919);function s(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:s=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=s();return n(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),r="/"===n?"/":t?(o=n).endsWith("/")?o:`${o}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var o;return e.replace(n,r)}},8780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var s=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(s).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(6742),o=n(7294),s=n(6010);const i="root_2PFE";function a({title:e,description:t,link:n}){return o.createElement("div",{className:(0,s.Z)("card-demo",i)},o.createElement("div",{className:"card"},o.createElement("div",{className:"card__header"},o.createElement("h3",null,e)),o.createElement("div",{className:"card__body"},o.createElement("p",null,t)),o.createElement("div",{className:"card__footer"},o.createElement(r.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(7294);const o="root_NqT0";function s({children:e}){return r.createElement("div",{className:o},e)}},1912:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>u,toc:()=>d,default:()=>p});var r=n(2122),o=(n(7294),n(3905)),s=n(4996),i=n(1962),a=n(7763);const c={title:"Events Overview",sidebar_label:"Overview",description:"Geocortex Web - Overview of events"},l=void 0,u={unversionedId:"web/sdk-events-overview",id:"web/sdk-events-overview",isDocsHomePage:!1,title:"Events Overview",description:"Geocortex Web - Overview of events",source:"@site/docs/web/sdk-events-overview.mdx",sourceDirName:"web",slug:"/web/sdk-events-overview",permalink:"/docs/web/sdk-events-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-events-overview.mdx",version:"current",frontMatter:{title:"Events Overview",sidebar_label:"Overview",description:"Geocortex Web - Overview of events"},sidebar:"web",previous:{title:"Service Injection",permalink:"/docs/web/sdk-services-injecting-services"},next:{title:"Events Reference",permalink:"/docs/web/sdk-events-reference"}},d=[{value:"Next Steps",id:"next-steps",children:[]}],v={toc:d};function p({components:e,...t}){return(0,o.kt)("wrapper",(0,r.Z)({},v,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Events")," are distinct, discrete messaging about a change or update that occurs in the viewer. They can be published or subscribed to by any ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-overview"},"component")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/sdk-services-overview"},"service"),", and can be used to initiate behaviors, communicate data changes, and more. Events themselves do not execute behavior, but merely provide messaging so subscribers can act on changes."),(0,o.kt)("p",null,"Events are internal to Geocortex Web, so they can only be consumed by custom code. Custom components can access events through ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/sdk-events-reference#component-models-1"},"their models")," or through the ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-ui-context"},"UIContext"),". Custom services can publish or subscribe to built-in or custom events ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/sdk-events-reference#services-1"},"through the MessageBus"),"."),(0,o.kt)("p",null,"The full list of existing events available in Geocortex Web can be ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/api-commands-operations-events#events"},"found in the API documentation"),"."),(0,o.kt)("p",null,"Events in Geocortex Web are grouped by categories, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ui")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"viewer"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ui.activated\ncoordinates.coordinate-systems-changed\nviewer.layout-changed\nauth.sign-in-failed\n")),(0,o.kt)("p",null,"Events can publish custom arguments with information about the change they are communicating."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)(a.Z,{mdxType:"UseCaseContainer"},(0,o.kt)(i.Z,{title:"Subscribing to Existing Events",description:"Learn how to subscribe to an existing event",link:(0,s.Z)("docs/web/tutorial-events-subscribe"),mdxType:"UseCaseCard"}),(0,o.kt)(i.Z,{title:"Events API",description:"Check out the full list of Events available in Geocortex Web",link:(0,s.Z)("docs/web/api-commands-operations-events#events"),mdxType:"UseCaseCard"}),(0,o.kt)(i.Z,{title:"Implementing Custom Events",description:"Learn how to implement a custom Event.",link:(0,s.Z)("docs/web/sdk-events-reference#creating-custom-events"),mdxType:"UseCaseCard"})))}p.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o})}}]);