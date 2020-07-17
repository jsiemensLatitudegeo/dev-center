(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return s}));var o=a(2),n=a(9),i=(a(0),a(299)),c={},r={id:"web/snippets/prereqs-layout-config-editing",isDocsHomePage:!1,title:"prereqs-layout-config-editing",description:"-   Follow along by setting up the Geocortex Web SDK and editing the minimal layout and app config provided.",source:"@site/docs/web/snippets/prereqs-layout-config-editing.mdx",permalink:"/docs/web/snippets/prereqs-layout-config-editing",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-layout-config-editing.mdx"},p=[],l={rightToc:p};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Follow along by setting up the ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK")," and editing the minimal layout and app config provided."),Object(i.b)("li",{parentName:"ul"},"Check out the ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/web/sdk-deployment#upload-app-config-and-layout-to-an-app-optional"}),"deployment instructions")," to learn about how to deploy layout and app config to an application.")))}s.isMDXComponent=!0},165:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return g}));var o=a(2),n=a(9),i=(a(0),a(299)),c=a(323),r=a(324),p=a(305),l=a(310),s=a(311),m=a(136),b={title:"Change the Default Behavior of Components",description:"Geocortex Web - Learn how to configure Geocortex Web to change default application behavior"},u={id:"web/tutorial-change-default-behavior",isDocsHomePage:!1,title:"Change the Default Behavior of Components",description:"Geocortex Web - Learn how to configure Geocortex Web to change default application behavior",source:"@site/docs/web/tutorial-change-default-behavior.mdx",permalink:"/docs/web/tutorial-change-default-behavior",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/tutorial-change-default-behavior.mdx",sidebar:"web",previous:{title:"Configure Button Click Behavior",permalink:"/docs/web/tutorial-configure-button-click"},next:{title:"Customize the Theme",permalink:"/docs/web/tutorial-customize-application-theme"}},d=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Change the Behavior of the Bookmarks Component",id:"change-the-behavior-of-the-bookmarks-component",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],h={rightToc:d};function g(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Many of the behaviors of Geocortex Web's built-in ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-components-overview"}),"components")," are configurable through the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-getting-started"}),"app config"),"."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Many behaviors which are configurable through the app config are more easily configurable by using the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://apps.geocortex.com/webviewer/designer/"}),"Geocortex Web Designer"),". App config should be used if you need to modify a property not available in the app config, or use a custom command as part of a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/configuration-commands-operations#configuring-commands-and-operations"}),"command chain"),"."))),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)(m.default,{mdxType:"PrereqsLayoutConfigSnippet"})," ",Object(i.b)("h2",{id:"change-the-behavior-of-the-bookmarks-component"},"Change the Behavior of the Bookmarks Component"),Object(i.b)("p",null,"The following example demonstrates changing the ",Object(i.b)("inlineCode",{parentName:"p"},"onClick")," property of the bookmarks model. The default value of this property is the singular command, ",Object(i.b)("inlineCode",{parentName:"p"},"map.zoom-to-viewpoint"),". This property is not available to edit through the Geocortex Web Designer, but can be edited through the use of app config."),Object(i.b)("p",null,"First, let's create a basic map with a bookmarks component using the layout and app config. Start up the application and add a few bookmarks."),Object(i.b)(c.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"app"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"app",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": []\n}\n'))),Object(i.b)(r.a,{value:"layout",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="your.custom.namespace" xmlns:web="https://geocortex.com/layout/web/v1">\n    <map>\n        <web:bookmarks/>\n    </map>\n</layout>\n')))),Object(i.b)("p",null,"Next, add a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-getting-started#anatomy-of-an-app-config"}),"app item")," to the configuration for the bookmarks component."),Object(i.b)(c.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"app"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"app",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "id": "bookmarks-config",\n            "$type": "bookmarks"\n        }\n    ]\n}\n'))),Object(i.b)(r.a,{value:"layout",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="your.custom.namespace" xmlns:web="https://geocortex.com/layout/web/v1">\n    <map>\n        <web:bookmarks config="bookmarks-config"/>\n    </map>\n</layout>\n')))),Object(i.b)("p",null,"Finally, modify the ",Object(i.b)("inlineCode",{parentName:"p"},"onClick")," property of the bookmarks app item to run the commands ",Object(i.b)("inlineCode",{parentName:"p"},"map.zoom-to-viewpoint")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ui.alert"),"."),Object(i.b)(c.a,{defaultValue:"config",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"layout",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="your.custom.namespace" xmlns:web="https://geocortex.com/layout/web/v1">\n    <map>\n        <web:bookmarks config="bookmarks-config"/>\n    </map>\n</layout>\n'))),Object(i.b)(r.a,{value:"config",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "id": "bookmarks-config",\n            "$type": "bookmarks",\n            "onClick": [\n                "map.zoom-to-viewpoint",\n                {\n                    "name": "ui.alert",\n                    "arguments": {\n                        "message": "Message from config."\n                    }\n                }\n            ]\n        }\n    ]\n}\n'))),Object(i.b)(r.a,{value:"ui",mdxType:"TabItem"},Object(i.b)("img",{src:Object(p.a)("img/web-customize-bookmarks-component.png")}))),Object(i.b)("p",null,"Congratulations! You just changed the default behavior for a built in component using config. All components can be configured through the app config JSON in this manner."),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"Geocortex Web comes with many built-in commands and operations to help you accomplish your goal. If these are not enough, Geocortex Workflow can help you implement custom behaviors without writing custom code. If you cannot create the behavior you want with Geocortex Workflow, it might be time to look into using the Geocortex Web SDK to implement a custom command or operation."),Object(i.b)(l.a,{mdxType:"UseCaseContainer"},Object(i.b)(s.a,{title:"Commands, Operations, and Events API",description:"Check out the available commands and operations",link:Object(p.a)("docs/web/api-commands-operations-events"),mdxType:"UseCaseCard"}),Object(i.b)(s.a,{title:"Run a Workflow using a Command and App Config",description:"Configure a workflow to run on map initialization using app config",link:Object(p.a)("docs/web/tutorial-run-workflow-app-config"),mdxType:"UseCaseCard"}),Object(i.b)(s.a,{title:"Change Geocortex Web's Default Map Click Behavior",description:"Learn how to Geocortex Workflow to override Geocortex Web's default map click behavior",link:Object(p.a)("docs/web/tutorial-change-default-map-click-behavior"),mdxType:"UseCaseCard"}),Object(i.b)(s.a,{title:"Implement Custom Command/Operation",description:"Implement a custom Command/Operation with the Geocortex Web SDK",link:Object(p.a)("docs/web/tutorial-implement-command-operation"),mdxType:"UseCaseCard"})))}g.isMDXComponent=!0},310:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var o=a(0),n=a.n(o),i=a(129),c=a.n(i);function r(e){var t=e.children;return n.a.createElement("div",{className:c.a.root},t)}},311:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a(312);var o=a(306),n=a(0),i=a.n(n),c=a(301),r=a(130),p=a.n(r);function l(e){var t=e.title,a=e.description,n=e.link;return i.a.createElement("div",{className:Object(c.a)("card-demo",p.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,a)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(o.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}}}]);