import{v as X,w as be,x as ge,y as ne,j as s,r as u,F as oe,z as ye,A as ee,B as te,C as ve,D as je,E as we,G as Ne,H as ke,S as le,L as _e,J as Pe,K as Se}from"./index-Du-rx00b.js";import{Q as $e,c as Ee,d as Fe,u as O,e as Ce,f as A,H as Re,b as Oe,g as Ae,h as Le,B as Be,F as Ie}from"./MobileScreenNav-CVm-Id62.js";import{P as Me}from"./ProductCard-Dw4HYzAk.js";import{P as Te}from"./ProductCardSkeleton-CgeW3Z8H.js";import{b as ze}from"./img_hero-DAQ5Jl1R.js";import"./index-Ss3SKkU2.js";var De=class extends $e{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:X()},t)}getOptimisticResult(e){return e.behavior=X(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){var g,v;const{state:r}=e,i=super.createResult(e,t),{isFetching:o,isRefetching:a,isError:l,isRefetchError:n}=i,c=(v=(g=r.fetchMeta)==null?void 0:g.fetchMore)==null?void 0:v.direction,m=l&&c==="forward",x=o&&c==="forward",p=l&&c==="backward",b=o&&c==="backward";return{...i,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:be(t,r.data),hasPreviousPage:ge(t,r.data),isFetchNextPageError:m,isFetchingNextPage:x,isFetchPreviousPageError:p,isFetchingPreviousPage:b,isRefetchError:n&&!m&&!p,isRefetching:a&&!x&&!b}}};function Ge(e,t){return Ee(e,De)}const He=()=>{const{category:e,type:t}=ne();return s.jsx(s.Fragment,{children:s.jsx("section",{className:"breadcrumb flex justify-center items-center md:h-[300px] h-[200px]",style:{backgroundImage:`linear-gradient(#13693a, #13693a6e),url(${ze})`,backgroundSize:"cover",backgroundPosition:"center"},children:s.jsxs("div",{className:"breadcrumb-content",children:[s.jsxs("div",{className:"breadcrumb-links flex justify-center items-center md:text-2xl text-white",children:[s.jsx("p",{className:"hover:text-lightgreen px-3",children:"Home"}),s.jsx(Fe,{}),s.jsx("p",{className:"hover:text-lightgreen px-3 capitalize ",children:e==="goods-vehicle"?"goods vehicle":e==="agri-inputs"?"agri inputs":e})]}),s.jsx("p",{className:"text-lightgreen md:text-6xl text-3xl font-bold text-center mt-3 uppercase",style:{textShadow:"0 0 15px black"},children:e==="goods-vehicle"?`${t==="old"?"used":t} goods vehicle`:e==="agri-inputs"?t:`${t==="old"?"used":t} ${e}`})]})})})},se=()=>s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:s.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),s.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:s.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),s.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:s.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),s.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:s.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),s.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:s.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),s.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:s.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})})]}),qe=({categoryId:e,type:t,categoryProduct:r})=>{const{filterBtnState:i,setFilterBtnState:o}=u.useContext(oe);console.log(e),console.log(t);const{data:a,isLoading:l}=O({queryKey:["brand-list",e,t],queryFn:()=>je(e,t),enabled:!!r}),{data:n,isLoading:c}=O({queryKey:["state-district-list",e,t],queryFn:()=>we(e,t),enabled:!!a}),{data:m,isLoading:x}=O({queryKey:["year-of-purchase-list",e,t],queryFn:()=>Ne(e,t),enabled:!!n});O({queryKey:["maxmin-price-list",e,t],queryFn:()=>ke(e,t),enabled:!!m});const p=a?a.filter(d=>d.popular===1&&d.item_count!=0):[],b=a?a.filter(d=>d.item_count!=0&&d.popular!=1):[];console.log(a);const f=ye(),g=ee(d=>d.counter.filterParams.brandId),v=ee(d=>d.counter.filterParams.stateId);return console.log(`"${g}"`),console.log(`"${v}"`),s.jsx(s.Fragment,{children:s.jsxs("aside",{className:i?"filter-product-sidebar active":"filter-product-sidebar",children:[s.jsxs("div",{className:"lg:hidden filter-headeing flex items-center px-5 py-2 sticky -top-[10px] rounded-xl",children:[s.jsx(Ce,{className:"text-3xl text-white absolute",onClick:()=>{o(!1)}}),s.jsx("p",{className:"text-xl text-white text-center w-full ",children:"Filter"})]}),s.jsxs("section",{className:"w-full bg-white my-3 p-2 rounded-3xl shadow",children:[e!==6&&e!==8&&e!==9?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"product__brands",children:s.jsxs("details",{open:!0,className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"BRANDS"}),s.jsx(A,{className:"inline"})]})}),s.jsx("div",{className:"brands-list border-t p-2 h-[400px] overflow-y-auto",children:s.jsxs("div",{className:"popular-brands text-center",children:[s.jsx("p",{className:"text-sm bg-gradient-green text-white px-3 py-2 mb-2 rounded-xl",children:"POPULAR BRANDS"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:l?s.jsx(se,{}):p&&p.map(d=>s.jsxs("div",{className:"brand-select ",children:[s.jsx("input",{type:"checkbox",id:d.brand_id,className:"hidden"}),s.jsx("label",{htmlFor:d.brand_id,className:" border rounded-2xl p-2",children:s.jsxs("div",{className:"text-center",onClick:()=>f(te(d.brand_id)),children:[s.jsx("img",{src:d.brand_logo,alt:"brand-logo",className:"w-[40px] h-[40px] object-contain mx-auto"}),s.jsx("p",{className:"brand-name capitalize text-sm truncate",children:d.brand_name}),s.jsxs("p",{className:"brand-product-count text-sm",children:["(",d.item_count,")"]})]})})]},d.brand_id))}),s.jsx("p",{className:"text-sm bg-gradient-green text-white px-3 py-2 my-3 rounded-xl",children:"OTHER BRANDS"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:l?s.jsx(se,{}):b&&b.map(d=>s.jsxs("div",{className:"brand-select ",children:[s.jsx("input",{type:"checkbox",id:d.brand_id,className:"hidden"}),s.jsx("label",{htmlFor:d.brand_id,className:" border rounded-2xl p-2",children:s.jsxs("div",{className:"text-center",onClick:()=>f(te(d.brand_id)),children:[s.jsx("img",{src:d.brand_logo,alt:"brand-logo",className:"w-[40px] h-[40px] object-contain mx-auto"}),s.jsx("p",{className:"brand-name capitalize text-sm truncate",children:d.brand_name}),s.jsxs("p",{className:"brand-product-count text-sm",children:["(",d.item_count,")"]})]})})]},d.brand_id))})]})})]})}),s.jsx("div",{className:"product_statewise",children:s.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"STATES"}),s.jsx(A,{className:"inline"})]})}),s.jsx("div",{className:"state-list border-t p-2 max-h-[400px] overflow-y-auto",children:s.jsx("ul",{children:n&&n.filter(d=>d.item_count!=0).map(d=>s.jsxs("li",{className:"state-and-district-list ",children:[s.jsx("input",{type:"checkbox",id:d.state_name,className:"hidden"}),s.jsx("label",{htmlFor:d.state_name,className:" bg-white shadow m-3 p-3 rounded-2xl text-sm items-center justify-between transition-[0.3s] hover:scale-105",onClick:()=>f(ve(d.state_id)),children:s.jsxs("div",{className:"flex justify-between",children:[s.jsx("span",{className:"inline-block",children:d.state_name}),s.jsxs("span",{className:"text-nowrap inline-block",children:[d.item_count," Items"]})]})})]},d.state_id))})})]})}),s.jsx("div",{className:"product_districtwise",children:s.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none ",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"BY YEAR"}),s.jsx(A,{className:"inline"})]})}),s.jsx("div",{className:"state-list border-t p-2 max-h-[400px] overflow-y-auto",children:s.jsx("ul",{children:m&&m.filter(d=>d.item_count!=0).map(d=>s.jsxs("li",{className:"year-of-manufacture",children:[s.jsx("input",{type:"checkbox",id:d.year,className:"hidden"}),s.jsx("label",{htmlFor:d.year,className:" bg-white shadow m-3 p-3 rounded-2xl text-sm justify-between hover:scale-105",children:s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{children:d.year}),s.jsxs("span",{className:"text-nowrap",children:[d.item_count," Items"]})]})})]},d.year))})})]})})]}):null,s.jsx("div",{className:"product_by_year",children:s.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none ",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"PRICE"}),s.jsx(A,{className:"inline"})]})}),s.jsxs("ul",{children:[s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"})]})]})})]})]})})},Qe=({sort_btn_state:e,sortBtnActive:t,setSortBtnActive:r})=>{const[i,o]=u.useState(0),{setPriceSort:a}=u.useContext(le),l=n=>{switch(o(n),n){case 1:a("desc"),r(!t),window.scrollTo(0,0);break;case 2:a("asc"),r(!t),window.scrollTo(0,0);break;case 3:a("nf"),r(!t),window.scrollTo(0,0);break}};return s.jsx(s.Fragment,{children:s.jsx("section",{className:"sort-product-tab-section  md:sticky top-[155px] z-10 lg:py-2 bg-whitesmoke",children:s.jsxs("div",{className:e?"active bg-white mx-3 mt-3 flex lg:flex-row flex-col items-center rounded-3xl md:gap-5":" bg-white mx-3 mt-3 flex lg:flex-row flex-col items-center rounded-3xl md:gap-5",children:[s.jsx("p",{className:"label-sort text-white bg-darkGreen px-5 py-2 rounded-3xl m-2",children:"SORT BY"}),s.jsxs("div",{className:"sort-buttons flex lg:flex-row items-center flex-col",children:[s.jsx("button",{onClick:()=>l(1),className:`px-4 py-2 m-2 ${i===1?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Price High to Low"}),s.jsx("button",{onClick:()=>l(2),className:`px-4 py-2 m-2 ${i===2?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Price Low to High"}),s.jsx("button",{onClick:()=>l(3),className:`px-4 py-2 m-2 ${i===3?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Newest First"})]})]})})})};let Ye={data:""},Ke=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Ye,Ve=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ue=/\/\*[^]*?\*\/|  +/g,re=/\n+/g,P=(e,t)=>{let r="",i="",o="";for(let a in e){let l=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+l+";":i+=a[1]=="f"?P(l,a):a+"{"+P(l,a[1]=="k"?"":t)+"}":typeof l=="object"?i+=P(l,t?t.replace(/([^,])+/g,n=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,n):n?n+" "+c:c)):a):l!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=P.p?P.p(a,l):a+":"+l+";")}return r+(t&&o?t+"{"+o+"}":o)+i},w={},ce=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+ce(e[r]);return t}return e},We=(e,t,r,i,o)=>{let a=ce(e),l=w[a]||(w[a]=(c=>{let m=0,x=11;for(;m<c.length;)x=101*x+c.charCodeAt(m++)>>>0;return"go"+x})(a));if(!w[l]){let c=a!==e?e:(m=>{let x,p,b=[{}];for(;x=Ve.exec(m.replace(Ue,""));)x[4]?b.shift():x[3]?(p=x[3].replace(re," ").trim(),b.unshift(b[0][p]=b[0][p]||{})):b[0][x[1]]=x[2].replace(re," ").trim();return b[0]})(e);w[l]=P(o?{["@keyframes "+l]:c}:c,r?"":"."+l)}let n=r&&w.g?w.g:null;return r&&(w.g=w[l]),((c,m,x,p)=>{p?m.data=m.data.replace(p,c):m.data.indexOf(c)===-1&&(m.data=x?c+m.data:m.data+c)})(w[l],t,i,n),l},Je=(e,t,r)=>e.reduce((i,o,a)=>{let l=t[a];if(l&&l.call){let n=l(r),c=n&&n.props&&n.props.className||/^go/.test(n)&&n;l=c?"."+c:n&&typeof n=="object"?n.props?"":P(n,""):n===!1?"":n}return i+o+(l??"")},"");function D(e){let t=this||{},r=e.call?e(t.p):e;return We(r.unshift?r.raw?Je(r,[].slice.call(arguments,1),t.p):r.reduce((i,o)=>Object.assign(i,o&&o.call?o(t.p):o),{}):r,Ke(t.target),t.g,t.o,t.k)}let de,Y,K;D.bind({g:1});let N=D.bind({k:1});function Ze(e,t,r,i){P.p=t,de=e,Y=r,K=i}function S(e,t){let r=this||{};return function(){let i=arguments;function o(a,l){let n=Object.assign({},a),c=n.className||o.className;r.p=Object.assign({theme:Y&&Y()},n),r.o=/ *go\d+/.test(c),n.className=D.apply(r,i)+(c?" "+c:"");let m=e;return e[0]&&(m=n.as||e,delete n.as),K&&m[0]&&K(n),de(m,n)}return o}}var Xe=e=>typeof e=="function",z=(e,t)=>Xe(e)?e(t):e,et=(()=>{let e=0;return()=>(++e).toString()})(),ue=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),tt=20,I=new Map,st=1e3,ae=e=>{if(I.has(e))return;let t=setTimeout(()=>{I.delete(e),$({type:4,toastId:e})},st);I.set(e,t)},rt=e=>{let t=I.get(e);t&&clearTimeout(t)},V=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,tt)};case 1:return t.toast.id&&rt(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return e.toasts.find(a=>a.id===r.id)?V(e,{type:1,toast:r}):V(e,{type:0,toast:r});case 3:let{toastId:i}=t;return i?ae(i):e.toasts.forEach(a=>{ae(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===i||i===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+o}))}}},M=[],T={toasts:[],pausedAt:void 0},$=e=>{T=V(T,e),M.forEach(t=>{t(T)})},at={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},it=(e={})=>{let[t,r]=u.useState(T);u.useEffect(()=>(M.push(r),()=>{let o=M.indexOf(r);o>-1&&M.splice(o,1)}),[t]);let i=t.toasts.map(o=>{var a,l;return{...e,...e[o.type],...o,duration:o.duration||((a=e[o.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||at[o.type],style:{...e.style,...(l=e[o.type])==null?void 0:l.style,...o.style}}});return{...t,toasts:i}},nt=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||et()}),C=e=>(t,r)=>{let i=nt(t,e,r);return $({type:2,toast:i}),i.id},y=(e,t)=>C("blank")(e,t);y.error=C("error");y.success=C("success");y.loading=C("loading");y.custom=C("custom");y.dismiss=e=>{$({type:3,toastId:e})};y.remove=e=>$({type:4,toastId:e});y.promise=(e,t,r)=>{let i=y.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(o=>(y.success(z(t.success,o),{id:i,...r,...r==null?void 0:r.success}),o)).catch(o=>{y.error(z(t.error,o),{id:i,...r,...r==null?void 0:r.error})}),e};var ot=(e,t)=>{$({type:1,toast:{id:e,height:t}})},lt=()=>{$({type:5,time:Date.now()})},ct=e=>{let{toasts:t,pausedAt:r}=it(e);u.useEffect(()=>{if(r)return;let a=Date.now(),l=t.map(n=>{if(n.duration===1/0)return;let c=(n.duration||0)+n.pauseDuration-(a-n.createdAt);if(c<0){n.visible&&y.dismiss(n.id);return}return setTimeout(()=>y.dismiss(n.id),c)});return()=>{l.forEach(n=>n&&clearTimeout(n))}},[t,r]);let i=u.useCallback(()=>{r&&$({type:6,time:Date.now()})},[r]),o=u.useCallback((a,l)=>{let{reverseOrder:n=!1,gutter:c=8,defaultPosition:m}=l||{},x=t.filter(f=>(f.position||m)===(a.position||m)&&f.height),p=x.findIndex(f=>f.id===a.id),b=x.filter((f,g)=>g<p&&f.visible).length;return x.filter(f=>f.visible).slice(...n?[b+1]:[0,b]).reduce((f,g)=>f+(g.height||0)+c,0)},[t]);return{toasts:t,handlers:{updateHeight:ot,startPause:lt,endPause:i,calculateOffset:o}}},dt=N`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ut=N`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,mt=N`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,xt=S("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${dt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ut} 0.15s ease-out forwards;
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
    animation: ${mt} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,pt=N`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ht=S("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${pt} 1s linear infinite;
`,ft=N`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,bt=N`
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
}`,gt=S("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ft} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${bt} 0.2s ease-out forwards;
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
`,yt=S("div")`
  position: absolute;
`,vt=S("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,jt=N`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,wt=S("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${jt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Nt=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return t!==void 0?typeof t=="string"?u.createElement(wt,null,t):t:r==="blank"?null:u.createElement(vt,null,u.createElement(ht,{...i}),r!=="loading"&&u.createElement(yt,null,r==="error"?u.createElement(xt,{...i}):u.createElement(gt,{...i})))},kt=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,_t=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Pt="0%{opacity:0;} 100%{opacity:1;}",St="0%{opacity:1;} 100%{opacity:0;}",$t=S("div")`
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
`,Et=S("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ft=(e,t)=>{let r=e.includes("top")?1:-1,[i,o]=ue()?[Pt,St]:[kt(r),_t(r)];return{animation:t?`${N(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${N(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ct=u.memo(({toast:e,position:t,style:r,children:i})=>{let o=e.height?Ft(e.position||t||"top-center",e.visible):{opacity:0},a=u.createElement(Nt,{toast:e}),l=u.createElement(Et,{...e.ariaProps},z(e.message,e));return u.createElement($t,{className:e.className,style:{...o,...r,...e.style}},typeof i=="function"?i({icon:a,message:l}):u.createElement(u.Fragment,null,a,l))});Ze(u.createElement);var Rt=({id:e,className:t,style:r,onHeightUpdate:i,children:o})=>{let a=u.useCallback(l=>{if(l){let n=()=>{let c=l.getBoundingClientRect().height;i(e,c)};n(),new MutationObserver(n).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return u.createElement("div",{ref:a,className:t,style:r},o)},Ot=(e,t)=>{let r=e.includes("top"),i=r?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:ue()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...i,...o}},At=D`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,L=16,Lt=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:o,containerStyle:a,containerClassName:l})=>{let{toasts:n,handlers:c}=ct(r);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:L,left:L,right:L,bottom:L,pointerEvents:"none",...a},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},n.map(m=>{let x=m.position||t,p=c.calculateOffset(m,{reverseOrder:e,gutter:i,defaultPosition:t}),b=Ot(x,p);return u.createElement(Rt,{id:m.id,key:m.id,onHeightUpdate:c.updateHeight,className:m.visible?At:"",style:b},m.type==="custom"?z(m.message,m):o?o(m):u.createElement(Ct,{toast:m,position:x}))}))},Bt=y,U=new Map,B=new WeakMap,ie=0,It=void 0;function Mt(e){return e?(B.has(e)||(ie+=1,B.set(e,ie.toString())),B.get(e)):"0"}function Tt(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Mt(e.root):e[t]}`).toString()}function zt(e){const t=Tt(e);let r=U.get(t);if(!r){const i=new Map;let o;const a=new IntersectionObserver(l=>{l.forEach(n=>{var c;const m=n.isIntersecting&&o.some(x=>n.intersectionRatio>=x);e.trackVisibility&&typeof n.isVisible>"u"&&(n.isVisible=m),(c=i.get(n.target))==null||c.forEach(x=>{x(m,n)})})},e);o=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:a,elements:i},U.set(t,r)}return r}function Dt(e,t,r={},i=It){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const c=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:o,observer:a,elements:l}=zt(r),n=l.get(e)||[];return l.has(e)||l.set(e,n),n.push(t),a.observe(e),function(){n.splice(n.indexOf(t),1),n.length===0&&(l.delete(e),a.unobserve(e)),l.size===0&&(a.disconnect(),U.delete(o))}}function Gt({threshold:e,delay:t,trackVisibility:r,rootMargin:i,root:o,triggerOnce:a,skip:l,initialInView:n,fallbackInView:c,onChange:m}={}){var x;const[p,b]=u.useState(null),f=u.useRef(),[g,v]=u.useState({inView:!!n,entry:void 0});f.current=m,u.useEffect(()=>{if(l||!p)return;let j;return j=Dt(p,(G,F)=>{v({inView:G,entry:F}),f.current&&f.current(G,F),F.isIntersecting&&a&&j&&(j(),j=void 0)},{root:o,rootMargin:i,threshold:e,trackVisibility:r,delay:t},c),()=>{j&&j()}},[Array.isArray(e)?e.toString():e,p,o,i,a,l,r,c,t]);const d=(x=g.entry)==null?void 0:x.target,E=u.useRef();!p&&d&&!a&&!l&&E.current!==d&&(E.current=d,v({inView:!!n,entry:void 0}));const k=[b,g.inView,g.entry];return k.ref=k[0],k.inView=k[1],k.entry=k[2],k}const Ht=new Array(6).fill(!0),ss=()=>{var Z;const{category:e,type:t}=ne(),[r,i]=u.useState(0),[o,a]=u.useState(null),{priceSort:l}=u.useContext(le),[n,c]=u.useState(null),[m,x]=u.useState(null),[p,b]=u.useState(null),[f,g]=u.useState(null),[v,d]=u.useState(null),[E,k]=u.useState(null),[j,G]=u.useState(null),[F,qt]=u.useState(0),[H,Qt]=u.useState(12),{data:R,hasNextPage:q,fetchNextPage:me,isFetchingNextPage:Yt,isLoading:xe,isError:Kt,error:Vt}=Ge({queryKey:["category-wise-all-product",r,o,F,H,l,n,m,p,f,v,E,j],queryFn:({pageParam:_})=>Se(r,o,l,n,m,p,f,v,E,j,_*H,H),getNextPageParam:(_,h)=>_&&_.length===12?h.length+1:void 0,initialPageParam:0}),{filterBtnState:Ut,setFilterBtnState:pe}=u.useContext(oe),[Q,W]=u.useState(!1),he=()=>{W(!Q)},{ref:fe,inView:J}=Gt({threshold:0});return u.useEffect(()=>{J&&(q?me():Bt.success("All products are loaded!",{duration:5e3}))},[J,q]),u.useEffect(()=>{e==="tractor"?(i(1),a(t)):e==="goods-vehicle"?(i(3),a(t)):e==="harvester"?(i(4),a(t)):e==="implements"?(i(5),a(t)):e==="tyre"?(i(7),a(t)):e==="agri-inputs"&&(t==="seeds"&&i(6),t==="pesticides"&&i(8),t==="fertilizer"&&i(9))},[e,t]),s.jsxs(s.Fragment,{children:[s.jsx(Re,{}),s.jsx(Oe,{}),s.jsx(He,{}),s.jsx(Lt,{}),s.jsx("section",{className:"mobile-filter-and-sort-btn lg:hidden block bg-lightgreen sticky md:top-[147px] top-[62px] z-10",children:s.jsxs("div",{className:"container px-10  grid grid-cols-2",children:[s.jsxs("button",{type:"button",className:"sort-btn text-lg text-white border-r border-white h-full py-2",onClick:()=>pe(!0),children:[s.jsx(Ae,{className:"inline mb-1"})," Filter"]}),s.jsxs("button",{type:"button",className:"sort-btn text-lg text-white",onClick:he,children:[s.jsx(Le,{className:"inline mb-1"})," Sort"]})]})}),s.jsxs("main",{className:"products-container-wrapper container bg-whitesmoke md:px-10 ",children:[s.jsx(qe,{categoryId:r,type:t,categoryProduct:R}),s.jsx(Qe,{sort_btn_state:Q,sortBtnActive:Q,setSortBtnActive:W}),s.jsx("section",{className:"category-wise-all-product",children:xe?s.jsx("div",{className:"product-skeleton grid md:grid-cols-3 2xl:grid-cols-4 grid-cols-2 px-5 gap-x-4",children:Ht.map((_,h)=>s.jsx(Te,{},h))}):s.jsxs("div",{className:"product-list-container mb-5",children:[s.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 md:px-5  px-2 md:gap-x-4 gap-x-2",children:(Z=R==null?void 0:R.pages)==null?void 0:Z.map(_=>_&&_.map(h=>s.jsx(_e,{to:`${Be}/${e}/${t}/${h.id}`,children:s.jsx(Me,{product_full_details:h,product_image:h.front_image?h.front_image:h.image1,product_title:`${h.brand_name} ${h.model_name}`=="Others Others"||`${h.brand_name} ${h.model_name}`=="undefined undefined"||`${h.brand_name} ${h.model_name}`=="null null"?h.title:`${h.brand_name} ${h.model_name}`,product_location:h.district_name,product_pricing:h.price,distance_product:h.distance,rent_type:t==="rent"&&h.rent_type?` / ${h.rent_type.slice(4)}`:""})},h.id)))}),q?s.jsxs("div",{ref:fe,className:"lod-more-product flex items-center gap-2 justify-center w-full mt-5",children:[s.jsxs("div",{className:"relative",children:[s.jsx("span",{className:"loader"}),s.jsx("img",{src:Pe,alt:"this is a icon of preloader",className:"absolute top-[49.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg"})]}),s.jsx("span",{className:"text-darkGreen text-2xl",children:"Loading More"})]}):null]})})]}),s.jsx(Ie,{})]})};export{ss as default};
