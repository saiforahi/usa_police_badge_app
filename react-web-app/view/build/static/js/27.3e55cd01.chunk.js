(this["webpackJsonpusa-nfc-web-app"]=this["webpackJsonpusa-nfc-web-app"]||[]).push([[27],{863:function(e,t,n){"use strict";n.r(t);n(0);var s=n(732),c=n(189),i=n(736),a=n.n(i),r=n(23),o=n(15);t.default=function(){var e=Object(r.g)(),t=Object(c.c)((function(e){var t=[];return Array.from(e.notifications.data).forEach((function(e,n){t.push({"#":n+1,Name:e.nfc.user.first_name+" "+e.nfc.user.last_name,"Badge Number":e.nfc.nfc_number,Date:new Date(e.created_at).toLocaleDateString()+" "+new Date(e.created_at).toLocaleTimeString()})})),t}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(s.m,{children:Object(o.jsx)(s.T,{children:Object(o.jsx)(s.l,{md:"12",children:Object(o.jsxs)(s.e,{children:[Object(o.jsx)(s.i,{children:Object(o.jsx)("h3",{children:"Scans"})}),Object(o.jsx)(s.f,{children:Object(o.jsx)(s.n,{items:t,fields:[{key:"#",_style:{width:"5%"},_classes:"font-weight-bold"},"Name","Email","Badge Number","Assigned To","Assigned Date","Scans","Global Scans","Date",{key:"Action",label:"",_style:{width:"12%"},sorter:!1,filter:!1}],light:!0,hover:!0,striped:!0,bordered:!0,sorter:!0,columnFilter:!0,size:"sm",itemsPerPage:10,pagination:!0,scopedSlots:{Action:function(t){return Object(o.jsx)("td",{children:Object(o.jsxs)(s.a,{children:[Object(o.jsx)(s.d,{onClick:function(){a()("Warning","This service is not available right now","warning")},type:"button",size:"sm",color:"danger",children:"Delete"})," ",Object(o.jsx)(s.d,{onClick:function(){e.push({pathname:"/dashboard/employees/details",state:{employee:t}})},size:"sm",type:"button",color:"primary",children:"Edit"})]})})}}})}),Object(o.jsx)(s.g,{})]})})})})})}}}]);
//# sourceMappingURL=27.3e55cd01.chunk.js.map