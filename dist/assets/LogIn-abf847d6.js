import{R as u,r as x,A as P,T as C,m as o,a as U,j as s,S as L,F as S,b,c as _}from"./index-13de64b0.js";import{s as T,g as v,f as k,a as y}from"./Auth-91c0aa9d.js";import{F as c}from"./index-6d88a5f6.js";import"./row-adcb8862.js";class D extends u.Component{constructor(e,p,d){super(e),e&&(this.state={uid:e!=null&&e.uid?e.uid:p,name:e!=null&&e.name?e.name:"",lastName:e!=null&&e.lastName?e.lastName:"",email:e!=null&&e.email?e.email:"",rol:e!=null&&e.rol?e.rol:"Usuario",phone:e!=null&&e.phone?e.phone:"",address:e!=null&&e.address?e.address:"",firstTime:e!=null&&e.firstTime?e.firstTime:!0,providerId:d||(e.providerId?e.providerId:"Email"),photoURL:e!=null&&e.photoURL?e.photoURL:"",languagePreference:e!=null&&e.languagePreference?e.languagePreference:"SWITCH_TO_SPANISH",themePreference:e!=null&&e.themePreference?e.Preference:"LIGHT_MODE"})}}const G=()=>{const[g,e]=x.useState(!1),[p,d]=x.useState(!0),[,i]=x.useContext(P),[j,r]=x.useContext(C),{generalDictionary:n}=j,t=(a,m)=>{const O=new D(a,a.uid,m);U.getUserDetail(O.state).then(l=>{o.success(`Bienvenido ${l.rol} ${l.name?l.name:l.email}`,.5),sessionStorage.setItem("storage",JSON.stringify({email:l.email,uid:l.uid,token:l.accessToken})),i({type:"LOGIN_USER",payload:l}),r({type:l.themePreference}),e(!1)}).catch(l=>{h(l.message),e(!1),console.error("error",l)})},N=a=>{sessionStorage.removeItem("storage"),e(!0),T(a.email,a.password).then(m=>{t(m.user,"Email")}).catch(m=>{h(m.message),console.error(m.message),e(!1)})},I=()=>{e(!0),v().then(a=>{t(a.user,a.providerId)}).catch(a=>{h(a.message),console.error(a.message),e(!1)})},E=()=>{e(!0),k().then(a=>{t(a.user,a.providerId)}).catch(a=>{h(a.message),console.error(a.message),e(!1)})},R=()=>{e(!0),y().then(a=>{t(a.user,a.providerId)}).catch(a=>{h(a.message),console.error(a.message),e(!1)})},h=a=>{a==="Firebase: Error (auth/email-already-in-use)."?o.error(n.EMAIL_NOT_AVAILABLE,.5):a==="Firebase: Error (auth/account-exists-with-different-credential)."?o.error(n.EMAIL_REGISTER_WITH_DIFFERENT_METHOD,.5):a==="Firebase: Error (auth/popup-closed-by-user)."?o.error(n.CLOSED_POPUP,.5):a.message==="Firebase: Error (auth/user-not-found)."?o.error(n.USER_OR_PASSWORD_INCORRECT,.5):a.message==="Firebase: Error (auth/wrong-password)."?o.error(n.PASSWORD_INCORRECT,.5):o.error(n.LOGIN_ERROR,.5)},f=[{required:!0,min:8,type:"email",message:n.VALIDATE_EMAIL}],A=[{required:!0,min:5,type:"password",message:n.VALIDATE_PASSWORD}],F=[{required:!0,min:3,message:n.VALIDATE_NAME}];return{emailRules:f,passwordRules:A,nameRules:F,isLoading:g,generalDictionary:n,toggle:p,setToggle:d,signInHandler:N,signInGoogle:I,sigInFacebook:E,sigInGitHub:R}};const z=()=>{const{emailRules:g,passwordRules:e,nameRules:p,isLoading:d,generalDictionary:i,toggle:j,setToggle:r,signInHandler:n,signInGoogle:t,sigInFacebook:N,sigInGitHub:I}=G();return s.jsx("div",{className:"center-webkit",children:s.jsx(L,{tip:i.SIGN_IN,spinning:d,size:"large",children:s.jsx("div",{className:"login-page",children:s.jsxs("div",{className:j?"container-login":"container-login right-panel-active",children:[s.jsx("div",{className:"sign-up",children:s.jsxs(c,{onFinish:()=>{},initialValues:{email:"",password:"",name:""},children:[s.jsx("h1",{className:"h1-login login-title",children:i.SIGN_UP}),s.jsxs("div",{className:"social-container",children:[s.jsx("span",{className:"span-login social",onClick:N,children:s.jsx(S,{size:"20px"})}),s.jsx("span",{className:"span-login social",onClick:t,children:s.jsx(b,{size:"20px"})}),s.jsx("span",{className:"span-login social",onClick:I,children:s.jsx(_,{size:"20px"})})]}),s.jsxs("p",{className:"p-login",children:[" ",i.OR_USE_EMAIL]}),s.jsx(c.Item,{name:"name",rules:p,hasFeedback:!0,children:s.jsx("input",{className:"input-login",placeholder:i.NAME,id:"signUpName","data-testid":"signUpName"})}),s.jsx(c.Item,{name:"email",rules:g,hasFeedback:!0,children:s.jsx("input",{className:"input-login",placeholder:i.EMAIL,id:"signUpEmail","data-testid":"signUpEmail"})}),s.jsx(c.Item,{name:"password",rules:e,hasFeedback:!0,children:s.jsx("input",{className:"input-login",type:"password",placeholder:i.PASSWORD,id:"signUpPassword","data-testid":"signUpPassword"})}),s.jsx("button",{className:"button-login",type:"submit","data-testid":"signUpButton",children:i.SIGN_UP}),s.jsx("button",{className:"button-login",id:"signInMobile",type:"button",onClick:()=>r(!0),children:i.SIGN_IN})]})}),s.jsx("div",{className:"sign-in",children:s.jsxs(c,{onFinish:E=>n(E),initialValues:{email:"",password:""},children:[s.jsx("h1",{className:"h1-login",children:i.SIGN_IN}),s.jsxs("div",{className:"social-container",children:[s.jsx("span",{className:"span-login social",onClick:N,children:s.jsx(S,{size:"20px"})}),s.jsx("span",{className:"span-login social",onClick:t,children:s.jsx(b,{size:"20px"})}),s.jsx("span",{className:"span-login social",onClick:I,children:s.jsx(_,{size:"20px"})})]}),s.jsx("p",{className:"p-login",children:i.USE_YOUR_ACCOUNT}),s.jsx(c.Item,{name:"email",rules:g,hasFeedback:!0,children:s.jsx("input",{className:"input-login",placeholder:i.EMAIL,id:"signInEmail","data-testid":"signInEmail"})}),s.jsx(c.Item,{name:"password",rules:e,hasFeedback:!0,children:s.jsx("input",{className:"input-login",type:"password",placeholder:i.PASSWORD,id:"signInPassword","data-testid":"signInPassword"})}),s.jsx("a",{className:"a-login",href:"/",children:i.FORGOT_PASSWORD}),s.jsx("button",{className:"button-login",type:"submit","data-testid":"signInButton",children:i.SIGN_IN}),s.jsx("button",{className:"button-login",id:"signUpMobile",type:"button",onClick:()=>r(!1),children:i.SIGN_UP})]})}),s.jsx("div",{className:"overlay-container",children:s.jsxs("div",{className:"overlay",children:[s.jsxs("div",{className:"overlay-left",children:[s.jsx("h1",{className:"h1-login",children:i.WELCOME_BACK}),s.jsx("p",{className:"p-login",children:i.TO_KEEP_CONNECTED}),s.jsx("button",{className:"button-login",id:"signIn",onClick:()=>r(!0),children:i.SIGN_IN})]}),s.jsxs("div",{className:"overlay-right",children:[s.jsx("h1",{className:"h1-login",children:i.HELLO_FRIEND}),s.jsx("p",{className:"p-login",children:i.ENTER_YOUR_PERSONAL}),s.jsx("button",{className:"button-login",id:"signUp",onClick:()=>r(!1),children:i.SIGN_UP})]})]})})]})})})})};export{z as default};