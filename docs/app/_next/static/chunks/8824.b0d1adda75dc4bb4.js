"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8824],{6742:(e,t,n)=>{n.d(t,{t:()=>s});var a=n(95155),i=n(21145),r=n(98218);function s({title:e}){let{currentScreen:t,navigateBack:n,navigate:s,data:o,setModalData:l}=(0,i.u)();return(0,a.jsx)(r.M,{title:e,backFn:"ManualTransferScreen"===t?n:t===o?.funding?.methodScreen?o.funding.comingFromSendTransactionScreen?()=>s("SendTransactionScreen"):void 0:o?.funding?.methodScreen?()=>{let e=o.funding;e.usingDefaultFundingMethod&&(e.usingDefaultFundingMethod=!1),l({funding:e,solanaFundingData:o?.solanaFundingData}),s(e.methodScreen)}:void 0})}},6956:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(12115);let i=a.forwardRef(function(e,t){let{title:n,titleId:i,...r}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},r),n?a.createElement("title",{id:i},n):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))})},23803:(e,t,n)=>{n.d(t,{a:()=>u,b:()=>g,u:()=>h,w:()=>p});var a=n(23567),i=n(66602),r=n(12115),s=n(63771),o=n(37768),l=n(49345),c=n(81029).hp;let d=Symbol("default-solana-rpcs-plugin");function u(e){return new Uint8Array((0,a.BX)().decode(e).messageBytes)}let g=(...e)=>{if(void 0===c)throw new l.P("Buffer is not defined.",void 0,l.a.BUFFER_NOT_DEFINED);return c.from(...e)};async function p({rpcSubscriptions:e,signature:t,timeout:n}){let a=new AbortController,i=await e.signatureNotifications(t,{commitment:"confirmed"}).subscribe({abortSignal:a.signal}),r=await Promise.race([new Promise(e=>{setTimeout(()=>{a.abort(),e(Error("Transaction confirmation timed out"))},n)}),new Promise(async e=>{for await(let t of i){if(a.abort(),t.value.err)return e(Error("Transaction confirmation failed"));e(void 0)}})]);if(r instanceof Error)throw r}function h(){let e=(0,s.u)(),t=(0,o.u)(),n=(0,r.useMemo)(()=>{let n=t(d),a=n?.getDefaultRpcs({appId:e.id});return Object.fromEntries(["solana:mainnet","solana:devnet","solana:testnet"].map(t=>{let n=e.solanaRpcs[t]??a?.[t]??null;return[t,n?function({rpc:e,rpcSubscriptions:t,chain:n,blockExplorerUrl:a}){let r=function({rpc:e,rpcSubscriptions:t}){return async(n,a)=>new Promise(async(r,s)=>{try{let s=await e.sendTransaction(g(n).toString("base64"),{preflightCommitment:"confirmed",encoding:"base64",skipPreflight:a?.skipPreflight??!1}).send();a?.skipConfirmation||await p({rpcSubscriptions:t,signature:s,timeout:1e4}),r({signature:new Uint8Array((0,i.nZ)().encode(s))})}catch(e){s(e)}})}({rpc:e,rpcSubscriptions:t});return{rpc:e,rpcSubscriptions:t,chain:n,blockExplorerUrl:a,sendAndConfirmTransaction:r}}({chain:t,rpc:n.rpc,rpcSubscriptions:n.rpcSubscriptions,blockExplorerUrl:n.blockExplorerUrl??`https://explorer.solana.com?cluster=${t.replace("solana:","")}`}):null]}))},[e.solanaRpcs,e.id,t]);return(0,r.useCallback)(e=>{if(!n[e])throw Error(`No RPC configuration found for chain ${e}`);return n[e]},[n])}},28999:(e,t,n)=>{n.d(t,{g:()=>a});function a(e){switch(e){case"solana:mainnet":return"Solana";case"solana:devnet":return"Devnet";case"solana:testnet":return"Testnet"}}},36054:(e,t,n)=>{n.d(t,{R:()=>r,a:()=>i});var a=n(20031);let i=a.I4.span`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  width: 100%;
`,r=a.I4.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 0.5rem;
`},38824:(e,t,n)=>{n.r(t),n.d(t,{FundSolWalletWithExternalSolanaWallet:()=>eV,default:()=>eV});var a=n(95155),i=n(6956),r=n(12115),s=n(76928),o=n(98218),l=n(83361),c=n(80596),d=n(83288),u=n(6742),g=n(66180),p=n(95204),h=n(41021),f=n(36054);function m({rows:e}){return(0,a.jsx)(f.a,{children:e.filter(e=>!!e).map((e,t)=>null!=e.value||e.isLoading?(0,a.jsxs)(f.R,{children:[(0,a.jsx)(h.L,{children:e.label}),(0,a.jsx)(h.V,{$isLoading:e.isLoading,children:e.value})]},t):null)})}var v=n(63771),w=n(49345),y=n(43425),b=n(21145),A=n(90154),S=n(53626),x=n(57328),T=n(68463),E=n(42461);let I=()=>{let{walletProxy:e,initializeWalletProxy:t,client:n}=(0,y.u)();return(0,r.useMemo)(()=>({signWithUserSigner:async({message:a,targetAppId:i})=>{let r=e??await t(v.W);if(!r)throw Error("Wallet proxy not initialized");let s=await n.getAccessToken();if(!s)throw Error("User must be authenticated");let{signature:o}=await r.signWithUserSigner({accessToken:s,message:a,targetAppId:i});return{signature:o}}}),[e,n])};var P=n(23803),C=n(64176),j=n(23567),F=n(72796),U=n(76041);let W=["solana:mainnet","solana:devnet","solana:testnet"];function O(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw TypeError("attempted to use private field on non-instance");return e}var k=0,_="__private_"+k+++"__implementation";function M(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw TypeError("attempted to use private field on non-instance");return e}var N=0;function D(e){return"__private_"+N+++"_"+e}var L=D("_address"),B=D("_publicKey"),z=D("_chains"),R=D("_features"),V=D("_label"),H=D("_icon");class ${get address(){return M(this,L)[L]}get publicKey(){return M(this,B)[B].slice()}get chains(){return M(this,z)[z].slice()}get features(){return M(this,R)[R].slice()}get label(){return M(this,V)[V]}get icon(){return M(this,H)[H]}constructor({address:e,publicKey:t,label:n,icon:a}){Object.defineProperty(this,L,{writable:!0,value:void 0}),Object.defineProperty(this,B,{writable:!0,value:void 0}),Object.defineProperty(this,z,{writable:!0,value:void 0}),Object.defineProperty(this,R,{writable:!0,value:void 0}),Object.defineProperty(this,V,{writable:!0,value:void 0}),Object.defineProperty(this,H,{writable:!0,value:void 0}),M(this,L)[L]=e,M(this,B)[B]=t,M(this,z)[z]=W,M(this,V)[V]=n,M(this,H)[H]=a,M(this,R)[R]=["solana:signAndSendTransaction","solana:signTransaction","solana:signMessage"],new.target===$&&Object.freeze(this)}}function G(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw TypeError("attempted to use private field on non-instance");return e}var Z=0;function J(e){return"__private_"+Z+++"_"+e}var Q=J("_listeners"),Y=J("_version"),K=J("_name"),q=J("_icon"),X=J("_injection"),ee=J("_isPrivyWallet"),et=J("_accounts"),en=J("_on"),ea=J("_emit"),ei=J("_off"),er=J("_connected"),es=J("_connect"),eo=J("_disconnect"),el=J("_signMessage"),ec=J("_signAndSendTransaction"),ed=J("_signTransaction");function eu(e,...t){G(this,Q)[Q][e]?.forEach(e=>e.apply(null,t))}function eg(e,t){G(this,Q)[Q][e]=G(this,Q)[Q][e]?.filter(e=>t!==e)}function ep(){let{isHeadlessSigning:e,walletProxy:t,initializeWalletProxy:n,recoverEmbeddedWallet:a,openModal:i,privy:r,client:o}=(0,y.u)(),{user:l}=(0,S.u)(),{setModalData:c}=(0,b.u)(),{signWithUserSigner:d}=I();return{signMessage:({message:u,address:g,options:p})=>new Promise(async(h,f)=>{let m=(0,A.f)(l,g);if("privy"!==m?.walletClientType)return void f(new w.P("Wallet is not a Privy wallet",void 0,w.a.EMBEDDED_WALLET_NOT_FOUND));let{entropyId:v,entropyIdVerifier:y}=(0,x.g)(l,m),b=(0,A.a)(m),S=(0,P.b)(u).toString("base64");if(S.length<1)return void f(new w.P("Message must be a non-empty string",void 0,w.a.INVALID_MESSAGE));let T=async()=>{let e;if(!l)throw Error("User must be authenticated before signing with a Privy wallet");let i=await o.getAccessToken();if(!i)throw Error("User must be authenticated to use their embedded wallet.");let c=t??await n(15e3);if(!c)throw Error("Failed to initialize embedded wallet proxy.");if(!await a({address:m.address}))throw Error("Unable to connect to wallet");if(b){let t=await (0,s._0)(r,d,{chain_type:"solana",method:"signMessage",params:{message:S,encoding:"base64"},wallet_id:m.id});if(!t.data||!("signature"in t.data))throw Error("Failed to sign message");e=t.data.signature}else{let{response:t}=await c.rpc({accessToken:i,entropyId:v,entropyIdVerifier:y,chainType:"solana",hdWalletIndex:m.walletIndex??0,requesterAppId:p?.uiOptions?.requesterAppId,request:{method:"signMessage",params:{message:S}}});e=t.data.signature}return e};if(e({showWalletUIs:p?.uiOptions?.showWalletUIs}))try{let e=await T(),t=new Uint8Array((0,P.b)(e,"base64"));h({signature:t})}catch(e){f(e)}else c({signMessage:{method:"solana_signMessage",data:S,confirmAndSign:T,onSuccess:e=>{h({signature:new Uint8Array((0,P.b)(e,"base64"))})},onFailure:e=>{f(e)},uiOptions:p?.uiOptions??{}},connectWallet:{recoveryMethod:m.recoveryMethod,connectingWalletAddress:m.address,entropyId:v,entropyIdVerifier:y,isUnifiedWallet:b,onCompleteNavigateTo:"SignRequestScreen",onFailure:e=>{f(new w.P("Failed to connect to wallet",e,w.a.UNKNOWN_CONNECT_WALLET_ERROR))}}}),i("EmbeddedWalletConnectingScreen")})}}function eh(){let{isHeadlessSigning:e,openModal:t,privy:n}=(0,y.u)(),{setModalData:a}=(0,b.u)(),{signMessage:i}=ep(),{signWithUserSigner:r}=I(),{user:o}=(0,S.u)();return{signTransaction:async({transaction:l,options:c,chain:d="solana:mainnet",address:u})=>{let g=(0,A.f)(o,u);if("privy"!==g?.walletClientType)throw new w.P("Wallet is not a Privy wallet",void 0,w.a.EMBEDDED_WALLET_NOT_FOUND);let p=(0,A.a)(g);async function h(e){let t,a;if(p){let t=await (0,s._0)(n,r,{chain_type:"solana",method:"signTransaction",params:{transaction:C.O.base64.fromBytes(e),encoding:"base64"},wallet_id:g.id});if(t.data&&"signed_transaction"in t.data&&null!=t.data.signed_transaction)return{signedTransaction:new Uint8Array(C.O.base64.toBytes(t.data.signed_transaction))};throw Error("Failed to sign transaction")}let{signature:o}=await i({message:(0,P.a)(e),address:u,options:{...c,uiOptions:{...c?.uiOptions,showWalletUIs:!1}}});return{signedTransaction:(t=structuredClone((0,j.BX)().decode(e)),(a=(0,F.hl)(u))in t.signatures&&(t.signatures[a]=o),new Uint8Array((0,j.l9)().encode(t)))}}return e({showWalletUIs:c?.uiOptions?.showWalletUIs})?h(l):new Promise(async(e,n)=>{let{entropyId:i,entropyIdVerifier:r}=(0,x.g)(o,g);function s(e){return t=>{n(t instanceof w.P?t:new w.P("Failed to connect to wallet",t,e))}}let u={account:g,transaction:new Uint8Array(l),chain:d,signOnly:!0,uiOptions:c?.uiOptions||{},onConfirm:h,onSuccess:e,onFailure:s(w.a.TRANSACTION_FAILURE)};a({connectWallet:{recoveryMethod:g.recoveryMethod,connectingWalletAddress:g.address,entropyId:i,entropyIdVerifier:r,isUnifiedWallet:p,onCompleteNavigateTo:"StandardSignAndSendTransactionScreen",onFailure:s(w.a.UNKNOWN_CONNECT_WALLET_ERROR)},standardSignAndSendTransaction:u}),t("EmbeddedWalletConnectingScreen")})}}}let ef=new class extends T.A{setImplementation(e){O(this,_)[_]=e}async signMessage(e){return O(this,_)[_].signMessage(e)}async signAndSendTransaction(e){return O(this,_)[_].signAndSendTransaction(e)}async signTransaction(e){return O(this,_)[_].signTransaction(e)}constructor(e){super(),Object.defineProperty(this,_,{writable:!0,value:void 0}),O(this,_)[_]=e}}({signTransaction:(0,y.b)("signTransaction was not injected"),signAndSendTransaction:(0,y.b)("signAndSendTransaction was not injected"),signMessage:(0,y.b)("signMessage was not injected")}),em=new class{get version(){return G(this,Y)[Y]}get name(){return G(this,K)[K]}get icon(){return G(this,q)[q]}get chains(){return W.slice()}get features(){return{"standard:connect":{version:"1.0.0",connect:G(this,es)[es]},"standard:disconnect":{version:"1.0.0",disconnect:G(this,eo)[eo]},"standard:events":{version:"1.0.0",on:G(this,en)[en]},"solana:signAndSendTransaction":{version:"1.0.0",supportedTransactionVersions:["legacy",0],signAndSendTransaction:G(this,ec)[ec]},"solana:signTransaction":{version:"1.0.0",supportedTransactionVersions:["legacy",0],signTransaction:G(this,ed)[ed]},"solana:signMessage":{version:"1.0.0",signMessage:G(this,el)[el]},"privy:":{privy:{signMessage:G(this,X)[X].signMessage,signTransaction:G(this,X)[X].signTransaction,signAndSendTransaction:G(this,X)[X].signAndSendTransaction}}}}get accounts(){return G(this,et)[et].slice()}get isPrivyWallet(){return G(this,ee)[ee]}constructor({name:e,icon:t,version:n,injection:a,wallets:i}){Object.defineProperty(this,ea,{value:eu}),Object.defineProperty(this,ei,{value:eg}),Object.defineProperty(this,Q,{writable:!0,value:void 0}),Object.defineProperty(this,Y,{writable:!0,value:void 0}),Object.defineProperty(this,K,{writable:!0,value:void 0}),Object.defineProperty(this,q,{writable:!0,value:void 0}),Object.defineProperty(this,X,{writable:!0,value:void 0}),Object.defineProperty(this,ee,{writable:!0,value:void 0}),Object.defineProperty(this,et,{writable:!0,value:void 0}),Object.defineProperty(this,en,{writable:!0,value:void 0}),Object.defineProperty(this,er,{writable:!0,value:void 0}),Object.defineProperty(this,es,{writable:!0,value:void 0}),Object.defineProperty(this,eo,{writable:!0,value:void 0}),Object.defineProperty(this,el,{writable:!0,value:void 0}),Object.defineProperty(this,ec,{writable:!0,value:void 0}),Object.defineProperty(this,ed,{writable:!0,value:void 0}),G(this,Q)[Q]={},G(this,en)[en]=(e,t)=>(G(this,Q)[Q][e]?.push(t)||(G(this,Q)[Q][e]=[t]),()=>G(this,ei)[ei](e,t)),G(this,er)[er]=e=>{null!=e&&(G(this,et)[et]=e.map(({address:e})=>new $({address:e,publicKey:E.tw.decode(e)}))),G(this,ea)[ea]("change",{accounts:this.accounts})},G(this,es)[es]=async()=>(G(this,ea)[ea]("change",{accounts:this.accounts}),{accounts:this.accounts}),G(this,eo)[eo]=async()=>{G(this,ea)[ea]("change",{accounts:this.accounts})},G(this,el)[el]=async(...e)=>{let t=[];for(let{account:n,...a}of e){let{signature:e}=await G(this,X)[X].signMessage({...a,address:n.address});t.push({signedMessage:a.message,signature:e})}return t},G(this,ec)[ec]=async(...e)=>{let t=[];for(let n of e){let{signature:e}=await G(this,X)[X].signAndSendTransaction({...n,transaction:n.transaction,address:n.account.address,chain:n.chain||"solana:mainnet",options:n.options});t.push({signature:e})}return t},G(this,ed)[ed]=async(...e)=>{let t=[];for(let{transaction:n,account:a,options:i,chain:r}of e){let{signedTransaction:e}=await G(this,X)[X].signTransaction({transaction:n,address:a.address,chain:r||"solana:mainnet",options:i});t.push({signedTransaction:e})}return t},G(this,K)[K]=e,G(this,q)[q]=t,G(this,Y)[Y]=n,G(this,X)[X]=a,G(this,et)[et]=[],G(this,ee)[ee]=!0,a.on("accountChanged",G(this,er)[er],this),G(this,er)[er](i)}}({name:"Privy",version:"1.0.0",icon:"data:image/png;base64,AAABAAEAFBQAAAAAIABlAQAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAUAAAAFAgGAAAAjYkdDQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAQVJREFUeJxiYMANZIC4E4ivAPFPIP4FxDeAuB+IlfDowwBMQFwJxF+B+D8O/AOI66Bq8QJGIF6ExyB0vAqImfEZmEeCYTDcgMswPiB+T4aB34FYApuBsWQYBsP52AycToGBK7EZuJECAw9jM3AVBQbuwWZgIwUGTsZmoDkFBnpiMxAEjpJh2FV8iVsbiD+TYBgoDVrgMgwGnID4HRGGgTKBGyHDYEAaiBdCSxh0g/5AU4Q8sYYhAzEgjoGmABBOgFo2eACowFABYn0oVgViAVINkQTiZUD8DIj/ATF6GILEXgLxCiCWIsZAbiAuBeKtQHwHiEHJ6C8UfwHie0C8E4jLoWpRAAAAAP//rcbhsQAAAAZJREFUAwBYFs3VKJ0cuQAAAABJRU5ErkJggg==",wallets:[],injection:ef});var ev=n(88352),ew=n(61976),ey=n(2323),eb=n(72839),eA=n(69605),eS=n(23537),ex=n(36058),eT=(e=>(e[e.Uninitialized=0]="Uninitialized",e[e.Initialized=1]="Initialized",e))(eT||{}),eE=(e=>(e[e.Legacy=0]="Legacy",e[e.Current=1]="Current",e))(eE||{}),eI=(e=>(e[e.Nonce=0]="Nonce",e))(eI||{}),eP=(e=>(e[e.CreateAccount=0]="CreateAccount",e[e.Assign=1]="Assign",e[e.TransferSol=2]="TransferSol",e[e.CreateAccountWithSeed=3]="CreateAccountWithSeed",e[e.AdvanceNonceAccount=4]="AdvanceNonceAccount",e[e.WithdrawNonceAccount=5]="WithdrawNonceAccount",e[e.InitializeNonceAccount=6]="InitializeNonceAccount",e[e.AuthorizeNonceAccount=7]="AuthorizeNonceAccount",e[e.Allocate=8]="Allocate",e[e.AllocateWithSeed=9]="AllocateWithSeed",e[e.AssignWithSeed=10]="AssignWithSeed",e[e.TransferSolWithSeed=11]="TransferSolWithSeed",e[e.UpgradeNonceAccount=12]="UpgradeNonceAccount",e))(eP||{});function eC(e){return!!e&&"object"==typeof e&&"address"in e&&(0,eb.Pl)(e)}var ej=n(19331),eF=n(68893),eU=n(34181),eW=n(94553),eO=n(50982),ek=n(73558),e_=n(66602),eM=n(28999),eN=n(52644),eD=n(76148);function eL(e){return BigInt(Math.floor(1e9*parseFloat(e)))}function eB(e){return+ez.format(parseFloat(e.toString())/1e9)}n(50205);let ez=Intl.NumberFormat(void 0,{maximumFractionDigits:8});async function eR({tx:e,solanaClient:t,amount:n,asset:a,tokenPrice:i}){if(!e)return null;if("SOL"===a&&i){let a=eL(n),r=(0,eN.g)(a,i),s=await (0,ek.f)({solanaClient:t,tx:e});return{amountInUsd:r,feeInUsd:i?(0,eN.g)(s,i):void 0,totalInUsd:(0,eN.g)(a+s,i)}}if("USDC"===a&&i){let a,r="$"+n,s=await (0,ek.f)({solanaClient:t,tx:e}),o=(a=parseFloat(s.toString())/eW.L*i)<.01?0:a;return{amountInUsd:r,feeInUsd:(0,eN.g)(s,i),totalInUsd:"$"+(parseFloat(n)+o).toFixed(2)}}if("SOL"===a){let a=eL(n),i=await (0,ek.f)({solanaClient:t,tx:e});return{amountInSol:n+" SOL",feeInSol:eB(i)+" SOL",totalInSol:eB(a+i)+" SOL"}}return{amountInUsdc:n+" USDC",feeInSol:eB(await (0,ek.f)({solanaClient:t,tx:e}))+" SOL"}}let eV={component:function(){let e=(0,v.u)(),{closePrivyModal:t,createAnalyticsEvent:n}=(0,y.u)(),{data:h,setModalData:f,navigate:T}=(0,b.u)(),{wallets:C}=function(){let{ready:e,wallets:t}=function(){let{client:e}=(0,y.u)(),{ready:t,wallet:n}=function(){let{ready:e}=(0,x.u)(),{user:t}=(0,S.u)(),{signMessage:n}=ep(),{signTransaction:a}=eh(),{signAndSendTransaction:i}=function(){let e=(0,v.u)(),{isHeadlessSigning:t,openModal:n,privy:a}=(0,y.u)(),{setModalData:i}=(0,b.u)(),{signTransaction:r}=eh(),o=(0,P.u)(),{user:l}=(0,S.u)(),{signWithUserSigner:c}=I();return{signAndSendTransaction:async({transaction:d,address:u,chain:g="solana:mainnet",options:p})=>{let h=(0,A.f)(l,u);if("privy"!==h?.walletClientType)throw new w.P("Wallet is not a Privy wallet",void 0,w.a.EMBEDDED_WALLET_NOT_FOUND);let f=(0,A.a)(h);async function m(e){let t=p?.skipSimulation?{"x-privy-skip-simulation":"true"}:void 0;if(p?.sponsor)return await (async e=>{if(!f)throw new w.P("Sponsoring transactions is only supported for wallets on the TEE stack",w.a.INVALID_DATA);let n=await (0,s._0)(a,c,{chain_type:"solana",method:"signAndSendTransaction",sponsor:!0,params:{transaction:(0,P.b)(e).toString("base64"),encoding:"base64"},caip2:`solana:${(await o(g).rpc.getGenesisHash().send()).substring(0,32)}`,wallet_id:h.id,optimistic_broadcast:p?.optimisticBroadcast??!1,headers:t});if(n.data&&"hash"in n.data)return{signature:E.tw.decode(n.data.hash)};throw Error("Failed to sign and send transaction")})(e);let{signedTransaction:n}=await r({transaction:e,address:u,chain:g,options:{...p,uiOptions:{...p?.uiOptions,showWalletUIs:!1}}}),{signature:i}=await o(g).sendAndConfirmTransaction(n,{skipPreflight:p?.skipSimulation,skipConfirmation:p?.optimisticBroadcast});return{signature:i}}return t({showWalletUIs:p?.uiOptions?.showWalletUIs})?m(d):new Promise(async(t,a)=>{let r,s,{entropyId:o,entropyIdVerifier:c}=(0,x.g)(l,h);function v(e){return t=>{a(t instanceof w.P?t:new w.P("Failed to connect to wallet",t,e))}}let y={account:h,transaction:new Uint8Array(d),chain:g,signOnly:!1,uiOptions:p?.uiOptions||{},onConfirm:m,onSuccess:t,onFailure:v(w.a.TRANSACTION_FAILURE),isSponsored:!!p?.sponsor},b={recoveryMethod:h.recoveryMethod,connectingWalletAddress:h.address,entropyId:o,entropyIdVerifier:c,isUnifiedWallet:f,onCompleteNavigateTo:"StandardSignAndSendTransactionScreen",onFailure:v(w.a.UNKNOWN_CONNECT_WALLET_ERROR)};e.fundingConfig&&(r=(0,U.d)({address:u,appConfig:e,methodScreen:"FundingMethodSelectionScreen",fundWalletConfig:{...p,asset:"native-currency",chain:g},externalSolanaFundingScreen:"FundSolWalletWithExternalSolanaWallet"}),s={amount:e.fundingConfig.defaultRecommendedAmount,asset:"SOL",chain:g,destinationAddress:u,afterSuccessScreen:"StandardSignAndSendTransactionScreen",sourceWalletData:void 0}),i({connectWallet:b,standardSignAndSendTransaction:y,funding:r,solanaFundingData:s}),n("EmbeddedWalletConnectingScreen")})}}}(),o=(0,r.useMemo)(()=>{let e=[...(0,A.l)(t).sort((e,t)=>(e.walletIndex??0)-(t.walletIndex??0))],n=(0,A.e)(t);return n.length?[...e,...n]:e},[t]),l=(0,r.useMemo)(()=>({signMessage:async({message:e,address:t,options:a})=>await n({message:e,address:t,options:a}),signTransaction:async({transaction:e,address:t,chain:n,options:i})=>await a({transaction:e,address:t,chain:n,options:i}),async signAndSendTransaction({transaction:e,address:t,chain:n,options:a}){let{signature:r}=await i({transaction:e,address:t,chain:n,options:a});return{signature:r}}}),[n,a,i]);return(0,r.useEffect)(()=>{ef?.setImplementation(l)},[l]),(0,r.useEffect)(()=>{var t;!e||(t=em.accounts).length===o.length&&t.every((e,t)=>e.address===o[t]?.address)||ef?.emit("accountChanged",o)},[e,o]),{ready:e,wallet:em}}(),[a,i]=(0,r.useState)([]),[o,l]=(0,r.useState)([]);return(0,r.useEffect)(()=>{let e=[n,...a.filter(e=>"solana"===e.chainType&&!!e.wallet.features).map(e=>e.wallet)];l(e);let t=a.flatMap(t=>{let n=()=>l([...e]);return t.on("walletsUpdated",n),{connector:t,off:n}}),i=e.map(t=>t.features["standard:events"]?.on("change",()=>{l([...e])}));return()=>{i.forEach(e=>e?.()),t.forEach(({connector:e,off:t})=>e.off("walletsUpdated",t))}},[a]),(0,r.useEffect)(()=>{i(e.connectors?.walletConnectors.filter(e=>"solana"===e.chainType)??[]);let t=()=>{i(e.connectors?.walletConnectors.filter(e=>"solana"===e.chainType)??[])};return e.connectors?.on("connectorInitialized",t),()=>{e.connectors?.off("connectorInitialized",t)}},[t,e.connectors]),{ready:t,wallets:o}}();return{ready:e,wallets:(0,r.useMemo)(()=>t.flatMap(e=>e.accounts.map(t=>new s.WW({wallet:e,account:t}))),[t])}}(),[F,W]=(0,r.useState)("preparing"),[O,k]=(0,r.useState)(),[_,M]=(0,r.useState)(),[N,D]=(0,r.useState)();if(!h?.solanaFundingData)throw Error("Funding config is missing");if(!h.solanaFundingData.sourceWalletData)throw Error("Funding config is missing source wallet data");let{amount:L,asset:B,chain:z,sourceWalletData:R,destinationAddress:V,afterSuccessScreen:H}=h.solanaFundingData,$=C.find(e=>e.address===R.address&&(0,eD.t)(R.walletClientType)===(0,eD.t)(e.standardWallet.name)),G=(0,P.u)()(z),{tokenPrice:Z,isTokenPriceLoading:J}=(0,ev.u)("solana");return(0,r.useEffect)(()=>{if("preparing"!==F||J||!$)return;let e="SOL"===B?eL(L):BigInt(Math.floor(1e6*parseFloat(L)));M({amount:("SOL"===B&&Z?(0,eN.g)(e,Z):L)??L}),("SOL"===B?async function({solanaClient:e,source:t,destination:n,amountInLamports:a}){let{value:i}=await e.rpc.getLatestBlockhash().send(),r={address:t},s=(0,ej.F)((0,eF.mN)({version:0}),e=>(0,eb.pt)(r,e),e=>(0,eF.S$)(i,e),e=>(0,eF.az)(function(e,t){let n={source:{value:e.source??null,isWritable:!0},destination:{value:e.destination??null,isWritable:!0}},a={...e},i=e=>{if(!e.value)return;let t=e.isWritable?ey.Uv.WRITABLE:ey.Uv.READONLY;return Object.freeze({address:function(e){if(!e)throw Error("Expected a Address.");return"object"==typeof e&&"address"in e?e.address:Array.isArray(e)?e[0]:e}(e.value),role:eC(e.value)?(0,ey.MR)(t):t,...eC(e.value)?{signer:e.value}:{}})};return Object.freeze({accounts:[i(n.source),i(n.destination)],data:(0,eA.FU)((0,eS.a5)([["discriminator",(0,ex.PL)()],["amount",(0,ex.eC)()]]),e=>({...e,discriminator:2})).encode(a),programAddress:(void 0)??"11111111111111111111111111111111"})}({amount:a,source:r,destination:n}),e),e=>(0,j.i5)(e));return new Uint8Array((0,j.l9)().encode(s))}({solanaClient:G,source:$.address,destination:V,amountInLamports:e}):async function({solanaClient:e,source:t,destination:n,amountInBaseUnits:a}){let i=(0,eO.g)(e.chain),{value:r}=await e.rpc.getLatestBlockhash().send(),s={address:t},[o]=await (0,eU._mM)({mint:i,owner:t,tokenProgram:eW.T}),[l]=await (0,eU._mM)({mint:i,owner:n,tokenProgram:eW.T}),[c,d]=await Promise.all([e.rpc.getAccountInfo(o,{commitment:"confirmed",encoding:"jsonParsed"}).send().catch(()=>null),e.rpc.getAccountInfo(l,{commitment:"confirmed",encoding:"jsonParsed"}).send().catch(()=>null)]);if(!c?.value)throw Error(`Source token account does not exist for address: ${t}`);let u=(0,eU.PUP)({payer:s,ata:l,owner:n,mint:i}),g=(0,ej.F)((0,eF.mN)({version:0}),e=>(0,eb.pt)(s,e),e=>(0,eF.S$)(r,e),e=>d?.value?e:(0,eF.az)(u,e),e=>(0,eF.az)((0,eU.Q7D)({source:o,destination:l,authority:s,amount:a}),e),e=>(0,j.i5)(e));return new Uint8Array((0,j.l9)().encode(g))}({solanaClient:G,source:$.address,destination:V,amountInBaseUnits:e})).then(k).catch(e=>{W("error"),D(e)})},[F,L,B,z,$,V,J,Z]),(0,r.useEffect)(()=>{"preparing"===F&&O&&eR({tx:O,solanaClient:G,amount:L,asset:B,tokenPrice:Z}).then(e=>{W("loaded"),M({amount:e?.amountInUsd??e?.amountInUsdc??e?.amountInSol??L,fee:e?.feeInUsd??e?.feeInSol,total:e?.totalInUsd??e?.totalInSol})}).catch(e=>{W("error"),D(e)})},[O,L,B,F,Z]),(0,r.useEffect)(()=>{"error"===F&&N&&(f({errorModalData:{error:N,previousScreen:"FundSolWalletWithExternalSolanaWallet"},solanaFundingData:h.solanaFundingData}),T("ErrorScreen",!1))},[F,T]),(0,r.useEffect)(()=>{if("success"!==F)return;let e=setTimeout(H?()=>T(H):t,v.v);return()=>clearTimeout(e)},[F]),(0,a.jsxs)(a.Fragment,"success"===F?{children:[(0,a.jsx)(u.t,{}),(0,a.jsx)(l.b,{}),(0,a.jsxs)(l.c,{children:[(0,a.jsx)(i.A,{color:"var(--privy-color-success)",width:"64px",height:"64px"}),(0,a.jsx)(d.C,{title:"Success!",description:`You’ve successfully added ${L} ${B} to your ${e.name} wallet. It may take a minute before the funds are available to use.`})]}),(0,a.jsx)(l.R,{}),(0,a.jsx)(c.B,{})]}:"preparing"===F||"loaded"===F||"sending"===F?{children:[(0,a.jsx)(u.t,{}),(0,a.jsx)(l.e,{style:{marginTop:"16px"},children:(0,a.jsx)(g.I,{icon:$?.standardWallet.icon,name:$?.standardWallet.name})}),(0,a.jsx)(d.C,{style:{marginTop:"8px",marginBottom:"12px"},title:"sending"===F&&$?`Confirming with ${$.standardWallet.name}`:"Confirm transaction"}),(0,a.jsx)(m,{rows:[{label:"Source",value:(0,s.vz)(R.address)},{label:"Destination",value:(0,s.vz)(V)},{label:"Network",value:(0,eM.g)(z)},{label:"Amount",value:_?.amount,isLoading:"preparing"===F},{label:"Estimated fee",value:_?.fee,isLoading:"preparing"===F},{label:"Total",value:_?.total,isLoading:"preparing"===F}]}),(0,a.jsx)(o.P,{style:{marginTop:"1rem"},loading:"preparing"===F||"sending"===F,onClick:function(){"loaded"===F&&O&&$&&(W("sending"),(async function({transaction:e,chain:t,sourceWallet:n,solanaClient:a}){var i;let{hasFunds:r}=await (0,ek.s)({solanaClient:a,tx:e});if(!r)throw new w.P(`Wallet ${(0,s.vz)(n.address)} does not have enough funds.`,void 0,w.a.INSUFFICIENT_BALANCE);let o=(i=(await n.signAndSendTransaction({transaction:e,chain:t}).catch(e=>{throw new w.P("Transaction was rejected by the user",e,w.a.TRANSACTION_FAILURE)})).signature,(0,e_.BC)().decode(i));return await (0,P.w)({rpcSubscriptions:a.rpcSubscriptions,signature:o,timeout:2e4}),o})({solanaClient:G,transaction:O,chain:z,sourceWallet:$}).then(e=>{W("success"),n({eventName:ew.O,payload:{provider:"external",status:"success",txHash:e,address:$.address,value:L,chainType:"solana",clusterName:z,token:B,destinationAddress:V,destinationValue:L,destinationChainType:"solana",destinationClusterName:z,destinationToken:B}})}).catch(e=>{W("error"),D(e)}))},children:"Confirm"}),(0,a.jsx)(c.B,{})]}:{children:[(0,a.jsx)(u.t,{}),(0,a.jsx)(p.N,{}),(0,a.jsx)("div",{style:{marginTop:"1rem"}}),(0,a.jsx)(c.B,{})]})}}},41021:(e,t,n)=>{n.d(t,{L:()=>r,V:()=>o,a:()=>s});var a=n(20031),i=n(53767);let r=a.I4.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */
`,s=(0,a.I4)(r)`
  color: var(--privy-color-accent);
`,o=a.I4.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */
  word-break: break-all;
  text-align: right;

  ${i.L}
`},50982:(e,t,n)=>{n.d(t,{g:()=>i});var a=n(94553);function i(e){let[t]=Object.entries(a.D[e]).find(([e,t])=>"USDC"===t.symbol)??[];return t}},51691:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(12115);let i=a.forwardRef(function(e,t){let{title:n,titleId:i,...r}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},r),n?a.createElement("title",{id:i},n):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"}))})},52644:(e,t,n)=>{n.d(t,{g:()=>i});var a=n(94553);function i(e,t){let n=parseFloat(e.toString())/a.L,i=r.format(t*n);return"$0.00"===i?"<$0.01":i}let r=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2})},53767:(e,t,n)=>{n.d(t,{L:()=>r});var a=n(20031);let i=(0,a.i7)`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`,r=(0,a.AH)`
  ${e=>e.$isLoading?(0,a.AH)`
          width: 35%;
          animation: ${i} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`},61976:(e,t,n)=>{n.d(t,{O:()=>a});let a="sdk_fiat_on_ramp_completed_with_status"},66180:(e,t,n)=>{n.d(t,{I:()=>r});var a=n(95155),i=n(51691);let r=({icon:e,name:t})=>"string"==typeof e?(0,a.jsx)("img",{alt:`${t||"wallet"} logo`,src:e,style:{height:24,width:24,borderRadius:4}}):void 0===e?(0,a.jsx)(i.A,{style:{height:24,width:24}}):e?(0,a.jsx)(e,{style:{height:24,width:24}}):null},73558:(e,t,n)=>{n.d(t,{f:()=>r,s:()=>s});var a=n(66602),i=n(23803);async function r({solanaClient:e,tx:t}){let n=(0,a.Ul)().decode((0,i.a)(t)),{value:r}=await e.rpc.getFeeForMessage(n).send();return r??0n}async function s({solanaClient:e,tx:t,replaceRecentBlockhash:n}){let{value:i}=await e.rpc.simulateTransaction((0,a.Ul)().decode(t),{commitment:"confirmed",encoding:"base64",sigVerify:!1,replaceRecentBlockhash:n}).send();if("BlockhashNotFound"===i.err&&n)throw Error("Simulation failed: Blockhash not found");return"BlockhashNotFound"===i.err?await s({solanaClient:e,tx:t,replaceRecentBlockhash:!0}):{logs:i.logs??[],error:i.err,hasError:!!i.err,hasFunds:i.logs?.every(e=>!/insufficient funds/gi.test(e)&&!/insufficient lamports/gi.test(e))??!0}}},83288:(e,t,n)=>{n.d(t,{C:()=>s,S:()=>r});var a=n(95155),i=n(20031);let r=({title:e,description:t,children:n,...i})=>(0,a.jsx)(o,{...i,children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{children:e}),"string"==typeof t?(0,a.jsx)("p",{children:t}):t,n]})});(0,i.I4)(r)`
  margin-bottom: 24px;
`;let s=({title:e,description:t,icon:n,children:i,...r})=>(0,a.jsxs)(l,{...r,children:[n||null,(0,a.jsx)("h3",{children:e}),t&&"string"==typeof t?(0,a.jsx)("p",{children:t}):t,i]}),o=i.I4.div`
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
`,l=(0,i.I4)(o)`
  align-items: center;
  text-align: center;
  gap: 16px;

  h3 {
    margin-bottom: 24px;
  }
`},83361:(e,t,n)=>{n.d(t,{B:()=>i,C:()=>o,F:()=>c,H:()=>s,R:()=>p,S:()=>u,a:()=>d,b:()=>g,c:()=>l,d:()=>h,e:()=>r});var a=n(20031);let i=a.I4.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,r=a.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,s=a.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,o=(0,a.I4)(r)`
  padding: 20px 0;
`,l=(0,a.I4)(r)`
  gap: 16px;
`,c=a.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,d=a.I4.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;a.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;let u=a.I4.div`
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
`,g=a.I4.div`
  height: 16px;
`,p=a.I4.div`
  height: 12px;
`;a.I4.div`
  position: relative;
`;let h=a.I4.div`
  height: ${e=>e.height??"12"}px;
`;a.I4.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`},84742:(e,t,n)=>{n.d(t,{u:()=>r});var a=n(12115),i=n(43425);let r=({enabled:e=!0}={})=>{let{showFiatPrices:t,getUsdPriceForSol:n}=(0,i.u)(),[r,s]=(0,a.useState)(!0),[o,l]=(0,a.useState)(void 0),[c,d]=(0,a.useState)(void 0);return(0,a.useEffect)(()=>{(async()=>{if(t&&e)try{s(!0);let e=await n();e?d(e):l(Error("Unable to fetch SOL price"))}catch(e){l(e)}finally{s(!1)}else s(!1)})()},[]),{solPrice:c,isSolPriceLoading:r,solPriceError:o}}},88352:(e,t,n)=>{n.d(t,{u:()=>l});var a=n(12115),i=n(63599),r=n(63771),s=n(43425),o=n(84742);function l(e){let{tokenPrice:t,isTokenPriceLoading:n,tokenPriceError:l}=(e=>{let{showFiatPrices:t,getUsdTokenPrice:n,chains:o}=(0,s.u)(),[l,c]=(0,a.useState)(!0),[d,u]=(0,a.useState)(void 0),[g,p]=(0,a.useState)(void 0);return(0,a.useEffect)(()=>{e||=r.t;let a=(0,i.uc)(o).find(t=>t.id===Number(e));(async()=>{if(t){if(!a)return c(!1),u(Error(`Unable to fetch token price on chain id ${e}`));try{c(!0);let e=await n(a);e?p(e):u(Error(`Unable to fetch token price on chain id ${a.id}`))}catch(e){u(e)}finally{c(!1)}}else c(!1)})()},[e]),{tokenPrice:g,isTokenPriceLoading:l,tokenPriceError:d}})("solana"===e?-1:e),{solPrice:c,isSolPriceLoading:d,solPriceError:u}=(0,o.u)({enabled:"solana"===e});return"solana"===e?{tokenPrice:c,isTokenPriceLoading:d,tokenPriceError:u}:{tokenPrice:t,isTokenPriceLoading:n,tokenPriceError:l}}},94553:(e,t,n)=>{n.d(t,{A:()=>o,D:()=>d,J:()=>c,L:()=>a,R:()=>l,S:()=>i,T:()=>r,a:()=>s});let a=1e9,i="11111111111111111111111111111111",r="TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",s="TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",o="ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",l=["CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C","CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"],c=["JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"],d={"solana:mainnet":{EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v:{symbol:"USDC",decimals:6,address:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"},Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB:{symbol:"USDT",decimals:6,address:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:devnet":{"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU":{symbol:"USDC",decimals:6,address:"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"},EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS:{symbol:"USDT",decimals:6,address:"EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:testnet":{}}},95204:(e,t,n)=>{n.d(t,{N:()=>r});var a=n(95155),i=n(20031);let r=({size:e,centerIcon:t})=>(0,a.jsx)(s,{$size:e,children:(0,a.jsxs)(o,{children:[(0,a.jsx)(c,{}),(0,a.jsx)(d,{}),t?(0,a.jsx)(l,{children:t}):null]})}),s=i.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,o=i.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,l=i.I4.div`
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
`,c=i.I4.div`
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
`,d=i.I4.div`
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