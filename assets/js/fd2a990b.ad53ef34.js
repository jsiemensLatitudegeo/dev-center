(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[6660,6286],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(7294),a=n(3727),i=n(2263),o=n(3919),s=n(412);const l=(0,r.createContext)({collectLink:()=>{}});var c=n(4996),u=n(8780);const p=function({isNavLink:e,to:t,href:n,activeClassName:p,isActive:d,"data-noBrokenLinkCheck":m,autoAddBaseUrl:f=!0,...g}){var v;const{siteConfig:{trailingSlash:h}}=(0,i.Z)(),{withBaseUrl:b}=(0,c.C)(),y=(0,r.useContext)(l),k=t||n,x=(0,o.Z)(k),w=null==k?void 0:k.replace("pathname://","");let N=void 0!==w?(C=w,f&&(e=>e.startsWith("/"))(C)?b(C):C):void 0;var C;N&&x&&(N=(0,u.applyTrailingSlash)(N,h));const O=(0,r.useRef)(!1),M=e?a.OL:a.rU,z=s.Z.canUseIntersectionObserver;let E;(0,r.useEffect)((()=>(!z&&x&&null!=N&&window.docusaurus.prefetch(N),()=>{z&&E&&E.disconnect()})),[N,z,x]);const S=null!==(v=null==N?void 0:N.startsWith("#"))&&void 0!==v&&v,T=!N||!x||S;return N&&x&&!S&&!m&&y.collectLink(N),T?r.createElement("a",{href:N,...k&&!x&&{target:"_blank",rel:"noopener noreferrer"},...g}):r.createElement(M,{...g,onMouseEnter:()=>{O.current||null==N||(window.docusaurus.preload(N),O.current=!0)},innerRef:e=>{var t,n;z&&e&&x&&(t=e,n=()=>{null!=N&&window.docusaurus.prefetch(N)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),n())}))})),E.observe(t))},to:N||"",...e&&{isActive:d,activeClassName:p}})}},3919:(e,t,n)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>a})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>i,Z:()=>o});var r=n(2263),a=n(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),r="/"===n?"/":t?(a=n).endsWith("/")?a:`${a}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var a;return e.replace(n,r)}},8780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(6742),a=n(7294),i=n(6010);const o="root_2PFE";function s({title:e,description:t,link:n}){return a.createElement("div",{className:(0,i.Z)("card-demo",o)},a.createElement("div",{className:"card"},a.createElement("div",{className:"card__header"},a.createElement("h3",null,e)),a.createElement("div",{className:"card__body"},a.createElement("p",null,t)),a.createElement("div",{className:"card__footer"},a.createElement(r.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(7294);const a="root_NqT0";function i({children:e}){return r.createElement("div",{className:a},e)}},1196:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>u,metadata:()=>p,toc:()=>d,default:()=>f});var r=n(2122),a=(n(7294),n(3905)),i=n(4996),o=n(1962),s=n(7763),l=n(7785);const c={title:"Internationalization",description:"Geocortex Mobile - Internationalization reference"},u=void 0,p={unversionedId:"mobile/sdk-internationalization",id:"mobile/sdk-internationalization",isDocsHomePage:!1,title:"Internationalization",description:"Geocortex Mobile - Internationalization reference",source:"@site/docs/mobile/sdk-internationalization.mdx",sourceDirName:"mobile",slug:"/mobile/sdk-internationalization",permalink:"/docs/mobile/sdk-internationalization",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/sdk-internationalization.mdx",version:"current",frontMatter:{title:"Internationalization",description:"Geocortex Mobile - Internationalization reference"},sidebar:"mobile",previous:{title:"Component and Service Interactions",permalink:"/docs/mobile/sdk-component-service-interactions"},next:{title:"Memory Management",permalink:"/docs/mobile/sdk-memory-leaks"}},d=[{value:"Specifying a Default Language",id:"specifying-a-default-language",children:[]},{value:"Adding New Cultures for Existing Language Strings",id:"adding-new-cultures-for-existing-language-strings",children:[]},{value:"Relevant SDK Sample",id:"relevant-sdk-sample",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],m={toc:d};function f({components:e,...t}){return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(l.default,{mdxType:"TranslationCallout"}),(0,a.kt)("p",null,"Geocortex Mobile was designed to be fully internationalizable on all levels of the product, from app config to custom code. This internationalization is handled by Xamarin Forms."),(0,a.kt)("h2",{id:"specifying-a-default-language"},"Specifying a Default Language"),(0,a.kt)("p",null,"Xamarin Forms describes how to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/app-fundamentals/localization/text?pivots=windows#specify-the-default-culture"},"specify a default language for your app"),"."),(0,a.kt)("h2",{id:"adding-new-cultures-for-existing-language-strings"},"Adding New Cultures for Existing Language Strings"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-quickstart"},"Quickstart")," project comes with multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"AppResources")," files in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-quickstart/tree/master/App1/App1"},"root of the platform agnostic project")," to provide an example of adding a culture to your application. You can also check out the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/app-fundamentals/localization/"},"Xamarin Documentation on Localization"),"."),(0,a.kt)("h2",{id:"relevant-sdk-sample"},"Relevant SDK Sample"),(0,a.kt)("p",null,"Check out the relevant Geocortex Mobile SDK Sample:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Conceptual/Internationalization"},"Internationalization"))),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)(s.Z,{mdxType:"UseCaseContainer"},(0,a.kt)(o.Z,{title:"Internationalization in App Config",description:"Learn how to use language strings in the app config",link:(0,i.Z)("docs/mobile/configuration-app-config-reference#internationalization"),mdxType:"UseCaseCard"}),(0,a.kt)(o.Z,{title:"Internationalize Components",description:"Learn how to use language strings for user facing text in components",link:(0,i.Z)("docs/mobile/sdk-components-internationalization"),mdxType:"UseCaseCard"})))}f.isMDXComponent=!0},7785:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>s,toc:()=>l,default:()=>u});var r=n(2122),a=(n(7294),n(3905));const i={},o=void 0,s={unversionedId:"mobile/snippets/translation-callout",id:"mobile/snippets/translation-callout",isDocsHomePage:!1,title:"translation-callout",description:"Existing language strings for an application can be customized for any language in the Geocortex Mobile s Designer. To provide a complete translation in an entirely new locale for Geocortex Mobile, please contact us.",source:"@site/docs/mobile/snippets/translation-callout.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/translation-callout",permalink:"/docs/mobile/snippets/translation-callout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/translation-callout.mdx",version:"current",frontMatter:{}},l=[],c={toc:l};function u({components:e,...t}){return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Existing language strings for an application can be ",(0,a.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/mobileviewer/latest/admin-help/Default.htm#gmv/designer/internationalize-GXM.htm"},"customized for any language in the Geocortex Mobile s Designer"),". To provide a complete translation in an entirely new locale for Geocortex Mobile, please ",(0,a.kt)("a",{parentName:"p",href:"https://www.geocortex.com/contact/"},"contact us"),"."))))}u.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})}}]);