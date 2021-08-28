(this["webpackJsonpword-game"]=this["webpackJsonpword-game"]||[]).push([[0],{24:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(17),i=n.n(a),o=(n(24),n(7)),s=n.n(o),u=n(18),l=n(2),j=n(19),d=n.n(j),h=(n(44),n(8)),b=n(0),f=function(e){var t=e.words,n=e.remainingWords;return Object(b.jsxs)("div",{className:"list-wrapper",children:[Object(b.jsx)("h2",{children:"Find Words"}),Object(b.jsx)("ol",{className:"list",children:t.map((function(e){return Object(b.jsx)("li",{style:{textDecoration:n.includes(e)?"none":"line-through"},children:e},e)}))})]})};var O=function(e){var t=e.level,n=e.data,r=e.onLevelComplete,a=Object(c.useState)(-1),i=Object(l.a)(a,2),o=i[0],s=i[1],u=Object(c.useState)(-1),j=Object(l.a)(u,2),d=j[0],O=j[1],v=Object(c.useState)(!1),m=Object(l.a)(v,2),p=m[0],x=m[1],g=n.character_grid[0].length,w=n.character_grid.flat(),M=w.map((function(e,t){return t})),S=Object(c.useState)([]),N=Object(l.a)(S,2),k=N[0],y=N[1],E=Object(c.useState)(Object.values(n.word_locations)),C=Object(l.a)(E,2),P=C[0],_=C[1];Object(c.useEffect)((function(){y([]),_(Object.values(n.word_locations))}),[n]);var L=p?function(e,t,n,c){var r=e%n,a=Math.trunc(e/n),i=t%n,o=Math.trunc(t/n);switch(function(e,t,n,c){return e!==n?t===c?"horizontal":"diagonal":"vertical"}(r,a,i,o)){case"horizontal":var s=Math.min(e,t),u=Math.max(e,t);return c.slice(s,u+1);case"vertical":for(var l=[],j=Math.min(a,o),d=Math.max(a,o),h=j;h<=d;h++)l.push(n*h+r);return l.sort((function(e,t){return e-t}));case"diagonal":for(var b=[],f=Math.min(a,o),O=Math.max(a,o),v=Math.min(r,i),m=Math.max(r,i),p=Math.max(m-v,O-f),x=o>a?1:-1,g=i>r?1:-1,w=0;w<=p;w++){var M=w*g,S=e+n*w*x+M;if(r+M>=n||r+M<0)break;if(S>c.length||S<0)break;b.push(S)}return b.sort((function(e,t){return e-t}))}}(d,o,g,M):[],T=function(){x(!1),O(-1),function(){var e=L.flatMap((function(e){return[e%g,Math.trunc(e/g)]})).join(",");if(e in n.word_locations){var t=n.word_locations[e];y((function(e){return[].concat(Object(h.a)(e),Object(h.a)(L))}));var c=P.filter((function(e){return e!==t}));_(c),0===c.length&&(null===r||void 0===r||r(),console.log("match!",n.word_locations[e]))}}()},W=function(e){var t=e.touches[0],n=document.elementFromPoint(t.clientX,t.clientY).dataset.index;if(null!=n){var c=Number(n);s(c)}},z=function(e){return k.includes(e)?"match":L.includes(e)?"selected":void 0};return Object(b.jsxs)("div",{onPointerUp:T,onTouchEnd:T,className:"game-wrapper",children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("h2",{children:["Level ",t+1,". Source Word:"," ",Object(b.jsx)("span",{style:{textTransform:"capitalize"},children:n.word})]}),Object(b.jsx)("div",{className:"game",style:{"--length":g},onContextMenu:function(e){return e.preventDefault()},children:w.map((function(e,t){return Object(b.jsx)("div",{onPointerDown:function(){return function(e){x(!0),O(e),s(e)}(t)},onTouchStart:function(){x(!0),s(t)},onMouseOver:function(){return s(t)},onTouchMove:W,"data-index":t,className:z(t),style:{"--index":t},children:e},e+t)}))},n.word)]}),Object(b.jsx)(f,{words:Object.values(n.word_locations),remainingWords:P})]})},v=function(e){var t=e.onClick;return Object(b.jsxs)("div",{onClick:t,className:"app",children:[Object(b.jsx)("h2",{children:" Play Game! "}),Object(b.jsx)("h3",{children:" Click anywhere to start the game"}),Object(b.jsxs)("a",{className:"src-link",href:"https://meloncode.github.io/react-word-game/",children:[Object(b.jsx)("img",{alt:"Logo",src:"/octocat.png"}),"Source Code"]})]})},m=function(){return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)("img",{className:"hat",width:200,height:200,src:"/hat.svg",alt:"Sombrero"}),Object(b.jsx)("h2",{children:" Congratulations! "}),Object(b.jsx)("h3",{children:" You just beat the game. "})]})},p=function(){return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)("h2",{children:" Sorry, landscape mode on mobile is not supported! "}),Object(b.jsx)("h3",{children:" Please turn your screen back :) "})]})},x=function(){return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)("h2",{children:" An error occurred while loading game data :( "}),Object(b.jsx)("h3",{children:"You can try again by reloading page!"})]})},g=function(){return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)("h2",{children:" Loading data... "}),Object(b.jsx)("h3",{children:"Please wait!"})]})},w=function(){return d.a.get("/data/find_challenge.txt").then((function(e){return e.data})).then((function(e){return e.split("\n")})).then((function(e){return e.map((function(e){return JSON.parse(e)}))}))},M=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),o=Object(l.a)(i,2),j=o[0],d=o[1],h=Object(c.useState)(!1),f=Object(l.a)(h,2),M=f[0],S=f[1],N=Object(c.useState)(!1),k=Object(l.a)(N,2),y=k[0],E=k[1],C=Object(c.useState)(!1),P=Object(l.a)(C,2),_=P[0],L=P[1],T=Object(c.useState)(void 0),W=Object(l.a)(T,2),z=W[0],D=W[1],B=Object(c.useState)(0),A=Object(l.a)(B,2),J=A[0],Y=A[1],F=function(){var e=function(){return window.innerWidth>window.innerHeight?"landscape":"portrait"},t=Object(c.useState)(e()),n=Object(l.a)(t,2),r=n[0],a=n[1],i=Object(c.useCallback)((function(){return a((function(){return e()}))}),[]);return Object(c.useEffect)((function(){return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),[i]),r}(),I=function(){var e=r.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e="undefined"===typeof window.navigator?"":navigator.userAgent,t=Boolean(e.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));a(t)}),[]),{isMobile:n}}().isMobile;Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),setTimeout((function(){return d(!0)}),300),e.prev=2,e.next=5,w();case 5:t=e.sent,D(t),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(2),D([]),S(!0),d(!1);case 14:a(!1);case 15:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){document.addEventListener("gesturestart",(function(e){e.preventDefault()}),{passive:!1})}));if(M)return Object(b.jsx)(x,{});if(n)return j?Object(b.jsx)(g,{}):Object(b.jsx)("div",{className:"app"});if(I&&"landscape"===F)return Object(b.jsx)(p,{});if(!y)return Object(b.jsx)(v,{onClick:function(){return E(!0)}});if(_)return Object(b.jsx)(m,{});var G=z[J];return Object(b.jsx)("div",{className:"app",children:z&&Object(b.jsx)(O,{level:J,data:G,onLevelComplete:function(){setTimeout((function(){J<z.length-1?Y((function(e){return e+1})):L(!0)}),1050)}})})};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(M,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.ea80d311.chunk.js.map