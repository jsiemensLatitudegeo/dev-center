/*! For license information please see d7fc8fda.7de590f1.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[107,114],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(1),i=n(9),o=(n(0),n(277)),r={},c={id:"snippets/app-item",title:"app-item",description:"An app config file is composed of a list of **app items**. App items can potentially be anything. Each app item has an **item `$type`**, which viewer is aware of and knows how to locate and load. They usually they represent configuration for components, maps, portal items, or shared data. All item app configuration is specified within the `items` array of the **`app.json`** file.",source:"@site/docs/snippets/app-item.mdx",permalink:"/docs/snippets/app-item",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/snippets/app-item.mdx"},p=[],s={rightToc:p};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"An app config file is composed of a list of ",Object(o.b)("strong",{parentName:"p"},"app items"),". App items can potentially be anything. Each app item has an ",Object(o.b)("strong",{parentName:"p"},"item ",Object(o.b)("inlineCode",{parentName:"strong"},"$type")),", which viewer is aware of and knows how to locate and load. They usually they represent configuration for components, maps, portal items, or shared data. All item app configuration is specified within the ",Object(o.b)("inlineCode",{parentName:"p"},"items")," array of the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"app.json"))," file."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Each component can only load a certain ",Object(o.b)("inlineCode",{parentName:"p"},"$type")," of app item which corresponds to it. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"<map>")," components can only load app items of type ",Object(o.b)("inlineCode",{parentName:"p"},"map-extension")," as their configuration."))))}l.isMDXComponent=!0},254:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return d}));var a=n(1),i=n(9),o=(n(0),n(277)),r=n(298),c=n(140),p=n(301),s=n(300),l={title:"App Config Reference",description:"Geocortex Web - Reference for App Config"},u={id:"web/configuration-app-config-reference",title:"App Config Reference",description:"Geocortex Web - Reference for App Config",source:"@site/docs/web/configuration-app-config-reference.mdx",permalink:"/docs/web/configuration-app-config-reference",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/configuration-app-config-reference.mdx",sidebar:"web",previous:{title:"App Config",permalink:"/docs/web/configuration-app-config"},next:{title:"Configuring the Theme",permalink:"/docs/web/configuration-theme"}},m=[{value:"<code>schemaVersion</code> property",id:"schemaversion-property",children:[]},{value:"App Items",id:"app-items",children:[{value:"Custom App Items",id:"custom-app-items",children:[]}]},{value:"Item URIs",id:"item-uris",children:[]},{value:"Reusing Config",id:"reusing-config",children:[]},{value:"Internationalization",id:"internationalization",children:[]}],b={rightToc:m};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"schemaversion-property"},Object(o.b)("inlineCode",{parentName:"h2"},"schemaVersion")," property"),Object(o.b)("p",null,"The property ",Object(o.b)("inlineCode",{parentName:"p"},"schemaVersion")," should always be present in an ",Object(o.b)("inlineCode",{parentName:"p"},"app.json")," file."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "schemaVersion": "1.0",\n\n  "items": [...]\n}\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"schemaVersion")," property is a required property that informs Geocortex Web what version of app config you are using. This allows for the schema to be updated in future releases without breaking old configuration."),Object(o.b)("h2",{id:"app-items"},"App Items"),Object(o.b)(c.default,{mdxType:"AppItemSnippet"}),Object(o.b)("h3",{id:"custom-app-items"},"Custom App Items"),Object(o.b)("p",null,"Custom App items in Geocortex Web are most commonly defined by creating a configurable ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-component-reference#configuration"}),"component model")," or a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-service-reference#models-and-configuration"}),"configurable service"),". Registering the model or service with Geocortex Web defines a new app item type which can be used in the app config."),Object(o.b)("h2",{id:"item-uris"},"Item URIs"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Item URIs")," are a commonly used pattern in the ",Object(o.b)("inlineCode",{parentName:"p"},"app.json")," to uniquely identify and reference app items. They take the format"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"item://<item-type>/<item-id>")),Object(o.b)("p",null,"For example, the item URI for the following item is ",Object(o.b)("inlineCode",{parentName:"p"},"item://menu-item/feature-actions")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$type": "menu",\n  "id": "feature-actions",\n  "items": [...]\n}\n')),Object(o.b)("p",null,"These item URIs can be used by app items to include other app items as property values, allowing reuse."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$type": "feature-details",\n    "id": "feature-details",\n    "featureActions": "item://menu/feature-actions"\n}\n')),Object(o.b)("h2",{id:"reusing-config"},"Reusing Config"),Object(o.b)("p",null,"The same config can be used for multiple items in a layout. For example, this allows you to reuse the same button in multiple locations in the App."),Object(o.b)(p.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"layout",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n  <split resizable="true">\n    <panel width="30">\n        <stack margin="0.5">\n            // highlight-next-line\n          <button icon="info" config="do-something" margin="0.5" id="do-something-1"></button>\n        </stack>\n    </panel>\n    <map slot="main">\n        // highlight-next-line\n      <button icon="info" config="do-something" slot="top-center" margin="0.5" id="do-something-2"></button>\n    </map>\n  </split>\n</layout>\n'))),Object(o.b)(s.a,{value:"config",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "menu-item",\n            // highlight-next-line\n            "id": "do-something",\n            "isEnabled": true,\n            "iconId": "info",\n            "action": {\n                "name": "ui.alert",\n                "arguments": {\n                    "title": "Something?",\n                    "message": "Fine, I did it",\n                    "buttonText": "OK"\n                }\n            }\n        }\n    ]\n}\n'))),Object(o.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(o.b)("img",{src:Object(r.a)("img/web-app-config-basic.png")}))),Object(o.b)("p",null,"In addition, multiple components can use the same configuration type. For example, components like the ",Object(o.b)("inlineCode",{parentName:"p"},"<iwtm>"),", ",Object(o.b)("inlineCode",{parentName:"p"},"<button>")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<toolbar>")," all use the ",Object(o.b)("inlineCode",{parentName:"p"},"menu-item")," type in some manner for their configuration. Custom components can also adopt existing item types as their ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-component-reference#models"}),"models"),"."),Object(o.b)("h2",{id:"internationalization"},"Internationalization"),Object(o.b)("p",null,"All language strings used for properties in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-app-config"}),"app config"),', like "title" or "description", are automatically translated by the application.'),Object(o.b)("p",null,"Learn more about how to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-internationalization"}),"use and create language resources"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "menu-item",\n            "id": "zoom-to-extent",\n            "iconId": "zoom-extent",\n            "title": "language-zoom-extent-title",\n            "description": "language-zoom-extent-description",\n            "action": "map.zoom-to-layer-extent"\n        },\n        ...\n    ]\n}\n')))}d.isMDXComponent=!0},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,d=u["".concat(r,".").concat(b)]||u[b]||m[b]||o;return n?i.a.createElement(d,c({ref:t},s,{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},278:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var r=i.apply(null,a);r&&e.push(r)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},281:function(e,t,n){"use strict";var a=n(12),i=n(30),o=n(282),r="".startsWith;a(a.P+a.F*n(283)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return r?r.call(t,a,n):t.slice(n,n+a.length)===a}})},282:function(e,t,n){var a=n(79),i=n(29);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},283:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(i){}}return!0}},297:function(e,t,n){"use strict";var a=n(0),i=n(55);t.a=function(){return Object(a.useContext)(i.a)}},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(281);var a=n(297);function i(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},299:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=i},300:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}},301:function(e,t,n){"use strict";n(32),n(23),n(24);var a=n(0),i=n.n(a),o=n(299);var r=function(){return Object(a.useContext)(o.a)},c=n(278),p=n.n(c),s=n(132),l=n.n(s),u=37,m=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,c=e.values,s=e.groupId,b=r(),d=b.tabGroupChoices,f=b.setTabGroupChoices,h=Object(a.useState)(o),g=h[0],O=h[1];if(null!=s){var j=d[s];null!=j&&j!==g&&O(j)}var y=function(e){O(e),null!=s&&f(s,e)},v=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:p()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":g===t,className:p()("tab-item",l.a.tabItem,{"tab-item--active":g===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case m:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return y(t)},onClick:function(){return y(t)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}}}]);