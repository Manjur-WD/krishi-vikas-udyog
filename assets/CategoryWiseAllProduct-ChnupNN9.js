import{v as U,w as re,x as ae,y as J,j as s,r as u,F as K,L as ie,z as ne,A as oe}from"./index-DYpKB9m-.js";import{Q as le,c as ce,d as de,e as ue,f as A,H as pe,b as me,g as xe,h as he,B as fe,F as ge}from"./MobileScreenNav-CLXrH4Z3.js";import{P as be}from"./ProductCard-DBi4jVDg.js";import{P as ve}from"./ProductCardSkeleton-N3g-pYz6.js";import{b as ye}from"./img_hero-DAQ5Jl1R.js";import"./index-DU75u3nV.js";var je=class extends le{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:U()},t)}getOptimisticResult(e){return e.behavior=U(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){var b,E;const{state:r}=e,i=super.createResult(e,t),{isFetching:n,isRefetching:a,isError:l,isRefetchError:o}=i,c=(E=(b=r.fetchMeta)==null?void 0:b.fetchMore)==null?void 0:E.direction,d=l&&c==="forward",p=n&&c==="forward",x=l&&c==="backward",h=n&&c==="backward";return{...i,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:re(t,r.data),hasPreviousPage:ae(t,r.data),isFetchNextPageError:d,isFetchingNextPage:p,isFetchPreviousPageError:x,isFetchingPreviousPage:h,isRefetchError:o&&!d&&!x,isRefetching:a&&!p&&!h}}};function we(e,t){return ce(e,je)}const Ne=()=>{const{category:e,type:t}=J();return s.jsx(s.Fragment,{children:s.jsx("section",{className:"breadcrumb flex justify-center items-center md:h-[300px] h-[200px]",style:{backgroundImage:`linear-gradient(#13693a, #13693a6e),url(${ye})`,backgroundSize:"cover",backgroundPosition:"center"},children:s.jsxs("div",{className:"breadcrumb-content",children:[s.jsxs("div",{className:"breadcrumb-links flex justify-center items-center md:text-2xl text-white",children:[s.jsx("p",{className:"hover:text-lightgreen px-3",children:"Home"}),s.jsx(de,{}),s.jsx("p",{className:"hover:text-lightgreen px-3 capitalize ",children:e==="goods-vehicle"?"goods vehicle":e==="agri-inputs"?"agri inputs":e})]}),s.jsx("p",{className:"text-lightgreen md:text-6xl text-3xl font-bold text-center mt-3 uppercase",style:{textShadow:"0 0 15px black"},children:e==="goods-vehicle"?`${t==="old"?"used":t} goods vehicle`:e==="agri-inputs"?t:`${t==="old"?"used":t} ${e}`})]})})})},ke=()=>{const{filterBtnState:e,setFilterBtnState:t}=u.useContext(K);return s.jsx(s.Fragment,{children:s.jsxs("aside",{className:e?"filter-product-sidebar active":"filter-product-sidebar",children:[s.jsxs("div",{className:"lg:hidden filter-headeing flex items-center px-5 py-2 sticky -top-[10px] rounded-xl",children:[s.jsx(ue,{className:"text-3xl text-white absolute",onClick:()=>{t(!1)}}),s.jsx("p",{className:"text-xl text-white text-center w-full ",children:"Filter"})]}),s.jsxs("section",{className:"w-full bg-white my-3 p-2 rounded-3xl shadow",children:[s.jsx("div",{className:"product__brands",children:s.jsxs("details",{open:!0,className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"BRANDS"}),s.jsx(A,{className:"inline"})]})}),s.jsxs("div",{className:"brands-list border-t p-2",children:[s.jsxs("div",{className:"popular-brands grid grid-cols-3 gap-2",children:[s.jsxs("div",{className:"brand-select text-center border rounded-2xl p-2",children:[s.jsx("img",{src:"https://krishivikas.com/storage/images/brands/mf.png",alt:"brand-select",className:"w-[60px] h-[60px] object-contain mx-auto"}),s.jsx("p",{className:"brand-name capitalize",children:"brand"}),s.jsx("p",{className:"brand-product-count text-sm",children:"(250)"})]}),s.jsxs("div",{className:"brand-select text-center border rounded-2xl p-2",children:[s.jsx("img",{src:"https://krishivikas.com/storage/images/brands/mf.png",alt:"brand-select",className:"w-[60px] h-[60px] object-contain mx-auto"}),s.jsx("p",{className:"brand-name capitalize",children:"brand"}),s.jsx("p",{className:"brand-product-count text-sm",children:"(250)"})]}),s.jsxs("div",{className:"brand-select text-center border rounded-2xl p-2",children:[s.jsx("img",{src:"https://krishivikas.com/storage/images/brands/mf.png",alt:"brand-select",className:"w-[60px] h-[60px] object-contain mx-auto"}),s.jsx("p",{className:"brand-name capitalize",children:"brand"}),s.jsx("p",{className:"brand-product-count text-sm",children:"(250)"})]})]}),s.jsx("div",{className:"all-brands"})]})]})}),s.jsx("div",{className:"product_statewise",children:s.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none ",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"STATES"}),s.jsx(A,{className:"inline"})]})}),s.jsxs("ul",{children:[s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"})]})]})}),s.jsx("div",{className:"product_districtwise",children:s.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none ",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"DISTRICT"}),s.jsx(A,{className:"inline"})]})}),s.jsxs("ul",{children:[s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"})]})]})}),s.jsx("div",{className:"product_by_year",children:s.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none ",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"BY YEAR"}),s.jsx(A,{className:"inline"})]})}),s.jsxs("ul",{children:[s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"})]})]})})]})]})})},Pe=({sort_btn_state:e})=>{const[t,r]=u.useState(0),i=n=>{r(n)};return s.jsx(s.Fragment,{children:s.jsx("section",{className:"sort-product-tab-section  md:sticky top-[155px] z-10 lg:py-2 bg-whitesmoke",children:s.jsxs("div",{className:e?"active bg-white mx-3 mt-3 flex lg:flex-row flex-col items-center rounded-3xl md:gap-5":" bg-white mx-3 mt-3 flex lg:flex-row flex-col items-center rounded-3xl md:gap-5",children:[s.jsx("p",{className:"label-sort text-white bg-darkGreen px-5 py-2 rounded-3xl m-2",children:"SORT BY"}),s.jsxs("div",{className:"sort-buttons flex lg:flex-row items-center flex-col",children:[s.jsx("button",{onClick:()=>i(1),className:`px-4 py-2 m-2 ${t===1?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Price High to Low"}),s.jsx("button",{onClick:()=>i(2),className:`px-4 py-2 m-2 ${t===2?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Price Low to High"}),s.jsx("button",{onClick:()=>i(3),className:`px-4 py-2 m-2 ${t===3?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Newest First"})]})]})})})};let $e={data:""},Ee=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||$e,Se=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,_e=/\/\*[^]*?\*\/|  +/g,W=/\n+/g,k=(e,t)=>{let r="",i="",n="";for(let a in e){let l=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+l+";":i+=a[1]=="f"?k(l,a):a+"{"+k(l,a[1]=="k"?"":t)+"}":typeof l=="object"?i+=k(l,t?t.replace(/([^,])+/g,o=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,o):o?o+" "+c:c)):a):l!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=k.p?k.p(a,l):a+":"+l+";")}return r+(t&&n?t+"{"+n+"}":n)+i},j={},X=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+X(e[r]);return t}return e},Ce=(e,t,r,i,n)=>{let a=X(e),l=j[a]||(j[a]=(c=>{let d=0,p=11;for(;d<c.length;)p=101*p+c.charCodeAt(d++)>>>0;return"go"+p})(a));if(!j[l]){let c=a!==e?e:(d=>{let p,x,h=[{}];for(;p=Se.exec(d.replace(_e,""));)p[4]?h.shift():p[3]?(x=p[3].replace(W," ").trim(),h.unshift(h[0][x]=h[0][x]||{})):h[0][p[1]]=p[2].replace(W," ").trim();return h[0]})(e);j[l]=k(n?{["@keyframes "+l]:c}:c,r?"":"."+l)}let o=r&&j.g?j.g:null;return r&&(j.g=j[l]),((c,d,p,x)=>{x?d.data=d.data.replace(x,c):d.data.indexOf(c)===-1&&(d.data=p?c+d.data:d.data+c)})(j[l],t,i,o),l},Fe=(e,t,r)=>e.reduce((i,n,a)=>{let l=t[a];if(l&&l.call){let o=l(r),c=o&&o.props&&o.props.className||/^go/.test(o)&&o;l=c?"."+c:o&&typeof o=="object"?o.props?"":k(o,""):o===!1?"":o}return i+n+(l??"")},"");function T(e){let t=this||{},r=e.call?e(t.p):e;return Ce(r.unshift?r.raw?Fe(r,[].slice.call(arguments,1),t.p):r.reduce((i,n)=>Object.assign(i,n&&n.call?n(t.p):n),{}):r,Ee(t.target),t.g,t.o,t.k)}let ee,G,L;T.bind({g:1});let w=T.bind({k:1});function Ae(e,t,r,i){k.p=t,ee=e,G=r,L=i}function P(e,t){let r=this||{};return function(){let i=arguments;function n(a,l){let o=Object.assign({},a),c=o.className||n.className;r.p=Object.assign({theme:G&&G()},o),r.o=/ *go\d+/.test(c),o.className=T.apply(r,i)+(c?" "+c:"");let d=e;return e[0]&&(d=o.as||e,delete o.as),L&&d[0]&&L(o),ee(d,o)}return n}}var Re=e=>typeof e=="function",M=(e,t)=>Re(e)?e(t):e,Oe=(()=>{let e=0;return()=>(++e).toString()})(),te=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Ie=20,I=new Map,Be=1e3,q=e=>{if(I.has(e))return;let t=setTimeout(()=>{I.delete(e),$({type:4,toastId:e})},Be);I.set(e,t)},ze=e=>{let t=I.get(e);t&&clearTimeout(t)},H=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Ie)};case 1:return t.toast.id&&ze(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return e.toasts.find(a=>a.id===r.id)?H(e,{type:1,toast:r}):H(e,{type:0,toast:r});case 3:let{toastId:i}=t;return i?q(i):e.toasts.forEach(a=>{q(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===i||i===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+n}))}}},B=[],z={toasts:[],pausedAt:void 0},$=e=>{z=H(z,e),B.forEach(t=>{t(z)})},Me={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Te=(e={})=>{let[t,r]=u.useState(z);u.useEffect(()=>(B.push(r),()=>{let n=B.indexOf(r);n>-1&&B.splice(n,1)}),[t]);let i=t.toasts.map(n=>{var a,l;return{...e,...e[n.type],...n,duration:n.duration||((a=e[n.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||Me[n.type],style:{...e.style,...(l=e[n.type])==null?void 0:l.style,...n.style}}});return{...t,toasts:i}},De=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||Oe()}),_=e=>(t,r)=>{let i=De(t,e,r);return $({type:2,toast:i}),i.id},g=(e,t)=>_("blank")(e,t);g.error=_("error");g.success=_("success");g.loading=_("loading");g.custom=_("custom");g.dismiss=e=>{$({type:3,toastId:e})};g.remove=e=>$({type:4,toastId:e});g.promise=(e,t,r)=>{let i=g.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(n=>(g.success(M(t.success,n),{id:i,...r,...r==null?void 0:r.success}),n)).catch(n=>{g.error(M(t.error,n),{id:i,...r,...r==null?void 0:r.error})}),e};var Ge=(e,t)=>{$({type:1,toast:{id:e,height:t}})},Le=()=>{$({type:5,time:Date.now()})},He=e=>{let{toasts:t,pausedAt:r}=Te(e);u.useEffect(()=>{if(r)return;let a=Date.now(),l=t.map(o=>{if(o.duration===1/0)return;let c=(o.duration||0)+o.pauseDuration-(a-o.createdAt);if(c<0){o.visible&&g.dismiss(o.id);return}return setTimeout(()=>g.dismiss(o.id),c)});return()=>{l.forEach(o=>o&&clearTimeout(o))}},[t,r]);let i=u.useCallback(()=>{r&&$({type:6,time:Date.now()})},[r]),n=u.useCallback((a,l)=>{let{reverseOrder:o=!1,gutter:c=8,defaultPosition:d}=l||{},p=t.filter(f=>(f.position||d)===(a.position||d)&&f.height),x=p.findIndex(f=>f.id===a.id),h=p.filter((f,b)=>b<x&&f.visible).length;return p.filter(f=>f.visible).slice(...o?[h+1]:[0,h]).reduce((f,b)=>f+(b.height||0)+c,0)},[t]);return{toasts:t,handlers:{updateHeight:Ge,startPause:Le,endPause:i,calculateOffset:n}}},Qe=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Ve=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ye=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Ue=P("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Qe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ve} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Ye} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,We=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,qe=P("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${We} 1s linear infinite;
`,Ze=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Je=w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ke=P("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ze} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Je} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Xe=P("div")`
  position: absolute;
`,et=P("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,tt=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,st=P("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${tt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,rt=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return t!==void 0?typeof t=="string"?u.createElement(st,null,t):t:r==="blank"?null:u.createElement(et,null,u.createElement(qe,{...i}),r!=="loading"&&u.createElement(Xe,null,r==="error"?u.createElement(Ue,{...i}):u.createElement(Ke,{...i})))},at=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,it=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,nt="0%{opacity:0;} 100%{opacity:1;}",ot="0%{opacity:1;} 100%{opacity:0;}",lt=P("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ct=P("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,dt=(e,t)=>{let r=e.includes("top")?1:-1,[i,n]=te()?[nt,ot]:[at(r),it(r)];return{animation:t?`${w(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ut=u.memo(({toast:e,position:t,style:r,children:i})=>{let n=e.height?dt(e.position||t||"top-center",e.visible):{opacity:0},a=u.createElement(rt,{toast:e}),l=u.createElement(ct,{...e.ariaProps},M(e.message,e));return u.createElement(lt,{className:e.className,style:{...n,...r,...e.style}},typeof i=="function"?i({icon:a,message:l}):u.createElement(u.Fragment,null,a,l))});Ae(u.createElement);var pt=({id:e,className:t,style:r,onHeightUpdate:i,children:n})=>{let a=u.useCallback(l=>{if(l){let o=()=>{let c=l.getBoundingClientRect().height;i(e,c)};o(),new MutationObserver(o).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return u.createElement("div",{ref:a,className:t,style:r},n)},mt=(e,t)=>{let r=e.includes("top"),i=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:te()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...i,...n}},xt=T`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,R=16,ht=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:n,containerStyle:a,containerClassName:l})=>{let{toasts:o,handlers:c}=He(r);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:R,left:R,right:R,bottom:R,pointerEvents:"none",...a},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},o.map(d=>{let p=d.position||t,x=c.calculateOffset(d,{reverseOrder:e,gutter:i,defaultPosition:t}),h=mt(p,x);return u.createElement(pt,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?xt:"",style:h},d.type==="custom"?M(d.message,d):n?n(d):u.createElement(ut,{toast:d,position:p}))}))},ft=g,Q=new Map,O=new WeakMap,Z=0,gt=void 0;function bt(e){return e?(O.has(e)||(Z+=1,O.set(e,Z.toString())),O.get(e)):"0"}function vt(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?bt(e.root):e[t]}`).toString()}function yt(e){const t=vt(e);let r=Q.get(t);if(!r){const i=new Map;let n;const a=new IntersectionObserver(l=>{l.forEach(o=>{var c;const d=o.isIntersecting&&n.some(p=>o.intersectionRatio>=p);e.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=d),(c=i.get(o.target))==null||c.forEach(p=>{p(d,o)})})},e);n=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:a,elements:i},Q.set(t,r)}return r}function jt(e,t,r={},i=gt){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const c=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:n,observer:a,elements:l}=yt(r),o=l.get(e)||[];return l.has(e)||l.set(e,o),o.push(t),a.observe(e),function(){o.splice(o.indexOf(t),1),o.length===0&&(l.delete(e),a.unobserve(e)),l.size===0&&(a.disconnect(),Q.delete(n))}}function wt({threshold:e,delay:t,trackVisibility:r,rootMargin:i,root:n,triggerOnce:a,skip:l,initialInView:o,fallbackInView:c,onChange:d}={}){var p;const[x,h]=u.useState(null),f=u.useRef(),[b,E]=u.useState({inView:!!o,entry:void 0});f.current=d,u.useEffect(()=>{if(l||!x)return;let y;return y=jt(x,(F,S)=>{E({inView:F,entry:S}),f.current&&f.current(F,S),S.isIntersecting&&a&&y&&(y(),y=void 0)},{root:n,rootMargin:i,threshold:e,trackVisibility:r,delay:t},c),()=>{y&&y()}},[Array.isArray(e)?e.toString():e,x,n,i,a,l,r,c,t]);const C=(p=b.entry)==null?void 0:p.target,D=u.useRef();!x&&C&&!a&&!l&&D.current!==C&&(D.current=C,E({inView:!!o,entry:void 0}));const v=[h,b.inView,b.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}const Nt=new Array(6).fill(!0),Ct=()=>{var Y;const{category:e,type:t}=J(),[r,i]=u.useState(0),[n,a]=u.useState(""),[l,o]=u.useState(0),[c,d]=u.useState(12),{data:p,hasNextPage:x,fetchNextPage:h,isFetchingNextPage:f,isLoading:b,isError:E,error:C}=we({queryKey:["category-wise-all-product",r,n,l,c],queryFn:({pageParam:N})=>oe(r,n,N*c,c),getNextPageParam:(N,m)=>N&&N.length===12?m.length+1:void 0,initialPageParam:0}),{filterBtnState:D,setFilterBtnState:v}=u.useContext(K),[y,F]=u.useState(!1),S=()=>{F(!y)},{ref:se,inView:V}=wt({threshold:0});return u.useEffect(()=>{V&&(x?h():ft.success("All products are loaded!",{duration:5e3}))},[V,x]),u.useEffect(()=>{e==="tractor"?(i(1),a(t)):e==="goods-vehicle"?(i(3),a(t)):e==="harvester"?(i(4),a(t)):e==="implements"?(i(5),a(t)):e==="tyre"?(i(7),a(t)):e==="agri-inputs"&&(t==="seeds"&&i(6),t==="pesticides"&&i(8),t==="fertilizer"&&i(9))},[e,t]),s.jsxs(s.Fragment,{children:[s.jsx(pe,{}),s.jsx(me,{}),s.jsx(Ne,{}),s.jsx(ht,{}),s.jsx("section",{className:"mobile-filter-and-sort-btn lg:hidden block bg-lightgreen sticky md:top-[147px] top-[62px] z-10",children:s.jsxs("div",{className:"container px-10  grid grid-cols-2",children:[s.jsxs("button",{type:"button",className:"sort-btn text-lg text-white border-r border-white h-full py-2",onClick:()=>v(!0),children:[s.jsx(xe,{className:"inline mb-1"})," Filter"]}),s.jsxs("button",{type:"button",className:"sort-btn text-lg text-white",onClick:S,children:[s.jsx(he,{className:"inline mb-1"})," Sort"]})]})}),s.jsxs("main",{className:"products-container-wrapper container bg-whitesmoke md:px-10 ",children:[s.jsx(ke,{}),s.jsx(Pe,{sort_btn_state:y}),s.jsx("section",{className:"category-wise-all-product",children:b?s.jsx("div",{className:"product-skeleton grid md:grid-cols-3 2xl:grid-cols-4 grid-cols-2 px-5 gap-x-4",children:Nt.map((N,m)=>s.jsx(ve,{},m))}):s.jsxs("div",{className:"product-list-container mb-5",children:[s.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 md:px-5  px-2 md:gap-x-4 gap-x-2",children:(Y=p==null?void 0:p.pages)==null?void 0:Y.map(N=>N&&N.map(m=>s.jsx(ie,{to:`${fe}/${e}/${t}/${m.id}`,children:s.jsx(be,{product_full_details:m,product_image:m.front_image?m.front_image:m.image1,product_title:`${m.brand_name} ${m.model_name}`=="Others Others"||`${m.brand_name} ${m.model_name}`=="undefined undefined"||`${m.brand_name} ${m.model_name}`=="null null"?m.title:`${m.brand_name} ${m.model_name}`,product_location:m.district_name,product_pricing:m.price,distance_product:m.distance,rent_type:t==="rent"&&m.rent_type?` / ${m.rent_type.slice(4)}`:""})},m.id)))}),x?s.jsxs("div",{ref:se,className:"lod-more-product flex items-center gap-2 justify-center w-full mt-5",children:[s.jsxs("div",{className:"relative",children:[s.jsx("span",{className:"loader"}),s.jsx("img",{src:ne,alt:"this is a icon of preloader",className:"absolute top-[49.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg"})]}),s.jsx("span",{className:"text-darkGreen text-2xl",children:"Loading More"})]}):null]})})]}),s.jsx(ge,{})]})};export{Ct as default};
