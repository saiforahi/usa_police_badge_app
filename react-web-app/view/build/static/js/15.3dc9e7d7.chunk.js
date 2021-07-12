(this["webpackJsonpusa-nfc-web-app"]=this["webpackJsonpusa-nfc-web-app"]||[]).push([[15],{752:function(e,c,t){"use strict";var a=t(33),r=t(195),s=(t(0),t(753)),n=t(756),i=t(15),l=["backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"],o=function(e){var c=e.backgroundColor,t=e.pointHoverBackgroundColor,o=e.dataPoints,d=e.label,j=(e.pointed,Object(r.a)(e,l)),b=[{data:o,backgroundColor:Object(s.getColor)(c),pointHoverBackgroundColor:Object(s.getColor)(t),label:d,barPercentage:.5,categoryPercentage:1}],m={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}};return Object(i.jsx)(n.a,Object(a.a)(Object(a.a)({},j),{},{datasets:b,options:m,labels:d}))};o.defaultProps={backgroundColor:"rgba(0,0,0,.2)",dataPoints:[10,22,34,46,89,56],label:"Count"},c.a=o},824:function(e,c,t){},870:function(e,c,t){"use strict";t.r(c);var a=t(732),r=t(740),s=t.n(r),n=t(0),i=t.n(n),l=t(733),o=t(191),d=t(752),j=(t(824),t(189)),b=t(192),m=t(193),f=t(23),h=t(51),O=t(15);c.default=function(){var e=Object(f.g)(),c=(Object(j.c)((function(e){return e.dashboard})),Object(j.c)((function(e){var c=[],t=localStorage.getItem("user_id");return Array.from(e.notifications.data).forEach((function(e,a){e.nfc.user.id==t&&c.push(e)})),c}))),t=Object(j.c)((function(e){return e.notifications})),r=Object(j.c)((function(e){var c=[];return Array.from(e.ratings.data).forEach((function(e,t){1==e.review_type&&e.officer.id==localStorage.getItem("user_id")&&c.push(e)})),c})),n=Object(j.c)((function(e){var c=[];return Array.from(e.ratings.data).forEach((function(e,t){2==e.review_type&&e.officer.id==localStorage.getItem("user_id")&&c.push(e)})),c})),u=(Object(j.c)((function(e){var c=[];return e.ratings.data.forEach((function(e,t){e.officer.id==localStorage.getItem("user_id")&&c.push({"#":t+1,"Employee Name":e.officer.first_name+" "+e.officer.last_name,"Badge Number":e.officer.user_id[0].nfc_number,Rating:Number(e.star),Feedback:e.comment,Date:new Date(e.created_at).toLocaleDateString()+" "+new Date(e.created_at).toLocaleTimeString()})})),c})),Object(j.b)());return i.a.useEffect((function(){u(Object(o.b)()),u(Object(b.b)()),u(Object(m.b)())}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(a.m,{children:[Object(O.jsx)(a.T,{children:Object(O.jsx)(a.l,{children:Object(O.jsx)(a.d,{color:"primary",type:"button",children:"Clock In"})})}),Object(O.jsx)("hr",{}),Object(O.jsx)(a.T,{className:"mt-3",children:Object(O.jsx)(a.l,{sm:"6",lg:"3",children:Object(O.jsx)(a.hb,{className:"pb-4",color:"gradient-primary",header:String(c.length),text:"Total Scans"})})}),Object(O.jsxs)(a.T,{children:[Object(O.jsxs)(a.l,{sm:"12",md:"4",lg:"4",children:[Object(O.jsx)("h4",{id:"traffic",className:"card-title mb-0",children:"Recent Ratings (Live Feed)"}),Object(O.jsx)("div",{class:"rating-holder mt-4",children:Object(O.jsx)(a.T,{children:void 0!=r&&Array.from(r.slice(0,9)).map((function(e){return Object(O.jsx)(a.l,{xs:"12",sm:"6",md:"12",lg:"10",children:Object(O.jsx)(a.e,{className:"review-cards",children:Object(O.jsxs)(a.f,{children:[Object(O.jsxs)("p",{className:"time",children:[Object(O.jsx)(l.b,{name:"cil-clock"})," ",Object(O.jsx)(l.b,{icon:"cil-clock"}),Object(O.jsx)("span",{children:new Date(e.created_at).toLocaleTimeString()+" - "+new Date(e.created_at).toLocaleDateString()})]}),Object(O.jsxs)("p",{className:"person-name",children:[" ",Object(O.jsx)(a.B,{src:h.b+e.officer.profile_pic,className:"c-avatar-img officer-img mr-1 ml-0",alt:""}),e.officer.first_name," ",Object(O.jsx)("span",{class:"officer-designation",children:e.officer.designation})]}),Object(O.jsx)(s.a,{name:"rate2",editing:!1,emptyStarColor:"#6d706e",starCount:5,value:Number(e.star)}),Object(O.jsxs)("p",{class:"review mt-none",children:["by ",e.name," "]}),Object(O.jsx)("p",{className:"review-text",children:'"'+e.comment+'"'})]})})})}))})})]}),Object(O.jsxs)(a.l,{sm:"12",md:"4",lg:"4",children:[Object(O.jsx)("h4",{id:"traffic",className:"card-title negative-heading mb-0",children:"Negative Ratings (Live Feed)"}),Object(O.jsx)("div",{class:"rating-holder negative mt-4",children:Object(O.jsx)(a.T,{children:void 0!=n&&Array.from(n.slice(0,9)).map((function(e){return Object(O.jsx)(a.l,{xs:"12",sm:"6",md:"12",lg:"10",children:Object(O.jsx)(a.e,{className:"review-cards border-danger",children:Object(O.jsxs)(a.f,{children:[Object(O.jsxs)("p",{className:"time",children:[Object(O.jsx)(l.b,{name:"cil-clock"})," ",Object(O.jsx)("span",{children:new Date(e.created_at).toLocaleTimeString()+" - "+new Date(e.created_at).toLocaleDateString()})]}),Object(O.jsxs)("p",{className:"person-name",children:[" ",Object(O.jsx)(a.B,{src:h.b+e.officer.profile_pic,className:"c-avatar-img officer-img mr-1 ml-0",alt:""}),e.officer.first_name," ",Object(O.jsx)("span",{class:"officer-designation",children:e.officer.designation})]}),Object(O.jsx)(s.a,{name:"rate2",editing:!1,emptyStarColor:"#6d706e",starCount:5,value:Number(e.star)}),Object(O.jsxs)("p",{class:"review mt-none",children:["by ",e.name," "]}),Object(O.jsx)("p",{className:"review-text",children:'"'+e.comment+'"'})]})})})}))})})]}),Object(O.jsx)(a.l,{sm:"12",md:"4",lg:"4",children:Object(O.jsx)(a.e,{className:"noti-holder",children:Object(O.jsxs)(a.f,{children:[Object(O.jsxs)("div",{class:"scan-header",children:[Object(O.jsx)("h5",{className:"angle-left",children:"Recent Scans"}),Object(O.jsxs)(a.d,{color:"primary",type:"button",className:"angle-right",onClick:function(){return e.push("/dashboard/scan-history")},children:["succeeded"==t.status?"Total":"loading"," ",Object(O.jsx)(a.a,{color:"info",children:c.length}),Object(O.jsx)("span",{className:"visually-hidden",children:"unread messages"})]})]}),Object(O.jsxs)("div",{class:"card-div mt-2 pb-1 pr-3",children:[void 0!=c&&Array.from(c.slice(0,10)).map((function(e){return Object(O.jsx)(a.e,{className:"show-scans",children:Object(O.jsx)(a.f,{children:Object(O.jsxs)(a.T,{children:[Object(O.jsx)(a.l,{sm:"2",children:Object(O.jsx)(a.B,{src:h.b+e.nfc.user.profile_pic,className:"c-avatar-img officer-img mr-1 ml-0",alt:""})}),Object(O.jsx)(a.l,{sm:"10",children:Object(O.jsxs)("p",{children:["Badge No: ",e.nfc.nfc_number," of ",e.nfc.user.first_name+" "+e.nfc.user.last_name," was scanned at ",new Date(e.created_at).toLocaleTimeString()," on ",new Date(e.created_at).toLocaleDateString()]})})]})})})})),Object(O.jsx)(a.d,{onClick:function(){return e.push("/dashboard/scan-history")},className:"ml-2",type:"button",variant:"outline",color:"primary",children:"View all"})]})]})})})]}),Object(O.jsx)(a.T,{children:Object(O.jsx)(a.l,{sm:"12",md:"12",lg:"12",children:Object(O.jsx)(a.e,{children:Object(O.jsxs)(a.f,{children:[Object(O.jsxs)(a.T,{children:[Object(O.jsxs)(a.l,{sm:"5",children:[Object(O.jsx)("h4",{id:"traffic",className:"card-title mb-0",children:"Ratings"}),Object(O.jsx)("div",{className:"small text-muted",children:(new Date).toLocaleDateString()})]}),Object(O.jsx)(a.l,{sm:"7",className:"d-none d-md-block",children:Object(O.jsx)(a.d,{color:"primary",className:"float-right",children:Object(O.jsx)(l.b,{name:"cil-cloud-download"})})})]}),Object(O.jsx)(d.a,{style:{height:"300px",marginTop:"40px"}})]})})})})]})})}}}]);
//# sourceMappingURL=15.3dc9e7d7.chunk.js.map