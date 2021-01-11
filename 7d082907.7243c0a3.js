(window.webpackJsonp=window.webpackJsonp||[]).push([[74,28,46,80,86],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return f})),a.d(t,"default",(function(){return g}));var o=a(3),n=(a(0),a(243)),i=a(244),r=a(252),c=a(253),l=a(248),s=a(249),p=a(64),u=a(60),m=a(63);const b={title:"Change Default Map Click Behavior",description:"Geocortex Mobile - Learn how to configure Geocortex Mobile to change the default map click behavior"},d={unversionedId:"mobile/tutorial-change-default-map-click-behavior",id:"mobile/tutorial-change-default-map-click-behavior",isDocsHomePage:!1,title:"Change Default Map Click Behavior",description:"Geocortex Mobile - Learn how to configure Geocortex Mobile to change the default map click behavior",source:"@site/docs/mobile/tutorial-change-default-map-click-behavior.mdx",slug:"/mobile/tutorial-change-default-map-click-behavior",permalink:"/docs/mobile/tutorial-change-default-map-click-behavior",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/tutorial-change-default-map-click-behavior.mdx",version:"current",sidebar:"mobile",previous:{title:"Display a Custom Form",permalink:"/docs/mobile/tutorial-display-custom-form"},next:{title:"Implement a Custom Form Element",permalink:"/docs/mobile/tutorial-implement-custom-form-elements"}},f=[{value:"What you&#39;re Building",id:"what-youre-building",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Initial Set up",id:"initial-set-up",children:[]},{value:"Set up a Workflow to Run on Map Click",id:"set-up-a-workflow-to-run-on-map-click",children:[]},{value:"Extend the Workflow to Create a Graphic Buffering the Click Geometry",id:"extend-the-workflow-to-create-a-graphic-buffering-the-click-geometry",children:[]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],h={toc:f};function g({components:e,...t}){return Object(n.b)("wrapper",Object(o.a)({},h,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Geocortex Mobile comes with default behavior that runs on a map click. The default behavior will identify and display details for results in the nearby area. But what if you want to replace the functionality with your own behavior? This can be accomplished by leveraging ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://apps.geocortex.com/workflow/designer/"}),"Geocortex Workflow")," and editing the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/configuration-app-config-getting-started"}),"app config"),"."),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"It's actually possible to configure the Map's ",Object(n.b)("inlineCode",{parentName:"p"},"onClick")," event in ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://apps.geocortex.com/mobileviewer/designer/"}),"Geocortex Mobile Designer"),", by setting a workflow as the action for the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/component-settings.htm%3FTocPath%3DConfiguration%7CComponent%2520Settings%7C_____0"}),"Maps click event"),". However, the point of this tutorial is to demonstrate the concept of configuring actions using the app config."))),Object(n.b)("h2",{id:"what-youre-building"},"What you're Building"),Object(n.b)("p",null,"We will modify the default map on click behavior to buffer the click geometry by a user provided distance and create a graphic which visualizes this buffer."),Object(n.b)("img",{src:Object(i.a)("img/mobile-custom-map-click-workflow-finished.png"),alt:"Map Click Workflow with Buffer Behavior"}),Object(n.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(n.b)(p.default,{mdxType:"PrereqsLayoutConfigSnippet"}),Object(n.b)("h2",{id:"initial-set-up"},"Initial Set up"),Object(n.b)("p",null,"Start the Geocortex Mobile SDK with the following layout and app JSON. You should see a simple application with one layer, Fire Hydrants, which has a related table Fire Hydrant Surveys."),Object(n.b)("p",null,"Try clicking the map. It should return results for the point you clicked in the results list."),Object(n.b)(r.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"}],mdxType:"Tabs"},Object(n.b)(c.a,{value:"config",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "map-extension",\n            "id": "map-1",\n            "onClick": [\n                "tasks.identify",\n                "highlights.pulse",\n                "results.display"\n            ],\n            "webMap": "0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "feature-details",\n            "id": "feature-details",\n            "onFeatureShow": "highlights.add-focus",\n            "onFeatureHide": "highlights.remove-focus",\n            "onFeatureDelete": [\n                "highlights.remove-focus",\n                "highlights.remove",\n                "edit.delete-features",\n                "results.hide-details",\n                "results.remove"\n            ]\n        },\n        {\n            "$type": "results",\n            "id": "results",\n            "onFeatureShow": [\n                "highlights.add",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "userSet": true\n                    }\n                }\n            ],\n            "onFeatureHide": null,\n            "onFeatureRemove": "highlights.remove",\n            "onAllFeaturesRemoved": [\n                "panel.close-host-panel",\n                "search.clear",\n                "results.clear"\n            ],\n            "onFeatureClick": [\n                "results.display-details",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.zoom-to-features",\n                "highlights.pulse"\n            ],\n            "onFeatureLocate": [\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.pan-to-features",\n                "highlights.pulse"\n            ],\n            "onClear": ["highlights.clear", "highlights.clear-focus"]\n        }\n    ]\n}\n'))),Object(n.b)(c.a,{value:"layout",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout-large.xml"',title:'"app/layout-large.xml"'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n    <map config="map-1" slot="main"/>\n    <panel>\n      <results-list config="results" />\n      <feature-details config="feature-details"/>\n      <gxm:update-feature/>\n      <gxm:add-related-feature />\n    </panel>\n  </gxm:taskbar>\n</layout>\n\n')))),Object(n.b)("h2",{id:"set-up-a-workflow-to-run-on-map-click"},"Set up a Workflow to Run on Map Click"),Object(n.b)("p",null,"The first thing we need to do is override the default map click behavior. We can do this by ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/tutorial-change-default-behavior"}),"editing the default behavior")," for the ",Object(n.b)("inlineCode",{parentName:"p"},"<map/>")," component in the app config. The default behavior for the map's ",Object(n.b)("inlineCode",{parentName:"p"},"onClick")," event is a command chain that runs ",Object(n.b)("inlineCode",{parentName:"p"},"tasks.identify")," and then ",Object(n.b)("inlineCode",{parentName:"p"},"highlights.pulse"),", and finally, ",Object(n.b)("inlineCode",{parentName:"p"},"results.display"),"."),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n          "$type": "map-extension",\n          "id": "map-1",\n          "onClick": [\n              "tasks.identify",\n              "highlights.pulse",\n              "results.display"\n          ]\n          ...\n        }\n    ]\n}\n')),Object(n.b)("p",null,"First, we are going to replace the command chain with a ",Object(n.b)("inlineCode",{parentName:"p"},"workflow.run")," command that replicates this behavior."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Open up ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://apps.geocortex.com/workflow/designer/"}),"Geocortex Workflow Designer")," and create and save a new workflow."),Object(n.b)("li",{parentName:"ol"},'Add an "Alert" activity as a test.'),Object(n.b)("li",{parentName:"ol"},"Copy the ID of the the workflow from the URL")),Object(n.b)(u.default,{mdxType:"WorkflowUrlSnippet"}),Object(n.b)("ol",{start:4},Object(n.b)("li",{parentName:"ol"},"Add the workflow as an app item to your app config.")),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "workflow",\n            "id": "map-click-workflow",\n            "title": "Map Click Workflow",\n            "commandArgumentInput": "context",\n            "target": "#taskbar",\n            "portalItem": "<your-workflow-id-here>"\n        },\n        ...\n    ]\n}\n')),Object(n.b)("ol",{start:5},Object(n.b)("li",{parentName:"ol"},"Next, configure the ",Object(n.b)("inlineCode",{parentName:"li"},"onClick")," property of the Map Component in the app config to run the workflow.")),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "id": "default",\n            "$type": "map-extension",\n            "onClick": "workflow.run-map-click-workflow",\n            ...\n        }\n    ]\n}\n')),Object(n.b)("ol",{start:6},Object(n.b)("li",{parentName:"ol"},"Run the app and test your workflow. You should see your alert pop up when you try to click on the map.")),Object(n.b)("img",{src:Object(i.a)("img/mobile-custom-map-click-workflow-alert.png"),alt:"Map Click Workflow with Alert"}),Object(n.b)("ol",{start:7},Object(n.b)("li",{parentName:"ol"},"Open up your workflow in the Geocortex Workflow Designer again. The default behavior we just overrode can be recreated with the use of ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-command.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____169"}),"RunCommand")," and ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-operation.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____173"}),"RunOperation")," activities. ",Object(n.b)("inlineCode",{parentName:"li"},"tasks.identify")," is an operation, so it needs a RunOperation activity, and ",Object(n.b)("inlineCode",{parentName:"li"},"highlights.pulse")," and ",Object(n.b)("inlineCode",{parentName:"li"},"results.display")," are commands, so they need RunCommand Activities. Chain these three activities together, passing the ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input%3FTocPath%3DConfiguration%7CAdd%2520a%2520Workflow%2520to%2520an%2520App%7C_____4"}),"workflow context")," to ",Object(n.b)("inlineCode",{parentName:"li"},"tasks.identify")," and then passing the output of that operation to ",Object(n.b)("inlineCode",{parentName:"li"},"highlights.pulse"),", and ",Object(n.b)("inlineCode",{parentName:"li"},"results.display"),".")),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",null,"You can"," ",Object(n.b)("a",{href:Object(i.a)("workflows/mobile-map-click-behavior-recreated.json"),download:"map-click-behavior-recreated.json"},"download this workflow")," ","and then"," ",Object(n.b)("a",{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"},"import it into the Geocortex Workflow Designer.")))),Object(n.b)("img",{src:Object(i.a)("img/mobile-custom-map-click-workflow-recreated.png"),alt:"Map Click Workflow with Original Operations"}),Object(n.b)("ol",{start:8},Object(n.b)("li",{parentName:"ol"},"Save the workflow and reload the application. Test the map click functionality and ensure it works as it originally did.")),Object(n.b)("h2",{id:"extend-the-workflow-to-create-a-graphic-buffering-the-click-geometry"},"Extend the Workflow to Create a Graphic Buffering the Click Geometry"),Object(n.b)("p",null,'At this point, you can choose to extend the map click behavior with Geocortex Workflow in whatever way is appropriate for your use case. You could execute a different "identify" for external results and add them to the set of results displayed, or zoom the map to a specific orientation and scale, or display a form for the user to fill out with relevant information to that location. For this example, a workflow was created which asks a user for a buffer distance, and creates a graphic showing the buffer around the click location.'),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",null,"You can"," ",Object(n.b)("a",{href:Object(i.a)("workflows/web-map-click-behavior-buffer.json"),download:"map-click-behavior-buffer.json"},"download this buffer geometry workflow")," ","and then"," ",Object(n.b)("a",{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"},"import it into the Geocortex Workflow Designer.")))),Object(n.b)("img",{src:Object(i.a)("img/mobile-custom-map-click-workflow-finished.png"),alt:"Map Click Workflow with Buffer Behavior"}),Object(n.b)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),Object(n.b)(m.default,{mdxType:"RelevantWorkflowSamples"}),Object(n.b)("h2",{id:"next-steps"},"Next Steps"),Object(n.b)("p",null,"This pattern of configuring behavior with a workflow can be applied to numerous components. You can use a workflow to control the behavior of the Map, Feature Details, Geolocate, Custom Components, and more. Often, a workflow can be created and used to execute custom behavior instead of requiring the implementation of a custom command or operation."),Object(n.b)(l.a,{mdxType:"UseCaseContainer"},Object(n.b)(s.a,{title:"Geocortex Workflow",description:"Learn more about Geocortex Workflow",link:Object(i.a)("docs/workflow/overview"),mdxType:"UseCaseCard"}),Object(n.b)(s.a,{title:"Change Default Behavior",description:"Learn more about overriding default behaviors",link:Object(i.a)("docs/mobile/tutorial-change-default-behavior"),mdxType:"UseCaseCard"}),Object(n.b)(s.a,{title:"SDK Sample that Demonstrates Overriding Default Behaviors",description:"Check out the SDK Sample for overriding default behaviors",link:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration/MapAndFeatureCommands",mdxType:"UseCaseCard"}),Object(n.b)(s.a,{title:"Implement Custom Command or Operation",description:"Implement a custom command or operation with the Mobile SDK",link:Object(i.a)("docs/mobile/tutorial-implement-command-operation"),mdxType:"UseCaseCard"})))}g.isMDXComponent=!0},243:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var o=a(0),n=a.n(o);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),b=o,d=u["".concat(r,".").concat(b)]||u[b]||m[b]||i;return a?n.a.createElement(d,c(c({ref:t},s),{},{components:a})):n.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var s=2;s<i;s++)r[s]=a[s];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},244:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return r}));var o=a(21),n=a(245);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(o.default)();return{withBaseUrl:(a,o)=>function(e,t,a,{forcePrependBaseUrl:o=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(o)return t+a;const r=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+r:r}(t,e,a,o)}}function r(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}},245:function(e,t,a){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!o(e)}a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return n}))},246:function(e,t,a){"use strict";function o(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=o(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=o(e))&&(n&&(n+=" "),n+=t);return n}},247:function(e,t,a){"use strict";var o=a(0),n=a.n(o),i=a(11),r=a(245),c=a(9);const l=Object(o.createContext)({collectLink:()=>{}});var s=a(244),p=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:u,href:m,activeClassName:b,isActive:d,"data-noBrokenLinkCheck":f,autoAddBaseUrl:h=!0}=e,g=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:w}=Object(s.b)(),v=Object(o.useContext)(l),O=u||m,j=Object(r.a)(O),k=null==O?void 0:O.replace("pathname://",""),y=void 0!==k?(x=k,h&&(e=>e.startsWith("/"))(x)?w(x):x):void 0;var x;const N=Object(o.useRef)(!1),C=a?i.e:i.c,M=c.a.canUseIntersectionObserver;let D;Object(o.useEffect)((()=>(!M&&j&&window.docusaurus.prefetch(y),()=>{M&&D&&D.disconnect()})),[y,M,j]);const S=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,T=!y||!j||S;return y&&j&&!S&&!f&&v.collectLink(y),T?n.a.createElement("a",Object.assign({href:y},O&&!j&&{target:"_blank",rel:"noopener noreferrer"},g)):n.a.createElement(C,Object.assign({},g,{onMouseEnter:()=>{N.current||(window.docusaurus.preload(y),N.current=!0)},innerRef:e=>{var t,a;M&&e&&j&&(t=e,a=()=>{window.docusaurus.prefetch(y)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),a())}))})),D.observe(t))},to:y||""},a&&{isActive:d,activeClassName:b}))}},248:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var o=a(0),n=a.n(o),i=a(54),r=a.n(i);function c({children:e}){return n.a.createElement("div",{className:r.a.root},e)}},249:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var o=a(247),n=a(0),i=a.n(n),r=a(246),c=a(55),l=a.n(c);function s({title:e,description:t,link:a}){return i.a.createElement("div",{className:Object(r.a)("card-demo",l.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,e)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,t)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(o.a,{className:"button button--secondary button--block",to:a},"Get Started"))))}},250:function(e,t,a){"use strict";var o=a(0),n=a(251);t.a=function(){const e=Object(o.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},251:function(e,t,a){"use strict";var o=a(0);const n=Object(o.createContext)(void 0);t.a=n},252:function(e,t,a){"use strict";var o=a(0),n=a.n(o),i=a(250),r=a(246),c=a(56),l=a.n(c);const s=37,p=39;t.a=function(e){const{lazy:t,block:a,defaultValue:c,values:u,groupId:m,className:b}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(i.a)(),[h,g]=Object(o.useState)(c),w=o.Children.toArray(e.children);if(null!=m){const e=d[m];null!=e&&e!==h&&u.some((t=>t.value===e))&&g(e)}const v=e=>{g(e),null!=m&&f(m,e)},O=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},b)},u.map((({value:e,label:t})=>n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>O.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case p:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e)},onFocus:()=>v(e),onClick:()=>{v(e)}},t)))),t?Object(o.cloneElement)(w.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},w.map(((e,t)=>Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},253:function(e,t,a){"use strict";var o=a(3),n=a(0),i=a.n(n);t.a=function({children:e,hidden:t,className:a}){return i.a.createElement("div",Object(o.a)({role:"tabpanel"},{hidden:t,className:a}),e)}},60:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var o=a(3),n=(a(0),a(243));const i={},r={unversionedId:"snippets/workflow-url",id:"snippets/workflow-url",isDocsHomePage:!1,title:"workflow-url",description:"https://apps.geocortex.com/workflow/designer/#workflow=",source:"@site/docs/snippets/workflow-url.mdx",slug:"/snippets/workflow-url",permalink:"/docs/snippets/workflow-url",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/snippets/workflow-url.mdx",version:"current"},c=[],l={toc:c};function s({components:e,...t}){return Object(n.b)("wrapper",Object(o.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("div",{class:"alert alert--secondary",role:"alert"},"https://apps.geocortex.com/workflow/designer/#workflow=",Object(n.b)("b",null,"44010fc421dd4659b74fb921e09ba594")),Object(n.b)("br",null))}s.isMDXComponent=!0},61:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var o=a(3),n=(a(0),a(243));const i={},r={unversionedId:"mobile/snippets/tweak-layout-config",id:"mobile/snippets/tweak-layout-config",isDocsHomePage:!1,title:"tweak-layout-config",description:"If you just need to make a small change to the layout and app config of an existing application, you can download the config and layout files for the application, tweak them, and then re-upload them.",source:"@site/docs/mobile/snippets/tweak-layout-config.mdx",slug:"/mobile/snippets/tweak-layout-config",permalink:"/docs/mobile/snippets/tweak-layout-config",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/tweak-layout-config.mdx",version:"current"},c=[],l={toc:c};function s({components:e,...t}){return Object(n.b)("wrapper",Object(o.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(n.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"If you just need to make a small change to the layout and app config of an existing application, you can ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/mobileviewer/latest/admin-help/Default.htm#gmv/designer/configuration-Options.htm#Download-app-config%3FTocPath%3DConfiguration%7CConfiguration%2520Options%7C_____3"}),"download the config and layout files for the application"),", tweak them, and then re-upload them."))))}s.isMDXComponent=!0},63:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var o=a(3),n=(a(0),a(243));const i={},r={unversionedId:"mobile/snippets/relevant-workflow-samples",id:"mobile/snippets/relevant-workflow-samples",isDocsHomePage:!1,title:"relevant-workflow-samples",description:"The Geocortex Mobile SDK Samples project has a variety of workflow samples:",source:"@site/docs/mobile/snippets/relevant-workflow-samples.mdx",slug:"/mobile/snippets/relevant-workflow-samples",permalink:"/docs/mobile/snippets/relevant-workflow-samples",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/relevant-workflow-samples.mdx",version:"current"},c=[],l={toc:c};function s({components:e,...t}){return Object(n.b)("wrapper",Object(o.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The Geocortex Mobile SDK Samples project has a variety of workflow samples:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/RunWorkflow"}),"Run a Workflow"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/CustomActivity"}),"Build a Custom Activity"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/CustomFormComponent"}),"Build a Custom Form Element")))))}s.isMDXComponent=!0},64:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var o=a(3),n=(a(0),a(243)),i=a(61);const r={},c={unversionedId:"mobile/snippets/prereqs-layout-config-editing",id:"mobile/snippets/prereqs-layout-config-editing",isDocsHomePage:!1,title:"prereqs-layout-config-editing",description:"Follow along by setting up the Geocortex Mobile SDK and editing the minimal layout and app config provided.",source:"@site/docs/mobile/snippets/prereqs-layout-config-editing.mdx",slug:"/mobile/snippets/prereqs-layout-config-editing",permalink:"/docs/mobile/snippets/prereqs-layout-config-editing",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/prereqs-layout-config-editing.mdx",version:"current"},l=[],s={toc:l};function p({components:e,...t}){return Object(n.b)("wrapper",Object(o.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Follow along by setting up the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-overview"}),"Geocortex Mobile SDK")," and editing the minimal layout and app config provided."),Object(n.b)(i.default,{mdxType:"TweakLayoutConfigSnippet"}))}p.isMDXComponent=!0}}]);