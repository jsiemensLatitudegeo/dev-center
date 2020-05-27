/*! For license information please see 51c0133b.cede463e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{212:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return u})),o.d(n,"metadata",(function(){return s})),o.d(n,"rightToc",(function(){return d})),o.d(n,"default",(function(){return b}));var r=o(1),t=o(9),a=(o(0),o(289)),i=o(310),c=o(313),l=o(312),u={title:"Configuring the Theme",description:"Geocortex Web - Configuring the application theme using app config"},s={id:"web/configuration-theme",title:"Configuring the Theme",description:"Geocortex Web - Configuring the application theme using app config",source:"@site/docs/web/configuration-theme.mdx",permalink:"/docs/web/configuration-theme",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/configuration-theme.mdx",sidebar:"web",previous:{title:"App Config Reference",permalink:"/docs/web/configuration-app-config-reference"},next:{title:"Commands and Operations",permalink:"/docs/web/configuration-commands-operations"}},d=[{value:"Seeding a New Theme from an Existing Theme",id:"seeding-a-new-theme-from-an-existing-theme",children:[]},{value:"Customizing Theme Colors",id:"customizing-theme-colors",children:[]},{value:"Theme Color Reference",id:"theme-color-reference",children:[]}],g={rightToc:d};function b(e){var n=e.components,o=Object(t.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},g,o,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Geocortex Web's appearance is built around two concepts: theme and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/web/configuration-layout-getting-started"}),"layout"),". The theme controls the color scheme of the app, while the layout controls the organization of content."),Object(a.b)("h3",{id:"seeding-a-new-theme-from-an-existing-theme"},"Seeding a New Theme from an Existing Theme"),Object(a.b)("p",null,"Two predefined themes are included with Geocortex Web, ",Object(a.b)("inlineCode",{parentName:"p"},"light")," and ",Object(a.b)("inlineCode",{parentName:"p"},"dark"),". You can select a predefined theme and accent color with ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/component-settings.htm#branding-settings%3FTocPath%3DConfiguration%7CComponent%2520Settings%7C_____4"}),"Geocortex Web Designer"),"."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"branding")," service is responsible for the theming of the application. To select a theme and accent color from within the config, you can configure the branding service. The ",Object(a.b)("inlineCode",{parentName:"p"},"template")," property is used to specify the base theme to seed colors from."),Object(a.b)(c.a,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"config",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "branding",\n            "id": "branding",\n            "activeTheme": "custom-vampire",\n            "themes": [{\n                "id": "custom-vampire",\n                // highlight-next-line\n                "accentColor": "red",\n                // highlight-next-line\n                "template": "dark"\n            }]\n        },\n        ...\n    ]\n}\n'))),Object(a.b)(l.a,{value:"ui",mdxType:"TabItem"},Object(a.b)("img",{src:Object(i.a)("img/web-vampire-theme.png")}))),Object(a.b)("h3",{id:"customizing-theme-colors"},"Customizing Theme Colors"),Object(a.b)("p",null,"Every color in a theme can be fully customized by editing the ",Object(a.b)("inlineCode",{parentName:"p"},"colors")," property of a theme in the branding service configuration."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Colors can be specified with their common name, a hex value, or a rgba value. A full list of all the color keys available in a theme ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/web/configuration-theme#theme-color-reference"}),"can be found here"),"."))),Object(a.b)(c.a,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"config",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "branding",\n            "id": "branding",\n            "activeTheme": "custom-vampire",\n            "themes": [{\n                "id": "custom-vampire",\n                "accentColor": "red",\n                "template": "dark",\n                "colors": {\n                    "emphasizedButtonBackground": "purple",\n                    "primaryAccentLarge": "#00b7eb",\n                    "secondaryBackground": [249, 77, 0, 255]\n                }\n            }]\n        },\n        ...\n    ]\n}\n'))),Object(a.b)(l.a,{value:"ui",mdxType:"TabItem"},Object(a.b)("img",{src:Object(i.a)("img/web-vampire-theme-customized.png")}))),Object(a.b)("h3",{id:"theme-color-reference"},"Theme Color Reference"),Object(a.b)("p",null,"Following is the interface that declares every possible theme color that can be\nused in a Geocortex Web Application. Each of these colors can be\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#customizing-theme-colors"}),"customized")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/web/sdk-component-styling"}),"used in custom components")),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"You can ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.google.com/web/tools/chrome-devtools/css"}),"inspect the CSS")," of a Geocortex Web Application to determine what theme property a specific element uses."))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export interface BrandingColors {\n    accentIconBackground: ColorConfig;\n    accentIconBackgroundHover: ColorConfig;\n    accentIconBorder: ColorConfig;\n    accentIconBorderHover: ColorConfig;\n    accentIconForeground: ColorConfig;\n    accentIconForegroundHover: ColorConfig;\n    alertAmberBackground: ColorConfig;\n    alertAmberBackgroundHover: ColorConfig;\n    alertAmberBorder: ColorConfig;\n    alertAmberBorderHover: ColorConfig;\n    alertAmberForeground: ColorConfig;\n    alertAmberForegroundHover: ColorConfig;\n    alertAmberIcon: ColorConfig;\n    alertAmberIconHover: ColorConfig;\n    alertGrayBackground: ColorConfig;\n    alertGrayBackgroundHover: ColorConfig;\n    alertGrayBorder: ColorConfig;\n    alertGrayBorderHover: ColorConfig;\n    alertGrayForeground: ColorConfig;\n    alertGrayForegroundHover: ColorConfig;\n    alertGrayIcon: ColorConfig;\n    alertGrayIconHover: ColorConfig;\n    alertGreenBackground: ColorConfig;\n    alertGreenBackgroundHover: ColorConfig;\n    alertGreenBorder: ColorConfig;\n    alertGreenBorderHover: ColorConfig;\n    alertGreenForeground: ColorConfig;\n    alertGreenForegroundHover: ColorConfig;\n    alertGreenIcon: ColorConfig;\n    alertGreenIconHover: ColorConfig;\n    alertRedBackground: ColorConfig;\n    alertRedBackgroundHover: ColorConfig;\n    alertRedBorder: ColorConfig;\n    alertRedBorderHover: ColorConfig;\n    alertRedForeground: ColorConfig;\n    alertRedForegroundHover: ColorConfig;\n    alertRedIcon: ColorConfig;\n    alertRedIconHover: ColorConfig;\n    alertBackgroundDisabled: ColorConfig;\n    alertBorderDisabled: ColorConfig;\n    alertForegroundDisabled: ColorConfig;\n    alertIconDisabled: ColorConfig;\n    buttonBackground: ColorConfig;\n    buttonBackgroundDisabled: ColorConfig;\n    buttonBackgroundHover: ColorConfig;\n    buttonBorder: ColorConfig;\n    buttonBorderDisabled: ColorConfig;\n    buttonBorderHover: ColorConfig;\n    buttonForeground: ColorConfig;\n    buttonForegroundDisabled: ColorConfig;\n    buttonForegroundHover: ColorConfig;\n    buttonIcon: ColorConfig;\n    buttonIconDisabled: ColorConfig;\n    buttonIconHover: ColorConfig;\n    disabledIconFill: ColorConfig;\n    emphasizedButtonBackground: ColorConfig;\n    emphasizedButtonBackgroundDisabled: ColorConfig;\n    emphasizedButtonBackgroundHover: ColorConfig;\n    emphasizedButtonBorder: ColorConfig;\n    emphasizedButtonBorderDisabled: ColorConfig;\n    emphasizedButtonBorderHover: ColorConfig;\n    emphasizedButtonForeground: ColorConfig;\n    emphasizedButtonForegroundDisabled: ColorConfig;\n    emphasizedButtonForegroundHover: ColorConfig;\n    emphasizedButtonIcon: ColorConfig;\n    emphasizedButtonIconDisabled: ColorConfig;\n    emphasizedButtonIconHover: ColorConfig;\n    inlineTableHeaderBackground: ColorConfig;\n    inlineTableRowBackground: ColorConfig;\n    inlineTableBorder: ColorConfig;\n    inputBorder: ColorConfig;\n    itemSelectedBackground: ColorConfig;\n    itemHoverBackground: ColorConfig;\n    none: ColorConfig;\n    panelBorder: ColorConfig;\n    primaryAccent: ColorConfig;\n    primaryAccentDisabled: ColorConfig;\n    primaryAccentHover: ColorConfig;\n    primaryAccentLarge: ColorConfig;\n    primaryBackground: ColorConfig;\n    primaryBorder: ColorConfig;\n    primaryForeground: ColorConfig;\n    primaryForegroundDisabled: ColorConfig;\n    secondaryBackground: ColorConfig;\n    secondaryBorder: ColorConfig;\n    secondaryForeground: ColorConfig;\n    tabPrimaryForeground: ColorConfig;\n    tabSecondaryForeground: ColorConfig;\n}\n")))}b.isMDXComponent=!0},289:function(e,n,o){"use strict";o.d(n,"a",(function(){return d})),o.d(n,"b",(function(){return f}));var r=o(0),t=o.n(r);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var u=t.a.createContext({}),s=function(e){var n=t.a.useContext(u),o=n;return e&&(o="function"==typeof e?e(n):c({},n,{},e)),o},d=function(e){var n=s(e.components);return t.a.createElement(u.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(o),b=r,f=d["".concat(i,".").concat(b)]||d[b]||g[b]||a;return o?t.a.createElement(f,c({ref:n},u,{components:o})):t.a.createElement(f,c({ref:n},u))}));function f(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=o[u];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},290:function(e,n,o){var r;!function(){"use strict";var o={}.hasOwnProperty;function t(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=t.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)o.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(t.default=t,e.exports=t):void 0===(r=function(){return t}.apply(n,[]))||(e.exports=r)}()},291:function(e,n,o){"use strict";var r=o(12),t=o(30),a=o(294),i="".startsWith;r(r.P+r.F*o(295)("startsWith"),"String",{startsWith:function(e){var n=a(this,e,"startsWith"),o=t(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),r=String(e);return i?i.call(n,r,o):n.slice(o,o+r.length)===r}})},294:function(e,n,o){var r=o(79),t=o(29);e.exports=function(e,n,o){if(r(n))throw TypeError("String#"+o+" doesn't accept regex!");return String(t(e))}},295:function(e,n,o){var r=o(2)("match");e.exports=function(e){var n=/./;try{"/./"[e](n)}catch(o){try{return n[r]=!1,!"/./"[e](n)}catch(t){}}return!0}},309:function(e,n,o){"use strict";var r=o(0),t=o(55);n.a=function(){return Object(r.useContext)(t.a)}},310:function(e,n,o){"use strict";o.d(n,"a",(function(){return t}));o(291);var r=o(309);function t(e){var n=(Object(r.a)().siteConfig||{}).baseUrl,o=void 0===n?"/":n;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?o+e.slice(1):o+e}},311:function(e,n,o){"use strict";var r=o(0),t=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});n.a=t},312:function(e,n,o){"use strict";var r=o(0),t=o.n(r);n.a=function(e){return t.a.createElement("div",null,e.children)}},313:function(e,n,o){"use strict";o(32),o(23),o(24);var r=o(0),t=o.n(r),a=o(311);var i=function(){return Object(r.useContext)(a.a)},c=o(290),l=o.n(c),u=o(132),s=o.n(u),d=37,g=39;n.a=function(e){var n=e.block,o=e.children,a=e.defaultValue,c=e.values,u=e.groupId,b=i(),f=b.tabGroupChoices,m=b.setTabGroupChoices,p=Object(r.useState)(a),C=p[0],h=p[1];if(null!=u){var v=f[u];null!=v&&v!==C&&h(v)}var O=function(e){h(e),null!=u&&m(u,e)},j=[];return t.a.createElement("div",null,t.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":n})},c.map((function(e){var n=e.value,o=e.label;return t.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":C===n,className:l()("tab-item",s.a.tabItem,{"tab-item--active":C===n}),key:n,ref:function(e){return j.push(e)},onKeyDown:function(e){return function(e,n,o){switch(o.keyCode){case g:!function(e,n){var o=e.indexOf(n)+1;e[o]?e[o].focus():e[0].focus()}(e,n);break;case d:!function(e,n){var o=e.indexOf(n)-1;e[o]?e[o].focus():e[e.length-1].focus()}(e,n)}}(j,e.target,e)},onFocus:function(){return O(n)},onClick:function(){return O(n)}},o)}))),t.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(o).filter((function(e){return e.props.value===C}))[0]))}}}]);