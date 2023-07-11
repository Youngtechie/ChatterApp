import{h as Du,C as _u,r as dr,F as xu,f as Ru,_ as Mu,e as Lu,L as ke,i as Ou,g as lt,S as Fu,k as bu}from"./useAuth.vue_vue_type_script_lang-77171506.js";var Pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,si=si||{},A=Pu||self;function bn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function je(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Vu(e){return Object.prototype.hasOwnProperty.call(e,Es)&&e[Es]||(e[Es]=++Uu)}var Es="closure_uid_"+(1e9*Math.random()>>>0),Uu=0;function $u(e,t,n){return e.call.apply(e.bind,arguments)}function qu(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function J(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?J=$u:J=qu,J.apply(null,arguments)}function un(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function z(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function Lt(){this.s=this.s,this.o=this.o}var Bu=0;Lt.prototype.s=!1;Lt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Bu!=0)&&Vu(this)};Lt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ho=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ii(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function fr(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(bn(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function Z(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};var ju=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{A.addEventListener("test",()=>{},t),A.removeEventListener("test",()=>{},t)}catch{}return e}();function De(e){return/^[\s\xa0]*$/.test(e)}function Pn(){var e=A.navigator;return e&&(e=e.userAgent)?e:""}function pt(e){return Pn().indexOf(e)!=-1}function ri(e){return ri[" "](e),e}ri[" "]=function(){};function zu(e,t){var n=bc;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Ku=pt("Opera"),ne=pt("Trident")||pt("MSIE"),lo=pt("Edge"),Ms=lo||ne,fo=pt("Gecko")&&!(Pn().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge"))&&!(pt("Trident")||pt("MSIE"))&&!pt("Edge"),Gu=Pn().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge");function go(){var e=A.document;return e?e.documentMode:void 0}var Ls;t:{var Ts="",Is=function(){var e=Pn();if(fo)return/rv:([^\);]+)(\)|;)/.exec(e);if(lo)return/Edge\/([\d\.]+)/.exec(e);if(ne)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Gu)return/WebKit\/(\S+)/.exec(e);if(Ku)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Is&&(Ts=Is?Is[1]:""),ne){var Ss=go();if(Ss!=null&&Ss>parseFloat(Ts)){Ls=String(Ss);break t}}Ls=Ts}var Os;if(A.document&&ne){var gr=go();Os=gr||parseInt(Ls,10)||void 0}else Os=void 0;var Qu=Os;function _e(e,t){if(Z.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(fo){t:{try{ri(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Hu[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&_e.$.h.call(this)}}z(_e,Z);var Hu={2:"touch",3:"pen",4:"mouse"};_e.prototype.h=function(){_e.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),Wu=0;function Yu(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.la=i,this.key=++Wu,this.fa=this.ia=!1}function Vn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function oi(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Xu(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function po(e){const t={};for(const n in e)t[n]=e[n];return t}const pr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mo(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<pr.length;r++)n=pr[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Un(e){this.src=e,this.g={},this.h=0}Un.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=bs(e,t,s,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Yu(t,this.src,r,!!s,i),t.ia=n,e.push(t)),t};function Fs(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=ho(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Vn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function bs(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==s)return i}return-1}var ai="closure_lm_"+(1e6*Math.random()|0),As={};function yo(e,t,n,s,i){if(s&&s.once)return wo(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)yo(e,t[r],n,s,i);return null}return n=hi(n),e&&e[ze]?e.O(t,n,je(s)?!!s.capture:!!s,i):vo(e,t,n,!1,s,i)}function vo(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=je(i)?!!i.capture:!!i,a=ci(e);if(a||(e[ai]=a=new Un(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Ju(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)ju||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(To(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ju(){function e(n){return t.call(e.src,e.listener,n)}const t=Zu;return e}function wo(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)wo(e,t[r],n,s,i);return null}return n=hi(n),e&&e[ze]?e.P(t,n,je(s)?!!s.capture:!!s,i):vo(e,t,n,!0,s,i)}function Eo(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)Eo(e,t[r],n,s,i);else s=je(s)?!!s.capture:!!s,n=hi(n),e&&e[ze]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=bs(r,n,s,i),-1<n&&(Vn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=ci(e))&&(t=e.g[t.toString()],e=-1,t&&(e=bs(t,n,s,i)),(n=-1<e?t[e]:null)&&ui(n))}function ui(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[ze])Fs(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(To(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=ci(t))?(Fs(n,e),n.h==0&&(n.src=null,t[ai]=null)):Vn(e)}}}function To(e){return e in As?As[e]:As[e]="on"+e}function Zu(e,t){if(e.fa)e=!0;else{t=new _e(t,this);var n=e.listener,s=e.la||e.src;e.ia&&ui(e),e=n.call(s,t)}return e}function ci(e){return e=e[ai],e instanceof Un?e:null}var Cs="__closure_events_fn_"+(1e9*Math.random()>>>0);function hi(e){return typeof e=="function"?e:(e[Cs]||(e[Cs]=function(t){return e.handleEvent(t)}),e[Cs])}function j(){Lt.call(this),this.i=new Un(this),this.S=this,this.J=null}z(j,Lt);j.prototype[ze]=!0;j.prototype.removeEventListener=function(e,t,n,s){Eo(this,e,t,n,s)};function Q(e,t){var n,s=e.J;if(s)for(n=[];s;s=s.J)n.push(s);if(e=e.S,s=t.type||t,typeof t=="string")t=new Z(t,e);else if(t instanceof Z)t.target=t.target||e;else{var i=t;t=new Z(s,e),mo(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=cn(o,s,!0,t)&&i}if(o=t.g=e,i=cn(o,s,!0,t)&&i,i=cn(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=cn(o,s,!1,t)&&i}j.prototype.N=function(){if(j.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Vn(n[s]);delete e.g[t],e.h--}}this.J=null};j.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};j.prototype.P=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function cn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&Fs(e.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var li=A.JSON.stringify;class tc{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function ec(){var e=di;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class nc{constructor(){this.h=this.g=null}add(t,n){const s=Io.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Io=new tc(()=>new sc,e=>e.reset());class sc{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ic(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function rc(e){A.setTimeout(()=>{throw e},0)}let xe,Re=!1,di=new nc,So=()=>{const e=A.Promise.resolve(void 0);xe=()=>{e.then(oc)}};var oc=()=>{for(var e;e=ec();){try{e.h.call(e.g)}catch(n){rc(n)}var t=Io;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Re=!1};function $n(e,t){j.call(this),this.h=e||1,this.g=t||A,this.j=J(this.qb,this),this.l=Date.now()}z($n,j);y=$n.prototype;y.ga=!1;y.T=null;y.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Q(this,"tick"),this.ga&&(fi(this),this.start()))}};y.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fi(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}y.N=function(){$n.$.N.call(this),fi(this),delete this.g};function gi(e,t,n){if(typeof e=="function")n&&(e=J(e,n));else if(e&&typeof e.handleEvent=="function")e=J(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:A.setTimeout(e,t||0)}function Ao(e){e.g=gi(()=>{e.g=null,e.i&&(e.i=!1,Ao(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class ac extends Lt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ao(this)}N(){super.N(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Me(e){Lt.call(this),this.h=e,this.g={}}z(Me,Lt);var mr=[];function Co(e,t,n,s){Array.isArray(n)||(n&&(mr[0]=n.toString()),n=mr);for(var i=0;i<n.length;i++){var r=yo(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function No(e){oi(e.g,function(t,n){this.g.hasOwnProperty(n)&&ui(t)},e),e.g={}}Me.prototype.N=function(){Me.$.N.call(this),No(this)};Me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qn(){this.g=!0}qn.prototype.Ea=function(){this.g=!1};function uc(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function cc(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Xt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+lc(e,n)+(s?" "+s:"")})}function hc(e,t){e.info(function(){return"TIMEOUT: "+t})}qn.prototype.info=function(){};function lc(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return li(n)}catch{return t}}var zt={},yr=null;function Bn(){return yr=yr||new j}zt.Ta="serverreachability";function ko(e){Z.call(this,zt.Ta,e)}z(ko,Z);function Le(e){const t=Bn();Q(t,new ko(t))}zt.STAT_EVENT="statevent";function Do(e,t){Z.call(this,zt.STAT_EVENT,e),this.stat=t}z(Do,Z);function st(e){const t=Bn();Q(t,new Do(t,e))}zt.Ua="timingevent";function _o(e,t){Z.call(this,zt.Ua,e),this.size=t}z(_o,Z);function Ke(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){e()},t)}var jn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},xo={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function pi(){}pi.prototype.h=null;function vr(e){return e.h||(e.h=e.i())}function Ro(){}var Ge={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function mi(){Z.call(this,"d")}z(mi,Z);function yi(){Z.call(this,"c")}z(yi,Z);var Ps;function zn(){}z(zn,pi);zn.prototype.g=function(){return new XMLHttpRequest};zn.prototype.i=function(){return{}};Ps=new zn;function Qe(e,t,n,s){this.l=e,this.j=t,this.m=n,this.W=s||1,this.U=new Me(this),this.P=dc,e=Ms?125:void 0,this.V=new $n(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Mo}function Mo(){this.i=null,this.g="",this.h=!1}var dc=45e3,Vs={},Tn={};y=Qe.prototype;y.setTimeout=function(e){this.P=e};function Us(e,t,n){e.L=1,e.v=Gn(St(t)),e.s=n,e.S=!0,Lo(e,null)}function Lo(e,t){e.G=Date.now(),He(e),e.A=St(e.v);var n=e.A,s=e.W;Array.isArray(s)||(s=[String(s)]),qo(n.i,"t",s),e.C=0,n=e.l.J,e.h=new Mo,e.g=ua(e.l,n?t:null,!e.s),0<e.O&&(e.M=new ac(J(e.Pa,e,e.g),e.O)),Co(e.U,e.g,"readystatechange",e.nb),t=e.I?po(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Le(),uc(e.j,e.u,e.A,e.m,e.W,e.s)}y.nb=function(e){e=e.target;const t=this.M;t&&mt(e)==3?t.l():this.Pa(e)};y.Pa=function(e){try{if(e==this.g)t:{const h=mt(this.g);var t=this.g.Ia();const l=this.g.da();if(!(3>h)&&(h!=3||Ms||this.g&&(this.h.h||this.g.ja()||Ir(this.g)))){this.J||h!=4||t==7||(t==8||0>=l?Le(3):Le(2)),Kn(this);var n=this.g.da();this.ca=n;e:if(Oo(this)){var s=Ir(this.g);e="";var i=s.length,r=mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bt(this),Se(this);var o="";break e}this.h.i=new A.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,cc(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!De(a)){var c=a;break e}}c=null}if(n=c)Xt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$s(this,n);else{this.i=!1,this.o=3,st(12),bt(this),Se(this);break t}}this.S?(Fo(this,h,o),Ms&&this.i&&h==3&&(Co(this.U,this.V,"tick",this.mb),this.V.start())):(Xt(this.j,this.m,o,null),$s(this,o)),h==4&&bt(this),this.i&&!this.J&&(h==4?ia(this.l,this):(this.i=!1,He(this)))}else Lc(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,st(12)):(this.o=0,st(13)),bt(this),Se(this)}}}catch{}finally{}};function Oo(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Fo(e,t,n){let s=!0,i;for(;!e.J&&e.C<n.length;)if(i=fc(e,n),i==Tn){t==4&&(e.o=4,st(14),s=!1),Xt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Vs){e.o=4,st(15),Xt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Xt(e.j,e.m,i,null),$s(e,i);Oo(e)&&i!=Tn&&i!=Vs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,st(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Si(t),t.M=!0,st(11))):(Xt(e.j,e.m,n,"[Invalid Chunked Response]"),bt(e),Se(e))}y.mb=function(){if(this.g){var e=mt(this.g),t=this.g.ja();this.C<t.length&&(Kn(this),Fo(this,e,t),this.i&&e!=4&&He(this))}};function fc(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Tn:(n=Number(t.substring(n,s)),isNaN(n)?Vs:(s+=1,s+n>t.length?Tn:(t=t.slice(s,s+n),e.C=s+n,t)))}y.cancel=function(){this.J=!0,bt(this)};function He(e){e.Y=Date.now()+e.P,bo(e,e.P)}function bo(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ke(J(e.lb,e),t)}function Kn(e){e.B&&(A.clearTimeout(e.B),e.B=null)}y.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(hc(this.j,this.A),this.L!=2&&(Le(),st(17)),bt(this),this.o=2,Se(this)):bo(this,this.Y-e)};function Se(e){e.l.H==0||e.J||ia(e.l,e)}function bt(e){Kn(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,fi(e.V),No(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function $s(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||qs(n.i,e))){if(!e.K&&qs(n.i,e)&&n.H==3){try{var s=n.Ja.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)An(n),Wn(n);else break t;Ii(n),st(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ke(J(n.ib,n),6e3));if(1>=zo(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Pt(n,11)}else if((e.K||n.g==e)&&An(n),!De(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const h=c[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const l=c[4];l!=null&&(n.Ga=l,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=e.g;if(p){const E=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var r=s.i;r.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(vi(r,r.h),r.h=null))}if(s.F){const T=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.Da=T,M(s.I,s.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=e;if(s.wa=aa(s,s.J?s.pa:null,s.Y),o.K){Ko(s.i,o);var a=o,u=s.L;u&&a.setTimeout(u),a.B&&(Kn(a),He(a)),s.g=o}else na(s);0<n.j.length&&Yn(n)}else c[0]!="stop"&&c[0]!="close"||Pt(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Pt(n,7):Ti(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Le(4)}catch{}}function gc(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(bn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function pc(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(bn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Po(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(bn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=pc(e),s=gc(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var Vo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mc(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ut(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ut){this.h=e.h,In(this,e.j),this.s=e.s,this.g=e.g,Sn(this,e.m),this.l=e.l;var t=e.i,n=new Oe;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),wr(this,n),this.o=e.o}else e&&(t=String(e).match(Vo))?(this.h=!1,In(this,t[1]||"",!0),this.s=ve(t[2]||""),this.g=ve(t[3]||"",!0),Sn(this,t[4]),this.l=ve(t[5]||"",!0),wr(this,t[6]||"",!0),this.o=ve(t[7]||"")):(this.h=!1,this.i=new Oe(null,this.h))}Ut.prototype.toString=function(){var e=[],t=this.j;t&&e.push(we(t,Er,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(we(t,Er,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(we(n,n.charAt(0)=="/"?wc:vc,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",we(n,Tc)),e.join("")};function St(e){return new Ut(e)}function In(e,t,n){e.j=n?ve(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Sn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function wr(e,t,n){t instanceof Oe?(e.i=t,Ic(e.i,e.h)):(n||(t=we(t,Ec)),e.i=new Oe(t,e.h))}function M(e,t,n){e.i.set(t,n)}function Gn(e){return M(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ve(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function we(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,yc),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function yc(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Er=/[#\/\?@]/g,vc=/[#\?:]/g,wc=/[#\?]/g,Ec=/[#\?@]/g,Tc=/#/g;function Oe(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ot(e){e.g||(e.g=new Map,e.h=0,e.i&&mc(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}y=Oe.prototype;y.add=function(e,t){Ot(this),this.i=null,e=le(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Uo(e,t){Ot(e),t=le(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function $o(e,t){return Ot(e),t=le(e,t),e.g.has(t)}y.forEach=function(e,t){Ot(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};y.ta=function(){Ot(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};y.Z=function(e){Ot(this);let t=[];if(typeof e=="string")$o(this,e)&&(t=t.concat(this.g.get(le(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};y.set=function(e,t){return Ot(this),this.i=null,e=le(this,e),$o(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};y.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function qo(e,t,n){Uo(e,t),0<n.length&&(e.i=null,e.g.set(le(e,t),ii(n)),e.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function le(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ic(e,t){t&&!e.j&&(Ot(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Uo(this,s),qo(this,i,n))},e)),e.j=t}var Sc=class{constructor(e,t){this.g=e,this.map=t}};function Bo(e){this.l=e||Ac,A.PerformanceNavigationTiming?(e=A.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(A.g&&A.g.Ka&&A.g.Ka()&&A.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ac=10;function jo(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function zo(e){return e.h?1:e.g?e.g.size:0}function qs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function vi(e,t){e.g?e.g.add(t):e.h=t}function Ko(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Bo.prototype.cancel=function(){if(this.i=Go(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Go(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return ii(e.i)}var Cc=class{stringify(e){return A.JSON.stringify(e,void 0)}parse(e){return A.JSON.parse(e,void 0)}};function Nc(){this.g=new Cc}function kc(e,t,n){const s=n||"";try{Po(e,function(i,r){let o=i;je(i)&&(o=li(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Dc(e,t){const n=new qn;if(A.Image){const s=new Image;s.onload=un(hn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=un(hn,n,s,"TestLoadImage: error",!1,t),s.onabort=un(hn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=un(hn,n,s,"TestLoadImage: timeout",!1,t),A.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function hn(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function We(e){this.l=e.fc||null,this.j=e.ob||!1}z(We,pi);We.prototype.g=function(){return new Qn(this.l,this.j)};We.prototype.i=function(e){return function(){return e}}({});function Qn(e,t){j.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=wi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(Qn,j);var wi=0;y=Qn.prototype;y.open=function(e,t){if(this.readyState!=wi)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Fe(this)};y.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||A).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ye(this)),this.readyState=wi};y.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Fe(this)),this.g&&(this.readyState=3,Fe(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof A.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Qo(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Qo(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}y.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ye(this):Fe(this),this.readyState==3&&Qo(this)}};y.Za=function(e){this.g&&(this.response=this.responseText=e,Ye(this))};y.Ya=function(e){this.g&&(this.response=e,Ye(this))};y.ka=function(){this.g&&Ye(this)};function Ye(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Fe(e)}y.setRequestHeader=function(e,t){this.v.append(e,t)};y.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Fe(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Qn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var _c=A.JSON.parse;function F(e){j.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ho,this.L=this.M=!1}z(F,j);var Ho="",xc=/^https?$/i,Rc=["POST","PUT"];y=F.prototype;y.Oa=function(e){this.M=e};y.ha=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ps.g(),this.C=this.u?vr(this.u):vr(Ps),this.g.onreadystatechange=J(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(r){Tr(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=A.FormData&&e instanceof A.FormData,!(0<=ho(Rc,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Xo(this),0<this.B&&((this.L=Mc(this.g))?(this.g.timeout=this.B,this.g.ontimeout=J(this.ua,this)):this.A=gi(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Tr(this,r)}};function Mc(e){return ne&&typeof e.timeout=="number"&&e.ontimeout!==void 0}y.ua=function(){typeof si<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Q(this,"timeout"),this.abort(8))};function Tr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Wo(e),Hn(e)}function Wo(e){e.F||(e.F=!0,Q(e,"complete"),Q(e,"error"))}y.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Q(this,"complete"),Q(this,"abort"),Hn(this))};y.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Hn(this,!0)),F.$.N.call(this)};y.La=function(){this.s||(this.G||this.v||this.l?Yo(this):this.kb())};y.kb=function(){Yo(this)};function Yo(e){if(e.h&&typeof si<"u"&&(!e.C[1]||mt(e)!=4||e.da()!=2)){if(e.v&&mt(e)==4)gi(e.La,0,e);else if(Q(e,"readystatechange"),mt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=o===0){var i=String(e.I).match(Vo)[1]||null;!i&&A.self&&A.self.location&&(i=A.self.location.protocol.slice(0,-1)),s=!xc.test(i?i.toLowerCase():"")}n=s}if(n)Q(e,"complete"),Q(e,"success");else{e.m=6;try{var r=2<mt(e)?e.g.statusText:""}catch{r=""}e.j=r+" ["+e.da()+"]",Wo(e)}}finally{Hn(e)}}}}function Hn(e,t){if(e.g){Xo(e);const n=e.g,s=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Q(e,"ready");try{n.onreadystatechange=s}catch{}}}function Xo(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(A.clearTimeout(e.A),e.A=null)}y.isActive=function(){return!!this.g};function mt(e){return e.g?e.g.readyState:0}y.da=function(){try{return 2<mt(this)?this.g.status:-1}catch{return-1}};y.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),_c(t)}};function Ir(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Ho:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Lc(e){const t={};e=(e.g&&2<=mt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<e.length;s++){if(De(e[s]))continue;var n=ic(e[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=t[i]||[];t[i]=r,r.push(n)}Xu(t,function(s){return s.join(", ")})}y.Ia=function(){return this.m};y.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Jo(e){let t="";return oi(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Ei(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Jo(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):M(e,t,n))}function me(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Zo(e){this.Ga=0,this.j=[],this.l=new qn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=me("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=me("baseRetryDelayMs",5e3,e),this.hb=me("retryDelaySeedMs",1e4,e),this.eb=me("forwardChannelMaxRetries",2,e),this.xa=me("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Bo(e&&e.concurrentRequestLimit),this.Ja=new Nc,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}y=Zo.prototype;y.ra=8;y.H=1;function Ti(e){if(ta(e),e.H==3){var t=e.W++,n=St(e.I);if(M(n,"SID",e.K),M(n,"RID",t),M(n,"TYPE","terminate"),Xe(e,n),t=new Qe(e,e.l,t),t.L=2,t.v=Gn(St(n)),n=!1,A.navigator&&A.navigator.sendBeacon)try{n=A.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&A.Image&&(new Image().src=t.v,n=!0),n||(t.g=ua(t.l,null),t.g.ha(t.v)),t.G=Date.now(),He(t)}oa(e)}function Wn(e){e.g&&(Si(e),e.g.cancel(),e.g=null)}function ta(e){Wn(e),e.u&&(A.clearTimeout(e.u),e.u=null),An(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&A.clearTimeout(e.m),e.m=null)}function Yn(e){if(!jo(e.i)&&!e.m){e.m=!0;var t=e.Na;xe||So(),Re||(xe(),Re=!0),di.add(t,e),e.C=0}}function Oc(e,t){return zo(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Ke(J(e.Na,e,t),ra(e,e.C)),e.C++,!0)}y.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Qe(this,this.l,e);let r=this.s;if(this.U&&(r?(r=po(r),mo(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=ea(this,i,t),n=St(this.I),M(n,"RID",e),M(n,"CVER",22),this.F&&M(n,"X-HTTP-Session-Id",this.F),Xe(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(Jo(r)))+"&"+t:this.o&&Ei(n,this.o,r)),vi(this.i,i),this.bb&&M(n,"TYPE","init"),this.P?(M(n,"$req",t),M(n,"SID","null"),i.aa=!0,Us(i,n,null)):Us(i,n,t),this.H=2}}else this.H==3&&(e?Sr(this,e):this.j.length==0||jo(this.i)||Sr(this))};function Sr(e,t){var n;t?n=t.m:n=e.W++;const s=St(e.I);M(s,"SID",e.K),M(s,"RID",n),M(s,"AID",e.V),Xe(e,s),e.o&&e.s&&Ei(s,e.o,e.s),n=new Qe(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=ea(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),vi(e.i,n),Us(n,s,t)}function Xe(e,t){e.na&&oi(e.na,function(n,s){M(t,s,n)}),e.h&&Po({},function(n,s){M(t,s,n)})}function ea(e,t,n){n=Math.min(e.j.length,n);var s=e.h?J(e.h.Va,e.h,e):null;t:{var i=e.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let c=i[u].g;const h=i[u].map;if(c-=r,0>c)r=Math.max(0,i[u].g-100),a=!1;else try{kc(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,s}function na(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;xe||So(),Re||(xe(),Re=!0),di.add(t,e),e.A=0}}function Ii(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Ke(J(e.Ma,e),ra(e,e.A)),e.A++,!0)}y.Ma=function(){if(this.u=null,sa(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Ke(J(this.jb,this),e)}};y.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,st(10),Wn(this),sa(this))};function Si(e){e.B!=null&&(A.clearTimeout(e.B),e.B=null)}function sa(e){e.g=new Qe(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=St(e.wa);M(t,"RID","rpc"),M(t,"SID",e.K),M(t,"AID",e.V),M(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&M(t,"TO",e.qa),M(t,"TYPE","xmlhttp"),Xe(e,t),e.o&&e.s&&Ei(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Gn(St(t)),n.s=null,n.S=!0,Lo(n,e)}y.ib=function(){this.v!=null&&(this.v=null,Wn(this),Ii(this),st(19))};function An(e){e.v!=null&&(A.clearTimeout(e.v),e.v=null)}function ia(e,t){var n=null;if(e.g==t){An(e),Si(e),e.g=null;var s=2}else if(qs(e.i,t))n=t.F,Ko(e.i,t),s=1;else return;if(e.H!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;s=Bn(),Q(s,new _o(s,n)),Yn(e)}else na(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(s==1&&Oc(e,t)||s==2&&Ii(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Pt(e,5);break;case 4:Pt(e,10);break;case 3:Pt(e,6);break;default:Pt(e,2)}}}function ra(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Pt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var s=J(e.pb,e);n||(n=new Ut("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||In(n,"https"),Gn(n)),Dc(n.toString(),s)}else st(2);e.H=0,e.h&&e.h.za(t),oa(e),ta(e)}y.pb=function(e){e?(this.l.info("Successfully pinged google.com"),st(2)):(this.l.info("Failed to ping google.com"),st(1))};function oa(e){if(e.H=0,e.ma=[],e.h){const t=Go(e.i);(t.length!=0||e.j.length!=0)&&(fr(e.ma,t),fr(e.ma,e.j),e.i.i.length=0,ii(e.j),e.j.length=0),e.h.ya()}}function aa(e,t,n){var s=n instanceof Ut?St(n):new Ut(n);if(s.g!="")t&&(s.g=t+"."+s.g),Sn(s,s.m);else{var i=A.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new Ut(null);s&&In(r,s),t&&(r.g=t),i&&Sn(r,i),n&&(r.l=n),s=r}return n=e.F,t=e.Da,n&&t&&M(s,n,t),M(s,"VER",e.ra),Xe(e,s),s}function ua(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new F(new We({ob:!0})):new F(e.va),t.Oa(e.J),t}y.isActive=function(){return!!this.h&&this.h.isActive(this)};function ca(){}y=ca.prototype;y.Ba=function(){};y.Aa=function(){};y.za=function(){};y.ya=function(){};y.isActive=function(){return!0};y.Va=function(){};function Cn(){if(ne&&!(10<=Number(Qu)))throw Error("Environmental error: no available transport.")}Cn.prototype.g=function(e,t){return new ut(e,t)};function ut(e,t){j.call(this),this.g=new Zo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!De(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!De(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new de(this)}z(ut,j);ut.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;st(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=aa(e,null,e.Y),Yn(e)};ut.prototype.close=function(){Ti(this.g)};ut.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=li(e),e=n);t.j.push(new Sc(t.fb++,e)),t.H==3&&Yn(t)};ut.prototype.N=function(){this.g.h=null,delete this.j,Ti(this.g),delete this.g,ut.$.N.call(this)};function ha(e){mi.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}z(ha,mi);function la(){yi.call(this),this.status=1}z(la,yi);function de(e){this.g=e}z(de,ca);de.prototype.Ba=function(){Q(this.g,"a")};de.prototype.Aa=function(e){Q(this.g,new ha(e))};de.prototype.za=function(e){Q(this.g,new la)};de.prototype.ya=function(){Q(this.g,"b")};function Fc(){this.blockSize=-1}function dt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}z(dt,Fc);dt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ns(e,t,n){n||(n=0);var s=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)s[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var r=e.g[3],o=t+(r^n&(i^r))+s[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[1]+3905402710&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(r^n&(i^r))+s[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[5]+1200080426&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(r^n&(i^r))+s[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[9]+2336552879&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(r^n&(i^r))+s[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[13]+4254626195&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^r&(n^i))+s[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[6]+3225465664&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(n^i))+s[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[10]+38016083&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(n^i))+s[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[14]+3275163606&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(n^i))+s[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[2]+4243563512&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^r)+s[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[8]+2272392833&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^r)+s[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[4]+1272893353&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^r)+s[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[0]+3936430074&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^r)+s[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[12]+3873151461&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~r))+s[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[7]+1126891415&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~r))+s[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[3]+2399980690&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~r))+s[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[15]+4264355552&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~r))+s[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[11]+3174756917&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+r&4294967295}dt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,s=this.m,i=this.h,r=0;r<t;){if(i==0)for(;r<=n;)Ns(this,e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[i++]=e.charCodeAt(r++),i==this.blockSize){Ns(this,s),i=0;break}}else for(;r<t;)if(s[i++]=e[r++],i==this.blockSize){Ns(this,s),i=0;break}}this.h=i,this.i+=t};dt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var s=0;32>s;s+=8)e[n++]=this.g[t]>>>s&255;return e};function x(e,t){this.h=t;for(var n=[],s=!0,i=e.length-1;0<=i;i--){var r=e[i]|0;s&&r==t||(n[i]=r,s=!1)}this.g=n}var bc={};function Ai(e){return-128<=e&&128>e?zu(e,function(t){return new x([t|0],0>t?-1:0)}):new x([e|0],0>e?-1:0)}function yt(e){if(isNaN(e)||!isFinite(e))return Jt;if(0>e)return G(yt(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=Bs;return new x(t,0)}function da(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return G(da(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=yt(Math.pow(t,8)),s=Jt,i=0;i<e.length;i+=8){var r=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+r),t);8>r?(r=yt(Math.pow(t,r)),s=s.R(r).add(yt(o))):(s=s.R(n),s=s.add(yt(o)))}return s}var Bs=4294967296,Jt=Ai(0),js=Ai(1),Ar=Ai(16777216);y=x.prototype;y.ea=function(){if(ct(this))return-G(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var s=this.D(n);e+=(0<=s?s:Bs+s)*t,t*=Bs}return e};y.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Tt(this))return"0";if(ct(this))return"-"+G(this).toString(e);for(var t=yt(Math.pow(e,6)),n=this,s="";;){var i=kn(n,t).g;n=Nn(n,i.R(t));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Tt(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};y.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Tt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ct(e){return e.h==-1}y.X=function(e){return e=Nn(this,e),ct(e)?-1:Tt(e)?0:1};function G(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new x(n,~e.h).add(js)}y.abs=function(){return ct(this)?G(this):this};y.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,i=0;i<=t;i++){var r=s+(this.D(i)&65535)+(e.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new x(n,n[n.length-1]&-2147483648?-1:0)};function Nn(e,t){return e.add(G(t))}y.R=function(e){if(Tt(this)||Tt(e))return Jt;if(ct(this))return ct(e)?G(this).R(G(e)):G(G(this).R(e));if(ct(e))return G(this.R(G(e)));if(0>this.X(Ar)&&0>e.X(Ar))return yt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<e.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*s+2*i]+=o*u,ln(n,2*s+2*i),n[2*s+2*i+1]+=r*u,ln(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,ln(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,ln(n,2*s+2*i+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new x(n,0)};function ln(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ye(e,t){this.g=e,this.h=t}function kn(e,t){if(Tt(t))throw Error("division by zero");if(Tt(e))return new ye(Jt,Jt);if(ct(e))return t=kn(G(e),t),new ye(G(t.g),G(t.h));if(ct(t))return t=kn(e,G(t)),new ye(G(t.g),t.h);if(30<e.g.length){if(ct(e)||ct(t))throw Error("slowDivide_ only works with positive integers.");for(var n=js,s=t;0>=s.X(e);)n=Cr(n),s=Cr(s);var i=Ht(n,1),r=Ht(s,1);for(s=Ht(s,2),n=Ht(n,2);!Tt(s);){var o=r.add(s);0>=o.X(e)&&(i=i.add(n),r=o),s=Ht(s,1),n=Ht(n,1)}return t=Nn(e,i.R(t)),new ye(i,t)}for(i=Jt;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=yt(n),o=r.R(t);ct(o)||0<o.X(e);)n-=s,r=yt(n),o=r.R(t);Tt(r)&&(r=js),i=i.add(r),e=Nn(e,o)}return new ye(i,e)}y.gb=function(e){return kn(this,e).h};y.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)&e.D(s);return new x(n,this.h&e.h)};y.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)|e.D(s);return new x(n,this.h|e.h)};y.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)^e.D(s);return new x(n,this.h^e.h)};function Cr(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.D(s)<<1|e.D(s-1)>>>31;return new x(n,e.h)}function Ht(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,i=[],r=0;r<s;r++)i[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new x(i,e.h)}Cn.prototype.createWebChannel=Cn.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;jn.NO_ERROR=0;jn.TIMEOUT=8;jn.HTTP_ERROR=6;xo.COMPLETE="complete";Ro.EventType=Ge;Ge.OPEN="a";Ge.CLOSE="b";Ge.ERROR="c";Ge.MESSAGE="d";j.prototype.listen=j.prototype.O;F.prototype.listenOnce=F.prototype.P;F.prototype.getLastError=F.prototype.Sa;F.prototype.getLastErrorCode=F.prototype.Ia;F.prototype.getStatus=F.prototype.da;F.prototype.getResponseJson=F.prototype.Wa;F.prototype.getResponseText=F.prototype.ja;F.prototype.send=F.prototype.ha;F.prototype.setWithCredentials=F.prototype.Oa;dt.prototype.digest=dt.prototype.l;dt.prototype.reset=dt.prototype.reset;dt.prototype.update=dt.prototype.j;x.prototype.add=x.prototype.add;x.prototype.multiply=x.prototype.R;x.prototype.modulo=x.prototype.gb;x.prototype.compare=x.prototype.X;x.prototype.toNumber=x.prototype.ea;x.prototype.toString=x.prototype.toString;x.prototype.getBits=x.prototype.D;x.fromNumber=yt;x.fromString=da;var Pc=function(){return new Cn},Vc=function(){return Bn()},ks=jn,Uc=xo,$c=zt,Nr={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},qc=We,dn=Ro,Bc=F,jc=dt,Zt=x;const kr="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}W.UNAUTHENTICATED=new W(null),W.GOOGLE_CREDENTIALS=new W("google-credentials-uid"),W.FIRST_PARTY=new W("first-party-uid"),W.MOCK_USER=new W("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fe="9.22.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new bu("@firebase/firestore");function Dr(){return qt.logLevel}function v(e,...t){if(qt.logLevel<=ke.DEBUG){const n=t.map(Ci);qt.debug(`Firestore (${fe}): ${e}`,...n)}}function At(e,...t){if(qt.logLevel<=ke.ERROR){const n=t.map(Ci);qt.error(`Firestore (${fe}): ${e}`,...n)}}function se(e,...t){if(qt.logLevel<=ke.WARN){const n=t.map(Ci);qt.warn(`Firestore (${fe}): ${e}`,...n)}}function Ci(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e="Unexpected state"){const t=`FIRESTORE (${fe}) INTERNAL ASSERTION FAILED: `+e;throw At(t),new Error(t)}function L(e,t){e||S()}function N(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class m extends xu{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class zc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(W.UNAUTHENTICATED))}shutdown(){}}class Kc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Gc{constructor(t){this.t=t,this.currentUser=W.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new It;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new It,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new It)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(L(typeof s.accessToken=="string"),new fa(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string"),new W(t)}}class Qc{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=W.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Hc{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Qc(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(W.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yc{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=r=>{r.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(L(typeof n.token=="string"),this.T=n.token,new Wc(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Xc(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function _(e,t){return e<t?-1:e>t?1:0}function ie(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new m(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new m(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new m(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new m(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return U.fromMillis(Date.now())}static fromDate(t){return U.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new U(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?_(this.nanoseconds,t.nanoseconds):_(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.timestamp=t}static fromTimestamp(t){return new C(t)}static min(){return new C(new U(0,0))}static max(){return new C(new U(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t,n,s){n===void 0?n=0:n>t.length&&S(),s===void 0?s=t.length-n:s>t.length-n&&S(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return be.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof be?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class R extends be{construct(t,n,s){return new R(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new m(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new R(n)}static emptyPath(){return new R([])}}const Jc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class X extends be{construct(t,n,s){return new X(t,n,s)}static isValidIdentifier(t){return Jc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),X.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new X(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new m(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new m(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new m(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new m(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new X(n)}static emptyPath(){return new X([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(R.fromString(t))}static fromName(t){return new w(R.fromString(t).popFirst(5))}static empty(){return new w(R.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&R.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return R.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new R(t.slice()))}}function Zc(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=C.fromTimestamp(s===1e9?new U(n+1,0):new U(n,s));return new xt(i,w.empty(),t)}function th(e){return new xt(e.readTime,e.key,-1)}class xt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new xt(C.min(),w.empty(),-1)}static max(){return new xt(C.max(),w.empty(),-1)}}function eh(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:_(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Je(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==nh)throw e;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,s)=>{n(t)})}static reject(t){return new g((n,s)=>{s(t)})}static waitFor(t){return new g((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(t){let n=g.resolve(!1);for(const s of t)n=n.next(i=>i?g.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new g((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let u=0;u<r;u++){const c=u;n(t[c]).next(h=>{o[c]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(t,n){return new g((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function Ze(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}Ni.ct=-1;function Xn(e){return e==null}function Dn(e){return e===0&&1/e==-1/0}function ih(e){return typeof e=="number"&&Number.isInteger(e)&&!Dn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Kt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function pa(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,n){this.comparator=t,this.root=n||K.EMPTY}insert(t,n){return new O(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,K.BLACK,null,null))}remove(t){return new O(this.comparator,this.root.remove(t,this.comparator).copy(null,null,K.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fn(this.root,t,this.comparator,!1)}getReverseIterator(){return new fn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fn(this.root,t,this.comparator,!0)}}class fn{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class K{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s??K.RED,this.left=i??K.EMPTY,this.right=r??K.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new K(t??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return K.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return K.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,K.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,K.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const t=this.left.check();if(t!==this.right.check())throw S();return t+(this.isRed()?0:1)}}K.EMPTY=null,K.RED=!0,K.BLACK=!1;K.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(e,t,n,s,i){return this}insert(e,t,n){return new K(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.comparator=t,this.data=new O(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new xr(this.data.getIterator())}getIteratorFrom(t){return new xr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof tt)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new tt(this.comparator);return n.data=t,n}}class xr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.fields=t,t.sort(X.comparator)}static empty(){return new at([])}unionWith(t){let n=new tt(X.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new at(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ie(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ma("Invalid base64 string: "+i):i}}(t);return new nt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new nt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return _(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const rh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rt(e){if(L(!!e),typeof e=="string"){let t=0;const n=rh.exec(e);if(L(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:P(e.seconds),nanos:P(e.nanos)}}function P(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Bt(e){return typeof e=="string"?nt.fromBase64String(e):nt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ki(e){const t=e.mapValue.fields.__previous_value__;return Jn(t)?ki(t):t}function Pe(e){const t=Rt(e.mapValue.fields.__local_write_time__.timestampValue);return new U(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t,n,s,i,r,o,a,u,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ve{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ve("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ve&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Jn(e)?4:ah(e)?9007199254740991:10:S()}function wt(e,t){if(e===t)return!0;const n=jt(e);if(n!==jt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Pe(e).isEqual(Pe(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Rt(s.timestampValue),o=Rt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Bt(s.bytesValue).isEqual(Bt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return P(s.geoPointValue.latitude)===P(i.geoPointValue.latitude)&&P(s.geoPointValue.longitude)===P(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return P(s.integerValue)===P(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=P(s.doubleValue),o=P(i.doubleValue);return r===o?Dn(r)===Dn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return ie(e.arrayValue.values||[],t.arrayValue.values||[],wt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(_r(r)!==_r(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!wt(r[a],o[a])))return!1;return!0}(e,t);default:return S()}}function Ue(e,t){return(e.values||[]).find(n=>wt(n,t))!==void 0}function re(e,t){if(e===t)return 0;const n=jt(e),s=jt(t);if(n!==s)return _(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return _(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=P(i.integerValue||i.doubleValue),a=P(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Rr(e.timestampValue,t.timestampValue);case 4:return Rr(Pe(e),Pe(t));case 5:return _(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Bt(i),a=Bt(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=_(o[u],a[u]);if(c!==0)return c}return _(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=_(P(i.latitude),P(r.latitude));return o!==0?o:_(P(i.longitude),P(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=re(o[u],a[u]);if(c)return c}return _(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===gn.mapValue&&r===gn.mapValue)return 0;if(i===gn.mapValue)return 1;if(r===gn.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=r.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const l=_(a[h],c[h]);if(l!==0)return l;const f=re(o[a[h]],u[c[h]]);if(f!==0)return f}return _(a.length,c.length)}(e.mapValue,t.mapValue);default:throw S()}}function Rr(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return _(e,t);const n=Rt(e),s=Rt(t),i=_(n.seconds,s.seconds);return i!==0?i:_(n.nanos,s.nanos)}function oe(e){return zs(e)}function zs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=Rt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Bt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,w.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=zs(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${zs(s.fields[a])}`;return r+"}"}(e.mapValue):S();var t,n}function _n(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ks(e){return!!e&&"integerValue"in e}function Di(e){return!!e&&"arrayValue"in e}function Mr(e){return!!e&&"nullValue"in e}function Lr(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function yn(e){return!!e&&"mapValue"in e}function Ae(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Kt(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Ae(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ae(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ah(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.value=t}static empty(){return new rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!yn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ae(n)}setAll(t){let n=X.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Ae(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());yn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return wt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];yn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Kt(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new rt(Ae(this.value))}}function ya(e){const t=[];return Kt(e.fields,(n,s)=>{const i=new X([n]);if(yn(s)){const r=ya(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new at(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,n,s,i,r,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Y(t,0,C.min(),C.min(),C.min(),rt.empty(),0)}static newFoundDocument(t,n,s,i){return new Y(t,1,n,C.min(),s,i,0)}static newNoDocument(t,n){return new Y(t,2,n,C.min(),C.min(),rt.empty(),0)}static newUnknownDocument(t,n){return new Y(t,3,n,C.min(),C.min(),rt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(C.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=C.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Y&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Y(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t,n){this.position=t,this.inclusive=n}}function Or(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),n.key):s=re(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Fr(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!wt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t,n="asc"){this.field=t,this.dir=n}}function uh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{}class V extends va{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new hh(t,n,s):n==="array-contains"?new fh(t,s):n==="in"?new gh(t,s):n==="not-in"?new ph(t,s):n==="array-contains-any"?new mh(t,s):new V(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new lh(t,s):new dh(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(re(n,this.value)):n!==null&&jt(this.value)===jt(n)&&this.matchesComparison(re(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ft extends va{constructor(t,n){super(),this.filters=t,this.op=n,this.lt=null}static create(t,n){return new ft(t,n)}matches(t){return wa(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft(n=>n.isInequality());return t!==null?t.field:null}ft(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function wa(e){return e.op==="and"}function Ea(e){return ch(e)&&wa(e)}function ch(e){for(const t of e.filters)if(t instanceof ft)return!1;return!0}function Gs(e){if(e instanceof V)return e.field.canonicalString()+e.op.toString()+oe(e.value);if(Ea(e))return e.filters.map(t=>Gs(t)).join(",");{const t=e.filters.map(n=>Gs(n)).join(",");return`${e.op}(${t})`}}function Ta(e,t){return e instanceof V?function(n,s){return s instanceof V&&n.op===s.op&&n.field.isEqual(s.field)&&wt(n.value,s.value)}(e,t):e instanceof ft?function(n,s){return s instanceof ft&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Ta(r,s.filters[o]),!0):!1}(e,t):void S()}function Ia(e){return e instanceof V?function(t){return`${t.field.canonicalString()} ${t.op} ${oe(t.value)}`}(e):e instanceof ft?function(t){return t.op.toString()+" {"+t.getFilters().map(Ia).join(" ,")+"}"}(e):"Filter"}class hh extends V{constructor(t,n,s){super(t,n,s),this.key=w.fromName(s.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.matchesComparison(n)}}class lh extends V{constructor(t,n){super(t,"in",n),this.keys=Sa("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class dh extends V{constructor(t,n){super(t,"not-in",n),this.keys=Sa("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Sa(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>w.fromName(s.referenceValue))}class fh extends V{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Di(n)&&Ue(n.arrayValue,this.value)}}class gh extends V{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ue(this.value.arrayValue,n)}}class ph extends V{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ue(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ue(this.value.arrayValue,n)}}class mh extends V{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Di(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ue(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function br(e,t=null,n=[],s=[],i=null,r=null,o=null){return new yh(e,t,n,s,i,r,o)}function _i(e){const t=N(e);if(t.dt===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Gs(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Xn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>oe(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>oe(s)).join(",")),t.dt=n}return t.dt}function xi(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!uh(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ta(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Fr(e.startAt,t.startAt)&&Fr(e.endAt,t.endAt)}function Qs(e){return w.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this.wt=null,this._t=null,this.startAt,this.endAt}}function vh(e,t,n,s,i,r,o,a){return new Gt(e,t,n,s,i,r,o,a)}function Zn(e){return new Gt(e)}function Pr(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Ri(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ts(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Mi(e){return e.collectionGroup!==null}function $t(e){const t=N(e);if(t.wt===null){t.wt=[];const n=ts(t),s=Ri(t);if(n!==null&&s===null)n.isKeyField()||t.wt.push(new te(n)),t.wt.push(new te(X.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new te(X.keyField(),r))}}}return t.wt}function Ct(e){const t=N(e);if(!t._t)if(t.limitType==="F")t._t=br(t.path,t.collectionGroup,$t(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of $t(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new te(r.field,o))}const s=t.endAt?new ae(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new ae(t.startAt.position,t.startAt.inclusive):null;t._t=br(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t._t}function Hs(e,t){t.getFirstInequalityField(),ts(e);const n=e.filters.concat([t]);return new Gt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function xn(e,t,n){return new Gt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function es(e,t){return xi(Ct(e),Ct(t))&&e.limitType===t.limitType}function Aa(e){return`${_i(Ct(e))}|lt:${e.limitType}`}function Ws(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Ia(s)).join(", ")}]`),Xn(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>oe(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>oe(s)).join(",")),`Target(${n})`}(Ct(e))}; limitType=${e.limitType})`}function ns(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):w.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of $t(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Or(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,$t(n),s)||n.endAt&&!function(i,r,o){const a=Or(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,$t(n),s))}(e,t)}function wh(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ca(e){return(t,n)=>{let s=!1;for(const i of $t(e)){const r=Eh(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Eh(e,t,n){const s=e.field.isKeyField()?w.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?re(a,u):S()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return S()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Kt(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return pa(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=new O(w.comparator);function Nt(){return Th}const Na=new O(w.comparator);function Ee(...e){let t=Na;for(const n of e)t=t.insert(n.key,n);return t}function ka(e){let t=Na;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Vt(){return Ce()}function Da(){return Ce()}function Ce(){return new ge(e=>e.toString(),(e,t)=>e.isEqual(t))}const Ih=new O(w.comparator),Sh=new tt(w.comparator);function k(...e){let t=Sh;for(const n of e)t=t.add(n);return t}const Ah=new tt(_);function Ch(){return Ah}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dn(t)?"-0":t}}function xa(e){return{integerValue:""+e}}function Nh(e,t){return ih(t)?xa(t):_a(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this._=void 0}}function kh(e,t,n){return e instanceof $e?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Jn(i)&&(i=ki(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof qe?Ma(e,t):e instanceof Be?La(e,t):function(s,i){const r=Ra(s,i),o=Vr(r)+Vr(s.gt);return Ks(r)&&Ks(s.gt)?xa(o):_a(s.serializer,o)}(e,t)}function Dh(e,t,n){return e instanceof qe?Ma(e,t):e instanceof Be?La(e,t):n}function Ra(e,t){return e instanceof Rn?Ks(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class $e extends ss{}class qe extends ss{constructor(t){super(),this.elements=t}}function Ma(e,t){const n=Oa(t);for(const s of e.elements)n.some(i=>wt(i,s))||n.push(s);return{arrayValue:{values:n}}}class Be extends ss{constructor(t){super(),this.elements=t}}function La(e,t){let n=Oa(t);for(const s of e.elements)n=n.filter(i=>!wt(i,s));return{arrayValue:{values:n}}}class Rn extends ss{constructor(t,n){super(),this.serializer=t,this.gt=n}}function Vr(e){return P(e.integerValue||e.doubleValue)}function Oa(e){return Di(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,n){this.field=t,this.transform=n}}function xh(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof qe&&s instanceof qe||n instanceof Be&&s instanceof Be?ie(n.elements,s.elements,wt):n instanceof Rn&&s instanceof Rn?wt(n.gt,s.gt):n instanceof $e&&s instanceof $e}(e.transform,t.transform)}class Rh{constructor(t,n){this.version=t,this.transformResults=n}}class ht{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ht}static exists(t){return new ht(void 0,t)}static updateTime(t){return new ht(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function vn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class is{}function Fa(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Li(e.key,ht.none()):new tn(e.key,e.data,ht.none());{const n=e.data,s=rt.empty();let i=new tt(X.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ft(e.key,s,new at(i.toArray()),ht.none())}}function Mh(e,t,n){e instanceof tn?function(s,i,r){const o=s.value.clone(),a=$r(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Ft?function(s,i,r){if(!vn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=$r(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(ba(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function Ne(e,t,n,s){return e instanceof tn?function(i,r,o,a){if(!vn(i.precondition,r))return o;const u=i.value.clone(),c=qr(i.fieldTransforms,a,r);return u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(e,t,n,s):e instanceof Ft?function(i,r,o,a){if(!vn(i.precondition,r))return o;const u=qr(i.fieldTransforms,a,r),c=r.data;return c.setAll(ba(i)),c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(i,r,o){return vn(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function Lh(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=Ra(s.transform,i||null);r!=null&&(n===null&&(n=rt.empty()),n.set(s.field,r))}return n||null}function Ur(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ie(n,s,(i,r)=>xh(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tn extends is{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ft extends is{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ba(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function $r(e,t,n){const s=new Map;L(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,Dh(o,a,n[i]))}return s}function qr(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,kh(r,o,t))}return s}class Li extends is{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Oh extends is{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Mh(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Ne(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Ne(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Da();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const u=Fa(o,a);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(C.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),k())}isEqual(t){return this.batchId===t.batchId&&ie(this.mutations,t.mutations,(n,s)=>Ur(n,s))&&ie(this.baseMutations,t.baseMutations,(n,s)=>Ur(n,s))}}class Oi{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){L(t.mutations.length===s.length);let i=Ih;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Oi(t,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b,D;function Vh(e){switch(e){default:return S();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function Pa(e){if(e===void 0)return At("GRPC error has no .code"),d.UNKNOWN;switch(e){case b.OK:return d.OK;case b.CANCELLED:return d.CANCELLED;case b.UNKNOWN:return d.UNKNOWN;case b.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case b.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case b.INTERNAL:return d.INTERNAL;case b.UNAVAILABLE:return d.UNAVAILABLE;case b.UNAUTHENTICATED:return d.UNAUTHENTICATED;case b.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case b.NOT_FOUND:return d.NOT_FOUND;case b.ALREADY_EXISTS:return d.ALREADY_EXISTS;case b.PERMISSION_DENIED:return d.PERMISSION_DENIED;case b.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case b.ABORTED:return d.ABORTED;case b.OUT_OF_RANGE:return d.OUT_OF_RANGE;case b.UNIMPLEMENTED:return d.UNIMPLEMENTED;case b.DATA_LOSS:return d.DATA_LOSS;default:return S()}}(D=b||(b={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return pn}static getOrCreateInstance(){return pn===null&&(pn=new Fi),pn}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let pn=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=new Zt([4294967295,4294967295],0);function Br(e){const t=Uh().encode(e),n=new jc;return n.update(t),new Uint8Array(n.digest())}function jr(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Zt([n,s],0),new Zt([i,r],0)]}class bi{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Te(`Invalid padding: ${n}`);if(s<0)throw new Te(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Te(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new Te(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*t.length-n,this.Tt=Zt.fromNumber(this.It)}Et(t,n,s){let i=t.add(n.multiply(Zt.fromNumber(s)));return i.compare($h)===1&&(i=new Zt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}vt(t){if(this.It===0)return!1;const n=Br(t),[s,i]=jr(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);if(!this.At(o))return!1}return!0}static create(t,n,s){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new bi(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.It===0)return;const n=Br(t),[s,i]=jr(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);this.Rt(o)}}Rt(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class Te extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const i=new Map;return i.set(t,en.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new rs(C.min(),i,new O(_),Nt(),k())}}class en{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new en(s,n,k(),k(),k())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(t,n,s,i){this.Pt=t,this.removedTargetIds=n,this.key=s,this.bt=i}}class Va{constructor(t,n){this.targetId=t,this.Vt=n}}class Ua{constructor(t,n,s=nt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class zr{constructor(){this.St=0,this.Dt=Gr(),this.Ct=nt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=k(),n=k(),s=k();return this.Dt.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:S()}}),new en(this.Ct,this.xt,t,n,s)}Ft(){this.Nt=!1,this.Dt=Gr()}Bt(t,n){this.Nt=!0,this.Dt=this.Dt.insert(t,n)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class qh{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=Nt(),this.zt=Kr(),this.Wt=new O(_)}Ht(t){for(const n of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(n,t.bt):this.Yt(n,t.key,t.bt);for(const n of t.removedTargetIds)this.Yt(n,t.key,t.bt)}Xt(t){this.forEachTarget(t,n=>{const s=this.Zt(n);switch(t.state){case 0:this.te(n)&&s.$t(t.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(t.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(t.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(t.resumeToken));break;default:S()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qt.forEach((s,i)=>{this.te(i)&&n(i)})}ne(t){var n;const s=t.targetId,i=t.Vt.count,r=this.se(s);if(r){const o=r.target;if(Qs(o))if(i===0){const a=new w(o.path);this.Yt(s,a,Y.newNoDocument(a,C.min()))}else L(i===1);else{const a=this.ie(s);if(a!==i){const u=this.re(t,a);if(u!==0){this.ee(s);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,c)}(n=Fi.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,h,l){var f,p,E,T,I,$;const q={localCacheCount:h,existenceFilterCount:l.count},it=l.unchangedNames;return it&&(q.bloomFilter={applied:c===0,hashCount:(f=it==null?void 0:it.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(T=(E=(p=it==null?void 0:it.bits)===null||p===void 0?void 0:p.bitmap)===null||E===void 0?void 0:E.length)!==null&&T!==void 0?T:0,padding:($=(I=it==null?void 0:it.bits)===null||I===void 0?void 0:I.padding)!==null&&$!==void 0?$:0}),q}(u,a,t.Vt))}}}}re(t,n){const{unchangedNames:s,count:i}=t.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let u,c;try{u=Bt(r).toUint8Array()}catch(h){if(h instanceof ma)return se("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw h}try{c=new bi(u,o,a)}catch(h){return se(h instanceof Te?"BloomFilter error: ":"Applying bloom filter failed: ",h),1}return c.It===0?1:i!==n-this.oe(t.targetId,c)?2:0}oe(t,n){const s=this.Gt.getRemoteKeysForTarget(t);let i=0;return s.forEach(r=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;n.vt(a)||(this.Yt(t,r,null),i++)}),i}ce(t){const n=new Map;this.Qt.forEach((r,o)=>{const a=this.se(o);if(a){if(r.current&&Qs(a.target)){const u=new w(a.target.path);this.jt.get(u)!==null||this.ae(o,u)||this.Yt(o,u,Y.newNoDocument(u,t))}r.Mt&&(n.set(o,r.Ot()),r.Ft())}});let s=k();this.zt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.se(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(t));const i=new rs(t,n,this.Wt,this.jt,s);return this.jt=Nt(),this.zt=Kr(),this.Wt=new O(_),i}Jt(t,n){if(!this.te(t))return;const s=this.ae(t,n.key)?2:0;this.Zt(t).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(t))}Yt(t,n,s){if(!this.te(t))return;const i=this.Zt(t);this.ae(t,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(t)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(t){this.Qt.delete(t)}ie(t){const n=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let n=this.Qt.get(t);return n||(n=new zr,this.Qt.set(t,n)),n}he(t){let n=this.zt.get(t);return n||(n=new tt(_),this.zt=this.zt.insert(t,n)),n}te(t){const n=this.se(t)!==null;return n||v("WatchChangeAggregator","Detected inactive target",t),n}se(t){const n=this.Qt.get(t);return n&&n.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new zr),this.Gt.getRemoteKeysForTarget(t).forEach(n=>{this.Yt(t,n,null)})}ae(t,n){return this.Gt.getRemoteKeysForTarget(t).has(n)}}function Kr(){return new O(w.comparator)}function Gr(){return new O(w.comparator)}const Bh=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),jh=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),zh=(()=>({and:"AND",or:"OR"}))();class Kh{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ys(e,t){return e.useProto3Json||Xn(t)?t:{value:t}}function Mn(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $a(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Gh(e,t){return Mn(e,t.toTimestamp())}function vt(e){return L(!!e),C.fromTimestamp(function(t){const n=Rt(t);return new U(n.seconds,n.nanos)}(e))}function Pi(e,t){return function(n){return new R(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function qa(e){const t=R.fromString(e);return L(Ka(t)),t}function Xs(e,t){return Pi(e.databaseId,t.path)}function Ds(e,t){const n=qa(t);if(n.get(1)!==e.databaseId.projectId)throw new m(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new m(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new w(Ba(n))}function Js(e,t){return Pi(e.databaseId,t)}function Qh(e){const t=qa(e);return t.length===4?R.emptyPath():Ba(t)}function Zs(e){return new R(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ba(e){return L(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Qr(e,t,n){return{name:Xs(e,t),fields:n.value.mapValue.fields}}function Hh(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:S()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(u,c){return u.useProto3Json?(L(c===void 0||typeof c=="string"),nt.fromBase64String(c||"")):(L(c===void 0||c instanceof Uint8Array),nt.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?d.UNKNOWN:Pa(u.code);return new m(c,u.message||"")}(o);n=new Ua(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ds(e,s.document.name),r=vt(s.document.updateTime),o=s.document.createTime?vt(s.document.createTime):C.min(),a=new rt({mapValue:{fields:s.document.fields}}),u=Y.newFoundDocument(i,r,o,a),c=s.targetIds||[],h=s.removedTargetIds||[];n=new wn(c,h,u.key,u)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Ds(e,s.document),r=s.readTime?vt(s.readTime):C.min(),o=Y.newNoDocument(i,r),a=s.removedTargetIds||[];n=new wn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Ds(e,s.document),r=s.removedTargetIds||[];n=new wn([],r,i,null)}else{if(!("filter"in t))return S();{t.filter;const s=t.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new Ph(i,r),a=s.targetId;n=new Va(a,o)}}return n}function Wh(e,t){let n;if(t instanceof tn)n={update:Qr(e,t.key,t.value)};else if(t instanceof Li)n={delete:Xs(e,t.key)};else if(t instanceof Ft)n={update:Qr(e,t.key,t.data),updateMask:il(t.fieldMask)};else{if(!(t instanceof Oh))return S();n={verify:Xs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof $e)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof qe)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Be)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Rn)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw S()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Gh(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:S()}(e,t.precondition)),n}function Yh(e,t){return e&&e.length>0?(L(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?vt(s.updateTime):vt(i);return r.isEqual(C.min())&&(r=vt(i)),new Rh(r,s.transformResults||[])}(n,t))):[]}function Xh(e,t){return{documents:[Js(e,t.path)]}}function Jh(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Js(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Js(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length!==0)return za(ft.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Wt(h.field),direction:el(h.dir)}}(c))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Ys(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Zh(e){let t=Qh(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){L(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];n.where&&(r=function(h){const l=ja(h);return l instanceof ft&&Ea(l)?l.getFilters():[l]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new te(Yt(l.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,Xn(l)?null:l}(n.limit));let u=null;n.startAt&&(u=function(h){const l=!!h.before,f=h.values||[];return new ae(f,l)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const l=!h.before,f=h.values||[];return new ae(f,l)}(n.endAt)),vh(t,i,o,r,a,"F",u,c)}function tl(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return S()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function ja(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Yt(t.unaryFilter.field);return V.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Yt(t.unaryFilter.field);return V.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yt(t.unaryFilter.field);return V.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Yt(t.unaryFilter.field);return V.create(r,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(e):e.fieldFilter!==void 0?function(t){return V.create(Yt(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return ft.create(t.compositeFilter.filters.map(n=>ja(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return S()}}(t.compositeFilter.op))}(e):S()}function el(e){return Bh[e]}function nl(e){return jh[e]}function sl(e){return zh[e]}function Wt(e){return{fieldPath:e.canonicalString()}}function Yt(e){return X.fromServerFormat(e.fieldPath)}function za(e){return e instanceof V?function(t){if(t.op==="=="){if(Lr(t.value))return{unaryFilter:{field:Wt(t.field),op:"IS_NAN"}};if(Mr(t.value))return{unaryFilter:{field:Wt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Lr(t.value))return{unaryFilter:{field:Wt(t.field),op:"IS_NOT_NAN"}};if(Mr(t.value))return{unaryFilter:{field:Wt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wt(t.field),op:nl(t.op),value:t.value}}}(e):e instanceof ft?function(t){const n=t.getFilters().map(s=>za(s));return n.length===1?n[0]:{compositeFilter:{op:sl(t.op),filters:n}}}(e):S()}function il(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Ka(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,n,s,i,r=C.min(),o=C.min(),a=nt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Dt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t){this.fe=t}}function ol(e){const t=Zh({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?xn(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.rn=new ul}addToCollectionParentIndex(t,n){return this.rn.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.rn.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(xt.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(xt.min())}updateCollectionGroup(t,n,s){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class ul{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new tt(R.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new tt(R.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new ue(0)}static Mn(){return new ue(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(){this.changes=new ge(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Y.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?g.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(s!==null&&Ne(s.mutation,i,at.empty(),U.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,k()).next(()=>s))}getLocalViewOfDocuments(t,n,s=k()){const i=Vt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=Ee();return r.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Vt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,k()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=Nt();const o=Ce(),a=Ce();return n.forEach((u,c)=>{const h=s.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Ft)?r=r.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Ne(h.mutation,c,h.mutation.getFieldMask(),U.now())):o.set(c.key,at.empty())}),this.recalculateAndSaveOverlays(t,r).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var l;return a.set(c,new hl(h,(l=o.get(c))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Ce();let i=new O((o,a)=>o-a),r=k();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=s.get(u)||at.empty();h=a.applyToLocalView(c,h),s.set(u,h);const l=(i.get(a.batchId)||k()).add(u);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,l=Da();h.forEach(f=>{if(!r.has(f)){const p=Fa(n.get(f),s.get(f));p!==null&&l.set(f,p),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,l))}return g.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return w.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Mi(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):g.resolve(Vt());let a=-1,u=r;return o.next(c=>g.forEach(c,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),r.get(h)?g.resolve():this.remoteDocumentCache.getEntry(t,h).next(f=>{u=u.insert(h,f)}))).next(()=>this.populateOverlays(t,c,r)).next(()=>this.computeViews(t,u,c,k())).next(h=>({batchId:a,changes:ka(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(s=>{let i=Ee();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=Ee();return this.indexManager.getCollectionParents(t,i).next(o=>g.forEach(o,a=>{const u=function(c,h){return new Gt(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,s).next(c=>{c.forEach((h,l)=>{r=r.insert(h,l)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,i))).next(r=>{i.forEach((a,u)=>{const c=u.getKey();r.get(c)===null&&(r=r.insert(c,Y.newInvalidDocument(c)))});let o=Ee();return r.forEach((a,u)=>{const c=i.get(a);c!==void 0&&Ne(c.mutation,u,at.empty(),U.now()),ns(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,n){return g.resolve(this.cs.get(n))}saveBundleMetadata(t,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:vt(s.createTime)}),g.resolve()}getNamedQuery(t,n){return g.resolve(this.hs.get(n))}saveNamedQuery(t,n){return this.hs.set(n.name,function(s){return{name:s.name,query:ol(s.bundledQuery),readTime:vt(s.readTime)}}(n)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.overlays=new O(w.comparator),this.ls=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Vt();return g.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.we(t,n,r)}),g.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.ls.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(s)),g.resolve()}getOverlaysForCollection(t,n,s){const i=Vt(),r=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return g.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new O((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let h=r.get(c.largestBatchId);h===null&&(h=Vt(),r=r.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Vt(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return g.resolve(a)}we(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(s.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new bh(n,s));let r=this.ls.get(n);r===void 0&&(r=k(),this.ls.set(n,r)),this.ls.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.fs=new tt(B.ds),this.ws=new tt(B._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,n){const s=new B(t,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.ys(new B(t,n))}ps(t,n){t.forEach(s=>this.removeReference(s,n))}Is(t){const n=new w(new R([])),s=new B(n,t),i=new B(n,t+1),r=[];return this.ws.forEachInRange([s,i],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(t=>this.ys(t))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const n=new w(new R([])),s=new B(n,t),i=new B(n,t+1);let r=k();return this.ws.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new B(t,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class B{constructor(t,n){this.key=t,this.As=n}static ds(t,n){return w.comparator(t.key,n.key)||_(t.As,n.As)}static _s(t,n){return _(t.As,n.As)||w.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new tt(B.ds)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Fh(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new B(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.bs(s),r=i<0?0:i;return g.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new B(n,0),i=new B(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const a=this.Ps(o.As);r.push(a)}),g.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new tt(_);return n.forEach(i=>{const r=new B(i,0),o=new B(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{s=s.add(a.As)})}),g.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;w.isDocumentKey(r)||(r=r.child(""));const o=new B(new w(r),0);let a=new tt(_);return this.Rs.forEachWhile(u=>{const c=u.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.As)),!0)},o),g.resolve(this.Vs(a))}Vs(t){const n=[];return t.forEach(s=>{const i=this.Ps(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){L(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return g.forEach(n.mutations,i=>{const r=new B(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Rs=s})}Cn(t){}containsKey(t,n){const s=new B(n,0),i=this.Rs.firstAfterOrEqual(s);return g.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Ss(t,n){return this.bs(t)}bs(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Ps(t){const n=this.bs(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t){this.Ds=t,this.docs=new O(w.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return g.resolve(s?s.document.mutableCopy():Y.newInvalidDocument(n))}getEntries(t,n){let s=Nt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Y.newInvalidDocument(i))}),g.resolve(s)}getDocumentsMatchingQuery(t,n,s,i){let r=Nt();const o=n.path,a=new w(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||eh(th(h),s)<=0||(i.has(h.key)||ns(n,h))&&(r=r.insert(h.key,h.mutableCopy()))}return g.resolve(r)}getAllFromCollectionGroup(t,n,s,i){S()}Cs(t,n){return g.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new ml(this)}getSize(t){return g.resolve(this.size)}}class ml extends cl{constructor(t){super(),this.os=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.os.addEntry(t,i)):this.os.removeEntry(s)}),g.waitFor(n)}getFromCache(t,n){return this.os.getEntry(t,n)}getAllFromCache(t,n){return this.os.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t){this.persistence=t,this.xs=new ge(n=>_i(n),xi),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Vi,this.targetCount=0,this.Ms=ue.kn()}forEachTarget(t,n){return this.xs.forEach((s,i)=>n(i)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),g.resolve()}Fn(t){this.xs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ms=new ue(n),this.highestTargetId=n),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,n){return this.Fn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.Fn(n),g.resolve()}removeTargetData(t,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),g.waitFor(r).next(()=>i)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const s=this.xs.get(n)||null;return g.resolve(s)}addMatchingKeys(t,n,s){return this.ks.gs(n,s),g.resolve()}removeMatchingKeys(t,n,s){this.ks.ps(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),g.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.ks.Is(n),g.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ks.Es(n);return g.resolve(s)}containsKey(t,n){return g.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,n){this.$s={},this.overlays={},this.Os=new Ni(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new yl(this),this.indexManager=new al,this.remoteDocumentCache=function(s){return new pl(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new rl(n),this.qs=new dl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new fl,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.$s[t.toKey()];return s||(s=new gl(n,this.referenceDelegate),this.$s[t.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,n,s){v("MemoryPersistence","Starting transaction:",t);const i=new wl(this.Os.next());return this.referenceDelegate.Us(),s(i).next(r=>this.referenceDelegate.Ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gs(t,n){return g.or(Object.values(this.$s).map(s=>()=>s.containsKey(t,n)))}}class wl extends sh{constructor(t){super(),this.currentSequenceNumber=t}}class Ui{constructor(t){this.persistence=t,this.Qs=new Vi,this.js=null}static zs(t){return new Ui(t)}get Ws(){if(this.js)return this.js;throw S()}addReference(t,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),g.resolve()}removeReference(t,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Ws.add(n.toString()),g.resolve()}removeTarget(t,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Ws.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Us(){this.js=new Set}Ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Ws,s=>{const i=w.fromPath(s);return this.Hs(t,i).next(r=>{r||n.removeEntry(i,C.min())})}).next(()=>(this.js=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hs(t,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(t){return 0}Hs(t,n){return g.or([()=>g.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gs(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Fi=s,this.Bi=i}static Li(t,n){let s=k(),i=k();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new $i(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(){this.qi=!1}initialize(t,n){this.Ui=t,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(t,n,s,i){return this.Ki(t,n).next(r=>r||this.Gi(t,n,i,s)).next(r=>r||this.Qi(t,n))}Ki(t,n){if(Pr(n))return g.resolve(null);let s=Ct(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=xn(n,null,"F"),s=Ct(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=k(...r);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(u=>{const c=this.ji(n,a);return this.zi(n,c,o,u.readTime)?this.Ki(t,xn(n,null,"F")):this.Wi(t,c,n,u)}))})))}Gi(t,n,s,i){return Pr(n)||i.isEqual(C.min())?this.Qi(t,n):this.Ui.getDocuments(t,s).next(r=>{const o=this.ji(n,r);return this.zi(n,o,s,i)?this.Qi(t,n):(Dr()<=ke.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ws(n)),this.Wi(t,o,n,Zc(i,-1)))})}ji(t,n){let s=new tt(Ca(t));return n.forEach((i,r)=>{ns(t,r)&&(s=s.add(r))}),s}zi(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Qi(t,n){return Dr()<=ke.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",Ws(n)),this.Ui.getDocumentsMatchingQuery(t,n,xt.min())}Wi(t,n,s,i){return this.Ui.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(t,n,s,i){this.persistence=t,this.Hi=n,this.serializer=i,this.Ji=new O(_),this.Yi=new ge(r=>_i(r),xi),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(s)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ll(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function Il(e,t,n,s){return new Tl(e,t,n,s)}async function Ga(e,t){const n=N(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.tr(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=k();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of r){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(s,u).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function Sl(e,t){const n=N(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const h=u.batch,l=h.keys();let f=g.resolve();return l.forEach(p=>{f=f.next(()=>c.getEntry(a,p)).next(E=>{const T=u.docVersions.get(p);L(T!==null),E.version.compareTo(T)<0&&(h.applyToRemoteDocument(E,u),E.isValidDocument()&&(E.setReadTime(u.commitVersion),c.addEntry(E)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=k();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function Qa(e){const t=N(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Bs.getLastRemoteSnapshotVersion(n))}function Al(e,t){const n=N(e),s=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];t.targetChanges.forEach((h,l)=>{const f=i.get(l);if(!f)return;a.push(n.Bs.removeMatchingKeys(r,h.removedDocuments,l).next(()=>n.Bs.addMatchingKeys(r,h.addedDocuments,l)));let p=f.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(l)!==null?p=p.withResumeToken(nt.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):h.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(h.resumeToken,s)),i=i.insert(l,p),function(E,T,I){return E.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(f,p,h)&&a.push(n.Bs.updateTargetData(r,p))});let u=Nt(),c=k();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(Cl(r,o,t.documentUpdates).next(h=>{u=h.nr,c=h.sr})),!s.isEqual(C.min())){const h=n.Bs.getLastRemoteSnapshotVersion(r).next(l=>n.Bs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return g.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,c)).next(()=>u)}).then(r=>(n.Ji=i,r))}function Cl(e,t,n){let s=k(),i=k();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=Nt();return n.forEach((a,u)=>{const c=r.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(C.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{nr:o,sr:i}})}function Nl(e,t){const n=N(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function kl(e,t){const n=N(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Bs.getTargetData(s,t).next(r=>r?(i=r,g.resolve(i)):n.Bs.allocateTargetId(s).next(o=>(i=new Dt(t,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(t,s.targetId)),s})}async function ti(e,t,n){const s=N(e),i=s.Ji.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ze(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ji=s.Ji.remove(t),s.Yi.delete(i.target)}function Hr(e,t,n){const s=N(e);let i=C.min(),r=k();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const h=N(a),l=h.Yi.get(c);return l!==void 0?g.resolve(h.Ji.get(l)):h.Bs.getTargetData(u,c)}(s,o,Ct(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,t,n?i:C.min(),n?r:k())).next(a=>(Dl(s,wh(t),a),{documents:a,ir:r})))}function Dl(e,t,n){let s=e.Xi.get(t)||C.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Xi.set(t,s)}class Wr{constructor(){this.activeTargetIds=Ch()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _l{constructor(){this.Hr=new Wr,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,n,s){this.Jr[t]=n}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new Wr,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{Yr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mn=null;function _s(){return mn===null?mn=268435456+Math.round(2147483648*Math.random()):mn++,"0x"+mn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H="WebChannelConnection";class Ll extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.mo=n+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,n,s,i,r){const o=_s(),a=this.To(t,n);v("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const u={};return this.Eo(u,i,r),this.Ao(t,a,u,s).then(c=>(v("RestConnection",`Received RPC '${t}' ${o}: `,c),c),c=>{throw se("RestConnection",`RPC '${t}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}vo(t,n,s,i,r,o){return this.Io(t,n,s,i,r)}Eo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+fe,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}To(t,n){const s=Rl[t];return`${this.mo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,n,s,i){const r=_s();return new Promise((o,a)=>{const u=new Bc;u.setWithCredentials(!0),u.listenOnce(Uc.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ks.NO_ERROR:const h=u.getResponseJson();v(H,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(h)),o(h);break;case ks.TIMEOUT:v(H,`RPC '${t}' ${r} timed out`),a(new m(d.DEADLINE_EXCEEDED,"Request time out"));break;case ks.HTTP_ERROR:const l=u.getStatus();if(v(H,`RPC '${t}' ${r} failed with status:`,l,"response text:",u.getResponseText()),l>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const E=function(T){const I=T.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(I)>=0?I:d.UNKNOWN}(p.status);a(new m(E,p.message))}else a(new m(d.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new m(d.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{v(H,`RPC '${t}' ${r} completed.`)}});const c=JSON.stringify(i);v(H,`RPC '${t}' ${r} sending request:`,i),u.send(n,"POST",c,s,15)})}Ro(t,n,s){const i=_s(),r=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Pc(),a=Vc(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new qc({})),this.Eo(u.initMessageHeaders,n,s),u.encodeInitMessageHeaders=!0;const h=r.join("");v(H,`Creating RPC '${t}' stream ${i}: ${h}`,u);const l=o.createWebChannel(h,u);let f=!1,p=!1;const E=new Ml({ro:I=>{p?v(H,`Not sending because RPC '${t}' stream ${i} is closed:`,I):(f||(v(H,`Opening RPC '${t}' stream ${i} transport.`),l.open(),f=!0),v(H,`RPC '${t}' stream ${i} sending:`,I),l.send(I))},oo:()=>l.close()}),T=(I,$,q)=>{I.listen($,it=>{try{q(it)}catch(gt){setTimeout(()=>{throw gt},0)}})};return T(l,dn.EventType.OPEN,()=>{p||v(H,`RPC '${t}' stream ${i} transport opened.`)}),T(l,dn.EventType.CLOSE,()=>{p||(p=!0,v(H,`RPC '${t}' stream ${i} transport closed`),E.wo())}),T(l,dn.EventType.ERROR,I=>{p||(p=!0,se(H,`RPC '${t}' stream ${i} transport errored:`,I),E.wo(new m(d.UNAVAILABLE,"The operation could not be completed")))}),T(l,dn.EventType.MESSAGE,I=>{var $;if(!p){const q=I.data[0];L(!!q);const it=q,gt=it.error||(($=it[0])===null||$===void 0?void 0:$.error);if(gt){v(H,`RPC '${t}' stream ${i} received error:`,gt);const an=gt.status;let ws=function(ku){const lr=b[ku];if(lr!==void 0)return Pa(lr)}(an),hr=gt.message;ws===void 0&&(ws=d.INTERNAL,hr="Unknown error status: "+an+" with message "+gt.message),p=!0,E.wo(new m(ws,hr)),l.close()}else v(H,`RPC '${t}' stream ${i} received:`,q),E._o(q)}}),T(a,$c.STAT_EVENT,I=>{I.stat===Nr.PROXY?v(H,`RPC '${t}' stream ${i} detected buffering proxy`):I.stat===Nr.NOPROXY&&v(H,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.fo()},0),E}}function xs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(e){return new Kh(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t,n,s=1e3,i=1.5,r=6e4){this.ii=t,this.timerId=n,this.Po=s,this.bo=i,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-s);i>0&&v("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t,n,s,i,r,o,a,u){this.ii=t,this.$o=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Ha(t,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,t!==4?this.qo.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(At(n.toString()),At("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Fo===n&&this.Zo(s,i)},s=>{t(()=>{const i=new m(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(i)})})}Zo(t,n){const s=this.Xo(this.Fo);this.stream=this.eu(t,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{s(()=>this.tu(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(t){return v("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.Fo===t?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ol extends Wa{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}eu(t,n){return this.connection.Ro("Listen",t,n)}onMessage(t){this.qo.reset();const n=Hh(this.serializer,t),s=function(i){if(!("targetChange"in i))return C.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?C.min():r.readTime?vt(r.readTime):C.min()}(t);return this.listener.nu(n,s)}su(t){const n={};n.database=Zs(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;if(o=Qs(a)?{documents:Xh(i,a)}:{query:Jh(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=$a(i,r.resumeToken);const u=Ys(i,r.expectedCount);u!==null&&(o.expectedCount=u)}else if(r.snapshotVersion.compareTo(C.min())>0){o.readTime=Mn(i,r.snapshotVersion.toTimestamp());const u=Ys(i,r.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,t);const s=tl(this.serializer,t);s&&(n.labels=s),this.Wo(n)}iu(t){const n={};n.database=Zs(this.serializer),n.removeTarget=t,this.Wo(n)}}class Fl extends Wa{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,n){return this.connection.Ro("Write",t,n)}onMessage(t){if(L(!!t.streamToken),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();const n=Yh(t.writeResults,t.commitTime),s=vt(t.commitTime);return this.listener.cu(s,n)}return L(!t.writeResults||t.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const t={};t.database=Zs(this.serializer),this.Wo(t)}uu(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Wh(this.serializer,s))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new m(d.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Io(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new m(d.UNKNOWN,i.toString())})}vo(t,n,s,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new m(d.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class Pl{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(t){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,t==="Online"&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(At(n),this.mu=!1):v("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{Qt(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=N(a);u.vu.add(4),await nn(u),u.bu.set("Unknown"),u.vu.delete(4),await as(u)}(this))})}),this.bu=new Pl(s,i)}}async function as(e){if(Qt(e))for(const t of e.Ru)await t(!0)}async function nn(e){for(const t of e.Ru)await t(!1)}function Ya(e,t){const n=N(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),ji(n)?Bi(n):pe(n).Ko()&&qi(n,t))}function Xa(e,t){const n=N(e),s=pe(n);n.Au.delete(t),s.Ko()&&Ja(n,t),n.Au.size===0&&(s.Ko()?s.jo():Qt(n)&&n.bu.set("Unknown"))}function qi(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(C.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}pe(e).su(t)}function Ja(e,t){e.Vu.qt(t),pe(e).iu(t)}function Bi(e){e.Vu=new qh({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),pe(e).start(),e.bu.gu()}function ji(e){return Qt(e)&&!pe(e).Uo()&&e.Au.size>0}function Qt(e){return N(e).vu.size===0}function Za(e){e.Vu=void 0}async function Ul(e){e.Au.forEach((t,n)=>{qi(e,t)})}async function $l(e,t){Za(e),ji(e)?(e.bu.Iu(t),Bi(e)):e.bu.set("Unknown")}async function ql(e,t,n){if(e.bu.set("Online"),t instanceof Ua&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Au.delete(o),s.Vu.removeTarget(o))}(e,t)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Ln(e,s)}else if(t instanceof wn?e.Vu.Ht(t):t instanceof Va?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(C.min()))try{const s=await Qa(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Vu.ce(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.Au.get(u);c&&i.Au.set(u,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,u)=>{const c=i.Au.get(a);if(!c)return;i.Au.set(a,c.withResumeToken(nt.EMPTY_BYTE_STRING,c.snapshotVersion)),Ja(i,a);const h=new Dt(c.target,a,u,c.sequenceNumber);qi(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await Ln(e,s)}}async function Ln(e,t,n){if(!Ze(t))throw t;e.vu.add(1),await nn(e),e.bu.set("Offline"),n||(n=()=>Qa(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await as(e)})}function tu(e,t){return t().catch(n=>Ln(e,n,t))}async function us(e){const t=N(e),n=Mt(t);let s=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;Bl(t);)try{const i=await Nl(t.localStore,s);if(i===null){t.Eu.length===0&&n.jo();break}s=i.batchId,jl(t,i)}catch(i){await Ln(t,i)}eu(t)&&nu(t)}function Bl(e){return Qt(e)&&e.Eu.length<10}function jl(e,t){e.Eu.push(t);const n=Mt(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function eu(e){return Qt(e)&&!Mt(e).Uo()&&e.Eu.length>0}function nu(e){Mt(e).start()}async function zl(e){Mt(e).hu()}async function Kl(e){const t=Mt(e);for(const n of e.Eu)t.uu(n.mutations)}async function Gl(e,t,n){const s=e.Eu.shift(),i=Oi.from(s,t,n);await tu(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await us(e)}async function Ql(e,t){t&&Mt(e).ou&&await async function(n,s){if(i=s.code,Vh(i)&&i!==d.ABORTED){const r=n.Eu.shift();Mt(n).Qo(),await tu(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await us(n)}var i}(e,t),eu(e)&&nu(e)}async function Xr(e,t){const n=N(e);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=Qt(n);n.vu.add(3),await nn(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await as(n)}async function Hl(e,t){const n=N(e);t?(n.vu.delete(2),await as(n)):t||(n.vu.add(2),await nn(n),n.bu.set("Unknown"))}function pe(e){return e.Su||(e.Su=function(t,n,s){const i=N(t);return i.fu(),new Ol(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{uo:Ul.bind(null,e),ao:$l.bind(null,e),nu:ql.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Qo(),ji(e)?Bi(e):e.bu.set("Unknown")):(await e.Su.stop(),Za(e))})),e.Su}function Mt(e){return e.Du||(e.Du=function(t,n,s){const i=N(t);return i.fu(),new Fl(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{uo:zl.bind(null,e),ao:Ql.bind(null,e),au:Kl.bind(null,e),cu:Gl.bind(null,e)}),e.Ru.push(async t=>{t?(e.Du.Qo(),await us(e)):(await e.Du.stop(),e.Eu.length>0&&(v("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))})),e.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new It,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new zi(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new m(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ki(e,t){if(At("AsyncQueue",`${t}: ${e}`),Ze(e))return new m(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t){this.comparator=t?(n,s)=>t(n,s)||w.comparator(n.key,s.key):(n,s)=>w.comparator(n.key,s.key),this.keyedMap=Ee(),this.sortedSet=new O(this.comparator)}static emptySet(t){return new ee(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ee)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new ee;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.Cu=new O(w.comparator)}track(t){const n=t.doc.key,s=this.Cu.get(n);s?t.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,t):t.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Cu=this.Cu.remove(n):t.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):S():this.Cu=this.Cu.insert(n,t)}xu(){const t=[];return this.Cu.inorderTraversal((n,s)=>{t.push(s)}),t}}class ce{constructor(t,n,s,i,r,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ce(t,n,ee.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&es(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.Nu=void 0,this.listeners=[]}}class Yl{constructor(){this.queries=new ge(t=>Aa(t),es),this.onlineState="Unknown",this.ku=new Set}}async function Gi(e,t){const n=N(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Wl),i)try{r.Nu=await n.onListen(s)}catch(o){const a=Ki(o,`Initialization of query '${Ws(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Mu(n.onlineState),r.Nu&&t.$u(r.Nu)&&Hi(n)}async function Qi(e,t){const n=N(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Xl(e,t){const n=N(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.$u(i)&&(s=!0);o.Nu=i}}s&&Hi(n)}function Jl(e,t,n){const s=N(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function Hi(e){e.ku.forEach(t=>{t.next()})}class Wi{constructor(t,n,s){this.query=t,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new ce(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),n=!0):this.qu(t,this.onlineState)&&(this.Uu(t),n=!0),this.Bu=t,n}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),n=!0),n}qu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Lu(t){if(t.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(t){t=ce.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t){this.key=t}}class iu{constructor(t){this.key=t}}class Zl{constructor(t,n){this.query=t,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=k(),this.mutatedKeys=k(),this.tc=Ca(t),this.ec=new ee(this.tc)}get nc(){return this.Yu}sc(t,n){const s=n?n.ic:new Jr,i=n?n.ec:this.ec;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,l)=>{const f=i.get(h),p=ns(this.query,l)?l:null,E=!!f&&this.mutatedKeys.has(f.key),T=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let I=!1;f&&p?f.data.isEqual(p.data)?E!==T&&(s.track({type:3,doc:p}),I=!0):this.rc(f,p)||(s.track({type:2,doc:p}),I=!0,(u&&this.tc(p,u)>0||c&&this.tc(p,c)<0)&&(a=!0)):!f&&p?(s.track({type:0,doc:p}),I=!0):f&&!p&&(s.track({type:1,doc:f}),I=!0,(u||c)&&(a=!0)),I&&(p?(o=o.add(p),r=T?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{ec:o,ic:s,zi:a,mutatedKeys:r}}rc(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const r=t.ic.xu();r.sort((c,h)=>function(l,f){const p=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return p(l)-p(f)}(c.type,h.type)||this.tc(c.doc,h.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,u=a!==this.Xu;return this.Xu=a,r.length!==0||u?{snapshot:new ce(this.query,t.ec,i,r,t.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Jr,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=k(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return t.forEach(s=>{this.Zu.has(s)||n.push(new iu(s))}),this.Zu.forEach(s=>{t.has(s)||n.push(new su(s))}),n}hc(t){this.Yu=t.ir,this.Zu=k();const n=this.sc(t.documents);return this.applyChanges(n,!0)}lc(){return ce.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class td{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class ed{constructor(t){this.key=t,this.fc=!1}}class nd{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new ge(a=>Aa(a),es),this._c=new Map,this.mc=new Set,this.gc=new O(w.comparator),this.yc=new Map,this.Ic=new Vi,this.Tc={},this.Ec=new Map,this.Ac=ue.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function sd(e,t){const n=fd(e);let s,i;const r=n.wc.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.lc();else{const o=await kl(n.localStore,Ct(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await id(n,t,s,a==="current",o.resumeToken),n.isPrimaryClient&&Ya(n.remoteStore,o)}return i}async function id(e,t,n,s,i){e.Rc=(l,f,p)=>async function(E,T,I,$){let q=T.view.sc(I);q.zi&&(q=await Hr(E.localStore,T.query,!1).then(({documents:an})=>T.view.sc(an,q)));const it=$&&$.targetChanges.get(T.targetId),gt=T.view.applyChanges(q,E.isPrimaryClient,it);return to(E,T.targetId,gt.cc),gt.snapshot}(e,l,f,p);const r=await Hr(e.localStore,t,!0),o=new Zl(t,r.ir),a=o.sc(r.documents),u=en.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",i),c=o.applyChanges(a,e.isPrimaryClient,u);to(e,n,c.cc);const h=new td(t,n,o);return e.wc.set(t,h),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function rd(e,t){const n=N(e),s=n.wc.get(t),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter(r=>!es(r,t))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ti(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Xa(n.remoteStore,s.targetId),ei(n,s.targetId)}).catch(Je)):(ei(n,s.targetId),await ti(n.localStore,s.targetId,!0))}async function od(e,t,n){const s=gd(e);try{const i=await function(r,o){const a=N(r),u=U.now(),c=o.reduce((f,p)=>f.add(p.key),k());let h,l;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=Nt(),E=k();return a.Zi.getEntries(f,c).next(T=>{p=T,p.forEach((I,$)=>{$.isValidDocument()||(E=E.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,p)).next(T=>{h=T;const I=[];for(const $ of o){const q=Lh($,h.get($.key).overlayedDocument);q!=null&&I.push(new Ft($.key,q,ya(q.value.mapValue),ht.exists(!0)))}return a.mutationQueue.addMutationBatch(f,u,I,o)}).next(T=>{l=T;const I=T.applyToLocalDocumentSet(h,E);return a.documentOverlayCache.saveOverlays(f,T.batchId,I)})}).then(()=>({batchId:l.batchId,changes:ka(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let u=r.Tc[r.currentUser.toKey()];u||(u=new O(_)),u=u.insert(o,a),r.Tc[r.currentUser.toKey()]=u}(s,i.batchId,n),await sn(s,i.changes),await us(s.remoteStore)}catch(i){const r=Ki(i,"Failed to persist write");n.reject(r)}}async function ru(e,t){const n=N(e);try{const s=await Al(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.yc.get(r);o&&(L(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?L(o.fc):i.removedDocuments.size>0&&(L(o.fc),o.fc=!1))}),await sn(n,s,t)}catch(s){await Je(s)}}function Zr(e,t,n){const s=N(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.wc.forEach((r,o)=>{const a=o.view.Mu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=N(r);a.onlineState=o;let u=!1;a.queries.forEach((c,h)=>{for(const l of h.listeners)l.Mu(o)&&(u=!0)}),u&&Hi(a)}(s.eventManager,t),i.length&&s.dc.nu(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function ad(e,t,n){const s=N(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.yc.get(t),r=i&&i.key;if(r){let o=new O(w.comparator);o=o.insert(r,Y.newNoDocument(r,C.min()));const a=k().add(r),u=new rs(C.min(),new Map,new O(_),o,a);await ru(s,u),s.gc=s.gc.remove(r),s.yc.delete(t),Yi(s)}else await ti(s.localStore,t,!1).then(()=>ei(s,t,n)).catch(Je)}async function ud(e,t){const n=N(e),s=t.batch.batchId;try{const i=await Sl(n.localStore,t);au(n,s,null),ou(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await sn(n,i)}catch(i){await Je(i)}}async function cd(e,t,n){const s=N(e);try{const i=await function(r,o){const a=N(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(h=>(L(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(u,h))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(s.localStore,t);au(s,t,n),ou(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await sn(s,i)}catch(i){await Je(i)}}function ou(e,t){(e.Ec.get(t)||[]).forEach(n=>{n.resolve()}),e.Ec.delete(t)}function au(e,t,n){const s=N(e);let i=s.Tc[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.Tc[s.currentUser.toKey()]=i}}function ei(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e._c.get(t))e.wc.delete(s),n&&e.dc.Pc(s,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach(s=>{e.Ic.containsKey(s)||uu(e,s)})}function uu(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);n!==null&&(Xa(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),Yi(e))}function to(e,t,n){for(const s of n)s instanceof su?(e.Ic.addReference(s.key,t),hd(e,s)):s instanceof iu?(v("SyncEngine","Document no longer in limbo: "+s.key),e.Ic.removeReference(s.key,t),e.Ic.containsKey(s.key)||uu(e,s.key)):S()}function hd(e,t){const n=t.key,s=n.path.canonicalString();e.gc.get(n)||e.mc.has(s)||(v("SyncEngine","New document in limbo: "+n),e.mc.add(s),Yi(e))}function Yi(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new w(R.fromString(t)),s=e.Ac.next();e.yc.set(s,new ed(n)),e.gc=e.gc.insert(n,s),Ya(e.remoteStore,new Dt(Ct(Zn(n.path)),s,"TargetPurposeLimboResolution",Ni.ct))}}async function sn(e,t,n){const s=N(e),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,u)=>{o.push(s.Rc(u,t,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=$i.Li(u.targetId,c);r.push(h)}}))}),await Promise.all(o),s.dc.nu(i),await async function(a,u){const c=N(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(u,l=>g.forEach(l.Fi,f=>c.persistence.referenceDelegate.addReference(h,l.targetId,f)).next(()=>g.forEach(l.Bi,f=>c.persistence.referenceDelegate.removeReference(h,l.targetId,f)))))}catch(h){if(!Ze(h))throw h;v("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const l=h.targetId;if(!h.fromCache){const f=c.Ji.get(l),p=f.snapshotVersion,E=f.withLastLimboFreeSnapshotVersion(p);c.Ji=c.Ji.insert(l,E)}}}(s.localStore,r))}async function ld(e,t){const n=N(e);if(!n.currentUser.isEqual(t)){v("SyncEngine","User change. New user:",t.toKey());const s=await Ga(n.localStore,t);n.currentUser=t,function(i,r){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new m(d.CANCELLED,r))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await sn(n,s.er)}}function dd(e,t){const n=N(e),s=n.yc.get(t);if(s&&s.fc)return k().add(s.key);{let i=k();const r=n._c.get(t);if(!r)return i;for(const o of r){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function fd(e){const t=N(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ru.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=dd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ad.bind(null,t),t.dc.nu=Xl.bind(null,t.eventManager),t.dc.Pc=Jl.bind(null,t.eventManager),t}function gd(e){const t=N(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ud.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=cd.bind(null,t),t}class eo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=os(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Il(this.persistence,new El,t.initialUser,this.serializer)}createPersistence(t){return new vl(Ui.zs,this.serializer)}createSharedClientState(t){return new _l}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pd{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Zr(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ld.bind(null,this.syncEngine),await Hl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Yl}createDatastore(t){const n=os(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new Ll(i));var i;return function(r,o,a,u){return new bl(r,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>Zr(this.syncEngine,a,0),o=Yr.D()?new Yr:new xl,new Vl(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,u,c){const h=new nd(s,i,r,o,a,u);return c&&(h.vc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=N(t);v("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await nn(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):At("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=W.UNAUTHENTICATED,this.clientId=ga.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{v("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(v("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new m(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new It;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Ki(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Rs(e,t){e.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Ga(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function no(e,t){e.asyncQueue.verifyOperationInProgress();const n=await vd(e);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>Xr(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>Xr(t.remoteStore,r)),e._onlineComponents=t}function yd(e){return e.name==="FirebaseError"?e.code===d.FAILED_PRECONDITION||e.code===d.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function vd(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){v("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rs(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!yd(n))throw n;se("Error using user provided cache. Falling back to memory cache: "+n),await Rs(e,new eo)}}else v("FirestoreClient","Using default OfflineComponentProvider"),await Rs(e,new eo);return e._offlineComponents}async function cu(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(v("FirestoreClient","Using user provided OnlineComponentProvider"),await no(e,e._uninitializedComponentsProvider._online)):(v("FirestoreClient","Using default OnlineComponentProvider"),await no(e,new pd))),e._onlineComponents}function wd(e){return cu(e).then(t=>t.syncEngine)}async function On(e){const t=await cu(e),n=t.eventManager;return n.onListen=sd.bind(null,t.syncEngine),n.onUnlisten=rd.bind(null,t.syncEngine),n}function Ed(e,t,n={}){const s=new It;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const c=new Xi({next:l=>{r.enqueueAndForget(()=>Qi(i,h));const f=l.docs.has(o);!f&&l.fromCache?u.reject(new m(d.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&l.fromCache&&a&&a.source==="server"?u.reject(new m(d.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(l)},error:l=>u.reject(l)}),h=new Wi(Zn(o.path),c,{includeMetadataChanges:!0,Ku:!0});return Gi(i,h)}(await On(e),e.asyncQueue,t,n,s)),s.promise}function Td(e,t,n={}){const s=new It;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const c=new Xi({next:l=>{r.enqueueAndForget(()=>Qi(i,h)),l.fromCache&&a.source==="server"?u.reject(new m(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(l)},error:l=>u.reject(l)}),h=new Wi(o,c,{includeMetadataChanges:!0,Ku:!0});return Gi(i,h)}(await On(e),e.asyncQueue,t,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(e,t,n){if(!n)throw new m(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Id(e,t,n,s){if(t===!0&&s===!0)throw new m(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function io(e){if(!w.isDocumentKey(e))throw new m(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ro(e){if(w.isDocumentKey(e))throw new m(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function cs(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":S()}function ot(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new m(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cs(e);throw new m(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Sd(e,t){if(t<=0)throw new m(d.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new m(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new m(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Id("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hu((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new m(d.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new m(d.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new m(d.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=t.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,s}}class hs{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new m(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new m(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new zc;switch(n.type){case"firstParty":return new Hc(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new m(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=so.get(t);n&&(v("ComponentProvider","Removing Datastore"),so.delete(t),n.terminate())}(this),Promise.resolve()}}function Ad(e,t,n,s={}){var i;const r=(e=ot(e,hs))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&se("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=W.MOCK_USER;else{o=Ou(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new m(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new W(u)}e._authCredentials=new Kc(new fa(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _t(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new et(this.firestore,t,this._key)}}class Et{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Et(this.firestore,t,this._query)}}class _t extends Et{constructor(t,n,s){super(t,n,Zn(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new et(this.firestore,null,new w(t))}withConverter(t){return new _t(this.firestore,t,this._path)}}function Vd(e,t,...n){if(e=lt(e),lu("collection","path",t),e instanceof hs){const s=R.fromString(t,...n);return ro(s),new _t(e,null,s)}{if(!(e instanceof et||e instanceof _t))throw new m(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(R.fromString(t,...n));return ro(s),new _t(e.firestore,null,s)}}function Cd(e,t,...n){if(e=lt(e),arguments.length===1&&(t=ga.A()),lu("doc","path",t),e instanceof hs){const s=R.fromString(t,...n);return io(s),new et(e,null,new w(s))}{if(!(e instanceof et||e instanceof _t))throw new m(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(R.fromString(t,...n));return io(s),new et(e.firestore,e instanceof _t?e.converter:null,new w(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Ha(this,"async_queue_retry"),this.Xc=()=>{const n=xs();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=xs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=xs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new It;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!Ze(t))throw t;v("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(s=>{this.Wc=s,this.Hc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw At("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(t,n,s){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const i=zi.createAndSchedule(this,t,n,s,r=>this.na(r));return this.zc.push(i),i}Zc(){this.Wc&&S()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}function ao(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class kt extends hs{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new Nd,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||du(this),this._firestoreClient.terminate()}}function Ud(e,t){const n=typeof e=="object"?e:Ru(),s=typeof e=="string"?e:t||"(default)",i=Mu(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Lu("firestore");r&&Ad(i,...r)}return i}function ls(e){return e._firestoreClient||du(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function du(e){var t,n,s;const i=e._freezeSettings(),r=function(o,a,u,c){return new oh(o,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,hu(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new md(e._authCredentials,e._appCheckCredentials,e._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this._byteString=t}static fromBase64String(t){try{return new he(nt.fromBase64String(t))}catch(n){throw new m(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new he(nt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new m(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new X(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new m(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new m(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return _(this._lat,t._lat)||_(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=/^__.*__$/;class Dd{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Ft(t,this.data,this.fieldMask,n,this.fieldTransforms):new tn(t,this.data,n,this.fieldTransforms)}}class fu{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Ft(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function gu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class Zi{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new Zi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.aa({path:s,la:!1});return i.fa(t),i}da(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.aa({path:s,la:!1});return i.ua(),i}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return Fn(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(t.length===0)throw this._a("Document fields must not be empty");if(gu(this.ca)&&kd.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class _d{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||os(t)}ya(t,n,s,i=!1){return new Zi({ca:t,methodName:n,ga:s,path:X.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rn(e){const t=e._freezeSettings(),n=os(e._databaseId);return new _d(e._databaseId,!!t.ignoreUndefinedProperties,n)}function pu(e,t,n,s,i,r={}){const o=e.ya(r.merge||r.mergeFields?2:0,t,n,i);er("Data must be an object, but it was:",o,s);const a=yu(s,o);let u,c;if(r.merge)u=new at(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const l of r.mergeFields){const f=ni(t,l,n);if(!o.contains(f))throw new m(d.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);wu(h,f)||h.push(f)}u=new at(h),c=o.fieldTransforms.filter(l=>u.covers(l.field))}else u=null,c=o.fieldTransforms;return new Dd(new rt(a),u,c)}class gs extends fs{_toFieldTransform(t){if(t.ca!==2)throw t.ca===1?t._a(`${this._methodName}() can only appear at the top level of your update data`):t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof gs}}class tr extends fs{_toFieldTransform(t){return new _h(t.path,new $e)}isEqual(t){return t instanceof tr}}function xd(e,t,n,s){const i=e.ya(1,t,n);er("Data must be an object, but it was:",i,s);const r=[],o=rt.empty();Kt(s,(u,c)=>{const h=nr(t,u,n);c=lt(c);const l=i.da(h);if(c instanceof gs)r.push(h);else{const f=on(c,l);f!=null&&(r.push(h),o.set(h,f))}});const a=new at(r);return new fu(o,a,i.fieldTransforms)}function Rd(e,t,n,s,i,r){const o=e.ya(1,t,n),a=[ni(t,s,n)],u=[i];if(r.length%2!=0)throw new m(d.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(ni(t,r[f])),u.push(r[f+1]);const c=[],h=rt.empty();for(let f=a.length-1;f>=0;--f)if(!wu(c,a[f])){const p=a[f];let E=u[f];E=lt(E);const T=o.da(p);if(E instanceof gs)c.push(p);else{const I=on(E,T);I!=null&&(c.push(p),h.set(p,I))}}const l=new at(c);return new fu(h,l,o.fieldTransforms)}function mu(e,t,n,s=!1){return on(n,e.ya(s?4:3,t))}function on(e,t){if(vu(e=lt(e)))return er("Unsupported field value:",t,e),yu(e,t);if(e instanceof fs)return function(n,s){if(!gu(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&t.ca!==4)throw t._a("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=on(o,s.wa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=lt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Nh(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=U.fromDate(n);return{timestampValue:Mn(s.serializer,i)}}if(n instanceof U){const i=new U(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Mn(s.serializer,i)}}if(n instanceof Ji)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof he)return{bytesValue:$a(s.serializer,n._byteString)};if(n instanceof et){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pi(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${cs(n)}`)}(e,t)}function yu(e,t){const n={};return pa(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Kt(e,(s,i)=>{const r=on(i,t.ha(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function vu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof U||e instanceof Ji||e instanceof he||e instanceof et||e instanceof fs)}function er(e,t,n){if(!vu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=cs(n);throw s==="an object"?t._a(e+" a custom object"):t._a(e+" "+s)}}function ni(e,t,n){if((t=lt(t))instanceof ds)return t._internalPath;if(typeof t=="string")return nr(e,t);throw Fn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Md=new RegExp("[~\\*/\\[\\]]");function nr(e,t,n){if(t.search(Md)>=0)throw Fn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ds(...t.split("."))._internalPath}catch{throw Fn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Fn(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new m(d.INVALID_ARGUMENT,a+e+u)}function wu(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ld(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(ps("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ld extends sr{data(){return super.data()}}function ps(e,t){return typeof t=="string"?nr(e,t):t instanceof ds?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new m(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ir{}class ms extends ir{}function $d(e,t,...n){let s=[];t instanceof ir&&s.push(t),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof rr).length,o=i.filter(a=>a instanceof ys).length;if(r>1||r>0&&o>0)throw new m(d.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)e=i._apply(e);return e}class ys extends ms{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new ys(t,n,s)}_apply(t){const n=this._parse(t);return Tu(t._query,n),new Et(t.firestore,t.converter,Hs(t._query,n))}_parse(t){const n=rn(t.firestore);return function(i,r,o,a,u,c,h){let l;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new m(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){co(h,c);const f=[];for(const p of h)f.push(uo(a,i,p));l={arrayValue:{values:f}}}else l=uo(a,i,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||co(h,c),l=mu(o,r,h,c==="in"||c==="not-in");return V.create(u,c,l)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function qd(e,t,n){const s=t,i=ps("where",e);return ys._create(i,s,n)}class rr extends ir{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new rr(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:ft.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)Tu(r,a),r=Hs(r,a)}(t._query,n),new Et(t.firestore,t.converter,Hs(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class or extends ms{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new or(t,n)}_apply(t){const n=function(s,i,r){if(s.startAt!==null)throw new m(d.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new m(d.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new te(i,r);return function(a,u){if(Ri(a)===null){const c=ts(a);c!==null&&Iu(a,c,u.field)}}(s,o),o}(t._query,this._field,this._direction);return new Et(t.firestore,t.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new Gt(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function Bd(e,t="asc"){const n=t,s=ps("orderBy",e);return or._create(s,n)}class ar extends ms{constructor(t,n,s){super(),this.type=t,this._limit=n,this._limitType=s}static _create(t,n,s){return new ar(t,n,s)}_apply(t){return new Et(t.firestore,t.converter,xn(t._query,this._limit,this._limitType))}}function jd(e){return Sd("limit",e),ar._create("limit",e,"F")}class ur extends ms{constructor(t,n,s){super(),this.type=t,this._docOrFields=n,this._inclusive=s}static _create(t,n,s){return new ur(t,n,s)}_apply(t){const n=Od(t,this.type,this._docOrFields,this._inclusive);return new Et(t.firestore,t.converter,function(s,i){return new Gt(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(t._query,n))}}function zd(...e){return ur._create("startAfter",e,!1)}function Od(e,t,n,s){if(n[0]=lt(n[0]),n[0]instanceof sr)return function(i,r,o,a,u){if(!a)throw new m(d.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const c=[];for(const h of $t(i))if(h.field.isKeyField())c.push(_n(r,a.key));else{const l=a.data.field(h.field);if(Jn(l))throw new m(d.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(l===null){const f=h.field.canonicalString();throw new m(d.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}c.push(l)}return new ae(c,u)}(e._query,e.firestore._databaseId,t,n[0]._document,s);{const i=rn(e.firestore);return function(r,o,a,u,c,h){const l=r.explicitOrderBy;if(c.length>l.length)throw new m(d.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let p=0;p<c.length;p++){const E=c[p];if(l[p].field.isKeyField()){if(typeof E!="string")throw new m(d.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof E}`);if(!Mi(r)&&E.indexOf("/")!==-1)throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${E}' contains a slash.`);const T=r.path.child(R.fromString(E));if(!w.isDocumentKey(T))throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${T}' is not because it contains an odd number of segments.`);const I=new w(T);f.push(_n(o,I))}else{const T=mu(a,u,E);f.push(T)}}return new ae(f,h)}(e._query,e.firestore._databaseId,i,t,n,s)}}function uo(e,t,n){if(typeof(n=lt(n))=="string"){if(n==="")throw new m(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Mi(t)&&n.indexOf("/")!==-1)throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(R.fromString(n));if(!w.isDocumentKey(s))throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return _n(e,new w(s))}if(n instanceof et)return _n(e,n._key);throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${cs(n)}.`)}function co(e,t){if(!Array.isArray(e)||e.length===0)throw new m(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Tu(e,t){if(t.isInequality()){const s=ts(e),i=t.field;if(s!==null&&!s.isEqual(i))throw new m(d.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=Ri(e);r!==null&&Iu(e,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new m(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new m(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Iu(e,t,n){if(!n.isEqual(t))throw new m(d.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Fd{convertValue(t,n="none"){switch(jt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return P(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Bt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw S()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Kt(t,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new Ji(P(t.latitude),P(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=ki(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Pe(t));default:return null}}convertTimestamp(t){const n=Rt(t);return new U(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=R.fromString(t);L(Ka(s));const i=new Ve(s.get(1),s.get(3)),r=new w(s.popFirst(5));return i.isEqual(n)||At(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Au extends sr{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new En(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(ps("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class En extends Au{data(t={}){return super.data(t)}}class Cu{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ie(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new En(this._firestore,this._userDataWriter,s.key,s,new Ie(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new m(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new En(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ie(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new En(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ie(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,c=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:bd(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bd(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(e){e=ot(e,et);const t=ot(e.firestore,kt);return Ed(ls(t),e._key).then(n=>Nu(t,e,n))}class cr extends Fd{constructor(t){super(),this.firestore=t}convertBytes(t){return new he(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new et(this.firestore,null,n)}}function Gd(e){e=ot(e,Et);const t=ot(e.firestore,kt),n=ls(t),s=new cr(t);return Eu(e._query),Td(n,e._query).then(i=>new Cu(t,s,e,i))}function Qd(e,t,n){e=ot(e,et);const s=ot(e.firestore,kt),i=Su(e.converter,t,n);return vs(s,[pu(rn(s),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,ht.none())])}function Hd(e,t,n,...s){e=ot(e,et);const i=ot(e.firestore,kt),r=rn(i);let o;return o=typeof(t=lt(t))=="string"||t instanceof ds?Rd(r,"updateDoc",e._key,t,n,s):xd(r,"updateDoc",e._key,t),vs(i,[o.toMutation(e._key,ht.exists(!0))])}function Wd(e){return vs(ot(e.firestore,kt),[new Li(e._key,ht.none())])}function Yd(e,t){const n=ot(e.firestore,kt),s=Cd(e),i=Su(e.converter,t);return vs(n,[pu(rn(e.firestore),"addDoc",s._key,i,e.converter!==null,{}).toMutation(s._key,ht.exists(!1))]).then(()=>s)}function Xd(e,...t){var n,s,i;e=lt(e);let r={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||ao(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(ao(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(i=l.complete)===null||i===void 0?void 0:i.bind(l)}let u,c,h;if(e instanceof et)c=ot(e.firestore,kt),h=Zn(e._key.path),u={next:l=>{t[o]&&t[o](Nu(c,e,l))},error:t[o+1],complete:t[o+2]};else{const l=ot(e,Et);c=ot(l.firestore,kt),h=l._query;const f=new cr(c);u={next:p=>{t[o]&&t[o](new Cu(c,f,l,p))},error:t[o+1],complete:t[o+2]},Eu(e._query)}return function(l,f,p,E){const T=new Xi(E),I=new Wi(f,T,p);return l.asyncQueue.enqueueAndForget(async()=>Gi(await On(l),I)),()=>{T.Dc(),l.asyncQueue.enqueueAndForget(async()=>Qi(await On(l),I))}}(ls(c),h,a,u)}function vs(e,t){return function(n,s){const i=new It;return n.asyncQueue.enqueueAndForget(async()=>od(await wd(n),s,i)),i.promise}(ls(e),t)}function Nu(e,t,n){const s=n.docs.get(t._key),i=new cr(e);return new Au(e,i,t._key,s,new Ie(n.hasPendingWrites,n.fromCache),t.converter)}function Jd(){return new tr("serverTimestamp")}(function(e,t=!0){(function(n){fe=n})(Fu),Du(new _u("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new kt(new Gc(n.getProvider("auth-internal")),new Yc(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new m(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ve(a.options.projectId,u)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),dr(kr,"3.12.1",e),dr(kr,"3.12.1","esm2017")})();export{zd as F,Jd as G,Xd as I,Ud as P,$d as R,Vd as _,Hd as a,qd as b,Kd as c,Gd as d,Cd as g,jd as k,Qd as m,Yd as p,Bd as x,Wd as y};
