(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[2682,5326],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(7294),i=n(3727),r=n(2263),o=n(3919),s=n(412);const l=(0,a.createContext)({collectLink:()=>{}});var c=n(4996),u=n(8780);const p=function({isNavLink:e,to:t,href:n,activeClassName:p,isActive:d,"data-noBrokenLinkCheck":m,autoAddBaseUrl:h=!0,...f}){var g;const{siteConfig:{trailingSlash:b}}=(0,r.Z)(),{withBaseUrl:v}=(0,c.C)(),y=(0,a.useContext)(l),w=t||n,k=(0,o.Z)(w),C=null==w?void 0:w.replace("pathname://","");let x=void 0!==C?(N=C,h&&(e=>e.startsWith("/"))(N)?v(N):N):void 0;var N;x&&k&&(x=(0,u.applyTrailingSlash)(x,b));const T=(0,a.useRef)(!1),O=e?i.OL:i.rU,j=s.Z.canUseIntersectionObserver;let E;(0,a.useEffect)((()=>(!j&&k&&null!=x&&window.docusaurus.prefetch(x),()=>{j&&E&&E.disconnect()})),[x,j,k]);const Z=null!==(g=null==x?void 0:x.startsWith("#"))&&void 0!==g&&g,_=!x||!k||Z;return x&&k&&!Z&&!m&&y.collectLink(x),_?a.createElement("a",{href:x,...w&&!k&&{target:"_blank",rel:"noopener noreferrer"},...f}):a.createElement(O,{...f,onMouseEnter:()=>{T.current||null==x||(window.docusaurus.preload(x),T.current=!0)},innerRef:e=>{var t,n;j&&e&&k&&(t=e,n=()=>{null!=x&&window.docusaurus.prefetch(x)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),n())}))})),E.observe(t))},to:x||"",...e&&{isActive:d,activeClassName:p}})}},3919:(e,t,n)=>{"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>i})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>r,Z:()=>o});var a=n(2263),i=n(3919);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(a)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+o:o}(t,e,n,a)}}function o(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(7294);const i=function({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(7294),i=n(944),r=n(6010);const o="tabItem_1uMI",s="tabItemActive_2DSg";const l=37,c=39;const u=function(e){const{lazy:t,block:n,defaultValue:u,values:p,groupId:d,className:m}=e,{tabGroupChoices:h,setTabGroupChoices:f}=(0,i.Z)(),[g,b]=(0,a.useState)(u),v=a.Children.toArray(e.children),y=[];if(null!=d){const e=h[d];null!=e&&e!==g&&p.some((t=>t.value===e))&&b(e)}const w=e=>{const t=e.currentTarget,n=y.indexOf(t),a=p[n].value;b(a),null!=d&&(f(d,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:i}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:o}=window;return t>=0&&i<=o&&a<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},k=e=>{var t;let n;switch(e.keyCode){case c:{const t=y.indexOf(e.target)+1;n=y[t]||y[0];break}case l:{const t=y.indexOf(e.target)-1;n=y[t]||y[y.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},m)},p.map((({value:e,label:t})=>a.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":g===e}),key:e,ref:e=>y.push(e),onKeyDown:k,onFocus:w,onClick:w},t)))),t?(0,a.cloneElement)(v.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(7294),i=n(9443);const r=function(){const e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),a="/"===n?"/":t?(i=n).endsWith("/")?i:`${i}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var i;return e.replace(n,a)}},8780:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(i).default}});var r=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(r).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(6742),i=n(7294),r=n(6010);const o="root_2PFE";function s({title:e,description:t,link:n}){return i.createElement("div",{className:(0,r.Z)("card-demo",o)},i.createElement("div",{className:"card"},i.createElement("div",{className:"card__header"},i.createElement("h3",null,e)),i.createElement("div",{className:"card__body"},i.createElement("p",null,t)),i.createElement("div",{className:"card__footer"},i.createElement(a.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(7294);const i="root_NqT0";function r({children:e}){return a.createElement("div",{className:i},e)}},6473:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>o,metadata:()=>s,toc:()=>l,default:()=>u});var a=n(2122),i=(n(7294),n(3905));const r={},o=void 0,s={unversionedId:"web/snippets/prereqs-layout-config-editing",id:"web/snippets/prereqs-layout-config-editing",isDocsHomePage:!1,title:"prereqs-layout-config-editing",description:"-   Follow along by setting up the Geocortex Web SDK and editing the minimal layout and app config provided.",source:"@site/docs/web/snippets/prereqs-layout-config-editing.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/prereqs-layout-config-editing",permalink:"/docs/web/snippets/prereqs-layout-config-editing",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-layout-config-editing.mdx",version:"current",frontMatter:{}},l=[],c={toc:l};function u({components:e,...t}){return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Follow along by setting up the ",(0,i.kt)("a",{parentName:"li",href:"/docs/web/sdk-overview"},"Geocortex Web SDK")," and editing the minimal layout and app config provided."),(0,i.kt)("li",{parentName:"ul"},"Check out the ",(0,i.kt)("a",{parentName:"li",href:"/docs/web/sdk-deployment#upload-app-config-and-layout-to-an-app-optional"},"deployment instructions")," to learn about how to deploy layout and app config to an application.")))}u.isMDXComponent=!0},982:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>u,metadata:()=>p,toc:()=>d,default:()=>h});var a=n(2122),i=(n(7294),n(3905)),r=n(1395),o=n(8215),s=n(4996),l=(n(7763),n(1962),n(6473));const c={title:"Customize the Theme",description:"Geocortex Web - Customize the application theme using app config"},u=void 0,p={unversionedId:"web/tutorial-customize-application-theme",id:"web/tutorial-customize-application-theme",isDocsHomePage:!1,title:"Customize the Theme",description:"Geocortex Web - Customize the application theme using app config",source:"@site/docs/web/tutorial-customize-application-theme.mdx",sourceDirName:"web",slug:"/web/tutorial-customize-application-theme",permalink:"/docs/web/tutorial-customize-application-theme",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/tutorial-customize-application-theme.mdx",version:"current",frontMatter:{title:"Customize the Theme",description:"Geocortex Web - Customize the application theme using app config"},sidebar:"web",previous:{title:"Change the Default Behavior of Components",permalink:"/docs/web/tutorial-change-default-behavior"},next:{title:"Run a Workflow from App Config",permalink:"/docs/web/tutorial-run-workflow-app-config"}},d=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create a Basic App",id:"create-a-basic-app",children:[]},{value:"Add Configuration for the Branding Service",id:"add-configuration-for-the-branding-service",children:[]},{value:"Add a New Theme",id:"add-a-new-theme",children:[]},{value:"Customize the Theme",id:"customize-the-theme",children:[]}],m={toc:d};function h({components:e,...t}){return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Geocortex Web's appearance is built around two concepts: theme and ",(0,i.kt)("a",{parentName:"p",href:"/docs/web/configuration-layout-getting-started"},"layout"),". The theme controls the color scheme of the app, while the layout controls the organization of content."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The theme can be partially configured by using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/component-settings.htm#branding-settings%3FTocPath%3DConfiguration%7CComponent%2520Settings%7C_____4"},"Geocortex Web Designer"),"."))),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)(l.default,{mdxType:"PrereqsLayoutConfigSnippet"}),(0,i.kt)("h2",{id:"create-a-basic-app"},"Create a Basic App"),(0,i.kt)("p",null,"Let's create a basic application with layout and config that we can theme."),(0,i.kt)(r.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"config",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": [\n                "geometry.add-pixel-tolerance",\n                "tasks.identify",\n                "results.display-details"\n            ],\n            "webMap": "https://www.arcgis.com/home/item.html?id=0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "results",\n            "id": "results-list-config",\n            "onFeatureClick": ["results.display-details"]\n        }\n    ]\n}\n'))),(0,i.kt)(o.Z,{value:"layout",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'},'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1">\n  <split resizable="true">\n    <panel show-close-button="false" width="26">\n      <layer-list models="#map-primary"/>\n      <results-list active="false" config="results-list-config"/>\n      <feature-details active="true" />\n    </panel>\n    <stack>\n      <map id="map-primary" config="default"/>\n    </stack>\n  </split>\n</layout>\n')))),(0,i.kt)("h2",{id:"add-configuration-for-the-branding-service"},"Add Configuration for the Branding Service"),(0,i.kt)("p",null,"Next, we are going to add an app item to configure the Branding Service, which ",(0,i.kt)("a",{parentName:"p",href:"/docs/web/configuration-theme"},"manages application theming"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": [\n                "geometry.add-pixel-tolerance",\n                "tasks.identify",\n                "results.display-details"\n            ],\n            "webMap": "https://www.arcgis.com/home/item.html?id=0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "results",\n            "id": "results-list-config",\n            "onFeatureClick": ["results.display-details"]\n        },\n        // highlight-start\n        {\n            "$type": "branding",\n            "id": "branding"\n        }\n        // highlight-end\n    ]\n}\n')),(0,i.kt)("h2",{id:"add-a-new-theme"},"Add a New Theme"),(0,i.kt)("p",null,"The branding service can be configured with a list of themes. Each of these themes can be based on one of the two existing themes, ",(0,i.kt)("inlineCode",{parentName:"p"},"light")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"dark"),". Let's configure our branding service with a new ",(0,i.kt)("inlineCode",{parentName:"p"},"dark")," theme with an accent color ",(0,i.kt)("inlineCode",{parentName:"p"},"purple"),"."),(0,i.kt)(r.Z,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"config",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": [\n                "geometry.add-pixel-tolerance",\n                "tasks.identify",\n                "results.display-details"\n            ],\n            "webMap": "https://www.arcgis.com/home/item.html?id=0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "results",\n            "id": "results-list-config",\n            "onFeatureClick": ["results.display-details"]\n        },\n        {\n            "$type": "branding",\n            "id": "branding",\n            // highlight-start\n            "activeTheme": "custom-theme",\n            "themes": [\n                {\n                    "id": "custom-theme",\n                    "accentColor": "purple",\n                    "template": "dark"\n                }\n            ]\n            // highlight-end\n        }\n    ]\n}\n'))),(0,i.kt)(o.Z,{value:"ui",mdxType:"TabItem"},(0,i.kt)("img",{src:(0,s.Z)("img/web-customize-theme-purple.png")}))),(0,i.kt)("h2",{id:"customize-the-theme"},"Customize the Theme"),(0,i.kt)("p",null,"You can customize the theme by changing any of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/web/configuration-theme#theme-color-reference"},"built-in color keys")," used for themes."),(0,i.kt)(r.Z,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"config",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": [\n                "geometry.add-pixel-tolerance",\n                "tasks.identify",\n                "results.display-details"\n            ],\n            "webMap": "https://www.arcgis.com/home/item.html?id=0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "results",\n            "id": "results-list-config",\n            "onFeatureClick": ["results.display-details"]\n        },\n        {\n            "$type": "branding",\n            "id": "branding",\n            "activeTheme": "custom-theme",\n            "themes": [\n                {\n                    "id": "custom-theme",\n                    "accentColor": "purple",\n                    "template": "dark",\n                    // highlight-start\n                    "colors": {\n                        "secondaryBackground": [249, 77, 0, 255]\n                    }\n                    // highlight-end\n                }\n            ]\n        }\n    ]\n}\n'))),(0,i.kt)(o.Z,{value:"ui",mdxType:"TabItem"},(0,i.kt)("img",{src:(0,s.Z)("img/web-customize-theme-secondary-background.png")}))))}h.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:()=>i})}}]);