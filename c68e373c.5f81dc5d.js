(window.webpackJsonp=window.webpackJsonp||[]).push([[124,75],{212:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return g}));var o=n(3),a=(n(0),n(243)),i=n(244),r=n(252),s=n(253),c=n(272),m=n(59),l=n(249),p=n(248);const b={title:"Build a Custom Component with UI",description:"Geocortex Mobile - Learn how to implement a custom component with UI"},u={unversionedId:"mobile/tutorial-implement-component-with-ui",id:"mobile/tutorial-implement-component-with-ui",isDocsHomePage:!1,title:"Build a Custom Component with UI",description:"Geocortex Mobile - Learn how to implement a custom component with UI",source:"@site/docs/mobile/tutorial-implement-component-with-ui.mdx",slug:"/mobile/tutorial-implement-component-with-ui",permalink:"/docs/mobile/tutorial-implement-component-with-ui",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/tutorial-implement-component-with-ui.mdx",version:"current",sidebar:"mobile",previous:{title:"Build a Custom Command",permalink:"/docs/mobile/tutorial-implement-command-operation"},next:{title:"Pull Component Data from App Config",permalink:"/docs/mobile/tutorial-implement-component-participate-app-config"}},d=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create a Component Skeleton",id:"create-a-component-skeleton",children:[]},{value:"Add the Component to your Layout",id:"add-the-component-to-your-layout",children:[]},{value:"Use XAML to define your UI",id:"use-xaml-to-define-your-ui",children:[]},{value:"Extend your Component with Custom Code",id:"extend-your-component-with-custom-code",children:[{value:"Example: Progress Bar",id:"example-progress-bar",children:[]}]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],h={toc:d};function g({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},h,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Did you know Geocortex Workflow allows you to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/forms.htm#Overview_of_Forms%3FTocPath%3DForms%7COverview%2520of%2520Forms%7C_____0"}),"create custom forms")," you can present to an end user?"))),Object(a.b)("p",null,"Implementing a custom component in Geocortex Mobile gives you the highest degree of flexibility with what you can do. ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-components-overview"}),"Components")," can display custom, dynamic UI, register operation implementations, store persistent data, and more. They are also one of the most complex ways of customizing your Geocortex Mobile app, so it might be worthwhile to review simpler options like ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/configuration-commands-operations"}),"Commands and Operations")," or ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/tutorial-display-custom-form"}),"Workflow")," first."),Object(a.b)("p",null,"By the end of this article, you'll have the knowledge to build a component that displays a progress bar that is advanced by a button."),Object(a.b)(c.a,{src:Object(i.a)("video/component-with-ui-demo.webm"),mdxType:"DemoVideo"}),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)(m.default,{mdxType:"QuickstartPrereqsSnippet"}),Object(a.b)("h2",{id:"create-a-component-skeleton"},"Create a Component Skeleton"),Object(a.b)("p",null,"Create a new file ",Object(a.b)("inlineCode",{parentName:"p"},"components/CustomComponent.cs")," under the platform agnostic project.\nIn the file, add a new component class ",Object(a.b)("inlineCode",{parentName:"p"},"CustomComponent")," and ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-dependency-injection"}),"register it with ",Object(a.b)("strong",{parentName:"a"},"Autofac")),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/components/CustomComponent.cs"',title:'"App1/App1/components/CustomComponent.cs"'}),'using App1;\nusing App1.Components;\nusing VertiGIS.Mobile.Composition.Layout;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n// highlight-next-line\n[assembly: Component(typeof(CustomComponent), "custom-component", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    // highlight-next-line\n    class CustomComponent : ComponentBase\n    {\n        protected override VisualElement Create(XNode node)\n        {\n            return new Label(){ Text = "My Custom Component" };\n        }\n    }\n}\n')),Object(a.b)("h2",{id:"add-the-component-to-your-layout"},"Add the Component to your Layout"),Object(a.b)("p",null,"First, the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/configuration-layout-getting-started"}),"layout")," needs to be told where to find your component. In the assembly attribute of the ",Object(a.b)("inlineCode",{parentName:"p"},"CustomComponent"),", we declared it to be part of the ",Object(a.b)("inlineCode",{parentName:"p"},"App1Namespace")," which is defined in ",Object(a.b)("inlineCode",{parentName:"p"},"XmlNamespaces.cs")," We need to add this ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/configuration-layout-getting-started#namespaces"}),"xml namespace")," as an attribute on the layout. In this example, it's added with the alias ",Object(a.b)("inlineCode",{parentName:"p"},"custom"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="App1/App1/layout-large.xml',title:'"App1/App1/layout-large.xml'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd"\n    // highlight-next-line\n    xmlns:custom="https://your.org/layout/app1">\n    <gxm:taskbar>\n        <map slot="main"/>\n    </gxm:taskbar>\n</layout>\n')),Object(a.b)("p",null,"Now that the ",Object(a.b)("inlineCode",{parentName:"p"},"custom")," namespace has been added, the component can be added to the layout. For this example, it was added into a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/configuration-layout-reference#panels"}),"Panel")," that lives in the taskbar."),Object(a.b)(r.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},Object(a.b)(s.a,{value:"layout",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd"\n    xmlns:custom="https://your.org/layout/app1">\n    <gxm:taskbar>\n        \x3c!--Taskbar / custom component--\x3e\n        <panel>\n            // highlight-next-line\n            <custom:custom-component icon="info"/>\n        </panel>\n        <map slot="main"/>\n    </gxm:taskbar>\n</layout>\n'))),Object(a.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(a.b)("img",{src:Object(i.a)("img/mobile-custom-component-simple.png"),alt:"Custom Component with Text Block"}))),Object(a.b)("h2",{id:"use-xaml-to-define-your-ui"},"Use XAML to define your UI"),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/xaml-basics/"}),"XAML is a markup language created by Microsoft"),", and one of the recommended patterns for defining UI in Xamarin Forms. We can modify our component to reference a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/user-interface/controls/views"}),"XAML view"),"."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Right click on the ",Object(a.b)("inlineCode",{parentName:"li"},"Components"),' folder and select "Add" > "New Item" > "Content View"'),Object(a.b)("li",{parentName:"ol"},"Rename the files and classes within to ",Object(a.b)("inlineCode",{parentName:"li"},"CustomComponentView.xaml")," and ",Object(a.b)("inlineCode",{parentName:"li"},"CustomComponentView.xaml.cs")),Object(a.b)("li",{parentName:"ol"},"Modify the ",Object(a.b)("inlineCode",{parentName:"li"},"CustomComponent")," to return this new view for its content.")),Object(a.b)(r.a,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"View",value:"view"},{label:"Code Behind",value:"code-behind"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(a.b)(s.a,{value:"component",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/components/CustomComponent.cs"',title:'"App1/App1/components/CustomComponent.cs"'}),'using App1;\nusing App1.Components;\nusing VertiGIS.Mobile.Composition.Layout;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n[assembly: Component(typeof(CustomComponent), "custom-component", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    class CustomComponent : ComponentBase\n    {\n        protected override VisualElement Create(XNode node)\n        {\n            // highlight-next-line\n            return new CustomComponentView();\n        }\n    }\n}\n\n'))),Object(a.b)(s.a,{value:"view",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="App1/App1/components/CustomComponentView.xaml"',title:'"App1/App1/components/CustomComponentView.xaml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<ContentView xmlns="http://xamarin.com/schemas/2014/forms"\n             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n             xmlns:d="http://xamarin.com/schemas/2014/forms/design"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n             mc:Ignorable="d"\n             x:Class="App1.Components.CustomComponentView">\n  <ContentView.Content>\n      <StackLayout>\n          <Label Text="Hello Xamarin.Forms!" />\n      </StackLayout>\n  </ContentView.Content>\n</ContentView>\n'))),Object(a.b)(s.a,{value:"code-behind",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/components/CustomComponentView.xaml.cs"',title:'"App1/App1/components/CustomComponentView.xaml.cs"'}),"using App1.Components;\nusing VertiGIS.Mobile.Composition;\nusing Xamarin.Forms;\nusing Xamarin.Forms.Xaml;\n\n[assembly: View(typeof(CustomComponentView))]\nnamespace App1.Components\n{\n    [XamlCompilation(XamlCompilationOptions.Compile)]\n    public partial class CustomComponentView : ContentView\n    {\n        public CustomComponentView()\n        {\n            InitializeComponent();\n        }\n    }\n}\n"))),Object(a.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(a.b)("img",{src:Object(i.a)("img/mobile-custom-component-xamarin-view.png"),alt:"Custom Component with Text Block"}))),Object(a.b)("p",null,"Congratulations! You've built a working component with UI that is exposed in Mobile."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Learn about how to extend this component to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/tutorial-implement-component-participate-app-config"}),"participate in app config"),"."))),Object(a.b)("h2",{id:"extend-your-component-with-custom-code"},"Extend your Component with Custom Code"),Object(a.b)("p",null,"From here, you can implement your own business logic and interfaces, create custom ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-commands-operations#implementing-commands-and-operations"}),"Commands and Operations")," that are powered by and/or interact with your component, and much more. The ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/"}),"Xamarin Forms Documentation")," has excellent guides to implementing user interfaces in Xaml."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Geocortex Mobile comes with built-in ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/GeocortexMobileElements"}),"Enhanced Components")," that can ease development and styling of custom UI."))),Object(a.b)("h3",{id:"example-progress-bar"},"Example: Progress Bar"),Object(a.b)("p",null,"Here's an example of a component with a progress bar that is advanced on a button click. It uses a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/xaml-basics/data-bindings-to-mvvm"}),"MVVM pattern")," to power the user interface, as is best practice recommended by Xamarin."),Object(a.b)(r.a,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"View",value:"view"},{label:"Code Behind",value:"code-behind"},{label:"View Model",value:"view-model"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},Object(a.b)(s.a,{value:"component",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/components/ProgressBarComponent.cs"',title:'"App1/App1/components/ProgressBarComponent.cs"'}),'using App1;\nusing App1.Components;\nusing VertiGIS.Mobile.Composition.Layout;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n[assembly: Component(typeof(ProgressBarComponent), "progress-bar-component", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    class ProgressBarComponent : ComponentBase\n    {\n        private View _view;\n\n        // The view is injected as a dependency\n        // highlight-next-line\n        public ProgressBarComponent(ProgressBarComponentView view)\n        {\n            _view = view;\n        }\n        protected override VisualElement Create(XNode node)\n        {\n            return _view;\n        }\n    }\n}\n'))),Object(a.b)(s.a,{value:"view",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="App1/App1/components/ProgressBarComponentView.xaml',title:'"App1/App1/components/ProgressBarComponentView.xaml'}),'<?xml version="1.0" encoding="UTF-8"?>\n<ContentView xmlns="http://xamarin.com/schemas/2014/forms"\n             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n             xmlns:d="http://xamarin.com/schemas/2014/forms/design"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n             mc:Ignorable="d"\n             x:Class="App1.Components.ProgressBarComponentView">\n    <ContentView.Content>\n        <StackLayout Margin="20">\n            <StackLayout Spacing="20" IsVisible="{Binding WorkNotComplete}">\n                <Label Text="Click the button to advance the progress bar."></Label>\n                <Button Text="Do some work." Clicked="DoWork_Clicked"></Button>\n                <ProgressBar ProgressColor="Red" Progress="{Binding Progress}" />\n            </StackLayout>\n            <StackLayout Spacing="20" IsVisible="{Binding WorkComplete}">\n                <Label  Text="Work Complete"></Label>\n                <Button Text="Reset" Clicked="Reset_Clicked"></Button>\n            </StackLayout>\n        </StackLayout>\n    </ContentView.Content>\n</ContentView>\n'))),Object(a.b)(s.a,{value:"code-behind",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/components/ProgressBarComponentView.xaml.cs"',title:'"App1/App1/components/ProgressBarComponentView.xaml.cs"'}),'using App1.Components;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Infrastructure.Messaging;\nusing System;\nusing Xamarin.Forms;\nusing Xamarin.Forms.Xaml;\n\n// Here, the view is registered with Autofac so it can be injected.\n// highlight-next-line\n[assembly: View(typeof(ProgressBarComponentView))]\nnamespace App1.Components\n{\n    [XamlCompilation(XamlCompilationOptions.Compile)]\n    public partial class ProgressBarComponentView : ContentView\n    {\n        private UIOperations _uiOperations;\n        public ProgressBarComponentViewModel ViewModel => BindingContext as ProgressBarComponentViewModel;\n        public ProgressBarComponentView(ProgressBarComponentViewModel viewModel, UIOperations uiOperations)\n        {\n            _uiOperations = uiOperations;\n            BindingContext = viewModel;\n            InitializeComponent();\n        }\n\n        private void DoWork_Clicked(object sender, EventArgs e)\n        {\n            if (!ViewModel.WorkComplete)\n            {\n                ViewModel.Progress += 0.2;\n                if (ViewModel.Progress >= 1.0)\n                {\n                    ViewModel.WorkComplete = true;\n                    _uiOperations.Alert.Execute(new UIAlertArgs() { Title = "Success", Message = "Work Complete", ButtonText = "Ok" });\n                }\n            }\n        }\n\n        private void Reset_Clicked(object sender, EventArgs e)\n        {\n            ViewModel.Progress = 0;\n            ViewModel.WorkComplete = false;\n        }\n    }\n}\n'))),Object(a.b)(s.a,{value:"view-model",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/components/ProgressBarComponentViewModel.cs"',title:'"App1/App1/components/ProgressBarComponentViewModel.cs"'}),"using App1.Components;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Views;\n\n// Here, the view model is registered with autofac so it can be injected\n// highlight-next-line\n[assembly: ViewModel(typeof(ProgressBarComponentViewModel))]\nnamespace App1.Components\n{\n    public class ProgressBarComponentViewModel : NotifyPropertyBase\n    {\n        private double _progress = 0;\n\n        private bool _workComplete = false;\n\n        public double Progress\n        {\n            get => _progress;\n            set => SetProperty(ref _progress, value);\n        }\n\n        public bool WorkComplete\n        {\n            get => _workComplete;\n            set\n            {\n                SetProperty(ref _workComplete, value);\n                OnPropertyChanged(nameof(WorkNotComplete));\n            }\n        }\n\n        public bool WorkNotComplete => !WorkComplete;\n    }\n}\n"))),Object(a.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(a.b)(c.a,{src:Object(i.a)("video/component-with-ui-demo.webm"),mdxType:"DemoVideo"}))),Object(a.b)("p",null,"This example refactored the original example to use ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://autofaccn.readthedocs.io/en/latest/register/registration.html"}),"Autofac dependency injection")," to instantiate the View and ViewModel. Setting up your classes so dependencies are handled by Autofac in the constructor allows you to allow inject other Geocortex Mobile classes registered with Autofac, like how the ",Object(a.b)("inlineCode",{parentName:"p"},"UIOperations")," class is injected into the view."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Learn more of this ViewModel's use of the Geocortex Mobile helper class ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-components-viewmodel-helper-class"}),Object(a.b)("inlineCode",{parentName:"a"},"NotifyPropertyBase")),"."))),Object(a.b)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),Object(a.b)("p",null,"Check out the relevant Geocortex Mobile SDK Samples:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/Component"}),"Custom Component"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/XamlComponent"}),"Custom Component with XAML")))),Object(a.b)("h2",{id:"next-steps"},"Next Steps"),Object(a.b)(p.a,{mdxType:"UseCaseContainer"},Object(a.b)(l.a,{title:"Component Reference",description:"Learn more about components in Geocortex Mobile",link:Object(i.a)("docs/mobile/sdk-components-reference"),mdxType:"UseCaseCard"}),Object(a.b)(l.a,{title:"Component and Service Interactions",description:"Learn how components and services interact in Geocortex Mobile",link:Object(i.a)("docs/mobile/sdk-component-service-interactions"),mdxType:"UseCaseCard"}),Object(a.b)(l.a,{title:"Implement a Custom Service",description:"Learn how to implement a custom service using the Geocortex Mobile SDK",link:Object(i.a)("docs/mobile/sdk-services-create"),mdxType:"UseCaseCard"})))}g.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),l=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,d=p["".concat(r,".").concat(u)]||p[u]||b[u]||i;return n?a.a.createElement(d,s(s({ref:t},m),{},{components:n})):a.a.createElement(d,s({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var m=2;m<i;m++)r[m]=n[m];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},244:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var o=n(21),a=n(245);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(o.default)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(o)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+r:r}(t,e,n,o)}}function r(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},245:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}))},246:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},247:function(e,t,n){"use strict";var o=n(0),a=n.n(o),i=n(11),r=n(245),s=n(9);const c=Object(o.createContext)({collectLink:()=>{}});var m=n(244),l=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:b,activeClassName:u,isActive:d,"data-noBrokenLinkCheck":h,autoAddBaseUrl:g=!0}=e,f=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:O}=Object(m.b)(),v=Object(o.useContext)(c),j=p||b,C=Object(r.a)(j),w=null==j?void 0:j.replace("pathname://",""),x=void 0!==w?(y=w,g&&(e=>e.startsWith("/"))(y)?O(y):y):void 0;var y;const N=Object(o.useRef)(!1),k=n?i.e:i.c,A=s.a.canUseIntersectionObserver;let M;Object(o.useEffect)((()=>(!A&&C&&window.docusaurus.prefetch(x),()=>{A&&M&&M.disconnect()})),[x,A,C]);const V=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,P=!x||!C||V;return x&&C&&!V&&!h&&v.collectLink(x),P?a.a.createElement("a",Object.assign({href:x},j&&!C&&{target:"_blank",rel:"noopener noreferrer"},f)):a.a.createElement(k,Object.assign({},f,{onMouseEnter:()=>{N.current||(window.docusaurus.preload(x),N.current=!0)},innerRef:e=>{var t,n;A&&e&&C&&(t=e,n=()=>{window.docusaurus.prefetch(x)},M=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.unobserve(t),M.disconnect(),n())}))})),M.observe(t))},to:x||""},n&&{isActive:d,activeClassName:u}))}},248:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),a=n.n(o),i=n(54),r=n.n(i);function s({children:e}){return a.a.createElement("div",{className:r.a.root},e)}},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var o=n(247),a=n(0),i=n.n(a),r=n(246),s=n(55),c=n.n(s);function m({title:e,description:t,link:n}){return i.a.createElement("div",{className:Object(r.a)("card-demo",c.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,e)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,t)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(o.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}},250:function(e,t,n){"use strict";var o=n(0),a=n(251);t.a=function(){const e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},251:function(e,t,n){"use strict";var o=n(0);const a=Object(o.createContext)(void 0);t.a=a},252:function(e,t,n){"use strict";var o=n(0),a=n.n(o),i=n(250),r=n(246),s=n(56),c=n.n(s);const m=37,l=39;t.a=function(e){const{lazy:t,block:n,defaultValue:s,values:p,groupId:b,className:u}=e,{tabGroupChoices:d,setTabGroupChoices:h}=Object(i.a)(),[g,f]=Object(o.useState)(s),O=o.Children.toArray(e.children);if(null!=b){const e=d[b];null!=e&&e!==g&&p.some((t=>t.value===e))&&f(e)}const v=e=>{f(e),null!=b&&h(b,e)},j=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},u)},p.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===e,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case l:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case m:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e)},onFocus:()=>v(e),onClick:()=>{v(e)}},t)))),t?Object(o.cloneElement)(O.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},253:function(e,t,n){"use strict";var o=n(3),a=n(0),i=n.n(a);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",Object(o.a)({role:"tabpanel"},{hidden:t,className:n}),e)}},272:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),a=n.n(o),i=n(82),r=n.n(i);function s({src:e}){return a.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,className:r.a.video},a.a.createElement("source",{src:e,type:"video/webm"}),"Your browser does not support the video tag.")}},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var o=n(3),a=(n(0),n(243));const i={},r={unversionedId:"mobile/snippets/quickstart-prereqs",id:"mobile/snippets/quickstart-prereqs",isDocsHomePage:!1,title:"quickstart-prereqs",description:"Check out and setup the Geocortex Mobile SDK Quickstart project.",source:"@site/docs/mobile/snippets/quickstart-prereqs.mdx",slug:"/mobile/snippets/quickstart-prereqs",permalink:"/docs/mobile/snippets/quickstart-prereqs",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/quickstart-prereqs.mdx",version:"current"},s=[],c={toc:s};function m({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Check out and setup the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-overview"}),"Geocortex Mobile SDK Quickstart project"),"."))}m.isMDXComponent=!0}}]);