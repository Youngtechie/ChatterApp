import{P as o,a as r,g as d,R as l,b as c,_ as g,d as u}from"./index.esm2017-7370a789.js";import{u as h,a as f,o as m}from"./useAuth.vue_vue_type_script_lang-77171506.js";import{y}from"./index-d9c4c67e.js";const{app:U,auth:p}=h(),e=f(),n=o(U);async function w(t){const i=l(g(n,"users"),c("email","==",`${t.email}`));try{await u(i).then(s=>{s.docs.length>0&&(e.signedUser=Object.assign({},s.docs[0].data()),e.signedUser.isLogined=!0,e.signedUser.analyses.totalComments=s.docs[0].data().comments.total.out,e.signedUser.analyses.totalLiked=s.docs[0].data().likes.total.out,e.signedUser.analyses.totalPosts=s.docs[0].data().posts.length)})}catch{y(()=>{const a=document.getElementById("warningShow");a&&(a.style.display="flex",a.textContent="An error occurred, check your internet connection and try reloading.")})}}async function C(){m(p,t=>{t?(e.authenticated=!0,e.userId=t.uid,w(t).finally(()=>{e.signedUser.id!==null&&e.signedUser.id!==void 0&&e.signedUser.length>0&&e.signedUser.id!==""&&r(d(n,"users",`${e.signedUser.id}`),e.signedUser)})):e.authenticated=!1})}export{C as u};