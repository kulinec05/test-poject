(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[7],{246:function(e,t,c){"use strict";var n=c(5),a=c(4),r=c(25),o=c(0),i=c(6),s=c.n(i),l=c(441),u=c(69),d=function(e,t){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(c[n[a]]=e[n[a]])}return c};var f=["xs","sm","md","lg","xl","xxl"],b=o.forwardRef((function(e,t){var c,i=o.useContext(u.b),b=i.getPrefixCls,p=i.direction,m=o.useContext(l.a),j=m.gutter,O=m.wrap,h=m.supportFlexGap,y=e.prefixCls,x=e.span,v=e.order,g=e.offset,w=e.push,C=e.pull,N=e.className,E=e.children,P=e.flex,A=e.style,k=d(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),R=b("col",y),S={};f.forEach((function(t){var c,o={},i=e[t];"number"===typeof i?o.span=i:"object"===Object(r.a)(i)&&(o=i||{}),delete k[t],S=Object(a.a)(Object(a.a)({},S),(c={},Object(n.a)(c,"".concat(R,"-").concat(t,"-").concat(o.span),void 0!==o.span),Object(n.a)(c,"".concat(R,"-").concat(t,"-order-").concat(o.order),o.order||0===o.order),Object(n.a)(c,"".concat(R,"-").concat(t,"-offset-").concat(o.offset),o.offset||0===o.offset),Object(n.a)(c,"".concat(R,"-").concat(t,"-push-").concat(o.push),o.push||0===o.push),Object(n.a)(c,"".concat(R,"-").concat(t,"-pull-").concat(o.pull),o.pull||0===o.pull),Object(n.a)(c,"".concat(R,"-rtl"),"rtl"===p),c))}));var G=s()(R,(c={},Object(n.a)(c,"".concat(R,"-").concat(x),void 0!==x),Object(n.a)(c,"".concat(R,"-order-").concat(v),v),Object(n.a)(c,"".concat(R,"-offset-").concat(g),g),Object(n.a)(c,"".concat(R,"-push-").concat(w),w),Object(n.a)(c,"".concat(R,"-pull-").concat(C),C),c),N,S),D={};if(j&&j[0]>0){var F=j[0]/2;D.paddingLeft=F,D.paddingRight=F}if(j&&j[1]>0&&!h){var T=j[1]/2;D.paddingTop=T,D.paddingBottom=T}return P&&(D.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(P),!1!==O||D.minWidth||(D.minWidth=0)),o.createElement("div",Object(a.a)({},k,{style:Object(a.a)(Object(a.a)({},D),A),className:G,ref:t}),E)}));b.displayName="Col",t.a=b},247:function(e,t,c){"use strict";var n,a=c(4),r=c(5),o=c(25),i=c(7),s=c(0),l=c(6),u=c.n(l),d=c(69),f=c(441),b=c(53),p=c(168),m=c(56),j=(c(437),function(){if(!Object(m.a)()||!window.document.documentElement)return!1;if(void 0!==n)return n;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),n=1===e.scrollHeight,document.body.removeChild(e),n}),O=function(e,t){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(c[n[a]]=e[n[a]])}return c},h=(Object(b.a)("top","middle","bottom","stretch"),Object(b.a)("start","end","center","space-around","space-between"),s.forwardRef((function(e,t){var c,n=e.prefixCls,l=e.justify,b=e.align,m=e.className,h=e.style,y=e.children,x=e.gutter,v=void 0===x?0:x,g=e.wrap,w=O(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),C=s.useContext(d.b),N=C.getPrefixCls,E=C.direction,P=s.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),A=Object(i.a)(P,2),k=A[0],R=A[1],S=function(){var e=s.useState(!1),t=Object(i.a)(e,2),c=t[0],n=t[1];return s.useEffect((function(){n(j())}),[]),c}(),G=s.useRef(v);s.useEffect((function(){var e=p.a.subscribe((function(e){var t=G.current||0;(!Array.isArray(t)&&"object"===Object(o.a)(t)||Array.isArray(t)&&("object"===Object(o.a)(t[0])||"object"===Object(o.a)(t[1])))&&R(e)}));return function(){return p.a.unsubscribe(e)}}),[]);var D=N("row",n),F=function(){var e=[0,0];return(Array.isArray(v)?v:[v,0]).forEach((function(t,c){if("object"===Object(o.a)(t))for(var n=0;n<p.b.length;n++){var a=p.b[n];if(k[a]&&void 0!==t[a]){e[c]=t[a];break}}else e[c]=t||0})),e}(),T=u()(D,(c={},Object(r.a)(c,"".concat(D,"-no-wrap"),!1===g),Object(r.a)(c,"".concat(D,"-").concat(l),l),Object(r.a)(c,"".concat(D,"-").concat(b),b),Object(r.a)(c,"".concat(D,"-rtl"),"rtl"===E),c),m),W={},B=F[0]>0?F[0]/-2:void 0,I=F[1]>0?F[1]/-2:void 0;if(B&&(W.marginLeft=B,W.marginRight=B),S){var J=Object(i.a)(F,2);W.rowGap=J[1]}else I&&(W.marginTop=I,W.marginBottom=I);var L=Object(i.a)(F,2),z=L[0],H=L[1],M=s.useMemo((function(){return{gutter:[z,H],wrap:g,supportFlexGap:S}}),[z,H,g,S]);return s.createElement(f.a.Provider,{value:M},s.createElement("div",Object(a.a)({},w,{className:T,style:Object(a.a)(Object(a.a)({},W),h),ref:t}),y))})));h.displayName="Row";t.a=h},437:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(56),a=function(e){if(Object(n.a)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],c=window.document.documentElement;return t.some((function(e){return e in c.style}))}return!1};function r(e,t){return Array.isArray(e)||void 0===t?a(e):function(e,t){if(!a(e))return!1;var c=document.createElement("div"),n=c.style[e];return c.style[e]=t,c.style[e]!==n}(e,t)}},441:function(e,t,c){"use strict";var n=c(0),a=Object(n.createContext)({});t.a=a},463:function(e,t,c){"use strict";var n=c(247);t.a=n.a},464:function(e,t,c){"use strict";var n=c(246);t.a=n.a},531:function(e,t,c){"use strict";c.r(t);c(0);var n=c(463),a=c(464),r=c(104),o=c(416),i=c(21),s=c(46),l=c(169),u=c(37),d=c(3);t.default=function(){var e=Object(u.c)((function(e){return e.theme.currentTheme}));return Object(d.jsx)("div",{className:"h-100 ".concat("light"===e?"bg-white":""),children:Object(d.jsxs)("div",{className:"container-fluid d-flex flex-column justify-content-between h-100 px-md-4 pb-md-4 pt-md-1",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===e?"logo.png":"logo-white.png"),alt:""})}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(n.a,{align:"middle",children:[Object(d.jsxs)(a.a,{xs:24,sm:24,md:8,children:[Object(d.jsx)("h1",{className:"font-weight-bold mb-4 display-4",children:"Page not found"}),Object(d.jsx)("p",{className:"font-size-md mb-4",children:"We've noticed you lost your way, no worries, we will help you to found the correct path."}),Object(d.jsx)(s.b,{to:"/app",children:Object(d.jsx)(r.a,{type:"primary",icon:Object(d.jsx)(o.a,{}),children:"Go back"})})]}),Object(d.jsx)(a.a,{xs:24,sm:24,md:{span:14,offset:2},children:Object(d.jsx)("img",{className:"img-fluid mt-md-0 mt-4",src:"/img/others/img-20.png",alt:""})})]})}),Object(d.jsxs)(l.a,{mobileFlex:!1,justifyContent:"between",children:[Object(d.jsxs)("span",{children:["Copyright  \xa9  ","".concat((new Date).getFullYear())," ",Object(d.jsx)("span",{className:"font-weight-semibold",children:"".concat(i.b)})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("a",{className:"text-gray",href:"/#",onClick:function(e){return e.preventDefault()},children:"Term & Conditions"}),Object(d.jsx)("span",{className:"mx-2 text-muted",children:" | "}),Object(d.jsx)("a",{className:"text-gray",href:"/#",onClick:function(e){return e.preventDefault()},children:"Privacy & Policy"})]})]})]})})}}}]);
//# sourceMappingURL=7.cf68ee35.chunk.js.map