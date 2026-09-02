"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9809],{6742:(e,t,i)=>{i.d(t,{t:()=>a});var r=i(95155),n=i(21145),o=i(98218);function a({title:e}){let{currentScreen:t,navigateBack:i,navigate:a,data:d,setModalData:l}=(0,n.u)();return(0,r.jsx)(o.M,{title:e,backFn:"ManualTransferScreen"===t?i:t===d?.funding?.methodScreen?d.funding.comingFromSendTransactionScreen?()=>a("SendTransactionScreen"):void 0:d?.funding?.methodScreen?()=>{let e=d.funding;e.usingDefaultFundingMethod&&(e.usingDefaultFundingMethod=!1),l({funding:e,solanaFundingData:d?.solanaFundingData}),a(e.methodScreen)}:void 0})}},66259:(e,t,i)=>{i.d(t,{a:()=>c,b:()=>f,c:()=>l,g:()=>s,p:()=>u,s:()=>p});var r=i(56381),n=i(43425),o=i(93173);let a=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2}),d=e=>a.format(e),l=(e,t)=>{let i=d(t*parseFloat(e));return"$0.00"!==i?i:"<$0.01"},c=(e,t)=>{let i=d(t*parseFloat((0,r.c)(e)));return"$0.00"===i?"<$0.01":i},s=(e,t,i=6,r=!1)=>`${u(e,i,r)} ${t}`,u=(e,t=6,i=!1)=>{let n=parseFloat((0,r.c)(e)).toFixed(t).replace(/0+$/,"").replace(/\.$/,"");return i?n:`${"0"===n?"<0.001":n}`},p=e=>e.reduce((e,t)=>e+t,0n),f=(e,t)=>{let{chains:i}=(0,n.u)(),r=`https://etherscan.io/address/${t}`,a=`${(0,o.o)(e,i)}/address/${t}`;if(!a)return r;try{new URL(a)}catch{return r}return a}},69809:(e,t,i)=>{i.r(t),i.d(t,{FundingAmountEditScreen:()=>x,default:()=>x});var r=i(95155),n=i(12115),o=i(98218),a=i(83361),d=i(80596),l=i(6742),c=i(95204),s=i(88172),u=i(21145),p=i(88352),f=i(66259),g=i(95323);i(50205);let x={component:()=>{let{data:e,setModalData:t}=(0,u.u)(),i=e?.funding,x="solana"===i.chainType,h=(0,n.useRef)(null),{tokenPrice:v}=(0,p.u)(x?"solana":i.chain.id),m=x?void 0:i,y=!(!m?.erc20Address||m?.erc20ContractInfo),b=x?i.isUSDC?"USDC":"SOL":i.erc20Address?i.erc20ContractInfo?.symbol:i.chain.nativeCurrency.symbol||"ETH",I=parseFloat(i.amount),k=!isNaN(I)&&I>0,w=v?(0,f.c)(i.amount,v):void 0;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.t,{}),(0,r.jsx)(s.T,{children:"Confirm or edit amount"}),(0,r.jsxs)(a.F,{style:{marginTop:"32px"},children:[(0,r.jsx)(g.F,{children:y?(0,r.jsx)(c.N,{size:"50px"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(g.a,{onClick:()=>h.current?.focus(),children:[(0,r.jsx)(g.h,{ref:h,value:i.amount,onChange:r=>{let n=r.target.value;/^[0-9.]*$/.test(n)&&n.split(".").length-1<=1&&t({...e,funding:{...i,amount:n},solanaFundingData:e?.solanaFundingData?{...e.solanaFundingData,amount:n}:void 0})}}),(0,r.jsx)(g.c,{children:b})]}),!m?.erc20Address&&!(x&&i.isUSDC)&&(0,r.jsx)(g.d,{children:w&&k?`${w} USD`:""})]})}),(0,r.jsx)(o.b,{style:{marginTop:"1rem"},disabled:!k,onClick:i.onContinueWithExternalWallet,children:"Continue"})]}),(0,r.jsx)(d.B,{})]})}}},83361:(e,t,i)=>{i.d(t,{B:()=>n,C:()=>d,F:()=>c,H:()=>a,R:()=>f,S:()=>u,a:()=>s,b:()=>p,c:()=>l,d:()=>g,e:()=>o});var r=i(20031);let n=r.I4.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,o=r.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,a=r.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,d=(0,r.I4)(o)`
  padding: 20px 0;
`,l=(0,r.I4)(o)`
  gap: 16px;
`,c=r.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,s=r.I4.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;r.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;let u=r.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 100%;
  background: var(--privy-color-background-2);
  border-radius: var(--privy-border-radius-md);
  && h4 {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
    text-decoration: underline;
    font-weight: medium;
  }
  && p {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
  }
`,p=r.I4.div`
  height: 16px;
`,f=r.I4.div`
  height: 12px;
`;r.I4.div`
  position: relative;
`;let g=r.I4.div`
  height: ${e=>e.height??"12"}px;
`;r.I4.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`},84742:(e,t,i)=>{i.d(t,{u:()=>o});var r=i(12115),n=i(43425);let o=({enabled:e=!0}={})=>{let{showFiatPrices:t,getUsdPriceForSol:i}=(0,n.u)(),[o,a]=(0,r.useState)(!0),[d,l]=(0,r.useState)(void 0),[c,s]=(0,r.useState)(void 0);return(0,r.useEffect)(()=>{(async()=>{if(t&&e)try{a(!0);let e=await i();e?s(e):l(Error("Unable to fetch SOL price"))}catch(e){l(e)}finally{a(!1)}else a(!1)})()},[]),{solPrice:c,isSolPriceLoading:o,solPriceError:d}}},88172:(e,t,i)=>{i.d(t,{T:()=>n});var r=i(20031);let n=r.I4.span`
  color: var(--privy-color-foreground);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.875rem; /* 166.667% */
  text-align: center;
`},88352:(e,t,i)=>{i.d(t,{u:()=>l});var r=i(12115),n=i(63599),o=i(63771),a=i(43425),d=i(84742);function l(e){let{tokenPrice:t,isTokenPriceLoading:i,tokenPriceError:l}=(e=>{let{showFiatPrices:t,getUsdTokenPrice:i,chains:d}=(0,a.u)(),[l,c]=(0,r.useState)(!0),[s,u]=(0,r.useState)(void 0),[p,f]=(0,r.useState)(void 0);return(0,r.useEffect)(()=>{e||=o.t;let r=(0,n.uc)(d).find(t=>t.id===Number(e));(async()=>{if(t){if(!r)return c(!1),u(Error(`Unable to fetch token price on chain id ${e}`));try{c(!0);let e=await i(r);e?f(e):u(Error(`Unable to fetch token price on chain id ${r.id}`))}catch(e){u(e)}finally{c(!1)}}else c(!1)})()},[e]),{tokenPrice:p,isTokenPriceLoading:l,tokenPriceError:s}})("solana"===e?-1:e),{solPrice:c,isSolPriceLoading:s,solPriceError:u}=(0,d.u)({enabled:"solana"===e});return"solana"===e?{tokenPrice:c,isTokenPriceLoading:s,tokenPriceError:u}:{tokenPrice:t,isTokenPriceLoading:i,tokenPriceError:l}}},95323:(e,t,i)=>{i.d(t,{F:()=>l,I:()=>d,a:()=>c,b:()=>s,c:()=>p,d:()=>f,e:()=>a,f:()=>x,g:()=>h,h:()=>u});var r=i(20031),n=i(98218),o=i(52917);let a=r.I4.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  padding-bottom: 24px;
`,d=r.I4.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    border-radius: var(--privy-border-radius-sm);
  }
`,l=r.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`,c=r.I4.div`
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
`;r.I4.div`
  font-size: 42px !important;
`;let s=r.I4.input`
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
`,u=(0,r.I4)(s)`
  && {
    font-size: 42px;
  }
`;r.I4.button`
  cursor: pointer;
  padding-left: 4px;
`;let p=r.I4.div`
  font-size: 18px;
`,f=r.I4.div`
  font-size: 12px;
  color: var(--privy-color-foreground-3);
  // we need this container to maintain a static height if there's no content
  height: 20px;
`;r.I4.div`
  display: flex;
  flex-direction: row;
  line-height: 22px;
  font-size: 16px;
  text-align: center;
  svg {
    margin-right: 6px;
    margin: auto;
  }
`,(0,r.I4)(o.LinkButton)`
  margin-top: 16px;
`;let g=(0,r.i7)`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;(0,r.I4)(n.c)`
  border-radius: var(--privy-border-radius-md) !important;
  animation: ${g} 0.3s ease-in-out;
`;let x=r.I4.div``,h=r.I4.a`
  && {
    color: var(--privy-color-accent);
  }

  cursor: pointer;
`}}]);