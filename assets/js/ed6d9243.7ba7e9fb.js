(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[2420,6025],{3905:(e,t,o)=>{"use strict";o.d(t,{Zo:()=>p,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(o),f=n,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return o?r.createElement(m,i(i({ref:t},p),{},{components:o})):r.createElement(m,i({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6742:(e,t,o)=>{"use strict";o.d(t,{Z:()=>u});var r=o(7294),n=o(3727),a=o(2263),i=o(3919),s=o(412);const c=(0,r.createContext)({collectLink:()=>{}});var l=o(4996),p=o(8780);const u=function({isNavLink:e,to:t,href:o,activeClassName:u,isActive:d,"data-noBrokenLinkCheck":f,autoAddBaseUrl:m=!0,...w}){var h;const{siteConfig:{trailingSlash:k}}=(0,a.Z)(),{withBaseUrl:v}=(0,l.C)(),g=(0,r.useContext)(c),b=t||o,y=(0,i.Z)(b),x=null==b?void 0:b.replace("pathname://","");let N=void 0!==x?(W=x,m&&(e=>e.startsWith("/"))(W)?v(W):W):void 0;var W;N&&y&&(N=(0,p.applyTrailingSlash)(N,k));const C=(0,r.useRef)(!1),G=e?n.OL:n.rU,O=s.Z.canUseIntersectionObserver;let T;(0,r.useEffect)((()=>(!O&&y&&null!=N&&window.docusaurus.prefetch(N),()=>{O&&T&&T.disconnect()})),[N,O,y]);const E=null!==(h=null==N?void 0:N.startsWith("#"))&&void 0!==h&&h,M=!N||!y||E;return N&&y&&!E&&!f&&g.collectLink(N),M?r.createElement("a",{href:N,...b&&!y&&{target:"_blank",rel:"noopener noreferrer"},...w}):r.createElement(G,{...w,onMouseEnter:()=>{C.current||null==N||(window.docusaurus.preload(N),C.current=!0)},innerRef:e=>{var t,o;O&&e&&y&&(t=e,o=()=>{null!=N&&window.docusaurus.prefetch(N)},T=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),o())}))})),T.observe(t))},to:N||"",...e&&{isActive:d,activeClassName:u}})}},3919:(e,t,o)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}o.d(t,{b:()=>r,Z:()=>n})},4996:(e,t,o)=>{"use strict";o.d(t,{C:()=>a,Z:()=>i});var r=o(2263),n=o(3919);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(o,r)=>function(e,t,o,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!o)return o;if(o.startsWith("#"))return o;if((0,n.b)(o))return o;if(r)return t+o;const i=o.startsWith(t)?o:t+o.replace(/^\//,"");return a?e+i:i}(t,e,o,r)}}function i(e,t={}){const{withBaseUrl:o}=a();return o(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[o]=e.split(/[#?]/),r="/"===o?"/":t?(n=o).endsWith("/")?n:`${n}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(o);var n;return e.replace(o,r)}},8780:function(e,t,o){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var n=o(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(n).default}});var a=o(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var r=o(6742),n=o(7294),a=o(6010);const i="root_2PFE";function s({title:e,description:t,link:o}){return n.createElement("div",{className:(0,a.Z)("card-demo",i)},n.createElement("div",{className:"card"},n.createElement("div",{className:"card__header"},n.createElement("h3",null,e)),n.createElement("div",{className:"card__body"},n.createElement("p",null,t)),n.createElement("div",{className:"card__footer"},n.createElement(r.Z,{className:"button button--secondary button--block",to:o},"Get Started"))))}},7763:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var r=o(7294);const n="root_NqT0";function a({children:e}){return r.createElement("div",{className:n},e)}},9394:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>u,toc:()=>d,default:()=>m});var r=o(2122),n=(o(7294),o(3905)),a=o(4996),i=o(1962),s=o(7763),c=o(2023);const l={title:"Overview",description:"Geocortex Workflow - Learn about extending Geocortex Workflow"},p=void 0,u={unversionedId:"workflow/overview",id:"workflow/overview",isDocsHomePage:!1,title:"Overview",description:"Geocortex Workflow - Learn about extending Geocortex Workflow",source:"@site/docs/workflow/overview.mdx",sourceDirName:"workflow",slug:"/workflow/overview",permalink:"/docs/workflow/overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/overview.mdx",version:"current",frontMatter:{title:"Overview",description:"Geocortex Workflow - Learn about extending Geocortex Workflow"},sidebar:"workflow",next:{title:"Key Concepts",permalink:"/docs/workflow/key-concepts"}},d=[{value:"Start with the Concepts",id:"start-with-the-concepts",children:[]},{value:"Explore the Tutorials",id:"explore-the-tutorials",children:[{value:"Web Applications",id:"web-applications",children:[]},{value:"Geocortex Mobile",id:"geocortex-mobile",children:[]},{value:"Geocortex Workflow Server",id:"geocortex-workflow-server",children:[]}]}],f={toc:d};function m({components:e,...t}){return(0,n.kt)("wrapper",(0,r.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.geocortex.com/products/geocortex-workflow/"},"Geocortex Workflow")," is a flexible tool for turning turning sophisticated business processes into a set of simple, guided end-user interactions. Geocortex Workflow is part of the ",(0,n.kt)("a",{parentName:"p",href:"https://www.geocortex.com/products/"},"Geocortex suite of products"),"."),(0,n.kt)("p",null,"Geocortex Workflow allows you to integrate geographic information and processing with other business tasks to create sophisticated functionality for your applications. For example, you could create a workflow that produces a tax parcel report for the user, or you could create a workflow that gets information about the geology and nearby features of a survey location specified by the user. The possibilities are endless\u2014from automated reporting, to complex spatial analytics, to specific and tailored search experiences, you can use Geocortex Workflow for almost any process that you want to streamline and automate for your users."),(0,n.kt)("p",null,"Geocortex Workflow was designed to be cross-platform, and it can run in ",(0,n.kt)("a",{parentName:"p",href:"https://www.geocortex.com/products/gxw/"},"Geocortex Web"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.geocortex.com/products/gxm/"},"Geocortex Mobile"),", ",(0,n.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/essentials/gvh/"},"Geocortex Viewer for HTML5"),", on ",(0,n.kt)("a",{parentName:"p",href:"https://www.esri.com/en-us/arcgis/products/web-appbuilder/overview"},"Web AppBuilder for ArcGIS"),", or on a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm%3FTocPath%3DServer%2520Workflows%7C_____0"},"Geocortex Workflow Server"),"."),(0,n.kt)(c.default,{mdxType:"DesignerCallout"}),(0,n.kt)("h2",{id:"start-with-the-concepts"},"Start with the Concepts"),(0,n.kt)("p",null,"Geocortex Workflow is built on the concept of a ",(0,n.kt)("a",{parentName:"p",href:"/docs/workflow/key-concepts#workflow"},(0,n.kt)("strong",{parentName:"a"},"workflow")),". A workflow is a collection of connected ",(0,n.kt)("strong",{parentName:"p"},"activities")," and ",(0,n.kt)("strong",{parentName:"p"},"forms"),", that can be created using Geocortex Workflow Designer."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/workflow/key-concepts#activities"},"Workflow ",(0,n.kt)("strong",{parentName:"a"},"activities"))," are the building blocks of a workflow. They allow you to perform actions in sequence that interact with the application and the end user, capturing your business logic in a reusable, easy to understand format.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/workflow/key-concepts#form-elements"},"Workflow ",(0,n.kt)("strong",{parentName:"a"},"forms"))," allow the creation of a customizable form that can be displayed to an end user. When combined with activities, you can create powerful experiences which can automate any number of manual processes in your applications."))),(0,n.kt)("p",null,"The Geocortex Workflow Runtime is the engine which runs these generic workflows on multiple platforms, including Geocortex Web and Geocortex Mobile."),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("a",{parentName:"p",href:"/docs/workflow/key-concepts"},"Explore the concepts")," to learn more about activities, forms, the Geocortex Workflow Designer, and the cross-platform nature of Geocortex Workflow."))),(0,n.kt)("h2",{id:"explore-the-tutorials"},"Explore the Tutorials"),(0,n.kt)("p",null,"Check out the various tutorials to get started with extending Geocortex Workflow for your target ",(0,n.kt)("a",{parentName:"p",href:"/docs/workflow/key-concepts#geocortex-workflow-hosts"},"workflow host"),"."),(0,n.kt)("h3",{id:"web-applications"},"Web Applications"),(0,n.kt)("p",null,"Learn how to extend Geocortex Workflow for web platforms like web based platforms like AppBuilder for ArcGIS or Geocortex Web."),(0,n.kt)(s.Z,{mdxType:"UseCaseContainer"},(0,n.kt)(i.Z,{title:"Implement a Custom Activity",description:"Implement a custom activity for Web Applications",link:(0,a.Z)("docs/workflow/tutorial-web-calculate-logarithm-activity"),mdxType:"UseCaseCard"}),(0,n.kt)(i.Z,{title:"Implement a Custom Form Element",description:"Implement a custom form for Web Applications",link:(0,a.Z)("docs/workflow/tutorial-web-implement-star-rating-form-element"),mdxType:"UseCaseCard"})),(0,n.kt)("h3",{id:"geocortex-mobile"},"Geocortex Mobile"),(0,n.kt)("p",null,"Learn how to extend Geocortex Workflow for the Geocortex Mobile platform."),(0,n.kt)(s.Z,{mdxType:"UseCaseContainer"},(0,n.kt)(i.Z,{title:"Implement a Custom Activity",description:"Implement a custom activity for Geocortex Mobile applications",link:(0,a.Z)("docs/workflow/tutorial-mobile-calculate-logarithm-activity"),mdxType:"UseCaseCard"}),(0,n.kt)(i.Z,{title:"Implement a Custom Form Element",description:"Implement a custom form for Geocortex Mobile applications",link:(0,a.Z)("docs/workflow/tutorial-mobile-activity-indicator-form-element"),mdxType:"UseCaseCard"})),(0,n.kt)("h3",{id:"geocortex-workflow-server"},"Geocortex Workflow Server"),(0,n.kt)("p",null,"Learn how to extend Geocortex Workflow for the Geocortex Workflow Server platform."),(0,n.kt)(s.Z,{mdxType:"UseCaseContainer"},(0,n.kt)(i.Z,{title:"Implement a Custom Activity",description:"Implement a custom activity for Geocortex Workflow Server",link:(0,a.Z)("docs/workflow/tutorial-server-calculate-logarithm-activity"),mdxType:"UseCaseCard"}),(0,n.kt)(i.Z,{title:"Reference a Third Party Library",description:"Reference a third party library in custom Geocortex Workflow Server activities.",link:(0,a.Z)("docs/workflow/sdk-server-reference-third-party-library"),mdxType:"UseCaseCard"})))}m.isMDXComponent=!0},2023:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>s,toc:()=>c,default:()=>p});var r=o(2122),n=(o(7294),o(3905));const a={},i=void 0,s={unversionedId:"workflow/snippets/designer-callout",id:"workflow/snippets/designer-callout",isDocsHomePage:!1,title:"designer-callout",description:"The Geocortex Workflow Designer has a wide range of built-in activities you can use to satisfy your business case. You can take the behavior of workflow even further by running the commands and operations available in Geocortex Web and Geocortex Mobile.",source:"@site/docs/workflow/snippets/designer-callout.mdx",sourceDirName:"workflow/snippets",slug:"/workflow/snippets/designer-callout",permalink:"/docs/workflow/snippets/designer-callout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/designer-callout.mdx",version:"current",frontMatter:{}},c=[],l={toc:c};function p({components:e,...t}){return(0,n.kt)("wrapper",(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Have you explored the Geocortex Workflow Designer?")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"The ",(0,n.kt)("a",{parentName:"p",href:"https://apps.geocortex.com/workflow/designer/"},"Geocortex Workflow Designer")," has a wide range of built-in activities you can use to satisfy your business case. You can take the behavior of workflow even further by running the commands and operations available in ",(0,n.kt)("a",{parentName:"p",href:"/docs/web/configuration-commands-operations"},"Geocortex Web")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-commands-operations"},"Geocortex Mobile"),"."))))}p.isMDXComponent=!0},6010:(e,t,o)=>{"use strict";function r(e){var t,o,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=r(e[t]))&&(n&&(n+=" "),n+=o);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}o.d(t,{Z:()=>n})}}]);