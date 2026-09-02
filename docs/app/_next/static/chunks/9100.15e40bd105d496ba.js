"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9100],{834:(e,t,i)=>{i.d(t,{E:()=>o,I:()=>a,a:()=>r});var n=i(20031),l=i(55211);let s=n.I4.label`
  display: block;
  position: relative;
  width: 100%;
  height: 56px;

  && > :first-child {
    position: absolute;
    left: 0.75em;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > input {
    font-size: 16px;
    line-height: 24px;
    color: var(--privy-color-foreground);

    padding: 12px 88px 12px 52px;
    flex-grow: 1;
    background: var(--privy-color-background);
    border: 1px solid
      ${({$error:e})=>e?"var(--privy-color-error) !important":"var(--privy-color-foreground-4)"};
    border-radius: var(--privy-border-radius-md);
    width: 100%;
    height: 100%;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      padding-right: 78px;
    }

    :focus {
      outline: none;
      border-color: ${({$error:e})=>e?"var(--privy-color-error) !important":"var(--privy-color-accent-light)"};
      box-shadow: ${({$error:e})=>e?"none":"0 0 0 1px var(--privy-color-accent-light)"};
    }

    :autofill,
    :-webkit-autofill {
      background: var(--privy-color-background);
    }

    && > input::placeholder {
      color: var(--privy-color-foreground-3);
    }
    &:disabled {
      opacity: 0.4; /* Make it visually appear disabled */
      cursor: not-allowed; /* Change cursor to not-allowed */
    }
    &:disabled,
    &:disabled:hover,
    &:disabled > span {
      color: var(--privy-color-foreground-3); /* Change text color to grey */
    }
  }

  && > button:last-child {
    right: 0px;
    line-height: 24px;
    padding: 13px 17px;
    :focus {
      outline: none;
    }
    &:disabled {
      opacity: 0.4; /* Make it visually appear disabled */
      cursor: not-allowed; /* Change cursor to not-allowed */
    }
    &:disabled,
    &:disabled:hover,
    &:disabled > span {
      color: var(--privy-color-foreground-3); /* Change text color to grey */
    }
  }
`,o=(0,n.I4)(s)`
  background-color: var(--privy-color-background);
  transition: background-color 200ms ease;

  && > button {
    right: 0;
    line-height: 24px;
    position: absolute;
    padding: 13px 17px;
    background-color: #090;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }
  }
`,r=(0,n.I4)(s)`
  && > input {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    padding-right: ${e=>e.$stacked?"16px":"88px"};

    border: 1px solid
      ${({$error:e})=>e?"var(--privy-color-error) !important":"var(--privy-color-foreground-4)"};

    && > input::placeholder {
      color: var(--privy-color-foreground-3);
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
    }
  }
`,a=n.I4.div`
  width: 100%;

  /* Add styling for the ErrorMessage within EmailInput */
  && > ${l.E} {
    display: block;
    text-align: left;
    padding-left: var(--privy-border-radius-md);
    padding-bottom: 5px;
  }
`},5917:(e,t,i)=>{i.d(t,{A:()=>n});let n=(0,i(71847).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},55211:(e,t,i)=>{i.d(t,{E:()=>l});var n=i(20031);let l=n.I4.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`},58862:(e,t,i)=>{i.d(t,{W:()=>l});var n=i(95155);let l=({...e})=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,n.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,n.jsx)("path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"}),(0,n.jsx)("path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"})]})},71847:(e,t,i)=>{i.d(t,{A:()=>a});var n=i(12115);let l=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)},s=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.filter((e,t,i)=>!!e&&""!==e.trim()&&i.indexOf(e)===t).join(" ").trim()};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let r=(0,n.forwardRef)((e,t)=>{let{color:i="currentColor",size:l=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:c="",children:h,iconNode:d,...u}=e;return(0,n.createElement)("svg",{ref:t,...o,width:l,height:l,stroke:i,strokeWidth:a?24*Number(r)/Number(l):r,className:s("lucide",c),...!h&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0})(u)&&{"aria-hidden":"true"},...u},[...d.map(e=>{let[t,i]=e;return(0,n.createElement)(t,i)}),...Array.isArray(h)?h:[h]])}),a=(e,t)=>{let i=(0,n.forwardRef)((i,o)=>{let{className:a,...c}=i;return(0,n.createElement)(r,{ref:o,iconNode:t,className:s("lucide-".concat(l(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),"lucide-".concat(e),a),...c})});return i.displayName=l(e),i}},75426:(e,t,i)=>{i.d(t,{A:()=>n});let n=(0,i(71847).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},79100:(e,t,i)=>{let n;i.d(t,{W:()=>N,a:()=>H,i:()=>J,u:()=>V});var l=i(95155),s=i(12115);let o=s.forwardRef(function(e,t){let{title:i,titleId:n,...l}=e;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},l),i?s.createElement("title",{id:n},i):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))});var r=i(47650);function a(e,t,i){let n,l=i.initialDeps??[],s=!0;function o(){let o=e();return o.length!==l.length||o.some((e,t)=>l[t]!==e)?(l=o,n=t(...o),(null==i?void 0:i.onChange)&&!(s&&i.skipInitialOnChange)&&i.onChange(n),s=!1,n):n}return o.updateDeps=e=>{l=e},o}function c(e,t){if(void 0!==e)return e;throw Error(`Unexpected undefined${t?`: ${t}`:""}`)}let h=()=>{if(void 0!==n)return n;if("undefined"==typeof navigator)return n=!1;if(/iP(hone|od|ad)/.test(navigator.userAgent))return n=!0;let e=navigator.maxTouchPoints;return n="MacIntel"===navigator.platform&&void 0!==e&&e>0},d=e=>{let{offsetWidth:t,offsetHeight:i}=e;return{width:t,height:i}},u=e=>e,g=e=>{let t=Math.max(e.startIndex-e.overscan,0),i=Math.min(e.endIndex+e.overscan,e.count-1)-t+1,n=Array(i);for(let e=0;e<i;e++)n[e]=t+e;return n},m=(e,t)=>{let i=e.scrollElement;if(!i)return;let n=e.targetWindow;if(!n)return;let l=e=>{let{width:i,height:n}=e;t({width:Math.round(i),height:Math.round(n)})};if(l(d(i)),!n.ResizeObserver)return()=>{};let s=new n.ResizeObserver(t=>{let n=()=>{let e=t[0];if(null==e?void 0:e.borderBoxSize){let t=e.borderBoxSize[0];if(t)return void l({width:t.inlineSize,height:t.blockSize})}l(d(i))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(n):n()});return s.observe(i,{box:"border-box"}),()=>{s.unobserve(i)}},f={passive:!0},p="undefined"==typeof window||"onscrollend"in window,v=(e,t)=>((e,t,i)=>{let n=e.scrollElement;if(!n)return;let l=e.targetWindow;if(!l)return;let s=e.options.useScrollendEvent&&p,o=0,r=s?null:((e,t,i)=>{let n;return Object.assign(function(...l){e.clearTimeout(n),n=e.setTimeout(()=>t.apply(this,l),i)},{cancel:()=>{e.clearTimeout(n)}})})(l,()=>t(o,!1),e.options.isScrollingResetDelay),a=e=>()=>{o=i(n),null==r||r(),t(o,e)},c=a(!0),h=a(!1);return n.addEventListener("scroll",c,f),s&&n.addEventListener("scrollend",h,f),()=>{n.removeEventListener("scroll",c),s&&n.removeEventListener("scrollend",h),null==r||r.cancel()}})(e,t,t=>{let{horizontal:i,isRtl:n}=e.options;return i?t.scrollLeft*(n&&-1||1):t.scrollTop}),w=(e,t,i)=>{if(i.options.useCachedMeasurements){let t=i.indexFromElement(e),n=i.options.getItemKey(t);return i.itemSizeCache.get(n)??i.options.estimateSize(t)}if(null==t?void 0:t.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[i.options.horizontal?"inlineSize":"blockSize"])}if(!t){let t=i.indexFromElement(e),n=i.options.getItemKey(t),l=i.itemSizeCache.get(n);if(void 0!==l)return l}return e[i.options.horizontal?"offsetWidth":"offsetHeight"]},y=(e,{adjustments:t=0,behavior:i},n)=>{var l,s;null==(s=null==(l=n.scrollElement)?void 0:l.scrollTo)||s.call(l,{[n.options.horizontal?"left":"top"]:e+t,behavior:i})};class x{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this._flatMeasurements=null,this.itemSizeCache=new Map,this.itemSizeCacheVersion=0,this.laneAssignments=new Map,this.pendingMin=null,this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.pendingScrollAnchor=null,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._intendedScrollOffset=null,this.elementsCache=new Map,this.now=()=>{var e,t,i;return(null==(i=null==(t=null==(e=this.targetWindow)?void 0:e.performance)?void 0:t.now)?void 0:i.call(t))??Date.now()},this.observer=(()=>{let e=null,t=()=>e||(this.targetWindow&&this.targetWindow.ResizeObserver?e=new this.targetWindow.ResizeObserver(e=>{e.forEach(e=>{let t=()=>{let t=e.target,i=this.indexFromElement(t);if(!t.isConnected){for(let[e,i]of(this.observer.unobserve(t),this.elementsCache))if(i===t){this.elementsCache.delete(e);break}return}this.isIndexInRange(i)&&this.shouldMeasureDuringScroll(i)&&this.resizeItem(i,this.options.measureElement(t,e,this))};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(t):t()})}):null);return{disconnect:()=>{var i;null==(i=t())||i.disconnect(),e=null},observe:e=>{var i;return null==(i=t())?void 0:i.observe(e,{box:"border-box"})},unobserve:e=>{var i;return null==(i=t())?void 0:i.unobserve(e)}}})(),this.range=null,this.setOptions=e=>{var t,i;let n={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:u,rangeExtractor:g,onChange:()=>{},measureElement:w,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,anchorTo:"start",followOnAppend:!1,scrollEndThreshold:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,laneAssignmentMode:"estimate",useCachedMeasurements:!1};for(let t in e){let i=e[t];void 0!==i&&(n[t]=i)}let l=this.options,s=null,o=null,r=!1;if(void 0!==l&&l.enabled&&n.enabled&&"end"===n.anchorTo&&null!==this.scrollElement){let e=l.count,a=n.count,c=this.getMeasurements(),h=e>0?(null==(t=c[0])?void 0:t.key)??l.getItemKey(0):null,d=e>0?(null==(i=c[e-1])?void 0:i.key)??l.getItemKey(e-1):null;if(a!==e||e>0&&a>0&&(n.getItemKey(0)!==h||n.getItemKey(a-1)!==d)){r=!0;let t=e>0?this.getVirtualItemForOffset(this.getScrollOffset())??c[0]:null;t&&(s=[t.key,this.getScrollOffset()-t.start]);let i=!0===n.followOnAppend?"auto":n.followOnAppend||null;i&&a>e&&this.isAtEnd(l.scrollEndThreshold)&&(0===e||n.getItemKey(a-1)!==d)&&(o=i)}}this.options=n,r&&(this.pendingMin=0,this.itemSizeCacheVersion++);let a=!1,c=0;if(s&&null!==this.scrollOffset){let[e,t]=s,i=this.getMeasurements(),{count:n,getItemKey:l}=this.options,o=0;for(;o<n&&l(o)!==e;)o++;if(o<n){let e=i[o];if(e){let i=Math.max(0,e.start+t);i!==this.scrollOffset&&(c=i-this.scrollOffset,this.scrollOffset=i,a=!0)}}}(a||o)&&(this.pendingScrollAnchor=[a?s[0]:null,a?s[1]:0,o,c])},this.notify=e=>{var t,i;null==(i=(t=this.options).onChange)||i.call(t,this,e)},this.maybeNotify=a(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),null!=this.rafId&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,this.isScrolling=!1,this.scrollDirection=null,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var e;let t=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==t){if(this.cleanup(),!t)return void this.maybeNotify();if(this.scrollElement=t,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=(null==(e=this.scrollElement)?void 0:e.window)??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{if(t&&null===this._intendedScrollOffset&&e===this.scrollOffset)return;null!==this._intendedScrollOffset&&1.5>Math.abs(e-this._intendedScrollOffset)&&(e=this._intendedScrollOffset),this._intendedScrollOffset=null,this.scrollAdjustments=0;let i=this.getScrollOffset();this.scrollDirection=t?i===e?this.scrollDirection:i<e?"forward":"backward":null,this.scrollOffset=e,this.isScrolling=t,this._flushIosDeferredIfReady(),this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),"addEventListener"in this.scrollElement){let e=this.scrollElement,t=()=>{this._iosTouching=!0,this._iosJustTouchEnded=!1,null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)},i=()=>{this._iosTouching=!1,h()&&null!=this.targetWindow&&(this._iosJustTouchEnded=!0,this._iosTouchEndTimerId=this.targetWindow.setTimeout(()=>{this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._flushIosDeferredIfReady()},150))};e.addEventListener("touchstart",t,f),e.addEventListener("touchend",i,f),this.unsubs.push(()=>{e.removeEventListener("touchstart",t),e.removeEventListener("touchend",i),null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)})}this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})}let i=this.pendingScrollAnchor;if(this.pendingScrollAnchor=null,i&&this.scrollElement&&this.options.enabled){let[e,t,n,l]=i;null===e||n||(h()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?0!==l&&(this._iosDeferredAdjustment+=l):this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})),n&&this.scrollToEnd({behavior:n})}},this._flushIosDeferredIfReady=()=>{if(0===this._iosDeferredAdjustment||this.isScrolling||this._iosTouching||this._iosJustTouchEnded)return;let e=this.getScrollOffset(),t=this.getMaxScrollOffset();if(e<0||e>t)return;if(this._iosDeferredAdjustment<0&&e>=t-1){this._iosDeferredAdjustment=0;return}let i=this._iosDeferredAdjustment;this._iosDeferredAdjustment=0,this._scrollToOffset(e,{adjustments:this.scrollAdjustments+=i,behavior:void 0})},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??("function"==typeof this.options.initialOffset?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getMeasurementOptions=a(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes,this.options.laneAssignmentMode,this.options.gap],(e,t,i,n,l,s,o,r)=>(void 0!==this.prevLanes&&this.prevLanes!==s&&(this.lanesChangedFlag=!0),this.prevLanes=s,this.pendingMin=null,{count:e,paddingStart:t,scrollMargin:i,getItemKey:n,enabled:l,lanes:s,laneAssignmentMode:o,gap:r}),{key:!1}),this.isIndexInRange=e=>e>=0&&e<this.options.count,this.getMeasurements=a(()=>[this.getMeasurementOptions(),this.itemSizeCacheVersion],({count:e,paddingStart:t,scrollMargin:i,getItemKey:n,enabled:l,lanes:s,laneAssignmentMode:o,gap:r},a)=>{let c=this.itemSizeCache;if(!l)return this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>e)for(let t of this.laneAssignments.keys())t>=e&&this.laneAssignments.delete(t);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMin=null),0!==this.measurementsCache.length||this.lanesSettling||(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let h=this.lanesSettling?0:this.pendingMin??0;if(this.pendingMin=null,this.lanesSettling&&this.measurementsCache.length===e&&(this.lanesSettling=!1),1===s){let l,s=2*e,o=this._flatMeasurements;if(!o||o.length<s){let e=new Float64Array(s);o&&h>0&&e.set(o.subarray(0,2*h)),o=e,this._flatMeasurements=o}if(0===h)l=t+i;else{let e=h-1;l=o[2*e]+o[2*e+1]+r}for(let t=h;t<e;t++){let e=n(t),i=c.get(e),s="number"==typeof i?i:this.options.estimateSize(t);o[2*t]=l,o[2*t+1]=s,l+=s+r}let a=function(e,t,i){return new Proxy(Array(e),{get(n,l,s){if("string"==typeof l){let s=l.charCodeAt(0);if(s>=48&&s<=57){let s=+l;if(Number.isInteger(s)&&s>=0&&s<e){let e=n[s];if(!e){let l=t[2*s];e=n[s]={index:s,key:i(s),start:l,size:t[2*s+1],end:l+t[2*s+1],lane:0}}return e}}if("length"===l)return e}return Reflect.get(n,l,s)}})}(e,o,n);return this.measurementsCache=a,a}let d=this.measurementsCache.slice(0,h),u=Array(s).fill(void 0),g=new Float64Array(s),m=0;for(let e=0;e<h;e++){let t=d[e];t&&(void 0===u[t.lane]&&m++,u[t.lane]=e,g[t.lane]=t.end)}for(let l=h;l<e;l++){let e,a,h=n(l),f=this.laneAssignments.get(l),p="estimate"===o||c.has(h);if(void 0!==f&&this.options.lanes>1){let n=u[e=f],l=void 0!==n?d[n]:void 0;a=l?l.end+r:t+i}else if(m===s){let t=0,i=g[0],n=u[0];for(let e=1;e<s;e++){let l=g[e];(l<i||l===i&&u[e]<n)&&(t=e,i=l,n=u[e])}e=t,a=i+r,p&&this.laneAssignments.set(l,e)}else e=l%this.options.lanes,a=t+i,p&&this.laneAssignments.set(l,e);let v=c.get(h),w="number"==typeof v?v:this.options.estimateSize(l),y=a+w;d[l]={index:l,start:a,size:w,end:y,key:h,lane:e},void 0===u[e]&&m++,u[e]=l,g[e]=y}return this.measurementsCache=d,d},{key:!1,debug:()=>this.options.debug}),this.calculateRange=a(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,t,i,n)=>0===e.length||0===t?(this.range=null,null):(this.range=function(e,t,i,n,l){let s=e.length-1;if(e.length<=n)return{startIndex:0,endIndex:s};if(1===n&&null!==l){let e=function(e,t,i){let n=0;for(;n<=t;){let l=(n+t)/2|0,s=e[2*l];if(s<i)n=l+1;else{if(!(s>i))return l;t=l-1}}return n>0?n-1:0}(l,s,i),n=e,o=i+t;for(;n<s&&l[2*n]+l[2*n+1]<o;)n++;return{startIndex:e,endIndex:n}}let o=b(0,s,t=>e[t].start,i),r=o;if(1===n)for(;r<s&&e[r].end<i+t;)r++;else if(n>1){let l=Array(n).fill(0);for(;r<s&&l.some(e=>e<i+t);){let t=e[r];l[t.lane]=t.end,r++}let a=Array(n).fill(i+t);for(;o>=0&&a.some(e=>e>=i);){let t=e[o];a[t.lane]=t.start,o--}o=Math.max(0,o-o%n),r=Math.min(s,r+(n-1-r%n))}return{startIndex:o,endIndex:r}}(e,t,i,n,1===n&&null!=this._flatMeasurements?this._flatMeasurements:null),this.range),{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=a(()=>{let e=null,t=null,i=this.calculateRange();return i&&(e=i.startIndex,t=i.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t]},(e,t,i,n,l)=>null===n||null===l?[]:e({startIndex:n,endIndex:l,overscan:t,count:i}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,i=e.getAttribute(t);return i?parseInt(i,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=e=>{var t;if(!this.scrollState||"smooth"!==this.scrollState.behavior)return!0;let i=this.scrollState.index??(null==(t=this.getVirtualItemForOffset(this.scrollState.lastTargetOffset))?void 0:t.index);if(void 0!==i&&this.range){let t=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),n=Math.max(0,i-t),l=Math.min(this.options.count-1,i+t);return e>=n&&e<=l}return!0},this.measureElement=e=>{if(!e)return void this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});let t=this.indexFromElement(e);if(!this.isIndexInRange(t))return;let i=this.options.getItemKey(t),n=this.elementsCache.get(i);n!==e&&(n&&this.observer.unobserve(n),this.observer.observe(e),this.elementsCache.set(i,e)),(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(t)&&this.resizeItem(t,this.options.measureElement(e,void 0,this))},this.resizeItem=(e,t)=>{var i,n;let l,s,o;if(!this.isIndexInRange(e))return;let r=this._flatMeasurements;if(1===this.options.lanes&&null!==r)o=this.options.getItemKey(e),s=r[2*e],l=r[2*e+1];else{let t=this.measurementsCache[e];if(!t)return;o=t.key,s=t.start,l=t.size}let a=this.itemSizeCache.get(o)??l,c=t-a;if(0!==c){let r="end"===this.options.anchorTo&&(null==(i=this.scrollState)?void 0:i.behavior)!=="smooth"&&this.getVirtualDistanceFromEnd()<=this.options.scrollEndThreshold,h=r?this.getTotalSize():0,d=this.getScrollOffset()+this.scrollAdjustments,u=this.itemSizeCache.has(o)?s+a<=d&&"backward"!==this.scrollDirection:s<d,g=(null==(n=this.scrollState)?void 0:n.behavior)!=="smooth"&&(void 0!==this.shouldAdjustScrollPositionOnItemSizeChange?this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e]??{index:e,key:o,start:s,size:l,end:s+l,lane:0},c,this):u);(null===this.pendingMin||e<this.pendingMin)&&(this.pendingMin=e),this.itemSizeCache.set(o,t),this.itemSizeCacheVersion++;let m=!1;r?m=this.applyScrollAdjustment(this.getTotalSize()-h):g&&(m=this.applyScrollAdjustment(c)),this.notify(m)}},this.getVirtualItems=a(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,t)=>{let i=[];for(let n=0,l=e.length;n<l;n++){let l=t[e[n]];i.push(l)}return i},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{let t=this.getMeasurements();if(0===t.length)return;let i=this._flatMeasurements,n=1===this.options.lanes&&null!=i,l=b(0,t.length-1,n?e=>i[2*e]:e=>c(t[e]).start,e);return c(t[l])},this.getMaxScrollOffset=()=>{if(!this.scrollElement)return 0;if("scrollHeight"in this.scrollElement)return this.options.horizontal?this.scrollElement.scrollWidth-this.scrollElement.clientWidth:this.scrollElement.scrollHeight-this.scrollElement.clientHeight;{let e=this.scrollElement.document.documentElement;return this.options.horizontal?e.scrollWidth-this.scrollElement.innerWidth:e.scrollHeight-this.scrollElement.innerHeight}},this.getVirtualDistanceFromEnd=()=>Math.max(this.getTotalSize()-this.getSize()-this.getScrollOffset(),0),this.getDistanceFromEnd=()=>Math.max(this.getMaxScrollOffset()-this.getScrollOffset(),0),this.isAtEnd=(e=this.options.scrollEndThreshold)=>this.getDistanceFromEnd()<=e,this.getOffsetForAlignment=(e,t,i=0)=>{if(!this.scrollElement)return 0;let n=this.getSize(),l=this.getScrollOffset();return"auto"===t&&(t=e>=l+n?"end":"start"),"center"===t?e+=(i-n)/2:"end"===t&&(e-=n),Math.max(Math.min(this.getMaxScrollOffset(),e),0)},this.getOffsetForIndex=(e,t="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));let i=this.getSize(),n=this.getScrollOffset(),l=this.measurementsCache[e];if(!l)return;if("auto"===t)if(l.end>=n+i-this.options.scrollPaddingEnd)t="end";else{if(!(l.start<=n+this.options.scrollPaddingStart))return[n,t];t="start"}if("end"===t&&e===this.options.count-1)return[this.getMaxScrollOffset(),t];let s="end"===t?l.end+this.options.scrollPaddingEnd:l.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(s,t,l.size),t]},this.scrollToOffset=(e,{align:t="start",behavior:i="auto"}={})=>{this._iosDeferredAdjustment=0;let n=this.getOffsetForAlignment(e,t),l=this.now();this.scrollState={index:null,align:t,behavior:i,startedAt:l,lastTargetOffset:n,stableFrames:0},this._scrollToOffset(n,{adjustments:void 0,behavior:i}),this.scheduleScrollReconcile()},this.scrollToIndex=(e,{align:t="auto",behavior:i="auto"}={})=>{this._iosDeferredAdjustment=0,e=Math.max(0,Math.min(e,this.options.count-1));let n=this.getOffsetForIndex(e,t);if(!n)return;let[l,s]=n,o=this.now();this.scrollState={index:e,align:s,behavior:i,startedAt:o,lastTargetOffset:l,stableFrames:0},this._scrollToOffset(l,{adjustments:void 0,behavior:i}),this.scheduleScrollReconcile()},this.scrollBy=(e,{behavior:t="auto"}={})=>{let i=this.getScrollOffset()+e,n=this.now();this.scrollState={index:null,align:"start",behavior:t,startedAt:n,lastTargetOffset:i,stableFrames:0},this._scrollToOffset(i,{adjustments:void 0,behavior:t}),this.scheduleScrollReconcile()},this.scrollToEnd=({behavior:e="auto"}={})=>{if(this.options.count>0)return void this.scrollToIndex(this.options.count-1,{align:"end",behavior:e});this.scrollToOffset(Math.max(this.getTotalSize()-this.getSize(),0),{behavior:e})},this.getTotalSize=()=>{var e;let t,i=this.getMeasurements();if(0===i.length)t=this.options.paddingStart;else if(1===this.options.lanes){let n=i.length-1,l=this._flatMeasurements;t=null!=l?l[2*n]+l[2*n+1]:(null==(e=i[n])?void 0:e.end)??0}else{let e=Array(this.options.lanes).fill(null),n=i.length-1;for(;n>=0&&e.some(e=>null===e);){let t=i[n];null===e[t.lane]&&(e[t.lane]=t.end),n--}t=Math.max(...e.filter(e=>null!==e))}return Math.max(t-this.options.scrollMargin+this.options.paddingEnd,0)},this.takeSnapshot=()=>{let e=[];if(0===this.itemSizeCache.size)return e;for(let t of this.getMeasurements())t&&this.itemSizeCache.has(t.key)&&e.push({index:t.index,key:t.key,start:t.start,size:t.size,end:t.end,lane:t.lane});return e},this._scrollToOffset=(e,{adjustments:t,behavior:i})=>{this._intendedScrollOffset=e+(t??0),this.options.scrollToFn(e,{behavior:i,adjustments:t},this)},this.measure=()=>{this.pendingMin=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.itemSizeCacheVersion++,this.notify(!1)},this.setOptions(e)}applyScrollAdjustment(e,t){return 0!==e&&(h()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?(this._iosDeferredAdjustment+=e,!1):(this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=e,behavior:t}),null!==this.scrollOffset&&(this.scrollOffset+=this.scrollAdjustments,this.scrollOffset<0&&(this.scrollOffset=0),this.scrollAdjustments=0),!0))}scheduleScrollReconcile(){if(!this.targetWindow){this.scrollState=null;return}null==this.rafId&&(this.rafId=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()}))}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}let e=null!=this.scrollState.index?this.getOffsetForIndex(this.scrollState.index,this.scrollState.align):void 0,t=e?e[0]:this.scrollState.lastTargetOffset,i=t!==this.scrollState.lastTargetOffset;if(!i&&1.01>Math.abs(t-this.getScrollOffset())){if(this.scrollState.stableFrames++,this.scrollState.stableFrames>=1){this.getScrollOffset()!==t&&this._scrollToOffset(t,{adjustments:void 0,behavior:"auto"}),this.scrollState=null;return}}else if(this.scrollState.stableFrames=0,i){let e=this.getSize()||600,i=Math.abs(t-this.getScrollOffset()),n="smooth"===this.scrollState.behavior&&i>e;this.scrollState.lastTargetOffset=t,n||(this.scrollState.behavior="auto"),this._scrollToOffset(t,{adjustments:void 0,behavior:n?"smooth":"auto"})}this.scheduleScrollReconcile()}}let b=(e,t,i,n)=>{for(;e<=t;){let l=(e+t)/2|0,s=i(l);if(s<n)e=l+1;else{if(!(s>n))return l;t=l-1}}return e>0?e-1:0},S="undefined"!=typeof document?s.useLayoutEffect:s.useEffect;var C=i(92253),T=i(20031),z=i(98218),j=i(83199),_=i(83988),k=i(80596),E=i(20348),A=i(834),I=i(63771),O=i(63251),W=i(78017),M=i(76148),L=i(49345),F=i(43425),R=i(58862),D=i(13559),$=i(89815),K=i(92715);let B={phantom:{mobile:{native:"phantom://",universal:"https://phantom.app/ul/"}},solflare:{mobile:{native:void 0,universal:"https://solflare.com/ul/v1/"}},metamask:{image_url:{sm:W.M,md:W.M}},"okx-wallet":{mobile:{native:"okex://main",universal:"okex://main"}},"okx-wallet-1":{mobile:{native:"okxwallet://main",universal:"okxwallet://main"}}};class N{static normalize(e){return e.replace(/[-_]wallet$/,"").replace(/[-_]extension$/,"").toLowerCase()}isEth(e){return e.chains.some(e=>e.includes("eip155:"))}isSol(e){return e.chains.some(e=>e.includes("solana:"))}inAllowList(e,t){if(!this.normalizedAllowList||0===this.normalizedAllowList.length||"listing"===t&&this.includeWalletConnect)return!0;let i=N.normalize(e);return this.normalizedAllowList.some(e=>i===N.normalize(e))}inDenyList(e,t){return"listing"===t&&"rabby"===e||"agw"===N.normalize(e)}chainMatches(e){return"ethereum-only"===this.chainFilter?"ethereum"===e:"solana-only"!==this.chainFilter||"solana"===e}getAllowListKey(e,t,i,n){let l=N.normalize(e);for(let e of this.normalizedAllowList||[])if(l===N.normalize(e))return e;if("connector"===t){if(("injected"===i||"solana_adapter"===i)&&"ethereum"===n&&this.detectedEth)return"detected_ethereum_wallets";if(("injected"===i||"solana_adapter"===i)&&"solana"===n&&this.detectedSol)return"detected_solana_wallets"}if("listing"===t&&this.includeWalletConnect)return"wallet_connect"}connectorOk(e){return!!("null"!==e.connectorType&&"walletconnect_solana"!==e.walletBranding.id&&this.chainMatches(e.chainType)&&(this.inAllowList(e.walletClientType,"connector")||("injected"===e.connectorType||"solana_adapter"===e.connectorType)&&("ethereum"===e.chainType&&this.detectedEth||"solana"===e.chainType&&this.detectedSol)))}listingOk(e){if(e.slug.includes("coinbase"))return!1;if("ethereum-only"===this.chainFilter){if(!this.isEth(e))return!1}else if("solana-only"===this.chainFilter&&!this.isSol(e))return!1;return!(!this.inAllowList(e.slug,"listing")||this.inDenyList(e.slug,"listing"))}getWallets(e,t){let i=new Map,n=e=>{let t=i.get(e.id);if(t){t.chainType!==e.chainType&&(t.chainType="multi");let i=new Set(t.chains);e.chains.forEach(e=>i.add(e)),t.chains=Array.from(i),!t.icon&&e.icon&&(t.icon=e.icon),!t.url&&e.url&&(t.url=e.url),!t.listing&&e.listing&&(t.listing=e.listing),!t.allowListKey&&e.allowListKey&&(t.allowListKey=e.allowListKey)}else i.set(e.id,e)};e.filter(e=>this.connectorOk(e)).forEach(e=>{let t=N.normalize(e.walletClientType);n({id:t,label:e.walletBranding?.name??t,source:"connector",connector:e,chainType:e.chainType,icon:e.walletBranding?.icon,url:void 0,chains:["ethereum"===e.chainType?"eip155":"solana"],allowListKey:this.getAllowListKey(e.walletClientType,"connector",e.connectorType,e.chainType)})});let l=e.find(e=>"wallet_connect_v2"===e.connectorType),s=e.find(e=>"walletconnect_solana"===e.walletBranding.id);t.filter(e=>this.listingOk(e)).forEach(t=>{let i=[...t.chains].filter(e=>e.includes("eip155:")||e.includes("solana:"));if(e.some(e=>N.normalize(e.walletClientType)===N.normalize(t.slug)&&"ethereum"===e.chainType&&"null"!==e.connectorType)||l||t.mobile.native||t.mobile.universal||W.m[t.slug]?.chainTypes.includes("ethereum")||(i=i.filter(e=>!e.includes("eip155:"))),e.some(e=>N.normalize(e.walletClientType)===N.normalize(t.slug)&&"solana"===e.chainType&&"null"!==e.connectorType)||s||t.mobile.native||t.mobile.universal||W.m[t.slug]?.chainTypes.includes("solana")||(i=i.filter(e=>!e.includes("solana:"))),!i.length)return;let o=N.normalize(t.slug),r=B[t.slug],a=r?.image_url?.sm||t.image_url?.sm;i.some(e=>e.includes("eip155:"))&&n({id:o,label:t.name||o,source:"listing",listing:t,chainType:"ethereum",icon:a,url:t.homepage,chains:i,allowListKey:this.getAllowListKey(t.slug,"listing")}),i.some(e=>e.includes("solana:"))&&n({id:o,label:t.name||o,source:"listing",listing:t,chainType:"solana",icon:a,url:t.homepage,chains:i,allowListKey:this.getAllowListKey(t.slug,"listing")})}),this.includeWalletConnectQr&&l&&n({id:"wallet_connect_qr",label:"WalletConnect",source:"connector",connector:l,chainType:"ethereum",icon:M.a,url:void 0,chains:["eip155"],allowListKey:"wallet_connect_qr"}),this.includeWalletConnectQrSolana&&s&&n({id:"wallet_connect_qr_solana",label:"WalletConnect",source:"connector",connector:s,chainType:"solana",icon:M.a,url:void 0,chains:["solana"],allowListKey:"wallet_connect_qr_solana"});let o=Array.from(i.values());o.forEach(e=>{let t=B[e.listing?.slug||e.id];t?.image_url?.sm&&(e.icon=t.image_url.sm)});let r=new Map;return this.normalizedAllowList?.forEach((e,t)=>{r.set(N.normalize(e),t)}),{wallets:o.slice().sort((e,t)=>{if(e.allowListKey&&t.allowListKey){let i=this.normalizedAllowList?.findIndex(t=>N.normalize(t)===N.normalize(e.allowListKey))??-1,n=this.normalizedAllowList?.findIndex(e=>N.normalize(e)===N.normalize(t.allowListKey))??-1;if(i!==n&&i>=0&&n>=0)return i-n}if(e.allowListKey&&!t.allowListKey)return -1;if(!e.allowListKey&&t.allowListKey)return 1;let i=N.normalize(e.id),n=N.normalize(t.id);"binance-defi"===i?i="binance":"universalprofiles"===i?i="universal_profile":"cryptocom-defi"===i?i="cryptocom":"bitkeep"===i&&(i="bitget_wallet"),"binance-defi"===n?n="binance":"universalprofiles"===n?n="universal_profile":"cryptocom-defi"===n?n="cryptocom":"bitkeep"===n&&(n="bitget_wallet");let l=r.has(i),s=r.has(n);return l&&s?r.get(i)-r.get(n):l?-1:s?1:"connector"===e.source&&"listing"===t.source?-1:"listing"===e.source&&"connector"===t.source?1:e.label.toLowerCase().localeCompare(t.label.toLowerCase())}),walletCount:o.length}}constructor(e,t){if(this.chainFilter=e,t&&t.length>0){if(this.normalizedAllowList=t.map(String),this.normalizedAllowList.includes("binance")){let e=this.normalizedAllowList.indexOf("binance");this.normalizedAllowList.splice(e+1,0,"binance-defi-wallet")}if(this.normalizedAllowList.includes("bitget_wallet")){let e=this.normalizedAllowList.indexOf("bitget_wallet");this.normalizedAllowList.splice(e+1,0,"bitkeep")}}this.detectedEth=this.normalizedAllowList?.includes("detected_ethereum_wallets")??!1,this.detectedSol=this.normalizedAllowList?.includes("detected_solana_wallets")??!1,this.includeWalletConnect=this.normalizedAllowList?.includes("wallet_connect")??!1,this.includeWalletConnectQr=this.normalizedAllowList?.includes("wallet_connect_qr")??!1,this.includeWalletConnectQrSolana=this.normalizedAllowList?.includes("wallet_connect_qr_solana")??!1}}var U=e=>(0,l.jsxs)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,l.jsx)("path",{d:"m0 0h32v32h-32z",fill:"#5469d4"}),(0,l.jsx)("path",{d:"m15.997 5.333-.143.486v14.106l.143.143 6.548-3.87z",fill:"#c2ccf4"}),(0,l.jsx)("path",{d:"m15.996 5.333-6.548 10.865 6.548 3.87z",fill:"#fff"}),(0,l.jsx)("path",{d:"m15.997 21.306-.08.098v5.025l.08.236 6.552-9.227z",fill:"#c2ccf4"}),(0,l.jsx)("path",{d:"m15.996 26.665v-5.36l-6.548-3.867z",fill:"#fff"}),(0,l.jsx)("path",{d:"m15.995 20.07 6.548-3.87-6.548-2.976v6.847z",fill:"#8698e8"}),(0,l.jsx)("path",{d:"m9.448 16.2 6.548 3.87v-6.846z",fill:"#c2ccf4"})]}),P=e=>(0,l.jsxs)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,l.jsxs)("linearGradient",{id:"a",gradientUnits:"userSpaceOnUse",x1:"7.233",x2:"24.766",y1:"24.766",y2:"7.234",children:[(0,l.jsx)("stop",{offset:"0",stopColor:"#9945ff"}),(0,l.jsx)("stop",{offset:".2",stopColor:"#7962e7"}),(0,l.jsx)("stop",{offset:"1",stopColor:"#00d18c"})]}),(0,l.jsx)("path",{d:"m0 0h32v32h-32z",fill:"#10111a"}),(0,l.jsx)("path",{clipRule:"evenodd",d:"m9.873 20.41a.645.645 0 0 1 .476-.21l14.662.012a.323.323 0 0 1 .238.54l-3.123 3.438a.643.643 0 0 1 -.475.21l-14.662-.012a.323.323 0 0 1 -.238-.54zm15.376-2.862a.322.322 0 0 1 -.238.54l-14.662.012a.642.642 0 0 1 -.476-.21l-3.122-3.44a.323.323 0 0 1 .238-.54l14.662-.012a.644.644 0 0 1 .475.21zm-15.376-9.738a.644.644 0 0 1 .476-.21l14.662.012a.322.322 0 0 1 .238.54l-3.123 3.438a.643.643 0 0 1 -.475.21l-14.662-.012a.323.323 0 0 1 -.238-.54z",fill:"url(#a)",fillRule:"evenodd"})]});function V({enabled:e=!0,walletList:t,walletChainType:i}){let n=(0,I.u)(),{connectors:l}=(0,F.u)(),{listings:o,loading:r}=(0,W.u)(e),a=i??n.appearance.walletChainType,c=t??n.appearance?.walletList,h=(0,s.useMemo)(()=>new N(a,c),[a,c]),{wallets:d,walletCount:u}=(0,s.useMemo)(()=>h.getWallets(l,o),[h,l,o]),[g,m]=(0,s.useState)(""),f=(0,s.useMemo)(()=>g?d.filter(e=>e.label.toLowerCase().includes(g.toLowerCase())):d,[g,d]),[p,v]=(0,s.useState)();return{selected:p,setSelected:v,search:g,setSearch:m,loadingListings:r,wallets:f,walletCount:u}}let q=e=>!e||"string"!=typeof e&&(e instanceof W.j||e instanceof W.S),H=({index:e,style:t,data:i,recent:n})=>{let s=i.wallets[e],{walletChainType:o,handleWalletClick:r}=i,{t:a}=(0,O.u)(),c={...t,boxSizing:"border-box"};return s?(0,l.jsxs)(Y,{style:c,onClick:()=>r(s),children:[s.icon&&(s.connector&&!q(s.connector)?(0,l.jsx)($.b,{children:"string"==typeof s.icon?(0,l.jsx)($.W,{src:s.icon}):(0,l.jsx)(s.icon,{style:{width:"32px",height:"32px"}})}):"string"==typeof s.icon?(0,l.jsx)($.W,{src:s.icon}):(0,l.jsx)(s.icon,{style:{width:"32px",height:"32px"}})),(0,l.jsx)(ee,{children:s.label}),n?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)($.C,{children:a("connectWallet.lastUsed")}),(0,l.jsx)(G,{children:(0,l.jsxs)(l.Fragment,{children:["ethereum-only"===o&&(0,l.jsx)(U,{}),"solana-only"===o&&(0,l.jsx)(P,{})]})})]}):(0,l.jsx)(G,{children:"ethereum-only"!==o&&"solana-only"!==o&&(0,l.jsxs)(l.Fragment,{children:[s.chains?.some(e=>e.startsWith("eip155"))&&(0,l.jsx)(U,{}),s.chains?.some(e=>e.startsWith("solana"))&&(0,l.jsx)(P,{})]})})]}):null};var J=({className:e,customDescription:t,connectOnly:i,preSelectedWalletId:n,hideHeader:a,...c})=>{let h=(0,I.u)(),{t:d}=(0,O.u)(),{connectors:u}=(0,F.u)(),g=c.walletChainType||h.appearance.walletChainType,f=c.walletList||h.appearance?.walletList,{onBack:p,onClose:w,app:b}=c,{selected:T,setSelected:j,qrUrl:J,setQrUrl:en,connecting:el,uiState:es,errorCode:eo,wallets:er,walletCount:ea,handleConnect:ec,handleBack:eh,showSearchBar:ed,isInitialConnectView:eu,title:eg,search:em,setSearch:ef}=function({onConnect:e,onBack:t,onClose:i,onConnectError:n,walletList:l,walletChainType:o,app:r}){let a=(0,I.u)(),{connectors:c}=(0,F.u)(),{t:h}=(0,O.u)(),{wallets:d,walletCount:u,search:g,setSearch:m,selected:f,setSelected:p}=V({enabled:(0,W.s)(l??[]),walletList:l,walletChainType:o}),[v,w]=(0,s.useState)(),[y,x]=(0,s.useState)(),[b,S]=(0,s.useState)(),[T,z]=(0,s.useState)(),j=!f&&!b&&!T,_=j&&(u>6||g.length>0),k=c.find(e=>"wallet_connect_v2"===e.connectorType),E=(0,s.useCallback)(async(t,i)=>{if(!t)return;let l=i?.name??"Wallet";if(T?.connector!==t||"loading"!==v){if(w("loading"),"string"==typeof t)return M.c.debug("Connecting wallet via deeplink",{wallet:l,url:t.length>80?`${t.slice(0,80)}...`:t}),z({connector:t,name:l,icon:i?.icon,id:i?.id,url:i?.url}),void window.open(t,"_blank");M.c.debug("Connecting wallet via connector",{wallet:l,connectorType:t.connectorType}),z({connector:t,name:i?.name??t.walletBranding.name??"Wallet",icon:i?.icon??t.walletBranding.icon,id:i?.id,url:i?.url});try{let i=await t.connect({showPrompt:!0});if(!i)return M.c.warn("Wallet connection returned null",{wallet:l,connectorType:t.connectorType}),w("error"),x(void 0),void n?.(new L.e("Unable to connect wallet"));M.c.debug("Wallet connection successful",{wallet:l,connectorType:t.connectorType}),(0,W.i)(i)&&await (0,D.e)(i,a),w("success"),x(void 0),(0,D.s)({address:i.address,client:i.walletClientType,appId:a.id}),setTimeout(()=>{e({connector:t,wallet:i})},I.r)}catch(i){if(i?.message?.includes("already pending for origin")||i?.message?.includes("wallet_requestPermissions"))return void M.c.debug("Connection request already pending, maintaining loading state",{wallet:l});let e=i instanceof Error?i.message:String(i?.message||"Unknown error");M.c.error("Wallet connection failed",i,{wallet:l,connectorType:t.connectorType,errorCode:i?.privyErrorCode}),w("error"),x(i?.privyErrorCode),n?.(i instanceof Error?i:new L.e(e||"Unable to connect wallet"))}}else M.c.debug("Duplicate connection attempt prevented",{wallet:l})},[a.id,e,T,v]),A=(0,s.useCallback)(()=>b?(w(void 0),x(void 0),z(void 0),void S(void 0)):T?(w(void 0),x(void 0),void z(void 0)):f?(w(void 0),x(void 0),z(void 0),void p(void 0)):"error"===v||"loading"===v?(w(void 0),x(void 0),void z(void 0)):void t?.(),[b,T,f,v,t]),R=(0,s.useMemo)(()=>T?.connector===k&&b&&C.Fr&&T?.name?h("connectWallet.goToWallet",{walletName:T.name}):T?.connector===k&&b&&T?.name?h("connectWallet.scanToConnect",{walletName:T.name}):b&&T?.name?h(C.Fr?"connectWallet.goToWallet":"connectWallet.scanToConnect",{walletName:T.name}):"string"==typeof T?.connector?h("connectWallet.openOrInstall",{walletName:T.name}):f&&!T?h("connectWallet.selectNetwork"):T?null:h("connectWallet.selectYourWallet"),[T,b,f,k,h]);return{selected:f,setSelected:p,qrUrl:b,setQrUrl:S,connecting:T,uiState:v,errorCode:y,search:g,setSearch:m,wallets:d,walletCount:u,wc:k,isInitialConnectView:j,showSearchBar:_,title:R,handleConnect:E,handleBack:A,onClose:i,onConnect:e,app:r}}({...c,walletList:f,walletChainType:g}),ep=u.find(e=>"wallet_connect_v2"===e.connectorType),ev=u.find(e=>"walletconnect_solana"===e.walletBranding.id),ew=(0,s.useRef)(null),ey=function({useFlushSync:e=!0,directDomUpdates:t=!1,directDomUpdatesMode:i="transform",...n}){let l=s.useReducer(e=>e+1,0)[1],o=s.useRef({enabled:t,mode:i,container:null,lastSize:null,lastPositions:new WeakMap,prevRange:null});o.current.enabled=t,o.current.mode=i;let a=e=>{let t=o.current;if(!t.enabled||!t.container)return;let i=e.getTotalSize();if(i!==t.lastSize){t.lastSize=i;let n=e.options.horizontal?"width":"height";t.container.style[n]=`${i}px`}},c=e=>{let t=o.current;if(!t.enabled||!t.container)return;a(e);let i=!!e.options.horizontal,n="transform"===t.mode,l=i?"left":"top",s=e.options.scrollMargin;for(let o of e.getVirtualItems()){let r=o.start-s,a=e.elementsCache.get(o.key);a&&t.lastPositions.get(a)!==r&&(t.lastPositions.set(a,r),n?a.style.transform=i?`translate3d(${r}px, 0, 0)`:`translate3d(0, ${r}px, 0)`:a.style[l]=`${r}px`)}},h={...n,onChange:(t,i)=>{var s;let a=o.current,h=!0;if(a.enabled){c(t);let e=t.range,i=a.prevRange;(h=!i||i.isScrolling!==t.isScrolling||i.startIndex!==(null==e?void 0:e.startIndex)||i.endIndex!==(null==e?void 0:e.endIndex))&&(a.prevRange=e?{startIndex:e.startIndex,endIndex:e.endIndex,isScrolling:t.isScrolling}:null)}h&&(e&&i?(0,r.flushSync)(l):l()),null==(s=n.onChange)||s.call(n,t,i)}},[d]=s.useState(()=>{let e=new x(h);return Object.assign(e,{containerRef:t=>{let i=o.current;if(i.container=t,i.lastSize=null,t&&i.enabled){let n=e.getTotalSize();i.lastSize=n;let l=e.options.horizontal?"width":"height";t.style[l]=`${n}px`}}})});return d.setOptions(h),S(()=>d._didMount(),[]),S(()=>(a(d),d._willUpdate())),S(()=>{c(d)}),d}({observeElementRect:m,observeElementOffset:v,scrollToFn:y,...{count:er.length,getScrollElement:()=>ew.current,estimateSize:()=>56,overscan:6,gap:5}}),ex=(0,s.useCallback)(async e=>{let t="solana-only"!==g&&e.chains?.some(e=>e.startsWith("eip155")),n="ethereum-only"!==g&&e.chains?.some(e=>e.startsWith("solana")),l=(()=>{let t=e.id;return W.m[t]||W.m[`${t}_wallet`]})(),s=t=>{let i=N.normalize(e.id);return u.find(e=>N.normalize(e.walletClientType)===i&&e.chainType===t&&"wallet_connect_v2"!==e.connectorType&&!("ethereum"===e.chainType&&e instanceof W.j||"solana"===e.chainType&&e instanceof W.S))},o=t?s("ethereum"):void 0,r=n?s("solana"):void 0;if(l&&(0,W.l)({isMobile:C.Fr,walletConfig:l})&&!o&&!r)return M.c.debug("Using install flow for wallets that do not support WalletConnect.",{wallet:e.id}),void await ec(l.installLink,{name:e.label,icon:e.icon,id:e.id,url:e.url});let a=async()=>{if(!ep||!e.listing)return!1;let t=B[e.listing.slug]?{...e.listing,...B[e.listing.slug]}:e.listing;return ep.setWalletEntry(t,en),await ep.resetConnection(e.id),await ec(ep,{name:e.label,icon:e.icon,id:e.id,url:e.url}),!0},c=async()=>!!ev&&!!e.listing&&(await ev.disconnect(),ev.wallet.setWalletEntry(e.listing,en),await new Promise(e=>setTimeout(e,100)),await ec(ev,{name:e.label,icon:e.icon,id:e.id,url:e.url}),!0),h=async t=>{let n=(e=>{if(l)return l.getMobileRedirect({isSolana:e,connectOnly:!!i,useUniversalLink:!1})})(t);return!!n&&(await ec(n,{name:e.label,icon:e.icon,id:e.id,url:e.url}),!0)};if(t&&n)j(e);else{if(t&&!n){if(o&&!q(o))return M.c.debug("Attempting injected EVM connection",{wallet:e.id,connectorType:o.connectorType}),void await ec(o,{name:e.label,icon:e.icon,id:e.id,url:e.url});if(C.Fr&&l){if(await h(!1)||await a())return}else if(await a()||await h(!1))return}if(n&&!t){if(r&&!q(r))return M.c.debug("Attempting injected Solana connection",{wallet:e.id,connectorType:r.connectorType}),void await ec(r,{name:e.label,icon:e.icon,id:e.id,url:e.url});if(C.Fr){if(await h(!0)||await c())return}else if(await c()||await h(!0))return}if(!q(e.connector)){if(M.c.debug("Using fallback direct connector",{wallet:e.id,connectorType:e.connector?.connectorType}),ep&&"wallet_connect_v2"===e.connector?.connectorType)if(await ep.resetConnection(e.id),"wallet_connect_qr"!==e.id&&e.listing){let t=B[e.listing.slug]?{...e.listing,...B[e.listing.slug]}:e.listing;ep.setWalletEntry(t,en)}else ep.setWalletEntry({id:"wallet_connect_qr",name:"WalletConnect",rdns:"",slug:"wallet-connect",homepage:"",chains:["eip155"],mobile:{native:"",universal:void 0}},en);return ev&&"walletconnect_solana"===e.connector?.walletBranding.id&&(await ev.disconnect(),"wallet_connect_qr_solana"!==e.id&&e.listing?ev.wallet.setWalletEntry(e.listing,en):ev.wallet.setWalletEntry({id:"wallet_connect_solana_qr",name:"WalletConnect",rdns:"",slug:"wallet-connect-solana",homepage:"",chains:["solana"],mobile:{native:"",universal:void 0}},en),await new Promise(e=>setTimeout(e,100))),void await ec(e.connector,{name:e.label,icon:e.icon,id:e.id,url:e.url})}e.url?await ec(e.url,{name:e.label,icon:e.icon,id:e.id,url:e.url}):M.c.warn("No available connection method for wallet",{wallet:e.id})}},[ep,ev,ec,j,en,g,i,u]);return(0,s.useEffect)(()=>{if(!n)return;let e=er.find(({id:e})=>e===n);e&&ex(e).catch(console.error)},[n]),(0,l.jsxs)(K.S,{className:e,children:[(0,l.jsx)(K.S.Header,{icon:a&&eu?void 0:el&&!J||J&&C.Fr&&el?.icon?el.icon:el?void 0:R.W,iconVariant:el&&!J||J&&C.Fr?"loading":void 0,iconLoadingStatus:el&&!J||J&&C.Fr?{success:"success"===es,fail:"error"===es}:void 0,title:a&&eu?void 0:el&&!J?d("connectWallet.waitingForWallet",{walletName:el.name}):J&&C.Fr?d("connectWallet.waitingForWallet",{walletName:el?.name??"connection"}):eg,subtitle:a&&eu?void 0:el&&!J&&"string"==typeof el.connector?d("connectWallet.installAndConnect",{walletName:el.name}):el&&!J&&"string"!=typeof el.connector?"error"===es?eo===L.a.NO_SOLANA_ACCOUNTS?`The connected wallet has no Solana accounts. Please add a Solana account in ${el.name} and try again.`:d("connectWallet.tryConnectingAgain"):d("connectionStatus.connectOneWallet"):eu?t??(b?d("connectWallet.connectToAccount",{appName:b.name}):null):null,showBack:!!p||!eu,showClose:!0,onBack:p||eh,onClose:w}),(0,l.jsxs)(K.S.Body,{ref:ew,$colorScheme:h.appearance.palette.colorScheme,style:{marginBottom:J?"0.5rem":void 0},children:[ed&&(0,l.jsx)(Q,{children:(0,l.jsxs)(A.E,{style:{background:"transparent"},children:[(0,l.jsx)(D.m,{children:(0,l.jsx)(o,{})}),(0,l.jsx)("input",{className:"login-method-button",type:"text",placeholder:d("connectWallet.searchPlaceholder",{count:String(ea)}),onChange:e=>ef(e.target.value),value:em})]})}),J&&C.Fr&&"loading"===es&&(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"},children:[(0,l.jsx)(z.B,{variant:"primary",onClick:()=>window.open(J.universal??J.native,"_blank"),style:{width:"100%"},children:d("connectWallet.openInApp")}),(0,l.jsx)(et,{value:J.universal??J.native,iconOnly:!0,children:"Copy link"})]}),J&&!C.Fr&&"loading"===es&&(0,l.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"},children:(0,l.jsx)(et,{value:J.universal??J.native,iconOnly:!0,children:d("connectWallet.copyLink")})}),J&&!C.Fr&&(0,l.jsx)(E.Q,{size:280,url:J.universal??J.native,squareLogoElement:el?.icon?"string"==typeof el.icon?e=>(0,l.jsx)("svg",{...e,children:(0,l.jsx)("image",{href:el.icon,height:e.height,width:e.width})}):el.icon:M.d}),J&&!C.Fr&&el?.url&&("binance"===el.id||"binanceus"===el.id||"binance-defi"===el.id||"robinhood"===el.id)&&(0,l.jsxs)(ei,{children:[(0,l.jsxs)("span",{children:["Don't have ",el.name,"? "]}),(0,l.jsx)(_.L,{href:el.url,target:"_blank",size:"sm",children:"Download here"})]}),(0,l.jsxs)(Z,{children:[el&&!J&&"string"==typeof el.connector&&(0,l.jsxs)(Y,{onClick:()=>window.open(el.connector,"_blank"),children:[el.icon&&("string"==typeof el.icon?(0,l.jsx)($.W,{src:el.icon}):(0,l.jsx)(el.icon,{})),(0,l.jsx)(ee,{children:el.name})]}),T?.chains.some(e=>e.startsWith("eip155"))&&!el&&(0,l.jsxs)(Y,{onClick:()=>ex({...T,chains:T.chains.filter(e=>e.startsWith("eip155"))}),children:[T.icon&&("string"==typeof T.icon?(0,l.jsx)($.W,{src:T.icon}):(0,l.jsx)(T.icon,{})),(0,l.jsx)(ee,{children:T.label}),(0,l.jsx)(G,{children:(0,l.jsx)(U,{})})]}),T?.chains.some(e=>e.startsWith("solana"))&&!el&&(0,l.jsxs)(Y,{onClick:()=>ex({...T,chains:T.chains.filter(e=>e.startsWith("solana"))}),children:[T.icon&&("string"==typeof T.icon?(0,l.jsx)($.W,{src:T.icon}):(0,l.jsx)(T.icon,{})),(0,l.jsx)(ee,{children:T.label}),(0,l.jsx)(G,{children:(0,l.jsx)(P,{})})]}),eu&&(0,l.jsxs)(l.Fragment,{children:[!(ea>0)&&(0,l.jsx)(X,{children:d("connectWallet.noWalletsFound")}),ea>0&&!J&&(0,l.jsx)("div",{style:{maxHeight:56*Math.min(er.length,5)+5,width:"100%"},children:(0,l.jsx)("div",{style:{height:`${ey.getTotalSize()}px`,width:"100%",position:"relative"},children:ey.getVirtualItems().map(e=>(0,l.jsx)(H,{index:e.index,style:{position:"absolute",top:0,left:0,height:`${e.size}px`,transform:`translateY(${e.start}px)`},data:{wallets:er,walletChainType:g,handleWalletClick:ex}},e.key))})})]})]})]}),(0,l.jsxs)(K.S.Footer,{children:[el&&!J&&"string"!=typeof el.connector&&"error"===es&&(0,l.jsx)(K.S.Actions,{children:(0,l.jsx)(z.B,{style:{width:"100%",alignItems:"center"},variant:"error",onClick:()=>ec(el.connector,{name:el.name,icon:el.icon,id:el.id,url:el.url}),children:d("connectWallet.retry")})}),!!(b&&b.legal.privacyPolicyUrl&&b.legal.termsAndConditionsUrl)&&(0,l.jsx)(k.T,{app:b,alwaysShowImplicitConsent:!0}),(0,l.jsx)(K.S.Watermark,{})]})]})};let Q=T.I4.div`
  position: sticky;
  // Offset by negative margin to account for focus outline
  margin-top: -3px;
  padding-top: 3px;
  top: -3px;
  z-index: 1;
  background: var(--privy-color-background);
  padding-bottom: calc(var(--screen-space) / 2);
`,Z=T.I4.div`
  display: flex;
  flex-direction: column;
  gap: ${5}px;
`,Y=T.I4.button`
  && {
    gap: 0.5rem;
    align-items: center;
    display: flex;
    position: relative;
    text-align: left;
    font-weight: 500;
    transition: background 200ms ease-in;
    width: calc(100% - 4px);
    border-radius: var(--privy-border-radius-md);
    padding: 0.75em;
    border: 1px solid var(--privy-color-foreground-4);
    justify-content: space-between;
  }

  &:hover {
    background: var(--privy-color-background-2);
  }
`,G=T.I4.span`
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;

  & > svg {
    border-radius: var(--privy-border-radius-full);
    stroke-width: 2.5;
    width: 100%;
    max-height: 1rem;
    max-width: 1rem;
    flex-shrink: 0;
  }

  & > svg:not(:last-child) {
    border-radius: var(--privy-border-radius-full);
    margin-right: -0.375rem;
  }
`,X=T.I4.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`,ee=T.I4.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--privy-color-foreground);
  font-weight: 400;
  flex: 1;
`,et=(0,T.I4)(j.C)`
  && {
    margin: 0.5rem auto 0 auto;
  }
`,ei=T.I4.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--privy-color-foreground-3);
`},83199:(e,t,i)=>{i.d(t,{C:()=>u,a:()=>g});var n=i(95155),l=i(5917),s=i(75426),o=i(12115),r=i(20031);let a=r.I4.button`
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
`,c=r.I4.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--privy-color-foreground-2);
`,h=(0,r.I4)(l.A)`
  color: var(--privy-color-icon-success);
  flex-shrink: 0;
`,d=(0,r.I4)(s.A)`
  color: var(--privy-color-icon-muted);
  flex-shrink: 0;
`;function u({children:e,iconOnly:t,value:i,hideCopyIcon:l,onCopy:s,iconSize:r=14,...u}){let[g,m]=(0,o.useState)(!1);return(0,n.jsxs)(a,{...u,onClick:()=>{navigator.clipboard.writeText(i||("string"==typeof e?e:"")).then(()=>s?.()).catch(console.error),m(!0),setTimeout(()=>m(!1),1500)},children:[e," ",g?(0,n.jsxs)(c,{children:[(0,n.jsx)(h,{size:r})," ",!t&&"Copied"]}):!l&&(0,n.jsx)(d,{size:r})]})}let g=({value:e,includeChildren:t,children:i,...l})=>{let[s,r]=(0,o.useState)(!1),u=()=>{navigator.clipboard.writeText(e).catch(console.error),r(!0),setTimeout(()=>r(!1),1500)};return(0,n.jsxs)(n.Fragment,{children:[t?(0,n.jsx)(a,{...l,onClick:u,children:i}):(0,n.jsx)(n.Fragment,{children:i}),(0,n.jsx)(a,{...l,onClick:u,children:s?(0,n.jsx)(c,{children:(0,n.jsx)(h,{})}):(0,n.jsx)(d,{})})]})}},89815:(e,t,i)=>{i.d(t,{C:()=>o,S:()=>r,W:()=>s,b:()=>l});var n=i(20031);n.I4.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,n.I4.button`
  padding: 0.25rem;
  height: 30px;
  width: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-full);
  background: var(--privy-color-background-2);
`;let l=n.I4.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  &::after {
    content: ' ';
    border-radius: var(--privy-border-radius-full);
    height: 6px;
    width: 6px;
    background-color: var(--privy-color-icon-success);
    position: absolute;
    right: -3px;
    top: -3px;
  }
`,s=n.I4.img`
  width: 32px;
  height: 32px;
  border-radius: 0.25rem;
  object-fit: contain;
`,o=n.I4.span`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */
  border-radius: var(--privy-border-radius-sm);
  background-color: var(--privy-color-background-2);

  svg {
    width: 100%;
    max-width: 1rem;
    max-height: 1rem;
    stroke-width: 2;
  }
`,r=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 24rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-gutter: stable both-edges;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ${e=>"light"===e.$colorScheme?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;":"dark"===e.$colorScheme?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;":void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
`}}]);