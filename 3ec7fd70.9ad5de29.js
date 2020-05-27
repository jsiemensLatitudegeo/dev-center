/*! For license information please see 3ec7fd70.9ad5de29.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[39,119],{154:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return f}));var o=r(1),n=r(9),i=(r(0),r(289)),a={},c={id:"workflow/snippets/designer-callout",title:"designer-callout",description:":::note Have you explored the Geocortex Workflow Designer?",source:"@site/docs/workflow/snippets/designer-callout.mdx",permalink:"/docs/workflow/snippets/designer-callout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/designer-callout.mdx"},s=[],l={rightToc:s};function f(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Have you explored the Geocortex Workflow Designer?")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://apps.geocortex.com/workflow/designer/"}),"Geocortex Workflow Designer")," has a wide range of built-in activities you can use to satisfy your business case. You can take the behavior of workflow even further by running the commands and operations available in ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/configuration-commands-operations"}),"Geocortex Web")," and ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/configuration-commands-operations"}),"Geocortex Mobile"),"."))))}f.isMDXComponent=!0},200:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return f})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return b}));var o=r(1),n=r(9),i=(r(0),r(289)),a=r(299),c=r(298),s=r(154),l={title:"Concepts",description:"Geocortex Workflow - Learn about key concepts."},f={id:"workflow/concepts-key-concepts",title:"Concepts",description:"Geocortex Workflow - Learn about key concepts.",source:"@site/docs/workflow/concepts-key-concepts.mdx",permalink:"/docs/workflow/concepts-key-concepts",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/concepts-key-concepts.mdx",sidebar:"workflow",previous:{title:"Overview",permalink:"/docs/workflow/overview"},next:{title:"Implement a Custom Activity for Web Applications",permalink:"/docs/workflow/usecases-web-implement-custom-activity"}},u=[{value:"Workflow",id:"workflow",children:[]},{value:"Activities",id:"activities",children:[]},{value:"Form Elements",id:"form-elements",children:[]},{value:"Geocortex Workflow Designer and Runtime",id:"geocortex-workflow-designer-and-runtime",children:[]},{value:"Geocortex Workflow Hosts",id:"geocortex-workflow-hosts",children:[]},{value:"Activity Packs",id:"activity-packs",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],p={rightToc:u};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s.default,{mdxType:"DesignerCallout"}),Object(i.b)("p",null,"Geocortex Workflow is a flexible tool for automating business processes. It allows you to create ",Object(i.b)("strong",{parentName:"p"},"workflows"),", which are composed of various ",Object(i.b)("strong",{parentName:"p"},"activities"),", control flow elements such as loops, and forms that enable user interaction. Workflows can run on different platforms, including ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.geocortex.com/products/gxw/"}),"Geocortex Web"),", ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.geocortex.com/products/gxm/"}),"Geocortex Mobile"),", on a business server, or in ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.esri.com/en-us/arcgis/products/web-appbuilder/overview"}),"Web AppBuilder for ArcGIS"),"."),Object(i.b)("h2",{id:"workflow"},"Workflow"),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"workflow")," is a collection of connected activities and forms, and is created using Geocortex Workflow Designer. Workflows are generic and not tied to a platform by default, but certain activities and features will only work in certain platforms."),Object(i.b)("h2",{id:"activities"},"Activities"),Object(i.b)("p",null,"Activities are the building blocks of a workflow. Each activity represents a unit of work. For example, Geocortex Workflow provides activities to set the map extent, perform geocoding, and gather input from the user. In all, Geocortex Workflow ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activity-reference.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____0"}),"provides over 200 activities")," for building workflows."),Object(i.b)("p",null,"Most activities have inputs - the values that the activity operates on, and outputs - the results of the activity's operations. When you add an activity to a workflow, you customize the activity by configuring the activity's inputs. The outputs are computed when the workflow runs."),Object(i.b)("p",null,"Activities have metadata that Geocortex Workflow Designer presents to an end user for easy workflow creation. This metadata can be defined in an ",Object(i.b)("strong",{parentName:"p"},"activity pack"),". They also have an implementation, which powers the behavior of the activity. This implementation is defined in the appropriate language for the target platform; activities for web applications are defined in TypeScript, and activities for Geocortex Mobile applications are defined in C#."),Object(i.b)("h2",{id:"form-elements"},"Form Elements"),Object(i.b)("p",null,"Some platforms have UI, like Geocortex Web or Geocortex Mobile, and can use forms to facilitate end user interaction. Geocortex Workflow ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activity-reference.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____0"}),"provides over twenty configurable ",Object(i.b)("strong",{parentName:"a"},"form elements"))," for building forms, like the Auto Complete, Geometry Picker, Date Picker, Number Slider, and Text Area elements. Just as activities are the building blocks of workflows, form elements are the building blocks of forms."),Object(i.b)("h2",{id:"geocortex-workflow-designer-and-runtime"},"Geocortex Workflow Designer and Runtime"),Object(i.b)("p",null,"Geocortex Workflow includes a powerful tool for building workflows, Geocortex Workflow Designer. Designer's drag-and-drop interface and library of predefined activities simplify the process of creating custom functionality for your web mapping applications, without programming. Geocortex Workflow Designer uses activity definitions to produce workflows."),Object(i.b)("p",null,"When a workflow is run, the workflow definition is read and executed by the ",Object(i.b)("strong",{parentName:"p"},"workflow runtime"),". The runtime is responsible for locating the activity implementation definitions, and executing them with the inputs defined in the workflow definitions. Each ",Object(i.b)("strong",{parentName:"p"},"workflow host")," has a different runtime:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Geocortex Web and Web AppBuilder for ArcGIS use the TypeScript workflow runtime"),Object(i.b)("li",{parentName:"ul"},"Geocortex Mobile and Geocortex Workflow Server use the .NET workflow runtime")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Types of Workflows")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Workflows are classified as ",Object(i.b)("strong",{parentName:"p"},"client")," and ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm%3FTocPath%3DServer%2520Workflows%7C_____0"}),Object(i.b)("strong",{parentName:"a"},"server workflows")),". Client workflows support visual elements such as forms and prompts, and can be run on platforms with a visual interface, such as Geocortex Web or Geocortex Mobile. Server workflows do not support forms, prompts, or other visual elements, and can only be run on Geocortex Workflow Server, which has no visual interface. However, server workflows have a number of unique capabilities, such as the ability to connect to a database or mail server."))),Object(i.b)("h2",{id:"geocortex-workflow-hosts"},"Geocortex Workflow Hosts"),Object(i.b)("p",null,"Geocortex Workflow, is a cross platform product. If an environment supports a version of the workflow runtime it, is called a ",Object(i.b)("strong",{parentName:"p"},"workflow host"),"."),Object(i.b)("p",null,"The current existing workflow hosts are:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Web Applications")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Geocortex Web (client)"),Object(i.b)("li",{parentName:"ul"},"Geocortex Viewer for HTML5 (client)"),Object(i.b)("li",{parentName:"ul"},"Web AppBuilder for ArcGIS (client)")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},".NET Applications")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Geocortex Mobile (client)"),Object(i.b)("li",{parentName:"ul"},"Geocortex Workflow Server (server)")),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/hosting.htm%3FTocPath%3DConfigure%2520Host%2520Applications%7C_____0"}),"Learn more about the different workflow hosts")," or about ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/run-in-different-environments.htm#Run_a_Workflow_in_Different_Environments%3FTocPath%3DRun%2520a%2520Workflow%2520in%2520Different%2520Environments%7C_____0"}),"adapting workflows to different environments"),"."),Object(i.b)("h2",{id:"activity-packs"},"Activity Packs"),Object(i.b)("p",null,"An activity pack defines a collection of activities that Geocortex Workflow Designer is aware of. An activity pack defines the metadata for one or more activities so that it can participate in the Geocortex Workflow Designer interface."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If the activities are targeted for web platforms, the activity pack can also define activity implementations and form elements otherwise, activity implementations and form elements are defined on the target platform."))),Object(i.b)("p",null,"Activity packs must be registered as an ArcGIS item, and this makes them ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/workflow/sdk-web-getting-started#sharing-the-activity-pack"}),"shareable with other workflow authors"),"."),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)(c.a,{mdxType:"UseCaseContainer"},Object(i.b)(a.a,{title:"Get Started with the Web Applications SDK",description:"Build custom activities and form elements with the Web Applications SDK",link:"getting-started-web",mdxType:"UseCaseCard"}),Object(i.b)(a.a,{title:"Get Started with the Geocortex Mobile SDK",description:"Build custom activities and form elements with the Geocortex Mobile SDK",link:"getting-started-mobile",mdxType:"UseCaseCard"}),Object(i.b)(a.a,{title:"Get Started with Geocortex Workflow Server",description:"Build custom activities for a server environment with Geocortex Workflow Server",link:"getting-started-server",mdxType:"UseCaseCard"})))}b.isMDXComponent=!0},289:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var o=r(0),n=r.n(o);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),f=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=f(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=f(r),b=o,d=u["".concat(a,".").concat(b)]||u[b]||p[b]||i;return r?n.a.createElement(d,c({ref:t},l,{components:r})):n.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},290:function(e,t,r){var o;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var a=n.apply(null,o);a&&e.push(a)}else if("object"===i)for(var c in o)r.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o)}()},291:function(e,t,r){"use strict";var o=r(12),n=r(30),i=r(294),a="".startsWith;o(o.P+o.F*r(295)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),r=n(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),o=String(e);return a?a.call(t,o,r):t.slice(r,r+o.length)===o}})},292:function(e,t,r){var o=r(81),n=r(54).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return o(e,n)}},293:function(e,t,r){t.f=r(2)},294:function(e,t,r){var o=r(79),n=r(29);e.exports=function(e,t,r){if(o(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(n(e))}},295:function(e,t,r){var o=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[o]=!1,!"/./"[e](t)}catch(n){}}return!0}},296:function(e,t,r){"use strict";r(53),r(291),r(303);var o=r(0),n=r.n(o),i=r(41),a=r(297),c=r(17),s=r.n(c),l=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};t.a=function(e){var t,r=e.isNavLink,c=l(e,["isNavLink"]),f=c.to,u=c.href,p=f||u,b=Object(a.a)(p),d=Object(o.useRef)(!1),m=r?i.c:i.b,h=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!h&&b&&window.docusaurus.prefetch(p),function(){h&&t&&t.disconnect()}}),[p,h,b]),p&&b&&!p.startsWith("#")?n.a.createElement(m,Object.assign({},c,{onMouseEnter:function(){d.current||(window.docusaurus.preload(p),d.current=!0)},innerRef:function(e){var r,o;h&&e&&b&&(r=e,o=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),o())}))}))).observe(r))},to:p})):n.a.createElement("a",Object.assign({},c,{href:p}))}},297:function(e,t,r){"use strict";function o(e){return/^\/(?!\/)/.test(e)}r.d(t,"a",(function(){return o}))},298:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var o=r(0),n=r.n(o),i=r(290),a=r.n(i),c=r(130),s=r.n(c);function l(e){var t=e.children;return n.a.createElement("div",{className:a()(s.a.root)},t)}},299:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));r(300);var o=r(296),n=r(0),i=r.n(n),a=r(290),c=r.n(a),s=r(131),l=r.n(s);function f(e){var t=e.title,r=e.description,n=e.link;return i.a.createElement("div",{className:c()("card-demo",l.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,r)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(o.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}},300:function(e,t,r){"use strict";r(308)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},301:function(e,t,r){var o=r(22);e.exports=Array.isArray||function(e){return"Array"==o(e)}},302:function(e,t,r){var o=r(51),n=r(52),i=r(28),a=r(77),c=r(27),s=r(80),l=Object.getOwnPropertyDescriptor;t.f=r(10)?l:function(e,t){if(e=i(e),t=a(t,!0),s)try{return l(e,t)}catch(r){}if(c(e,t))return n(!o.f.call(e,t),e[t])}},303:function(e,t,r){"use strict";var o=r(5),n=r(27),i=r(10),a=r(12),c=r(15),s=r(304).KEY,l=r(13),f=r(42),u=r(43),p=r(39),b=r(2),d=r(293),m=r(305),h=r(306),w=r(301),v=r(8),g=r(14),O=r(31),y=r(28),j=r(77),k=r(52),x=r(82),N=r(307),S=r(302),W=r(78),G=r(26),E=r(21),D=S.f,P=G.f,T=N.f,_=o.Symbol,A=o.JSON,M=A&&A.stringify,C=b("_hidden"),F=b("toPrimitive"),I={}.propertyIsEnumerable,z=f("symbol-registry"),H=f("symbols"),R=f("op-symbols"),B=Object.prototype,L="function"==typeof _&&!!W.f,U=o.QObject,J=!U||!U.prototype||!U.prototype.findChild,K=i&&l((function(){return 7!=x(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a}))?function(e,t,r){var o=D(B,t);o&&delete B[t],P(e,t,r),o&&e!==B&&P(B,t,o)}:P,X=function(e){var t=H[e]=x(_.prototype);return t._k=e,t},V=L&&"symbol"==typeof _.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof _},Y=function(e,t,r){return e===B&&Y(R,t,r),v(e),t=j(t,!0),v(r),n(H,t)?(r.enumerable?(n(e,C)&&e[C][t]&&(e[C][t]=!1),r=x(r,{enumerable:k(0,!1)})):(n(e,C)||P(e,C,k(1,{})),e[C][t]=!0),K(e,t,r)):P(e,t,r)},q=function(e,t){v(e);for(var r,o=h(t=y(t)),n=0,i=o.length;i>n;)Y(e,r=o[n++],t[r]);return e},Q=function(e){var t=I.call(this,e=j(e,!0));return!(this===B&&n(H,e)&&!n(R,e))&&(!(t||!n(this,e)||!n(H,e)||n(this,C)&&this[C][e])||t)},Z=function(e,t){if(e=y(e),t=j(t,!0),e!==B||!n(H,t)||n(R,t)){var r=D(e,t);return!r||!n(H,t)||n(e,C)&&e[C][t]||(r.enumerable=!0),r}},$=function(e){for(var t,r=T(y(e)),o=[],i=0;r.length>i;)n(H,t=r[i++])||t==C||t==s||o.push(t);return o},ee=function(e){for(var t,r=e===B,o=T(r?R:y(e)),i=[],a=0;o.length>a;)!n(H,t=o[a++])||r&&!n(B,t)||i.push(H[t]);return i};L||(c((_=function(){if(this instanceof _)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(r){this===B&&t.call(R,r),n(this,C)&&n(this[C],e)&&(this[C][e]=!1),K(this,e,k(1,r))};return i&&J&&K(B,e,{configurable:!0,set:t}),X(e)}).prototype,"toString",(function(){return this._k})),S.f=Z,G.f=Y,r(292).f=N.f=$,r(51).f=Q,W.f=ee,i&&!r(40)&&c(B,"propertyIsEnumerable",Q,!0),d.f=function(e){return X(b(e))}),a(a.G+a.W+a.F*!L,{Symbol:_});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;te.length>re;)b(te[re++]);for(var oe=E(b.store),ne=0;oe.length>ne;)m(oe[ne++]);a(a.S+a.F*!L,"Symbol",{for:function(e){return n(z,e+="")?z[e]:z[e]=_(e)},keyFor:function(e){if(!V(e))throw TypeError(e+" is not a symbol!");for(var t in z)if(z[t]===e)return t},useSetter:function(){J=!0},useSimple:function(){J=!1}}),a(a.S+a.F*!L,"Object",{create:function(e,t){return void 0===t?x(e):q(x(e),t)},defineProperty:Y,defineProperties:q,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:ee});var ie=l((function(){W.f(1)}));a(a.S+a.F*ie,"Object",{getOwnPropertySymbols:function(e){return W.f(O(e))}}),A&&a(a.S+a.F*(!L||l((function(){var e=_();return"[null]"!=M([e])||"{}"!=M({a:e})||"{}"!=M(Object(e))}))),"JSON",{stringify:function(e){for(var t,r,o=[e],n=1;arguments.length>n;)o.push(arguments[n++]);if(r=t=o[1],(g(t)||void 0!==e)&&!V(e))return w(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!V(t))return t}),o[1]=t,M.apply(A,o)}}),_.prototype[F]||r(11)(_.prototype,F,_.prototype.valueOf),u(_,"Symbol"),u(Math,"Math",!0),u(o.JSON,"JSON",!0)},304:function(e,t,r){var o=r(39)("meta"),n=r(14),i=r(27),a=r(26).f,c=0,s=Object.isExtensible||function(){return!0},l=!r(13)((function(){return s(Object.preventExtensions({}))})),f=function(e){a(e,o,{value:{i:"O"+ ++c,w:{}}})},u=e.exports={KEY:o,NEED:!1,fastKey:function(e,t){if(!n(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,o)){if(!s(e))return"F";if(!t)return"E";f(e)}return e[o].i},getWeak:function(e,t){if(!i(e,o)){if(!s(e))return!0;if(!t)return!1;f(e)}return e[o].w},onFreeze:function(e){return l&&u.NEED&&s(e)&&!i(e,o)&&f(e),e}}},305:function(e,t,r){var o=r(5),n=r(16),i=r(40),a=r(293),c=r(26).f;e.exports=function(e){var t=n.Symbol||(n.Symbol=i?{}:o.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:a.f(e)})}},306:function(e,t,r){var o=r(21),n=r(78),i=r(51);e.exports=function(e){var t=o(e),r=n.f;if(r)for(var a,c=r(e),s=i.f,l=0;c.length>l;)s.call(e,a=c[l++])&&t.push(a);return t}},307:function(e,t,r){var o=r(28),n=r(292).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return a&&"[object Window]"==i.call(e)?function(e){try{return n(e)}catch(t){return a.slice()}}(e):n(o(e))}},308:function(e,t,r){var o=r(12),n=r(13),i=r(29),a=/"/g,c=function(e,t,r,o){var n=String(i(e)),c="<"+t;return""!==r&&(c+=" "+r+'="'+String(o).replace(a,"&quot;")+'"'),c+">"+n+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(c),o(o.P+o.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}}}]);