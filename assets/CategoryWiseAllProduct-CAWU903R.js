import{v as T,j as s,r as u,F as D,L as U,w as q}from"./index-BEUVaRt-.js";import{c as W,d as Q,e as $,u as V,H as Z,b as J,f as K,g as X,B as ee,P as te,F as se}from"./ProductCard-Df92RlqX.js";import{P as re}from"./ProductCardSkeleton-Dm0iCD58.js";const ae="/krishi-vikas-udyog/assets/img_hero-DYsDReVp.jpg",ie=()=>{const{category:e,type:t}=T();return s.jsx(s.Fragment,{children:s.jsx("section",{className:"breadcrumb flex justify-center items-center md:h-[300px] h-[200px]",style:{backgroundImage:`linear-gradient(#13693a, #13693a6e),url(${ae})`,backgroundSize:"cover",backgroundPosition:"center"},children:s.jsxs("div",{className:"breadcrumb-content",children:[s.jsxs("div",{className:"breadcrumb-links flex justify-center items-center text-2xl text-white",children:[s.jsx("p",{className:"hover:text-lightgreen px-3",children:"Home"}),s.jsx(W,{}),s.jsx("p",{className:"hover:text-lightgreen px-3 capitalize",children:e==="goods-vehicle"?"goods vehicle":e==="agri-inputs"?"agri inputs":e})]}),s.jsx("p",{className:"text-lightgreen md:text-6xl text-4xl font-bold text-center mt-3 uppercase",style:{textShadow:"0 0 15px black"},children:e==="goods-vehicle"?`${t==="old"?"used":t} goods vehicle`:e==="agri-inputs"?t:`${t==="old"?"used":t} ${e}`})]})})})},ne=()=>{const{filterBtnState:e,setFilterBtnState:t}=u.useContext(D);return s.jsx(s.Fragment,{children:s.jsxs("aside",{className:e?"filter-product-sidebar active":"filter-product-sidebar",children:[s.jsxs("div",{className:"lg:hidden filter-headeing flex items-center px-5 py-2 sticky -top-[10px] rounded-xl",children:[s.jsx(Q,{className:"text-3xl text-white absolute",onClick:()=>{t(!1)}}),s.jsx("p",{className:"text-xl text-white text-center w-full ",children:"Filter"})]}),s.jsxs("section",{className:"w-full bg-white my-3 p-2 rounded-3xl shadow",children:[s.jsx("div",{className:"product__brands",children:s.jsxs("details",{open:!0,className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"BRANDS"}),s.jsx($,{className:"inline"})]})}),s.jsxs("div",{className:"brands-list border-t p-2",children:[s.jsxs("div",{className:"popular-brands grid grid-cols-3 gap-2",children:[s.jsxs("div",{className:"brand-select text-center border rounded-2xl p-2",children:[s.jsx("img",{src:"https://krishivikas.com/storage/images/brands/mf.png",alt:"brand-select",className:"w-[60px] h-[60px] object-contain mx-auto"}),s.jsx("p",{className:"brand-name capitalize",children:"brand"}),s.jsx("p",{className:"brand-product-count text-sm",children:"(250)"})]}),s.jsxs("div",{className:"brand-select text-center border rounded-2xl p-2",children:[s.jsx("img",{src:"https://krishivikas.com/storage/images/brands/mf.png",alt:"brand-select",className:"w-[60px] h-[60px] object-contain mx-auto"}),s.jsx("p",{className:"brand-name capitalize",children:"brand"}),s.jsx("p",{className:"brand-product-count text-sm",children:"(250)"})]}),s.jsxs("div",{className:"brand-select text-center border rounded-2xl p-2",children:[s.jsx("img",{src:"https://krishivikas.com/storage/images/brands/mf.png",alt:"brand-select",className:"w-[60px] h-[60px] object-contain mx-auto"}),s.jsx("p",{className:"brand-name capitalize",children:"brand"}),s.jsx("p",{className:"brand-product-count text-sm",children:"(250)"})]})]}),s.jsx("div",{className:"all-brands"})]})]})}),s.jsx("div",{className:"product_statewise",children:s.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none ",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"STATES"}),s.jsx($,{className:"inline"})]})}),s.jsxs("ul",{children:[s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"})]})]})}),s.jsx("div",{className:"product_districtwise",children:s.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none ",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"DISTRICT"}),s.jsx($,{className:"inline"})]})}),s.jsxs("ul",{children:[s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"})]})]})}),s.jsx("div",{className:"product_by_year",children:s.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none ",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"BY YEAR"}),s.jsx($,{className:"inline"})]})}),s.jsxs("ul",{children:[s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"})]})]})})]})]})})},le=({sort_btn_state:e})=>{const[t,r]=u.useState(0),o=l=>{r(l)};return s.jsx(s.Fragment,{children:s.jsx("section",{className:"sort-product-tab-section  md:sticky top-[155px] z-10 lg:py-2 bg-whitesmoke",children:s.jsxs("div",{className:e?"active bg-white mx-3 mt-3 flex lg:flex-row flex-col items-center rounded-3xl md:gap-5":" bg-white mx-3 mt-3 flex lg:flex-row flex-col items-center rounded-3xl md:gap-5",children:[s.jsx("p",{className:"label-sort text-white bg-darkGreen px-5 py-2 rounded-3xl m-2",children:"SORT BY"}),s.jsxs("div",{className:"sort-buttons flex lg:flex-row items-center flex-col",children:[s.jsx("button",{onClick:()=>o(1),className:`px-4 py-2 m-2 ${t===1?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Price High to Low"}),s.jsx("button",{onClick:()=>o(2),className:`px-4 py-2 m-2 ${t===2?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Price Low to High"}),s.jsx("button",{onClick:()=>o(3),className:`px-4 py-2 m-2 ${t===3?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Newest First"})]})]})})})};let oe={data:""},de=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||oe,ce=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ue=/\/\*[^]*?\*\/|  +/g,O=/\n+/g,j=(e,t)=>{let r="",o="",l="";for(let a in e){let i=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+i+";":o+=a[1]=="f"?j(i,a):a+"{"+j(i,a[1]=="k"?"":t)+"}":typeof i=="object"?o+=j(i,t?t.replace(/([^,])+/g,d=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,n=>/&/.test(n)?n.replace(/&/g,d):d?d+" "+n:n)):a):i!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),l+=j.p?j.p(a,i):a+":"+i+";")}return r+(t&&l?t+"{"+l+"}":l)+o},b={},G=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+G(e[r]);return t}return e},pe=(e,t,r,o,l)=>{let a=G(e),i=b[a]||(b[a]=(n=>{let c=0,p=11;for(;c<n.length;)p=101*p+n.charCodeAt(c++)>>>0;return"go"+p})(a));if(!b[i]){let n=a!==e?e:(c=>{let p,x,g=[{}];for(;p=ce.exec(c.replace(ue,""));)p[4]?g.shift():p[3]?(x=p[3].replace(O," ").trim(),g.unshift(g[0][x]=g[0][x]||{})):g[0][p[1]]=p[2].replace(O," ").trim();return g[0]})(e);b[i]=j(l?{["@keyframes "+i]:n}:n,r?"":"."+i)}let d=r&&b.g?b.g:null;return r&&(b.g=b[i]),((n,c,p,x)=>{x?c.data=c.data.replace(x,n):c.data.indexOf(n)===-1&&(c.data=p?n+c.data:c.data+n)})(b[i],t,o,d),i},me=(e,t,r)=>e.reduce((o,l,a)=>{let i=t[a];if(i&&i.call){let d=i(r),n=d&&d.props&&d.props.className||/^go/.test(d)&&d;i=n?"."+n:d&&typeof d=="object"?d.props?"":j(d,""):d===!1?"":d}return o+l+(i??"")},"");function A(e){let t=this||{},r=e.call?e(t.p):e;return pe(r.unshift?r.raw?me(r,[].slice.call(arguments,1),t.p):r.reduce((o,l)=>Object.assign(o,l&&l.call?l(t.p):l),{}):r,de(t.target),t.g,t.o,t.k)}let L,P,z;A.bind({g:1});let y=A.bind({k:1});function xe(e,t,r,o){j.p=t,L=e,P=r,z=o}function v(e,t){let r=this||{};return function(){let o=arguments;function l(a,i){let d=Object.assign({},a),n=d.className||l.className;r.p=Object.assign({theme:P&&P()},d),r.o=/ *go\d+/.test(n),d.className=A.apply(r,o)+(n?" "+n:"");let c=e;return e[0]&&(c=d.as||e,delete d.as),z&&c[0]&&z(d),L(c,d)}return l}}var he=e=>typeof e=="function",F=(e,t)=>he(e)?e(t):e,ge=(()=>{let e=0;return()=>(++e).toString()})(),H=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),fe=20,_=new Map,be=1e3,I=e=>{if(_.has(e))return;let t=setTimeout(()=>{_.delete(e),w({type:4,toastId:e})},be);_.set(e,t)},ye=e=>{let t=_.get(e);t&&clearTimeout(t)},B=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,fe)};case 1:return t.toast.id&&ye(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return e.toasts.find(a=>a.id===r.id)?B(e,{type:1,toast:r}):B(e,{type:0,toast:r});case 3:let{toastId:o}=t;return o?I(o):e.toasts.forEach(a=>{I(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===o||o===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let l=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+l}))}}},E=[],C={toasts:[],pausedAt:void 0},w=e=>{C=B(C,e),E.forEach(t=>{t(C)})},je={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ve=(e={})=>{let[t,r]=u.useState(C);u.useEffect(()=>(E.push(r),()=>{let l=E.indexOf(r);l>-1&&E.splice(l,1)}),[t]);let o=t.toasts.map(l=>{var a,i;return{...e,...e[l.type],...l,duration:l.duration||((a=e[l.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||je[l.type],style:{...e.style,...(i=e[l.type])==null?void 0:i.style,...l.style}}});return{...t,toasts:o}},we=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||ge()}),k=e=>(t,r)=>{let o=we(t,e,r);return w({type:2,toast:o}),o.id},f=(e,t)=>k("blank")(e,t);f.error=k("error");f.success=k("success");f.loading=k("loading");f.custom=k("custom");f.dismiss=e=>{w({type:3,toastId:e})};f.remove=e=>w({type:4,toastId:e});f.promise=(e,t,r)=>{let o=f.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(l=>(f.success(F(t.success,l),{id:o,...r,...r==null?void 0:r.success}),l)).catch(l=>{f.error(F(t.error,l),{id:o,...r,...r==null?void 0:r.error})}),e};var Ne=(e,t)=>{w({type:1,toast:{id:e,height:t}})},ke=()=>{w({type:5,time:Date.now()})},$e=e=>{let{toasts:t,pausedAt:r}=ve(e);u.useEffect(()=>{if(r)return;let a=Date.now(),i=t.map(d=>{if(d.duration===1/0)return;let n=(d.duration||0)+d.pauseDuration-(a-d.createdAt);if(n<0){d.visible&&f.dismiss(d.id);return}return setTimeout(()=>f.dismiss(d.id),n)});return()=>{i.forEach(d=>d&&clearTimeout(d))}},[t,r]);let o=u.useCallback(()=>{r&&w({type:6,time:Date.now()})},[r]),l=u.useCallback((a,i)=>{let{reverseOrder:d=!1,gutter:n=8,defaultPosition:c}=i||{},p=t.filter(h=>(h.position||c)===(a.position||c)&&h.height),x=p.findIndex(h=>h.id===a.id),g=p.filter((h,N)=>N<x&&h.visible).length;return p.filter(h=>h.visible).slice(...d?[g+1]:[0,g]).reduce((h,N)=>h+(N.height||0)+n,0)},[t]);return{toasts:t,handlers:{updateHeight:Ne,startPause:ke,endPause:o,calculateOffset:l}}},Se=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,_e=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ee=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Ce=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Se} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${_e} 0.15s ease-out forwards;
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
    animation: ${Ee} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Fe=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ae=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Fe} 1s linear infinite;
`,Pe=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ze=y`
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
}`,Be=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ze} 0.2s ease-out forwards;
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
`,Oe=v("div")`
  position: absolute;
`,Ie=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Te=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,De=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Te} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ge=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return t!==void 0?typeof t=="string"?u.createElement(De,null,t):t:r==="blank"?null:u.createElement(Ie,null,u.createElement(Ae,{...o}),r!=="loading"&&u.createElement(Oe,null,r==="error"?u.createElement(Ce,{...o}):u.createElement(Be,{...o})))},Le=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,He=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Me="0%{opacity:0;} 100%{opacity:1;}",Re="0%{opacity:1;} 100%{opacity:0;}",Ye=v("div")`
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
`,Ue=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,qe=(e,t)=>{let r=e.includes("top")?1:-1,[o,l]=H()?[Me,Re]:[Le(r),He(r)];return{animation:t?`${y(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},We=u.memo(({toast:e,position:t,style:r,children:o})=>{let l=e.height?qe(e.position||t||"top-center",e.visible):{opacity:0},a=u.createElement(Ge,{toast:e}),i=u.createElement(Ue,{...e.ariaProps},F(e.message,e));return u.createElement(Ye,{className:e.className,style:{...l,...r,...e.style}},typeof o=="function"?o({icon:a,message:i}):u.createElement(u.Fragment,null,a,i))});xe(u.createElement);var Qe=({id:e,className:t,style:r,onHeightUpdate:o,children:l})=>{let a=u.useCallback(i=>{if(i){let d=()=>{let n=i.getBoundingClientRect().height;o(e,n)};d(),new MutationObserver(d).observe(i,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return u.createElement("div",{ref:a,className:t,style:r},l)},Ve=(e,t)=>{let r=e.includes("top"),o=r?{top:0}:{bottom:0},l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:H()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...o,...l}},Ze=A`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,S=16,Je=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:l,containerStyle:a,containerClassName:i})=>{let{toasts:d,handlers:n}=$e(r);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:S,left:S,right:S,bottom:S,pointerEvents:"none",...a},className:i,onMouseEnter:n.startPause,onMouseLeave:n.endPause},d.map(c=>{let p=c.position||t,x=n.calculateOffset(c,{reverseOrder:e,gutter:o,defaultPosition:t}),g=Ve(p,x);return u.createElement(Qe,{id:c.id,key:c.id,onHeightUpdate:n.updateHeight,className:c.visible?Ze:"",style:g},c.type==="custom"?F(c.message,c):l?l(c):u.createElement(We,{toast:c,position:p}))}))};const Ke=new Array(6).fill(!0),at=()=>{const{category:e,type:t}=T(),[r,o]=u.useState(!1),l=()=>{o(!r)},[a,i]=u.useState(0),[d,n]=u.useState(""),[c,p]=u.useState(0),[x,g]=u.useState(12),{data:h,isLoading:N,isError:Xe,error:et}=V({queryKey:["category-wise-all-product",a,d,c,x],queryFn:()=>q(a,d,c,x)}),{filterBtnState:M,setFilterBtnState:R}=u.useContext(D);return console.log(M),u.useEffect(()=>{e=="tractor"&&t=="new"||e=="tractor"&&t=="old"||e=="tractor"&&t=="rent"?(i(1),n(t)):e=="goods-vehicle"&&t=="new"||e=="goods-vehicle"&&t=="old"||e=="goods-vehicle"&&t=="rent"?(i(3),n(t)):e=="harvester"&&t=="new"||e=="harvester"&&t=="old"||e=="harvester"&&t=="rent"?(i(4),n(t)):e=="implements"&&t=="new"||e=="implements"&&t=="old"||e=="implements"&&t=="rent"?(i(5),n(t)):e=="tyre"&&t=="new"||e=="tyre"&&t=="old"?(i(7),n(t)):e=="agri-inputs"&&t=="seeds"?(i(6),n("")):e=="agri-inputs"&&t=="pesticides"?(i(8),n("")):e=="agri-inputs"&&t=="fertilizer"&&(i(9),n(""))},[e,t]),s.jsxs(s.Fragment,{children:[s.jsx(Z,{}),s.jsx(J,{}),s.jsx(ie,{}),s.jsx(Je,{}),s.jsx("section",{className:"mobile-filter-and-sort-btn lg:hidden block bg-lightgreen sticky md:top-[158px] top-[62px] z-10",children:s.jsxs("div",{className:"container px-10  grid grid-cols-2",children:[s.jsxs("button",{type:"button",className:"sort-btn text-lg text-white border-r border-white h-full py-2",onClick:()=>{R(!0)},children:[s.jsx(K,{className:"inline mb-1"})," Filter"]}),s.jsxs("button",{type:"button",className:"sort-btn text-lg text-white",onClick:()=>{l()},children:[s.jsx(X,{className:"inline mb-1"})," Sort"]})]})}),s.jsxs("main",{className:"products-container-wrapper container bg-whitesmoke md:px-10 ",children:[s.jsx(ne,{}),s.jsx(le,{sort_btn_state:r}),s.jsx("section",{className:"category-wise-all-product",children:N?s.jsx("div",{className:"product-skeleton grid  md:grid-cols-3 2xl:grid-cols-4 grid-cols-2 px-5 gap-x-4",children:Ke.map((m,Y)=>s.jsx(re,{},Y))}):s.jsx("div",{className:"product-list-container mb-10",children:s.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 md:px-5  px-2 md:gap-x-4 gap-x-2",children:h&&h.map(m=>s.jsx(U,{to:`${ee}/${e}/${t}/${m.id}`,children:s.jsx(te,{product_image:m.front_image?m.front_image:m.image1,product_title:`${m.brand_name} ${m.model_name}`=="Others Others"||`${m.brand_name} ${m.model_name}`=="undefined undefined"||`${m.brand_name} ${m.model_name}`=="null null"?m.title:`${m.brand_name} ${m.model_name}`,product_location:m.district_name,product_pricing:m.price,distance_product:m.distance,rent_type:t==="rent"&&m.rent_type?` / ${m.rent_type.slice(4)}`:""})},m.id))})})})]}),s.jsx(se,{})]})};export{at as default};
