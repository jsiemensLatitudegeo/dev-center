(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[400,9362,826],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var o=n(7294),i=n(3727),a=n(2263),r=n(3919),l=n(412);const s=(0,o.createContext)({collectLink:()=>{}});var c=n(4996),u=n(8780);const p=function({isNavLink:e,to:t,href:n,activeClassName:p,isActive:m,"data-noBrokenLinkCheck":d,autoAddBaseUrl:h=!0,...f}){var v;const{siteConfig:{trailingSlash:g}}=(0,a.Z)(),{withBaseUrl:k}=(0,c.C)(),y=(0,o.useContext)(s),w=t||n,b=(0,r.Z)(w),x=null==w?void 0:w.replace("pathname://","");let N=void 0!==x?(C=x,h&&(e=>e.startsWith("/"))(C)?k(C):C):void 0;var C;N&&b&&(N=(0,u.applyTrailingSlash)(N,g));const A=(0,o.useRef)(!1),T=e?i.OL:i.rU,I=l.Z.canUseIntersectionObserver;let M;(0,o.useEffect)((()=>(!I&&b&&null!=N&&window.docusaurus.prefetch(N),()=>{I&&M&&M.disconnect()})),[N,I,b]);const S=null!==(v=null==N?void 0:N.startsWith("#"))&&void 0!==v&&v,D=!N||!b||S;return N&&b&&!S&&!d&&y.collectLink(N),D?o.createElement("a",{href:N,...w&&!b&&{target:"_blank",rel:"noopener noreferrer"},...f}):o.createElement(T,{...f,onMouseEnter:()=>{A.current||null==N||(window.docusaurus.preload(N),A.current=!0)},innerRef:e=>{var t,n;I&&e&&b&&(t=e,n=()=>{null!=N&&window.docusaurus.prefetch(N)},M=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.unobserve(t),M.disconnect(),n())}))})),M.observe(t))},to:N||"",...e&&{isActive:m,activeClassName:p}})}},3919:(e,t,n)=>{"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!o(e)}n.d(t,{b:()=>o,Z:()=>i})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>a,Z:()=>r});var o=n(2263),i=n(3919);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,o.Z)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(o)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+r:r}(t,e,n,o)}}function r(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(7294);const i=function({children:e,hidden:t,className:n}){return o.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(7294),i=n(944),a=n(6010);const r="tabItem_1uMI",l="tabItemActive_2DSg";const s=37,c=39;const u=function(e){const{lazy:t,block:n,defaultValue:u,values:p,groupId:m,className:d}=e,{tabGroupChoices:h,setTabGroupChoices:f}=(0,i.Z)(),[v,g]=(0,o.useState)(u),k=o.Children.toArray(e.children),y=[];if(null!=m){const e=h[m];null!=e&&e!==v&&p.some((t=>t.value===e))&&g(e)}const w=e=>{const t=e.currentTarget,n=y.indexOf(t),o=p[n].value;g(o),null!=m&&(f(m,o),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:o,right:i}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:r}=window;return t>=0&&i<=r&&o<=a&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},b=e=>{var t;let n;switch(e.keyCode){case c:{const t=y.indexOf(e.target)+1;n=y[t]||y[0];break}case s:{const t=y.indexOf(e.target)-1;n=y[t]||y[y.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},d)},p.map((({value:e,label:t})=>o.createElement("li",{role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,className:(0,a.Z)("tabs__item",r,{"tabs__item--active":v===e}),key:e,ref:e=>y.push(e),onKeyDown:b,onFocus:w,onClick:w},t)))),t?(0,o.cloneElement)(k.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(7294),i=n(9443);const a=function(){const e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),o="/"===n?"/":t?(i=n).endsWith("/")?i:`${i}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var i;return e.replace(n,o)}},8780:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return o(i).default}});var a=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return o(a).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(6742),i=n(7294),a=n(6010);const r="root_2PFE";function l({title:e,description:t,link:n}){return i.createElement("div",{className:(0,a.Z)("card-demo",r)},i.createElement("div",{className:"card"},i.createElement("div",{className:"card__header"},i.createElement("h3",null,e)),i.createElement("div",{className:"card__body"},i.createElement("p",null,t)),i.createElement("div",{className:"card__footer"},i.createElement(o.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(7294);const i="root_NqT0";function a({children:e}){return o.createElement("div",{className:i},e)}},4340:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>r,metadata:()=>l,toc:()=>s,default:()=>u});var o=n(2122),i=(n(7294),n(3905));const a={},r=void 0,l={unversionedId:"snippets/workflow-url",id:"snippets/workflow-url",isDocsHomePage:!1,title:"workflow-url",description:"https://apps.geocortex.com/workflow/designer/#workflow=",source:"@site/docs/snippets/workflow-url.mdx",sourceDirName:"snippets",slug:"/snippets/workflow-url",permalink:"/docs/snippets/workflow-url",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/snippets/workflow-url.mdx",version:"current",frontMatter:{}},s=[],c={toc:s};function u({components:e,...t}){return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{class:"alert alert--secondary",role:"alert"},"https://apps.geocortex.com/workflow/designer/#workflow=",(0,i.kt)("b",null,"44010fc421dd4659b74fb921e09ba594")),(0,i.kt)("br",null))}u.isMDXComponent=!0},9422:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>r,metadata:()=>l,toc:()=>s,default:()=>u});var o=n(2122),i=(n(7294),n(3905));const a={},r=void 0,l={unversionedId:"workflow/snippets/prereqs-mobile",id:"workflow/snippets/prereqs-mobile",isDocsHomePage:!1,title:"prereqs-mobile",description:"Extending Geocortex Workflow for Mobile requires development and deployment of a custom Geocortex Mobile Application using the Geocortex Mobile SDK",source:"@site/docs/workflow/snippets/prereqs-mobile.mdx",sourceDirName:"workflow/snippets",slug:"/workflow/snippets/prereqs-mobile",permalink:"/docs/workflow/snippets/prereqs-mobile",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/prereqs-mobile.mdx",version:"current",frontMatter:{}},s=[],c={toc:s};function u({components:e,...t}){return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Extending Geocortex Workflow for Mobile requires development and deployment of a custom Geocortex Mobile Application using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-overview"},"Geocortex Mobile SDK")))),(0,i.kt)("p",null,"Follow the instructions in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-mobile-overview"},"Geocortex Mobile SDK")," page to set up the environment for extending Workflow for Geocortex Mobile."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A working knowledge of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-ca/dotnet/csharp/"},"C#")," and ",(0,i.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/platform/dotnet-standard"},".NET Standard")," is recommended before extending Workflow for Geocortex Mobile"))))}u.isMDXComponent=!0},794:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>m,contentTitle:()=>d,metadata:()=>h,toc:()=>f,default:()=>g});var o=n(2122),i=(n(7294),n(3905)),a=n(9422),r=n(4340),l=n(4996),s=n(7763),c=n(1962),u=n(1395),p=n(8215);const m={title:"Implement an Activity that Calculates a Logarithm",description:"Geocortex Workflow - Implement a custom activity for Geocortex Mobile"},d=void 0,h={unversionedId:"workflow/tutorial-mobile-calculate-logarithm-activity",id:"workflow/tutorial-mobile-calculate-logarithm-activity",isDocsHomePage:!1,title:"Implement an Activity that Calculates a Logarithm",description:"Geocortex Workflow - Implement a custom activity for Geocortex Mobile",source:"@site/docs/workflow/tutorial-mobile-calculate-logarithm-activity.mdx",sourceDirName:"workflow",slug:"/workflow/tutorial-mobile-calculate-logarithm-activity",permalink:"/docs/workflow/tutorial-mobile-calculate-logarithm-activity",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/tutorial-mobile-calculate-logarithm-activity.mdx",version:"current",frontMatter:{title:"Implement an Activity that Calculates a Logarithm",description:"Geocortex Workflow - Implement a custom activity for Geocortex Mobile"},sidebar:"workflow",previous:{title:"Reference a Third Party Library",permalink:"/docs/workflow/sdk-mobile-reference-third-party-library"},next:{title:"Show a Callout on the Map with an Activity",permalink:"/docs/workflow/tutorial-mobile-show-map-callout"}},f=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Set up the Activity Skeleton",id:"set-up-the-activity-skeleton",children:[]},{value:"Register the Activity with the <code>IActivityHandlerFactory</code>",id:"register-the-activity-with-the-iactivityhandlerfactory",children:[]},{value:"Implement the Custom Activity",id:"implement-the-custom-activity",children:[]},{value:"Test your Activity",id:"test-your-activity",children:[]},{value:"Relevant SDK Sample",id:"relevant-sdk-sample",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],v={toc:f};function g({components:e,...t}){return(0,i.kt)("wrapper",(0,o.Z)({},v,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Implementing a custom ",(0,i.kt)("a",{parentName:"p",href:"/docs/workflow/key-concepts#activities"},"activity")," allows you to build a reusable, completely custom behavior to augment the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activity-reference.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____0"},"existing activities")," that come with Geocortex Workflow."),(0,i.kt)("p",null,"In this article, you will learn how to create a custom activity that calculates the logarithm of a number with a given base."),(0,i.kt)("img",{src:(0,l.Z)("img/workflow-mobile-calculate-logarithm-activity.png")}),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)(a.default,{mdxType:"MobilePrereqs"}),(0,i.kt)("h2",{id:"set-up-the-activity-skeleton"},"Set up the Activity Skeleton"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new file ",(0,i.kt)("inlineCode",{parentName:"li"},"CalculateLog.cs")," in the platform agnostic project of the Geocortex Mobile ",(0,i.kt)("a",{parentName:"li",href:"/docs/mobile/sdk-overview"},"Quickstart"),"."),(0,i.kt)("li",{parentName:"ol"},"Add a new skeleton workflow activity that implements ",(0,i.kt)("inlineCode",{parentName:"li"},"IActivityHandler"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/CalculateLog.cs"',title:'"App1/App1/CalculateLog.cs"'},'using App1.Workflow;\nusing VertiGIS.Mobile.Composition;\nusing Geocortex.Workflow.Runtime;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\n[assembly: Export(typeof(CalculateLog))]\nnamespace App1.Workflow\n{\n    public class CalculateLog : IActivityHandler\n    {\n        public static string Action { get; } = "uuid:<uuid>::CalculateLog";\n\n        public Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            return Task.FromResult((IDictionary<string, object>)new Dictionary<string, object>());\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"register-the-activity-with-the-iactivityhandlerfactory"},"Register the Activity with the ",(0,i.kt)("inlineCode",{parentName:"h2"},"IActivityHandlerFactory")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new file, ",(0,i.kt)("inlineCode",{parentName:"li"},"ActivityLoader.cs")," in the platform agnostic project of the Geocortex Mobile ",(0,i.kt)("a",{parentName:"li",href:"/docs/mobile/sdk-overview"},"Quickstart"),"."),(0,i.kt)("li",{parentName:"ol"},"Implement the ",(0,i.kt)("inlineCode",{parentName:"li"},"IActivityHandlerFactory")," interface and register the activity skeleton we created in the constructor.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Learn more about activity registration in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-mobile-activity-reference"},"activity reference"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/ActivityLoader.cs"',title:'"App1/App1/ActivityLoader.cs"'},'using System;\nusing System.Collections.Generic;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing VertiGIS.Mobile.Composition;\nusing Geocortex.Workflow.Runtime;\nusing Geocortex.Workflow.Runtime.Definition;\nusing Geocortex.Workflow.Runtime.Execution;\nusing App1.Workflow;\n\n[assembly: Export(typeof(ActivityLoader), SingleInstance = true, AsImplementedInterfaces = true)]\nnamespace App1.Workflow\n{\n    public class ActivityLoader : IActivityHandlerFactory\n    {\n        /// <summary>\n        /// Gets a mapping of action names to implementations of <see cref="IActivityHandler"/>s.\n        /// </summary>\n        private Dictionary<string, Func<IActivityHandler>> RegisteredActivities { get; } = new Dictionary<string, Func<IActivityHandler>>();\n\n        public ActivityLoader(Func<CalculateLog> calculateLogFactory)\n        {\n            RegisteredActivities[CalculateLog.Action] = calculateLogFactory;\n        }\n\n        /// <summary>\n        /// Creates an <see cref="IActivityHandler"/>.\n        /// </summary>\n        /// <param name="action">The name of the action to create.</param>\n        /// <param name="token">The cancellation token.</param>\n        /// <param name="inspector">The <see cref="ProgramInspector"/> for the program.</param>\n        /// <returns>The activity handler for the given action.</returns>\n        public Task<IActivityHandler> Create(string action, CancellationToken token, ProgramInspector inspector = null)\n        {\n            if (action == null || token.IsCancellationRequested)\n            {\n                return Task.FromResult<IActivityHandler>(null);\n            }\n\n            if (RegisteredActivities.TryGetValue(action, out Func<IActivityHandler> handlerType))\n            {\n                return Task.FromResult(handlerType());\n            }\n            else\n            {\n                return Task.FromResult<IActivityHandler>(null);\n            }\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"implement-the-custom-activity"},"Implement the Custom Activity"),(0,i.kt)("p",null,"We now have a empty activity that Geocortex Mobile can use that takes no inputs and produces no outputs. By changing the inputs, outputs, and execute logic, you can create your own custom activity that calculates the logarithm of a number."),(0,i.kt)("p",null,"First, let's change the execute logic to parse inputs that make sense for a logarithm activity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/CalculateLog.cs"',title:'"App1/App1/CalculateLog.cs"'},'using App1.Workflow;\nusing VertiGIS.Mobile.Composition;\nusing Geocortex.Workflow.Runtime;\nusing System;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\n[assembly: Export(typeof(CalculateLog))]\nnamespace App1.Workflow\n{\n    public class CalculateLog : IActivityHandler\n    {\n        public const string Action = "uuid:<uuid>::CalculateLog";\n\n        public Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            // highlight-start\n            double? logBase = null;\n            if (inputs.ContainsKey("base"))\n            {\n                logBase = inputs["base"] as double?;\n            }\n            var value = (double)inputs["value"];\n            // highlight-end\n\n            return Task.FromResult((IDictionary<string, object>)new Dictionary<string, object>());\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Next, modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"Execute")," method of the activity to calculate the logarithm of a number given an optional base"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/CalculateLog.cs"',title:'"App1/App1/CalculateLog.cs"'},'using App1.Workflow;\nusing VertiGIS.Mobile.Composition;\nusing Geocortex.Workflow.Runtime;\nusing System;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\n[assembly: Export(typeof(CalculateLog))]\nnamespace App1.Workflow\n{\n    public class CalculateLog : IActivityHandler\n    {\n        public const string Action = "uuid:<uuid>::CalculateLog";\n\n        public Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            double? logBase = null;\n            if (inputs.ContainsKey("base"))\n            {\n                logBase = inputs["base"] as double?;\n            }\n            var value = (double)inputs["value"];\n\n            // highlight-start\n            double logResult;\n            if (logBase != null)\n            {\n                logResult = Math.Log(value, (double)logBase);\n            }\n            else\n            {\n                logResult = Math.Log(value);\n            }\n\n            return Task.FromResult((IDictionary<string, object>)new Dictionary<string, object>()\n            {\n                ["result"] = logResult\n            });\n            // highlight-end\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"test-your-activity"},"Test your Activity"),(0,i.kt)("p",null,"Now you can ",(0,i.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/mobileviewer/latest/admin-help/Default.htm#gmv/designer/add-a-workflow-to-an-app.htm"},"build a workflow for Geocortex Mobile")," that uses your new activity!"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want your custom activity to show up with a friendly user interface in Geocortex Workflow Designer, check out ",(0,i.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-net-register-activities"},"Registering .NET Activities with Geocortex Workflow Designer"),"."))),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-activity.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____167"},(0,i.kt)("inlineCode",{parentName:"a"},"RunActivity"))," activity can be used to execute your activity by the name defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"CalculateLog.cs")," (for this example, ",(0,i.kt)("inlineCode",{parentName:"p"},"uuid:<uuid>::CalculateLog"),")."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",null,"You can"," ",(0,i.kt)("a",{href:(0,l.Z)("workflows/mobile-calculate-logarithm-activity.json"),download:"calculate-log-activity.json"},"download this demo workflow")," ","that runs the custom activity and",(0,i.kt)("a",{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"}," ","import it into the Geocortex Workflow Designer."," ")))),(0,i.kt)("p",null,"Next you need to run the workflow you just created in your Geocortex Mobile SDK project."),(0,i.kt)("p",null,"You can do this by configuring the layout and app config to run a workflow. You will need to copy the ID of the the workflow you created into the app.json"),(0,i.kt)(r.default,{mdxType:"WorkflowUrlSnippet"}),(0,i.kt)(u.Z,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"Layout",value:"layout"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"config",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["large"]\n        },\n        {\n            "$type": "workflow",\n            "id": "custom-workflow",\n            "title": "Custom Workflow",\n            "target": "#taskbar",\n            // highlight-next-line\n            "portalItem": "<your-workflow-id>"\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm",\n            "items": [\n                {\n                    "title": "Run Custom Workflow",\n                    "isEnabled": true,\n                    "iconId": "workflow",\n                    "action": {\n                        "name": "workflow.run",\n                        "arguments": {\n                            "id": "custom-workflow"\n                        }\n                    }\n                }\n            ]\n        }\n    ]\n}\n'))),(0,i.kt)(p.Z,{value:"layout",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',title:'"App1/App1/layout-large.xml"'},'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    <gxm:taskbar id="taskbar" orientation="vertical">\n        <map slot="main">\n            <stack margin="0.8" slot="top-right" halign="end">\n                <iwtm config="iwtm"/>\n            </stack>\n        </map>\n    </gxm:taskbar>\n</layout>\n'))),(0,i.kt)(p.Z,{value:"ui",mdxType:"TabItem"},(0,i.kt)("img",{src:(0,l.Z)("img/workflow-mobile-calculate-logarithm-activity.png")}))),(0,i.kt)("h2",{id:"relevant-sdk-sample"},"Relevant SDK Sample"),(0,i.kt)("p",null,"Check out the relevant Geocortex Mobile SDK Sample:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/CustomActivity"},"Custom Workflow Activity"))),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"Now you know how to build a basic Workflow activity for Geocortex Mobile. Next, you can learn how to access app properties in an activity, build custom form elements, use the ArcGIS Runtime SDK for .NET in your activities and more."),(0,i.kt)(s.Z,{mdxType:"UseCaseContainer"},(0,i.kt)(c.Z,{title:"Implement a Custom Form Element",description:"Implement a custom form element for applications like Geocortex Mobile",link:(0,l.Z)("docs/workflow/tutorial-mobile-activity-indicator-form-element"),mdxType:"UseCaseCard"}),(0,i.kt)(c.Z,{title:"Add a Callout to the Map through a Custom Activity",description:"Access the map in custom activities for Geocortex Mobile",link:(0,l.Z)("docs/workflow/tutorial-mobile-show-map-callout"),mdxType:"UseCaseCard"}),(0,i.kt)(c.Z,{title:"Use the ArcGIS Runtime SDK for .NET in an activity.",description:"Use the ArcGIS Runtime SDK for .NET in an activity or form element",link:(0,l.Z)("docs/workflow/sdk-net-integrating-the-arcgis-api"),mdxType:"UseCaseCard"}),(0,i.kt)(c.Z,{title:"Reference other Third Party Libraries",description:"Reference other third party libraries in your activities and form elements",link:(0,l.Z)("docs/workflow/sdk-mobile-reference-third-party-library"),mdxType:"UseCaseCard"})))}g.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function o(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:()=>i})}}]);