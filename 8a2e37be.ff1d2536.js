(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{239:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return n})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var i=r(2),o=r(9),a=(r(0),r(297)),n={title:"Reference a Third Party Library in Geocortex Workflow Server",sidebar_label:"Reference a Third Party Library",description:"Geocortex Workflow - Reference a third party library in a Geocortex Workflow Server extension"},s={id:"workflow/sdk-server-reference-third-party-library",isDocsHomePage:!1,title:"Reference a Third Party Library in Geocortex Workflow Server",description:"Geocortex Workflow - Reference a third party library in a Geocortex Workflow Server extension",source:"@site/docs/workflow/sdk-server-reference-third-party-library.mdx",permalink:"/docs/workflow/sdk-server-reference-third-party-library",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/sdk-server-reference-third-party-library.mdx",sidebar_label:"Reference a Third Party Library",sidebar:"workflow",previous:{title:"Create an Activity",permalink:"/docs/workflow/sdk-server-create-activity"},next:{title:"Implement an Activity that Calculates a Logarithm",permalink:"/docs/workflow/tutorial-server-calculate-logarithm-activity"}},c=[{value:"Adding Third Party Libraries",id:"adding-third-party-libraries",children:[]},{value:"Deploying Third Party Libraries",id:"deploying-third-party-libraries",children:[]}],d={rightToc:c};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"As discussed in ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/workflow/sdk-server-overview#setting-up-a-geocortex-workflow-server-extension-project"}),"Geocortex Workflow Server"),", deploying a custom activity to Geocortex Workflow Server involves creating a .NET project that generates compatible assemblies and then copying them to the build folder. Adding a third party assembly is as simple as adding the library to your .NET project and then ensuring it is copied along with the user defined code."),Object(a.b)("h2",{id:"adding-third-party-libraries"},"Adding Third Party Libraries"),Object(a.b)("p",null,"Any nuget package can be added to the project and used in custom activities."),Object(a.b)("h2",{id:"deploying-third-party-libraries"},"Deploying Third Party Libraries"),Object(a.b)("p",null,"Build the project to output the project assemblies. Follow the instructions to ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/workflow/sdk-server-overview#deploying-geocortex-workflow-server-activities"}),"Deploy the Activity"),". Ensure that you locate and copy the third party assemblies. If you don't see them in the build output folder, ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/workflow/sdk-server-overview#setting-up-a-geocortex-workflow-server-extension-project"}),"review the instructions")," and ensure you have followed all the steps."),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"An important step not to miss is adding the ",Object(a.b)("inlineCode",{parentName:"p"},"CopyLocalLockFileAssemblies")," attribute to the ",Object(a.b)("inlineCode",{parentName:"p"},".csproj")," file if you created a .NET Standard class library. Without this attribute, your nuget package reference assemblies will not be output to the build folder."))))}l.isMDXComponent=!0}}]);