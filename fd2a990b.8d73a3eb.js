(window.webpackJsonp=window.webpackJsonp||[]).push([[148,78],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(9),o=(a(0),a(293)),r={},c={id:"mobile/snippets/translation-callout",title:"translation-callout",description:"Existing language strings for an application can be customized for any language in the Geocortex Mobile s Designer. To provide a complete translation in an entirely new locale for Geocortex Mobile, please contact us.",source:"@site/docs/mobile/snippets/translation-callout.mdx",permalink:"/docs/mobile/snippets/translation-callout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/translation-callout.mdx"},s=[],l={rightToc:s};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Existing language strings for an application can be ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/mobileviewer/latest/admin-help/Default.htm#gmv/designer/internationalize-GXM.htm"}),"customized for any language in the Geocortex Mobile s Designer"),". To provide a complete translation in an entirely new locale for Geocortex Mobile, please ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.geocortex.com/contact/"}),"contact us"),"."))))}p.isMDXComponent=!0},287:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return m})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(9),o=(a(0),a(293)),r=a(300),c=a(296),s=a(295),l=a(147),p={title:"Internationalization",description:"Geocortex Mobile - Internationalization reference"},m={id:"mobile/sdk-internationalization",title:"Internationalization",description:"Geocortex Mobile - Internationalization reference",source:"@site/docs/mobile/sdk-internationalization.mdx",permalink:"/docs/mobile/sdk-internationalization",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/sdk-internationalization.mdx",sidebar:"mobile",previous:{title:"Component and Service Interactions",permalink:"/docs/mobile/sdk-component-service-interactions"},next:{title:"Memory Management",permalink:"/docs/mobile/sdk-memory-leaks"}},d=[{value:"Specifying a Default Language",id:"specifying-a-default-language",children:[]},{value:"Adding New Cultures for Existing Language Strings",id:"adding-new-cultures-for-existing-language-strings",children:[]},{value:"Relevant SDK Sample",id:"relevant-sdk-sample",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],u={rightToc:d};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l.default,{mdxType:"TranslationCallout"}),Object(o.b)("p",null,"Geocortex Mobile was designed to be fully internationalizable on all levels of the product, from app config to custom code. This internationalization is handled by Xamarin forms."),Object(o.b)("h2",{id:"specifying-a-default-language"},"Specifying a Default Language"),Object(o.b)("p",null,"Xamarin forms describes how to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/app-fundamentals/localization/text?pivots=windows#specify-the-default-culture"}),"specify a default language for your app"),"."),Object(o.b)("h2",{id:"adding-new-cultures-for-existing-language-strings"},"Adding New Cultures for Existing Language Strings"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-quickstart"}),"Quickstart")," project comes with multiple ",Object(o.b)("inlineCode",{parentName:"p"},"AppResources")," files in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-quickstart/tree/master/App1/App1"}),"root of the platform agnostic project")," to provide an example of adding a culture to your application. You can also check out the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/app-fundamentals/localization/"}),"Xamarin Documentation on Localization"),"."),Object(o.b)("h2",{id:"relevant-sdk-sample"},"Relevant SDK Sample"),Object(o.b)("p",null,"Check out the relevant Geocortex Mobile SDK Sample:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Conceptual/Internationalization"}),"Internationalization"))),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)(s.a,{mdxType:"UseCaseContainer"},Object(o.b)(c.a,{title:"Internationalization in App Config",description:"Learn how to use language strings in the app config",link:Object(r.a)("docs/mobile/configuration-app-config-reference#internationalization"),mdxType:"UseCaseCard"}),Object(o.b)(c.a,{title:"Internationalize Components",description:"Learn how to use language strings for user facing text in components",link:Object(r.a)("docs/mobile/sdk-components-internationalization"),mdxType:"UseCaseCard"})))}b.isMDXComponent=!0},295:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),i=a.n(n),o=a(294),r=a.n(o),c=a(125),s=a.n(c);function l(e){var t=e.children;return i.a.createElement("div",{className:r()(s.a.root)},t)}},296:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));a(302);var n=a(301),i=a(0),o=a.n(i),r=a(294),c=a.n(r),s=a(126),l=a.n(s);function p(e){var t=e.title,a=e.description,i=e.link;return o.a.createElement("div",{className:c()("card-demo",l.a.root)},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card__header"},o.a.createElement("h3",null,t)),o.a.createElement("div",{className:"card__body"},o.a.createElement("p",null,a)),o.a.createElement("div",{className:"card__footer"},o.a.createElement(n.a,{className:"button button--secondary button--block",to:i},"Get Started"))))}}}]);