(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{137:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(143),i=n(152);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(o.Link,{to:"/"},"Go back to the homepage"))}},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(142),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(144),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var m=n(33);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},144:function(e,t,n){var a;e.exports=(a=n(146))&&a.default||a},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Open Eugene Festival"}}}}},146:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(48),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},147:function(e,t,n){e.exports=n.p+"static/BackgroundBox-a03bb80510ad20f3e9104ab8740a83a1.png"},148:function(e,t,n){e.exports=n.p+"static/EUG_TECH_switchlogo_ROUNDnameWHITE-64ec72b7e9c68d7a2b17ff7455f57754.png"},149:function(e,t,n){},152:function(e,t,n){"use strict";var a=n(145),r=n(0),o=n.n(r),i=n(4),c=n.n(i),l=n(153),u=n.n(l),s=n(143),m=function(e){return o.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},o.a.createElement(s.Link,{to:e.to,activeStyle:{background:"#2b2b2b",color:"white"},style:{color:"#2b2b2b",textDecoration:"none"}},e.children))},d=function(e){e.children;return o.a.createElement("div",null,o.a.createElement("ul",{style:{listStyle:"none",margin:"auto"}},o.a.createElement(m,{to:"/"},"Home"),o.a.createElement(m,{to:"/projects"},"Projects"),o.a.createElement(m,{to:"/sponsors"},"Sponsors"),o.a.createElement(m,{to:"/about"},"About")))},p=n(147),g=n.n(p),f=function(e){var t=e.siteTitle;return o.a.createElement("div",{style:{background:"url("+g.a+")",backgroundSize:"cover",padding:"2rem",marginBottom:"1.45rem",textAlign:"center"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(s.Link,{to:"/",style:{color:"#2b2b2b",textDecoration:"none",fontSize:"4rem"}},t))),o.a.createElement(d,null))},h=n(154),E=n(155),b=n(148),y=n.n(b),w=function(){return o.a.createElement("div",{style:{background:"linear-gradient(to right, #00ff6d, #00faff)",margin:"0"}},o.a.createElement("div",{className:"socialMediaIcons",style:{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}},o.a.createElement("img",{src:y.a,alt:"Eugene Tech Logo",style:{width:150,margin:"8px"}}),o.a.createElement("div",null,o.a.createElement("a",{href:"https://github.com/EugTech",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(h.a,{icon:E.b})),o.a.createElement("a",{href:"https://twitter.com/EugTech",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(h.a,{icon:E.d})),o.a.createElement("a",{href:"https://www.facebook.com/EugTech/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(h.a,{icon:E.a})),o.a.createElement("a",{href:"https://www.instagram.com/eugtech/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(h.a,{icon:E.c}))),o.a.createElement("img",{src:"https://siliconshire.org/static/images/stamp_made_white.png",alt:"Made in the shire logo",style:{margin:0}})),o.a.createElement("div",{style:{textAlign:"center",paddingBottom:"1rem",background:"#68676788"}},o.a.createElement("a",{style:{color:"white"},href:"https://www.facebook.com/events/196679251226823/",target:"_blank",rel:"noopener noreferrer"},"Check out the facebook event!")))},v=(n(149),function(e){var t=e.children;return o.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Information for Open Eugene Fest 2018"},{name:"keywords",content:"open source, programming, project, app, software, all the things, mozilla, mozfest, web, development"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),o.a.createElement(w,null))},data:a})});v.propTypes={children:c.a.node.isRequired};t.a=v}}]);
//# sourceMappingURL=component---src-pages-page-2-js-1d414de4117a06fb6031.js.map