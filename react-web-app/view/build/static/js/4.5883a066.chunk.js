(this["webpackJsonpusa-nfc-web-app"]=this["webpackJsonpusa-nfc-web-app"]||[]).push([[4],{699:function(e,a,t){"use strict";var c=t(49),s=t(162),l=(t(1),t(665)),r=t(671),n=t(17),i=["backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"],o=function(e){var a=e.backgroundColor,t=e.pointHoverBackgroundColor,o=e.dataPoints,d=e.label,b=(e.pointed,Object(s.a)(e,i)),j=[{data:o,backgroundColor:Object(l.getColor)(a),pointHoverBackgroundColor:Object(l.getColor)(t),label:d,barPercentage:.5,categoryPercentage:1}],h={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}};return Object(n.jsx)(r.a,Object(c.a)(Object(c.a)({},b),{},{datasets:j,options:h,labels:d}))};o.defaultProps={backgroundColor:"rgba(0,0,0,.2)",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},a.a=o},768:function(e,a,t){},812:function(e,a,t){"use strict";t.r(a);var c=t(645),s=t(639),l=t(1),r=t.n(l),n=t(640),i=t(641),o=t(699),d=(t(768),t(17)),b=r.a.lazy((function(){return t.e(20).then(t.bind(null,772))}));a.default=function(){var e=r.a.useState(0),a=Object(c.a)(e,2),t=a[0],j=(a[1],Object(l.useState)({})),h=Object(c.a)(j,2),m=h[0],u=h[1];return r.a.useEffect((function(){console.log("dashboard mounted"),i.d.get("dashboard/info/").then((function(e){console.log(e.data),u(e.data.data)}))}),[t]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(s.Z,{activeTab:"quick",children:[Object(d.jsxs)(s.L,{variant:"tabs",className:"tab-style",children:[Object(d.jsx)(s.M,{children:Object(d.jsx)(s.N,{"data-tab":"quick",className:"special",children:"Quick Look"})}),Object(d.jsx)(s.M,{children:Object(d.jsx)(s.N,{"data-tab":"search",className:"special",children:"Search"})})]}),Object(d.jsxs)(s.X,{children:[Object(d.jsxs)(s.Y,{"data-tab":"quick",children:[Object(d.jsx)(b,{data:m}),Object(d.jsx)(s.e,{children:Object(d.jsxs)(s.f,{children:[Object(d.jsxs)(s.P,{children:[Object(d.jsxs)(s.l,{sm:"5",children:[Object(d.jsx)("h4",{id:"traffic",className:"card-title mb-0",children:"Recent (Live feed)"}),Object(d.jsx)("div",{className:"small text-muted",children:(new Date).toLocaleDateString()})]}),Object(d.jsx)(s.l,{sm:"7",className:"d-none d-md-block",children:Object(d.jsx)(s.d,{color:"primary",className:"float-right",children:Object(d.jsx)(n.b,{name:"cil-cloud-download"})})})]}),Object(d.jsx)(o.a,{style:{height:"300px",marginTop:"40px"}})]})})]}),Object(d.jsxs)(s.Y,{"data-tab":"search",children:[Object(d.jsx)("h4",{className:"table-header mt-3 text-center ",children:"Ratings"}),Object(d.jsxs)(s.u,{className:"d-flex custom-form mt-2",children:[Object(d.jsx)(s.C,{type:"search",className:"me-2",placeholder:"Search"}),Object(d.jsx)(s.d,{type:"submit",color:"primary",variant:"outline",children:"Search"})]}),Object(d.jsx)(s.e,{className:"mt-2",children:Object(d.jsx)(s.f,{children:Object(d.jsx)(s.n,{items:[{id:1,Name:"Mr X",Email:"x@mail.com"},{id:2,Name:"Mr Y",Email:"y@mail.com"}],fields:[{key:"#",_style:{width:"5%"},_classes:"font-weight-bold"},"Employee Name","Badge Number","Rating","Feedback","Date"],light:!0,hover:!0,striped:!0,bordered:!0,sorter:!0,columnFilter:!0,size:"sm",itemsPerPage:10,pagination:!0})})})]})]})]})})}}}]);
//# sourceMappingURL=4.5883a066.chunk.js.map