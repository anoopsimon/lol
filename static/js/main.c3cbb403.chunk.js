(this.webpackJsonplol=this.webpackJsonplol||[]).push([[0],{19:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(5),o=n.n(s),i=n(4),a=n.n(i),l=n(6),u=n(7),j=n(8),d=n(10),h=n(9),p=n(2),b=(n(17),n(0)),v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).renderContent=function(){var e=Object(b.jsxs)("h1",{children:[" ",r.state.output," "]});return p.isMobile?Object(b.jsx)("div",{children:Object(b.jsx)(p.MobileView,{children:e})}):p.isBrowser?Object(b.jsx)("div",{children:Object(b.jsx)(p.BrowserView,{children:e})}):Object(b.jsx)("h1",{children:"This device is not supported"})},r.componentDidMount=Object(l.a)(a.a.mark((function e(){var t,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="","https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=racist",e.prev=2,r.setState({loading:!0}),e.next=6,fetch("https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=racist");case 6:return n=e.sent,e.next=9,n.json();case 9:c=e.sent,t=c.setup?"".concat(c.setup," ... ").concat(c.delivery):c.joke,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log("error thrown",e.t0);case 16:return e.prev=16,r.setState({output:t,loading:!1}),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[2,13,16,19]])}))),r.state={output:"",loading:!0},r}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:this.renderContent()})}}]),n}(r.Component);o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.c3cbb403.chunk.js.map