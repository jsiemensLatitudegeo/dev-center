(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{153:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),o=(r(0),r(255));const a={title:"Run a report from an ArcGIS Notebook",description:"Geocortex Reporting - ArcGIS Notebook"},i={unversionedId:"reporting/tutorial-arcgis-notebook",id:"reporting/tutorial-arcgis-notebook",isDocsHomePage:!1,title:"Run a report from an ArcGIS Notebook",description:"Geocortex Reporting - ArcGIS Notebook",source:"@site/docs/reporting/tutorial-arcgis-notebook.mdx",slug:"/reporting/tutorial-arcgis-notebook",permalink:"/docs/reporting/tutorial-arcgis-notebook",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/reporting/tutorial-arcgis-notebook.mdx",version:"current",sidebar:"reporting",previous:{title:"Run a report from Python",permalink:"/docs/reporting/sdk-py-overview"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Author the Notebook",id:"author-the-notebook",children:[]},{value:"ArcGIS Enterprise Support",id:"arcgis-enterprise-support",children:[]}],p={toc:c};function l({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can use the ",Object(o.b)("strong",{parentName:"p"},"Geocortex Reporting Client for Python")," package to run reports from ArcGIS Notebooks."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ArcGIS Online or ArcGIS Enterprise 10.7+"),Object(o.b)("li",{parentName:"ul"},"An ArcGIS user with permission to create and edit ArcGIS Notebooks"),Object(o.b)("li",{parentName:"ul"},"An existing Geocortex Report that accepts a ",Object(o.b)("inlineCode",{parentName:"li"},"FeatureIds")," parameter")),Object(o.b)("h2",{id:"author-the-notebook"},"Author the Notebook"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Sign into ArcGIS Online or ArcGIS Enterprise as a Notebook Author user"),Object(o.b)("li",{parentName:"ol"},"Create a new Notebook"),Object(o.b)("li",{parentName:"ol"},"Add a cell with the following script:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"!pip install geocortex-reporting-client\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Run the cell to install the ",Object(o.b)("inlineCode",{parentName:"li"},"geocortex-reporting-client")," package"),Object(o.b)("li",{parentName:"ol"},"Add a cell with the following script:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'from geocortex.reporting.client import run\n\nreport = await run("itemid", FeatureIds=[1, 2, 3])\nprint(report)\n')),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Replace ",Object(o.b)("inlineCode",{parentName:"li"},"itemid")," with the ArcGIS item ID of your report"),Object(o.b)("li",{parentName:"ol"},"Update the array ",Object(o.b)("inlineCode",{parentName:"li"},"[1, 2, 3]")," to contain the feature IDs of the features you want to generate the report for"),Object(o.b)("li",{parentName:"ol"},"Run the cell to generate the report")),Object(o.b)("h2",{id:"arcgis-enterprise-support"},"ArcGIS Enterprise Support"),Object(o.b)("p",null,"The same process applies to ArcGIS Enterprise 10.7+ but you must also supply the ",Object(o.b)("inlineCode",{parentName:"p"},"portal_url")," argument to the ",Object(o.b)("inlineCode",{parentName:"p"},"run")," method"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'report = await run(\n    "itemid",\n    portal_url="https://myportal.server.com/portal",\n    FeatureIds=[1, 2, 3]\n)\n')))}l.isMDXComponent=!0},255:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,d=b["".concat(i,".").concat(m)]||b[m]||s[m]||a;return r?o.a.createElement(d,c(c({ref:t},l),{},{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);