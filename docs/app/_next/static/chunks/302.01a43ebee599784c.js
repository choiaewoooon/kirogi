"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[302],{70302:(e,r,t)=>{t.r(r),t.d(r,{AddFundsSelectionScreen:()=>x,default:()=>x});var n=t(95155);let l=(0,t(71847).A)("banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);var c=t(78519),a=t(54690),i=t(12115),o=t(20031),s=t(63771),d=t(21145),h=t(89815),u=t(14824),y=t(28317);t(50205),t(68463),t(92253),t(14338);let x={component:()=>{let e=(0,y.K)(),{onUserCloseViaDialogOrKeybindRef:r}=(0,d.u)(),t=(0,s.u)(),o=(0,i.useRef)(!1);(0,i.useEffect)(()=>{e&&(o.current=!1)},[e]);let x=(0,i.useCallback)(async()=>{!o.current&&e&&(o.current=!0,(0,y.L)(),await e.onCancel())},[e]);return((0,i.useEffect)(()=>(r.current=x,()=>{r.current===x&&(r.current=null)}),[x,r]),e)?e.error?(0,n.jsx)(u.C,{icon:l,iconVariant:"warning",title:"Unable to add funds",subtitle:e.error,showClose:!0,onClose:x,primaryCta:{label:"Close",onClick:x}}):(0,n.jsx)(u.C,{icon:l,iconVariant:"subtle",title:"Select method",subtitle:"Choose how to fund your wallet",showClose:!0,onClose:x,children:(0,n.jsxs)(h.S,{style:{marginTop:"1rem"},$colorScheme:t.appearance.palette.colorScheme,children:[e.startFiat&&(0,n.jsxs)(u.O,{onClick:async()=>{o.current||(o.current=!0,await e.startFiat?.())},children:[(0,n.jsx)(p,{children:(0,n.jsx)(c.A,{})}),(0,n.jsxs)(f,{children:[(0,n.jsx)(u.a,{children:"Pay with fiat"}),(0,n.jsx)(m,{children:"Apple Pay, Google Pay, or debit card"})]})]}),e.startCrypto&&(0,n.jsxs)(u.O,{onClick:async()=>{o.current||(o.current=!0,await e.startCrypto?.())},children:[(0,n.jsx)(p,{children:(0,n.jsx)(a.A,{})}),(0,n.jsxs)(f,{children:[(0,n.jsx)(u.a,{children:"Transfer from wallet"}),(0,n.jsx)(m,{children:"Send crypto from any wallet"})]})]})]})}):null}},p=o.I4.span`
  width: 2rem;
  height: 2rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-2);
  color: var(--color-icon-muted, #64668b);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`,f=o.I4.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,m=o.I4.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--privy-color-foreground-3);
`},78519:(e,r,t)=>{t.d(r,{A:()=>n});let n=(0,t(71847).A)("credit-card",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]])}}]);