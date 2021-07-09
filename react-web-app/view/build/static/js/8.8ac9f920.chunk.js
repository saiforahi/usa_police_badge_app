/*! For license information please see 8.8ac9f920.chunk.js.LICENSE.txt */
(this["webpackJsonpusa-nfc-web-app"]=this["webpackJsonpusa-nfc-web-app"]||[]).push([[8],{732:function(e,t,n){"use strict";var r=n(736);n.d(t,"a",(function(){return r.a})),t.b=r.b},733:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},734:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},735:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(2);var r=n(0),a=n.n(r),o=a.a.createContext({});o.Consumer,o.Provider;function i(e,t){var n=Object(r.useContext)(o);return e||n[t]||t}},736:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f}));var r=n(0),a=n.n(r),o=(n(37),n(733)),i=n.n(o);n(743);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u={},l=function(t,n){!u[n]&&e&&Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),0},s=function(e){var t=e.className,n=e.name,o=e.content,u=e.customClasses,s=e.size,f=e.src,d=e.title,v=e.use,p=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["className","name","content","customClasses","size","src","title","use"]),b=Object(r.useState)(0),m=b[0],y=b[1];Object(r.useMemo)((function(){return y(m+1)}),[n,JSON.stringify[o]]);var h=Object(r.useMemo)((function(){return n&&n.includes("-")?n.replace(/([-_][a-z0-9])/gi,(function(e){return e.toUpperCase()})).replace(/-/gi,""):n}),[m]),g=d?"<title>"+d+"</title>":"",O=Object(r.useMemo)((function(){return o||(n&&a.a.icons?a.a.icons[h]?a.a.icons[h]:l(0,h):void 0)}),[m]),j=Object(r.useMemo)((function(){return Array.isArray(O)?O[1]||O[0]:O}),[m]),x=Array.isArray(O)&&O.length>1?O[0]:"64 64",w=p.viewBox||"0 0 "+x,E=function(){var e=!s&&(p.width||p.height);return"custom"===s||e?"custom-size":s}(),C=i()("c-icon",E&&"c-icon-"+E,t),S=u||C;return a.a.createElement(a.a.Fragment,null,!f&&!v&&a.a.createElement("svg",c({},p,{xmlns:"http://www.w3.org/2000/svg",viewBox:w,className:S,role:"img",dangerouslySetInnerHTML:{__html:g+j}})),f&&!v&&a.a.createElement("img",c({},p,{className:t,src:f,role:"img"})),!f&&v&&a.a.createElement("svg",c({},p,{xmlns:"http://www.w3.org/2000/svg",className:S,role:"img"}),a.a.createElement("use",{href:v})))};s.propTypes={},t.b=s;var f=function(e){return l(),a.a.createElement(s,e)}}).call(this,n(434))},741:function(e,t,n){"use strict";var r=n(0),a=n.n(r).a.createContext(null);a.displayName="NavbarContext",t.a=a},743:function(e,t,n){},744:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(0),a=n.n(r).a.createContext(null),o=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null};t.a=a},754:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a,o,i,c){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,o,i,c],s=0;(u=new Error(t.replace(/%s/g,(function(){return l[s++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},755:function(e,t,n){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)}},763:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(2),a=n(23),o=n(0);n(754);function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function c(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function u(e,t){return Object.keys(t).reduce((function(n,u){var l,s=n,f=s[i(u)],d=s[u],v=Object(a.a)(s,[i(u),u].map(c)),p=t[u],b=function(e,t,n){var r=Object(o.useRef)(void 0!==e),a=Object(o.useState)(t),i=a[0],c=a[1],u=void 0!==e,l=r.current;return r.current=u,!u&&l&&i!==t&&c(t),[u?e:i,Object(o.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),c(e)}),[n])]}(d,f,e[p]),m=b[0],y=b[1];return Object(r.a)({},v,((l={})[u]=m,l[p]=y,l))}),e)}n(28);function l(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function s(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function f(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}l.__suppressDeprecationWarning=!0,s.__suppressDeprecationWarning=!0,f.__suppressDeprecationWarning=!0},765:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);var a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=a(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},799:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},800:function(e,t,n){"use strict";t.a=!("undefined"===typeof window||!window.document||!window.document.createElement)},801:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,o.default)(r)};var r,a=n(802),o=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},802:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,i){var c=a||"<<anonymous>>",u=i||r;if(null==n[r])return t?new Error("Required "+o+" `"+u+"` was not specified in `"+c+"`."):null;for(var l=arguments.length,s=Array(l>6?l-6:0),f=6;f<l;f++)s[f-6]=arguments[f];return e.apply(void 0,[n,r,c,o,u].concat(s))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},803:function(e,t,n){"use strict";var r=function(){};e.exports=r},805:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=u(a),i=u(n(37)),c=u(n(733));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={value:e.value},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.value;null!=t&&t!==this.state.value&&this.setState({value:t})}},{key:"onChange",value:function(e){var t=this.props,n=t.editing,r=t.value;n&&null==r&&this.setState({value:e})}},{key:"onStarClick",value:function(e,t,n,r){r.stopPropagation();var a=this.props,o=a.onStarClick;a.editing&&o&&o(e,t,n,r)}},{key:"onStarHover",value:function(e,t,n,r){r.stopPropagation();var a=this.props,o=a.onStarHover;a.editing&&o&&o(e,t,n,r)}},{key:"onStarHoverOut",value:function(e,t,n,r){r.stopPropagation();var a=this.props,o=a.onStarHoverOut;a.editing&&o&&o(e,t,n,r)}},{key:"renderStars",value:function(){for(var e=this,t=this.props,n=t.name,r=t.starCount,a=t.starColor,i=t.emptyStarColor,c=t.editing,u=this.state.value,l=function(e,t){return{float:"right",cursor:c?"pointer":"default",color:t>=e?a:i}},s={display:"none",position:"absolute",marginLeft:-9999},f=[],d=function(t){var r=n+"_"+t,a=o.default.createElement("input",{key:"input_"+r,style:s,className:"dv-star-rating-input",type:"radio",name:n,id:r,value:t,checked:u===t,onChange:e.onChange.bind(e,t,n)}),i=o.default.createElement("label",{key:"label_"+r,style:l(t,u),className:"dv-star-rating-star "+(u>=t?"dv-star-rating-full-star":"dv-star-rating-empty-star"),htmlFor:r,onClick:function(r){return e.onStarClick(t,u,n,r)},onMouseOver:function(r){return e.onStarHover(t,u,n,r)},onMouseLeave:function(r){return e.onStarHoverOut(t,u,n,r)}},e.renderIcon(t,u,n,r));f.push(a),f.push(i)},v=r;v>0;v--)d(v);return f.length?f:null}},{key:"renderIcon",value:function(e,t,n,r){var a=this.props,i=a.renderStarIcon,c=a.renderStarIconHalf;return"function"===typeof c&&Math.ceil(t)===e&&t%1!==0?c(e,t,n,r):"function"===typeof i?i(e,t,n,r):o.default.createElement("i",{key:"icon_"+r,style:{fontStyle:"normal"}},"\u2605")}},{key:"render",value:function(){var e=this.props,t=e.editing,n=e.className,r=(0,c.default)("dv-star-rating",{"dv-star-rating-non-editable":!t},n);return o.default.createElement("div",{style:{display:"inline-block",position:"relative"},className:r},this.renderStars())}}]),t}(a.Component);l.propTypes={name:i.default.string.isRequired,value:i.default.number,editing:i.default.bool,starCount:i.default.number,starColor:i.default.string,onStarClick:i.default.func,onStarHover:i.default.func,onStarHoverOut:i.default.func,renderStarIcon:i.default.func,renderStarIconHalf:i.default.func},l.defaultProps={starCount:5,editing:!0,starColor:"#ffb400",emptyStarColor:"#333"},t.default=l,e.exports=t.default},856:function(e,t,n){"use strict";var r=n(2),a=n(23),o=n(733),i=n.n(o),c=n(0),u=n.n(c),l=n(763),s=/-(.)/g;var f=n(735),d=["className","bsPrefix","as"],v=function(e){return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var p=["bsPrefix","className","as"],b=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=e.as,l=Object(a.a)(e,p);n=Object(f.a)(n,"navbar-brand");var s=c||(l.href?"a":"span");return u.a.createElement(s,Object(r.a)({},l,{ref:t,className:i()(o,n)}))}));b.displayName="NavbarBrand";var m=b,y=n(799);function h(e,t){return function(e){var t=Object(y.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var g=/([A-Z])/g;var O=/^ms-/;function j(e){return function(e){return e.replace(g,"-$1").toLowerCase()}(e).replace(O,"-ms-")}var x=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var w=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(j(t))||h(e).getPropertyValue(j(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!x.test(e))}(a)?n+=j(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(j(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},E=n(579),C=n(800),S=!1,N=!1;try{var P={get passive(){return S=!0},get once(){return N=S=!0}};C.a&&(window.addEventListener("test",P,P),window.removeEventListener("test",P,!0))}catch(re){}var _=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!N){var a=r.once,o=r.capture,i=n;!N&&a&&(i=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=i),e.addEventListener(t,i,S?r:o)}e.addEventListener(t,n,r)};var k=function(e,t,n,r){var a=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var T=function(e,t,n,r){return _(e,t,n,r),function(){k(e,t,n,r)}};function A(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,n,r),e.dispatchEvent(a)}}(e,"transitionend",!0)}),t+n),o=T(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}function R(e,t,n,r){null==n&&(n=function(e){var t=w(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var a=A(e,n,r),o=T(e,"transitionend",t);return function(){a(),o()}}function I(e,t){var n=w(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function D(e,t){var n=I(e,"transitionDuration"),r=I(e,"transitionDelay"),a=R(e,(function(n){n.target===e&&(a(),t(n))}),n+r)}var K=n(755);var M,L=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],H={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function F(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=H[e];return n+parseInt(w(t,r[0]),10)+parseInt(w(t,r[1]),10)}var U=((M={})[E.c]="collapse",M[E.d]="collapsing",M[E.b]="collapsing",M[E.a]="collapse show",M),B={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:F},V=u.a.forwardRef((function(e,t){var n=e.onEnter,o=e.onEntering,l=e.onEntered,s=e.onExit,f=e.onExiting,d=e.className,v=e.children,p=e.dimension,b=void 0===p?"height":p,m=e.getDimensionValue,y=void 0===m?F:m,h=Object(a.a)(e,L),g="function"===typeof b?b():b,O=Object(c.useMemo)((function(){return Object(K.a)((function(e){e.style[g]="0"}),n)}),[g,n]),j=Object(c.useMemo)((function(){return Object(K.a)((function(e){var t="scroll"+g[0].toUpperCase()+g.slice(1);e.style[g]=e[t]+"px"}),o)}),[g,o]),x=Object(c.useMemo)((function(){return Object(K.a)((function(e){e.style[g]=null}),l)}),[g,l]),w=Object(c.useMemo)((function(){return Object(K.a)((function(e){e.style[g]=y(g,e)+"px",e.offsetHeight}),s)}),[s,y,g]),C=Object(c.useMemo)((function(){return Object(K.a)((function(e){e.style[g]=null}),f)}),[g,f]);return u.a.createElement(E.e,Object(r.a)({ref:t,addEndListener:D},h,{"aria-expanded":h.role?h.in:null,onEnter:O,onEntering:j,onEntered:x,onExit:w,onExiting:C}),(function(e,t){return u.a.cloneElement(v,Object(r.a)({},t,{className:i()(d,v.props.className,U[e],"width"===g&&"width")}))}))}));V.defaultProps=B;var W=V,q=n(741),z=["children","bsPrefix"],J=u.a.forwardRef((function(e,t){var n=e.children,o=e.bsPrefix,i=Object(a.a)(e,z);return o=Object(f.a)(o,"navbar-collapse"),u.a.createElement(q.a.Consumer,null,(function(e){return u.a.createElement(W,Object(r.a)({in:!(!e||!e.expanded)},i),u.a.createElement("div",{ref:t,className:o},n))}))}));J.displayName="NavbarCollapse";var $=J,X=n(765),Y=["bsPrefix","className","children","label","as","onClick"],Z=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,l=e.children,s=e.label,d=e.as,v=void 0===d?"button":d,p=e.onClick,b=Object(a.a)(e,Y);n=Object(f.a)(n,"navbar-toggler");var m=Object(c.useContext)(q.a)||{},y=m.onToggle,h=m.expanded,g=Object(X.a)((function(e){p&&p(e),y&&y()}));return"button"===v&&(b.type="button"),u.a.createElement(v,Object(r.a)({},b,{ref:t,onClick:g,"aria-label":s,className:i()(o,n,!h&&"collapsed")}),l||u.a.createElement("span",{className:n+"-icon"}))}));Z.displayName="NavbarToggle",Z.defaultProps={label:"Toggle navigation"};var G=Z,Q=n(744),ee=["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"],te=function(e,t){var n=void 0===t?{}:t,o=n.displayName,c=void 0===o?v(e):o,l=n.Component,s=n.defaultProps,p=u.a.forwardRef((function(t,n){var o=t.className,c=t.bsPrefix,s=t.as,v=void 0===s?l||"div":s,p=Object(a.a)(t,d),b=Object(f.a)(c,e);return u.a.createElement(v,Object(r.a)({ref:n,className:i()(o,b)},p))}));return p.defaultProps=s,p.displayName=c,p}("navbar-text",{Component:"span"}),ne=u.a.forwardRef((function(e,t){var n=Object(l.a)(e,{expanded:"onToggle"}),o=n.bsPrefix,s=n.expand,d=n.variant,v=n.bg,p=n.fixed,b=n.sticky,m=n.className,y=n.children,h=n.as,g=void 0===h?"nav":h,O=n.expanded,j=n.onToggle,x=n.onSelect,w=n.collapseOnSelect,E=Object(a.a)(n,ee),C=Object(f.a)(o,"navbar"),S=Object(c.useCallback)((function(){x&&x.apply(void 0,arguments),w&&O&&j&&j(!1)}),[x,w,O,j]);void 0===E.role&&"nav"!==g&&(E.role="navigation");var N=C+"-expand";"string"===typeof s&&(N=N+"-"+s);var P=Object(c.useMemo)((function(){return{onToggle:function(){return j&&j(!O)},bsPrefix:C,expanded:!!O}}),[C,O,j]);return u.a.createElement(q.a.Provider,{value:P},u.a.createElement(Q.a.Provider,{value:S},u.a.createElement(g,Object(r.a)({ref:t},E,{className:i()(m,C,s&&N,d&&C+"-"+d,v&&"bg-"+v,b&&"sticky-"+b,p&&"fixed-"+p)}),y)))}));ne.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},ne.displayName="Navbar",ne.Brand=m,ne.Toggle=G,ne.Collapse=$,ne.Text=te;t.a=ne},858:function(e,t,n){"use strict";var r=n(2),a=n(23),o=n(733),i=n.n(o),c=(n(801),n(0)),u=n.n(c),l=n(763),s=n(735),f=n(741),d=u.a.createContext(null);d.displayName="CardContext";var v=d,p=Function.prototype.bind.call(Function.prototype.call,[].slice);var b=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var m=function(e,t){return Object(c.useMemo)((function(){return function(e,t){var n=b(e),r=b(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])},y=u.a.createContext(null);y.displayName="NavContext";var h=y,g=n(744),O=u.a.createContext(null),j=["as","onSelect","activeKey","role","onKeyDown"],x=function(){},w=u.a.forwardRef((function(e,t){var n,o,i=e.as,l=void 0===i?"ul":i,s=e.onSelect,f=e.activeKey,d=e.role,v=e.onKeyDown,b=Object(a.a)(e,j),y=Object(c.useReducer)((function(e){return!e}),!1)[1],w=Object(c.useRef)(!1),E=Object(c.useContext)(g.a),C=Object(c.useContext)(O);C&&(d=d||"tablist",f=C.activeKey,n=C.getControlledId,o=C.getControllerId);var S=Object(c.useRef)(null),N=function(e){var t=S.current;if(!t)return null;var n,r=(n="[data-rb-event-key]:not(.disabled)",p(t.querySelectorAll(n))),a=t.querySelector(".active");if(!a)return null;var o=r.indexOf(a);if(-1===o)return null;var i=o+e;return i>=r.length&&(i=0),i<0&&(i=r.length-1),r[i]},P=function(e,t){null!=e&&(s&&s(e,t),E&&E(e,t))};Object(c.useEffect)((function(){if(S.current&&w.current){var e=S.current.querySelector("[data-rb-event-key].active");e&&e.focus()}w.current=!1}));var _=m(t,S);return u.a.createElement(g.a.Provider,{value:P},u.a.createElement(h.Provider,{value:{role:d,activeKey:Object(g.b)(f),getControlledId:n||x,getControllerId:o||x}},u.a.createElement(l,Object(r.a)({},b,{onKeyDown:function(e){var t;switch(v&&v(e),e.key){case"ArrowLeft":case"ArrowUp":t=N(-1);break;case"ArrowRight":case"ArrowDown":t=N(1);break;default:return}t&&(e.preventDefault(),P(t.dataset.rbEventKey,e),w.current=!0,y())},ref:_,role:d}))))})),E=["bsPrefix","className","children","as"],C=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=e.children,l=e.as,f=void 0===l?"div":l,d=Object(a.a)(e,E);return n=Object(s.a)(n,"nav-item"),u.a.createElement(f,Object(r.a)({},d,{ref:t,className:i()(o,n)}),c)}));C.displayName="NavItem";var S=C,N=n(755),P=["as","disabled","onKeyDown"];function _(e){return!e||"#"===e.trim()}var k=u.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"a":n,i=e.disabled,c=e.onKeyDown,l=Object(a.a)(e,P),s=function(e){var t=l.href,n=l.onClick;(i||_(t))&&e.preventDefault(),i?e.stopPropagation():n&&n(e)};return _(l.href)&&(l.role=l.role||"button",l.href=l.href||"#"),i&&(l.tabIndex=-1,l["aria-disabled"]=!0),u.a.createElement(o,Object(r.a)({ref:t},l,{onClick:s,onKeyDown:Object(N.a)((function(e){" "===e.key&&(e.preventDefault(),s(e))}),c)}))}));k.displayName="SafeAnchor";var T=k,A=n(765),R=(n(803),["active","className","eventKey","onSelect","onClick","as"]),I=u.a.forwardRef((function(e,t){var n=e.active,o=e.className,l=e.eventKey,s=e.onSelect,f=e.onClick,d=e.as,v=Object(a.a)(e,R),p=Object(g.b)(l,v.href),b=Object(c.useContext)(g.a),m=Object(c.useContext)(h),y=n;if(m){v.role||"tablist"!==m.role||(v.role="tab");var O=m.getControllerId(p),j=m.getControlledId(p);v["data-rb-event-key"]=p,v.id=O||v.id,v["aria-controls"]=j||v["aria-controls"],y=null==n&&null!=p?m.activeKey===p:n}"tab"===v.role&&(v.disabled&&(v.tabIndex=-1,v["aria-disabled"]=!0),v["aria-selected"]=y);var x=Object(A.a)((function(e){f&&f(e),null!=p&&(s&&s(p,e),b&&b(p,e))}));return u.a.createElement(d,Object(r.a)({},v,{ref:t,onClick:x,className:i()(o,y&&"active")}))}));I.defaultProps={disabled:!1};var D=I,K=["bsPrefix","disabled","className","href","eventKey","onSelect","as"],M={disabled:!1,as:T},L=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.disabled,c=e.className,l=e.href,f=e.eventKey,d=e.onSelect,v=e.as,p=Object(a.a)(e,K);return n=Object(s.a)(n,"nav-link"),u.a.createElement(D,Object(r.a)({},p,{href:l,ref:t,eventKey:f,as:v,disabled:o,onSelect:d,className:i()(c,n,o&&"disabled")}))}));L.displayName="NavLink",L.defaultProps=M;var H=L,F=["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","children","activeKey"],U=u.a.forwardRef((function(e,t){var n,o,d,p=Object(l.a)(e,{activeKey:"onSelect"}),b=p.as,m=void 0===b?"div":b,y=p.bsPrefix,h=p.variant,g=p.fill,O=p.justify,j=p.navbar,x=p.navbarScroll,E=p.className,C=p.children,S=p.activeKey,N=Object(a.a)(p,F),P=Object(s.a)(y,"nav"),_=!1,k=Object(c.useContext)(f.a),T=Object(c.useContext)(v);return k?(o=k.bsPrefix,_=null==j||j):T&&(d=T.cardHeaderBsPrefix),u.a.createElement(w,Object(r.a)({as:m,ref:t,activeKey:S,className:i()(E,(n={},n[P]=!_,n[o+"-nav"]=_,n[o+"-nav-scroll"]=_&&x,n[d+"-"+h]=!!d,n[P+"-"+h]=!!h,n[P+"-fill"]=g,n[P+"-justified"]=O,n))},N),C)}));U.displayName="Nav",U.defaultProps={justify:!1,fill:!1},U.Item=S,U.Link=H;t.a=U},866:function(e,t,n){"use strict";var r=n(2),a=n(23),o=n(733),i=n.n(o),c=n(0),u=n.n(c),l=n(735);var s=["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"],f=["isChild"],d=["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"];function v(e,t,n){var r=(e-t)/(n-t)*100;return Math.round(1e3*r)/1e3}function p(e,t){var n,o=e.min,c=e.now,l=e.max,f=e.label,d=e.srOnly,p=e.striped,b=e.animated,m=e.className,y=e.style,h=e.variant,g=e.bsPrefix,O=Object(a.a)(e,s);return u.a.createElement("div",Object(r.a)({ref:t},O,{role:"progressbar",className:i()(m,g+"-bar",(n={},n["bg-"+h]=h,n[g+"-bar-animated"]=b,n[g+"-bar-striped"]=b||p,n)),style:Object(r.a)({width:v(c,o,l)+"%"},y),"aria-valuenow":c,"aria-valuemin":o,"aria-valuemax":l}),d?u.a.createElement("span",{className:"sr-only"},f):f)}var b=u.a.forwardRef((function(e,t){var n=e.isChild,o=Object(a.a)(e,f);if(o.bsPrefix=Object(l.a)(o.bsPrefix,"progress"),n)return p(o,t);var s=o.min,v=o.now,b=o.max,m=o.label,y=o.srOnly,h=o.striped,g=o.animated,O=o.bsPrefix,j=o.variant,x=o.className,w=o.children,E=Object(a.a)(o,d);return u.a.createElement("div",Object(r.a)({ref:t},E,{className:i()(x,O)}),w?function(e,t){var n=0;return u.a.Children.map(e,(function(e){return u.a.isValidElement(e)?t(e,n++):e}))}(w,(function(e){return Object(c.cloneElement)(e,{isChild:!0})})):p({min:s,now:v,max:b,label:m,srOnly:y,striped:h,animated:g,bsPrefix:O,variant:j},t))}));b.displayName="ProgressBar",b.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1};t.a=b}}]);
//# sourceMappingURL=8.8ac9f920.chunk.js.map