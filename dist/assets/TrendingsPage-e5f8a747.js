import{d as G,r as u,u as J,o as K,x as N,D as W,s as X,a as Y,c as d,f as m,g as l,F as L,y as $,k as F,w,z as H,t as P,n as Z,h as ee,p as te,q as ne,_ as oe}from"./index-9d180844.js";import{u as se,a as ae}from"./useAuth.vue_vue_type_script_lang-345c5324.js";import{P as re,R as S,b as E,k as C,x as I,_ as T,d as R,g as le,c as ie,F as ce}from"./index.esm2017-b1be84ac.js";import{u as ue}from"./useUserDetails.vue_vue_type_script_lang-331a5968.js";import{a as de}from"./axios-4a70c6fc.js";import{c as me}from"./useCalculateTime.vue_vue_type_script_lang-ca052a8e.js";import{u as ve}from"./useDetailButtons-3c685b48.js";const ge=f=>(te("data-v-9ac62930"),f=f(),ne(),f),pe={class:"trendingsSection"},he={class:"trendingsBtn"},fe=["onClick"],_e={key:0,class:H({resultsContainer:!0})},ye=["onClick"],we={class:"result-item-other"},Se={class:"result-item-header"},Ce=["onClick"],Te=["innerHTML","onClick"],ke=["onClick"],xe=ge(()=>l("div",{id:"warningShow"},null,-1)),be=G({__name:"TrendingsPage",setup(f){ue();const g=u([]),p=u(""),M=new DOMParser,k=J(),{app:U}=se(),h=re(U),q=ae();q.sidebar=!1;const i=u(null),_=u(),y=u([]),v=u(""),B=u(!0);K(()=>{N(()=>{const e=document.getElementById("warningShow");e&&(e.style.display="flex",e.textContent="Loading ...")}),Q().then(()=>{y.value.length>0&&(v.value=y.value[0],i.value=S(T(h,"posts"),I("postTime","desc"),C(10),E("postTag","==",v.value)),x(i.value))})}),W(v,(e,n)=>{e!==n&&(i.value=S(T(h,"posts"),I("postTime","desc"),C(10),E("postTag","==",v.value)),x(i.value))});async function z(e){p.value="";try{const n=e.postContain;await de.post("/postContent",{contentUrl:n}).then(o=>{const r=M.parseFromString(o.data,"text/html");p.value=r.body.innerHTML}).catch(o=>{console.log(o)})}catch{const o=document.querySelector("#ErrorShow span");document.querySelector("#ErrorShow").style.display="flex",o.textContent="Something went wrong, check your internet connection and reload page"}}async function A(e){_.value=null;try{const n=le(h,"users",e),o=await ie(n);if(o.data()!==void 0){const{fullName:r,profilePicture:t,username:s,blogName:a}=o.data(),c={profilePicture:t,posterID:e,fullName:r,username:s,blogName:a};_.value={id:e,img:c.profilePicture,fullName:c.fullName,username:c.username,blogname:c.blogName}}}catch{}}async function x(e){const o=(await R(e)).docs.map(async t=>{var c;const s=t.data();await z(s);const a=M.parseFromString(p.value,"text/html");return a.body.querySelectorAll("img").forEach(b=>{b.remove()}),a.body.querySelectorAll("video").forEach(b=>{b.remove()}),(c=a.body.querySelector("h1"))==null||c.remove(),p.value=a.body.innerHTML,s.postContain=p.value,await A(s.posterId),s.posterDetails=_.value,s}),r=await Promise.all(o);g.value=r,_.value=null,B.value=!1}async function Q(){const e=S(T(h,"tags"),C(5),E("counts",">",0));(await R(e)).docs.forEach(n=>{y.value.push(n.id)})}function V(){const e=i.value.docs[i.value.docs.length-1],n=S(T(h,"cities"),I("postTime","desc"),ce(e),C(15));x(n).then(()=>{i.value=n})}function O(e){k.push(`/post/${e}`)}function D(e){if(e===q.signedUser.id)return k.push("/userProfile");k.push(`/chatterUser/${e}`)}function j(e){v.value=e}return X(()=>{var e;((e=g.value)==null?void 0:e.length)>0&&N(()=>{const n=document.getElementById("warningShow");n&&(n.style.display="none")})}),Y(()=>{const e=document.getElementById("warningShow");e.style.display="none"}),(e,n)=>{var o,r;return d(),m("main",pe,[l("div",he,[(d(!0),m(L,null,$(y.value,(t,s)=>(d(),m("button",{key:s,onClick:a=>j(t),class:H({activeTrend:v.value===t})},P(t),11,fe))),128))]),((o=g.value)==null?void 0:o.length)>0&&B.value===!1?(d(),m("div",_e,[(d(!0),m(L,null,$(g.value,(t,s)=>(d(),m("div",{key:s,class:"result-item"},[l("div",{class:"imgCon",onClick:w(a=>D(t.posterId),["prevent"]),style:Z({backgroundImage:`url(${t==null?void 0:t.posterDetails.img})`})},null,12,ye),l("div",we,[l("div",Se,[l("span",{onClick:w(a=>D(t.posterId),["prevent"])},P(t==null?void 0:t.posterDetails.blogname),9,Ce),l("span",null,P(me(t.postTime.seconds)),1)]),l("div",{innerHTML:t.postContain,id:"divContent",onClick:w(a=>O(t.postId),["prevent"])},null,8,Te),ee(ve,{post:t},null,8,["post"])])]))),128))])):F("",!0),((r=g.value)==null?void 0:r.length)===10?(d(),m("button",{key:1,onClick:w(V,["prevent"])},"See More ....",8,ke)):F("",!0),xe])}}});const Ne=oe(be,[["__scopeId","data-v-9ac62930"]]);export{Ne as default};
