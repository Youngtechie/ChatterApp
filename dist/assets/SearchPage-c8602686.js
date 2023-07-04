import{d as J,u as K,r as p,a as re,s as ie,c as d,f as m,g as i,m as M,B as le,C as ce,w as I,F as R,y as V,n as ue,t as U,i as X,k as H,p as de,q as me,_ as Y}from"./index-3c7daa31.js";import{u as he,P as pe,a as Z,R as F,c as O,_ as Q,d as z,g as ve,e as ge}from"./useAuth.vue_vue_type_script_lang-0a2c6dcb.js";import{S as fe}from"./useSignOut.vue_vue_type_script_lang-1b0773ff.js";import{g as W,r as j,a as G}from"./index.esm2017-3ce07352.js";import{c as ye,u as _e}from"./useDetailButtons-13ec496c.js";import{a as be}from"./axios-4a70c6fc.js";const A=b=>(de("data-v-97cb6c3a"),b=b(),me(),b),Se={id:"mainSearchContainer"},Ce={class:"search-container"},we=["placeholder"],xe={class:"firstSection"},Be=A(()=>i("option",{value:"",disabled:""},"Select category you want to search in",-1)),Ee=A(()=>i("option",{value:"Posts"},"Posts",-1)),Pe=A(()=>i("option",{value:"Users"},"Users",-1)),Ie=[Be,Ee,Pe],Ue={key:0,class:"results-container"},Te=["onClick"],ke={class:"result-item-other"},Ae={class:"result-item-header"},Ne=["onClick"],$e=["innerHTML","onClick"],Le={key:1,class:"results-container"},De=J({__name:"useSearch",setup(b){const{app:v}=he(),l=pe(v),x=K(),N=W(v),ee=Z(),S=p(""),C=p("Posts"),T=p("");let g;const B=p(""),$=new DOMParser,k=p();re(()=>{clearTimeout(g)});const f=p([]),y=p([]);ie(()=>{C.value==="Posts"?(S.value="",T.value="Search for posts by post tag",y.value=[],f.value=[]):C.value==="Users"&&(S.value="",T.value="Search for Users by username",f.value=[],y.value=[])});async function te(a){try{const s=j(N,a.postContain),o=await G(s).catch(e=>{console.log(e)});await be.post("/postContent",{contentUrl:o}).then(e=>{const c=$.parseFromString(e.data,"text/html");B.value=c.body.innerHTML}).catch(e=>{console.log(e)})}catch(s){console.log(s)}}async function se(a){k.value=null;try{const s=ve(l,"users",a),o=await ge(s);if(o.data()!==void 0){const{fullName:e,profilePicture:c,username:h,blogName:E}=o.data(),t={profilePicture:c,posterID:a,fullName:e,username:h,blogName:E},w=W(),r=j(w,t.profilePicture);try{await G(r).then(n=>{t.profilePicture&&(t.profilePicture=n),t.blogName===""&&(t.blogName=`${t.username}Blog`),k.value={id:a,img:t.profilePicture,fullName:t.fullName,username:t.username,blogname:t.blogName}})}catch{}}}catch{}}async function oe(a,s){var e,c,h,E;const o=document.querySelector("#ErrorShow span");if(y.value=[],f.value=[],console.log(a,s),s==="")o.style.display="flex",o.textContent="Search input is empty",g=setTimeout(()=>{o.style.display="none"},3e3);else if(a==="Posts"){const t=document.createElement("div");t.setAttribute("id","loading"),t.textContent="Loading...",(e=document.getElementById("mainSearchContainer"))==null||e.appendChild(t),(c=document.getElementById("searchBtn"))==null||c.setAttribute("disabled","true");const w=F(Q(l,"posts"),O("postTag","==",`${s.charAt(0).toUpperCase()+s.slice(1).toLowerCase()}`));try{await z(w).then(r=>{r.docs.length===0?(t.remove(),o.style.display="flex",o.textContent="No post with this tag found",g=setTimeout(()=>{var n;o.style.display="none",(n=document.getElementById("searchBtn"))==null||n.removeAttribute("disabled")},3e3)):r.docs.forEach(n=>{const u=n.data();te(u).then(()=>{var D,q;t.remove(),(D=document.getElementById("searchBtn"))==null||D.removeAttribute("disabled");const P=$.parseFromString(B.value,"text/html");P.body.querySelectorAll("img").forEach(_=>{_.remove()}),P.body.querySelectorAll("video").forEach(_=>{_.remove()}),(q=P.body.querySelector("h1"))==null||q.remove(),B.value=P.body.innerHTML,u.postContain=B.value,se(u.posterId).then(()=>{var _;u.posterDetails=k.value,(_=f.value)==null||_.push(u)})})})}).catch(r=>{t.remove(),r.style.display="flex",r.textContent="Something went wrong",g=setTimeout(()=>{var n;r.style.display="none",(n=document.getElementById("searchBtn"))==null||n.removeAttribute("disabled")},3e3)})}catch{t.remove();const n=document.querySelector("#ErrorShow span");n.style.display="flex",n.textContent="Something went wrong"}}else if(a==="Users"){const t=document.createElement("div");t.setAttribute("id","loading"),t.textContent="Loading...",(h=document.getElementById("mainSearchContainer"))==null||h.appendChild(t),(E=document.getElementById("searchBtn"))==null||E.setAttribute("disabled","true");const w=F(Q(l,"users"),O("username","==",`${s.charAt(0).toUpperCase()+s.slice(1).toLowerCase()}`));try{await z(w).then(r=>{var n;t.remove(),r.docs.length===0?(o.style.display="flex",o.textContent="No user with this username found",g=setTimeout(()=>{var u;o.style.display="none",(u=document.getElementById("searchBtn"))==null||u.removeAttribute("disabled")},3e3)):((n=document.getElementById("searchBtn"))==null||n.removeAttribute("disabled"),r.docs.forEach(u=>{y.value.push(u.data())}))}).catch(()=>{t.remove(),o.style.display="flex",o.textContent="Something went wrong",g=setTimeout(()=>{var r;o.style.display="none",(r=document.getElementById("searchBtn"))==null||r.removeAttribute("disabled")},3e3)})}catch{t.remove();const n=document.querySelector("#ErrorShow span");n.style.display="flex",n.textContent="Something went wrong"}}}function ne(a){const s=a.target,o=s.value;o.includes(" ")&&(s.value=o.replace(/\s/g,""))}function ae(a){x.push(`/post/${a}`)}function L(a){if(a===ee.signedUser.id)return x.push("/userProfile");x.push(`/chatterUser/${a}`)}return(a,s)=>{var o;return d(),m("div",Se,[i("div",Ce,[M(i("input",{type:"text",name:"searchValue","onUpdate:modelValue":s[0]||(s[0]=e=>S.value=e),placeholder:T.value,onInput:ne},null,40,we),[[le,S.value]]),i("div",xe,[M(i("select",{id:"tags","onUpdate:modelValue":s[1]||(s[1]=e=>C.value=e),required:""},Ie,512),[[ce,C.value]]),i("button",{onClick:s[2]||(s[2]=I(e=>oe(C.value,S.value),["prevent"])),id:"searchBtn"},"Search")])]),((o=f.value)==null?void 0:o.length)>0?(d(),m("div",Ue,[(d(!0),m(R,null,V(f.value,(e,c)=>(d(),m("div",{key:c,class:"result-item-post"},[i("div",{class:"imgCon",onClick:I(h=>L(e.posterId),["prevent"]),style:ue({backgroundImage:`url(${e==null?void 0:e.posterDetails.img})`})},null,12,Te),i("div",ke,[i("div",Ae,[i("span",{onClick:I(h=>L(e.posterId),["prevent"])},U(e==null?void 0:e.posterDetails.blogname),9,Ne),i("span",null,U(ye(e.postTime.seconds)),1)]),i("div",{innerHTML:e.postContain,id:"divContent",onClick:I(h=>ae(e.postId),["prevent"])},null,8,$e),X(_e,{post:e},null,8,["post"])])]))),128))])):H("",!0),y.value.length>0?(d(),m("div",Le,[(d(!0),m(R,null,V(y.value,(e,c)=>(d(),m("button",{key:c,class:"result-item"},[i("h3",null,U(e.fullName),1),i("p",null,"@"+U(e.username),1)]))),128))])):H("",!0)])}}});const qe=Y(De,[["__scopeId","data-v-97cb6c3a"]]),Me={id:"searchContainer"},Re=J({__name:"SearchPage",setup(b){const v=K(),l=Z();return l.sidebar=!1,l.authenticated===!0&&(l.signedUser.id===void 0&&l.signedUser.username===void 0?v.push({name:"NetworkError",query:{redirect:`${v.currentRoute.value.path}`}}):l.signedUser.id!==void 0&&l.signedUser.username===""&&(console.log("User registration not finished... Logging out user....."),fe(),l.authenticated=!1,v.push("/login"))),(x,N)=>(d(),m("div",Me,[X(qe)]))}});const We=Y(Re,[["__scopeId","data-v-0997efe8"]]);export{We as default};
