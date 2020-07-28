(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return m}));var n=a(2),i=a(6),r=(a(0),a(218)),o=a(219),c=a(224),l=a(225),s={title:"Using the TypeScript Workflow SDK with Web Applications",sidebar_label:"SDK Overview",description:"Geocortex Workflow - Overview of extending workflow for web applications"},b={unversionedId:"workflow/sdk-web-overview",id:"workflow/sdk-web-overview",isDocsHomePage:!1,title:"Using the TypeScript Workflow SDK with Web Applications",description:"Geocortex Workflow - Overview of extending workflow for web applications",source:"@site/docs/workflow/sdk-web-overview.mdx",permalink:"/docs/workflow/sdk-web-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/sdk-web-overview.mdx",sidebar_label:"SDK Overview",sidebar:"workflow",previous:{title:"Concepts",permalink:"/docs/workflow/concepts-key-concepts"},next:{title:"Create an Activity",permalink:"/docs/workflow/sdk-web-create-activity"}},p=[{value:"Download",id:"download",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Building",id:"building",children:[]},{value:"Deployment",id:"deployment",children:[{value:"Host the Activity Pack",id:"host-the-activity-pack",children:[]},{value:"Register the Activity Pack",id:"register-the-activity-pack",children:[]},{value:"Sharing the Activity Pack",id:"sharing-the-activity-pack",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],d={rightToc:p};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Geocortex Workflow for Web Applications SDK consists of a TypeScript project that eases development of Workflow activities and custom form elements. It produces a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/concepts-key-concepts#activity-packs"}),"Workflow activity pack")," that can be consumed by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/concepts-key-concepts#geocortex-workflow-hosts"}),"web applications that use Workflow"),"."),Object(r.b)("h2",{id:"download"},"Download"),Object(r.b)("p",null,"You can download the Workflow Activity SDK for TypeScript ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://apps.geocortex.com/workflow/latest/activity-sdk.zip"}),"here"),"."),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The latest LTS version of ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node.js"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"node -v")," in the terminal to confirm the version."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/get-npm"}),"npm")," which is included with Node.")),Object(r.b)("h2",{id:"setup"},"Setup"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Open the ",Object(r.b)("inlineCode",{parentName:"li"},"activity-sdk")," folder found in the SDK in your favorite IDE. We recommend using Visual Studio Code for the best experience."),Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"npm install")," in the terminal of this folder to install the project's dependencies.")),Object(r.b)("h2",{id:"building"},"Building"),Object(r.b)("p",null,"Run ",Object(r.b)("inlineCode",{parentName:"p"},"npm run build")," in the terminal to compile the TypeScript project."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"dist")," folder will contain the compiled activity pack output.")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Check out ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/tutorial-web-calculate-logarithm-activity"}),"Implement Custom Activities for Web Applications")," to learn how to make activities for your activity pack."))),Object(r.b)("h2",{id:"deployment"},"Deployment"),Object(r.b)("p",null,"Deploying Workflow activities consists of two steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Hosting the Workflow activity pack on a server accessible to the Geocortex Workflow Designer"),Object(r.b)("li",{parentName:"ol"},"Making the Workflow activity pack known to Geocortex Workflow Designer and Workflow Applications by registering it as an ArcGIS item.")),Object(r.b)("h3",{id:"host-the-activity-pack"},"Host the Activity Pack"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"dist")," folder produced by running ",Object(r.b)("inlineCode",{parentName:"p"},"npm run build")," can be directly hosted with the web server technology that is most appropriate for your use case, such as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.iis.net/"}),"IIS"),".\nActivity packs must be hosted by a web server that supports SSL and CORS."),Object(r.b)("h4",{id:"server-requirements"},"Server Requirements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The server must have a valid SSL certificate."),Object(r.b)("li",{parentName:"ul"},"The server must support ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing"}),"Cross-Origin Resource Sharing (CORS)")," and allow CORS requests from the ",Object(r.b)("inlineCode",{parentName:"li"},"https://apps.geocortex.com")," origin.")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you sign in to Geocortex Workflow Designer using Portal for ArcGIS your server will need to allow CORS requests from your custom origin. For example, ",Object(r.b)("inlineCode",{parentName:"p"},"https://acme.apps.geocortex.com"),"."))),Object(r.b)("p",null,"Hosting Workflow activity packs in this manner allows Geocortex Workflow Designer to read the list of custom activities and their metadata from the source files."),Object(r.b)("h4",{id:"development-web-server"},"Development Web Server"),Object(r.b)("p",null,"For ease of development, this project includes an ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/express"}),"Express")," web server that supports SSL and is suitable for most development purposes."),Object(r.b)("p",null,"To start the development web server and enable a compile-on-save watch task:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"npm start")," in the terminal to start the build and the development web server.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Note: You can press ",Object(r.b)("inlineCode",{parentName:"li"},"CTRL+C")," in the terminal to stop the watch and the development web server."),Object(r.b)("li",{parentName:"ul"},"The development web server is only available while the ",Object(r.b)("inlineCode",{parentName:"li"},"start")," task is running."),Object(r.b)("li",{parentName:"ul"},"The development web server is available at ",Object(r.b)("inlineCode",{parentName:"li"},"https://localhost:57999/")," by default.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"You can change the port by modifying ",Object(r.b)("inlineCode",{parentName:"li"},".build/tsc.js"),". Edit the first line:",Object(r.b)("br",{parentName:"li"}),Object(r.b)("inlineCode",{parentName:"li"},"var PORT = 57999;")))),Object(r.b)("li",{parentName:"ul"},"The development web server serves the content of the ",Object(r.b)("inlineCode",{parentName:"li"},"dist")," directory."),Object(r.b)("li",{parentName:"ul"},"The SSL certificate of the development web server is not valid. To work around this, do one of the following:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Open ",Object(r.b)("inlineCode",{parentName:"li"},"https://localhost:57999/")," in a web browser and allow the invalid certificate as an exception."),Object(r.b)("li",{parentName:"ul"},"Trust the ",Object(r.b)("inlineCode",{parentName:"li"},".build/ca.crt")," file (add it to your Trusted Root Authority store)."),Object(r.b)("li",{parentName:"ul"},"Replace the ",Object(r.b)("inlineCode",{parentName:"li"},".build/localhost.crt")," and ",Object(r.b)("inlineCode",{parentName:"li"},".build/localhost.key")," files with a known valid certificate."))),Object(r.b)("li",{parentName:"ul"},"The development web server supports CORS requests from any origin by default.")))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"As ",Object(r.b)("inlineCode",{parentName:"p"},"localhost")," is only accessible to your host machine, activity packs hosted in this manner will not be accessible when running Geocortex Workflow Designer on a different machine."))),Object(r.b)("h3",{id:"register-the-activity-pack"},"Register the Activity Pack"),Object(r.b)("p",null,"To make an activity pack available to workflow authors in Geocortex Workflow Designer you must create a special item in ArcGIS Online or Portal for ArcGIS that references it."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Sign in to ArcGIS Online or Portal for ArcGIS."),Object(r.b)("li",{parentName:"ol"},"Go to ",Object(r.b)("strong",{parentName:"li"},"My Content"),"."),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"Add Item")," > ",Object(r.b)("strong",{parentName:"li"},"An application"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("inlineCode",{parentName:"li"},"Web Mapping"),"."),Object(r.b)("li",{parentName:"ul"},"Purpose: ",Object(r.b)("inlineCode",{parentName:"li"},"Ready To Use"),"."),Object(r.b)("li",{parentName:"ul"},"API: ",Object(r.b)("inlineCode",{parentName:"li"},"JavaScript"),"."),Object(r.b)("li",{parentName:"ul"},"URL: The URL to your activity pack.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("inlineCode",{parentName:"li"},"https://localhost:57999/")," for the development server."))),Object(r.b)("li",{parentName:"ul"},"Title: Your desired title."),Object(r.b)("li",{parentName:"ul"},"Tags: ",Object(r.b)("strong",{parentName:"li"},"Must")," include ",Object(r.b)("inlineCode",{parentName:"li"},"geocortex-workflow-activity-pack"),".")))),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The activity pack will ",Object(r.b)("strong",{parentName:"p"},"not")," be registered unless it includes the tag ",Object(r.b)("inlineCode",{parentName:"p"},"geocortex-workflow-activity-pack"),"."))),Object(r.b)("h3",{id:"sharing-the-activity-pack"},"Sharing the Activity Pack"),Object(r.b)("p",null,"As a workflow author, you will see custom activities in Geocortex Workflow Designer from the activity packs you have registered. You will also see activity packs that have been shared with you via groups you are a member of."),Object(r.b)("p",null,"To share an activity pack with other workflow authors in your organization share the ArcGIS item that represents the activity pack with a group that contains the target users."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You do not need to share activity packs with the end users of your applications that run workflows containing custom activities."))),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)(c.a,{mdxType:"UseCaseContainer"},Object(r.b)(l.a,{title:"Implement a Custom Activity",description:"Implement a custom activity for web applications",link:Object(o.a)("docs/workflow/sdk-web-create-activity"),mdxType:"UseCaseCard"}),Object(r.b)(l.a,{title:"Implement a Custom Form Element",description:"Implement a custom form element for web applications",link:Object(o.a)("docs/workflow/tutorial-web-implement-star-rating-form-element"),mdxType:"UseCaseCard"}),Object(r.b)(l.a,{title:"Reference a Third Party Library",description:"Reference a third party library in web applications",link:Object(o.a)("docs/workflow/sdk-web-reference-third-party-library"),mdxType:"UseCaseCard"}),Object(r.b)(l.a,{title:"Integrate the ArcGIS API for JavaScript into custom activities",description:"Integrate the ArcGIS API for JavaScript into custom code",link:Object(o.a)("docs/workflow/sdk-web-integrating-the-arcgis-api"),mdxType:"UseCaseCard"})))}m.isMDXComponent=!0},218:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,u=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return a?i.a.createElement(u,c(c({ref:t},s),{},{components:a})):i.a.createElement(u,c({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},219:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return o}));var n=a(222),i=a(220);function r(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var r=void 0===n?{}:n,o=r.forcePrependBaseUrl,c=void 0!==o&&o,l=r.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(i.b)(a))return a;if(c)return t+a;var b=!a.startsWith(t)?t+a.replace(/^\//,""):a;return s?e+b:b}(r,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},220:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}))},221:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},222:function(e,t,a){"use strict";var n=a(0),i=a(18);t.a=function(){var e=Object(n.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},223:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(13),o=a(220),c=a(8),l=Object(n.createContext)({collectLink:function(){}}),s=a(219),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]])}return a};t.a=function(e){var t,a,p=e.isNavLink,d=e.to,m=e.href,u=e.activeClassName,v=e["data-noBrokenLinkCheck"],h=b(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),O=Object(s.b)().withBaseUrl,f=Object(n.useContext)(l),j=d||m,w=void 0!==j?O(j):void 0,y=Object(o.a)(w),N=Object(n.useRef)(!1),g=p?r.e:r.c,k=c.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!k&&y&&window.docusaurus.prefetch(w),function(){k&&a&&a.disconnect()}}),[w,k,y]);var C=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,x=!w||!y||C;return w&&y&&!C&&!v&&f.collectLink(w),x?i.a.createElement("a",Object.assign({href:w},!y&&{target:"_blank",rel:"noopener noreferrer"},h)):i.a.createElement(g,Object.assign({},h,{onMouseEnter:function(){N.current||(window.docusaurus.preload(w),N.current=!0)},innerRef:function(e){var t,n;k&&e&&y&&(t=e,n=function(){window.docusaurus.prefetch(w)},(a=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())}))}))).observe(t))},to:w},p&&{activeClassName:u}))}},224:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),i=a.n(n),r=a(46),o=a.n(r);function c(e){var t=e.children;return i.a.createElement("div",{className:o.a.root},t)}},225:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(223),i=a(0),r=a.n(i),o=a(221),c=a(47),l=a.n(c);function s(e){var t=e.title,a=e.description,i=e.link;return r.a.createElement("div",{className:Object(o.a)("card-demo",l.a.root)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"card__body"},r.a.createElement("p",null,a)),r.a.createElement("div",{className:"card__footer"},r.a.createElement(n.a,{className:"button button--secondary button--block",to:i},"Get Started"))))}}}]);