/*! For license information please see 4606197d.9aef21a3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{204:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return f})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(9),i=(r(0),r(289)),c=r(299),a=r(298),s={title:"Services Overview",sidebar_label:"Overview",description:"Geocortex Web - Overview of Services",hide_table_of_contents:!0},u={id:"web/sdk-services-overview",title:"Services Overview",description:"Geocortex Web - Overview of Services",source:"@site/docs/web/sdk-services-overview.mdx",permalink:"/docs/web/sdk-services-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-services-overview.mdx",sidebar_label:"Overview",sidebar:"web",previous:{title:"Internationalization",permalink:"/docs/web/sdk-components-internationalization"},next:{title:"Create a Service",permalink:"/docs/web/sdk-create-service"}},f=[{value:"Next Steps",id:"next-steps",children:[]}],l={rightToc:f};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In Geocortex Web, services represent a shared application-wide concern that needs to be accessed by many components or other services. There is only one instance of each service in the application. Interactions with services usually happen through the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/web/sdk-services-commands-operations#implementing-commands-and-operations"}),"commands and operations they implement"),", but services can also be ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/web/sdk-services-injecting-services"}),"directly injected")," into other services and component models."),Object(i.b)("p",null,"Services are created at startup if they are ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/web/sdk-service-reference#service-registration"}),"registered")," with the ",Object(i.b)("inlineCode",{parentName:"p"},"loadOnStartup")," option, otherwise, they will be created when one of their commands and operations is run or they are directly injected into another service or component model."),Object(i.b)("p",null,"Services can be optionally configured by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/web/sdk-service-reference#models-and-configuration"}),"extending the ",Object(i.b)("inlineCode",{parentName:"a"},"ConfigurableServiceBase")," class"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { ServiceBase } from "@geocortex/web/services";\n\nexport default class ExampleService extends ServiceBase {\n\n    someSharedGlobalState: Map<string,string>;\n\n    protected _someCommand(args: any) {\n        ...\n    }\n\n    protected async _someOperation(){\n        ...\n        return result;\n    }\n}\n')),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)(a.a,{mdxType:"UseCaseContainer"},Object(i.b)(c.a,{title:"Create a Service",description:"Learn how to create a basic service",link:"sdk-create-service",mdxType:"UseCaseCard"}),Object(i.b)(c.a,{title:"Check out the Service Reference",description:"Take a deep dive into services in the Geocortex Web SDK",link:"sdk-service-reference",mdxType:"UseCaseCard"})))}p.isMDXComponent=!0},289:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),f=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},l=function(e){var t=f(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=f(r),b=n,d=l["".concat(c,".").concat(b)]||l[b]||p[b]||i;return r?o.a.createElement(d,a({ref:t},u,{components:r})):o.a.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},290:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var c=o.apply(null,n);c&&e.push(c)}else if("object"===i)for(var a in n)r.call(n,a)&&n[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},291:function(e,t,r){"use strict";var n=r(12),o=r(30),i=r(294),c="".startsWith;n(n.P+n.F*r(295)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return c?c.call(t,n,r):t.slice(r,r+n.length)===n}})},292:function(e,t,r){var n=r(81),o=r(54).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},293:function(e,t,r){t.f=r(2)},294:function(e,t,r){var n=r(79),o=r(29);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(e))}},295:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(o){}}return!0}},296:function(e,t,r){"use strict";r(53),r(291),r(303);var n=r(0),o=r.n(n),i=r(41),c=r(297),a=r(17),s=r.n(a),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var t,r=e.isNavLink,a=u(e,["isNavLink"]),f=a.to,l=a.href,p=f||l,b=Object(c.a)(p),d=Object(n.useRef)(!1),v=r?i.c:i.b,m=s.a.canUseIntersectionObserver;return Object(n.useEffect)((function(){return!m&&b&&window.docusaurus.prefetch(p),function(){m&&t&&t.disconnect()}}),[p,m,b]),p&&b&&!p.startsWith("#")?o.a.createElement(v,Object.assign({},a,{onMouseEnter:function(){d.current||(window.docusaurus.preload(p),d.current=!0)},innerRef:function(e){var r,n;m&&e&&b&&(r=e,n=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:p})):o.a.createElement("a",Object.assign({},a,{href:p}))}},297:function(e,t,r){"use strict";function n(e){return/^\/(?!\/)/.test(e)}r.d(t,"a",(function(){return n}))},298:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(0),o=r.n(n),i=r(290),c=r.n(i),a=r(130),s=r.n(a);function u(e){var t=e.children;return o.a.createElement("div",{className:c()(s.a.root)},t)}},299:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));r(300);var n=r(296),o=r(0),i=r.n(o),c=r(290),a=r.n(c),s=r(131),u=r.n(s);function f(e){var t=e.title,r=e.description,o=e.link;return i.a.createElement("div",{className:a()("card-demo",u.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,r)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(n.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},300:function(e,t,r){"use strict";r(308)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},301:function(e,t,r){var n=r(22);e.exports=Array.isArray||function(e){return"Array"==n(e)}},302:function(e,t,r){var n=r(51),o=r(52),i=r(28),c=r(77),a=r(27),s=r(80),u=Object.getOwnPropertyDescriptor;t.f=r(10)?u:function(e,t){if(e=i(e),t=c(t,!0),s)try{return u(e,t)}catch(r){}if(a(e,t))return o(!n.f.call(e,t),e[t])}},303:function(e,t,r){"use strict";var n=r(5),o=r(27),i=r(10),c=r(12),a=r(15),s=r(304).KEY,u=r(13),f=r(42),l=r(43),p=r(39),b=r(2),d=r(293),v=r(305),m=r(306),y=r(301),h=r(8),O=r(14),g=r(31),w=r(28),j=r(77),S=r(52),x=r(82),E=r(307),k=r(302),N=r(78),P=r(26),C=r(21),T=k.f,_=P.f,D=E.f,W=n.Symbol,F=n.JSON,I=F&&F.stringify,M=b("_hidden"),A=b("toPrimitive"),G={}.propertyIsEnumerable,J=f("symbol-registry"),L=f("symbols"),R=f("op-symbols"),U=Object.prototype,K="function"==typeof W&&!!N.f,z=n.QObject,B=!z||!z.prototype||!z.prototype.findChild,X=i&&u((function(){return 7!=x(_({},"a",{get:function(){return _(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=T(U,t);n&&delete U[t],_(e,t,r),n&&e!==U&&_(U,t,n)}:_,Y=function(e){var t=L[e]=x(W.prototype);return t._k=e,t},q=K&&"symbol"==typeof W.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof W},Q=function(e,t,r){return e===U&&Q(R,t,r),h(e),t=j(t,!0),h(r),o(L,t)?(r.enumerable?(o(e,M)&&e[M][t]&&(e[M][t]=!1),r=x(r,{enumerable:S(0,!1)})):(o(e,M)||_(e,M,S(1,{})),e[M][t]=!0),X(e,t,r)):_(e,t,r)},H=function(e,t){h(e);for(var r,n=m(t=w(t)),o=0,i=n.length;i>o;)Q(e,r=n[o++],t[r]);return e},V=function(e){var t=G.call(this,e=j(e,!0));return!(this===U&&o(L,e)&&!o(R,e))&&(!(t||!o(this,e)||!o(L,e)||o(this,M)&&this[M][e])||t)},Z=function(e,t){if(e=w(e),t=j(t,!0),e!==U||!o(L,t)||o(R,t)){var r=T(e,t);return!r||!o(L,t)||o(e,M)&&e[M][t]||(r.enumerable=!0),r}},$=function(e){for(var t,r=D(w(e)),n=[],i=0;r.length>i;)o(L,t=r[i++])||t==M||t==s||n.push(t);return n},ee=function(e){for(var t,r=e===U,n=D(r?R:w(e)),i=[],c=0;n.length>c;)!o(L,t=n[c++])||r&&!o(U,t)||i.push(L[t]);return i};K||(a((W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(r){this===U&&t.call(R,r),o(this,M)&&o(this[M],e)&&(this[M][e]=!1),X(this,e,S(1,r))};return i&&B&&X(U,e,{configurable:!0,set:t}),Y(e)}).prototype,"toString",(function(){return this._k})),k.f=Z,P.f=Q,r(292).f=E.f=$,r(51).f=V,N.f=ee,i&&!r(40)&&a(U,"propertyIsEnumerable",V,!0),d.f=function(e){return Y(b(e))}),c(c.G+c.W+c.F*!K,{Symbol:W});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;te.length>re;)b(te[re++]);for(var ne=C(b.store),oe=0;ne.length>oe;)v(ne[oe++]);c(c.S+c.F*!K,"Symbol",{for:function(e){return o(J,e+="")?J[e]:J[e]=W(e)},keyFor:function(e){if(!q(e))throw TypeError(e+" is not a symbol!");for(var t in J)if(J[t]===e)return t},useSetter:function(){B=!0},useSimple:function(){B=!1}}),c(c.S+c.F*!K,"Object",{create:function(e,t){return void 0===t?x(e):H(x(e),t)},defineProperty:Q,defineProperties:H,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:ee});var ie=u((function(){N.f(1)}));c(c.S+c.F*ie,"Object",{getOwnPropertySymbols:function(e){return N.f(g(e))}}),F&&c(c.S+c.F*(!K||u((function(){var e=W();return"[null]"!=I([e])||"{}"!=I({a:e})||"{}"!=I(Object(e))}))),"JSON",{stringify:function(e){for(var t,r,n=[e],o=1;arguments.length>o;)n.push(arguments[o++]);if(r=t=n[1],(O(t)||void 0!==e)&&!q(e))return y(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!q(t))return t}),n[1]=t,I.apply(F,n)}}),W.prototype[A]||r(11)(W.prototype,A,W.prototype.valueOf),l(W,"Symbol"),l(Math,"Math",!0),l(n.JSON,"JSON",!0)},304:function(e,t,r){var n=r(39)("meta"),o=r(14),i=r(27),c=r(26).f,a=0,s=Object.isExtensible||function(){return!0},u=!r(13)((function(){return s(Object.preventExtensions({}))})),f=function(e){c(e,n,{value:{i:"O"+ ++a,w:{}}})},l=e.exports={KEY:n,NEED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,n)){if(!s(e))return"F";if(!t)return"E";f(e)}return e[n].i},getWeak:function(e,t){if(!i(e,n)){if(!s(e))return!0;if(!t)return!1;f(e)}return e[n].w},onFreeze:function(e){return u&&l.NEED&&s(e)&&!i(e,n)&&f(e),e}}},305:function(e,t,r){var n=r(5),o=r(16),i=r(40),c=r(293),a=r(26).f;e.exports=function(e){var t=o.Symbol||(o.Symbol=i?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||a(t,e,{value:c.f(e)})}},306:function(e,t,r){var n=r(21),o=r(78),i=r(51);e.exports=function(e){var t=n(e),r=o.f;if(r)for(var c,a=r(e),s=i.f,u=0;a.length>u;)s.call(e,c=a[u++])&&t.push(c);return t}},307:function(e,t,r){var n=r(28),o=r(292).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return c&&"[object Window]"==i.call(e)?function(e){try{return o(e)}catch(t){return c.slice()}}(e):o(n(e))}},308:function(e,t,r){var n=r(12),o=r(13),i=r(29),c=/"/g,a=function(e,t,r,n){var o=String(i(e)),a="<"+t;return""!==r&&(a+=" "+r+'="'+String(n).replace(c,"&quot;")+'"'),a+">"+o+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(a),n(n.P+n.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}}}]);