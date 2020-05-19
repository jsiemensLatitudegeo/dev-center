(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),o=n(9),i=(n(0),n(277)),c={},r={id:"web/snippets/prereqs-layout-config-editing",title:"prereqs-layout-config-editing",description:"-   Follow along by setting up the [Geocortex Web SDK](../sdk-overview.mdx) and editing the minimal layout and app config provided.",source:"@site/docs/web/snippets/prereqs-layout-config-editing.mdx",permalink:"/docs/web/snippets/prereqs-layout-config-editing",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-layout-config-editing.mdx"},l=[],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Follow along by setting up the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK")," and editing the minimal layout and app config provided."),Object(i.b)("li",{parentName:"ul"},"Check out the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-deployment#modifying-layout-and-app-config-using-the-geocortex-web-designer"}),"deployment instructions")," to learn about how to deploy layout and app config to an application.")))}u.isMDXComponent=!0},184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return h}));var a=n(1),o=n(9),i=(n(0),n(277)),c=n(298),r=n(301),l=n(300),s=n(296),u=n(295),b=n(137),p={title:"Configure Button Click Behavior",description:"Geocortex Web - Learn how to run an existing command or operation on a button press"},m={id:"web/tutorial-configure-button-click",title:"Configure Button Click Behavior",description:"Geocortex Web - Learn how to run an existing command or operation on a button press",source:"@site/docs/web/tutorial-configure-button-click.mdx",permalink:"/docs/web/tutorial-configure-button-click",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/tutorial-configure-button-click.mdx",sidebar:"web",previous:{title:"Commands and Operations",permalink:"/docs/web/configuration-commands-operations"},next:{title:"Change the Default Behavior of Components",permalink:"/docs/web/tutorial-change-default-behavior"}},d=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Add a Button to the Layout",id:"add-a-button-to-the-layout",children:[]},{value:"Link the Button to a Command in App Config",id:"link-the-button-to-a-command-in-app-config",children:[]},{value:"Pass Arguments to the Command",id:"pass-arguments-to-the-command",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],g={rightToc:d};function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This article will guide you through how to add a button to the layout and configure it to run and action through the app config."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"It's actually possible to configure the a button with a command in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://apps.geocortex.com/webviewer/designer/"}),"Geocortex Web Designer"),". However, the point of this use case is to demonstrate the concept of configuring behaviors using the app config."))),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)(b.default,{mdxType:"PrereqsLayoutConfigSnippet"}),Object(i.b)("h2",{id:"add-a-button-to-the-layout"},"Add a Button to the Layout"),Object(i.b)("p",null,"Let's create a a layout with two components; a map, and a button positioned on the map."),Object(i.b)(r.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"layout",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="custom.abc123">\n  <map>\n    <button slot="top-center"/>\n  </map>\n</layout>\n'))),Object(i.b)(l.a,{value:"ui",mdxType:"TabItem"},Object(i.b)("img",{src:Object(c.a)("img/web-basic-button-on-map.png")}))),Object(i.b)("h2",{id:"link-the-button-to-a-command-in-app-config"},"Link the Button to a Command in App Config"),Object(i.b)("p",null,"Link the button to the layout to a ",Object(i.b)("inlineCode",{parentName:"p"},"menu-item")," in app config, and configure it to run a basic command, ",Object(i.b)("inlineCode",{parentName:"p"},"zoom-in"),"."),Object(i.b)(r.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"layout",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="custom.abc123">\n  <map>\n    <button config="button-config" slot="top-center"/>\n  </map>\n</layout>\n'))),Object(i.b)(l.a,{value:"config",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "id": "button-config",\n            "iconId": "zoom-in",\n            "title": "Zoom In",\n            "action": "map.zoom-in",\n            "$type": "menu-item"\n        }\n    ]\n}\n'))),Object(i.b)(l.a,{value:"ui",mdxType:"TabItem"},Object(i.b)("img",{src:Object(c.a)("img/web-basic-button-with-command.png")}))),Object(i.b)("h2",{id:"pass-arguments-to-the-command"},"Pass Arguments to the Command"),Object(i.b)("p",null,"If the command you want to run takes arguments, you can pass them through the app config."),Object(i.b)(r.a,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"config",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "id": "button-config",\n            "iconId": "info",\n            "title": "Alert",\n            "action": {\n                "name": "ui.alert",\n                "arguments": {\n                    "message": "Message from config."\n                }\n            },\n            "$type": "menu-item"\n        }\n    ]\n}\n'))),Object(i.b)(l.a,{value:"ui",mdxType:"TabItem"},Object(i.b)("img",{src:Object(c.a)("img/web-basic-button-alert.png")}))),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)(u.a,{mdxType:"UseCaseContainer"},Object(i.b)(s.a,{title:"Commands and Operations Reference",description:"Check out the available commands and operations",link:"api-commands-operations-events",mdxType:"UseCaseCard"}),Object(i.b)(s.a,{title:"Change Default Behavior with Commands and Operations",description:"Change built-in behavior or add new behavior using app config and layout",link:"tutorial-change-default-behavior",mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},295:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),o=n.n(a),i=n(278),c=n.n(i),r=n(130),l=n.n(r);function s(e){var t=e.children;return o.a.createElement("div",{className:c()(l.a.root)},t)}},296:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n(293);var a=n(284),o=n(0),i=n.n(o),c=n(278),r=n.n(c),l=n(131),s=n.n(l);function u(e){var t=e.title,n=e.description,o=e.link;return i.a.createElement("div",{className:r()("card-demo",s.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,n)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(a.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}}}]);