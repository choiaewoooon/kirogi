"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8857],{8857:(e,r,t)=>{t.r(r),t.d(r,{CrossAppAuthScreen:()=>g,CrossAppAuthScreenView:()=>h,default:()=>g});var i=t(95155),a=t(12115),n=t(63771),o=t(81922),s=t(49345),l=t(43425),c=t(21145),d=t(13559),p=t(66365),u=t(82953);t(50205),t(68463),t(92253),t(14338);let h=({providerApp:e,success:r,error:t,onClose:n})=>{let{title:o,subtitle:s}=(0,a.useMemo)(()=>r?{title:`Successfully connected with ${e.name}`,subtitle:"You're good to go!"}:t?{title:"Authentication failed",subtitle:t.message}:{title:`Connecting to ${e.name}`,subtitle:`Please check the pop-up from ${e.name} to continue`},[r,t,e.name]);return(0,i.jsx)(u.S,{title:o,subtitle:s,icon:e.logoUrl,iconVariant:"loading",iconLoadingStatus:{success:r,fail:!!t},onBack:n,watermark:!0})},g={component:()=>{let e=(0,n.u)(),{data:r,navigate:t,setModalData:u,onUserCloseViaDialogOrKeybindRef:g}=(0,c.u)(),{crossAppAuthFlow:v,updateWallets:x,closePrivyModal:f,createAnalyticsEvent:m}=(0,l.u)(),{logout:b}=(0,d.f)(),[y,w]=(0,a.useState)({}),j=r?.crossAppAuth,I=new s.P(`There was an issue connecting your ${j?.name} account. Please try again.`),k=new o.R(async e=>{if(j?.popup)try{let r=await v({appId:e,popup:j.popup,action:j.action,disableSignup:j.disableSignup});w({data:r})}catch(e){if(e instanceof s.P)w({error:e});else if(e instanceof s.c){if(e.privyErrorCode===s.a.ACCOUNT_TRANSFER_REQUIRED&&e.data?.data?.nonce)return u({accountTransfer:{nonce:e.data?.data?.nonce,account:e.data?.data?.subject,displayName:e.data?.data?.account?.displayName,linkMethod:`privy:${j.appId}`,embeddedWalletAddress:e.data?.data?.otherUser?.embeddedWalletAddress,oAuthUserInfo:e.data?.data?.otherUser?.oAuthUserInfo}}),void t("LinkConflictScreen");j.popup&&j.popup.close(),w({error:I})}else w({error:I})}else w({error:I})}),S=()=>{y.data&&(x(),j?.onSuccess(y.data),f({shouldCallAuthOnSuccess:!0,isSuccess:!0})),j?.onError(y.error??new s.P("User canceled flow")),f({shouldCallAuthOnSuccess:!1,isSuccess:!1})};return g.current=S,(0,a.useEffect)(()=>{j?.appId?.length&&k.execute(j.appId)},[j?.appId]),(0,a.useEffect)(()=>{if(!y.data)return;let r=y.data;if(e.legal.requireUsersAcceptTerms&&!r.hasAcceptedTerms){let e=setTimeout(()=>{t("AffirmativeConsentScreen")},n.r);return()=>clearTimeout(e)}if((0,p.s)(r,e.embeddedWallets)){let e=setTimeout(()=>{u({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),m({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,provider:`privy:${j?.appId}`,screen:"CrossAppAuthScreen"}}),b()},callAuthOnSuccessOnClose:!0}}),t("EmbeddedWalletOnAccountCreateScreen")},n.r);return()=>clearTimeout(e)}let i=setTimeout(S,n.r);return()=>clearTimeout(i)},[y.data]),j?.appId?(0,i.jsx)(h,{providerApp:{id:j?.appId,logoUrl:j?.logoUrl,name:j?.name},success:!!y.data,error:y.error,onClose:S}):(console.warn("Missing data for Screen"),null)},isShownBeforeReady:!0}},66365:(e,r,t)=>{t.d(r,{s:()=>a});var i=t(28317);let a=(e,r)=>(0,i.s)(e,r.ethereum.createOnLogin)||(0,i.g)(e,r.solana.createOnLogin)},82953:(e,r,t)=>{t.d(r,{S:()=>o});var i=t(95155),a=t(98218),n=t(92715);let o=({primaryCta:e,secondaryCta:r,helpText:t,footerText:o,watermark:s=!0,children:l,...c})=>{let d=e||r?(0,i.jsxs)(i.Fragment,{children:[e&&(()=>{let{label:r,...t}=e,n=t.variant||"primary";return(0,i.jsx)(a.B,{...t,variant:n,style:{width:"100%",...t.style},children:r})})(),r&&(()=>{let{label:e,...t}=r,n=t.variant||"secondary";return(0,i.jsx)(a.B,{...t,variant:n,style:{width:"100%",...t.style},children:e})})()]}):null;return(0,i.jsxs)(n.S,{id:c.id,className:c.className,children:[(0,i.jsx)(n.S.Header,{...c}),l?(0,i.jsx)(n.S.Body,{children:l}):null,t||d||s?(0,i.jsxs)(n.S.Footer,{children:[t?(0,i.jsx)(n.S.HelpText,{children:t}):null,d?(0,i.jsx)(n.S.Actions,{children:d}):null,s?(0,i.jsx)(n.S.Watermark,{}):null]}):null,o?(0,i.jsx)(n.S.FooterText,{children:o}):null]})}},92715:(e,r,t)=>{t.d(r,{S:()=>I});var i=t(95155),a=t(12115),n=t(20031),o=t(72658),s=t(80596),l=t(98218),c=t(95204);let d=n.I4.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,p=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,u=n.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,h=(0,n.I4)(l.M)`
  margin: 0 -8px;
`,g=n.I4.div`
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
`,v=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
  margin-top: 1.5rem;
`,x=n.I4.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,f=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,m=n.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,b=n.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,y=n.I4.div`
  background: ${({$variant:e})=>{switch(e){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,w=n.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,j=n.I4.div`
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
`,I=({children:e,...r})=>(0,i.jsx)(d,{children:(0,i.jsx)(p,{...r,children:e})}),k=n.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,S=(0,n.I4)(s.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,A=n.I4.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,C=({step:e})=>e?(0,i.jsx)(k,{children:(0,i.jsx)(A,{pct:Math.min(100,e.current/e.total*100)})}):null;I.Header=({title:e,subtitle:r,icon:t,iconVariant:a,iconLoadingStatus:n,showBack:o,onBack:s,showInfo:l,onInfo:c,showClose:d,onClose:p,step:g,headerTitle:v,eyebrow:y,...w})=>(0,i.jsxs)(u,{...w,children:[(0,i.jsx)(h,{backFn:o?s:void 0,infoFn:l?c:void 0,onClose:d?p:void 0,title:v,eyebrow:y,closeable:d}),(t||a||e||r)&&(0,i.jsxs)(x,{children:[t||a?(0,i.jsx)(I.Icon,{icon:t,variant:a,loadingStatus:n}):null,!(!e&&!r)&&(0,i.jsxs)(f,{children:[e&&(0,i.jsx)(m,{children:e}),r&&(0,i.jsx)(b,{children:r})]})]}),g&&(0,i.jsx)(C,{step:g})]}),(I.Body=a.forwardRef(({children:e,...r},t)=>(0,i.jsx)(g,{ref:t,...r,children:e}))).displayName="Screen.Body",I.Footer=({children:e,...r})=>(0,i.jsx)(v,{id:"privy-content-footer-container",...r,children:e}),I.Actions=({children:e,...r})=>(0,i.jsx)(E,{...r,children:e}),I.HelpText=({children:e,...r})=>(0,i.jsx)(z,{...r,children:e}),I.FooterText=({children:e,...r})=>(0,i.jsx)(T,{...r,children:e}),I.Watermark=()=>(0,i.jsx)(S,{}),I.Icon=({icon:e,variant:r="subtle",loadingStatus:t})=>"logo"===r&&e?(0,i.jsx)(w,"string"==typeof e?{children:(0,i.jsx)("img",{src:e,alt:""})}:a.isValidElement(e)?{children:e}:{children:a.createElement(e)}):"loading"===r?e?(0,i.jsx)(j,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(o.C,{success:t?.success,fail:t?.fail}),"string"==typeof e?(0,i.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):a.isValidElement(e)?a.cloneElement(e,{style:{width:"38px",height:"38px"}}):a.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(y,{$variant:r,children:(0,i.jsx)(c.N,{size:"64px"})}):(0,i.jsx)(y,{$variant:r,children:e&&("string"==typeof e?(0,i.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):a.isValidElement(e)?e:a.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let E=n.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,z=n.I4.div`
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
`,T=n.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},95204:(e,r,t)=>{t.d(r,{N:()=>n});var i=t(95155),a=t(20031);let n=({size:e,centerIcon:r})=>(0,i.jsx)(o,{$size:e,children:(0,i.jsxs)(s,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),r?(0,i.jsx)(l,{children:r}):null]})}),o=a.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,s=a.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,l=a.I4.div`
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
`,c=a.I4.div`
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
`,d=a.I4.div`
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