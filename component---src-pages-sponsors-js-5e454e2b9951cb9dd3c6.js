(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{141:function(e,t,n){"use strict";n.r(t);n(75),n(33),n(49);var a=n(7),g=n.n(a),r=n(0),M=n.n(r),i=n(152),o=n(172),I=function(e){var t;return""!==e.LogoURL&&(t=n(173)("./"+e.LogoURL)),M.a.createElement("div",null,M.a.createElement("a",{href:e.Link},M.a.createElement("h4",{className:e.Level},e.Name),""!==e.LogoURL?M.a.createElement("img",{src:t,alt:e.Name}):""))},c=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){var e=o.map(function(e,t){return M.a.createElement(I,Object.assign({key:t},e))});return M.a.createElement(i.a,null,M.a.createElement("h2",null,"Open Eugene Sponsors"),M.a.createElement("h3",null,M.a.createElement("a",{href:"https://eugtech.github.io/Open-Eugene/open-eugene-fest-sponsorship.pdf"},"Become a sponsor!")),M.a.createElement("hr",null),M.a.createElement("h3",null,"Title Sponsor"),"Your logo here!",M.a.createElement("hr",null),M.a.createElement("h3",null,"Presenting Sponsors"),M.a.createElement("div",{className:"sponsorContainer"},e.filter(function(e){return"Presenting"===e.props.Level})),M.a.createElement("hr",null),M.a.createElement("h3",null,"Supporting Sponsors"),M.a.createElement("div",{className:"sponsorContainer"},e.filter(function(e){return"Supporting"===e.props.Level})),M.a.createElement("hr",null),M.a.createElement("h3",null,"Community Sponsors"),M.a.createElement("div",{className:"sponsorContainer"},e.filter(function(e){return"Community"===e.props.Level})))},t}(r.Component);t.default=c},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return N}),n.d(t,"StaticQueryContext",function(){return A}),n.d(t,"StaticQuery",function(){return l});var a=n(0),g=n.n(a),r=n(4),M=n.n(r),i=n(142),o=n.n(i);n.d(t,"Link",function(){return o.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var I=n(144),c=n.n(I);n.d(t,"PageRenderer",function(){return c.a});var T=n(34);n.d(t,"parsePath",function(){return T.a});var A=g.a.createContext({}),l=function(e){return g.a.createElement(A.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):g.a.createElement("div",null,"Loading (StaticQuery)")})};function N(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}l.propTypes={data:M.a.object,query:M.a.string.isRequired,render:M.a.func,children:M.a.func}},144:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},145:function(e,t,n){e.exports=n.p+"static/BackgroundBox-a03bb80510ad20f3e9104ab8740a83a1.png"},146:function(e,t,n){e.exports=n.p+"static/EUG_TECH_switchlogo_ROUNDnameWHITE-64ec72b7e9c68d7a2b17ff7455f57754.png"},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Open Eugene Festival"}}}}},148:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),g=n.n(a),r=n(4),M=n.n(r),i=n(48),o=n(2),I=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return g.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};I.propTypes={location:M.a.shape({pathname:M.a.string.isRequired}).isRequired},t.default=I},149:function(e,t,n){},152:function(e,t,n){"use strict";var a=n(147),g=n(0),r=n.n(g),M=n(4),i=n.n(M),o=n(153),I=n.n(o),c=n(143),T=function(e){return r.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},r.a.createElement(c.Link,{to:e.to,activeStyle:{background:"#2b2b2b",color:"white"},style:{color:"#2b2b2b",textDecoration:"none"}},e.children))},A=function(e){e.children;return r.a.createElement("div",null,r.a.createElement("ul",{style:{listStyle:"none",margin:"auto"}},r.a.createElement(T,{to:"/"},"Home"),r.a.createElement(T,{to:"/projects"},"Projects"),r.a.createElement(T,{to:"/sessions"},"Sessions"),r.a.createElement(T,{to:"/sponsors"},"Sponsors"),r.a.createElement(T,{to:"/about"},"About")))},l=n(145),N=n.n(l),s=function(e){var t=e.siteTitle;return r.a.createElement("div",{style:{background:"url("+N.a+")",backgroundSize:"cover",padding:"2rem",marginBottom:"1.45rem",textAlign:"center"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(c.Link,{to:"/",style:{color:"#2b2b2b",textDecoration:"none",fontSize:"4rem"}},t))),r.a.createElement(A,null))},D=n(154),u=n(155),y=n(146),m=n.n(y),C=function(){return r.a.createElement("div",{style:{background:"linear-gradient(to right, #00ff6d, #00faff)",margin:"0"}},r.a.createElement("div",{className:"socialMediaIcons",style:{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}},r.a.createElement("img",{src:m.a,alt:"Eugene Tech Logo",style:{width:150,margin:"8px"}}),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/EugTech",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(D.a,{icon:u.b})),r.a.createElement("a",{href:"https://twitter.com/EugTech",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(D.a,{icon:u.d})),r.a.createElement("a",{href:"https://www.facebook.com/EugTech/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(D.a,{icon:u.a})),r.a.createElement("a",{href:"https://www.instagram.com/eugtech/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(D.a,{icon:u.c}))),r.a.createElement("img",{src:"https://siliconshire.org/static/images/stamp_made_white.png",alt:"Made in the shire logo",style:{margin:0}})),r.a.createElement("div",{style:{textAlign:"center",paddingBottom:"1rem",background:"#68676788"}},r.a.createElement("a",{style:{color:"white"},href:"https://www.facebook.com/events/196679251226823/",target:"_blank",rel:"noopener noreferrer"},"Check out the facebook event!")))},E=(n(149),function(e){var t=e.children;return r.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Information for Open Eugene Fest 2018"},{name:"keywords",content:"open source, programming, project, app, software, all the things, mozilla, mozfest, web, development"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),r.a.createElement(C,null))},data:a})});E.propTypes={children:i.a.node.isRequired};t.a=E},156:function(e,t,n){e.exports=n.p+"static/open-all-the-things-aaaf4fd9e14d72f9fd1f2ec9e3ac8af0.jpg"},172:function(e){e.exports=[{Level:"Presenting",Name:"Concentric Sky",Link:"https://www.concentricsky.com/",LogoURL:""},{Level:"Supporting",Name:"moovel North America",Link:"https://www.moovel-group.com",LogoURL:""},{Level:"Community",Name:"SiliconShire",Link:"https://siliconshire.org/",LogoURL:""},{Level:"Community",Name:"The Barn Light",Link:"https://thebarnlightbar.com",LogoURL:""},{Level:"Supporting",Name:"RAIN",Link:"www.raineugene.org",LogoURL:""},{Level:"Community",Name:"XS Media",Link:"https://xsmedia.com",LogoURL:""},{Level:"Presenting",Name:"Badgr",Link:"https://badgr.org",LogoURL:""},{Level:"Community",Name:"thanks.org",Link:"https://thanks.org",LogoURL:""},{Level:"Community",Name:"EugeneTech",Link:"https://EugeneTech.org",LogoURL:""}]},173:function(e,t,n){var a={"./BackgroundBox.png":145,"./Cube.svg":174,"./EUG_TECH_switchlogo_ROUNDnameWHITE.png":146,"./favicon.png":175,"./gatsby-icon.png":176,"./gatsby-mascot.png":177,"./open-all-the-things.jpg":156};function g(e){var t=r(e);return n(t)}function r(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}g.keys=function(){return Object.keys(a)},g.resolve=r,e.exports=g,g.id=173},174:function(e,t){e.exports="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAyMDAxMDkwNC8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iOTAwcHgiIGhlaWdodD0iOTgwcHgiIHZpZXdCb3g9IjAgMCA5MDAwIDk4MDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPg0KPGcgaWQ9ImxheWVyMTAxIiBmaWxsPSIjMDAwMDAwMTEiIHN0cm9rZT0ibm9uZSI+DQogPHBhdGggZD0iTTQ0NjYgOTc5MiBjLTE2IC0yIC0yNTQgLTEyNCAtNTMwIC0yNzIgLTI3NSAtMTQ3IC0xMjQxIC02NjIgLTIxNDYgLTExNDUgLTkwNSAtNDgyIC0xNjUxIC04ODIgLTE2NTkgLTg4OCAtOCAtNyAtMjIgLTMwIC0zMiAtNTIgLTE4IC0zOCAtMTkgLTE1MiAtMTggLTI3ODUgMCAtMTUxMCA0IC0yNzgwIDggLTI4MjMgOSAtODggMzEgLTEyMSA5OSAtMTUxIDIwIC05IDk4NyAtMzg3IDIxNDcgLTg0MiAxNzk0IC03MDEgMjExOCAtODI1IDIxNjIgLTgyNiA0NCAtMSAxMTAgMjIgNDUwIDE1NSAyMTkgODYgMTA5NiA0MjkgMTk0OCA3NjIgODUzIDMzMyAxNjM2IDY0MCAxNzQyIDY4MSAxMDYgNDIgMjA0IDg1IDIxOCA5NiA1OSA0NiA1NSAtMTc5IDU1IDI4OTkgMCAyNzg2IDAgMjgyMiAtMTkgMjg1MyAtMTIgMTkgLTQ5IDQ4IC05MyA3MyAtODIgNDcgLTQwOTAgMjE4MyAtNDE4MyAyMjMwIC02NCAzMyAtMTAyIDQyIC0xNDkgMzV6IG0tMTE2IC0zMTE1IGwwIC0yNzEzIC03OTIgLTM2NiBjLTQzNiAtMjAyIC0xMTg5IC01NTAgLTE2NzMgLTc3MyAtNDg0IC0yMjQgLTEwMTUgLTQ3MCAtMTE4MSAtNTQ2IC0xNjUgLTc2IC0zMDQgLTEzOSAtMzA3IC0xMzkgLTQgMCAtNyAxMTU4IC03IDI1NzMgbDAgMjU3MiAzNTMgMTg3IGMxOTMgMTA0IDEwODEgNTc3IDE5NzIgMTA1MiA4OTEgNDc2IDE2MjMgODY1IDE2MjggODY1IDQgMSA3IC0xMjIwIDcgLTI3MTJ6IG0yMjg2IDE2NjEgbDE5NzQgLTEwNTMgMCAtMjU3MiBjMCAtMTQxNSAtMiAtMjU3MyAtNSAtMjU3MyAtMyAwIC0yMDUgOTIgLTQ0OCAyMDQgLTM4NyAxNzkgLTI3NjcgMTI3OCAtMzMwOSAxNTI5IGwtMTk4IDkyIDAgMjcxMiBjMCAxNDkyIDMgMjcxMyA2IDI3MTMgNCAwIDg5NSAtNDc0IDE5ODAgLTEwNTJ6IG0tMTIxMyAtNTA2NCBjNTA3IC0yMzUgMTM5NSAtNjQ0IDE5NzIgLTkxMSA1NzggLTI2NyAxMDU0IC00ODggMTA1OCAtNDkzIDUgLTQgLTE1IC0xNyAtNDUgLTI4IC00OCAtMTggLTI2MjEgLTEwMjUgLTMwNDggLTExOTIgLTc1MSAtMjk1IC04NDcgLTMzMSAtODcwIC0zMjcgLTE0IDIgLTY4OSAyNjQgLTE1MDAgNTgxIC04MTEgMzE4IC0xNjk0IDY2NCAtMTk2MyA3NjkgLTI2OCAxMDUgLTQ4NCAxOTQgLTQ4MCAxOTggNSAzIDU5MSAyNzYgMTMwMyA2MDUgNzEyIDMyOCAxNTk5IDczOCAxOTcwIDkxMCAzNzEgMTcyIDY3NyAzMTMgNjc4IDMxNCAyIDAgNDE4IC0xOTIgOTI1IC00MjZ6Ii8+DQogPC9nPg0KPGcgaWQ9ImxheWVyMTAyIiBmaWxsPSIjZmZmIiBzdHJva2U9Im5vbmUiPg0KIDxwYXRoIGQ9Ik0wIDQ5MDAgbDAgLTQ5MDAgMjI0OCAxIGMxMjM2IDEgMjIzMSA1IDIyMTIgOSAtMzQgNyAtNDI0MCAxNjQ5IC00MjkwIDE2NzUgLTU0IDI4IC03MiA1OSAtODEgMTQyIC00IDQzIC04IDEzMTMgLTggMjgyMyAtMSAyNjMzIDAgMjc0NyAxOCAyNzg1IDEwIDIyIDI0IDQ1IDMyIDUyIDggNiA3NTQgNDA2IDE2NTkgODg4IDkwNSA0ODMgMTg3MSA5OTggMjE0NiAxMTQ1IDI3NiAxNDggNTE0IDI3MCA1MzAgMjczIDE2IDIgLTk4MiA1IC0yMjE4IDYgbC0yMjQ4IDEgMCAtNDkwMHoiLz4NCiA8cGF0aCBkPSJNNDU0MCA5NzkwIGMyOCAtNyA0MjE4IC0yMjM1IDQzMDggLTIyOTEgMTMgLTggMzIgLTI4IDQzIC00NSAxOSAtMzEgMTkgLTczIDE5IC0yODUzIDAgLTMwNzggNCAtMjg1MyAtNTUgLTI4OTkgLTE0IC0xMSAtMTEyIC01NCAtMjE4IC05NiAtMTA2IC00MSAtNjY5IC0yNjIgLTEyNTIgLTQ5MCAtNTgzIC0yMjcgLTE0NTQgLTU2OCAtMTkzNSAtNzU3IC00ODEgLTE4OCAtODkxIC0zNDUgLTkxMCAtMzQ5IC0xOSAtNCA5NzYgLTggMjIxMyAtOSBsMjI0NyAtMSAwIDQ5MDAgMCA0OTAwIC0yMjQ3IC0xIGMtMTI1NSAtMSAtMjIzMyAtNSAtMjIxMyAtOXoiLz4NCiA8cGF0aCBkPSJNMjcxNSA4NTI0IGMtODkxIC00NzUgLTE3NzkgLTk0OCAtMTk3MiAtMTA1MiBsLTM1MyAtMTg3IDAgLTI1NzIgYzAgLTE0MTUgMyAtMjU3MyA3IC0yNTczIDMgMCAxNDIgNjMgMzA3IDEzOSAxNjYgNzYgNjk3IDMyMiAxMTgxIDU0NiA0ODQgMjIzIDEyMzcgNTcxIDE2NzMgNzczIGw3OTIgMzY2IDAgMjcxMyBjMCAxNDkyIC0zIDI3MTMgLTcgMjcxMiAtNSAwIC03MzcgLTM4OSAtMTYyOCAtODY1eiIvPg0KIDxwYXRoIGQ9Ik00NjUwIDY2NzcgbDAgLTI3MTIgMTk4IC05MiBjNTQyIC0yNTEgMjkyMiAtMTM1MCAzMzA5IC0xNTI5IDI0MyAtMTEyIDQ0NSAtMjA0IDQ0OCAtMjA0IDMgMCA1IDExNTggNSAyNTczIGwwIDI1NzIgLTE5NzQgMTA1MyBjLTEwODUgNTc4IC0xOTc2IDEwNTIgLTE5ODAgMTA1MiAtMyAwIC02IC0xMjIxIC02IC0yNzEzeiIvPg0KIDxwYXRoIGQ9Ik0zODIwIDMzODYgYy0zNzEgLTE3MiAtMTI1OCAtNTgyIC0xOTcwIC05MTAgLTcxMiAtMzI5IC0xMjk4IC02MDIgLTEzMDMgLTYwNSAtNCAtNCAyMTIgLTkzIDQ4MCAtMTk4IDI2OSAtMTA1IDExNTIgLTQ1MSAxOTYzIC03NjkgODExIC0zMTcgMTQ4NiAtNTc5IDE1MDAgLTU4MSAyMyAtNCAxMTkgMzIgODcwIDMyNyA0MjcgMTY3IDMwMDAgMTE3NCAzMDQ4IDExOTIgMzAgMTEgNTAgMjQgNDUgMjggLTQgNSAtNDgwIDIyNiAtMTA1OCA0OTMgLTU3NyAyNjcgLTE0NjUgNjc2IC0xOTcyIDkxMSAtNTA3IDIzNCAtOTIzIDQyNiAtOTI1IDQyNiAtMSAtMSAtMzA3IC0xNDIgLTY3OCAtMzE0eiIvPg0KIDwvZz4NCg0KPC9zdmc+"},175:function(e,t,n){e.exports=n.p+"static/favicon-661eaa06dbbea712f4faaa2c9d6aa467.png"},176:function(e,t,n){e.exports=n.p+"static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png"},177:function(e,t,n){e.exports=n.p+"static/gatsby-mascot-6d91c86c0fde632ba4cd01062fd9ccfa.png"}}]);
//# sourceMappingURL=component---src-pages-sponsors-js-5e454e2b9951cb9dd3c6.js.map