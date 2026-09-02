"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30],{6956:(e,n,o)=>{o.d(n,{A:()=>r});var t=o(12115);let r=t.forwardRef(function(e,n){let{title:o,titleId:r,...l}=e;return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":r},l),o?t.createElement("title",{id:r},o):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))})},18307:(e,n,o)=>{o.d(n,{C:()=>m});var t=o(95155),r=o(12115),l=o(20031),a=o(76928),i=o(13213),s=o(63771),c=o(13559),d=o(98218),u=o(78320);let h=({value:e,onChange:n})=>(0,t.jsx)("select",{value:e,onChange:n,children:a.QN.map(e=>(0,t.jsxs)("option",{value:e.code,children:[e.code," +",e.callCode]},e.code))}),m=(0,r.forwardRef)((e,n)=>{let o=(0,s.u)(),[l,m]=(0,r.useState)(!1),{accountType:f}=(0,c.h)(),[y,j]=(0,r.useState)(""),[g,v]=(0,r.useState)(e.defaultCountry??o?.intl.defaultCountry??"US"),w=(0,a.Q7)(y,g),b=(0,a.qi)(g),C=(0,a.jZ)(g),k=(0,i.K)(g),S=!w,[M,E]=(0,r.useState)(!1),F=k.length,P=n=>{let o=n.target.value;v(o),j(""),e.onChange&&e.onChange({rawPhoneNumber:y,qualifiedPhoneNumber:(0,a.n4)(y,o),countryCode:o,isValid:(0,a.Q7)(y,g)})},R=(n,o)=>{try{let t=n.replace(/\D/g,"")===y.replace(/\D/g,"")?n:b.input(n);j(t),e.onChange&&e.onChange({rawPhoneNumber:t,qualifiedPhoneNumber:(0,a.n4)(n,o),countryCode:o,isValid:(0,a.Q7)(n,o)})}catch(e){console.error("Error processing phone number:",e)}},T=()=>{E(!0);let n=(0,a.n4)(y,g);e.onSubmit({rawPhoneNumber:y,qualifiedPhoneNumber:n,countryCode:g,isValid:(0,a.Q7)(y,g)}).finally(()=>E(!1))};return(0,r.useEffect)(()=>{if(e.defaultValue){let n=(0,a.oj)(e.defaultValue);b.reset(),P({target:{value:n.countryCode}}),R(n.phone,n.countryCode)}},[e.defaultValue]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{children:(0,t.jsxs)(p,{$callingCodeLength:F,$stacked:e.stacked,children:[(0,t.jsx)(h,{value:g,onChange:P}),(0,t.jsx)("input",{ref:n,id:"phone-number-input",className:"login-method-button",type:"tel",placeholder:C,onFocus:()=>m(!0),onChange:e=>{R(e.target.value,g)},onKeyUp:e=>{"Enter"===e.key&&T()},value:y,autoComplete:"tel"}),"phone"!==f||l||e.hideRecent?e.stacked||e.noIncludeSubmitButton?(0,t.jsx)("span",{}):(0,t.jsx)(d.E,{isSubmitting:M,onClick:T,disabled:S,children:"Submit"}):(0,t.jsx)(u.C,{color:"gray",children:"Recent"})]})}),e.stacked&&!e.noIncludeSubmitButton?(0,t.jsx)(d.P,{loading:M,loadingText:null,onClick:T,disabled:S,children:"Submit"}):null]})}),x=l.I4.div`
  width: 100%;
`,p=l.I4.label`
  --country-code-dropdown-width: calc(54px + calc(12 * ${e=>e.$callingCodeLength}px));
  --phone-input-extra-padding-left: calc(12px + calc(3 * ${e=>e.$callingCodeLength}px));
  display: block;
  position: relative;
  width: 100%;

  /* Tablet and Up */
  @media (min-width: 441px) {
    --country-code-dropdown-width: calc(52px + calc(10 * ${e=>e.$callingCodeLength}px));
  }

  && > select {
    font-size: 16px;
    height: 24px;
    position: absolute;
    margin: 13px calc(var(--country-code-dropdown-width) / 4);
    line-height: 24px;
    width: var(--country-code-dropdown-width);
    background-color: var(--privy-color-background);
    background-size: auto;
    background-position-x: right;
    cursor: pointer;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      width: var(--country-code-dropdown-width);
    }

    :focus {
      outline: none;
      box-shadow: none;
    }
  }

  && > input {
    font-size: 16px;
    line-height: 24px;
    color: var(--privy-color-foreground);

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    width: calc(100% - var(--country-code-dropdown-width));

    padding: 12px 88px 12px
      calc(var(--country-code-dropdown-width) + var(--phone-input-extra-padding-left));
    padding-right: ${e=>e.$stacked?"16px":"88px"};
    flex-grow: 1;
    background: var(--privy-color-background);
    border: 1px solid var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-md);
    width: 100%;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }

    :autofill,
    :-webkit-autofill {
      background: var(--privy-color-background);
    }

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      padding-right: 78px;
    }
  }

  && > :last-child {
    right: 16px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > button:last-child {
    right: 0px;
    line-height: 24px;
    padding: 13px 17px;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }
  }

  && > input::placeholder {
    color: var(--privy-color-foreground-3);
  }
`},50030:(e,n,o)=>{o.r(n),o.d(n,{MfaEnrollmentFlowScreen:()=>S,default:()=>S});var t=o(95155),r=o(8443),l=o(24287),a=o(12115);let i=a.forwardRef(function(e,n){let{title:o,titleId:t,...r}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},r),o?a.createElement("title",{id:t},o):null,a.createElement("path",{fillRule:"evenodd",d:"M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",clipRule:"evenodd"}))}),s=a.forwardRef(function(e,n){let{title:o,titleId:t,...r}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},r),o?a.createElement("title",{id:t},o):null,a.createElement("path",{fillRule:"evenodd",d:"M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z",clipRule:"evenodd"}))});var c=o(98218),d=o(72658),u=o(80596),h=o(63771),m=o(43425),x=o(21145),p=o(90154),f=o(28317),y=o(22483),j=o(6956),g=o(49852),v=o(76928),w=o(18307),b=o(87123),C=o(49775);o(50205),o(68463),o(92253),o(14338),o(52769);let k=({appName:e,onComplete:n,onReset:o,onClose:r})=>{let[l,i]=(0,a.useState)(""),[s,d]=(0,a.useState)(!1),[m,p]=(0,a.useState)(null),[y,k]=(0,a.useState)("enroll"),{initEnrollmentWithSms:S,submitEnrollmentWithSms:M}=(0,f.h)(),{data:E}=(0,x.u)(),F=(0,h.u)();function P(){E?.mfaEnrollmentFlow?.onSuccess(),n()}return m?(0,t.jsx)(C.ErrorScreenView,{allowlistConfig:F.allowlistConfig,error:m,onBack:()=>p(null),onRetry:()=>p(null)}):(0,t.jsxs)(t.Fragment,"enroll"===y?{children:[(0,t.jsx)(c.M,{backFn:o,onClose:r},"header"),(0,t.jsx)(b.I,{style:{marginBottom:"1.5rem"},children:(0,t.jsx)(g.A,{})}),(0,t.jsx)(b.T,{children:"Set up SMS verification"}),(0,t.jsxs)(b.S,{children:["We'll text a verification code to this mobile device whenever you use your ",e," ","wallet."]}),(0,t.jsxs)(b.C,{children:[(0,t.jsx)(w.C,{onSubmit:async function({qualifiedPhoneNumber:e}){try{await S({phoneNumber:e}),i(e),k("verify")}catch(e){p(e)}},hideRecent:!0}),(0,t.jsxs)(b.c,{children:["By providing your mobile number, you agree to receive text messages from ",F?.name,". Some carrier charges may apply"]})]}),(0,t.jsx)(u.M,{})]}:s?{children:[(0,t.jsx)(c.M,{onClose:P},"header"),(0,t.jsx)(b.I,{style:{marginBottom:"1.5rem"},children:(0,t.jsx)(j.A,{})}),(0,t.jsx)(b.T,{children:"SMS verification added"}),(0,t.jsxs)(b.S,{children:["From now on, you'll enter the verification code sent to your mobile device whenever you use your ",e," wallet."]}),(0,t.jsx)(b.B,{children:(0,t.jsx)(c.P,{onClick:P,children:"Done"})}),(0,t.jsx)(u.M,{})]}:{children:[(0,t.jsx)(c.M,{backFn:function(){"verify"===y?k("enroll"):o()},onClose:r},"header"),(0,t.jsx)(b.I,{style:{marginBottom:"1.5rem"},children:(0,t.jsx)(g.A,{})}),(0,t.jsx)(b.T,{children:"Enter enrollment code"}),(0,t.jsxs)(b.C,{children:[(0,t.jsx)(b.N,{onChange:async function(e){try{if(!e)return;await M({phoneNumber:l,mfaCode:e}),d(!0)}catch(e){if((0,f.i)(e))throw Error("You have exceeded the maximum number of attempts. Please close this window and try again in 10 seconds.");if((0,f.d)(e))throw Error("The code you entered is not valid");if((0,f.f)(e))throw Error("You have exceeded the time limit for code entry. Please try again in 30 seconds.");throw(0,f.j)(e)?Error("Verification canceled"):Error("Unknown error")}}}),(0,t.jsxs)(b.S,{children:["To continue, enter the 6-digit code sent to ",(0,t.jsx)("strong",{children:(0,v.Ds)(l)})]})]}),(0,t.jsx)(u.M,{})]})},S={component:()=>{let{user:e,enrollInMfa:n,ready:o}=(0,p.u)(),[j,g]=(0,a.useState)(null),{unenrollWithSms:v,unenrollWithTotp:w,unenrollWithPasskey:C,submitEnrollmentWithTotp:S,initEnrollmentWithPasskey:M,submitEnrollmentWithPasskey:E,initEnrollmentWithTotp:F}=(0,f.h)(),{data:P,onUserCloseViaDialogOrKeybindRef:R}=(0,x.u)(),T=(0,h.u)(),{closePrivyModal:A}=(0,m.u)(),{promptMfa:B}=(0,f.u)(),[N,I]=(0,a.useState)(!1),[L,U]=(0,a.useState)(null),[W,$]=(0,a.useState)(null),V=()=>{A({shouldCallAuthOnSuccess:!0}),n(!1),setTimeout(()=>{g(null),U(null)},500)},[Z,O]=(0,a.useState)(!1),[q,z]=(0,a.useState)();R.current=V;let D=e?.mfaMethods.includes("sms"),Q=!!e?.phone,H=e?.mfaMethods.includes("totp"),_=e?.mfaMethods.includes("passkey"),K=D||H||_,Y=e?.linkedAccounts.filter(e=>"passkey"===e.type).map(e=>e.credentialId)??[];function G(){g(null),U(null)}async function J(e=Y){O(!0);try{return await M(),await E({credentialIds:e},{removeForLogin:P?.mfaEnrollmentFlow?.shouldUnlinkOnUnenrollMfa}),P?.mfaEnrollmentFlow?.onSuccess(),V()}catch(e){z(e)}finally{O(!1)}}if((0,a.useEffect)(()=>{K&&I(!0)},[K]),!o||!e||!T)return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.M,{onClose:V},"header"),(0,t.jsx)(b.A,{children:(0,t.jsx)(y.M,{})}),(0,t.jsx)(b.C,{children:(0,t.jsx)(d.L,{})}),(0,t.jsx)(u.M,{})]});if("sms"===j)return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.M,{backFn:G,onClose:V},"header"),(0,t.jsx)(b.I,{style:{marginBottom:"1.5rem"},children:(0,t.jsx)(r.A,{})}),(0,t.jsx)(b.T,{children:"Remove SMS verification?"}),(0,t.jsxs)(b.S,{children:["MFA adds an extra layer of security to your ",T?.name," account. Make sure you have other methods to secure your account."]}),(0,t.jsx)(b.B,{children:(0,t.jsx)(c.P,{$warn:!0,onClick:async function(){g(null);try{await v()}catch(e){g(null)}},children:"Remove"})}),(0,t.jsx)(u.M,{})]});if("totp"===j)return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.M,{backFn:G,onClose:V},"header"),(0,t.jsx)(b.I,{style:{marginBottom:"1.5rem"},children:(0,t.jsx)(r.A,{})}),(0,t.jsx)(b.T,{children:"Remove authenticator app verification?"}),(0,t.jsxs)(b.S,{children:["MFA adds an extra layer of security to your ",T?.name," account. Make sure you have other methods to secure your account."]}),(0,t.jsx)(b.B,{children:(0,t.jsx)(c.P,{$warn:!0,onClick:async function(){g(null);try{await w()}catch(e){g(null)}},children:"Remove"})}),(0,t.jsx)(u.M,{})]});if("passkey"===j){let e=P?.mfaEnrollmentFlow?.shouldUnlinkOnUnenrollMfa??!0;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.M,{backFn:G,onClose:V},"header"),(0,t.jsx)(b.I,{style:{marginBottom:"1.5rem"},children:(0,t.jsx)(r.A,{})}),(0,t.jsx)(b.T,{children:"Are you sure you want to remove this passkey?"}),(0,t.jsx)(b.S,{children:e?"Removing your passkey will remove as both a verification method and a login method.":"Removing your passkey will remove as a verification method."}),(0,t.jsx)(b.B,{children:(0,t.jsx)(c.P,{$warn:!0,onClick:async function(){g(null);try{await C({removeForLogin:P?.mfaEnrollmentFlow?.shouldUnlinkOnUnenrollMfa})}catch(e){g(null)}},children:"Remove"})}),(0,t.jsx)(u.M,{})]})}if(0===P.mfaEnrollmentFlow.mfaMethods.length&&!K)return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.M,{onClose:V},"header"),(0,t.jsx)(b.I,{style:{marginBottom:"1.5rem"},children:(0,t.jsx)(l.A,{})}),(0,t.jsx)(b.T,{children:"Add more security"}),(0,t.jsxs)(b.S,{children:[T?.name," does not have any verification methods enabled."]}),(0,t.jsx)(b.B,{children:(0,t.jsx)(c.P,{onClick:V,children:"Close"})}),(0,t.jsx)(u.M,{})]});let X=!K&&!N;return X?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.M,{onClose:V},"header"),(0,t.jsx)(b.I,{style:{marginBottom:"1.5rem"},children:(0,t.jsx)(l.A,{})}),(0,t.jsx)(b.T,{children:"Transaction Protection"}),(0,t.jsx)(b.S,{children:"Set up transaction protection to add an extra layer of security to your account"}),(0,t.jsxs)(b.L,{children:[(0,t.jsxs)(b.a,{children:[(0,t.jsx)(b.b,{children:(0,t.jsx)(i,{})}),"Enable 2-Step verification for your ",T?.name," wallet."]}),(0,t.jsxs)(b.a,{children:[(0,t.jsx)(b.b,{children:(0,t.jsx)(s,{})}),"You'll be prompted to authenticate to complete transactions."]})]}),(0,t.jsxs)(b.B,{children:[(0,t.jsx)(c.P,{onClick:()=>I(!0),children:"Continue"}),(0,t.jsx)(c.S,{onClick:V,children:"Not now"})]}),(0,t.jsx)(u.M,{})]}):"sms"===L?(0,t.jsx)(k,{appName:T?.name||"Privy",onComplete:V,onReset:G,onClose:V}):"totp"===L&&W?(0,t.jsx)(y.E,{onClose:V,onReset:G,submitEnrollmentWithTotp:({mfaCode:e})=>(async function(e){try{return z(void 0),await S({mfaCode:e}),P?.mfaEnrollmentFlow?.onSuccess(),V()}catch(e){z(e)}finally{g(null)}})(e),totpInfo:{...W,appName:T?.name||"Privy"}}):"passkey"===L?(0,t.jsx)(y.a,{onReset:G,onClose:V,submitEnrollmentWithPasskey:J}):(0,t.jsx)(y.b,{showIntro:X,userMfaMethods:e.mfaMethods,appMfaMethods:T.mfa.methods,userHasAuthSms:Q,backFn:function(){I(!1)},handleSelectMethod:async function(e){try{await B()}catch(e){return void z(e)}return"totp"===e?(U(e),$(null),void F().then(e=>{$(e)}).catch(()=>{$(null),G()})):"passkey"===e&&1===Y.length?await J():void U(e)},isTotpLoading:"totp"===L&&!W,isPasskeyLoading:Z,error:q,onClose:V,setRemovingMfaMethod:async e=>{try{await B()}catch(e){return void z(e)}g(e)}})}}}}]);