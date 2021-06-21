(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{238:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),i=(n(0),n(255));const o={title:"Memory Management",description:"Geocortex Mobile - Learn about memory management in Geocortex Mobile"},r={unversionedId:"mobile/sdk-memory-leaks",id:"mobile/sdk-memory-leaks",isDocsHomePage:!1,title:"Memory Management",description:"Geocortex Mobile - Learn about memory management in Geocortex Mobile",source:"@site/docs/mobile/sdk-memory-leaks.mdx",slug:"/mobile/sdk-memory-leaks",permalink:"/docs/mobile/sdk-memory-leaks",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/sdk-memory-leaks.mdx",version:"current",sidebar:"mobile",previous:{title:"Internationalization",permalink:"/docs/mobile/sdk-internationalization"},next:{title:"Build a Custom Command",permalink:"/docs/mobile/tutorial-implement-command-operation"}},s=[{value:"Using Mobile&#39;s IDisposableTracker Interface",id:"using-mobiles-idisposabletracker-interface",children:[]},{value:"Relevant SDK Sample",id:"relevant-sdk-sample",children:[]}],c={toc:s};function l({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"It is important to ensure that unmanaged resources are released when they are no longer required, in order to avoid creating memory leaks. This is accomplished using the ",Object(i.b)("inlineCode",{parentName:"p"},"IDisposable")," interface.\nIf a class creates unmanaged resources, or creates instances of classes which implement ",Object(i.b)("inlineCode",{parentName:"p"},"IDisposable")," themselves, it should implement ",Object(i.b)("inlineCode",{parentName:"p"},"IDisposable")," and release these resources in the ",Object(i.b)("inlineCode",{parentName:"p"},"Dispose()")," method. Detailed information on how to implement ",Object(i.b)("inlineCode",{parentName:"p"},"Dispose()")," can be found in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose"}),"Microsoft's documentation, here"),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Classes instantiated via ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-dependency-injection"}),"dependency injection")," that implement ",Object(i.b)("inlineCode",{parentName:"p"},"IDisposable")," will automatically have ",Object(i.b)("inlineCode",{parentName:"p"},"Dispose()")," called by Autofac once their lifetime scope has ended, so ",Object(i.b)("inlineCode",{parentName:"p"},"Dispose()")," does not need to be called explicitly for such classes."))),Object(i.b)("h2",{id:"using-mobiles-idisposabletracker-interface"},"Using Mobile's IDisposableTracker Interface"),Object(i.b)("p",null,"Mobile's toolkit also includes a helpful interface and extension methods to make tracking disposable resources easier: ",Object(i.b)("inlineCode",{parentName:"p"},"IDisposableTracker")," and ",Object(i.b)("inlineCode",{parentName:"p"},"DisposableUtilities"),".\n",Object(i.b)("inlineCode",{parentName:"p"},"ComponentBase")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ServiceBase")," already implement ",Object(i.b)("inlineCode",{parentName:"p"},"IDisposableTracker"),", so any custom components or services extending these base classes can take advantage of this functionality right away.\nHere is a brief example of how to use it in a new class:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"public class DisposableTrackerExample: IDisposableTracker, IDisposable\n{\n    // Implement the IDisposableTracker interface\n    public IList<IDisposable> Disposables => new List<IDisposable>();\n\n    public DisposableTrackerExample()\n    {\n        // Pointer to a fictitious external unmanaged resource.\n        SafeFileHandle handle = new SafeFileHandle(IntPtr.Zero, true);\n\n        // Track the file handle in the Disposables list\n        Disposables.Add(handle);\n    }\n\n    public void Dispose()\n    {\n        // This will dispose of the FileSafeHandle created in the constructor\n        this.DisposeTrackers();\n    }\n}\n")),Object(i.b)("p",null,"Using ",Object(i.b)("inlineCode",{parentName:"p"},"DisposeTrackers()")," is a shortcut which is functionally identical to calling ",Object(i.b)("inlineCode",{parentName:"p"},"Dispose()")," on each ",Object(i.b)("inlineCode",{parentName:"p"},"IDisposable")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"Disposables")," list."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"IDisposableTracker")," is also used when registering commands and operations, as described ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-commands-operations#direct-registration-and-implementation"}),"here"),", and subscribing to events, described ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-events-reference#subscribing-to-events"}),"here"),"."),Object(i.b)("h2",{id:"relevant-sdk-sample"},"Relevant SDK Sample"),Object(i.b)("p",null,"Check out the sample on the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Conceptual/Disposal"}),"disposal pattern in Geocortex Mobile"),"."))}l.isMDXComponent=!0},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,u=b["".concat(r,".").concat(d)]||b[d]||m[d]||o;return n?i.a.createElement(u,s(s({ref:t},l),{},{components:n})):i.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);