(this["webpackJsonpusa-nfc-web-app"]=this["webpackJsonpusa-nfc-web-app"]||[]).push([[15],{811:function(e,t,n){},873:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n(735),s=n(0),r=n.n(s),i=(n(811),n(733)),l=n(732),d=n(868),o=n(864),j=n(848),b=n(844),u=n(867),m=n(871),h=n(860),O=n(847),p=n(859),x=n(730),f=n(51),g=n(189),y=n(737),v=n.n(y),w=n(15),C=function(e){var t=Object(s.useState)(!0),n=Object(a.a)(t,2),c=n[0],i=n[1],d=Object(s.useState)(),o=Object(a.a)(d,2),j=o[0],b=o[1],u=Object(s.useState)(),m=Object(a.a)(u,2),h=m[0],O=m[1],p=Object(s.useState)(),x=Object(a.a)(p,2),y=x[0],C=x[1],N=Object(g.c)((function(e){var t=[];return Array.from(e.employees.data).forEach((function(e,n){t.push({id:e.id,name:e.first_name+" "+e.last_name})})),t})),S=function(){i(!1),e.parentCallback(!1)};return r.a.useEffect((function(){e.data&&O(e.data["Badge Number"])}),[c]),Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(l.K,{size:"lg",show:c,onClose:S,centered:!0,children:[Object(w.jsx)(l.N,{closeButton:!0,children:Object(w.jsx)("h3",{children:"Create a new badge and Assign to an officer"})}),Object(w.jsx)(l.L,{children:Object(w.jsx)(l.e,{style:{border:"none"},children:Object(w.jsxs)(l.f,{children:[Object(w.jsxs)(l.v,{className:"mb-3",children:[Object(w.jsx)(l.I,{children:"NFC"}),Object(w.jsx)(l.B,{value:h,placeholder:"Enter new NFC number",onChange:function(e){return O(e.target.value)},type:"text"})]}),Object(w.jsxs)(l.v,{className:"mb-3",children:[Object(w.jsx)(l.I,{children:"Registration No"}),Object(w.jsx)(l.B,{value:j,placeholder:"Enter registration no",onChange:function(e){return b(e.target.value)},type:"text"})]}),Object(w.jsxs)(l.v,{className:"mb-3",children:[Object(w.jsx)(l.I,{children:"Officer"}),Object(w.jsx)(l.T,{value:y,onChange:function(e){return C(e.target.value)},children:N.length>0&&Array.from(N).map((function(e){return Object(w.jsx)("option",{value:e.id,children:e.name},e.id)}))})]})]})})}),Object(w.jsxs)(l.M,{children:[Object(w.jsx)(l.d,{onClick:function(){var e=new FormData;e.append("nfc_number",h),e.append("mac_address",j),e.append("user",y),f.c.post("employee/badge/add/",e).then((function(e){v()("Assigned!","New badge added and assigned","success").then((function(){S()}))}))},color:"primary",children:"Assign"})," ",Object(w.jsx)(l.d,{onClick:S,color:"secondary",children:"Cancel"})]})]})})},N=n(426);t.default=function(){var e=Object(g.b)(),t=Object(s.useState)(!1),n=Object(a.a)(t,2),y=n[0],S=n[1],k=Object(s.useState)(),A=Object(a.a)(k,2),B=A[0],_=A[1],E=r.a.useState(!1),D=Object(a.a)(E,2),T=D[0],F=D[1],P=r.a.useState(""),z=Object(a.a)(P,2),I=z[0],M=z[1],q=Object(s.useState)([]),G=Object(a.a)(q,2),J=G[0],L=G[1],U=(Object(x.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),function(){F(!1)});function W(e){v()("Sorry!","This service is not available now","warning")}return r.a.useEffect((function(){e(Object(N.b)()),f.e.get("employee/badge/info/").then((function(e){if("True"==e.data.success){console.log(e.data.data);for(var t=[],n=0;n<e.data.data.length;n++){var c=e.data.data[n];t.push({"#":n+1,id:c.id,"Badge Number":c.nfc_number,"Created Date":new Date(c.created_at).toLocaleDateString(),"Assigned To":c.user.first_name,Scans:"","Global Scans":""})}L(t)}}))}),[]),Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(l.S,{children:[Object(w.jsx)(l.l,{md:"12",children:Object(w.jsxs)(l.e,{children:[Object(w.jsx)(l.i,{children:Object(w.jsx)("h4",{className:"table-header",children:"Badges"})}),Object(w.jsxs)(l.f,{children:[Object(w.jsxs)("div",{class:"custom-header",children:[Object(w.jsxs)(l.u,{className:"d-flex custom-form mt-2 mb-2",children:[Object(w.jsx)(l.B,{type:"search",className:"me-2",placeholder:"Search"}),Object(w.jsx)(l.d,{type:"button",color:"primary",variant:"outline",children:"Search"})]}),Object(w.jsx)(l.d,{type:"button",className:"button-primary-small",children:"Export"})]}),Object(w.jsx)(l.n,{items:J,fields:[{key:"#",_style:{width:"5%"},_classes:"font-weight-bold"},"Badge Number","Created Date","Assigned To","Scans","Global Scans",{key:"Action",label:"",_style:{width:"12%"},sorter:!0,filter:!1}],primary:!0,hover:!0,striped:!0,bordered:!0,sorter:!0,columnFilter:!0,size:"sm",itemsPerPage:10,pagination:!0,scopedSlots:{Action:function(e){var t;return Object(w.jsxs)("td",{children:[Object(w.jsx)(l.d,(t={onClick:function(){},type:"button",size:"sm",color:"danger"},Object(c.a)(t,"onClick",(function(){return W()})),Object(c.a)(t,"children","Delete"),t))," ",Object(w.jsx)(l.d,{size:"sm",type:"button",color:"primary",id:"dropdownMenu",onClick:function(){return W()},children:"Assign"})]})}}})]})]})}),Object(w.jsxs)(l.l,{md:"12",class:"button-holder",children:[Object(w.jsx)(l.d,{onClick:function(){return W()},className:"button-primary assign-align",type:"button",children:"Assign all unassigned"}),Object(w.jsxs)(l.d,{type:"button",className:"button-primary add-align",id:"dropdownMenu2","data-toggle":"dropdown","aria-expanded":"false",onClick:function(){_(null),S(!0)},children:["Add New ",Object(w.jsx)(i.a,{name:"cil-plus",size:"xl"})]}),y&&Object(w.jsx)(C,{parentCallback:function(){var e;S(e)},data:B}),Object(w.jsxs)("div",{class:"dropdown",children:[Object(w.jsxs)("div",{class:"dropdown-menu mt-2","aria-labelledby":"dropdownMenu2",children:[Object(w.jsx)("button",{class:"dropdown-item",type:"button",children:"Buy New"}),Object(w.jsx)("div",{class:"dropdown-divider"}),Object(w.jsx)("button",{type:"button",class:"dropdown-item",onClick:function(){F(!0)},children:"Use Existing"})]}),Object(w.jsx)(o.a,{open:T,onClose:U,"aria-labelledby":"form-dialog-title",className:"d-block",children:Object(w.jsxs)("div",{className:"modal-comp",children:[Object(w.jsx)(u.a,{id:"form-dialog-title",children:"Use Existing Badge"}),Object(w.jsx)(b.a,{children:Object(w.jsxs)("form",{children:[Object(w.jsx)(d.a,{required:!0,id:"standard-required",label:"Card ID",defaultValue:"Hello World",className:"d-block"}),Object(w.jsxs)(O.a,{className:"w-100 mt-2",children:[Object(w.jsx)(m.a,{id:"demo-simple-select-label",children:"Product Type"}),Object(w.jsxs)(p.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:I,onChange:function(e){M(e.target.value)},children:[Object(w.jsx)(h.a,{value:10,children:"Product1"}),Object(w.jsx)(h.a,{value:20,children:"Product2"}),Object(w.jsx)(h.a,{value:30,children:"Product3"})]})]})]})}),Object(w.jsx)(j.a,{className:"justify-content-center",children:Object(w.jsx)(l.d,{onClick:U,color:"primary",className:"button-primary px-4 mt-2",children:"Submit"})})]})})]})]})]})})}}}]);
//# sourceMappingURL=15.d2a010cb.chunk.js.map