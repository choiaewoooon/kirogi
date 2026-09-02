"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9587],{5917:(e,r,t)=>{t.d(r,{A:()=>n});let n=(0,t(71847).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},19497:(e,r,t)=>{t.d(r,{e:()=>n});function n(e){return e.charAt(0).toUpperCase()+e.slice(1)}},49587:(e,r,t)=>{t.r(r),t.d(r,{LinkConflictScreen:()=>W,LinkConflictScreenView:()=>z,default:()=>W});var n=t(95155),o=t(88125),a=t(51691),s=t(12115),i=t(98218),l=t(20031),c=t(80596),d=t(69421),u=t(69447),h=t(43425),f=t(21145),p=t(19497),x=t(63771),m=t(69245);let g=s.forwardRef(function(e,r){let{title:t,titleId:n,...o}=e;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},o),t?s.createElement("title",{id:n},t):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"}))});t(50205);let v=l.I4.span`
  && {
    width: 82px;
    height: 82px;
    border-width: 4px;
    border-style: solid;
    border-color: ${e=>e.color??"var(--privy-color-accent)"};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1.2s linear infinite;
    transition: border-color 800ms;
    border-bottom-color: ${e=>e.color??"var(--privy-color-accent)"};
  }
`;function w(e){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",...e,children:[(0,n.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,n.jsx)("line",{x1:"12",x2:"12",y1:"8",y2:"12"}),(0,n.jsx)("line",{x1:"12",x2:"12.01",y1:"16",y2:"16"})]})}let y=({onTransfer:e,isTransferring:r,transferSuccess:t})=>(0,n.jsx)(i.P,{...t?{success:!0,children:"Success!"}:{warn:!0,loading:r,onClick:e,children:"Transfer and delete account"}}),j=l.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding-bottom: 16px;
`,k=l.I4.div`
  display: flex;
  flex-direction: column;
  && p {
    font-size: 14px;
  }
  width: 100%;
  gap: 16px;
`,b=l.I4.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  width: 100%;
  border: 1px solid var(--privy-color-foreground-4) !important;
  border-radius: var(--privy-border-radius-md);
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 500;
  gap: 8px;
`,A=(0,l.I4)(m.A)`
  position: relative;
  width: ${({$iconSize:e})=>`${e}px`};
  height: ${({$iconSize:e})=>`${e}px`};
  color: var(--privy-color-foreground-3);
  margin-left: auto;
`,C=(0,l.I4)(g)`
  position: relative;
  width: 15px;
  height: 15px;
  color: var(--privy-color-foreground-3);
  margin-left: auto;
`,T=l.I4.ol`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 100%;
  text-align: left;
`,S=l.I4.li`
  font-size: 14px;
  list-style-type: auto;
  list-style-position: outside;
  margin-left: 1rem;
  margin-bottom: 0.5rem; /* Adjust the margin as needed */

  &:last-child {
    margin-bottom: 0; /* Remove margin from the last item */
  }
`,E=l.I4.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`,I=()=>(0,n.jsx)(E,{children:(0,n.jsx)(A,{$iconSize:60})}),L=({address:e,onClose:r,onRetry:t,onTransfer:o,isTransferring:s,transferSuccess:l})=>{let{defaultChain:d}=(0,x.u)(),h=d.blockExplorers?.default.url??"https://etherscan.io";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.M,{onClose:r,backFn:t}),(0,n.jsxs)(j,{children:[(0,n.jsx)(I,{}),(0,n.jsxs)(k,{children:[(0,n.jsx)("h3",{children:"Check account assets before transferring"}),(0,n.jsx)("p",{children:"Before transferring, ensure there are no assets in the other account. Assets in that account will not transfer automatically and may be lost."}),(0,n.jsxs)(T,{children:[(0,n.jsx)("p",{children:" To check your balance, you can:"}),(0,n.jsx)(S,{children:"Log out and log back into the other account, or "}),(0,n.jsxs)(S,{children:["Copy your wallet address and use a"," ",(0,n.jsx)("u",{children:(0,n.jsx)("a",{target:"_blank",href:h,children:"block explorer"})})," ","to see if the account holds any assets."]})]}),(0,n.jsxs)(b,{onClick:()=>navigator.clipboard.writeText(e).catch(console.error),children:[(0,n.jsx)(a.A,{color:"var(--privy-color-foreground-1)",strokeWidth:2,height:"28px",width:"28px"}),(0,n.jsx)(u.A,{address:e,showCopyIcon:!1}),(0,n.jsx)(C,{})]}),(0,n.jsx)(y,{onTransfer:o,isTransferring:s,transferSuccess:l})]})]}),(0,n.jsx)(c.B,{})]})},W={component:()=>{let{initiateAccountTransfer:e,closePrivyModal:r}=(0,h.u)(),{data:t,navigate:o,lastScreen:a,setModalData:i}=(0,f.u)(),[l,c]=(0,s.useState)(void 0),[d,u]=(0,s.useState)(!1),[p,x]=(0,s.useState)(!1),m=async()=>{try{if(!t?.accountTransfer?.nonce||!t?.accountTransfer?.account)throw Error("missing account transfer inputs");x(!0),await e({nonce:t?.accountTransfer?.nonce,account:t?.accountTransfer?.account,accountType:t?.accountTransfer?.linkMethod,externalWalletMetadata:t?.accountTransfer?.externalWalletMetadata,telegramWebAppData:t?.accountTransfer?.telegramWebAppData,telegramAuthResult:t?.accountTransfer?.telegramAuthResult,farcasterEmbeddedAddress:t?.accountTransfer?.farcasterEmbeddedAddress,oAuthUserInfo:t?.accountTransfer?.oAuthUserInfo}),u(!0),x(!1),setTimeout(r,1e3)}catch(e){i({errorModalData:{error:e,previousScreen:a||"LinkConflictScreen"}}),o("ErrorScreen",!0)}};return l?(0,n.jsx)(L,{address:l,onClose:r,onRetry:()=>c(void 0),onTransfer:m,isTransferring:p,transferSuccess:d}):(0,n.jsx)(z,{onClose:r,onInfo:()=>c(t?.accountTransfer?.embeddedWalletAddress),onContinue:()=>c(t?.accountTransfer?.embeddedWalletAddress),onTransfer:m,isTransferring:p,transferSuccess:d,data:t})}},z=({onClose:e,onContinue:r,onInfo:t,onTransfer:a,transferSuccess:s,isTransferring:l,data:u})=>{if(!u?.accountTransfer?.linkMethod||!u?.accountTransfer?.displayName)return;let h={method:u?.accountTransfer?.linkMethod,handle:u?.accountTransfer?.displayName,disclosedAccount:u?.accountTransfer?.embeddedWalletAddress?{type:"wallet",handle:u?.accountTransfer?.embeddedWalletAddress}:void 0};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.M,{closeable:!0}),(0,n.jsxs)(j,{children:[(0,n.jsx)(d.e,{children:(0,n.jsxs)("div",{children:[(0,n.jsx)(v,{color:"var(--privy-color-error)"}),(0,n.jsx)(o.A,{height:38,width:38,stroke:"var(--privy-color-error)"})]})}),(0,n.jsxs)(k,{children:[(0,n.jsxs)("h3",{children:[function(e){switch(e){case"sms":return"Phone number";case"email":return"Email address";case"siwe":return"Wallet address";case"siws":return"Solana wallet address";case"linkedin":return"LinkedIn profile";case"google":case"apple":case"discord":case"github":case"instagram":case"spotify":case"tiktok":case"line":case"twitch":case"twitter":case"telegram":case"farcaster":return`${(0,p.e)(e.replace("_oauth",""))} profile`;default:return e.startsWith("privy:")?"Cross-app account":e}}(h.method)," is associated with another account"]}),(0,n.jsxs)("p",{children:["Do you want to transfer",(0,n.jsx)("b",{children:h.handle?` ${h.handle}`:""})," to this account instead? This will delete your other account."]}),(0,n.jsx)(M,{onClick:t,disclosedAccount:h.disclosedAccount})]}),(0,n.jsxs)(k,{style:{gap:12,marginTop:12},children:[u?.accountTransfer?.embeddedWalletAddress?(0,n.jsx)(i.P,{onClick:r,children:"Continue"}):(0,n.jsx)(y,{onTransfer:a,transferSuccess:s,isTransferring:l}),(0,n.jsx)(i.S,{onClick:e,children:"No thanks"})]})]}),(0,n.jsx)(c.B,{})]})};function M({disclosedAccount:e,onClick:r}){return e?(0,n.jsxs)(b,{onClick:r,children:[(0,n.jsx)(a.A,{color:"var(--privy-color-foreground-1)",strokeWidth:2,height:"28px",width:"28px"}),(0,n.jsx)(u.A,{address:e.handle,showCopyIcon:!1}),(0,n.jsx)(w,{width:15,height:15,color:"var(--privy-color-foreground-3)",style:{marginLeft:"auto"}})]}):null}},51691:(e,r,t)=>{t.d(r,{A:()=>o});var n=t(12115);let o=n.forwardRef(function(e,r){let{title:t,titleId:o,...a}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":o},a),t?n.createElement("title",{id:o},t):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"}))})},69245:(e,r,t)=>{t.d(r,{A:()=>o});var n=t(12115);let o=n.forwardRef(function(e,r){let{title:t,titleId:o,...a}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":o},a),t?n.createElement("title",{id:o},t):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"}))})},69421:(e,r,t)=>{t.d(r,{e:()=>o});var n=t(20031);let o=n.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;

  > div {
    position: relative;
  }

  > div > span {
    position: absolute;
    left: -41px;
    top: -41px;
  }

  > div > :last-child {
    position: absolute;
    left: -19px;
    top: -19px;
  }
`},69447:(e,r,t)=>{t.d(r,{A:()=>d});var n=t(95155),o=t(5917),a=t(75426),s=t(12115),i=t(20031),l=t(93173),c=t(98218);let d=({address:e,showCopyIcon:r,url:t,className:i})=>{let[d,p]=(0,s.useState)(!1);function x(r){r.stopPropagation(),navigator.clipboard.writeText(e).then(()=>p(!0)).catch(console.error)}return(0,s.useEffect)(()=>{if(d){let e=setTimeout(()=>p(!1),3e3);return()=>clearTimeout(e)}},[d]),(0,n.jsxs)(u,t?{children:[(0,n.jsx)(f,{title:e,className:i,href:`${t}/address/${e}`,target:"_blank",children:(0,l.c)(e)}),r&&(0,n.jsx)(c.S,{onClick:x,size:"sm",style:{gap:"0.375rem"},children:(0,n.jsxs)(n.Fragment,d?{children:["Copied",(0,n.jsx)(o.A,{size:16})]}:{children:["Copy",(0,n.jsx)(a.A,{size:16})]})})]}:{children:[(0,n.jsx)(h,{title:e,className:i,children:(0,l.c)(e)}),r&&(0,n.jsx)(c.S,{onClick:x,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:(0,n.jsxs)(n.Fragment,d?{children:["Copied",(0,n.jsx)(o.A,{size:14})]}:{children:["Copy",(0,n.jsx)(a.A,{size:14})]})})]})},u=i.I4.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,h=i.I4.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,f=i.I4.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`},71847:(e,r,t)=>{t.d(r,{A:()=>l});var n=t(12115);let o=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)},a=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,n.forwardRef)((e,r)=>{let{color:t="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:c="",children:d,iconNode:u,...h}=e;return(0,n.createElement)("svg",{ref:r,...s,width:o,height:o,stroke:t,strokeWidth:l?24*Number(i)/Number(o):i,className:a("lucide",c),...!d&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0})(h)&&{"aria-hidden":"true"},...h},[...u.map(e=>{let[r,t]=e;return(0,n.createElement)(r,t)}),...Array.isArray(d)?d:[d]])}),l=(e,r)=>{let t=(0,n.forwardRef)((t,s)=>{let{className:l,...c}=t;return(0,n.createElement)(i,{ref:s,iconNode:r,className:a("lucide-".concat(o(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),"lucide-".concat(e),l),...c})});return t.displayName=o(e),t}},75426:(e,r,t)=>{t.d(r,{A:()=>n});let n=(0,t(71847).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},88125:(e,r,t)=>{t.d(r,{A:()=>o});var n=t(12115);let o=n.forwardRef(function(e,r){let{title:t,titleId:o,...a}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":o},a),t?n.createElement("title",{id:o},t):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"}))})}}]);