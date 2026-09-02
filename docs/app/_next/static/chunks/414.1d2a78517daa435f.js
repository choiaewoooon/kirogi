"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[414],{6742:(e,n,t)=>{t.d(n,{t:()=>i});var a=t(95155),l=t(21145),o=t(98218);function i({title:e}){let{currentScreen:n,navigateBack:t,navigate:i,data:r,setModalData:c}=(0,l.u)();return(0,a.jsx)(o.M,{title:e,backFn:"ManualTransferScreen"===n?t:n===r?.funding?.methodScreen?r.funding.comingFromSendTransactionScreen?()=>i("SendTransactionScreen"):void 0:r?.funding?.methodScreen?()=>{let e=r.funding;e.usingDefaultFundingMethod&&(e.usingDefaultFundingMethod=!1),c({funding:e,solanaFundingData:r?.solanaFundingData}),i(e.methodScreen)}:void 0})}},21165:(e,n,t)=>{t.d(n,{S:()=>l});var a=t(20031);let l=a.I4.span`
  margin-top: 4px;
  color: var(--privy-color-foreground);
  text-align: center;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */

  && a {
    color: var(--privy-color-accent);
  }
`},51691:(e,n,t)=>{t.d(n,{A:()=>l});var a=t(12115);let l=a.forwardRef(function(e,n){let{title:t,titleId:l,...o}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":l},o),t?a.createElement("title",{id:l},t):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"}))})},53767:(e,n,t)=>{t.d(n,{L:()=>o});var a=t(20031);let l=(0,a.i7)`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`,o=(0,a.AH)`
  ${e=>e.$isLoading?(0,a.AH)`
          width: 35%;
          animation: ${l} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`},60414:(e,n,t)=>{t.r(n),t.d(n,{TransferFromWalletScreen:()=>A,default:()=>A});var a=t(95155),l=t(12115),o=t(80596),i=t(98218),r=t(83288),c=t(6742),s=t(66180),d=t(78320),p=t(21165),u=t(63771),h=t(78017),y=t(43425),g=t(21145),w=t(57328),f=t(81559),m=t(81922),x=t(92253),v=t(20031),C=t(93173),T=t(28317),b=t(13559),j=t(95323);t(50205),t(68463),t(14338);let S=({provider:e,displayName:n,logo:t,connectOnly:o,connector:i})=>{let r,{navigate:c,setModalData:d}=(0,g.u)(),{connectWallet:p,walletConnectionStatus:u}=(0,y.u)(),w=(0,b.h)(),[f,m]=(0,l.useState)(!1),v="wallet_connect_v2"===i.connectorType?e:i.walletClientType,[j,S]=(0,l.useState)(!1);(0,l.useEffect)(()=>{j&&("connected"===u?.status||u?.connectError)&&(c(o?"ConnectOnlyStatusScreen":"ConnectionStatusScreen"),S(!1))},[j,u]);let I=(0,h.k)(e),W=window.matchMedia("(display-mode: standalone)").matches,F=(0,h.b)({connectorType:i.connectorType,walletClientType:v});r=F&&F.chainTypes.includes(i.chainType)?()=>{F.isInstalled||"solana"===i.chainType&&"isInstalled"in i&&i.isInstalled?(p(i,v),c(o?"ConnectOnlyStatusScreen":"ConnectionStatusScreen")):(0,h.l)({isMobile:x.Fr,walletConfig:F})?(d(n=>({...n,externalConnectWallet:{...n?.externalConnectWallet,preSelectedWalletId:e,walletChainType:"solana"===i.chainType?"solana-only":"ethereum-only"}})),c(o?"ConnectOnlyLandingScreen":"AuthenticateWithWalletScreen")):x.Fr?(d({installWalletModalData:{walletConfig:F,chainType:i.chainType,connectOnly:o}}),c("WalletInterstitialScreen")):(d({installWalletModalData:{walletConfig:F,chainType:i.chainType,connectOnly:o}}),c("InstallWalletScreen"))}:"coinbase_wallet"!==i.connectorType||"eoaOnly"!==i.coinbaseWalletConfig.preference?.options||!x.Fr||W||(0,C.k)()?()=>{if(!(0,T.r)(window.navigator.userAgent)||event?.isTrusted){if("mobile_wallet_adapter"===i.walletClientType)return p(i,v),void S(!0);p(i,v),o?"wallet_connect_v2"===i.connectorType?(d(e=>({...e,externalConnectWallet:{...e?.externalConnectWallet,preSelectedWalletId:"wallet_connect_qr"}})),c("ConnectOnlyLandingScreen")):c("ConnectOnlyStatusScreen"):c("ConnectionStatusScreen")}}:()=>{window.location.href=`https://go.cb-w.com/dapp?cb_url=${encodeURI(window.location.href)}`};let O=n||I?.metadata?.shortName||I?.name||i.walletClientType;return(0,a.jsxs)(_,{onClick:()=>{f||(m(!0),setTimeout(()=>m(!1),2e3),r())},disabled:f,children:[(0,a.jsx)(s.I,{icon:t||I?.image_url?.md,name:O}),(0,a.jsx)("span",{children:O}),(0,a.jsxs)(k,{id:"chip-container",children:[w?.walletClientType===v&&w?.chainType===i.chainType?(0,a.jsx)($,{color:"gray",children:"Recent"}):(0,a.jsx)("span",{id:"connect-text",children:"Connect"}),"solana"===i.chainType&&(0,a.jsx)($,{color:"gray",children:"Solana"})]})]})},_=(0,v.I4)(b.L)`
  /* Wallet name text color */
  > span {
    color: var(--privy-color-foreground);
  }

  /* Show "Connect" on hover */
  > #chip-container > #connect-text {
    font-weight: 500;
    color: var(--privy-color-accent);
    opacity: 0;
    transition: opacity 0.1s ease-out;
  }

  :hover > #chip-container > #connect-text {
    opacity: 1;
  }

  @media (max-width: 440px) {
    > #chip-container > #connect-text {
      display: none;
    }
  }
`,$=(0,v.I4)(d.C)`
  margin-left: auto;
`,k=v.I4.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-left: auto;
`,I=["coinbase_wallet","base_account"],W=["metamask","okx_wallet","rainbow","uniswap","bybit_wallet","ronin_wallet","haha_wallet","uniswap_extension","zerion","rabby_wallet","cryptocom","binance","kraken_wallet","robinhood_wallet"],F=["safe"],O=["phantom","backpack","solflare","jupiter","universal_profile"],A={component:()=>{let e,{connectors:n}=(0,y.u)(),{setModalData:t,data:s,navigate:d}=(0,g.u)(),x=(0,u.u)(),{wallets:v}=(0,w.u)(),C=n.filter(h.d).flatMap(e=>e.wallets),[T,j]=(0,l.useState)("default"),_="solana"===s?.funding?.chainType,$=!!s?.funding?.crossChainBridgingEnabled;e="ethereum"===s?.funding?.chainType?s.funding.erc20Address&&!s.funding.isUSDC?"ethereum-only":$&&!s.funding.chain.testnet?"ethereum-and-solana":"ethereum-only":$&&!s.funding?.isUSDC?"ethereum-and-solana":"solana-only";let k=v.filter(e=>"privy"!==e.walletClientType),A=k.map(e=>e.walletClientType),M=C.filter(e=>"privy"!==e.walletClientType),E=M.map(e=>e.walletClientType),L=[],B={...s.funding};B.usingDefaultFundingMethod&&(B.usingDefaultFundingMethod=!1);let z=({wallet:e,walletChainType:n})=>{t({...s,funding:{...B,connectedWallet:e,onContinueWithExternalWallet:()=>d(H({destChainType:_?"solana":"ethereum",sourceChainType:n}))},solanaFundingData:s?.solanaFundingData?{...s.solanaFundingData,sourceWalletData:{address:e.address,walletClientType:e.walletClientType}}:void 0}),d("FundingAmountEditScreen")};"solana-only"!==e&&L.push(...k.map((e,n)=>(0,a.jsx)(D,{onClick:()=>z({wallet:e,walletChainType:"ethereum"}),icon:e.meta.icon,name:e.meta.name,chainType:e.type},n))),"ethereum-only"!==e&&L.push(...M.map((e,n)=>(0,a.jsx)(D,{onClick:()=>z({wallet:e,walletChainType:"solana"}),icon:e.meta.icon,name:e.meta.name,chainType:e.type},n))),L.push(...(({walletList:e,walletChainType:n,connectors:t,connectOnly:l,ignore:o,walletConnectEnabled:i,forceWallet:r})=>{let c=[],s=[],d=[],p=t.filter(e=>"ethereum-only"===n?"ethereum"===e.chainType:"solana-only"!==n||"solana"===e.chainType),u=p.find(e=>"wallet_connect_v2"===e.connectorType);for(let[t,h]of(r?[r.wallet]:e).entries()){if("detected_ethereum_wallets"===h)for(let[e,n]of p.filter(({chainType:e,connectorType:n,walletClientType:t})=>"solana"!==e&&("uniswap_wallet_extension"===t||"uniswap_extension"===t?!o.includes("uniswap"):"crypto.com_wallet_extension"===t||"crypto.com_onchain"===t?!o.includes("cryptocom"):"injected"===n&&!o.includes(t))).entries()){let{walletClientType:o,walletBranding:i,chainType:r}=n;("unknown"===o?s:c).push((0,a.jsx)(S,{connectOnly:l,provider:o,logo:i.icon,displayName:i.name,connector:n},`${t}-${h}-${o}-${r}-${e}`))}if("detected_solana_wallets"===h)for(let[e,i]of p.filter(({chainType:e,walletClientType:t})=>{if("solana"===e)return"ethereum-only"!==n&&!o.includes(t)}).entries()){let{walletClientType:n,walletBranding:o,chainType:r}=i;("unknown"===n?s:c).push((0,a.jsx)(S,{connectOnly:l,provider:n,logo:o.icon,displayName:o.name,connector:i},`${t}-${h}-${n}-${r}-${e}`))}if(O.includes(h)){let e=p.find(e=>"injected"===e.connectorType&&e.walletClientType===h||e.connectorType===h);if(e&&c.push((0,a.jsx)(S,{connectOnly:l,provider:h,connector:e},`${t}-${h}`)),"solana-only"===n||"ethereum-and-solana"===n){let e=p.find(({chainType:e,walletClientType:n})=>"solana"===e&&n===h);e&&c.push((0,a.jsx)(S,{connectOnly:l,provider:h,connector:e},`${h}-solana`))}}else if(W.includes(h)){let e=p.find(e=>"uniswap"===h?"uniswap_wallet_extension"===e.walletClientType||"uniswap_extension"===e.walletClientType:"cryptocom"===h?"crypto.com_wallet_extension"===e.walletClientType||"crypto.com_onchain"===e.walletClientType:"injected"===e.connectorType&&e.walletClientType===h);if(i&&!e&&(e=u),e&&c.push((0,a.jsx)(S,{connectOnly:l,provider:h,connector:e,logo:"injected"===e.connectorType?e.walletBranding.icon:void 0,displayName:"injected"===e.connectorType?e.walletBranding.name:void 0},`${t}-${h}`)),"solana-only"===n||"ethereum-and-solana"===n){let e=p.find(({chainType:e,walletClientType:n})=>"solana"===e&&n===h);e&&c.push((0,a.jsx)(S,{connectOnly:l,provider:h,connector:e},`${h}-solana`))}}else if(I.includes(h)){let e=p.find(({connectorType:e})=>e===h);e&&c.push((0,a.jsx)(S,{connectOnly:l,provider:h,connector:e,displayName:"coinbase_wallet"===e.walletClientType?"Coinbase":"Base",logo:"coinbase_wallet"===e.walletClientType?m.v:m.w},`${t}-${h}`))}else if(F.includes(h))u&&d.push((0,a.jsx)(S,{connectOnly:l,provider:h,connector:u},`${t}-${h}`));else if("wallet_connect"===h)u&&d.push((0,a.jsx)(S,{connectOnly:l,provider:h,connector:u,logo:u.walletBranding.icon,displayName:"WalletConnect"},`${t}-${h}`));else if(h===r?.wallet){let n="ethereum"===r.chainType&&e.includes("detected_ethereum_wallets"),o="solana"===r.chainType&&e.includes("detected_solana_wallets");if(n||o){let e=p.find(({walletClientType:e})=>e===h);e&&c.push((0,a.jsx)(S,{connectOnly:l,provider:h,displayName:e.walletBranding?.name,logo:e.walletBranding?.icon,connector:e},`${t}-${h}`))}}}return[...s,...c,...d]})({walletList:x.appearance.walletList.filter(e=>!k.some(n=>n.walletClientType===e)&&!M.some(n=>n.walletClientType===e)),walletChainType:e,connectors:n,connectOnly:!0,ignore:[...x.appearance.walletList,...A,...E],walletConnectEnabled:x.externalWallets.walletConnect.enabled}));let N=(0,a.jsx)(f.W,{text:"More wallets",onClick:()=>j("overflow")}),H=({sourceChainType:e,destChainType:n})=>"ethereum"===e&&"solana"===n?"AwaitingEvmToSolBridgingScreen":"ethereum"===e&&"ethereum"===n?"AwaitingExternalEthereumTransferScreen":"solana"===e&&"ethereum"===n?"AwaitingSolToEvmBridgingScreen":B.externalSolanaFundingScreen;return(0,l.useEffect)(()=>{t({...s,externalConnectWallet:{onCompleteNavigateTo:({address:e,walletClientType:n,walletChainType:a})=>{let l=a??"ethereum",o="ethereum"===l?k.find(t=>t.address===e&&t.walletClientType===n):M.find(t=>t.address===e&&t.walletClientType===n);return t({...s,funding:{...B,connectedWallet:o,onContinueWithExternalWallet:()=>{d(H({destChainType:_?"solana":"ethereum",sourceChainType:l}))}},solanaFundingData:s?.solanaFundingData?{...s.solanaFundingData,sourceWalletData:{address:e||"",walletClientType:n||""}}:void 0}),"FundingAmountEditScreen"}}})},[]),(0,a.jsxs)(a.Fragment,"overflow"===T?{children:[(0,a.jsx)(i.M,{backFn:()=>j("default")},"header"),(0,a.jsxs)(b.p,{children:[(0,a.jsx)(p.S,{style:{color:"var(--privy-color-foreground-3)",textAlign:"left"},children:"More wallets"}),L]}),(0,a.jsx)(o.B,{})]}:{children:[(0,a.jsx)(c.t,{}),(0,a.jsx)(r.C,{title:"Transfer from wallet",description:"Connect a wallet to deposit funds or send funds manually to your wallet address."}),(0,a.jsxs)(b.p,{children:[L.length>4?L.slice(0,3):L,L.length>4&&N]}),(0,a.jsx)(o.B,{})]})}},D=({onClick:e,icon:n,name:t,chainType:l})=>(0,a.jsxs)(b.L,{onClick:e,children:[(0,a.jsx)(j.I,{style:{width:20},children:(0,a.jsx)(s.I,{icon:n,name:t})}),t,(0,a.jsx)(d.C,{color:"gray",style:{marginLeft:"auto"},children:"Connected"}),"solana"===l&&(0,a.jsx)(d.C,{color:"gray",children:"Solana"})]})},66180:(e,n,t)=>{t.d(n,{I:()=>o});var a=t(95155),l=t(51691);let o=({icon:e,name:n})=>"string"==typeof e?(0,a.jsx)("img",{alt:`${n||"wallet"} logo`,src:e,style:{height:24,width:24,borderRadius:4}}):void 0===e?(0,a.jsx)(l.A,{style:{height:24,width:24}}):e?(0,a.jsx)(e,{style:{height:24,width:24}}):null},75882:(e,n,t)=>{t.d(n,{A:()=>a});let a=(0,t(71847).A)("wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]])},78320:(e,n,t)=>{t.d(n,{C:()=>i});var a=t(95155),l=t(20031),o=t(53767);let i=({children:e,color:n,isLoading:t,isPulsing:l,...o})=>(0,a.jsx)(r,{$color:n,$isLoading:t,$isPulsing:l,...o,children:e}),r=l.I4.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem; /* 150% */
  border-radius: var(--privy-border-radius-xs);
  display: flex;
  align-items: center;
  ${e=>{let n,t;"green"===e.$color&&(n="var(--privy-color-success-dark)",t="var(--privy-color-success-light)"),"red"===e.$color&&(n="var(--privy-color-error)",t="var(--privy-color-error-light)"),"gray"===e.$color&&(n="var(--privy-color-foreground-2)",t="var(--privy-color-background-2)");let a=(0,l.i7)`
      from, to {
        background-color: ${t};
      }

      50% {
        background-color: rgba(${t}, 0.8);
      }
    `;return(0,l.AH)`
      color: ${n};
      background-color: ${t};
      ${e.$isPulsing&&(0,l.AH)`
        animation: ${a} 3s linear infinite;
      `};
    `}}

  ${o.L}
`},81559:(e,n,t)=>{t.d(n,{W:()=>i});var a=t(95155),l=t(75882),o=t(13559);let i=({onClick:e,text:n})=>(0,a.jsxs)(o.L,{onClick:e,children:[(0,a.jsx)(o.m,{children:(0,a.jsx)(l.A,{})}),(0,a.jsx)(o.G,{children:n})]})},83288:(e,n,t)=>{t.d(n,{C:()=>i,S:()=>o});var a=t(95155),l=t(20031);let o=({title:e,description:n,children:t,...l})=>(0,a.jsx)(r,{...l,children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{children:e}),"string"==typeof n?(0,a.jsx)("p",{children:n}):n,t]})});(0,l.I4)(o)`
  margin-bottom: 24px;
`;let i=({title:e,description:n,icon:t,children:l,...o})=>(0,a.jsxs)(c,{...o,children:[t||null,(0,a.jsx)("h3",{children:e}),n&&"string"==typeof n?(0,a.jsx)("p",{children:n}):n,l]}),r=l.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  width: 100%;
  margin-bottom: 24px;

  && h3 {
    font-size: 17px;
    color: var(--privy-color-foreground);
  }

  /* Sugar assuming children are paragraphs. Otherwise, handling styling on your own */
  && p {
    color: var(--privy-color-foreground-2);
    font-size: 14px;
  }
`,c=(0,l.I4)(r)`
  align-items: center;
  text-align: center;
  gap: 16px;

  h3 {
    margin-bottom: 24px;
  }
`},95323:(e,n,t)=>{t.d(n,{F:()=>c,I:()=>r,a:()=>s,b:()=>d,c:()=>u,d:()=>h,e:()=>i,f:()=>g,g:()=>w,h:()=>p});var a=t(20031),l=t(98218),o=t(52917);let i=a.I4.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  padding-bottom: 24px;
`,r=a.I4.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    border-radius: var(--privy-border-radius-sm);
  }
`,c=a.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`,s=a.I4.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding: 0 16px;
  border-width: 1px !important;
  border-radius: 12px;
  cursor: text;

  &:focus-within {
    border-color: var(--privy-color-accent);
  }
`;a.I4.div`
  font-size: 42px !important;
`;let d=a.I4.input`
  background-color: var(--privy-color-background);
  width: 100%;

  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  && {
    font-size: 26px;
  }
`,p=(0,a.I4)(d)`
  && {
    font-size: 42px;
  }
`;a.I4.button`
  cursor: pointer;
  padding-left: 4px;
`;let u=a.I4.div`
  font-size: 18px;
`,h=a.I4.div`
  font-size: 12px;
  color: var(--privy-color-foreground-3);
  // we need this container to maintain a static height if there's no content
  height: 20px;
`;a.I4.div`
  display: flex;
  flex-direction: row;
  line-height: 22px;
  font-size: 16px;
  text-align: center;
  svg {
    margin-right: 6px;
    margin: auto;
  }
`,(0,a.I4)(o.LinkButton)`
  margin-top: 16px;
`;let y=(0,a.i7)`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;(0,a.I4)(l.c)`
  border-radius: var(--privy-border-radius-md) !important;
  animation: ${y} 0.3s ease-in-out;
`;let g=a.I4.div``,w=a.I4.a`
  && {
    color: var(--privy-color-accent);
  }

  cursor: pointer;
`}}]);