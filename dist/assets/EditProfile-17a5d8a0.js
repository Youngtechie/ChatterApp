import{d as A,u as M,r as n,q as D,a as L,c as S,e as F,f as T,g as e,w as E,h as B,m as l,A as r,C as k,E as j,p as O,n as G,_ as H}from"./index-0d83a52f.js";import{P as z,g as J,a as x}from"./index.esm2017-3589eea2.js";import{g as K,r as Q,u as W,a as X}from"./index.esm2017-f1785873.js";import{u as Y,a as Z}from"./useAuth.vue_vue_type_script_lang-6fe6b92b.js";import{u as ee}from"./useUserDetails.vue_vue_type_script_lang-8130a85e.js";import{S as te}from"./useSignOut.vue_vue_type_script_lang-21763193.js";import{_ as se}from"./useLoadingPage.vue_vue_type_style_index_0_lang-d974f102.js";const a=U=>(O("data-v-b51e8fb7"),U=U(),G(),U),oe={key:1},ae=["onClick"],ne=["title"],le={id:"themeImgContainer"},ie=["src"],de=["onSubmit"],ue={class:"addNewImage"},re=a(()=>e("label",{for:"inputImg",class:"custom-file-input",name:"kddjdjdj"},"Change Image",-1)),ce=["onChange"],me={class:"fullName"},pe={class:"section"},ve=a(()=>e("label",{for:"fullname"},"Fullname:",-1)),ge=a(()=>e("span",{class:"required-note"},"Required**",-1)),he={class:"username"},_e={class:"section"},fe=a(()=>e("label",{for:"username"},"Username:",-1)),be=a(()=>e("span",{class:"required-note"},"Required**",-1)),ye={class:"bio"},Ue=a(()=>e("label",{for:"bio"},"Bio:",-1)),we=a(()=>e("span",{class:"required-note"},"Minimum of 50 characters and maximum of 300 characters **",-1)),Be={class:"blogname section"},Ie=a(()=>e("label",{for:"blogname"},"Blog Name:",-1)),Ee={class:"interests"},qe={class:"section"},Se=a(()=>e("label",{for:"interests"},"Interests:",-1)),ke=a(()=>e("span",{class:"example-note"},"Example: food, travel, sport, programming",-1)),xe={class:"gender"},Ce={class:"radioGroup"},Re=a(()=>e("h3",null,"Gender:",-1)),Ne=a(()=>e("label",{for:"male2"},"Male",-1)),Ve=a(()=>e("label",{for:"female2"},"Female",-1)),Pe=a(()=>e("span",{class:"required-note"},"Required**",-1)),$e={class:"birthday"},Ae={class:"section"},Me=a(()=>e("label",{for:"birthday2"},"Birthday:",-1)),De=a(()=>e("span",{class:"required-note"},"Required**",-1)),Le={class:"Location"},Fe={class:"section"},Te=a(()=>e("label",{for:"country2"}," Country: ",-1)),je=a(()=>e("span",{class:"required-note"},"Required**",-1)),Oe={class:"ShowEmail"},Ge=a(()=>e("label",{for:"showEmail"},"Show my email address:",-1)),He=a(()=>e("button",{type:"submit",id:"updateBtn"},"Update",-1)),ze=A({__name:"EditProfile",setup(U){ee();const{app:q}=Y(),i=M(),o=Z(),C=z(q),R=K(q);function N(){i.go(-1)}const m=n(""),p=n(""),v=n(""),g=n(""),h=n(""),d=n(""),_=n(""),f=n(""),b=n(!1),y=n(null),w=n(null),I=n(!0);function V(){let u=document.getElementById("inputImg");y.value=u.files[0];let t=new FileReader;t.onload=function(){w.value.style.backgroundImage=`url(${t.result})`},t.readAsDataURL(y.value)}function P(){var t;const u=J(C,"users",`${o.signedUser.id}`);if((t=document.getElementById("updateBtn"))==null||t.setAttribute("disabled","true"),y.value!==null){const s=Q(R,`ChatterAppFiles/avatar/${o.signedUser.id}/${y.value.name}`);W(s,y.value).then(()=>{X(s).then(c=>{x(u,{profilePicture:c,bio:v.value,blogName:g.value,dateOfBirth:f.value,fullName:m.value,gender:d.value,interests:h.value.split(","),location:_.value,username:p.value,settings:{privacySettings:{showEmail:b.value}}})})}).then(()=>{i.push("/userProfile")}).catch(c=>{console.log(c)}).finally(()=>{var c;(c=document.getElementById("updateBtn"))==null||c.removeAttribute("disabled")})}else x(u,{bio:v.value,blogName:g.value,dateOfBirth:f.value,fullName:m.value,gender:d.value,interests:h.value.split(","),location:_.value,username:p.value,settings:{privacySettings:{showEmail:b.value}}}).then(()=>{i.push("/userProfile")}).catch(s=>{console.log(s)}).finally(()=>{var s;(s=document.getElementById("updateBtn"))==null||s.removeAttribute("disabled")})}D(()=>{w.value&&(w.value.style.backgroundImage=`url(${o.signedUser.profilePicture})`)});let $=setTimeout(()=>{m.value=o.signedUser.fullName,p.value=o.signedUser.username,v.value=o.signedUser.bio,g.value=o.signedUser.blogName,f.value=o.signedUser.dateOfBirth,h.value=o.signedUser.interests.join(","),d.value=o.signedUser.gender,_.value=o.signedUser.location,b.value=o.signedUser.settings.privacySettings.showEmail,o.signedUser.id===void 0&&o.authenticated===!1?i.push("/home"):o.authenticated===!0?o.signedUser.id===void 0&&o.signedUser.username===void 0?i.push({name:"NetworkError",query:{redirect:`${i.currentRoute.value.path}`}}):o.signedUser.id!==void 0&&o.signedUser.username===""?(console.log("User registration not finished... Logging out user....."),te(),o.authenticated=!1,i.push("/login")):I.value=!1:I.value=!1},5e3);return L(()=>{clearTimeout($);const u=document.getElementById("warningShow");u.style.display="none"}),(u,t)=>I.value?(S(),F(se,{key:0,"action-name":"Loading data ..."})):(S(),T("main",oe,[e("header",null,[e("button",{onClick:E(N,["prevent"])},"Back",8,ae),e("button",{title:B(o).themeDetails.title,id:"themeBtn",onClick:t[0]||(t[0]=(...s)=>B(o).changeTheme&&B(o).changeTheme(...s))},[e("div",le,[e("img",{src:B(o).themeDetails.img},null,8,ie)])],8,ne)]),e("form",{class:"registration-form",onSubmit:E(P,["prevent"])},[e("div",ue,[e("div",{ref_key:"imageShow",ref:w,class:"imageShow"},null,512),re,e("input",{type:"file",onChange:E(V,["prevent"]),id:"inputImg"},null,40,ce)]),e("div",me,[e("div",pe,[ve,l(e("input",{type:"text",id:"fullname",required:"",autocomplete:"","onUpdate:modelValue":t[1]||(t[1]=s=>m.value=s)},null,512),[[r,m.value]])]),ge]),e("div",he,[e("div",_e,[fe,l(e("input",{type:"text",id:"username",required:"",autocomplete:"username","onUpdate:modelValue":t[2]||(t[2]=s=>p.value=s)},null,512),[[r,p.value]])]),be]),e("div",ye,[e("div",null,[Ue,l(e("textarea",{id:"bio","onUpdate:modelValue":t[3]||(t[3]=s=>v.value=s),maxlength:"300",minlength:"50"},null,512),[[r,v.value]])]),we]),e("div",Be,[Ie,l(e("input",{type:"text",id:"blogname","onUpdate:modelValue":t[4]||(t[4]=s=>g.value=s)},null,512),[[r,g.value]])]),e("div",Ee,[e("div",qe,[Se,l(e("input",{type:"text",id:"interests",placeholder:"Posts tags separate with a comma","onUpdate:modelValue":t[5]||(t[5]=s=>h.value=s)},null,512),[[r,h.value]])]),ke]),e("div",xe,[e("div",Ce,[Re,l(e("input",{type:"radio",value:"Male",name:"gender",id:"male2",required:"","onUpdate:modelValue":t[6]||(t[6]=s=>d.value=s)},null,512),[[k,d.value]]),Ne,l(e("input",{type:"radio",value:"Female",name:"gender",id:"female2",required:"","onUpdate:modelValue":t[7]||(t[7]=s=>d.value=s)},null,512),[[k,d.value]]),Ve]),Pe]),e("section",$e,[e("div",Ae,[Me,l(e("input",{type:"date",id:"birthday2",required:"","onUpdate:modelValue":t[8]||(t[8]=s=>f.value=s)},null,512),[[r,f.value]])]),De]),e("section",Le,[e("div",Fe,[Te,l(e("input",{type:"text",id:"country2",placeholder:"Country",required:"",autocomplete:"country-name","onUpdate:modelValue":t[9]||(t[9]=s=>_.value=s)},null,512),[[r,_.value]])]),je]),e("section",Oe,[Ge,l(e("input",{type:"checkbox",id:"showEmail","onUpdate:modelValue":t[10]||(t[10]=s=>b.value=s)},null,512),[[j,b.value]])]),He],40,de)]))}});const et=H(ze,[["__scopeId","data-v-b51e8fb7"]]);export{et as default};
