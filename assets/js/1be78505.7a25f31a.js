(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[9514,4608],{3616:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ee});var n=a(7294),o=a(3905),i=a(2263),l=a(6291),s=a(6955),r=a(2122),c=a(6010),d=a(9732),m=a(944),u=a(1839),b=a(3783),p=a(7898),h=a(6742),f=a(3919),E=a(5537);const v=e=>n.createElement("svg",(0,r.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));var g=a(4478),_=a(8617),k=a(4973);const C="sidebar_15mo",N="sidebarWithHideableNavbar_267A",Z="sidebarHidden_2kNb",I="sidebarLogo_3h0W",S="menu_Bmed",A="menuLinkText_2aKo",T="menuWithAnnouncementBar_2WvA",R="collapseSidebarButton_1CGd",y="collapseSidebarButtonIcon_3E-R",M="sidebarMenuIcon_fgN0",w="sidebarMenuCloseIcon_1lpH";const x=(e,t)=>"link"===e.type?(0,d.Mg)(e.href,t):"category"===e.type&&e.items.some((e=>x(e,t))),L=(0,n.memo)((function({items:e,...t}){return e.map(((e,a)=>n.createElement(B,(0,r.Z)({key:a,item:e},t))))}));function B(e){switch(e.item.type){case"category":return n.createElement(P,e);case"link":default:return n.createElement(H,e)}}function P({item:e,onItemClick:t,collapsible:a,activePath:o,...i}){const{items:l,label:s}=e,d=x(e,o),m=function(e){const t=(0,n.useRef)(e);return(0,n.useEffect)((()=>{t.current=e}),[e]),t.current}(d),[u,b]=(0,n.useState)((()=>!!a&&(!d&&e.collapsed))),p=(0,n.useRef)(null),[h,f]=(0,n.useState)(void 0),E=(e=!0)=>{var t;f(e?`${null==(t=p.current)?void 0:t.scrollHeight}px`:void 0)};(0,n.useEffect)((()=>{d&&!m&&u&&b(!1)}),[d,m,u]);const v=(0,n.useCallback)((e=>{e.preventDefault(),h||E(),setTimeout((()=>b((e=>!e))),100)}),[h]);return 0===l.length?null:n.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":u})},n.createElement("a",(0,r.Z)({className:(0,c.Z)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&d,[A]:!a}),onClick:a?v:void 0,href:a?"#!":void 0},i),s),n.createElement("ul",{className:"menu__list",ref:p,style:{height:h},onTransitionEnd:()=>{u||E(!1)}},n.createElement(L,{items:l,tabIndex:u?"-1":"0",onItemClick:t,collapsible:a,activePath:o})))}function H({item:e,onItemClick:t,activePath:a,collapsible:o,...i}){const{href:l,label:s}=e,d=x(e,a);return n.createElement("li",{className:"menu__list-item",key:s},n.createElement(h.Z,(0,r.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":d}),to:l},(0,f.Z)(l)&&{isNavLink:!0,exact:!0,onClick:t},i),(0,f.Z)(l)?s:n.createElement("span",null,s,n.createElement(_.Z,null))))}function W({onClick:e}){return n.createElement("button",{type:"button",title:(0,k.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",R),onClick:e},n.createElement(v,{className:y}))}function D({responsiveSidebarOpened:e,onClick:t}){return n.createElement("button",{"aria-label":e?(0,k.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,k.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:t},e?n.createElement("span",{className:(0,c.Z)(M,w)},"\xd7"):n.createElement(g.Z,{className:M,height:24,width:24}))}const F=function({path:e,sidebar:t,sidebarCollapsible:a=!0,onCollapse:o,isHidden:i}){const l=function(){const{isAnnouncementBarClosed:e}=(0,m.Z)(),[t,a]=(0,n.useState)(!e);return(0,p.Z)((({scrollY:t})=>{e||a(0===t)})),t}(),{navbar:{hideOnScroll:s},hideableSidebar:r}=(0,d.LU)(),{isAnnouncementBarClosed:h}=(0,m.Z)(),{showResponsiveSidebar:f,closeResponsiveSidebar:v,toggleResponsiveSidebar:g}=function(){const[e,t]=(0,n.useState)(!1);(0,u.Z)(e);const a=(0,b.Z)();return(0,n.useEffect)((()=>{a===b.D.desktop&&t(!1)}),[a]),{showResponsiveSidebar:e,closeResponsiveSidebar:(0,n.useCallback)((e=>{e.target.blur(),t(!1)}),[t]),toggleResponsiveSidebar:(0,n.useCallback)((()=>{t((e=>!e))}),[t])}}();return n.createElement("div",{className:(0,c.Z)(C,{[N]:s,[Z]:i})},s&&n.createElement(E.Z,{tabIndex:-1,className:I}),n.createElement("nav",{className:(0,c.Z)("menu","menu--responsive","thin-scrollbar",S,{"menu--show":f,[T]:!h&&l}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},n.createElement(D,{responsiveSidebarOpened:f,onClick:g}),n.createElement("ul",{className:"menu__list"},n.createElement(L,{items:t,onItemClick:v,collapsible:a,activePath:e}))),r&&n.createElement(W,{onClick:o}))};var O=a(7277),K=a(4608),z=a(5977);const J="docPage_31aa",U="docMainContainer_3ufF",Y="docMainContainerEnhanced_3NYZ",$="docSidebarContainer_3Kbt",G="docSidebarContainerHidden_3pA8",Q="collapsedDocSidebar_2JMH",X="expandSidebarButtonIcon_1naQ",j="docItemWrapperEnhanced_2vyJ",q="docItemWrapper_3FMP";function V({currentDocRoute:e,versionMetadata:t,children:a}){var l;const{siteConfig:r,isClient:m}=(0,i.Z)(),{pluginId:u,version:b}=t,{sidebarName:p,sidebar:h}=function({versionMetadata:e,currentDocRoute:t}){const{permalinkToSidebar:a,docsSidebars:n}=e,o=a[t.path]||a[(i=t.path,i.endsWith("/")?i:`${i}/`)]||a[function(e){return e.endsWith("/")?e.slice(0,-1):e}(t.path)];var i;return{sidebar:n[o],sidebarName:o}}({versionMetadata:t,currentDocRoute:e}),[f,E]=(0,n.useState)(!1),[g,_]=(0,n.useState)(!1),C=(0,n.useCallback)((()=>{g&&_(!1),E(!f)}),[g]);return n.createElement(s.Z,{key:m,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:b,tag:(0,d.os)(u,b)}},n.createElement("div",{className:J},h&&n.createElement("aside",{className:(0,c.Z)($,{[G]:f}),onTransitionEnd:e=>{e.currentTarget.classList.contains($)&&f&&_(!0)}},n.createElement(F,{key:p,sidebar:h,path:e.path,sidebarCollapsible:(null==(l=r.themeConfig)?void 0:l.sidebarCollapsible)??!0,onCollapse:C,isHidden:g}),g&&n.createElement("div",{className:Q,title:(0,k.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:C,onClick:C},n.createElement(v,{className:X}))),n.createElement("main",{className:(0,c.Z)(U,{[Y]:f||!h})},n.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",q,{[j]:f})},n.createElement(o.Zo,{components:O.Z},a)))))}const ee=function(e){const{route:{routes:t},versionMetadata:a,location:o}=e,i=t.find((e=>(0,z.LX)(o.pathname,e)));return i?n.createElement(V,{currentDocRoute:i,versionMetadata:a},(0,l.Z)(t)):n.createElement(K.default,e)}},4608:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var n=a(7294),o=a(6955),i=a(4973);const l=function(){return n.createElement(o.Z,{title:(0,i.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(i.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(i.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(i.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);