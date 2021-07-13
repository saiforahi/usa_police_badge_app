(this["webpackJsonpusa-nfc-web-app"]=this["webpackJsonpusa-nfc-web-app"]||[]).push([[26],{873:function(e,t,s){"use strict";s.r(t);var c=s(734),n=s(732),a=s(0),r=s.n(a),l=s(189),d=s(23),i=s(47),j=s(192),b=s(736),o=s.n(b),m=s(16);t.default=function(){var e=Object(d.g)(),t=Object(a.useState)("view"),s=Object(c.a)(t,2),b=(s[0],s[1],Object(a.useState)("")),h=Object(c.a)(b,2),u=h[0],O=h[1],x=Object(a.useState)(""),p=Object(c.a)(x,2),v=p[0],f=(p[1],Object(a.useState)("")),g=Object(c.a)(f,2),y=g[0],C=g[1],N=Object(a.useState)(""),w=Object(c.a)(N,2),_=w[0],A=w[1],S=Object(a.useState)(""),F=Object(c.a)(S,2),k=F[0],J=F[1],D=Object(l.c)((function(e){var t=[];return Array.from(e.departments.data).forEach((function(e,s){t.push({"#":s+1,Name:e.department_name,Supervisor:e.supervisor_name,Email:e.email,Phone:e.phone,Address:e.address})})),t})),E=Object(l.c)((function(e){return e.employees.data})),P=Object(l.b)();return r.a.useEffect((function(){P(Object(j.b)())}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(n.m,{children:Object(m.jsxs)(n.db,{variant:"tabs",activeTab:"view",children:[Object(m.jsxs)(n.P,{className:"tab-style",children:[Object(m.jsx)(n.Q,{children:Object(m.jsx)(n.R,{"data-tab":"view",className:"special",children:"Departments"})}),Object(m.jsx)(n.Q,{children:Object(m.jsx)(n.R,{"data-tab":"add",className:"special",children:"Add Department"})})]}),Object(m.jsx)(n.bb,{children:Object(m.jsx)(n.cb,{"data-tab":"view",children:Object(m.jsx)(n.T,{children:Object(m.jsx)(n.l,{md:"12",children:Object(m.jsx)(n.e,{className:"mt-3",style:{border:"none"},children:Object(m.jsx)(n.f,{children:Object(m.jsx)(n.n,{items:D,fields:[{key:"#",_style:{width:"5%"},_classes:"font-weight-bold"},"Name","Supervisor","Email","Phone","Address",{key:"Action",label:"",_style:{maxWidth:"5%"},sorter:!0,filter:!0}],light:!0,hover:!0,striped:!0,bordered:!0,sorter:!0,columnFilter:!0,size:"sm",itemsPerPage:10,pagination:!0,scopedSlots:{Action:function(e){return Object(m.jsx)("td",{children:Object(m.jsxs)(n.a,{children:[Object(m.jsx)(n.d,{onClick:function(){},type:"button",size:"sm",color:"danger",children:"Delete"})," ",Object(m.jsx)(n.d,{size:"sm",type:"button",color:"primary",onClick:function(){},children:"Edit"})]})})}}})})})})})})}),Object(m.jsx)(n.bb,{children:Object(m.jsx)(n.cb,{"data-tab":"add",children:Object(m.jsx)(n.T,{className:"justify-content-center",style:{border:"none"},children:Object(m.jsx)(n.l,{style:{border:"none"},children:Object(m.jsxs)(n.e,{style:{border:"none"},children:[Object(m.jsx)("h4",{className:"table-header text-center",children:"Add new department"}),Object(m.jsx)(n.u,{action:"",method:"post",children:Object(m.jsxs)(n.T,{className:"justify-content-center",children:[Object(m.jsx)(n.l,{md:"8",sm:"12",xs:"12",children:Object(m.jsxs)(n.v,{children:[Object(m.jsx)(n.J,{htmlFor:"name",className:"custom-label",children:"Department Name"}),Object(m.jsx)(n.C,{id:"name",value:u,onChange:function(e){return O(e.target.value)}}),Object(m.jsx)(n.gb,{children:"Cool! Input is valid"})]})}),Object(m.jsx)(n.l,{md:"8",sm:"12",xs:"12",children:Object(m.jsxs)(n.v,{children:[Object(m.jsx)(n.J,{htmlFor:"phone",className:"custom-label",children:"Supervisor"}),Object(m.jsx)(n.U,{value:v,onChange:function(e){return A(e.target.value)},children:void 0!=E&&Array.from(E).map((function(e){return Object(m.jsx)("option",{value:e.first_name+" "+e.last_name,children:e.first_name+" "+e.last_name},e.id)}))}),Object(m.jsx)(n.gb,{children:"Cool! Input is valid"})]})}),Object(m.jsx)(n.l,{md:"8",sm:"12",xs:"12",children:Object(m.jsxs)(n.v,{children:[Object(m.jsx)(n.J,{htmlFor:"phone",className:"custom-label",children:"Phone"}),Object(m.jsx)(n.C,{id:"phone",value:_,onChange:function(e){return A(e.target.value)}}),Object(m.jsx)(n.gb,{children:"Cool! Input is valid"})]})}),Object(m.jsx)(n.l,{md:"8",sm:"12",xs:"12",children:Object(m.jsxs)(n.v,{children:[Object(m.jsx)(n.J,{htmlFor:"email",className:"custom-label",children:"Email"}),Object(m.jsx)(n.C,{id:"email",value:y,onChange:function(e){return C(e.target.value)}}),Object(m.jsx)(n.gb,{children:"Cool! Input is valid"})]})}),Object(m.jsx)(n.l,{md:"8",sm:"12",xs:"12",children:Object(m.jsxs)(n.v,{children:[Object(m.jsx)(n.J,{htmlFor:"address",className:"custom-label",children:"Address"}),Object(m.jsx)(n.eb,{maxLength:9,id:"address",value:k,onChange:function(e){return J(e.target.value)}}),Object(m.jsx)(n.gb,{children:"Cool! Input is valid"})]})}),Object(m.jsx)(n.l,{md:"10",sm:"12",xs:"12",className:"text-center",children:Object(m.jsx)(n.d,{color:"primary",className:"button-primary px-4 mt-3",type:"button",onClick:function(){!function(){console.log("ee");var t=new FormData;t.append("department_name",u),t.append("supervisor_name",v),t.append("email",y),t.append("phone",_),t.append("address",k),i.e.post("department/add/",t).then((function(t){"True"==t.data.success&&o()("Created!",u+" department has been created","success").then((function(){e.push("/dashboard/departments")}))}))}()},children:"Add Department"})})]})})]})})})})})]})})})}}}]);
//# sourceMappingURL=26.c5bbf999.chunk.js.map