(this["webpackJsonpusa-nfc-web-app"]=this["webpackJsonpusa-nfc-web-app"]||[]).push([[10],{749:function(e,t,s){"use strict";s(0),s(734),s(750);var n=s(878),r=s(880),a=s(22),i=s(188),c=s(15);t.a=function(){var e=Object(a.g)();return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(n.a,{expand:"lg",className:"pt-6",children:[Object(c.jsx)(n.a.Brand,{onClick:function(){e.push("/")},className:"brand",children:Object(c.jsx)("img",{src:"assets/images/nypd.png"})}),Object(c.jsx)(n.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"pb-2"}),Object(c.jsxs)(n.a.Collapse,{id:"basic-navbar-nav ",children:[Object(c.jsxs)(r.a,{className:"mr-auto padding-desktop",children:[Object(c.jsx)(r.a.Link,{onClick:function(){e.push("/")},children:"Home"}),Object(c.jsx)(r.a.Link,{onClick:function(){e.push("/")},children:"Our Team"}),Object(c.jsx)(r.a.Link,{onClick:function(){e.push("/")},children:"Facebook Feed"}),Object(c.jsx)(r.a.Link,{onClick:function(){e.push("/")},children:"Contact"})]}),localStorage.getItem("access_token")?Object(c.jsx)(i.b,{to:"/dashboard",className:"btn btn-outline-success ml-auto sign-btn",children:"Dashboard"}):Object(c.jsx)(i.b,{to:"/login",className:"btn btn-outline-success ml-auto sign-btn",children:"Login"})]})]})})}},750:function(e,t,s){},752:function(e,t,s){"use strict";s(0),s(753);var n=s(15);t.a=function(){return Object(n.jsxs)("footer",{className:"row footer-gap",children:[Object(n.jsx)("div",{className:"col-lg-4 col-md-4 text-center mobile-view",children:Object(n.jsx)("img",{className:"img-fluid footer-images",src:"assets/images/accountability-badge-demo.webp"})}),Object(n.jsxs)("div",{className:"col-lg-4 col-md-4 text-center",children:[Object(n.jsx)("h4",{className:"footer-header",children:"#Accountability"}),Object(n.jsx)("h5",{class:"footer-minor-details",children:"Global Accountability Corp."}),Object(n.jsx)("h5",{class:"footer-minor-details",children:"P.O. Box 2308"}),Object(n.jsx)("h5",{class:"footer-minor-details",children:"Missoula, MT. 59806"}),Object(n.jsx)("h5",{class:"footer-minor-details",children:"888-63-BADGE (22343)"})]}),Object(n.jsx)("div",{className:"col-lg-4 col-md-4 text-center mobile-view",children:Object(n.jsx)("img",{className:"img-fluid footer-images",src:"assets/images/safeid-demo.webp"})}),Object(n.jsx)("div",{className:"col-lg-12",children:Object(n.jsx)("p",{class:"copyright-info",children:"\xa92021 by The Accountability Badge Corporation"})})]})}},753:function(e,t,s){},768:function(e,t){},769:function(e,t,s){"use strict";!function(){var t="3";function s(e){return e?("string"!==typeof e&&(e=""+e),e.replace(/\n/g,"\\n").replace(/,/g,"\\,").replace(/;/g,"\\;")):""}function n(e,n,r,a){return e+(t>=4?a?";ENCODING=b;MEDIATYPE=image/":";MEDIATYPE=image/":3===t?a?";ENCODING=b;TYPE=":";TYPE=":a?";ENCODING=BASE64;":";")+r+":"+s(n)+"\r\n"}function r(e){return e.getFullYear()+("0"+(e.getMonth()+1)).slice(-2)+("0"+e.getDate()).slice(-2)}e.exports={getFormattedString:function(e){t=e.getMajorVersion();var a="";a+="BEGIN:VCARD\r\n",a+="VERSION:"+e.version+"\r\n";var i=t>=4?"":";CHARSET=UTF-8",c=e.formattedName;if(c||(c="",[e.firstName,e.middleName,e.lastName].forEach((function(e){e&&c&&(c+=" "),c+=e}))),a+="FN"+i+":"+s(c)+"\r\n",a+="N"+i+":"+s(e.lastName)+";"+s(e.firstName)+";"+s(e.middleName)+";"+s(e.namePrefix)+";"+s(e.nameSuffix)+"\r\n",e.nickname&&t>=3&&(a+="NICKNAME"+i+":"+s(e.nickname)+"\r\n"),e.gender&&(a+="GENDER:"+s(e.gender)+"\r\n"),e.uid&&(a+="UID"+i+":"+s(e.uid)+"\r\n"),e.birthday&&(a+="BDAY:"+r(e.birthday)+"\r\n"),e.anniversary&&(a+="ANNIVERSARY:"+r(e.anniversary)+"\r\n"),e.email&&(Array.isArray(e.email)||(e.email=[e.email]),e.email.forEach((function(e){a+=t>=4?"EMAIL"+i+";type=HOME:"+s(e)+"\r\n":t>=3&&t<4?"EMAIL"+i+";type=HOME,INTERNET:"+s(e)+"\r\n":"EMAIL"+i+";HOME;INTERNET:"+s(e)+"\r\n"}))),e.workEmail&&(Array.isArray(e.workEmail)||(e.workEmail=[e.workEmail]),e.workEmail.forEach((function(e){a+=t>=4?"EMAIL"+i+";type=WORK:"+s(e)+"\r\n":t>=3&&t<4?"EMAIL"+i+";type=WORK,INTERNET:"+s(e)+"\r\n":"EMAIL"+i+";WORK;INTERNET:"+s(e)+"\r\n"}))),e.otherEmail&&(Array.isArray(e.otherEmail)||(e.otherEmail=[e.otherEmail]),e.otherEmail.forEach((function(e){a+=t>=4?"EMAIL"+i+";type=OTHER:"+s(e)+"\r\n":t>=3&&t<4?"EMAIL"+i+";type=OTHER,INTERNET:"+s(e)+"\r\n":"EMAIL"+i+";OTHER;INTERNET:"+s(e)+"\r\n"}))),e.logo.url&&(a+=n("LOGO",e.logo.url,e.logo.mediaType,e.logo.base64)),e.photo.url&&(a+=n("PHOTO",e.photo.url,e.photo.mediaType,e.photo.base64)),e.cellPhone&&(Array.isArray(e.cellPhone)||(e.cellPhone=[e.cellPhone]),e.cellPhone.forEach((function(e){a+=t>=4?'TEL;VALUE=uri;TYPE="voice,cell":tel:'+s(e)+"\r\n":"TEL;TYPE=CELL:"+s(e)+"\r\n"}))),e.pagerPhone&&(Array.isArray(e.pagerPhone)||(e.pagerPhone=[e.pagerPhone]),e.pagerPhone.forEach((function(e){a+=t>=4?'TEL;VALUE=uri;TYPE="pager,cell":tel:'+s(e)+"\r\n":"TEL;TYPE=PAGER:"+s(e)+"\r\n"}))),e.homePhone&&(Array.isArray(e.homePhone)||(e.homePhone=[e.homePhone]),e.homePhone.forEach((function(e){a+=t>=4?'TEL;VALUE=uri;TYPE="voice,home":tel:'+s(e)+"\r\n":"TEL;TYPE=HOME,VOICE:"+s(e)+"\r\n"}))),e.workPhone&&(Array.isArray(e.workPhone)||(e.workPhone=[e.workPhone]),e.workPhone.forEach((function(e){a+=t>=4?'TEL;VALUE=uri;TYPE="voice,work":tel:'+s(e)+"\r\n":"TEL;TYPE=WORK,VOICE:"+s(e)+"\r\n"}))),e.homeFax&&(Array.isArray(e.homeFax)||(e.homeFax=[e.homeFax]),e.homeFax.forEach((function(e){a+=t>=4?'TEL;VALUE=uri;TYPE="fax,home":tel:'+s(e)+"\r\n":"TEL;TYPE=HOME,FAX:"+s(e)+"\r\n"}))),e.workFax&&(Array.isArray(e.workFax)||(e.workFax=[e.workFax]),e.workFax.forEach((function(e){a+=t>=4?'TEL;VALUE=uri;TYPE="fax,work":tel:'+s(e)+"\r\n":"TEL;TYPE=WORK,FAX:"+s(e)+"\r\n"}))),e.otherPhone&&(Array.isArray(e.otherPhone)||(e.otherPhone=[e.otherPhone]),e.otherPhone.forEach((function(e){a+=t>=4?'TEL;VALUE=uri;TYPE="voice,other":tel:'+s(e)+"\r\n":"TEL;TYPE=OTHER:"+s(e)+"\r\n"}))),[{details:e.homeAddress,type:"HOME"},{details:e.workAddress,type:"WORK"}].forEach((function(e){a+=function(e,n){var r="";return(n.details.label||n.details.street||n.details.city||n.details.stateProvince||n.details.postalCode||n.details.countryRegion)&&(t>=4?r="ADR"+e+";TYPE="+n.type+(n.details.label?';LABEL="'+s(n.details.label)+'"':"")+":;;"+s(n.details.street)+";"+s(n.details.city)+";"+s(n.details.stateProvince)+";"+s(n.details.postalCode)+";"+s(n.details.countryRegion)+"\r\n":(n.details.label&&(r="LABEL"+e+";TYPE="+n.type+":"+s(n.details.label)+"\r\n"),r+="ADR"+e+";TYPE="+n.type+":;;"+s(n.details.street)+";"+s(n.details.city)+";"+s(n.details.stateProvince)+";"+s(n.details.postalCode)+";"+s(n.details.countryRegion)+"\r\n")),r}(i,e)})),e.title&&(a+="TITLE"+i+":"+s(e.title)+"\r\n"),e.role&&(a+="ROLE"+i+":"+s(e.role)+"\r\n"),e.organization&&(a+="ORG"+i+":"+s(e.organization)+"\r\n"),e.url&&(a+="URL"+i+":"+s(e.url)+"\r\n"),e.workUrl&&(a+="URL;type=WORK"+i+":"+s(e.workUrl)+"\r\n"),e.note&&(a+="NOTE"+i+":"+s(e.note)+"\r\n"),e.socialUrls)for(var l in e.socialUrls)e.socialUrls.hasOwnProperty(l)&&e.socialUrls[l]&&(a+="X-SOCIALPROFILE"+i+";TYPE="+l+":"+s(e.socialUrls[l])+"\r\n");return e.source&&(a+="SOURCE"+i+":"+s(e.source)+"\r\n"),a+="REV:"+(new Date).toISOString()+"\r\n",e.isOrganization&&(a+="X-ABShowAs:COMPANY\r\n"),a+="END:VCARD\r\n"}}}()},816:function(e,t,s){},817:function(e,t,s){"use strict";e.exports=function(){function e(){return{url:"",mediaType:"",base64:!1,attachFromUrl:function(e,t){this.url=e,this.mediaType=t,this.base64=!1},embedFromFile:function(e){var t=s(768),n=s(818);this.mediaType=n.extname(e).toUpperCase().replace(/\./g,"");var r=t.readFileSync(e);this.url=r.toString("base64"),this.base64=!0},embedFromString:function(e,t){this.mediaType=t,this.url=e,this.base64=!0}}}return{uid:"",birthday:"",cellPhone:"",pagerPhone:"",email:"",workEmail:"",firstName:"",formattedName:"",gender:"",homeAddress:{label:"",street:"",city:"",stateProvince:"",postalCode:"",countryRegion:""},homePhone:"",homeFax:"",lastName:"",logo:e(),middleName:"",namePrefix:"",nameSuffix:"",nickname:"",note:"",organization:"",photo:e(),role:"",socialUrls:{facebook:"",linkedIn:"",twitter:"",flickr:""},source:"",title:"",url:"",workUrl:"",workAddress:{label:"",street:"",city:"",stateProvince:"",postalCode:"",countryRegion:""},workPhone:"",workFax:"",version:"3.0",getMajorVersion:function(){var e=this.version?this.version.split(".")[0]:"4";return isNaN(e)?4:parseInt(e)},getFormattedString:function(){return s(769).getFormattedString(this)},saveToFile:function(e){var t=s(769).getFormattedString(this);s(768).writeFileSync(e,t,{encoding:"utf8"})}}}},818:function(e,t,s){(function(e){function s(e,t){for(var s=0,n=e.length-1;n>=0;n--){var r=e[n];"."===r?e.splice(n,1):".."===r?(e.splice(n,1),s++):s&&(e.splice(n,1),s--)}if(t)for(;s--;s)e.unshift("..");return e}function n(e,t){if(e.filter)return e.filter(t);for(var s=[],n=0;n<e.length;n++)t(e[n],n,e)&&s.push(e[n]);return s}t.resolve=function(){for(var t="",r=!1,a=arguments.length-1;a>=-1&&!r;a--){var i=a>=0?arguments[a]:e.cwd();if("string"!==typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,r="/"===i.charAt(0))}return(r?"/":"")+(t=s(n(t.split("/"),(function(e){return!!e})),!r).join("/"))||"."},t.normalize=function(e){var a=t.isAbsolute(e),i="/"===r(e,-1);return(e=s(n(e.split("/"),(function(e){return!!e})),!a).join("/"))||a||(e="."),e&&i&&(e+="/"),(a?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,s){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var s=e.length-1;s>=0&&""===e[s];s--);return t>s?[]:e.slice(t,s-t+1)}e=t.resolve(e).substr(1),s=t.resolve(s).substr(1);for(var r=n(e.split("/")),a=n(s.split("/")),i=Math.min(r.length,a.length),c=i,l=0;l<i;l++)if(r[l]!==a[l]){c=l;break}var o=[];for(l=c;l<r.length;l++)o.push("..");return(o=o.concat(a.slice(c))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),s=47===t,n=-1,r=!0,a=e.length-1;a>=1;--a)if(47===(t=e.charCodeAt(a))){if(!r){n=a;break}}else r=!1;return-1===n?s?"/":".":s&&1===n?"/":e.slice(0,n)},t.basename=function(e,t){var s=function(e){"string"!==typeof e&&(e+="");var t,s=0,n=-1,r=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!r){s=t+1;break}}else-1===n&&(r=!1,n=t+1);return-1===n?"":e.slice(s,n)}(e);return t&&s.substr(-1*t.length)===t&&(s=s.substr(0,s.length-t.length)),s},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,s=0,n=-1,r=!0,a=0,i=e.length-1;i>=0;--i){var c=e.charCodeAt(i);if(47!==c)-1===n&&(r=!1,n=i+1),46===c?-1===t?t=i:1!==a&&(a=1):-1!==t&&(a=-1);else if(!r){s=i+1;break}}return-1===t||-1===n||0===a||1===a&&t===n-1&&t===s+1?"":e.slice(t,n)};var r="b"==="ab".substr(-1)?function(e,t,s){return e.substr(t,s)}:function(e,t,s){return t<0&&(t=e.length+t),e.substr(t,s)}}).call(this,s(435))},884:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s.n(n),a=s(22),i=s(25),c=s.n(i),l=s(45),o=s(735),d=(s(39),s(733)),h=(s(734),s(15)),j=s(51),b=s(887),m=s(742),u=s.n(m),g=s(749),O=s(752),f=s(188),p=(s(816),s(817),function(e){var t=Object(n.useState)({}),s=Object(o.a)(t,2),a=s[0],i=s[1],m=Object(n.useState)(!1),p=Object(o.a)(m,2),x=p[0],N=p[1],v=Object(n.useState)(!1),E=Object(o.a)(v,2),y=E[0],w=E[1];var A=function(){N(!x)},T=function(){w(!y)};return r.a.useEffect((function(){j.e.get("profile/details/"+e.officer_id+"/").then(function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t.data.data),i(t.data.data);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(d.L,{show:y,onClose:T,centered:!0,children:[Object(h.jsx)(d.O,{closeButton:!0,children:"Download Business Card"}),Object(h.jsx)(d.M,{className:"text-style",children:Object(h.jsx)(d.m,{children:Object(h.jsxs)(d.T,{children:[Object(h.jsx)(d.l,{md:"4",sm:"12",children:Object(h.jsx)("img",{src:"http://103.123.8.52:8075/media/uploads/users/images/8_K285K2J.jpg",className:"avatar-img"})}),Object(h.jsxs)(d.l,{md:"8",sm:"12",children:[Object(h.jsx)("h3",{children:"Alaimo Judith"}),Object(h.jsx)("h5",{children:"Sergeant"}),Object(h.jsx)("h6",{children:"Retired on 23/06/2021"}),Object(h.jsx)("h5",{children:"CCN:10388"})]}),Object(h.jsxs)(d.l,{md:"12 d-flex",children:[Object(h.jsx)("h6",{className:"d-inline-block sub-attr",children:"Hired : 11/12/2012"}),Object(h.jsx)("h6",{className:"d-inline-block sub-attr",children:"Height : 5'9''"}),Object(h.jsx)("h6",{className:"d-inline-block sub-attr",children:"Eyes : Hazel"}),Object(h.jsx)("h6",{className:"d-inline-block sub-attr",children:"Hair : Brown"}),Object(h.jsx)("h6",{className:"d-inline-block sub-attr",children:"DOB : 19/06/1984"})]}),Object(h.jsx)(d.l,{md:"12",className:"text-center",children:Object(h.jsx)("h5",{children:"Contact Number : +1289354759349"})})]})})}),Object(h.jsxs)(d.N,{children:[Object(h.jsx)(d.d,{color:"success",children:"Download Business Card"})," ",Object(h.jsx)(d.d,{color:"secondary",onClick:T,children:"Cancel"})]})]}),Object(h.jsxs)(d.L,{show:x,onClose:A,centered:!0,children:[Object(h.jsx)(d.O,{closeButton:!0,children:"Rate Officer"}),Object(h.jsx)(d.M,{children:Object(h.jsxs)(d.u,{children:[Object(h.jsx)("div",{className:"mb-3",children:Object(h.jsx)(u.a,{name:"rate1",starCount:5,value:4})}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(d.J,{htmlFor:"rating-type",children:"Rating Type"}),Object(h.jsxs)(d.U,{custom:!0,name:"rating-type",id:"rating-type",children:[Object(h.jsx)("option",{hidden:!0,children:"Rating Type"}),Object(h.jsx)("option",{value:"1",children:"Positive"}),Object(h.jsx)("option",{value:"2",children:"Negative"}),Object(h.jsx)("option",{value:"3",children:"Neutral"})]}),Object(h.jsx)(d.w,{id:"emailHelp",children:"* Required Field"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(d.J,{htmlFor:"userName",children:"FeedBack"}),Object(h.jsx)(d.eb,{type:"text",id:"userFeedBack","aria-describedby":"feedHelp"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(d.J,{htmlFor:"formFileMultiple",children:"Attachment(s)"}),Object(h.jsx)(d.C,{type:"file",id:"formFileMultiple",multiple:!0})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("h5",{children:"Reviewer Info"}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(d.J,{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(h.jsx)(d.C,{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(h.jsx)(d.w,{id:"emailHelp",children:"* Required Field"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(d.J,{htmlFor:"userName",children:"Reviewer Name"}),Object(h.jsx)(d.C,{type:"text",id:"userName","aria-describedby":"nameHelp"}),Object(h.jsx)(d.w,{id:"nameHelp",children:"* Required Field"})]})]})}),Object(h.jsxs)(d.N,{children:[Object(h.jsx)(d.d,{color:"primary",children:"Submit"})," ",Object(h.jsx)(d.d,{color:"secondary",onClick:A,children:"Cancel"})]})]}),Object(h.jsxs)("div",{className:"content-holder pt-3",children:[Object(h.jsx)(g.a,{}),Object(h.jsxs)("section",{class:"main-content container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-lg-6  desktop-gap",children:[Object(h.jsx)("h1",{className:"large-title",children:"National Suicide Prevention Lifeline"}),Object(h.jsx)("h4",{className:"small-title",children:"Call Now 1-800-273-TALK (8255)"}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"contact-button btn add-margin",onClick:function(){return window.open("https://suicidepreventionlifeline.org/","_blank")},children:"Contact Us"})})]}),Object(h.jsx)("div",{className:"col-lg-6 desktop-gap",children:Object(h.jsx)("img",{src:"https://static.wixstatic.com/media/27d832_3bfce60b882b4fd585d46915d6d13bfb~mv2.png/v1/fill/w_596,h_224,al_c,lg_1,q_85/hotline.webp",className:"img-fluid align-center"})})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-lg-5 desktop-gap2",children:Object(h.jsx)("div",{className:"left-div",children:Object(h.jsx)("img",{src:j.b+a.profile_pic,className:"img-fluid mx-auto"})})}),Object(h.jsx)("div",{className:"col-lg-7 desktop-gap2",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-lg-6 details-view",children:[Object(h.jsx)("h3",{className:"name-title",children:a.first_name+" "+a.last_name}),Object(h.jsxs)("h5",{className:"creden-number",children:["Position: ",a.designation]}),Object(h.jsxs)("h5",{className:"creden-number",children:["Badge ID: ",a.badge_number]}),Object(h.jsxs)(d.d,{type:"button",className:"btn btn-success rate-btn",onClick:function(){return console.log("setting view"),void N(!0)},children:["Rate ",a.first_name,"!"]})]}),Object(h.jsxs)("div",{className:"rating-section col-lg-6",children:[Object(h.jsx)("span",{className:"star-count",children:"5 stars"})," ",Object(h.jsx)(b.a,{variant:"warning",now:80,className:"height-progress"}),Object(h.jsx)("span",{className:"star-count",children:"4 stars"})," ",Object(h.jsx)(b.a,{variant:"warning",now:60,className:"height-progress"}),Object(h.jsx)("span",{className:"star-count",children:"3 stars"})," ",Object(h.jsx)(b.a,{variant:"warning",now:50,className:"height-progress"}),Object(h.jsx)("span",{className:"star-count",children:"2 stars"})," ",Object(h.jsx)(b.a,{variant:"warning",now:40,className:"height-progress"}),Object(h.jsx)("span",{className:"star-count",children:"1 stars"})," ",Object(h.jsx)(b.a,{variant:"warning",now:20,className:"height-progress"}),Object(h.jsx)("h2",{className:"rating-total mt-1",children:"4.3"}),Object(h.jsx)(u.a,{name:"rate2",editing:!1,emptyStarColor:"#6d706e",starCount:5,value:4}),Object(h.jsx)("h5",{class:"total-ratings",children:"123 ratings"})]}),Object(h.jsxs)("div",{className:"col-lg-12",children:[Object(h.jsxs)("p",{className:"officer-details",children:["Santiago is a United States Army Veteran and a Retired Sergeant with the Broward County Sheriff's Office. He holds one of the highest awards for Bravery- The Gold Cross. He brings his Law Enforcement, Military and Nova Southeastern University Executive leadership skills to Global Accountability Corporation. He is also the Broward County Florida Hispanic American Chambers President and the Broward County American Bangladesh Political Affairs Committee President. Santiago was unanimously chosen to be the president of Global Accountability Corporation because of his skills and great personality that brings people together."," "]}),Object(h.jsxs)("div",{class:"action-buttons",children:[Object(h.jsx)("button",{type:"button",onClick:function(){return console.log("download card"),void w(!0)},class:"dwnld-business-button btn",children:"Download Business Card"}),Object(h.jsx)("button",{className:"btn btn-outline-success assistance-btn",children:"Victim Rights & Assistance"})]})]})]})})]}),Object(h.jsxs)("div",{className:"row flex-column-reverse flex-lg-row",children:[Object(h.jsx)("div",{class:"col-lg-7 desktop-gap2",children:Object(h.jsxs)("div",{class:"row",children:[Object(h.jsxs)("div",{class:"col-lg-6 details-view",children:[Object(h.jsx)("h3",{className:"name-title",children:"Theo Gibbs"}),Object(h.jsx)("h5",{className:"creden-number",children:"Position: CEO"}),Object(h.jsx)("h5",{className:"creden-number",children:"Badge ID: #10250"}),Object(h.jsx)(f.b,{to:"/login",className:"btn btn-success rate-btn",children:"Rate Theo!"})]}),Object(h.jsxs)("div",{className:"rating-section col-lg-6",children:[Object(h.jsx)("span",{className:"star-count",children:"5 stars"})," ",Object(h.jsx)(b.a,{variant:"warning",now:80,className:"height-progress"}),Object(h.jsx)("span",{className:"star-count",children:"4 stars"})," ",Object(h.jsx)(b.a,{variant:"warning",now:60,className:"height-progress"}),Object(h.jsx)("span",{className:"star-count",children:"3 stars"})," ",Object(h.jsx)(b.a,{variant:"warning",now:50,className:"height-progress"}),Object(h.jsx)("span",{className:"star-count",children:"2 stars"})," ",Object(h.jsx)(b.a,{variant:"warning",now:40,className:"height-progress"}),Object(h.jsx)("span",{className:"star-count",children:"1 stars"})," ",Object(h.jsx)(b.a,{variant:"warning",now:20,className:"height-progress"}),Object(h.jsx)("h2",{className:"rating-total mt-1",children:"4.3"}),Object(h.jsx)(u.a,{name:"rate2",editing:!1,emptyStarColor:"#6d706e",starCount:5,value:4}),Object(h.jsx)("h5",{class:"total-ratings",children:"123 ratings"})]}),Object(h.jsxs)("div",{class:"col-lg-12",children:[Object(h.jsx)("p",{class:"officer-details",children:"Theo Gibbs; Founder and CEO of Global Accountability Corp. Theo is an inventor of the applied use of NFC technology in order to generate a previously untapped or created market. This work centers around focused engagement that includes the implementation and production of the aforementioned technology."}),Object(h.jsxs)("div",{class:"action-buttons",children:[Object(h.jsx)("button",{class:"dwnld-business-button btn",children:"Download Business Card"}),Object(h.jsx)("button",{className:"btn btn-outline-success assistance-btn",children:"Victim Rights & Assistance"})]})]})]})}),Object(h.jsx)("div",{class:"col-lg-5 desktop-gap2",children:Object(h.jsx)("div",{class:"right-div",children:Object(h.jsx)("img",{src:"assets/images/theo-demowebp.webp",className:"img-fluid"})})})]}),Object(h.jsx)("div",{className:"row pb-4",children:Object(h.jsxs)("div",{className:"col-lg-12 desktop-gap2",children:[Object(h.jsx)("div",{class:"img-div text-center",children:Object(h.jsx)("img",{src:"assets/images/acountibility-corp.webp",class:"img-fluid"})}),Object(h.jsxs)("h3",{className:"only-head text-center",children:["Less than 60 days from the official release of:"," ",Object(h.jsx)("a",{className:"go-to-class",href:"https://theaccountabilitybadge.com/",children:"The Accountability Badge"})]})]})}),Object(h.jsx)(O.a,{})]})]})]})});t.default=function(e){Object(a.i)().officer_id;return r.a.useEffect((function(){console.log("officer id",e.match.params.id)}),[e.match.params.id]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(p,{officer_id:e.match.params.id})})}}}]);
//# sourceMappingURL=10.2a0cd6a4.chunk.js.map