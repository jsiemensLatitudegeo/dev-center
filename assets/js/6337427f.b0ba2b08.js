(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[9120],{3905:(e,t,i)=>{"use strict";i.d(t,{Zo:()=>p,kt:()=>u});var a=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(i),u=r,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||n;return i?a.createElement(k,o(o({ref:t},p),{},{components:i})):a.createElement(k,o({ref:t},p))}));function u(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<n;c++)o[c]=i[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},6742:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var a=i(7294),r=i(3727),n=i(2263),o=i(3919),l=i(412);const s=(0,a.createContext)({collectLink:()=>{}});var c=i(4996),p=i(8780);const d=function({isNavLink:e,to:t,href:i,activeClassName:d,isActive:m,"data-noBrokenLinkCheck":u,autoAddBaseUrl:k=!0,...h}){var v;const{siteConfig:{trailingSlash:f}}=(0,n.Z)(),{withBaseUrl:w}=(0,c.C)(),g=(0,a.useContext)(s),y=t||i,N=(0,o.Z)(y),b=null==y?void 0:y.replace("pathname://","");let C=void 0!==b?(x=b,k&&(e=>e.startsWith("/"))(x)?w(x):x):void 0;var x;C&&N&&(C=(0,p.applyTrailingSlash)(C,f));const S=(0,a.useRef)(!1),T=e?r.OL:r.rU,O=l.Z.canUseIntersectionObserver;let j;(0,a.useEffect)((()=>(!O&&N&&null!=C&&window.docusaurus.prefetch(C),()=>{O&&j&&j.disconnect()})),[C,O,N]);const P=null!==(v=null==C?void 0:C.startsWith("#"))&&void 0!==v&&v,A=!C||!N||P;return C&&N&&!P&&!u&&g.collectLink(C),A?a.createElement("a",{href:C,...y&&!N&&{target:"_blank",rel:"noopener noreferrer"},...h}):a.createElement(T,{...h,onMouseEnter:()=>{S.current||null==C||(window.docusaurus.preload(C),S.current=!0)},innerRef:e=>{var t,i;O&&e&&N&&(t=e,i=()=>{null!=C&&window.docusaurus.prefetch(C)},j=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(j.unobserve(t),j.disconnect(),i())}))})),j.observe(t))},to:C||"",...e&&{isActive:m,activeClassName:d}})}},3919:(e,t,i)=>{"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}i.d(t,{b:()=>a,Z:()=>r})},4996:(e,t,i)=>{"use strict";i.d(t,{C:()=>n,Z:()=>o});var a=i(2263),r=i(3919);function n(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(i,a)=>function(e,t,i,{forcePrependBaseUrl:a=!1,absolute:n=!1}={}){if(!i)return i;if(i.startsWith("#"))return i;if((0,r.b)(i))return i;if(a)return t+i;const o=i.startsWith(t)?i:t+i.replace(/^\//,"");return n?e+o:o}(t,e,i,a)}}function o(e,t={}){const{withBaseUrl:i}=n();return i(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[i]=e.split(/[#?]/),a="/"===i?"/":t?(r=i).endsWith("/")?r:`${r}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(i);var r;return e.replace(i,a)}},8780:function(e,t,i){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=i(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var n=i(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(n).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var a=i(6742),r=i(7294),n=i(6010);const o="root_2PFE";function l({title:e,description:t,link:i}){return r.createElement("div",{className:(0,n.Z)("card-demo",o)},r.createElement("div",{className:"card"},r.createElement("div",{className:"card__header"},r.createElement("h3",null,e)),r.createElement("div",{className:"card__body"},r.createElement("p",null,t)),r.createElement("div",{className:"card__footer"},r.createElement(a.Z,{className:"button button--secondary button--block",to:i},"Get Started"))))}},7763:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var a=i(7294);const r="root_NqT0";function n({children:e}){return a.createElement("div",{className:r},e)}},8765:(e,t,i)=>{"use strict";i.r(t),i.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>p,toc:()=>d,default:()=>u});var a=i(2122),r=(i(7294),i(3905)),n=i(4996),o=i(7763),l=i(1962);const s={title:"Geocortex Workflow TypeScript SDK Overview",sidebar_label:"SDK Overview",description:"Geocortex Workflow - Overview of extending workflow for web applications"},c=void 0,p={unversionedId:"workflow/sdk-web-overview",id:"workflow/sdk-web-overview",isDocsHomePage:!1,title:"Geocortex Workflow TypeScript SDK Overview",description:"Geocortex Workflow - Overview of extending workflow for web applications",source:"@site/docs/workflow/sdk-web-overview.mdx",sourceDirName:"workflow",slug:"/workflow/sdk-web-overview",permalink:"/docs/workflow/sdk-web-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/sdk-web-overview.mdx",version:"current",frontMatter:{title:"Geocortex Workflow TypeScript SDK Overview",sidebar_label:"SDK Overview",description:"Geocortex Workflow - Overview of extending workflow for web applications"},sidebar:"workflow",previous:{title:"Key Concepts",permalink:"/docs/workflow/key-concepts"},next:{title:"Create an Activity",permalink:"/docs/workflow/sdk-web-create-activity"}},d=[{value:"Overview",id:"overview",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Project Structure",id:"project-structure",children:[]},{value:"Browser Support",id:"browser-support",children:[{value:"Update TypeScript Configuration",id:"update-typescript-configuration",children:[]},{value:"Update <code>browserslist</code>",id:"update-browserslist",children:[]}]},{value:"Development Server",id:"development-server",children:[{value:"Configuring a HTTPS Certificate",id:"configuring-a-https-certificate",children:[]}]},{value:"Deployment",id:"deployment",children:[{value:"Creating a Production Build",id:"creating-a-production-build",children:[]},{value:"Host the Activity Pack",id:"host-the-activity-pack",children:[]},{value:"Register the Activity Pack",id:"register-the-activity-pack",children:[]},{value:"Sharing the Activity Pack",id:"sharing-the-activity-pack",children:[]}]},{value:"Migrating from the Legacy SDK",id:"migrating-from-the-legacy-sdk",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],m={toc:d};function u({components:e,...t}){return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Geocortex Workflow for Web Applications SDK consists of a TypeScript project that eases development of custom Workflow activities and form elements. It produces a ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflow/key-concepts#activity-packs"},"Workflow activity pack")," that can be consumed by ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflow/key-concepts#geocortex-workflow-hosts"},"web applications that use Workflow"),"."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Geocortex Workflow SDK provides a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-workflow-sdk/"},"development toolkit")," for building custom Workflow activities and form elements into a package that can be deployed to Geocortex Web called an activity pack. Once the activity pack has been developed, it can then be deployed to your SaaS or on-premises environment."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Geocortex Workflow 5.18 or later if running on-premises."),(0,r.kt)("li",{parentName:"ul"},"The latest LTS version of ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js"),"."),(0,r.kt)("li",{parentName:"ul"},"A code editor of your choice. We recommend ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code"),".")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"npx @vertigis/workflow-sdk create activity-pack")," where ",(0,r.kt)("inlineCode",{parentName:"li"},"activity-pack")," is the name of the directory that will be created in the current working directory",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example: ",(0,r.kt)("inlineCode",{parentName:"li"},"npx @vertigis/workflow-sdk create test-activity-pack")))),(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("inlineCode",{parentName:"li"},"activity-pack")," directory in your favorite IDE. We recommend using Visual Studio Code for the best experience."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run generate")," and follow the onscreen prompts to create a new activity or form element."),(0,r.kt)("li",{parentName:"ol"},"Finally run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm start")," to start the development server.")),(0,r.kt)("h2",{id:"project-structure"},"Project Structure"),(0,r.kt)("p",null,"The created project contains a few important files and directories:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"src/index.ts")," file which exports all of your custom activities and form elements."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"uuid.js")," which maintains a globally unique identifier that will be used when you create your custom activities and form elements. This enables you to load and use multiple activity packs in a given workflow. ",(0,r.kt)("strong",{parentName:"li"},"This identifier should not be modified"),".")),(0,r.kt)("h2",{id:"browser-support"},"Browser Support"),(0,r.kt)("p",null,"By default the Workflow SDK targets modern browsers. If you need to support Internet Explorer 11, you'll need to update a few configuration settings in your project."),(0,r.kt)("h3",{id:"update-typescript-configuration"},"Update TypeScript Configuration"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," of your project you'll need to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"es5"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'},'{\n    "extends": "@vertigis/workflow-sdk/config/tsconfig.json",\n    "compilerOptions": {\n        // highlight-next-line\n        "target": "es5"\n    },\n    "include": ["src"]\n}\n')),(0,r.kt)("h3",{id:"update-browserslist"},"Update ",(0,r.kt)("inlineCode",{parentName:"h3"},"browserslist")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," of your project, you'll need to update the ",(0,r.kt)("inlineCode",{parentName:"p"},"browserslist")," to include ",(0,r.kt)("inlineCode",{parentName:"p"},"ie 11"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'"browserslist": [\n    "last 2 chrome versions",\n    "last 2 edge versions",\n    "last 2 firefox versions",\n    "last 2 safari versions",\n    // highlight-next-line\n    "ie 11"\n]\n')),(0,r.kt)("h2",{id:"development-server"},"Development Server"),(0,r.kt)("p",null,"To get started with the development server, run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," in the terminal to start the development server. Before you can use the activity pack in your workflows, you will need to ",(0,r.kt)("a",{parentName:"p",href:"#register-the-activity-pack"},"register the activity pack in your ArcGIS Portal"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The activity pack is available at ",(0,r.kt)("a",{parentName:"li",href:"https://localhost:5000/main.js"},(0,r.kt)("inlineCode",{parentName:"a"},"https://localhost:5000/main.js"))," by default.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can change the port by setting the ",(0,r.kt)("inlineCode",{parentName:"li"},"PORT")," environment variable when running ",(0,r.kt)("inlineCode",{parentName:"li"},"npm start"),"."))),(0,r.kt)("li",{parentName:"ul"},"The HTTPS certificate of the development server is a self-signed certificate that web browsers will warn about. To work around this open ",(0,r.kt)("a",{parentName:"li",href:"https://localhost:5000/main.js"},(0,r.kt)("inlineCode",{parentName:"a"},"https://localhost:5000/main.js"))," in a web browser and allow the invalid certificate as an exception. For creating a locally-trusted HTTPS certificate see the ",(0,r.kt)("a",{parentName:"li",href:"#configuring-a-https-certificate"},"Configuring a HTTPS Certificate")," section."),(0,r.kt)("li",{parentName:"ul"},"The development server supports CORS requests from any origin by default.")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"As ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," is only accessible to your host machine, activity packs hosted in this manner will not be accessible when running Geocortex Workflow Designer on a different machine."))),(0,r.kt)("h3",{id:"configuring-a-https-certificate"},"Configuring a HTTPS Certificate"),(0,r.kt)("p",null,"You can create a locally-trusted development certificate that is trusted by your system using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FiloSottile/mkcert"},"mkcert")," utility. Once installed you can run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ mkcert -install\nCreated a new local CA at "/Users/ian/Library/Application Support/mkcert" \ud83d\udca5\nThe local CA is now installed in the system trust store! \u26a1\ufe0f\nThe local CA is now installed in the Firefox trust store (requires browser restart)! \ud83e\udd8a\n\n$ mkcert localhost 127.0.0.1 ::1\nUsing the local CA at "/Users/ian/Library/Application Support/mkcert" \u2728\n\nCreated a new certificate valid for the following names \ud83d\udcdc\n - "localhost"\n - "127.0.0.1"\n - "::1"\n\nThe certificate is at "./localhost+2.pem" and the key at "./localhost+2-key.pem" \u2705\n')),(0,r.kt)("p",null,"Once you've created your locally-trusted development certificate you can provide the paths to the ",(0,r.kt)("inlineCode",{parentName:"p"},"cert")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ npm start -- --cert "./localhost+2.pem" --key "./localhost+2-key.pem"\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The extra ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," script is necessary to forward the arguments to the development server process."))),(0,r.kt)("h2",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,"Deploying Workflow activities consists of two steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Hosting the Workflow activity pack on a server accessible to the Geocortex Workflow Designer"),(0,r.kt)("li",{parentName:"ol"},"Making the Workflow activity pack known to Geocortex Workflow Designer and Workflow Applications by registering it as an ArcGIS item.")),(0,r.kt)("h3",{id:"creating-a-production-build"},"Creating a Production Build"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build")," in the root of your project to create a production build of your activity pack. This creates an optimized production build that is output to the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," folder of your project."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflow/tutorial-web-calculate-logarithm-activity"},"Implement Custom Activities for Web Applications")," to learn how to make activities for your activity pack."))),(0,r.kt)("h3",{id:"host-the-activity-pack"},"Host the Activity Pack"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," folder produced by running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build")," can be directly hosted with the web server technology that is most appropriate for your use case, such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.iis.net/"},"IIS"),".\nActivity packs must be hosted by a web server that supports HTTPS and CORS."),(0,r.kt)("h4",{id:"server-requirements"},"Server Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The server must have a valid HTTPS certificate."),(0,r.kt)("li",{parentName:"ul"},"The server must support ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing"},"Cross-Origin Resource Sharing (CORS)")," and allow CORS requests from the ",(0,r.kt)("inlineCode",{parentName:"li"},"https://apps.geocortex.com")," origin or the origin of your Geocortex Workflow if running on-premises.")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you sign in to Geocortex Workflow Designer using Portal for ArcGIS your server will need to allow CORS requests from your custom origin. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"https://acme.apps.geocortex.com"),"."))),(0,r.kt)("p",null,"Hosting Workflow activity packs in this manner allows Geocortex Workflow Designer to read the list of custom activities and their associated metadata."),(0,r.kt)("h3",{id:"register-the-activity-pack"},"Register the Activity Pack"),(0,r.kt)("p",null,"To make an activity pack available to workflow authors in Geocortex Workflow Designer you must create a special item in ArcGIS Online or Portal for ArcGIS that references it."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Sign in to ArcGIS Online or Portal for ArcGIS."),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"My Content"),"."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Add Item")," > ",(0,r.kt)("strong",{parentName:"li"},"An application"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Web Mapping")),(0,r.kt)("li",{parentName:"ul"},"Purpose: ",(0,r.kt)("inlineCode",{parentName:"li"},"Ready To Use")),(0,r.kt)("li",{parentName:"ul"},"API: ",(0,r.kt)("inlineCode",{parentName:"li"},"JavaScript")),(0,r.kt)("li",{parentName:"ul"},"URL: The URL to your activity pack manifest",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"https://localhost:5000/activitypack.json")," for the development server, or the URL to your production server hosting the activity pack such as ",(0,r.kt)("inlineCode",{parentName:"li"},"https://myserver.com/custom-activity-pack/activitypack.json"),"."))),(0,r.kt)("li",{parentName:"ul"},"Title: Your desired title"),(0,r.kt)("li",{parentName:"ul"},"Tags: ",(0,r.kt)("strong",{parentName:"li"},"Must")," include ",(0,r.kt)("inlineCode",{parentName:"li"},"geocortex-workflow-activity-pack"))))),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The activity pack will ",(0,r.kt)("strong",{parentName:"p"},"not")," be registered unless it includes the ",(0,r.kt)("inlineCode",{parentName:"p"},"geocortex-workflow-activity-pack")," tag."))),(0,r.kt)("h3",{id:"sharing-the-activity-pack"},"Sharing the Activity Pack"),(0,r.kt)("p",null,"As a workflow author, you will see custom activities in Geocortex Workflow Designer from the activity packs you have registered. You will also see activity packs that have been shared with you via groups you are a member of."),(0,r.kt)("p",null,"To share an activity pack with other workflow authors in your organization share the ArcGIS item that represents the activity pack with a group that contains the target users."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You do not need to share the activity pack Portal item with the end users of your applications that run workflows containing custom activities. It only affects the visibility of the activity pack in the Geocortex Workflow Designer."))),(0,r.kt)("h2",{id:"migrating-from-the-legacy-sdk"},"Migrating from the Legacy SDK"),(0,r.kt)("p",null,"If you're migrating from our previous ",(0,r.kt)("inlineCode",{parentName:"p"},"activity-sdk.zip")," there are a few steps you will want to follow to migrate your source code over to the new SDK:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Follow the instructions above to ",(0,r.kt)("a",{parentName:"p",href:"#getting-started"},"create a new project")," and ",(0,r.kt)("a",{parentName:"p",href:"#register-the-activity-pack"},"register the activity pack"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Note the updated instructions to register the activity pack. The URL should end in ",(0,r.kt)("inlineCode",{parentName:"li"},"/activitypack.json"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the UUID value from ",(0,r.kt)("inlineCode",{parentName:"p"},".build/uuid.txt")," in your existing project and overwrite the value in ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid.js")," of your new project.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy your activity and form element modules into the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/activities")," directory.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add each activity and form element to the ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," exports. For example if you copied over an activity called ",(0,r.kt)("inlineCode",{parentName:"p"},"src/activities/Sum.ts"),", you would add the following to ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.ts"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'export * from "./activities/Sum";\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check your ",(0,r.kt)("inlineCode",{parentName:"p"},"main.ts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"init.ts")," logic in your existing project to see if any of it is still relevant. You no longer need to call ",(0,r.kt)("inlineCode",{parentName:"p"},"mapDependencies()")," to use third party libraries as the new SDK will handle this for you.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Test your activity pack to ensure it still behaves as expected."))),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)(o.Z,{mdxType:"UseCaseContainer"},(0,r.kt)(l.Z,{title:"Implement a Custom Activity",description:"Implement a custom activity for web applications",link:(0,n.Z)("docs/workflow/sdk-web-create-activity"),mdxType:"UseCaseCard"}),(0,r.kt)(l.Z,{title:"Implement a Custom Form Element",description:"Implement a custom form element for web applications",link:(0,n.Z)("docs/workflow/sdk-web-create-element"),mdxType:"UseCaseCard"}),(0,r.kt)(l.Z,{title:"Reference a Third Party Library",description:"Reference a third party library in web applications",link:(0,n.Z)("docs/workflow/sdk-web-reference-third-party-library"),mdxType:"UseCaseCard"}),(0,r.kt)(l.Z,{title:"Integrate the ArcGIS API for JavaScript into custom activities",description:"Integrate the ArcGIS API for JavaScript into custom code",link:(0,n.Z)("docs/workflow/sdk-web-integrating-the-arcgis-api"),mdxType:"UseCaseCard"})))}u.isMDXComponent=!0},6010:(e,t,i)=>{"use strict";function a(e){var t,i,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(i=a(e[t]))&&(r&&(r+=" "),r+=i);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,i=0,r="";i<arguments.length;)(e=arguments[i++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}i.d(t,{Z:()=>r})}}]);