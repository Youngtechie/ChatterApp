import{a as f}from"./useAuth.vue_vue_type_script_lang-0f4a9525.js";import{d as m,u as y,a as v,b as w,c as t,f as o,j as c,l,F as k,z as N,h as S,i as L,g as n,t as _,q as T,s as b,_ as x}from"./index-36d15da9.js";import{S as C}from"./useSignOut.vue_vue_type_script_lang-72a5ef5c.js";import{c as u}from"./useCalculateTime.vue_vue_type_script_lang-ca052a8e.js";const d=a=>(T("data-v-7b740faa"),a=a(),b(),a),I={id:"notificationPage"},U={key:0,id:"secondNotification"},B={key:0,id:"noNotification"},R={key:0,class:"clickNotify"},H=["innerHTML"],M={key:1,class:"clickNotify"},P=["innerHTML"],E={key:1,id:"firstNotification"},V=d(()=>n("h1",null,"Write, read and connect with great minds on chatter",-1)),F=d(()=>n("p",null,"Share people your great ideas, and also write-ups based on your interests. Connect with people of same interests and goals.",-1)),j=d(()=>n("button",null,"Get started",-1)),q=d(()=>n("div",{id:"warningShow"},null,-1)),z=m({__name:"NotificationPage",setup(a){const e=f(),p=y();e.sidebar=!1;let r;if(e.authenticated===!0&&e.signedUser.id!==void 0&&e.signedUser.username===""){const s=document.getElementById("warningShow");s.style.display="flex",s.textContent="Registration not complete... Logging you out",C(),r=setTimeout(()=>{s.style.display="none",e.authenticated=!1,p.push("/login")},2e3)}return v(()=>{clearTimeout(r);const s=document.getElementById("warningShow");s&&(s.style.display="none")}),(s,D)=>{const g=w("RouterLink");return t(),o("div",I,[c(e).signedUser.isLogined?(t(),o("div",U,[c(e).signedUser.notifications.length===0?(t(),o("div",B," No notification yet.")):l("",!0),(t(!0),o(k,null,N(c(e).signedUser.notifications,(i,h)=>(t(),o("div",{key:h,class:"eachNotification"},[i.type.includes("following")?(t(),o("div",R,[n("p",{innerHTML:i.type},null,8,H),n("p",null,_(u(i.details.time.seconds)),1)])):i.type.includes("like")?(t(),o("div",M,[n("p",{innerHTML:i.type},null,8,P),n("p",null,_(u(i.details.time.seconds)),1)])):l("",!0)]))),128))])):(t(),o("section",E,[V,F,S(g,{to:"/login"},{default:L(()=>[j]),_:1})])),q])}}});const J=x(z,[["__scopeId","data-v-7b740faa"]]);export{J as default};