(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{136:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(149);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"About Us..."),r.a.createElement("p",null,"History of Open Eugene?"))}},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(142),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(144),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,n){var a;e.exports=(a=n(146))&&a.default||a},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Open Eugene Festival"}}}}},146:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(48),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},147:function(e,t,n){},149:function(e,t,n){"use strict";var a=n(145),r=n(0),i=n.n(r),o=n(4),l=n.n(o),c=n(150),u=n.n(c),s=n(143),d=function(e){return i.a.createElement("li",{style:{display:"inline-block"}},i.a.createElement(s.Link,{to:e.to,activeStyle:{background:"#33333388"},style:{color:"white",textDecoration:"none",padding:"1rem"}},e.children))},m=function(e){e.children;return i.a.createElement("div",null,i.a.createElement("ul",{style:{listStyle:"none",float:"right",margin:"auto"}},i.a.createElement(d,{to:"/"},"Home"),i.a.createElement(d,{to:"/projects"},"Projects"),i.a.createElement(d,{to:"/sponsors"},"Sponsors"),i.a.createElement(d,{to:"/about"},"About")))},p=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem",display:"flex",flexWrap:"wrap",alignItems:"center"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))),i.a.createElement(m,null))},f=(n(147),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})});f.propTypes={children:l.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-about-js-92b4b0b6aca05b71e825.js.map