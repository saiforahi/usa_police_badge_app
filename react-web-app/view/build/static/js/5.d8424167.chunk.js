(this["webpackJsonpusa-nfc-web-app"]=this["webpackJsonpusa-nfc-web-app"]||[]).push([[5],{821:function(e,t,n){},865:function(e,t,n){"use strict";n.r(t);var c=n(735),s=n(0),a=n.n(s),i=n(732),l=n(733),r=n(189),j=n(51),d=n(736),o=n.n(d),b=(n(821),n(190)),h=n(15);t.default=function(){var e=Object(r.c)((function(e){return e.user.data})),t=Object(s.useState)(),n=Object(c.a)(t,2),d=n[0],u=n[1],x=Object(s.useState)(),O=Object(c.a)(x,2),p=O[0],m=O[1],f=Object(s.useRef)(null),g=Object(s.useState)(""),v=Object(c.a)(g,2),y=v[0],C=v[1],w=Object(s.useState)(""),P=Object(c.a)(w,2),S=P[0],_=P[1],F=Object(s.useState)(""),N=Object(c.a)(F,2),J=N[0],k=N[1],E=Object(s.useState)(""),T=Object(c.a)(E,2),R=T[0],z=T[1],D=Object(s.useState)(""),L=Object(c.a)(D,2),B=L[0],I=L[1],U=Object(s.useState)(""),A=Object(c.a)(U,2),Q=A[0],Y=A[1],H=Object(s.useState)(""),M=Object(c.a)(H,2),q=M[0],G=M[1],K=Object(s.useState)(""),V=Object(c.a)(K,2),W=V[0],X=V[1],Z=Object(s.useState)(""),$=Object(c.a)(Z,2),ee=$[0],te=$[1],ne=Object(s.useState)(""),ce=Object(c.a)(ne,2),se=ce[0],ae=ce[1],ie=Object(r.b)();function le(){_(e.first_name),k(e.last_name),C(e.email),z(e.phone),Y(e.address),I(e.registration),G(e.designation),u(j.b+e.profile_pic),X(e.date_of_birth),te(e.hair),ae(e.eyes)}return a.a.useEffect((function(){le()}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(i.m,{children:Object(h.jsxs)(i.db,{activeTab:"my-details",children:[Object(h.jsxs)(i.P,{variant:"tabs",children:[Object(h.jsx)(i.Q,{children:Object(h.jsx)(i.R,{"data-tab":"my-details",children:"My Details"})}),Object(h.jsx)(i.Q,{children:Object(h.jsx)(i.R,{"data-tab":"organization-details",children:"Organization Details"})})]}),Object(h.jsxs)(i.bb,{children:[Object(h.jsx)(i.cb,{"data-tab":"my-details",children:Object(h.jsx)(i.T,{className:"justify-content-center mt-5",children:Object(h.jsx)(i.l,{xs:"12",md:"6",children:Object(h.jsxs)(i.e,{children:[Object(h.jsx)(i.i,{children:Object(h.jsxs)("h3",{children:["Account detail for ",e.first_name+" "+e.last_name]})}),Object(h.jsx)(i.f,{children:Object(h.jsxs)(i.u,{className:"form-horizontal",children:[Object(h.jsx)(i.T,{className:"justify-content-center",children:Object(h.jsx)(i.B,{onClick:function(){document.getElementById("file").click()},className:"mx-auto",style:{height:"100px",width:"116px",cursor:"pointer"},shape:"rounded",src:d})}),Object(h.jsx)("hr",{}),Object(h.jsx)(i.T,{className:"justify-content-center",children:Object(h.jsx)("input",{type:"file",id:"file",ref:f,style:{display:"none"},onChange:function(e){return t=e.target.files[0],m(t),void u(URL.createObjectURL(t));var t}})}),Object(h.jsxs)(i.v,{row:!0,children:[Object(h.jsx)(i.l,{md:"3",children:Object(h.jsx)(i.J,{htmlFor:"text-input",children:"First Name"})}),Object(h.jsxs)(i.l,{xs:"12",md:"9",children:[Object(h.jsx)(i.C,{type:"text",value:S,onChange:function(e){return _(e.target.value)},id:"text-input",name:"text-input",placeholder:"Text"}),Object(h.jsx)(i.w,{children:"Your first name"})]})]}),Object(h.jsxs)(i.v,{row:!0,children:[Object(h.jsx)(i.l,{md:"3",children:Object(h.jsx)(i.J,{htmlFor:"text-input",children:"Last Name"})}),Object(h.jsxs)(i.l,{xs:"12",md:"9",children:[Object(h.jsx)(i.C,{type:"text",value:J,onChange:function(e){return k(e.target.value)},id:"text-input",name:"text-input",placeholder:"Text"}),Object(h.jsx)(i.w,{children:"Your Last name"})]})]}),Object(h.jsxs)(i.v,{row:!0,children:[Object(h.jsx)(i.l,{md:"3",children:Object(h.jsx)(i.J,{htmlFor:"email-input",children:"Email"})}),Object(h.jsxs)(i.l,{xs:"12",md:"9",children:[Object(h.jsx)(i.C,{type:"email",value:y,onChange:function(e){return C(e.target.value)},id:"email-input",name:"email-input",placeholder:"Enter Email",autoComplete:"email"}),Object(h.jsx)(i.w,{className:"help-block",children:"Please enter your email"})]})]}),Object(h.jsxs)(i.v,{row:!0,children:[Object(h.jsx)(i.l,{md:"3",children:Object(h.jsx)(i.J,{htmlFor:"Phone-input",children:"Phone"})}),Object(h.jsxs)(i.l,{xs:"12",md:"9",children:[Object(h.jsx)(i.C,{type:"text",value:R,onChange:function(e){return z(e.target.value)},id:"Phone-input",name:"Phone-input",placeholder:"Enter Phone",autoComplete:"phone"}),Object(h.jsx)(i.w,{className:"help-block",children:"Please enter your phone no"})]})]}),Object(h.jsxs)(i.v,{row:!0,children:[Object(h.jsx)(i.l,{md:"3",children:Object(h.jsx)(i.J,{htmlFor:"Phone-input",children:"Registration"})}),Object(h.jsxs)(i.l,{xs:"12",md:"9",children:[Object(h.jsx)(i.C,{type:"text",value:B,onChange:function(e){return I(e.target.value)},id:"Phone-input",name:"Phone-input",placeholder:"Enter Phone",autoComplete:"phone"}),Object(h.jsx)(i.w,{className:"help-block",children:"Please enter your registration no"})]})]}),Object(h.jsxs)(i.v,{row:!0,children:[Object(h.jsx)(i.l,{md:"3",children:Object(h.jsx)(i.J,{htmlFor:"Phone-input",children:"Designation"})}),Object(h.jsxs)(i.l,{xs:"12",md:"9",children:[Object(h.jsx)(i.C,{type:"text",value:q,onChange:function(e){return G(e.target.value)},id:"Phone-input",name:"Phone-input",placeholder:"Enter Phone",autoComplete:"phone"}),Object(h.jsx)(i.w,{className:"help-block",children:"Please enter your designation"})]})]}),Object(h.jsxs)(i.v,{row:!0,children:[Object(h.jsx)(i.l,{md:"3",children:Object(h.jsx)(i.J,{htmlFor:"date-input",children:"Date of Birth"})}),Object(h.jsx)(i.l,{xs:"12",md:"9",children:Object(h.jsx)(i.C,{type:"date",value:W,onChange:function(e){return X(e.target.value)},id:"date-input",name:"date-input"})})]}),Object(h.jsxs)(i.v,{row:!0,children:[Object(h.jsx)(i.l,{md:"3",children:Object(h.jsx)(i.J,{htmlFor:"disabled-input",children:"Color of Hairs"})}),Object(h.jsx)(i.l,{xs:"12",md:"9",children:Object(h.jsx)(i.C,{type:"text",value:ee,onChange:function(e){return te(e.target.value)},id:"disabled-input",name:"disabled-input"})})]}),Object(h.jsxs)(i.v,{row:!0,children:[Object(h.jsx)(i.l,{md:"3",children:Object(h.jsx)(i.J,{htmlFor:"disabled-input",children:"Color of Eyes"})}),Object(h.jsx)(i.l,{xs:"12",md:"9",children:Object(h.jsx)(i.C,{type:"text",value:se,onChange:function(e){return ae(e.target.value)},id:"disabled-input",name:"disabled-input"})})]}),Object(h.jsxs)(i.v,{row:!0,children:[Object(h.jsx)(i.l,{md:"3",children:Object(h.jsx)(i.J,{htmlFor:"textarea-input",children:"Address"})}),Object(h.jsx)(i.l,{xs:"12",md:"9",children:Object(h.jsx)(i.eb,{name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"address...",value:Q,onChange:function(e){return Y(e.target.value)}})})]})]})}),Object(h.jsxs)(i.g,{children:[Object(h.jsxs)(i.d,{type:"button",onClick:function(){var e=new FormData;e.append("first_name",S),e.append("last_name",J),e.append("email",y),e.append("phone",R),e.append("registration",B),e.append("address",Q),e.append("designation",q),e.append("date_of_birth",W),e.append("hair",ee),e.append("eyes",se),void 0!=p&&e.append("profile_pic",p),j.c.post("employee/profile/update/"+localStorage.getItem("user_id")+"/",e).then((function(e){console.log("update result ---- ",e.data),"True"==e.data.success&&(ie(Object(b.b)(localStorage.getItem("user_id"))),o()("Updated","Profile updated successfully","success"))})).catch((function(e){console.log("err -- ",e.response)}))},size:"sm",color:"primary",children:[Object(h.jsx)(l.a,{name:"cil-scrubber"})," Submit"]})," ",Object(h.jsxs)(i.d,{type:"button",onClick:function(){return le()},size:"sm",color:"danger",children:[Object(h.jsx)(l.a,{name:"cil-ban"})," Reset"]})]})]})})})}),Object(h.jsx)(i.cb,{"data-tab":"organization-details",children:Object(h.jsx)(i.T,{className:"justify-content-center mt-5",children:Object(h.jsx)(i.l,{xs:"12",md:"6",children:Object(h.jsx)(i.e,{children:Object(h.jsx)(i.f,{children:Object(h.jsx)(i.T,{className:"justify-content-center",children:Object(h.jsx)(i.l,{lg:"12",sm:"2",md:"6",children:Object(h.jsx)("h3",{children:"Company"})})})})})})})})]})]})})})}}}]);
//# sourceMappingURL=5.d8424167.chunk.js.map