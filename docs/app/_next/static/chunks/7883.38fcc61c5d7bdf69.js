"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7883],{5917:(e,r,t)=>{t.d(r,{A:()=>i});let i=(0,t(71847).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},47883:(e,r,t)=>{t.r(r),t.d(r,{EmbeddedWalletKeyExportScreen:()=>y,EmbeddedWalletKeyExportView:()=>g,constructWalletExportIframeUrl:()=>m,default:()=>y,supportsSeedPhraseExport:()=>v});var i=t(95155),n=t(12115),o=t(20031),a=t(38519),l=t(87620),s=t(93967),d=t(63771),c=t(43425),p=t(21145),h=t(90154),u=t(82953);t(50205);let g=({address:e,hideWalletAddress:r,accessToken:t,appConfigTheme:n,onClose:o,exportButtonProps:a,onBack:d})=>(0,i.jsx)(u.S,{title:"Export wallet",subtitle:(0,i.jsxs)(i.Fragment,{children:["Copy either your private key or seed phrase to export your wallet."," ",(0,i.jsx)("a",{href:"https://privy-io.notion.site/Transferring-your-account-9dab9e16c6034a7ab1ff7fa479b02828",target:"blank",rel:"noopener noreferrer",children:"Learn more"})]}),onClose:o,onBack:d,showBack:!!d,watermark:!0,children:(0,i.jsxs)(x,{children:[(0,i.jsx)(l.W,{theme:n,children:"Never share your private key or seed phrase with anyone."}),!r&&(0,i.jsx)(s.W,{title:"Your wallet",address:e,showCopyButton:!0}),(0,i.jsx)("div",{style:{width:"100%"},children:t&&a&&(0,i.jsx)(f,{accessToken:t,dimensions:{height:"44px"},...a})})]})}),x=o.I4.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: left;
`;function v({chainType:e,imported:r,isUnifiedWallet:t}){return!r&&(t?"ethereum"===e||"bitcoin-taproot"===e||"pearl"===e:"ethereum"===e)}function f(e){let[r,t]=(0,n.useState)(e.dimensions.width),[o,a]=(0,n.useState)(!1),[l,s]=(0,n.useState)(void 0),d=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(d.current&&void 0===r){let{width:e}=d.current.getBoundingClientRect();t(e)}let e=getComputedStyle(document.documentElement);s({background:e.getPropertyValue("--privy-color-background"),background2:e.getPropertyValue("--privy-color-background-2"),foreground3:e.getPropertyValue("--privy-color-foreground-3"),foregroundAccent:e.getPropertyValue("--privy-color-foreground-accent"),accent:e.getPropertyValue("--privy-color-accent"),accentDark:e.getPropertyValue("--privy-color-accent-dark"),success:e.getPropertyValue("--privy-color-success"),colorScheme:e.getPropertyValue("color-scheme")})},[]);let c=v({chainType:e.chainType,imported:e.imported,isUnifiedWallet:e.isUnifiedWallet});return(0,i.jsx)("div",{ref:d,children:r&&(0,i.jsxs)(b,{children:[(0,i.jsx)("iframe",{style:{position:"absolute",zIndex:1,opacity:+!!o,transition:"opacity 50ms ease-in-out",pointerEvents:o?"auto":"none"},onLoad:()=>setTimeout(()=>a(!0),1500),width:r,height:e.dimensions.height,allow:"clipboard-write self *",src:m({origin:e.origin,appId:e.appId,appClientId:e.appClientId,walletId:e.walletId,entropyId:e.entropyId,entropyIdVerifier:e.entropyIdVerifier,hdWalletIndex:e.hdWalletIndex,chainType:e.chainType,accessToken:e.accessToken,clientAnalyticsId:e.clientAnalyticsId,width:r,palette:l,isUnifiedWallet:e.isUnifiedWallet,exportSeedPhrase:c})}),(0,i.jsx)(w,{children:"Loading..."}),c&&(0,i.jsx)(w,{children:"Loading..."})]})})}let y={component:()=>{let[e,r]=(0,n.useState)(null),{authenticated:t,user:o}=(0,h.u)(),{closePrivyModal:a,createAnalyticsEvent:l,clientAnalyticsId:s,client:u}=(0,c.u)(),x=(0,d.u)(),{data:v,onUserCloseViaDialogOrKeybindRef:f}=(0,p.u)(),{onFailure:y,onSuccess:m,origin:b,appId:w,appClientId:j,entropyId:I,entropyIdVerifier:k,walletId:C,hdWalletIndex:z,chainType:A,address:E,uiOptions:S,isUnifiedWallet:T,imported:W,showBackButton:$}=v.keyExport,B=e=>{a({shouldCallAuthOnSuccess:!1}),y("string"==typeof e?Error(e):e)},_=()=>{a({shouldCallAuthOnSuccess:!1}),m(),l({eventName:"embedded_wallet_key_export_completed",payload:{walletAddress:E}})};return(0,n.useEffect)(()=>{if(!t)return B("User must be authenticated before exporting their wallet");u.getAccessToken().then(r).catch(B)},[t,o]),f.current=_,(0,i.jsx)(g,{address:E,hideWalletAddress:S?.hideWalletAddress,accessToken:e,appConfigTheme:x.appearance.palette.colorScheme,onClose:_,isLoading:!e,onBack:$?_:void 0,exportButtonProps:e?{origin:b,appId:w,appClientId:j,clientAnalyticsId:s,entropyId:I,entropyIdVerifier:k,walletId:C,hdWalletIndex:z,isUnifiedWallet:T,imported:W,chainType:A}:void 0})}};function m({origin:e,appId:r,appClientId:t,walletId:i,entropyId:n,entropyIdVerifier:o,hdWalletIndex:l,chainType:s,accessToken:d,clientAnalyticsId:c,width:p,palette:h,isUnifiedWallet:u,exportSeedPhrase:g}){return(0,a.j)({origin:e,path:`/apps/${r}/embedded-wallets/export`,query:u?{v:"1-unified",wallet_id:i,chain_type:s,client_id:t,width:`${p}px`,caid:c,phrase_export:g,...h}:{v:"1",entropy_id:n,entropy_id_verifier:o,hd_wallet_index:l,chain_type:s,client_id:t,width:`${p}px`,caid:c,phrase_export:g,...h},hash:{token:d}})}let b=o.I4.div`
  overflow: visible;
  position: relative;
  height: 44px;
  display: flex;
  gap: 12px;
`,w=o.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  border-radius: var(--privy-border-radius-md);
  background-color: var(--privy-color-background-2);
  color: var(--privy-color-foreground-3);
`},55211:(e,r,t)=>{t.d(r,{E:()=>n});var i=t(20031);let n=i.I4.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`},69447:(e,r,t)=>{t.d(r,{A:()=>c});var i=t(95155),n=t(5917),o=t(75426),a=t(12115),l=t(20031),s=t(93173),d=t(98218);let c=({address:e,showCopyIcon:r,url:t,className:l})=>{let[c,g]=(0,a.useState)(!1);function x(r){r.stopPropagation(),navigator.clipboard.writeText(e).then(()=>g(!0)).catch(console.error)}return(0,a.useEffect)(()=>{if(c){let e=setTimeout(()=>g(!1),3e3);return()=>clearTimeout(e)}},[c]),(0,i.jsxs)(p,t?{children:[(0,i.jsx)(u,{title:e,className:l,href:`${t}/address/${e}`,target:"_blank",children:(0,s.c)(e)}),r&&(0,i.jsx)(d.S,{onClick:x,size:"sm",style:{gap:"0.375rem"},children:(0,i.jsxs)(i.Fragment,c?{children:["Copied",(0,i.jsx)(n.A,{size:16})]}:{children:["Copy",(0,i.jsx)(o.A,{size:16})]})})]}:{children:[(0,i.jsx)(h,{title:e,className:l,children:(0,s.c)(e)}),r&&(0,i.jsx)(d.S,{onClick:x,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:(0,i.jsxs)(i.Fragment,c?{children:["Copied",(0,i.jsx)(n.A,{size:14})]}:{children:["Copy",(0,i.jsx)(o.A,{size:14})]})})]})},p=l.I4.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,h=l.I4.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,u=l.I4.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`},71847:(e,r,t)=>{t.d(r,{A:()=>s});var i=t(12115);let n=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)},o=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,i.forwardRef)((e,r)=>{let{color:t="currentColor",size:n=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:d="",children:c,iconNode:p,...h}=e;return(0,i.createElement)("svg",{ref:r,...a,width:n,height:n,stroke:t,strokeWidth:s?24*Number(l)/Number(n):l,className:o("lucide",d),...!c&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0})(h)&&{"aria-hidden":"true"},...h},[...p.map(e=>{let[r,t]=e;return(0,i.createElement)(r,t)}),...Array.isArray(c)?c:[c]])}),s=(e,r)=>{let t=(0,i.forwardRef)((t,a)=>{let{className:s,...d}=t;return(0,i.createElement)(l,{ref:a,iconNode:r,className:o("lucide-".concat(n(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),"lucide-".concat(e),s),...d})});return t.displayName=n(e),t}},75426:(e,r,t)=>{t.d(r,{A:()=>i});let i=(0,t(71847).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},76054:(e,r,t)=>{t.d(r,{L:()=>n});var i=t(20031);let n=i.I4.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */
`},82953:(e,r,t)=>{t.d(r,{S:()=>a});var i=t(95155),n=t(98218),o=t(92715);let a=({primaryCta:e,secondaryCta:r,helpText:t,footerText:a,watermark:l=!0,children:s,...d})=>{let c=e||r?(0,i.jsxs)(i.Fragment,{children:[e&&(()=>{let{label:r,...t}=e,o=t.variant||"primary";return(0,i.jsx)(n.B,{...t,variant:o,style:{width:"100%",...t.style},children:r})})(),r&&(()=>{let{label:e,...t}=r,o=t.variant||"secondary";return(0,i.jsx)(n.B,{...t,variant:o,style:{width:"100%",...t.style},children:e})})()]}):null;return(0,i.jsxs)(o.S,{id:d.id,className:d.className,children:[(0,i.jsx)(o.S.Header,{...d}),s?(0,i.jsx)(o.S.Body,{children:s}):null,t||c||l?(0,i.jsxs)(o.S.Footer,{children:[t?(0,i.jsx)(o.S.HelpText,{children:t}):null,c?(0,i.jsx)(o.S.Actions,{children:c}):null,l?(0,i.jsx)(o.S.Watermark,{}):null]}):null,a?(0,i.jsx)(o.S.FooterText,{children:a}):null]})}},87620:(e,r,t)=>{t.d(r,{W:()=>a});var i=t(95155),n=t(88125),o=t(20031);let a=({children:e,theme:r,className:t})=>(0,i.jsxs)(l,{$theme:r,className:t,children:[(0,i.jsx)(n.A,{width:"16px",height:"16px",color:"var(--privy-color-icon-warning)",strokeWidth:2,style:{flexShrink:0}}),(0,i.jsx)(s,{$theme:r,children:e})]}),l=o.I4.div`
  display: flex;
  gap: 0.5rem;
  background-color: var(--privy-color-warn-bg);
  border: 1px solid var(--privy-color-border-warning);
  align-items: flex-start;
  padding: 0.75rem;
  border-radius: 0.5rem;
  overflow: clip;
  width: 100%;
`,s=o.I4.div`
  color: ${e=>"dark"===e.$theme?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
  flex: 1;
  text-align: left;
  font-feature-settings:
    'calt' 0,
    'kern' 0;
`},88125:(e,r,t)=>{t.d(r,{A:()=>n});var i=t(12115);let n=i.forwardRef(function(e,r){let{title:t,titleId:n,...o}=e;return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},o),t?i.createElement("title",{id:n},t):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"}))})},92715:(e,r,t)=>{t.d(r,{S:()=>I});var i=t(95155),n=t(12115),o=t(20031),a=t(72658),l=t(80596),s=t(98218),d=t(95204);let c=o.I4.div`
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
`,h=o.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,u=(0,o.I4)(s.M)`
  margin: 0 -8px;
`,g=o.I4.div`
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
`,x=o.I4.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
  margin-top: 1.5rem;
`,v=o.I4.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,f=o.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,y=o.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,m=o.I4.p`
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
`,I=({children:e,...r})=>(0,i.jsx)(c,{children:(0,i.jsx)(p,{...r,children:e})}),k=o.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,C=(0,o.I4)(l.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,z=o.I4.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,A=({step:e})=>e?(0,i.jsx)(k,{children:(0,i.jsx)(z,{pct:Math.min(100,e.current/e.total*100)})}):null;I.Header=({title:e,subtitle:r,icon:t,iconVariant:n,iconLoadingStatus:o,showBack:a,onBack:l,showInfo:s,onInfo:d,showClose:c,onClose:p,step:g,headerTitle:x,eyebrow:b,...w})=>(0,i.jsxs)(h,{...w,children:[(0,i.jsx)(u,{backFn:a?l:void 0,infoFn:s?d:void 0,onClose:c?p:void 0,title:x,eyebrow:b,closeable:c}),(t||n||e||r)&&(0,i.jsxs)(v,{children:[t||n?(0,i.jsx)(I.Icon,{icon:t,variant:n,loadingStatus:o}):null,!(!e&&!r)&&(0,i.jsxs)(f,{children:[e&&(0,i.jsx)(y,{children:e}),r&&(0,i.jsx)(m,{children:r})]})]}),g&&(0,i.jsx)(A,{step:g})]}),(I.Body=n.forwardRef(({children:e,...r},t)=>(0,i.jsx)(g,{ref:t,...r,children:e}))).displayName="Screen.Body",I.Footer=({children:e,...r})=>(0,i.jsx)(x,{id:"privy-content-footer-container",...r,children:e}),I.Actions=({children:e,...r})=>(0,i.jsx)(E,{...r,children:e}),I.HelpText=({children:e,...r})=>(0,i.jsx)(S,{...r,children:e}),I.FooterText=({children:e,...r})=>(0,i.jsx)(T,{...r,children:e}),I.Watermark=()=>(0,i.jsx)(C,{}),I.Icon=({icon:e,variant:r="subtle",loadingStatus:t})=>"logo"===r&&e?(0,i.jsx)(w,"string"==typeof e?{children:(0,i.jsx)("img",{src:e,alt:""})}:n.isValidElement(e)?{children:e}:{children:n.createElement(e)}):"loading"===r?e?(0,i.jsx)(j,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(a.C,{success:t?.success,fail:t?.fail}),"string"==typeof e?(0,i.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):n.isValidElement(e)?n.cloneElement(e,{style:{width:"38px",height:"38px"}}):n.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(b,{$variant:r,children:(0,i.jsx)(d.N,{size:"64px"})}):(0,i.jsx)(b,{$variant:r,children:e&&("string"==typeof e?(0,i.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):n.isValidElement(e)?e:n.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let E=o.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,S=o.I4.div`
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
`},93967:(e,r,t)=>{t.d(r,{W:()=>b});var i=t(95155),n=t(5917),o=t(75426),a=t(12115),l=t(20031),s=t(98218),d=t(55211),c=t(76054),p=t(69447),h=t(99788);let u=(0,l.I4)(h.B)`
  && {
    padding: 0.75rem;
    height: 56px;
  }
`,g=l.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,x=l.I4.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,v=l.I4.div`
  font-size: 12px;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,f=(0,l.I4)(c.L)`
  text-align: left;
  margin-bottom: 0.5rem;
`,y=(0,l.I4)(d.E)`
  margin-top: 0.25rem;
`,m=(0,l.I4)(s.S)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`,b=({errMsg:e,balance:r,address:t,className:l,title:s,showCopyButton:d=!1})=>{let[c,h]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(c){let e=setTimeout(()=>h(!1),3e3);return()=>clearTimeout(e)}},[c]),(0,i.jsxs)("div",{children:[s&&(0,i.jsx)(f,{children:s}),(0,i.jsx)(u,{className:l,$state:e?"error":void 0,children:(0,i.jsxs)(g,{children:[(0,i.jsxs)(x,{children:[(0,i.jsx)(p.A,{address:t,showCopyIcon:!1}),void 0!==r&&(0,i.jsx)(v,{children:r})]}),d&&(0,i.jsx)(m,{onClick:function(e){e.stopPropagation(),navigator.clipboard.writeText(t).then(()=>h(!0)).catch(console.error)},size:"sm",children:(0,i.jsxs)(i.Fragment,c?{children:["Copied",(0,i.jsx)(n.A,{size:14})]}:{children:["Copy",(0,i.jsx)(o.A,{size:14})]})})]})}),e&&(0,i.jsx)(y,{children:e})]})}},95204:(e,r,t)=>{t.d(r,{N:()=>o});var i=t(95155),n=t(20031);let o=({size:e,centerIcon:r})=>(0,i.jsx)(a,{$size:e,children:(0,i.jsxs)(l,{children:[(0,i.jsx)(d,{}),(0,i.jsx)(c,{}),r?(0,i.jsx)(s,{children:r}):null]})}),a=n.I4.div`
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
`,d=n.I4.div`
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
`,c=n.I4.div`
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
`},99788:(e,r,t)=>{t.d(r,{B:()=>o,a:()=>n});var i=t(20031);let n=(0,i.AH)`
  && {
    border-width: 1px;
    padding: 0.5rem 1rem;
  }

  width: 100%;
  text-align: left;
  border: solid 1px var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-md);
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${e=>"error"===e.$state?"\n        border-color: var(--privy-color-error);\n        background: var(--privy-color-error-bg);\n      ":""}
`,o=i.I4.div`
  ${n}
`}}]);