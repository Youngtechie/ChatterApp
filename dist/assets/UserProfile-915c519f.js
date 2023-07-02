import{d as O,u as j,r as k,o as G,x as Q,a as J,b as $,c as u,e as K,f as m,g as e,w as C,h as s,n as W,t as a,i as h,j as f,z as P,l as c,k as S,F as X,y as Y,p as Z,q as ee,_ as te}from"./index-18dd88e0.js";import{a as se,u as oe}from"./useAuth.vue_vue_type_script_lang-555f5ace.js";import{_ as ne}from"./useLoadingPage.vue_vue_type_style_index_0_lang-bd0c1464.js";import{g as ie,r as ae,a as le}from"./index.esm2017-df89f729.js";import{P as re,R as ce,_ as de,b as ue,d as pe,g as me,c as _e}from"./index.esm2017-50856384.js";import{u as he}from"./useUserDetails.vue_vue_type_script_lang-86cea6c9.js";import{S as ge}from"./useSignOut.vue_vue_type_script_lang-83cfd77c.js";import{c as fe}from"./useCalculateTime.vue_vue_type_script_lang-ca052a8e.js";import{u as ve}from"./useDetailButtons-2387e954.js";import{a as ye}from"./axios-4a70c6fc.js";import{g as we}from"./useUserViewProfile.vue_vue_type_script_lang-135f4807.js";import"./useLikeButton-379588bc.js";const r=w=>(Z("data-v-c5002c6d"),w=w(),ee(),w),Ue={key:1},be=["onClick"],ke=["title"],Ce={id:"themeImgContainer"},Pe=["src"],Se={class:"body"},De={class:"imageCon"},Ie={class:"sectionFoImage"},Ne={class:"follow"},Te=r(()=>e("p",null,"||",-1)),Le={class:"btns"},Be=r(()=>e("button",null,"Edit Profile",-1)),Ee={class:"readerSec"},xe={class:"btnSection"},Re=r(()=>e("span",null,"Full Name:",-1)),$e=r(()=>e("span",null,"User Name:",-1)),Fe=r(()=>e("span",null,"Blog Name:",-1)),Me={key:0},qe=r(()=>e("span",null,"Biography:",-1)),He={key:1},Ve=r(()=>e("span",null,"Email:",-1)),ze=r(()=>e("span",null,"Location:",-1)),Ae=r(()=>e("span",null,"Birthday:",-1)),Oe=r(()=>e("span",null,"Gender:",-1)),je={key:2},Ge=r(()=>e("span",null,"Interests:",-1)),Qe={key:0,class:"loading"},Je={key:1},Ke={class:"type"},We={class:"result-item"},Xe=["src","alt","onClick"],Ye={class:"result-item-other"},Ze={class:"result-item-header"},et=["onClick"],tt=["innerHTML","onClick"],st={id:"navigators"},ot=r(()=>e("button",null,"Home",-1)),nt=r(()=>e("button",null,"Search",-1)),it=r(()=>e("button",{id:"notification-button"},[c("Notification"),e("span",{class:"dot"})],-1)),at=O({__name:"UserProfile",setup(w){const _=j(),I=k(!0),t=se();he(),G(()=>{Q(()=>{const o=document.getElementById("warningShow");o.style.display="none"}),we(t.userId).then(()=>{I.value=!1})});const U=k(),{app:N}=oe(),F=ie(N),T=re(N),L=new DOMParser,v=k(""),B=k(!0);async function M(o){v.value="";const l=ae(F,o.postContain),p=await le(l).catch(i=>{console.log(i)});await ye.post("/postContent",{contentUrl:p}).then(i=>{const n=L.parseFromString(i.data,"text/html");v.value=n.body.innerHTML}).catch(i=>{console.log(i)})}async function q(o){U.value=null;try{const l=me(T,"users",o),p=await _e(l);if(p.data()!==void 0){const{fullName:i,profilePicture:n,username:y,blogName:g}=p.data(),d={profilePicture:n,posterID:o,fullName:i,username:y,blogName:g};U.value={id:o,img:d.profilePicture,fullName:d.fullName,username:d.username,blogname:d.blogName}}}catch{}}async function H(o){if(o.length>0)try{const l=o.map(async i=>{const n=ce(de(T,"posts"),ue("postId","==",i.details.postid)),y=await pe(n);return Promise.all(y.docs.map(async g=>{var R;const d=g.data();await M(d);const b=L.parseFromString(v.value,"text/html");return b.body.querySelectorAll("img").forEach(D=>{D.remove()}),b.body.querySelectorAll("video").forEach(D=>{D.remove()}),(R=b.body.querySelector("h1"))==null||R.remove(),v.value=b.body.innerHTML,d.postContain=v.value,await q(d.posterId),d.posterDetails=U.value,U.value=null,{type:i.type,postDetails:d}}))}),p=await Promise.all(l);t.viwedProfile.interactions=p.flat(),B.value=!1}catch{}else return}function V(){_.go(-1)}function E(o){t.section=o,o==="interaction"&&t.userId!==""&&t.userId!==void 0&&H(t.viwedProfile.interactions)}function z(o){_.push(`/post/${o}`)}function x(o){if(o===t.signedUser.id)return _.push("/userProfile");_.push(`/chatterUser/${o}`)}let A=setTimeout(()=>{t.signedUser.id===void 0&&t.authenticated===!1?_.push("/home"):t.authenticated===!0&&(t.signedUser.id===void 0&&t.signedUser.username===void 0?_.push({name:"NetworkError",query:{redirect:`${_.currentRoute.value.path}`}}):t.signedUser.id!==void 0&&t.signedUser.username===""&&(console.log("User registration not finished... Logging out user....."),ge(),t.authenticated=!1,_.push("/login")))},5e3);return J(()=>{clearTimeout(A);const o=document.getElementById("warningShow");o.style.display="none"}),(o,l)=>{const p=$("P"),i=$("RouterLink");return I.value?(u(),K(ne,{key:0,"action-name":"Loading profile..."})):(u(),m("main",Ue,[e("header",null,[e("button",{onClick:C(V,["prevent"])},"Back",8,be),e("button",{title:s(t).themeDetails.title,id:"themeBtn",onClick:l[0]||(l[0]=(...n)=>s(t).changeTheme&&s(t).changeTheme(...n))},[e("div",Ce,[e("img",{src:s(t).themeDetails.img},null,8,Pe)])],8,ke)]),e("div",Se,[e("div",De,[e("div",{class:"imgCon",style:W({backgroundImage:`url(${s(t).viwedProfile.profilePicture})`})},null,4)]),e("section",Ie,[e("h3",null,a(s(t).signedUser.fullName),1),e("div",Ne,[h(p,null,{default:f(()=>[c(a(s(t).signedUser.followers.total)+" Followers",1)]),_:1}),Te,h(p,null,{default:f(()=>[c(a(s(t).signedUser.following.total)+" Following",1)]),_:1})])]),e("div",Le,[h(i,{to:{name:"EditProfile"}},{default:f(()=>[Be]),_:1})]),e("div",Ee,[e("div",xe,[e("button",{onClick:l[1]||(l[1]=n=>E("personal")),class:P({active:s(t).section==="personal"})},"Personal",2),e("button",{onClick:l[2]||(l[2]=n=>E("interaction")),class:P({active:s(t).section==="interaction"})},"Interactions",2)]),e("div",{class:P({show:s(t).section==="personal",none:s(t).section!=="personal",personal:!0})},[e("p",null,[Re,c(" "+a(s(t).signedUser.fullName),1)]),e("p",null,[$e,c(" "+a(s(t).signedUser.username),1)]),e("p",null,[Fe,c(" "+a(s(t).signedUser.blogName),1)]),s(t).signedUser.bio.length>0?(u(),m("p",Me,[qe,c(" "+a(s(t).signedUser.bio),1)])):S("",!0),s(t).signedUser.settings.privacySettings.showEmail?(u(),m("p",He,[Ve,c(" "+a(s(t).signedUser.email),1)])):S("",!0),e("p",null,[ze,c(" "+a(s(t).signedUser.location),1)]),e("p",null,[Ae,c(" "+a(s(t).signedUser.dateOfBirth),1)]),e("p",null,[Oe,c(" "+a(s(t).signedUser.gender),1)]),s(t).signedUser.interests.length>0?(u(),m("p",je,[Ge,c(" "+a(s(t).signedUser.interests.join(",")),1)])):S("",!0)],2),s(t).section==="interaction"?(u(),m("div",{key:0,class:P({show:s(t).section==="interaction",none:s(t).section!=="interaction",interaction:!0})},[B.value?(u(),m("p",Qe,"Loading...")):(u(),m("div",Je,[(u(!0),m(X,null,Y(s(t).viwedProfile.interactions,(n,y)=>(u(),m("div",{key:y},[e("div",Ke,a(n.type),1),e("div",We,[e("img",{src:n.postDetails.posterDetails.img,alt:n.postDetails.posterDetails.username+"profile picture",class:"result-item-image",onClick:C(g=>x(n.postDetails.posterId),["prevent"])},null,8,Xe),e("div",Ye,[e("div",Ze,[e("span",{onClick:C(g=>x(n.postDetails.posterId),["prevent"])},a(s(t).signedUser.blogName),9,et),e("span",null,a(fe(n.postDetails.postTime.seconds)),1)]),e("div",{innerHTML:n.postDetails.postContain,id:"divContent",onClick:C(g=>z(n.postDetails.postId),["prevent"])},null,8,tt),h(ve,{post:n.postDetails},null,8,["post"])])])]))),128))]))],2)):S("",!0)]),e("section",st,[h(i,{to:"/home"},{default:f(()=>[ot]),_:1}),h(i,{to:"/search"},{default:f(()=>[nt]),_:1}),h(i,{to:"/notification"},{default:f(()=>[it]),_:1})])])]))}}});const wt=te(at,[["__scopeId","data-v-c5002c6d"]]);export{wt as default};
