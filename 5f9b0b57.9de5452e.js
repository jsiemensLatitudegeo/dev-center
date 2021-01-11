(window.webpackJsonp=window.webpackJsonp||[]).push([[61,132],{155:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return m})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),o=(r(0),r(243)),a=r(244),i=r(249),l=r(248),c=r(58);const s={title:"Implement a QR Code Custom Form Element using a Third Party Library",description:"Geocortex Workflow - Implement a QR code form element for web applications using a third party library"},m={unversionedId:"workflow/tutorial-web-implement-third-party-qr-code-form-element",id:"workflow/tutorial-web-implement-third-party-qr-code-form-element",isDocsHomePage:!1,title:"Implement a QR Code Custom Form Element using a Third Party Library",description:"Geocortex Workflow - Implement a QR code form element for web applications using a third party library",source:"@site/docs/workflow/tutorial-web-implement-third-party-qr-code-form-element.mdx",slug:"/workflow/tutorial-web-implement-third-party-qr-code-form-element",permalink:"/docs/workflow/tutorial-web-implement-third-party-qr-code-form-element",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/tutorial-web-implement-third-party-qr-code-form-element.mdx",version:"current",sidebar:"workflow",previous:{title:"Implement a Captcha Custom Form Element using a Third Party Library",permalink:"/docs/workflow/tutorial-web-implement-third-party-captcha-form-element"},next:{title:"Geocortex Workflow .NET SDK Overview",permalink:"/docs/workflow/sdk-net-overview"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Adding Dependencies",id:"adding-dependencies",children:[]},{value:"Set up Custom Form Element Skeleton",id:"set-up-custom-form-element-skeleton",children:[]},{value:"Implement the Custom Form Element",id:"implement-the-custom-form-element",children:[]},{value:"Deploy the Form Element",id:"deploy-the-form-element",children:[]},{value:"Test the Form Element",id:"test-the-form-element",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],d={toc:p};function u({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Implementing a custom ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/key-concepts#form-elements"}),"form element")," allows you to augment the existing ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/form-elements/auto-complete.htm%3FTocPath%3DForms%7CForm%2520Element%2520Reference%7C_____0"}),"form elements that come with Geocortex Workflow"),"."),Object(o.b)("p",null,"This article will walk you through creating a form element that uses the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/soldair/node-qrcode"}),"qrcode")," library to generate and display a QR code."),Object(o.b)("img",{src:Object(a.a)("img/workflow-web-custom-qr-code.png")}),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)(c.default,{mdxType:"WebPrereqs"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Implementing a QR code custom form element for web applications using a third party library consists of the following steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Adding third party library dependencies to your project."),Object(o.b)("li",{parentName:"ol"},"Creating the custom form element."),Object(o.b)("li",{parentName:"ol"},"Implementing the custom form element using the third party library.")),Object(o.b)("h2",{id:"adding-dependencies"},"Adding Dependencies"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"npm install qrcode")," in the terminal to install the third party ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/soldair/node-qrcode"}),"qrcode")," library that generates QR codes."),Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"npm install @types/qrcode")," in the terminal to install type information for the third party library. This is optional, but it provides an improved developer experience.")),Object(o.b)("h2",{id:"set-up-custom-form-element-skeleton"},"Set up Custom Form Element Skeleton"),Object(o.b)("p",null,"To create a new form element:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open the Workflow activity SDK in Visual Studio Code."),Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"npm run generate")," in the terminal."),Object(o.b)("li",{parentName:"ol"},"When prompted, select ",Object(o.b)("inlineCode",{parentName:"li"},"Form Element"),"."),Object(o.b)("li",{parentName:"ol"},"Enter the name of the form element you would like to create and press ",Object(o.b)("inlineCode",{parentName:"li"},"Enter"),". For example, ",Object(o.b)("inlineCode",{parentName:"li"},"QrCode"),"."),Object(o.b)("li",{parentName:"ol"},"Open the newly created ",Object(o.b)("inlineCode",{parentName:"li"},"src/activities/QrCode.tsx")," file.")),Object(o.b)("h2",{id:"implement-the-custom-form-element"},"Implement the Custom Form Element"),Object(o.b)("p",null,"Modify the skeleton form element implementation in ",Object(o.b)("inlineCode",{parentName:"p"},"src/activities/QrCode.tsx")," to match the following example."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/activities/QrCode.tsx"',title:'"src/activities/QrCode.tsx"'}),'import React, { useEffect, useState } from "react";\nimport QRCode from "qrcode";\nimport type { CustomFormElementProps } from "@geocortex/workflow/runtime/app/RegisterCustomFormElementBase";\nimport { RegisterCustomFormElementBase } from "@geocortex/workflow/runtime/app/RegisterCustomFormElementBase";\n\n/**\n * A simple React Component that displays a QR code.\n * @param props The props that will be provided by the Workflow runtime.\n */\nconst QrCode = (props: CustomFormElementProps) => {\n    const value = props.element.value as string;\n    const [qrCodeUrl, setQrCodeUrl] = useState("");\n\n    // Update the QR code when the value changes\n    useEffect(() => {\n        // Clear the previous QR code\n        setQrCodeUrl("");\n        if (value) {\n            // Asynchronously generate the QR code data URL from the value\n            let didCancel = false;\n            (async () => {\n                const dataUrl = await QRCode.toDataURL(value);\n                if (didCancel) {\n                    return;\n                }\n                setQrCodeUrl(dataUrl);\n            })();\n            return () => {\n                didCancel = true;\n            };\n        }\n    }, [value]);\n\n    // Render the QR code as an image\n    return qrCodeUrl ? <img src={qrCodeUrl} /> : null;\n};\n\n/**\n * @displayName Register QrCode Form Element\n * @category Custom Activities\n * @description Registers a QR Code form element.\n */\nexport class RegisterQrCodeElement extends RegisterCustomFormElementBase {\n    execute() {\n        this.register("QrCode", QrCode);\n    }\n}\n')),Object(o.b)("h2",{id:"deploy-the-form-element"},"Deploy the Form Element"),Object(o.b)("p",null,"Follow the instructions to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/sdk-web-overview#deployment"}),"build and deploy the activity pack"),"."),Object(o.b)("h2",{id:"test-the-form-element"},"Test the Form Element"),Object(o.b)("p",null,"Once your activity pack is hosted and registered, your ",Object(o.b)("inlineCode",{parentName:"p"},"Register QrCode Form Element")," custom activity should appear in the activity toolbox in Geocortex Workflow Designer alongside the built-in activities."),Object(o.b)("p",null,"To use your custom form element in a workflow:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Add your ",Object(o.b)("inlineCode",{parentName:"li"},"Register QrCode Form Element")," custom activity to your workflow so that it runs ",Object(o.b)("strong",{parentName:"li"},"before")," any ",Object(o.b)("inlineCode",{parentName:"li"},"Display Form")," activities that will use the custom form element."),Object(o.b)("li",{parentName:"ol"},"Select the ",Object(o.b)("inlineCode",{parentName:"li"},"Display Form")," activity that you want to include your form element in."),Object(o.b)("li",{parentName:"ol"},"Add a ",Object(o.b)("inlineCode",{parentName:"li"},"Custom")," form element to the form."),Object(o.b)("li",{parentName:"ol"},"Set the ",Object(o.b)("inlineCode",{parentName:"li"},"Custom Type")," property of the ",Object(o.b)("inlineCode",{parentName:"li"},"Custom")," form element to ",Object(o.b)("inlineCode",{parentName:"li"},"QrCode"),"."),Object(o.b)("li",{parentName:"ol"},"Add a ",Object(o.b)("inlineCode",{parentName:"li"},"load")," event subworkflow to the form element."),Object(o.b)("li",{parentName:"ol"},"Add a ",Object(o.b)("inlineCode",{parentName:"li"},"Set Form Element Property")," activity to the subworkflow."),Object(o.b)("li",{parentName:"ol"},"Set the ",Object(o.b)("inlineCode",{parentName:"li"},"Property Name")," input to ",Object(o.b)("inlineCode",{parentName:"li"},"value"),"."),Object(o.b)("li",{parentName:"ol"},"Set the ",Object(o.b)("inlineCode",{parentName:"li"},"Property Value")," input to the text that represents the data or URL to encode into the QR code."),Object(o.b)("li",{parentName:"ol"},"Test your workflow.")),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)(l.a,{mdxType:"UseCaseContainer"},Object(o.b)(i.a,{title:"Learn how to create a QR Code activity",description:"Learn how to to use this same third party library to create an activity that creates QR codes",link:Object(a.a)("docs/workflow/tutorial-web-qr-code-activity"),mdxType:"UseCaseCard"})))}u.isMDXComponent=!0},243:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),m=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=m(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=m(r),u=n,b=p["".concat(i,".").concat(u)]||p[u]||d[u]||a;return r?o.a.createElement(b,l(l({ref:t},s),{},{components:r})):o.a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},244:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r(21),o=r(245);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return a?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},245:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},246:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},247:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(11),i=r(245),l=r(9);const c=Object(n.createContext)({collectLink:()=>{}});var s=r(244),m=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var t,{isNavLink:r,to:p,href:d,activeClassName:u,isActive:b,"data-noBrokenLinkCheck":f,autoAddBaseUrl:h=!0}=e,w=m(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:O}=Object(s.b)(),y=Object(n.useContext)(c),v=p||d,j=Object(i.a)(v),g=null==v?void 0:v.replace("pathname://",""),C=void 0!==g?(N=g,h&&(e=>e.startsWith("/"))(N)?O(N):N):void 0;var N;const k=Object(n.useRef)(!1),E=r?a.e:a.c,x=l.a.canUseIntersectionObserver;let R;Object(n.useEffect)((()=>(!x&&j&&window.docusaurus.prefetch(C),()=>{x&&R&&R.disconnect()})),[C,x,j]);const Q=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,F=!C||!j||Q;return C&&j&&!Q&&!f&&y.collectLink(C),F?o.a.createElement("a",Object.assign({href:C},v&&!j&&{target:"_blank",rel:"noopener noreferrer"},w)):o.a.createElement(E,Object.assign({},w,{onMouseEnter:()=>{k.current||(window.docusaurus.preload(C),k.current=!0)},innerRef:e=>{var t,r;x&&e&&j&&(t=e,r=()=>{window.docusaurus.prefetch(C)},R=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(R.unobserve(t),R.disconnect(),r())}))})),R.observe(t))},to:C||""},r&&{isActive:b,activeClassName:u}))}},248:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(0),o=r.n(n),a=r(54),i=r.n(a);function l({children:e}){return o.a.createElement("div",{className:i.a.root},e)}},249:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(247),o=r(0),a=r.n(o),i=r(246),l=r(55),c=r.n(l);function s({title:e,description:t,link:r}){return a.a.createElement("div",{className:Object(i.a)("card-demo",c.a.root)},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card__header"},a.a.createElement("h3",null,e)),a.a.createElement("div",{className:"card__body"},a.a.createElement("p",null,t)),a.a.createElement("div",{className:"card__footer"},a.a.createElement(n.a,{className:"button button--secondary button--block",to:r},"Get Started"))))}},58:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),o=(r(0),r(243));const a={},i={unversionedId:"workflow/snippets/prereqs-web",id:"workflow/snippets/prereqs-web",isDocsHomePage:!1,title:"prereqs-web",description:"Follow the instructions in the Web Applications SDK page to set up your development environment.",source:"@site/docs/workflow/snippets/prereqs-web.mdx",slug:"/workflow/snippets/prereqs-web",permalink:"/docs/workflow/snippets/prereqs-web",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/prereqs-web.mdx",version:"current"},l=[],c={toc:l};function s({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Follow the instructions in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/sdk-web-overview"}),"Web Applications SDK")," page to set up your development environment."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"A working knowledge of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," is recommended before extending Workflow for web-based hosts."))))}s.isMDXComponent=!0}}]);