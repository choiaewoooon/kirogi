"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[782],{42529:(e,r,t)=>{t.d(r,{A:()=>i});let i=(0,t(71847).A)("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},60782:(e,r,t)=>{t.r(r),t.d(r,{CaptchaScreen:()=>u,CaptchaScreenView:()=>d,default:()=>u});var i=t(95155),a=t(42529),n=t(78874),o=t(12115),s=t(28317),l=t(21145),c=t(82953);t(68463),t(50205),t(92253),t(14338);let d=({status:e,title:r,description:t,userIntentRequired:s,retriesRemaining:l,hasSelectedCta:d,onContinue:u,onRetry:p})=>{let h=(0,o.useMemo)(()=>{switch(e){case"loading":default:return;case"success":return s?{label:d?"Continuing...":"Continue",onClick:u,disabled:d,loading:d}:void 0;case"error":return l>0?{label:"Retry",onClick:p}:void 0}},[e,d,u,p]),g=(0,o.useMemo)(()=>({loading:"loading",ready:"subtle",disabled:"subtle",success:"success",error:"error"})[e]||"loading",[e]);return(0,i.jsx)(c.S,{icon:"loading"===e||"ready"===e?void 0:"success"===e?a.A:n.A,iconVariant:g,title:r,subtitle:t,primaryCta:h,watermark:!0})},u={component:()=>{let{lastScreen:e,data:r,navigate:t,setModalData:a}=(0,l.u)(),{status:n,token:c,waitForResult:u,reset:p,execute:h}=(0,s.a)(),g=(0,o.useRef)([]),v=e=>{g.current=[e,...g.current]},[x,f]=(0,o.useState)(!0);(0,o.useEffect)(()=>(v(setTimeout(f,1e3,!1)),()=>{g.current.forEach(e=>clearTimeout(e)),g.current=[]}),[]);let[m,y]=(0,o.useState)(""),[b,w]=(0,o.useState)("Checking that you are a human..."),[k,j]=(0,o.useState)(!1),[I,C]=(0,o.useState)(3),S=r?.captchaModalData,E=async r=>{try{await S?.callback(r),S?.onSuccessNavigateTo&&t(S?.onSuccessNavigateTo,!1)}catch(r){if(r instanceof s.C)return;a({errorModalData:{error:r,previousScreen:e||"LandingScreen"}}),t(S?.onErrorNavigateTo||"ErrorScreen",!1)}};return(0,o.useEffect)(()=>{"success"===n?v(setTimeout(async()=>{let e=await u();!e||S?.userIntentRequired||E(e)},1e3)):"ready"===n&&v(setTimeout(()=>{"ready"===n&&h()},500))},[n]),(0,o.useEffect)(()=>{if(!x)switch(n){case"success":y("Success!"),w("CAPTCHA passed successfully."),S?.userIntentRequired||setTimeout(()=>{j(!0),E(c)},2e3);break;case"loading":y(""),w("Checking that you are a human...");break;case"error":y("Something went wrong"),w(I<=0?"If you use an adblocker or VPN, try disabling and re-attempting.":"You did not pass CAPTCHA. Please try again.")}},[n,x,k]),(0,i.jsx)(d,{status:n,title:m,description:b,userIntentRequired:S?.userIntentRequired,retriesRemaining:I,hasSelectedCta:k,onContinue:()=>{j(!0),E(c)},onRetry:async()=>{if(I<=0)return;C(e=>e-1),p(),h();let e=await u();!e||S?.userIntentRequired||E(e)}})}}},71847:(e,r,t)=>{t.d(r,{A:()=>l});var i=t(12115);let a=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)},n=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=(0,i.forwardRef)((e,r)=>{let{color:t="currentColor",size:a=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:c="",children:d,iconNode:u,...p}=e;return(0,i.createElement)("svg",{ref:r,...o,width:a,height:a,stroke:t,strokeWidth:l?24*Number(s)/Number(a):s,className:n("lucide",c),...!d&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0})(p)&&{"aria-hidden":"true"},...p},[...u.map(e=>{let[r,t]=e;return(0,i.createElement)(r,t)}),...Array.isArray(d)?d:[d]])}),l=(e,r)=>{let t=(0,i.forwardRef)((t,o)=>{let{className:l,...c}=t;return(0,i.createElement)(s,{ref:o,iconNode:r,className:n("lucide-".concat(a(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),"lucide-".concat(e),l),...c})});return t.displayName=a(e),t}},78874:(e,r,t)=>{t.d(r,{A:()=>i});let i=(0,t(71847).A)("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])},82953:(e,r,t)=>{t.d(r,{S:()=>o});var i=t(95155),a=t(98218),n=t(92715);let o=({primaryCta:e,secondaryCta:r,helpText:t,footerText:o,watermark:s=!0,children:l,...c})=>{let d=e||r?(0,i.jsxs)(i.Fragment,{children:[e&&(()=>{let{label:r,...t}=e,n=t.variant||"primary";return(0,i.jsx)(a.B,{...t,variant:n,style:{width:"100%",...t.style},children:r})})(),r&&(()=>{let{label:e,...t}=r,n=t.variant||"secondary";return(0,i.jsx)(a.B,{...t,variant:n,style:{width:"100%",...t.style},children:e})})()]}):null;return(0,i.jsxs)(n.S,{id:c.id,className:c.className,children:[(0,i.jsx)(n.S.Header,{...c}),l?(0,i.jsx)(n.S.Body,{children:l}):null,t||d||s?(0,i.jsxs)(n.S.Footer,{children:[t?(0,i.jsx)(n.S.HelpText,{children:t}):null,d?(0,i.jsx)(n.S.Actions,{children:d}):null,s?(0,i.jsx)(n.S.Watermark,{}):null]}):null,o?(0,i.jsx)(n.S.FooterText,{children:o}):null]})}},92715:(e,r,t)=>{t.d(r,{S:()=>j});var i=t(95155),a=t(12115),n=t(20031),o=t(72658),s=t(80596),l=t(98218),c=t(95204);let d=n.I4.div`
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
`,k=n.I4.div`
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
`,j=({children:e,...r})=>(0,i.jsx)(d,{children:(0,i.jsx)(u,{...r,children:e})}),I=n.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,C=(0,n.I4)(s.B)`
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
`,E=({step:e})=>e?(0,i.jsx)(I,{children:(0,i.jsx)(S,{pct:Math.min(100,e.current/e.total*100)})}):null;j.Header=({title:e,subtitle:r,icon:t,iconVariant:a,iconLoadingStatus:n,showBack:o,onBack:s,showInfo:l,onInfo:c,showClose:d,onClose:u,step:g,headerTitle:v,eyebrow:b,...w})=>(0,i.jsxs)(p,{...w,children:[(0,i.jsx)(h,{backFn:o?s:void 0,infoFn:l?c:void 0,onClose:d?u:void 0,title:v,eyebrow:b,closeable:d}),(t||a||e||r)&&(0,i.jsxs)(x,{children:[t||a?(0,i.jsx)(j.Icon,{icon:t,variant:a,loadingStatus:n}):null,!(!e&&!r)&&(0,i.jsxs)(f,{children:[e&&(0,i.jsx)(m,{children:e}),r&&(0,i.jsx)(y,{children:r})]})]}),g&&(0,i.jsx)(E,{step:g})]}),(j.Body=a.forwardRef(({children:e,...r},t)=>(0,i.jsx)(g,{ref:t,...r,children:e}))).displayName="Screen.Body",j.Footer=({children:e,...r})=>(0,i.jsx)(v,{id:"privy-content-footer-container",...r,children:e}),j.Actions=({children:e,...r})=>(0,i.jsx)(z,{...r,children:e}),j.HelpText=({children:e,...r})=>(0,i.jsx)(A,{...r,children:e}),j.FooterText=({children:e,...r})=>(0,i.jsx)(R,{...r,children:e}),j.Watermark=()=>(0,i.jsx)(C,{}),j.Icon=({icon:e,variant:r="subtle",loadingStatus:t})=>"logo"===r&&e?(0,i.jsx)(w,"string"==typeof e?{children:(0,i.jsx)("img",{src:e,alt:""})}:a.isValidElement(e)?{children:e}:{children:a.createElement(e)}):"loading"===r?e?(0,i.jsx)(k,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(o.C,{success:t?.success,fail:t?.fail}),"string"==typeof e?(0,i.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):a.isValidElement(e)?a.cloneElement(e,{style:{width:"38px",height:"38px"}}):a.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(b,{$variant:r,children:(0,i.jsx)(c.N,{size:"64px"})}):(0,i.jsx)(b,{$variant:r,children:e&&("string"==typeof e?(0,i.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):a.isValidElement(e)?e:a.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let z=n.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,A=n.I4.div`
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
`,R=n.I4.div`
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