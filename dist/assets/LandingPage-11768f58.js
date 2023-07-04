import{u as ae,P as ie,a as G,R as V,c as W,_ as j,d as z,g as re,y as we,x as ne,e as Ce,k as be}from"./useAuth.vue_vue_type_script_lang-0a2c6dcb.js";import{d as Y,a as ce,r as w,u as le,s as Se,x as U,o as de,c as u,f as g,F as O,y as Z,g as o,w as C,n as ue,h as M,t as D,k as pe,z as T,_ as J,i as Q,m as ke,v as Pe,b as he,e as ee,j as ge,p as ve,q as me,A as $e}from"./index-3c7daa31.js";import{g as _e,r as te,a as ye,l as xe,d as Ie}from"./index.esm2017-3ce07352.js";import{a as fe}from"./axios-4a70c6fc.js";import{c as oe,u as se}from"./useDetailButtons-13ec496c.js";import{u as Te}from"./useUserDetails.vue_vue_type_script_lang-f8979881.js";const Le="/Vector1.png",Fe="/Vector2.png",qe="/Vector3.png",Ee="/section4Img.png",Ae={key:0,class:T({resultsContainer:!0})},Re=["onClick"],Ue={class:"result-item-other"},De={class:"result-item-header"},Me=["onClick"],Be=["innerHTML","onClick"],He={class:"editSectionbtn"},Ne=["onClick"],Oe=["onClick"],Ve=Y({__name:"AuthorFeedPage",setup(v){let d;ce(()=>{clearTimeout(d);const s=document.getElementById("warningShow");s.style.display="none"});const m=w([]),b=w(""),k=new DOMParser,_=le(),{app:L}=ae(),F=_e(L),q=ie(L),y=G(),E=w(!0);Se(()=>{var s,l;((s=m.value)==null?void 0:s.length)>0&&((l=m.value)==null||l.sort((r,a)=>a.postTime.seconds-r.postTime.seconds),U(()=>{const r=document.getElementById("warningShow");r&&(r.style.display="none")}))}),de(()=>{clearTimeout(d),U(()=>{const s=document.getElementById("warningShow");s&&(s.style.display="flex",s.textContent="Loading ...")}),P()});async function x(s){b.value="";try{const l=te(F,s.postContain),r=await ye(l).catch(a=>{console.log(a)});await fe.post("/postContent",{contentUrl:r}).then(a=>{const t=k.parseFromString(a.data,"text/html");b.value=t.body.innerHTML}).catch(a=>{console.log(a)})}catch{const r=document.querySelector("#ErrorShow span");r.style.display="flex",r.textContent="Something went wrong, check your internet connection"}}async function P(){const s=V(j(q,"posts"),W("posterId","==",y.signedUser.id)),r=(await z(s)).docs.map(async t=>{var c;const n=t.data();await x(n);const i=k.parseFromString(b.value,"text/html");return i.body.querySelectorAll("img").forEach(e=>{e.remove()}),i.body.querySelectorAll("video").forEach(e=>{e.remove()}),(c=i.body.querySelector("h1"))==null||c.remove(),b.value=i.body.innerHTML,n.postContain=b.value,n}),a=await Promise.all(r);m.value=a,E.value=!1}function $(s){_.push(`/post/${s}`)}function B(s){if(s===y.signedUser.id)return _.push("/userProfile");_.push(`/chatterUser/${s}`)}function H(s){_.push(`/write/${s}`)}async function N(s){try{const l=V(j(q,"posts"),W("postId","==",s));(await z(l)).forEach(t=>{const n=t.data(),i=re(q,"posts",n.postId);we(i)});const a=`ChatterAppFiles/posts/${s}`;A(a)}catch(l){console.log(l)}}async function A(s){const l=te(F,s),a=(await xe(l)).items.map(t=>Ie(t));await Promise.all(a)}return(s,l)=>{var r;return((r=m.value)==null?void 0:r.length)>0&&E.value===!1?(u(),g("div",Ae,[(u(!0),g(O,null,Z(m.value,(a,t)=>(u(),g("div",{key:t,class:"result-item"},[o("div",{class:"imgCon",onClick:C(n=>B(a.posterId),["prevent"]),style:ue({backgroundImage:`url(${M(y).signedUser.profilePicture})`})},null,12,Re),o("div",Ue,[o("div",De,[o("span",{onClick:C(n=>B(a.posterId),["prevent"])},D(M(y).signedUser.blogName),9,Me),o("span",null,D(oe(a.postTime.seconds)),1)]),o("div",{innerHTML:a.postContain,id:"divContent",onClick:C(n=>$(a.postId),["prevent"])},null,8,Be),o("div",He,[o("button",{onClick:C(n=>H(a.postId),["prevent"])},"Edit",8,Ne),o("button",{onClick:C(n=>N(a.postId),["prevent"])},"Delete",8,Oe)])])]))),128))])):pe("",!0)}}});const We=J(Ve,[["__scopeId","data-v-f729dcf2"]]),je={class:"btns"},ze={key:0,class:T({resultsContainer:!0})},Qe=["onClick"],Ge={class:"result-item-other"},Ye={class:"result-item-header"},Je=["onClick"],Ke=["innerHTML","onClick"],Xe={key:1,class:T({resultsContainer:!0})},Ze=["src","alt","onClick"],et={class:"result-item-other"},tt={class:"result-item-header"},ot=["onClick"],nt=["innerHTML","onClick"],st={class:"noFollower"},at=Y({__name:"ReaderFeedPage",setup(v){ce(()=>{const t=document.getElementById("warningShow");t.style.display="none"});const d=w(""),m=new DOMParser;Te();const{app:b}=ae(),k=_e(b),_=G(),L=ie(b),F=le(),q=w(!0),y=w("interested_section"),E=w([]),x=w([]),P=w(),$=w([]),B=w(0);de(()=>{U(()=>{const t=document.getElementById("warningShow");t&&(t.style.display="flex",t.textContent="Loading ...")}),r(E.value)});function H(t){x.value=[],$.value=[],y.value=t,U(()=>{const n=document.getElementById("warningShow");n&&(n.style.display="flex",n.textContent="Loading ...")}),t==="following_section"&&a(),t==="interested_section"&&r(E.value)}function N(t){F.push(`/post/${t}`)}function A(t){if(t===_.signedUser.id)return F.push("/userProfile");F.push(`/chatterUser/${t}`)}_.signedUser.interests.forEach(t=>{const n=t.trim();E.value.push(n.charAt(0).toUpperCase()+n.slice(1).toLowerCase())});async function s(t){d.value="";try{const n=te(k,t.postContain),i=await ye(n).catch(c=>{console.log(c)});await fe.post("/postContent",{contentUrl:i}).then(c=>{const e=m.parseFromString(c.data,"text/html");d.value=e.body.innerHTML}).catch(c=>{console.log(c)})}catch{const i=document.querySelector("#ErrorShow span");i.style.display="flex",i.textContent="Something went wrong, check your internet connection"}}async function l(t){P.value=null;try{const n=re(L,"users",t),i=await Ce(n);if(i.data()!==void 0){const{fullName:c,profilePicture:e,username:p,blogName:f}=i.data(),h={profilePicture:e,posterID:t,fullName:c,username:p,blogName:f};P.value={id:t,img:h.profilePicture,fullName:h.fullName,username:h.username,blogname:h.blogName}}}catch{}}async function r(t){try{const n=t.map(async e=>{const p=V(j(L,"posts"),W("postTag","==",e),ne("postTime","desc")),f=await z(p);return Promise.all(f.docs.map(async h=>{var R;const S=h.data();await s(S);const I=m.parseFromString(d.value,"text/html");return I.body.querySelectorAll("img").forEach(X=>{X.remove()}),I.body.querySelectorAll("video").forEach(X=>{X.remove()}),(R=I.body.querySelector("h1"))==null||R.remove(),d.value=I.body.innerHTML,S.postContain=d.value,await l(S.posterId),S.posterDetails=P.value,P.value=null,q.value=!1,S}))}),c=(await Promise.all(n)).flat();x.value=c,x.value.length>0&&U(()=>{const e=document.getElementById("warningShow");e&&(e.style.display="none")})}catch{const i=document.querySelector("#ErrorShow span");i.style.display="flex",i.textContent="Something went wrong, check your internet connection"}}async function a(){const t=_.signedUser.following.theFollowings.length<10?_.signedUser.following.theFollowings.length:10,n=Math.floor(10/t);$.value=[];const i=_.signedUser.following.theFollowings.map(async c=>{try{const e=V(j(L,"posts"),W("posterId","==",c),ne("postTime","desc"),be(n)),p=await z(e);return Promise.all(p.docs.map(async f=>{var I;const h=f.data();await s(h);const S=m.parseFromString(d.value,"text/html");return S.body.querySelectorAll("img").forEach(R=>{R.remove()}),S.body.querySelectorAll("video").forEach(R=>{R.remove()}),(I=S.body.querySelector("h1"))==null||I.remove(),d.value=S.body.innerHTML,h.postContain=d.value,await l(h.posterId),h.posterDetails=P.value,P.value=null,q.value=!1,h}))}catch(e){throw console.log(e),new Error("Something went wrong")}});try{const e=(await Promise.all(i)).flat();$.value=e,$.value.length>10&&(B.value=10),U(()=>{const p=document.getElementById("warningShow");p&&(p.style.display="none")})}catch{const e=document.querySelector("#ErrorShow span");e.style.display="flex",e.textContent="Something went wrong, check your internet connection"}}return(t,n)=>{var i,c;return u(),g(O,null,[o("div",je,[o("button",{type:"button",onClick:n[0]||(n[0]=e=>H("interested_section")),class:T({active:y.value==="interested_section"})},"Interested",2),o("button",{type:"button",onClick:n[1]||(n[1]=e=>H("following_section")),class:T({active:y.value==="following_section"})},"Followings",2)]),((i=x.value)==null?void 0:i.length)>0&&y.value==="interested_section"?(u(),g("div",ze,[(u(!0),g(O,null,Z(x.value,(e,p)=>(u(),g("div",{key:p,class:"result-item"},[o("div",{class:"imgCon",onClick:C(f=>A(e.posterId),["prevent"]),style:ue({backgroundImage:`url(${e==null?void 0:e.posterDetails.img})`})},null,12,Qe),o("div",Ge,[o("div",Ye,[o("span",{onClick:C(f=>A(e.posterId),["prevent"])},D(e==null?void 0:e.posterDetails.blogname),9,Je),o("span",null,D(oe(e.postTime.seconds)),1)]),o("div",{innerHTML:e.postContain,id:"divContent",onClick:C(f=>N(e.postId),["prevent"])},null,8,Ke),Q(se,{post:e},null,8,["post"])])]))),128))])):((c=$.value)==null?void 0:c.length)>0&&y.value==="following_section"?(u(),g("div",Xe,[(u(!0),g(O,null,Z($.value,(e,p)=>(u(),g("div",{key:p,class:"result-item"},[o("img",{src:e.posterDetails.img,alt:e.posterDetails.username+"profile picture",class:"result-item-image",onClick:C(f=>A(e.posterId),["prevent"])},null,8,Ze),o("div",et,[o("div",tt,[o("span",{onClick:C(f=>A(e.posterId),["prevent"])},D(e.posterDetails.blogname),9,ot),o("span",null,D(oe(e.postTime.seconds)),1)]),o("div",{innerHTML:e.postContain,id:"divContent",onClick:C(f=>N(e.postId),["prevent"])},null,8,nt),Q(se,{post:e},null,8,["post"])])]))),128))])):pe("",!0),ke(o("div",st," You are not following any one yet. ",512),[[Pe,M(_).signedUser.following.theFollowings.length===0&&y.value==="following_section"]])],64)}}});const it=J(at,[["__scopeId","data-v-e2a904c3"]]),rt=v=>(ve("data-v-8df9cbd7"),v=v(),me(),v),ct={class:"feedDiv"},lt=rt(()=>o("div",{class:"lineContainer"},[o("div",{class:T({line:!0})}),o("div",{class:T({line:!0})})],-1)),dt=Y({__name:"FeedPage",setup(v){const d=G();return(m,b)=>{const k=he("RouterLink");return u(),g("div",ct,[M(d).asReader?(u(),ee(it,{key:0})):(u(),ee(We,{key:1})),Q(k,{to:"/write",draggable:""},{default:ge(()=>[lt]),_:1})])}}});const ut=J(dt,[["__scopeId","data-v-8df9cbd7"]]),K=v=>(ve("data-v-7d57d0d9"),v=v(),me(),v),pt={key:1,id:"landingPagecontainer"},ht={id:"section1"},gt=K(()=>o("section",{id:"img"},null,-1)),vt={id:"text"},mt=K(()=>o("h2",null,"Welcome to Chatter: A Haven for Text-Based Content",-1)),_t=K(()=>o("p",null,"Unleash the power of Words, Connect with Like-minded Readers.",-1)),yt=K(()=>o("button",null,"Get Started",-1)),ft=$e('<section id="section2" data-v-7d57d0d9><h2 data-v-7d57d0d9>About Chatter</h2><p data-v-7d57d0d9>Chatter is a multi-functional platform where authors and readers can have access to their own content. It aims to be a traditional bookworm&#39;s heaven and a blog to get access to more text based content. Our vision is to foster an inclusive and vibrant community where diversity is celebrated. We encourage open-mindedness and respect for all individuals, regardless of their backgrounds or beliefs. By promoting dialogue and understanding, we strive.</p></section><section id="section3" data-v-7d57d0d9><h2 data-v-7d57d0d9>Why you should join chatter</h2><p data-v-7d57d0d9>Our goal is to make writers and readers see our platform as their next heaven for blogging, ensuring ease in interactions, connecting with like-minded peers, have access to favorite content based on interests and able to communicate your great ideas with people. </p><section id="section3Parts" data-v-7d57d0d9><section data-v-7d57d0d9><img src="'+Le+'" data-v-7d57d0d9><h3 data-v-7d57d0d9>Analaytics</h3><p data-v-7d57d0d9>Analytics to track the number of views, likes and comment and also analyse the performance of your articles over a poeriod of time</p></section><section data-v-7d57d0d9><img src="'+Fe+'" alt="analysis" data-v-7d57d0d9><h3 data-v-7d57d0d9>Social interactions</h3><p data-v-7d57d0d9>Users on the platform can interact with posts they like, comment and engage in dicussions</p></section><section data-v-7d57d0d9><img src="'+qe+'" data-v-7d57d0d9><h3 data-v-7d57d0d9>Content creation</h3><p data-v-7d57d0d9>Write nice and appealing with our in-built markdown, a rich text editor</p></section></section></section><section id="section4" data-v-7d57d0d9><img src="'+Ee+'" alt="Adebola Muhydeen" data-v-7d57d0d9><section data-v-7d57d0d9><blockquote data-v-7d57d0d9><q data-v-7d57d0d9>Chatter has become an integral part of my online experience. As a user of this incredible blogging platform, I have discovered a vibrant community of individuals who are passionate about sharing their ideas and engaging in thoughtful dicussions.</q></blockquote><strong data-v-7d57d0d9>Adebola Muhydeen,</strong> <em data-v-7d57d0d9>Software developer at Apple</em></section></section>',3),wt=Y({__name:"LandingPage",setup(v){const d=G();return(m,b)=>{const k=he("RouterLink");return M(d).signedUser.isLogined?(u(),ee(ut,{key:0})):(u(),g("section",pt,[o("section",ht,[gt,o("section",vt,[mt,_t,Q(k,{to:"/login"},{default:ge(()=>[yt]),_:1})])]),ft]))}}});const xt=J(wt,[["__scopeId","data-v-7d57d0d9"]]);export{xt as default};