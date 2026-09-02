"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5863],{5917:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(71847).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},55082:(e,t,n)=>{n.r(t),n.d(t,{AwaitingSolToEvmBridgingScreen:()=>I,default:()=>I});var r=n(95155),a=n(6956),i=n(12115),s=n(67993),o=n(76928),d=n(83361),l=n(80596),c=n(83288),u=n(6742),p=n(95204),h=n(63771),g=n(49345),f=n(78017),m=n(43425),v=n(21145),w=n(61976),y=n(10774),b=n(37768),x=n(76418),C=n(93173),A=n(18717),S=n(76148);n(50205),n(92253),n(68463);let I={component:function(){let e=(0,h.u)(),{closePrivyModal:t,createAnalyticsEvent:n,connectors:I}=(0,m.u)(),{navigate:T,setModalData:N,data:j}=(0,v.u)(),E=(0,h.u)(),k=(0,i.useRef)(!1),[F,U]=(0,i.useState)(!1),[P,z]=(0,i.useState)(!1),[R,W]=(0,i.useState)(null),[$,L]=(0,i.useState)(),[_,B]=(0,i.useState)();if(!j?.funding||"ethereum"!==j.funding.chainType)throw Error("Invalid funding data");let{amount:q,connectedWallet:D,chain:M,solanaChain:O,isUSDC:H}=j.funding,V=j.funding.address,Z=j.funding.erc20Address,Q=j.funding.isUSDC?"USDC":M.nativeCurrency.symbol,X=(0,i.useMemo)(()=>"solana"===D?.type?D.provider:function({connectors:e,connectedWalletAddress:t}){let n=e.find(e=>"solana"===e.chainType&&e.wallets.some(e=>e.address===t)),r=n?.wallet.accounts.find(e=>e.address===t);if(!n||!r)throw new g.P("Unable to find source wallet connector");return new o.WW({wallet:n.wallet,account:r})}({connectors:I,connectedWalletAddress:D?.address||""}),[D,I]),Y=(0,i.useMemo)(()=>{let t=(0,b.g)(x.S);if(!t)throw new g.P("Unable to load solana plugin");let n=e.solanaRpcs["solana:mainnet"];if(!n)throw new g.P("Unable to load mainnet RPC");return t.getSolanaRpcClient({rpc:n.rpc,rpcSubscriptions:n.rpcSubscriptions,chain:"solana:mainnet",blockExplorerUrl:n.blockExplorerUrl??"https://explorer.solana.com"})},[]),G=(0,f.k)((0,S.t)(X?.standardWallet.name||"unknown")),J=G?.name||"wallet";return(0,i.useEffect)(()=>{(async function(){if(!X||!M||k.current)return;let e=(0,b.g)(x.S);if(!e)return void W(new g.P("Unable to solana plugin"));k.current=!0,M?.testnet&&console.warn("Solana testnets are not supported for bridging");let t=H?1e6*parseFloat(q):(0,s.g)(q),n=await (0,y.g)({isTestnet:!!M.testnet,input:(0,y.t)({appId:E.id,amount:t.toString(),user:X.address,recipient:V,destinationChainId:M.id,originChainId:y.c,originCurrency:H?y.e:y.b,destinationCurrency:H?Z:void 0})}).catch(console.error);if(!n)return void W(new g.P(`Unable to fetch quotes for bridging. Wallet ${(0,C.q)(X.address)} does not have enough funds.`,void 0,g.a.INSUFFICIENT_BALANCE));let r=await e.createTransactionFromRelayQuote({quote:n,source:X.address,solanaClient:Y});if(r)try{U(!0);let t=await e.simulateTransaction({solanaClient:Y,tx:r});if(t.hasError)return t.hasFunds?(console.error("Transaction failed:",t.error),void W(new g.P("Something went wrong",void 0,g.a.TRANSACTION_FAILURE))):void W(new g.P(`Wallet ${(0,C.q)(X?.address)} does not have enough funds. ${n.details.currencyIn.amountFormatted} ${Q} are needed to complete the transaction.`,void 0,g.a.INSUFFICIENT_BALANCE));let{signature:a}=await X.signAndSendTransaction({chain:"solana:mainnet",transaction:r}),i=e.getAddressFromBuffer(a);L(i),B("pending")}catch(e){if(console.error(e),/user rejected the request/gi.test(e.message||""))return void W(new g.P("Transaction was rejected by the user",void 0,g.a.TRANSACTION_FAILURE));W(new g.P("Something went wrong",void 0,g.a.TRANSACTION_FAILURE))}else W(new g.P(`Unable to select bridge option from quotes. Wallet ${(0,C.q)(X.address)} does not have enough funds.`,void 0,g.a.INSUFFICIENT_BALANCE))})().catch(console.error)},[]),(0,y.u)({transactionHash:$,isTestnet:!1,bridgingStatus:_,setBridgingStatus:B,onSuccess({transactionHash:e}){U(!1),z(!0),n({eventName:w.O,payload:{provider:"external",status:"success",txHash:e,address:X.address,chainType:"solana",clusterName:O,token:"SOL",destinationAddress:V,destinationChainId:M.id,destinationChainType:"ethereum",destinationValue:q,destinationToken:H?"USDC":"ETH"}})},onFailure({error:e}){U(!1),W(e)}}),(0,i.useEffect)(()=>{if(!P)return;let e=setTimeout(t,h.v);return()=>clearTimeout(e)},[P]),(0,i.useEffect)(()=>{R&&(N({funding:j?.funding,solanaFundingData:j?.solanaFundingData,sendTransaction:j?.sendTransaction,errorModalData:{error:R,previousScreen:"TransferFromWalletScreen"}}),T("ErrorScreen",!1))},[R]),P?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.t,{}),(0,r.jsx)(d.b,{}),(0,r.jsxs)(d.c,{children:[(0,r.jsx)(a.A,{color:"var(--privy-color-success)",width:"64px",height:"64px"}),(0,r.jsx)(c.C,{title:"Success!",description:`You’ve successfully added ${q} ${Q} to your ${E.name} wallet. It may take a minute before the funds are available to use.`})]}),(0,r.jsx)(d.R,{}),(0,r.jsx)(l.B,{})]}):F&&X?(0,r.jsx)(A.T,{walletClientType:(0,S.t)(X?.standardWallet.name||"unknown"),displayName:J,addressToFund:V,isBridging:F,isErc20Flow:!1,chainId:M.id,chainName:M.name,totalPriceInUsd:void 0,totalPriceInNativeCurrency:void 0,gasPriceInUsd:void 0,gasPriceInNativeCurrency:void 0}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.t,{}),(0,r.jsx)(p.N,{}),(0,r.jsx)("div",{style:{marginTop:"1rem"}}),(0,r.jsx)(l.B,{})]})}}},67993:(e,t,n)=>{n.d(t,{g:()=>a});var r=n(93833);function a(e,t="wei"){return r.Xq(e,t)}},71847:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(12115);let a=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)},i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:d,className:l="",children:c,iconNode:u,...p}=e;return(0,r.createElement)("svg",{ref:t,...s,width:a,height:a,stroke:n,strokeWidth:d?24*Number(o)/Number(a):o,className:i("lucide",l),...!c&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0})(p)&&{"aria-hidden":"true"},...p},[...u.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(c)?c:[c]])}),d=(e,t)=>{let n=(0,r.forwardRef)((n,s)=>{let{className:d,...l}=n;return(0,r.createElement)(o,{ref:s,iconNode:t,className:i("lucide-".concat(a(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),"lucide-".concat(e),d),...l})});return n.displayName=a(e),n}},75426:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(71847).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},95204:(e,t,n)=>{n.d(t,{N:()=>i});var r=n(95155),a=n(20031);let i=({size:e,centerIcon:t})=>(0,r.jsx)(s,{$size:e,children:(0,r.jsxs)(o,{children:[(0,r.jsx)(l,{}),(0,r.jsx)(c,{}),t?(0,r.jsx)(d,{children:t}):null]})}),s=a.I4.div`
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
`,d=a.I4.div`
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
`,l=a.I4.div`
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
`,c=a.I4.div`
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