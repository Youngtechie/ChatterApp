import{d as Q,r as b,c as w,f as C,p as rt,B as at,g as e,w as T,G as dt,u as mt,o as ct,a as lt,H as ut,b as pt,e as vt,j as r,t as N,k as _t,l as ot,h as j,F as ft,z as wt,i as st,q as gt,s as Ct}from"./index-691c7388.js";import{u as W,a as nt}from"./useAuth.vue_vue_type_script_lang-090849db.js";import{P as X,R as D,b as R,_ as q,d as F,a as S,g as h,c as G,I as ht}from"./index.esm2017-cd82f12f.js";import{_ as yt}from"./useLoadingPage.vue_vue_type_style_index_0_lang-0b87aea8.js";import{a as Pt}from"./axios-4a70c6fc.js";import{c as it}from"./useCalculateTime.vue_vue_type_script_lang-ca052a8e.js";import{u as It,a as bt,b as At}from"./useCheckFollow.vue_vue_type_script_lang-e27f1b5e.js";import{u as Ut}from"./useUserDetails.vue_vue_type_script_lang-d60ffb99.js";import{u as kt}from"./useDetailButtons-50a0b5b9.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";const $t={class:"commentAdd"},xt=Q({__name:"useAddComment",props:{currentUserId:String,viewPostId:String,viewPostPosterId:String},setup(A){const p=A,{app:M}=W(),y=X(M),c=b("");async function U(t,o,a,L){if(t===""||t===void 0)confirm("You must be logged in to comment, will you love to sign up?")&&dt.push("/join");else if(L.trim()==="")alert("You cannot post an empty comment");else{document.getElementById("btnAddcomment").setAttribute("disabled","true");const g=D(q(y,"users"),R("id","==",`${t}`)),v=D(q(y,"posts"),R("postId","==",`${o}`)),d=D(q(y,"users"),R("id","==",`${a}`));try{F(g).then(x=>{const _=x.docs[0].data();F(v).then(B=>{const l=B.docs[0].data();F(d).then(V=>{const P=V.docs[0].data(),m={commentId:l.postComments.count,details:L,time:new Date};function E(I){return _.comments.out.map(k=>{if(k.postId===o)return{...k,commentArr:[...k.commentArr,I]}})}function H(I){return P.comments.in.map(k=>{if(k.postId===o)return{...k,commentArr:[...k.commentArr,I]}})}_.comments.out.some(I=>I.postId===o)?S(h(y,"users",`${t}`),{["comments.out"]:E(m),["comments.total.out"]:_.comments.total.out+1,activityLog:[..._.activityLog,{type:"You added another comment on this post",details:{commentId:l.postComments.count,postId:o,text:m.details,time:m.time}}]}):S(h(y,"users",`${t}`),{["comments.out"]:[..._.comments.out,{postId:o,commentArr:[m]}],["comments.total.out"]:_.comments.total.out+1,activityLog:[..._.activityLog,{type:"You commented on this post",details:{commentId:l.postComments.count,postId:o,text:m.details,time:m.time}}],interactions:[..._.interactions,{type:"Commented on this post",details:{commentId:l.postComments.count,postid:o,text:m.details,time:m.time}}]}),l.postComments&&S(h(y,"posts",`${o}`),{["postComments.details"]:[...l.postComments.details,{commentId:l.postComments.count,id:t,text:m.details,time:m.time}],["postComments.total"]:l.postComments.total+1,["postComments.count"]:l.postComments.count+1}),P.comments.in.some(I=>I.postId===o)?S(h(y,"users",`${a}`),{["comments.in"]:H(m),["comments.total.in"]:P.comments.total.in+1,notifications:[...P.notifications,{type:`Your got a comment from <b>${_.fullName}</b> on a post`,details:{commentId:l.postComments.count,postid:o,text:m.details,time:m.time}}]}):S(h(y,"users",`${a}`),{["comments.in"]:[...P.comments.in,{postId:o,commentArr:[m]}],["comments.total.in"]:P.comments.total.in+1,notifications:[...P.notifications,{type:`Your got a comment from <b>${_.fullName}</b> on a post`,details:{commentId:l.postComments.count,postid:o,text:m.details,time:m.time}}]}),c.value="",document.getElementById("btnAddcomment").removeAttribute("disabled")})})})}catch{alert("Something went wrong"),document.getElementById("btnAddcomment").removeAttribute("disabled")}}}return(t,o)=>(w(),C("div",$t,[rt(e("textarea",{"onUpdate:modelValue":o[0]||(o[0]=a=>c.value=a),minlength:"1",maxlength:"1000"},null,512),[[at,c.value]]),e("button",{onClick:o[1]||(o[1]=T(a=>U(p.currentUserId,p.viewPostId,p.viewPostPosterId,c.value),["prevent"])),id:"btnAddcomment"},"Add Comment")]))}});const Et=Z(xt,[["__scopeId","data-v-47105c14"]]),St=Q({__name:"useDeleteComment",props:{currentUserId:String,viewPostId:String,viewPostPosterId:String,commentId:Number,commentText:String},setup(A){const p=A,{app:M}=W(),y=nt(),c=X(M);async function U(){const o=h(c,"posts",p.viewPostId);await G(o).then(a=>{y.viwedPost=a.data()}).catch(a=>{console.log(a)})}async function t(o,a,L,g,v){if(!(o===""||o===void 0)){const d=D(q(c,"users"),R("id","==",`${o}`)),x=D(q(c,"posts"),R("postId","==",`${a}`)),_=D(q(c,"users"),R("id","==",`${L}`));try{F(d).then(B=>{const l=B.docs[0].data();F(x).then(V=>{const P=V.docs[0].data();F(_).then(m=>{const E=m.docs[0].data();function H(f){return f.comments.out.map(u=>{if(u.postId===a)if(u.commentArr.length>1){const O=u.commentArr.filter(s=>s.commentId!==g);return{...u,commentArr:O}}else return null;return u}).filter(u=>u!==null)}function I(f){return f.comments.in.map(u=>{if(u.postId===a)if(u.commentArr.length>1){const O=u.commentArr.filter(s=>s.commentId!==g);return{...u,commentArr:O}}else return null;return u}).filter(u=>u!==null)}l.comments.out.some(f=>f.postId===a)&&S(h(c,"users",`${o}`),{["comments.out"]:H(l),["comments.total.out"]:l.comments.total.out-1,activityLog:[...l.activityLog,{type:"You deleted a comment on this post",details:{commentId:g,postId:a,text:v,time:new Date}}],interactions:l.interactions.filter(f=>f.details.commentId!==g)}),P.postComments&&S(h(c,"posts",`${a}`),{["postComments.details"]:P.postComments.details.filter(f=>f.commentId!==g),["postComments.total"]:P.postComments.total-1}),E.comments.in.some(f=>f.postId===a)&&S(h(c,"users",`${L}`),{["comments.in"]:I(E),["comments.total.in"]:E.comments.total.in-1,notifications:E.notifications.filter(f=>f.details.commentId!==g)}),U()})})})}catch(B){console.log(B)}}}return(o,a)=>(w(),C("button",{class:"delBtn",onClick:a[0]||(a[0]=T(L=>t(p.currentUserId,p.viewPostId,p.viewPostPosterId,A.commentId,A.commentText),["prevent"]))},"Delete"))}});const Bt=Z(St,[["__scopeId","data-v-c1602308"]]),Tt={key:1,id:"editContainer"},Lt={id:"centerContainer"},Nt=["onClick"],Dt=Q({__name:"useEditComment",props:{currentUserId:String,viewPostId:String,viewPostPosterId:String,commentId:Number,commentText:String,divEditId:String},setup(A){const p=A,{app:M}=W(),y=nt(),c=X(M),U=b(""),t=b(!1);async function o(){const v=h(c,"posts",p.viewPostId);await G(v).then(d=>{y.viwedPost=d.data()}).catch(d=>{console.log(d)})}async function a(v,d,x,_,B){if(!(v===""||v===void 0))if(_.trim()==="")alert("Comment cannot be empty");else{document.getElementById("btnEditComment").setAttribute("disabled","true");const l=D(q(c,"users"),R("id","==",`${v}`)),V=D(q(c,"posts"),R("postId","==",`${d}`)),P=D(q(c,"users"),R("id","==",`${x}`));try{F(l).then(m=>{const E=m.docs[0].data();F(V).then(H=>{const I=H.docs[0].data();F(P).then(f=>{const k=f.docs[0].data();function z(){return E.comments.out.map(n=>{if(n.postId===d){const $=n.commentArr.map(i=>i.commentId===B?{...i,details:_}:i);return{...n,commentArr:$}}return n})}function u(){return k.comments.in.map(n=>{if(n.postId===d){const $=n.commentArr.map(i=>i.commentId===B?{...i,details:_}:i);return{...n,commentArr:$}}return n})}function O(){return I.postComments.details.map(n=>n.commentId===B?{...n,text:_}:n)}E.comments.out.some(s=>s.postId===d)&&S(h(c,"users",`${v}`),{["comments.out"]:z(),activityLog:[...E.activityLog,{type:"You edited your comment on this post",details:{commentId:I.postComments.count,postId:d,text:_,time:new Date}}]}),I.postComments&&S(h(c,"posts",`${d}`),{["postComments.details"]:O()}),k.comments.in.some(s=>s.postId===d)&&S(h(c,"users",`${x}`),{["comments.in"]:u()}),document.getElementById("btnEditComment").removeAttribute("disabled"),o(),t.value=!1})})})}catch{alert("An error occurred, try again"),document.getElementById("btnEditComment").removeAttribute("disabled")}}}function L(v){const d=document.getElementById(`${v}`);U.value=d.innerText,t.value=!0}function g(){document.getElementById("btnEditComment").setAttribute("disabled","true"),U.value="",t.value=!1}return(v,d)=>t.value?(w(),C("div",Tt,[e("div",Lt,[rt(e("textarea",{"onUpdate:modelValue":d[1]||(d[1]=x=>U.value=x)},null,512),[[at,U.value]]),e("button",{id:"btnEditComment",onClick:d[2]||(d[2]=T(x=>a(p.currentUserId,p.viewPostId,p.viewPostPosterId,U.value,A.commentId),["prevent"]))},"Update"),e("button",{onClick:T(g,["prevent"])},"Cancel",8,Nt)])])):(w(),C("button",{key:0,onClick:d[0]||(d[0]=T(x=>L(p.divEditId),["prevent"])),class:"editBTn"},"Edit"))}});const Rt=Z(Dt,[["__scopeId","data-v-41bb88f5"]]),J=A=>(gt("data-v-428813f4"),A=A(),Ct(),A),qt={key:1,class:"postFullDetails"},Ft=["onClick"],Mt=["title"],Vt={id:"themeImgContainer"},Ht=["src"],Ot={key:0,class:"postBody"},Yt={key:0},jt={key:1,class:"coverImage"},zt=["src"],Gt={class:"section1"},Jt={class:"details"},Kt={key:0},Qt=["onClick"],Wt=["onClick"],Xt={class:"timePosted"},Zt=["innerHTML"],te={class:"btnsMore"},ee={class:"commentingSection"},oe={key:0},se={key:1,class:"commentAction"},ne={class:"commenter"},ie=["onClick"],re=["id"],ae={key:0,class:"commenterBtn"},de={key:2},me={key:1},ce=J(()=>e("h1",null,"Post not found or Deleted",-1)),le=J(()=>e("button",null,"Expore Chatter",-1)),ue=J(()=>e("button",null,"Home",-1)),pe={id:"navigators"},ve=J(()=>e("button",null,"Home",-1)),_e=J(()=>e("button",null,"Search",-1)),fe=Q({__name:"PostPage",props:["postId"],setup(A){const p=A;Ut();const M=b(!0),y=b(""),{app:c}=W(),U=X(c),t=nt(),o=mt(),a=h(U,"posts",p.postId),L=new DOMParser,g=b([]),v=b(!1),d=b(""),x=b(""),_=b(""),B=b(""),l=b(""),V=b(""),P=b(""),m=b("");async function E(){try{await Promise.all(t.viwedPost.postComments.details.map(async(s,n)=>{const $=h(U,"users",s.id),i=await G($);if(i.data()!==void 0){const{fullName:Y,id:K,username:tt}=i.data(),et={fullName:Y,id:K,username:tt};t.viwedPost.postComments.details[n].posterDetails=et}}))}catch(s){console.log(s)}}async function H(){try{const s=await G(a);s.data()!==void 0&&(t.viwedPost=s.data(),I(),f(),E(),S(a,{postViews:t.viwedPost.postViews+1}).finally(()=>{M.value=!1}))}catch(s){console.error(s)}}ct(()=>{const s=h(U,"posts",p.postId);try{ht(s,n=>{t.viwedPost=n.data(),E()})}catch{}H()});async function I(){const s=t.viwedPost.postContain;await Pt.post("/postContent",{contentUrl:s}).then(n=>{var i;const $=L.parseFromString(n.data,"text/html");(i=$.body.querySelector("h1"))==null||i.remove(),y.value=$.body.innerHTML}).catch(n=>{console.log(n)})}async function f(){g.value=[];const s=h(U,"users",t.viwedPost.posterId),n=await G(s);if(n.data()!==void 0){const{blogName:$,profilePicture:i,id:Y,username:K}=n.data(),tt={blogName:$,profilePicture:i,id:Y,username:K};g.value.push(tt),await It(t.viwedPost.posterId,t.signedUser.id).then(et=>{v.value=et})}}async function k(){bt(t.viwedPost.posterId,g.value[0].blogName),t.signedUser.username!==void 0&&t.signedUser.username!==""&&(v.value=!v.value)}async function z(){At(t.viwedPost.posterId),t.signedUser.username!==void 0&&t.signedUser.username!==""&&(v.value=!v.value)}lt(()=>{const s=document.getElementById("warningShow");s&&(s.style.display="none")});function u(s){if(s===t.signedUser.id)return o.push("/userProfile");o.push(`/chatterUser/${s}`)}function O(){o.go(-1)}return ut({title:d.value,meta:[{name:"author",content:B.value},{name:"description",content:x.value},{name:"keywords",content:_.value},{property:"og:description",content:l.value},{property:"og:title",content:V.value},{property:"og:image",content:m.value},{property:"og:type",content:"website"},{property:"og:url",content:P.value}]}),(s,n)=>{const $=pt("RouterLink");return M.value?(w(),vt(yt,{key:0,"action-name":"Loading Post..."})):(w(),C("main",qt,[e("header",null,[e("button",{onClick:T(O,["prevent"])},"Back",8,Ft),e("button",{title:r(t).themeDetails.title,id:"themeBtn",onClick:n[0]||(n[0]=(...i)=>r(t).changeTheme&&r(t).changeTheme(...i))},[e("div",Vt,[e("img",{src:r(t).themeDetails.img},null,8,Ht)])],8,Mt)]),r(t).viwedPost.posterId!==void 0?(w(),C("div",Ot,[r(t).viwedPost.postCoverImage===""?(w(),C("h1",Yt,N(r(t).viwedPost.postTitle.join(" ")),1)):(w(),C("section",jt,[e("img",{id:"img",src:r(t).viwedPost.postCoverImage},null,8,zt),e("h1",null,N(r(t).viwedPost.postTitle.join(" ")),1)])),e("div",Gt,[e("div",Jt,[e("div",{class:"imgCon",onClick:n[1]||(n[1]=T(i=>u(r(t).viwedPost.posterId),["prevent"])),style:_t({backgroundImage:`url(${g.value[0].profilePicture})`})},null,4),e("div",null,[e("h3",{onClick:n[2]||(n[2]=T(i=>u(r(t).viwedPost.posterId),["prevent"]))},N(g.value[0].blogName),1),e("h5",null,"@"+N(g.value[0].username),1)])]),r(t).signedUser.id!==r(t).viwedPost.posterId?(w(),C("div",Kt,[v.value?(w(),C("button",{key:0,onClick:T(k,["prevent"])},"UnFollow",8,Qt)):(w(),C("button",{key:1,onClick:T(z,["prevent"])},"Follow",8,Wt))])):ot("",!0)]),e("div",Xt,N(it(r(t).viwedPost.postTime.seconds)),1),e("div",{innerHTML:y.value,class:"showPost"},null,8,Zt),e("div",te,[j(kt,{post:r(t).viwedPost},null,8,["post"])]),e("div",ee,[r(t).viwedPost.postComments.total===0&&r(t).viwedPost.postSettings.disableComments===!1?(w(),C("h4",oe," No comments yet. ")):ot("",!0),r(t).viwedPost.postSettings.disableComments===!1?(w(),C("div",se,[(w(!0),C(ft,null,wt(r(t).viwedPost.postComments.details,(i,Y)=>(w(),C("div",{key:Y,class:"Eachcomment"},[e("div",ne,[e("div",null,[e("h4",{onClick:T(K=>u(i.commenterId),["prevent"])},N(i.posterDetails.fullName),9,ie),e("h5",null,"@"+N(i.posterDetails.username),1)]),e("p",null,N(it(i.time.seconds)),1)]),e("div",{id:Y.toString()+"commentDiv",class:"commentShow"},N(i.text),9,re),r(t).signedUser.id===r(t).viwedPost.posterId?(w(),C("div",ae,[j(Rt,{currentUserId:r(t).signedUser.id,viewPostId:p.postId,viewPostPosterId:r(t).viwedPost.posterId,commentId:i.commentId,commentText:i.text,divEditId:Y.toString()+"commentDiv"},null,8,["currentUserId","viewPostId","viewPostPosterId","commentId","commentText","divEditId"]),j(Bt,{currentUserId:r(t).signedUser.id,viewPostId:p.postId,viewPostPosterId:r(t).viwedPost.posterId,commentId:i.commentId,commentText:i.text},null,8,["currentUserId","viewPostId","viewPostPosterId","commentId","commentText"])])):ot("",!0)]))),128)),j(Et,{currentUserId:r(t).signedUser.id,viewPostId:p.postId,viewPostPosterId:r(t).viwedPost.posterId},null,8,["currentUserId","viewPostId","viewPostPosterId"])])):(w(),C("h4",de,"Commenting on this post is disabled."))])])):(w(),C("div",me,[ce,e("div",null,[le,j($,{to:"/"},{default:st(()=>[ue]),_:1})])])),e("section",pe,[j($,{to:"/home"},{default:st(()=>[ve]),_:1}),j($,{to:"/search"},{default:st(()=>[_e]),_:1})])]))}}});const ke=Z(fe,[["__scopeId","data-v-428813f4"]]);export{ke as default};
