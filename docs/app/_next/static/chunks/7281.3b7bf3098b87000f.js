"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7281],{5917:(e,r,t)=>{t.d(r,{A:()=>i});let i=(0,t(71847).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},11509:(e,r,t)=>{t.d(r,{F:()=>a});var i=t(95155);let a=e=>(0,i.jsxs)("svg",{width:"33",height:"32",viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,i.jsx)("rect",{x:"0.5",width:"32",height:"32",rx:"4",fill:"#855DCD"}),(0,i.jsxs)("g",{"clip-path":"url(#clip0_1715_1960)",children:[(0,i.jsx)("path",{d:"M4.5 4H28.5V28H4.5V4Z",fill:"#855DCD"}),(0,i.jsx)("path",{d:"M11.1072 8.42105H21.6983V23.5789H20.1437V16.6357H20.1284C19.9566 14.7167 18.3542 13.2129 16.4028 13.2129C14.4514 13.2129 12.849 14.7167 12.6771 16.6357H12.6619V23.5789H11.1072V8.42105Z",fill:"white"}),(0,i.jsx)("path",{d:"M8.28943 10.5725L8.92101 12.7239H9.45542V21.4275C9.1871 21.4275 8.96959 21.6464 8.96959 21.9165V22.5032H8.87242C8.60411 22.5032 8.38659 22.7221 8.38659 22.9922V23.5789H13.8279V22.9922C13.8279 22.7221 13.6104 22.5032 13.3421 22.5032H13.2449V21.9165C13.2449 21.6464 13.0274 21.4275 12.7591 21.4275H12.1761V10.5725H8.28943Z",fill:"white"}),(0,i.jsx)("path",{d:"M20.2408 21.4275C19.9725 21.4275 19.755 21.6464 19.755 21.9165V22.5032H19.6579C19.3895 22.5032 19.172 22.7221 19.172 22.9922V23.5789H24.6133V22.9922C24.6133 22.7221 24.3958 22.5032 24.1275 22.5032H24.0303V21.9165C24.0303 21.6464 23.8128 21.4275 23.5445 21.4275V12.7239H24.0789L24.7105 10.5725H20.8238V21.4275H20.2408Z",fill:"white"})]}),(0,i.jsx)("defs",{children:(0,i.jsx)("clipPath",{id:"clip0_1715_1960",children:(0,i.jsx)("rect",{width:"24",height:"24",fill:"white",transform:"translate(4.5 4)"})})})]})},66365:(e,r,t)=>{t.d(r,{s:()=>a});var i=t(28317);let a=(e,r)=>(0,i.s)(e,r.ethereum.createOnLogin)||(0,i.g)(e,r.solana.createOnLogin)},67582:(e,r,t)=>{t.d(r,{O:()=>o});var i=t(95155),a=t(12115),n=t(20031);let o=e=>{let[r,t]=(0,a.useState)(!1);return(0,i.jsx)(l,{color:e.color,href:e.url,target:"_blank",rel:"noreferrer noopener",onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},justOpened:r,children:e.text})},l=n.I4.a`
  display: flex;
  align-items: center;
  gap: 6px;

  && {
    margin: 8px 2px;
    font-size: 14px;
    color: ${e=>e.justOpened?"var(--privy-color-foreground)":e.color||"var(--privy-color-foreground-3)"};
    font-weight: ${e=>e.justOpened?"medium":"normal"};
    transition: color 350ms ease;

    :focus,
    :active {
      background-color: transparent;
      border: none;
      outline: none;
      box-shadow: none;
    }

    :hover {
      color: ${e=>e.justOpened?"var(--privy-color-foreground)":"var(--privy-color-foreground-2)"};
    }

    :active {
      color: 'var(--privy-color-foreground)';
      font-weight: medium;
    }

    @media (max-width: 440px) {
      margin: 12px 2px;
    }
  }

  svg {
    width: 14px;
    height: 14px;
  }
`},71847:(e,r,t)=>{t.d(r,{A:()=>s});var i=t(12115);let a=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)},n=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,i.forwardRef)((e,r)=>{let{color:t="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:c="",children:d,iconNode:p,...h}=e;return(0,i.createElement)("svg",{ref:r,...o,width:a,height:a,stroke:t,strokeWidth:s?24*Number(l)/Number(a):l,className:n("lucide",c),...!d&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0})(h)&&{"aria-hidden":"true"},...h},[...p.map(e=>{let[r,t]=e;return(0,i.createElement)(r,t)}),...Array.isArray(d)?d:[d]])}),s=(e,r)=>{let t=(0,i.forwardRef)((t,o)=>{let{className:s,...c}=t;return(0,i.createElement)(l,{ref:o,iconNode:r,className:n("lucide-".concat(a(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),"lucide-".concat(e),s),...c})});return t.displayName=a(e),t}},75426:(e,r,t)=>{t.d(r,{A:()=>i});let i=(0,t(71847).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},76054:(e,r,t)=>{t.d(r,{L:()=>a});var i=t(20031);let a=i.I4.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */
`},77281:(e,r,t)=>{t.r(r),t.d(r,{FarcasterConnectStatusScreen:()=>z,FarcasterConnectStatusView:()=>F,default:()=>z});var i=t(95155),a=t(12115),n=t(92253),o=t(20031),l=t(72658),s=t(67582),c=t(20348),d=t(5917),p=t(75426),h=t(98218),u=t(76054),g=t(63771),v=t(49345),x=t(43425),f=t(21145),m=t(90154),y=t(66365),b=t(82953),w=t(11509);t(52769),t(50205),t(68463),t(14338);let j=o.I4.div`
  width: 100%;
`,k=o.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem;
  height: 56px;
  background: ${e=>e.$disabled?"var(--privy-color-background-2)":"var(--privy-color-background)"};
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-md);

  &:hover {
    border-color: ${e=>e.$disabled?"var(--privy-color-foreground-4)":"var(--privy-color-foreground-3)"};
  }
`,C=o.I4.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
`,I=o.I4.span`
  display: block;
  font-size: 16px;
  line-height: 24px;
  color: ${e=>e.$disabled?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  overflow: hidden;
  text-overflow: ellipsis;
  /* Use single-line truncation without nowrap to respect container width */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;

  @media (min-width: 441px) {
    font-size: 14px;
    line-height: 20px;
  }
`,S=(0,o.I4)(I)`
  color: var(--privy-color-foreground-3);
  font-style: italic;
`,E=(0,o.I4)(u.L)`
  margin-bottom: 0.5rem;
`,A=(0,o.I4)(h.S)`
  && {
    gap: 0.375rem;
    font-size: 14px;
    flex-shrink: 0;
  }
`,T=({value:e,title:r,placeholder:t,className:n,showCopyButton:o=!0,truncate:l,maxLength:s=40,disabled:c=!1})=>{let[h,u]=(0,a.useState)(!1),g=l&&e?((e,r,t)=>{if((e=e.startsWith("https://")?e.slice(8):e).length<=t)return e;if("middle"===r){let r=Math.ceil(t/2)-2,i=Math.floor(t/2)-1;return`${e.slice(0,r)}...${e.slice(-i)}`}return`${e.slice(0,t-3)}...`})(e,l,s):e;return(0,a.useEffect)(()=>{if(h){let e=setTimeout(()=>u(!1),3e3);return()=>clearTimeout(e)}},[h]),(0,i.jsxs)(j,{className:n,children:[r&&(0,i.jsx)(E,{children:r}),(0,i.jsxs)(k,{$disabled:c,children:[(0,i.jsx)(C,{children:e?(0,i.jsx)(I,{$disabled:c,title:e,children:g}):(0,i.jsx)(S,{$disabled:c,children:t||"No value"})}),o&&e&&(0,i.jsx)(A,{onClick:function(r){r.stopPropagation(),navigator.clipboard.writeText(e).then(()=>u(!0)).catch(console.error)},size:"sm",children:(0,i.jsxs)(i.Fragment,h?{children:["Copied",(0,i.jsx)(d.A,{size:14})]}:{children:["Copy",(0,i.jsx)(p.A,{size:14})]})})]})]})},F=({connectUri:e,loading:r,success:t,errorMessage:a,onBack:o,onClose:d,onOpenFarcaster:p})=>(0,i.jsx)(b.S,n.Fr||r?n.un?{title:a?a.message:"Sign in with Farcaster",subtitle:a?a.detail:"To sign in with Farcaster, please open the Farcaster app.",icon:w.F,iconVariant:"loading",iconLoadingStatus:{success:t,fail:!!a},primaryCta:e&&p?{label:"Open Farcaster app",onClick:p}:void 0,onBack:o,onClose:d,watermark:!0}:{title:a?a.message:"Signing in with Farcaster",subtitle:a?a.detail:"This should only take a moment",icon:w.F,iconVariant:"loading",iconLoadingStatus:{success:t,fail:!!a},onBack:o,onClose:d,watermark:!0,children:e&&n.Fr&&(0,i.jsx)($,{children:(0,i.jsx)(s.O,{text:"Take me to Farcaster",url:e,color:"#8a63d2"})})}:{title:"Sign in with Farcaster",subtitle:"Scan with your phone's camera to continue.",onBack:o,onClose:d,watermark:!0,children:(0,i.jsxs)(_,{children:[(0,i.jsx)(N,{children:e?(0,i.jsx)(c.Q,{url:e,size:275,squareLogoElement:w.F}):(0,i.jsx)(L,{children:(0,i.jsx)(l.L,{})})}),(0,i.jsxs)(V,{children:[(0,i.jsx)(H,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),e&&(0,i.jsx)(T,{value:e,truncate:"end",maxLength:30,showCopyButton:!0,disabled:!0})]})]})}),z={component:()=>{let{authenticated:e,logout:r,ready:t,user:n}=(0,m.u)(),{lastScreen:o,navigate:l,navigateBack:s,setModalData:c}=(0,f.u)(),d=(0,g.u)(),{getAuthFlow:p,loginWithFarcaster:h,closePrivyModal:u,createAnalyticsEvent:b}=(0,x.u)(),[w,j]=(0,a.useState)(void 0),[k,C]=(0,a.useState)(!1),[I,S]=(0,a.useState)(!1),E=(0,a.useRef)([]),A=p(),T=A?.meta.connectUri;return(0,a.useEffect)(()=>{let e=Date.now(),r=setInterval(async()=>{let t=await A.pollForReady.execute(),i=Date.now()-e;if(t){clearInterval(r),C(!0);try{await h(),S(!0)}catch(r){let e={retryable:!1,message:"Authentication failed"};if(r?.privyErrorCode===v.a.ALLOWLIST_REJECTED)return void l("AllowlistRejectionScreen");if(r?.privyErrorCode===v.a.USER_LIMIT_REACHED)return console.error(new v.j(r).toString()),void l("UserLimitReachedScreen");if(r?.privyErrorCode===v.a.USER_DOES_NOT_EXIST)return void l("AccountNotFoundScreen");if(r?.privyErrorCode===v.a.LINKED_TO_ANOTHER_USER)e.detail=r.message??"This account has already been linked to another user.";else{if(r?.privyErrorCode===v.a.ACCOUNT_TRANSFER_REQUIRED&&r.data?.data?.nonce)return c({accountTransfer:{nonce:r.data?.data?.nonce,account:r.data?.data?.subject,displayName:r.data?.data?.account?.displayName,linkMethod:"farcaster",embeddedWalletAddress:r.data?.data?.otherUser?.embeddedWalletAddress,farcasterEmbeddedAddress:r.data?.data?.otherUser?.farcasterEmbeddedAddress}}),void l("LinkConflictScreen");r?.privyErrorCode===v.a.INVALID_CREDENTIALS?(e.retryable=!0,e.detail="Something went wrong. Try again."):r?.privyErrorCode===v.a.TOO_MANY_REQUESTS&&(e.detail="Too many requests. Please wait before trying again.")}j(e)}}else i>12e4&&(clearInterval(r),j({retryable:!0,message:"Authentication failed",detail:"The request timed out. Try again."}))},2e3);return()=>{clearInterval(r),E.current.forEach(e=>clearTimeout(e))}},[]),(0,a.useEffect)(()=>{if(t&&e&&I&&n){if(d?.legal.requireUsersAcceptTerms&&!n.hasAcceptedTerms){let e=setTimeout(()=>{l("AffirmativeConsentScreen")},g.r);return()=>clearTimeout(e)}I&&((0,y.s)(n,d.embeddedWallets)?E.current.push(setTimeout(()=>{c({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),b({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"FarcasterConnectStatusScreen"}}),r()},callAuthOnSuccessOnClose:!0}}),l("EmbeddedWalletOnAccountCreateScreen")},g.r)):E.current.push(setTimeout(()=>u({shouldCallAuthOnSuccess:!0,isSuccess:!0}),g.r)))}},[I,t,e,n]),(0,i.jsx)(F,{connectUri:T,loading:k,success:I,errorMessage:w,onBack:o?s:void 0,onClose:u,onOpenFarcaster:()=>{T&&(window.location.href=T)}})}},$=o.I4.div`
  margin-top: 24px;
`,_=o.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,N=o.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,V=o.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,H=o.I4.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,L=o.I4.div`
  position: relative;
  width: 82px;
  height: 82px;
`},82953:(e,r,t)=>{t.d(r,{S:()=>o});var i=t(95155),a=t(98218),n=t(92715);let o=({primaryCta:e,secondaryCta:r,helpText:t,footerText:o,watermark:l=!0,children:s,...c})=>{let d=e||r?(0,i.jsxs)(i.Fragment,{children:[e&&(()=>{let{label:r,...t}=e,n=t.variant||"primary";return(0,i.jsx)(a.B,{...t,variant:n,style:{width:"100%",...t.style},children:r})})(),r&&(()=>{let{label:e,...t}=r,n=t.variant||"secondary";return(0,i.jsx)(a.B,{...t,variant:n,style:{width:"100%",...t.style},children:e})})()]}):null;return(0,i.jsxs)(n.S,{id:c.id,className:c.className,children:[(0,i.jsx)(n.S.Header,{...c}),s?(0,i.jsx)(n.S.Body,{children:s}):null,t||d||l?(0,i.jsxs)(n.S.Footer,{children:[t?(0,i.jsx)(n.S.HelpText,{children:t}):null,d?(0,i.jsx)(n.S.Actions,{children:d}):null,l?(0,i.jsx)(n.S.Watermark,{}):null]}):null,o?(0,i.jsx)(n.S.FooterText,{children:o}):null]})}},92715:(e,r,t)=>{t.d(r,{S:()=>k});var i=t(95155),a=t(12115),n=t(20031),o=t(72658),l=t(80596),s=t(98218),c=t(95204);let d=n.I4.div`
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
`,h=n.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,u=(0,n.I4)(s.M)`
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
`,y=n.I4.p`
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
`,k=({children:e,...r})=>(0,i.jsx)(d,{children:(0,i.jsx)(p,{...r,children:e})}),C=n.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,I=(0,n.I4)(l.B)`
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
`,E=({step:e})=>e?(0,i.jsx)(C,{children:(0,i.jsx)(S,{pct:Math.min(100,e.current/e.total*100)})}):null;k.Header=({title:e,subtitle:r,icon:t,iconVariant:a,iconLoadingStatus:n,showBack:o,onBack:l,showInfo:s,onInfo:c,showClose:d,onClose:p,step:g,headerTitle:v,eyebrow:b,...w})=>(0,i.jsxs)(h,{...w,children:[(0,i.jsx)(u,{backFn:o?l:void 0,infoFn:s?c:void 0,onClose:d?p:void 0,title:v,eyebrow:b,closeable:d}),(t||a||e||r)&&(0,i.jsxs)(x,{children:[t||a?(0,i.jsx)(k.Icon,{icon:t,variant:a,loadingStatus:n}):null,!(!e&&!r)&&(0,i.jsxs)(f,{children:[e&&(0,i.jsx)(m,{children:e}),r&&(0,i.jsx)(y,{children:r})]})]}),g&&(0,i.jsx)(E,{step:g})]}),(k.Body=a.forwardRef(({children:e,...r},t)=>(0,i.jsx)(g,{ref:t,...r,children:e}))).displayName="Screen.Body",k.Footer=({children:e,...r})=>(0,i.jsx)(v,{id:"privy-content-footer-container",...r,children:e}),k.Actions=({children:e,...r})=>(0,i.jsx)(A,{...r,children:e}),k.HelpText=({children:e,...r})=>(0,i.jsx)(T,{...r,children:e}),k.FooterText=({children:e,...r})=>(0,i.jsx)(F,{...r,children:e}),k.Watermark=()=>(0,i.jsx)(I,{}),k.Icon=({icon:e,variant:r="subtle",loadingStatus:t})=>"logo"===r&&e?(0,i.jsx)(w,"string"==typeof e?{children:(0,i.jsx)("img",{src:e,alt:""})}:a.isValidElement(e)?{children:e}:{children:a.createElement(e)}):"loading"===r?e?(0,i.jsx)(j,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(o.C,{success:t?.success,fail:t?.fail}),"string"==typeof e?(0,i.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):a.isValidElement(e)?a.cloneElement(e,{style:{width:"38px",height:"38px"}}):a.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(b,{$variant:r,children:(0,i.jsx)(c.N,{size:"64px"})}):(0,i.jsx)(b,{$variant:r,children:e&&("string"==typeof e?(0,i.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):a.isValidElement(e)?e:a.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let A=n.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,T=n.I4.div`
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
`,F=n.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},95204:(e,r,t)=>{t.d(r,{N:()=>n});var i=t(95155),a=t(20031);let n=({size:e,centerIcon:r})=>(0,i.jsx)(o,{$size:e,children:(0,i.jsxs)(l,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),r?(0,i.jsx)(s,{children:r}):null]})}),o=a.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,l=a.I4.div`
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