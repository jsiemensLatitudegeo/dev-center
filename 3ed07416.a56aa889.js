(window.webpackJsonp=window.webpackJsonp||[]).push([[40,89],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var o=n(1),a=n(9),r=(n(0),n(289)),i={},c={id:"mobile/snippets/designer-callout",title:"designer-callout",description:":::note Have you explored the Geocortex Mobile Designer?",source:"@site/docs/mobile/snippets/designer-callout.mdx",permalink:"/docs/mobile/snippets/designer-callout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/designer-callout.mdx"},p=[],l={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Have you explored the Geocortex Mobile Designer?")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://apps.geocortex.com/mobileviewer/designer/"}),"Geocortex Mobile Designer")," allows you to edit your application's layout, configure custom behaviors for buttons and other UI components, and solve complex business problems through ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/workflow/overview"}),"Geocortex Workflow"),". Many use cases can be solved through the Geocortex Mobile Designer and don't require custom development."))))}s.isMDXComponent=!0},201:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(1),a=n(9),r=(n(0),n(289)),i=n(146),c={title:"Key Concepts",description:"Geocortex Mobile - Learn about key concepts of the Geocortex Mobile Framework",hide_table_of_contents:!0},p={id:"mobile/key-concepts",title:"Key Concepts",description:"Geocortex Mobile - Learn about key concepts of the Geocortex Mobile Framework",source:"@site/docs/mobile/key-concepts.mdx",permalink:"/docs/mobile/key-concepts",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/key-concepts.mdx",sidebar:"mobile",previous:{title:"Overview",permalink:"/docs/mobile/overview"},next:{title:"Layout",permalink:"/docs/mobile/configuration-layout-getting-started"}},l=[{value:"Applications",id:"applications",children:[{value:"1. Layout XML that represents the visual layout of the application",id:"1-layout-xml-that-represents-the-visual-layout-of-the-application",children:[]},{value:"2. App Config JSON for the application",id:"2-app-config-json-for-the-application",children:[]},{value:"3. The Geocortex Mobile code which renders the layout and powers functionality",id:"3-the-geocortex-mobile-code-which-renders-the-layout-and-powers-functionality",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(i.default,{mdxType:"DesignerCallout"}),Object(r.b)("h2",{id:"applications"},"Applications"),Object(r.b)("p",null,"The core element of the Geocortex Mobile Framework is an ",Object(r.b)("strong",{parentName:"p"},"Application"),". Applications are composed of three main pieces:"),Object(r.b)("h3",{id:"1-layout-xml-that-represents-the-visual-layout-of-the-application"},"1. Layout XML that represents the visual layout of the application"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <map config="default" />\n</layout>\n')),Object(r.b)("p",null,"An ",Object(r.b)("strong",{parentName:"p"},"layout")," is composed of ",Object(r.b)("strong",{parentName:"p"},"components"),", such as a ",Object(r.b)("inlineCode",{parentName:"p"},"<map>"),", which are the conceptual building blocks of an application. Components can define their own UI, consume configuration, and can be nested and interact with other components."),Object(r.b)("p",null,"Every component can have a ",Object(r.b)("inlineCode",{parentName:"p"},"config")," attribute; this attribute links a layout component to the ",Object(r.b)("strong",{parentName:"p"},"app config"),"."),Object(r.b)("h3",{id:"2-app-config-json-for-the-application"},"2. App Config JSON for the application"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onInitialized": [\n                {\n                    "name": "ui.alert",\n                    "arguments": {\n                        "message": "Hello World"\n                    }\n                }\n            ]\n        }\n    ]\n}\n')),Object(r.b)("p",null,"App Config files describe component configuration and other values relevant to application behavior. An app config file is composed of a list of ",Object(r.b)("strong",{parentName:"p"},"app items"),". App items can correspond to components in the layout, portal items, or any ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/configuration-app-config-reference#custom-app-items"}),"other defined item type"),"."),Object(r.b)("h3",{id:"3-the-geocortex-mobile-code-which-renders-the-layout-and-powers-functionality"},"3. The Geocortex Mobile code which renders the layout and powers functionality"),Object(r.b)("p",null,"The Geocortex Mobile Framework consumes layout and app config to create fully functional mobile-ready mapping applications. You can use this framework out of the box, or extend it using the Geocortex Mobile SDK."),Object(r.b)("br",null),Object(r.b)("p",null,"These three pieces are the building blocks of an application, with the ",Object(r.b)("inlineCode",{parentName:"p"},"layout.xml")," and ",Object(r.b)("inlineCode",{parentName:"p"},"app.json")," files being the driving forces that control how an application looks, how it responds to user interaction, and what data it consumes. Extensive customization can be done simply by modifying these two files, without requiring any custom code."))}u.isMDXComponent=!0},289:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||r;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);