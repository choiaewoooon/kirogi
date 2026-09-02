"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7659],{7659:(e,r,t)=>{t.r(r),t.d(r,{EmbeddedWalletOnAccountCreateScreen:()=>m,EmbeddedWalletOnAccountCreateView:()=>x,default:()=>m});var i=t(95155),a=t(78874),n=t(12115),l=t(76928),o=t(63771),s=t(81922),c=t(49345),d=t(43425),u=t(28317),p=t(21145),h=t(90154),g=t(37768),v=t(82953);t(50205),t(68463),t(92253),t(14338);let x=({errorMessage:e,onClose:r})=>(0,i.jsx)(v.S,e?{title:"Something went wrong",subtitle:e,icon:a.A,iconVariant:"error",primaryCta:{label:"Close",onClick:r},watermark:!0}:{title:"Creating your wallet",subtitle:"Please wait...",iconVariant:"loading",watermark:!1}),m={component:()=>{let{setModalData:e,navigate:r,data:t,onUserCloseViaDialogOrKeybindRef:a}=(0,p.u)(),v=(0,o.u)(),[m,y]=(0,n.useState)(""),{embeddedWallets:f}=(0,o.u)(),{authenticated:b,user:w}=(0,h.u)(),{closePrivyModal:j,walletProxy:k,client:C}=(0,d.u)(),{onSuccess:I,onFailure:S,callAuthOnSuccessOnClose:E,shouldCreateEth:A,shouldCreateSol:z}=t.createWallet,W=(0,g.u)(),F=w?W(u.W)?.shouldCreateWallet({user:w}):void 0,O=!!w&&(0,u.s)(w,v.embeddedWallets.ethereum.createOnLogin,F),$=!!w&&(0,u.g)(w,v.embeddedWallets.solana.createOnLogin,F),N="legacy-embedded-wallets-only"===v.embeddedWallets.mode&&!0===v?.embeddedWallets.requireUserOwnedRecoveryOnCreate,[R,T]=(0,n.useState)(null),{create:U}=(0,u.n)(),B=A??O,L=z??$,V=new s.R(async()=>{let e=await C.getAccessToken();if(w&&e&&k)try{let e,t=await (0,l.J3)(w.id,"ethereum"),i=await (0,l.J3)(w.id,"solana");if(B&&L)e=await U({chainType:"ethereum",walletIndex:0,latestUser:w,idempotencyKey:t}),e=await U({chainType:"solana",walletIndex:0,latestUser:e.user,idempotencyKey:i});else if(L)e=await U({chainType:"solana",walletIndex:0,latestUser:w,idempotencyKey:i});else{if(!B)return void j({shouldCallAuthOnSuccess:E});e=await U({chainType:"ethereum",walletIndex:0,latestUser:w,idempotencyKey:t})}T(e),r("EmbeddedWalletCreatedScreen")}catch(e){y(e.message)}});return(0,n.useEffect)(()=>b&&w?N?(e({...t,createWallet:{...t.createWallet,shouldCreateEth:B,shouldCreateSol:L},recoverySelection:{...t?.recoverySelection,isInAccountCreateFlow:!0,shouldCreateEth:B,shouldCreateSol:L}}),r((0,u.v)({walletAction:"create",showAutomaticRecovery:!1,availableRecoveryMethods:f.userOwnedRecoveryOptions,legacySetWalletPasswordFlow:!1,isResettingPassword:!1}))):void V.execute():(r("LandingScreen"),void S(Error("User must be authenticated before creating a Privy wallet"))),[N,b]),a.current=()=>null,(0,i.jsx)(x,{errorMessage:m||void 0,onClose:()=>{R?(I(R),j({shouldCallAuthOnSuccess:E})):(S(new c.k("User wallet creation failed")),j({shouldCallAuthOnSuccess:!1}))}})}}},71847:(e,r,t)=>{t.d(r,{A:()=>s});var i=t(12115);let a=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)},n=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,i.forwardRef)((e,r)=>{let{color:t="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:c="",children:d,iconNode:u,...p}=e;return(0,i.createElement)("svg",{ref:r,...l,width:a,height:a,stroke:t,strokeWidth:s?24*Number(o)/Number(a):o,className:n("lucide",c),...!d&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0})(p)&&{"aria-hidden":"true"},...p},[...u.map(e=>{let[r,t]=e;return(0,i.createElement)(r,t)}),...Array.isArray(d)?d:[d]])}),s=(e,r)=>{let t=(0,i.forwardRef)((t,l)=>{let{className:s,...c}=t;return(0,i.createElement)(o,{ref:l,iconNode:r,className:n("lucide-".concat(a(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),"lucide-".concat(e),s),...c})});return t.displayName=a(e),t}},78874:(e,r,t)=>{t.d(r,{A:()=>i});let i=(0,t(71847).A)("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])},82953:(e,r,t)=>{t.d(r,{S:()=>l});var i=t(95155),a=t(98218),n=t(92715);let l=({primaryCta:e,secondaryCta:r,helpText:t,footerText:l,watermark:o=!0,children:s,...c})=>{let d=e||r?(0,i.jsxs)(i.Fragment,{children:[e&&(()=>{let{label:r,...t}=e,n=t.variant||"primary";return(0,i.jsx)(a.B,{...t,variant:n,style:{width:"100%",...t.style},children:r})})(),r&&(()=>{let{label:e,...t}=r,n=t.variant||"secondary";return(0,i.jsx)(a.B,{...t,variant:n,style:{width:"100%",...t.style},children:e})})()]}):null;return(0,i.jsxs)(n.S,{id:c.id,className:c.className,children:[(0,i.jsx)(n.S.Header,{...c}),s?(0,i.jsx)(n.S.Body,{children:s}):null,t||d||o?(0,i.jsxs)(n.S.Footer,{children:[t?(0,i.jsx)(n.S.HelpText,{children:t}):null,d?(0,i.jsx)(n.S.Actions,{children:d}):null,o?(0,i.jsx)(n.S.Watermark,{}):null]}):null,l?(0,i.jsx)(n.S.FooterText,{children:l}):null]})}},92715:(e,r,t)=>{t.d(r,{S:()=>k});var i=t(95155),a=t(12115),n=t(20031),l=t(72658),o=t(80596),s=t(98218),c=t(95204);let d=n.I4.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,u=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,p=n.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,h=(0,n.I4)(s.M)`
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
`,m=n.I4.div`
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
`,f=n.I4.p`
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
`,k=({children:e,...r})=>(0,i.jsx)(d,{children:(0,i.jsx)(u,{...r,children:e})}),C=n.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,I=(0,n.I4)(o.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,S=n.I4.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,E=({step:e})=>e?(0,i.jsx)(C,{children:(0,i.jsx)(S,{pct:Math.min(100,e.current/e.total*100)})}):null;k.Header=({title:e,subtitle:r,icon:t,iconVariant:a,iconLoadingStatus:n,showBack:l,onBack:o,showInfo:s,onInfo:c,showClose:d,onClose:u,step:g,headerTitle:v,eyebrow:b,...w})=>(0,i.jsxs)(p,{...w,children:[(0,i.jsx)(h,{backFn:l?o:void 0,infoFn:s?c:void 0,onClose:d?u:void 0,title:v,eyebrow:b,closeable:d}),(t||a||e||r)&&(0,i.jsxs)(x,{children:[t||a?(0,i.jsx)(k.Icon,{icon:t,variant:a,loadingStatus:n}):null,!(!e&&!r)&&(0,i.jsxs)(m,{children:[e&&(0,i.jsx)(y,{children:e}),r&&(0,i.jsx)(f,{children:r})]})]}),g&&(0,i.jsx)(E,{step:g})]}),(k.Body=a.forwardRef(({children:e,...r},t)=>(0,i.jsx)(g,{ref:t,...r,children:e}))).displayName="Screen.Body",k.Footer=({children:e,...r})=>(0,i.jsx)(v,{id:"privy-content-footer-container",...r,children:e}),k.Actions=({children:e,...r})=>(0,i.jsx)(A,{...r,children:e}),k.HelpText=({children:e,...r})=>(0,i.jsx)(z,{...r,children:e}),k.FooterText=({children:e,...r})=>(0,i.jsx)(W,{...r,children:e}),k.Watermark=()=>(0,i.jsx)(I,{}),k.Icon=({icon:e,variant:r="subtle",loadingStatus:t})=>"logo"===r&&e?(0,i.jsx)(w,"string"==typeof e?{children:(0,i.jsx)("img",{src:e,alt:""})}:a.isValidElement(e)?{children:e}:{children:a.createElement(e)}):"loading"===r?e?(0,i.jsx)(j,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(l.C,{success:t?.success,fail:t?.fail}),"string"==typeof e?(0,i.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):a.isValidElement(e)?a.cloneElement(e,{style:{width:"38px",height:"38px"}}):a.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(b,{$variant:r,children:(0,i.jsx)(c.N,{size:"64px"})}):(0,i.jsx)(b,{$variant:r,children:e&&("string"==typeof e?(0,i.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):a.isValidElement(e)?e:a.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let A=n.I4.div`
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
`,W=n.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},95204:(e,r,t)=>{t.d(r,{N:()=>n});var i=t(95155),a=t(20031);let n=({size:e,centerIcon:r})=>(0,i.jsx)(l,{$size:e,children:(0,i.jsxs)(o,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),r?(0,i.jsx)(s,{children:r}):null]})}),l=a.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,o=a.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,s=a.I4.div`
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