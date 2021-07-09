(this["webpackJsonpusa-nfc-web-app"]=this["webpackJsonpusa-nfc-web-app"]||[]).push([[12],{734:function(e,t,r){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,n=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(s){n=!0,o=s}finally{try{a||null==c.return||c.return()}finally{if(n)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return n}))},796:function(e,t,r){},864:function(e,t,r){"use strict";r.r(t);var a=r(734),n=r(0),o=r(21),i=r(731),c=r(732),s=r(62),l=r(729),u=r(2),d=r(18),b=(r(37),r(50)),m=r(134),f=r(103),j=r(131),p=r(105),g=n.forwardRef((function(e,t){var r=e.classes,a=e.className,o=e.color,i=void 0===o?"primary":o,c=e.value,s=e.valueBuffer,l=e.variant,f=void 0===l?"indeterminate":l,j=Object(d.a)(e,["classes","className","color","value","valueBuffer","variant"]),g=Object(p.a)(),h={},O={bar1:{},bar2:{}};if("determinate"===f||"buffer"===f)if(void 0!==c){h["aria-valuenow"]=Math.round(c),h["aria-valuemin"]=0,h["aria-valuemax"]=100;var y=c-100;"rtl"===g.direction&&(y=-y),O.bar1.transform="translateX(".concat(y,"%)")}else 0;if("buffer"===f)if(void 0!==s){var x=(s||0)-100;"rtl"===g.direction&&(x=-x),O.bar2.transform="translateX(".concat(x,"%)")}else 0;return n.createElement("div",Object(u.a)({className:Object(b.a)(r.root,r["color".concat(Object(m.a)(i))],a,{determinate:r.determinate,indeterminate:r.indeterminate,buffer:r.buffer,query:r.query}[f]),role:"progressbar"},h,{ref:t},j),"buffer"===f?n.createElement("div",{className:Object(b.a)(r.dashed,r["dashedColor".concat(Object(m.a)(i))])}):null,n.createElement("div",{className:Object(b.a)(r.bar,r["barColor".concat(Object(m.a)(i))],("indeterminate"===f||"query"===f)&&r.bar1Indeterminate,{determinate:r.bar1Determinate,buffer:r.bar1Buffer}[f]),style:O.bar1}),"determinate"===f?null:n.createElement("div",{className:Object(b.a)(r.bar,("indeterminate"===f||"query"===f)&&r.bar2Indeterminate,"buffer"===f?[r["color".concat(Object(m.a)(i))],r.bar2Buffer]:r["barColor".concat(Object(m.a)(i))]),style:O.bar2}))})),h=Object(f.a)((function(e){var t=function(t){return"light"===e.palette.type?Object(j.d)(t,.62):Object(j.a)(t,.5)},r=t(e.palette.primary.main),a=t(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:r},colorSecondary:{backgroundColor:a},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(a," 0%, ").concat(a," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(g),O=(r(796),r(189)),y=r(190),x=r(15),v=Object(l.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));t.default=function(){var e=v(),t=Object(O.b)(),r=Object(n.useState)(!1),l=Object(a.a)(r,2),u=l[0],d=l[1],b=Object(n.useState)("admin"),m=Object(a.a)(b,2),f=m[0],j=m[1],p=Object(n.useState)(""),g=Object(a.a)(p,2),k=(g[0],g[1]),S=Object(n.useState)("12345678!"),w=Object(a.a)(S,2),C=w[0],N=w[1],I=Object(n.useState)(""),P=Object(a.a)(I,2),B=(P[0],P[1]),E=Object(o.g)(),A=function(){d(!0),s.e.post("user/group/check/",JSON.stringify({username:f})).then((function(e){"True"==e.data.success&&(k(e.data.group),console.log(JSON.stringify({email:f,password:C,group:e.data.group})),s.e.post("login/",JSON.stringify({username:f,password:C,group:e.data.group})).then((function(r){console.log(r.data),"True"===r.data.success&&(console.log(r.data),localStorage.setItem(s.f,r.data.token),localStorage.setItem("user_id",r.data.user_id),localStorage.setItem("group",e.data.group),t(Object(y.d)(e.data.group)),E.push({pathname:"/dashboard",user:{email:f,password:C}}))})).catch((function(e){B("Please provide correct credentials"),console.log(e),d(!1)})))}))};return Object(x.jsxs)(x.Fragment,{children:[null!==localStorage.getItem(s.f)&&Object(x.jsx)(o.a,{to:"/dashboard"}),Object(x.jsx)("div",{className:"c-app c-default-layout overlay-hero flex-row align-items-center",children:Object(x.jsx)(i.m,{children:Object(x.jsx)(i.O,{className:"justify-content-center",children:Object(x.jsx)(i.l,{md:"5",children:Object(x.jsx)(i.h,{children:Object(x.jsx)(i.e,{className:"p-4",children:Object(x.jsx)(i.f,{children:Object(x.jsxs)(i.u,{children:[Object(x.jsx)("h1",{children:"Sign In"}),Object(x.jsx)("p",{className:"text-muted",children:"Sign In to your account"}),Object(x.jsxs)(i.E,{className:"mb-3",children:[Object(x.jsx)(i.G,{children:Object(x.jsx)(i.H,{children:Object(x.jsx)(c.b,{name:"cil-user"})})}),Object(x.jsx)(i.B,{value:f,onChange:function(e){return j(e.target.value)},type:"email",placeholder:"Email",autoComplete:"email"})]}),Object(x.jsxs)(i.E,{className:"mb-4",children:[Object(x.jsx)(i.G,{children:Object(x.jsx)(i.H,{children:Object(x.jsx)(c.b,{name:"cil-lock-locked"})})}),Object(x.jsx)(i.B,{onKeyDown:function(e){13===e.keyCode&&A()},type:"password",placeholder:"Password",autoComplete:"current-password",onChange:function(e){return N(e.target.value)},value:C})]}),Object(x.jsx)(i.O,{children:Object(x.jsx)(i.l,{xs:"12",md:"12",children:u?Object(x.jsxs)("div",{className:e.root,children:[" ",Object(x.jsx)(h,{color:"primary"})," "]}):Object(x.jsx)(i.d,{color:"primary",className:"px-4 custom-button",onClick:A,children:"Login"})})})]})})})})})})})})]})}}}]);
//# sourceMappingURL=12.fc8f8d1b.chunk.js.map