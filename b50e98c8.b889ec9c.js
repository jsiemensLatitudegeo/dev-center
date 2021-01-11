(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return b}));var o=n(3),r=(n(0),n(243)),a=n(244),i=n(252),c=n(249),s=n(248),l=n(253);const u={title:"Components Overview",sidebar_label:"Overview",description:"Geocortex Web - Overview of components"},p={unversionedId:"web/sdk-components-overview",id:"web/sdk-components-overview",isDocsHomePage:!1,title:"Components Overview",description:"Geocortex Web - Overview of components",source:"@site/docs/web/sdk-components-overview.mdx",slug:"/web/sdk-components-overview",permalink:"/docs/web/sdk-components-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-components-overview.mdx",version:"current",sidebar_label:"Overview",sidebar:"web",previous:{title:"Deployment",permalink:"/docs/web/sdk-deployment"},next:{title:"Create a Component",permalink:"/docs/web/sdk-components-create"}},d=[{value:"Component Models and Configuration",id:"component-models-and-configuration",children:[]}],m={toc:d};function b({components:e,...t}){return Object(r.b)("wrapper",Object(o.a)({},m,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In Geocortex Web, components are entities which implement UI/UX experiences and the associated logic. An example of a component is an I Want to Menu (IWTM). IWTMs participate in layout, implement custom behavior (display a list when clicked), and participate in the app config (the menu items are configurable)."),Object(r.b)("p",null,"Components are only ",Object(r.b)("strong",{parentName:"p"},"created")," if they participate in the layout - if no component definition exists in the layout, none will be created. Multiple instances of the same component will be created if specified in the layout."),Object(r.b)(i.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"layout",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1">\n  <split resizable="true">\n      <map>\n        <iwtm config="iwtm-1" slot="top-right"/>\n      </map>\n      <map>\n        <iwtm config="iwtm-2" slot="top-right"/>\n      </map>\n  </split>\n</layout>\n'))),Object(r.b)(l.a,{value:"config",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "menu",\n            "id": "iwtm-1",\n            "items": [\n                {\n                    "id": "return-to-initial-view",\n                    "iconId": "zoom-initial",\n                    "title": "Return to Initial View",\n                    "action": "map.zoom-to-initial-viewpoint",\n                    "$type": "menu-item"\n                }\n            ]\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm-2",\n            "items": [\n                {\n                    "id": "display-alert",\n                    "iconId": "pop-out",\n                    "title": "Display Alert",\n                    "$type": "menu-item",\n                    "action": {\n                        "name": "ui.alert",\n                        "arguments": {\n                            "title": "Alert!",\n                            "message": "You have been alerted."\n                        }\n                    }\n                }\n            ]\n        }\n    ]\n}\n'))),Object(r.b)(l.a,{value:"ui",mdxType:"TabItem"},Object(r.b)("img",{src:Object(a.a)("img/web-sdk-components-simple.png")}))),Object(r.b)("h2",{id:"component-models-and-configuration"},"Component Models and Configuration"),Object(r.b)("p",null,"Every component has an associated model. This model functions as the underlying data source for the component, as well as providing a way to interface with the larger application, through ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/configuration-commands-operations"}),"commands, operations")," and shared services. This allows the component to solely worry about presentation concerns, and delegate data and application concerns to the underlying model. Models are also responsible for loading and consuming the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-getting-started"}),"app config")," for the component."),Object(r.b)(s.a,{mdxType:"UseCaseContainer"},Object(r.b)(c.a,{title:"Create a Component",description:"Learn how to create a basic component",link:Object(a.a)("docs/web/sdk-components-create"),mdxType:"UseCaseCard"}),Object(r.b)(c.a,{title:"Check out the Component Reference",description:"Take a deep dive into components in the Geocortex Web SDK",link:Object(a.a)("docs/web/sdk-components-reference"),mdxType:"UseCaseCard"})))}b.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},244:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var o=n(21),r=n(245);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(o.default)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+i:i}(t,e,n,o)}}function i(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},245:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}))},246:function(e,t,n){"use strict";function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}},247:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(11),i=n(245),c=n(9);const s=Object(o.createContext)({collectLink:()=>{}});var l=n(244),u=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:d,activeClassName:m,isActive:b,"data-noBrokenLinkCheck":f,autoAddBaseUrl:v=!0}=e,y=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:O}=Object(l.b)(),h=Object(o.useContext)(s),w=p||d,g=Object(i.a)(w),j=null==w?void 0:w.replace("pathname://",""),k=void 0!==j?(x=j,v&&(e=>e.startsWith("/"))(x)?O(x):x):void 0;var x;const C=Object(o.useRef)(!1),E=n?a.e:a.c,N=c.a.canUseIntersectionObserver;let T;Object(o.useEffect)((()=>(!N&&g&&window.docusaurus.prefetch(k),()=>{N&&T&&T.disconnect()})),[k,N,g]);const I=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,P=!k||!g||I;return k&&g&&!I&&!f&&h.collectLink(k),P?r.a.createElement("a",Object.assign({href:k},w&&!g&&{target:"_blank",rel:"noopener noreferrer"},y)):r.a.createElement(E,Object.assign({},y,{onMouseEnter:()=>{C.current||(window.docusaurus.preload(k),C.current=!0)},innerRef:e=>{var t,n;N&&e&&g&&(t=e,n=()=>{window.docusaurus.prefetch(k)},T=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),n())}))})),T.observe(t))},to:k||""},n&&{isActive:b,activeClassName:m}))}},248:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(0),r=n.n(o),a=n(54),i=n.n(a);function c({children:e}){return r.a.createElement("div",{className:i.a.root},e)}},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(247),r=n(0),a=n.n(r),i=n(246),c=n(55),s=n.n(c);function l({title:e,description:t,link:n}){return a.a.createElement("div",{className:Object(i.a)("card-demo",s.a.root)},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card__header"},a.a.createElement("h3",null,e)),a.a.createElement("div",{className:"card__body"},a.a.createElement("p",null,t)),a.a.createElement("div",{className:"card__footer"},a.a.createElement(o.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}},250:function(e,t,n){"use strict";var o=n(0),r=n(251);t.a=function(){const e=Object(o.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},251:function(e,t,n){"use strict";var o=n(0);const r=Object(o.createContext)(void 0);t.a=r},252:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(250),i=n(246),c=n(56),s=n.n(c);const l=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:p,groupId:d,className:m}=e,{tabGroupChoices:b,setTabGroupChoices:f}=Object(a.a)(),[v,y]=Object(o.useState)(c),O=o.Children.toArray(e.children);if(null!=d){const e=b[d];null!=e&&e!==v&&p.some((t=>t.value===e))&&y(e)}const h=e=>{y(e),null!=d&&f(d,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},p.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>w.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(w,e.target,e)},onFocus:()=>h(e),onClick:()=>{h(e)}},t)))),t?Object(o.cloneElement)(O.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},253:function(e,t,n){"use strict";var o=n(3),r=n(0),a=n.n(r);t.a=function({children:e,hidden:t,className:n}){return a.a.createElement("div",Object(o.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);