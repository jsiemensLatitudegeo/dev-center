(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{286:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return p})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return d}));var n=o(1),i=o(9),a=(o(0),o(295)),r={title:"Deployment",description:"Geocortex Web - Deploy a Geocortex Web Application"},p={id:"web/sdk-deployment",title:"Deployment",description:"Geocortex Web - Deploy a Geocortex Web Application",source:"@site/docs/web/sdk-deployment.mdx",permalink:"/docs/web/sdk-deployment",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-deployment.mdx",sidebar:"web",previous:{title:"SDK Overview",permalink:"/docs/web/sdk-overview"},next:{title:"Components Overview",permalink:"/docs/web/sdk-components-overview"}},c=[{value:"Deploying your library using Geocortex Web Designer",id:"deploying-your-library-using-geocortex-web-designer",children:[{value:"Modifying Layout and App Config using the Geocortex Web Designer",id:"modifying-layout-and-app-config-using-the-geocortex-web-designer",children:[]},{value:"Uploading Custom Code to an App",id:"uploading-custom-code-to-an-app",children:[]},{value:"Deploy the app",id:"deploy-the-app",children:[]}]}],l={rightToc:c};function d(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"deploying-your-library-using-geocortex-web-designer"},"Deploying your library using Geocortex Web Designer"),Object(a.b)("p",null,"The easiest way to deploy your custom library built using the SDK is to upload it to an application using the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://apps.geocortex.com/webviewer/designer/"}),"Geocortex Web Designer"),"."),Object(a.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"This is a temporary deployment pattern for the preview release. We're actively improving this pattern, and as such it will change during the preview phase."))),Object(a.b)("h3",{id:"modifying-layout-and-app-config-using-the-geocortex-web-designer"},"Modifying Layout and App Config using the Geocortex Web Designer"),Object(a.b)("p",null,"Geocortex Web Designer provides a powerful interface for editing the layout and configuration of built-in components, but if you need to add a custom component to your application, you will need to upload custom layout and app JSON."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Type ",Object(a.b)("inlineCode",{parentName:"li"},"Ctrl + Shift + E")," while focused in the Geocortex Web Designer to open up the experimental development editing interface."),Object(a.b)("li",{parentName:"ol"},"Copy and paste the ",Object(a.b)("inlineCode",{parentName:"li"},"app.json")," and ",Object(a.b)("inlineCode",{parentName:"li"},"layout.xml")," from your local SDK project to the Geocortex Web Designer Interface.")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"You may need to add an app item for the referenced layout file to the app config in the Designer Interface."))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "schemaVersion": "1.0",\n  "items": [\n    ...\n    {\n      "$type":"layout",\n      "id":"desktop-landscape",\n      "title":"Desktop Landscape",\n      "url":"./desktop-landscape.xml"\n    }\n    ...\n  ]\n}\n')),Object(a.b)("h3",{id:"uploading-custom-code-to-an-app"},"Uploading Custom Code to an App"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"npm run build")," in the root of your project to create a production build of your library",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"This creates an optimized production build that is output to the ",Object(a.b)("inlineCode",{parentName:"li"},"build")," folder of your project. This build is designed for use in production"))),Object(a.b)("li",{parentName:"ol"},"Open the application in Geocortex Web Designer (on-premises or ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://apps.geocortex.com/webviewer/designer/"}),"SaaS"),", depending on your production environment) that you want to upload your custom code to"),Object(a.b)("li",{parentName:"ol"},"Type ",Object(a.b)("inlineCode",{parentName:"li"},"Ctrl + Shift + E")," while focused in the Geocortex Web Designer to open up the experimental development editing interface",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"This interface is for debugging and development purposes only, and is not intended for general configuration of your application."))),Object(a.b)("li",{parentName:"ol"},"Upload the production build of your custom library located in the ",Object(a.b)("inlineCode",{parentName:"li"},"build")," folder to the ",Object(a.b)("inlineCode",{parentName:"li"},"Custom Code")," section of the development editing interface"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#modifying-layout-and-app-config-using-the-geocortex-web-designer"}),"Copy and paste")," the custom layout and app config.")),Object(a.b)("h3",{id:"deploy-the-app"},"Deploy the app"),Object(a.b)("p",null,"After you've uploaded your custom library to your application, you can push the application through the configured deployment stages using the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/deploy-an-app.htm%3FTocPath%3DApps%7CDeploy%2520an%2520App%7C_____0"}),"deployment pipeline in the Designer"),". Your library code will be copied through the deployment stages, so you can be confident that changes to your library code in the development stage won't affect your production app until you explicitly deploy to the production stage."))}d.isMDXComponent=!0}}]);