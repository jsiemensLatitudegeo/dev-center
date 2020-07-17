(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return h}));var o=n(2),i=n(9),a=(n(0),n(300)),c=n(306),r=n(324),s=n(325),m=n(312),l=n(311),p={title:"Component Styling",description:"Geocortex Web - Learn how to style a custom component"},u={id:"web/sdk-components-styling",isDocsHomePage:!1,title:"Component Styling",description:"Geocortex Web - Learn how to style a custom component",source:"@site/docs/web/sdk-components-styling.mdx",permalink:"/docs/web/sdk-components-styling",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-components-styling.mdx",sidebar:"web",previous:{title:"Service Injection",permalink:"/docs/web/sdk-components-injecting-services"},next:{title:"Internationalization",permalink:"/docs/web/sdk-components-internationalization"}},d=[{value:"Custom Styling",id:"custom-styling",children:[]},{value:"Component that Uses Built-in Icons",id:"component-that-uses-built-in-icons",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],b={rightToc:d};function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Geocortex Web provides a built-in library of professionally designed UI components, as well as options for custom styling. You can also take advantage of the built-in icons, or add your own."),Object(a.b)("h2",{id:"custom-styling"},"Custom Styling"),Object(a.b)("p",null,"By using Geocortex Web layout components, you can take advantage of styled, well tested, UI components that already participate in the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/configuration-theme"}),"application theme"),"."),Object(a.b)(r.a,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"CSS",value:"css"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(a.b)(s.a,{value:"component",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import React from "react";\nimport {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@vertigis/web/components";\nimport List from "@vertigis/web/ui/List";\nimport ListItem from "@vertigis/web/ui/ListItem";\nimport TitleBar from "@vertigis/web/ui/TitleBar";\nimport Button from "@vertigis/web/ui/Button";\nimport ExampleComponentModel from "./ExampleComponentModel";\nimport "./ExampleComponent.css";\n\nexport default function ExampleComponent(\n    props: LayoutElementProperties<ExampleComponentModel>\n) {\n    return (\n        <LayoutElement {...props}>\n            <List dense={true}>\n                <TitleBar>Some Title</TitleBar>\n                <ListItem>\n                    <Button>Item 1</Button>\n                </ListItem>\n                <ListItem>\n                    <Button>Item 2</Button>\n                </ListItem>\n                <ListItem>\n                    <Button>Item 2</Button>\n                </ListItem>\n                <div className="red">I have a red background</div>\n            </List>\n        </LayoutElement>\n    );\n}\n'))),Object(a.b)(s.a,{value:"css",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-css"}),".red {\n    background-color: red;\n    color: white;\n}\n"))),Object(a.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(a.b)("img",{src:Object(c.a)("img/web-sdk-components-reference-styling.png")}))),Object(a.b)("p",null,"However, if you need to manually theme the component, you can use the various theming colors in custom css, through the ",Object(a.b)("inlineCode",{parentName:"p"},"var(...)")," css function."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"A full list of all the color keys available in a theme ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/configuration-theme#theme-color-reference"}),"can be found here"),"."))),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-css"}),".my-element {\n    background-color: var(--primaryBackground);\n}\n")),Object(a.b)("h2",{id:"component-that-uses-built-in-icons"},"Component that Uses Built-in Icons"),Object(a.b)("p",null,"There are two ways to use icons in a component. If the component will always render the same icon, you can use an icon component."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import React, { FC } from "react";\nimport {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@vertigis/web/components";\nimport IconButton from "@vertigis/web/ui/IconButton";\nimport MenuItem from "@vertigis/web/ui/MenuItem";\nimport ListItemText from "@vertigis/web/ui/ListItemText";\n// highlight-next-line\nimport CloudDownload from "@vertigis/web/ui/icons/CloudDownload";\nimport ComponentWithIconModel from "./ComponentWithIconModel";\n\nconst ComponentWithIcon: FC<LayoutElementProperties<ComponentWithIconModel>> = (\n    props\n) => {\n    return (\n        <LayoutElement {...props} style={{ backgroundColor: "white" }}>\n            <MenuItem>\n                <ListItemText\n                    primary={"Icon Example"}\n                    secondary={"cloud-download icon"}\n                />\n                <IconButton title="IconExample">\n                    // highlight-next-line\n                    <CloudDownload fontSize="large" />\n                </IconButton>\n            </MenuItem>\n        </LayoutElement>\n    );\n};\n\nexport default ComponentWithIcon;\n')),Object(a.b)("p",null,"If the component doesn't know which icon it will need to render, you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"DynamicIcon")," component instead, which takes in its icon ID as a prop."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import React, { FC } from "react";\nimport {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@vertigis/web/components";\n// highlight-next-line\nimport DynamicIcon from "@vertigis/web/ui/DynamicIcon";\nimport ComponentWithIconModel from "./ComponentWithIconModel";\nimport MenuItem from "@vertigis/web/ui/MenuItem";\nimport IconButton from "@vertigis/web/ui/IconButton";\nimport ListItemText from "@vertigis/web/ui/ListItemText";\n\nconst ComponentWithIcon: FC<LayoutElementProperties<ComponentWithIconModel>> = (\n    props\n) => {\n    // highlight-next-line\n    const { icon } = props.model;\n    return (\n        <LayoutElement {...props} style={{ backgroundColor: "white" }}>\n            <MenuItem>\n                <ListItemText primary="Custom Arrow Icon" />\n                <IconButton title="Custom Arrow Icon">\n                    // highlight-next-line\n                    <DynamicIcon src={icon} />\n                </IconButton>\n            </MenuItem>\n        </LayoutElement>\n    );\n};\n\nexport default ComponentWithIcon;\n')),Object(a.b)("h2",{id:"next-steps"},"Next Steps"),Object(a.b)(l.a,{mdxType:"UseCaseContainer"},Object(a.b)(m.a,{title:"Add Custom Icons",description:"Learn how to add custom icons to a Geocortex Web Application",link:"sdk-adding-icons",mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(0),i=n.n(o),a=n(129),c=n.n(a);function r(e){var t=e.children;return i.a.createElement("div",{className:c.a.root},t)}},312:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));n(313);var o=n(307),i=n(0),a=n.n(i),c=n(302),r=n(130),s=n.n(r);function m(e){var t=e.title,n=e.description,i=e.link;return a.a.createElement("div",{className:Object(c.a)("card-demo",s.a.root)},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card__header"},a.a.createElement("h3",null,t)),a.a.createElement("div",{className:"card__body"},a.a.createElement("p",null,n)),a.a.createElement("div",{className:"card__footer"},a.a.createElement(o.a,{className:"button button--secondary button--block",to:i},"Get Started"))))}}}]);