import{d as R,a as U,r as v,u as z,o as W,y as m,x as $,c as w,f as y,p as q,v as H,j as F,g as a,F as A,z as V,l as j,n as O,w as b,k as Q,t as I,h as G,q as J,s as K}from"./index-d9c4c67e.js";import{u as X,a as Y}from"./useAuth.vue_vue_type_script_lang-77171506.js";import{P as Z,R as ee,_ as te,b as oe,d as ne,g as se,c as ae}from"./index.esm2017-7370a789.js";import{u as re}from"./useUserDetails.vue_vue_type_script_lang-4fb6f021.js";import{a as ie}from"./index-72692797.js";import{u as le}from"./useDetailButtons-0e25b9a8.js";import{c as ce}from"./useCalculateTime.vue_vue_type_script_lang-ca052a8e.js";import{_ as de}from"./_plugin-vue_export-helper-c27b6911.js";const ue=f=>(J("data-v-ef5adae7"),f=f(),K(),f),me={class:"bookmarksPage"},fe=ue(()=>a("div",{id:"warningShow"},null,-1)),he={class:"bookmarksCon"},pe={key:0,class:O({resultsContainer:!0})},ge=["onClick"],ve={class:"result-item-other"},we={class:"result-item-header"},ye=["onClick"],_e=["innerHTML","onClick"],ke=R({__name:"BookMarks",setup(f){re(),U(()=>{const e=document.getElementById("warningShow");e&&(e.style.display="none")});const d=v(""),C=new DOMParser,{app:E}=X(),h=Y();h.sidebar=!1;const P=Z(E),_=z(),i=v([]),p=v();let u=v(!1);W(()=>{window.addEventListener("resize",M),m(()=>{const s=document.getElementById("warningShow");s&&(s.style.display="flex",s.textContent="Loading ...")}),L(h.signedUser.bookmarks),window.innerWidth>=768?u.value=!0:u.value=!1});function M(){window.innerWidth>=768?u.value=!0:u.value=!1}$(()=>{h.signedUser.bookmarks.length===0&&(i.value=[],m(()=>{const e=document.getElementById("warningShow");e&&(e.style.display="flex",e.textContent="No bookmarks yet")}))});function T(e){_.push(`/post/${e}`)}function x(e){if(e===h.signedUser.id)return _.push("/userProfile");_.push(`/chatterUser/${e}`)}async function N(e){d.value="";const s=e.postContain;await ie.post("/.netlify/functions/postContent",{contentUrl:s}).then(o=>{const t=C.parseFromString(o.data.content,"text/html");d.value=t.body.innerHTML})}async function D(e){p.value=null;const s=se(P,"users",e),o=await ae(s);if(o.data()!==void 0){const{fullName:t,profilePicture:n,username:l,blogName:k}=o.data(),c={profilePicture:n,posterID:e,fullName:t,username:l,blogName:k};p.value={id:e,img:c.profilePicture,fullName:c.fullName,username:c.username,blogname:c.blogName}}}async function L(e){try{const s=e.map(async n=>{const l=ee(te(P,"posts"),oe("postId","==",n)),k=await ne(l);return Promise.all(k.docs.map(async c=>{var B;const r=c.data();if(r!=null&&r.length!==0){await N(r);const g=C.parseFromString(d.value,"text/html");return g.body.querySelectorAll("img").forEach(S=>{S.remove()}),g.body.querySelectorAll("video").forEach(S=>{S.remove()}),(B=g.body.querySelector("h1"))==null||B.remove(),d.value=g.body.innerHTML,r.postContain=d.value,await D(r.posterId),r.posterDetails=p.value,p.value=null,r}}))}),t=(await Promise.all(s)).flat();i.value=t,i.value.length>0&&m(()=>{const n=document.getElementById("warningShow");n&&(n.style.display="none")}),i.value.length===0&&m(()=>{const n=document.getElementById("warningShow");n&&(n.style.display="flex",n.textContent="No bookmarks yet")})}catch{m(()=>{const o=document.getElementById("warningShow");o&&(o.style.display="flex",o.textContent="Something went wrong, check your internet connection and reload page.")})}}return(e,s)=>{var o;return w(),y("section",me,[fe,q(a("h2",null,"Bookmarks",512),[[H,!F(u)]]),a("div",he,[((o=i.value)==null?void 0:o.length)>0?(w(),y("div",pe,[(w(!0),y(A,null,V(i.value,(t,n)=>(w(),y("div",{key:n,class:"result-item"},[a("div",{class:"imgCon",onClick:b(l=>x(t.posterId),["prevent"]),style:Q({backgroundImage:`url(${t==null?void 0:t.posterDetails.img})`})},null,12,ge),a("div",ve,[a("div",we,[a("span",{onClick:b(l=>x(t.posterId),["prevent"])},I(t==null?void 0:t.posterDetails.blogname),9,ye),a("span",null,I(ce(t.postTime.seconds)),1)]),a("div",{innerHTML:t.postContain,id:"divContent",onClick:b(l=>T(t.postId),["prevent"])},null,8,_e),G(le,{post:t},null,8,["post"])])]))),128))])):j("",!0)])])}}});const Me=de(ke,[["__scopeId","data-v-ef5adae7"]]);export{Me as default};
