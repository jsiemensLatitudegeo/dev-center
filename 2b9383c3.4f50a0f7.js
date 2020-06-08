(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return v}));var o=n(2),a=n(9),c=(n(0),n(295)),i=n(302),r=n(298),s=n(297),d={title:"Events Overview",sidebar_label:"Overview",description:"Geocortex Mobile - Overview of events"},b={id:"mobile/sdk-events-overview",title:"Events Overview",description:"Geocortex Mobile - Overview of events",source:"@site/docs/mobile/sdk-events-overview.mdx",permalink:"/docs/mobile/sdk-events-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/sdk-events-overview.mdx",sidebar_label:"Overview",sidebar:"mobile",previous:{title:"Service Reference",permalink:"/docs/mobile/sdk-services-reference"},next:{title:"Events Reference",permalink:"/docs/mobile/sdk-events-reference"}},l=[{value:"Next Steps",id:"next-steps",children:[]}],m={rightToc:l};function v(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Events")," are distinct, discrete messaging about a change or update that occurs in the viewer. They can be published or subscribed to by any component, service or ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-components-reference#xaml-view"}),"view")," registered with Geocortex Mobile, and can be used to initiate behaviors, communicate data changes, and more. Events themselves do not execute behavior, but merely provide messaging so subscribers can act on changes."),Object(c.b)("p",null,"Events are internal to Geocortex Mobile, so they can only be consumed by custom code. Custom components and services can access events through ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-dependency-injection"}),"dependency injection"),"."),Object(c.b)("p",null,"The full list of existing events available in Geocortex Mobile can be ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/api-commands-operations-events#events"}),"found in the API documentation"),"."),Object(c.b)("p",null,"Events in Geocortex Mobile are grouped by categories, such as ",Object(c.b)("inlineCode",{parentName:"p"},"app")," or ",Object(c.b)("inlineCode",{parentName:"p"},"geolocation"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{}),"app.activated\napp.backgrounded\ngeolocation.position-changed\ngeolocation.position-lost\n")),Object(c.b)("p",null,"Events can publish custom arguments with information about the change they are communicating."),Object(c.b)("h2",{id:"next-steps"},"Next Steps"),Object(c.b)(s.a,{mdxType:"UseCaseContainer"},Object(c.b)(r.a,{title:"Check out the Event Reference",description:"Take a deep dive into events in the Geocortex Mobile SDK",link:Object(i.a)("docs/mobile/sdk-events-reference"),mdxType:"UseCaseCard"}),Object(c.b)(r.a,{title:"Events API",description:"Check out the full list of Events available in Geocortex Mobile",link:Object(i.a)("docs/mobile/api-commands-operations-events#events"),mdxType:"UseCaseCard"})))}v.isMDXComponent=!0},297:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n(0),a=n.n(o),c=n(296),i=n.n(c),r=n(125),s=n.n(r);function d(e){var t=e.children;return a.a.createElement("div",{className:i()(s.a.root)},t)}},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));n(304);var o=n(303),a=n(0),c=n.n(a),i=n(296),r=n.n(i),s=n(126),d=n.n(s);function b(e){var t=e.title,n=e.description,a=e.link;return c.a.createElement("div",{className:r()("card-demo",d.a.root)},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card__header"},c.a.createElement("h3",null,t)),c.a.createElement("div",{className:"card__body"},c.a.createElement("p",null,n)),c.a.createElement("div",{className:"card__footer"},c.a.createElement(o.a,{className:"button button--secondary button--block",to:a},"Get Started"))))}}}]);