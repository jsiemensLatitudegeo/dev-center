(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[8919],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6159:(e,t,n)=>{"use strict";n.d(t,{N:()=>m,Z:()=>d});var r=n(2122),o=n(7294),i=n(6010),a=n(4973),c=n(9732);const s="enhancedAnchor_2LWZ",l="h1Heading_27L5",m=function({...e}){return o.createElement("header",null,o.createElement("h1",(0,r.Z)({},e,{id:void 0,className:l}),e.children))},d=e=>{return"h1"===e?m:(t=e,function({id:e,...n}){const{navbar:{hideOnScroll:r}}=(0,c.LU)();return e?o.createElement(t,n,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",{[s]:!r}),id:e}),n.children,o.createElement("a",{className:"hash-link",href:`#${e}`,title:(0,a.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(t,n)});var t}},1383:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(7294),o=n(2263);const i=function({children:e,fallback:t}){const{isClient:n}=(0,o.Z)();return n&&null!=e?r.createElement(r.Fragment,null,e()):t||null};var a=n(6159);function c(e){return e.replace("#/definitions/","")}function s(e){return`definition-${c(e)}`}function l(e,t){const n=c(e);if(!n.startsWith("esri.rest-api"))return t.definitions[n]}function m(e){const{isArray:t,name:n,schema:o}=e,i=c(n),a=l(n,o);return a&&"object"===a.type?r.createElement("code",null,r.createElement("a",{href:`#${s(n)}`},i,t&&"[]")):r.createElement("code",null,i,t&&"[]")}function d(e){const{schema:t}=e;let n=e.definition;if("string"==typeof n){const e=l(name,t);console.warn("Couldn't find definition:",n),n=e}if(!n)return r.createElement("div",{style:{fontStyle:"italic"}},"There are no arguments");if(n.$ref){const e=l(n.$ref,t);return e&&"object"!==e.type?r.createElement(d,{definition:e,schema:t}):r.createElement(m,{name:n.$ref,schema:t})}if(n.type){if("string"===n.type&&n.enum){const e=n.enum.map((e=>`"${e}"`)).join(" | ");return r.createElement("code",null,e)}if("array"===n.type&&n.items){const e=e=>r.createElement(r.Fragment,null,e.map(((e,n)=>r.createElement("div",{key:`${e.$ref}-${n}`||n},r.createElement(d,{definition:e,schema:t}),"[]"))));if(Array.isArray(n.items))return e(n.items);if(Array.isArray(n.items.anyOf))return e(n.items.anyOf);if(n.items.$ref){const e=n.items.$ref;return r.createElement(m,{isArray:!0,name:e,schema:t})}return r.createElement("code",null,n.items.type,"[]")}if("object"===n.type)return r.createElement("code",null,"unknown");if(Array.isArray(n.type)){const e=n.type.filter((e=>"null"!==e));return 0===e.length?null:1===e.length?r.createElement("code",null,e[0]):r.createElement(r.Fragment,null,e.map((e=>r.createElement("div",{key:e},r.createElement("code",null,e)))))}return r.createElement("code",null,n.type)}if(n.anyOf){const e=n.anyOf.filter((e=>!("null"===e.type)));return r.createElement(r.Fragment,null,e.length>1&&r.createElement("div",null,"Any of:"),e.map(((e,n)=>r.createElement("div",{key:`${e.$ref}-${n}`||n},r.createElement(d,{definition:e,schema:t})))))}return r.createElement("code",null,"unknown")}const p=(0,a.Z)("h3");function u(e){return!!e.$ref}function f(e){var t,n;return(null==e||null==(t=e.type)?void 0:t.includes("null"))||(null==e||null==(n=e.anyOf)?void 0:n.some(f))}function v(e){var t,n;const{schema:o,type:i}=e,a=o.definitions;let s;s="command"===i?"viewer-spec.SingleCommand":"operation"===i?"viewer-spec.SingleOperation":"viewer-spec.Event";const l=null==(t=a[s])||null==(n=t.anyOf)?void 0:n.filter(u).map((e=>c(e.$ref)));return l?r.createElement(r.Fragment,null,l.map((e=>{const t=a[e],n=function(e,t){return`${t}-${e}`}(e,i),c=a[`${e}:input`],s=a[`${e}:output`];return t?r.createElement("div",{key:e,className:"margin-bottom--lg"},r.createElement(p,{id:n},e),t.description&&r.createElement("div",{className:"margin-bottom--md"},t.description),r.createElement("div",{className:"margin-bottom--md"},r.createElement("div",null,"Argument "+(!0===f(c)?"(optional)":"")),r.createElement("div",{className:"margin-left--sm"},r.createElement(d,{definition:c,schema:o}))),"operation"===i&&s&&r.createElement(r.Fragment,null,r.createElement("div",null,"Result"),r.createElement("div",{className:"margin-left--sm"},r.createElement(d,{definition:s,schema:o})))):null}))):null}const h=(0,a.Z)("h3");function g(e){const{definitionName:t,schema:n}=e,o=c(t),i=l(t,n);if(!i)return null;if("object"!==i.type)return console.warn("Tried to render definition for non-object type",o),null;const a=s(o);return r.createElement("div",{className:"margin-bottom--lg"},r.createElement(h,{id:a},o),i.description&&r.createElement("div",{className:"margin-bottom--md"},i.description),r.createElement("div",null,"Properties"),(!i.properties||0===Object.keys(i.properties).length)&&r.createElement("em",null,"This object doesn't currently contain any properties."),i.properties&&r.createElement("div",{className:"margin-left--sm"},Object.entries(i.properties).map((([e,t])=>{var o;return r.createElement("div",{key:e,className:"margin-bottom--md"},r.createElement("div",{className:"margin-bottom--sm"},r.createElement("code",null,e),(null==(o=i.required)?void 0:o.includes(e))&&r.createElement("span",{className:"badge badge--secondary"},"Required")),r.createElement("div",{className:"margin-left--sm"},r.createElement(d,{definition:t,schema:n}),t.description&&r.createElement("div",{className:"margin-top--sm"},t.description)))}))))}function y(e){const{schema:t}=e,n=Object.entries(t.definitions).reduce(((e,[t,n])=>"object"===n.type?{...e,[t]:n}:e),{});return r.createElement("div",null,Object.keys(n).sort(((e,t)=>e.localeCompare(t))).map((e=>r.createElement(g,{key:e,definitionName:e,schema:t}))))}function b(e){const{schema:t,type:n}=e;return r.createElement(r.Fragment,null,("argument"===n||"config"===n)&&r.createElement(y,{schema:t}),"command"===n&&r.createElement(v,{schema:t,type:"command"}),"event"===n&&r.createElement(v,{schema:t,type:"event"}),"operation"===n&&r.createElement(v,{schema:t,type:"operation"}))}function E(e){return i({children:()=>r.createElement(O,e)})}const w={web:{action:void 0,event:void 0,config:void 0},mobile:{action:void 0,event:void 0,config:void 0},common:{action:void 0,event:void 0,config:void 0}};function O(e){const{product:t,type:n}=e,[o,i]=(0,r.useState)();return(0,r.useEffect)((()=>{let e,r=!1;switch(n){case"command":case"operation":e="action";break;case"event":e="event";break;case"config":e="config"}return(async()=>{e&&!w[t][e]&&("config"===n?(w.common[e]=fetch("https://apps.geocortex.com/webviewer/common-app-config.schema.json"),w[t][e]=fetch(`https://apps.geocortex.com/webviewer/${t}-app-config.schema.json`)):w[t][e]=fetch(`https://apps.geocortex.com/webviewer/${t}-${e}.schema.json`));const o=[];if("config"===e){const e=await w.common.config,n=await w[t].config,r=await e.clone().json(),i=await n.clone().json();o.push(r),o.push(i)}else{const e=await w[t].action,n=await w[t].event,r=await e.clone().json(),i=await n.clone().json();o.push(r),o.push(i)}if(r)return;const a={$ref:"#/definitions/viewer-spec.ActionObject"},c={type:"string"},s={definitions:"config"!==n?{"viewer-spec.ActionObject":{properties:{name:{description:"The name of a command or operation.",type:"string"},arguments:{description:"The arguments for the command or operation.",type:"object"}},required:["name","arguments"],type:"object"},"viewer-spec.Action":{description:`An action to execute in the viewer; can be an action name, an action object, or a command chain (https://developers.geocortex.com/docs/${t}/configuration-commands-operations/#command-chains). The list of valid action names are the names of the commands and operations listed in this document`,anyOf:[c,a,{items:{anyOf:[c,a]},type:"array"}]}}:{}};o.forEach((e=>{Object.keys(e.definitions).forEach((t=>{s.definitions[t]=e.definitions[t]}))})),i(s)})(),()=>{r=!0}}),[t]),(0,r.useEffect)((()=>{if(!o)return;const e=window.decodeURIComponent(window.location.hash);var t;e&&(null==(t=document.getElementById(e.substring(1)))||t.scrollIntoView())}),[o]),o?r.createElement(b,{schema:o,type:n}):r.createElement("div",null,"Loading...")}},2856:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>c,metadata:()=>s,toc:()=>l,default:()=>d});var r=n(2122),o=(n(7294),n(3905)),i=n(1383);const a={title:"Components and Services",description:"Geocortex Web - Component and service configuration"},c=void 0,s={unversionedId:"web/api-components",id:"web/api-components",isDocsHomePage:!1,title:"Components and Services",description:"Geocortex Web - Component and service configuration",source:"@site/docs/web/api-components.mdx",sourceDirName:"web",slug:"/web/api-components",permalink:"/docs/web/api-components",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/api-components.mdx",version:"current",frontMatter:{title:"Components and Services",description:"Geocortex Web - Component and service configuration"},sidebar:"web",previous:{title:"Commands, Operations and Events Reference",permalink:"/docs/web/api-commands-operations-events"}},l=[],m={toc:l};function d({components:e,...t}){return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here is a detailed schema for JSON that can be used within ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/configuration-app-config-getting-started"},"App config")," to configure components and services."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Another way to discover the methods and configurable properties of built-in models and services is to explore the Typescript definitions using your IDE of choice. We recommend ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code"),"."))),(0,o.kt)(i.Z,{product:"web",type:"config",mdxType:"ViewerMessaging"}))}d.isMDXComponent=!0}}]);