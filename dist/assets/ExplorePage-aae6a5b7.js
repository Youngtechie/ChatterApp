import{d as H,r as u,u as U,o as A,y as E,a as V,c as v,f,p as Q,v as j,j as O,g as i,F as G,z as J,l as I,w,n as K,k as X,t as M,h as Y,q as Z,s as ee}from"./index-d9c4c67e.js";import{u as te,a as ne}from"./useAuth.vue_vue_type_script_lang-77171506.js";import{P as oe,R as B,k as D,x as L,_ as N,d as se,g as ae,c as re,F as ie}from"./index.esm2017-7370a789.js";import{u as le}from"./useUserDetails.vue_vue_type_script_lang-4fb6f021.js";import{a as ce}from"./index-72692797.js";import{c as ue}from"./useCalculateTime.vue_vue_type_script_lang-ca052a8e.js";import{u as de}from"./useDetailButtons-0e25b9a8.js";import{_ as me}from"./_plugin-vue_export-helper-c27b6911.js";const pe=h=>(Z("data-v-fbad49cb"),h=h(),ee(),h),ve={class:"exploreSection"},fe={key:0,class:K({resultsContainer:!0})},he=["onClick"],ge={class:"result-item-other"},_e={class:"result-item-header"},we=["onClick"],ye=["innerHTML","onClick"],Se=["onClick"],be=pe(()=>i("div",{id:"warningShow"},null,-1)),Ce=H({__name:"ExplorePage",setup(h){le();const c=u([]),d=u(""),C=new DOMParser,y=U(),{app:R}=te(),S=oe(R),x=ne();x.sidebar=!1;const m=u(null),g=u(),k=u(!0);let p=u(!1);A(()=>{E(()=>{const o=document.getElementById("warningShow");o&&(o.style.display="flex",o.textContent="Loading ...")}),m.value=B(N(S,"posts"),L("postTime","desc"),D(15)),P(m.value),window.addEventListener("resize",q),window.innerWidth>=768?p.value=!0:p.value=!1});function q(){window.innerWidth>=768?p.value=!0:p.value=!1}async function z(e){d.value="";const o=e.postContain;await ce.post("/.netlify/functions/postContent",{contentUrl:o}).then(a=>{const r=C.parseFromString(a.data.content,"text/html");d.value=r.body.innerHTML})}async function F(e){g.value=null;const o=ae(S,"users",e),a=await re(o);if(a.data()!==void 0){const{fullName:r,profilePicture:t,username:s,blogName:n}=a.data(),l={profilePicture:t,posterID:e,fullName:r,username:s,blogName:n};g.value={id:e,img:l.profilePicture,fullName:l.fullName,username:l.username,blogname:l.blogName}}}async function P(e){var t;const a=(await se(e)).docs.map(async s=>{var l;const n=s.data();if(n!=null&&n.length!==0){await z(n);const _=C.parseFromString(d.value,"text/html");return _.body.querySelectorAll("img").forEach(b=>{b.remove()}),_.body.querySelectorAll("video").forEach(b=>{b.remove()}),(l=_.body.querySelector("h1"))==null||l.remove(),d.value=_.body.innerHTML,n.postContain=d.value,await F(n.posterId),n.posterDetails=g.value,n}}),r=await Promise.all(a);if(c.value=r,g.value=null,k.value=!1,((t=c.value)==null?void 0:t.length)>0)E(()=>{const s=document.getElementById("warningShow");s&&(s.style.display="none")});else if(c.value.length===0){const s=document.getElementById("warningShow");s&&(s.style.display="flex",s.textContent="An error occurred, check your internet connection and try reloading.")}}function W(){const e=m.value.docs[m.value.docs.length-1],o=B(N(S,"cities"),L("postTime","desc"),ie(e),D(15));P(o).then(()=>{m.value=o})}function $(e){y.push(`/post/${e}`)}function T(e){if(e===x.signedUser.id)return y.push("/userProfile");y.push(`/chatterUser/${e}`)}return V(()=>{const e=document.getElementById("warningShow");e&&(e.style.display="none")}),(e,o)=>{var a,r;return v(),f("main",ve,[Q(i("h2",null,"Exploring Posts",512),[[j,!O(p)]]),((a=c.value)==null?void 0:a.length)>0&&k.value===!1?(v(),f("div",fe,[(v(!0),f(G,null,J(c.value,(t,s)=>(v(),f("div",{key:s,class:"result-item"},[i("div",{class:"imgCon",onClick:w(n=>T(t.posterId),["prevent"]),style:X({backgroundImage:`url(${t==null?void 0:t.posterDetails.img})`})},null,12,he),i("div",ge,[i("div",_e,[i("span",{onClick:w(n=>T(t.posterId),["prevent"])},M(t==null?void 0:t.posterDetails.blogname),9,we),i("span",null,M(ue(t.postTime.seconds)),1)]),i("div",{innerHTML:t.postContain,id:"divContent",onClick:w(n=>$(t.postId),["prevent"])},null,8,ye),Y(de,{post:t},null,8,["post"])])]))),128))])):I("",!0),((r=c.value)==null?void 0:r.length)===15?(v(),f("button",{key:1,onClick:w(W,["prevent"])},"See More ....",8,Se)):I("",!0),be])}}});const De=me(Ce,[["__scopeId","data-v-fbad49cb"]]);export{De as default};