(window.webpackJsonp=window.webpackJsonp||[]).push([[90,79],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(9),o=(n(0),n(300)),a={},c={id:"mobile/snippets/quickstart-prereqs",isDocsHomePage:!1,title:"quickstart-prereqs",description:"Check out and setup the Geocortex Mobile SDK Quickstart project.",source:"@site/docs/mobile/snippets/quickstart-prereqs.mdx",permalink:"/docs/mobile/snippets/quickstart-prereqs",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/quickstart-prereqs.mdx"},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Check out and setup the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/mobile/sdk-overview"}),"Geocortex Mobile SDK Quickstart project"),"."))}u.isMDXComponent=!0},243:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return f}));var r=n(2),i=n(9),o=(n(0),n(300)),a=n(306),c=n(133),s=n(311),l=n(312),u={title:"Build a Custom Command",description:"Geocortex Mobile - Learn how to implement a custom command"},p={id:"mobile/tutorial-implement-command-operation",isDocsHomePage:!1,title:"Build a Custom Command",description:"Geocortex Mobile - Learn how to implement a custom command",source:"@site/docs/mobile/tutorial-implement-command-operation.mdx",permalink:"/docs/mobile/tutorial-implement-command-operation",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/tutorial-implement-command-operation.mdx",sidebar:"mobile",previous:{title:"Memory Management",permalink:"/docs/mobile/sdk-memory-leaks"},next:{title:"Build a Custom Component with UI",permalink:"/docs/mobile/tutorial-implement-component-with-ui"}},m=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create the Backing Service",id:"create-the-backing-service",children:[]},{value:"Implementing the Operation",id:"implementing-the-operation",children:[{value:"Define the Operation",id:"define-the-operation",children:[]},{value:"Register an Implementation for the Operation",id:"register-an-implementation-for-the-operation",children:[]}]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],b={rightToc:m};function f(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Geocortex Mobile has many built-in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/mobile/configuration-commands-operations"}),"Commands and Operations")," which can be chained together to build custom behaviors. If these Commands and Operations are not enough to accomplish your goal, you can use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/"}),"Geocortex Workflow")," to take custom behavior even further without writing custom code. If Workflow is still not enough to accomplish your needs, then it might be time to implement a Custom Command / Operation."))),Object(o.b)("p",null,"This article will walk you through implementing a custom command in Geocortex Mobile that displays an alert."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)(c.default,{mdxType:"PrereqsSnippet"}),Object(o.b)("h2",{id:"create-the-backing-service"},"Create the Backing Service"),Object(o.b)("p",null,"It's convention that commands and operations in Geocortex Mobile are registered and implemented by a service or component, so the first thing we will do is create a service."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a new file ",Object(o.b)("inlineCode",{parentName:"li"},"Services/AlertService.cs")," under the platform agnostic project.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"In the file, add a new service class ",Object(o.b)("inlineCode",{parentName:"li"},"AlertService")," and ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/mobile/sdk-dependency-injection"}),"register it with ",Object(o.b)("strong",{parentName:"a"},"Autofac")),".")))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/services/AlertService.cs"',title:'"App1/App1/services/AlertService.cs"'}),"using App1.Services.AlertService;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Services;\n\n// highlight-next-line\n[assembly: Service(typeof(AlertService), PropertiesAutowired = true)]\nnamespace App1.Services.AlertService\n{\n    // highlight-next-line\n    class AlertService : ServiceBase\n    {\n    }\n}\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Create a class ",Object(o.b)("inlineCode",{parentName:"li"},"Services/AlertOperations")," under the platform agnostic project.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"In the file, add a new class ",Object(o.b)("inlineCode",{parentName:"li"},"AlertOperations")," and register it with Autofac.")))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/services/AlertOperations.cs"',title:'"App1/App1/services/AlertOperations.cs"'}),"using App1.Services.AlertOperations;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Messaging;\nusing VertiGIS.Mobile.Infrastructure.Messaging;\n\n// highlight-next-line\n[assembly: Export(typeof(AlertOperations), SingleInstance = true)]\nnamespace App1.Services.AlertOperations\n{\n    // highlight-next-line\n    class AlertOperations : OperationsBase\n    {\n        public AlertOperations(IOperationRegistry operationRegistry)\n            : base(operationRegistry)\n        {\n        }\n    }\n}\n")),Object(o.b)("h2",{id:"implementing-the-operation"},"Implementing the Operation"),Object(o.b)("p",null,"Creating a new operation in Geocortex Mobile consists of two pieces:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Defining the operation's name, inputs, and outputs in the ",Object(o.b)("inlineCode",{parentName:"li"},"OperationsBase")," class"),Object(o.b)("li",{parentName:"ul"},"Registering an execution implementation in the service.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This function will be the actual code that executes when the operation is called.")))),Object(o.b)("h3",{id:"define-the-operation"},"Define the Operation"),Object(o.b)("p",null,"For this example, let's define a operation with some input and no output."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),'class AlertOperations : OperationsBase\n{\n    // highlight-next-line\n    public IVoidOperation<string> DisplayCustomAlert => GetVoidOperation<string>("custom-alert.display");\n\n    public AlertOperations(IOperationRegistry operationRegistry)\n        : base(operationRegistry)\n    {\n    }\n}\n')),Object(o.b)("h3",{id:"register-an-implementation-for-the-operation"},"Register an Implementation for the Operation"),Object(o.b)("p",null,"Next, we need to register an implementation for our operation in the ",Object(o.b)("inlineCode",{parentName:"p"},"AlertService"),"."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Add a public constructor that takes an ",Object(o.b)("inlineCode",{parentName:"li"},"AlertOperations")," to the Service.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"    [assembly: Service(typeof(Service), PropertiesAutowired = true)]\n    class AlertService : ServiceBase\n    {\n        // highlight-next-line\n        public AlertService(AlertOperations alertOperations)\n        {\n        }\n    }\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Create an implementation for displaying a custom alert and register it as an execution for the operation.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),'[assembly: Service(typeof(AlertService))]\nnamespace App1.Services\n{\n    class AlertService : ServiceBase\n    {\n        public AlertService(AlertOperations alertOperations)\n        {\n            // highlight-start\n            alertOperations.DisplayCustomAlert.RegisterExecute(\n                (args) =>\n                {\n                    Application.Current.MainPage.DisplayAlert("Custom Alert", args, "OK");\n                    return Task.FromResult((object)null);\n                }, this);\n            // highlight-end\n        }\n    }\n}\n')),Object(o.b)("p",null,"Congratulations! You just created your first custom operation. You can easily test your new operation by setting it to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/mobile/tutorial-change-default-behavior"}),"run it on map initialization"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "map-extension",\n            "id": "map1",\n            "onClick": [ "tasks.identify", "highlights.pulse", "results.display" ],\n            "onInitialized": [\n                {\n                    "name": "custom-alert.display",\n                    "arguments": "This is a custom operation!"\n                }\n            ]\n        },\n        ...\n    ]\n}\n')),Object(o.b)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),Object(o.b)("p",null,"Check out the relevant Geocortex Mobile SDK Samples:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/Operation"}),"Custom Operation"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/Service"}),"Custom Service")))),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"Commands and operations are the logical building blocks of executing custom behavior in Geocortex Mobile, but sometimes you need to take things a bit further. Creating custom components can allow you to design completely custom UI for Geocortex Mobile, and creating background services can enable the execution of tasks on an arbitrary schedule."),Object(o.b)(s.a,{mdxType:"UseCaseContainer"},Object(o.b)(l.a,{title:"Commands and Operations",description:"Learn more about commands and operations",link:Object(a.a)("docs/mobile/sdk-commands-operations"),mdxType:"UseCaseCard"}),Object(o.b)(l.a,{title:"Implement a Custom Component with UI",description:"Learn how to implement a custom component using the Geocortex Mobile SDK",link:Object(a.a)("docs/mobile/tutorial-implement-component-with-ui"),mdxType:"UseCaseCard"}),Object(o.b)(l.a,{title:"Implement a Custom Service",description:"Learn how to implement a custom service using the Geocortex Mobile SDK",link:Object(a.a)("docs/mobile/sdk-services-create"),mdxType:"UseCaseCard"})))}f.isMDXComponent=!0},300:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(a,".").concat(b)]||p[b]||m[b]||o;return n?i.a.createElement(f,c(c({ref:t},l),{},{components:n})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},301:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return r}))},302:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},303:function(e,t,n){var r=n(81),i=n(55).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},304:function(e,t,n){t.f=n(3)},305:function(e,t,n){"use strict";var r=n(0),i=n(53);t.a=function(){return Object(r.useContext)(i.a)}},306:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(78);var r=n(305),i=n(301);function o(e,t){var n=void 0===t?{}:t,o=n.forcePrependBaseUrl,a=void 0!==o&&o,c=n.absolute,s=void 0!==c&&c,l=Object(r.a)().siteConfig,u=(l=void 0===l?{}:l).baseUrl,p=void 0===u?"/":u,m=l.url;if(!e)return e;if(a)return p+e;if(!Object(i.a)(e))return e;var b=p+e.replace(/^\//,"");return s?m+b:b}},307:function(e,t,n){"use strict";n(54),n(308),n(316);var r=n(0),i=n.n(r),o=n(41),a=n(301),c=n(16),s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){var t,n=e.isNavLink,l=s(e,["isNavLink"]),u=l.to,p=l.href,m=u||p,b=Object(a.a)(m),f=Object(r.useRef)(!1),d=n?o.c:o.b,h=c.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!h&&b&&window.docusaurus.prefetch(m),function(){h&&t&&t.disconnect()}}),[m,h,b]),m&&b&&!m.startsWith("#")?i.a.createElement(d,Object.assign({},l,{onMouseEnter:function(){f.current||(window.docusaurus.preload(m),f.current=!0)},innerRef:function(e){var n,r;h&&e&&b&&(n=e,r=function(){window.docusaurus.prefetch(m)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:m})):i.a.createElement("a",Object.assign({href:m},!b&&{target:"_blank",rel:"noopener noreferrer"},l))}},308:function(e,t,n){"use strict";var r=n(12),i=n(30),o=n(309),a="".startsWith;r(r.P+r.F*n(310)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return a?a.call(t,r,n):t.slice(n,n+r.length)===r}})},309:function(e,t,n){var r=n(79),i=n(29);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},310:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(i){}}return!0}},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),i=n.n(r),o=n(129),a=n.n(o);function c(e){var t=e.children;return i.a.createElement("div",{className:a.a.root},t)}},312:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(313);var r=n(307),i=n(0),o=n.n(i),a=n(302),c=n(130),s=n.n(c);function l(e){var t=e.title,n=e.description,i=e.link;return o.a.createElement("div",{className:Object(a.a)("card-demo",s.a.root)},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card__header"},o.a.createElement("h3",null,t)),o.a.createElement("div",{className:"card__body"},o.a.createElement("p",null,n)),o.a.createElement("div",{className:"card__footer"},o.a.createElement(r.a,{className:"button button--secondary button--block",to:i},"Get Started"))))}},313:function(e,t,n){"use strict";n(321)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},314:function(e,t,n){var r=n(51),i=n(52),o=n(28),a=n(76),c=n(27),s=n(80),l=Object.getOwnPropertyDescriptor;t.f=n(10)?l:function(e,t){if(e=o(e),t=a(t,!0),s)try{return l(e,t)}catch(n){}if(c(e,t))return i(!r.f.call(e,t),e[t])}},315:function(e,t,n){var r=n(22);e.exports=Array.isArray||function(e){return"Array"==r(e)}},316:function(e,t,n){"use strict";var r=n(6),i=n(27),o=n(10),a=n(12),c=n(15),s=n(317).KEY,l=n(13),u=n(42),p=n(43),m=n(39),b=n(3),f=n(304),d=n(318),h=n(319),O=n(315),g=n(8),v=n(14),y=n(31),j=n(28),S=n(76),w=n(52),x=n(82),N=n(320),C=n(314),A=n(77),k=n(26),E=n(21),M=C.f,P=k.f,I=N.f,D=r.Symbol,G=r.JSON,T=G&&G.stringify,R=b("_hidden"),q=b("toPrimitive"),F={}.propertyIsEnumerable,B=u("symbol-registry"),U=u("symbols"),K=u("op-symbols"),_=Object.prototype,L="function"==typeof D&&!!A.f,W=r.QObject,V=!W||!W.prototype||!W.prototype.findChild,z=o&&l((function(){return 7!=x(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=M(_,t);r&&delete _[t],P(e,t,n),r&&e!==_&&P(_,t,r)}:P,J=function(e){var t=U[e]=x(D.prototype);return t._k=e,t},X=L&&"symbol"==typeof D.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof D},Y=function(e,t,n){return e===_&&Y(K,t,n),g(e),t=S(t,!0),g(n),i(U,t)?(n.enumerable?(i(e,R)&&e[R][t]&&(e[R][t]=!1),n=x(n,{enumerable:w(0,!1)})):(i(e,R)||P(e,R,w(1,{})),e[R][t]=!0),z(e,t,n)):P(e,t,n)},H=function(e,t){g(e);for(var n,r=h(t=j(t)),i=0,o=r.length;o>i;)Y(e,n=r[i++],t[n]);return e},Q=function(e){var t=F.call(this,e=S(e,!0));return!(this===_&&i(U,e)&&!i(K,e))&&(!(t||!i(this,e)||!i(U,e)||i(this,R)&&this[R][e])||t)},$=function(e,t){if(e=j(e),t=S(t,!0),e!==_||!i(U,t)||i(K,t)){var n=M(e,t);return!n||!i(U,t)||i(e,R)&&e[R][t]||(n.enumerable=!0),n}},Z=function(e){for(var t,n=I(j(e)),r=[],o=0;n.length>o;)i(U,t=n[o++])||t==R||t==s||r.push(t);return r},ee=function(e){for(var t,n=e===_,r=I(n?K:j(e)),o=[],a=0;r.length>a;)!i(U,t=r[a++])||n&&!i(_,t)||o.push(U[t]);return o};L||(c((D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor!");var e=m(arguments.length>0?arguments[0]:void 0),t=function(n){this===_&&t.call(K,n),i(this,R)&&i(this[R],e)&&(this[R][e]=!1),z(this,e,w(1,n))};return o&&V&&z(_,e,{configurable:!0,set:t}),J(e)}).prototype,"toString",(function(){return this._k})),C.f=$,k.f=Y,n(303).f=N.f=Z,n(51).f=Q,A.f=ee,o&&!n(40)&&c(_,"propertyIsEnumerable",Q,!0),f.f=function(e){return J(b(e))}),a(a.G+a.W+a.F*!L,{Symbol:D});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ne=0;te.length>ne;)b(te[ne++]);for(var re=E(b.store),ie=0;re.length>ie;)d(re[ie++]);a(a.S+a.F*!L,"Symbol",{for:function(e){return i(B,e+="")?B[e]:B[e]=D(e)},keyFor:function(e){if(!X(e))throw TypeError(e+" is not a symbol!");for(var t in B)if(B[t]===e)return t},useSetter:function(){V=!0},useSimple:function(){V=!1}}),a(a.S+a.F*!L,"Object",{create:function(e,t){return void 0===t?x(e):H(x(e),t)},defineProperty:Y,defineProperties:H,getOwnPropertyDescriptor:$,getOwnPropertyNames:Z,getOwnPropertySymbols:ee});var oe=l((function(){A.f(1)}));a(a.S+a.F*oe,"Object",{getOwnPropertySymbols:function(e){return A.f(y(e))}}),G&&a(a.S+a.F*(!L||l((function(){var e=D();return"[null]"!=T([e])||"{}"!=T({a:e})||"{}"!=T(Object(e))}))),"JSON",{stringify:function(e){for(var t,n,r=[e],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=t=r[1],(v(t)||void 0!==e)&&!X(e))return O(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!X(t))return t}),r[1]=t,T.apply(G,r)}}),D.prototype[q]||n(11)(D.prototype,q,D.prototype.valueOf),p(D,"Symbol"),p(Math,"Math",!0),p(r.JSON,"JSON",!0)},317:function(e,t,n){var r=n(39)("meta"),i=n(14),o=n(27),a=n(26).f,c=0,s=Object.isExtensible||function(){return!0},l=!n(13)((function(){return s(Object.preventExtensions({}))})),u=function(e){a(e,r,{value:{i:"O"+ ++c,w:{}}})},p=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,r)){if(!s(e))return"F";if(!t)return"E";u(e)}return e[r].i},getWeak:function(e,t){if(!o(e,r)){if(!s(e))return!0;if(!t)return!1;u(e)}return e[r].w},onFreeze:function(e){return l&&p.NEED&&s(e)&&!o(e,r)&&u(e),e}}},318:function(e,t,n){var r=n(6),i=n(17),o=n(40),a=n(304),c=n(26).f;e.exports=function(e){var t=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:a.f(e)})}},319:function(e,t,n){var r=n(21),i=n(77),o=n(51);e.exports=function(e){var t=r(e),n=i.f;if(n)for(var a,c=n(e),s=o.f,l=0;c.length>l;)s.call(e,a=c[l++])&&t.push(a);return t}},320:function(e,t,n){var r=n(28),i=n(303).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return a&&"[object Window]"==o.call(e)?function(e){try{return i(e)}catch(t){return a.slice()}}(e):i(r(e))}},321:function(e,t,n){var r=n(12),i=n(13),o=n(29),a=/"/g,c=function(e,t,n,r){var i=String(o(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),c+">"+i+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}}}]);