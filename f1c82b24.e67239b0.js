(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{278:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(9),o=(n(0),n(289)),c=n(310),r={title:"Layout Reference",description:"Geocortex Web - Learn about the core layout components"},s={id:"web/configuration-layout-reference",title:"Layout Reference",description:"Geocortex Web - Learn about the core layout components",source:"@site/docs/web/configuration-layout-reference.mdx",permalink:"/docs/web/configuration-layout-reference",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/configuration-layout-reference.mdx",sidebar:"web",previous:{title:"Layout",permalink:"/docs/web/configuration-layout-getting-started"},next:{title:"Advanced Model Binding",permalink:"/docs/web/configuration-advanced-model-binding"}},l=[{value:"Basic Attributes",id:"basic-attributes",children:[{value:"<code>id</code>",id:"id",children:[]},{value:"<code>config</code>",id:"config",children:[]},{value:"<code>active</code>",id:"active",children:[]},{value:"<code>models</code>",id:"models",children:[]}]},{value:"Core Layout Components",id:"core-layout-components",children:[{value:"Stacks and Splits",id:"stacks-and-splits",children:[]},{value:"Panels",id:"panels",children:[]}]},{value:"Presentation Attributes",id:"presentation-attributes",children:[{value:"<code>margin</code>",id:"margin",children:[]},{value:"<code>padding</code>",id:"padding",children:[]},{value:"<code>width</code>",id:"width",children:[]},{value:"<code>height</code>",id:"height",children:[]},{value:"<code>grow</code>",id:"grow",children:[]},{value:"<code>halign</code> (Horizontal Align)",id:"halign-horizontal-align",children:[]},{value:"<code>valign</code> (Vertical Align)",id:"valign-vertical-align",children:[]},{value:"Alignments Effect on cross-axis stretching",id:"alignments-effect-on-cross-axis-stretching",children:[]}]}],p={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"basic-attributes"},"Basic Attributes"),Object(o.b)("p",null,"This is a reference for the attributes available to all components in an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-layout-getting-started"}),"app layout"),". Some of these attributes are accessible through the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://apps.geocortex.com/webviewer/designer/"}),"Geocortex Web Designer"),", and the rest must be configured through layout."),Object(o.b)("p",null,"All attributes are specified as string values, and parsed into their respective types by Geocortex Web"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- string attribute --\x3e\n<stack id="some-id"/>\n\x3c!-- number attribute --\x3e\n<stack margin="3"/>\n\x3c!-- boolean attribute --\x3e\n<stack active="false"/>\n')),Object(o.b)("h3",{id:"id"},Object(o.b)("inlineCode",{parentName:"h3"},"id")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Description"),": Used to uniquely identify the component in the layout."),Object(o.b)("h3",{id:"config"},Object(o.b)("inlineCode",{parentName:"h3"},"config")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Description"),": Used to bind a component to an item in the app config. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-getting-started#linking-layout-to-app-config"}),"linking layout app config")," for more details."),Object(o.b)("h3",{id:"active"},Object(o.b)("inlineCode",{parentName:"h3"},"active")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Description"),": Used to mark a component as initially active and visible. \\"),Object(o.b)("h3",{id:"models"},Object(o.b)("inlineCode",{parentName:"h3"},"models")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Description"),": A css selector string specifying the component with the model that needs to be resolved. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-layout-getting-started#models"}),"models")," for details."),Object(o.b)("h2",{id:"core-layout-components"},"Core Layout Components"),Object(o.b)("p",null,"The following is a reference for the main components used for visual organization in the layout."),Object(o.b)("p",null,"All the components discussed in this section article live in the ",Object(o.b)("inlineCode",{parentName:"p"},"https://geocortex.com/layout/v1")," namespace."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<layout xmlns="https://geocortex.com/layout/v1">\n    <map/>\n</layout>\n')),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"All of these components are available for use in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://apps.geocortex.com/webviewer/designer/"}),"Geocortex Web\nDesigner"),"."))),Object(o.b)("h3",{id:"stacks-and-splits"},"Stacks and Splits"),Object(o.b)("p",null,"Stacks and splits are used to partition the viewer into rectangular sectors, each filled with whichever components you desire."),Object(o.b)("p",null,"The best way to think of stacks is that every item within them is being ordered top to bottom:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<stack>\n    <text text="item1"/>\n    <text text="item2"/>\n    <text text="item3"/>\n</stack>\n')),Object(o.b)("img",{className:"stackSplitImage",src:Object(c.a)("img/stack-split-1.png")}),Object(o.b)("p",null,"The best way to think of splits is that every item within them is being ordered left to right:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<split>\n    <text text="item1"/>\n    <text text="item2"/>\n    <text text="item3"/>\n</split>\n')),Object(o.b)("img",{className:"stackSplitImage",src:Object(c.a)("img/stack-split-2.png")}),Object(o.b)("p",null,"When creating complex layouts with embedded stacks and splits, it's good to picture building it from the inside out:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<stack>\n    <split>\n        <text text="item1"/>\n        <stack>\n            <text text="item2"/>\n            <text text="item3"/>\n        </stack>\n    </split>\n    <split>\n        <text text="item4"/>\n        <text text="item5"/>\n        <text text="item6"/>\n    </split>\n</stack>\n')),Object(o.b)("p",null,"We start by building the first inner-most stack:"),Object(o.b)("img",{className:"stackSplitImage",src:Object(c.a)("img/stack-split-4.png")}),Object(o.b)("p",null,"Then slot that into the split one level up:"),Object(o.b)("img",{className:"stackSplitImage",src:Object(c.a)("img/stack-split-5.png")}),Object(o.b)("p",null,"We then build the next split:"),Object(o.b)("img",{className:"stackSplitImage",src:Object(c.a)("img/stack-split-6.png")}),Object(o.b)("p",null,"And finally slot those two splits into the outer-most stack:"),Object(o.b)("img",{className:"stackSplitImage",src:Object(c.a)("img/stack-split-3.png")}),Object(o.b)("h3",{id:"panels"},"Panels"),Object(o.b)("p",null,"Panels are a container component that enable hierarchal navigation between different components."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <split resizable="true">\n        <panel width="26">\n            <stack>\n                <search/>\n                <results-list/>\n            </stack>\n            <feature-details/>\n        </panel>\n        <map/>\n    </split>\n</layout>\n')),Object(o.b)("p",null,"For a deeper dive into Panels, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-layout-reference#panels"}),"check out the api reference"),"."),Object(o.b)("p",null,"When you first open the panel, the first component in the panel is activated. In this example, it's the ",Object(o.b)("inlineCode",{parentName:"p"},"<stack>")," component containing a ",Object(o.b)("inlineCode",{parentName:"p"},"<search>")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<results-list>"),".\nWhen a feature in the results list is opened, the ",Object(o.b)("inlineCode",{parentName:"p"},"<feature-details>")," component will be activated. At this point, the panel takes over the activation of the component. It will display the new component overtop of the existing visible component, and provide a back button to navigate to the previous component. The activation and deactivation algorithms for a panel rely on the concept of a stacking order of components laid on top of each other, with the first component being the bottommost, and the last being the topmost. In the example above, the ",Object(o.b)("inlineCode",{parentName:"p"},"<stack>")," containing ",Object(o.b)("inlineCode",{parentName:"p"},"<search>")," is the lowest, while the ",Object(o.b)("inlineCode",{parentName:"p"},"<feature-details>")," is the topmost."),Object(o.b)("h4",{id:"activation"},"Activation"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If the target component exists in the panel, then deactivate components above it until the target component is active",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Else, the target component must be deactivated, so activate it and place it above the existing component.")))),Object(o.b)("h4",{id:"deactivation"},"Deactivation"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If the component is the topmost element (it is active), then deactivate it.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Else, the component is already inactive")))),Object(o.b)("h2",{id:"presentation-attributes"},"Presentation Attributes"),Object(o.b)("p",null,"Components support a number of presentation attributes to adjust their positioning and styling in the application after slotting. Some of these presentation attributes are accessible through the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://apps.geocortex.com/webviewer/designer/"}),"Geocortex Web Designer"),", and the rest can be configured through layout."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"All dimensional units are expressed in 'em's, where 1 em is equal to the current font size."))),Object(o.b)("h3",{id:"margin"},Object(o.b)("inlineCode",{parentName:"h3"},"margin")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": ",Object(o.b)("inlineCode",{parentName:"p"},"number"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Description"),": Sets the size of the white space outside of the component.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Example"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<map margin="1.5"/> \x3c!-- Sets the margin on a map to be equal to 1.5em. This would be 22.5 pts high if the current font size is 15 --\x3e\n')),Object(o.b)("h3",{id:"padding"},Object(o.b)("inlineCode",{parentName:"h3"},"padding")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": ",Object(o.b)("inlineCode",{parentName:"p"},"number"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Description"),": Sets the size of the white space between a component and its content.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Applies to"),": This attribute will only apply to components with children.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Example"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<stack padding="0.5"/> \x3c!-- Sets the padding on a stack to be equal to 0.5em. This would be 7.5 pts high if the current font size is 15 --\x3e\n')),Object(o.b)("h3",{id:"width"},Object(o.b)("inlineCode",{parentName:"h3"},"width")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": ",Object(o.b)("inlineCode",{parentName:"p"},"number"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Default value"),": If a width is not set, then the width shall be the natural width of the component or a dynamic size based on the ",Object(o.b)("inlineCode",{parentName:"p"},"grow")," and alignment attributes.\n",Object(o.b)("strong",{parentName:"p"},"Description"),": Sets the width of a component."),Object(o.b)("h3",{id:"height"},Object(o.b)("inlineCode",{parentName:"h3"},"height")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": ",Object(o.b)("inlineCode",{parentName:"p"},"number"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Description"),": Sets the height of a component.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Example"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- Sets the width of a map to 30em, and the height to 20em. --\x3e\n<map width="30" height="20"/>\n')),Object(o.b)("h3",{id:"grow"},Object(o.b)("inlineCode",{parentName:"h3"},"grow")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": ",Object(o.b)("inlineCode",{parentName:"p"},"number"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Description"),": Sets whether or not a component's width or height will grow over its parents primary axis. Components with a grow of 0 will fill to their natural or requested height. Components with a specified grow will fill up a percentage of the remaining space equal to their grow value divided by the total grow of all sibling components (including the component in question).",Object(o.b)("br",{parentName:"p"}),"\n",'The default value for a component varies by component. For most components, if no grow value is specified, they will default to a grow value of "0". The following components however will have a default grow value of "1":'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Map"),Object(o.b)("li",{parentName:"ul"},"Stack"),Object(o.b)("li",{parentName:"ul"},"Split")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Applies to"),": All components may specify this value, but it will only take effect if the component is a child of a split or a stack. For stacks, grow indicates how the child grows along the vertical axis. For splits, grow indicates how the child grows along the horizontal axis.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Example"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<stack>\n    \x3c!-- Heading will take up whatever vertical space it requires, and will occupy its natural width. --\x3e\n    <text content="Heading"/>\n    \x3c!-- The first map will occupy 1/3 of the remaining vertical space, and will occupy the full width available. --\x3e\n    <map grow="1"/>\n    \x3c!-- The first map will occupy 2/3 of the remaining vertical space, and will occupy the full width available. --\x3e\n    <map grow="2"/>\n</stack>\n')),Object(o.b)("h3",{id:"halign-horizontal-align"},Object(o.b)("inlineCode",{parentName:"h3"},"halign")," (Horizontal Align)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": ",Object(o.b)("inlineCode",{parentName:"p"},'"start" | "center" | "end"'),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Description"),": Describes how the content of a component is aligned ",Object(o.b)("strong",{parentName:"p"},"horizontally"),". For stacks and splits, the content is the child components. For a component like text, the content is the text itself."),Object(o.b)("h3",{id:"valign-vertical-align"},Object(o.b)("inlineCode",{parentName:"h3"},"valign")," (Vertical Align)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": ",Object(o.b)("inlineCode",{parentName:"p"},'"start" | "center" | "end"'),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Description"),": Describes how the content of a component is aligned ",Object(o.b)("strong",{parentName:"p"},"vertically"),". For stacks and splits, the content is the child components. For a component like text, the content is the text itself."),Object(o.b)("h3",{id:"alignments-effect-on-cross-axis-stretching"},"Alignments Effect on cross-axis stretching"),Object(o.b)("p",null,"All components will stretch across the cross-axis if the corresponding alignment attribute (",Object(o.b)("inlineCode",{parentName:"p"},"halign")," for stacks, ",Object(o.b)("inlineCode",{parentName:"p"},"valign")," for splits) is not set on the parent of that component. But if a cross-axis alignment is set, then they will no longer stretch across the cross axis (otherwise the effect of alignment would not be observed).",Object(o.b)("br",{parentName:"p"}),"\n","Some components will stretch across the cross-axis even if the cross-axis alignment is set on the parent: map, stack, split."))}b.isMDXComponent=!0},289:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r({},t,{},e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,h=b["".concat(c,".").concat(d)]||b[d]||m[d]||o;return n?i.a.createElement(h,r({ref:t},l,{components:n})):i.a.createElement(h,r({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var l=2;l<o;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},291:function(e,t,n){"use strict";var a=n(12),i=n(30),o=n(294),c="".startsWith;a(a.P+a.F*n(295)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return c?c.call(t,a,n):t.slice(n,n+a.length)===a}})},294:function(e,t,n){var a=n(79),i=n(29);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},295:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(i){}}return!0}},309:function(e,t,n){"use strict";var a=n(0),i=n(55);t.a=function(){return Object(a.useContext)(i.a)}},310:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(291);var a=n(309);function i(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);