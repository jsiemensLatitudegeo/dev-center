(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{156:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return d}));var i=a(3),n=(a(0),a(243)),r=a(244),o=a(248),c=a(249);const l={title:"Geocortex Workflow TypeScript SDK Overview",sidebar_label:"SDK Overview",description:"Geocortex Workflow - Overview of extending workflow for web applications"},s={unversionedId:"workflow/sdk-web-overview",id:"workflow/sdk-web-overview",isDocsHomePage:!1,title:"Geocortex Workflow TypeScript SDK Overview",description:"Geocortex Workflow - Overview of extending workflow for web applications",source:"@site/docs/workflow/sdk-web-overview.mdx",slug:"/workflow/sdk-web-overview",permalink:"/docs/workflow/sdk-web-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/sdk-web-overview.mdx",version:"current",sidebar_label:"SDK Overview",sidebar:"workflow",previous:{title:"Key Concepts",permalink:"/docs/workflow/key-concepts"},next:{title:"Create an Activity",permalink:"/docs/workflow/sdk-web-create-activity"}},b=[{value:"Overview",id:"overview",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Project Structure",id:"project-structure",children:[]},{value:"Browser Support",id:"browser-support",children:[{value:"Update TypeScript Configuration",id:"update-typescript-configuration",children:[]},{value:"Update <code>browserslist</code>",id:"update-browserslist",children:[]}]},{value:"Development Server",id:"development-server",children:[{value:"Configuring a HTTPS Certificate",id:"configuring-a-https-certificate",children:[]}]},{value:"Deployment",id:"deployment",children:[{value:"Creating a Production Build",id:"creating-a-production-build",children:[]},{value:"Host the Activity Pack",id:"host-the-activity-pack",children:[]},{value:"Register the Activity Pack",id:"register-the-activity-pack",children:[]},{value:"Sharing the Activity Pack",id:"sharing-the-activity-pack",children:[]}]},{value:"Migrating from the Legacy SDK",id:"migrating-from-the-legacy-sdk",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],p={toc:b};function d({components:e,...t}){return Object(n.b)("wrapper",Object(i.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The Geocortex Workflow for Web Applications SDK consists of a TypeScript project that eases development of custom Workflow activities and form elements. It produces a ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/workflow/key-concepts#activity-packs"}),"Workflow activity pack")," that can be consumed by ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/workflow/key-concepts#geocortex-workflow-hosts"}),"web applications that use Workflow"),"."),Object(n.b)("h2",{id:"overview"},"Overview"),Object(n.b)("p",null,"The Geocortex Workflow SDK provides a ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-workflow-sdk/"}),"development toolkit")," for building custom Workflow activities and form elements into a package that can be deployed to Geocortex Web called an activity pack. Once the activity pack has been developed, it can then be deployed to your SaaS or on-premises environment."),Object(n.b)("h2",{id:"requirements"},"Requirements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Geocortex Workflow 5.18 or later if running on-premises."),Object(n.b)("li",{parentName:"ul"},"The latest LTS version of ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node.js"),"."),Object(n.b)("li",{parentName:"ul"},"A code editor of your choice. We recommend ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://code.visualstudio.com/"}),"Visual Studio Code"),".")),Object(n.b)("h2",{id:"getting-started"},"Getting Started"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Run ",Object(n.b)("inlineCode",{parentName:"li"},"npx @vertigis/workflow-sdk create activity-pack")," where ",Object(n.b)("inlineCode",{parentName:"li"},"activity-pack")," is the name of the directory that will be created in the current working directory",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"For example: ",Object(n.b)("inlineCode",{parentName:"li"},"npx @vertigis/workflow-sdk create test-activity-pack")))),Object(n.b)("li",{parentName:"ol"},"Open the ",Object(n.b)("inlineCode",{parentName:"li"},"activity-pack")," directory in your favorite IDE. We recommend using Visual Studio Code for the best experience."),Object(n.b)("li",{parentName:"ol"},"Run ",Object(n.b)("inlineCode",{parentName:"li"},"npm run generate")," and follow the onscreen prompts to create a new activity or form element."),Object(n.b)("li",{parentName:"ol"},"Finally run ",Object(n.b)("inlineCode",{parentName:"li"},"npm start")," to start the development server.")),Object(n.b)("h2",{id:"project-structure"},"Project Structure"),Object(n.b)("p",null,"The created project contains a few important files and directories:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"src/activities")," directory, which is where new activities and form elements will be created."),Object(n.b)("li",{parentName:"ol"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"src/index.ts")," file which exports all of your custom activities and form elements."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"uuid.js")," which maintains a globally unique identifier that will be used when you create your custom activities and form elements. This enables you to load and use multiple activity packs in a given workflow. ",Object(n.b)("strong",{parentName:"li"},"This identifier should not be modified"),".")),Object(n.b)("h2",{id:"browser-support"},"Browser Support"),Object(n.b)("p",null,"By default the Workflow SDK targets modern browsers. If you need to support Internet Explorer 11, you'll need to update a few configuration settings in your project."),Object(n.b)("h3",{id:"update-typescript-configuration"},"Update TypeScript Configuration"),Object(n.b)("p",null,"In the ",Object(n.b)("inlineCode",{parentName:"p"},"tsconfig.json")," of your project you'll need to change the ",Object(n.b)("inlineCode",{parentName:"p"},"target")," to ",Object(n.b)("inlineCode",{parentName:"p"},"es5"),":"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'}),'{\n    "extends": "@vertigis/workflow-sdk/config/tsconfig.json",\n    "compilerOptions": {\n        // highlight-next-line\n        "target": "es5"\n    },\n    "include": ["src"]\n}\n')),Object(n.b)("h3",{id:"update-browserslist"},"Update ",Object(n.b)("inlineCode",{parentName:"h3"},"browserslist")),Object(n.b)("p",null,"In the ",Object(n.b)("inlineCode",{parentName:"p"},"package.json")," of your project, you'll need to update the ",Object(n.b)("inlineCode",{parentName:"p"},"browserslist")," to include ",Object(n.b)("inlineCode",{parentName:"p"},"ie 11"),":"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:'title="package.json"',title:'"package.json"'}),'"browserslist": [\n    "last 2 chrome versions",\n    "last 2 edge versions",\n    "last 2 firefox versions",\n    "last 2 safari versions",\n    // highlight-next-line\n    "ie 11"\n]\n')),Object(n.b)("h2",{id:"development-server"},"Development Server"),Object(n.b)("p",null,"To get started with the development server, run ",Object(n.b)("inlineCode",{parentName:"p"},"npm start")," in the terminal to start the development server. Before you can use the activity pack in your workflows, you will need to ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"#register-the-activity-pack"}),"register the activity pack in your ArcGIS Portal"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The activity pack is available at ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://localhost:5000/main.js"}),Object(n.b)("inlineCode",{parentName:"a"},"https://localhost:5000/main.js"))," by default.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"You can change the port by setting the ",Object(n.b)("inlineCode",{parentName:"li"},"PORT")," environment variable when running ",Object(n.b)("inlineCode",{parentName:"li"},"npm start"),"."))),Object(n.b)("li",{parentName:"ul"},"The HTTPS certificate of the development server is a self-signed certificate that web browsers will warn about. To work around this open ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://localhost:5000/main.js"}),Object(n.b)("inlineCode",{parentName:"a"},"https://localhost:5000/main.js"))," in a web browser and allow the invalid certificate as an exception. For creating a locally-trusted HTTPS certificate see the ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"#configuring-a-https-certificate"}),"Configuring a HTTPS Certificate")," section."),Object(n.b)("li",{parentName:"ul"},"The development server supports CORS requests from any origin by default.")),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"As ",Object(n.b)("inlineCode",{parentName:"p"},"localhost")," is only accessible to your host machine, activity packs hosted in this manner will not be accessible when running Geocortex Workflow Designer on a different machine."))),Object(n.b)("h3",{id:"configuring-a-https-certificate"},"Configuring a HTTPS Certificate"),Object(n.b)("p",null,"You can create a locally-trusted development certificate that is trusted by your system using the ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/FiloSottile/mkcert"}),"mkcert")," utility. Once installed you can run:"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),'$ mkcert -install\nCreated a new local CA at "/Users/ian/Library/Application Support/mkcert" \ud83d\udca5\nThe local CA is now installed in the system trust store! \u26a1\ufe0f\nThe local CA is now installed in the Firefox trust store (requires browser restart)! \ud83e\udd8a\n\n$ mkcert localhost 127.0.0.1 ::1\nUsing the local CA at "/Users/ian/Library/Application Support/mkcert" \u2728\n\nCreated a new certificate valid for the following names \ud83d\udcdc\n - "localhost"\n - "127.0.0.1"\n - "::1"\n\nThe certificate is at "./localhost+2.pem" and the key at "./localhost+2-key.pem" \u2705\n')),Object(n.b)("p",null,"Once you've created your locally-trusted development certificate you can provide the paths to the ",Object(n.b)("inlineCode",{parentName:"p"},"cert")," and ",Object(n.b)("inlineCode",{parentName:"p"},"key")," files:"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),'$ npm start -- --cert "./localhost+2.pem" --key "./localhost+2-key.pem"\n')),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"The extra ",Object(n.b)("inlineCode",{parentName:"p"},"--")," used in the ",Object(n.b)("inlineCode",{parentName:"p"},"npm start")," script is necessary to forward the arguments to the development server process."))),Object(n.b)("h2",{id:"deployment"},"Deployment"),Object(n.b)("p",null,"Deploying Workflow activities consists of two steps:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Hosting the Workflow activity pack on a server accessible to the Geocortex Workflow Designer"),Object(n.b)("li",{parentName:"ol"},"Making the Workflow activity pack known to Geocortex Workflow Designer and Workflow Applications by registering it as an ArcGIS item.")),Object(n.b)("h3",{id:"creating-a-production-build"},"Creating a Production Build"),Object(n.b)("p",null,"Run ",Object(n.b)("inlineCode",{parentName:"p"},"npm run build")," in the root of your project to create a production build of your activity pack. This creates an optimized production build that is output to the ",Object(n.b)("inlineCode",{parentName:"p"},"build")," folder of your project."),Object(n.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(n.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"Check out ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/workflow/tutorial-web-calculate-logarithm-activity"}),"Implement Custom Activities for Web Applications")," to learn how to make activities for your activity pack."))),Object(n.b)("h3",{id:"host-the-activity-pack"},"Host the Activity Pack"),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"build")," folder produced by running ",Object(n.b)("inlineCode",{parentName:"p"},"npm run build")," can be directly hosted with the web server technology that is most appropriate for your use case, such as ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.iis.net/"}),"IIS"),".\nActivity packs must be hosted by a web server that supports HTTPS and CORS."),Object(n.b)("h4",{id:"server-requirements"},"Server Requirements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The server must have a valid HTTPS certificate."),Object(n.b)("li",{parentName:"ul"},"The server must support ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing"}),"Cross-Origin Resource Sharing (CORS)")," and allow CORS requests from the ",Object(n.b)("inlineCode",{parentName:"li"},"https://apps.geocortex.com")," origin or the origin of your Geocortex Workflow if running on-premises.")),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"If you sign in to Geocortex Workflow Designer using Portal for ArcGIS your server will need to allow CORS requests from your custom origin. For example, ",Object(n.b)("inlineCode",{parentName:"p"},"https://acme.apps.geocortex.com"),"."))),Object(n.b)("p",null,"Hosting Workflow activity packs in this manner allows Geocortex Workflow Designer to read the list of custom activities and their associated metadata."),Object(n.b)("h3",{id:"register-the-activity-pack"},"Register the Activity Pack"),Object(n.b)("p",null,"To make an activity pack available to workflow authors in Geocortex Workflow Designer you must create a special item in ArcGIS Online or Portal for ArcGIS that references it."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Sign in to ArcGIS Online or Portal for ArcGIS."),Object(n.b)("li",{parentName:"ol"},"Go to ",Object(n.b)("strong",{parentName:"li"},"My Content"),"."),Object(n.b)("li",{parentName:"ol"},"Select ",Object(n.b)("strong",{parentName:"li"},"Add Item")," > ",Object(n.b)("strong",{parentName:"li"},"An application"),".",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Type: ",Object(n.b)("inlineCode",{parentName:"li"},"Web Mapping")),Object(n.b)("li",{parentName:"ul"},"Purpose: ",Object(n.b)("inlineCode",{parentName:"li"},"Ready To Use")),Object(n.b)("li",{parentName:"ul"},"API: ",Object(n.b)("inlineCode",{parentName:"li"},"JavaScript")),Object(n.b)("li",{parentName:"ul"},"URL: The URL to your activity pack manifest",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Use ",Object(n.b)("inlineCode",{parentName:"li"},"https://localhost:5000/activitypack.json")," for the development server, or the URL to your production server hosting the activity pack such as ",Object(n.b)("inlineCode",{parentName:"li"},"https://myserver.com/custom-activity-pack/activitypack.json"),"."))),Object(n.b)("li",{parentName:"ul"},"Title: Your desired title"),Object(n.b)("li",{parentName:"ul"},"Tags: ",Object(n.b)("strong",{parentName:"li"},"Must")," include ",Object(n.b)("inlineCode",{parentName:"li"},"geocortex-workflow-activity-pack"))))),Object(n.b)("div",{className:"admonition admonition-important alert alert--info"},Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"The activity pack will ",Object(n.b)("strong",{parentName:"p"},"not")," be registered unless it includes the ",Object(n.b)("inlineCode",{parentName:"p"},"geocortex-workflow-activity-pack")," tag."))),Object(n.b)("h3",{id:"sharing-the-activity-pack"},"Sharing the Activity Pack"),Object(n.b)("p",null,"As a workflow author, you will see custom activities in Geocortex Workflow Designer from the activity packs you have registered. You will also see activity packs that have been shared with you via groups you are a member of."),Object(n.b)("p",null,"To share an activity pack with other workflow authors in your organization share the ArcGIS item that represents the activity pack with a group that contains the target users."),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"You do not need to share the activity pack Portal item with the end users of your applications that run workflows containing custom activities. It only affects the visibility of the activity pack in the Geocortex Workflow Designer."))),Object(n.b)("h2",{id:"migrating-from-the-legacy-sdk"},"Migrating from the Legacy SDK"),Object(n.b)("p",null,"If you're migrating from our previous ",Object(n.b)("inlineCode",{parentName:"p"},"activity-sdk.zip")," there are a few steps you will want to follow to migrate your source code over to the new SDK:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Follow the instructions above to ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"#getting-started"}),"create a new project")," and ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"#register-the-activity-pack"}),"register the activity pack"),"."),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Note the updated instructions to register the activity pack. The URL should end in ",Object(n.b)("inlineCode",{parentName:"li"},"/activitypack.json"),"."))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Copy the UUID value from ",Object(n.b)("inlineCode",{parentName:"p"},".build/uuid.txt")," in your existing project and overwrite the value in ",Object(n.b)("inlineCode",{parentName:"p"},"uuid.js")," of your new project.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Copy your activity and form element modules into the ",Object(n.b)("inlineCode",{parentName:"p"},"src/activities")," directory.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Add each activity and form element to the ",Object(n.b)("inlineCode",{parentName:"p"},"index.ts")," exports. For example if you copied over an activity called ",Object(n.b)("inlineCode",{parentName:"p"},"src/activities/Sum.ts"),", you would add the following to ",Object(n.b)("inlineCode",{parentName:"p"},"src/index.ts"),":"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),'export * from "./activities/Sum";\n'))))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Check your ",Object(n.b)("inlineCode",{parentName:"p"},"main.ts")," and ",Object(n.b)("inlineCode",{parentName:"p"},"init.ts")," logic in your existing project to see if any of it is still relevant. You no longer need to call ",Object(n.b)("inlineCode",{parentName:"p"},"mapDependencies()")," to use third party libraries as the new SDK will handle this for you.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Test your activity pack to ensure it still behaves as expected."))),Object(n.b)("h2",{id:"next-steps"},"Next Steps"),Object(n.b)(o.a,{mdxType:"UseCaseContainer"},Object(n.b)(c.a,{title:"Implement a Custom Activity",description:"Implement a custom activity for web applications",link:Object(r.a)("docs/workflow/sdk-web-create-activity"),mdxType:"UseCaseCard"}),Object(n.b)(c.a,{title:"Implement a Custom Form Element",description:"Implement a custom form element for web applications",link:Object(r.a)("docs/workflow/sdk-web-create-element"),mdxType:"UseCaseCard"}),Object(n.b)(c.a,{title:"Reference a Third Party Library",description:"Reference a third party library in web applications",link:Object(r.a)("docs/workflow/sdk-web-reference-third-party-library"),mdxType:"UseCaseCard"}),Object(n.b)(c.a,{title:"Integrate the ArcGIS API for JavaScript into custom activities",description:"Integrate the ArcGIS API for JavaScript into custom code",link:Object(r.a)("docs/workflow/sdk-web-integrating-the-arcgis-api"),mdxType:"UseCaseCard"})))}d.isMDXComponent=!0},243:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),m=i,u=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return a?n.a.createElement(u,c(c({ref:t},s),{},{components:a})):n.a.createElement(u,c({ref:t},s))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},244:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return o}));var i=a(21),n=a(245);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(i.default)();return{withBaseUrl:(a,i)=>function(e,t,a,{forcePrependBaseUrl:i=!1,absolute:r=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(i)return t+a;const o=a.startsWith(t)?a:t+a.replace(/^\//,"");return r?e+o:o}(t,e,a,i)}}function o(e,t={}){const{withBaseUrl:a}=r();return a(e,t)}},245:function(e,t,a){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!i(e)}a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return n}))},246:function(e,t,a){"use strict";function i(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=i(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=i(e))&&(n&&(n+=" "),n+=t);return n}},247:function(e,t,a){"use strict";var i=a(0),n=a.n(i),r=a(11),o=a(245),c=a(9);const l=Object(i.createContext)({collectLink:()=>{}});var s=a(244),b=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(a[i[n]]=e[i[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:p,href:d,activeClassName:m,isActive:u,"data-noBrokenLinkCheck":h,autoAddBaseUrl:v=!0}=e,O=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:j}=Object(s.b)(),f=Object(i.useContext)(l),w=p||d,y=Object(o.a)(w),g=null==w?void 0:w.replace("pathname://",""),N=void 0!==g?(k=g,v&&(e=>e.startsWith("/"))(k)?j(k):k):void 0;var k;const C=Object(i.useRef)(!1),x=a?r.e:r.c,S=c.a.canUseIntersectionObserver;let T;Object(i.useEffect)((()=>(!S&&y&&window.docusaurus.prefetch(N),()=>{S&&T&&T.disconnect()})),[N,S,y]);const A=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,P=!N||!y||A;return N&&y&&!A&&!h&&f.collectLink(N),P?n.a.createElement("a",Object.assign({href:N},w&&!y&&{target:"_blank",rel:"noopener noreferrer"},O)):n.a.createElement(x,Object.assign({},O,{onMouseEnter:()=>{C.current||(window.docusaurus.preload(N),C.current=!0)},innerRef:e=>{var t,a;S&&e&&y&&(t=e,a=()=>{window.docusaurus.prefetch(N)},T=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),a())}))})),T.observe(t))},to:N||""},a&&{isActive:u,activeClassName:m}))}},248:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var i=a(0),n=a.n(i),r=a(54),o=a.n(r);function c({children:e}){return n.a.createElement("div",{className:o.a.root},e)}},249:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var i=a(247),n=a(0),r=a.n(n),o=a(246),c=a(55),l=a.n(c);function s({title:e,description:t,link:a}){return r.a.createElement("div",{className:Object(o.a)("card-demo",l.a.root)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h3",null,e)),r.a.createElement("div",{className:"card__body"},r.a.createElement("p",null,t)),r.a.createElement("div",{className:"card__footer"},r.a.createElement(i.a,{className:"button button--secondary button--block",to:a},"Get Started"))))}}}]);