(this["webpackJsonpusa-nfc-web-app"]=this["webpackJsonpusa-nfc-web-app"]||[]).push([[18],{731:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,c=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(o){c=!0,s=o}finally{try{n||null==a.return||a.return()}finally{if(c)throw s}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return c}))},845:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),s=r(21),i=r(46),a=r.n(i),o=r(63),l=r(731),j=r(729),d=(r(730),r(75)),b=r(15),u=function(e){var t=Object(n.useState)({}),r=Object(l.a)(t,2),s=r[0],i=r[1];return c.a.useEffect((function(){console.log("props data --- ",e.data),d.e.get("profile/details/"+e.officer_id+"/").then(function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("lat from res --- ",t.data.data),i(t.data.data);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"c-app c-default-layout overlay-hero flex-row align-items-center",children:Object(b.jsx)(j.m,{children:Object(b.jsx)(j.O,{className:"justify-content-center",children:Object(b.jsx)(j.l,{lg:"4",sm:"8",md:"6",children:Object(b.jsx)("div",{id:"wrapper",children:Object(b.jsxs)(j.e,{children:[Object(b.jsx)(j.i,{children:Object(b.jsx)("h3",{children:"Details of Card Owner"})}),Object(b.jsxs)(j.f,{children:[Object(b.jsx)(j.O,{className:"justify-content-center mb-3",children:Object(b.jsx)(j.l,{children:Object(b.jsx)(j.A,{className:"mx-auto rounded-circle",style:{height:"100px",width:"100px"},shape:"rounded",src:d.b+s.profile_pic})})}),Object(b.jsx)(j.O,{children:Object(b.jsx)(j.l,{children:Object(b.jsxs)("p",{className:"text-left",children:[Object(b.jsx)("strong",{children:"Name :"})," ",s.first_name+" "+s.last_name,Object(b.jsx)("br",{}),Object(b.jsx)("strong",{children:"Email :"})," ",s.email,Object(b.jsx)("br",{}),Object(b.jsx)("strong",{children:"Phone :"})," ",s.phone,Object(b.jsx)("br",{}),Object(b.jsx)("strong",{children:"Registration :"})," ",s.registration,Object(b.jsx)("br",{}),Object(b.jsx)("strong",{children:"Address :"})," ",s.address,Object(b.jsx)("br",{}),Object(b.jsx)("strong",{children:"Hired :"})," ",null!=s.hired?s.hired:"",Object(b.jsx)("br",{}),Object(b.jsx)("strong",{children:"Eyes :"})," ",null!=s.eyes?s.eyes:"",Object(b.jsx)("br",{}),Object(b.jsx)("strong",{children:"Retired :"})," ",null!=s.retired?s.retired:"",Object(b.jsx)("br",{})]})})})]}),Object(b.jsx)(j.g,{children:Object(b.jsx)(j.d,{className:"btn btn-outline-primary",type:"button",variant:"outlined",children:"Rate this officer"})})]})})})})})})})};t.default=function(e){Object(s.i)().officer_id;return c.a.useEffect((function(){console.log("officer id",e.match.params.id)}),[e.match.params.id]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(u,{officer_id:e.match.params.id})})}}}]);
//# sourceMappingURL=18.3ca458da.chunk.js.map