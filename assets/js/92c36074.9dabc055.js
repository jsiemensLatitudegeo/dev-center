(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[9008,9362,826],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:(e,t,n)=>{"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>o})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>i,Z:()=>r});var a=n(2263),o=n(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(a)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+r:r}(t,e,n,a)}}function r(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(7294);const o=function({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(7294),o=n(944),i=n(6010);const r="tabItem_1uMI",l="tabItemActive_2DSg";const s=37,c=39;const p=function(e){const{lazy:t,block:n,defaultValue:p,values:u,groupId:m,className:d}=e,{tabGroupChoices:h,setTabGroupChoices:w}=(0,o.Z)(),[v,g]=(0,a.useState)(p),f=a.Children.toArray(e.children),k=[];if(null!=m){const e=h[m];null!=e&&e!==v&&u.some((t=>t.value===e))&&g(e)}const y=e=>{const t=e.currentTarget,n=k.indexOf(t),a=u[n].value;g(a),null!=m&&(w(m,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:o}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:r}=window;return t>=0&&o<=r&&a<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},b=e=>{var t;let n;switch(e.keyCode){case c:{const t=k.indexOf(e.target)+1;n=k[t]||k[0];break}case s:{const t=k.indexOf(e.target)-1;n=k[t]||k[k.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},u.map((({value:e,label:t})=>a.createElement("li",{role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,className:(0,i.Z)("tabs__item",r,{"tabs__item--active":v===e}),key:e,ref:e=>k.push(e),onKeyDown:b,onFocus:y,onClick:y},t)))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(7294),o=n(9443);const i=function(){const e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},4340:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>r,metadata:()=>l,toc:()=>s,default:()=>p});var a=n(2122),o=(n(7294),n(3905));const i={},r=void 0,l={unversionedId:"snippets/workflow-url",id:"snippets/workflow-url",isDocsHomePage:!1,title:"workflow-url",description:"https://apps.geocortex.com/workflow/designer/#workflow=",source:"@site/docs/snippets/workflow-url.mdx",sourceDirName:"snippets",slug:"/snippets/workflow-url",permalink:"/docs/snippets/workflow-url",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/snippets/workflow-url.mdx",version:"current",frontMatter:{}},s=[],c={toc:s};function p({components:e,...t}){return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{class:"alert alert--secondary",role:"alert"},"https://apps.geocortex.com/workflow/designer/#workflow=",(0,o.kt)("b",null,"44010fc421dd4659b74fb921e09ba594")),(0,o.kt)("br",null))}p.isMDXComponent=!0},9422:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>r,metadata:()=>l,toc:()=>s,default:()=>p});var a=n(2122),o=(n(7294),n(3905));const i={},r=void 0,l={unversionedId:"workflow/snippets/prereqs-mobile",id:"workflow/snippets/prereqs-mobile",isDocsHomePage:!1,title:"prereqs-mobile",description:"Extending Geocortex Workflow for Mobile requires development and deployment of a custom Geocortex Mobile Application using the Geocortex Mobile SDK",source:"@site/docs/workflow/snippets/prereqs-mobile.mdx",sourceDirName:"workflow/snippets",slug:"/workflow/snippets/prereqs-mobile",permalink:"/docs/workflow/snippets/prereqs-mobile",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/prereqs-mobile.mdx",version:"current",frontMatter:{}},s=[],c={toc:s};function p({components:e,...t}){return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Extending Geocortex Workflow for Mobile requires development and deployment of a custom Geocortex Mobile Application using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-overview"},"Geocortex Mobile SDK")))),(0,o.kt)("p",null,"Follow the instructions in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-mobile-overview"},"Geocortex Mobile SDK")," page to set up the environment for extending Workflow for Geocortex Mobile."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A working knowledge of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-ca/dotnet/csharp/"},"C#")," and ",(0,o.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/platform/dotnet-standard"},".NET Standard")," is recommended before extending Workflow for Geocortex Mobile"))))}p.isMDXComponent=!0},2548:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>u,metadata:()=>m,toc:()=>d,default:()=>w});var a=n(2122),o=(n(7294),n(3905)),i=n(1395),r=n(8215),l=n(9422),s=n(4996),c=n(4340);const p={title:"Show a Callout on the Map with an Activity",description:"Geocortex Workflow - Access the map and show a callout through a custom activity."},u=void 0,m={unversionedId:"workflow/tutorial-mobile-show-map-callout",id:"workflow/tutorial-mobile-show-map-callout",isDocsHomePage:!1,title:"Show a Callout on the Map with an Activity",description:"Geocortex Workflow - Access the map and show a callout through a custom activity.",source:"@site/docs/workflow/tutorial-mobile-show-map-callout.mdx",sourceDirName:"workflow",slug:"/workflow/tutorial-mobile-show-map-callout",permalink:"/docs/workflow/tutorial-mobile-show-map-callout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/tutorial-mobile-show-map-callout.mdx",version:"current",frontMatter:{title:"Show a Callout on the Map with an Activity",description:"Geocortex Workflow - Access the map and show a callout through a custom activity."},sidebar:"workflow",previous:{title:"Implement an Activity that Calculates a Logarithm",permalink:"/docs/workflow/tutorial-mobile-calculate-logarithm-activity"},next:{title:"Implement an Loading Indicator Form Element",permalink:"/docs/workflow/tutorial-mobile-activity-indicator-form-element"}},d=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Set up the Activity",id:"set-up-the-activity",children:[]},{value:"Access the <code>MapProviderBase</code>",id:"access-the-mapproviderbase",children:[]},{value:"Load the <code>MapView</code>",id:"load-the-mapview",children:[]},{value:"Add a Callout at the Map Center",id:"add-a-callout-at-the-map-center",children:[]},{value:"Test your Activity",id:"test-your-activity",children:[]}],h={toc:d};function w({components:e,...t}){return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Some activities may need access to the map embedded in the Geocortex Mobile Application. The ",(0,o.kt)("inlineCode",{parentName:"p"},"MapProviderBase")," class can be injected in an activity and used to access the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/net/latest/uwp/api-reference/html/T_Esri_ArcGISRuntime_Mapping_Map.htm"},"Map")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/net/latest/uwp/api-reference/html/T_Esri_ArcGISRuntime_UI_Controls_MapView.htm"},"MapView")," for the application."),(0,o.kt)("p",null,"This article will walk you through accessing the map from an activity and displaying a callout at the map center point."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)(l.default,{mdxType:"MobilePrereqs"}),(0,o.kt)("h2",{id:"set-up-the-activity"},"Set up the Activity"),(0,o.kt)("p",null,"First, the basic activity needs to be setup and registered. Below is an example of an activity setup to take text to display in the map callout."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-mobile-activity-reference"},"Learn more about custom activities"),"."))),(0,o.kt)(i.Z,{defaultValue:"activity",values:[{label:"Activity",value:"activity"},{label:"Registration",value:"registration"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"activity",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/workflow/PlaceCalloutAtCenter.cs"',title:'"App1/App1/workflow/PlaceCalloutAtCenter.cs"'},'using App1.Workflow;\nusing VertiGIS.Mobile.Composition;\nusing Geocortex.Workflow.GIS.ArcGISRuntime;\nusing Geocortex.Workflow.Runtime;\nusing System;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\n[assembly: Export(typeof(PlaceCalloutAtCenter))]\nnamespace App1.Workflow\n{\n    public class PlaceCalloutAtCenter : IActivityHandler\n    {\n        public static string Action { get; } = "uuid:<uuid>::PlaceCalloutAtCenter";\n\n        public async Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            // highlight-next-line\n            var calloutText = (string)inputs["calloutText"];\n\n            return new Dictionary<string, object>();\n        }\n    }\n}\n'))),(0,o.kt)(r.Z,{value:"registration",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/workflow/ActivityLoader.cs"',title:'"App1/App1/workflow/ActivityLoader.cs"'},'using System;\nusing System.Collections.Generic;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing App1.Workflow;\nusing VertiGIS.Mobile.Composition;\nusing Geocortex.Workflow.Runtime;\nusing Geocortex.Workflow.Runtime.Definition;\nusing Geocortex.Workflow.Runtime.Execution;\n\n[assembly: Export(typeof(ActivityLoader), SingleInstance = true, AsImplementedInterfaces = true)]\nnamespace App1.Workflow\n{\n    public class ActivityLoader : IActivityHandlerFactory\n    {\n        /// <summary>\n        /// Gets a mapping of action names to implementations of <see cref="IActivityHandler"/>s.\n        /// </summary>\n        private Dictionary<string, Func<IActivityHandler>> RegisteredActivities { get; } = new Dictionary<string, Func<IActivityHandler>>();\n\n        public ActivityLoader(Func<PlaceCalloutAtCenter> placeCalloutAtCenterFactory)\n        {\n            RegisteredActivities[PlaceCalloutAtCenter.Action] = placeCalloutAtCenterFactory;\n        }\n\n        /// <summary>\n        /// Creates an <see cref="IActivityHandler"/>.\n        /// </summary>\n        /// <param name="action">The name of the action to create.</param>\n        /// <param name="token">The cancellation token.</param>\n        /// <param name="inspector">The <see cref="ProgramInspector"/> for the program.</param>\n        /// <returns>The activity handler for the given action.</returns>\n        public Task<IActivityHandler> Create(string action, CancellationToken token, ProgramInspector inspector = null)\n        {\n            if (action == null || token.IsCancellationRequested)\n            {\n                return Task.FromResult<IActivityHandler>(null);\n            }\n\n            if (RegisteredActivities.TryGetValue(action, out Func<IActivityHandler> handlerType))\n            {\n                return Task.FromResult(handlerType());\n            }\n            else\n            {\n                return Task.FromResult<IActivityHandler>(null);\n            }\n        }\n    }\n}\n\n\n')))),(0,o.kt)("h2",{id:"access-the-mapproviderbase"},"Access the ",(0,o.kt)("inlineCode",{parentName:"h2"},"MapProviderBase")),(0,o.kt)("p",null,"Accessing the map for the application uses the built-in ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-dependency-injection"},"dependency injection pattern")," to inject a ",(0,o.kt)("inlineCode",{parentName:"p"},"MapProviderBase")," class which exposes the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/net/latest/uwp/api-reference/html/T_Esri_ArcGISRuntime_Mapping_Map.htm"},"Map")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/net/latest/uwp/api-reference/html/T_Esri_ArcGISRuntime_UI_Controls_MapView.htm"},"MapView"),"."),(0,o.kt)("p",null,"To inject the MapProviderBase, add a new ",(0,o.kt)("a",{parentName:"p",href:"https://autofaccn.readthedocs.io/en/latest/resolve/relationships.html#dynamic-instantiation-func-b"},"Autofac factory")," property that injects a ",(0,o.kt)("inlineCode",{parentName:"p"},"MapProviderBase")," into your custom activity."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/workflow/PlaceCalloutAtCenter.cs"',title:'"App1/App1/workflow/PlaceCalloutAtCenter.cs"'},'using App1.Workflow;\nusing VertiGIS.Mobile.Composition;\nusing Geocortex.Workflow.GIS.ArcGISRuntime;\nusing Geocortex.Workflow.Runtime;\nusing System;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\n[assembly: Export(typeof(PlaceCalloutAtCenter))]\nnamespace App1.Workflow\n{\n    public class PlaceCalloutAtCenter : IActivityHandler\n    {\n        public static string Action { get; } = "uuid:<uuid>::PlaceCalloutAtCenter";\n\n        // highlight-start\n        [ProviderFactoryAttribute(typeof(MapProviderBase))]\n        public Func<MapProviderBase> MapProviderFactory { get; set; }\n        // highlight-end\n\n        public async Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            var calloutText = (string)inputs["calloutText"];\n\n            return new Dictionary<string, object>();\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"load-the-mapview"},"Load the ",(0,o.kt)("inlineCode",{parentName:"h2"},"MapView")),(0,o.kt)("p",null,"Next, we need to load the ",(0,o.kt)("inlineCode",{parentName:"p"},"MapView")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"MapProviderFactory"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/workflow/PlaceCalloutAtCenter.cs"',title:'"App1/App1/workflow/PlaceCalloutAtCenter.cs"'},'using App1.Workflow;\nusing Esri.ArcGISRuntime.Mapping;\nusing Esri.ArcGISRuntime.Xamarin.Forms;\nusing VertiGIS.Mobile.Composition;\nusing Geocortex.Workflow.GIS.ArcGISRuntime;\nusing Geocortex.Workflow.Runtime;\nusing System;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\nusing VertiGIS.Mobile.Infrastructure.Workflow;\n\n[assembly: Export(typeof(PlaceCalloutAtCenter))]\nnamespace App1.Workflow\n{\n    public class PlaceCalloutAtCenter : IActivityHandler\n    {\n        public static string Action { get; } = "uuid:<uuid>::PlaceCalloutAtCenter";\n\n        [ProviderFactoryAttribute(typeof(MapProviderBase))]\n        public Func<MapProviderBase> MapProviderFactory { get; set; }\n\n        public async Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            var calloutText = (string)inputs["calloutText"];\n\n            // highlight-start\n            // Get an instance of the MapProvider\n            var mapProvider = MapProviderFactory();\n            // Ensure the map has loaded\n            await mapProvider.Load();\n            // ArcGIS runtime Map\n            Map map = mapProvider.Map;\n            // ArcGIS runtime MapView\n            MapView mapView = (MapView)((WorkflowMapProvider)mapProvider).View;\n            // highlight-end\n\n            return new Dictionary<string, object>();\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"add-a-callout-at-the-map-center"},"Add a Callout at the Map Center"),(0,o.kt)("p",null,"Finally, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"MapView")," to get the map center and add a callout with the user's text."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Operations related to UI activities have to run in Xamarin's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/xamarin/essentials/main-thread"},"main thread"),", else they will throw an error."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/workflow/PlaceCalloutAtCenter.cs"',title:'"App1/App1/workflow/PlaceCalloutAtCenter.cs"'},'using App1.Workflow;\nusing VertiGIS.Mobile.Composition;\nusing Esri.ArcGISRuntime.Geometry;\nusing Esri.ArcGISRuntime.UI;\nusing Esri.ArcGISRuntime.Mapping;\nusing Esri.ArcGISRuntime.Xamarin.Forms;\nusing Geocortex.Workflow.GIS.ArcGISRuntime;\nusing Geocortex.Workflow.Runtime;\nusing System;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\nusing VertiGIS.Mobile.Infrastructure.Workflow;\n\n[assembly: Export(typeof(PlaceCalloutAtCenter))]\nnamespace App1.Workflow\n{\n    public class PlaceCalloutAtCenter : IActivityHandler\n    {\n        public static string Action { get; } = "uuid:<uuid>::PlaceCalloutAtCenter";\n\n        [ProviderFactoryAttribute(typeof(MapProviderBase))]\n        public Func<MapProviderBase> MapProviderFactory { get; set; }\n\n        public async Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            var calloutText = (string)inputs["calloutText"];\n\n            // Get an instance of the MapProvider\n            dynamic mapProvider = MapProviderFactory();\n            // Ensure the map has loaded\n            await mapProvider.Load();\n            // ArcGIS runtime Map\n            Map map = mapProvider.Map;\n            // ArcGIS runtime MapView\n            MapView mapView = (MapView)((WorkflowMapProvider)mapProvider).View;\n\n            // highlight-start\n            Xamarin.Essentials.MainThread.BeginInvokeOnMainThread(() =>\n            {\n                var currentEnvelope = (Envelope)mapView.GetCurrentViewpoint(Esri.ArcGISRuntime.Mapping.ViewpointType.BoundingGeometry).TargetGeometry;\n\n                mapView.ShowCalloutAt(currentEnvelope.GetCenter(), new CalloutDefinition("Hey!", $"Listen! {calloutText}"));\n            });\n            // highlight-end\n\n            return new Dictionary<string, object>();\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"test-your-activity"},"Test your Activity"),(0,o.kt)("p",null,"Now you can ",(0,o.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/mobileviewer/latest/admin-help/Default.htm#gmv/designer/add-a-workflow-to-an-app.htm"},"build a workflow for Geocortex Mobile")," that uses your new activity!"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you want your custom activity to show up with a friendly user interface in Geocortex Workflow Designer, check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-net-register-activities"},"Registering .NET Activities with Geocortex Workflow Designer"),"."))),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-activity.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____167"},(0,o.kt)("inlineCode",{parentName:"a"},"RunActivity"))," activity can be used to execute your activity by the name defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"PlaceCalloutAtCenter.cs")," (for this example, ",(0,o.kt)("inlineCode",{parentName:"p"},"uuid:<uuid>::PlaceCalloutAtCenter"),")."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",null,"You can"," ",(0,o.kt)("a",{href:(0,s.Z)("workflows/mobile-show-map-callout.json"),download:"show-map-callout.json"},"download this demo workflow")," ","that runs the custom activity and",(0,o.kt)("a",{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"}," ","import it into the Geocortex Workflow Designer."," ")))),(0,o.kt)("p",null,"Next you need to run the workflow you just created in your Geocortex Mobile SDK project."),(0,o.kt)("p",null,"You can do this by configuring the layout and app config to run a workflow. You will need to copy the ID of the the workflow you created into the app.json"),(0,o.kt)(c.default,{mdxType:"WorkflowUrlSnippet"}),(0,o.kt)(i.Z,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"Layout",value:"layout"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"config",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["large"]\n        },\n        {\n            "$type": "workflow",\n            "id": "custom-workflow",\n            "title": "Custom Workflow",\n            "target": "#taskbar",\n            // highlight-next-line\n            "portalItem": "<your-workflow-id>"\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm",\n            "items": [\n                {\n                    "title": "Run Custom Workflow",\n                    "isEnabled": true,\n                    "iconId": "workflow",\n                    "action": {\n                        "name": "workflow.run",\n                        "arguments": {\n                            "id": "custom-workflow"\n                        }\n                    }\n                }\n            ]\n        }\n    ]\n}\n'))),(0,o.kt)(r.Z,{value:"layout",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',title:'"App1/App1/layout-large.xml"'},'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    <gxm:taskbar id="taskbar" orientation="vertical">\n        <map slot="main">\n            <stack margin="0.8" slot="top-right" halign="end">\n                <iwtm config="iwtm"/>\n            </stack>\n        </map>\n    </gxm:taskbar>\n</layout>\n'))),(0,o.kt)(r.Z,{value:"ui",mdxType:"TabItem"},(0,o.kt)("img",{src:(0,s.Z)("img/workflow-mobile-show-map-callout.png")}))))}w.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o})}}]);