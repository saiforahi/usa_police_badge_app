(this["webpackJsonpusa-nfc-web-app"]=this["webpackJsonpusa-nfc-web-app"]||[]).push([[3],{826:function(e,t,c){},871:function(e,t,c){"use strict";c.r(t);var s=c(735),n=c(0),a=c.n(n),l=c(733),i=c(734),r=c(189),j=c(51),d=c(737),o=c.n(d),b=(c(826),c(190)),h=c(15);t.default=function(){var e=Object(r.c)((function(e){return e.user.data})),t=Object(n.useState)(),c=Object(s.a)(t,2),d=c[0],u=c[1],x=Object(n.useState)(),m=Object(s.a)(x,2),O=m[0],p=m[1],f=Object(n.useRef)(null),g=Object(n.useState)(""),v=Object(s.a)(g,2),N=v[0],y=v[1],C=Object(n.useState)(""),w=Object(s.a)(C,2),P=w[0],S=w[1],_=Object(n.useState)(""),F=Object(s.a)(_,2),J=F[0],k=F[1],E=Object(n.useState)(""),D=Object(s.a)(E,2),T=D[0],z=D[1],R=Object(n.useState)(""),A=Object(s.a)(R,2),B=A[0],L=A[1],Y=Object(n.useState)(""),I=Object(s.a)(Y,2),U=I[0],H=I[1],K=Object(n.useState)(""),M=Object(s.a)(K,2),Q=M[0],q=M[1],V=Object(n.useState)(""),G=Object(s.a)(V,2),W=G[0],X=G[1],Z=Object(n.useState)(""),$=Object(s.a)(Z,2),ee=$[0],te=$[1],ce=Object(n.useState)(""),se=Object(s.a)(ce,2),ne=se[0],ae=se[1],le=Object(r.b)();function ie(){S(e.first_name),k(e.last_name),y(e.email),z(e.phone),H(e.address),L(e.registration),q(e.designation),u(j.b+e.profile_pic),X(e.date_of_birth),te(e.hair),ae(e.eyes)}return a.a.useEffect((function(){ie()}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(l.m,{children:Object(h.jsxs)(l.db,{activeTab:"my-details",children:[Object(h.jsxs)(l.P,{variant:"tabs",children:[Object(h.jsx)(l.Q,{children:Object(h.jsx)(l.R,{"data-tab":"my-details",className:"special",children:"My Details"})}),Object(h.jsx)(l.Q,{children:Object(h.jsx)(l.R,{"data-tab":"organization-details",className:"special",children:"Supervisor Details"})})]}),Object(h.jsxs)(l.bb,{children:[Object(h.jsx)(l.cb,{"data-tab":"my-details",children:Object(h.jsx)(l.T,{className:"justify-content-center mt-5",children:Object(h.jsx)(l.l,{xs:"12",md:"6",children:Object(h.jsxs)(l.e,{children:[Object(h.jsx)(l.i,{children:Object(h.jsxs)("h3",{children:["Account detail for ",e.first_name+" "+e.last_name]})}),Object(h.jsx)(l.f,{children:Object(h.jsxs)(l.u,{className:"form-horizontal",children:[Object(h.jsx)(l.T,{className:"justify-content-center",children:Object(h.jsx)(l.B,{onClick:function(){document.getElementById("file").click()},className:"mx-auto",style:{height:"100px",width:"116px",cursor:"pointer"},shape:"rounded",src:d})}),Object(h.jsx)("hr",{}),Object(h.jsx)(l.T,{className:"justify-content-center",children:Object(h.jsx)("input",{type:"file",id:"file",ref:f,style:{display:"none"},onChange:function(e){return t=e.target.files[0],p(t),void u(URL.createObjectURL(t));var t}})}),Object(h.jsxs)(l.v,{row:!0,children:[Object(h.jsx)(l.l,{md:"3",children:Object(h.jsx)(l.J,{htmlFor:"text-input",children:"First Name"})}),Object(h.jsxs)(l.l,{xs:"12",md:"9",children:[Object(h.jsx)(l.C,{type:"text",value:P,onChange:function(e){return S(e.target.value)},id:"text-input",name:"text-input",placeholder:"Text"}),Object(h.jsx)(l.w,{children:"Your first name"})]})]}),Object(h.jsxs)(l.v,{row:!0,children:[Object(h.jsx)(l.l,{md:"3",children:Object(h.jsx)(l.J,{htmlFor:"text-input",children:"Last Name"})}),Object(h.jsxs)(l.l,{xs:"12",md:"9",children:[Object(h.jsx)(l.C,{type:"text",value:J,onChange:function(e){return k(e.target.value)},id:"text-input",name:"text-input",placeholder:"Text"}),Object(h.jsx)(l.w,{children:"Your Last name"})]})]}),Object(h.jsxs)(l.v,{row:!0,children:[Object(h.jsx)(l.l,{md:"3",children:Object(h.jsx)(l.J,{htmlFor:"email-input",children:"Email"})}),Object(h.jsxs)(l.l,{xs:"12",md:"9",children:[Object(h.jsx)(l.C,{type:"email",value:N,onChange:function(e){return y(e.target.value)},id:"email-input",name:"email-input",placeholder:"Enter Email",autoComplete:"email"}),Object(h.jsx)(l.w,{className:"help-block",children:"Please enter your email"})]})]}),Object(h.jsxs)(l.v,{row:!0,children:[Object(h.jsx)(l.l,{md:"3",children:Object(h.jsx)(l.J,{htmlFor:"Phone-input",children:"Phone"})}),Object(h.jsxs)(l.l,{xs:"12",md:"9",children:[Object(h.jsx)(l.C,{type:"text",value:T,onChange:function(e){return z(e.target.value)},id:"Phone-input",name:"Phone-input",placeholder:"Enter Phone",autoComplete:"phone"}),Object(h.jsx)(l.w,{className:"help-block",children:"Please enter your phone no"})]})]}),Object(h.jsxs)(l.v,{row:!0,children:[Object(h.jsx)(l.l,{md:"3",children:Object(h.jsx)(l.J,{htmlFor:"Phone-input",children:"Registration"})}),Object(h.jsxs)(l.l,{xs:"12",md:"9",children:[Object(h.jsx)(l.C,{type:"text",value:B,onChange:function(e){return L(e.target.value)},id:"Phone-input",name:"Phone-input",placeholder:"Enter Phone",autoComplete:"phone"}),Object(h.jsx)(l.w,{className:"help-block",children:"Please enter your registration no"})]})]}),Object(h.jsxs)(l.v,{row:!0,children:[Object(h.jsx)(l.l,{md:"3",children:Object(h.jsx)(l.J,{htmlFor:"Phone-input",children:"Designation"})}),Object(h.jsxs)(l.l,{xs:"12",md:"9",children:[Object(h.jsx)(l.C,{type:"text",value:Q,onChange:function(e){return q(e.target.value)},id:"Phone-input",name:"Phone-input",placeholder:"Enter Phone",autoComplete:"phone"}),Object(h.jsx)(l.w,{className:"help-block",children:"Please enter your designation"})]})]}),Object(h.jsxs)(l.v,{row:!0,children:[Object(h.jsx)(l.l,{md:"3",children:Object(h.jsx)(l.J,{htmlFor:"date-input",children:"Date of Birth"})}),Object(h.jsx)(l.l,{xs:"12",md:"9",children:Object(h.jsx)(l.C,{type:"date",value:W,onChange:function(e){return X(e.target.value)},id:"date-input",name:"date-input"})})]}),Object(h.jsxs)(l.v,{row:!0,children:[Object(h.jsx)(l.l,{md:"3",children:Object(h.jsx)(l.J,{htmlFor:"date-input",children:"Department"})}),Object(h.jsx)(l.l,{xs:"12",md:"9",children:Object(h.jsx)(l.C,{type:"text",id:"date-input",name:"date-input"})})]}),Object(h.jsxs)(l.v,{row:!0,children:[Object(h.jsx)(l.l,{md:"3",children:Object(h.jsx)(l.J,{htmlFor:"disabled-input",children:"Color of Hairs"})}),Object(h.jsx)(l.l,{xs:"12",md:"9",children:Object(h.jsx)(l.C,{type:"text",value:ee,onChange:function(e){return te(e.target.value)},id:"disabled-input",name:"disabled-input"})})]}),Object(h.jsxs)(l.v,{row:!0,children:[Object(h.jsx)(l.l,{md:"3",children:Object(h.jsx)(l.J,{htmlFor:"disabled-input",children:"Color of Eyes"})}),Object(h.jsx)(l.l,{xs:"12",md:"9",children:Object(h.jsx)(l.C,{type:"text",value:ne,onChange:function(e){return ae(e.target.value)},id:"disabled-input",name:"disabled-input"})})]}),Object(h.jsxs)(l.v,{row:!0,children:[Object(h.jsx)(l.l,{md:"3",children:Object(h.jsx)(l.J,{htmlFor:"textarea-input",children:"Address"})}),Object(h.jsx)(l.l,{xs:"12",md:"9",children:Object(h.jsx)(l.eb,{name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"address...",value:U,onChange:function(e){return H(e.target.value)}})})]})]})}),Object(h.jsxs)(l.g,{children:[Object(h.jsxs)(l.d,{type:"button",onClick:function(){var e=new FormData;e.append("first_name",P),e.append("last_name",J),e.append("email",N),e.append("phone",T),e.append("registration",B),e.append("address",U),e.append("designation",Q),e.append("date_of_birth",W),e.append("hair",ee),e.append("eyes",ne),void 0!=O&&e.append("profile_pic",O),j.c.post("employee/profile/update/"+localStorage.getItem("user_id")+"/",e).then((function(e){console.log("update result ---- ",e.data),"True"==e.data.success&&(le(Object(b.b)(localStorage.getItem("user_id"))),o()("Updated","Profile updated successfully","success"))})).catch((function(e){console.log("err -- ",e.response)}))},size:"sm",color:"primary",children:[Object(h.jsx)(i.a,{name:"cil-scrubber"})," Submit"]})," ",Object(h.jsxs)(l.d,{type:"button",onClick:function(){return ie()},size:"sm",color:"danger",children:[Object(h.jsx)(i.a,{name:"cil-ban"})," Reset"]})]})]})})})}),Object(h.jsx)(l.cb,{"data-tab":"organization-details",children:Object(h.jsx)(l.T,{className:"justify-content-center mt-5",children:Object(h.jsx)(l.l,{md:"8",sm:"12",xs:"12",children:Object(h.jsxs)(l.e,{children:[Object(h.jsxs)(l.i,{children:[" ",Object(h.jsx)("h4",{className:"table-header text-center",children:"Organization Details"})]}),Object(h.jsx)(l.f,{children:Object(h.jsx)(l.T,{className:"justify-content-center",children:Object(h.jsxs)(l.l,{md:"12",children:[Object(h.jsxs)("h5",{children:[Object(h.jsx)("span",{className:"custom-label",children:"Company Name : "})," ",Object(h.jsx)("span",{className:"custom-details",children:"NYPD"})]}),Object(h.jsxs)("h5",{children:[Object(h.jsx)("span",{className:"custom-label",children:"Department Name : "})," ",Object(h.jsx)("span",{className:"custom-details",children:"Homicide"})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)(l.B,{className:"mx-auto rounded-circle update-img",src:"http://103.123.8.52:8075/media/uploads/users/images/8_K285K2J.jpg"}),Object(h.jsx)("p",{className:"mt-1",children:"Supervisor Profile Picture"})]}),Object(h.jsxs)("h5",{children:[Object(h.jsx)("span",{className:"custom-label",children:"Supervisor Contact Name : "})," ",Object(h.jsx)("span",{className:"custom-details",children:"Santiago Vazquez"})]}),Object(h.jsxs)("h5",{children:[Object(h.jsx)("span",{className:"custom-label",children:"Address : "})," ",Object(h.jsx)("span",{className:"custom-details",children:"4/A,76th Street,Manhattan,NewYork"})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsxs)("h5",{className:"d-inline-block mr-2",children:[Object(h.jsx)("span",{className:"custom-label",children:"Phone : "})," ",Object(h.jsx)("span",{className:"custom-details",children:"+12783728288"})]}),Object(h.jsxs)("h5",{className:"d-inline-block",children:[Object(h.jsx)("span",{className:"custom-label",children:"Email : "})," ",Object(h.jsx)("span",{className:"custom-details",children:"santiago19@gmail.com"})]})]})]})})})]})})})})]})]})})})}}}]);
//# sourceMappingURL=3.b1eae77d.chunk.js.map