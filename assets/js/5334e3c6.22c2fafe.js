(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[4063,4072],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>d});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||a;return n?o.createElement(g,r(r({ref:t},m),{},{components:n})):o.createElement(g,r({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var o=n(7294),i=n(3727),a=n(2263),r=n(3919),s=n(412);const p=(0,o.createContext)({collectLink:()=>{}});var l=n(4996),m=n(8780);const c=function({isNavLink:e,to:t,href:n,activeClassName:c,isActive:u,"data-noBrokenLinkCheck":d,autoAddBaseUrl:g=!0,...f}){var C;const{siteConfig:{trailingSlash:h}}=(0,a.Z)(),{withBaseUrl:b}=(0,l.C)(),v=(0,o.useContext)(p),y=t||n,k=(0,r.Z)(y),x=null==y?void 0:y.replace("pathname://","");let w=void 0!==x?(A=x,g&&(e=>e.startsWith("/"))(A)?b(A):A):void 0;var A;w&&k&&(w=(0,m.applyTrailingSlash)(w,h));const N=(0,o.useRef)(!1),T=e?i.OL:i.rU,I=s.Z.canUseIntersectionObserver;let V;(0,o.useEffect)((()=>(!I&&k&&null!=w&&window.docusaurus.prefetch(w),()=>{I&&V&&V.disconnect()})),[w,I,k]);const S=null!==(C=null==w?void 0:w.startsWith("#"))&&void 0!==C&&C,M=!w||!k||S;return w&&k&&!S&&!d&&v.collectLink(w),M?o.createElement("a",{href:w,...y&&!k&&{target:"_blank",rel:"noopener noreferrer"},...f}):o.createElement(T,{...f,onMouseEnter:()=>{N.current||null==w||(window.docusaurus.preload(w),N.current=!0)},innerRef:e=>{var t,n;I&&e&&k&&(t=e,n=()=>{null!=w&&window.docusaurus.prefetch(w)},V=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(V.unobserve(t),V.disconnect(),n())}))})),V.observe(t))},to:w||"",...e&&{isActive:u,activeClassName:c}})}},3919:(e,t,n)=>{"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!o(e)}n.d(t,{b:()=>o,Z:()=>i})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>a,Z:()=>r});var o=n(2263),i=n(3919);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,o.Z)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(o)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+r:r}(t,e,n,o)}}function r(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(7294);const i=function({children:e,hidden:t,className:n}){return o.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var o=n(7294),i=n(944),a=n(6010);const r="tabItem_1uMI",s="tabItemActive_2DSg";const p=37,l=39;const m=function(e){const{lazy:t,block:n,defaultValue:m,values:c,groupId:u,className:d}=e,{tabGroupChoices:g,setTabGroupChoices:f}=(0,i.Z)(),[C,h]=(0,o.useState)(m),b=o.Children.toArray(e.children),v=[];if(null!=u){const e=g[u];null!=e&&e!==C&&c.some((t=>t.value===e))&&h(e)}const y=e=>{const t=e.currentTarget,n=v.indexOf(t),o=c[n].value;h(o),null!=u&&(f(u,o),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:o,right:i}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:r}=window;return t>=0&&i<=r&&o<=a&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},k=e=>{var t;let n;switch(e.keyCode){case l:{const t=v.indexOf(e.target)+1;n=v[t]||v[0];break}case p:{const t=v.indexOf(e.target)-1;n=v[t]||v[v.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},d)},c.map((({value:e,label:t})=>o.createElement("li",{role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,className:(0,a.Z)("tabs__item",r,{"tabs__item--active":C===e}),key:e,ref:e=>v.push(e),onKeyDown:k,onFocus:y,onClick:y},t)))),t?(0,o.cloneElement)(b.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(7294),i=n(9443);const a=function(){const e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),o="/"===n?"/":t?(i=n).endsWith("/")?i:`${i}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var i;return e.replace(n,o)}},8780:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return o(i).default}});var a=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return o(a).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(6742),i=n(7294),a=n(6010);const r="root_2PFE";function s({title:e,description:t,link:n}){return i.createElement("div",{className:(0,a.Z)("card-demo",r)},i.createElement("div",{className:"card"},i.createElement("div",{className:"card__header"},i.createElement("h3",null,e)),i.createElement("div",{className:"card__body"},i.createElement("p",null,t)),i.createElement("div",{className:"card__footer"},i.createElement(o.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(7294);const i="root_NqT0";function a({children:e}){return o.createElement("div",{className:i},e)}},5664:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>r,metadata:()=>s,toc:()=>p,default:()=>m});var o=n(2122),i=(n(7294),n(3905));const a={},r=void 0,s={unversionedId:"mobile/snippets/quickstart-prereqs",id:"mobile/snippets/quickstart-prereqs",isDocsHomePage:!1,title:"quickstart-prereqs",description:"Check out and setup the Geocortex Mobile SDK Quickstart project.",source:"@site/docs/mobile/snippets/quickstart-prereqs.mdx",sourceDirName:"mobile/snippets",slug:"/mobile/snippets/quickstart-prereqs",permalink:"/docs/mobile/snippets/quickstart-prereqs",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/quickstart-prereqs.mdx",version:"current",frontMatter:{}},p=[],l={toc:p};function m({components:e,...t}){return(0,i.kt)("wrapper",(0,o.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Check out and setup the ",(0,i.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-overview"},"Geocortex Mobile SDK Quickstart project"),"."))}m.isMDXComponent=!0},6683:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>u,metadata:()=>d,toc:()=>g,default:()=>C});var o=n(2122),i=(n(7294),n(3905)),a=n(4996),r=n(1395),s=n(8215),p=n(1962),l=n(7763),m=n(5664);const c={title:"Pull Component Data from App Config",description:"Geocortex Mobile - Learn how to make a component participate in app config."},u=void 0,d={unversionedId:"mobile/tutorial-implement-component-participate-app-config",id:"mobile/tutorial-implement-component-participate-app-config",isDocsHomePage:!1,title:"Pull Component Data from App Config",description:"Geocortex Mobile - Learn how to make a component participate in app config.",source:"@site/docs/mobile/tutorial-implement-component-participate-app-config.mdx",sourceDirName:"mobile",slug:"/mobile/tutorial-implement-component-participate-app-config",permalink:"/docs/mobile/tutorial-implement-component-participate-app-config",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/tutorial-implement-component-participate-app-config.mdx",version:"current",frontMatter:{title:"Pull Component Data from App Config",description:"Geocortex Mobile - Learn how to make a component participate in app config."},sidebar:"mobile",previous:{title:"Build a Custom Component with UI",permalink:"/docs/mobile/tutorial-implement-component-with-ui"},next:{title:"Build a Service that Fetches Dynamic Data",permalink:"/docs/mobile/tutorial-implement-service-fetch-dynamic-data"}},g=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Setup a Basic Component",id:"setup-a-basic-component",children:[]},{value:"Create a Skeleton App Config Definition",id:"create-a-skeleton-app-config-definition",children:[]},{value:"Consume the Configuration in the Component",id:"consume-the-configuration-in-the-component",children:[]},{value:"Define Configuration Values",id:"define-configuration-values",children:[]},{value:"Relevant SDK Sample",id:"relevant-sdk-sample",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],f={toc:g};function C({components:e,...t}){return(0,i.kt)("wrapper",(0,o.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A component can optionally participate in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-app-config-getting-started"},"app config"),". This allows for the component's behavior and initial state to be easily modified without having to deploy custom code. Different instances of the same component type can reference different app config items, allowing for multiple components in the same application with different behavior."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)(m.default,{mdxType:"QuickstartPrereqsSnippet"}),(0,i.kt)("h2",{id:"setup-a-basic-component"},"Setup a Basic Component"),(0,i.kt)("p",null,"Copy the following code into your project to setup a basic component without app config."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want to learn more about how this component was created, check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/mobile/tutorial-implement-component-with-ui"},"custom component tutorial")))),(0,i.kt)(r.Z,{defaultValue:"component",values:[{label:"Layout",value:"layout"},{label:"Component",value:"component"},{label:"View",value:"view"},{label:"Code Behind",value:"code-behind"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"layout",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',title:'"App1/App1/layout-large.xml"'},'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd"\n    xmlns:custom="https://your.org/layout/app1">\n    <gxm:taskbar>\n        \x3c!--Taskbar / custom component--\x3e\n        <panel>\n            <custom:custom-component icon="info"/>\n        </panel>\n        <map slot="main"/>\n    </gxm:taskbar>\n</layout>\n'))),(0,i.kt)(s.Z,{value:"component",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/components/CustomComponent.cs"',title:'"App1/App1/components/CustomComponent.cs"'},'using App1;\nusing App1.Components;\nusing VertiGIS.Mobile.Composition.Layout;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n[assembly: Component(typeof(CustomComponent), "custom-component", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    class CustomComponent : ComponentBase\n    {\n        protected override VisualElement Create(XNode node)\n        {\n            return new CustomComponentView();\n        }\n    }\n}\n\n'))),(0,i.kt)(s.Z,{value:"view",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="App1/App1/components/CustomComponentView.xaml"',title:'"App1/App1/components/CustomComponentView.xaml"'},'<?xml version="1.0" encoding="UTF-8"?>\n<ContentView xmlns="http://xamarin.com/schemas/2014/forms"\n             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n             xmlns:d="http://xamarin.com/schemas/2014/forms/design"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n             mc:Ignorable="d"\n             x:Class="App1.Components.CustomComponentView">\n  <ContentView.Content>\n      <StackLayout>\n          <Label Text="Hello Xamarin.Forms!" />\n      </StackLayout>\n  </ContentView.Content>\n</ContentView>\n'))),(0,i.kt)(s.Z,{value:"code-behind",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/components/CustomComponentView.xaml.cs"',title:'"App1/App1/components/CustomComponentView.xaml.cs"'},"using App1.Components;\nusing VertiGIS.Mobile.Composition;\nusing Xamarin.Forms;\nusing Xamarin.Forms.Xaml;\n\n[assembly: View(typeof(CustomComponentView))]\nnamespace App1.Components\n{\n    [XamlCompilation(XamlCompilationOptions.Compile)]\n    public partial class CustomComponentView : ContentView\n    {\n        public CustomComponentView()\n        {\n            InitializeComponent();\n        }\n    }\n}\n")))),(0,i.kt)("h2",{id:"create-a-skeleton-app-config-definition"},"Create a Skeleton App Config Definition"),(0,i.kt)("p",null,"Create a new file ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomComponentConfiguration.cs"),". This class defines a new app item type ",(0,i.kt)("inlineCode",{parentName:"p"},"custom-component-config"),". This app item type will be used as configuration for the ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomComponent"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/components/CustomComponentConfiguration.cs"',title:'"App1/App1/components/CustomComponentConfiguration.cs"'},'using App1.Configuration;\nusing VertiGIS.ArcGISExtensions;\nusing VertiGIS.Mobile.Infrastructure.App;\nusing System;\n\n// highlight-next-line\n[assembly: AppItem(CustomComponentConfiguration.ConfigItemtype, typeof(CustomComponentConfiguration))]\nnamespace App1.Configuration\n{\n    // highlight-next-line\n    public class CustomComponentConfiguration : VisualAppItem\n    {\n        // highlight-next-line\n        public const string ConfigItemtype = "custom-component-config";\n\n        public string ConfigTitle { get; private set; }\n\n        public string ConfigDescription { get; private set; }\n\n        public CustomComponentConfiguration()\n            : this(Guid.NewGuid().ToString())\n        {\n        }\n\n        public CustomComponentConfiguration(string id)\n            : this(new Properties { ["id"] = id })\n        {\n        }\n\n        public CustomComponentConfiguration(Properties properties) :\n            base(properties, ConfigItemtype)\n        {\n            // properties is an object corresponding to the config defined in the app.json\n            if (properties.TryGetValue("title", out var title))\n            {\n                ConfigTitle = title as string ?? "Default Title";\n            }\n\n            if (properties.TryGetValue("description", out var text))\n            {\n                ConfigDescription = text as string ?? "Default description.";\n            }\n        }\n\n        public override object CreateDefault()\n        {\n            return new CustomComponentConfiguration();\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"consume-the-configuration-in-the-component"},"Consume the Configuration in the Component"),(0,i.kt)("p",null,"Components that consume configuration should extend ",(0,i.kt)("inlineCode",{parentName:"p"},"AppItemComponentBase<ConfigurationClassType>"),". This forces them to have a constructor which takes in an ",(0,i.kt)("inlineCode",{parentName:"p"},"IAppItem")," resolver for the specific configuration type. This resolver can then be called in the ",(0,i.kt)("inlineCode",{parentName:"p"},"DoInitializeAsync")," method to retrieve the app config values. They should also register with Autofac using the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppItemComponent")," assembly attribute."),(0,i.kt)(r.Z,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"View",value:"view"},{label:"Code Behind",value:"code-behind"},{label:"View Model",value:"view-model"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"component",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/components/CustomComponent.cs"',title:'"App1/App1/components/CustomComponent.cs"'},'using App1;\nusing App1.Components;\nusing App1.Configuration;\nusing VertiGIS.Mobile.Infrastructure.App;\nusing VertiGIS.Mobile.Infrastructure.Layout;\nusing System.Threading.Tasks;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n// highlight-next-line\n[assembly: AppItemComponent(typeof(CustomComponent), "custom-component", CustomComponentConfiguration.ConfigItemtype, XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    // highlight-next-line\n    class CustomComponent : AppItemComponentBase<CustomComponentConfiguration>\n    {\n        private CustomComponentViewModel _viewModel;\n\n        IAppItem<CustomComponentConfiguration> _appItemResolver;\n\n        public CustomComponent(IAppItem<CustomComponentConfiguration> itemResolver)\n            : base(itemResolver)\n        {\n            _appItemResolver = itemResolver;\n            _viewModel = new CustomComponentViewModel();\n        }\n\n        protected override VisualElement Create(XNode node)\n        {\n            return new CustomComponentView()\n            {\n                BindingContext = _viewModel\n            };\n        }\n\n        protected override async Task DoInitializeAsync()\n        {\n            // highlight-start\n            var item = await _appItemResolver.ResolveAsync();\n            _viewModel.Title = item.ConfigTitle;\n            _viewModel.Description = item.ConfigDescription;\n            // highlight-end\n        }\n    }\n}\n'))),(0,i.kt)(s.Z,{value:"view",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="App1/App1/components/CustomComponentView.xaml"',title:'"App1/App1/components/CustomComponentView.xaml"'},'<?xml version="1.0" encoding="UTF-8"?>\n<ContentView xmlns="http://xamarin.com/schemas/2014/forms"\n             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n             xmlns:d="http://xamarin.com/schemas/2014/forms/design"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n             mc:Ignorable="d"\n             x:Class="App1.Components.CustomComponentView">\n    <ContentView.Content>\n        <StackLayout>\n            // highlight-start\n            <Label FontSize="Title" Text="{Binding Title}" />\n            <Label Text="{Binding Description}" />\n            // highlight-end\n        </StackLayout>\n    </ContentView.Content>\n</ContentView>\n'))),(0,i.kt)(s.Z,{value:"code-behind",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/components/CustomComponentView.xaml.cs"',title:'"App1/App1/components/CustomComponentView.xaml.cs"'},"using App1.Components;\nusing VertiGIS.Mobile.Composition;\nusing Xamarin.Forms;\nusing Xamarin.Forms.Xaml;\n\n[assembly: View(typeof(CustomComponentView))]\nnamespace App1.Components\n{\n    [XamlCompilation(XamlCompilationOptions.Compile)]\n    public partial class CustomComponentView : ContentView\n    {\n        public CustomComponentView()\n        {\n            InitializeComponent();\n        }\n    }\n}\n"))),(0,i.kt)(s.Z,{value:"view-model",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App1/App1/components/CustomComponentViewModel.cs"',title:'"App1/App1/components/CustomComponentViewModel.cs"'},"using App1.Components;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Views;\n\n[assembly: ViewModel(typeof(CustomComponentViewModel))]\nnamespace App1.Components\n{\n    public class CustomComponentViewModel : NotifyPropertyBase\n    {\n        private string _title;\n        private string _description;\n\n        public string Title\n        {\n            get => _title;\n            set => SetProperty(ref _title, value);\n        }\n\n        public string Description\n        {\n            get => _description;\n            set => SetProperty(ref _description, value);\n        }\n    }\n}\n")))),(0,i.kt)("h2",{id:"define-configuration-values"},"Define Configuration Values"),(0,i.kt)("p",null,"At this point, the component is hooked up to configuration, and configuration values can be defined and consumed."),(0,i.kt)("p",null,"App Config is defined in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-edit-layout-app-config"},"app JSON")," and linked to the component through the ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," attribute in layout, just like any other component."),(0,i.kt)(r.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"json"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"layout",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',title:'"App1/App1/layout-large.xml"'},'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd"\n    // highlight-next-line\n    xmlns:custom="https://your.org/layout/app1">\n    <gxm:taskbar>\n        \x3c!--Taskbar / custom component--\x3e\n        <panel>\n            // highlight-next-line\n            <custom:custom-component icon="warning" config="custom-component-config"/>\n        </panel>\n        <map slot="main"/>\n    </gxm:taskbar>\n</layout>\n'))),(0,i.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'},'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "custom-component-config",\n            "id": "custom-component-config",\n            "title": "Title from Config",\n            "description": "This description came from config."\n        },\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        }\n    ]\n}\n'))),(0,i.kt)(s.Z,{value:"ui",mdxType:"TabItem"},(0,i.kt)("img",{src:(0,a.Z)("img/mobile-component-with-configuration.png")}))),(0,i.kt)("h2",{id:"relevant-sdk-sample"},"Relevant SDK Sample"),(0,i.kt)("p",null,"Check out the relevant Geocortex Mobile SDK Sample:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/ComponentConfiguration"},"Component with Configuration"))),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)(l.Z,{mdxType:"UseCaseContainer"},(0,i.kt)(p.Z,{title:"Component Reference",description:"Learn more about components in Geocortex Mobile",link:(0,a.Z)("docs/mobile/sdk-components-reference"),mdxType:"UseCaseCard"}),(0,i.kt)(p.Z,{title:"Component and Service Interactions",description:"Learn how components and services interact in Geocortex Mobile",link:(0,a.Z)("docs/mobile/sdk-component-service-interactions"),mdxType:"UseCaseCard"}),(0,i.kt)(p.Z,{title:"Implement a Custom Service",description:"Learn how to implement a custom service using the Geocortex Mobile SDK",link:(0,a.Z)("docs/mobile/sdk-services-create"),mdxType:"UseCaseCard"})))}C.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function o(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:()=>i})}}]);