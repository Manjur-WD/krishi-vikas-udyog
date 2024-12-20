import{v as J,w as he,x as fe,y as re,j as s,r as d,F as ae,z as ge,A as be,B as ve,C as ye,S as ie,L as je,D as we,E as Ne}from"./index-CrU52Nxm.js";import{Q as ke,c as Pe,d as _e,u as R,e as Se,f as L,H as Ee,b as $e,g as Ce,h as Fe,B as Ae,F as Re}from"./MobileScreenNav-DW5gn-Gr.js";import{P as Le}from"./ProductCard-nKVKKlp4.js";import{P as Oe}from"./ProductCardSkeleton-CZdqmQWn.js";import{b as Be}from"./img_hero-DAQ5Jl1R.js";import"./index-Rec4DJui.js";var Ie=class extends ke{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:J()},t)}getOptimisticResult(e){return e.behavior=J(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){var b,m;const{state:r}=e,i=super.createResult(e,t),{isFetching:o,isRefetching:a,isError:l,isRefetchError:n}=i,c=(m=(b=r.fetchMeta)==null?void 0:b.fetchMore)==null?void 0:m.direction,u=l&&c==="forward",x=o&&c==="forward",h=l&&c==="backward",g=o&&c==="backward";return{...i,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:he(t,r.data),hasPreviousPage:fe(t,r.data),isFetchNextPageError:u,isFetchingNextPage:x,isFetchPreviousPageError:h,isFetchingPreviousPage:g,isRefetchError:n&&!u&&!h,isRefetching:a&&!x&&!g}}};function Me(e,t){return Pe(e,Ie)}const ze=()=>{const{category:e,type:t}=re();return s.jsx(s.Fragment,{children:s.jsx("section",{className:"breadcrumb flex justify-center items-center md:h-[300px] h-[200px]",style:{backgroundImage:`linear-gradient(#13693a, #13693a6e),url(${Be})`,backgroundSize:"cover",backgroundPosition:"center"},children:s.jsxs("div",{className:"breadcrumb-content",children:[s.jsxs("div",{className:"breadcrumb-links flex justify-center items-center md:text-2xl text-white",children:[s.jsx("p",{className:"hover:text-lightgreen px-3",children:"Home"}),s.jsx(_e,{}),s.jsx("p",{className:"hover:text-lightgreen px-3 capitalize ",children:e==="goods-vehicle"?"goods vehicle":e==="agri-inputs"?"agri inputs":e})]}),s.jsx("p",{className:"text-lightgreen md:text-6xl text-3xl font-bold text-center mt-3 uppercase",style:{textShadow:"0 0 15px black"},children:e==="goods-vehicle"?`${t==="old"?"used":t} goods vehicle`:e==="agri-inputs"?t:`${t==="old"?"used":t} ${e}`})]})})})},X=()=>s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:s.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),s.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:s.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),s.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:s.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),s.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:s.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),s.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:s.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),s.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:s.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})})]}),De=({categoryId:e,type:t,categoryProduct:r})=>{const{filterBtnState:i,setFilterBtnState:o}=d.useContext(ae);console.log(e),console.log(t);const{data:a,isLoading:l}=R({queryKey:["brand-list",e,t],queryFn:()=>ge(e,t),enabled:!!r}),{data:n,isLoading:c}=R({queryKey:["state-district-list",e,t],queryFn:()=>be(e,t),enabled:!!a}),{data:u,isLoading:x}=R({queryKey:["year-of-purchase-list",e,t],queryFn:()=>ve(e,t),enabled:!!n}),{data:h,isLoading:g}=R({queryKey:["maxmin-price-list",e,t],queryFn:()=>ye(e,t),enabled:!!u}),f=a?a.filter(m=>m.popular===1&&m.item_count!=0):[],b=a?a.filter(m=>m.item_count!=0):[];return console.log(n),console.log(u),console.log(h),s.jsx(s.Fragment,{children:s.jsxs("aside",{className:i?"filter-product-sidebar active":"filter-product-sidebar",children:[s.jsxs("div",{className:"lg:hidden filter-headeing flex items-center px-5 py-2 sticky -top-[10px] rounded-xl",children:[s.jsx(Se,{className:"text-3xl text-white absolute",onClick:()=>{o(!1)}}),s.jsx("p",{className:"text-xl text-white text-center w-full ",children:"Filter"})]}),s.jsxs("section",{className:"w-full bg-white my-3 p-2 rounded-3xl shadow",children:[a&&a.length>0&&s.jsx("div",{className:"product__brands",children:s.jsxs("details",{open:!0,className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"BRANDS"}),s.jsx(L,{className:"inline"})]})}),s.jsxs("div",{className:"brands-list border-t p-2 h-[400px] overflow-y-auto",children:[s.jsxs("div",{className:"popular-brands text-center",children:[s.jsx("p",{className:"text-sm bg-gradient-green text-white px-3 py-2 mb-2 rounded-xl",children:"POPULAR BRANDS"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:l?s.jsx(X,{}):f&&f.map(m=>s.jsxs("div",{className:"brand-select text-center border rounded-2xl p-2",children:[s.jsx("img",{src:m.brand_logo,alt:"brand-logo",className:"w-[40px] h-[40px] object-contain mx-auto"}),s.jsx("p",{className:"brand-name capitalize text-sm truncate",children:m.brand_name}),s.jsxs("p",{className:"brand-product-count text-sm",children:["(",m.item_count,")"]})]},m.brand_id))}),s.jsx("p",{className:"text-sm bg-gradient-green text-white px-3 py-2 my-3 rounded-xl",children:"ALL BRANDS"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:l?s.jsx(X,{}):b&&b.map(m=>s.jsxs("div",{className:"brand-select text-center border rounded-2xl p-2",children:[s.jsx("img",{src:m.brand_logo,alt:"brand-logo",className:"w-[40px] h-[40px] object-contain mx-auto"}),s.jsx("p",{className:"brand-name capitalize text-sm truncate",children:m.brand_name}),s.jsxs("p",{className:"brand-product-count text-sm",children:["(",m.item_count,")"]})]},m.brand_id))})]}),s.jsx("div",{className:"all-brands"})]})]})}),s.jsx("div",{className:"product_statewise",children:s.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"STATES"}),s.jsx(L,{className:"inline"})]})}),s.jsx("div",{className:"state-list border-t p-2 max-h-[400px] overflow-y-auto",children:s.jsx("ul",{children:n&&n.filter(m=>m.item_count!=0).map(m=>s.jsxs("li",{className:"state-and-district-list flex bg-white shadow m-3 p-3 rounded-2xl text-sm items-center justify-between hover:scale-105",children:[s.jsx("span",{children:m.state_name}),s.jsxs("span",{className:"text-nowrap",children:[m.item_count," ","Items"]})]},m.state_id))})})]})}),s.jsx("div",{className:"product_districtwise",children:s.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none ",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"BY YEAR"}),s.jsx(L,{className:"inline"})]})}),s.jsx("div",{className:"state-list border-t p-2 max-h-[400px] overflow-y-auto",children:s.jsx("ul",{children:u&&u.filter(m=>m.item_count!=0).map(m=>s.jsxs("li",{className:"state-and-district-list flex bg-white shadow m-3 p-3 rounded-2xl text-sm items-center justify-between hover:scale-105",children:[s.jsx("span",{children:m.year}),s.jsxs("span",{className:"text-nowrap",children:[m.item_count," ","Items"]})]},m.state_id))})})]})}),s.jsx("div",{className:"product_by_year",children:s.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[s.jsx("summary",{className:"list-none ",children:s.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[s.jsx("span",{children:"PRICE"}),s.jsx(L,{className:"inline"})]})}),s.jsxs("ul",{children:[s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"}),s.jsx("li",{children:"manjur"})]})]})})]})]})})},Te=({sort_btn_state:e})=>{const[t,r]=d.useState(0),{setPriceSort:i}=d.useContext(ie),o=a=>{switch(r(a),a){case 1:i("desc");break;case 2:i("asc");break;case 3:i("nf");break}};return s.jsx(s.Fragment,{children:s.jsx("section",{className:"sort-product-tab-section  md:sticky top-[155px] z-10 lg:py-2 bg-whitesmoke",children:s.jsxs("div",{className:e?"active bg-white mx-3 mt-3 flex lg:flex-row flex-col items-center rounded-3xl md:gap-5":" bg-white mx-3 mt-3 flex lg:flex-row flex-col items-center rounded-3xl md:gap-5",children:[s.jsx("p",{className:"label-sort text-white bg-darkGreen px-5 py-2 rounded-3xl m-2",children:"SORT BY"}),s.jsxs("div",{className:"sort-buttons flex lg:flex-row items-center flex-col",children:[s.jsx("button",{onClick:()=>o(1),className:`px-4 py-2 m-2 ${t===1?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Price High to Low"}),s.jsx("button",{onClick:()=>o(2),className:`px-4 py-2 m-2 ${t===2?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Price Low to High"}),s.jsx("button",{onClick:()=>o(3),className:`px-4 py-2 m-2 ${t===3?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Newest First"})]})]})})})};let Ge={data:""},qe=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Ge,He=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Qe=/\/\*[^]*?\*\/|  +/g,ee=/\n+/g,P=(e,t)=>{let r="",i="",o="";for(let a in e){let l=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+l+";":i+=a[1]=="f"?P(l,a):a+"{"+P(l,a[1]=="k"?"":t)+"}":typeof l=="object"?i+=P(l,t?t.replace(/([^,])+/g,n=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,n):n?n+" "+c:c)):a):l!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=P.p?P.p(a,l):a+":"+l+";")}return r+(t&&o?t+"{"+o+"}":o)+i},j={},ne=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+ne(e[r]);return t}return e},Ye=(e,t,r,i,o)=>{let a=ne(e),l=j[a]||(j[a]=(c=>{let u=0,x=11;for(;u<c.length;)x=101*x+c.charCodeAt(u++)>>>0;return"go"+x})(a));if(!j[l]){let c=a!==e?e:(u=>{let x,h,g=[{}];for(;x=He.exec(u.replace(Qe,""));)x[4]?g.shift():x[3]?(h=x[3].replace(ee," ").trim(),g.unshift(g[0][h]=g[0][h]||{})):g[0][x[1]]=x[2].replace(ee," ").trim();return g[0]})(e);j[l]=P(o?{["@keyframes "+l]:c}:c,r?"":"."+l)}let n=r&&j.g?j.g:null;return r&&(j.g=j[l]),((c,u,x,h)=>{h?u.data=u.data.replace(h,c):u.data.indexOf(c)===-1&&(u.data=x?c+u.data:u.data+c)})(j[l],t,i,n),l},Ve=(e,t,r)=>e.reduce((i,o,a)=>{let l=t[a];if(l&&l.call){let n=l(r),c=n&&n.props&&n.props.className||/^go/.test(n)&&n;l=c?"."+c:n&&typeof n=="object"?n.props?"":P(n,""):n===!1?"":n}return i+o+(l??"")},"");function T(e){let t=this||{},r=e.call?e(t.p):e;return Ye(r.unshift?r.raw?Ve(r,[].slice.call(arguments,1),t.p):r.reduce((i,o)=>Object.assign(i,o&&o.call?o(t.p):o),{}):r,qe(t.target),t.g,t.o,t.k)}let oe,Q,Y;T.bind({g:1});let w=T.bind({k:1});function Ke(e,t,r,i){P.p=t,oe=e,Q=r,Y=i}function _(e,t){let r=this||{};return function(){let i=arguments;function o(a,l){let n=Object.assign({},a),c=n.className||o.className;r.p=Object.assign({theme:Q&&Q()},n),r.o=/ *go\d+/.test(c),n.className=T.apply(r,i)+(c?" "+c:"");let u=e;return e[0]&&(u=n.as||e,delete n.as),Y&&u[0]&&Y(n),oe(u,n)}return o}}var Ue=e=>typeof e=="function",D=(e,t)=>Ue(e)?e(t):e,We=(()=>{let e=0;return()=>(++e).toString()})(),le=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Ze=20,I=new Map,Je=1e3,te=e=>{if(I.has(e))return;let t=setTimeout(()=>{I.delete(e),S({type:4,toastId:e})},Je);I.set(e,t)},Xe=e=>{let t=I.get(e);t&&clearTimeout(t)},V=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Ze)};case 1:return t.toast.id&&Xe(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return e.toasts.find(a=>a.id===r.id)?V(e,{type:1,toast:r}):V(e,{type:0,toast:r});case 3:let{toastId:i}=t;return i?te(i):e.toasts.forEach(a=>{te(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===i||i===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+o}))}}},M=[],z={toasts:[],pausedAt:void 0},S=e=>{z=V(z,e),M.forEach(t=>{t(z)})},et={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},tt=(e={})=>{let[t,r]=d.useState(z);d.useEffect(()=>(M.push(r),()=>{let o=M.indexOf(r);o>-1&&M.splice(o,1)}),[t]);let i=t.toasts.map(o=>{var a,l;return{...e,...e[o.type],...o,duration:o.duration||((a=e[o.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||et[o.type],style:{...e.style,...(l=e[o.type])==null?void 0:l.style,...o.style}}});return{...t,toasts:i}},st=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||We()}),C=e=>(t,r)=>{let i=st(t,e,r);return S({type:2,toast:i}),i.id},v=(e,t)=>C("blank")(e,t);v.error=C("error");v.success=C("success");v.loading=C("loading");v.custom=C("custom");v.dismiss=e=>{S({type:3,toastId:e})};v.remove=e=>S({type:4,toastId:e});v.promise=(e,t,r)=>{let i=v.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(o=>(v.success(D(t.success,o),{id:i,...r,...r==null?void 0:r.success}),o)).catch(o=>{v.error(D(t.error,o),{id:i,...r,...r==null?void 0:r.error})}),e};var rt=(e,t)=>{S({type:1,toast:{id:e,height:t}})},at=()=>{S({type:5,time:Date.now()})},it=e=>{let{toasts:t,pausedAt:r}=tt(e);d.useEffect(()=>{if(r)return;let a=Date.now(),l=t.map(n=>{if(n.duration===1/0)return;let c=(n.duration||0)+n.pauseDuration-(a-n.createdAt);if(c<0){n.visible&&v.dismiss(n.id);return}return setTimeout(()=>v.dismiss(n.id),c)});return()=>{l.forEach(n=>n&&clearTimeout(n))}},[t,r]);let i=d.useCallback(()=>{r&&S({type:6,time:Date.now()})},[r]),o=d.useCallback((a,l)=>{let{reverseOrder:n=!1,gutter:c=8,defaultPosition:u}=l||{},x=t.filter(f=>(f.position||u)===(a.position||u)&&f.height),h=x.findIndex(f=>f.id===a.id),g=x.filter((f,b)=>b<h&&f.visible).length;return x.filter(f=>f.visible).slice(...n?[g+1]:[0,g]).reduce((f,b)=>f+(b.height||0)+c,0)},[t]);return{toasts:t,handlers:{updateHeight:rt,startPause:at,endPause:i,calculateOffset:o}}},nt=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ot=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,lt=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ct=_("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${nt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ot} 0.15s ease-out forwards;
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
    animation: ${lt} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,dt=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ut=_("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${dt} 1s linear infinite;
`,mt=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,xt=w`
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
}`,pt=_("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${mt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${xt} 0.2s ease-out forwards;
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
`,ht=_("div")`
  position: absolute;
`,ft=_("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,gt=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,bt=_("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${gt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,vt=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return t!==void 0?typeof t=="string"?d.createElement(bt,null,t):t:r==="blank"?null:d.createElement(ft,null,d.createElement(ut,{...i}),r!=="loading"&&d.createElement(ht,null,r==="error"?d.createElement(ct,{...i}):d.createElement(pt,{...i})))},yt=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,jt=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,wt="0%{opacity:0;} 100%{opacity:1;}",Nt="0%{opacity:1;} 100%{opacity:0;}",kt=_("div")`
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
`,Pt=_("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,_t=(e,t)=>{let r=e.includes("top")?1:-1,[i,o]=le()?[wt,Nt]:[yt(r),jt(r)];return{animation:t?`${w(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},St=d.memo(({toast:e,position:t,style:r,children:i})=>{let o=e.height?_t(e.position||t||"top-center",e.visible):{opacity:0},a=d.createElement(vt,{toast:e}),l=d.createElement(Pt,{...e.ariaProps},D(e.message,e));return d.createElement(kt,{className:e.className,style:{...o,...r,...e.style}},typeof i=="function"?i({icon:a,message:l}):d.createElement(d.Fragment,null,a,l))});Ke(d.createElement);var Et=({id:e,className:t,style:r,onHeightUpdate:i,children:o})=>{let a=d.useCallback(l=>{if(l){let n=()=>{let c=l.getBoundingClientRect().height;i(e,c)};n(),new MutationObserver(n).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return d.createElement("div",{ref:a,className:t,style:r},o)},$t=(e,t)=>{let r=e.includes("top"),i=r?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:le()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...i,...o}},Ct=T`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,O=16,Ft=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:o,containerStyle:a,containerClassName:l})=>{let{toasts:n,handlers:c}=it(r);return d.createElement("div",{style:{position:"fixed",zIndex:9999,top:O,left:O,right:O,bottom:O,pointerEvents:"none",...a},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},n.map(u=>{let x=u.position||t,h=c.calculateOffset(u,{reverseOrder:e,gutter:i,defaultPosition:t}),g=$t(x,h);return d.createElement(Et,{id:u.id,key:u.id,onHeightUpdate:c.updateHeight,className:u.visible?Ct:"",style:g},u.type==="custom"?D(u.message,u):o?o(u):d.createElement(St,{toast:u,position:x}))}))},At=v,K=new Map,B=new WeakMap,se=0,Rt=void 0;function Lt(e){return e?(B.has(e)||(se+=1,B.set(e,se.toString())),B.get(e)):"0"}function Ot(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Lt(e.root):e[t]}`).toString()}function Bt(e){const t=Ot(e);let r=K.get(t);if(!r){const i=new Map;let o;const a=new IntersectionObserver(l=>{l.forEach(n=>{var c;const u=n.isIntersecting&&o.some(x=>n.intersectionRatio>=x);e.trackVisibility&&typeof n.isVisible>"u"&&(n.isVisible=u),(c=i.get(n.target))==null||c.forEach(x=>{x(u,n)})})},e);o=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:a,elements:i},K.set(t,r)}return r}function It(e,t,r={},i=Rt){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const c=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:o,observer:a,elements:l}=Bt(r),n=l.get(e)||[];return l.has(e)||l.set(e,n),n.push(t),a.observe(e),function(){n.splice(n.indexOf(t),1),n.length===0&&(l.delete(e),a.unobserve(e)),l.size===0&&(a.disconnect(),K.delete(o))}}function Mt({threshold:e,delay:t,trackVisibility:r,rootMargin:i,root:o,triggerOnce:a,skip:l,initialInView:n,fallbackInView:c,onChange:u}={}){var x;const[h,g]=d.useState(null),f=d.useRef(),[b,m]=d.useState({inView:!!n,entry:void 0});f.current=u,d.useEffect(()=>{if(l||!h)return;let y;return y=It(h,(G,$)=>{m({inView:G,entry:$}),f.current&&f.current(G,$),$.isIntersecting&&a&&y&&(y(),y=void 0)},{root:o,rootMargin:i,threshold:e,trackVisibility:r,delay:t},c),()=>{y&&y()}},[Array.isArray(e)?e.toString():e,h,o,i,a,l,r,c,t]);const F=(x=b.entry)==null?void 0:x.target,E=d.useRef();!h&&F&&!a&&!l&&E.current!==F&&(E.current=F,m({inView:!!n,entry:void 0}));const N=[g,b.inView,b.entry];return N.ref=N[0],N.inView=N[1],N.entry=N[2],N}const zt=new Array(6).fill(!0),Jt=()=>{var Z;const{category:e,type:t}=re(),[r,i]=d.useState(0),[o,a]=d.useState(null),{priceSort:l}=d.useContext(ie),[n,c]=d.useState(null),[u,x]=d.useState(null),[h,g]=d.useState(null),[f,b]=d.useState(null),[m,F]=d.useState(null),[E,N]=d.useState(null),[y,G]=d.useState(null),[$,Dt]=d.useState(0),[q,Tt]=d.useState(12),{data:A,hasNextPage:H,fetchNextPage:ce,isFetchingNextPage:Gt,isLoading:de,isError:qt,error:Ht}=Me({queryKey:["category-wise-all-product",r,o,$,q,l,n,u,h,f,m,E,y],queryFn:({pageParam:k})=>Ne(r,o,l,n,u,h,f,m,E,y,k*q,q),getNextPageParam:(k,p)=>k&&k.length===12?p.length+1:void 0,initialPageParam:0}),{filterBtnState:Qt,setFilterBtnState:ue}=d.useContext(ae),[U,me]=d.useState(!1),xe=()=>{me(!U)},{ref:pe,inView:W}=Mt({threshold:0});return d.useEffect(()=>{W&&(H?ce():At.success("All products are loaded!",{duration:5e3}))},[W,H]),d.useEffect(()=>{e==="tractor"?(i(1),a(t)):e==="goods-vehicle"?(i(3),a(t)):e==="harvester"?(i(4),a(t)):e==="implements"?(i(5),a(t)):e==="tyre"?(i(7),a(t)):e==="agri-inputs"&&(t==="seeds"&&i(6),t==="pesticides"&&i(8),t==="fertilizer"&&i(9))},[e,t]),s.jsxs(s.Fragment,{children:[s.jsx(Ee,{}),s.jsx($e,{}),s.jsx(ze,{}),s.jsx(Ft,{}),s.jsx("section",{className:"mobile-filter-and-sort-btn lg:hidden block bg-lightgreen sticky md:top-[147px] top-[62px] z-10",children:s.jsxs("div",{className:"container px-10  grid grid-cols-2",children:[s.jsxs("button",{type:"button",className:"sort-btn text-lg text-white border-r border-white h-full py-2",onClick:()=>ue(!0),children:[s.jsx(Ce,{className:"inline mb-1"})," Filter"]}),s.jsxs("button",{type:"button",className:"sort-btn text-lg text-white",onClick:xe,children:[s.jsx(Fe,{className:"inline mb-1"})," Sort"]})]})}),s.jsxs("main",{className:"products-container-wrapper container bg-whitesmoke md:px-10 ",children:[s.jsx(De,{categoryId:r,type:t,categoryProduct:A}),s.jsx(Te,{sort_btn_state:U}),s.jsx("section",{className:"category-wise-all-product",children:de?s.jsx("div",{className:"product-skeleton grid md:grid-cols-3 2xl:grid-cols-4 grid-cols-2 px-5 gap-x-4",children:zt.map((k,p)=>s.jsx(Oe,{},p))}):s.jsxs("div",{className:"product-list-container mb-5",children:[s.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 md:px-5  px-2 md:gap-x-4 gap-x-2",children:(Z=A==null?void 0:A.pages)==null?void 0:Z.map(k=>k&&k.map(p=>s.jsx(je,{to:`${Ae}/${e}/${t}/${p.id}`,children:s.jsx(Le,{product_full_details:p,product_image:p.front_image?p.front_image:p.image1,product_title:`${p.brand_name} ${p.model_name}`=="Others Others"||`${p.brand_name} ${p.model_name}`=="undefined undefined"||`${p.brand_name} ${p.model_name}`=="null null"?p.title:`${p.brand_name} ${p.model_name}`,product_location:p.district_name,product_pricing:p.price,distance_product:p.distance,rent_type:t==="rent"&&p.rent_type?` / ${p.rent_type.slice(4)}`:""})},p.id)))}),H?s.jsxs("div",{ref:pe,className:"lod-more-product flex items-center gap-2 justify-center w-full mt-5",children:[s.jsxs("div",{className:"relative",children:[s.jsx("span",{className:"loader"}),s.jsx("img",{src:we,alt:"this is a icon of preloader",className:"absolute top-[49.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg"})]}),s.jsx("span",{className:"text-darkGreen text-2xl",children:"Loading More"})]}):null]})})]}),s.jsx(Re,{})]})};export{Jt as default};
