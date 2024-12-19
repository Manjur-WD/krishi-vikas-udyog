import{v as K,w as ie,x as ne,y as X,j as s,r as u,F as ee,z as oe,A as le,B as ce,C as de,L as ue,D as xe,E as me}from"./index-BHvSYwXL.js";import{Q as pe,c as he,d as ge,u as C,e as fe,f as R,H as be,b as ve,g as ye,h as je,B as we,F as Ne}from"./MobileScreenNav-N6iDb331.js";import{P as ke}from"./ProductCard-gpHZsbFL.js";import{P as Pe}from"./ProductCardSkeleton-DplEJhNp.js";import{b as _e}from"./img_hero-DAQ5Jl1R.js";import"./index-7vwdJfgr.js";var Se=class extends pe{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:K()},t)}getOptimisticResult(e){return e.behavior=K(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){var m,S;const{state:r}=e,i=super.createResult(e,t),{isFetching:n,isRefetching:a,isError:l,isRefetchError:o}=i,c=(S=(m=r.fetchMeta)==null?void 0:m.fetchMore)==null?void 0:S.direction,d=l&&c==="forward",x=n&&c==="forward",h=l&&c==="backward",g=n&&c==="backward";return{...i,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:ie(t,r.data),hasPreviousPage:ne(t,r.data),isFetchNextPageError:d,isFetchingNextPage:x,isFetchPreviousPageError:h,isFetchingPreviousPage:g,isRefetchError:o&&!d&&!h,isRefetching:a&&!x&&!g}}};function $e(e,t){return he(e,Se)}const Ee=()=>{const{category:e,type:t}=X();return s.jsx(s.Fragment,{children:s.jsx("section",{className:"breadcrumb flex justify-center items-center md:h-[300px] h-[200px]",style:{backgroundImage:`linear-gradient(#13693a, #13693a6e),url(${_e})`,backgroundSize:"cover",backgroundPosition:"center"},children:s.jsxs("div",{className:"breadcrumb-content",children:[s.jsxs("div",{className:"breadcrumb-links flex justify-center items-center md:text-2xl text-white",children:[s.jsx("p",{className:"hover:text-lightgreen px-3",children:"Home"}),s.jsx(ge,{}),s.jsx("p",{className:"hover:text-lightgreen px-3 capitalize ",children:e==="goods-vehicle"?"goods vehicle":e==="agri-inputs"?"agri inputs":e})]}),s.jsx("p",{className:"text-lightgreen md:text-6xl text-3xl font-bold text-center mt-3 uppercase",style:{textShadow:"0 0 15px black"},children:e==="goods-vehicle"?`${t==="old"?"used":t} goods vehicle`:e==="agri-inputs"?t:`${t==="old"?"used":t} ${e}`})]})})})},U=()=>s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:s.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),s.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:s.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),s.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:s.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),s.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:s.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),s.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:s.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),s.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:s.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})})]}),Fe=({categoryId:e,type:t})=>{const{filterBtnState:r,setFilterBtnState:i}=u.useContext(ee);console.log(e),console.log(t);const{data:n,isLoading:a}=C({queryKey:["brand-list",e,t],queryFn:()=>oe(e,t)}),{data:l,isLoading:o}=C({queryKey:["state-district-list",e,t],queryFn:()=>le(e,t)}),{data:c,isLoading:d}=C({queryKey:["year-of-purchase-list",e,t],queryFn:()=>ce(e,t)}),{data:x,isLoading:h}=C({queryKey:["maxmin-price-list",e,t],queryFn:()=>de(e,t)}),g=n?n.filter(m=>m.popular===1&&m.item_count!=0):[],f=n?n.filter(m=>m.item_count!=0):[];return console.log(l),console.log(c),console.log(x),s.jsx(s.Fragment,{children:s.jsxs("aside",{className:r?"filter-product-sidebar active":"filter-product-sidebar",children:[s.jsxs("div",{className:"lg:hidden filter-headeing flex items-center px-5 py-2 sticky -top-[10px] rounded-xl",children:[s.jsx(fe,{className:"text-3xl text-white absolute",onClick:()=>{i(!1)}}),s.jsx("p",{className:"text-xl text-white text-center w-full ",children:"Filter"})]}),s.jsxs("section",{className:"w-full bg-white my-3 p-2 rounded-3xl shadow",children:[n&&n.length>0&&s.jsx("div",{className:"product__brands",children:s.jsxs("details",{open:!0,className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"BRANDS"}),s.jsx(R,{className:"inline"})]})}),s.jsxs("div",{className:"brands-list border-t p-2 h-[400px] overflow-y-auto",children:[s.jsxs("div",{className:"popular-brands text-center",children:[s.jsx("p",{className:"text-sm bg-gradient-green text-white px-3 py-2 mb-2 rounded-xl",children:"POPULAR BRANDS"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:a?s.jsx(U,{}):g&&g.map(m=>s.jsxs("div",{className:"brand-select text-center border rounded-2xl p-2",children:[s.jsx("img",{src:m.brand_logo,alt:"brand-logo",className:"w-[40px] h-[40px] object-contain mx-auto"}),s.jsx("p",{className:"brand-name capitalize text-sm truncate",children:m.brand_name}),s.jsxs("p",{className:"brand-product-count text-sm",children:["(",m.item_count,")"]})]},m.brand_id))}),s.jsx("p",{className:"text-sm bg-gradient-green text-white px-3 py-2 my-3 rounded-xl",children:"ALL BRANDS"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:a?s.jsx(U,{}):f&&f.map(m=>s.jsxs("div",{className:"brand-select text-center border rounded-2xl p-2",children:[s.jsx("img",{src:m.brand_logo,alt:"brand-logo",className:"w-[40px] h-[40px] object-contain mx-auto"}),s.jsx("p",{className:"brand-name capitalize text-sm truncate",children:m.brand_name}),s.jsxs("p",{className:"brand-product-count text-sm",children:["(",m.item_count,")"]})]},m.brand_id))})]}),s.jsx("div",{className:"all-brands"})]})]})}),s.jsx("div",{className:"product_statewise",children:s.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none ",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"STATES"}),s.jsx(R,{className:"inline"})]})}),s.jsxs("ul",{children:[s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"})]})]})}),s.jsx("div",{className:"product_districtwise",children:s.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none ",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"DISTRICT"}),s.jsx(R,{className:"inline"})]})}),s.jsxs("ul",{children:[s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"})]})]})}),s.jsx("div",{className:"product_by_year",children:s.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none ",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"BY YEAR"}),s.jsx(R,{className:"inline"})]})}),s.jsxs("ul",{children:[s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"})]})]})})]})]})})},Ae=({sort_btn_state:e})=>{const[t,r]=u.useState(0),i=n=>{r(n)};return s.jsx(s.Fragment,{children:s.jsx("section",{className:"sort-product-tab-section  md:sticky top-[155px] z-10 lg:py-2 bg-whitesmoke",children:s.jsxs("div",{className:e?"active bg-white mx-3 mt-3 flex lg:flex-row flex-col items-center rounded-3xl md:gap-5":" bg-white mx-3 mt-3 flex lg:flex-row flex-col items-center rounded-3xl md:gap-5",children:[s.jsx("p",{className:"label-sort text-white bg-darkGreen px-5 py-2 rounded-3xl m-2",children:"SORT BY"}),s.jsxs("div",{className:"sort-buttons flex lg:flex-row items-center flex-col",children:[s.jsx("button",{onClick:()=>i(1),className:`px-4 py-2 m-2 ${t===1?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Price High to Low"}),s.jsx("button",{onClick:()=>i(2),className:`px-4 py-2 m-2 ${t===2?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Price Low to High"}),s.jsx("button",{onClick:()=>i(3),className:`px-4 py-2 m-2 ${t===3?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Newest First"})]})]})})})};let Ce={data:""},Re=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Ce,Le=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Oe=/\/\*[^]*?\*\/|  +/g,W=/\n+/g,k=(e,t)=>{let r="",i="",n="";for(let a in e){let l=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+l+";":i+=a[1]=="f"?k(l,a):a+"{"+k(l,a[1]=="k"?"":t)+"}":typeof l=="object"?i+=k(l,t?t.replace(/([^,])+/g,o=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,o):o?o+" "+c:c)):a):l!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=k.p?k.p(a,l):a+":"+l+";")}return r+(t&&n?t+"{"+n+"}":n)+i},j={},te=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+te(e[r]);return t}return e},Be=(e,t,r,i,n)=>{let a=te(e),l=j[a]||(j[a]=(c=>{let d=0,x=11;for(;d<c.length;)x=101*x+c.charCodeAt(d++)>>>0;return"go"+x})(a));if(!j[l]){let c=a!==e?e:(d=>{let x,h,g=[{}];for(;x=Le.exec(d.replace(Oe,""));)x[4]?g.shift():x[3]?(h=x[3].replace(W," ").trim(),g.unshift(g[0][h]=g[0][h]||{})):g[0][x[1]]=x[2].replace(W," ").trim();return g[0]})(e);j[l]=k(n?{["@keyframes "+l]:c}:c,r?"":"."+l)}let o=r&&j.g?j.g:null;return r&&(j.g=j[l]),((c,d,x,h)=>{h?d.data=d.data.replace(h,c):d.data.indexOf(c)===-1&&(d.data=x?c+d.data:d.data+c)})(j[l],t,i,o),l},Me=(e,t,r)=>e.reduce((i,n,a)=>{let l=t[a];if(l&&l.call){let o=l(r),c=o&&o.props&&o.props.className||/^go/.test(o)&&o;l=c?"."+c:o&&typeof o=="object"?o.props?"":k(o,""):o===!1?"":o}return i+n+(l??"")},"");function D(e){let t=this||{},r=e.call?e(t.p):e;return Be(r.unshift?r.raw?Me(r,[].slice.call(arguments,1),t.p):r.reduce((i,n)=>Object.assign(i,n&&n.call?n(t.p):n),{}):r,Re(t.target),t.g,t.o,t.k)}let se,G,q;D.bind({g:1});let w=D.bind({k:1});function ze(e,t,r,i){k.p=t,se=e,G=r,q=i}function P(e,t){let r=this||{};return function(){let i=arguments;function n(a,l){let o=Object.assign({},a),c=o.className||n.className;r.p=Object.assign({theme:G&&G()},o),r.o=/ *go\d+/.test(c),o.className=D.apply(r,i)+(c?" "+c:"");let d=e;return e[0]&&(d=o.as||e,delete o.as),q&&d[0]&&q(o),se(d,o)}return n}}var Te=e=>typeof e=="function",T=(e,t)=>Te(e)?e(t):e,De=(()=>{let e=0;return()=>(++e).toString()})(),re=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Ie=20,B=new Map,Ge=1e3,Z=e=>{if(B.has(e))return;let t=setTimeout(()=>{B.delete(e),_({type:4,toastId:e})},Ge);B.set(e,t)},qe=e=>{let t=B.get(e);t&&clearTimeout(t)},H=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Ie)};case 1:return t.toast.id&&qe(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return e.toasts.find(a=>a.id===r.id)?H(e,{type:1,toast:r}):H(e,{type:0,toast:r});case 3:let{toastId:i}=t;return i?Z(i):e.toasts.forEach(a=>{Z(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===i||i===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+n}))}}},M=[],z={toasts:[],pausedAt:void 0},_=e=>{z=H(z,e),M.forEach(t=>{t(z)})},He={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Qe=(e={})=>{let[t,r]=u.useState(z);u.useEffect(()=>(M.push(r),()=>{let n=M.indexOf(r);n>-1&&M.splice(n,1)}),[t]);let i=t.toasts.map(n=>{var a,l;return{...e,...e[n.type],...n,duration:n.duration||((a=e[n.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||He[n.type],style:{...e.style,...(l=e[n.type])==null?void 0:l.style,...n.style}}});return{...t,toasts:i}},Ve=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||De()}),E=e=>(t,r)=>{let i=Ve(t,e,r);return _({type:2,toast:i}),i.id},b=(e,t)=>E("blank")(e,t);b.error=E("error");b.success=E("success");b.loading=E("loading");b.custom=E("custom");b.dismiss=e=>{_({type:3,toastId:e})};b.remove=e=>_({type:4,toastId:e});b.promise=(e,t,r)=>{let i=b.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(n=>(b.success(T(t.success,n),{id:i,...r,...r==null?void 0:r.success}),n)).catch(n=>{b.error(T(t.error,n),{id:i,...r,...r==null?void 0:r.error})}),e};var Ye=(e,t)=>{_({type:1,toast:{id:e,height:t}})},Ke=()=>{_({type:5,time:Date.now()})},Ue=e=>{let{toasts:t,pausedAt:r}=Qe(e);u.useEffect(()=>{if(r)return;let a=Date.now(),l=t.map(o=>{if(o.duration===1/0)return;let c=(o.duration||0)+o.pauseDuration-(a-o.createdAt);if(c<0){o.visible&&b.dismiss(o.id);return}return setTimeout(()=>b.dismiss(o.id),c)});return()=>{l.forEach(o=>o&&clearTimeout(o))}},[t,r]);let i=u.useCallback(()=>{r&&_({type:6,time:Date.now()})},[r]),n=u.useCallback((a,l)=>{let{reverseOrder:o=!1,gutter:c=8,defaultPosition:d}=l||{},x=t.filter(f=>(f.position||d)===(a.position||d)&&f.height),h=x.findIndex(f=>f.id===a.id),g=x.filter((f,m)=>m<h&&f.visible).length;return x.filter(f=>f.visible).slice(...o?[g+1]:[0,g]).reduce((f,m)=>f+(m.height||0)+c,0)},[t]);return{toasts:t,handlers:{updateHeight:Ye,startPause:Ke,endPause:i,calculateOffset:n}}},We=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Ze=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Je=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Xe=P("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${We} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ze} 0.15s ease-out forwards;
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
    animation: ${Je} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,et=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,tt=P("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${et} 1s linear infinite;
`,st=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,rt=w`
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
}`,at=P("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${st} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${rt} 0.2s ease-out forwards;
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
`,it=P("div")`
  position: absolute;
`,nt=P("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ot=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,lt=P("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ot} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ct=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return t!==void 0?typeof t=="string"?u.createElement(lt,null,t):t:r==="blank"?null:u.createElement(nt,null,u.createElement(tt,{...i}),r!=="loading"&&u.createElement(it,null,r==="error"?u.createElement(Xe,{...i}):u.createElement(at,{...i})))},dt=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ut=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,xt="0%{opacity:0;} 100%{opacity:1;}",mt="0%{opacity:1;} 100%{opacity:0;}",pt=P("div")`
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
`,ht=P("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,gt=(e,t)=>{let r=e.includes("top")?1:-1,[i,n]=re()?[xt,mt]:[dt(r),ut(r)];return{animation:t?`${w(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ft=u.memo(({toast:e,position:t,style:r,children:i})=>{let n=e.height?gt(e.position||t||"top-center",e.visible):{opacity:0},a=u.createElement(ct,{toast:e}),l=u.createElement(ht,{...e.ariaProps},T(e.message,e));return u.createElement(pt,{className:e.className,style:{...n,...r,...e.style}},typeof i=="function"?i({icon:a,message:l}):u.createElement(u.Fragment,null,a,l))});ze(u.createElement);var bt=({id:e,className:t,style:r,onHeightUpdate:i,children:n})=>{let a=u.useCallback(l=>{if(l){let o=()=>{let c=l.getBoundingClientRect().height;i(e,c)};o(),new MutationObserver(o).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return u.createElement("div",{ref:a,className:t,style:r},n)},vt=(e,t)=>{let r=e.includes("top"),i=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:re()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...i,...n}},yt=D`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,L=16,jt=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:n,containerStyle:a,containerClassName:l})=>{let{toasts:o,handlers:c}=Ue(r);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:L,left:L,right:L,bottom:L,pointerEvents:"none",...a},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},o.map(d=>{let x=d.position||t,h=c.calculateOffset(d,{reverseOrder:e,gutter:i,defaultPosition:t}),g=vt(x,h);return u.createElement(bt,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?yt:"",style:g},d.type==="custom"?T(d.message,d):n?n(d):u.createElement(ft,{toast:d,position:x}))}))},wt=b,Q=new Map,O=new WeakMap,J=0,Nt=void 0;function kt(e){return e?(O.has(e)||(J+=1,O.set(e,J.toString())),O.get(e)):"0"}function Pt(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?kt(e.root):e[t]}`).toString()}function _t(e){const t=Pt(e);let r=Q.get(t);if(!r){const i=new Map;let n;const a=new IntersectionObserver(l=>{l.forEach(o=>{var c;const d=o.isIntersecting&&n.some(x=>o.intersectionRatio>=x);e.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=d),(c=i.get(o.target))==null||c.forEach(x=>{x(d,o)})})},e);n=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:a,elements:i},Q.set(t,r)}return r}function St(e,t,r={},i=Nt){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const c=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:n,observer:a,elements:l}=_t(r),o=l.get(e)||[];return l.has(e)||l.set(e,o),o.push(t),a.observe(e),function(){o.splice(o.indexOf(t),1),o.length===0&&(l.delete(e),a.unobserve(e)),l.size===0&&(a.disconnect(),Q.delete(n))}}function $t({threshold:e,delay:t,trackVisibility:r,rootMargin:i,root:n,triggerOnce:a,skip:l,initialInView:o,fallbackInView:c,onChange:d}={}){var x;const[h,g]=u.useState(null),f=u.useRef(),[m,S]=u.useState({inView:!!o,entry:void 0});f.current=d,u.useEffect(()=>{if(l||!h)return;let y;return y=St(h,(A,$)=>{S({inView:A,entry:$}),f.current&&f.current(A,$),$.isIntersecting&&a&&y&&(y(),y=void 0)},{root:n,rootMargin:i,threshold:e,trackVisibility:r,delay:t},c),()=>{y&&y()}},[Array.isArray(e)?e.toString():e,h,n,i,a,l,r,c,t]);const F=(x=m.entry)==null?void 0:x.target,I=u.useRef();!h&&F&&!a&&!l&&I.current!==F&&(I.current=F,S({inView:!!o,entry:void 0}));const v=[g,m.inView,m.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}const Et=new Array(6).fill(!0),Bt=()=>{var Y;const{category:e,type:t}=X(),[r,i]=u.useState(0),[n,a]=u.useState(""),[l,o]=u.useState(0),[c,d]=u.useState(12),{data:x,hasNextPage:h,fetchNextPage:g,isFetchingNextPage:f,isLoading:m,isError:S,error:F}=$e({queryKey:["category-wise-all-product",r,n,l,c],queryFn:({pageParam:N})=>me(r,n,N*c,c),getNextPageParam:(N,p)=>N&&N.length===12?p.length+1:void 0,initialPageParam:0}),{filterBtnState:I,setFilterBtnState:v}=u.useContext(ee),[y,A]=u.useState(!1),$=()=>{A(!y)},{ref:ae,inView:V}=$t({threshold:0});return u.useEffect(()=>{V&&(h?g():wt.success("All products are loaded!",{duration:5e3}))},[V,h]),u.useEffect(()=>{e==="tractor"?(i(1),a(t)):e==="goods-vehicle"?(i(3),a(t)):e==="harvester"?(i(4),a(t)):e==="implements"?(i(5),a(t)):e==="tyre"?(i(7),a(t)):e==="agri-inputs"&&(t==="seeds"&&i(6),t==="pesticides"&&i(8),t==="fertilizer"&&i(9))},[e,t]),s.jsxs(s.Fragment,{children:[s.jsx(be,{}),s.jsx(ve,{}),s.jsx(Ee,{}),s.jsx(jt,{}),s.jsx("section",{className:"mobile-filter-and-sort-btn lg:hidden block bg-lightgreen sticky md:top-[147px] top-[62px] z-10",children:s.jsxs("div",{className:"container px-10  grid grid-cols-2",children:[s.jsxs("button",{type:"button",className:"sort-btn text-lg text-white border-r border-white h-full py-2",onClick:()=>v(!0),children:[s.jsx(ye,{className:"inline mb-1"})," Filter"]}),s.jsxs("button",{type:"button",className:"sort-btn text-lg text-white",onClick:$,children:[s.jsx(je,{className:"inline mb-1"})," Sort"]})]})}),s.jsxs("main",{className:"products-container-wrapper container bg-whitesmoke md:px-10 ",children:[s.jsx(Fe,{categoryId:r,type:t}),s.jsx(Ae,{sort_btn_state:y}),s.jsx("section",{className:"category-wise-all-product",children:m?s.jsx("div",{className:"product-skeleton grid md:grid-cols-3 2xl:grid-cols-4 grid-cols-2 px-5 gap-x-4",children:Et.map((N,p)=>s.jsx(Pe,{},p))}):s.jsxs("div",{className:"product-list-container mb-5",children:[s.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 md:px-5  px-2 md:gap-x-4 gap-x-2",children:(Y=x==null?void 0:x.pages)==null?void 0:Y.map(N=>N&&N.map(p=>s.jsx(ue,{to:`${we}/${e}/${t}/${p.id}`,children:s.jsx(ke,{product_full_details:p,product_image:p.front_image?p.front_image:p.image1,product_title:`${p.brand_name} ${p.model_name}`=="Others Others"||`${p.brand_name} ${p.model_name}`=="undefined undefined"||`${p.brand_name} ${p.model_name}`=="null null"?p.title:`${p.brand_name} ${p.model_name}`,product_location:p.district_name,product_pricing:p.price,distance_product:p.distance,rent_type:t==="rent"&&p.rent_type?` / ${p.rent_type.slice(4)}`:""})},p.id)))}),h?s.jsxs("div",{ref:ae,className:"lod-more-product flex items-center gap-2 justify-center w-full mt-5",children:[s.jsxs("div",{className:"relative",children:[s.jsx("span",{className:"loader"}),s.jsx("img",{src:xe,alt:"this is a icon of preloader",className:"absolute top-[49.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg"})]}),s.jsx("span",{className:"text-darkGreen text-2xl",children:"Loading More"})]}):null]})})]}),s.jsx(Ne,{})]})};export{Bt as default};
