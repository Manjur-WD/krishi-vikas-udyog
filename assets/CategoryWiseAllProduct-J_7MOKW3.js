import{v as W,w as ie,x as ne,y as X,j as s,r as d,F as ee,z as oe,A as le,L as ce,B as de,C as ue}from"./index-BiS8uWhF.js";import{Q as pe,c as me,d as he,e as xe,f as A,H as fe,b as ge,g as be,h as ye,B as ve,P as je,F as we}from"./ProductCard-B5nMlV-9.js";import{P as Ne}from"./ProductCardSkeleton-DpcKAZjE.js";var ke=class extends pe{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:W()},t)}getOptimisticResult(e){return e.behavior=W(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){var b,E;const{state:r}=e,i=super.createResult(e,t),{isFetching:n,isRefetching:a,isError:l,isRefetchError:o}=i,c=(E=(b=r.fetchMeta)==null?void 0:b.fetchMore)==null?void 0:E.direction,u=l&&c==="forward",p=n&&c==="forward",h=l&&c==="backward",x=n&&c==="backward";return{...i,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:ie(t,r.data),hasPreviousPage:ne(t,r.data),isFetchNextPageError:u,isFetchingNextPage:p,isFetchPreviousPageError:h,isFetchingPreviousPage:x,isRefetchError:o&&!u&&!h,isRefetching:a&&!p&&!x}}};function Pe(e,t){return me(e,ke)}const $e="/krishi-vikas-udyog/assets/img_hero-DYsDReVp.jpg",Ee=()=>{const{category:e,type:t}=X();return s.jsx(s.Fragment,{children:s.jsx("section",{className:"breadcrumb flex justify-center items-center md:h-[300px] h-[200px]",style:{backgroundImage:`linear-gradient(#13693a, #13693a6e),url(${$e})`,backgroundSize:"cover",backgroundPosition:"center"},children:s.jsxs("div",{className:"breadcrumb-content",children:[s.jsxs("div",{className:"breadcrumb-links flex justify-center items-center text-2xl text-white",children:[s.jsx("p",{className:"hover:text-lightgreen px-3",children:"Home"}),s.jsx(he,{}),s.jsx("p",{className:"hover:text-lightgreen px-3 capitalize",children:e==="goods-vehicle"?"goods vehicle":e==="agri-inputs"?"agri inputs":e})]}),s.jsx("p",{className:"text-lightgreen md:text-6xl text-4xl font-bold text-center mt-3 uppercase",style:{textShadow:"0 0 15px black"},children:e==="goods-vehicle"?`${t==="old"?"used":t} goods vehicle`:e==="agri-inputs"?t:`${t==="old"?"used":t} ${e}`})]})})})},Se=()=>{const{filterBtnState:e,setFilterBtnState:t}=d.useContext(ee);return s.jsx(s.Fragment,{children:s.jsxs("aside",{className:e?"filter-product-sidebar active":"filter-product-sidebar",children:[s.jsxs("div",{className:"lg:hidden filter-headeing flex items-center px-5 py-2 sticky -top-[10px] rounded-xl",children:[s.jsx(xe,{className:"text-3xl text-white absolute",onClick:()=>{t(!1)}}),s.jsx("p",{className:"text-xl text-white text-center w-full ",children:"Filter"})]}),s.jsxs("section",{className:"w-full bg-white my-3 p-2 rounded-3xl shadow",children:[s.jsx("div",{className:"product__brands",children:s.jsxs("details",{open:!0,className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"BRANDS"}),s.jsx(A,{className:"inline"})]})}),s.jsxs("div",{className:"brands-list border-t p-2",children:[s.jsxs("div",{className:"popular-brands grid grid-cols-3 gap-2",children:[s.jsxs("div",{className:"brand-select text-center border rounded-2xl p-2",children:[s.jsx("img",{src:"https://krishivikas.com/storage/images/brands/mf.png",alt:"brand-select",className:"w-[60px] h-[60px] object-contain mx-auto"}),s.jsx("p",{className:"brand-name capitalize",children:"brand"}),s.jsx("p",{className:"brand-product-count text-sm",children:"(250)"})]}),s.jsxs("div",{className:"brand-select text-center border rounded-2xl p-2",children:[s.jsx("img",{src:"https://krishivikas.com/storage/images/brands/mf.png",alt:"brand-select",className:"w-[60px] h-[60px] object-contain mx-auto"}),s.jsx("p",{className:"brand-name capitalize",children:"brand"}),s.jsx("p",{className:"brand-product-count text-sm",children:"(250)"})]}),s.jsxs("div",{className:"brand-select text-center border rounded-2xl p-2",children:[s.jsx("img",{src:"https://krishivikas.com/storage/images/brands/mf.png",alt:"brand-select",className:"w-[60px] h-[60px] object-contain mx-auto"}),s.jsx("p",{className:"brand-name capitalize",children:"brand"}),s.jsx("p",{className:"brand-product-count text-sm",children:"(250)"})]})]}),s.jsx("div",{className:"all-brands"})]})]})}),s.jsx("div",{className:"product_statewise",children:s.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none ",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"STATES"}),s.jsx(A,{className:"inline"})]})}),s.jsxs("ul",{children:[s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"})]})]})}),s.jsx("div",{className:"product_districtwise",children:s.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none ",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"DISTRICT"}),s.jsx(A,{className:"inline"})]})}),s.jsxs("ul",{children:[s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"})]})]})}),s.jsx("div",{className:"product_by_year",children:s.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none ",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"BY YEAR"}),s.jsx(A,{className:"inline"})]})}),s.jsxs("ul",{children:[s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"})]})]})})]})]})})},_e=({sort_btn_state:e})=>{const[t,r]=d.useState(0),i=n=>{r(n)};return s.jsx(s.Fragment,{children:s.jsx("section",{className:"sort-product-tab-section  md:sticky top-[155px] z-10 lg:py-2 bg-whitesmoke",children:s.jsxs("div",{className:e?"active bg-white mx-3 mt-3 flex lg:flex-row flex-col items-center rounded-3xl md:gap-5":" bg-white mx-3 mt-3 flex lg:flex-row flex-col items-center rounded-3xl md:gap-5",children:[s.jsx("p",{className:"label-sort text-white bg-darkGreen px-5 py-2 rounded-3xl m-2",children:"SORT BY"}),s.jsxs("div",{className:"sort-buttons flex lg:flex-row items-center flex-col",children:[s.jsx("button",{onClick:()=>i(1),className:`px-4 py-2 m-2 ${t===1?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Price High to Low"}),s.jsx("button",{onClick:()=>i(2),className:`px-4 py-2 m-2 ${t===2?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Price Low to High"}),s.jsx("button",{onClick:()=>i(3),className:`px-4 py-2 m-2 ${t===3?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Newest First"})]})]})})})};let Ce={data:""},Fe=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Ce,Ae=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Re=/\/\*[^]*?\*\/|  +/g,K=/\n+/g,k=(e,t)=>{let r="",i="",n="";for(let a in e){let l=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+l+";":i+=a[1]=="f"?k(l,a):a+"{"+k(l,a[1]=="k"?"":t)+"}":typeof l=="object"?i+=k(l,t?t.replace(/([^,])+/g,o=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,o):o?o+" "+c:c)):a):l!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=k.p?k.p(a,l):a+":"+l+";")}return r+(t&&n?t+"{"+n+"}":n)+i},w={},te=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+te(e[r]);return t}return e},Oe=(e,t,r,i,n)=>{let a=te(e),l=w[a]||(w[a]=(c=>{let u=0,p=11;for(;u<c.length;)p=101*p+c.charCodeAt(u++)>>>0;return"go"+p})(a));if(!w[l]){let c=a!==e?e:(u=>{let p,h,x=[{}];for(;p=Ae.exec(u.replace(Re,""));)p[4]?x.shift():p[3]?(h=p[3].replace(K," ").trim(),x.unshift(x[0][h]=x[0][h]||{})):x[0][p[1]]=p[2].replace(K," ").trim();return x[0]})(e);w[l]=k(n?{["@keyframes "+l]:c}:c,r?"":"."+l)}let o=r&&w.g?w.g:null;return r&&(w.g=w[l]),((c,u,p,h)=>{h?u.data=u.data.replace(h,c):u.data.indexOf(c)===-1&&(u.data=p?c+u.data:u.data+c)})(w[l],t,i,o),l},Ie=(e,t,r)=>e.reduce((i,n,a)=>{let l=t[a];if(l&&l.call){let o=l(r),c=o&&o.props&&o.props.className||/^go/.test(o)&&o;l=c?"."+c:o&&typeof o=="object"?o.props?"":k(o,""):o===!1?"":o}return i+n+(l??"")},"");function T(e){let t=this||{},r=e.call?e(t.p):e;return Oe(r.unshift?r.raw?Ie(r,[].slice.call(arguments,1),t.p):r.reduce((i,n)=>Object.assign(i,n&&n.call?n(t.p):n),{}):r,Fe(t.target),t.g,t.o,t.k)}let se,G,L;T.bind({g:1});let N=T.bind({k:1});function Be(e,t,r,i){k.p=t,se=e,G=r,L=i}function P(e,t){let r=this||{};return function(){let i=arguments;function n(a,l){let o=Object.assign({},a),c=o.className||n.className;r.p=Object.assign({theme:G&&G()},o),r.o=/ *go\d+/.test(c),o.className=T.apply(r,i)+(c?" "+c:"");let u=e;return e[0]&&(u=o.as||e,delete o.as),L&&u[0]&&L(o),se(u,o)}return n}}var ze=e=>typeof e=="function",M=(e,t)=>ze(e)?e(t):e,Me=(()=>{let e=0;return()=>(++e).toString()})(),re=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Te=20,I=new Map,De=1e3,Z=e=>{if(I.has(e))return;let t=setTimeout(()=>{I.delete(e),$({type:4,toastId:e})},De);I.set(e,t)},Ge=e=>{let t=I.get(e);t&&clearTimeout(t)},H=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Te)};case 1:return t.toast.id&&Ge(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return e.toasts.find(a=>a.id===r.id)?H(e,{type:1,toast:r}):H(e,{type:0,toast:r});case 3:let{toastId:i}=t;return i?Z(i):e.toasts.forEach(a=>{Z(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===i||i===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+n}))}}},B=[],z={toasts:[],pausedAt:void 0},$=e=>{z=H(z,e),B.forEach(t=>{t(z)})},Le={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},He=(e={})=>{let[t,r]=d.useState(z);d.useEffect(()=>(B.push(r),()=>{let n=B.indexOf(r);n>-1&&B.splice(n,1)}),[t]);let i=t.toasts.map(n=>{var a,l;return{...e,...e[n.type],...n,duration:n.duration||((a=e[n.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||Le[n.type],style:{...e.style,...(l=e[n.type])==null?void 0:l.style,...n.style}}});return{...t,toasts:i}},Qe=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||Me()}),_=e=>(t,r)=>{let i=Qe(t,e,r);return $({type:2,toast:i}),i.id},g=(e,t)=>_("blank")(e,t);g.error=_("error");g.success=_("success");g.loading=_("loading");g.custom=_("custom");g.dismiss=e=>{$({type:3,toastId:e})};g.remove=e=>$({type:4,toastId:e});g.promise=(e,t,r)=>{let i=g.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(n=>(g.success(M(t.success,n),{id:i,...r,...r==null?void 0:r.success}),n)).catch(n=>{g.error(M(t.error,n),{id:i,...r,...r==null?void 0:r.error})}),e};var Ve=(e,t)=>{$({type:1,toast:{id:e,height:t}})},qe=()=>{$({type:5,time:Date.now()})},Ye=e=>{let{toasts:t,pausedAt:r}=He(e);d.useEffect(()=>{if(r)return;let a=Date.now(),l=t.map(o=>{if(o.duration===1/0)return;let c=(o.duration||0)+o.pauseDuration-(a-o.createdAt);if(c<0){o.visible&&g.dismiss(o.id);return}return setTimeout(()=>g.dismiss(o.id),c)});return()=>{l.forEach(o=>o&&clearTimeout(o))}},[t,r]);let i=d.useCallback(()=>{r&&$({type:6,time:Date.now()})},[r]),n=d.useCallback((a,l)=>{let{reverseOrder:o=!1,gutter:c=8,defaultPosition:u}=l||{},p=t.filter(f=>(f.position||u)===(a.position||u)&&f.height),h=p.findIndex(f=>f.id===a.id),x=p.filter((f,b)=>b<h&&f.visible).length;return p.filter(f=>f.visible).slice(...o?[x+1]:[0,x]).reduce((f,b)=>f+(b.height||0)+c,0)},[t]);return{toasts:t,handlers:{updateHeight:Ve,startPause:qe,endPause:i,calculateOffset:n}}},Ue=N`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,We=N`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ke=N`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Ze=P("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ue} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${We} 0.15s ease-out forwards;
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
    animation: ${Ke} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Je=N`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Xe=P("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Je} 1s linear infinite;
`,et=N`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,tt=N`
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
}`,st=P("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${et} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${tt} 0.2s ease-out forwards;
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
`,rt=P("div")`
  position: absolute;
`,at=P("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,it=N`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,nt=P("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${it} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ot=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return t!==void 0?typeof t=="string"?d.createElement(nt,null,t):t:r==="blank"?null:d.createElement(at,null,d.createElement(Xe,{...i}),r!=="loading"&&d.createElement(rt,null,r==="error"?d.createElement(Ze,{...i}):d.createElement(st,{...i})))},lt=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ct=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,dt="0%{opacity:0;} 100%{opacity:1;}",ut="0%{opacity:1;} 100%{opacity:0;}",pt=P("div")`
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
`,mt=P("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ht=(e,t)=>{let r=e.includes("top")?1:-1,[i,n]=re()?[dt,ut]:[lt(r),ct(r)];return{animation:t?`${N(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${N(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},xt=d.memo(({toast:e,position:t,style:r,children:i})=>{let n=e.height?ht(e.position||t||"top-center",e.visible):{opacity:0},a=d.createElement(ot,{toast:e}),l=d.createElement(mt,{...e.ariaProps},M(e.message,e));return d.createElement(pt,{className:e.className,style:{...n,...r,...e.style}},typeof i=="function"?i({icon:a,message:l}):d.createElement(d.Fragment,null,a,l))});Be(d.createElement);var ft=({id:e,className:t,style:r,onHeightUpdate:i,children:n})=>{let a=d.useCallback(l=>{if(l){let o=()=>{let c=l.getBoundingClientRect().height;i(e,c)};o(),new MutationObserver(o).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return d.createElement("div",{ref:a,className:t,style:r},n)},gt=(e,t)=>{let r=e.includes("top"),i=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:re()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...i,...n}},bt=T`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,R=16,yt=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:n,containerStyle:a,containerClassName:l})=>{let{toasts:o,handlers:c}=Ye(r);return d.createElement("div",{style:{position:"fixed",zIndex:9999,top:R,left:R,right:R,bottom:R,pointerEvents:"none",...a},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},o.map(u=>{let p=u.position||t,h=c.calculateOffset(u,{reverseOrder:e,gutter:i,defaultPosition:t}),x=gt(p,h);return d.createElement(ft,{id:u.id,key:u.id,onHeightUpdate:c.updateHeight,className:u.visible?bt:"",style:x},u.type==="custom"?M(u.message,u):n?n(u):d.createElement(xt,{toast:u,position:p}))}))},vt=g,Q=new Map,O=new WeakMap,J=0,jt=void 0;function wt(e){return e?(O.has(e)||(J+=1,O.set(e,J.toString())),O.get(e)):"0"}function Nt(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?wt(e.root):e[t]}`).toString()}function kt(e){const t=Nt(e);let r=Q.get(t);if(!r){const i=new Map;let n;const a=new IntersectionObserver(l=>{l.forEach(o=>{var c;const u=o.isIntersecting&&n.some(p=>o.intersectionRatio>=p);e.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=u),(c=i.get(o.target))==null||c.forEach(p=>{p(u,o)})})},e);n=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:a,elements:i},Q.set(t,r)}return r}function Pt(e,t,r={},i=jt){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const c=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:n,observer:a,elements:l}=kt(r),o=l.get(e)||[];return l.has(e)||l.set(e,o),o.push(t),a.observe(e),function(){o.splice(o.indexOf(t),1),o.length===0&&(l.delete(e),a.unobserve(e)),l.size===0&&(a.disconnect(),Q.delete(n))}}function $t({threshold:e,delay:t,trackVisibility:r,rootMargin:i,root:n,triggerOnce:a,skip:l,initialInView:o,fallbackInView:c,onChange:u}={}){var p;const[h,x]=d.useState(null),f=d.useRef(),[b,E]=d.useState({inView:!!o,entry:void 0});f.current=u,d.useEffect(()=>{if(l||!h)return;let j;return j=Pt(h,(F,S)=>{E({inView:F,entry:S}),f.current&&f.current(F,S),S.isIntersecting&&a&&j&&(j(),j=void 0)},{root:n,rootMargin:i,threshold:e,trackVisibility:r,delay:t},c),()=>{j&&j()}},[Array.isArray(e)?e.toString():e,h,n,i,a,l,r,c,t]);const C=(p=b.entry)==null?void 0:p.target,D=d.useRef();!h&&C&&!a&&!l&&D.current!==C&&(D.current=C,E({inView:!!o,entry:void 0}));const v=[x,b.inView,b.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}const Et=new Array(6).fill(!0),Ft=()=>{var Y;const{category:e,type:t}=X(),[r,i]=d.useState(0),[n,a]=d.useState(""),[l,o]=d.useState(0),[c,u]=d.useState(12),{data:p,hasNextPage:h,fetchNextPage:x,isFetchingNextPage:f,isLoading:b,isError:E,error:C}=Pe({queryKey:["category-wise-all-product",r,n,l,c],queryFn:({pageParam:y})=>ue(r,n,y*c,c),getNextPageParam:(y,m)=>y&&y.length===12?m.length+1:void 0,initialPageParam:0}),{filterBtnState:D,setFilterBtnState:v}=d.useContext(ee),[j,F]=d.useState(!1),S=()=>{F(!j)},V=oe();d.useCallback((y,m)=>{const U=["single-product",m];console.log("Prefetch Query Key:",U),V.prefetchQuery({queryKey:U,queryFn:()=>le(y,m),staleTime:1e3*60*3})},[V]);const{ref:ae,inView:q}=$t({threshold:0});return d.useEffect(()=>{q&&(h?x():vt.success("All products are loaded!",{duration:5e3}))},[q,h]),d.useEffect(()=>{e==="tractor"?(i(1),a(t)):e==="goods-vehicle"?(i(3),a(t)):e==="harvester"?(i(4),a(t)):e==="implements"?(i(5),a(t)):e==="tyre"?(i(7),a(t)):e==="agri-inputs"&&(t==="seeds"&&i(6),t==="pesticides"&&i(8),t==="fertilizer"&&i(9))},[e,t]),s.jsxs(s.Fragment,{children:[s.jsx(fe,{}),s.jsx(ge,{}),s.jsx(Ee,{}),s.jsx(yt,{}),s.jsx("section",{className:"mobile-filter-and-sort-btn lg:hidden block bg-lightgreen sticky md:top-[147px] top-[62px] z-10",children:s.jsxs("div",{className:"container px-10  grid grid-cols-2",children:[s.jsxs("button",{type:"button",className:"sort-btn text-lg text-white border-r border-white h-full py-2",onClick:()=>v(!0),children:[s.jsx(be,{className:"inline mb-1"})," Filter"]}),s.jsxs("button",{type:"button",className:"sort-btn text-lg text-white",onClick:S,children:[s.jsx(ye,{className:"inline mb-1"})," Sort"]})]})}),s.jsxs("main",{className:"products-container-wrapper container bg-whitesmoke md:px-10 ",children:[s.jsx(Se,{}),s.jsx(_e,{sort_btn_state:j}),s.jsx("section",{className:"category-wise-all-product",children:b?s.jsx("div",{className:"product-skeleton grid md:grid-cols-3 2xl:grid-cols-4 grid-cols-2 px-5 gap-x-4",children:Et.map((y,m)=>s.jsx(Ne,{},m))}):s.jsxs("div",{className:"product-list-container mb-5",children:[s.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 md:px-5  px-2 md:gap-x-4 gap-x-2",children:(Y=p==null?void 0:p.pages)==null?void 0:Y.map(y=>y&&y.map(m=>s.jsx(ce,{to:`${ve}/${e}/${t}/${m.id}`,children:s.jsx(je,{product_image:m.front_image?m.front_image:m.image1,product_title:`${m.brand_name} ${m.model_name}`=="Others Others"||`${m.brand_name} ${m.model_name}`=="undefined undefined"||`${m.brand_name} ${m.model_name}`=="null null"?m.title:`${m.brand_name} ${m.model_name}`,product_location:m.district_name,product_pricing:m.price,distance_product:m.distance,rent_type:t==="rent"&&m.rent_type?` / ${m.rent_type.slice(4)}`:""})},m.id)))}),h?s.jsxs("div",{ref:ae,className:"lod-more-product flex items-center gap-2 justify-center w-full mt-5",children:[s.jsxs("div",{className:"relative",children:[s.jsx("span",{className:"loader"}),s.jsx("img",{src:de,alt:"this is a icon of preloader",className:"absolute top-[49.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg"})]}),s.jsx("span",{className:"text-darkGreen text-2xl",children:"Loading More"})]}):null]})})]}),s.jsx(we,{})]})};export{Ft as default};
