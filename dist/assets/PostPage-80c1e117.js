import{E as Q,d as X,r as O,c as U,f as F,m as rt,B as dt,g as n,w as D,_ as Z,u as ct,o as lt,a as mt,b as ut,e as pt,h as f,t as H,n as ft,k as et,i as z,F as vt,y as ht,j as ot,A as gt,p as wt,q as bt}from"./index-3c7daa31.js";import{u as j,P as W,a as J,_ as N,R as q,c as B,d as L,g,b as T,e as G,I as yt}from"./useAuth.vue_vue_type_script_lang-0a2c6dcb.js";import{g as _t,r as st,a as nt}from"./index.esm2017-3ce07352.js";import{_ as Pt}from"./useLoadingPage.vue_vue_type_style_index_0_lang-1a9153d1.js";import{a as Ct}from"./axios-4a70c6fc.js";import{c as at,u as It}from"./useDetailButtons-13ec496c.js";import{u as tt}from"./useUserDetails.vue_vue_type_script_lang-f8979881.js";tt();function kt(d){const{app:c}=j(),A=W(c),l=J(),a=N(A,"users");async function w(){l.signedUser.id===void 0||l.signedUser.id===""?(console.log("not signed in"),Q.push("/login")):u()}async function u(){try{const t=q(a,B("id","==",`${l.signedUser.id}`)),b=(await L(t)).docs[0].data(),y=q(a,B("id","==",`${d}`)),s=(await L(y)).docs[0].data(),p=[...b.following.theFollowings,d],x=p.length,M=[...s.followers.theFollowers,l.signedUser.id],_=M.length,m=g(A,"users",d),$=g(A,"users",l.signedUser.id);await T(m,{["followers.theFollowers"]:M,["followers.total"]:_,notifications:[...s.notifications,{type:`${l.signedUser.fullName} started following you`,details:{followerId:l.signedUser.id,time:new Date}}]}),await T($,{["following.theFollowings"]:p,["following.total"]:x,activityLog:[...b.activityLog,{type:"New following",details:{followingId:d,time:new Date}}]})}catch(t){console.error(t)}}w()}function Ut(d,c){tt();const{app:A}=j(),l=W(A),a=J(),w=N(l,"users");u();async function u(){try{const t=q(w,B("id","==",`${a.signedUser.id}`)),b=(await L(t)).docs[0].data(),y=q(w,B("id","==",`${d}`)),s=(await L(y)).docs[0].data(),p=b.following.theFollowings.filter(R=>R!==d),x=p.length,M=s.followers.theFollowers.filter(R=>R!==a.signedUser.id),_=M.length,m=g(l,"users",d),$=g(l,"users",a.signedUser.id);await T(m,{["followers.theFollowers"]:M,["followers.total"]:_}),await T($,{["following.theFollowings"]:p,["following.total"]:x,activityLog:[...b.activityLog,{type:`You unfollowed ${c}`,details:{followingId:d,time:new Date}}]})}catch(t){console.error(t)}}}const it=J();tt();async function At(d,c){const{app:A}=j(),l=W(A),a=N(l,"users");if(it.signedUser.id===void 0||it.signedUser.id==="")return console.log("not signed in"),!1;return await w();async function w(){try{const u=q(a,B("id","==",`${c}`)),t=q(a,B("id","==",`${d}`)),i=await L(u),b=await L(t),y=i.docs[0].data();return b.docs[0].data().followers.theFollowers.includes(c)&&y.following.theFollowings.includes(d)}catch{return console.log(c,d),!1}}}const xt={class:"commentAdd"},$t=X({__name:"useAddComment",props:{currentUserId:String,viewPostId:String,viewPostPosterId:String},setup(d){const c=d,{app:A}=j(),l=W(A),a=O("");async function w(u,t,i,b){if(u===""||u===void 0)return Q.push("/login");if(b.trim()==="")console.log("comment cannot be empty");else{document.getElementById("btnAddcomment").setAttribute("disabled","true");const y=q(N(l,"users"),B("id","==",`${u}`)),I=q(N(l,"posts"),B("postId","==",`${t}`)),s=q(N(l,"users"),B("id","==",`${i}`));try{L(y).then(h=>{const p=h.docs[0].data();L(I).then(x=>{const v=x.docs[0].data();L(s).then(M=>{const _=M.docs[0].data(),m={commentId:v.postComments.count,details:b,time:new Date};function $(S){return p.comments.out.map(r=>{if(r.postId===t)return{...r,commentArr:[...r.commentArr,S]}})}function R(S){return _.comments.in.map(r=>{if(r.postId===t)return{...r,commentArr:[...r.commentArr,S]}})}p.comments.out.some(S=>S.postId===t)?T(g(l,"users",`${u}`),{["comments.out"]:$(m),["comments.total.out"]:p.comments.total.out+1,activityLog:[...p.activityLog,{type:"You added another comment on this post",details:{commentId:v.postComments.count,postId:t,text:m.details,time:m.time}}]}):T(g(l,"users",`${u}`),{["comments.out"]:[...p.comments.out,{postId:t,commentArr:[m]}],["comments.total.out"]:p.comments.total.out+1,activityLog:[...p.activityLog,{type:"You commented on this post",details:{commentId:v.postComments.count,postId:t,text:m.details,time:m.time}}],interactions:[...p.interactions,{type:"Commented on this post",details:{commentId:v.postComments.count,postid:t,text:m.details,time:m.time}}]}),v.postComments&&T(g(l,"posts",`${t}`),{["postComments.details"]:[...v.postComments.details,{commentId:v.postComments.count,id:u,text:m.details,time:m.time}],["postComments.total"]:v.postComments.total+1,["postComments.count"]:v.postComments.count+1}),_.comments.in.some(S=>S.postId===t)?T(g(l,"users",`${i}`),{["comments.in"]:R(m),["comments.total.in"]:_.comments.total.in+1,notifications:[..._.notifications,{type:`Your got a comment from <b>${p.fullName}</b> on a post`,details:{commentId:v.postComments.count,postid:t,text:m.details,time:m.time}}]}):T(g(l,"users",`${i}`),{["comments.in"]:[..._.comments.in,{postId:t,commentArr:[m]}],["comments.total.in"]:_.comments.total.in+1,notifications:[..._.notifications,{type:`Your got a comment from <b>${p.fullName}</b> on a post`,details:{commentId:v.postComments.count,postid:t,text:m.details,time:m.time}}]}),a.value="",document.getElementById("btnAddcomment").removeAttribute("disabled")})})})}catch(h){console.log(h),document.getElementById("btnAddcomment").removeAttribute("disabled")}}}return(u,t)=>(U(),F("div",xt,[rt(n("textarea",{"onUpdate:modelValue":t[0]||(t[0]=i=>a.value=i),minlength:"1",maxlength:"1000"},null,512),[[dt,a.value]]),n("button",{onClick:t[1]||(t[1]=D(i=>w(c.currentUserId,c.viewPostId,c.viewPostPosterId,a.value),["prevent"])),id:"btnAddcomment"},"Add Comment")]))}});const Et=Z($t,[["__scopeId","data-v-236be6de"]]),Ft=X({__name:"useDeleteComment",props:{currentUserId:String,viewPostId:String,viewPostPosterId:String,commentId:Number,commentText:String},setup(d){const c=d,{app:A}=j(),l=J(),a=W(A);async function w(){const t=g(a,"posts",c.viewPostId);await G(t).then(i=>{l.viwedPost=i.data()}).catch(i=>{console.log(i)})}async function u(t,i,b,y,I){if(t===""||t===void 0)return Q.push("/login");{const s=q(N(a,"users"),B("id","==",`${t}`)),h=q(N(a,"posts"),B("postId","==",`${i}`)),p=q(N(a,"users"),B("id","==",`${b}`));try{L(s).then(x=>{const v=x.docs[0].data();L(h).then(M=>{const _=M.docs[0].data();L(p).then(m=>{const $=m.docs[0].data();function R(e){return e.comments.out.map(o=>{if(o.postId===i)if(o.commentArr.length>1){const E=o.commentArr.filter(k=>k.commentId!==y);return{...o,commentArr:E}}else return null;return o}).filter(o=>o!==null)}function S(e){return e.comments.in.map(o=>{if(o.postId===i)if(o.commentArr.length>1){const E=o.commentArr.filter(k=>k.commentId!==y);return{...o,commentArr:E}}else return null;return o}).filter(o=>o!==null)}v.comments.out.some(e=>e.postId===i)&&T(g(a,"users",`${t}`),{["comments.out"]:R(v),["comments.total.out"]:v.comments.total.out-1,activityLog:[...v.activityLog,{type:"You deleted a comment on this post",details:{commentId:y,postId:i,text:I,time:new Date}}],interactions:v.interactions.filter(e=>e.details.commentId!==y)}),_.postComments&&T(g(a,"posts",`${i}`),{["postComments.details"]:_.postComments.details.filter(e=>e.commentId!==y),["postComments.total"]:_.postComments.total-1}),$.comments.in.some(e=>e.postId===i)&&T(g(a,"users",`${b}`),{["comments.in"]:S($),["comments.total.in"]:$.comments.total.in-1,notifications:$.notifications.filter(e=>e.details.commentId!==y)}),w()})})})}catch(x){console.log(x)}}}return(t,i)=>(U(),F("button",{class:"delBtn",onClick:i[0]||(i[0]=D(b=>u(c.currentUserId,c.viewPostId,c.viewPostPosterId,d.commentId,d.commentText),["prevent"]))},"Delete"))}});const Tt=Z(Ft,[["__scopeId","data-v-dfbcd91a"]]),St={key:1,id:"editContainer"},qt={id:"centerContainer"},Bt=["onClick"],Lt=X({__name:"useEditComment",props:{currentUserId:String,viewPostId:String,viewPostPosterId:String,commentId:Number,commentText:String,divEditId:String},setup(d){const c=d,{app:A}=j(),l=J(),a=W(A),w=O(""),u=O(!1);async function t(){const I=g(a,"posts",c.viewPostId);await G(I).then(s=>{l.viwedPost=s.data()}).catch(s=>{console.log(s)})}async function i(I,s,h,p,x){if(I===""||I===void 0)return Q.push("/login");if(p.trim()==="")console.log("Comment cannot be empty");else{document.getElementById("btnEditComment").setAttribute("disabled","true");const v=q(N(a,"users"),B("id","==",`${I}`)),M=q(N(a,"posts"),B("postId","==",`${s}`)),_=q(N(a,"users"),B("id","==",`${h}`));try{L(v).then(m=>{const $=m.docs[0].data();L(M).then(R=>{const S=R.docs[0].data();L(_).then(e=>{const r=e.docs[0].data();function P(){return $.comments.out.map(C=>{if(C.postId===s){const V=C.commentArr.map(Y=>Y.commentId===x?{...Y,details:p}:Y);return{...C,commentArr:V}}return C})}function o(){return r.comments.in.map(C=>{if(C.postId===s){const V=C.commentArr.map(Y=>Y.commentId===x?{...Y,details:p}:Y);return{...C,commentArr:V}}return C})}function E(){return S.postComments.details.map(C=>C.commentId===x?{...C,text:p}:C)}$.comments.out.some(k=>k.postId===s)&&T(g(a,"users",`${I}`),{["comments.out"]:P(),activityLog:[...$.activityLog,{type:"You edited your comment on this post",details:{commentId:S.postComments.count,postId:s,text:p,time:new Date}}]}),S.postComments&&T(g(a,"posts",`${s}`),{["postComments.details"]:E()}),r.comments.in.some(k=>k.postId===s)&&T(g(a,"users",`${h}`),{["comments.in"]:o()}),document.getElementById("btnEditComment").removeAttribute("disabled"),t(),u.value=!1})})})}catch(m){console.log(m),document.getElementById("btnEditComment").removeAttribute("disabled")}}}function b(I){const s=document.getElementById(`${I}`);w.value=s.innerText,u.value=!0}function y(){document.getElementById("btnEditComment").setAttribute("disabled","true"),w.value="",u.value=!1}return(I,s)=>u.value?(U(),F("div",St,[n("div",qt,[rt(n("textarea",{"onUpdate:modelValue":s[1]||(s[1]=h=>w.value=h)},null,512),[[dt,w.value]]),n("button",{id:"btnEditComment",onClick:s[2]||(s[2]=D(h=>i(c.currentUserId,c.viewPostId,c.viewPostPosterId,w.value,d.commentId),["prevent"]))},"Update"),n("button",{onClick:D(y,["prevent"])},"Cancel",8,Bt)])])):(U(),F("button",{key:0,onClick:s[0]||(s[0]=D(h=>b(c.divEditId),["prevent"])),class:"editBTn"},"Edit"))}});const Mt=Z(Lt,[["__scopeId","data-v-898f2d19"]]),K=d=>(wt("data-v-bf98781a"),d=d(),bt(),d),Rt={key:1,class:"postFullDetails"},Nt=["onClick"],Dt=["title"],Ht={id:"themeImgContainer"},Ot=["src"],Vt={key:0,class:"postBody"},Yt={class:"section1"},zt={class:"details"},jt={key:0},Wt=["onClick"],Jt=["onClick"],Gt={class:"timePosted"},Kt=gt(`<div class="showPost" data-v-bf98781a><p data-v-bf98781a>Markdown is a lightweight markup language that allows you to easily format and style text. It provides a simple and intuitive syntax for creating structured documents without the need for complex HTML or formatting tools. In this article, we&#39;ll explore the basics of using Markdown and how you can leverage its features to enhance your writing and documentation.</p><h2 data-v-bf98781a>Headers</h2><p data-v-bf98781a>Headers are useful for organizing and structuring your document. Markdown provides different levels of headers, denoted by the number of hash (#) symbols. For example:</p><pre data-v-bf98781a><code data-v-bf98781a>
                # Heading 1
                ## Heading 2
                ### Heading 3
                </code></pre><h2 data-v-bf98781a>Emphasis</h2><p data-v-bf98781a>You can emphasize text in Markdown using various techniques.</p><p data-v-bf98781a>To make text <em data-v-bf98781a>italic</em>, simply wrap it with asterisks or underscores (<code data-v-bf98781a>*italic*</code> or <code data-v-bf98781a>_italic_</code>).</p><p data-v-bf98781a>To make text <strong data-v-bf98781a>bold</strong>, use double asterisks or underscores (<code data-v-bf98781a>**bold**</code> or <code data-v-bf98781a>__bold__</code>).</p><p data-v-bf98781a>You can also use a combination of asterisks and underscores to achieve both <em data-v-bf98781a>italic</em> and <strong data-v-bf98781a>bold</strong> formatting (<code data-v-bf98781a>***bold and italic***</code> or <code data-v-bf98781a>___bold and italic___</code>).</p><h2 data-v-bf98781a>Lists</h2><p data-v-bf98781a>Markdown supports both ordered and unordered lists.</p><p data-v-bf98781a>To create an unordered list, use asterisks, plus signs, or hyphens:</p><pre data-v-bf98781a><code data-v-bf98781a>- Item 1
                - Item 2
                - Item 3
                </code></pre><p data-v-bf98781a>To create an ordered list, use numbers:</p><pre data-v-bf98781a><code data-v-bf98781a>1. First item
                2. Second item
                3. Third item
                </code></pre><h2 data-v-bf98781a>Links</h2><p data-v-bf98781a>Adding links to your Markdown document is straightforward. To create a link, use the following syntax: </p><pre data-v-bf98781a><code data-v-bf98781a>[Link text](URL)
                </code></pre><p data-v-bf98781a>For example, <code data-v-bf98781a>[OpenAI](https://www.openai.com)</code> will render as <a href="https://www.openai.com" data-v-bf98781a>OpenAI</a>.</p><h2 data-v-bf98781a>Images</h2><p data-v-bf98781a>To embed images in Markdown, use a similar syntax as links but with an exclamation mark in front:</p><pre data-v-bf98781a><code data-v-bf98781a>![Alt text](image.jpg)
                </code></pre><p data-v-bf98781a>You can also specify optional alternate text for accessibility purposes:</p><pre data-v-bf98781a><code data-v-bf98781a>![Alt text](image.jpg &quot;Optional title&quot;)
                </code></pre><h2 data-v-bf98781a>Code Blocks</h2><p data-v-bf98781a>When sharing code snippets or examples, Markdown allows you to create code blocks with syntax highlighting. Enclose the code within triple backticks (\`\`\`) and specify the programming language for proper highlighting:</p><pre data-v-bf98781a><code class="language-python" data-v-bf98781a>def greet(name):
                    print(f&quot;Hello, {name}!&quot;)
                </code></pre><h2 data-v-bf98781a>Blockquotes</h2><p data-v-bf98781a>To create blockquotes, prepend the lines with the greater-than symbol (<code data-v-bf98781a>&amp;gt;</code>):</p><pre data-v-bf98781a><code data-v-bf98781a>&amp;gt; This is a blockquote.
                &amp;gt; It can span multiple lines.
                </code></pre><h2 data-v-bf98781a>Tables</h2><p data-v-bf98781a>Markdown enables you to create simple tables using pipes and hyphens:</p><pre data-v-bf98781a><code data-v-bf98781a>| Name  | Age |
                |-------|-----|
                | John  | 25  |
                | Emily | 30  |
                </code></pre><h2 data-v-bf98781a>Horizontal Rules</h2><p data-v-bf98781a>To insert a horizontal rule, use three or more hyphens, asterisks, or underscores on a line:</p><pre data-v-bf98781a><code data-v-bf98781a>---
                </code></pre><p data-v-bf98781a>or</p><pre data-v-bf98781a><code data-v-bf98781a>***
                </code></pre><p data-v-bf98781a>or</p><pre data-v-bf98781a><code data-v-bf98781a>___
                </code></pre><h2 data-v-bf98781a>Conclusion</h2><p data-v-bf98781a>Markdown is a versatile and user-friendly markup language that makes writing and formatting text a breeze. With just a few simple symbols, you can create headers, emphasize text, create lists, add links and images, highlight code, and much more. Whether you&#39;re writing documentation, blog posts, or even just taking notes, Markdown provides a convenient way to structure and style your content with minimal effort. Start using Markdown today and unlock a world of easy and elegant document creation!</p></div>`,1),Qt={class:"btnsMore"},Xt={class:"commentingSection"},Zt={key:0},te={key:1,class:"commentAction"},ee={class:"commenter"},oe=["onClick"],se=["id"],ne={key:0,class:"commenterBtn"},ae={key:2},ie={key:1},re=K(()=>n("h1",null,"Post not found or Deleted",-1)),de=K(()=>n("button",null,"Expore Chatter",-1)),ce=K(()=>n("button",null,"Home",-1)),le={id:"navigators"},me=K(()=>n("button",null,"Home",-1)),ue=K(()=>n("button",null,"Search",-1)),pe=X({__name:"PostPage",props:["postId"],setup(d){const c=d;tt();const A=O(!0),l=O(""),a=O([]),{app:w}=j(),u=W(w),t=J(),i=ct(),b=_t(w),y=g(u,"posts",c.postId),I=new DOMParser,s=O([]),h=O(!1);async function p(){try{await Promise.all(t.viwedPost.postMedia.map(async e=>{const r=st(b,e.mediaFullPath),P=await nt(r);a.value.push(P)})).catch(()=>{console.log("error")})}catch(e){console.log(e)}}async function x(){try{await Promise.all(t.viwedPost.postComments.details.map(async(e,r)=>{const P=g(u,"users",e.id),o=await G(P);if(o.data()!==void 0){const{fullName:E,id:k,username:C}=o.data(),V={fullName:E,id:k,username:C};t.viwedPost.postComments.details[r].posterDetails=V}}))}catch(e){console.log(e)}}async function v(){try{const e=await G(y);e.data()!==void 0&&(t.viwedPost=e.data(),p(),M(),_(),x(),T(y,{postViews:t.viwedPost.postViews+1}).finally(()=>{A.value=!1}))}catch{i.push("/error")}}lt(()=>{const e=g(u,"posts",c.postId);try{yt(e,r=>{t.viwedPost=r.data(),x()})}catch{}v()});async function M(){try{const e=st(b,t.viwedPost.postContain),r=await nt(e).catch(P=>{console.log(P)});await Ct.post("/postContent",{contentUrl:r}).then(P=>{var E;const o=I.parseFromString(P.data,"text/html");o.body.querySelectorAll("img, video").forEach((k,C)=>{k.setAttribute("src",`${a.value[C]}`)}),(E=o.body.querySelector("h1"))==null||E.remove(),l.value=o.body.innerHTML}).catch(P=>{console.log(P)})}catch(e){console.log(e)}}async function _(){try{const e=g(u,"users",t.viwedPost.posterId),r=await G(e);if(r.data()!==void 0){const{blogName:P,profilePicture:o,id:E,username:k}=r.data(),C={blogName:P,profilePicture:o,id:E,username:k};s.value.push(C),await At(t.viwedPost.posterId,t.signedUser.id).then(V=>{h.value=V})}}catch{}}async function m(){Ut(t.viwedPost.posterId,s.value[0].blogName),h.value=!h.value}async function $(){kt(t.viwedPost.posterId),h.value=!h.value}mt(()=>{const e=document.getElementById("warningShow");e.style.display="none"});function R(e){if(e===t.signedUser.id)return i.push("/userProfile");i.push(`/chatterUser/${e}`)}function S(){i.go(-1)}return(e,r)=>{const P=ut("RouterLink");return A.value?(U(),pt(Pt,{key:0,"action-name":"Loading Post..."})):(U(),F("main",Rt,[n("header",null,[n("button",{onClick:D(S,["prevent"])},"Back",8,Nt),n("button",{title:f(t).themeDetails.title,id:"themeBtn",onClick:r[0]||(r[0]=(...o)=>f(t).changeTheme&&f(t).changeTheme(...o))},[n("div",Ht,[n("img",{src:f(t).themeDetails.img},null,8,Ot)])],8,Dt)]),f(t).viwedPost.posterId!==void 0?(U(),F("div",Vt,[n("h1",null,H(f(t).viwedPost.postTitle.join(" ")),1),n("div",Yt,[n("div",zt,[n("div",{class:"imgCon",onClick:r[1]||(r[1]=D(o=>R(f(t).viwedPost.posterId),["prevent"])),style:ft({backgroundImage:`url(${s.value[0].profilePicture})`})},null,4),n("div",null,[n("h3",{onClick:r[2]||(r[2]=D(o=>R(f(t).viwedPost.posterId),["prevent"]))},H(s.value[0].blogName),1),n("h5",null,"@"+H(s.value[0].username),1)])]),f(t).signedUser.id!==f(t).viwedPost.posterId?(U(),F("div",jt,[h.value?(U(),F("button",{key:0,onClick:D(m,["prevent"])},"UnFollow",8,Wt)):(U(),F("button",{key:1,onClick:D($,["prevent"])},"Follow",8,Jt))])):et("",!0)]),n("div",Gt,H(at(f(t).viwedPost.postTime.seconds)),1),Kt,n("div",Qt,[z(It,{post:f(t).viwedPost},null,8,["post"])]),n("div",Xt,[f(t).viwedPost.postComments.total===0&&f(t).viwedPost.postSettings.disableComments===!1?(U(),F("h4",Zt," No comments yet. ")):et("",!0),f(t).viwedPost.postSettings.disableComments===!1?(U(),F("div",te,[(U(!0),F(vt,null,ht(f(t).viwedPost.postComments.details,(o,E)=>(U(),F("div",{key:E,class:"Eachcomment"},[n("div",ee,[n("div",null,[n("h4",{onClick:D(k=>R(o.commenterId),["prevent"])},H(o.posterDetails.fullName),9,oe),n("h5",null,"@"+H(o.posterDetails.username),1)]),n("p",null,H(at(o.time.seconds)),1)]),n("div",{id:E.toString()+"commentDiv",class:"commentShow"},H(o.text),9,se),f(t).signedUser.id===f(t).viwedPost.posterId?(U(),F("div",ne,[z(Mt,{currentUserId:f(t).signedUser.id,viewPostId:c.postId,viewPostPosterId:f(t).viwedPost.posterId,commentId:o.commentId,commentText:o.text,divEditId:E.toString()+"commentDiv"},null,8,["currentUserId","viewPostId","viewPostPosterId","commentId","commentText","divEditId"]),z(Tt,{currentUserId:f(t).signedUser.id,viewPostId:c.postId,viewPostPosterId:f(t).viwedPost.posterId,commentId:o.commentId,commentText:o.text},null,8,["currentUserId","viewPostId","viewPostPosterId","commentId","commentText"])])):et("",!0)]))),128)),z(Et,{currentUserId:f(t).signedUser.id,viewPostId:c.postId,viewPostPosterId:f(t).viwedPost.posterId},null,8,["currentUserId","viewPostId","viewPostPosterId"])])):(U(),F("h4",ae,"Commenting on this post is disabled."))])])):(U(),F("div",ie,[re,n("div",null,[de,z(P,{to:"/"},{default:ot(()=>[ce]),_:1})])])),n("section",le,[z(P,{to:"/home"},{default:ot(()=>[me]),_:1}),z(P,{to:"/search"},{default:ot(()=>[ue]),_:1})])]))}}});const _e=Z(pe,[["__scopeId","data-v-bf98781a"]]);export{_e as default};
