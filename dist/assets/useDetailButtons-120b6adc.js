import{d as S,o as z,c as L,f as C,w as M,j,G as R,q as A,s as q,g as o,r as Z,u as O,h as E,t as V}from"./index-4deccaec.js";import{u as U,a as G}from"./useAuth.vue_vue_type_script_lang-7f3dced0.js";import{P as I,R as f,b as v,_ as w,I as Y,d as B,a as p,g as u}from"./index.esm2017-190d47df.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";const N=i=>(A("data-v-c7eec93f"),i=i(),q(),i),T=["id"],F=N(()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 25",width:"15",height:"15"},[o("path",{d:"M12.5,4.17C7.71,0,0,3.92,0,8.75c0,4.61,3.9,8.35,12.5,16.25C20.1,17.1,24,13.36,24,8.75C24,3.92,16.29,0,12.5,4.17z"})],-1)),J=N(()=>o("span",null,"0",-1)),K=[F,J],W=S({__name:"useLikeButton",props:{viewPostId:String,viewPostPosterId:String},setup(i){const n=i,{app:$}=U(),s=I($),k=G(),b=f(w(s,"posts"),v("postId","==",`${n.viewPostId}`));z(()=>{try{Y(b,r=>{const t=r.docs[0].data();t!=null&&t.length!==0&&(t.postLikes.ids.includes(k.signedUser.id)?(document.querySelectorAll(`#btnLike${n.viewPostId} svg path`).forEach(e=>{e.style.fill="red"}),document.querySelectorAll(`#btnLike${n.viewPostId} span`).forEach(e=>{e.textContent=`${t.postLikes.total}`})):t.postLikes.ids.includes(k.signedUser.id)||(document.querySelectorAll(`#btnLike${n.viewPostId} svg path`).forEach(e=>{e.style.fill="none"}),document.querySelectorAll(`#btnLike${n.viewPostId} span`).forEach(e=>{e.textContent=`${t.postLikes.total}`})))})}catch{}});async function y(r,t,e){if(r===""||r===void 0)confirm("You need to be signed in to like a post. Do you want to sign in?")===!0&&R.push("/login");else{document.getElementById(`btnLike${t}`).setAttribute("disabled","true");const m=f(w(s,"users"),v("id","==",`${r}`)),P=f(w(s,"posts"),v("postId","==",`${t}`)),x=f(w(s,"users"),v("id","==",`${e}`));try{B(m).then(h=>{const l=h.docs[0].data();B(P).then(_=>{const a=_.docs[0].data();B(x).then(Q=>{const c=Q.docs[0].data();l!=null&&l.length!==0&&a!==void 0&&a!==null&&a.length!==0&&c!==void 0&&c!==null&&c.length!==0&&(l.likes.out.some(d=>d.postid===t)?p(u(s,"users",`${r}`),{["likes.out"]:l.likes.out.filter(d=>d.postid!==t),["likes.total.out"]:l.likes.total.out-1,activityLog:[...l.activityLog,{type:"You unliked this post",details:{postId:t,time:new Date}}],interactions:l.interactions.filter(d=>d.type==="Liked a post"&&d.details.postid===t)}):p(u(s,"users",`${r}`),{["likes.out"]:[...l.likes.out,{postid:t,time:new Date}],["likes.total.out"]:l.likes.total.out+1,activityLog:[...l.activityLog,{type:"You liked this post",details:{postId:t,time:new Date}}],interactions:[...l.interactions,{type:"Liked this post",details:{postid:t,time:new Date}}]}),a.postLikes.ids.some(d=>d===r)?p(u(s,"posts",`${t}`),{["postLikes.ids"]:a.postLikes.ids.filter(d=>d!==r),["postLikes.total"]:a.postLikes.total-1}):p(u(s,"posts",`${t}`),{["postLikes.ids"]:[...a.postLikes.ids,r],["postLikes.total"]:a.postLikes.total+1}),c.likes.in.some(d=>d.postid===t)?p(u(s,"users",`${e}`),{["likes.in"]:c.likes.in.filter(d=>d.postid!==t),["likes.total.in"]:c.likes.total.in-1}):e===r?p(u(s,"users",`${e}`),{["likes.in"]:[...c.likes.in,{postid:t,time:new Date}],["likes.total.in"]:c.likes.total.in+1}):p(u(s,"users",`${e}`),{["likes.in"]:[...c.likes.in,{postid:t,time:new Date}],["likes.total.in"]:c.likes.total.in+1,notifications:[...c.notifications,{type:`You got a like from <b>${l.fullName}</b> on a post`,details:{postId:t,time:new Date}}]}),document.getElementById(`btnLike${t}`).removeAttribute("disabled"))})})})}catch{alert("An error occurred, You can't like this post"),document.getElementById(`btnLike${t}`).removeAttribute("disabled")}}}return(r,t)=>(L(),C("button",{onClick:t[0]||(t[0]=M(e=>y(j(k).signedUser.id,n.viewPostId,n.viewPostPosterId),["prevent"])),id:`btnLike${i.viewPostId}`,class:"like-button"},K,8,T))}});const X=D(W,[["__scopeId","data-v-c7eec93f"]]),g=i=>(A("data-v-6d983a5e"),i=i(),q(),i),tt=["id"],et={key:0,width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ot=g(()=>o("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1)),st=g(()=>o("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)),it=g(()=>o("g",{id:"SVGRepo_iconCarrier"},[o("path",{d:"M10.5 8.56L12 10.06M12 10.06L13.5 11.56M12 10.06L13.5 8.56M12 10.06L10.5 11.56M8.25 5H15.75C16.4404 5 17 5.58763 17 6.3125V19L12 15.5L7 19V6.3125C7 5.58763 7.55964 5 8.25 5Z",stroke:"#000000","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),nt=[ot,st,it],rt={key:1,width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},lt=g(()=>o("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1)),at=g(()=>o("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)),dt=g(()=>o("g",{id:"SVGRepo_iconCarrier"},[o("path",{d:"M10.5 10.5L11.5 11.5L14 9M8.25 5H15.75C16.4404 5 17 5.58763 17 6.3125V19L12 15.5L7 19V6.3125C7 5.58763 7.55964 5 8.25 5Z",stroke:"#000000","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),ct=[lt,at,dt],pt=g(()=>o("span",null,"0",-1)),ut=S({__name:"useBookmarks",props:{viewPostId:String},setup(i){const n=i,{app:$}=U(),s=I($),k=G(),b=f(w(s,"posts"),v("postId","==",`${n.viewPostId}`)),y=Z(!1);z(()=>{Y(b,t=>{const e=t.docs[0].data();e!=null&&e.length!==0&&(e.postBookmarks.includes(k.signedUser.id)?(y.value=!0,document.querySelectorAll(`#btnBook${n.viewPostId} span`).forEach(m=>{m.textContent=`${e.postBookmarks.length}`})):e.postBookmarks.includes(k.signedUser.id)||(y.value=!1,document.querySelectorAll(`#btnBook${n.viewPostId} span`).forEach(m=>{m.textContent=`${e.postBookmarks.length}`})))})});function r(t,e){if(t===""||t===void 0)confirm("You must be logged in to comment, will you love to sign up?")&&R.push("/join");else{document.getElementById(`btnLike${e}`).setAttribute("disabled","true");const m=f(w(s,"users"),v("id","==",`${t}`)),P=f(w(s,"posts"),v("postId","==",`${e}`));try{B(m).then(x=>{const h=x.docs[0].data();B(P).then(l=>{const _=l.docs[0].data();h!=null&&h.length!==0&&_!==void 0&&_!==null&&_.length!==0&&(h.bookmarks.some(a=>a===_.postId)?(p(u(s,"users",`${t}`),{bookmarks:h.bookmarks.filter(a=>a!==e)}),p(u(s,"posts",`${e}`),{postBookmarks:_.postBookmarks.filter(a=>a!==t)})):(p(u(s,"users",`${t}`),{bookmarks:[...h.bookmarks,e]}),p(u(s,"posts",`${e}`),{postBookmarks:[..._.postBookmarks,t]})),document.getElementById(`btnLike${e}`).removeAttribute("disabled"))})})}catch{document.getElementById(`btnLike${e}`).removeAttribute("disabled")}}}return(t,e)=>(L(),C("button",{id:`btnBook${i.viewPostId}`,onClick:e[0]||(e[0]=M(m=>r(j(k).signedUser.id,n.viewPostId),["prevent"]))},[y.value?(L(),C("svg",et,nt)):(L(),C("svg",rt,ct)),pt],8,tt))}});const kt=D(ut,[["__scopeId","data-v-6d983a5e"]]),H=i=>(A("data-v-5b05ff0f"),i=i(),q(),i),mt={class:"analysesDisplay"},ht=H(()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"15",height:"15",viewBox:"0 0 50 50"},[o("path",{d:"M25 4.0703125C12.368265 4.0703125 2.0703125 12.921644 2.0703125 24C2.0703125 30.432481 5.5907163 36.030749 11.003906 39.6875C10.995106 39.903125 11.010706 40.250912 10.728516 41.294922C10.378462 42.590119 9.6725023 44.413033 8.2382812 46.46875L7.21875 47.929688L9 47.929688C15.17102 47.929688 18.741544 43.907595 19.294922 43.261719C21.134317 43.693171 23.024914 43.929686 25 43.929688C37.631735 43.929688 47.929688 35.078356 47.929688 24C47.929688 12.921644 37.631735 4.0703125 25 4.0703125zM25 5.9296875C36.768265 5.9296875 46.070312 14.078356 46.070312 24C46.070312 33.921644 36.768265 42.070312 25 42.070312C22.959016 42.070312 21.040073 41.87506 19.236328 41.400391L18.654297 41.248047L18.277344 41.714844C18.277344 41.714844 15.390792 44.972581 10.78125 45.757812C11.617979 44.248964 12.233683 42.844161 12.521484 41.779297C12.921431 40.299494 12.929687 39.300781 12.929688 39.300781L12.929688 38.789062L12.5 38.515625C7.2214165 35.156526 3.9296875 29.955741 3.9296875 24C3.9296875 14.078356 13.231735 5.9296875 25 5.9296875z"})],-1)),_t={disabled:""},ft=H(()=>o("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"25",height:"25",viewBox:"0 0 256 256","xml:space":"preserve"},[o("defs"),o("g",{style:{stroke:"none","stroke-width":"0","stroke-dasharray":"none","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10",fill:"none","fill-rule":"nonzero",opacity:"1"},transform:"translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"},[o("path",{d:"M 45 66.739 c -11.987 0 -21.74 -9.752 -21.74 -21.739 S 33.013 23.26 45 23.26 S 66.739 33.013 66.739 45 S 56.987 66.739 45 66.739 z M 45 29.26 c -8.679 0 -15.74 7.061 -15.74 15.74 S 36.321 60.739 45 60.739 S 60.739 53.679 60.739 45 S 53.679 29.26 45 29.26 z",style:{stroke:"none","stroke-width":"1","stroke-dasharray":"none","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10","fill-rule":"nonzero",opacity:"1"},transform:" matrix(1 0 0 1 0 0) ","stroke-linecap":"round"}),o("path",{d:"M 45 66.763 c -14.477 0 -28.953 -6.054 -43.328 -18.16 C 0.609 47.708 0 46.395 0 45 s 0.609 -2.708 1.672 -3.603 c 28.751 -24.214 57.906 -24.214 86.656 0 l 0 0 C 89.391 42.293 90 43.605 90 45 s -0.609 2.707 -1.672 3.602 C 73.953 60.709 59.477 66.763 45 66.763 z M 6.726 45 c 25.74 21.046 50.809 21.048 76.547 0 C 57.536 23.954 32.467 23.952 6.726 45 z M 84.459 45.984 c 0.001 0.001 0.003 0.002 0.004 0.003 C 84.461 45.986 84.461 45.985 84.459 45.984 z",style:{stroke:"none","stroke-width":"1","stroke-dasharray":"none","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10","fill-rule":"nonzero",opacity:"1"},transform:" matrix(1 0 0 1 0 0) ","stroke-linecap":"round"}),o("circle",{cx:"45",cy:"45",r:"7",style:{stroke:"none","stroke-width":"1","stroke-dasharray":"none","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10","fill-rule":"nonzero",opacity:"1"},transform:"  matrix(1 0 0 1 0 0) "})])],-1)),vt=S({__name:"useDetailButtons",props:{post:{type:Object,required:!0}},setup(i){const n=i,$=O(),s=k=>{$.push(`/post/${k}`)};return(k,b)=>(L(),C("div",mt,[E(X,{viewPostId:n.post.postId,viewPostPosterId:n.post.posterId},null,8,["viewPostId","viewPostPosterId"]),o("button",{onClick:b[0]||(b[0]=M(y=>s(n.post.postId),["prevent"]))},[ht,o("span",null,V(n.post.postComments.total),1)]),o("button",_t,[ft,o("span",null,V(n.post.postViews),1)]),E(kt,{"view-post-id":n.post.postId},null,8,["view-post-id"])]))}});const $t=D(vt,[["__scopeId","data-v-5b05ff0f"]]);export{$t as u};