(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[8315],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>c,kt:()=>u});var i=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},o=Object.keys(t);for(i=0;i<o.length;i++)a=o[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)a=o[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=i.createContext({}),s=function(t){var e=i.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},c=function(t){var e=s(t.components);return i.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(a),u=n,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return a?i.createElement(h,r(r({ref:e},c),{},{components:a})):i.createElement(h,r({ref:e},c))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5630:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>o,contentTitle:()=>r,metadata:()=>l,toc:()=>p,default:()=>c});var i=a(2122),n=(a(7294),a(3905));const o={title:"Activity Block Tags",description:"Geocortex Workflow - Learn about the typescript activity metadata tags"},r=void 0,l={unversionedId:"workflow/sdk-web-activity-block-tags",id:"workflow/sdk-web-activity-block-tags",isDocsHomePage:!1,title:"Activity Block Tags",description:"Geocortex Workflow - Learn about the typescript activity metadata tags",source:"@site/docs/workflow/sdk-web-activity-block-tags.mdx",sourceDirName:"workflow",slug:"/workflow/sdk-web-activity-block-tags",permalink:"/docs/workflow/sdk-web-activity-block-tags",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/sdk-web-activity-block-tags.mdx",version:"current",frontMatter:{title:"Activity Block Tags",description:"Geocortex Workflow - Learn about the typescript activity metadata tags"},sidebar:"workflow",previous:{title:"Integrating the ArcGIS API for JavaScript",permalink:"/docs/workflow/sdk-web-integrating-the-arcgis-api"},next:{title:"Reference a Third Party Library",permalink:"/docs/workflow/sdk-web-reference-third-party-library"}},p=[{value:"Basic Tags",id:"basic-tags",children:[]},{value:"Activity Compatibility Tags",id:"activity-compatibility-tags",children:[{value:"Example: Activity Compatibility Tags",id:"example-activity-compatibility-tags",children:[]}]}],s={toc:p};function c({components:t,...e}){return(0,n.kt)("wrapper",(0,i.Z)({},s,e,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/workflow/tutorial-web-calculate-logarithm-activity"},"Custom Workflow activities")," implemented in ",(0,n.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," use ",(0,n.kt)("a",{parentName:"p",href:"https://jsdoc.app/about-block-inline-tags.html"},"block tags")," to describe the activity metadata that the ",(0,n.kt)("a",{parentName:"p",href:"https://apps.geocortex.com/workflow/designer/"},"Geocortex Workflow Designer")," consumes."),(0,n.kt)("h2",{id:"basic-tags"},"Basic Tags"),(0,n.kt)("p",null,"The following activity demonstrates the basic metadata tags that could exist on a custom activity and its inputs and outputs."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";\n\nexport interface Inputs {\n    /**\n     * @displayName The name of the activity input that appears in the properties panel.\n     * @description The description of the activity input that appears in inline help tooltips.\n     * @required Whether the activity input should be presented as required.\n     */\n    input?: any;\n}\n\nexport interface Outputs {\n    /**\n     * @description The description of the activity output that appears in inline help tooltips.\n     */\n    result: any;\n}\n\n/**\n * @category The name of the toolbox category the activity will appear in.\n * @displayName The name of the activity that appears in the toolbox and properties panel.\n * @description The description of the activity that appears in inline help tooltips.\n * @helpUrl An absolute URL to additional documentation for this activity.\n */\nexport class Activity implements IActivityHandler {\n    async execute(inputs: Inputs): Promise<Outputs> {\n        return { result: {} };\n    }\n\n')),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"If ",(0,n.kt)("inlineCode",{parentName:"p"},"@displayName")," is omitted, the identifier name will be capitalized, split up by camelCase, and used as a default display name. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"myLongParameterName"),' becomes "My Long Parameter Name".'))),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"@required")," tag only applies to the validation in Workflow Designer. Runtime validation of required inputs must be implemented by the ",(0,n.kt)("inlineCode",{parentName:"p"},"execute(inputs)")," method of the activity."))),(0,n.kt)("h2",{id:"activity-compatibility-tags"},"Activity Compatibility Tags"),(0,n.kt)("p",null,"You can specify which environments an activity is compatible with by adding the appropriate tags to the activity class. This will cause Geocortex Workflow Designer to only display the activity when the workflow's ",(0,n.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/deployment-settings.htm"},"deployment settings")," indicate it is compatible, and generate warnings if the activity is used in an incompatible environment. You can use the following tags on the activity class;"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@onlineOnly"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Indicates that the activity will not work without network connectivity. It is sufficient to add the tag without any text beside it."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@clientOnly"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Indicates that the activity will only run in a client environment such as web browser or mobile app. It is sufficient to add the tag without any text beside it."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@serverOnly"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Indicates that the activity will only run on a server running Workflow Server. It is sufficient to add the tag without any text beside it."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@supportedApps"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A comma-separated list of apps supported by the activity. Workflows targeting an app that is not listed here should not use this activity."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@unsupportedApps"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A comma-separated list of apps not supported by the activity. Workflows targeting an app that is listed here should not use this activity.")))),(0,n.kt)("p",null,"App values that currently supported in Geocortex Workflow Designer:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"WAB")," (Web AppBuilder for ArcGIS)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GVH")," (Geocortex Viewer for HTML5)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GWV")," (Geocortex Web Viewer)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GMV")," (Geocortex Mobile Viewer)")),(0,n.kt)("p",null,"If you do not want to limit the use of an activity, do not add any of the above tags. It will appear in the toolbox and will not generate any warnings when used."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"The intention is that you use either ",(0,n.kt)("inlineCode",{parentName:"p"},"@supportedApps")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"@unsupportedApps"),", depending on the situation. Do not use both."))),(0,n.kt)("h3",{id:"example-activity-compatibility-tags"},"Example: Activity Compatibility Tags"),(0,n.kt)("p",null,'The following example declares that an activity will only work on Geocortex Web or Web AppBuilder for ArcGIS in an online and client side environment. The display name will default to "Does Not Work On Mobile".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * @supportedApps WAB, GWV\n * @onlineOnly\n * @clientOnly\n */\nexport class DoesNotWorkOnMobile implements IActivityHandler {\n    ...\n}\n")))}c.isMDXComponent=!0}}]);