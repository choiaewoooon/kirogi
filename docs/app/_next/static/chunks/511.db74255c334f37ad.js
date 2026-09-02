"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[511],{30511:(e,r,i)=>{i.r(r),i.d(r,{AwaitingPasswordlessCodeScreen:()=>S,AwaitingPasswordlessCodeScreenView:()=>y,default:()=>S});var t=i(95155),n=i(12115);let o=n.forwardRef(function(e,r){let{title:i,titleId:t,...o}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},o),i?n.createElement("title",{id:t},i):null,n.createElement("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",clipRule:"evenodd"}))});var a=i(50090),l=i(49852),s=i(92253),c=i(20031),d=i(83361),p=i(83988),u=i(63771),v=i(49345),x=i(43425),h=i(21145),g=i(90154),f=i(66365),m=i(82953);i(50205),i(68463),i(14338);let y=({contactMethod:e,authFlow:r,emailDomain:i,appName:c="Privy",whatsAppEnabled:u=!1,onBack:v,onCodeSubmit:x,onResend:h,errorMessage:g,success:f=!1,resendCountdown:y=0,onInvalidInput:j,onClearError:k})=>{let[E,I]=(0,n.useState)(w);(0,n.useEffect)(()=>{g||I(w)},[g]);let S=async e=>{e.preventDefault();let r=e.currentTarget.value.replace(" ","");if(""===r)return;if(isNaN(Number(r)))return void j?.("Code should be numeric");k?.();let i=Number(e.currentTarget.name?.charAt(5)),t=[...r||[""]].slice(0,b-i),n=[...E.slice(0,i),...t,...E.slice(i+t.length)];I(n);let o=Math.min(Math.max(i+t.length,0),b-1);if(!isNaN(Number(e.currentTarget.value))){let e=document.querySelector(`input[name=code-${o}]`);e?.focus()}if(n.every(e=>e&&!isNaN(+e))){let e=document.querySelector(`input[name=code-${o}]`);e?.blur(),await x?.(n.join(""))}};return(0,t.jsx)(m.S,{title:"Enter confirmation code",subtitle:(0,t.jsxs)("span","email"===r?{children:["Please check ",(0,t.jsx)(_,{children:e})," for an email from"," ",i??"privy.io"," and enter your code below."]}:{children:["Please check ",(0,t.jsx)(_,{children:e})," for a",u?" WhatsApp":""," message from ",c," and enter your code below."]}),icon:"email"===r?a.A:l.A,onBack:v,showBack:!0,helpText:(0,t.jsxs)(T,{children:[(0,t.jsxs)("span",{children:["Didn't get ","email"===r?"an email":"a message","?"]}),y?(0,t.jsxs)(N,{children:[(0,t.jsx)(o,{color:"var(--privy-color-foreground)",strokeWidth:1.33,height:"12px",width:"12px"}),(0,t.jsx)("span",{children:"Code sent"})]}):(0,t.jsx)(p.L,{as:"button",size:"sm",onClick:h,children:"Resend code"})]}),children:(0,t.jsx)(C,{children:(0,t.jsx)(d.H,{children:(0,t.jsxs)(A,{children:[(0,t.jsx)("div",{children:E.map((e,r)=>(0,t.jsx)("input",{name:`code-${r}`,type:"text",value:E[r],onChange:S,onKeyUp:e=>{"Backspace"===e.key&&(e=>{if(k?.(),I([...E.slice(0,e),"",...E.slice(e+1)]),e>0){let r=document.querySelector(`input[name=code-${e-1}]`);r?.focus()}})(r)},inputMode:"numeric",autoFocus:0===r,pattern:"[0-9]",className:`${f?"success":""} ${g?"fail":""}`,autoComplete:s.Fr?"one-time-code":"off"},r))}),(0,t.jsx)($,{$fail:!!g,$success:f,children:(0,t.jsx)("span",{children:"Invalid or expired verification code"===g?"Incorrect code":g||(f?"Success!":"")})})]})})})})},b=6,w=Array(6).fill("");var j,k,E=((j=E||{})[j.RESET_AFTER_DELAY=0]="RESET_AFTER_DELAY",j[j.CLEAR_ON_NEXT_VALID_INPUT=1]="CLEAR_ON_NEXT_VALID_INPUT",j),I=((k=I||{})[k.EMAIL=0]="EMAIL",k[k.SMS=1]="SMS",k);let S={component:()=>{let{navigate:e,lastScreen:r,navigateBack:i,setModalData:o,onUserCloseViaDialogOrKeybindRef:a}=(0,h.u)(),l=(0,u.u)(),{closePrivyModal:s,resendEmailCode:c,resendSmsCode:d,getAuthMeta:p,loginWithCode:m,updateWallets:b,createAnalyticsEvent:w}=(0,x.u)(),{authenticated:j,logout:k,user:E}=(0,g.u)(),{whatsAppEnabled:I}=(0,u.u)(),[S,C]=(0,n.useState)(!1),[A,$]=(0,n.useState)(null),[T,N]=(0,n.useState)(null),[_,R]=(0,n.useState)(0);a.current=()=>null;let z=+!p()?.email,L=0===z?p()?.email||"":p()?.phoneNumber||"",M=u.r-500;return(0,n.useEffect)(()=>{if(_){let e=setTimeout(()=>{R(_-1)},1e3);return()=>clearTimeout(e)}},[_]),(0,n.useEffect)(()=>{if(j&&S&&E){if(l?.legal.requireUsersAcceptTerms&&!E.hasAcceptedTerms){let r=setTimeout(()=>{e("AffirmativeConsentScreen")},M);return()=>clearTimeout(r)}if((0,f.s)(E,l.embeddedWallets)){let r=setTimeout(()=>{o({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),w({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"AwaitingPasswordlessCodeScreen"}}),k()},callAuthOnSuccessOnClose:!0}}),e("EmbeddedWalletOnAccountCreateScreen")},M);return()=>clearTimeout(r)}{b();let e=setTimeout(()=>s({shouldCallAuthOnSuccess:!0,isSuccess:!0}),u.r);return()=>clearTimeout(e)}}},[j,S,E]),(0,n.useEffect)(()=>{if(A&&0===T){let e=setTimeout(()=>{$(null),N(null);let e=document.querySelector("input[name=code-0]");e?.focus()},1400);return()=>clearTimeout(e)}},[A,T]),(0,t.jsx)(y,{contactMethod:L,authFlow:0===z?"email":"sms",emailDomain:l?.appearance.emailDomain,appName:l?.name,whatsAppEnabled:I,onBack:()=>i(),onCodeSubmit:async i=>{try{await m(i),C(!0)}catch(i){if(i instanceof v.c&&i.privyErrorCode===v.a.INVALID_CREDENTIALS)$("Invalid or expired verification code"),N(0);else if(i instanceof v.c&&i.privyErrorCode===v.a.CANNOT_LINK_MORE_OF_TYPE)$(i.message);else{if(i instanceof v.c&&i.privyErrorCode===v.a.USER_LIMIT_REACHED)return console.error(new v.j(i).toString()),void e("UserLimitReachedScreen");if(i instanceof v.c&&i.privyErrorCode===v.a.USER_DOES_NOT_EXIST)return void e("AccountNotFoundScreen");if(i instanceof v.c&&i.privyErrorCode===v.a.LINKED_TO_ANOTHER_USER)return o({errorModalData:{error:i,previousScreen:r??"AwaitingPasswordlessCodeScreen"}}),void e("ErrorScreen",!1);if(i instanceof v.c&&i.privyErrorCode===v.a.DISALLOWED_PLUS_EMAIL)return o({inlineError:{error:i}}),void e("ConnectOrCreateScreen",!1);if(i instanceof v.c&&i.privyErrorCode===v.a.ACCOUNT_TRANSFER_REQUIRED&&i.data?.data?.nonce)return o({accountTransfer:{nonce:i.data?.data?.nonce,account:L,displayName:i.data?.data?.account?.displayName,linkMethod:0===z?"email":"sms",embeddedWalletAddress:i.data?.data?.otherUser?.embeddedWalletAddress}}),void e("LinkConflictScreen");$("Issue verifying code"),N(0)}}},onResend:async()=>{R(30),0===z?await c():await d()},errorMessage:A||void 0,success:S,resendCountdown:_,onInvalidInput:e=>{$(e),N(1)},onClearError:()=>{1===T&&($(null),N(null))}})}},C=c.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 16px;
  flex-grow: 1;
  width: 100%;
`,A=c.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  > div:first-child {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    border-radius: var(--privy-border-radius-sm);

    > input {
      border: 1px solid var(--privy-color-foreground-4);
      background: var(--privy-color-background);
      border-radius: var(--privy-border-radius-sm);
      padding: 8px 10px;
      height: 48px;
      width: 40px;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: var(--privy-color-foreground);
      transition: all 0.2s ease;
    }

    > input:focus {
      border: 1px solid var(--privy-color-foreground);
      box-shadow: 0 0 0 1px var(--privy-color-foreground);
    }

    > input:invalid {
      border: 1px solid var(--privy-color-error);
    }

    > input.success {
      border: 1px solid var(--privy-color-border-success);
      background: var(--privy-color-success-bg);
    }

    > input.fail {
      border: 1px solid var(--privy-color-border-error);
      background: var(--privy-color-error-bg);
      animation: shake 180ms;
      animation-iteration-count: 2;
    }
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 0px);
    }
    33% {
      transform: translate(-1px, 0px);
    }
    67% {
      transform: translate(-1px, 0px);
    }
    100% {
      transform: translate(1px, 0px);
    }
  }
`,$=c.I4.div`
  line-height: 20px;
  min-height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: ${e=>e.$success?"var(--privy-color-success-dark)":e.$fail?"var(--privy-color-error-dark)":"transparent"};
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`,T=c.I4.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: var(--privy-color-foreground-2);
`,N=c.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-sm);
  padding: 2px 8px;
  gap: 4px;
  background: var(--privy-color-background-2);
  color: var(--privy-color-foreground-2);
`,_=c.I4.span`
  font-weight: 500;
  word-break: break-all;
  color: var(--privy-color-foreground);
`},49852:(e,r,i)=>{i.d(r,{A:()=>n});var t=i(12115);let n=t.forwardRef(function(e,r){let{title:i,titleId:n,...o}=e;return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},o),i?t.createElement("title",{id:n},i):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"}))})},50090:(e,r,i)=>{i.d(r,{A:()=>n});var t=i(12115);let n=t.forwardRef(function(e,r){let{title:i,titleId:n,...o}=e;return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},o),i?t.createElement("title",{id:n},i):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"}))})},66365:(e,r,i)=>{i.d(r,{s:()=>n});var t=i(28317);let n=(e,r)=>(0,t.s)(e,r.ethereum.createOnLogin)||(0,t.g)(e,r.solana.createOnLogin)},82953:(e,r,i)=>{i.d(r,{S:()=>a});var t=i(95155),n=i(98218),o=i(92715);let a=({primaryCta:e,secondaryCta:r,helpText:i,footerText:a,watermark:l=!0,children:s,...c})=>{let d=e||r?(0,t.jsxs)(t.Fragment,{children:[e&&(()=>{let{label:r,...i}=e,o=i.variant||"primary";return(0,t.jsx)(n.B,{...i,variant:o,style:{width:"100%",...i.style},children:r})})(),r&&(()=>{let{label:e,...i}=r,o=i.variant||"secondary";return(0,t.jsx)(n.B,{...i,variant:o,style:{width:"100%",...i.style},children:e})})()]}):null;return(0,t.jsxs)(o.S,{id:c.id,className:c.className,children:[(0,t.jsx)(o.S.Header,{...c}),s?(0,t.jsx)(o.S.Body,{children:s}):null,i||d||l?(0,t.jsxs)(o.S.Footer,{children:[i?(0,t.jsx)(o.S.HelpText,{children:i}):null,d?(0,t.jsx)(o.S.Actions,{children:d}):null,l?(0,t.jsx)(o.S.Watermark,{}):null]}):null,a?(0,t.jsx)(o.S.FooterText,{children:a}):null]})}},83361:(e,r,i)=>{i.d(r,{B:()=>n,C:()=>l,F:()=>c,H:()=>a,R:()=>v,S:()=>p,a:()=>d,b:()=>u,c:()=>s,d:()=>x,e:()=>o});var t=i(20031);let n=t.I4.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,o=t.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,a=t.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,l=(0,t.I4)(o)`
  padding: 20px 0;
`,s=(0,t.I4)(o)`
  gap: 16px;
`,c=t.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,d=t.I4.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;t.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;let p=t.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 100%;
  background: var(--privy-color-background-2);
  border-radius: var(--privy-border-radius-md);
  && h4 {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
    text-decoration: underline;
    font-weight: medium;
  }
  && p {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
  }
`,u=t.I4.div`
  height: 16px;
`,v=t.I4.div`
  height: 12px;
`;t.I4.div`
  position: relative;
`;let x=t.I4.div`
  height: ${e=>e.height??"12"}px;
`;t.I4.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`},83988:(e,r,i)=>{i.d(r,{L:()=>a});var t=i(95155),n=i(20031);let o=n.I4.a`
  && {
    color: ${({$variant:e})=>"underlined"===e?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))"};
    font-weight: 400;
    text-decoration: ${({$variant:e})=>"underlined"===e?"underline":"var(--privy-link-navigation-decoration, none)"};
    text-underline-offset: 4px;
    text-decoration-thickness: 1px;
    cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
    opacity: ${({$disabled:e})=>e?.5:1};

    font-size: ${({$size:e})=>{switch(e){case"xs":return"12px";case"sm":return"14px";default:return"16px"}}};

    line-height: ${({$size:e})=>{switch(e){case"xs":return"18px";case"sm":return"22px";default:return"24px"}}};

    transition:
      color 200ms ease,
      text-decoration-color 200ms ease,
      opacity 200ms ease;

    &:hover {
      color: ${({$variant:e,$disabled:r})=>"underlined"===e?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))"};
      text-decoration: ${({$disabled:e})=>e?"none":"underline"};
      text-underline-offset: 4px;
    }

    &:active {
      color: ${({$variant:e,$disabled:r})=>r?"underlined"===e?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))":"var(--privy-color-foreground)"};
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px #949df9;
      border-radius: 2px;
    }
  }
`,a=({size:e="md",variant:r="navigation",disabled:i=!1,as:n,children:a,onClick:l,...s})=>(0,t.jsx)(o,{as:n,$size:e,$variant:r,$disabled:i,onClick:e=>{i?e.preventDefault():l?.(e)},...s,children:a})},92715:(e,r,i)=>{i.d(r,{S:()=>k});var t=i(95155),n=i(12115),o=i(20031),a=i(72658),l=i(80596),s=i(98218),c=i(95204);let d=o.I4.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,p=o.I4.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,u=o.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,v=(0,o.I4)(s.M)`
  margin: 0 -8px;
`,x=o.I4.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  /* Enable scrolling */
  overflow-y: auto;

  /* Hide scrollbar but keep functionality when scrollable */
  /* Add padding for focus outline space, offset with negative margin */
  padding: 3px;
  margin: -3px;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-gutter: stable both-edges;
  scrollbar-width: none;
  -ms-overflow-style: none;

  /* Gradient effect for scroll indication */
  ${({$colorScheme:e})=>"light"===e?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;":"dark"===e?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;":void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
`,h=o.I4.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
  margin-top: 1.5rem;
`,g=o.I4.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,f=o.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,m=o.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,y=o.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,b=o.I4.div`
  background: ${({$variant:e})=>{switch(e){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,w=o.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,j=o.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;

  > div {
    position: relative;
  }

  > div > :first-child {
    position: relative;
  }

  > div > :last-child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`,k=({children:e,...r})=>(0,t.jsx)(d,{children:(0,t.jsx)(p,{...r,children:e})}),E=o.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,I=(0,o.I4)(l.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,S=o.I4.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,C=({step:e})=>e?(0,t.jsx)(E,{children:(0,t.jsx)(S,{pct:Math.min(100,e.current/e.total*100)})}):null;k.Header=({title:e,subtitle:r,icon:i,iconVariant:n,iconLoadingStatus:o,showBack:a,onBack:l,showInfo:s,onInfo:c,showClose:d,onClose:p,step:x,headerTitle:h,eyebrow:b,...w})=>(0,t.jsxs)(u,{...w,children:[(0,t.jsx)(v,{backFn:a?l:void 0,infoFn:s?c:void 0,onClose:d?p:void 0,title:h,eyebrow:b,closeable:d}),(i||n||e||r)&&(0,t.jsxs)(g,{children:[i||n?(0,t.jsx)(k.Icon,{icon:i,variant:n,loadingStatus:o}):null,!(!e&&!r)&&(0,t.jsxs)(f,{children:[e&&(0,t.jsx)(m,{children:e}),r&&(0,t.jsx)(y,{children:r})]})]}),x&&(0,t.jsx)(C,{step:x})]}),(k.Body=n.forwardRef(({children:e,...r},i)=>(0,t.jsx)(x,{ref:i,...r,children:e}))).displayName="Screen.Body",k.Footer=({children:e,...r})=>(0,t.jsx)(h,{id:"privy-content-footer-container",...r,children:e}),k.Actions=({children:e,...r})=>(0,t.jsx)(A,{...r,children:e}),k.HelpText=({children:e,...r})=>(0,t.jsx)($,{...r,children:e}),k.FooterText=({children:e,...r})=>(0,t.jsx)(T,{...r,children:e}),k.Watermark=()=>(0,t.jsx)(I,{}),k.Icon=({icon:e,variant:r="subtle",loadingStatus:i})=>"logo"===r&&e?(0,t.jsx)(w,"string"==typeof e?{children:(0,t.jsx)("img",{src:e,alt:""})}:n.isValidElement(e)?{children:e}:{children:n.createElement(e)}):"loading"===r?e?(0,t.jsx)(j,{children:(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,t.jsx)(a.C,{success:i?.success,fail:i?.fail}),"string"==typeof e?(0,t.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):n.isValidElement(e)?n.cloneElement(e,{style:{width:"38px",height:"38px"}}):n.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,t.jsx)(b,{$variant:r,children:(0,t.jsx)(c.N,{size:"64px"})}):(0,t.jsx)(b,{$variant:r,children:e&&("string"==typeof e?(0,t.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):n.isValidElement(e)?e:n.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let A=o.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,$=o.I4.div`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 13px;
    line-height: 20px;

    & a {
      text-decoration: underline;
    }
  }
`,T=o.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},95204:(e,r,i)=>{i.d(r,{N:()=>o});var t=i(95155),n=i(20031);let o=({size:e,centerIcon:r})=>(0,t.jsx)(a,{$size:e,children:(0,t.jsxs)(l,{children:[(0,t.jsx)(c,{}),(0,t.jsx)(d,{}),r?(0,t.jsx)(s,{children:r}):null]})}),a=n.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,l=n.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,s=n.I4.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  svg,
  img {
    width: calc(var(--spinner-size) * 0.4);
    height: calc(var(--spinner-size) * 0.4);
    border-radius: var(--privy-border-radius-full);
  }
`,c=n.I4.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: var(--spinner-size);
  height: var(--spinner-size);

  && {
    border: 4px solid var(--privy-color-border-default);
    border-radius: 50%;
  }
`,d=n.I4.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: var(--spinner-size);
  height: var(--spinner-size);
  animation: spin 1200ms linear infinite;

  && {
    border: 4px solid;
    border-color: var(--privy-color-icon-subtle) transparent transparent transparent;
    border-radius: 50%;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`}}]);