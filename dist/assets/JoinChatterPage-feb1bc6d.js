import{d as A,u as R,r as k,a as D,b as L,c as h,e as T,f as g,g as a,i as $,j as z,h as n,l as E,z as V,p as F,n as G,_ as J}from"./index-0d83a52f.js";import{u as M,a as H,b as j,c as O,G as W,d as q}from"./useAuth.vue_vue_type_script_lang-6fe6b92b.js";import{P as Y,R as K,_ as Q,b as X,d as Z,m as ee,g as te}from"./index.esm2017-3589eea2.js";import{g as ae,r as oe,a as se}from"./index.esm2017-f1785873.js";import{_ as ne}from"./useLoadingPage.vue_vue_type_style_index_0_lang-d974f102.js";import{a as ie}from"./axios-4a70c6fc.js";import{u as ce}from"./useUserDetails.vue_vue_type_script_lang-8130a85e.js";const p=r=>(F("data-v-c271914a"),r=r(),G(),r),le={key:1,id:"JoinPage"},re=p(()=>a("button",null,"Home",-1)),de=["title"],ue={id:"themeImgContainer"},he=["src"],me={id:"Authenticate"},_e={key:0,class:"section"},ge=p(()=>a("h2",null,"You are Logged In",-1)),pe=[ge],ve={key:1,class:"section"},fe=V('<svg class="google-icon" viewBox="0 0 533.5 544.3" data-v-c271914a><path fill="#4285F4" d="M533.5 278.2c0-18.3-1.5-36.3-4.4-53.8H272.2v98.7h139.2c-6.1 32.3-24.1 59.6-51 77.9v65h82.7c48.6-44.8 76.3-110.8 76.3-187.8z" data-v-c271914a></path><path fill="#34A853" d="M272.2 544.3c69.3 0 127.4-22.6 169.9-61.6l-82.7-65c-22.9 15.4-52.5 24.4-87.2 24.4-66.8 0-123.4-45.1-143.9-105.6H28.9v65c42.2 83.2 127.1 137.2 227.6 137.2z" data-v-c271914a></path><path fill="#FBBC05" d="M128.3 323.9c-7.6-22.9-7.6-47.6 0-70.6V187h-87.2c-26.4 51.2-26.4 111.4 0 162.6l87.2-65z" data-v-c271914a></path><path fill="#EB4335" d="M272.2 106.7c37.6 0 71.6 12.9 98.3 34l73.7-73.7C399.6 19.7 339.2 0 272.2 0 171.7 0 86.8 54 44.6 135.1l87.6 65c20.5-60.5 76.9-103.4 140-103.4z" data-v-c271914a></path></svg>',1),we=p(()=>a("section",{id:"footer"}," © Olaegbe Abdul-Rahmon Pelumi 2023 ",-1)),ye=A({__name:"JoinChatterPage",setup(r){ce();const{auth:v,provider:C,app:f}=M(),w=Y(f),o=H(),b=ae(f),m=R(),s=k({}),d=k(!0);let y;async function P(t,e){try{const c=`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${t}`;ie.post("/access",{accessUrl:c}).then(i=>{s.value=i.data;const U=K(Q(w,"users"),X("email","==",`${s.value.email}`));Z(U).then(_=>{const l=_==null?void 0:_.docs;if(l.length<1&&s.value.email){const u=o.createUser(s.value.email),x=s.value.given_name!==void 0?s.value.given_name:"",N=s.value.family_name!==void 0?s.value.family_name:"";u.fullName=x+" "+N,u.id=e.user.uid;const S=oe(b,"ChatterAppFiles/avatar/unknown/UnkownUser.png");se(S).then(I=>{u.profilePicture=I}).finally(()=>{ee(te(w,"users",`${e.user.uid}`),{...u}).then(()=>{d.value=!0,m.push("/additionalData")})})}else l.length>0&&l[0].data().username.trim()!==""?(d.value=!0,m.push("/home")):l.length>0&&l[0].data().username===""&&m.push("/additionalData")})}).catch(i=>{console.log(i)})}catch(c){console.log(c)}}function B(){j(v,q),O(v,C).then(t=>{const e=W.credentialFromResult(t);P(e==null?void 0:e.accessToken,t)}).catch(()=>{const t=document.getElementById("ErrorShow");t.style.display="flex",t.textContent="Something went wrong, check your internet connection and try again."})}return y=setTimeout(()=>{d.value=!1},3e3),D(()=>{clearTimeout(y);const t=document.getElementById("warningShow");t.style.display="none"}),(t,e)=>{const c=L("RouterLink");return d.value?(h(),T(ne,{key:0,actionName:"Loading..."},null,8,["actionName"])):(h(),g("main",le,[a("header",null,[$(c,{to:"/"},{default:z(()=>[re]),_:1}),a("button",{title:n(o).themeDetails.title,id:"themeBtn",onClick:e[0]||(e[0]=(...i)=>n(o).changeTheme&&n(o).changeTheme(...i))},[a("div",ue,[a("img",{src:n(o).themeDetails.img},null,8,he)])],8,de)]),a("div",me,[n(o).authenticated&&n(o).signedUser.username!==""&&n(o).signedUser.username!==void 0?(h(),g("div",_e,pe)):(h(),g("div",ve,[a("button",{class:"google-button",onClick:e[1]||(e[1]=i=>B())},[fe,E(" Continue with Google ")])]))]),we]))}}});const Ne=J(ye,[["__scopeId","data-v-c271914a"]]);export{Ne as default};
