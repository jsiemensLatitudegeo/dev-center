(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[1509,9362,5326],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(7294),o=n(3727),r=n(2263),i=n(3919),l=n(412);const s=(0,a.createContext)({collectLink:()=>{}});var c=n(4996),p=n(8780);const d=function({isNavLink:e,to:t,href:n,activeClassName:d,isActive:u,"data-noBrokenLinkCheck":m,autoAddBaseUrl:f=!0,...h}){var k;const{siteConfig:{trailingSlash:w}}=(0,r.Z)(),{withBaseUrl:g}=(0,c.C)(),v=(0,a.useContext)(s),b=t||n,y=(0,i.Z)(b),N=null==b?void 0:b.replace("pathname://","");let x=void 0!==N?(C=N,f&&(e=>e.startsWith("/"))(C)?g(C):C):void 0;var C;x&&y&&(x=(0,p.applyTrailingSlash)(x,w));const _=(0,a.useRef)(!1),M=e?o.OL:o.rU,O=l.Z.canUseIntersectionObserver;let D;(0,a.useEffect)((()=>(!O&&y&&null!=x&&window.docusaurus.prefetch(x),()=>{O&&D&&D.disconnect()})),[x,O,y]);const T=null!==(k=null==x?void 0:x.startsWith("#"))&&void 0!==k&&k,W=!x||!y||T;return x&&y&&!T&&!m&&v.collectLink(x),W?a.createElement("a",{href:x,...b&&!y&&{target:"_blank",rel:"noopener noreferrer"},...h}):a.createElement(M,{...h,onMouseEnter:()=>{_.current||null==x||(window.docusaurus.preload(x),_.current=!0)},innerRef:e=>{var t,n;O&&e&&y&&(t=e,n=()=>{null!=x&&window.docusaurus.prefetch(x)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),n())}))})),D.observe(t))},to:x||"",...e&&{isActive:u,activeClassName:d}})}},3919:(e,t,n)=>{"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>o})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>r,Z:()=>i});var a=n(2263),o=n(3919);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(7294);const o=function({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(7294),o=n(944),r=n(6010);const i="tabItem_1uMI",l="tabItemActive_2DSg";const s=37,c=39;const p=function(e){const{lazy:t,block:n,defaultValue:p,values:d,groupId:u,className:m}=e,{tabGroupChoices:f,setTabGroupChoices:h}=(0,o.Z)(),[k,w]=(0,a.useState)(p),g=a.Children.toArray(e.children),v=[];if(null!=u){const e=f[u];null!=e&&e!==k&&d.some((t=>t.value===e))&&w(e)}const b=e=>{const t=e.currentTarget,n=v.indexOf(t),a=d[n].value;w(a),null!=u&&(h(u,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:o}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:i}=window;return t>=0&&o<=i&&a<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},y=e=>{var t;let n;switch(e.keyCode){case c:{const t=v.indexOf(e.target)+1;n=v[t]||v[0];break}case s:{const t=v.indexOf(e.target)-1;n=v[t]||v[v.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},m)},d.map((({value:e,label:t})=>a.createElement("li",{role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":k===e}),key:e,ref:e=>v.push(e),onKeyDown:y,onFocus:b,onClick:b},t)))),t?(0,a.cloneElement)(g.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(7294),o=n(9443);const r=function(){const e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),a="/"===n?"/":t?(o=n).endsWith("/")?o:`${o}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var o;return e.replace(n,a)}},8780:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(o).default}});var r=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(r).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(6742),o=n(7294),r=n(6010);const i="root_2PFE";function l({title:e,description:t,link:n}){return o.createElement("div",{className:(0,r.Z)("card-demo",i)},o.createElement("div",{className:"card"},o.createElement("div",{className:"card__header"},o.createElement("h3",null,e)),o.createElement("div",{className:"card__body"},o.createElement("p",null,t)),o.createElement("div",{className:"card__footer"},o.createElement(a.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(7294);const o="root_NqT0";function r({children:e}){return a.createElement("div",{className:o},e)}},4340:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>i,metadata:()=>l,toc:()=>s,default:()=>p});var a=n(2122),o=(n(7294),n(3905));const r={},i=void 0,l={unversionedId:"snippets/workflow-url",id:"snippets/workflow-url",isDocsHomePage:!1,title:"workflow-url",description:"https://apps.geocortex.com/workflow/designer/#workflow=",source:"@site/docs/snippets/workflow-url.mdx",sourceDirName:"snippets",slug:"/snippets/workflow-url",permalink:"/docs/snippets/workflow-url",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/snippets/workflow-url.mdx",version:"current",frontMatter:{}},s=[],c={toc:s};function p({components:e,...t}){return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{class:"alert alert--secondary",role:"alert"},"https://apps.geocortex.com/workflow/designer/#workflow=",(0,o.kt)("b",null,"44010fc421dd4659b74fb921e09ba594")),(0,o.kt)("br",null))}p.isMDXComponent=!0},6473:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>i,metadata:()=>l,toc:()=>s,default:()=>p});var a=n(2122),o=(n(7294),n(3905));const r={},i=void 0,l={unversionedId:"web/snippets/prereqs-layout-config-editing",id:"web/snippets/prereqs-layout-config-editing",isDocsHomePage:!1,title:"prereqs-layout-config-editing",description:"-   Follow along by setting up the Geocortex Web SDK and editing the minimal layout and app config provided.",source:"@site/docs/web/snippets/prereqs-layout-config-editing.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/prereqs-layout-config-editing",permalink:"/docs/web/snippets/prereqs-layout-config-editing",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-layout-config-editing.mdx",version:"current",frontMatter:{}},s=[],c={toc:s};function p({components:e,...t}){return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Follow along by setting up the ",(0,o.kt)("a",{parentName:"li",href:"/docs/web/sdk-overview"},"Geocortex Web SDK")," and editing the minimal layout and app config provided."),(0,o.kt)("li",{parentName:"ul"},"Check out the ",(0,o.kt)("a",{parentName:"li",href:"/docs/web/sdk-deployment#upload-app-config-and-layout-to-an-app-optional"},"deployment instructions")," to learn about how to deploy layout and app config to an application.")))}p.isMDXComponent=!0},8012:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>d,metadata:()=>u,toc:()=>m,default:()=>h});var a=n(2122),o=(n(7294),n(3905)),r=n(4996),i=n(1395),l=n(8215),s=(n(7763),n(1962),n(6473)),c=n(4340);const p={title:"Change Default Map Click Behavior",description:"Geocortex Web - Learn how to configure Geocortex Web to change the default map click behavior"},d=void 0,u={unversionedId:"web/tutorial-change-default-map-click-behavior",id:"web/tutorial-change-default-map-click-behavior",isDocsHomePage:!1,title:"Change Default Map Click Behavior",description:"Geocortex Web - Learn how to configure Geocortex Web to change the default map click behavior",source:"@site/docs/web/tutorial-change-default-map-click-behavior.mdx",sourceDirName:"web",slug:"/web/tutorial-change-default-map-click-behavior",permalink:"/docs/web/tutorial-change-default-map-click-behavior",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/tutorial-change-default-map-click-behavior.mdx",version:"current",frontMatter:{title:"Change Default Map Click Behavior",description:"Geocortex Web - Learn how to configure Geocortex Web to change the default map click behavior"},sidebar:"web",previous:{title:"Display a Custom Form",permalink:"/docs/web/tutorial-display-custom-form"},next:{title:"Implement a Custom Activity",permalink:"/docs/web/tutorial-implement-custom-activity"}},m=[{value:"What you&#39;re Building",id:"what-youre-building",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Initial Set up",id:"initial-set-up",children:[]},{value:"Set up a Workflow to Run on Map Click",id:"set-up-a-workflow-to-run-on-map-click",children:[]},{value:"Extend the Workflow to Create a Graphic Buffering the Click Geometry",id:"extend-the-workflow-to-create-a-graphic-buffering-the-click-geometry",children:[]}],f={toc:m};function h({components:e,...t}){return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Geocortex Web comes with default behavior that runs on a map click. The default behavior will identify and display details for results in the nearby area. But what if you want to replace the functionality with your own behavior? This can be accomplished by leveraging ",(0,o.kt)("a",{parentName:"p",href:"https://apps.geocortex.com/workflow/designer/"},"Geocortex Workflow")," and editing the ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/configuration-app-config-getting-started"},"app config"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It's actually possible to configure the Map's ",(0,o.kt)("inlineCode",{parentName:"p"},"onClick")," event in ",(0,o.kt)("a",{parentName:"p",href:"https://apps.geocortex.com/webviewer/designer/"},"Geocortex Web Designer"),", by setting a workflow as the action for the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/component-settings.htm%3FTocPath%3DConfiguration%7CComponent%2520Settings%7C_____0"},"Maps click event"),". However, the point of this tutorial is to demonstrate the concept of configuring actions using the app config."))),(0,o.kt)("h2",{id:"what-youre-building"},"What you're Building"),(0,o.kt)("p",null,"We will modify the default map on click behavior to buffer the click geometry by a user provided distance and create a graphic which visualizes this buffer."),(0,o.kt)("img",{src:(0,r.Z)("img/web-custom-map-click-workflow-finished.png"),alt:"Map Click Workflow with Buffer Behavior"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)(s.default,{mdxType:"PrereqsLayoutConfigEditingSnippet"}),(0,o.kt)("h2",{id:"initial-set-up"},"Initial Set up"),(0,o.kt)("p",null,"Start the Geocortex Web SDK with the following layout and app JSON. You should see a simple application with one layer, Fire Hydrants, which has a related table Fire Hydrant Surveys."),(0,o.kt)("p",null,"Try clicking the map. It should return results for the point you clicked in the results list."),(0,o.kt)(i.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"config",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": [\n                "geometry.add-pixel-tolerance",\n                "tasks.identify",\n                "results.display-details"\n            ],\n            "webMap": "https://www.arcgis.com/home/item.html?id=0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "results",\n            "id": "results-list-config",\n            "onFeatureClick": ["results.display-details"]\n        }\n    ]\n}\n'))),(0,o.kt)(l.Z,{value:"layout",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'},'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1">\n  <split resizable="true">\n    <panel show-close-button="false" width="26">\n      <layer-list models="#map-primary"/>\n      <results-list active="false" config="results-list-config"/>\n      <feature-details active="true" />\n      <workflow active="false"/>\n    </panel>\n    <stack>\n      <map id="map-primary" config="default"/>\n    </stack>\n  </split>\n</layout>\n')))),(0,o.kt)("h2",{id:"set-up-a-workflow-to-run-on-map-click"},"Set up a Workflow to Run on Map Click"),(0,o.kt)("p",null,"The first thing we need to do is override the default map click behavior. We can do this by ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/tutorial-change-default-behavior"},"editing the default behavior")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"<map/>")," component in the app config. The default behavior for the map's ",(0,o.kt)("inlineCode",{parentName:"p"},"onClick")," event is a command chain that runs ",(0,o.kt)("inlineCode",{parentName:"p"},"geometry.add-pixel-tolerance")," and then ",(0,o.kt)("inlineCode",{parentName:"p"},"tasks.identify"),", and finally, ",(0,o.kt)("inlineCode",{parentName:"p"},"results.display-details"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "map-extension",\n            "id": "default",\n            // highlight-start\n            "onClick": [\n                "geometry.add-pixel-tolerance",\n                "tasks.identify",\n                "results.display-details"\n            ],\n            // highlight-end\n            ...\n        }\n        ...\n    ]\n}\n')),(0,o.kt)("p",null,"First, we are going to replace the command chain with a ",(0,o.kt)("inlineCode",{parentName:"p"},"workflow.run")," command that replicates this behavior."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open up ",(0,o.kt)("a",{parentName:"li",href:"https://apps.geocortex.com/workflow/designer/"},"Geocortex Workflow Designer")," and create and save a new workflow."),(0,o.kt)("li",{parentName:"ol"},'Add an "Alert" activity as a test.'),(0,o.kt)("li",{parentName:"ol"},"Copy the ID of the the workflow from the URL")),(0,o.kt)(c.default,{mdxType:"WorkflowUrlSnippet"}),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Add the workflow as an app item to your app config.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "workflow",\n            "id": "map-click-workflow",\n            "title": "Map Click Workflow",\n            "commandArgumentInput": "context",\n            "portalItem": "<your-workflow-id-here>"\n        },\n        ...\n    ]\n}\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Next, configure the ",(0,o.kt)("inlineCode",{parentName:"li"},"onClick")," property of the Map Component in the app config to run the workflow.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": "workflow.run-map-click-workflow",\n            ...\n        }\n    ]\n}\n')),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Run the app and test your workflow. You should see your alert pop up when you try to click on the map.")),(0,o.kt)("img",{src:(0,r.Z)("img/web-custom-map-click-workflow-alert.png"),alt:"Map Click Workflow with Alert"}),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Open up your workflow in the Geocortex Workflow Designer again. The default behavior we just overrode can be recreated with the use of ",(0,o.kt)("a",{parentName:"li",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-command.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____169"},"RunCommand")," and ",(0,o.kt)("a",{parentName:"li",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-operation.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____173"},"RunOperation")," activities. ",(0,o.kt)("inlineCode",{parentName:"li"},"geometry.add-pixel-tolerance")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"tasks.identify")," are operations, so they need RunOperation activities, and ",(0,o.kt)("inlineCode",{parentName:"li"},"results.display-details")," is a command so it needs a RunCommand Activity. Chain these three activities together, passing the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input%3FTocPath%3DConfiguration%7CAdd%2520a%2520Workflow%2520to%2520an%2520App%7C_____4"},"workflow context")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"geometry.add-pixel-tolerance")," and then passing the output of that operation to ",(0,o.kt)("inlineCode",{parentName:"li"},"tasks.identify"),", and finally passing the output of ",(0,o.kt)("inlineCode",{parentName:"li"},"tasks.identify")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"results.display-details"),".")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",null,"You can"," ",(0,o.kt)("a",{href:(0,r.Z)("workflows/web-map-click-behavior-recreated.json"),download:"map-click-behavior-recreated.json"},"download this workflow")," ","and then"," ",(0,o.kt)("a",{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"},"import it into the Geocortex Workflow Designer.")))),(0,o.kt)("img",{src:(0,r.Z)("img/web-custom-map-click-workflow-recreated.png"),alt:"Map Click Workflow with Original Operations"}),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Save the workflow and reload the application. Test the map click functionality and ensure it works as it originally did.")),(0,o.kt)("h2",{id:"extend-the-workflow-to-create-a-graphic-buffering-the-click-geometry"},"Extend the Workflow to Create a Graphic Buffering the Click Geometry"),(0,o.kt)("p",null,'At this point, you can choose to extend the map click behavior with Geocortex Workflow in whatever way is appropriate for your tutorial. You could execute a different "identify" for external results and add them to the set of results displayed, or zoom the map to a specific orientation and scale, or display a form for the user to fill out with relevant information to that location. For this example, a workflow was created which asks a user for a buffer distance, and creates a graphic showing the buffer around the click location.'),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",null,"You can"," ",(0,o.kt)("a",{href:(0,r.Z)("workflows/web-map-click-behavior-buffer.json"),download:"map-click-behavior-buffer.json"},"download this buffer geometry workflow")," ","and then"," ",(0,o.kt)("a",{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"},"import it into the Geocortex Workflow Designer.")))),(0,o.kt)("img",{src:(0,r.Z)("img/web-custom-map-click-workflow-finished.png"),alt:"Map Click Workflow with Buffer Behavior"}))}h.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o})}}]);