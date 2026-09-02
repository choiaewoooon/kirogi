"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1457],{75426:(e,t,s)=>{s.d(t,{A:()=>r});let r=(0,s(71847).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},77860:(e,t,s)=>{s.r(t),s.d(t,{FundWithBankDepositScreen:()=>L,default:()=>L});var r=s(95155),o=s(12115),a=s(76928),n=s(14659),i=s(21145),l=s(90154),c=s(92253),u=s(20031),d=s(83199),p=s(28317),y=s(82953),m=s(78874),f=s(97415);let h=(0,s(71847).A)("user-check",[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);var k=s(5917),g=s(50453),v=s(62795);s(50205),s(68463),s(14338);let C=({data:e,onClose:t})=>(0,r.jsx)(y.S,{showClose:!0,onClose:t,title:"Initiate bank transfer",subtitle:"Use the details below to complete a bank transfer from your bank.",primaryCta:{label:"Done",onClick:t},watermark:!1,footerText:"Exchange rates and fees are set when you authorize and determine the amount you receive. You'll see the applicable rates and fees for your transaction separately",children:(0,r.jsx)(w,{children:(p.D[e.deposit_instructions.asset]||[]).map(([t,s],o)=>{let a=e.deposit_instructions[t];if(!a||Array.isArray(a))return null;let n="asset"===t?a.toUpperCase():a,i=n.length>100?`${n.slice(0,9)}...${n.slice(-9)}`:n;return(0,r.jsxs)(b,{children:[(0,r.jsx)(x,{children:s}),(0,r.jsx)(d.a,{value:n,includeChildren:c.Fr,children:(0,r.jsx)(A,{children:i})})]},o)})})}),w=u.I4.ol`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-mdlg);
  border-style: solid;
  display: flex;
  flex-direction: column;

  && {
    padding: 0 1rem;
  }
`,b=u.I4.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  &:not(:first-of-type) {
    border-top: 1px solid var(--privy-color-border-default);
  }

  & > {
    :nth-child(1) {
      flex-basis: 30%;
    }

    :nth-child(2) {
      flex-basis: 60%;
    }
  }
`,x=u.I4.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'calt' off;

  /* text-xs/font-regular */
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */

  text-align: left;
  flex-shrink: 0;
`,A=u.I4.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;

  /* text-sm/font-medium */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */

  text-align: right;
  word-break: break-all;
`,j=({onClose:e})=>(0,r.jsx)(y.S,{showClose:!0,onClose:e,icon:m.A,iconVariant:"error",title:"Something went wrong",subtitle:"We couldn't complete account setup. This isn't caused by anything you did.",primaryCta:{label:"Close",onClick:e},watermark:!0}),S=({onClose:e,reason:t})=>{let s=t?t.charAt(0).toLowerCase()+t.slice(1):void 0;return(0,r.jsx)(y.S,{showClose:!0,onClose:e,icon:m.A,iconVariant:"error",title:"Identity verification failed",subtitle:s?`We can't complete identity verification because ${s}. Please try again or contact support for assistance.`:"We couldn't verify your identity. Please try again or contact support for assistance.",primaryCta:{label:"Close",onClick:e},watermark:!0})},E=({onClose:e,email:t})=>(0,r.jsx)(y.S,{showClose:!0,onClose:e,icon:f.A,title:"Identity verification in progress",subtitle:"We're waiting for Persona to approve your identity verification. This usually takes a few minutes, but may take up to 24 hours.",primaryCta:{label:"Done",onClick:e},watermark:!0,children:(0,r.jsxs)(g.I,{theme:"light",children:["You'll receive an email at ",t," once approved with instructions for completing your deposit."]})}),_=({onClose:e,onAcceptTerms:t,isLoading:s})=>(0,r.jsx)(y.S,{showClose:!0,onClose:e,icon:h,title:"Verify your identity to continue",subtitle:"Finish verification with Persona — it takes just a few minutes and requires a government ID.",helpText:(0,r.jsxs)(r.Fragment,{children:['This app uses Bridge to securely connect accounts and move funds. By clicking "Accept," you agree to Bridge\'s'," ",(0,r.jsx)("a",{href:"https://www.bridge.xyz/legal",target:"_blank",rel:"noopener noreferrer",children:"Terms of Service"})," ","and"," ",(0,r.jsx)("a",{href:"https://www.bridge.xyz/legal/row-privacy-policy/bridge-building-limited",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"}),"."]}),primaryCta:{label:"Accept and continue",onClick:t,loading:s},watermark:!0}),U=({onClose:e})=>(0,r.jsx)(y.S,{showClose:!0,onClose:e,icon:k.A,iconVariant:"success",title:"Identity verified successfully",subtitle:"We've successfully verified your identity. Now initiate a bank transfer to view instructions.",primaryCta:{label:"Initiate bank transfer",onClick:()=>{},loading:!0},watermark:!0}),T=({opts:e,onClose:t,onEditSourceAsset:s,onSelectAmount:o,isLoading:a})=>(0,r.jsxs)(y.S,{showClose:!0,onClose:t,headerTitle:`Buy ${e.destination.asset.toLocaleUpperCase()}`,primaryCta:{label:"Continue",onClick:o,loading:a},watermark:!0,children:[(0,r.jsx)(v.A,{currency:e.source.selectedAsset,inputMode:"decimal",autoFocus:!0}),(0,r.jsx)(v.C,{selectedAsset:e.source.selectedAsset,onEditSourceAsset:s})]}),I=({onClose:e,onAcceptTerms:t,onSelectAmount:s,onSelectSource:o,onEditSourceAsset:a,opts:n,state:i,email:l,isLoading:c})=>"select-amount"===i.status?(0,r.jsx)(T,{onClose:e,onSelectAmount:s,onEditSourceAsset:a,opts:n,isLoading:c}):"select-source-asset"===i.status?(0,r.jsx)(v.S,{onSelectSource:o,opts:n,isLoading:c}):"kyc-prompt"===i.status?(0,r.jsx)(_,{onClose:e,onAcceptTerms:t,opts:n,isLoading:c}):"kyc-incomplete"===i.status?(0,r.jsx)(E,{onClose:e,email:l}):"kyc-success"===i.status?(0,r.jsx)(U,{onClose:e}):"kyc-error"===i.status?(0,r.jsx)(S,{onClose:e,reason:i.reason}):"account-details"===i.status?(0,r.jsx)(C,{onClose:e,data:i.data}):"create-customer-error"===i.status||"get-customer-error"===i.status?(0,r.jsx)(j,{onClose:e}):null,L={component:()=>{let{user:e}=(0,l.u)(),t=(0,i.u)().data;if(!t?.FundWithBankDepositScreen)throw Error("Missing data");let{onSuccess:s,onFailure:c,opts:u,createOrUpdateCustomer:d,getCustomer:p,getOrCreateVirtualAccount:y}=t.FundWithBankDepositScreen,[m,f]=(0,o.useState)(u),[h,k]=(0,o.useState)({status:"select-amount"}),[g,v]=(0,o.useState)(null),[C,w]=(0,o.useState)(!1),b=(0,o.useRef)(null),x=(0,o.useCallback)(async()=>{let e;w(!0),v(null);try{e=await p({kycRedirectUrl:window.location.origin})}catch(e){if(!e||"object"!=typeof e||!("status"in e)||404!==e.status)return k({status:"get-customer-error"}),v(e),void w(!1)}if(!e)try{e=await d({hasAcceptedTerms:!1,kycRedirectUrl:window.location.origin})}catch(e){return k({status:"create-customer-error"}),v(e),void w(!1)}if(!e)return k({status:"create-customer-error"}),v(Error("Unable to create customer")),void w(!1);if("not_started"===e.status&&e.kyc_url)return k({status:"kyc-prompt",kycUrl:e.kyc_url}),void w(!1);if("not_started"===e.status)return k({status:"get-customer-error"}),v(Error("Unexpected user state")),void w(!1);if("rejected"===e.status)return k({status:"kyc-error",reason:e.rejection_reasons?.[0]?.reason}),v(Error("User KYC rejected.")),void w(!1);if("incomplete"===e.status)return k({status:"kyc-incomplete"}),void w(!1);if("active"!==e.status)return k({status:"get-customer-error"}),v(Error("Unexpected user state")),void w(!1);e.status;try{let e=await y({destination:m.destination,provider:m.provider,source:{asset:m.source.selectedAsset}});k({status:"account-details",data:e})}catch(e){return k({status:"create-customer-error"}),v(e),void w(!1)}},[m]),A=(0,o.useCallback)(async()=>{if(v(null),w(!0),"kyc-prompt"!==h.status)return v(Error("Unexpected state")),void w(!1);let e=(0,n.hZ)({location:h.kycUrl});if(await d({hasAcceptedTerms:!0}),!e)return v(Error("Unable to begin kyc flow.")),w(!1),void k({status:"create-customer-error"});b.current=new AbortController;let t=await (async(e,t)=>{let s=await (0,a.wt)({operation:async()=>({done:(e=>{try{return e.location.origin}catch{return}})(e)===window.location.origin,closed:e.closed}),until:({done:e,closed:t})=>e||t,delay:0,interval:500,attempts:360,signal:t});return"aborted"===s.status?(e.close(),{status:"aborted"}):"max_attempts"===s.status?{status:"timeout"}:s.result.done?(e.close(),{status:"redirected"}):{status:"closed"}})(e,b.current.signal);if("aborted"===t.status)return;if("closed"===t.status)return void w(!1);t.status;let s=await (0,a.wt)({operation:()=>p({}),until:e=>"active"===e.status||"rejected"===e.status,delay:0,interval:2e3,attempts:60,signal:b.current.signal});if("aborted"!==s.status){if("max_attempts"===s.status)return k({status:"kyc-incomplete"}),void w(!1);if(s.status,"rejected"===s.result.status)return k({status:"kyc-error",reason:s.result.rejection_reasons?.[0]?.reason}),v(Error("User KYC rejected.")),void w(!1);if("active"!==s.result.status)return k({status:"kyc-incomplete"}),void w(!1);e.closed||e.close(),s.result.status;try{k({status:"kyc-success"});let e=await y({destination:m.destination,provider:m.provider,source:{asset:m.source.selectedAsset}});k({status:"account-details",data:e})}catch(e){k({status:"create-customer-error"}),v(e)}finally{w(!1)}}},[k,v,w,d,y,h,m,b]),j=(0,o.useCallback)(e=>{k({status:"select-amount"}),f({...m,source:{...m.source,selectedAsset:e}})},[k,f]),S=(0,o.useCallback)(()=>{k({status:"select-source-asset"})},[k]);return(0,r.jsx)(I,{onClose:(0,o.useCallback)(async()=>{b.current?.abort(),g?c(g):await s()},[g,b]),opts:m,state:h,isLoading:C,email:e.email.address,onAcceptTerms:A,onSelectAmount:x,onSelectSource:j,onEditSourceAsset:S})}}},97415:(e,t,s)=>{s.d(t,{A:()=>r});let r=(0,s(71847).A)("hourglass",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M5 2h14",key:"pdyrp9"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",key:"1d314k"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",key:"1vvvr6"}]])}}]);