(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{140:function(e,t,n){"use strict";n.r(t);n(33),n(49);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(153),c=n(172),s=function(e){return i.a.createElement("div",null,i.a.createElement("h3",{className:"programName"},e["Program Name"]),i.a.createElement("ul",null,i.a.createElement("li",null,"Presenter: ",e["Your Name"]),i.a.createElement("li",null,"Description: ",e["Longer Description"])),i.a.createElement("hr",null))},u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=c.map(function(e,t){return i.a.createElement(s,Object.assign({key:t},e))});return i.a.createElement(l.a,null,i.a.createElement("h3",null,"Present a Session!"),i.a.createElement("p",null,"Do you have a case study to talk about, or plans to provide open-data? Can teach a class on using Github pages, or lead a workshop on inclusiveness. These are all examples of programming we’d love to make part of the event."),i.a.createElement("h3",{style:{textAlign:"center"}},"Fill in the"," ",i.a.createElement("a",{href:"https://goo.gl/forms/tg0Il8VadaCCdMSJ2",target:"_blank",rel:"noopener noreferrer"},"programming form here")),i.a.createElement("h2",null,"Presentations to look forward to!"),e,i.a.createElement("hr",null))},t}(o.Component);t.default=u},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(142),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(144),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(34);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},144:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},145:function(e,t,n){e.exports=n.p+"static/logo_emeralds-297b7bdcee09709651d9619b7b0520db.png"},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Open Eugene Festival"}}}}},147:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(48),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},148:function(e,t,n){e.exports=n.p+"static/BackgroundBox-a03bb80510ad20f3e9104ab8740a83a1.png"},149:function(e,t,n){e.exports=n.p+"static/EUG_TECH_switchlogo_ROUNDnameWHITE-64ec72b7e9c68d7a2b17ff7455f57754.png"},150:function(e,t,n){},153:function(e,t,n){"use strict";var a=n(146),r=n(0),o=n.n(r),i=n(4),l=n.n(i),c=n(154),s=n.n(c),u=n(143),m=function(e){return o.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},o.a.createElement(u.Link,{to:e.to,activeStyle:{background:"#2b2b2b",color:"white"},style:{color:"#2b2b2b",textDecoration:"none"}},e.children))},d=function(e){e.children;return o.a.createElement("div",null,o.a.createElement("ul",{style:{listStyle:"none",margin:"auto"}},o.a.createElement(m,{to:"/"},"Home"),o.a.createElement(m,{to:"/projects"},"Projects"),o.a.createElement(m,{to:"/sessions"},"Sessions"),o.a.createElement(m,{to:"/sponsors"},"Sponsors"),o.a.createElement(m,{to:"/about"},"About")))},p=n(148),g=n.n(p),h=n(145),f=n.n(h),b=function(e){var t=e.siteTitle;return o.a.createElement("div",{style:{background:"url("+g.a+")",backgroundSize:"cover",padding:"2rem",marginBottom:"1.45rem",textAlign:"center"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(u.Link,{to:"/",style:{color:"#2b2b2b",textDecoration:"none",fontSize:"4rem"}},t)),o.a.createElement("h3",null,"Presented By..."),o.a.createElement("img",{src:f.a,alt:"Logo"})),o.a.createElement(d,null))},y=n(155),w=n(156),E=n(149),v=n.n(E),k=function(){return o.a.createElement("div",{style:{background:"linear-gradient(to right, #00ff6d, #00faff)",margin:"0"}},o.a.createElement("div",{className:"socialMediaIcons",style:{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}},o.a.createElement("img",{src:v.a,alt:"Eugene Tech Logo",style:{width:150,margin:"8px"}}),o.a.createElement("div",null,o.a.createElement("a",{href:"https://github.com/EugTech",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(y.a,{icon:w.b})),o.a.createElement("a",{href:"https://twitter.com/EugTech",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(y.a,{icon:w.d})),o.a.createElement("a",{href:"https://www.facebook.com/EugTech/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(y.a,{icon:w.a})),o.a.createElement("a",{href:"https://www.instagram.com/eugtech/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(y.a,{icon:w.c}))),o.a.createElement("img",{src:"https://siliconshire.org/static/images/stamp_made_white.png",alt:"Made in the shire logo",style:{margin:0}})),o.a.createElement("div",{style:{textAlign:"center",paddingBottom:"1rem",background:"#68676788"}},o.a.createElement("a",{style:{color:"white"},href:"https://www.facebook.com/events/196679251226823/",target:"_blank",rel:"noopener noreferrer"},"Check out the facebook event!")))},T=(n(150),function(e){var t=e.children;return o.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Information for Open Eugene Fest 2018"},{name:"keywords",content:"open source, programming, project, app, software, all the things, mozilla, mozfest, web, development"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(b,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),o.a.createElement(k,null))},data:a})});T.propTypes={children:l.a.node.isRequired};t.a=T},172:function(e){e.exports=[{Timestamp:"2018-11-16T21:52:44.772Z","Your Name":"Nate Otto","Program Name":"Recognizing Contributions with Open Badges","Shorter Description (the tweet version 140 chars)":"Learn how to use Open Badges to give and get recognition for all the important work that goes into open software and open data! ","Longer Description":"We often forget to give recognition for the time and effort that community members put into our open projects. That's true across open source and open data initiatives as well as local community efforts for learning and community building. Open Badges are a great tools to provide recognition, and Open Pathways give your community members understanding of what activities are valuable and open to their participation as well as the ability to share their accomplishments with potential employers and collaborators. Learn how to use Open Badges to recognize what's important in your open community, and earn a badge for yourself for participating at Open Eugene Festival.","Link to slide deck or repo":"https://github.com/concentricsky/badgr-server","Your Twitter or GitHub handle":"https://twitter.com/ottonomy https://github.com/ottonomy","Link to speakers public profile (linked-in, Medium, or...)":"","Second speakers public profile (linked-in, Medium, or...)":"","Type of program":"","Venue Preference":""},{Timestamp:"2018-11-21T20:44:00.849Z","Your Name":"Nikole Gipps","Program Name":"Open Sourcing Education","Shorter Description (the tweet version 140 chars)":"Learn why we should open-source education and how you can get involved in The Eugene Coding Initiative","Longer Description":"Education currently works on a very pay-to-play model - the schools that have the most resources can afford to purchase expensive curriculum programs and the highest-grossing curriculum companies gain the influential means to continue that cycle. The gap between the haves and the have-nots is growing wider every day, while the diversity in education dies off. We need to reduce the barriers to CS education and level the playing field. We'll talk about how to open up your education platforms, create equitable education that is available to all, and what we're doing in Lane County to teach kids how to code.","Link to slide deck or repo":"https://github.com/codeeug","Your Twitter or GitHub handle":"https://twitter.com/websupergirl","Link to speakers public profile (linked-in, Medium, or...)":"https://www.linkedin.com/in/nhgnikole/","Second speakers public profile (linked-in, Medium, or...)":"","Type of program":"Talk","Venue Preference":"Large Open Area:  More the merrier and maybe we'll even break into groups"}]}}]);
//# sourceMappingURL=component---src-pages-sessions-js-31af681d5f3f903ef2c3.js.map