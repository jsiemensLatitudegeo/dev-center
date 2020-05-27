/*! For license information please see 3203bc93.01e34ab3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{194:function(e,o,r){"use strict";r.r(o),r.d(o,"frontMatter",(function(){return u})),r.d(o,"metadata",(function(){return s})),r.d(o,"rightToc",(function(){return d})),r.d(o,"default",(function(){return m}));var n=r(1),t=r(9),a=(r(0),r(289)),c=r(310),i=r(313),l=r(312),u={title:"Configuring the Theme",description:"Geocortex Mobile - Configuring the application theme using app config"},s={id:"mobile/configuration-theme",title:"Configuring the Theme",description:"Geocortex Mobile - Configuring the application theme using app config",source:"@site/docs/mobile/configuration-theme.mdx",permalink:"/docs/mobile/configuration-theme",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/configuration-theme.mdx",sidebar:"mobile",previous:{title:"App Config Reference",permalink:"/docs/mobile/configuration-app-config-reference"},next:{title:"Commands and Operations",permalink:"/docs/mobile/configuration-commands-operations"}},d=[{value:"Customizing Theme Colors",id:"customizing-theme-colors",children:[]},{value:"Theme Color Reference",id:"theme-color-reference",children:[]},{value:"Relevant SDK Sample",id:"relevant-sdk-sample",children:[]}],b={rightToc:d};function m(e){var o=e.components,r=Object(t.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:o,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Geocortex Mobile's appearance is built around two concepts: theme and ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/configuration-layout-getting-started"}),"layout"),". The theme controls the color scheme of the app, while the layout controls the organization of content."),Object(a.b)("h3",{id:"customizing-theme-colors"},"Customizing Theme Colors"),Object(a.b)("p",null,"Every color in a theme can be fully customized by editing the ",Object(a.b)("inlineCode",{parentName:"p"},"colors")," property of a theme in the branding service configuration."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Color properties are defined using an array of RGBA values."))),Object(a.b)(i.a,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"config",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "schemaVersion": "1.0",\n  "items": [\n    ...\n    {\n      "$type": "branding",\n      "id": "branding",\n      "activeTheme": "custom-theme",\n      "themes": [\n        {\n        "id": "custom-theme",\n        "colors": {\n            "primaryBackground": [\n              50,\n              153,\n              168,\n              255\n            ]\n          }\n        }\n      ]\n    },\n    ...\n  ]\n}\n'))),Object(a.b)(l.a,{value:"ui",mdxType:"TabItem"},Object(a.b)("img",{src:Object(c.a)("img/mobile-customize-theme-blue.png")}))),Object(a.b)("h3",{id:"theme-color-reference"},"Theme Color Reference"),Object(a.b)("p",null,"Following is a list of every possible theme color that can be\nused in a Geocortex Mobile Application. Each of these colors can be\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"#customizing-theme-colors"}),"customized")," and ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/sdk-components-styling"}),"used in custom components")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Theme colors in mobile are added as ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/resource-dictionaries?WT.mc_id=docs-ch9-jamont#consume-resources-in-xaml"}),"dynamic resources"),"."))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"Color accentIconBackground;\nColor accentIconBackgroundHover;\nColor accentIconBorder;\nColor accentIconBorderHover;\nColor accentIconForeground;\nColor accentIconForegroundHover;\nColor alertAmberBackground;\nColor alertAmberBackgroundHover;\nColor alertAmberBorder;\nColor alertAmberBorderHover;\nColor alertAmberForeground;\nColor alertAmberForegroundHover;\nColor alertAmberIcon;\nColor alertAmberIconHover;\nColor alertBackgroundDisabled;\nColor alertBorderDisabled;\nColor alertForegroundDisabled;\nColor alertGreenBackground;\nColor alertGreenBackgroundHover;\nColor alertGreenBorder;\nColor alertGreenBorderHover;\nColor alertGreenForeground;\nColor alertGreenForegroundHover;\nColor alertGreenIcon;\nColor alertGreenIconHover;\nColor alertIconDisabled;\nColor alertRedBackground;\nColor alertRedBackgroundHover;\nColor alertRedBorder;\nColor alertRedBorderHover;\nColor alertRedForeground;\nColor alertRedForegroundHover;\nColor alertRedIcon;\nColor alertRedIconHover;\nColor buttonBackground;\nColor buttonBackgroundDisabled;\nColor buttonBackgroundHover;\nColor buttonBorder;\nColor buttonBorderDisabled;\nColor buttonBorderHover;\nColor buttonForeground;\nColor buttonForegroundDisabled;\nColor buttonForegroundHover;\nColor buttonIcon;\nColor buttonIconDisabled;\nColor buttonIconHover;\nColor disabledIconFill;\nColor emphasizedButtonBackground;\nColor emphasizedButtonBackgroundDisabled;\nColor emphasizedButtonBackgroundHover;\nColor emphasizedButtonBorder;\nColor emphasizedButtonBorderDisabled;\nColor emphasizedButtonBorderHover;\nColor emphasizedButtonForeground;\nColor emphasizedButtonForegroundDisabled;\nColor emphasizedButtonForegroundHover;\nColor emphasizedButtonIcon;\nColor emphasizedButtonIconDisabled;\nColor emphasizedButtonIconHover;\nColor inlineTableBorder;\nColor inlineTableHeaderBackground;\nColor inlineTableRowBackground;\nColor inputBorder;\nColor itemHoverBackground;\nColor itemSelectedBackground;\nColor primaryAccent;\nColor primaryAccentDisabled;\nColor primaryAccentHover;\nColor primaryAccentLarge;\nColor primaryBackground;\nColor primaryBorder;\nColor primaryForeground;\nColor primaryForegroundDisabled;\nColor secondaryBackground;\nColor secondaryBorder;\nColor secondaryForeground;\nColor tabPrimaryForeground;\nColor tabSecondaryForeground;\n")),Object(a.b)("h2",{id:"relevant-sdk-sample"},"Relevant SDK Sample"),Object(a.b)("p",null,"The Geocortex Mobile SDK Samples has an example of ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration/Theme"}),"configuring the theme with the branding service"),"."))}m.isMDXComponent=!0},289:function(e,o,r){"use strict";r.d(o,"a",(function(){return d})),r.d(o,"b",(function(){return p}));var n=r(0),t=r.n(n);function a(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function c(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?c(Object(r),!0).forEach((function(o){a(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function l(e,o){if(null==e)return{};var r,n,t=function(e,o){if(null==e)return{};var r,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],o.indexOf(r)>=0||(t[r]=e[r]);return t}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var u=t.a.createContext({}),s=function(e){var o=t.a.useContext(u),r=o;return e&&(r="function"==typeof e?e(o):i({},o,{},e)),r},d=function(e){var o=s(e.components);return t.a.createElement(u.Provider,{value:o},e.children)},b={inlineCode:"code",wrapper:function(e){var o=e.children;return t.a.createElement(t.a.Fragment,{},o)}},m=Object(n.forwardRef)((function(e,o){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,p=d["".concat(c,".").concat(m)]||d[m]||b[m]||a;return r?t.a.createElement(p,i({ref:o},u,{components:r})):t.a.createElement(p,i({ref:o},u))}));function p(e,o){var r=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return t.a.createElement.apply(null,c)}return t.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},290:function(e,o,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function t(){for(var e=[],o=0;o<arguments.length;o++){var n=arguments[o];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var c=t.apply(null,n);c&&e.push(c)}else if("object"===a)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(t.default=t,e.exports=t):void 0===(n=function(){return t}.apply(o,[]))||(e.exports=n)}()},291:function(e,o,r){"use strict";var n=r(12),t=r(30),a=r(294),c="".startsWith;n(n.P+n.F*r(295)("startsWith"),"String",{startsWith:function(e){var o=a(this,e,"startsWith"),r=t(Math.min(arguments.length>1?arguments[1]:void 0,o.length)),n=String(e);return c?c.call(o,n,r):o.slice(r,r+n.length)===n}})},294:function(e,o,r){var n=r(79),t=r(29);e.exports=function(e,o,r){if(n(o))throw TypeError("String#"+r+" doesn't accept regex!");return String(t(e))}},295:function(e,o,r){var n=r(2)("match");e.exports=function(e){var o=/./;try{"/./"[e](o)}catch(r){try{return o[n]=!1,!"/./"[e](o)}catch(t){}}return!0}},309:function(e,o,r){"use strict";var n=r(0),t=r(55);o.a=function(){return Object(n.useContext)(t.a)}},310:function(e,o,r){"use strict";r.d(o,"a",(function(){return t}));r(291);var n=r(309);function t(e){var o=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===o?"/":o;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},311:function(e,o,r){"use strict";var n=r(0),t=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});o.a=t},312:function(e,o,r){"use strict";var n=r(0),t=r.n(n);o.a=function(e){return t.a.createElement("div",null,e.children)}},313:function(e,o,r){"use strict";r(32),r(23),r(24);var n=r(0),t=r.n(n),a=r(311);var c=function(){return Object(n.useContext)(a.a)},i=r(290),l=r.n(i),u=r(132),s=r.n(u),d=37,b=39;o.a=function(e){var o=e.block,r=e.children,a=e.defaultValue,i=e.values,u=e.groupId,m=c(),p=m.tabGroupChoices,f=m.setTabGroupChoices,g=Object(n.useState)(a),h=g[0],v=g[1];if(null!=u){var C=p[u];null!=C&&C!==h&&v(C)}var O=function(e){v(e),null!=u&&f(u,e)},j=[];return t.a.createElement("div",null,t.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":o})},i.map((function(e){var o=e.value,r=e.label;return t.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===o,className:l()("tab-item",s.a.tabItem,{"tab-item--active":h===o}),key:o,ref:function(e){return j.push(e)},onKeyDown:function(e){return function(e,o,r){switch(r.keyCode){case b:!function(e,o){var r=e.indexOf(o)+1;e[r]?e[r].focus():e[0].focus()}(e,o);break;case d:!function(e,o){var r=e.indexOf(o)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,o)}}(j,e.target,e)},onFocus:function(){return O(o)},onClick:function(){return O(o)}},r)}))),t.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(r).filter((function(e){return e.props.value===h}))[0]))}}}]);