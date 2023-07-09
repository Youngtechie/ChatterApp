import{d as H,r as m,u as U,o as z,y as b,x as A,a as V,c as p,f as v,F as Q,z as O,l as T,w as _,n as j,g as r,k as G,t as E,h as J,q as K,s as W}from"./index-4deccaec.js";import{u as X,a as Y}from"./useAuth.vue_vue_type_script_lang-7f3dced0.js";import{P as Z,R as I,k as M,x as N,_ as B,d as ee,g as te,c as oe,F as se}from"./index.esm2017-190d47df.js";import{u as ne}from"./useUserDetails.vue_vue_type_script_lang-91448774.js";import{a as ae}from"./axios-4a70c6fc.js";import{c as le}from"./useCalculateTime.vue_vue_type_script_lang-ca052a8e.js";import{u as re}from"./useDetailButtons-120b6adc.js";import{_ as ie}from"./_plugin-vue_export-helper-c27b6911.js";const D=h=>(K("data-v-a93d5a60"),h=h(),W(),h),ce={class:"exploreSection"},ue=D(()=>r("h2",null,"Exploring Posts",-1)),de={key:0,class:j({resultsContainer:!0})},me=["onClick"],pe={class:"result-item-other"},ve={class:"result-item-header"},he=["onClick"],fe=["innerHTML","onClick"],_e=["onClick"],ge=D(()=>r("div",{id:"warningShow"},null,-1)),ye=H({__name:"ExplorePage",setup(h){ne();const c=m([]),u=m(""),C=new DOMParser,g=U(),{app:L}=X(),y=Z(L),x=Y();x.sidebar=!1;const d=m(null),f=m(),S=m(!0);z(()=>{b(()=>{const e=document.getElementById("warningShow");e&&(e.style.display="flex",e.textContent="Loading ...")}),d.value=I(B(y,"posts"),N("postTime","desc"),M(15)),k(d.value)});async function q(e){u.value="";const s=e.postContain;await ae.post("/postContent",{contentUrl:s}).then(n=>{const l=C.parseFromString(n.data,"text/html");u.value=l.body.innerHTML})}async function F(e){f.value=null;const s=te(y,"users",e),n=await oe(s);if(n.data()!==void 0){const{fullName:l,profilePicture:t,username:o,blogName:i}=n.data(),a={profilePicture:t,posterID:e,fullName:l,username:o,blogName:i};f.value={id:e,img:a.profilePicture,fullName:a.fullName,username:a.username,blogname:a.blogName}}}async function k(e){const n=(await ee(e)).docs.map(async t=>{var i;const o=t.data();if(o!=null&&o.length!==0){await q(o);const a=C.parseFromString(u.value,"text/html");return a.body.querySelectorAll("img").forEach(w=>{w.remove()}),a.body.querySelectorAll("video").forEach(w=>{w.remove()}),(i=a.body.querySelector("h1"))==null||i.remove(),u.value=a.body.innerHTML,o.postContain=u.value,await F(o.posterId),o.posterDetails=f.value,o}}),l=await Promise.all(n);c.value=l,f.value=null,S.value=!1}function R(){const e=d.value.docs[d.value.docs.length-1],s=I(B(y,"cities"),N("postTime","desc"),se(e),M(15));k(s).then(()=>{d.value=s})}function $(e){g.push(`/post/${e}`)}function P(e){if(e===x.signedUser.id)return g.push("/userProfile");g.push(`/chatterUser/${e}`)}return A(()=>{var e;((e=c.value)==null?void 0:e.length)>0&&b(()=>{const s=document.getElementById("warningShow");s&&(s.style.display="none")})}),V(()=>{const e=document.getElementById("warningShow");e&&(e.style.display="none")}),(e,s)=>{var n,l;return p(),v("main",ce,[ue,((n=c.value)==null?void 0:n.length)>0&&S.value===!1?(p(),v("div",de,[(p(!0),v(Q,null,O(c.value,(t,o)=>(p(),v("div",{key:o,class:"result-item"},[r("div",{class:"imgCon",onClick:_(i=>P(t.posterId),["prevent"]),style:G({backgroundImage:`url(${t==null?void 0:t.posterDetails.img})`})},null,12,me),r("div",pe,[r("div",ve,[r("span",{onClick:_(i=>P(t.posterId),["prevent"])},E(t==null?void 0:t.posterDetails.blogname),9,he),r("span",null,E(le(t.postTime.seconds)),1)]),r("div",{innerHTML:t.postContain,id:"divContent",onClick:_(i=>$(t.postId),["prevent"])},null,8,fe),J(re,{post:t},null,8,["post"])])]))),128))])):T("",!0),((l=c.value)==null?void 0:l.length)===15?(p(),v("button",{key:1,onClick:_(R,["prevent"])},"See More ....",8,_e)):T("",!0),ge])}}});const Ee=ie(ye,[["__scopeId","data-v-a93d5a60"]]);export{Ee as default};