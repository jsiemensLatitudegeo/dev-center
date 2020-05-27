(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{134:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return m}));var i=a(1),n=a(9),s=(a(0),a(289)),r={},o={id:"mobile/snippets/quickstart-prereqs",title:"quickstart-prereqs",description:"Checkout and setup the [Geocortex Mobile SDK Quickstart project](../sdk-overview.mdx).",source:"@site/docs/mobile/snippets/quickstart-prereqs.mdx",permalink:"/docs/mobile/snippets/quickstart-prereqs",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/quickstart-prereqs.mdx"},c=[],l={rightToc:c};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(i.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Checkout and setup the ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/mobile/sdk-overview"}),"Geocortex Mobile SDK Quickstart project"),"."))}m.isMDXComponent=!0},251:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return g}));var i=a(1),n=a(9),s=(a(0),a(289)),r=a(313),o=a(312),c=a(310),l=a(298),m=a(299),p=a(134),b={title:"Create a Service",description:"Geocortex Mobile - Create a service using the Geocortex Mobile SDK Quickstart"},u={id:"mobile/sdk-services-create",title:"Create a Service",description:"Geocortex Mobile - Create a service using the Geocortex Mobile SDK Quickstart",source:"@site/docs/mobile/sdk-services-create.mdx",permalink:"/docs/mobile/sdk-services-create",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/sdk-services-create.mdx",sidebar:"mobile",previous:{title:"Services Overview",permalink:"/docs/mobile/sdk-services-overview"},next:{title:"Service Reference",permalink:"/docs/mobile/sdk-services-reference"}},d=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Basic Service",id:"basic-service",children:[]},{value:"Create a Custom Command",id:"create-a-custom-command",children:[]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],v={rightToc:d};function g(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(i.a)({},v,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"admonition admonition-important alert alert--info"},Object(s.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(s.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"This tutorial assumes you are using windows and can run the Universal Windows Version of Geocortex Mobile."))),Object(s.b)("p",null,"Sometimes, you may have logic or data that needs to be shared by multiple components across an app. In Geocortex Mobile, ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/mobile/sdk-services-overview"}),"services")," are shared singletons that can register global ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/mobile/configuration-commands-operations"}),"commands and operations"),", be injected into components, run background tasks, and more."),Object(s.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(s.b)(p.default,{mdxType:"QuickstartPrereqsSnippet"}),Object(s.b)("h2",{id:"basic-service"},"Basic Service"),Object(s.b)("p",null,"Create a new file ",Object(s.b)("inlineCode",{parentName:"p"},"services/CustomService.cs")," under the platform agnostic project.\nIn the file, add a new service class ",Object(s.b)("inlineCode",{parentName:"p"},"CustomService")," and register it with Geocortex Mobile using an assembly attribute."),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/services/CustomService.cs',title:'"App1/App1/services/CustomService.cs'}),"using App1.Services;\nusing Geocortex.Mobile.Composition;\nusing Geocortex.Mobile.Composition.Services;\nusing System.Threading.Tasks;\n\n[assembly: Service(typeof(CustomService))]\nnamespace App1.Services\n{\n    class CustomService : ServiceBase\n    {\n        public CustomService()\n            :base()\n        {\n        }\n    }\n}\n")),Object(s.b)("h2",{id:"create-a-custom-command"},"Create a Custom Command"),Object(s.b)("p",null,"Custom Services can register custom commands and operations. The following example shows how a custom service can register a command with the ",Object(s.b)("inlineCode",{parentName:"p"},"Operations Registry"),", and how that command can be configured to run on a button press using layout and app config."),Object(s.b)(r.a,{defaultValue:"service",values:[{label:"Service",value:"service"},{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},Object(s.b)(o.a,{value:"service",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/services/CustomService.cs',title:'"App1/App1/services/CustomService.cs'}),'using App1.Services;\nusing Geocortex.Mobile.Composition;\nusing Geocortex.Mobile.Composition.Messaging;\nusing Geocortex.Mobile.Composition.Services;\nusing System.Threading.Tasks;\n\n[assembly: Service(typeof(CustomService))]\nnamespace App1.Services\n{\n    public class CustomService : ServiceBase\n    {\n        public CustomService(IOperationRegistry operationRegistry)\n            : base()\n        {\n            // highlight-start\n            operationRegistry.VoidOperation<string>("custom.alert").RegisterExecute((string customMessage) =>\n            {\n                return Xamarin.Forms.Application.Current.MainPage.DisplayAlert("Custom Alert", customMessage, "Cancel");\n            }, this);\n            // highlight-end\n\n        }\n    }\n}\n'))),Object(s.b)(o.a,{value:"layout",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',title:'"App1/App1/layout-large.xml"'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerFramework/layout/layout-mobile.xsd">\n    <map id="map1" >\n        // highlight-next-line\n        <button id="custom-alert" config="custom-alert" style="map-widget" show-title="true" margin="0.3" slot="top-center"/>\n    </map>\n</layout>\n\n'))),Object(s.b)(o.a,{value:"config",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "id": "desktop-layout",\n            "$type": "layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["medium", "large"]\n        },\n        // highlight-start\n        {\n            "id": "custom-alert",\n            "iconId": "warning",\n            "title": "Custom Alert",\n            "action": {\n                "name": "custom.alert",\n                "arguments": "My Custom Message"\n            },\n            "$type": "menu-item"\n        }\n        // highlight-end\n    ]\n}\n'))),Object(s.b)(o.a,{value:"ui",mdxType:"TabItem"},Object(s.b)("img",{src:Object(c.a)("img/mobile-sdk-services-create.png"),alt:"Custom Component with Text Block"}))),Object(s.b)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),Object(s.b)("p",null,"Check out the relevant Geocortex Mobile SDK Samples:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/Service"}),"Custom Service"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/CustomSamples/BasemapToggle"}),"Basemap Toggle that uses a Custom Service"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/CustomSamples/BreadCrumbs"}),"Breadcrumb Tracker that Uses a Custom Service")))),Object(s.b)("h2",{id:"next-steps"},"Next Steps"),Object(s.b)(l.a,{mdxType:"UseCaseContainer"},Object(s.b)(m.a,{title:"Learn More About Services",description:"Take a deep dive into services in the Geocortex Mobile SDK",link:"sdk-services-reference",mdxType:"UseCaseCard"}),Object(s.b)(m.a,{title:"Build a Service that Manages Dynamic Data",description:"Built a service that manages a dynamic data source and exposes it to components",link:"tutorial-implement-service-fetch-dynamic-data",mdxType:"UseCaseCard"})))}g.isMDXComponent=!0},298:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a(0),n=a.n(i),s=a(290),r=a.n(s),o=a(130),c=a.n(o);function l(e){var t=e.children;return n.a.createElement("div",{className:r()(c.a.root)},t)}},299:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a(300);var i=a(296),n=a(0),s=a.n(n),r=a(290),o=a.n(r),c=a(131),l=a.n(c);function m(e){var t=e.title,a=e.description,n=e.link;return s.a.createElement("div",{className:o()("card-demo",l.a.root)},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card__header"},s.a.createElement("h3",null,t)),s.a.createElement("div",{className:"card__body"},s.a.createElement("p",null,a)),s.a.createElement("div",{className:"card__footer"},s.a.createElement(i.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}}}]);