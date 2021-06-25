(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[4503],{3905:(e,t,o)=>{"use strict";o.d(t,{Zo:()=>d,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(o),m=r,y=s["".concat(l,".").concat(m)]||s[m]||u[m]||a;return o?n.createElement(y,i(i({ref:t},d),{},{components:o})):n.createElement(y,i({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}s.displayName="MDXCreateElement"},5430:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>p,toc:()=>l,default:()=>d});var n=o(2122),r=(o(7294),o(3905));const a={title:"Deployment",description:"Geocortex Web - Deploy a Geocortex Web Application"},i=void 0,p={unversionedId:"web/sdk-deployment",id:"web/sdk-deployment",isDocsHomePage:!1,title:"Deployment",description:"Geocortex Web - Deploy a Geocortex Web Application",source:"@site/docs/web/sdk-deployment.mdx",sourceDirName:"web",slug:"/web/sdk-deployment",permalink:"/docs/web/sdk-deployment",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-deployment.mdx",version:"current",frontMatter:{title:"Deployment",description:"Geocortex Web - Deploy a Geocortex Web Application"},sidebar:"web",previous:{title:"SDK Samples",permalink:"/docs/web/sdk-samples"},next:{title:"Overview",permalink:"/docs/web/sdk-components-overview"}},l=[{value:"Deploying your library using Geocortex Web Designer",id:"deploying-your-library-using-geocortex-web-designer",children:[{value:"Uploading Custom Code to an App",id:"uploading-custom-code-to-an-app",children:[]},{value:"Upload app config and layout to an App (optional):",id:"upload-app-config-and-layout-to-an-app-optional",children:[]},{value:"Deploy the app",id:"deploy-the-app",children:[]}]}],c={toc:l};function d({components:e,...t}){return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"deploying-your-library-using-geocortex-web-designer"},"Deploying your library using Geocortex Web Designer"),(0,r.kt)("p",null,"The easiest way to deploy your custom library built using the SDK is to upload it to an application using the ",(0,r.kt)("a",{parentName:"p",href:"https://apps.geocortex.com/webviewer/designer/"},"Geocortex Web Designer"),"."),(0,r.kt)("h3",{id:"uploading-custom-code-to-an-app"},"Uploading Custom Code to an App"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can only upload a library to a saved app."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run build")," in the root of your project to create a production build of your library",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This creates an optimized production build that is output to the ",(0,r.kt)("inlineCode",{parentName:"li"},"build")," folder of your project. This build is designed for use in production"))),(0,r.kt)("li",{parentName:"ol"},"Open an application in Geocortex Web Designer that you wish to upload your custom code into"),(0,r.kt)("li",{parentName:"ol"},"Navigate to File -> Upload Library"),(0,r.kt)("li",{parentName:"ol"},"Follow the instructions to upload your custom library located in the ",(0,r.kt)("inlineCode",{parentName:"li"},"build")," folder of your project")),(0,r.kt)("h3",{id:"upload-app-config-and-layout-to-an-app-optional"},"Upload app config and layout to an App (optional):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},".zip")," archive of your ",(0,r.kt)("inlineCode",{parentName:"li"},"app.json")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"layout.xml")," files from the ",(0,r.kt)("inlineCode",{parentName:"li"},"app")," folder of your project"),(0,r.kt)("li",{parentName:"ol"},"Navigate to File -> Upload App"),(0,r.kt)("li",{parentName:"ol"},"Follow the instructions to upload the ",(0,r.kt)("inlineCode",{parentName:"li"},".zip")," archive")),(0,r.kt)("p",null,"Your app is now ready to use your library. If your library registers any custom components, they will be available in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/modify-a-layout.htm#add-a-component"},"Layout Toolbox")),(0,r.kt)("h3",{id:"deploy-the-app"},"Deploy the app"),(0,r.kt)("p",null,"After you've uploaded your custom library to your application, you can push the application through the configured deployment stages using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/deploy-an-app.htm%3FTocPath%3DApps%7CDeploy%2520an%2520App%7C_____0"},"deployment pipeline in the Designer"),". Your library code will be copied through the deployment stages, so you can be confident that changes to your library code in the development stage won't affect your production app until you explicitly deploy to the production stage."))}d.isMDXComponent=!0}}]);