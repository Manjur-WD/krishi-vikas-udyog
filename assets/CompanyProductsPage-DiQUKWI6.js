import{A as r,aC as Nt,aD as Ot,aE as $t,aF as jt,aG as At,aH as Pt,r as K,aI as Mt,aJ as It,j as u,h as ie,l as kt,i as _t,W as Ht,C as Ue,m as ze,q as Lt,K as Bt,aK as Ft,X as Ut,v as zt,aB as Wt,aA as We,B as Vt,N as qt,aL as Yt,aM as Xt}from"./index-e9BBnjUc.js";import{b as Kt}from"./img_hero-DAQ5Jl1R.js";function Gt(e){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",n.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}const Ke=r.createContext({drawerRef:{current:null},overlayRef:{current:null},onPress:()=>{},onRelease:()=>{},onDrag:()=>{},onNestedDrag:()=>{},onNestedOpenChange:()=>{},onNestedRelease:()=>{},openProp:void 0,dismissible:!1,isOpen:!1,isDragging:!1,keyboardIsOpen:{current:!1},snapPointsOffset:null,snapPoints:null,handleOnly:!1,modal:!1,shouldFade:!1,activeSnapPoint:null,onOpenChange:()=>{},setActiveSnapPoint:()=>{},closeDrawer:()=>{},direction:"bottom",shouldAnimate:{current:!0},shouldScaleBackground:!1,setBackgroundColorOnScale:!0,noBodyStyles:!1,container:null,autoFocus:!1}),se=()=>{const e=r.useContext(Ke);if(!e)throw new Error("useDrawerContext must be used within a Drawer.Root");return e};Gt(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);function Jt(){const e=navigator.userAgent;return typeof window<"u"&&(/Firefox/.test(e)&&/Mobile/.test(e)||/FxiOS/.test(e))}function Qt(){return je(/^Mac/)}function Zt(){return je(/^iPhone/)}function Ve(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function en(){return je(/^iPad/)||Qt()&&navigator.maxTouchPoints>1}function Ge(){return Zt()||en()}function je(e){return typeof window<"u"&&window.navigator!=null?e.test(window.navigator.platform):void 0}const tn=24,nn=typeof window<"u"?K.useLayoutEffect:K.useEffect;function qe(...e){return(...n)=>{for(let t of e)typeof t=="function"&&t(...n)}}const Te=typeof document<"u"&&window.visualViewport;function Ye(e){let n=window.getComputedStyle(e);return/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY)}function Je(e){for(Ye(e)&&(e=e.parentElement);e&&!Ye(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}const rn=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let ve=0,Ee;function an(e={}){let{isDisabled:n}=e;nn(()=>{if(!n)return ve++,ve===1&&Ge()&&(Ee=on()),()=>{ve--,ve===0&&(Ee==null||Ee())}},[n])}function on(){let e,n=0,t=h=>{e=Je(h.target),!(e===document.documentElement&&e===document.body)&&(n=h.changedTouches[0].pageY)},a=h=>{if(!e||e===document.documentElement||e===document.body){h.preventDefault();return}let g=h.changedTouches[0].pageY,B=e.scrollTop,H=e.scrollHeight-e.clientHeight;H!==0&&((B<=0&&g>n||B>=H&&g<n)&&h.preventDefault(),n=g)},i=h=>{let g=h.target;Oe(g)&&g!==document.activeElement&&(h.preventDefault(),g.style.transform="translateY(-2000px)",g.focus(),requestAnimationFrame(()=>{g.style.transform=""}))},o=h=>{let g=h.target;Oe(g)&&(g.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{g.style.transform="",Te&&(Te.height<window.innerHeight?requestAnimationFrame(()=>{Xe(g)}):Te.addEventListener("resize",()=>Xe(g),{once:!0}))}))},v=()=>{window.scrollTo(0,0)},d=window.pageXOffset,x=window.pageYOffset,b=qe(sn(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`));window.scrollTo(0,0);let c=qe(me(document,"touchstart",t,{passive:!1,capture:!0}),me(document,"touchmove",a,{passive:!1,capture:!0}),me(document,"touchend",i,{passive:!1,capture:!0}),me(document,"focus",o,!0),me(window,"scroll",v));return()=>{b(),c(),window.scrollTo(d,x)}}function sn(e,n,t){let a=e.style[n];return e.style[n]=t,()=>{e.style[n]=a}}function me(e,n,t,a){return e.addEventListener(n,t,a),()=>{e.removeEventListener(n,t,a)}}function Xe(e){let n=document.scrollingElement||document.documentElement;for(;e&&e!==n;){let t=Je(e);if(t!==document.documentElement&&t!==document.body&&t!==e){let a=t.getBoundingClientRect().top,i=e.getBoundingClientRect().top,o=e.getBoundingClientRect().bottom;const v=t.getBoundingClientRect().bottom+tn;o>v&&(t.scrollTop+=i-a)}e=t.parentElement}}function Oe(e){return e instanceof HTMLInputElement&&!rn.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}function ln(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function un(...e){return n=>e.forEach(t=>ln(t,n))}function Qe(...e){return K.useCallback(un(...e),e)}const Ze=new WeakMap;function $(e,n,t=!1){if(!e||!(e instanceof HTMLElement))return;let a={};Object.entries(n).forEach(([i,o])=>{if(i.startsWith("--")){e.style.setProperty(i,o);return}a[i]=e.style[i],e.style[i]=o}),!t&&Ze.set(e,a)}function cn(e,n){if(!e||!(e instanceof HTMLElement))return;let t=Ze.get(e);t&&(e.style[n]=t[n])}const O=e=>{switch(e){case"top":case"bottom":return!0;case"left":case"right":return!1;default:return e}};function ye(e,n){if(!e)return null;const t=window.getComputedStyle(e),a=t.transform||t.webkitTransform||t.mozTransform;let i=a.match(/^matrix3d\((.+)\)$/);return i?parseFloat(i[1].split(", ")[O(n)?13:12]):(i=a.match(/^matrix\((.+)\)$/),i?parseFloat(i[1].split(", ")[O(n)?5:4]):null)}function dn(e){return 8*(Math.log(e+1)-2)}function Ce(e,n){if(!e)return()=>{};const t=e.style.cssText;return Object.assign(e.style,n),()=>{e.style.cssText=t}}function fn(...e){return(...n)=>{for(const t of e)typeof t=="function"&&t(...n)}}const C={DURATION:.5,EASE:[.32,.72,0,1]},et=.4,mn=.25,pn=100,tt=8,ne=16,$e=26,Ne="vaul-dragging";function nt(e){const n=r.useRef(e);return r.useEffect(()=>{n.current=e}),r.useMemo(()=>(...t)=>n.current==null?void 0:n.current.call(n,...t),[])}function hn({defaultProp:e,onChange:n}){const t=r.useState(e),[a]=t,i=r.useRef(a),o=nt(n);return r.useEffect(()=>{i.current!==a&&(o(a),i.current=a)},[a,i,o]),t}function rt({prop:e,defaultProp:n,onChange:t=()=>{}}){const[a,i]=hn({defaultProp:n,onChange:t}),o=e!==void 0,v=o?e:a,d=nt(t),x=r.useCallback(b=>{if(o){const h=typeof b=="function"?b(e):b;h!==e&&d(h)}else i(b)},[o,e,i,d]);return[v,x]}function gn({activeSnapPointProp:e,setActiveSnapPointProp:n,snapPoints:t,drawerRef:a,overlayRef:i,fadeFromIndex:o,onSnapPointChange:v,direction:d="bottom",container:x,snapToSequentialPoint:b}){const[c,h]=rt({prop:e,defaultProp:t==null?void 0:t[0],onChange:n}),[g,B]=r.useState(typeof window<"u"?{innerWidth:window.innerWidth,innerHeight:window.innerHeight}:void 0);r.useEffect(()=>{function f(){B({innerWidth:window.innerWidth,innerHeight:window.innerHeight})}return window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]);const H=r.useMemo(()=>c===(t==null?void 0:t[t.length-1])||null,[t,c]),E=r.useMemo(()=>{var f;return(f=t==null?void 0:t.findIndex(D=>D===c))!=null?f:null},[t,c]),F=t&&t.length>0&&(o||o===0)&&!Number.isNaN(o)&&t[o]===c||!t,w=r.useMemo(()=>{const f=x?{width:x.getBoundingClientRect().width,height:x.getBoundingClientRect().height}:typeof window<"u"?{width:window.innerWidth,height:window.innerHeight}:{width:0,height:0};var D;return(D=t==null?void 0:t.map(S=>{const I=typeof S=="string";let P=0;if(I&&(P=parseInt(S,10)),O(d)){const l=I?P:g?S*f.height:0;return g?d==="bottom"?f.height-l:-f.height+l:l}const z=I?P:g?S*f.width:0;return g?d==="right"?f.width-z:-f.width+z:z}))!=null?D:[]},[t,g,x]),A=r.useMemo(()=>E!==null?w==null?void 0:w[E]:null,[w,E]),j=r.useCallback(f=>{var D;const S=(D=w==null?void 0:w.findIndex(I=>I===f))!=null?D:null;v(S),$(a.current,{transition:`transform ${C.DURATION}s cubic-bezier(${C.EASE.join(",")})`,transform:O(d)?`translate3d(0, ${f}px, 0)`:`translate3d(${f}px, 0, 0)`}),w&&S!==w.length-1&&o!==void 0&&S!==o&&S<o?$(i.current,{transition:`opacity ${C.DURATION}s cubic-bezier(${C.EASE.join(",")})`,opacity:"0"}):$(i.current,{transition:`opacity ${C.DURATION}s cubic-bezier(${C.EASE.join(",")})`,opacity:"1"}),h(t==null?void 0:t[Math.max(S,0)])},[a.current,t,w,o,i,h]);r.useEffect(()=>{if(c||e){var f;const D=(f=t==null?void 0:t.findIndex(S=>S===e||S===c))!=null?f:-1;w&&D!==-1&&typeof w[D]=="number"&&j(w[D])}},[c,e,t,w,j]);function m({draggedDistance:f,closeDrawer:D,velocity:S,dismissible:I}){if(o===void 0)return;const P=d==="bottom"||d==="right"?(A??0)-f:(A??0)+f,z=E===o-1,l=E===0,U=f>0;if(z&&$(i.current,{transition:`opacity ${C.DURATION}s cubic-bezier(${C.EASE.join(",")})`}),!b&&S>2&&!U){I?D():j(w[0]);return}if(!b&&S>2&&U&&w&&t){j(w[t.length-1]);return}const k=w==null?void 0:w.reduce((M,G)=>typeof M!="number"||typeof G!="number"?M:Math.abs(G-P)<Math.abs(M-P)?G:M),W=O(d)?window.innerHeight:window.innerWidth;if(S>et&&Math.abs(f)<W*.4){const M=U?1:-1;if(M>0&&H&&t){j(w[t.length-1]);return}if(l&&M<0&&I&&D(),E===null)return;j(w[E+M]);return}j(k)}function Y({draggedDistance:f}){if(A===null)return;const D=d==="bottom"||d==="right"?A-f:A+f;(d==="bottom"||d==="right")&&D<w[w.length-1]||(d==="top"||d==="left")&&D>w[w.length-1]||$(a.current,{transform:O(d)?`translate3d(0, ${D}px, 0)`:`translate3d(${D}px, 0, 0)`})}function ee(f,D){if(!t||typeof E!="number"||!w||o===void 0)return null;const S=E===o-1;if(E>=o&&D)return 0;if(S&&!D)return 1;if(!F&&!S)return null;const P=S?E+1:E-1,z=S?w[P]-w[P-1]:w[P+1]-w[P],l=f/Math.abs(z);return S?1-l:l}return{isLastSnapPoint:H,activeSnapPoint:c,shouldFade:F,getPercentageDragged:ee,setActiveSnapPoint:h,activeSnapPointIndex:E,onRelease:m,onDrag:Y,snapPointsOffset:w}}const wn=()=>()=>{};function vn(){const{direction:e,isOpen:n,shouldScaleBackground:t,setBackgroundColorOnScale:a,noBodyStyles:i}=se(),o=r.useRef(null),v=K.useMemo(()=>document.body.style.backgroundColor,[]);function d(){return(window.innerWidth-$e)/window.innerWidth}r.useEffect(()=>{if(n&&t){o.current&&clearTimeout(o.current);const x=document.querySelector("[data-vaul-drawer-wrapper]")||document.querySelector("[vaul-drawer-wrapper]");if(!x)return;fn(a&&!i?Ce(document.body,{background:"black"}):wn,Ce(x,{transformOrigin:O(e)?"top":"left",transitionProperty:"transform, border-radius",transitionDuration:`${C.DURATION}s`,transitionTimingFunction:`cubic-bezier(${C.EASE.join(",")})`}));const b=Ce(x,{borderRadius:`${tt}px`,overflow:"hidden",...O(e)?{transform:`scale(${d()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`}:{transform:`scale(${d()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`}});return()=>{b(),o.current=window.setTimeout(()=>{v?document.body.style.background=v:document.body.style.removeProperty("background")},C.DURATION*1e3)}}},[n,t,v])}let pe=null;function yn({isOpen:e,modal:n,nested:t,hasBeenOpened:a,preventScrollRestoration:i,noBodyStyles:o}){const[v,d]=r.useState(()=>typeof window<"u"?window.location.href:""),x=r.useRef(0),b=r.useCallback(()=>{if(Ve()&&pe===null&&e&&!o){pe={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left,height:document.body.style.height,right:"unset"};const{scrollX:h,innerHeight:g}=window;document.body.style.setProperty("position","fixed","important"),Object.assign(document.body.style,{top:`${-x.current}px`,left:`${-h}px`,right:"0px",height:"auto"}),window.setTimeout(()=>window.requestAnimationFrame(()=>{const B=g-window.innerHeight;B&&x.current>=g&&(document.body.style.top=`${-(x.current+B)}px`)}),300)}},[e]),c=r.useCallback(()=>{if(Ve()&&pe!==null&&!o){const h=-parseInt(document.body.style.top,10),g=-parseInt(document.body.style.left,10);Object.assign(document.body.style,pe),window.requestAnimationFrame(()=>{if(i&&v!==window.location.href){d(window.location.href);return}window.scrollTo(g,h)}),pe=null}},[v]);return r.useEffect(()=>{function h(){x.current=window.scrollY}return h(),window.addEventListener("scroll",h),()=>{window.removeEventListener("scroll",h)}},[]),r.useEffect(()=>{if(n)return()=>{typeof document>"u"||document.querySelector("[data-vaul-drawer]")||c()}},[n,c]),r.useEffect(()=>{t||!a||(e?(!window.matchMedia("(display-mode: standalone)").matches&&b(),n||window.setTimeout(()=>{c()},500)):c())},[e,a,v,n,t,b,c]),{restorePositionSetting:c}}function at({open:e,onOpenChange:n,children:t,onDrag:a,onRelease:i,snapPoints:o,shouldScaleBackground:v=!1,setBackgroundColorOnScale:d=!0,closeThreshold:x=mn,scrollLockTimeout:b=pn,dismissible:c=!0,handleOnly:h=!1,fadeFromIndex:g=o&&o.length-1,activeSnapPoint:B,setActiveSnapPoint:H,fixed:E,modal:F=!0,onClose:w,nested:A,noBodyStyles:j=!1,direction:m="bottom",defaultOpen:Y=!1,disablePreventScroll:ee=!0,snapToSequentialPoint:f=!1,preventScrollRestoration:D=!1,repositionInputs:S=!0,onAnimationEnd:I,container:P,autoFocus:z=!1}){var l,U;const[k=!1,W]=rt({defaultProp:Y,prop:e,onChange:s=>{n==null||n(s),!s&&!A&&xt(),setTimeout(()=>{I==null||I(s)},C.DURATION*1e3),s&&!F&&typeof window<"u"&&window.requestAnimationFrame(()=>{document.body.style.pointerEvents="auto"}),s||(document.body.style.pointerEvents="auto")}}),[M,G]=r.useState(!1),[J,le]=r.useState(!1),[pt,Ae]=r.useState(!1),re=r.useRef(null),he=r.useRef(null),xe=r.useRef(null),be=r.useRef(null),ue=r.useRef(null),ce=r.useRef(!1),Se=r.useRef(null),De=r.useRef(0),ae=r.useRef(!1),Pe=r.useRef(!Y),Me=r.useRef(0),p=r.useRef(null),Ie=r.useRef(((l=p.current)==null?void 0:l.getBoundingClientRect().height)||0),ke=r.useRef(((U=p.current)==null?void 0:U.getBoundingClientRect().width)||0),Re=r.useRef(0),ht=r.useCallback(s=>{o&&s===de.length-1&&(he.current=new Date)},[]),{activeSnapPoint:gt,activeSnapPointIndex:oe,setActiveSnapPoint:_e,onRelease:wt,snapPointsOffset:de,onDrag:vt,shouldFade:He,getPercentageDragged:yt}=gn({snapPoints:o,activeSnapPointProp:B,setActiveSnapPointProp:H,drawerRef:p,fadeFromIndex:g,overlayRef:re,onSnapPointChange:ht,direction:m,container:P,snapToSequentialPoint:f});an({isDisabled:!k||J||!F||pt||!M||!S||!ee});const{restorePositionSetting:xt}=yn({isOpen:k,modal:F,nested:A??!1,hasBeenOpened:M,preventScrollRestoration:D,noBodyStyles:j});function ge(){return(window.innerWidth-$e)/window.innerWidth}function bt(s){var R,T;!c&&!o||p.current&&!p.current.contains(s.target)||(Ie.current=((R=p.current)==null?void 0:R.getBoundingClientRect().height)||0,ke.current=((T=p.current)==null?void 0:T.getBoundingClientRect().width)||0,le(!0),xe.current=new Date,Ge()&&window.addEventListener("touchend",()=>ce.current=!1,{once:!0}),s.target.setPointerCapture(s.pointerId),De.current=O(m)?s.pageY:s.pageX)}function Le(s,R){var T;let y=s;const N=(T=window.getSelection())==null?void 0:T.toString(),L=p.current?ye(p.current,m):null,_=new Date;if(y.tagName==="SELECT"||y.hasAttribute("data-vaul-no-drag")||y.closest("[data-vaul-no-drag]"))return!1;if(m==="right"||m==="left")return!0;if(he.current&&_.getTime()-he.current.getTime()<500)return!1;if(L!==null&&(m==="bottom"?L>0:L<0))return!0;if(N&&N.length>0)return!1;if(ue.current&&_.getTime()-ue.current.getTime()<b&&L===0||R)return ue.current=_,!1;for(;y;){if(y.scrollHeight>y.clientHeight){if(y.scrollTop!==0)return ue.current=new Date,!1;if(y.getAttribute("role")==="dialog")return!0}y=y.parentNode}return!0}function St(s){if(p.current&&J){const R=m==="bottom"||m==="right"?1:-1,T=(De.current-(O(m)?s.pageY:s.pageX))*R,y=T>0,N=o&&!c&&!y;if(N&&oe===0)return;const L=Math.abs(T),_=document.querySelector("[data-vaul-drawer-wrapper]"),Q=m==="bottom"||m==="top"?Ie.current:ke.current;let V=L/Q;const te=yt(L,y);if(te!==null&&(V=te),N&&V>=1||!ce.current&&!Le(s.target,y))return;if(p.current.classList.add(Ne),ce.current=!0,$(p.current,{transition:"none"}),$(re.current,{transition:"none"}),o&&vt({draggedDistance:T}),y&&!o){const X=dn(T),we=Math.min(X*-1,0)*R;$(p.current,{transform:O(m)?`translate3d(0, ${we}px, 0)`:`translate3d(${we}px, 0, 0)`});return}const Z=1-V;if((He||g&&oe===g-1)&&(a==null||a(s,V),$(re.current,{opacity:`${Z}`,transition:"none"},!0)),_&&re.current&&v){const X=Math.min(ge()+V*(1-ge()),1),we=8-V*8,Fe=Math.max(0,14-V*14);$(_,{borderRadius:`${we}px`,transform:O(m)?`scale(${X}) translate3d(0, ${Fe}px, 0)`:`scale(${X}) translate3d(${Fe}px, 0, 0)`,transition:"none"},!0)}if(!o){const X=L*R;$(p.current,{transform:O(m)?`translate3d(0, ${X}px, 0)`:`translate3d(${X}px, 0, 0)`})}}}r.useEffect(()=>{window.requestAnimationFrame(()=>{Pe.current=!0})},[]),r.useEffect(()=>{var s;function R(){if(!p.current||!S)return;const T=document.activeElement;if(Oe(T)||ae.current){var y;const N=((y=window.visualViewport)==null?void 0:y.height)||0,L=window.innerHeight;let _=L-N;const Q=p.current.getBoundingClientRect().height||0,V=Q>L*.8;Re.current||(Re.current=Q);const te=p.current.getBoundingClientRect().top;if(Math.abs(Me.current-_)>60&&(ae.current=!ae.current),o&&o.length>0&&de&&oe){const Z=de[oe]||0;_+=Z}if(Me.current=_,Q>N||ae.current){const Z=p.current.getBoundingClientRect().height;let X=Z;Z>N&&(X=N-(V?te:$e)),E?p.current.style.height=`${Z-Math.max(_,0)}px`:p.current.style.height=`${Math.max(X,N-te)}px`}else Jt()||(p.current.style.height=`${Re.current}px`);o&&o.length>0&&!ae.current?p.current.style.bottom="0px":p.current.style.bottom=`${Math.max(_,0)}px`}}return(s=window.visualViewport)==null||s.addEventListener("resize",R),()=>{var T;return(T=window.visualViewport)==null?void 0:T.removeEventListener("resize",R)}},[oe,o,de]);function fe(s){Dt(),w==null||w(),s||W(!1),setTimeout(()=>{o&&_e(o[0])},C.DURATION*1e3)}function Be(){if(!p.current)return;const s=document.querySelector("[data-vaul-drawer-wrapper]"),R=ye(p.current,m);$(p.current,{transform:"translate3d(0, 0, 0)",transition:`transform ${C.DURATION}s cubic-bezier(${C.EASE.join(",")})`}),$(re.current,{transition:`opacity ${C.DURATION}s cubic-bezier(${C.EASE.join(",")})`,opacity:"1"}),v&&R&&R>0&&k&&$(s,{borderRadius:`${tt}px`,overflow:"hidden",...O(m)?{transform:`scale(${ge()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top"}:{transform:`scale(${ge()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:`${C.DURATION}s`,transitionTimingFunction:`cubic-bezier(${C.EASE.join(",")})`},!0)}function Dt(){!J||!p.current||(p.current.classList.remove(Ne),ce.current=!1,le(!1),be.current=new Date)}function Rt(s){if(!J||!p.current)return;p.current.classList.remove(Ne),ce.current=!1,le(!1),be.current=new Date;const R=ye(p.current,m);if(!s||!Le(s.target,!1)||!R||Number.isNaN(R)||xe.current===null)return;const T=be.current.getTime()-xe.current.getTime(),y=De.current-(O(m)?s.pageY:s.pageX),N=Math.abs(y)/T;if(N>.05&&(Ae(!0),setTimeout(()=>{Ae(!1)},200)),o){wt({draggedDistance:y*(m==="bottom"||m==="right"?1:-1),closeDrawer:fe,velocity:N,dismissible:c}),i==null||i(s,!0);return}if(m==="bottom"||m==="right"?y>0:y<0){Be(),i==null||i(s,!0);return}if(N>et){fe(),i==null||i(s,!1);return}var L;const _=Math.min((L=p.current.getBoundingClientRect().height)!=null?L:0,window.innerHeight);var Q;const V=Math.min((Q=p.current.getBoundingClientRect().width)!=null?Q:0,window.innerWidth),te=m==="left"||m==="right";if(Math.abs(R)>=(te?V:_)*x){fe(),i==null||i(s,!1);return}i==null||i(s,!0),Be()}r.useEffect(()=>(k&&($(document.documentElement,{scrollBehavior:"auto"}),he.current=new Date),()=>{cn(document.documentElement,"scrollBehavior")}),[k]);function Tt(s){const R=s?(window.innerWidth-ne)/window.innerWidth:1,T=s?-ne:0;Se.current&&window.clearTimeout(Se.current),$(p.current,{transition:`transform ${C.DURATION}s cubic-bezier(${C.EASE.join(",")})`,transform:O(m)?`scale(${R}) translate3d(0, ${T}px, 0)`:`scale(${R}) translate3d(${T}px, 0, 0)`}),!s&&p.current&&(Se.current=setTimeout(()=>{const y=ye(p.current,m);$(p.current,{transition:"none",transform:O(m)?`translate3d(0, ${y}px, 0)`:`translate3d(${y}px, 0, 0)`})},500))}function Et(s,R){if(R<0)return;const T=(window.innerWidth-ne)/window.innerWidth,y=T+R*(1-T),N=-ne+R*ne;$(p.current,{transform:O(m)?`scale(${y}) translate3d(0, ${N}px, 0)`:`scale(${y}) translate3d(${N}px, 0, 0)`,transition:"none"})}function Ct(s,R){const T=O(m)?window.innerHeight:window.innerWidth,y=R?(T-ne)/T:1,N=R?-ne:0;R&&$(p.current,{transition:`transform ${C.DURATION}s cubic-bezier(${C.EASE.join(",")})`,transform:O(m)?`scale(${y}) translate3d(0, ${N}px, 0)`:`scale(${y}) translate3d(${N}px, 0, 0)`})}return r.useEffect(()=>{F||window.requestAnimationFrame(()=>{document.body.style.pointerEvents="auto"})},[F]),r.createElement(Mt,{defaultOpen:Y,onOpenChange:s=>{!c&&!s||(s?G(!0):fe(!0),W(s))},open:k},r.createElement(Ke.Provider,{value:{activeSnapPoint:gt,snapPoints:o,setActiveSnapPoint:_e,drawerRef:p,overlayRef:re,onOpenChange:n,onPress:bt,onRelease:Rt,onDrag:St,dismissible:c,shouldAnimate:Pe,handleOnly:h,isOpen:k,isDragging:J,shouldFade:He,closeDrawer:fe,onNestedDrag:Et,onNestedOpenChange:Tt,onNestedRelease:Ct,keyboardIsOpen:ae,modal:F,snapPointsOffset:de,activeSnapPointIndex:oe,direction:m,shouldScaleBackground:v,setBackgroundColorOnScale:d,noBodyStyles:j,container:P,autoFocus:z}},t))}const ot=r.forwardRef(function({...e},n){const{overlayRef:t,snapPoints:a,onRelease:i,shouldFade:o,isOpen:v,modal:d,shouldAnimate:x}=se(),b=Qe(n,t),c=a&&a.length>0;if(!d)return null;const h=r.useCallback(g=>i(g),[i]);return r.createElement(Nt,{onMouseUp:h,ref:b,"data-vaul-overlay":"","data-vaul-snap-points":v&&c?"true":"false","data-vaul-snap-points-overlay":v&&o?"true":"false","data-vaul-animate":x!=null&&x.current?"true":"false",...e})});ot.displayName="Drawer.Overlay";const it=r.forwardRef(function({onPointerDownOutside:e,style:n,onOpenAutoFocus:t,...a},i){const{drawerRef:o,onPress:v,onRelease:d,onDrag:x,keyboardIsOpen:b,snapPointsOffset:c,activeSnapPointIndex:h,modal:g,isOpen:B,direction:H,snapPoints:E,container:F,handleOnly:w,shouldAnimate:A,autoFocus:j}=se(),[m,Y]=r.useState(!1),ee=Qe(i,o),f=r.useRef(null),D=r.useRef(null),S=r.useRef(!1),I=E&&E.length>0;vn();const P=(l,U,k=0)=>{if(S.current)return!0;const W=Math.abs(l.y),M=Math.abs(l.x),G=M>W,J=["bottom","right"].includes(U)?1:-1;if(U==="left"||U==="right"){if(!(l.x*J<0)&&M>=0&&M<=k)return G}else if(!(l.y*J<0)&&W>=0&&W<=k)return!G;return S.current=!0,!0};r.useEffect(()=>{I&&window.requestAnimationFrame(()=>{Y(!0)})},[]);function z(l){f.current=null,S.current=!1,d(l)}return r.createElement(Ot,{"data-vaul-drawer-direction":H,"data-vaul-drawer":"","data-vaul-delayed-snap-points":m?"true":"false","data-vaul-snap-points":B&&I?"true":"false","data-vaul-custom-container":F?"true":"false","data-vaul-animate":A!=null&&A.current?"true":"false",...a,ref:ee,style:c&&c.length>0?{"--snap-point-height":`${c[h??0]}px`,...n}:n,onPointerDown:l=>{w||(a.onPointerDown==null||a.onPointerDown.call(a,l),f.current={x:l.pageX,y:l.pageY},v(l))},onOpenAutoFocus:l=>{t==null||t(l),j||l.preventDefault()},onPointerDownOutside:l=>{if(e==null||e(l),!g||l.defaultPrevented){l.preventDefault();return}b.current&&(b.current=!1)},onFocusOutside:l=>{if(!g){l.preventDefault();return}},onPointerMove:l=>{if(D.current=l,w||(a.onPointerMove==null||a.onPointerMove.call(a,l),!f.current))return;const U=l.pageY-f.current.y,k=l.pageX-f.current.x,W=l.pointerType==="touch"?10:2;P({x:k,y:U},H,W)?x(l):(Math.abs(k)>W||Math.abs(U)>W)&&(f.current=null)},onPointerUp:l=>{a.onPointerUp==null||a.onPointerUp.call(a,l),f.current=null,S.current=!1,d(l)},onPointerOut:l=>{a.onPointerOut==null||a.onPointerOut.call(a,l),z(D.current)},onContextMenu:l=>{a.onContextMenu==null||a.onContextMenu.call(a,l),D.current&&z(D.current)}})});it.displayName="Drawer.Content";const xn=250,bn=120,st=r.forwardRef(function({preventCycle:e=!1,children:n,...t},a){const{closeDrawer:i,isDragging:o,snapPoints:v,activeSnapPoint:d,setActiveSnapPoint:x,dismissible:b,handleOnly:c,isOpen:h,onPress:g,onDrag:B}=se(),H=r.useRef(null),E=r.useRef(!1);function F(){if(E.current){j();return}window.setTimeout(()=>{w()},bn)}function w(){if(o||e||E.current){j();return}if(j(),!v||v.length===0){b||i();return}if(d===v[v.length-1]&&b){i();return}const Y=v.findIndex(f=>f===d);if(Y===-1)return;const ee=v[Y+1];x(ee)}function A(){H.current=window.setTimeout(()=>{E.current=!0},xn)}function j(){H.current&&window.clearTimeout(H.current),E.current=!1}return r.createElement("div",{onClick:F,onPointerCancel:j,onPointerDown:m=>{c&&g(m),A()},onPointerMove:m=>{c&&B(m)},ref:a,"data-vaul-drawer-visible":h?"true":"false","data-vaul-handle":"","aria-hidden":"true",...t},r.createElement("span",{"data-vaul-handle-hitarea":"","aria-hidden":"true"},n))});st.displayName="Drawer.Handle";function Sn({onDrag:e,onOpenChange:n,open:t,...a}){const{onNestedDrag:i,onNestedOpenChange:o,onNestedRelease:v}=se();if(!i)throw new Error("Drawer.NestedRoot must be placed in another drawer");return r.createElement(at,{nested:!0,open:t,onClose:()=>{o(!1)},onDrag:(d,x)=>{i(d,x),e==null||e(d,x)},onOpenChange:d=>{d&&o(d),n==null||n(d)},onRelease:v,...a})}function Dn(e){const n=se(),{container:t=n.container,...a}=e;return r.createElement(It,{container:t,...a})}const q={Root:at,NestedRoot:Sn,Content:it,Overlay:ot,Trigger:$t,Portal:Dn,Handle:st,Close:jt,Title:At,Description:Pt},lt=({shouldScaleBackground:e=!0,...n})=>u.jsx(q.Root,{shouldScaleBackground:e,...n});lt.displayName="Drawer";const Rn=q.Trigger,Tn=q.Portal,En=q.Close,ut=K.forwardRef(({className:e,...n},t)=>u.jsx(q.Overlay,{ref:t,className:ie("fixed inset-0 z-50 bg-black/80",e),...n}));ut.displayName=q.Overlay.displayName;const ct=K.forwardRef(({className:e,children:n,...t},a)=>u.jsxs(Tn,{children:[u.jsx(ut,{}),u.jsxs(q.Content,{ref:a,className:ie("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",e),...t,children:[u.jsx("div",{className:"mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"}),n]})]}));ct.displayName="DrawerContent";const dt=({className:e,...n})=>u.jsx("div",{className:ie("grid gap-1.5 p-4 text-center sm:text-left",e),...n});dt.displayName="DrawerHeader";const ft=({className:e,...n})=>u.jsx("div",{className:ie("mt-auto flex flex-col gap-2 p-4",e),...n});ft.displayName="DrawerFooter";const mt=K.forwardRef(({className:e,...n},t)=>u.jsx(q.Title,{ref:t,className:ie("text-lg font-semibold leading-none tracking-tight",e),...n}));mt.displayName=q.Title.displayName;const Cn=K.forwardRef(({className:e,...n},t)=>u.jsx(q.Description,{ref:t,className:ie("text-sm text-muted-foreground",e),...n}));Cn.displayName=q.Description.displayName;const $n=()=>{const e=kt(c=>c.auth.token),n=_t(),{companyId:t}=Ht();console.log(t);const{companyLogo:a}=K.useContext(Ue),{data:i,isLoading:o}=ze({queryKey:["company-product",t,e],queryFn:()=>Yt(t,e)}),{data:v}=ze({queryKey:["company-dealers",t,e],queryFn:()=>Xt(t==="4"||t==="5"?"2":t==="11"?"1":t,e)}),{companyDealerData:d,setCompanyDealerData:x}=K.useContext(Ue);x(v);const{t:b}=Lt();return u.jsxs(u.Fragment,{children:[u.jsx(Bt,{}),u.jsx(Ft,{}),u.jsx("section",{className:"breadcrumb flex justify-center items-center md:h-[300px] h-[200px]",style:{backgroundImage:`linear-gradient(#13693a, #13693a6e),url(${Kt})`,backgroundSize:"cover",backgroundPosition:"center"},children:u.jsxs("div",{className:"breadcrumb-content",children:[u.jsxs("div",{className:"breadcrumb-links flex justify-center items-center text-2xl text-white",children:[u.jsx("p",{className:"hover:text-lightgreen px-3",children:b("Home")}),u.jsx(Ut,{}),u.jsx("p",{className:"hover:text-lightgreen px-3 capitalize",children:b("Company Product")})]}),u.jsx("p",{className:"text-lightgreen md:text-6xl text-4xl font-bold text-center mt-3 uppercase",style:{textShadow:"0 0 15px black"},children:b("Company Product")})]})}),u.jsx("main",{className:"iffco-product-page container my-5",children:o?u.jsx(zt,{}):u.jsx("section",{className:"iffco-products p-5 grid lg:grid-cols-4 grid-cols-2 md:px-5 gap-x-5",children:i&&i.map(c=>u.jsxs(lt,{children:[u.jsx(Rn,{children:u.jsxs("div",{className:"iffco-product-card rounded-3xl overflow-hidden bg-white shadow mb-4 flex flex-col justify-between hover:scale-95 transition-[0.3s]",children:[u.jsx("img",{src:c.product_image,alt:"iffco-image",className:t==="4"||t==="5"?"md:h-[300px] h-[150px] w-full object-cover object-center p-2 rounded-3xl":"md:h-[300px] h-[150px] w-full object-contain object-center p-5"}),u.jsx("div",{className:"iffco-logo text-end px-5",children:u.jsx("img",{src:a,alt:"this is iffco logo",className:"md:w-[80px] w-[60px] ms-auto"})}),u.jsx("p",{className:"md:text-md mt-3 text-sm text-center bg-lightdark text-white px-4 py-4 iffco-product-title truncate",children:c.product_name})]})}),u.jsxs(ct,{children:[u.jsx("div",{className:"container h-[400px] overflow-y-auto",children:u.jsxs("div",{className:"grid lg:grid-cols-2 grid-cols-1",children:[u.jsx("img",{src:c.product_image,alt:"iffco product image",className:"lg:h-[400px] h-[250px] mx-auto p-5"}),u.jsxs("div",{className:"iffco-product-details p-5",children:[u.jsx(dt,{children:u.jsx(mt,{className:"text-darkGreen text-lg lg:text-3xl",children:c.product_name})}),u.jsx("p",{className:"",children:c.description}),u.jsxs("p",{className:"my-4 text-darkGreen text-xl",children:[b("PRICE")," : ",u.jsx(Wt,{className:"inline-block mb-1 "}),c.price]})]})]})}),u.jsxs(ft,{className:"text-center",children:[u.jsx(We,{className:"uppercase w-[300px] mx-auto bg-gradient-green",onClick:()=>{n(`${Vt}/company-dealers/${t}`)},children:b("Show All Dealers")}),u.jsx(En,{children:u.jsx(We,{variant:"outline",children:b("close")})})]})]})]},c.id))})}),u.jsx(qt,{})]})};export{$n as default};
