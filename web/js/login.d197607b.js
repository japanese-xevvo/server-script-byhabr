(function(t){function e(e){for(var r,a,u=e[0],c=e[1],s=e[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={login:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var f=c;i.push([2,"chunk-login-vendors"]),n()})({2:function(t,e,n){t.exports=n("a8ec")},"39f0":function(t,e,n){},"3b44":function(t,e,n){},"489f":function(t,e,n){},"6ac7":function(t,e,n){},8694:function(t,e,n){"use strict";n.d(e,"o",(function(){return a})),n.d(e,"A",(function(){return u})),n.d(e,"x",(function(){return c})),n.d(e,"y",(function(){return s})),n.d(e,"B",(function(){return f})),n.d(e,"z",(function(){return l})),n.d(e,"e",(function(){return d})),n.d(e,"w",(function(){return p})),n.d(e,"I",(function(){return g})),n.d(e,"g",(function(){return h})),n.d(e,"b",(function(){return b})),n.d(e,"d",(function(){return m})),n.d(e,"a",(function(){return y})),n.d(e,"c",(function(){return w})),n.d(e,"C",(function(){return O})),n.d(e,"n",(function(){return S})),n.d(e,"J",(function(){return j})),n.d(e,"h",(function(){return E})),n.d(e,"v",(function(){return C})),n.d(e,"G",(function(){return T})),n.d(e,"l",(function(){return x})),n.d(e,"r",(function(){return L})),n.d(e,"u",(function(){return P})),n.d(e,"D",(function(){return _})),n.d(e,"E",(function(){return I})),n.d(e,"F",(function(){return k})),n.d(e,"t",(function(){return H})),n.d(e,"j",(function(){return M})),n.d(e,"p",(function(){return A})),n.d(e,"N",(function(){return q})),n.d(e,"f",(function(){return B})),n.d(e,"L",(function(){return F})),n.d(e,"O",(function(){return J})),n.d(e,"M",(function(){return D})),n.d(e,"K",(function(){return X})),n.d(e,"s",(function(){return G})),n.d(e,"m",(function(){return z})),n.d(e,"k",(function(){return Q})),n.d(e,"R",(function(){return $})),n.d(e,"i",(function(){return Y})),n.d(e,"P",(function(){return Z})),n.d(e,"H",(function(){return tt})),n.d(e,"Q",(function(){return et})),n.d(e,"q",(function(){return nt}));n("c975"),n("a15b"),n("baa5"),n("13d5"),n("a434"),n("ace4"),n("b0c0"),n("d3b7"),n("ac1f"),n("25f0"),n("8a79"),n("3ca3"),n("5319"),n("841c"),n("1276"),n("2ca0"),n("498a"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("ddb0"),n("2b3d");var r=n("2909"),o=n("b85c"),i=(n("ade3"),n("53ca"));function a(t,e){var n=e.toLowerCase(),r=t.previousSibling;while(!O(r)){if(r.tagName.toLowerCase()===n)return r;r=r.previousSibling}var o=t.nextSibling;while(!O(o)){if(o.tagName.toLowerCase()===n)return o;o=o.nextSibling}return null}function u(t){return O(t)||"string"===typeof t&&0===t.length}function c(t){return O(t)||"string"===typeof t&&0===t.trim().length}function s(t){return O(t)||0===t.length}function f(t){return!!O(t)||("string"===typeof t||Array.isArray(t)?0===t.length:"object"===Object(i["a"])(t)&&l(t))}function l(t){if(O(t))return!0;for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}function d(t,e){p(t,e)||t.classList.add(e)}function p(t,e){return!O(t.classList)&&t.classList.contains(e)}function g(t,e){t.classList.remove(e)}function h(t,e,n,r,o){n=n||"GET";var i=new XMLHttpRequest,a=!O(r);a&&(i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&(200===i.status?r(i.responseText):o&&o(i.status,i.responseText))},o&&i.addEventListener("error",(function(t){console.log("Failed to execute request"),console.log(t),o(-1,"Unknown error occurred")}))),i.open(n,t,a),i.setRequestHeader("X-Requested-With","XMLHttpRequest");try{e instanceof FormData?i.send(e):O(e)?i.send():(i.setRequestHeader("Content-Type","application/json;charset=UTF-8"),i.send(JSON.stringify(e)))}catch(c){throw new b(i.status,c.message)}if(a)return i;if(200===i.status)return i.responseText;var u="Couldn't execute request.";throw!O(i.responseText)&&i.responseText.length>0&&(u=i.responseText),new b(i.status,u)}function v(t,e){function n(t,n){Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,arguments["message"]&&(this.message=arguments["message"]),e&&e.apply(this,arguments)}return n.prototype=Object.create(Error.prototype),n.prototype.name=t,n.prototype.constructor=n,n}var b=v("HttpRequestError",(function(t,e){this.code=t||-1,this.message=e||""})),m=v("SocketClosedError",(function(t,e){this.code=t||-1,this.reason=e||""})),y=v("HttpForbiddenError",(function(t,e){this.code=t||-1,this.message=e||""})),w=v("HttpUnauthorizedError",(function(t,e){this.code=t||-1,this.message=e||""}));function O(t){return"undefined"===typeof t||null===t}function S(t){while(t.firstChild)t.removeChild(t.firstChild)}function j(t,e){var n=t.indexOf(e);return n>=0&&t.splice(n,1),t}function E(t){t.splice(0,t.length)}function C(t){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}var n=e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e();if(t&&t>0){if(n.length<t)while(n.length<t)n+=n;n.length>t&&(n=n.substring(0,t))}return n}function T(t){(console.error||console.log).call(console,t.stack||t)}function x(t){var e=document.getElementById(t).innerHTML.trim(),n=document.createElement("template");n.innerHTML=e;var r=n.content.childNodes[0],o=t.replace(/-template$/g,"");return d(r,o),r}function N(){var t=window.location.search;if(!t||t.length<=1)return{};for(var e=t.substr(1).split("&"),n={},r=0;r<e.length;r++){var o=e[r].split("=",2);if(2===o.length){var i=decodeURIComponent(o[0].replace(/\+/g," ")),a=decodeURIComponent(o[1].replace(/\+/g," "));n[i]=a}}return n}function L(t,e){var n=N(e);return n[t]}function R(){var t=window.location.pathname;return t.substring(0,t.lastIndexOf("/"))}function P(t){var e=window.location,n="https:"===e.protocol.toLowerCase(),r=n?"wss":"ws",o=r+"://"+e.host,i=R();return i&&(o+=i),u(t)?o:(o.endsWith("/")||(o+="/"),o+t)}function _(t){return 2===t.readyState||3===t.readyState}function I(t){return 0===t.readyState}function k(t){return!O(t)&&1===t.readyState}function H(){return[location.protocol,"//",location.host,location.pathname].join("")}function M(t,e){return-1!==t.indexOf(e)}function A(t,e){for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];e(n,r)}}function q(t){return"boolean"===typeof t?t:"string"===typeof t?"true"===t.toLowerCase():Boolean(t)}function B(t,e){if(t===e)return!0;if(O(t)&&O(e))return!0;if(O(t)!==O(e))return!1;if(t.length!==e.length)return!1;for(var n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}function F(t,e,n){if(O(n)&&(n=!1),"checkbox"===t.type?t.checked=e:t.value=e,n){var r=document.createEvent("HTMLEvents"),o="input";"SELECT"===t.tagName&&(o="change"),r.initEvent(o,!0,!0),t.dispatchEvent(r)}}function J(t,e){for(var n={},r=0;r<t.length;r++){var o=t[r];n[o[e]]=o}return n}function U(t,e){return O(t)&&O(e)?0:O(t)?-1:O(e)?1:null}function D(t){var e=function(e,n){var r=U(e,n);if(!O(r))return r;var o=e[t],i=n[t],a=U(e,n);return O(a)?o.toLowerCase().localeCompare(i.toLowerCase()):a};return e.andThen=function(t){return function(n,r){var o=e(n,r);return 0!==o?o:t(n,r)}},e}function X(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e||!W(t,!1)){var n,r=V(t);n=!!O(r)||t.offsetTop<r.scrollTop,t.scrollIntoView(n)}}function V(t){var e=t.parentNode;while(!O(e)){if(e.scrollHeight>e.clientHeight)return e;e=e.parentNode}return e}function W(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=V(t);if(!n)return!1;var r=n.scrollTop,o=r+n.clientHeight,i=t.offsetTop,a=i+t.clientHeight;return e?a>r&&i<o:i>=r&&a<=o}function G(t,e){var n=G.canvas||(G.canvas=document.createElement("canvas")),r=n.getContext("2d");r.font=window.getComputedStyle(e,null).getPropertyValue("font");var o=r.measureText(t);return o.width}function z(t){return JSON.parse(JSON.stringify(t))}function K(t){var e=window.getSelection(),n=document.createRange();n.selectNodeContents(t),e.removeAllRanges(),e.addRange(n);var r=e.toString();return e.removeAllRanges(),r}function Q(t){if(navigator.clipboard){var e=K(t);navigator.clipboard.writeText(e)}else{var n,r,o,i="_hiddenCopyText_",a="INPUT"===t.tagName||"TEXTAREA"===t.tagName;a?(o=t,n=t.selectionStart,r=t.selectionEnd):(o=document.getElementById(i),o||(o=document.createElement("textarea"),o.style.position="absolute",o.style.left="9999px",o.style.top="0",o.id=i,document.body.appendChild(o)),o.value=K(t));var u=document.activeElement;o.focus(),o.setSelectionRange(0,o.value.length);try{document.execCommand("copy")}catch(c){console.error(c)}u&&"function"===typeof u.focus&&u.focus(),a?t.setSelectionRange(n,r):o.textContent="",document.body.removeChild(o),t.scrollIntoView()}}function $(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))}function Y(t,e){e.startsWith(".")&&(e=e.substring(0,e.length-1));var n=t;while(null!=n){if(p(n,e))return n;n=n.parentNode}return n}function Z(t){var e=new URLSearchParams;return A(t,(function(t,n){if(Array.isArray(n)){var r,i=Object(o["a"])(n);try{for(i.s();!(r=i.n()).done;){var a=r.value;e.append(t,a)}}catch(u){i.e(u)}finally{i.f()}}else e.append(t,n)})),e.toString()}function tt(t,e){if(t>e)t++,e++;else if(e===t)return t;var n=Math.random()*(e-t);return Math.floor(n)+t}function et(t){var e,n=Object(o["a"])(t.childNodes);try{for(n.s();!(e=n.n()).done;){var r=e.value;r.nodeType===Node.TEXT_NODE&&(r.data=r.data.trim())}}catch(i){n.e(i)}finally{n.f()}}function nt(t,e){var n=e.toLowerCase(),o=[],i=[];i.push.apply(i,Object(r["a"])(t.childNodes));while(!s(i)){var a=i.shift();a.tagName&&a.tagName.toLowerCase()===n&&o.push(a),i.push.apply(i,Object(r["a"])(a.childNodes))}return o}String.prototype.endsWith||(String.prototype.endsWith=function(t,e){return(void 0===e||e>this.length)&&(e=this.length),this.substring(e-t.length,e)===t})},9068:function(t,e,n){},"9ccb":function(t,e,n){"use strict";n("e1b2"),n("878d"),n("0b11")},"9e77":function(t,e,n){},a2f0:function(t,e,n){},a460:function(t,e,n){"use strict";n("e1b2"),n("619b"),n("d4b8"),n("bd1c"),n("4939"),n("4f8a"),n("948c"),n("f887"),n("39f0"),n("3b44"),n("9e77"),n("489f"),n("6ac7"),n("9068")},a8ec:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("a2f0"),n("f620"),n("9ccb"),n("a460");var r=n("8694"),o="next",i="code",a="POST",u="login";function c(){Object(r["g"])("auth/config",null,"GET",(function(t){var e=document.getElementById("login-content-container"),n=JSON.parse(t);"google_oauth"===n["type"]?f(e,n):"gitlab"===n["type"]?l(e,n):s(e)}))}function s(t){var e=Object(r["l"])("login-credentials-template");t.appendChild(e),M.updateTextFields();var n=t.getElementsByClassName("login-form")[0];n.action=u,n.method=a,n.addEventListener("submit",(function(t){t.preventDefault();var e=new FormData(n);h(e)}))}function f(t,e){d(t,e,"login-google_oauth-template","login-google_oauth-button")}function l(t,e){d(t,e,"login-gitlab-template","login-gitlab-button")}function d(t,e,n,a){var u=Object(r["l"])(n);t.appendChild(u);var c=document.getElementById(a);c.onclick=function(){var t=Object(r["v"])(32),n={token:t,urlFragment:window.location.hash};n[o]=Object(r["r"])(o),O(n);var a={redirect_uri:Object(r["t"])(),state:t,client_id:e["client_id"],scope:e["oauth_scope"],response_type:i},u=Object(r["P"])(a);window.location=e["oauth_url"]+"?"+u},p()}function p(){var t=S(),e=Object(r["r"])(i),n=Object(r["r"])("state");if(t||e){if(!t&&e)return console.log("oauth_state="+t),console.log("oauthResponseCode="+e),void v("Invalid client state. Please try to relogin");var a=t[o],u=t["urlFragment"],c=Object(r["t"])();if(a&&(c+="?"+Object(r["P"])({next:a})),u&&(c+=u),e)window.history.pushState(null,"",c);else{if(Object(r["r"])(o))return;window.location=c}var s=t.token;if(n!==s)return void v("Invalid client state. Please try to relogin");var f=new FormData;f.append(i,e),h(f)}}function g(){return document.getElementsByClassName("login-button")[0]}function h(t){var e,n=Object(r["r"])(o),i=window.location.hash;n&&t.append(o,n);var c=function(){b(),y(),g().removeAttribute("disabled");var t=e.getResponseHeader("Location");t?(i&&(t+=i),window.location=t):v("Invalid server response. Please contact the administrator")},s=function(t,e){var n=g();n.removeAttribute("disabled"),Object(r["j"])([400,401,403,500],t)?v(e):v("Unknown error occurred. Please contact the administrator")};m("Verifying credentials...");var f=g();f.setAttribute("disabled","disabled"),e=Object(r["g"])(u,t,a,c,s)}function v(t){var e=document.getElementsByClassName("login-info-label")[0];e.innerText=t,t&&Object(r["e"])(e,"error")}function b(){v("")}function m(t){var e=document.getElementsByClassName("login-info-label")[0];e.innerText=t,t&&Object(r["I"])(e,"error")}function y(){m("")}window.onload=c;var w="oauth_state";function O(t){sessionStorage.setItem(w,JSON.stringify(t))}function S(){var t=JSON.parse(sessionStorage.getItem(w));return sessionStorage.removeItem(w),t}},e1b2:function(t,e,n){"use strict";(function(t){n("a0c7"),n("586f"),n("068a");var e=n("5213");t.Component=e["a"]}).call(this,n("c8ba"))},f620:function(t,e,n){"use strict";n("e1b2"),n("d340"),n("410d")}});
//# sourceMappingURL=login.d197607b.js.map