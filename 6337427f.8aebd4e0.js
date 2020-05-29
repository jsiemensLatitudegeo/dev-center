(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{221:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return d}));var i=a(1),n=a(9),o=(a(0),a(295)),r=a(298),c=a(299),l={title:"Using the TypeScript Workflow SDK with Web Applications",sidebar_label:"SDK Overview",description:"Geocortex Workflow - Overview of extending workflow for web applications"},s={id:"workflow/sdk-web-overview",title:"Using the TypeScript Workflow SDK with Web Applications",description:"Geocortex Workflow - Overview of extending workflow for web applications",source:"@site/docs/workflow/sdk-web-overview.mdx",permalink:"/docs/workflow/sdk-web-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/sdk-web-overview.mdx",sidebar_label:"SDK Overview",sidebar:"workflow",previous:{title:"Concepts",permalink:"/docs/workflow/concepts-key-concepts"},next:{title:"Create an Activity",permalink:"/docs/workflow/sdk-web-create-activity"}},b=[{value:"Download",id:"download",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Building",id:"building",children:[]},{value:"Deployment",id:"deployment",children:[{value:"Host the Activity Pack",id:"host-the-activity-pack",children:[]},{value:"Register the Activity Pack",id:"register-the-activity-pack",children:[]},{value:"Sharing the Activity Pack",id:"sharing-the-activity-pack",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],p={rightToc:b};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Geocortex Workflow for Web Applications SDK consists of a TypeScript project that eases development of Workflow activities and custom form elements. It produces a ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/workflow/concepts-key-concepts#activity-packs"}),"Workflow activity pack")," that can be consumed by ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/workflow/concepts-key-concepts#geocortex-workflow-hosts"}),"web applications that use Workflow"),"."),Object(o.b)("h2",{id:"download"},"Download"),Object(o.b)("p",null,"You can download the Workflow Activity SDK for TypeScript ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://apps.geocortex.com/workflow/latest/activity-sdk.zip"}),"here"),"."),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The latest LTS version of ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node.js"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"node -v")," in the terminal to confirm the version."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.npmjs.com/get-npm"}),"npm")," which is included with Node.")),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open the ",Object(o.b)("inlineCode",{parentName:"li"},"activity-sdk")," folder found in the SDK in your favorite IDE. We recommend using Visual Studio Code for the best experience."),Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"npm install")," in the terminal of this folder to install the project's dependencies.")),Object(o.b)("h2",{id:"building"},"Building"),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"npm run build")," in the terminal to compile the TypeScript project."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"dist")," folder will contain the compiled activity pack output.")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Check out ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/workflow/tutorial-web-calculate-logarithm-activity"}),"Implement Custom Activities for Web Applications")," to learn how to make activities for your activity pack."))),Object(o.b)("h2",{id:"deployment"},"Deployment"),Object(o.b)("p",null,"Deploying Workflow activities consists of two steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Hosting the Workflow activity pack on a server accessible to the Geocortex Workflow Designer"),Object(o.b)("li",{parentName:"ol"},"Making the Workflow activity pack known to Geocortex Workflow Designer and Workflow Applications by registering it as an ArcGIS item.")),Object(o.b)("h3",{id:"host-the-activity-pack"},"Host the Activity Pack"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"dist")," folder produced by running ",Object(o.b)("inlineCode",{parentName:"p"},"npm run build")," can be directly hosted with the web server technology that is most appropriate for your use case, such as ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.iis.net/"}),"IIS"),".\nActivity packs must be hosted by a web server that supports SSL and CORS."),Object(o.b)("h4",{id:"server-requirements"},"Server Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The server must have a valid SSL certificate."),Object(o.b)("li",{parentName:"ul"},"The server must support ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing"}),"Cross-Origin Resource Sharing (CORS)")," and allow CORS requests from the ",Object(o.b)("inlineCode",{parentName:"li"},"https://apps.geocortex.com")," origin.")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you sign in to Geocortex Workflow Designer using Portal for ArcGIS your server will need to allow CORS requests from your custom origin. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"https://acme.apps.geocortex.com"),"."))),Object(o.b)("p",null,"Hosting Workflow activity packs in this manner allows Geocortex Workflow Designer to read the list of custom activities and their metadata from the source files."),Object(o.b)("h4",{id:"development-web-server"},"Development Web Server"),Object(o.b)("p",null,"For ease of development, this project includes an ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/express"}),"Express")," web server that supports SSL and is suitable for most development purposes."),Object(o.b)("p",null,"To start the development web server and enable a compile-on-save watch task:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"npm start")," in the terminal to start the build and the development web server.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Note: You can press ",Object(o.b)("inlineCode",{parentName:"li"},"CTRL+C")," in the terminal to stop the watch and the development web server."),Object(o.b)("li",{parentName:"ul"},"The development web server is only available while the ",Object(o.b)("inlineCode",{parentName:"li"},"start")," task is running."),Object(o.b)("li",{parentName:"ul"},"The development web server is available at ",Object(o.b)("inlineCode",{parentName:"li"},"https://localhost:57999/")," by default.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"You can change the port by modifying ",Object(o.b)("inlineCode",{parentName:"li"},".build/tsc.js"),". Edit the first line:",Object(o.b)("br",{parentName:"li"}),Object(o.b)("inlineCode",{parentName:"li"},"var PORT = 57999;")))),Object(o.b)("li",{parentName:"ul"},"The development web server serves the content of the ",Object(o.b)("inlineCode",{parentName:"li"},"dist")," directory."),Object(o.b)("li",{parentName:"ul"},"The SSL certificate of the development web server is not valid. To work around this, do one of the following:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Open ",Object(o.b)("inlineCode",{parentName:"li"},"https://localhost:57999/")," in a web browser and allow the invalid certificate as an exception."),Object(o.b)("li",{parentName:"ul"},"Trust the ",Object(o.b)("inlineCode",{parentName:"li"},".build/ca.crt")," file (add it to your Trusted Root Authority store)."),Object(o.b)("li",{parentName:"ul"},"Replace the ",Object(o.b)("inlineCode",{parentName:"li"},".build/localhost.crt")," and ",Object(o.b)("inlineCode",{parentName:"li"},".build/localhost.key")," files with a known valid certificate."))),Object(o.b)("li",{parentName:"ul"},"The development web server supports CORS requests from any origin by default.")))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"As ",Object(o.b)("inlineCode",{parentName:"p"},"localhost")," is only accessible to your host machine, activity packs hosted in this manner will not be accessible when running Geocortex Workflow Designer on a different machine."))),Object(o.b)("h3",{id:"register-the-activity-pack"},"Register the Activity Pack"),Object(o.b)("p",null,"To make an activity pack available to workflow authors in Geocortex Workflow Designer you must create a special item in ArcGIS Online or Portal for ArcGIS that references it."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Sign in to ArcGIS Online or Portal for ArcGIS."),Object(o.b)("li",{parentName:"ol"},"Go to ",Object(o.b)("strong",{parentName:"li"},"My Content"),"."),Object(o.b)("li",{parentName:"ol"},"Select ",Object(o.b)("strong",{parentName:"li"},"Add Item")," > ",Object(o.b)("strong",{parentName:"li"},"An application"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("inlineCode",{parentName:"li"},"Web Mapping"),"."),Object(o.b)("li",{parentName:"ul"},"Purpose: ",Object(o.b)("inlineCode",{parentName:"li"},"Ready To Use"),"."),Object(o.b)("li",{parentName:"ul"},"API: ",Object(o.b)("inlineCode",{parentName:"li"},"JavaScript"),"."),Object(o.b)("li",{parentName:"ul"},"URL: The URL to your activity pack.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Use ",Object(o.b)("inlineCode",{parentName:"li"},"https://localhost:57999/")," for the development server."))),Object(o.b)("li",{parentName:"ul"},"Title: Your desired title."),Object(o.b)("li",{parentName:"ul"},"Tags: ",Object(o.b)("strong",{parentName:"li"},"Must")," include ",Object(o.b)("inlineCode",{parentName:"li"},"geocortex-workflow-activity-pack"),".")))),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The activity pack will ",Object(o.b)("strong",{parentName:"p"},"not")," be registered unless it includes the tag ",Object(o.b)("inlineCode",{parentName:"p"},"geocortex-workflow-activity-pack"),"."))),Object(o.b)("h3",{id:"sharing-the-activity-pack"},"Sharing the Activity Pack"),Object(o.b)("p",null,"As a workflow author, you will see custom activities in Geocortex Workflow Designer from the activity packs you have registered. You will also see activity packs that have been shared with you via groups you are a member of."),Object(o.b)("p",null,"To share an activity pack with other workflow authors in your organization share the ArcGIS item that represents the activity pack with a group that contains the target users."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You do not need to share activity packs with the end users of your applications that run workflows containing custom activities."))),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)(r.a,{mdxType:"UseCaseContainer"},Object(o.b)(c.a,{title:"Implement a Custom Activity",description:"Implement a custom activity for web applications",link:"sdk-web-create-activity",mdxType:"UseCaseCard"}),Object(o.b)(c.a,{title:"Implement a Custom Form Element",description:"Implement a custom form element for web applications",link:"tutorial-web-implement-star-rating-form-element",mdxType:"UseCaseCard"}),Object(o.b)(c.a,{title:"Reference a Third Party Library",description:"Reference a third party library in web applications",link:"sdk-web-reference-third-party-library",mdxType:"UseCaseCard"}),Object(o.b)(c.a,{title:"Integrate the ArcGIS API for JavaScript into custom activities",description:"Integrate the ArcGIS API for JavaScript into custom code",link:"sdk-web-integrating-the-arcgis-api",mdxType:"UseCaseCard"})))}d.isMDXComponent=!0},298:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var i=a(0),n=a.n(i),o=a(296),r=a.n(o),c=a(130),l=a.n(c);function s(e){var t=e.children;return n.a.createElement("div",{className:r()(l.a.root)},t)}},299:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));a(305);var i=a(304),n=a(0),o=a.n(n),r=a(296),c=a.n(r),l=a(131),s=a.n(l);function b(e){var t=e.title,a=e.description,n=e.link;return o.a.createElement("div",{className:c()("card-demo",s.a.root)},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card__header"},o.a.createElement("h3",null,t)),o.a.createElement("div",{className:"card__body"},o.a.createElement("p",null,a)),o.a.createElement("div",{className:"card__footer"},o.a.createElement(i.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}}}]);