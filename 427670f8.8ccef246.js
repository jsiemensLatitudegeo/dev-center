(window.webpackJsonp=window.webpackJsonp||[]).push([[38,90],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var o=n(3),a=(n(0),n(243)),i=n(244),r=n(70),c=n(249),s=n(248);const l={title:"SDK Overview",description:"Geocortex Mobile - Learn how to get started with the Geocortex Mobile SDK"},d={unversionedId:"mobile/sdk-overview",id:"mobile/sdk-overview",isDocsHomePage:!1,title:"SDK Overview",description:"Geocortex Mobile - Learn how to get started with the Geocortex Mobile SDK",source:"@site/docs/mobile/sdk-overview.mdx",slug:"/mobile/sdk-overview",permalink:"/docs/mobile/sdk-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/sdk-overview.mdx",version:"current",sidebar:"mobile",previous:{title:"Implement a Custom Activity",permalink:"/docs/mobile/tutorial-implement-custom-activity"},next:{title:"Edit the Layout and App Config",permalink:"/docs/mobile/sdk-edit-layout-app-config"}},b=[{value:"Overview",id:"overview",children:[]},{value:"Extension Points",id:"extension-points",children:[{value:"Components",id:"components",children:[]},{value:"Services",id:"services",children:[]},{value:"Commands and Operations",id:"commands-and-operations",children:[]}]},{value:"Application Interactions",id:"application-interactions",children:[]},{value:"Requirements",id:"requirements",children:[{value:"Windows",id:"windows",children:[]},{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]}]},{value:"Getting Up and Running",id:"getting-up-and-running",children:[{value:"Build and run for Windows 10",id:"build-and-run-for-windows-10",children:[]},{value:"Build and run for Android",id:"build-and-run-for-android",children:[]},{value:"Build and run for iOS",id:"build-and-run-for-ios",children:[]}]},{value:"Anatomy of the Quickstart",id:"anatomy-of-the-quickstart",children:[{value:"Geocortex Mobile SDK Packages",id:"geocortex-mobile-sdk-packages",children:[]}]},{value:"Development Patterns",id:"development-patterns",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],p={toc:b};function u({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If the built-in configurability of Geocortex Mobile does not serve your purposes, then it might be time to dive into the Geocortex Mobile SDK. Building applications on top of the Geocortex Mobile SDK requires engaging in the development, testing, and deployment of custom code, so it's worthwhile to make sure your problem cannot be solved ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/overview"}),"with workflow or other advanced configuration"),"."),Object(a.b)("p",null,"If you still think you need to use the Geocortex Mobile SDK, then let's get started!"),Object(a.b)(r.default,{mdxType:"DesignerCallout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"The Geocortex Mobile SDK provides ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#geocortex-mobile-sdk-packages"}),"various nuget packages")," for building a custom Geocortex Mobile application. Applications can extend Geocortex Mobile by developing custom components, services, commands and operations, and more using these packages."),Object(a.b)("h2",{id:"extension-points"},"Extension Points"),Object(a.b)("p",null,"There are three main extension points in the SDK:"),Object(a.b)("h3",{id:"components"},"Components"),Object(a.b)("p",null,"Components power the UI experience of Geocortex Mobile. Components usually consist of a C# class registered with Geocortex Mobile that has an associated XAML view. Layout files are composed of a nested hierarchy of components which are instantiated at runtime."),Object(a.b)("h3",{id:"services"},"Services"),Object(a.b)("p",null,"Services provide the shared infrastructure and core logic that power app behavior. Services do not have an associated UI, and there is only one instance of a service per application."),Object(a.b)("h3",{id:"commands-and-operations"},"Commands and Operations"),Object(a.b)("p",null,"Commands and operations provide a framework for executing application wide behavior. Services and components can both run and implement commands and operations, allowing for interaction and consistent behavior without tight coupling. Commands and operations can also be run ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/tutorial-configure-button-click"}),"in the app config")," and by ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-command.htm"}),"Workflows"),". This can allow you to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/tutorial-change-default-behavior"}),"customize the behavior of built-in components"),"."),Object(a.b)("h2",{id:"application-interactions"},"Application Interactions"),Object(a.b)("p",null,"Components, services, and commands and operations interact to form a Geocortex Mobile Application."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Services are used to implement application wide behavior, such as theming or authentication, and then expose that logic through commands and operations, such as ",Object(a.b)("inlineCode",{parentName:"li"},"ui.set-theme")," (implemented by the ",Object(a.b)("inlineCode",{parentName:"li"},"BrandingService"),") or ",Object(a.b)("inlineCode",{parentName:"li"},"auth.sign")," (implemented by the ",Object(a.b)("inlineCode",{parentName:"li"},"AuthenticationService"),")."),Object(a.b)("li",{parentName:"ul"},"Components can run commands and operations to interact with services or other components. Components can also implement commands and operations to allow themselves to be affected by other services and components."),Object(a.b)("li",{parentName:"ul"},"Component and service interaction through commands and operations is preferred, but components and services can also be tightly coupled to each other through ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/mobile/sdk-dependency-injection"}),"dependency injection"),".")),Object(a.b)("h2",{id:"requirements"},"Requirements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Visual Studio 2019 or higher on Windows is the only officially supported development environment for the Geocortex Mobile SDK. Other development environments may be possible, but have not been verified.")),Object(a.b)("h3",{id:"windows"},"Windows"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Windows 10 - To run the app on Windows 10, you must have Fall Creators Update installed on your Windows development PC.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"The SDK targets Windows 10, version 1809 (10.0; Build 17763) or later.")))),Object(a.b)("h3",{id:"ios"},"iOS"),Object(a.b)("p",null,"To be able to build iOS applications, you must have a Mac; Windows cannot build iOS applications.",Object(a.b)("br",{parentName:"p"}),"\n","Setup is required to allow Visual Studio on Windows to use the Mac to build the iOS project."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"See: ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/xamarin/ios/get-started/installation/windows/"}),"iOS Build on Windows"))),Object(a.b)("p",null,"Required software on the Mac:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"XCode"),Object(a.b)("li",{parentName:"ul"},"Visual Studio for Mac")),Object(a.b)("p",null,"See the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/ios/deploy-test/"}),"Xamarin guide")," on deploying and testing iOS apps for more details."),Object(a.b)("h3",{id:"android"},"Android"),Object(a.b)("p",null,"No extra setup is required. You can install your emulator of choice, or debug on a physical device. See the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/android/deploy-test/"}),"Xamarin guide")," on deploying and testing Android apps for more detail."),Object(a.b)("h2",{id:"getting-up-and-running"},"Getting Up and Running"),Object(a.b)("p",null,"A ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-quickstart"}),"Geocortex Mobile Quickstart")," is provided, which is a basic Geocortex Mobile application. This Quickstart is essentially a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/get-started/Quickstarts/single-page?pivots=windows"}),"Xamarin Forms Quickstart Application")," that initializes and boots Geocortex Mobile on each platform. To get up and running, simply check out the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-quickstart"}),"Mobile Quickstart Repository")," and start the solution on the appropriate platform."),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Geocortex Mobile is built on ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/"}),"Xamarin Forms"),", a framework for building cross platform native apps. As a consequence, building non trivial extensions to Geocortex Mobile will require some Xamarin development knowledge."))),Object(a.b)("h3",{id:"build-and-run-for-windows-10"},"Build and run for Windows 10"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Set ",Object(a.b)("strong",{parentName:"li"},"App1.UWP")," as your startup project."),Object(a.b)("li",{parentName:"ul"},"Change the architecture from ",Object(a.b)("em",{parentName:"li"},"Any CPU")," to ",Object(a.b)("em",{parentName:"li"},"x86")," or ",Object(a.b)("em",{parentName:"li"},"x64"),"."),Object(a.b)("li",{parentName:"ul"},"Build and run.")),Object(a.b)("h3",{id:"build-and-run-for-android"},"Build and run for Android"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Set ",Object(a.b)("strong",{parentName:"li"},"App1.Android")," as your startup project."),Object(a.b)("li",{parentName:"ul"},"Choose your target device or emulator from the run dropdown in the toolbar.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Please note that building and deploying to an emulator is faster than using a device."))),Object(a.b)("li",{parentName:"ul"},"Build and run.")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"This build can also be run from Visual Studio for Mac."))),Object(a.b)("h3",{id:"build-and-run-for-ios"},"Build and run for iOS"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Set ",Object(a.b)("strong",{parentName:"li"},"App1.iOS")," as your startup project."),Object(a.b)("li",{parentName:"ul"},"Ensure you are ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/xamarin/ios/get-started/installation/windows/connecting-to-mac/"}),"paired with a Mac")),Object(a.b)("li",{parentName:"ul"},"Choose your target device (must be plugged into Mac) or simulator from the run dropdown in the toolbar.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Please note that building and deploying to a simulator is faster than using a device."))),Object(a.b)("li",{parentName:"ul"},"Build and run.")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"This build can also be run from Visual Studio for Mac."))),Object(a.b)("h2",{id:"anatomy-of-the-quickstart"},"Anatomy of the Quickstart"),Object(a.b)("p",null,"The Quickstart is composed of four projects, one for each platform, and a common project that is shared by all platforms. This is a standard Xamarin Forms setup, as described ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/get-started/Quickstarts/deepdive?pivots=windows#anatomy-of-a-xamarinforms-application"}),"in their documentation"),". Changes have been made to each project to support the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-quickstart-reference#entry-points"}),"bootstrapping of a Geocortex Mobile application")," using the SDK."),Object(a.b)("h3",{id:"geocortex-mobile-sdk-packages"},"Geocortex Mobile SDK Packages"),Object(a.b)("p",null,"The Geocortex Mobile SDK is composed of Geocortex packages:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Vertigis Mobile"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"This package is the heart of the Mobile SDK, and powers the interface and interactions of a Mobile Xamarin Application."),Object(a.b)("li",{parentName:"ul"},"This package includes the ",Object(a.b)("inlineCode",{parentName:"li"},"VertiGIS.ArcGISExtensions")," namespace, an API for working with foundational Geocortex models, configuration, Esri's ArcGIS types, etc."),Object(a.b)("li",{parentName:"ul"},"This package includes the ",Object(a.b)("inlineCode",{parentName:"li"},"VertiGIS.Mobile.Workflow")," namespace, which includes components and renderers for Geocortex Workflow controls in a Mobile app."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Geocortex Workflow"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Geocortex Mobile heavily relies on ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/workflow/overview"}),"Geocortex Workflow")," to power its functionality."),Object(a.b)("li",{parentName:"ul"},"Geocortex Workflow is itself composed of many packages (Image Activities, GIS, Runtime).")))),Object(a.b)("h2",{id:"development-patterns"},"Development Patterns"),Object(a.b)("p",null,"For the most part, the Geocortex Mobile project follows the development practices outlined in ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/enterprise-application-patterns/"}),"Enterprise Application Patterns using Xamarin.Forms"),"."),Object(a.b)("p",null,"One major deviation from usual Xamarin Development patterns is that ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://autofac.org/"}),"Autofac")," is used as the Dependency Injection framework."),Object(a.b)("h2",{id:"next-steps"},"Next Steps"),Object(a.b)(s.a,{mdxType:"UseCaseContainer"},Object(a.b)(c.a,{title:"Create a Component",description:"Learn how to create a basic component",link:Object(i.a)("docs/mobile/sdk-components-create"),mdxType:"UseCaseCard"}),Object(a.b)(c.a,{title:"Create a Service",description:"Learn how to create a basic service",link:Object(i.a)("docs/mobile/sdk-services-create"),mdxType:"UseCaseCard"}),Object(a.b)(c.a,{title:"Deploy your Application",description:"Learn how to deploy your custom library, layout and app config",link:Object(i.a)("docs/mobile/sdk-deployment"),mdxType:"UseCaseCard"})))}u.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),u=o,m=b["".concat(r,".").concat(u)]||b[u]||p[u]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},244:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var o=n(21),a=n(245);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(o.default)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(o)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+r:r}(t,e,n,o)}}function r(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},245:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}))},246:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},247:function(e,t,n){"use strict";var o=n(0),a=n.n(o),i=n(11),r=n(245),c=n(9);const s=Object(o.createContext)({collectLink:()=>{}});var l=n(244),d=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};t.a=function(e){var t,{isNavLink:n,to:b,href:p,activeClassName:u,isActive:m,"data-noBrokenLinkCheck":h,autoAddBaseUrl:f=!0}=e,O=d(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(l.b)(),j=Object(o.useContext)(s),g=b||p,w=Object(r.a)(g),y=null==g?void 0:g.replace("pathname://",""),N=void 0!==y?(x=y,f&&(e=>e.startsWith("/"))(x)?v(x):x):void 0;var x;const k=Object(o.useRef)(!1),M=n?i.e:i.c,S=c.a.canUseIntersectionObserver;let C;Object(o.useEffect)((()=>(!S&&w&&window.docusaurus.prefetch(N),()=>{S&&C&&C.disconnect()})),[N,S,w]);const G=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,A=!N||!w||G;return N&&w&&!G&&!h&&j.collectLink(N),A?a.a.createElement("a",Object.assign({href:N},g&&!w&&{target:"_blank",rel:"noopener noreferrer"},O)):a.a.createElement(M,Object.assign({},O,{onMouseEnter:()=>{k.current||(window.docusaurus.preload(N),k.current=!0)},innerRef:e=>{var t,n;S&&e&&w&&(t=e,n=()=>{window.docusaurus.prefetch(N)},C=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(C.unobserve(t),C.disconnect(),n())}))})),C.observe(t))},to:N||""},n&&{isActive:m,activeClassName:u}))}},248:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(0),a=n.n(o),i=n(54),r=n.n(i);function c({children:e}){return a.a.createElement("div",{className:r.a.root},e)}},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(247),a=n(0),i=n.n(a),r=n(246),c=n(55),s=n.n(c);function l({title:e,description:t,link:n}){return i.a.createElement("div",{className:Object(r.a)("card-demo",s.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,e)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,t)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(o.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(3),a=(n(0),n(243));const i={},r={unversionedId:"mobile/snippets/designer-callout",id:"mobile/snippets/designer-callout",isDocsHomePage:!1,title:"designer-callout",description:"The Geocortex Mobile Designer allows you to edit your application's layout, configure custom behaviors for buttons and other UI components, and solve complex business problems through Geocortex Workflow. Many use cases can be solved through the Geocortex Mobile Designer and don't require custom development.",source:"@site/docs/mobile/snippets/designer-callout.mdx",slug:"/mobile/snippets/designer-callout",permalink:"/docs/mobile/snippets/designer-callout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/designer-callout.mdx",version:"current"},c=[],s={toc:c};function l({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Have you explored the Geocortex Mobile Designer?")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://apps.geocortex.com/mobileviewer/designer/"}),"Geocortex Mobile Designer")," allows you to edit your application's layout, configure custom behaviors for buttons and other UI components, and solve complex business problems through ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/workflow/overview"}),"Geocortex Workflow"),". Many use cases can be solved through the Geocortex Mobile Designer and don't require custom development."))))}l.isMDXComponent=!0}}]);