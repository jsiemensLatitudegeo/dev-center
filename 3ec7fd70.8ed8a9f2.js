(window.webpackJsonp=window.webpackJsonp||[]).push([[39,122],{153:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return n})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return p}));var a=o(1),r=o(9),i=(o(0),o(295)),n={},c={id:"workflow/snippets/designer-callout",title:"designer-callout",description:":::note Have you explored the Geocortex Workflow Designer?",source:"@site/docs/workflow/snippets/designer-callout.mdx",permalink:"/docs/workflow/snippets/designer-callout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/designer-callout.mdx"},s=[],l={rightToc:s};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Have you explored the Geocortex Workflow Designer?")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://apps.geocortex.com/workflow/designer/"}),"Geocortex Workflow Designer")," has a wide range of built-in activities you can use to satisfy your business case. You can take the behavior of workflow even further by running the commands and operations available in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-commands-operations"}),"Geocortex Web")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-commands-operations"}),"Geocortex Mobile"),"."))))}p.isMDXComponent=!0},199:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return p})),o.d(t,"rightToc",(function(){return b})),o.d(t,"default",(function(){return m}));var a=o(1),r=o(9),i=(o(0),o(295)),n=o(299),c=o(298),s=o(153),l={title:"Concepts",description:"Geocortex Workflow - Learn about key concepts."},p={id:"workflow/concepts-key-concepts",title:"Concepts",description:"Geocortex Workflow - Learn about key concepts.",source:"@site/docs/workflow/concepts-key-concepts.mdx",permalink:"/docs/workflow/concepts-key-concepts",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/concepts-key-concepts.mdx",sidebar:"workflow",previous:{title:"Overview",permalink:"/docs/workflow/overview"},next:{title:"Using the TypeScript Workflow SDK with Web Applications",permalink:"/docs/workflow/sdk-web-overview"}},b=[{value:"Workflow",id:"workflow",children:[]},{value:"Activities",id:"activities",children:[]},{value:"Form Elements",id:"form-elements",children:[]},{value:"Geocortex Workflow Designer and Runtime",id:"geocortex-workflow-designer-and-runtime",children:[]},{value:"Geocortex Workflow Hosts",id:"geocortex-workflow-hosts",children:[]},{value:"Activity Packs",id:"activity-packs",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],d={rightToc:b};function m(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s.default,{mdxType:"DesignerCallout"}),Object(i.b)("p",null,"Geocortex Workflow is a flexible tool for automating business processes. It allows you to create ",Object(i.b)("strong",{parentName:"p"},"workflows"),", which are composed of various ",Object(i.b)("strong",{parentName:"p"},"activities"),", control flow elements such as loops, and forms that enable user interaction. Workflows can run on different platforms, including ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.geocortex.com/products/gxw/"}),"Geocortex Web"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.geocortex.com/products/gxm/"}),"Geocortex Mobile"),", on a business server, or in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.esri.com/en-us/arcgis/products/web-appbuilder/overview"}),"Web AppBuilder for ArcGIS"),"."),Object(i.b)("h2",{id:"workflow"},"Workflow"),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"workflow")," is a collection of connected activities and forms, and is created using Geocortex Workflow Designer. Workflows are generic and not tied to a platform by default, but certain activities and features will only work in certain platforms."),Object(i.b)("h2",{id:"activities"},"Activities"),Object(i.b)("p",null,"Activities are the building blocks of a workflow. Each activity represents a unit of work. For example, Geocortex Workflow provides activities to set the map extent, perform geocoding, and gather input from the user. In all, Geocortex Workflow ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activity-reference.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____0"}),"provides over 200 activities")," for building workflows."),Object(i.b)("p",null,"Most activities have inputs - the values that the activity operates on, and outputs - the results of the activity's operations. When you add an activity to a workflow, you customize the activity by configuring the activity's inputs. The outputs are computed when the workflow runs."),Object(i.b)("p",null,"Activities have metadata that Geocortex Workflow Designer presents to an end user for easy workflow creation. This metadata can be defined in an ",Object(i.b)("strong",{parentName:"p"},"activity pack"),". They also have an implementation, which powers the behavior of the activity. This implementation is defined in the appropriate language for the target platform; activities for web applications are defined in TypeScript, and activities for Geocortex Mobile applications are defined in C#."),Object(i.b)("h2",{id:"form-elements"},"Form Elements"),Object(i.b)("p",null,"Some platforms have UI, like Geocortex Web or Geocortex Mobile, and can use forms to facilitate end user interaction. Geocortex Workflow ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activity-reference.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____0"}),"provides over twenty configurable ",Object(i.b)("strong",{parentName:"a"},"form elements"))," for building forms, like the Auto Complete, Geometry Picker, Date Picker, Number Slider, and Text Area elements. Just as activities are the building blocks of workflows, form elements are the building blocks of forms."),Object(i.b)("h2",{id:"geocortex-workflow-designer-and-runtime"},"Geocortex Workflow Designer and Runtime"),Object(i.b)("p",null,"Geocortex Workflow includes a powerful tool for building workflows, Geocortex Workflow Designer. Designer's drag-and-drop interface and library of predefined activities simplify the process of creating custom functionality for your web mapping applications, without programming. Geocortex Workflow Designer uses activity definitions to produce workflows."),Object(i.b)("p",null,"When a workflow is run, the workflow definition is read and executed by the ",Object(i.b)("strong",{parentName:"p"},"workflow runtime"),". The runtime is responsible for locating the activity implementation definitions, and executing them with the inputs defined in the workflow definitions. Each ",Object(i.b)("strong",{parentName:"p"},"workflow host")," has a different runtime:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Geocortex Web and Web AppBuilder for ArcGIS use the JavaScript workflow runtime"),Object(i.b)("li",{parentName:"ul"},"Geocortex Mobile and Geocortex Workflow Server use the .NET workflow runtime")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Types of Workflows")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Workflows are classified as ",Object(i.b)("strong",{parentName:"p"},"client")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm%3FTocPath%3DServer%2520Workflows%7C_____0"}),Object(i.b)("strong",{parentName:"a"},"server workflows")),". Client workflows support visual elements such as forms and prompts, and can be run on platforms with a visual interface, such as Geocortex Web or Geocortex Mobile. Server workflows do not support forms, prompts, or other visual elements, and can only be run on Geocortex Workflow Server, which has no visual interface. However, server workflows have a number of unique capabilities, such as the ability to connect to a database or mail server."))),Object(i.b)("h2",{id:"geocortex-workflow-hosts"},"Geocortex Workflow Hosts"),Object(i.b)("p",null,"Geocortex Workflow, is a cross platform product. If an environment supports a version of the workflow runtime it, is called a ",Object(i.b)("strong",{parentName:"p"},"workflow host"),"."),Object(i.b)("p",null,"The current existing workflow hosts are:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Web Applications")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Geocortex Web (client)"),Object(i.b)("li",{parentName:"ul"},"Geocortex Viewer for HTML5 (client)"),Object(i.b)("li",{parentName:"ul"},"Web AppBuilder for ArcGIS (client)")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},".NET Applications")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Geocortex Mobile (client)"),Object(i.b)("li",{parentName:"ul"},"Geocortex Workflow Server (server)")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/hosting.htm%3FTocPath%3DConfigure%2520Host%2520Applications%7C_____0"}),"Learn more about the different workflow hosts")," or about ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/run-in-different-environments.htm#Run_a_Workflow_in_Different_Environments%3FTocPath%3DRun%2520a%2520Workflow%2520in%2520Different%2520Environments%7C_____0"}),"adapting workflows to different environments"),"."),Object(i.b)("h2",{id:"activity-packs"},"Activity Packs"),Object(i.b)("p",null,"An activity pack defines a collection of activities that Geocortex Workflow Designer is aware of. An activity pack defines the metadata for one or more activities so that it can participate in the Geocortex Workflow Designer interface."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If the activities are targeted for web platforms, the activity pack can also define activity implementations and form elements otherwise, activity implementations and form elements are defined on the target platform."))),Object(i.b)("p",null,"Activity packs must be registered as an ArcGIS item, and this makes them ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/workflow/sdk-web-overview#sharing-the-activity-pack"}),"shareable with other workflow authors"),"."),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)(c.a,{mdxType:"UseCaseContainer"},Object(i.b)(n.a,{title:"Get Started with the Web Applications SDK",description:"Build custom activities and form elements with the Web Applications SDK",link:"sdk-web-overview",mdxType:"UseCaseCard"}),Object(i.b)(n.a,{title:"Get Started with the Geocortex Mobile SDK",description:"Build custom activities and form elements with the Geocortex Mobile SDK",link:"sdk-mobile-overview",mdxType:"UseCaseCard"}),Object(i.b)(n.a,{title:"Get Started with Geocortex Workflow Server",description:"Build custom activities for a server environment with Geocortex Workflow Server",link:"sdk-server-overview",mdxType:"UseCaseCard"})))}m.isMDXComponent=!0},298:function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var a=o(0),r=o.n(a),i=o(296),n=o.n(i),c=o(130),s=o.n(c);function l(e){var t=e.children;return r.a.createElement("div",{className:n()(s.a.root)},t)}},299:function(e,t,o){"use strict";o.d(t,"a",(function(){return p}));o(305);var a=o(304),r=o(0),i=o.n(r),n=o(296),c=o.n(n),s=o(131),l=o.n(s);function p(e){var t=e.title,o=e.description,r=e.link;return i.a.createElement("div",{className:c()("card-demo",l.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,o)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(a.a,{className:"button button--secondary button--block",to:r},"Get Started"))))}}}]);