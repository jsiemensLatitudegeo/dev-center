(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[548,1188],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>p,kt:()=>v});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),v=i,w=m["".concat(c,".").concat(v)]||m[v]||d[v]||n;return r?o.createElement(w,a(a({ref:t},p),{},{components:r})):o.createElement(w,a({ref:t},p))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<n;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3919:(e,t,r)=>{"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!o(e)}r.d(t,{b:()=>o,Z:()=>i})},4996:(e,t,r)=>{"use strict";r.d(t,{C:()=>n,Z:()=>a});var o=r(2263),i=r(3919);function n(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,o.Z)();return{withBaseUrl:(r,o)=>function(e,t,r,{forcePrependBaseUrl:o=!1,absolute:n=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(o)return t+r;const a=r.startsWith(t)?r:t+r.replace(/^\//,"");return n?e+a:a}(t,e,r,o)}}function a(e,t={}){const{withBaseUrl:r}=n();return r(e,t)}},5150:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>l,toc:()=>p,default:()=>m});var o=r(2122),i=(r(7294),r(3905)),n=r(9937),a=r(4996);const s={title:"Create an Activity",description:"Geocortex Workflow - Create a workflow activity for web applications"},c=void 0,l={unversionedId:"workflow/sdk-server-create-activity",id:"workflow/sdk-server-create-activity",isDocsHomePage:!1,title:"Create an Activity",description:"Geocortex Workflow - Create a workflow activity for web applications",source:"@site/docs/workflow/sdk-server-create-activity.mdx",sourceDirName:"workflow",slug:"/workflow/sdk-server-create-activity",permalink:"/docs/workflow/sdk-server-create-activity",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/sdk-server-create-activity.mdx",version:"current",frontMatter:{title:"Create an Activity",description:"Geocortex Workflow - Create a workflow activity for web applications"},sidebar:"workflow",previous:{title:"SDK Overview",permalink:"/docs/workflow/sdk-server-overview"},next:{title:"Reference a Third Party Library",permalink:"/docs/workflow/sdk-server-reference-third-party-library"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create the Activity",id:"create-the-activity",children:[]},{value:"Register the Activity with an Assembly Attribute",id:"register-the-activity-with-an-assembly-attribute",children:[]},{value:"Deploy the Activity",id:"deploy-the-activity",children:[]},{value:"Use the Activity in a Workflow",id:"use-the-activity-in-a-workflow",children:[]}],d={toc:p};function m({components:e,...t}){return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article will walk you through creating a new workflow activity for Geocortex Workflow Server."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)(n.default,{mdxType:"ServerPrereqs"}),(0,i.kt)("h2",{id:"create-the-activity"},"Create the Activity"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new file ",(0,i.kt)("inlineCode",{parentName:"li"},"CustomActivity.cs")," in the root of your Geocortex Workflow Server extension project."),(0,i.kt)("li",{parentName:"ol"},"Add a new skeleton workflow activity that implements ",(0,i.kt)("inlineCode",{parentName:"li"},"IActivityHandler"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/CustomActivity.cs"',title:'"App1/App1/CustomActivity.cs"'},'using Geocortex.Workflow.Runtime;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace App1.Workflow\n{\n    public class CustomActivity : IActivityHandler\n    {\n        public static string Action { get; } = "uuid:<uuid>::CustomActivity";\n\n        public Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            return Task.FromResult((IDictionary<string, object>)new Dictionary<string, object>(){\n                ["test"] = "value"\n            });\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"register-the-activity-with-an-assembly-attribute"},"Register the Activity with an Assembly Attribute"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new file, ",(0,i.kt)("inlineCode",{parentName:"li"},"Properties\\AssemblyInfo.cs")),(0,i.kt)("li",{parentName:"ol"},"Add the custom Geocortex Workflow attribute to ",(0,i.kt)("inlineCode",{parentName:"li"},"AssemblyInfo.cs"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/Properties/AssemblyInfo.cs"',title:'"App1/App1/Properties/AssemblyInfo.cs"'},"[assembly: Geocortex.Workflow.Runtime.WorkflowActivities]\n")),(0,i.kt)("p",null,"This registers the assembly to a namespace that Geocortex Workflow Server can discover."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"By convention, assembly attributes are typically added to a file called ",(0,i.kt)("inlineCode",{parentName:"p"},'"Properties\\AssemblyInfo.cs"'),", but they can be added to any code file."))),(0,i.kt)("h2",{id:"deploy-the-activity"},"Deploy the Activity"),(0,i.kt)("p",null,"Follow the instructions to ",(0,i.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-server-overview#deploying-geocortex-workflow-server-activities"},"deploy Geocortex Workflow Server activities"),"."),(0,i.kt)("h2",{id:"use-the-activity-in-a-workflow"},"Use the Activity in a Workflow"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm"},"Server workflows")," that run on your Geocortex Workflow Server deployment can now run this custom activity."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-net-register-activities"},"Registering stubs for .NET activities")," provides a user friendly interface for your custom activities in Geocortex Workflow Designer."))),(0,i.kt)("p",null,"You can run the custom activity by referencing it by action with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-activity.htm"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"RunActivity")," activity"),'. The custom activity created in this article takes no inputs but produces an output with the property "test".'),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",null,"You can"," ",(0,i.kt)("a",{href:(0,a.Z)("workflows/server-create-activity.json"),download:"custom-server-activity.json"},"download this demo server workflow")," ","that runs the custom activity and",(0,i.kt)("a",{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"}," ","import it into the Geocortex Workflow Designer."," ")))))}m.isMDXComponent=!0},9937:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>n,contentTitle:()=>a,metadata:()=>s,toc:()=>c,default:()=>p});var o=r(2122),i=(r(7294),r(3905));const n={},a=void 0,s={unversionedId:"workflow/snippets/prereqs-server",id:"workflow/snippets/prereqs-server",isDocsHomePage:!1,title:"prereqs-server",description:"Extending Geocortex Workflow with server side components requires an on-premises installation of Geocortex Workflow. You will need administrative access to this installation.",source:"@site/docs/workflow/snippets/prereqs-server.mdx",sourceDirName:"workflow/snippets",slug:"/workflow/snippets/prereqs-server",permalink:"/docs/workflow/snippets/prereqs-server",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/prereqs-server.mdx",version:"current",frontMatter:{}},c=[],l={toc:c};function p({components:e,...t}){return(0,i.kt)("wrapper",(0,o.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Extending Geocortex Workflow with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm%3FTocPath%3DServer%2520Workflows%7C_____0"},"server side components")," requires an ",(0,i.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/installation.htm"},"on-premises installation of Geocortex Workflow"),". You will need administrative access to this installation."))),(0,i.kt)("p",null,"Follow the instructions in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-server-overview"},"Geocortex Workflow Server")," page to set up your development environment and Geocortex Workflow Server extension project."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A working knowledge of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-ca/dotnet/csharp/"},"C#")," and ",(0,i.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/platform/dotnet-standard"},".NET Standard")," is recommended before extending Geocortex Workflow Server"))))}p.isMDXComponent=!0}}]);