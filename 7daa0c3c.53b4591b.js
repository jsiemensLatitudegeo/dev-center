(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return u}));var a=n(1),i=n(9),r=(n(0),n(289)),c=(n(310),n(299)),s=n(298),o=n(313),l=n(312),d={title:"Service Reference",description:"Geocortex Web - Service Reference"},p={id:"web/sdk-service-reference",title:"Service Reference",description:"Geocortex Web - Service Reference",source:"@site/docs/web/sdk-service-reference.mdx",permalink:"/docs/web/sdk-service-reference",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-service-reference.mdx",sidebar:"web",previous:{title:"Create a Service",permalink:"/docs/web/sdk-create-service"},next:{title:"Commands and Operations in Services",permalink:"/docs/web/sdk-services-commands-operations"}},m=[{value:"Service Registration",id:"service-registration",children:[]},{value:"Service Lifecycle",id:"service-lifecycle",children:[]},{value:"Service Anatomy",id:"service-anatomy",children:[{value:"Initialization and Cleanup",id:"initialization-and-cleanup",children:[]},{value:"Message Bus",id:"message-bus",children:[]}]},{value:"Models and Configuration",id:"models-and-configuration",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],b={rightToc:m};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Services act as a repository of accessible behavior and data, and can be used for a variety of purposes, from implementing commands and operations, to managing shared data, to interfacing with the REST API of an external service."),Object(r.b)("h2",{id:"service-registration"},"Service Registration"),Object(r.b)("p",null,"All services need to be registered with Geocortex Web. Services can optionally use the ",Object(r.b)("inlineCode",{parentName:"p"},"itemType")," property to bind to an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-reference#app-items"}),"item in the app config"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'export default function(registry: LibraryRegistry) {\n    ...\n    registry.registerService({\n        id: "custom-service",\n        getServiceType: () => CustomService,\n        // Use this setting if you want your service to load an\n        // item from the app config.\n        itemType: "custom-service-model",\n        // Use this setting if you want your service to load on\n        // application startup. Defaults to `false`.\n        loadOnStartup: true,\n    })\n    ...\n}\n')),Object(r.b)("h2",{id:"service-lifecycle"},"Service Lifecycle"),Object(r.b)("p",null,"On application load, all services that are configured to automatically load on startup are created and initialized ",Object(r.b)("strong",{parentName:"p"},"in parallel"),", along with core services like the message bus."),Object(r.b)("p",null,"All other services are created and initialized (i.e. the ",Object(r.b)("inlineCode",{parentName:"p"},"_onInitialize")," method is called) when they are first invoked. This can happen in multiple ways."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If a command or operation implemented by the service is executed, then the service will be created and initialized to run that command."),Object(r.b)("li",{parentName:"ul"},"If a different component or service injects the service, then the service will be created and initialized to fulfill that dependency.")),Object(r.b)("p",null,"Services are destroyed (i.e. the ",Object(r.b)("inlineCode",{parentName:"p"},"destroy")," method is invoked) when the application is destroyed."),Object(r.b)("h2",{id:"service-anatomy"},"Service Anatomy"),Object(r.b)("p",null,"All services have access to initialization and cleanup methods, as well as the ",Object(r.b)("inlineCode",{parentName:"p"},"messages")," property that allows for the registration and execution of commands and operations."),Object(r.b)("h3",{id:"initialization-and-cleanup"},"Initialization and Cleanup"),Object(r.b)("p",null,"Sometimes, a service is required to perform initialization and cleanup actions, for example, to initialize dynamic data and cleanup dangling references. The ",Object(r.b)("inlineCode",{parentName:"p"},"ServiceBase")," class has two methods to achieve this:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"_onInitialize()"),", which can be overridden,"),Object(r.b)("li",{parentName:"ul"},"and ",Object(r.b)("inlineCode",{parentName:"li"},"destroy()"),", which can be implemented to facilitate cleanup.")),Object(r.b)("p",null,"The following service uses these methods to subscribe to an event and cleanup the event handler afterwards."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Always call ",Object(r.b)("inlineCode",{parentName:"p"},"super._onInitialize()")," before any custom initialization logic."))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import { ServiceBase } from "@geocortex/web/services";\nimport { MapEvent } from "@geocortex/viewer-framework/messaging/registry/map";\n\nexport default class CustomService extends ServiceBase {\n    handles: IHandle[] = [];\n\n    protected async _onInitialize(): Promise<void> {\n        await super._onInitialize();\n        this.handles.push(\n            this.messages.events.map.initialized.subscribe((e: MapEvent) => {\n                console.log(\n                    "Map Initialized, do your map dependent model setup here."\n                );\n            })\n        );\n        return;\n    }\n\n    destroy(): void {\n        this.handles.forEach((h) => h.remove());\n    }\n}\n')),Object(r.b)("h3",{id:"message-bus"},"Message Bus"),Object(r.b)("p",null,"All services have access to the ",Object(r.b)("inlineCode",{parentName:"p"},"messages")," property on the class instance, which gives access to all ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-services-commands-operations#running-commands-and-operations"}),"commands, operations, and events in the application"),"."),Object(r.b)("h2",{id:"models-and-configuration"},"Models and Configuration"),Object(r.b)("p",null,"Like components, services can be configured through the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-getting-started"}),"app config"),". A service can participate in the config by extending the ",Object(r.b)("inlineCode",{parentName:"p"},"ConfigurableServiceBase")," class. For more information on the relationship between services and configuration, check out ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-serializable-properties"}),"this article"),". The following example demonstrates a service with one configurable property, ",Object(r.b)("inlineCode",{parentName:"p"},"name"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The service is linked to the config through the ",Object(r.b)("inlineCode",{parentName:"p"},"itemType")," and ",Object(r.b)("inlineCode",{parentName:"p"},"id")," properties."))),Object(r.b)(o.a,{defaultValue:"service",values:[{label:"Service",value:"service"},{label:"Registration",value:"registration"},{label:"App Config",value:"config"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"service",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'export interface CustomServiceProperties extends ServiceModelProperties {\n    name: string;\n}\n\n@serializable\nexport default class CustomServiceWithConfig extends ConfigurableServiceBase<\n    CustomServiceProperties\n> {\n    // highlight-next-line\n    id: "my-unique-id";\n\n    name: string;\n\n    async sayHello(): Promise<string> {\n        return `Hello, ${this.name}`;\n    }\n\n    protected _getSerializableProperties(): PropertyDefs<\n        CustomServiceProperties\n    > {\n        return {\n            ...super._getSerializableProperties(),\n            name: {\n                serializeModes: ["initial"],\n                default: "Ian",\n            },\n        };\n    }\n}\n'))),Object(r.b)(l.a,{value:"registration",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'export default function (registry: LibraryRegistry) {\n    registry.registerService({\n        id: "custom-service",\n        title: "Custom Service",\n        getServiceType: () => CustomServiceWithConfig,\n        // highlight-next-line\n        itemType: "custom-service-model",\n    });\n}\n'))),Object(r.b)(l.a,{value:"config",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "custom-service-model",\n            // highlight-next-line\n            "id": "my-unique-id",\n            "name": "Noah"\n        }\n    ]\n}\n')))),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)(s.a,{mdxType:"UseCaseContainer"},Object(r.b)(c.a,{title:"Learn how to use Commands and Operations with Services",description:"Learn how to run and implement commands and operations with custom services",link:"sdk-services-commands-operations",mdxType:"UseCaseCard"}),Object(r.b)(c.a,{title:"Learn about Service Interactions",description:"Learn about how services can directly interact through dependency injection",link:"sdk-services-injecting-services",mdxType:"UseCaseCard"}),Object(r.b)(c.a,{title:"Build a Custom Command with a Custom Service",description:"Follow a step by step guide to building a custom command with a custom service",link:"tutorial-implement-command-operation",mdxType:"UseCaseCard"}),Object(r.b)(c.a,{title:"Build a Service that Manages Dynamic Data",description:"Built a service that manages a dynamic data source and exposes it to components",link:"tutorial-service-dynamic-data",mdxType:"UseCaseCard"})))}u.isMDXComponent=!0},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),i=n.n(a),r=n(290),c=n.n(r),s=n(130),o=n.n(s);function l(e){var t=e.children;return i.a.createElement("div",{className:c()(o.a.root)},t)}},299:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(300);var a=n(296),i=n(0),r=n.n(i),c=n(290),s=n.n(c),o=n(131),l=n.n(o);function d(e){var t=e.title,n=e.description,i=e.link;return r.a.createElement("div",{className:s()("card-demo",l.a.root)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"card__body"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"card__footer"},r.a.createElement(a.a,{className:"button button--secondary button--block",to:i},"Get Started"))))}}}]);