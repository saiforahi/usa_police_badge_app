(this["webpackJsonpusa-nfc-web-app"]=this["webpackJsonpusa-nfc-web-app"]||[]).push([[8],{643:function(e,t,c){"use strict";c.d(t,"b",(function(){return s})),c.d(t,"a",(function(){return o}));var a=c(649),n=c.n(a),r="http://localhost:8000/",s="access_token",o=n.a.create({baseURL:r,timeout:1e5,headers:{Authorization:"Bearer ".concat(localStorage.getItem(s)),"Content-Type":"application/json"}});n.a.create({baseURL:r,timeout:1e5,headers:{Authorization:"Bearer ".concat(localStorage.getItem(s)),"Content-Type":"multipart/form-data"}});o.interceptors.request.use((function(e){var t=localStorage.getItem(s);return t&&(e.headers.Authorization="Bearer "+t),e}),(function(e){return Promise.reject(e)}));n.a.create({baseURL:r,timeout:1e5,headers:{"Content-Type":"application/json"}}),n.a.create({timeout:1e4}),n.a.create({timeout:1e4})},714:function(e,t,c){"use strict";c.r(t);var a=c(644),n=c(1),r=c(20),s=c(638),o=c(639),i=c(643),l=(c(697),c(715)),j=c(728),u=c(17),b=Object(l.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));t.default=function(){var e=b(),t=Object(n.useState)(!1),c=Object(a.a)(t,2),l=c[0],d=c[1],m=Object(n.useState)("admin@mail.com"),h=Object(a.a)(m,2),p=h[0],O=h[1],x=Object(n.useState)("123456"),g=Object(a.a)(x,2),f=g[0],y=g[1],w=Object(n.useState)(""),S=Object(a.a)(w,2),v=(S[0],S[1],Object(r.g)()),k=function(){d(!0),console.log(JSON.stringify({email:p,password:f})),setTimeout((function(){d(!1),v.push({pathname:"/dashboard",user:{email:p,password:f}})}),4e3)};return Object(u.jsxs)(u.Fragment,{children:[null!==localStorage.getItem(i.b)&&Object(u.jsx)(r.a,{to:"/dashboard"}),Object(u.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(u.jsx)(s.l,{children:Object(u.jsx)(s.K,{className:"justify-content-center",children:Object(u.jsx)(s.k,{md:"5",children:Object(u.jsx)(s.i,{children:Object(u.jsx)(s.f,{className:"p-4",children:Object(u.jsx)(s.g,{children:Object(u.jsxs)(s.t,{children:[Object(u.jsx)("h1",{children:"Sign In"}),Object(u.jsx)("p",{className:"text-muted",children:"Sign In to your account"}),Object(u.jsxs)(s.B,{className:"mb-3",children:[Object(u.jsx)(s.D,{children:Object(u.jsx)(s.E,{children:Object(u.jsx)(o.b,{name:"cil-user"})})}),Object(u.jsx)(s.A,{value:p,onChange:function(e){return O(e.target.value)},type:"email",placeholder:"Email",autoComplete:"email"})]}),Object(u.jsxs)(s.B,{className:"mb-4",children:[Object(u.jsx)(s.D,{children:Object(u.jsx)(s.E,{children:Object(u.jsx)(o.b,{name:"cil-lock-locked"})})}),Object(u.jsx)(s.A,{onKeyDown:function(e){13===e.keyCode&&k()},type:"password",placeholder:"Password",autoComplete:"current-password",onChange:function(e){return y(e.target.value)},value:f})]}),Object(u.jsx)(s.K,{children:Object(u.jsx)(s.k,{xs:"12",md:"12",children:l?Object(u.jsxs)("div",{className:e.root,children:[" ",Object(u.jsx)(j.a,{color:"primary"})," "]}):Object(u.jsx)(s.e,{color:"primary",className:"px-4",onClick:k,children:"Login"})})})]})})})})})})})})]})}}}]);
//# sourceMappingURL=8.7e0b416f.chunk.js.map