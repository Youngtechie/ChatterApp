import{d as A,u as R,r as k,a as T,b as D,c as g,e as E,f,g as n,h as L,i as $,j as l,m as V,B as z,q as F,s as G,y as J}from"./index-d9c4c67e.js";import{u as M,a as H,b as j,c as q,G as O,d as W}from"./useAuth.vue_vue_type_script_lang-77171506.js";import{P as Y,R as K,b as Q,_ as X,d as Z,m as ee,g as te}from"./index.esm2017-7370a789.js";import{g as ae,r as se,a as ne}from"./index.esm2017-34a1c5ec.js";import{_ as oe}from"./useLoadingPage.vue_vue_type_style_index_0_lang-1cc37a5c.js";import{a as ie}from"./index-72692797.js";import{u as le}from"./useUserDetails.vue_vue_type_script_lang-4fb6f021.js";import{_ as re}from"./_plugin-vue_export-helper-c27b6911.js";const m=c=>(F("data-v-6ea40978"),c=c(),G(),c),ce={key:1,id:"JoinPage"},he=m(()=>n("button",null,"Home",-1)),de=["title"],ue={id:"themeImgContainer"},ge=["src"],me={id:"Authenticate"},_e={key:0,class:"section"},pe=m(()=>n("h2",null,"You are Logged In",-1)),fe=[pe],ve={key:1,class:"section"},we=z('<svg class="google-icon" viewBox="0 0 533.5 544.3" data-v-6ea40978><path fill="#4285F4" d="M533.5 278.2c0-18.3-1.5-36.3-4.4-53.8H272.2v98.7h139.2c-6.1 32.3-24.1 59.6-51 77.9v65h82.7c48.6-44.8 76.3-110.8 76.3-187.8z" data-v-6ea40978></path><path fill="#34A853" d="M272.2 544.3c69.3 0 127.4-22.6 169.9-61.6l-82.7-65c-22.9 15.4-52.5 24.4-87.2 24.4-66.8 0-123.4-45.1-143.9-105.6H28.9v65c42.2 83.2 127.1 137.2 227.6 137.2z" data-v-6ea40978></path><path fill="#FBBC05" d="M128.3 323.9c-7.6-22.9-7.6-47.6 0-70.6V187h-87.2c-26.4 51.2-26.4 111.4 0 162.6l87.2-65z" data-v-6ea40978></path><path fill="#EB4335" d="M272.2 106.7c37.6 0 71.6 12.9 98.3 34l73.7-73.7C399.6 19.7 339.2 0 272.2 0 171.7 0 86.8 54 44.6 135.1l87.6 65c20.5-60.5 76.9-103.4 140-103.4z" data-v-6ea40978></path></svg>',1),ye=m(()=>n("section",{id:"footer"}," © Olaegbe Abdul-Rahmon Pelumi 2023 ",-1)),ke=m(()=>n("div",{id:"warningShow"},null,-1)),Se=A({__name:"JoinChatterPage",setup(c){le();const{auth:v,provider:S,app:w}=M(),y=Y(w),o=H(),C=ae(w),_=R(),s=k({}),h=k(!0);let p;async function x(t,a){const i=document.getElementById("warningShow");J(()=>{i&&(i.style.display="flex",i.textContent="Authenticating....")});const d=`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${t}`;ie.post("/.netlify/functions/access",{accessUrl:d}).then(r=>{if(s.value=r.data.details,s.value.email!==""&&s.value.email!==null&&s.value.email!==void 0){const b=K(X(y,"users"),Q("email","==",`${s.value.email}`));Z(b).then(e=>{if(e!=null&&e.empty){if((e==null?void 0:e.docs.length)<1&&s.value.email){const u=o.createUser(s.value.email),I=s.value.given_name!==void 0?s.value.given_name:"",P=s.value.family_name!==void 0?s.value.family_name:"";u.fullName=I+" "+P,u.id=a.user.uid;const U=se(C,"ChatterAppFiles/avatar/unknown/UnkownUser.png");ne(U).then(N=>{u.profilePicture=N}).finally(()=>{ee(te(y,"users",`${a.user.uid}`),{...u}).then(()=>{h.value=!0,_.push("/additionalData"),i&&(i.style.display="none")})})}}else!(e!=null&&e.empty)&&(e==null?void 0:e.docs.length)>0&&(e==null?void 0:e.docs[0].data().username)===""?(h.value=!0,_.push("/additionalData")):_.push("/home")})}}).catch(()=>{const r=document.getElementById("warningShow");r&&(r.style.display="flex",r.textContent="Something went wrong, check your internet connection and try again.")})}function B(){j(v,W),q(v,S).then(t=>{if(t!=null){const a=O.credentialFromResult(t);x(a==null?void 0:a.accessToken,t)}}).catch(()=>{const t=document.getElementById("warningShow");t&&(t.style.display="flex",t.textContent="Something went wrong, check your internet connection and try again.",p=setTimeout(()=>{const a=document.getElementById("warningShow");a.style.display="none"},3e3))})}return p=setTimeout(()=>{h.value=!1},3e3),T(()=>{clearTimeout(p);const t=document.getElementById("warningShow");t&&(t.style.display="none")}),(t,a)=>{const i=D("RouterLink");return h.value?(g(),E(oe,{key:0,actionName:"Loading..."},null,8,["actionName"])):(g(),f("main",ce,[n("header",null,[L(i,{to:"/"},{default:$(()=>[he]),_:1}),n("button",{title:l(o).themeDetails.title,id:"themeBtn",onClick:a[0]||(a[0]=(...d)=>l(o).changeTheme&&l(o).changeTheme(...d))},[n("div",ue,[n("img",{src:l(o).themeDetails.img},null,8,ge)])],8,de)]),n("div",me,[l(o).authenticated&&l(o).signedUser.username!==""&&l(o).signedUser.username!==void 0?(g(),f("div",_e,fe)):(g(),f("div",ve,[n("button",{class:"google-button",onClick:a[1]||(a[1]=d=>B())},[we,V(" Continue with Google ")])]))]),ye,ke]))}}});const Ae=re(Se,[["__scopeId","data-v-6ea40978"]]);export{Ae as default};
