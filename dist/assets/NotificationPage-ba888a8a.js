import{a as f}from"./useAuth.vue_vue_type_script_lang-77171506.js";import{d as h,u as y,a as v,b as w,c as t,f as o,j as c,l,F as k,z as N,h as S,i as L,g as n,t as _,q as T,s as b}from"./index-d9c4c67e.js";import{S as x}from"./useSignOut.vue_vue_type_script_lang-64088068.js";import{c as u}from"./useCalculateTime.vue_vue_type_script_lang-ca052a8e.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const d=a=>(T("data-v-ac4f59b7"),a=a(),b(),a),I={id:"notificationPage"},U={key:0,id:"secondNotification"},B={key:0,id:"noNotification"},R={key:0,class:"clickNotify"},H=["innerHTML"],M={key:1,class:"clickNotify"},P=["innerHTML"],E={key:1,id:"firstNotification"},V=d(()=>n("h1",null,"Write, read and connect with great minds on chatter",-1)),F=d(()=>n("p",null,"Share people your great ideas, and also write-ups based on your interests. Connect with people of same interests and goals.",-1)),j=d(()=>n("button",null,"Get started",-1)),q=d(()=>n("div",{id:"warningShow"},null,-1)),z=h({__name:"NotificationPage",setup(a){const e=f(),p=y();e.sidebar=!1;let r;if(e.authenticated===!0&&e.signedUser.id!==void 0&&e.signedUser.username===""){const s=document.getElementById("warningShow");s.style.display="flex",s.textContent="Registration not complete... Logging you out",x(),r=setTimeout(()=>{s.style.display="none",e.authenticated=!1,p.push("/login")},2e3)}return v(()=>{clearTimeout(r);const s=document.getElementById("warningShow");s&&(s.style.display="none")}),(s,D)=>{const g=w("RouterLink");return t(),o("div",I,[c(e).signedUser.isLogined?(t(),o("div",U,[c(e).signedUser.notifications.length===0?(t(),o("div",B," No notification yet.")):l("",!0),(t(!0),o(k,null,N(c(e).signedUser.notifications,(i,m)=>(t(),o("div",{key:m,class:"eachNotification"},[i.type.includes("following")?(t(),o("div",R,[n("p",{innerHTML:i.type},null,8,H),n("p",null,_(u(i.details.time.seconds)),1)])):i.type.includes("like")?(t(),o("div",M,[n("p",{innerHTML:i.type},null,8,P),n("p",null,_(u(i.details.time.seconds)),1)])):l("",!0)]))),128))])):(t(),o("section",E,[V,F,S(g,{to:"/login"},{default:L(()=>[j]),_:1})])),q])}}});const K=C(z,[["__scopeId","data-v-ac4f59b7"]]);export{K as default};