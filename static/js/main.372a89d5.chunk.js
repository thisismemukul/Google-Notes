(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(33),r=n.n(a),i=(n(94),n(16)),s=n(13),j=(n(95),n(96),n(151)),o=n(152),l=n(154),b=n(155),u=n(156),O=n(157),h=n(158),x=n(78),d=n.n(x),f=n(144),m=n(1),p=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(j.a,{sx:{height:"10vh"},children:Object(m.jsx)(o.a,{position:"static",children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(b.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(m.jsx)(d.a,{})}),Object(m.jsx)(u.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Notes"}),Object(m.jsx)(O.a,{href:"https://www.github.com/thisismemukul",color:"#ffffff",children:Object(m.jsx)(h.a,{color:"inherit",children:Object(m.jsx)(f.a,{})})})]})})})})},v=n(5),g=n(68),w=n(159),C=n(160),k=n(161),F=n(148),N=n(162),y=n(146),z=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)({title:"",content:""}),j=Object(s.a)(i,2),o=j[0],l=j[1],b=function(e){var t=e.target,n=t.name,c=t.value;l((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(v.a)({},n,c))}))};return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(w.a,{onDoubleClick:function(){r(!1)},className:"card",sx:{minWidth:275},children:[Object(m.jsx)(C.a,{children:Object(m.jsxs)("form",{children:[a?Object(m.jsx)(k.a,{name:"title",type:"text",value:o.title,onChange:b,placeholder:"Title",autoComplete:"off"}):null,Object(m.jsx)("br",{}),Object(m.jsx)(F.a,{name:"content",placeholder:"Write a Note",value:o.content,onClick:function(){r(!0)},onChange:b,rows:"30",columns:"50",variant:"standard",autoComplete:"off"})]})}),a?Object(m.jsx)(N.a,{children:Object(m.jsx)(h.a,{onClick:function(){e.passnote(o),l({title:"",content:""})},size:"small",variant:"outlined",color:"success",children:Object(m.jsx)(y.a,{})})}):null]})})},I=n(147),S=function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(w.a,{className:"notes",sx:{minWidth:150},children:[Object(m.jsxs)(C.a,{children:[Object(m.jsx)(u.a,{variant:"h5",component:"div",children:e.title}),Object(m.jsxs)(u.a,{variant:"body2",children:[e.content,Object(m.jsx)("br",{})]})]}),Object(m.jsx)(N.a,{children:Object(m.jsx)(h.a,{onClick:function(){e.deleteItem(e.id)},size:"small",variant:"outlined",color:"error",children:Object(m.jsx)(I.a,{})})})]})})},W=function(){var e=(new Date).getFullYear();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("p",{className:"text-center text-white footer",children:["Copyright @ ",e]})})},D=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=function(e){a((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{}),Object(m.jsx)(z,{passnote:function(e){a((function(t){return[].concat(Object(i.a)(t),[e])}))}}),n.map((function(e,t){return Object(m.jsx)(S,{id:t,title:e.title,content:e.content,deleteItem:r},t)})),Object(m.jsx)(W,{})]})};r.a.render(Object(m.jsx)(D,{}),document.getElementById("root"))},94:function(e,t,n){},96:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.372a89d5.chunk.js.map