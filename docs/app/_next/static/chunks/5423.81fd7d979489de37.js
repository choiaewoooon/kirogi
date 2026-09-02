"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5423],{3125:(e,r,t)=>{t.r(r),t.d(r,{OAuthStatusScreen:()=>k,OAuthStatusScreenView:()=>E,default:()=>k});var i=t(95155),o=t(12115),n=t(90154),a=t(21209),l=t(56329),s=t(4636),c=t(56967),d=t(63771),p=t(49345),u=t(43425),g=t(21145),h=t(66365),v=t(82953),m=t(19497),f=t(28317);t(50205),t(68463),t(92253),t(14338);let y=({style:e})=>(0,i.jsx)(l.A,{style:{color:"var(--privy-color-error)",...e}}),x={google:{name:"Google",component:a.G},discord:{name:"Discord",component:a.D},github:{name:"Github",component:a.b},linkedin:{name:"LinkedIn",component:a.L},twitter:{name:"Twitter",component:a.a},spotify:{name:"Spotify",component:a.S},instagram:{name:"Instagram",component:a.I},tiktok:{name:"Tiktok",component:a.T},line:{name:"LINE",component:s.L},twitch:{name:"Twitch",component:s.T},apple:{name:"Apple",component:a.A},telegram:{name:"Telegram",component:c.T}},b=({iconUrl:e,...r})=>o.createElement("svg",{width:"33",height:"32",viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},o.createElement("foreignObject",{x:"2",y:"2",width:"29",height:"28"},o.createElement("img",{src:e,width:"29",height:"28",style:{display:"block",objectFit:"contain",borderRadius:"4px"},alt:"Provider icon"}))),w=(e,r)=>{if(e in x)return x[e];if((0,n.i)(e)&&r){let t=r.find(r=>r.provider===e);if(t)return{name:t.provider_display_name,component:e=>o.createElement(b,{...e,iconUrl:t.provider_icon_url})}}return{name:"Unknown",component:y}},E=({providerName:e,ProviderLogo:r,success:t,errorMessage:o,onRetry:n})=>{let a=t?`Successfully connected with ${e}`:o?o.message:`Verifying connection to ${e}`;return(0,i.jsx)(v.S,{title:a,subtitle:t?"You're good to go!":o?o.detail:"Just a few moments more",icon:r,iconVariant:"loading",iconLoadingStatus:{success:t,fail:!!o},secondaryCta:o?.retryable&&n?{label:"Retry",onClick:n}:void 0,watermark:!0})},k={component:()=>{let{authenticated:e,logout:r,ready:t,user:a}=(0,n.u)(),{setModalData:l,navigate:s,resetNavigation:c}=(0,g.u)(),v=(0,d.u)(),{getAuthMeta:y,initLoginWithOAuth:x,loginWithOAuth:b,updateWallets:k,setReadyToTrue:S,closePrivyModal:j,createAnalyticsEvent:A}=(0,u.u)(),[I,T]=(0,o.useState)(!1),[C,_]=(0,o.useState)(void 0),O=y()?.provider||"google",{name:N,component:R}=w(O,v.customOAuthProviders);return(0,o.useEffect)(()=>{b(O).then(()=>{T(!0),S(!0)}).catch(e=>{if(S(!1),e?.privyErrorCode===p.a.ALLOWLIST_REJECTED)return _(void 0),c(),void s("AllowlistRejectionScreen");if(e?.privyErrorCode===p.a.USER_LIMIT_REACHED)return console.error(new p.j(e).toString()),_(void 0),c(),void s("UserLimitReachedScreen");if(e?.privyErrorCode===p.a.USER_DOES_NOT_EXIST)return _(void 0),c(),void s("AccountNotFoundScreen");if(e?.privyErrorCode===p.a.ACCOUNT_TRANSFER_REQUIRED&&e.data?.data?.nonce)return _(void 0),c(),l({accountTransfer:{nonce:e.data?.data?.nonce,account:e.data?.data?.subject,displayName:e.data?.data?.account?.displayName,linkMethod:y()?.provider,embeddedWalletAddress:e.data?.data?.otherUser?.embeddedWalletAddress,oAuthUserInfo:e.data?.data?.otherUser?.oAuthUserInfo}}),void s("LinkConflictScreen");let{retryable:r,detail:t}=function(e,r,t){let i={detail:"",retryable:!1},o=(0,m.e)(r);if(e?.privyErrorCode===p.a.LINKED_TO_ANOTHER_USER&&(i.detail="This account has already been linked to another user."),e?.privyErrorCode===p.a.INVALID_CREDENTIALS&&(i.retryable=!0,i.detail="Something went wrong. Try again."),e.privyErrorCode===p.a.OAUTH_USER_DENIED&&(i.detail=`Retry and check ${o} to finish connecting your account.`,i.retryable=!0),e?.privyErrorCode===p.a.TOO_MANY_REQUESTS&&(i.detail="Too many requests. Please wait before trying again."),e?.privyErrorCode===p.a.TOO_MANY_REQUESTS&&e.message.includes("provider rate limit")){let e=w(r,t).name;i.detail=`Request limit reached for ${e}. Please wait a moment and try again.`}if(e?.privyErrorCode===p.a.OAUTH_ACCOUNT_SUSPENDED){let e=w(r,t).name;i.detail=`Your ${e} account is suspended. Please try another login method.`}return e?.privyErrorCode===p.a.CANNOT_LINK_MORE_OF_TYPE&&(i.detail="You cannot authorize more than one account for this user."),e?.privyErrorCode===p.a.OAUTH_UNEXPECTED&&r.startsWith("privy:")&&(i.detail="Something went wrong. Please try again."),i}(e,O,v.customOAuthProviders);_({retryable:r,detail:t,message:"Authentication failed"})}).finally(()=>{(0,f.k)()})},[N,O]),(0,o.useEffect)(()=>{if(t&&e&&I&&a){if(v?.legal.requireUsersAcceptTerms&&!a.hasAcceptedTerms){let e=setTimeout(()=>{s("AffirmativeConsentScreen")},d.r);return()=>clearTimeout(e)}if((0,h.s)(a,v.embeddedWallets)){let e=setTimeout(()=>{l({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),A({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,provider:O,screen:"OAuthStatusScreen"}}),r()},callAuthOnSuccessOnClose:!0}}),s("EmbeddedWalletOnAccountCreateScreen")},d.r);return()=>clearTimeout(e)}{let e=setTimeout(()=>j({shouldCallAuthOnSuccess:!0,isSuccess:!0}),d.r);return k(),()=>clearTimeout(e)}}},[t,e,I,a]),(0,i.jsx)(E,{providerName:N,ProviderLogo:R,success:I,errorMessage:C,onRetry:C?.retryable?()=>{(0,f.k)(),x(O),_(void 0)}:void 0})},isShownBeforeReady:!0}},19497:(e,r,t)=>{t.d(r,{e:()=>i});function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}},56329:(e,r,t)=>{t.d(r,{A:()=>o});var i=t(12115);let o=i.forwardRef(function(e,r){let{title:t,titleId:o,...n}=e;return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":o},n),t?i.createElement("title",{id:o},t):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"}))})},66365:(e,r,t)=>{t.d(r,{s:()=>o});var i=t(28317);let o=(e,r)=>(0,i.s)(e,r.ethereum.createOnLogin)||(0,i.g)(e,r.solana.createOnLogin)},92715:(e,r,t)=>{t.d(r,{S:()=>k});var i=t(95155),o=t(12115),n=t(20031),a=t(72658),l=t(80596),s=t(98218),c=t(95204);let d=n.I4.div`
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
`,g=(0,n.I4)(s.M)`
  margin: 0 -8px;
`,h=n.I4.div`
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
`,m=n.I4.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,f=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,y=n.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,x=n.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,b=n.I4.div`
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
`,E=n.I4.div`
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
`,k=({children:e,...r})=>(0,i.jsx)(d,{children:(0,i.jsx)(p,{...r,children:e})}),S=n.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,j=(0,n.I4)(l.B)`
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
`,I=({step:e})=>e?(0,i.jsx)(S,{children:(0,i.jsx)(A,{pct:Math.min(100,e.current/e.total*100)})}):null;k.Header=({title:e,subtitle:r,icon:t,iconVariant:o,iconLoadingStatus:n,showBack:a,onBack:l,showInfo:s,onInfo:c,showClose:d,onClose:p,step:h,headerTitle:v,eyebrow:b,...w})=>(0,i.jsxs)(u,{...w,children:[(0,i.jsx)(g,{backFn:a?l:void 0,infoFn:s?c:void 0,onClose:d?p:void 0,title:v,eyebrow:b,closeable:d}),(t||o||e||r)&&(0,i.jsxs)(m,{children:[t||o?(0,i.jsx)(k.Icon,{icon:t,variant:o,loadingStatus:n}):null,!(!e&&!r)&&(0,i.jsxs)(f,{children:[e&&(0,i.jsx)(y,{children:e}),r&&(0,i.jsx)(x,{children:r})]})]}),h&&(0,i.jsx)(I,{step:h})]}),(k.Body=o.forwardRef(({children:e,...r},t)=>(0,i.jsx)(h,{ref:t,...r,children:e}))).displayName="Screen.Body",k.Footer=({children:e,...r})=>(0,i.jsx)(v,{id:"privy-content-footer-container",...r,children:e}),k.Actions=({children:e,...r})=>(0,i.jsx)(T,{...r,children:e}),k.HelpText=({children:e,...r})=>(0,i.jsx)(C,{...r,children:e}),k.FooterText=({children:e,...r})=>(0,i.jsx)(_,{...r,children:e}),k.Watermark=()=>(0,i.jsx)(j,{}),k.Icon=({icon:e,variant:r="subtle",loadingStatus:t})=>"logo"===r&&e?(0,i.jsx)(w,"string"==typeof e?{children:(0,i.jsx)("img",{src:e,alt:""})}:o.isValidElement(e)?{children:e}:{children:o.createElement(e)}):"loading"===r?e?(0,i.jsx)(E,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(a.C,{success:t?.success,fail:t?.fail}),"string"==typeof e?(0,i.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):o.isValidElement(e)?o.cloneElement(e,{style:{width:"38px",height:"38px"}}):o.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(b,{$variant:r,children:(0,i.jsx)(c.N,{size:"64px"})}):(0,i.jsx)(b,{$variant:r,children:e&&("string"==typeof e?(0,i.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):o.isValidElement(e)?e:o.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let T=n.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,C=n.I4.div`
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
`,_=n.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},95204:(e,r,t)=>{t.d(r,{N:()=>n});var i=t(95155),o=t(20031);let n=({size:e,centerIcon:r})=>(0,i.jsx)(a,{$size:e,children:(0,i.jsxs)(l,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),r?(0,i.jsx)(s,{children:r}):null]})}),a=o.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,l=o.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,s=o.I4.div`
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
`,c=o.I4.div`
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
`,d=o.I4.div`
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