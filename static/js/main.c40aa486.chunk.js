(this.webpackJsonp0wx=this.webpackJsonp0wx||[]).push([[0],{1:function(t,e,i){t.exports={content:"App_content__1SJa8",head:"App_head__owO6Z",picture:"App_picture__3ZltZ",greet:"App_greet__34To6",name:"App_name__28tSQ",infoBox:"App_infoBox__3B5hM",sectionTitle:"App_sectionTitle__2qy6K",info:"App_info__2GhQ3",techStackList:"App_techStackList__He8G2",logo:"App_logo__6Znsr",techDetail:"App_techDetail__Y3VQi",project:"App_project__3CBxT",projectTitle:"App_projectTitle__1mq_u",fa:"App_fa__d5myV",ProjectDescription:"App_ProjectDescription__1jDcG",language:"App_language__3eKMx",link:"App_link__1nkCd"}},11:function(t,e,i){t.exports={main:"Main_main__2zd4R",game:"Main_game__1rjBz"}},23:function(t,e,i){},31:function(t,e,i){"use strict";i.r(e);var a=i(3),r=i.n(a),n=i(16),c=i.n(n),o=(i(23),i(1)),h=i.n(o),s=i(0),l=function(t){return Object(s.jsx)("div",{style:{borderRadius:"4px",height:"4px",width:"100%",backgroundColor:"#363b44"},children:Object(s.jsx)("div",{style:{borderRadius:"4px",height:"4px",width:t.length+"%",backgroundColor:t.color||"#FFD369"}})})},d=i(6),g=i(18),u=i(17),w=i.n(u),p=Object(a.createContext)({game:null}),m=i(7),b=function(t,e){var i=t.width,a=t.height;if(i<14||a<10)return function(t){var e=t.width,i=t.height;return Array.from(Array(e*i),(function(){return Math.random()<.2})).map((function(t,i){var a=Math.trunc(i/e);return{w:i-a*e,h:a,v:t}})).filter((function(t){return t.v})).map((function(t){return{width:t.w,height:t.h}}))}(t);var r=Math.floor(3*Math.random()),n=r+2,c=r+2,o=Array.from(Array(4),(function(t,e){var a={height:n,width:c};switch(e){case 0:a.width=i-a.width-2;break;case 1:a.width=i-a.width-3;break;case 2:a.width=i-a.width-11;break;case 3:a.width=i-a.width-12}return a})),h=Array.from(Array(7),(function(t,e){var a={height:n+1,width:c};switch(e){case 0:a.width=i-a.width-1;break;case 1:a.width=i-a.width-4;break;case 2:a.width=i-a.width-6;break;case 3:a.width=i-a.width-7;break;case 4:a.width=i-a.width-8;break;case 5:a.width=i-a.width-10;break;case 6:a.width=i-a.width-13}return a})),s=o.map((function(t){return Object(d.a)(Object(d.a)({},t),{},{height:t.height+2})})),l=[].concat(Object(m.a)(o),Object(m.a)(h),Object(m.a)(s)),g=l.sort((function(t,e){return e.width-t.width}))[0].width-Math.floor(9*Math.random()),u=l.sort((function(t,e){return t.height-e.height}))[0].height,w={width:g+u-a<0?0:g+u-a-1,height:a-g<0?a-6:g+u},p=Array.from(Array(5),(function(t,e){var i=Object(d.a)({},w);switch(e){case 1:i.width=w.width+1;break;case 2:i.width=w.width+2;break;case 3:i.width=w.width+2,i.height=w.height+1;break;case 4:i.width=w.width+1,i.height=w.height+2}return i}));return e?p:[].concat(Object(m.a)(l),Object(m.a)(p))},j=i(11),f=i.n(j);function x(t){var e=Object(a.useRef)(null),i=Object(a.useContext)(p).game,r=function(t,i){if(e.current){var a=e.current.getContext("2d");if(a)for(var r=0;r<i.height;r++)for(var n=0;n<i.width;n++){var c=t[r][n];a.fillStyle=c?"#2d3541":"#222831";var o=10*n,h=10*r;a.fillRect(o,h,10,10)}}};return Object(a.useEffect)((function(){if(i){var t={width:Math.floor(window.innerWidth/10),height:Math.floor(window.innerHeight/10)};r(i.cells,t);var e=setInterval((function(){return r(i.add(function(t){var e=t.width,i=t.height,a=Math.floor(Math.random()*i);return Math.random()>.5?Array.from(Array(5),(function(t,e){var i={width:2,height:a};switch(e){case 1:i.width=i.width+1;break;case 2:i.width=i.width+2;break;case 3:i.width=i.width+2,i.height=i.height+1;break;case 4:i.width=i.width+1,i.height=i.height+2}return i})):Array.from(Array(5),(function(t,i){var r={width:e-4,height:a};switch(i){case 1:r.width=r.width+1;break;case 2:r.width=r.width+2;break;case 3:r.height=r.height+1;break;case 4:r.width=r.width+1,r.height=r.height+2}return r}))}(t)),t)}),15e3),a=setInterval((function(){return r(i.next(),t)}),100);return function(){clearInterval(e),clearInterval(a),window.location.reload()}}}),[i,r]),Object(s.jsx)("canvas",{ref:e,width:t.width,height:t.height})}var v=function(t){var e=t.children,i=Object(a.useState)(null),r=Object(g.a)(i,2),n=r[0],c=r[1];Object(a.useEffect)((function(){var t={width:Math.floor(window.innerWidth/10),height:Math.floor(window.innerHeight/10)},e=new w.a(Object(d.a)(Object(d.a)({},t),{},{initialCell:b(t)}));return c(e),function(){c(null)}}),[]);return Object(s.jsx)(p.Provider,{value:{game:n},children:Object(s.jsxs)("div",{className:f.a.main,onClick:function(t){var e=Math.floor(t.clientX/10),i=Math.floor(t.clientY/10);n&&n.add(function(t,e){return Math.random()>.5?Array.from(Array(5),(function(i,a){var r={width:Math.max(t,2),height:e};switch(a){case 1:r.width=r.width+1;break;case 2:r.width=r.width+2;break;case 3:r.width=r.width+2,r.height=r.height+1;break;case 4:r.width=r.width+1,r.height=r.height+2}return r})):Array.from(Array(5),(function(i,a){var r={width:t,height:e};switch(a){case 1:r.width=r.width+1;break;case 2:r.width=r.width+2;break;case 3:r.height=r.height+1;break;case 4:r.width=r.width+1,r.height=r.height+2}return r}))}(e,i))},children:[Object(s.jsx)("div",{className:f.a.game,children:window&&Object(s.jsx)(x,{height:window.innerHeight,width:window.innerWidth})}),Object(s.jsx)("div",{className:f.a.content,children:e})]})})},O=i(5),_=i(4),k=[{title:"TypeScript",logo:"/images/min-ts.png",width:20,height:20,line:92},{title:"JavaScript",logo:"/images/min-js.png",width:20,height:20,line:98},{title:"ReactJS",logo:"/images/min-react.png",width:20,height:20,line:90},{title:"NextJs",logo:"/images/min-next.png",width:20,height:20,line:90},{title:"Saas",logo:"/images/min-sass.png",width:18,height:20,line:92},{title:"MongoDB",logo:"/images/min-mongo.png",width:6.7,height:20,line:95},{title:"NodeJs",logo:"/images/min-node2.png",width:18,height:20,line:98},{title:"Googling",logo:"/images/min-google.png",width:20,height:20,line:100}],y=[{font:_.a,title:"gameoflife.js",description:"JavaScript Library for John Conway's popular Game of Life",url:"https://github.com/0wx/gameoflife.js",language:"TypeScript",color:"#2b7489"},{font:_.a,title:"seed-to-color",description:"JavaScript Library for Generating random Color using seed that you prefered",url:"https://github.com/0wx/seed-to-color",language:"TypeScript",color:"#2b7489"},{font:_.a,title:"medium-scrape",description:"JavaScript Library to get content from medium.com",url:"https://github.com/0wx/medium-scrape",language:"JavaScript",color:"#f1e05a"},{font:_.a,title:"imgbox",description:"Unofficial library to upload multiple images to imgbox.com",url:"https://github.com/0wx/imgbox",language:"TypeScript",color:"#2b7489"},{font:_.d,title:"sikadu-bot",description:"Bot untuk mengakses sikadu.unwahas.ac.id menggunakan framework Telegraf",url:"https://github.com/0wx/sikadu-bot",language:"JavaScript",color:"#f1e05a"},{font:_.a,title:"zippy-next",description:"Unofficial library for upload and download files from zippyshare easly",url:"https://github.com/0wx/zippy-next",language:"JavaScript",color:"#f1e05a"},{font:_.c,title:"same-stream",description:"Website to stream your favorite Anime",url:"https://stream.yui.pw",language:"TypeScript",color:"#2b7489"},{font:_.a,title:"portfolio",description:"My personal portfolio website",url:"https://github.com/0wx/portfolio",language:"TypeScript",color:"#2b7489"}],A=[{logo:O.b,url:"https://github.com/0wx"},{logo:O.g,url:"https://www.npmjs.com/~0wx"},{logo:O.f,url:"https://0wx.medium.com"},{logo:O.a,url:"https://dev.to/0wx"},{logo:O.d,url:"https://news.ycombinator.com/user?id=0wx"},{logo:O.c,url:"https://gitlab.com/0wx"},{logo:O.e,url:"https://keybase.io/00wx"},{logo:_.b,url:"mailto:hai@0wx.dev"}],N=i(15),M=i(12);var S=function(){return Object(s.jsx)(v,{children:Object(s.jsxs)("div",{className:h.a.content,children:[Object(s.jsx)("div",{className:h.a.head,children:Object(s.jsxs)("div",{className:h.a.picture,children:[Object(s.jsx)("img",{width:"100px",height:"100px",src:"/images/profile.png",alt:"Gilang Ramadhan"}),Object(s.jsxs)("div",{className:h.a.greet,children:[Object(s.jsx)("span",{className:h.a.greetings,children:"Hello! My name is"}),Object(s.jsx)("span",{className:h.a.name,children:"Gilang Ramadhan"})]})]})}),Object(s.jsxs)("div",{className:h.a.info,children:[Object(s.jsxs)("div",{className:h.a.infoBox,children:[Object(s.jsx)("div",{className:h.a.sectionTitle,children:"About Me"}),Object(s.jsx)("p",{className:h.a.aboutMe,children:"Self-taught programmer from Semarang, Indonesia. For more than ".concat(Math.floor((Date.now()-1553990563068)/31536e6)," Years I'm learning Web development, Automation, Blockchain, and so much more.")})]}),Object(s.jsxs)("div",{className:h.a.infoBox,children:[Object(s.jsx)("div",{className:h.a.sectionTitle,children:"Tech Stack"}),Object(s.jsx)("ul",{className:h.a.techStackList,children:k.map((function(t){return Object(s.jsxs)("li",{children:[Object(s.jsx)("div",{className:h.a.logo,children:Object(s.jsx)("img",{src:t.logo,width:t.width,height:t.height,alt:t.title})}),Object(s.jsxs)("div",{className:h.a.techDetail,children:[Object(s.jsx)("span",{children:t.title}),Object(s.jsx)(l,{color:"#007acc",length:t.line})]})]},Object(M.a)())}))})]}),Object(s.jsxs)("div",{className:h.a.infoBox,children:[Object(s.jsx)("div",{className:h.a.sectionTitle,children:"Project"}),Object(s.jsx)("div",{className:h.a.projectBox,children:y.map((function(t){return Object(s.jsxs)("div",{className:h.a.project,children:[Object(s.jsxs)("div",{className:h.a.projectTitle,children:[Object(s.jsx)(N.a,{className:h.a.fa,icon:t.font}),Object(s.jsx)("a",{href:t.url,children:t.title})]}),Object(s.jsx)("div",{className:h.a.ProjectDescription,children:t.description}),Object(s.jsxs)("div",{className:h.a.language,children:[Object(s.jsx)("div",{style:{backgroundColor:t.color,width:14,height:14,borderRadius:"100%"}}),Object(s.jsx)("span",{children:t.language})]})]},Object(M.a)())}))})]}),Object(s.jsxs)("div",{className:h.a.infoBox,children:[Object(s.jsx)("div",{className:h.a.sectionTitle}),Object(s.jsx)("div",{className:h.a.projectBox,children:Object(s.jsx)("div",{className:h.a.link,children:A.map((function(t){return Object(s.jsx)("a",{href:t.url,children:Object(s.jsx)(N.a,{icon:t.logo,color:"#eee",size:"2x"})},Object(M.a)())}))})})]})]})]})})},T=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,32)).then((function(e){var i=e.getCLS,a=e.getFID,r=e.getFCP,n=e.getLCP,c=e.getTTFB;i(t),a(t),r(t),n(t),c(t)}))};c.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(S,{})}),document.getElementById("root")),T()}},[[31,1,2]]]);
//# sourceMappingURL=main.c40aa486.chunk.js.map