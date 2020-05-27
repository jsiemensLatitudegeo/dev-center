(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{213:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(1),o=n(9),r=(n(0),n(289)),i={title:"Advanced Model Binding",description:"Geocortex Web - Learn about advanced model binding with layout"},l={id:"web/configuration-advanced-model-binding",title:"Advanced Model Binding",description:"Geocortex Web - Learn about advanced model binding with layout",source:"@site/docs/web/configuration-advanced-model-binding.mdx",permalink:"/docs/web/configuration-advanced-model-binding",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/configuration-advanced-model-binding.mdx",sidebar:"web",previous:{title:"Layout Reference",permalink:"/docs/web/configuration-layout-reference"},next:{title:"App Config",permalink:"/docs/web/configuration-app-config-getting-started"}},p=[{value:"Nested Model Imports",id:"nested-model-imports",children:[]},{value:"The <code>models</code> Attribute",id:"the-models-attribute",children:[]}],c={rightToc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Components often observe and modify the state of other components.\nConsider the following example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<map>\n    <scalebar slot="bottom-left"/>\n</map>\n')),Object(r.b)("p",null,"The scale bar component displays information about a particular map. More specifically, it is ",Object(r.b)("strong",{parentName:"p"},"dependent")," on the data of a map model to display its values."),Object(r.b)("p",null,'Components express this data dependency in the form of models that are marked as "imported" or "exported". If we know that the scale bar "imports" a particular type of model, and that the map "exports" the same type of model, we can resolve those dependencies simply by plugging exported models into the components that import them.'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'@exportModel\nexport class MapModel implements ComponentModel {\n    // ... map stuff ...\n}\n\nexport class ScaleBarModel implements ComponentModel {\n    @importModel("map-extension")\n    map: MapExtension | undefined;\n\n    // ... scale bar stuff ...\n}\n')),Object(r.b)("p",null,"When the system places the scale bar into the layout, it will attempt to satisfy any model imports declared by the component. By default, this happens by walking up the tree from the location of the component being slotted and simply finding the first ancestor that exports a model with the matching type, like in the basic example above."),Object(r.b)("p",null,"However, in the following example with two scale bars, how does each scale bar know which map model it corresponds to? Both are placed outside of a ",Object(r.b)("inlineCode",{parentName:"p"},"<map>")," component, and there are two possible map models to bind to."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <stack>\n      <split grow="1">\n        <map id="map-a" grow="1" margin="3"/>\n        <map id="map-b" grow="1" margin="3"/>\n      </split>\n      <split grow="1" valign="center" >\n          <scalebar id="a" grow="1" margin="3"/>\n          <scalebar id="b" grow="1" margin="3"/>\n      </split>\n    </stack>\n</layout>\n')),Object(r.b)("p",null,"We can explicitly bind each scale bar to the appropriate map with the ",Object(r.b)("inlineCode",{parentName:"p"},"models")," attribute. The ",Object(r.b)("inlineCode",{parentName:"p"},"models")," attribute will tell a component to look for an exported model on the component matched by the expression. In this example, the ",Object(r.b)("inlineCode",{parentName:"p"},"models")," attributes are looking for components with the ",Object(r.b)("inlineCode",{parentName:"p"},"id")," ",Object(r.b)("inlineCode",{parentName:"p"},"map-a")," and ",Object(r.b)("inlineCode",{parentName:"p"},"map-b")," respectively."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <split>\n        <panel width="23" active="true">\n            <stack>\n                <split>\n                    <text text="Map A Scale Bar"></text>\n                    <scalebar id="a" models="#map-a"/>\n                </split>\n                <split>\n                    <text text="Map B Scale Bar"></text>\n                    <scalebar id="b" models="#map-b"/>\n                </split>\n            </stack>\n        </panel>\n        <map id="map-a"/>\n        <map id="map-b"/>\n    </split>\n</layout>\n')),Object(r.b)("h3",{id:"nested-model-imports"},"Nested Model Imports"),Object(r.b)("p",null,"In previous layout examples, layouts were shown where components related to a map, such as zoom buttons, were nested within a map. It was assumed that the component would bind to the map it was placed in, but why?"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'    <map config="map1" slot="main">\n      <stack margin="0.5" slot="bottom-right" halign="end">\n        <zoom margin="0.8"/>\n        <geolocate id="geolocator" margin="0.5" config="geolocate" />\n      </stack>\n    </map>\n')),Object(r.b)("p",null,"Certain components, such as ",Object(r.b)("inlineCode",{parentName:"p"},"<zoom/>")," or ",Object(r.b)("inlineCode",{parentName:"p"},"<geolocate/>"),", require a ",Object(r.b)("inlineCode",{parentName:"p"},"Map Model")," to function. To locate a ",Object(r.b)("inlineCode",{parentName:"p"},"Map Model"),", the layout tree hierarchy will be searched upwards, starting at the requesting component. When a element in the layout is found that provides the required model, (in this case, the ",Object(r.b)("inlineCode",{parentName:"p"},"<map/>")," component provides a Map Model), the requesting component will import the model. If the correct model is not found on an upwards search, a breadth first search will be performed from the root of the layout tree."),Object(r.b)("p",null,"Take this more complicated layout for example."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <split resizable="true" width="26">\n        <map id="map-1" config="map-1" slot="main">\n            <iwtm config="iwtm" slot="top-right"/>\n            <stack margin="0.5" slot="bottom-right" halign="end">\n                <zoom margin="0.5"/>\n                <button config="measure-action" icon="measure" style="map-widget" margin="0.5"/>\n                <geolocate margin="0.5" config="geolocate" />\n            </stack>\n        </map>\n\n        <panel>\n            <stack>\n                <search config="search"/>\n                <results-list config="results" active="false" />\n            </stack>\n            <feature-details config="feature-details"/>\n        </panel>\n    </split>\n</layout>\n')),Object(r.b)("p",null,"This layout has a ",Object(r.b)("inlineCode",{parentName:"p"},"<search>")," component which requires the context of a specific map to function. However, this component is ",Object(r.b)("strong",{parentName:"p"},"not")," nested within the ",Object(r.b)("inlineCode",{parentName:"p"},"<map/>")," component in the app. Therefore, it will start a breadth first search from the root of the layout to discover a map model and import it."),Object(r.b)("h3",{id:"the-models-attribute"},"The ",Object(r.b)("inlineCode",{parentName:"h3"},"models")," Attribute"),Object(r.b)("p",null,"Sometimes, you can have multiple components that need to bind to the same model."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<split>\n    <panel id="left-panel">\n        <scalebar active="true" models="#map"/>\n        <results-list models="#map"/>\n        <legend models="#map"/>\n    </panel>\n    <map id="map" />\n</split>\n')),Object(r.b)("p",null,"To simplify this binding, we can take advantage of the default behavior of searching up the layout tree for the appropriate model and bind the map to the parent panel of the components which need to reference a map model."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <split>\n        // highlight-next-line\n        <panel id="left-panel" models="#map">\n            <scalebar active="true"/>\n            <results-list />\n            <legend />\n        </panel>\n        <map id="map" />\n    </split>\n</layout>\n')))}s.isMDXComponent=!0},289:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},m=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),b=a,u=m["".concat(i,".").concat(b)]||m[b]||d[b]||r;return n?o.a.createElement(u,l({ref:t},c,{components:n})):o.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);