(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{276:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return f})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(9),i=(r(0),r(299)),c=r(311),a=r(310),s={title:"SDK Samples",description:"Geocortex Mobile - Learn about the Geocortex Mobile SDK Samples project"},u={id:"mobile/sdk-samples",isDocsHomePage:!1,title:"SDK Samples",description:"Geocortex Mobile - Learn about the Geocortex Mobile SDK Samples project",source:"@site/docs/mobile/sdk-samples.mdx",permalink:"/docs/mobile/sdk-samples",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/sdk-samples.mdx",sidebar:"mobile",previous:{title:"Quickstart Reference",permalink:"/docs/mobile/sdk-quickstart-reference"},next:{title:"Deployment",permalink:"/docs/mobile/sdk-deployment"}},f=[],l={rightToc:f};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Alongside the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-quickstart"}),"Quickstart Project"),", a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples"}),"SDK Samples project")," has been created which demonstrates using the SDK to extend Geocortex Mobile with custom components, operations and services. The samples project also demonstrates configurations, conceptual ideas, and the use and extension of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/overview"}),"Geocortex Workflow"),". Running the project displays a selector which lets you explore the live samples."),Object(i.b)(a.a,{mdxType:"UseCaseContainer"},Object(i.b)(c.a,{title:"Quickstart",description:"Check out the Geocortex Mobile SDK Quickstart Project.",link:"https://github.com/geocortex/vertigis-mobile-quickstart",mdxType:"UseCaseCard"}),Object(i.b)(c.a,{title:"SDK Samples",description:"Check out the Geocortex Mobile SDK Samples Project.",link:"https://github.com/geocortex/vertigis-mobile-samples",mdxType:"UseCaseCard"})))}p.isMDXComponent=!0},299:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),f=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=f(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=f(r),b=n,m=l["".concat(c,".").concat(b)]||l[b]||p[b]||i;return r?o.a.createElement(m,a(a({ref:t},u),{},{components:r})):o.a.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},300:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}r.d(t,"a",(function(){return n}))},301:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},302:function(e,t,r){var n=r(81),o=r(55).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},303:function(e,t,r){t.f=r(3)},306:function(e,t,r){"use strict";r(54),r(307),r(315);var n=r(0),o=r.n(n),i=r(41),c=r(300),a=r(16),s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var t,r=e.isNavLink,u=s(e,["isNavLink"]),f=u.to,l=u.href,p=f||l,b=Object(c.a)(p),m=Object(n.useRef)(!1),y=r?i.c:i.b,d=a.a.canUseIntersectionObserver;return Object(n.useEffect)((function(){return!d&&b&&window.docusaurus.prefetch(p),function(){d&&t&&t.disconnect()}}),[p,d,b]),p&&b&&!p.startsWith("#")?o.a.createElement(y,Object.assign({},u,{onMouseEnter:function(){m.current||(window.docusaurus.preload(p),m.current=!0)},innerRef:function(e){var r,n;d&&e&&b&&(r=e,n=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:p})):o.a.createElement("a",Object.assign({href:p},!b&&{target:"_blank",rel:"noopener noreferrer"},u))}},307:function(e,t,r){"use strict";var n=r(12),o=r(30),i=r(308),c="".startsWith;n(n.P+n.F*r(309)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return c?c.call(t,n,r):t.slice(r,r+n.length)===n}})},308:function(e,t,r){var n=r(79),o=r(29);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(e))}},309:function(e,t,r){var n=r(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(o){}}return!0}},310:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0),o=r.n(n),i=r(129),c=r.n(i);function a(e){var t=e.children;return o.a.createElement("div",{className:c.a.root},t)}},311:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));r(312);var n=r(306),o=r(0),i=r.n(o),c=r(301),a=r(130),s=r.n(a);function u(e){var t=e.title,r=e.description,o=e.link;return i.a.createElement("div",{className:Object(c.a)("card-demo",s.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,r)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(n.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},312:function(e,t,r){"use strict";r(320)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},313:function(e,t,r){var n=r(51),o=r(52),i=r(28),c=r(76),a=r(27),s=r(80),u=Object.getOwnPropertyDescriptor;t.f=r(10)?u:function(e,t){if(e=i(e),t=c(t,!0),s)try{return u(e,t)}catch(r){}if(a(e,t))return o(!n.f.call(e,t),e[t])}},314:function(e,t,r){var n=r(22);e.exports=Array.isArray||function(e){return"Array"==n(e)}},315:function(e,t,r){"use strict";var n=r(6),o=r(27),i=r(10),c=r(12),a=r(15),s=r(316).KEY,u=r(13),f=r(42),l=r(43),p=r(39),b=r(3),m=r(303),y=r(317),d=r(318),h=r(314),v=r(8),g=r(14),O=r(31),j=r(28),w=r(76),S=r(52),x=r(82),E=r(319),k=r(313),P=r(77),N=r(26),D=r(21),T=k.f,C=N.f,M=E.f,K=n.Symbol,F=n.JSON,_=F&&F.stringify,G=b("_hidden"),W=b("toPrimitive"),A={}.propertyIsEnumerable,I=f("symbol-registry"),J=f("symbols"),L=f("op-symbols"),R=Object.prototype,Q="function"==typeof K&&!!P.f,U=n.QObject,q=!U||!U.prototype||!U.prototype.findChild,X=i&&u((function(){return 7!=x(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=T(R,t);n&&delete R[t],C(e,t,r),n&&e!==R&&C(R,t,n)}:C,Y=function(e){var t=J[e]=x(K.prototype);return t._k=e,t},z=Q&&"symbol"==typeof K.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof K},H=function(e,t,r){return e===R&&H(L,t,r),v(e),t=w(t,!0),v(r),o(J,t)?(r.enumerable?(o(e,G)&&e[G][t]&&(e[G][t]=!1),r=x(r,{enumerable:S(0,!1)})):(o(e,G)||C(e,G,S(1,{})),e[G][t]=!0),X(e,t,r)):C(e,t,r)},B=function(e,t){v(e);for(var r,n=d(t=j(t)),o=0,i=n.length;i>o;)H(e,r=n[o++],t[r]);return e},V=function(e){var t=A.call(this,e=w(e,!0));return!(this===R&&o(J,e)&&!o(L,e))&&(!(t||!o(this,e)||!o(J,e)||o(this,G)&&this[G][e])||t)},Z=function(e,t){if(e=j(e),t=w(t,!0),e!==R||!o(J,t)||o(L,t)){var r=T(e,t);return!r||!o(J,t)||o(e,G)&&e[G][t]||(r.enumerable=!0),r}},$=function(e){for(var t,r=M(j(e)),n=[],i=0;r.length>i;)o(J,t=r[i++])||t==G||t==s||n.push(t);return n},ee=function(e){for(var t,r=e===R,n=M(r?L:j(e)),i=[],c=0;n.length>c;)!o(J,t=n[c++])||r&&!o(R,t)||i.push(J[t]);return i};Q||(a((K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(r){this===R&&t.call(L,r),o(this,G)&&o(this[G],e)&&(this[G][e]=!1),X(this,e,S(1,r))};return i&&q&&X(R,e,{configurable:!0,set:t}),Y(e)}).prototype,"toString",(function(){return this._k})),k.f=Z,N.f=H,r(302).f=E.f=$,r(51).f=V,P.f=ee,i&&!r(40)&&a(R,"propertyIsEnumerable",V,!0),m.f=function(e){return Y(b(e))}),c(c.G+c.W+c.F*!Q,{Symbol:K});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;te.length>re;)b(te[re++]);for(var ne=D(b.store),oe=0;ne.length>oe;)y(ne[oe++]);c(c.S+c.F*!Q,"Symbol",{for:function(e){return o(I,e+="")?I[e]:I[e]=K(e)},keyFor:function(e){if(!z(e))throw TypeError(e+" is not a symbol!");for(var t in I)if(I[t]===e)return t},useSetter:function(){q=!0},useSimple:function(){q=!1}}),c(c.S+c.F*!Q,"Object",{create:function(e,t){return void 0===t?x(e):B(x(e),t)},defineProperty:H,defineProperties:B,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:ee});var ie=u((function(){P.f(1)}));c(c.S+c.F*ie,"Object",{getOwnPropertySymbols:function(e){return P.f(O(e))}}),F&&c(c.S+c.F*(!Q||u((function(){var e=K();return"[null]"!=_([e])||"{}"!=_({a:e})||"{}"!=_(Object(e))}))),"JSON",{stringify:function(e){for(var t,r,n=[e],o=1;arguments.length>o;)n.push(arguments[o++]);if(r=t=n[1],(g(t)||void 0!==e)&&!z(e))return h(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!z(t))return t}),n[1]=t,_.apply(F,n)}}),K.prototype[W]||r(11)(K.prototype,W,K.prototype.valueOf),l(K,"Symbol"),l(Math,"Math",!0),l(n.JSON,"JSON",!0)},316:function(e,t,r){var n=r(39)("meta"),o=r(14),i=r(27),c=r(26).f,a=0,s=Object.isExtensible||function(){return!0},u=!r(13)((function(){return s(Object.preventExtensions({}))})),f=function(e){c(e,n,{value:{i:"O"+ ++a,w:{}}})},l=e.exports={KEY:n,NEED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,n)){if(!s(e))return"F";if(!t)return"E";f(e)}return e[n].i},getWeak:function(e,t){if(!i(e,n)){if(!s(e))return!0;if(!t)return!1;f(e)}return e[n].w},onFreeze:function(e){return u&&l.NEED&&s(e)&&!i(e,n)&&f(e),e}}},317:function(e,t,r){var n=r(6),o=r(17),i=r(40),c=r(303),a=r(26).f;e.exports=function(e){var t=o.Symbol||(o.Symbol=i?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||a(t,e,{value:c.f(e)})}},318:function(e,t,r){var n=r(21),o=r(77),i=r(51);e.exports=function(e){var t=n(e),r=o.f;if(r)for(var c,a=r(e),s=i.f,u=0;a.length>u;)s.call(e,c=a[u++])&&t.push(c);return t}},319:function(e,t,r){var n=r(28),o=r(302).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return c&&"[object Window]"==i.call(e)?function(e){try{return o(e)}catch(t){return c.slice()}}(e):o(n(e))}},320:function(e,t,r){var n=r(12),o=r(13),i=r(29),c=/"/g,a=function(e,t,r,n){var o=String(i(e)),a="<"+t;return""!==r&&(a+=" "+r+'="'+String(n).replace(c,"&quot;")+'"'),a+">"+o+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(a),n(n.P+n.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}}}]);