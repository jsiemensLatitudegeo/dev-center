(window.webpackJsonp=window.webpackJsonp||[]).push([[5,146],{218:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||r;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<r;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},219:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n(222),o=n(220);function r(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,i=r.forcePrependBaseUrl,c=void 0!==i&&i,l=r.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var s=!n.startsWith(t)?t+n.replace(/^\//,""):n;return u?e+s:s}(r,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},220:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))},221:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},222:function(e,t,n){"use strict";var a=n(0),o=n(18);t.a=function(){var e=Object(a.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},223:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(13),i=n(220),c=n(8),l=Object(a.createContext)({collectLink:function(){}}),u=n(219),s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};t.a=function(e){var t,n,p=e.isNavLink,b=e.to,m=e.href,d=e.activeClassName,f=e["data-noBrokenLinkCheck"],h=s(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),g=Object(u.b)().withBaseUrl,v=Object(a.useContext)(l),O=b||m,y=void 0!==O?g(O):void 0,j=Object(i.a)(y),w=Object(a.useRef)(!1),x=p?r.e:r.c,k=c.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!k&&j&&window.docusaurus.prefetch(y),function(){k&&n&&n.disconnect()}}),[y,k,j]);var C=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,N=!y||!j||C;return y&&j&&!C&&!f&&v.collectLink(y),N?o.a.createElement("a",Object.assign({href:y},!j&&{target:"_blank",rel:"noopener noreferrer"},h)):o.a.createElement(x,Object.assign({},h,{onMouseEnter:function(){w.current||(window.docusaurus.preload(y),w.current=!0)},innerRef:function(e){var t,a;k&&e&&j&&(t=e,a=function(){window.docusaurus.prefetch(y)},(n=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())}))}))).observe(t))},to:y},p&&{activeClassName:d}))}},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),o=n.n(a),r=n(46),i=n.n(r);function c(e){var t=e.children;return o.a.createElement("div",{className:i.a.root},t)}},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(223),o=n(0),r=n.n(o),i=n(221),c=n(47),l=n.n(c);function u(e){var t=e.title,n=e.description,o=e.link;return r.a.createElement("div",{className:Object(i.a)("card-demo",l.a.root)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"card__body"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"card__footer"},r.a.createElement(a.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},226:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},227:function(e,t,n){"use strict";var a=n(0),o=n(226);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},228:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(227),i=n(221),c=n(48),l=n.n(c),u=37,s=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,p=e.values,b=e.groupId,m=Object(r.a)(),d=m.tabGroupChoices,f=m.setTabGroupChoices,h=Object(a.useState)(c),g=h[0],v=h[1];if(null!=b){var O=d[b];null!=O&&O!==g&&p.some((function(e){return e.value===O}))&&v(O)}var y=function(e){v(e),null!=b&&f(b,e)},j=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(j,e.target,e)},onFocus:function(){return y(t)},onClick:function(){return y(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},229:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},53:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),o=n(6),r=(n(0),n(218)),i={},c={unversionedId:"web/snippets/prereqs-layout-config-editing",id:"web/snippets/prereqs-layout-config-editing",isDocsHomePage:!1,title:"prereqs-layout-config-editing",description:"-   Follow along by setting up the Geocortex Web SDK and editing the minimal layout and app config provided.",source:"@site/docs/web/snippets/prereqs-layout-config-editing.mdx",permalink:"/docs/web/snippets/prereqs-layout-config-editing",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-layout-config-editing.mdx"},l=[],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Follow along by setting up the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK")," and editing the minimal layout and app config provided."),Object(r.b)("li",{parentName:"ul"},"Check out the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-deployment#upload-app-config-and-layout-to-an-app-optional"}),"deployment instructions")," to learn about how to deploy layout and app config to an application.")))}s.isMDXComponent=!0},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return h}));var a=n(2),o=n(6),r=(n(0),n(218)),i=n(228),c=n(229),l=n(219),u=n(224),s=n(225),p=n(53),b={title:"Change the Default Behavior of Components",description:"Geocortex Web - Learn how to configure Geocortex Web to change default application behavior"},m={unversionedId:"web/tutorial-change-default-behavior",id:"web/tutorial-change-default-behavior",isDocsHomePage:!1,title:"Change the Default Behavior of Components",description:"Geocortex Web - Learn how to configure Geocortex Web to change default application behavior",source:"@site/docs/web/tutorial-change-default-behavior.mdx",permalink:"/docs/web/tutorial-change-default-behavior",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/tutorial-change-default-behavior.mdx",sidebar:"web",previous:{title:"Configure Button Click Behavior",permalink:"/docs/web/tutorial-configure-button-click"},next:{title:"Customize the Theme",permalink:"/docs/web/tutorial-customize-application-theme"}},d=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Change the Behavior of the Bookmarks Component",id:"change-the-behavior-of-the-bookmarks-component",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],f={rightToc:d};function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Many of the behaviors of Geocortex Web's built-in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-components-overview"}),"components")," are configurable through the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-getting-started"}),"app config"),"."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Many behaviors which are configurable through the app config are more easily configurable by using the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://apps.geocortex.com/webviewer/designer/"}),"Geocortex Web Designer"),". App config should be used if you need to modify a property not available in the app config, or use a custom command as part of a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-commands-operations#configuring-commands-and-operations"}),"command chain"),"."))),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)(p.default,{mdxType:"PrereqsLayoutConfigSnippet"})," ",Object(r.b)("h2",{id:"change-the-behavior-of-the-bookmarks-component"},"Change the Behavior of the Bookmarks Component"),Object(r.b)("p",null,"The following example demonstrates changing the ",Object(r.b)("inlineCode",{parentName:"p"},"onClick")," property of the bookmarks model. The default value of this property is the singular command, ",Object(r.b)("inlineCode",{parentName:"p"},"map.zoom-to-viewpoint"),". This property is not available to edit through the Geocortex Web Designer, but can be edited through the use of app config."),Object(r.b)("p",null,"First, let's create a basic map with a bookmarks component using the layout and app config. Start up the application and add a few bookmarks."),Object(r.b)(i.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"app"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"app",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": []\n}\n'))),Object(r.b)(c.a,{value:"layout",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="your.custom.namespace" xmlns:web="https://geocortex.com/layout/web/v1">\n    <map>\n        <web:bookmarks/>\n    </map>\n</layout>\n')))),Object(r.b)("p",null,"Next, add a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-getting-started#anatomy-of-an-app-config"}),"app item")," to the configuration for the bookmarks component."),Object(r.b)(i.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"app"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"app",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "id": "bookmarks-config",\n            "$type": "bookmarks"\n        }\n    ]\n}\n'))),Object(r.b)(c.a,{value:"layout",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="your.custom.namespace" xmlns:web="https://geocortex.com/layout/web/v1">\n    <map>\n        <web:bookmarks config="bookmarks-config"/>\n    </map>\n</layout>\n')))),Object(r.b)("p",null,"Finally, modify the ",Object(r.b)("inlineCode",{parentName:"p"},"onClick")," property of the bookmarks app item to run the commands ",Object(r.b)("inlineCode",{parentName:"p"},"map.zoom-to-viewpoint")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ui.alert"),"."),Object(r.b)(i.a,{defaultValue:"config",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"layout",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="your.custom.namespace" xmlns:web="https://geocortex.com/layout/web/v1">\n    <map>\n        <web:bookmarks config="bookmarks-config"/>\n    </map>\n</layout>\n'))),Object(r.b)(c.a,{value:"config",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "id": "bookmarks-config",\n            "$type": "bookmarks",\n            "onClick": [\n                "map.zoom-to-viewpoint",\n                {\n                    "name": "ui.alert",\n                    "arguments": {\n                        "message": "Message from config."\n                    }\n                }\n            ]\n        }\n    ]\n}\n'))),Object(r.b)(c.a,{value:"ui",mdxType:"TabItem"},Object(r.b)("img",{src:Object(l.a)("img/web-customize-bookmarks-component.png")}))),Object(r.b)("p",null,"Congratulations! You just changed the default behavior for a built in component using config. All components can be configured through the app config JSON in this manner."),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("p",null,"Geocortex Web comes with many built-in commands and operations to help you accomplish your goal. If these are not enough, Geocortex Workflow can help you implement custom behaviors without writing custom code. If you cannot create the behavior you want with Geocortex Workflow, it might be time to look into using the Geocortex Web SDK to implement a custom command or operation."),Object(r.b)(u.a,{mdxType:"UseCaseContainer"},Object(r.b)(s.a,{title:"Commands, Operations, and Events API",description:"Check out the available commands and operations",link:Object(l.a)("docs/web/api-commands-operations-events"),mdxType:"UseCaseCard"}),Object(r.b)(s.a,{title:"Run a Workflow using a Command and App Config",description:"Configure a workflow to run on map initialization using app config",link:Object(l.a)("docs/web/tutorial-run-workflow-app-config"),mdxType:"UseCaseCard"}),Object(r.b)(s.a,{title:"Change Geocortex Web's Default Map Click Behavior",description:"Learn how to Geocortex Workflow to override Geocortex Web's default map click behavior",link:Object(l.a)("docs/web/tutorial-change-default-map-click-behavior"),mdxType:"UseCaseCard"}),Object(r.b)(s.a,{title:"Implement Custom Command/Operation",description:"Implement a custom Command/Operation with the Geocortex Web SDK",link:Object(l.a)("docs/web/tutorial-implement-command-operation"),mdxType:"UseCaseCard"})))}h.isMDXComponent=!0}}]);