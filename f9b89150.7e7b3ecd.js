(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{241:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return i})),o.d(t,"toc",(function(){return p})),o.d(t,"default",(function(){return c}));var n=o(3),a=(o(0),o(255));const r={title:"Deployment",description:"Geocortex Web - Deploy a Geocortex Web Application"},i={unversionedId:"web/sdk-deployment",id:"web/sdk-deployment",isDocsHomePage:!1,title:"Deployment",description:"Geocortex Web - Deploy a Geocortex Web Application",source:"@site/docs/web/sdk-deployment.mdx",slug:"/web/sdk-deployment",permalink:"/docs/web/sdk-deployment",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-deployment.mdx",version:"current",sidebar:"web",previous:{title:"SDK Samples",permalink:"/docs/web/sdk-samples"},next:{title:"Components Overview",permalink:"/docs/web/sdk-components-overview"}},p=[{value:"Deploying your library using Geocortex Web Designer",id:"deploying-your-library-using-geocortex-web-designer",children:[{value:"Uploading Custom Code to an App",id:"uploading-custom-code-to-an-app",children:[]},{value:"Upload app config and layout to an App (optional):",id:"upload-app-config-and-layout-to-an-app-optional",children:[]},{value:"Deploy the app",id:"deploy-the-app",children:[]}]}],l={toc:p};function c({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"deploying-your-library-using-geocortex-web-designer"},"Deploying your library using Geocortex Web Designer"),Object(a.b)("p",null,"The easiest way to deploy your custom library built using the SDK is to upload it to an application using the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://apps.geocortex.com/webviewer/designer/"}),"Geocortex Web Designer"),"."),Object(a.b)("h3",{id:"uploading-custom-code-to-an-app"},"Uploading Custom Code to an App"),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"You can only upload a library to a saved app."))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"npm run build")," in the root of your project to create a production build of your library",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"This creates an optimized production build that is output to the ",Object(a.b)("inlineCode",{parentName:"li"},"build")," folder of your project. This build is designed for use in production"))),Object(a.b)("li",{parentName:"ol"},"Open an application in Geocortex Web Designer that you wish to upload your custom code into"),Object(a.b)("li",{parentName:"ol"},"Navigate to File -> Upload Library"),Object(a.b)("li",{parentName:"ol"},"Follow the instructions to upload your custom library located in the ",Object(a.b)("inlineCode",{parentName:"li"},"build")," folder of your project")),Object(a.b)("h3",{id:"upload-app-config-and-layout-to-an-app-optional"},"Upload app config and layout to an App (optional):"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create a ",Object(a.b)("inlineCode",{parentName:"li"},".zip")," archive of your ",Object(a.b)("inlineCode",{parentName:"li"},"app.json")," and ",Object(a.b)("inlineCode",{parentName:"li"},"layout.xml")," files from the ",Object(a.b)("inlineCode",{parentName:"li"},"app")," folder of your project"),Object(a.b)("li",{parentName:"ol"},"Navigate to File -> Upload App"),Object(a.b)("li",{parentName:"ol"},"Follow the instructions to upload the ",Object(a.b)("inlineCode",{parentName:"li"},".zip")," archive")),Object(a.b)("p",null,"Your app is now ready to use your library. If your library registers any custom components, they will be available in the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/modify-a-layout.htm#add-a-component"}),"Layout Toolbox")),Object(a.b)("h3",{id:"deploy-the-app"},"Deploy the app"),Object(a.b)("p",null,"After you've uploaded your custom library to your application, you can push the application through the configured deployment stages using the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/deploy-an-app.htm%3FTocPath%3DApps%7CDeploy%2520an%2520App%7C_____0"}),"deployment pipeline in the Designer"),". Your library code will be copied through the deployment stages, so you can be confident that changes to your library code in the development stage won't affect your production app until you explicitly deploy to the production stage."))}c.isMDXComponent=!0},255:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return m}));var n=o(0),a=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},u=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(o),s=n,m=u["".concat(i,".").concat(s)]||u[s]||b[s]||r;return o?a.a.createElement(m,p(p({ref:t},c),{},{components:o})):a.a.createElement(m,p({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<r;c++)i[c]=o[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,o)}s.displayName="MDXCreateElement"}}]);