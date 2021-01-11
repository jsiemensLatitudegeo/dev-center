(window.webpackJsonp=window.webpackJsonp||[]).push([[70,11,142],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return h}));var a=n(3),o=(n(0),n(243)),i=n(244),c=n(252),r=n(253),l=n(249),s=n(248),p=n(67),m=n(75);const b={title:"App Config",sidebar_label:"Getting Started",description:"Geocortex Mobile - Learn about Geocortex Mobile's configuration concepts"},u={unversionedId:"mobile/configuration-app-config-getting-started",id:"mobile/configuration-app-config-getting-started",isDocsHomePage:!1,title:"App Config",description:"Geocortex Mobile - Learn about Geocortex Mobile's configuration concepts",source:"@site/docs/mobile/configuration-app-config-getting-started.mdx",slug:"/mobile/configuration-app-config-getting-started",permalink:"/docs/mobile/configuration-app-config-getting-started",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/configuration-app-config-getting-started.mdx",version:"current",sidebar_label:"Getting Started",sidebar:"mobile",previous:{title:"Advanced Model Binding",permalink:"/docs/mobile/configuration-advanced-model-binding"},next:{title:"App Config Reference",permalink:"/docs/mobile/configuration-app-config-reference"}},d=[{value:"Anatomy of an App config",id:"anatomy-of-an-app-config",children:[]},{value:"Linking Layout to App Config",id:"linking-layout-to-app-config",children:[]},{value:"Targeting Components by ID",id:"targeting-components-by-id",children:[]},{value:"Example: Basic App Config with IWTM",id:"example-basic-app-config-with-iwtm",children:[]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps: Commands and Operations",id:"next-steps-commands-and-operations",children:[]}],f={toc:d};function h({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},f,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Before learning about app config...")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Check out the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/key-concepts"}),"Key Concepts"),"."))),Object(o.b)("p",null,"While ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-layout-getting-started"}),"layouts")," depict the visual structure of how components are going to appear in the viewer, ",Object(o.b)("strong",{parentName:"p"},"app config")," is used to define the functional structure within a given component."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Think of the app config as the structural materials for building a house (wood, bricks, etc.) and the layout as the blueprints for the house.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The materials are the fundamental building blocks that create the house itself, and the blueprints allow for them to be structured together into something that people can interact with."))),Object(o.b)("p",null,"Every component within the viewer that requires functional, compositional content needs to be configured within the viewer's corresponding app config."),Object(o.b)(m.default,{mdxType:"FollowAlongSnippet"}),Object(o.b)("h2",{id:"anatomy-of-an-app-config"},"Anatomy of an App config"),Object(o.b)(p.default,{mdxType:"AppItemSnippet"}),Object(o.b)("h2",{id:"linking-layout-to-app-config"},"Linking Layout to App Config"),Object(o.b)("p",null,"Every component in the layout can be linked to app config with the ",Object(o.b)("inlineCode",{parentName:"p"},"config")," attribute. The ",Object(o.b)("inlineCode",{parentName:"p"},"config")," attribute is used to identify the item in the app config that has configuration for the component."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you do not provide a ",Object(o.b)("inlineCode",{parentName:"p"},"config")," attribute for a component, Geocortex Mobile will attempt to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-components-reference#component-defaults"}),"infer a default value"),"."))),Object(o.b)(c.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"}],mdxType:"Tabs"},Object(o.b)(r.a,{value:"layout",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    // highlight-next-line\n    <map config="my-map-config" />\n</layout>\n'))),Object(o.b)(r.a,{value:"config",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "map-extension",\n            // highlight-next-line\n            "id": "my-map-config",\n            "onInitialized": [\n                {\n                    "name": "ui.alert",\n                    "arguments": {\n                        "message": "Hello World"\n                    }\n                }\n            ]\n        }\n    ]\n}\n')))),Object(o.b)("h2",{id:"targeting-components-by-id"},"Targeting Components by ID"),Object(o.b)("p",null,"Every component can also have an ",Object(o.b)("inlineCode",{parentName:"p"},"id")," attribute. The ",Object(o.b)("inlineCode",{parentName:"p"},"id")," attribute uniquely identifies a component within a layout and allows app items to target the component. The ID can be used by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-commands-operations"}),"commands")," like ",Object(o.b)("inlineCode",{parentName:"p"},"ui.activate")," to target components, or by commands like ",Object(o.b)("inlineCode",{parentName:"p"},"run.workflow")," to target a host container component to display workflow UI within."),Object(o.b)(c.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},Object(o.b)(r.a,{value:"layout",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1"\n        xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    // highlight-next-line\n    <gxm:taskbar orientation="vertical" id="taskbar">\n        <map config="default" slot="main">\n            <button icon="info" config="run-workflow" slot="top-center-visible" margin="0.5">Run Workflow in Taskbar</button>\n            <button config="open-dialog" slot="bottom-center-visible" margin="0.5">Open Dialog</button>\n        </map>\n    </gxm:taskbar>\n      // highlight-next-line\n    <dialog id="dialog" active="false">\n        <panel>\n            <button icon="info" config="run-workflow" slot="top-center-visible" margin="0.5">Run Workflow in Taskbar</button>\n        </panel>\n    </dialog>\n</layout>\n'))),Object(o.b)(r.a,{value:"config",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "map-extension",\n            "id": "default"\n        },\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "workflow",\n            "id": "demo-workflow",\n            "title": "Demo Workflow",\n            // highlight-next-line\n            "target": "#taskbar",\n            "portalItem": "c3964768dfa84fe5acf7a72ef95dc92b"\n        },\n        {\n            "$type": "menu-item",\n            "id": "run-workflow",\n            "title": "run.workflow",\n            "isEnabled": true,\n            "iconId": "info",\n            "action": {\n                "name": "workflow.run",\n                "arguments": {\n                    "id": "demo-workflow"\n                }\n            }\n        },\n        {\n            "$type": "menu-item",\n            "id": "open-dialog",\n            "title": "Open Dialog",\n            "isEnabled": true,\n            "iconId": "",\n            "action": {\n                "name": "ui.activate",\n                // highlight-next-line\n                "arguments": "dialog"\n            }\n        }\n    ]\n}\n'))),Object(o.b)(r.a,{value:"ui",mdxType:"TabItem"},Object(o.b)("img",{src:Object(i.a)("img/mobile-config-id-targeting.png")}))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This example uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-commands-operations"}),"commands and operations")," to power its behavior."))),Object(o.b)("h2",{id:"example-basic-app-config-with-iwtm"},"Example: Basic App Config with IWTM"),Object(o.b)("p",null,"The I Want To Menu (IWTM) gets its functional structure from the app (list items and their functionalities) and its visual structure from the layout."),Object(o.b)("p",null,"In the following example, the app structures a menu with one button, and the layout creates the IWTM button in the viewer and populates its contents with the corresponding 'menu' item in the app."),Object(o.b)(c.a,{defaultValue:"app",values:[{label:"App Config",value:"app"},{label:"Layout",value:"layout"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},Object(o.b)(r.a,{value:"app",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm",\n            "items": [\n                {\n                    "title": "Refresh App",\n                    "isEnabled": true,\n                    "iconId": "sync",\n                    "action": "app.refresh"\n                },\n                {\n                    "title": "Display Debug Console",\n                    "isEnabled": true,\n                    "iconId": "debug",\n                    "action": ["debug-console.display"]\n                }\n            ]\n        }\n    ]\n}\n'))),Object(o.b)(r.a,{value:"layout",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',title:'"App1/App1/layout-large.xml"'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n    \x3c!-- Taskbar main content --\x3e\n    <map slot="main">\n      <stack margin="0.8" slot="top-right" halign="end">\n        <iwtm config="iwtm" >\n          <user slot="bottom"/>\n        </iwtm>\n      </stack>\n    </map>\n  </gxm:taskbar>\n</layout>\n'))),Object(o.b)(r.a,{value:"ui",mdxType:"TabItem"},Object(o.b)("img",{src:Object(i.a)("img/mobile-iwtm-config.png")}))),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"<iwtm>")," Component in the layout is bound to the IWTM configuration by the attribute ",Object(o.b)("inlineCode",{parentName:"p"},'config="iwtm"'),", where ",Object(o.b)("inlineCode",{parentName:"p"},"iwtm")," corresponds to the ID of the IWTM configuration. All components can be bound to config in this manner, and multiple components can be bound to the same configuration."),Object(o.b)("p",null,"Each app item has a different ",Object(o.b)("inlineCode",{parentName:"p"},"$type")," and different configurable properties associated with it. The example application has two items in the app config:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"A layout ",Object(o.b)("inlineCode",{parentName:"li"},"$type")," item which serves as a default layout and references a ",Object(o.b)("inlineCode",{parentName:"li"},"layout-*.xml")," file"),Object(o.b)("li",{parentName:"ol"},"A menu ",Object(o.b)("inlineCode",{parentName:"li"},"$type")," item which provides config for the I Want To Menu in the layout")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The functionality of the ",Object(o.b)("inlineCode",{parentName:"p"},"config")," attribute is dependent on the fact that IDs across app items of the same type are unique. That is, two items of types ",Object(o.b)("inlineCode",{parentName:"p"},"layer-extension")," and ",Object(o.b)("inlineCode",{parentName:"p"},"map-extension")," can both have the ID ",Object(o.b)("inlineCode",{parentName:"p"},"default"),", but two items of the same type ",Object(o.b)("inlineCode",{parentName:"p"},"layer-extension")," cannot have the same ID ",Object(o.b)("inlineCode",{parentName:"p"},"default"),"."))),Object(o.b)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),Object(o.b)("p",null,"The Geocortex Mobile SDK Samples project has a variety of app configuration samples:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration"}),"App Configuration Samples"))),Object(o.b)("h2",{id:"next-steps-commands-and-operations"},"Next Steps: Commands and Operations"),Object(o.b)("p",null,"This example demonstrated a simple application which has a single menu, but the pattern of loosely coupling layout components with items in app config can allow you to build powerful apps with multiple layouts for different form factors and use cases. What we didn't cover in this example was how the menu items are powered. How can we make a menu item, and more generically, a button press or other app interaction, power actions in the application? The answer is to link app items to commands and operations."),Object(o.b)(s.a,{mdxType:"UseCaseContainer"},Object(o.b)(l.a,{title:"Commands and Operations",description:"Learn about Commands and Operations and how to configure them.",link:Object(i.a)("docs/mobile/configuration-commands-operations"),mdxType:"UseCaseCard"}),Object(o.b)(l.a,{title:"App Config Reference",description:"Learn more about what you can accomplish with app config.",link:Object(i.a)("docs/mobile/configuration-app-config-reference"),mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,d=m["".concat(c,".").concat(u)]||m[u]||b[u]||i;return n?o.a.createElement(d,r(r({ref:t},s),{},{components:n})):o.a.createElement(d,r({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var s=2;s<i;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},244:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var a=n(21),o=n(245);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+c:c}(t,e,n,a)}}function c(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},245:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))},246:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},247:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(11),c=n(245),r=n(9);const l=Object(a.createContext)({collectLink:()=>{}});var s=n(244),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};t.a=function(e){var t,{isNavLink:n,to:m,href:b,activeClassName:u,isActive:d,"data-noBrokenLinkCheck":f,autoAddBaseUrl:h=!0}=e,g=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:O}=Object(s.b)(),v=Object(a.useContext)(l),j=m||b,y=Object(c.a)(j),w=null==j?void 0:j.replace("pathname://",""),N=void 0!==w?(x=w,h&&(e=>e.startsWith("/"))(x)?O(x):x):void 0;var x;const C=Object(a.useRef)(!1),k=n?i.e:i.c,T=r.a.canUseIntersectionObserver;let M;Object(a.useEffect)((()=>(!T&&y&&window.docusaurus.prefetch(N),()=>{T&&M&&M.disconnect()})),[N,T,y]);const A=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,E=!N||!y||A;return N&&y&&!A&&!f&&v.collectLink(N),E?o.a.createElement("a",Object.assign({href:N},j&&!y&&{target:"_blank",rel:"noopener noreferrer"},g)):o.a.createElement(k,Object.assign({},g,{onMouseEnter:()=>{C.current||(window.docusaurus.preload(N),C.current=!0)},innerRef:e=>{var t,n;T&&e&&y&&(t=e,n=()=>{window.docusaurus.prefetch(N)},M=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.unobserve(t),M.disconnect(),n())}))})),M.observe(t))},to:N||""},n&&{isActive:d,activeClassName:u}))}},248:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),o=n.n(a),i=n(54),c=n.n(i);function r({children:e}){return o.a.createElement("div",{className:c.a.root},e)}},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(247),o=n(0),i=n.n(o),c=n(246),r=n(55),l=n.n(r);function s({title:e,description:t,link:n}){return i.a.createElement("div",{className:Object(c.a)("card-demo",l.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,e)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,t)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(a.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}},250:function(e,t,n){"use strict";var a=n(0),o=n(251);t.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},251:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)(void 0);t.a=o},252:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(250),c=n(246),r=n(56),l=n.n(r);const s=37,p=39;t.a=function(e){const{lazy:t,block:n,defaultValue:r,values:m,groupId:b,className:u}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(i.a)(),[h,g]=Object(a.useState)(r),O=a.Children.toArray(e.children);if(null!=b){const e=d[b];null!=e&&e!==h&&m.some((t=>t.value===e))&&g(e)}const v=e=>{g(e),null!=b&&f(b,e)},j=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},u)},m.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e)},onFocus:()=>v(e),onClick:()=>{v(e)}},t)))),t?Object(a.cloneElement)(O.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},253:function(e,t,n){"use strict";var a=n(3),o=n(0),i=n.n(o);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:n}),e)}},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return r})),n.d(t,"default",(function(){return s}));var a=n(3),o=(n(0),n(243));const i={},c={unversionedId:"snippets/app-item",id:"snippets/app-item",isDocsHomePage:!1,title:"app-item",description:"An app config file is composed of a list of app items. App items can potentially be anything. Each app item has an item $type, which viewer is aware of and knows how to locate and load. They usually they represent configuration for components, maps, portal items, or shared data. All item app configuration is specified within the items array of the app.json file.",source:"@site/docs/snippets/app-item.mdx",slug:"/snippets/app-item",permalink:"/docs/snippets/app-item",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/snippets/app-item.mdx",version:"current"},r=[],l={toc:r};function s({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"An app config file is composed of a list of ",Object(o.b)("strong",{parentName:"p"},"app items"),". App items can potentially be anything. Each app item has an ",Object(o.b)("strong",{parentName:"p"},"item ",Object(o.b)("inlineCode",{parentName:"strong"},"$type")),", which viewer is aware of and knows how to locate and load. They usually they represent configuration for components, maps, portal items, or shared data. All item app configuration is specified within the ",Object(o.b)("inlineCode",{parentName:"p"},"items")," array of the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"app.json"))," file."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Each component can only load a certain ",Object(o.b)("inlineCode",{parentName:"p"},"$type")," of app item which corresponds to it. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"<map>")," components can only load app items of type ",Object(o.b)("inlineCode",{parentName:"p"},"map-extension")," as their configuration."))))}s.isMDXComponent=!0},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return r})),n.d(t,"default",(function(){return s}));var a=n(3),o=(n(0),n(243));const i={},c={unversionedId:"mobile/snippets/follow-along",id:"mobile/snippets/follow-along",isDocsHomePage:!1,title:"follow-along",description:"Check out the Quickstart and edit the default app config and layout.",source:"@site/docs/mobile/snippets/follow-along.mdx",slug:"/mobile/snippets/follow-along",permalink:"/docs/mobile/snippets/follow-along",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/follow-along.mdx",version:"current"},r=[],l={toc:r};function s({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Want to follow along?")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Check out the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-quickstart"}),"Quickstart")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-edit-layout-app-config"}),"edit the default app config and layout"),"."))))}s.isMDXComponent=!0}}]);