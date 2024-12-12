import{v as H,j as s,r as d,F as L,L as W,w as Q}from"./index-SyCs2NhC.js";import{c as V,d as Z,e as S,u as J,H as K,b as X,f as ee,g as te,B as se,P as re,F as ae}from"./ProductCard-dalYOL54.js";import{P as ie}from"./ProductCardSkeleton-B6vy0Dk-.js";const ne="/krishi-vikas-udyog/assets/img_hero-DYsDReVp.jpg",oe=()=>{const{category:e,type:t}=H();return s.jsx(s.Fragment,{children:s.jsx("section",{className:"breadcrumb flex justify-center items-center md:h-[300px] h-[200px]",style:{backgroundImage:`linear-gradient(#13693a, #13693a6e),url(${ne})`,backgroundSize:"cover",backgroundPosition:"center"},children:s.jsxs("div",{className:"breadcrumb-content",children:[s.jsxs("div",{className:"breadcrumb-links flex justify-center items-center text-2xl text-white",children:[s.jsx("p",{className:"hover:text-lightgreen px-3",children:"Home"}),s.jsx(V,{}),s.jsx("p",{className:"hover:text-lightgreen px-3 capitalize",children:e==="goods-vehicle"?"goods vehicle":e==="agri-inputs"?"agri inputs":e})]}),s.jsx("p",{className:"text-lightgreen md:text-6xl text-4xl font-bold text-center mt-3 uppercase",style:{textShadow:"0 0 15px black"},children:e==="goods-vehicle"?`${t==="old"?"used":t} goods vehicle`:e==="agri-inputs"?t:`${t==="old"?"used":t} ${e}`})]})})})},le=()=>{const{filterBtnState:e,setFilterBtnState:t}=d.useContext(L);return s.jsx(s.Fragment,{children:s.jsxs("aside",{className:e?"filter-product-sidebar active":"filter-product-sidebar",children:[s.jsxs("div",{className:"lg:hidden filter-headeing flex items-center px-5 py-2 sticky -top-[10px] rounded-xl",children:[s.jsx(Z,{className:"text-3xl text-white absolute",onClick:()=>{t(!1)}}),s.jsx("p",{className:"text-xl text-white text-center w-full ",children:"Filter"})]}),s.jsxs("section",{className:"w-full bg-white my-3 p-2 rounded-3xl shadow",children:[s.jsx("div",{className:"product__brands",children:s.jsxs("details",{open:!0,className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"BRANDS"}),s.jsx(S,{className:"inline"})]})}),s.jsxs("div",{className:"brands-list border-t p-2",children:[s.jsxs("div",{className:"popular-brands grid grid-cols-3 gap-2",children:[s.jsxs("div",{className:"brand-select text-center border rounded-2xl p-2",children:[s.jsx("img",{src:"https://krishivikas.com/storage/images/brands/mf.png",alt:"brand-select",className:"w-[60px] h-[60px] object-contain mx-auto"}),s.jsx("p",{className:"brand-name capitalize",children:"brand"}),s.jsx("p",{className:"brand-product-count text-sm",children:"(250)"})]}),s.jsxs("div",{className:"brand-select text-center border rounded-2xl p-2",children:[s.jsx("img",{src:"https://krishivikas.com/storage/images/brands/mf.png",alt:"brand-select",className:"w-[60px] h-[60px] object-contain mx-auto"}),s.jsx("p",{className:"brand-name capitalize",children:"brand"}),s.jsx("p",{className:"brand-product-count text-sm",children:"(250)"})]}),s.jsxs("div",{className:"brand-select text-center border rounded-2xl p-2",children:[s.jsx("img",{src:"https://krishivikas.com/storage/images/brands/mf.png",alt:"brand-select",className:"w-[60px] h-[60px] object-contain mx-auto"}),s.jsx("p",{className:"brand-name capitalize",children:"brand"}),s.jsx("p",{className:"brand-product-count text-sm",children:"(250)"})]})]}),s.jsx("div",{className:"all-brands"})]})]})}),s.jsx("div",{className:"product_statewise",children:s.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none ",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"STATES"}),s.jsx(S,{className:"inline"})]})}),s.jsxs("ul",{children:[s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"})]})]})}),s.jsx("div",{className:"product_districtwise",children:s.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none ",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"DISTRICT"}),s.jsx(S,{className:"inline"})]})}),s.jsxs("ul",{children:[s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"})]})]})}),s.jsx("div",{className:"product_by_year",children:s.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none ",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"BY YEAR"}),s.jsx(S,{className:"inline"})]})}),s.jsxs("ul",{children:[s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"})]})]})})]})]})})},ce=({sort_btn_state:e})=>{const[t,r]=d.useState(0),l=o=>{r(o)};return s.jsx(s.Fragment,{children:s.jsx("section",{className:"sort-product-tab-section  md:sticky top-[155px] z-10 lg:py-2 bg-whitesmoke",children:s.jsxs("div",{className:e?"active bg-white mx-3 mt-3 flex lg:flex-row flex-col items-center rounded-3xl md:gap-5":" bg-white mx-3 mt-3 flex lg:flex-row flex-col items-center rounded-3xl md:gap-5",children:[s.jsx("p",{className:"label-sort text-white bg-darkGreen px-5 py-2 rounded-3xl m-2",children:"SORT BY"}),s.jsxs("div",{className:"sort-buttons flex lg:flex-row items-center flex-col",children:[s.jsx("button",{onClick:()=>l(1),className:`px-4 py-2 m-2 ${t===1?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Price High to Low"}),s.jsx("button",{onClick:()=>l(2),className:`px-4 py-2 m-2 ${t===2?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Price Low to High"}),s.jsx("button",{onClick:()=>l(3),className:`px-4 py-2 m-2 ${t===3?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Newest First"})]})]})})})};let de={data:""},ue=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||de,pe=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,me=/\/\*[^]*?\*\/|  +/g,T=/\n+/g,j=(e,t)=>{let r="",l="",o="";for(let a in e){let i=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+i+";":l+=a[1]=="f"?j(i,a):a+"{"+j(i,a[1]=="k"?"":t)+"}":typeof i=="object"?l+=j(i,t?t.replace(/([^,])+/g,c=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,n=>/&/.test(n)?n.replace(/&/g,c):c?c+" "+n:n)):a):i!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=j.p?j.p(a,i):a+":"+i+";")}return r+(t&&o?t+"{"+o+"}":o)+l},b={},G=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+G(e[r]);return t}return e},xe=(e,t,r,l,o)=>{let a=G(e),i=b[a]||(b[a]=(n=>{let u=0,m=11;for(;u<n.length;)m=101*m+n.charCodeAt(u++)>>>0;return"go"+m})(a));if(!b[i]){let n=a!==e?e:(u=>{let m,x,g=[{}];for(;m=pe.exec(u.replace(me,""));)m[4]?g.shift():m[3]?(x=m[3].replace(T," ").trim(),g.unshift(g[0][x]=g[0][x]||{})):g[0][m[1]]=m[2].replace(T," ").trim();return g[0]})(e);b[i]=j(o?{["@keyframes "+i]:n}:n,r?"":"."+i)}let c=r&&b.g?b.g:null;return r&&(b.g=b[i]),((n,u,m,x)=>{x?u.data=u.data.replace(x,n):u.data.indexOf(n)===-1&&(u.data=m?n+u.data:u.data+n)})(b[i],t,l,c),i},he=(e,t,r)=>e.reduce((l,o,a)=>{let i=t[a];if(i&&i.call){let c=i(r),n=c&&c.props&&c.props.className||/^go/.test(c)&&c;i=n?"."+n:c&&typeof c=="object"?c.props?"":j(c,""):c===!1?"":c}return l+o+(i??"")},"");function P(e){let t=this||{},r=e.call?e(t.p):e;return xe(r.unshift?r.raw?he(r,[].slice.call(arguments,1),t.p):r.reduce((l,o)=>Object.assign(l,o&&o.call?o(t.p):o),{}):r,ue(t.target),t.g,t.o,t.k)}let M,z,B;P.bind({g:1});let y=P.bind({k:1});function ge(e,t,r,l){j.p=t,M=e,z=r,B=l}function v(e,t){let r=this||{};return function(){let l=arguments;function o(a,i){let c=Object.assign({},a),n=c.className||o.className;r.p=Object.assign({theme:z&&z()},c),r.o=/ *go\d+/.test(n),c.className=P.apply(r,l)+(n?" "+n:"");let u=e;return e[0]&&(u=c.as||e,delete c.as),B&&u[0]&&B(c),M(u,c)}return o}}var fe=e=>typeof e=="function",A=(e,t)=>fe(e)?e(t):e,be=(()=>{let e=0;return()=>(++e).toString()})(),R=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ye=20,_=new Map,je=1e3,D=e=>{if(_.has(e))return;let t=setTimeout(()=>{_.delete(e),w({type:4,toastId:e})},je);_.set(e,t)},ve=e=>{let t=_.get(e);t&&clearTimeout(t)},O=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ye)};case 1:return t.toast.id&&ve(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return e.toasts.find(a=>a.id===r.id)?O(e,{type:1,toast:r}):O(e,{type:0,toast:r});case 3:let{toastId:l}=t;return l?D(l):e.toasts.forEach(a=>{D(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===l||l===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+o}))}}},C=[],F={toasts:[],pausedAt:void 0},w=e=>{F=O(F,e),C.forEach(t=>{t(F)})},we={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Ne=(e={})=>{let[t,r]=d.useState(F);d.useEffect(()=>(C.push(r),()=>{let o=C.indexOf(r);o>-1&&C.splice(o,1)}),[t]);let l=t.toasts.map(o=>{var a,i;return{...e,...e[o.type],...o,duration:o.duration||((a=e[o.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||we[o.type],style:{...e.style,...(i=e[o.type])==null?void 0:i.style,...o.style}}});return{...t,toasts:l}},ke=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||be()}),k=e=>(t,r)=>{let l=ke(t,e,r);return w({type:2,toast:l}),l.id},f=(e,t)=>k("blank")(e,t);f.error=k("error");f.success=k("success");f.loading=k("loading");f.custom=k("custom");f.dismiss=e=>{w({type:3,toastId:e})};f.remove=e=>w({type:4,toastId:e});f.promise=(e,t,r)=>{let l=f.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(o=>(f.success(A(t.success,o),{id:l,...r,...r==null?void 0:r.success}),o)).catch(o=>{f.error(A(t.error,o),{id:l,...r,...r==null?void 0:r.error})}),e};var $e=(e,t)=>{w({type:1,toast:{id:e,height:t}})},Se=()=>{w({type:5,time:Date.now()})},Ee=e=>{let{toasts:t,pausedAt:r}=Ne(e);d.useEffect(()=>{if(r)return;let a=Date.now(),i=t.map(c=>{if(c.duration===1/0)return;let n=(c.duration||0)+c.pauseDuration-(a-c.createdAt);if(n<0){c.visible&&f.dismiss(c.id);return}return setTimeout(()=>f.dismiss(c.id),n)});return()=>{i.forEach(c=>c&&clearTimeout(c))}},[t,r]);let l=d.useCallback(()=>{r&&w({type:6,time:Date.now()})},[r]),o=d.useCallback((a,i)=>{let{reverseOrder:c=!1,gutter:n=8,defaultPosition:u}=i||{},m=t.filter(h=>(h.position||u)===(a.position||u)&&h.height),x=m.findIndex(h=>h.id===a.id),g=m.filter((h,N)=>N<x&&h.visible).length;return m.filter(h=>h.visible).slice(...c?[g+1]:[0,g]).reduce((h,N)=>h+(N.height||0)+n,0)},[t]);return{toasts:t,handlers:{updateHeight:$e,startPause:Se,endPause:l,calculateOffset:o}}},_e=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Ce=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Fe=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Ae=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_e} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ce} 0.15s ease-out forwards;
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
    animation: ${Fe} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Pe=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ze=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Pe} 1s linear infinite;
`,Be=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Oe=y`
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
}`,Ie=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Be} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Oe} 0.2s ease-out forwards;
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
`,Te=v("div")`
  position: absolute;
`,De=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,He=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Le=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${He} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ge=({toast:e})=>{let{icon:t,type:r,iconTheme:l}=e;return t!==void 0?typeof t=="string"?d.createElement(Le,null,t):t:r==="blank"?null:d.createElement(De,null,d.createElement(ze,{...l}),r!=="loading"&&d.createElement(Te,null,r==="error"?d.createElement(Ae,{...l}):d.createElement(Ie,{...l})))},Me=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Re=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ye="0%{opacity:0;} 100%{opacity:1;}",qe="0%{opacity:1;} 100%{opacity:0;}",Ue=v("div")`
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
`,We=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Qe=(e,t)=>{let r=e.includes("top")?1:-1,[l,o]=R()?[Ye,qe]:[Me(r),Re(r)];return{animation:t?`${y(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ve=d.memo(({toast:e,position:t,style:r,children:l})=>{let o=e.height?Qe(e.position||t||"top-center",e.visible):{opacity:0},a=d.createElement(Ge,{toast:e}),i=d.createElement(We,{...e.ariaProps},A(e.message,e));return d.createElement(Ue,{className:e.className,style:{...o,...r,...e.style}},typeof l=="function"?l({icon:a,message:i}):d.createElement(d.Fragment,null,a,i))});ge(d.createElement);var Ze=({id:e,className:t,style:r,onHeightUpdate:l,children:o})=>{let a=d.useCallback(i=>{if(i){let c=()=>{let n=i.getBoundingClientRect().height;l(e,n)};c(),new MutationObserver(c).observe(i,{subtree:!0,childList:!0,characterData:!0})}},[e,l]);return d.createElement("div",{ref:a,className:t,style:r},o)},Je=(e,t)=>{let r=e.includes("top"),l=r?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:R()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...l,...o}},Ke=P`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,Xe=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:l,children:o,containerStyle:a,containerClassName:i})=>{let{toasts:c,handlers:n}=Ee(r);return d.createElement("div",{style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...a},className:i,onMouseEnter:n.startPause,onMouseLeave:n.endPause},c.map(u=>{let m=u.position||t,x=n.calculateOffset(u,{reverseOrder:e,gutter:l,defaultPosition:t}),g=Je(m,x);return d.createElement(Ze,{id:u.id,key:u.id,onHeightUpdate:n.updateHeight,className:u.visible?Ke:"",style:g},u.type==="custom"?A(u.message,u):o?o(u):d.createElement(Ve,{toast:u,position:m}))}))};const et=new Array(6).fill(!0),ot=()=>{const{category:e,type:t}=H(),[r,l]=d.useState(!1),o=()=>{l(!r)},[a,i]=d.useState(0),[c,n]=d.useState(""),[u,m]=d.useState(0),[x,g]=d.useState(12),{data:h,isLoading:N,isError:tt,error:st}=J({queryKey:["category-wise-all-product",a,c,u,x],queryFn:()=>Q(a,c,u,x)}),{filterBtnState:rt,setFilterBtnState:Y}=d.useContext(L),q=()=>{try{const p=document.querySelector("footer"),$=document.documentElement.scrollHeight-p.offsetHeight,U=window.innerHeight,I=window.scrollY+U;console.log("Total document scroll height:",$),console.log("scroll:",I),I>=$&&console.log("Youu Crossed")}catch(p){console.log(p)}};return d.useEffect(()=>{window.addEventListener("scroll",q)},[]),d.useEffect(()=>{e=="tractor"&&t=="new"||e=="tractor"&&t=="old"||e=="tractor"&&t=="rent"?(i(1),n(t)):e=="goods-vehicle"&&t=="new"||e=="goods-vehicle"&&t=="old"||e=="goods-vehicle"&&t=="rent"?(i(3),n(t)):e=="harvester"&&t=="new"||e=="harvester"&&t=="old"||e=="harvester"&&t=="rent"?(i(4),n(t)):e=="implements"&&t=="new"||e=="implements"&&t=="old"||e=="implements"&&t=="rent"?(i(5),n(t)):e=="tyre"&&t=="new"||e=="tyre"&&t=="old"?(i(7),n(t)):e=="agri-inputs"&&t=="seeds"?(i(6),n("")):e=="agri-inputs"&&t=="pesticides"?(i(8),n("")):e=="agri-inputs"&&t=="fertilizer"&&(i(9),n(""))},[e,t]),s.jsxs(s.Fragment,{children:[s.jsx(K,{}),s.jsx(X,{}),s.jsx(oe,{}),s.jsx(Xe,{}),s.jsx("section",{className:"mobile-filter-and-sort-btn lg:hidden block bg-lightgreen sticky md:top-[158px] top-[62px] z-10",children:s.jsxs("div",{className:"container px-10  grid grid-cols-2",children:[s.jsxs("button",{type:"button",className:"sort-btn text-lg text-white border-r border-white h-full py-2",onClick:()=>{Y(!0)},children:[s.jsx(ee,{className:"inline mb-1"})," Filter"]}),s.jsxs("button",{type:"button",className:"sort-btn text-lg text-white",onClick:()=>{o()},children:[s.jsx(te,{className:"inline mb-1"})," Sort"]})]})}),s.jsxs("main",{className:"products-container-wrapper container bg-whitesmoke md:px-10 ",children:[s.jsx(le,{}),s.jsx(ce,{sort_btn_state:r}),s.jsx("section",{className:"category-wise-all-product",children:N?s.jsx("div",{className:"product-skeleton grid  md:grid-cols-3 2xl:grid-cols-4 grid-cols-2 px-5 gap-x-4",children:et.map((p,$)=>s.jsx(ie,{},$))}):s.jsx("div",{className:"product-list-container mb-10",children:s.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 md:px-5  px-2 md:gap-x-4 gap-x-2",children:h&&h.map(p=>s.jsx(W,{to:`${se}/${e}/${t}/${p.id}`,children:s.jsx(re,{product_image:p.front_image?p.front_image:p.image1,product_title:`${p.brand_name} ${p.model_name}`=="Others Others"||`${p.brand_name} ${p.model_name}`=="undefined undefined"||`${p.brand_name} ${p.model_name}`=="null null"?p.title:`${p.brand_name} ${p.model_name}`,product_location:p.district_name,product_pricing:p.price,distance_product:p.distance,rent_type:t==="rent"&&p.rent_type?` / ${p.rent_type.slice(4)}`:""})},p.id))})})})]}),s.jsx(ae,{})]})};export{ot as default};
