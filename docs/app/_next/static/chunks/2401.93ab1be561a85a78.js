"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2401],{11509:(e,t,a)=>{a.d(t,{F:()=>l});var i=a(95155);let l=e=>(0,i.jsxs)("svg",{width:"33",height:"32",viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,i.jsx)("rect",{x:"0.5",width:"32",height:"32",rx:"4",fill:"#855DCD"}),(0,i.jsxs)("g",{"clip-path":"url(#clip0_1715_1960)",children:[(0,i.jsx)("path",{d:"M4.5 4H28.5V28H4.5V4Z",fill:"#855DCD"}),(0,i.jsx)("path",{d:"M11.1072 8.42105H21.6983V23.5789H20.1437V16.6357H20.1284C19.9566 14.7167 18.3542 13.2129 16.4028 13.2129C14.4514 13.2129 12.849 14.7167 12.6771 16.6357H12.6619V23.5789H11.1072V8.42105Z",fill:"white"}),(0,i.jsx)("path",{d:"M8.28943 10.5725L8.92101 12.7239H9.45542V21.4275C9.1871 21.4275 8.96959 21.6464 8.96959 21.9165V22.5032H8.87242C8.60411 22.5032 8.38659 22.7221 8.38659 22.9922V23.5789H13.8279V22.9922C13.8279 22.7221 13.6104 22.5032 13.3421 22.5032H13.2449V21.9165C13.2449 21.6464 13.0274 21.4275 12.7591 21.4275H12.1761V10.5725H8.28943Z",fill:"white"}),(0,i.jsx)("path",{d:"M20.2408 21.4275C19.9725 21.4275 19.755 21.6464 19.755 21.9165V22.5032H19.6579C19.3895 22.5032 19.172 22.7221 19.172 22.9922V23.5789H24.6133V22.9922C24.6133 22.7221 24.3958 22.5032 24.1275 22.5032H24.0303V21.9165C24.0303 21.6464 23.8128 21.4275 23.5445 21.4275V12.7239H24.0789L24.7105 10.5725H20.8238V21.4275H20.2408Z",fill:"white"})]}),(0,i.jsx)("defs",{children:(0,i.jsx)("clipPath",{id:"clip0_1715_1960",children:(0,i.jsx)("rect",{width:"24",height:"24",fill:"white",transform:"translate(4.5 4)"})})})]})},18307:(e,t,a)=>{a.d(t,{C:()=>h});var i=a(95155),l=a(12115),r=a(20031),n=a(76928),o=a(13213),s=a(63771),d=a(13559),c=a(98218),p=a(78320);let u=({value:e,onChange:t})=>(0,i.jsx)("select",{value:e,onChange:t,children:n.QN.map(e=>(0,i.jsxs)("option",{value:e.code,children:[e.code," +",e.callCode]},e.code))}),h=(0,l.forwardRef)((e,t)=>{let a=(0,s.u)(),[r,h]=(0,l.useState)(!1),{accountType:x}=(0,d.h)(),[f,y]=(0,l.useState)(""),[v,w]=(0,l.useState)(e.defaultCountry??a?.intl.defaultCountry??"US"),j=(0,n.Q7)(f,v),b=(0,n.qi)(v),C=(0,n.jZ)(v),k=(0,o.K)(v),S=!j,[M,T]=(0,l.useState)(!1),A=k.length,L=t=>{let a=t.target.value;w(a),y(""),e.onChange&&e.onChange({rawPhoneNumber:f,qualifiedPhoneNumber:(0,n.n4)(f,a),countryCode:a,isValid:(0,n.Q7)(f,v)})},E=(t,a)=>{try{let i=t.replace(/\D/g,"")===f.replace(/\D/g,"")?t:b.input(t);y(i),e.onChange&&e.onChange({rawPhoneNumber:i,qualifiedPhoneNumber:(0,n.n4)(t,a),countryCode:a,isValid:(0,n.Q7)(t,a)})}catch(e){console.error("Error processing phone number:",e)}},P=()=>{T(!0);let t=(0,n.n4)(f,v);e.onSubmit({rawPhoneNumber:f,qualifiedPhoneNumber:t,countryCode:v,isValid:(0,n.Q7)(f,v)}).finally(()=>T(!1))};return(0,l.useEffect)(()=>{if(e.defaultValue){let t=(0,n.oj)(e.defaultValue);b.reset(),L({target:{value:t.countryCode}}),E(t.phone,t.countryCode)}},[e.defaultValue]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g,{children:(0,i.jsxs)(m,{$callingCodeLength:A,$stacked:e.stacked,children:[(0,i.jsx)(u,{value:v,onChange:L}),(0,i.jsx)("input",{ref:t,id:"phone-number-input",className:"login-method-button",type:"tel",placeholder:C,onFocus:()=>h(!0),onChange:e=>{E(e.target.value,v)},onKeyUp:e=>{"Enter"===e.key&&P()},value:f,autoComplete:"tel"}),"phone"!==x||r||e.hideRecent?e.stacked||e.noIncludeSubmitButton?(0,i.jsx)("span",{}):(0,i.jsx)(c.E,{isSubmitting:M,onClick:P,disabled:S,children:"Submit"}):(0,i.jsx)(p.C,{color:"gray",children:"Recent"})]})}),e.stacked&&!e.noIncludeSubmitButton?(0,i.jsx)(c.P,{loading:M,loadingText:null,onClick:P,disabled:S,children:"Submit"}):null]})}),g=r.I4.div`
  width: 100%;
`,m=r.I4.label`
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
`},23664:(e,t,a)=>{a.d(t,{A:()=>i});let i=(0,a(71847).A)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]])},42401:(e,t,a)=>{a.d(t,{C:()=>en,L:()=>Y});var i=a(95155),l=a(12115);let r=l.forwardRef(function(e,t){let{title:a,titleId:i,...r}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},r),a?l.createElement("title",{id:i},a):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))});var n=a(20031),o=a(80596),s=a(98218),d=a(63771),c=a(78017),p=a(43425),u=a(21145),h=a(28317),g=a(79100),m=a(13559),x=a(93173),f=a(72658),y=a(90154),v=a(53626),w=a(23664),j=a(52508);let b=(0,a(71847).A)("circle-user",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);var C=a(83060),k=a(78320),S=a(11509),M=a(76928),T=a(8443),A=a(69240),L=a(83988),E=a(18307),P=a(21209),I=a(4636),N=a(56967),V=a(81559),W=a(82953);let $=()=>{let e=(0,d.u)(),t=e?.appearance?.logo,a=`${e?.name} logo`,r={maxHeight:"90px",maxWidth:"180px"};return t?"string"==typeof t?(0,i.jsx)("img",{src:t,alt:a,style:r}):"svg"===t.type||"img"===t.type?l.cloneElement(t,{alt:a,style:r}):(console.warn("`config.appearance.logo` must be a string, or an SVG / IMG element. Nothing will be rendered."),null):null},H=n.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  flex-grow: 1;
  justify-content: center;
`,D=({name:e,logoUrl:t,size:a="38px"})=>"string"==typeof t?(0,i.jsx)("img",{src:t,alt:`${e??"Provider app"} logo`,style:{width:a,height:a,maxHeight:"90px",maxWidth:"180px",borderRadius:"8px"}}):(0,i.jsx)("span",{}),R=({appId:e})=>{let[t,a]=(0,l.useState)(void 0),{startCrossAppAuthFlow:r}=(0,v.b)(),{authenticated:n}=(0,y.u)(),{data:o}=(0,u.u)(),{client:s}=(0,p.u)();return(0,l.useEffect)(()=>{(async()=>{s&&a(await s.getCrossAppProviderDetails(e))})()},[s]),(0,i.jsx)(m.L,{onClick:()=>r({appId:e,action:n?"link":"login",disableSignup:o?.login?.disableSignup}),disabled:!t,children:t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.m,{$fullSize:!0,children:(0,i.jsx)(D,{name:t.name,logoUrl:t.icon_url||void 0,size:"32px"})}),t.name]}):(0,i.jsx)(f.B,{})})},F=({isEditable:e,setIsEditable:t,defaultValue:a})=>{let r=(0,l.useRef)(null);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.H,{$if:!e,children:(0,i.jsx)(C.C,{ref:r,defaultValue:a})}),(0,i.jsx)(m.H,{$if:e,children:(0,i.jsxs)(m.L,{onClick:()=>{t(),setTimeout(()=>{r.current?.focus()},0)},children:[(0,i.jsx)(m.m,{children:(0,i.jsx)(w.A,{})}),"Continue with Email"]})})]})},O=()=>{let[e,t]=(0,l.useState)(!1),{currentScreen:a,navigate:r,setModalData:n,data:o}=(0,u.u)(),{enabled:s,token:d}=(0,h.a)(),{initLoginWithFarcaster:c}=(0,p.u)(),{accountType:g}=(0,m.h)();return(0,i.jsxs)(m.L,{onClick:async()=>{t(!0);try{s&&!d?(n({captchaModalData:{callback:e=>c(e,o?.login?.disableSignup),userIntentRequired:!0,onSuccessNavigateTo:"FarcasterConnectStatusScreen",onErrorNavigateTo:"ErrorScreen"}}),r("CaptchaScreen")):(await c(d,o?.login?.disableSignup),r("FarcasterConnectStatusScreen"))}catch(e){n({errorModalData:{error:e,previousScreen:a||"LandingScreen"}}),r("ErrorScreen")}finally{t(!1)}},disabled:!1,children:[(0,i.jsx)(S.F,{width:32,height:32})," Farcaster",e&&(0,i.jsx)(f.B,{}),"farcaster"===g&&(0,i.jsx)(_,{color:"gray",children:"Recent"})]})},_=(0,n.I4)(k.C)`
  margin-left: auto;
`,U=({...e})=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",...e,children:[(0,i.jsxs)("g",{clipPath:"url(#clip0_2856_1743)",children:[(0,i.jsx)("path",{d:"M22.1673 8.24075V16.3642C22.1673 17.3256 21.3421 18.105 20.3241 18.105H17.0028M22.1673 8.24075C22.1673 7.27936 21.3421 6.5 20.3241 6.5H11.5302M22.1673 8.24075V8.42852C22.1673 9.03302 21.8352 9.59423 21.2901 9.91105L15.1463 13.4818C14.5539 13.8261 13.8067 13.8261 13.2143 13.4818L10.1621 11.5401",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M3.12913 6.64816C0.508085 12.9507 3.49251 20.1847 9.79504 22.8057L11.5068 23.5176C12.4522 23.9108 13.7783 23.2222 14.1714 22.2768L14.6054 21.2333C14.7687 20.8406 14.6438 20.3871 14.3024 20.1334L11.2872 17.8927C10.9878 17.6702 10.5843 17.6488 10.2632 17.8384L9.11575 18.5156C8.78274 18.7121 8.3597 18.6844 8.07552 18.4221C5.94293 16.4542 4.77629 13.6264 4.90096 10.7273C4.91757 10.3409 5.19796 10.023 5.57269 9.92753L6.86381 9.59869C7.22522 9.50664 7.49627 9.20696 7.55169 8.83815L8.10986 5.12321C8.17306 4.70259 7.94188 4.29293 7.54915 4.1296L6.50564 3.69564C5.56026 3.30248 4.23416 3.99103 3.84101 4.9364L3.12913 6.64816Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,i.jsx)("defs",{children:(0,i.jsx)("clipPath",{id:"clip0_2856_1743",children:(0,i.jsx)("rect",{x:"0.5",y:"0.5",width:"24",height:"24",rx:"6",fill:"white"})})})]}),z=({chainType:e,withPadding:t})=>{let a="";return a="ethereum-only"===e||"ethereum-and-solana"===e?"Rainbow, Phantom, or Coinbase Wallet":"Phantom or Solflare",(0,i.jsx)(m.E,{$withPadding:t,children:(0,i.jsxs)(m.n,{children:[(0,i.jsx)(T.A,{style:{color:"var(--privy-color-warn)",height:48,width:48}}),(0,i.jsx)("h3",{children:"No wallets available"}),(0,i.jsxs)("p",{children:["Please download an external wallet provider, like ",a,"."]})]})},"empty-wallet-state")},q=()=>{let{enabled:e,token:t}=(0,h.a)(),{navigate:a,setModalData:r,data:n}=(0,u.u)(),o=(0,d.u)(),{initLoginWithPasskey:s}=(0,p.u)(),c=()=>{o.loginConfig.passkeysForSignupEnabled?a("PasskeySelectSignupOrLogin"):(async()=>{e&&!t?(r({passkeyAuthModalData:{passkeySignupFlow:!1},captchaModalData:{callback:e=>s({captchaToken:e,withPrivyUi:!0}),userIntentRequired:!1,onSuccessNavigateTo:"PasskeyStatusScreen",onErrorNavigateTo:"ErrorScreen"}}),a("CaptchaScreen")):(await s({withPrivyUi:!0,captchaToken:t}),r({passkeyAuthModalData:{passkeySignupFlow:!1}}),a("PasskeyStatusScreen"))})()};return 0===(0,l.useMemo)(()=>{let e=n?.login?.loginMethods;return e?e.filter(e=>"passkey"!==e).length:Object.entries(o.loginMethods).filter(([e,t])=>t).filter(([e])=>"passkey"!==e).length},[o.loginMethods,n?.login])?(0,i.jsxs)(m.L,{onClick:c,children:[(0,i.jsx)(A.A,{})," Continue with passkey"]}):(0,i.jsx)(L.L,{as:"button",onClick:c,size:"sm",variant:"navigation",style:{width:"100%",justifyContent:"center"},children:"I have a passkey"})},B=({isEditable:e,setIsEditable:t,defaultValue:a})=>{let r=(0,l.useRef)(null),{authenticated:n}=(0,y.u)(),{navigate:o,setModalData:s,currentScreen:c,data:g}=(0,u.u)(),{initLoginWithSms:x}=(0,p.u)(),{enabled:f,token:v}=(0,h.a)(),{whatsAppEnabled:w}=(0,d.u)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.H,{$if:!e,children:(0,i.jsx)(E.C,{ref:r,onSubmit:async function({qualifiedPhoneNumber:e}){if(!f||v||n)try{await x({phoneNumber:e,captchaToken:v,withPrivyUi:!0,disableSignup:g?.login?.disableSignup}),o("AwaitingPasswordlessCodeScreen")}catch(e){s({errorModalData:{error:e,previousScreen:c||"LandingScreen"}}),o("ErrorScreen")}else s({captchaModalData:{callback:t=>x({phoneNumber:e,captchaToken:t,withPrivyUi:!0,disableSignup:g?.login?.disableSignup}),userIntentRequired:!1,onSuccessNavigateTo:"AwaitingPasswordlessCodeScreen",onErrorNavigateTo:"ErrorScreen"}}),o("CaptchaScreen")},defaultValue:a})}),(0,i.jsx)(m.H,{$if:e,children:(0,i.jsxs)(m.L,{onClick:()=>{t(),setTimeout(()=>{r.current?.focus()},0)},children:[(0,i.jsx)(m.m,{children:(0,i.jsx)(j.A,{})}),"Continue with ",w?"WhatsApp":"SMS"]})})]})},G={apple:{logo:P.A,displayName:"Apple"},discord:{logo:P.D,displayName:"Discord"},github:{logo:P.b,displayName:"GitHub"},google:{logo:P.G,displayName:"Google"},linkedin:{logo:P.L,displayName:"LinkedIn"},spotify:{logo:P.S,displayName:"Spotify"},instagram:{logo:P.I,displayName:"Instagram"},telegram:{logo:N.T,displayName:"Telegram"},twitter:{logo:P.a,displayName:"Twitter"},tiktok:{logo:P.T,displayName:"TikTok"},line:{logo:I.L,displayName:"LINE"},twitch:{logo:I.T,displayName:"Twitch"}},Z=({provider:e})=>{let{enabled:t,token:a}=(0,h.a)(),{currentScreen:r,navigate:n,setModalData:o,data:s}=(0,u.u)(),[c,g]=(0,l.useState)(!1),x=(0,d.u)(),{initLoginWithOAuth:f}=(0,p.u)(),{accountType:v}=(0,m.h)(),w=(0,l.useMemo)(()=>v&&"guest"!==v&&"authorization_key"!==v&&"cross_app"!==v?(0,h.t)(v):null,[v]),{displayName:j,logo:b}=(0,l.useMemo)(()=>{if((0,y.i)(e)){let t=x.customOAuthProviders.find(t=>t.provider===e),a=t.provider_icon_url,l=t.provider_display_name;return{displayName:l,logo:({style:e})=>(0,i.jsx)("img",{alt:`${l} logo`,src:a,style:e})}}return G[e]},[e,x.customOAuthProviders]);return(0,i.jsxs)(m.L,{onClick:()=>{g(!0),setTimeout(()=>{g(!1)},2e3),t&&!a?(o({captchaModalData:{callback:t=>f(e,t,s?.login?.disableSignup),userIntentRequired:!0,onSuccessNavigateTo:null,onErrorNavigateTo:"ErrorScreen"}}),n("CaptchaScreen")):f(e,void 0,s?.login?.disableSignup).catch(e=>{g(!1),o({errorModalData:{error:e,previousScreen:r||"LandingScreen"}}),n("ErrorScreen")})},disabled:c,children:[(0,i.jsx)(m.m,{$fullSize:!0,children:(0,i.jsx)(b,{style:{width:"32px",height:"32px"}})}),j,w?.loginMethod===e&&(0,i.jsx)(K,{color:"gray",children:"Recent"})]})},K=(0,n.I4)(k.C)`
  margin-left: auto;
`,Q=()=>{let{enabled:e,token:t}=(0,h.a)(),{navigate:a,setModalData:r,data:n}=(0,u.u)(),[o,s]=(0,l.useState)(!1),{initLoginWithTelegram:d}=(0,p.u)(),{accountType:c}=(0,m.h)();async function g(e){try{await d(e,n?.login?.disableSignup),r({telegramAuthModalData:{seamlessAuth:!1}}),a("TelegramAuthScreen")}catch(e){console.error(e),s(!1)}}return(0,i.jsxs)(m.L,{onClick:async function(){if(s(!0),e&&!t)return r({captchaModalData:{callback:g,userIntentRequired:!0,onSuccessNavigateTo:null,onErrorNavigateTo:"ErrorScreen"}}),void a("CaptchaScreen");await g(t)},disabled:o,children:[(0,i.jsx)(N.T,{width:32,height:32}),"Telegram","telegram"===c&&(0,i.jsx)(J,{color:"gray",children:"Recent"})]})},J=(0,n.I4)(k.C)`
  margin-left: auto;
`,X=({onClick:e,text:t,icon:a})=>(0,i.jsxs)(m.L,{onClick:e,children:[(0,i.jsx)(m.m,{children:a}),(0,i.jsx)(m.G,{children:t})]}),Y=({connectOnly:e})=>{let{closePrivyModal:t}=(0,p.u)(),{data:a,setModalData:r,onUserCloseViaDialogOrKeybindRef:n,navigate:s}=(0,u.u)(),x=(0,d.u)(),f=a?.login,v=x.appearance.walletList,w=f?.walletChainType??x.appearance.walletChainType,{accountType:j,walletClientType:b,chainType:C}=(0,m.h)(),k=(0,l.useMemo)(()=>j&&"guest"!==j&&"authorization_key"!==j&&"cross_app"!==j?(0,h.t)(j):null,[j]),{email:S,sms:T,google:A,twitter:L,discord:E,github:P,spotify:I,instagram:N,tiktok:H,line:D,twitch:_,linkedin:U,apple:G,wallet:K,farcaster:J,telegram:Y}=(0,l.useMemo)(()=>f?.loginMethods?(0,M.vA)(f.loginMethods,!0):null,[f])??x.loginMethods,{wallets:en}=(0,g.u)({enabled:(0,c.s)(K?v:[]),walletList:v,walletChainType:w}),eo=x.customOAuthProviders,es=x.crossAppProviders,{passkey:ed}=x.loginMethods,ec=[S&&"email",T&&"sms",A&&"google",L&&"twitter",E&&"discord",P&&"github",I&&"spotify",N&&"instagram",H&&"tiktok",D&&"line",_&&"twitch",U&&"linkedin",G&&"apple",J&&"farcaster",Y&&"telegram",...eo.map(e=>e.provider),...es].filter(e=>!!e),ep=ec.length>0,eu=(0,l.useMemo)(()=>K&&!ep?"web3-first":K&&x?.appearance.loginGroupPriority||"web2-first",[K,ep,x?.appearance.loginGroupPriority]),eh=x?.appearance.hideDirectWeb2Inputs,[eg,em]=(0,l.useState)("default"),[ex,ef]=(0,l.useState)(er({mostRecentlyUsedAccountType:j,smsAvailable:T,emailAvailable:S,prefilledType:f?.prefill?.type}));(0,l.useEffect)(()=>{ef(er({mostRecentlyUsedAccountType:j,smsAvailable:T,emailAvailable:S,prefilledType:f?.prefill?.type}))},[S,T,j]);let ey=()=>{t({shouldCallAuthOnSuccess:!0}),setTimeout(()=>{em("default")},150)};n.current=ey;let ev=[];b&&K?ev.push(b):k?.loginMethod&&ec.includes(k.loginMethod)&&ev.push(k.loginMethod);let ew=t=>{if("email"===t)return(0,i.jsx)(F,{isEditable:"email"===ex,setIsEditable:()=>{ef("email")},defaultValue:"email"===f?.prefill?.type?f.prefill.value:void 0},t);if("sms"===t)return(0,i.jsx)(B,{isEditable:"sms"===ex,setIsEditable:()=>{ef("sms")},defaultValue:"phone"===f?.prefill?.type?f.prefill.value:void 0},t);if("apple"===t)return(0,i.jsx)(Z,{provider:"apple"},t);if("discord"===t)return(0,i.jsx)(Z,{provider:"discord"},t);if("farcaster"===t)return(0,i.jsx)(O,{},t);if("github"===t)return(0,i.jsx)(Z,{provider:"github"},t);if("google"===t)return(0,i.jsx)(Z,{provider:"google"},t);if("linkedin"===t)return(0,i.jsx)(Z,{provider:"linkedin"},t);if("tiktok"===t)return(0,i.jsx)(Z,{provider:"tiktok"},t);if("line"===t)return(0,i.jsx)(Z,{provider:"line"},t);if("twitch"===t)return(0,i.jsx)(Z,{provider:"twitch"},t);if("spotify"===t)return(0,i.jsx)(Z,{provider:"spotify"},t);if("instagram"===t)return(0,i.jsx)(Z,{provider:"instagram"},t);if("twitter"===t)return(0,i.jsx)(Z,{provider:"twitter"},t);if("telegram"===t)return x.loginConfig.telegramHasHmacCredentials?(0,i.jsx)(Q,{},t):(0,i.jsx)(Z,{provider:"telegram"},t);if((0,y.i)(t))return(0,i.jsx)(Z,{provider:t},t);if(t.startsWith("privy:")){let e=t.split(":")[1];if(!e)throw Error("Invalid cross-app provider format. App ID missing.");return(0,i.jsx)(R,{appId:e},t)}let a=en.findIndex(({id:e})=>e===g.W.normalize(t)),l="solana"===C?"solana-only":"ethereum-only";return(0,i.jsx)(g.a,{recent:!0,index:a,data:{wallets:en,walletChainType:l,handleWalletClick(t){r(e=>({...e,externalConnectWallet:{walletList:v,walletChainType:l,preSelectedWalletId:t.id}})),s(e?"ConnectOnlyLandingScreen":"AuthenticateWithWalletScreen")}}})},ej=en.filter(e=>e.id!==g.W.normalize(b||"")),eb=ej.map((t,a)=>(0,i.jsx)(g.a,{index:a,data:{walletChainType:w,wallets:ej,handleWalletClick(t){r(e=>({...e,externalConnectWallet:{walletList:v,walletChainType:w,preSelectedWalletId:t.id}})),s(e?"ConnectOnlyLandingScreen":"AuthenticateWithWalletScreen")}}},t.id)),eC=ec.filter(e=>e!==k?.loginMethod).flatMap(ew),ek=ev.flatMap(ew);"web3-first"===eu&&"default"===eg?eb.unshift(...ek):"web2-first"===eu&&eC.unshift(...ek);let eS="web2-overflow"===eg?()=>em("default"):void 0,eM=ec.filter(e=>"email"!==e&&"sms"!==e),eT=ea({priority:eu,email:S,sms:T,social:eM}),eA=ei({priority:eu,email:S,sms:T,social:eM}),eL=(0,i.jsx)(V.W,{text:el({priority:eu}),onClick:()=>{r({...a,externalConnectWallet:{walletChainType:f?.walletChainType??x.appearance.walletChainType}}),s(e?"ConnectOnlyLandingScreen":"AuthenticateWithWalletScreen")}}),eE=(0,i.jsx)(X,{text:eT,icon:eA,onClick:()=>em("web2-overflow")}),eP=+!eh,eI=K&&eb.length>0,eN=0===eC.length&&K&&0===eb.length,eV=5-!!eI,eW="default"===eg&&x?.appearance.logo,e$="default"===eg&&x.appearance.loginMessage;return(0,i.jsxs)(W.S,{title:x.appearance.landingHeader,icon:eW?(0,i.jsx)($,{}):void 0,iconVariant:eW?"logo":void 0,onClose:ey,showClose:!0,onBack:eS,showBack:!!eS,helpText:x||ed&&"default"===eg?(0,i.jsxs)(i.Fragment,{children:[ed&&"default"===eg&&!x.globalDisablePasskeys&&(0,i.jsx)(q,{}),x&&(0,i.jsx)(o.T,{app:x})]}):void 0,watermark:!0,children:[e$&&("string"==typeof x.appearance.loginMessage?(0,i.jsx)(ee,{children:x.appearance.loginMessage}):(0,i.jsx)(et,{children:x.appearance.loginMessage})),(0,i.jsx)(m.o,{$colorScheme:x.appearance.palette.colorScheme,children:"default"===eg&&"web2-first"===eu?(0,i.jsxs)(i.Fragment,{children:[eC.length>eV?eC.slice(0,eV-1):eC,eC.length>eV&&eE,eI&&eL,eN&&(0,i.jsx)(z,{chainType:x.appearance.walletChainType})]}):"default"===eg&&"web3-first"===eu?(0,i.jsxs)(i.Fragment,{children:[K&&(0,i.jsxs)(i.Fragment,{children:[eb.length>eV?eb.slice(0,eV-1):eb,eb.length>eV&&eL]}),eC.length>eP&&eE,eC.length===eP&&eC[0],eN&&(0,i.jsx)(z,{chainType:x.appearance.walletChainType})]}):"web2-overflow"===eg?(0,i.jsx)(i.Fragment,{children:"web3-first"===eu?eC:eC.slice(3)}):null})]})},ee=n.I4.div`
  text-align: center;
  font-size: 14px;
  margin-bottom: 24px;
`,et=n.I4.div`
  margin-bottom: 24px;
`,ea=({priority:e,email:t,sms:a,social:i})=>"web2-first"===e?"Other socials":t&&a&&i.length>0||t&&i.length>0?"Log in with email or socials":a&&i.length>0?"Log in with sms or socials":t&&a?"Continue with email or sms":t?"Continue with email":a?"Continue with sms":"Log in with a social account",ei=({priority:e,email:t,sms:a,social:l})=>"web2-first"===e||l.length>0?(0,i.jsx)(b,{}):t&&a?(0,i.jsx)(U,{}):t?(0,i.jsx)(w.A,{}):a?(0,i.jsx)(j.A,{}):null,el=({priority:e})=>"web2-first"===e?"Continue with a wallet":"Other wallets",er=({mostRecentlyUsedAccountType:e,smsAvailable:t,emailAvailable:a,prefilledType:i})=>a&&("email"===e&&"phone"!==i||"email"===i)||!t||"phone"!==e&&"phone"!==i?"email":"sms",en=({connectOnly:e})=>{let{closePrivyModal:t,connectors:a}=(0,p.u)(),{data:n,setModalData:f,onUserCloseViaDialogOrKeybindRef:y,navigate:v}=(0,u.u)(),w=(0,d.u)(),j=w.appearance.palette.colorScheme,{accountType:b,walletClientType:C}=(0,m.h)(),k=(0,l.useMemo)(()=>b&&"guest"!==b&&"authorization_key"!==b&&"cross_app"!==b?(0,h.t)(b):null,[b]),S=w.loginMethodsAndOrder?.primary??[],M=w.loginMethodsAndOrder?.overflow??[],T=(0,l.useMemo)(()=>[...S,...M],[S,M]),A=w.loginMethods.passkey,L=n?.login,E=[];C&&T.includes(C)?E.push(C):b&&T.includes(k?.loginMethod)&&E.push(k?.loginMethod);let[P,I]=(0,l.useState)("default"),[N,V]=(0,l.useState)(er({mostRecentlyUsedAccountType:b,smsAvailable:T.includes("sms"),emailAvailable:T.includes("email"),prefilledType:L?.prefill?.type}));(0,l.useEffect)(()=>{V(er({mostRecentlyUsedAccountType:b,smsAvailable:T.includes("sms"),emailAvailable:T.includes("email"),prefilledType:L?.prefill?.type}))},[T,b]),(0,l.useEffect)(()=>{"phone"===b&&V("sms");let e=T.indexOf("sms"),t=T.indexOf("email");e>-1&&e<t&&V("sms")},[b,S,M]);let W=()=>{t({shouldCallAuthOnSuccess:!0}),setTimeout(()=>{I("default")},150)};y.current=W;let{listings:$}=(0,c.u)(),H=t=>{if("email"===t)return(0,i.jsx)(F,{isEditable:"email"===N,setIsEditable:()=>{V("email")},defaultValue:"email"===L?.prefill?.type?L.prefill.value:void 0},t);if("sms"===t)return(0,i.jsx)(B,{isEditable:"sms"===N,setIsEditable:()=>{V("sms")},defaultValue:"phone"===L?.prefill?.type?L.prefill.value:void 0},t);if("apple"===t)return(0,i.jsx)(Z,{provider:"apple"},t);if("discord"===t)return(0,i.jsx)(Z,{provider:"discord"},t);if("farcaster"===t)return(0,i.jsx)(O,{},t);if("github"===t)return(0,i.jsx)(Z,{provider:"github"},t);if("google"===t)return(0,i.jsx)(Z,{provider:"google"},t);if("linkedin"===t)return(0,i.jsx)(Z,{provider:"linkedin"},t);if("spotify"===t)return(0,i.jsx)(Z,{provider:"spotify"},t);if("instagram"===t)return(0,i.jsx)(Z,{provider:"instagram"},t);if("tiktok"===t)return(0,i.jsx)(Z,{provider:"tiktok"},t);if("line"===t)return(0,i.jsx)(Z,{provider:"line"},t);if("twitch"===t)return(0,i.jsx)(Z,{provider:"twitch"},t);if("twitter"===t)return(0,i.jsx)(Z,{provider:"twitter"},t);if("telegram"===t)return w.loginConfig.telegramHasHmacCredentials?(0,i.jsx)(Q,{},t):(0,i.jsx)(Z,{provider:"telegram"},t);if(t.startsWith("privy:"))return(0,i.jsx)(R,{appId:t.replace("privy:","")},t);let l=w.appearance.walletChainType,r=new g.W(l,[t]).getWallets(a,$);return r.wallets.map((t,a)=>(0,i.jsx)(g.a,{index:a,data:{wallets:r.wallets,walletChainType:l,handleWalletClick(t){f(e=>({...e,externalConnectWallet:{walletList:T,walletChainType:l,preSelectedWalletId:t.id}})),v(e?"ConnectOnlyLandingScreen":"AuthenticateWithWalletScreen")}}},t.id+a))},D=E.flatMap(H),_=S.filter(e=>e!==C&&e!==k?.loginMethod).flatMap(H),U=M.filter(e=>e!==C&&e!==k?.loginMethod).flatMap(H),[z,G]=(0,x.l)([...D,..._,...U],eo({primary:_.length+D.length,overflow:U.length}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.M,{title:w.appearance.landingHeader,onClose:W,backFn:"default"===P?void 0:()=>{I("default")}}),"default"===P&&(0,i.jsx)(es,{}),"default"===P&&("string"==typeof w.appearance.loginMessage?(0,i.jsx)(m.S,{children:w.appearance.loginMessage}):w.appearance.loginMessage),(0,i.jsx)(m.A,{style:{overflow:"hidden"},children:(0,i.jsxs)(m.o,{$colorScheme:j,children:["default"===P&&(0,i.jsxs)(i.Fragment,{children:[z,G.length>0&&(0,i.jsx)(X,{text:"More options",icon:(0,i.jsx)(r,{}),onClick:()=>I("overflow")})]}),"overflow"===P&&(0,i.jsx)(i.Fragment,{children:G}),A&&"default"===P&&(0,i.jsx)(q,{})]})}),w&&(0,i.jsx)(o.T,{app:w}),(0,i.jsx)(o.B,{})]})},eo=({primary:e,overflow:t})=>e<5?e:5===e&&0===t?5:4,es=(0,n.I4)(e=>{let t=(0,d.u)();return t?.appearance.logo?(0,i.jsx)(H,{...e,children:(0,i.jsx)($,{})}):null})`
  margin-bottom: 16px;
`},52508:(e,t,a)=>{a.d(t,{A:()=>i});let i=(0,a(71847).A)("smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]])},53767:(e,t,a)=>{a.d(t,{L:()=>r});var i=a(20031);let l=(0,i.i7)`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`,r=(0,i.AH)`
  ${e=>e.$isLoading?(0,i.AH)`
          width: 35%;
          animation: ${l} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`},69240:(e,t,a)=>{a.d(t,{A:()=>l});var i=a(12115);let l=i.forwardRef(function(e,t){let{title:a,titleId:l,...r}=e;return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":l},r),a?i.createElement("title",{id:l},a):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"}))})},75882:(e,t,a)=>{a.d(t,{A:()=>i});let i=(0,a(71847).A)("wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]])},78320:(e,t,a)=>{a.d(t,{C:()=>n});var i=a(95155),l=a(20031),r=a(53767);let n=({children:e,color:t,isLoading:a,isPulsing:l,...r})=>(0,i.jsx)(o,{$color:t,$isLoading:a,$isPulsing:l,...r,children:e}),o=l.I4.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem; /* 150% */
  border-radius: var(--privy-border-radius-xs);
  display: flex;
  align-items: center;
  ${e=>{let t,a;"green"===e.$color&&(t="var(--privy-color-success-dark)",a="var(--privy-color-success-light)"),"red"===e.$color&&(t="var(--privy-color-error)",a="var(--privy-color-error-light)"),"gray"===e.$color&&(t="var(--privy-color-foreground-2)",a="var(--privy-color-background-2)");let i=(0,l.i7)`
      from, to {
        background-color: ${a};
      }

      50% {
        background-color: rgba(${a}, 0.8);
      }
    `;return(0,l.AH)`
      color: ${t};
      background-color: ${a};
      ${e.$isPulsing&&(0,l.AH)`
        animation: ${i} 3s linear infinite;
      `};
    `}}

  ${r.L}
`},81559:(e,t,a)=>{a.d(t,{W:()=>n});var i=a(95155),l=a(75882),r=a(13559);let n=({onClick:e,text:t})=>(0,i.jsxs)(r.L,{onClick:e,children:[(0,i.jsx)(r.m,{children:(0,i.jsx)(l.A,{})}),(0,i.jsx)(r.G,{children:t})]})},83060:(e,t,a)=>{a.d(t,{C:()=>y});var i=a(95155),l=a(23664),r=a(12115),n=a(20031),o=a(63771),s=a(28317),d=a(43425),c=a(21145),p=a(90154),u=a(13559),h=a(93173),g=a(98218),m=a(78320),x=a(834),f=a(55211);let y=(0,r.forwardRef)((e,t)=>{let[a,n]=(0,r.useState)(e.defaultValue||""),[x,y]=(0,r.useState)(""),[b,C]=(0,r.useState)(!1),{authenticated:k}=(0,p.u)(),{initLoginWithEmail:S}=(0,d.u)(),{navigate:M,setModalData:T,currentScreen:A,data:L}=(0,c.u)(),{enabled:E,token:P}=(0,s.a)(),[I,N]=(0,r.useState)(!1),{accountType:V}=(0,u.h)(),W=(0,o.u)(),$=(0,h.v)(a)&&(W.disablePlusEmails&&a.includes("+")?(x||y("Please enter a valid email address without a '+'."),!1):(x&&y(""),!0)),H=b||!$,D=()=>{H||(T({login:L?.login,inlineError:void 0}),!E||P||k?(C(!0),S({email:a,captchaToken:P,disableSignup:L?.login?.disableSignup,withPrivyUi:!0}).then(()=>{M("AwaitingPasswordlessCodeScreen")}).catch(e=>{T({errorModalData:{error:e,previousScreen:A||"LandingScreen"}}),M("ErrorScreen")}).finally(()=>{C(!1)})):(T({captchaModalData:{callback:e=>S({email:a,captchaToken:e,withPrivyUi:!0}),userIntentRequired:!1,onSuccessNavigateTo:"AwaitingPasswordlessCodeScreen",onErrorNavigateTo:"ErrorScreen"}}),M("CaptchaScreen")))};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(v,{children:[x&&(0,i.jsx)(f.E,{style:{display:"block",marginTop:"0.25rem",textAlign:"left"},children:x}),(0,i.jsxs)(w,{stacked:e.stacked,$error:!!x,children:[(0,i.jsx)(j,{children:(0,i.jsx)(l.A,{})}),(0,i.jsx)("input",{ref:t,id:"email-input",className:"login-method-button",type:"email",placeholder:"your@email.com",onFocus:()=>N(!0),onChange:e=>n(e.target.value),onKeyUp:e=>{"Enter"===e.key&&D()},value:a,autoComplete:"email"}),"email"!==V||I?e.stacked?(0,i.jsx)("span",{}):(0,i.jsx)(g.E,{isSubmitting:b,onClick:D,disabled:H,children:"Submit"}):(0,i.jsx)(m.C,{color:"gray",children:"Recent"})]})]}),e.stacked?(0,i.jsx)(g.P,{loadingText:null,loading:b,disabled:H,onClick:D,style:{width:"100%"},children:"Submit"}):null]})}),v=x.I,w=x.a,j=(0,n.I4)(u.m)`
  display: inline-flex;
`}}]);