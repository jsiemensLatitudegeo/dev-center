(window.webpackJsonp=window.webpackJsonp||[]).push([[51,144],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(9),r=(n(0),n(295)),o={},s={id:"web/snippets/translation-callout",title:"translation-callout",description:":::tip",source:"@site/docs/web/snippets/translation-callout.mdx",permalink:"/docs/web/snippets/translation-callout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/translation-callout.mdx"},c=[],l={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Existing language strings for an application can be ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/internationalization.htm"}),"customized for any language in the Geocortex Web Designer"),". To provide a complete translation in an entirely new locale for Geocortex Web, please ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.geocortex.com/contact/"}),"contact us"),"."))))}b.isMDXComponent=!0},210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return g}));var a=n(1),i=n(9),r=(n(0),n(295)),o=(n(300),n(299)),s=n(298),c=n(148),l={title:"Internationalization",description:"Geocortex Web - Learn about internationalization and language strings in Geocortex Web"},b={id:"web/sdk-internationalization",title:"Internationalization",description:"Geocortex Web - Learn about internationalization and language strings in Geocortex Web",source:"@site/docs/web/sdk-internationalization.mdx",permalink:"/docs/web/sdk-internationalization",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-internationalization.mdx",sidebar:"web",previous:{title:"Serializable Properties",permalink:"/docs/web/sdk-serializable-properties"},next:{title:"Reference Third Party Libraries",permalink:"/docs/web/sdk-reference-third-party-libraries"}},d=[{value:"Defining Language Strings",id:"defining-language-strings",children:[]},{value:"Registering Language Resources",id:"registering-language-resources",children:[]},{value:"Supported Locales",id:"supported-locales",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],p={rightToc:d};function g(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c.default,{mdxType:"TranslationCallout"}),Object(r.b)("p",null,"Geocortex Web was designed to be fully internationalizable on all levels of the product, from app config to custom code. A major component of this is language strings. Language strings provide a couple advantages over hardcoding plain text in a component."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Language strings can be easily translated or modified without having to change component code."),Object(r.b)("li",{parentName:"ol"},"Language strings can be shared across components."),Object(r.b)("li",{parentName:"ol"},"Language strings consolidate user facing text throughout the application, making it easy to review and find.")),Object(r.b)("p",null,"It is recommended you use language strings for all user facing text in your application."),Object(r.b)("h2",{id:"defining-language-strings"},"Defining Language Strings"),Object(r.b)("p",null,"Language strings are defined as properties in a plain JSON file. It's convention to define language strings with the format ",Object(r.b)("inlineCode",{parentName:"p"},"language-kebab-cased-key"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="en.json"',title:'"en.json"'}),'{\n    "language-some-text-string": "I will be translated."\n}\n')),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you define a language string that Geocortex Web has already defined, it will override the existing language string with your custom string."))),Object(r.b)("p",null,"By convention, these files are named after the locale they represent. For example, a file of german language strings would be named ",Object(r.b)("inlineCode",{parentName:"p"},"de.json"),"."),Object(r.b)("h2",{id:"registering-language-resources"},"Registering Language Resources"),Object(r.b)("p",null,"All language resource files need to be registered with the SDK before they can be used."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'}),'...\nimport enJson from "./en.json";\n\nexport default function (registry: LibraryRegistry) {\n    ...\n    registry.registerLanguageResources({\n        locale: "en",\n        getValues: () => enJson,\n    });\n    ...\n}\n')),Object(r.b)("p",null,"Once a set of language strings has been registered, they can be used ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-reference#internationalization"}),"in the app config")," or in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-components-internationalization"}),"custom components"),"."),Object(r.b)("h2",{id:"supported-locales"},"Supported Locales"),Object(r.b)("p",null,"Geocortex Web has full language tag support as specified in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/International/questions/qa-choosing-language-tags#regionsubtag"}),"WC3 spec"),". The casing of a language tag determines what is it parsed as."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"All lowercase tags like ",Object(r.b)("inlineCode",{parentName:"li"},"de")," are parsed as a language code."),Object(r.b)("li",{parentName:"ul"},"Region codes, like ",Object(r.b)("inlineCode",{parentName:"li"},"de-AT")," are uppercase."),Object(r.b)("li",{parentName:"ul"},"Script codes like ",Object(r.b)("inlineCode",{parentName:"li"},"ru-Latn")," are pascal cased.")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Regional locales will ",Object(r.b)("strong",{parentName:"p"},"not")," be used as fallback locales for a language. This means that if a browser is configured in the ",Object(r.b)("inlineCode",{parentName:"p"},"de")," locale, but language strings are registered with the ",Object(r.b)("inlineCode",{parentName:"p"},"de-AT")," locale in Geocortex Web, the fallback translation, ",Object(r.b)("strong",{parentName:"p"},"not")," ",Object(r.b)("inlineCode",{parentName:"p"},"de-AT"),", will be shown."))),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)(s.a,{mdxType:"UseCaseContainer"},Object(r.b)(o.a,{title:"Internationalization in App Config",description:"Learn how to use language strings in the app config",link:"configuration-app-config-reference#internationalization",mdxType:"UseCaseCard"}),Object(r.b)(o.a,{title:"Internationalize Components",description:"Learn how to use language strings for user facing text in components",link:"sdk-components-internationalization",mdxType:"UseCaseCard"})))}g.isMDXComponent=!0},297:function(e,t,n){"use strict";var a=n(0),i=n(51);t.a=function(){return Object(a.useContext)(i.a)}},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),i=n.n(a),r=n(296),o=n.n(r),s=n(130),c=n.n(s);function l(e){var t=e.children;return i.a.createElement("div",{className:o()(c.a.root)},t)}},299:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));n(305);var a=n(304),i=n(0),r=n.n(i),o=n(296),s=n.n(o),c=n(131),l=n.n(c);function b(e){var t=e.title,n=e.description,i=e.link;return r.a.createElement("div",{className:s()("card-demo",l.a.root)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"card__body"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"card__footer"},r.a.createElement(a.a,{className:"button button--secondary button--block",to:i},"Get Started"))))}},300:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(306);var a=n(297);function i(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);