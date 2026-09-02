"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1576],{5917:(e,r,t)=>{t.d(r,{A:()=>n});let n=(0,t(71847).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},24033:(e,r,t)=>{t.d(r,{A:()=>n});let n=(0,t(71847).A)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},52056:(e,r,t)=>{t.d(r,{A:()=>n});let n=(0,t(71847).A)("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},83199:(e,r,t)=>{t.d(r,{C:()=>p,a:()=>m});var n=t(95155),o=t(5917),s=t(75426),i=t(12115),a=t(20031);let l=a.I4.button`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;

  && {
    color: var(--privy-color-foreground);
    font-weight: 500;
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`,d=a.I4.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--privy-color-foreground-2);
`,c=(0,a.I4)(o.A)`
  color: var(--privy-color-icon-success);
  flex-shrink: 0;
`,u=(0,a.I4)(s.A)`
  color: var(--privy-color-icon-muted);
  flex-shrink: 0;
`;function p({children:e,iconOnly:r,value:t,hideCopyIcon:o,onCopy:s,iconSize:a=14,...p}){let[m,h]=(0,i.useState)(!1);return(0,n.jsxs)(l,{...p,onClick:()=>{navigator.clipboard.writeText(t||("string"==typeof e?e:"")).then(()=>s?.()).catch(console.error),h(!0),setTimeout(()=>h(!1),1500)},children:[e," ",m?(0,n.jsxs)(d,{children:[(0,n.jsx)(c,{size:a})," ",!r&&"Copied"]}):!o&&(0,n.jsx)(u,{size:a})]})}let m=({value:e,includeChildren:r,children:t,...o})=>{let[s,a]=(0,i.useState)(!1),p=()=>{navigator.clipboard.writeText(e).catch(console.error),a(!0),setTimeout(()=>a(!1),1500)};return(0,n.jsxs)(n.Fragment,{children:[r?(0,n.jsx)(l,{...o,onClick:p,children:t}):(0,n.jsx)(n.Fragment,{children:t}),(0,n.jsx)(l,{...o,onClick:p,children:s?(0,n.jsx)(d,{children:(0,n.jsx)(c,{})}):(0,n.jsx)(u,{})})]})}},91576:(e,r,t)=>{t.r(r),t.d(r,{default:()=>eA});var n=t(95155),o=t(12115),s=t(21145),i=t(49106),a=t(5917),l=t(52056),d=t(54690),c=t(97415),u=t(71847);let p=(0,u.A)("undo-2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]),m=(0,u.A)("chevron-up",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);var h=t(24033);let f=(0,u.A)("info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);var y=t(14824),g=t(20031),b=t(82953),x=t(89815),v=t(76928),k=t(70139),_=t(43425),C=t(72658),w=t(98218),E=t(20348),j=t(16424),N=t(20861),T=t(88334),A=t(83199),S=t(93173);t(50205),t(52769);class I extends o.Component{static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,r){this.props.onError(e)}componentDidUpdate(e){e.resetKey!==this.props.resetKey&&this.state.hasError&&this.setState({hasError:!1})}render(){return this.state.hasError?null:this.props.children}constructor(...e){super(...e),this.state={hasError:!1}}}function U(e){return e>=1e3?new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Math.round(e)):e>=100?new Intl.NumberFormat("en-US",{maximumFractionDigits:1}).format(e):e>=1?new Intl.NumberFormat("en-US",{maximumFractionDigits:2}).format(e):new Intl.NumberFormat("en-US",{maximumFractionDigits:4}).format(e)}function D(e,r){let t=Number(e);if(!Number.isFinite(t)||0===t)return e;let n=null!=r?t/10**r:t;return n>=1e3?new Intl.NumberFormat("en-US",{maximumFractionDigits:2}).format(n):n>=1?new Intl.NumberFormat("en-US",{maximumFractionDigits:4}).format(n):n>=1e-4?new Intl.NumberFormat("en-US",{maximumFractionDigits:6}).format(n):new Intl.NumberFormat("en-US",{maximumSignificantDigits:4}).format(n)}function O({address:e,caip2:r,config:t}){for(let n of t.currencies){let t=n.chains.find(t=>t.caip2===r&&t.address.toLowerCase()===e.toLowerCase());if(t)return{symbol:n.symbol.toUpperCase(),decimals:t.decimals}}return{symbol:e,decimals:void 0}}function R(e,r){return r[e]?.displayName??e}function F(e,r){return e.chains.filter(e=>!0===e.can_be_relay_deposit_source).map(e=>{let t=r.chains[e.caip2];return t?{caip2:e.caip2,displayName:t.displayName,iconUrl:t.iconUrl,vmType:t.vmType,currencyAddress:e.address,currencyDecimals:e.decimals}:null}).filter(e=>null!==e)}function L(e,r){if(!e.chains[r.destinationChain])return`Unsupported destination chain: "${r.destinationChain}". Check that the chain is in CAIP-2 format (e.g. "eip155:8453") and is supported for deposit addresses.`;let t=r.destinationCurrency.toLowerCase();return e.currencies.some(e=>e.chains.some(e=>e.caip2===r.destinationChain&&e.address.toLowerCase()===t))?null:`Unsupported destination currency "${r.destinationCurrency}" on chain "${r.destinationChain}". Check that this token address is supported on the specified chain.`}let M=new Set(["ROUTE_UNAVAILABLE","UNEXPECTED_STATE","TIMEOUT_WAITING_FOR_NEXT_ORDER","TIMEOUT_ORDER_COMPLETION","DEPOSIT_FAILED","DEPOSIT_REFUNDED","USER_EXITED","AMOUNT_TOO_LOW","INSUFFICIENT_LIQUIDITY","UNSUPPORTED_CHAIN","UNSUPPORTED_CURRENCY","UNSUPPORTED_ROUTE","NO_SWAP_ROUTES_FOUND","NO_INTERNAL_SWAP_ROUTES_FOUND","NO_QUOTES","SANCTIONED_WALLET_ADDRESS","REFUND_WALLET_CREATION_FAILED","DEPOSIT_ADDRESSES_NOT_ENABLED","NOT_AUTHENTICATED"]);function P(e){return M.has(e)?e:"UNKNOWN_ERROR"}function $(){let{params:e,setModalState:r}=(0,i.a)(),{privy:t}=(0,_.u)(),n=function(){let{privy:e,refreshSessionAndUser:r}=(0,_.u)();return(0,o.useCallback)((t,n)=>n?Promise.resolve({ok:!0,address:n}):v.tr.resolveRefundAddress({privy:e,caip2:t,onWalletCreated:r}),[e,r])}(),[s,a]=(0,o.useState)(!1);return{fetchQuote:(0,o.useCallback)(async(o,s,i)=>{if(e){a(!0);try{let a=await n(o.caip2,e.refundAddress);if(!a.ok)return void r({step:"error",code:P(a.error)});let l=await t.fetchPrivyRoute(k.VC,{body:{source_chain:o.caip2,source_currency:o.currencyAddress,destination_chain:e.destinationChain,destination_currency:e.destinationCurrency,destination_address:e.destinationAddress,refund_address:a.address,...null!=e.slippageBps?{slippage_bps:e.slippageBps}:{}}});r({step:"address",selectedCurrency:s,selectedChain:o,availableChains:i,quote:l})}catch(n){let e=n instanceof Error?n:Error(String(n)),t="status"in e&&"number"==typeof e.status?e.status:void 0;r({step:"error",code:e instanceof v.VQ&&"feature_not_enabled"===e.code?"DEPOSIT_ADDRESSES_NOT_ENABLED":t&&t>=500?"UNKNOWN_ERROR":P(e.message),message:e.message})}finally{a(!1)}}},[e,t,n,r]),isFetching:s}}function V(e,r){switch(e.status){case"completed":return r({step:"complete",order:e});case"refunded":return r({step:"refunded",order:e});case"failed":return r({step:"failed",order:e});case"executing":return r({step:"processing",order:e});default:return}}let B=({sourceAmount:e,sourceSymbol:r,sourceChainName:t,sourceDecimals:o,destinationAmount:s,destSymbol:i,destChainName:l,destDecimals:d,onClose:c})=>(0,n.jsx)(y.C,{icon:a.A,iconVariant:"success",title:"Transfer complete",subtitle:s?`Received ${D(e,o)} ${r} on ${t} and converted it to ${D(s,d)} ${i} on ${l}. Funds are available to use.`:`Your ${r} has been received and is now available in your wallet.`,showClose:!0,onClose:c,primaryCta:{label:"Done",onClick:c},watermark:!1});function z(){let{state:e,configData:r,close:t}=(0,i.c)("complete"),{order:s}=e,{sourceSymbol:a,sourceChainName:l,sourceDecimals:d,destSymbol:c,destChainName:u,destDecimals:p}=(0,o.useMemo)(()=>{let e=O({address:s.source_currency,caip2:s.source_chain,config:r}),t=O({address:s.destination_currency,caip2:s.destination_chain,config:r});return{sourceSymbol:e.symbol,sourceChainName:R(s.source_chain,r.chains),sourceDecimals:e.decimals,destSymbol:t.symbol,destChainName:R(s.destination_chain,r.chains),destDecimals:t.decimals}},[s,r]);return(0,n.jsx)(B,{sourceAmount:s.source_amount,sourceSymbol:a,sourceChainName:l,sourceDecimals:d,destinationAmount:s.destination_amount,destSymbol:c,destChainName:u,destDecimals:p,onClose:t})}function W(){let{modalState:e,setModalState:r,config:t,retryConfig:s,close:a,createDepositAddressEvent:d}=(0,i.a)();if("error"!==e.step)throw Error("UNEXPECTED_STATE");let{code:c}=e,{title:u,subtitle:p,detail:m,iconVariant:h}=(e=>{switch(e){case"AMOUNT_TOO_LOW":return{title:"Amount too low",subtitle:"The deposit amount is below the minimum for this route.",detail:"Try a larger amount or a different token.",iconVariant:"warning"};case"INSUFFICIENT_LIQUIDITY":return{title:"Insufficient liquidity",subtitle:"There isn't enough liquidity for this route right now.",detail:"Try a smaller amount or a different network.",iconVariant:"warning"};case"UNSUPPORTED_CHAIN":return{title:"Unsupported chain",subtitle:"Deposits from this chain type aren't supported yet. Try a different network.",iconVariant:"warning"};case"UNSUPPORTED_CURRENCY":case"UNSUPPORTED_ROUTE":case"ROUTE_UNAVAILABLE":case"NO_SWAP_ROUTES_FOUND":case"NO_INTERNAL_SWAP_ROUTES_FOUND":case"NO_QUOTES":return{title:"Route not available",subtitle:"This deposit route isn't supported right now. Try a different token or network.",iconVariant:"warning"};case"SANCTIONED_WALLET_ADDRESS":return{title:"Address restricted",subtitle:"This address cannot be used for deposits due to compliance restrictions.",iconVariant:"warning"};case"REFUND_WALLET_CREATION_FAILED":return{title:"Unable to set up refund address",subtitle:"We couldn't create a wallet to receive refunds on this chain. Please try again or select a different network.",iconVariant:"warning"};case"DEPOSIT_ADDRESSES_NOT_ENABLED":return{title:"Not enabled",subtitle:"Deposit addresses are not enabled for this app.",iconVariant:"warning"};case"NOT_AUTHENTICATED":return{title:"Not signed in",subtitle:"Please sign in to continue with your deposit.",iconVariant:"warning"};case"TIMEOUT_WAITING_FOR_NEXT_ORDER":case"TIMEOUT_ORDER_COMPLETION":return{title:"Taking longer than expected",subtitle:"Your funds are safe. The deposit is still being processed — check back later.",iconVariant:"subtle"};default:return{title:"Something went wrong",subtitle:"We couldn't complete your request. Please try again.",iconVariant:"subtle"}}})(c),[f,g]=(0,o.useState)(!1);return(0,n.jsx)(y.C,{icon:l.A,iconVariant:h,title:u,subtitle:m?`${p} ${m}`:p,showClose:!0,onClose:a,primaryCta:{label:"Try again",onClick:async()=>{if(d({eventName:"sdk_deposit_address_action",payload:{action:"retry",step:"error",errorCode:c}}),"ready"!==t.status){g(!0);try{await s(),r({step:"token"})}catch{g(!1)}}else r({step:"token"})},loading:f},watermark:!0})}function q(){let{state:e,close:r,createDepositAddressEvent:t}=(0,i.c)("failed"),{order:o}=e;return(0,n.jsx)(b.S,{icon:l.A,iconVariant:"error",title:"Transfer failed",subtitle:"Something went wrong processing your transfer.",showClose:!0,onClose:r,primaryCta:{label:"Done",onClick:r},secondaryCta:{label:"Learn about manual recovery",onClick:()=>{t({eventName:"sdk_deposit_address_action",payload:{action:"link_opened",step:"failed",target:"recovery_docs"}}),window.open("https://docs.privy.io","_blank","noopener,noreferrer")}},watermark:!0,children:(0,n.jsxs)(Q,{href:o.tracking_url,target:"_blank",rel:"noopener noreferrer",onClick:()=>{t({eventName:"sdk_deposit_address_action",payload:{action:"link_opened",step:"failed",target:"relay_reference"}})},children:["Reference: ",o.provider_request_id]})})}let Q=g.I4.a`
  text-align: center;
  font-size: 0.75rem;
  opacity: 0.7;
  text-decoration: underline;
  cursor: pointer;
  color: var(--privy-color-foreground-3);
`;function Y(){let{close:e,setModalState:r,config:t,params:s,onBack:a,createDepositAddressEvent:l}=(0,i.a)(),[c,u]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{if(c&&s){if("ready"===t.status){let e=L(t.data,s);r(e?{step:"error",code:"ROUTE_UNAVAILABLE",message:e}:{step:"token"})}"error"===t.status&&r({step:"error",code:"ROUTE_UNAVAILABLE"})}},[c,t,s,r]),(0,n.jsx)(y.C,{icon:d.A,iconVariant:"subtle",title:"Add funds",subtitle:"Top up your account by sending crypto from any wallet. Conversion and routing handled by Relay.",showClose:!0,onClose:e,showBack:!!a,onBack:a?()=>{l({eventName:"sdk_deposit_address_action",payload:{action:"back",step:"intro"}}),a()}:void 0,primaryCta:{label:"Continue",onClick:()=>{if(l({eventName:"sdk_deposit_address_action",payload:{action:"continue",step:"intro"}}),"ready"===t.status&&s){let e=L(t.data,s);r(e?{step:"error",code:"ROUTE_UNAVAILABLE",message:e}:{step:"token"})}else"error"===t.status?r({step:"error",code:"ROUTE_UNAVAILABLE"}):u(!0)},loading:c&&"loading"===t.status,loadingText:null},watermark:!0})}function X(){let{state:e,setModalState:r,close:t,createDepositAddressEvent:s}=(0,i.c)("network"),[a,l]=(0,o.useState)(-1),{availableChains:d}=e,{confirm:c,isFetching:u}=function(){let e=(0,i.b)(),{params:r}=(0,i.a)(),{fetchQuote:t,isFetching:n}=$();return{confirm:(0,o.useCallback)(async n=>{if(!n||!r)return;let o=e?.modalState;o&&"network"===o.step&&await t(n,o.selectedCurrency,o.availableChains)},[r,e,t]),isFetching:n}}();return(0,n.jsx)(b.S,{title:"Select network",eyebrow:(0,n.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:"0.375rem"},children:[(0,n.jsx)("img",{src:e.selectedCurrency.logoURI,alt:"",style:{width:"1rem",height:"1rem",borderRadius:"50%"}}),"Send ",e.selectedCurrency.symbol]}),showBack:!0,onBack:()=>{s({eventName:"sdk_deposit_address_action",payload:{action:"back",step:"network"}}),r({step:"token"})},showClose:!0,onClose:t,watermark:!0,children:(0,n.jsx)(x.S,{style:{marginTop:"1rem",height:"22rem"},$colorScheme:"light",children:d.map((e,r)=>(0,n.jsxs)(y.O,{$selected:a===r,disabled:u,onClick:()=>{s({eventName:"sdk_deposit_address_action",payload:{action:"network_selected",step:"network",network:e.caip2}}),l(r),c(e)},children:[(0,n.jsx)(y.N,{src:e.iconUrl,alt:e.displayName}),(0,n.jsx)(y.a,{children:e.displayName}),u&&r===a&&(0,n.jsx)(y.b,{})]},e.caip2))})})}let K=({trackingUrl:e,onViewBlockExplorer:r,onClose:t})=>(0,n.jsx)(b.S,{icon:c.A,iconVariant:"subtle",title:"Transfer in progress",subtitle:"Your deposit was received and the transfer is now processing.",showClose:!0,onClose:t,secondaryCta:{label:"View on block explorer ↗",onClick:()=>{r(),window.open(e,"_blank","noopener,noreferrer")}},watermark:!1,children:(0,n.jsxs)(y.T,{children:[(0,n.jsxs)(y.c,{children:[(0,n.jsx)(y.d,{$status:"done",children:(0,n.jsx)(a.A,{size:14,color:"var(--privy-color-icon-success)",strokeWidth:2})}),(0,n.jsx)(y.e,{children:"Deposit received"})]}),(0,n.jsx)(y.f,{}),(0,n.jsxs)(y.c,{children:[(0,n.jsx)(y.d,{$status:"active",children:(0,n.jsx)(H,{})}),(0,n.jsx)(y.e,{children:"Bridging"})]}),(0,n.jsx)(y.f,{}),(0,n.jsxs)(y.c,{children:[(0,n.jsx)(y.d,{$status:"pending"}),(0,n.jsx)(y.e,{children:"Funds arrived"})]})]})}),H=g.I4.span`
  width: 0.75rem;
  height: 0.75rem;
  border: 2px solid var(--privy-color-foreground-3);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;function G(){let{state:e,close:r,createDepositAddressEvent:t}=(0,i.c)("processing");return function({orderId:e,enabled:r}){let{privy:t}=(0,_.u)(),{setModalState:n}=(0,i.a)();(0,o.useEffect)(()=>{let r=new AbortController;return v.tr.waitForCompletion({privy:t,orderId:e,signal:r.signal}).then(e=>{r.signal.aborted||("success"===e.status?V(e.order,n):"timeout"===e.status&&n({step:"error",code:"TIMEOUT_ORDER_COMPLETION"}))}),()=>{r.abort()}},[r,e,t,n])}({orderId:e.order.id,enabled:!0}),(0,n.jsx)(K,{trackingUrl:e.order.tracking_url,onViewBlockExplorer:()=>{t({eventName:"sdk_deposit_address_action",payload:{action:"link_opened",step:"processing",target:"block_explorer"}})},onClose:r})}function J(){let{state:e,close:r,createDepositAddressEvent:t}=(0,i.c)("refunded"),{order:o}=e;return(0,n.jsx)(y.C,{icon:p,iconVariant:"subtle",title:"Transfer refunded",subtitle:"Your transfer was received, but the swap couldn't be completed. A refund has been started automatically.",showClose:!0,onClose:r,primaryCta:{label:"Done",onClick:r},secondaryCta:{label:"View transaction details",onClick:()=>{t({eventName:"sdk_deposit_address_action",payload:{action:"link_opened",step:"refunded",target:"transaction_details"}}),window.open(o.tracking_url,"_blank","noopener,noreferrer")}},watermark:!0})}function Z(){let{close:e,setModalState:r,config:t,createDepositAddressEvent:s}=(0,i.a)(),{confirm:a,currencies:l,isFetching:d}=function(){let{config:e,setModalState:r}=(0,i.a)(),{fetchQuote:t,isFetching:n}=$(),s="ready"===e.status?e.data.currencies.filter(r=>F(r,e.data).length>0):[];return{confirm:(0,o.useCallback)(async n=>{if("ready"!==e.status||!n)return;let o=F(n,e.data);if(1!==o.length)r({step:"network",selectedCurrency:n,availableChains:o});else{let e=o[0];await t(e,n,o)}},[e,t,r]),currencies:s,isFetching:n}}(),[c,u]=(0,o.useState)(-1);return(0,n.jsx)(b.S,{title:"Select token",subtitle:"Choose the asset you'll send.",showBack:!0,onBack:()=>{s({eventName:"sdk_deposit_address_action",payload:{action:"back",step:"token"}}),r({step:"intro"})},showClose:!0,onClose:e,watermark:!0,children:"error"===t.status?(0,n.jsx)(y.L,{children:(0,n.jsx)(y.S,{children:"Failed to load tokens"})}):"loading"===t.status?(0,n.jsx)(y.L,{children:(0,n.jsx)(C.L,{})}):(0,n.jsx)(x.S,{style:{marginTop:"1rem",height:"22rem"},$colorScheme:"light",children:l.map((e,r)=>(0,n.jsxs)(y.O,{$selected:c===r,disabled:d,onClick:()=>{s({eventName:"sdk_deposit_address_action",payload:{action:"token_selected",step:"token",token:e.symbol}}),u(r),a(e)},children:[(0,n.jsx)(y.g,{src:e.logoURI,alt:e.symbol}),(0,n.jsx)(y.a,{children:e.name}),d&&r===c?(0,n.jsx)(y.b,{}):(0,n.jsx)(y.h,{children:e.symbol})]},e.symbol))})})}function ee({address:e,onClick:r}){let[t,s]=(0,o.useState)(!1);return(0,n.jsx)(n.Fragment,{children:t?(0,n.jsx)(er,{onClick:()=>s(!1),style:{marginTop:"1.5rem"},children:(0,n.jsx)(E.Q,{url:e,size:312,hideLogo:!0})}):(0,n.jsxs)(et,{title:"Click to copy address",onClick:r,style:{marginTop:"1.5rem"},children:[(0,n.jsxs)(en,{children:[(0,n.jsx)(eo,{children:"Deposit address"}),(0,n.jsx)(es,{children:e})]}),(0,n.jsx)(ei,{children:(0,n.jsx)(ea,{type:"button",onClick:e=>{e.stopPropagation(),s(!0)},children:(0,n.jsx)(d.A,{size:16,color:"var(--privy-color-icon-muted)"})})})]})})}let er=g.I4.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`,et=g.I4.div`
  display: flex;
  border-radius: var(--privy-border-radius-md);
  background: var(--privy-color-background-clicked, #f1f2f9);
  padding: 1rem;
  cursor: pointer;
  gap: 0.5rem;
`,en=g.I4.div`
  flex: 1;
  min-width: 0;
  text-align: left;
`,eo=g.I4.div`
  font-size: 0.75rem;
  color: var(--privy-color-icon-muted);
  line-height: 1rem;
  margin-bottom: 0.25rem;
`,es=g.I4.div`
  word-break: break-all;
  font-size: 0.875rem;
  font-family: ui-monospace, monospace;
  font-weight: 500;
  line-height: 1.375rem;
  color: var(--privy-color-foreground);
`,ei=g.I4.div`
  width: 1.5rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding-top: 0.25rem;
`,ea=g.I4.button`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    border-radius: var(--privy-border-radius-xs);

    &:hover {
      background: var(--privy-color-background);
    }

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`;function el({quote:e,selectedCurrency:r,selectedChain:t,destinationSymbol:s}){var i,a;let d,[c,u]=(0,o.useState)(!1),p=r.symbol.toUpperCase(),f=t.displayName,g=(0,o.useRef)(null);return(0,n.jsxs)(ed,{children:[(0,n.jsxs)(ec,{onClick:(0,o.useCallback)(()=>{let e=document.getElementById("privy-modal-content");e&&(g.current&&clearTimeout(g.current),e.style.transition="none",g.current=setTimeout(()=>{e.style.transition="",g.current=null},160)),u(e=>!e)},[]),children:[(0,n.jsxs)(eu,{children:[r.logoURI&&(0,n.jsx)(y.g,{src:r.logoURI,alt:p,style:{width:"2rem",height:"2rem"}}),t.iconUrl&&(0,n.jsx)(ep,{src:t.iconUrl,alt:f})]}),(0,n.jsxs)(em,{children:[(0,n.jsx)(eh,{children:"You send"}),(0,n.jsxs)(ef,{children:[p," on ",f]})]}),(0,n.jsx)(ey,{children:(0,n.jsx)(c?m:h.A,{size:16})})]}),(0,n.jsx)(ev,{$expanded:c,children:(0,n.jsx)(ek,{children:(0,n.jsxs)(eg,{children:[e.indicative_rate&&(0,n.jsxs)(y.i,{children:[(0,n.jsx)(y.j,{children:"Conversion rate"}),(0,n.jsxs)(y.k,{style:{display:"flex",alignItems:"center",gap:"0.25rem"},children:[(i=e.indicative_rate,a=s.toUpperCase(),Number.isFinite(d=Number(i))&&0!==d?d>=.01?`1 ${p} ≈ ${U(d)} ${a}`:`${U(1/d)} ${p} ≈ 1 ${a}`:`1 ${p} ≈ ${i} ${a}`),(0,n.jsx)(e_,{content:"Estimated rate based on current market conditions. Final execution price may vary depending on transfer size and routing."})]})]}),(0,n.jsxs)(y.i,{children:[(0,n.jsx)(y.j,{children:"Max slippage"}),(0,n.jsxs)(y.k,{children:[(e.slippage_bps/100).toFixed(1),"%"]})]}),(0,n.jsxs)(y.i,{children:[(0,n.jsx)(y.j,{children:"Refund address"}),(0,n.jsx)(y.k,{children:(0,n.jsx)(A.C,{value:e.refund_address,iconOnly:!0,iconSize:11,children:(0,S.c)(e.refund_address,4,4)})})]})]})})}),(0,n.jsxs)(eb,{children:[(0,n.jsx)(l.A,{size:16,color:"var(--privy-color-icon-muted)",style:{flexShrink:0}}),(0,n.jsxs)(ex,{children:["Only send ",(0,n.jsx)("strong",{children:p})," on ",(0,n.jsx)("strong",{children:f}),". Other assets may be lost."]})]})]})}let ed=g.I4.div`
  border-radius: var(--privy-border-radius-md);
  border: 1px solid var(--privy-color-foreground-4);
  overflow: hidden;
`,ec=g.I4.button`
  && {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--privy-color-foreground);
    outline: none;
    box-shadow: none;

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`,eu=g.I4.span`
  position: relative;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`,ep=(0,g.I4)(y.N)`
  && {
    position: absolute;
    top: -0.125rem;
    right: -0.25rem;
    width: 0.75rem;
    height: 0.75rem;
    box-sizing: content-box;
    border: 1.5px solid #fff;
    background-color: #fff;
  }
`,em=g.I4.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,eh=g.I4.span`
  font-size: 0.75rem;
  color: var(--privy-color-foreground-3);
  line-height: 1rem;
`,ef=g.I4.span`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`,ey=g.I4.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-clicked, #f1f2f9);
  color: var(--privy-color-foreground-3);
`,eg=g.I4.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0.75rem;

  & > * {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--privy-color-foreground-4);
  }

  & > *:last-child {
    border-bottom: none;
  }
`,eb=g.I4.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0.75rem 0.75rem;
  padding: 0.625rem 0.75rem;
  border-radius: var(--privy-border-radius-sm);
  background: #f8f9fc;
`,ex=g.I4.span`
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: var(--privy-color-icon-muted);
  text-align: left;
`,ev=g.I4.div`
  display: grid;
  grid-template-rows: ${({$expanded:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 150ms ease-out;
`,ek=g.I4.div`
  overflow: hidden;
`;function e_({content:e}){let[r,t]=(0,o.useState)(!1),{refs:s,floatingStyles:i,context:a}=(0,j.we)({open:r,onOpenChange:t,placement:"top",whileElementsMounted:N.ll,middleware:[(0,T.cY)(6),(0,T.UU)(),(0,T.BN)({padding:8})]}),l=(0,j.Mk)(a,{move:!1,handleClose:(0,j.iB)()}),d=(0,j.iQ)(a),{getReferenceProps:c,getFloatingProps:u}=(0,j.bv)([l,d,(0,j.kp)(a),(0,j.s9)(a),(0,j.It)(a,{role:"tooltip"})]),{isMounted:p,styles:m}=(0,j.DL)(a,{duration:150});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{ref:s.setReference,type:"button","aria-label":"More information about conversion rate",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:0,border:"none",background:"none",color:"var(--privy-color-icon-muted)",cursor:"pointer"},...c(),children:(0,n.jsx)(f,{size:14})}),p&&(0,n.jsx)(j.XF,{root:document.getElementById("privy-modal-content")??void 0,children:(0,n.jsx)(eC,{ref:s.setFloating,style:{...i,...m},...u(),children:e})})]})}let eC=g.I4.div`
  max-width: 13rem;
  padding: 0.5rem 0.625rem;
  border-radius: var(--privy-border-radius-sm, 0.375rem);
  background: var(--privy-color-foreground);
  color: var(--privy-color-background);
  font-size: 0.6875rem;
  line-height: 1rem;
  font-weight: 400;
  text-align: left;
  z-index: 10;
`,ew=({quote:e,selectedCurrency:r,selectedChain:t,destinationSymbol:s,onBack:i,onClose:l})=>{let[d,c]=(0,o.useState)(!1),u=r?.symbol?.toUpperCase()??"funds",p=t?.displayName??"",m=async()=>{d||(await navigator.clipboard.writeText(e.deposit_address),c(!0),setTimeout(()=>c(!1),2e3))};return(0,n.jsxs)(b.S,{title:`Send ${u}${p?` on ${p}`:""}`,subtitle:"Send funds to the address below. Conversion and routing handled by Relay.",showBack:!0,onBack:i,showClose:!0,onClose:l,watermark:!1,children:[(0,n.jsx)(el,{quote:e,selectedCurrency:r,selectedChain:t,destinationSymbol:s}),(0,n.jsx)(ee,{address:e.deposit_address,onClick:m}),(0,n.jsx)(w.P,{style:{marginTop:"1rem",marginBottom:"0.5rem",...d?{backgroundColor:"var(--privy-color-icon-success)",borderColor:"var(--privy-color-icon-success)"}:{}},onClick:m,children:d?(0,n.jsxs)(n.Fragment,{children:["Copied ",(0,n.jsx)(a.A,{size:16,style:{marginLeft:"0.25rem"}})]}):"Copy address"}),(0,n.jsx)(eE,{children:"Routing and bridging are handled by Relay. Privy does not control execution timing, liquidity, or transaction outcomes."})]})},eE=g.I4.p`
  && {
    margin: 0.5rem 0 0;
    font-size: 0.6875rem;
    line-height: 1.125rem;
    color: var(--privy-color-icon-muted);
    text-align: center;
  }
`;function ej(){let{state:e,configData:r,setModalState:t,close:s,params:a,createDepositAddressEvent:l}=(0,i.c)("address"),{quote:d,selectedCurrency:c,selectedChain:u,availableChains:p}=e;return function({depositAddressId:e,enabled:r,quoteCreatedAt:t}){let{privy:n}=(0,_.u)(),{setModalState:s}=(0,i.a)();(0,o.useEffect)(()=>{if(!e)return;let r=new AbortController;return v.tr.waitForDeposit({privy:n,depositAddressId:e,quoteCreatedAt:t,signal:r.signal}).then(e=>{r.signal.aborted||("success"===e.status?V(e.order,s):"timeout"===e.status&&s({step:"error",code:"TIMEOUT_WAITING_FOR_NEXT_ORDER"}))}),()=>{r.abort()}},[r,e,n,t,s])}({depositAddressId:d.id,enabled:!0,quoteCreatedAt:d.created_at}),(0,n.jsx)(ew,{quote:d,selectedCurrency:c,selectedChain:u,destinationSymbol:(0,o.useMemo)(()=>O({address:a.destinationCurrency,caip2:a.destinationChain,config:r}).symbol,[a,r]),onBack:()=>{l({eventName:"sdk_deposit_address_action",payload:{action:"back",step:"address"}}),t({step:"network",selectedCurrency:c,availableChains:p})},onClose:s})}function eN(){let{modalState:e,setModalState:r}=(0,i.a)();return(0,n.jsx)(I,{onError:e=>r({step:"error",code:"UNEXPECTED_STATE",message:e.message}),resetKey:e.step,children:(0,n.jsx)(eT,{})})}function eT(){let{modalState:e}=(0,i.a)();switch(e.step){case"intro":return(0,n.jsx)(Y,{});case"token":return(0,n.jsx)(Z,{});case"network":return(0,n.jsx)(X,{});case"address":return(0,n.jsx)(ej,{});case"processing":return(0,n.jsx)(G,{});case"complete":return(0,n.jsx)(z,{});case"refunded":return(0,n.jsx)(J,{});case"failed":return(0,n.jsx)(q,{});case"error":return(0,n.jsx)(W,{});default:return null}}var eA={component:()=>{let{onUserCloseViaDialogOrKeybindRef:e}=(0,s.u)(),r=(0,i.b)(),{close:t,config:a}=(0,i.a)();return(0,o.useEffect)(()=>{e.current=t},[e,t]),(0,o.useEffect)(()=>{if("ready"===a.status){for(let e of a.data.currencies)(new Image).src=e.logoURI;for(let e of Object.values(a.data.chains))(new Image).src=e.iconUrl}},[a]),r?(0,n.jsx)(eN,{}):null}}},97415:(e,r,t)=>{t.d(r,{A:()=>n});let n=(0,t(71847).A)("hourglass",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M5 2h14",key:"pdyrp9"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",key:"1d314k"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",key:"1vvvr6"}]])}}]);