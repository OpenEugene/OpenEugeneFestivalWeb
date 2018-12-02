(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(143),i=a(150);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h2",{style:{textAlign:"center"}},"What is Open Eugene Festival?"),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("iframe",{title:"5-min Open Eugene Explaination c/ Mark Davis",width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/8VDYcNPw9zA",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),r.a.createElement("p",null,"You’ll see Mozilla’s ethos of “open” in action at the festival – it’s about making concepts and projects"),r.a.createElement("ul",null,r.a.createElement("li",null,"1) easy to understand,"),r.a.createElement("li",null,"2) easy to share, remix and build on, and"),r.a.createElement("li",null,"3) welcoming to all participants, from any background.")),r.a.createElement("blockquote",{style:{background:"#00faff"}},"Open Eugene Festival is a great space to experience and experiment with this approach",r.a.createElement("br",null),"—we call it “working open”"),r.a.createElement("p",null,"The Festival is part hack-a-thon, part conference, part art exhibition. We are working with learners & leaders to help citizens of Eugene open projects, improve collaboration, and inspire the community."),r.a.createElement("hr",null),r.a.createElement("h3",null,"When and Where"),r.a.createElement("div",{style:{display:"flex"},className:"mapContainer"},r.a.createElement("p",null,"Open Eugene Fest will be happening Friday-Saturday December 14th & 15th 2018 at ",r.a.createElement("a",{href:"https://www.trifoia.com",target:"_blank",rel:"noopener noreferrer"},"Triforia"),"."),r.a.createElement("iframe",{title:"Trifoia map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.7874124852015!2d-123.09462638451642!3d44.04644667910977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c11e151476cab1%3A0x21f72062e230b3cd!2sTrifoia!5e0!3m2!1sen!2sus!4v1542760773176",width:"300",height:"200",frameBorder:"0",style:{border:0},allowFullScreen:!0})),r.a.createElement("hr",null),r.a.createElement("h3",null,"Why Come to Open Fest?"),r.a.createElement("ul",null,r.a.createElement("li",null,"To Play KING-PONG!"),r.a.createElement("li",null,"To Find my Open Source brothers and sisters in the region"),r.a.createElement("li",null,"Get your hands dirty! Hack with techies, Talk with Talkies?"),r.a.createElement("li",null,"Show the world your awesome project!"),r.a.createElement("li",null,"Story time with Dr. Bud! ",r.a.createElement("a",{href:"https://smartdown.site/#gallery/Home.md",target:"_blank",rel:"noopener noreferrer"},"SmartDown Edition"))),r.a.createElement("h4",null,r.a.createElement(l.Link,{to:"/projects"},"Check out what projects are coming or even... Submit your own!")),r.a.createElement("hr",null),r.a.createElement("h3",null,r.a.createElement("a",{href:"https://www.eventbrite.com/e/open-eugene-festival-tickets-52110392587",target:"_blank",rel:"noopener noreferrer"},"Signup as a Contributor, Volunteer, or Buy a Ticket on eventbrite")))}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(142),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var u=a(144),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var m=a(33);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},144:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Open Eugene Festival"}}}}},146:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(48),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},147:function(e,t,a){},150:function(e,t,a){"use strict";var n=a(145),r=a(0),l=a.n(r),i=a(4),o=a.n(i),c=a(151),u=a.n(c),s=a(143),m=function(e){return l.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},l.a.createElement(s.Link,{to:e.to,activeStyle:{background:"#2b2b2b",color:"white"},style:{color:"#2b2b2b",textDecoration:"none"}},e.children))},d=function(e){e.children;return l.a.createElement("div",null,l.a.createElement("ul",{style:{listStyle:"none",float:"right",margin:"auto"}},l.a.createElement(m,{to:"/"},"Home"),l.a.createElement(m,{to:"/projects"},"Projects"),l.a.createElement(m,{to:"/sponsors"},"Sponsors"),l.a.createElement(m,{to:"/about"},"About")))},p=function(e){var t=e.siteTitle;return l.a.createElement("div",{style:{background:"linear-gradient(to right, #00ff6d, #00faff)",marginBottom:"1.45rem",display:"flex",flexWrap:"wrap",alignItems:"center"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(s.Link,{to:"/",style:{color:"#2b2b2b",textDecoration:"none"}},t))),l.a.createElement(d,null))},h=function(){return l.a.createElement("div",{style:{background:"linear-gradient(to right, #00ff6d, #00faff)",margin:"0"}},l.a.createElement("p",{style:{margin:"auto",textAlign:"center",padding:15}},"social media icons, etc"))},f=(a(147),function(e){var t=e.children;return l.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),l.a.createElement(h,null))},data:n})});f.propTypes={children:o.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-index-js-0888a4ef39b54280ae3a.js.map