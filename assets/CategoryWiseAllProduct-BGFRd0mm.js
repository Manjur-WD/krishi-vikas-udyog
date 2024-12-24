import{i as ae,h as be,a as je,u as ce,j as t,b as de,r as u,c as ye,d as ve,F as ue,e as Ne,f as we,g as F,k as re,l as _e,m as ke,n as Pe,o as Se,S as me,L as Ee,p as $e}from"./index-COCKclHd.js";import{Q as Fe,w as Ce,x as Me,i as V,y as Re,z as A,A as Le,C as Oe,D as Ie,E as Ae,J as Te,H as Be,K as De,L as ze,B as Ge,F as Ve}from"./Header-CoIbC6Jh.js";import{P as He}from"./ProductCard-BKfr-Al6.js";import{P as qe}from"./ProductCardSkeleton-BVPVANJA.js";import{b as Qe}from"./img_hero-DAQ5Jl1R.js";import"./index-DGQG6CYi.js";var Ye=class extends Fe{constructor(e,s){super(e,s)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,s){super.setOptions({...e,behavior:ae()},s)}getOptimisticResult(e){return e.behavior=ae(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,s){var j,P;const{state:a}=e,n=super.createResult(e,s),{isFetching:c,isRefetching:r,isError:l,isRefetchError:i}=n,d=(P=(j=a.fetchMeta)==null?void 0:j.fetchMore)==null?void 0:P.direction,m=l&&d==="forward",x=c&&d==="forward",h=l&&d==="backward",p=c&&d==="backward";return{...n,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:be(s,a.data),hasPreviousPage:je(s,a.data),isFetchNextPageError:m,isFetchingNextPage:x,isFetchPreviousPageError:h,isFetchingPreviousPage:p,isRefetchError:i&&!m&&!h,isRefetching:r&&!x&&!p}}};function Ke(e,s){return Ce(e,Ye)}const Ue=()=>{const{category:e,type:s}=ce();return t.jsx(t.Fragment,{children:t.jsx("section",{className:"breadcrumb flex justify-center items-center md:h-[300px] h-[200px]",style:{backgroundImage:`linear-gradient(#13693a, #13693a6e),url(${Qe})`,backgroundSize:"cover",backgroundPosition:"center"},children:t.jsxs("div",{className:"breadcrumb-content",children:[t.jsxs("div",{className:"breadcrumb-links flex justify-center items-center md:text-2xl text-white",children:[t.jsx("p",{className:"hover:text-lightgreen px-3",children:"Home"}),t.jsx(Me,{}),t.jsx("p",{className:"hover:text-lightgreen px-3 capitalize ",children:e==="goods-vehicle"?"goods vehicle":e==="agri-inputs"?"agri inputs":e})]}),t.jsx("p",{className:"text-lightgreen md:text-6xl text-3xl font-bold text-center mt-3 uppercase",style:{textShadow:"0 0 15px black"},children:e==="goods-vehicle"?`${s==="old"?"used":s} goods vehicle`:e==="agri-inputs"?s:`${s==="old"?"used":s} ${e}`})]})})})},Z=()=>t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:t.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),t.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:t.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),t.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:t.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),t.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:t.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),t.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:t.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),t.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:t.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})})]}),We=(e,s)=>{let a;return(...n)=>{clearTimeout(a),a=setTimeout(()=>e(...n),s)}},ie=e=>e>=1e7?(e/1e7).toFixed(2)+" Cr":e>=1e5?(e/1e5).toFixed(2)+" L":e>=1e3?(e/1e3).toFixed(2)+" T":e.toString(),Je=e=>{const s=de(),a=(e==null?void 0:e.max_price)??1e4,n=(e==null?void 0:e.min_price)??0,c=(e==null?void 0:e.priceGap)??10,[r,l]=u.useState(n),[i,d]=u.useState(a);u.useEffect(()=>{l(n),d(a)},[n,a]);const m=u.useCallback(We((h,p)=>{s(ye(p)),s(ve(h))},300),[]),x=(h,p)=>{const b=parseFloat(p);if(h==="min"){const j=Math.min(i-c,b);l(j),m(j,i)}else if(h==="max"){const j=Math.max(r+c,b);d(j),m(r,j)}};return t.jsxs("div",{className:"wrapper price-range",children:[t.jsx("header",{children:t.jsx("p",{children:"Use slider to adjust min and max price"})}),t.jsxs("div",{className:"price-input",children:[t.jsxs("div",{className:"field",children:[t.jsx("label",{htmlFor:"min-price",children:"Min"}),t.jsx("input",{id:"min-price",type:"text",className:"input-min text-[12px]",value:ie(r),readOnly:!0})]}),t.jsx("div",{className:"separator",children:"-"}),t.jsxs("div",{className:"field",children:[t.jsx("label",{htmlFor:"max-price",children:"Max"}),t.jsx("input",{id:"max-price",type:"text",className:"input-max md:text-sm text-[12px]",value:ie(i),readOnly:!0})]})]}),t.jsx("div",{className:"slider",children:t.jsx("div",{className:"progress",style:{left:`${(r-n)/(a-n)*100}%`,right:`${100-(i-n)/(a-n)*100}%`}})}),t.jsxs("div",{className:"range-input",children:[t.jsx("input",{type:"range",className:"range-min",min:n,max:a,value:r,step:"1",onChange:h=>x("min",h.target.value)}),t.jsx("input",{type:"range",className:"range-max",min:n,max:a,value:i,step:"1",onChange:h=>x("max",h.target.value)})]})]})},Ze=({categoryId:e,type:s,categoryProduct:a})=>{const{filterBtnState:n,setFilterBtnState:c}=u.useContext(ue);console.log(e),console.log(s);const{data:r,isLoading:l}=V({queryKey:["brand-list",e,s],queryFn:()=>Le(e,s),enabled:!!a}),{data:i,isLoading:d}=V({queryKey:["state-district-list",e,s],queryFn:()=>Oe(e,s),enabled:!!r}),{data:m,isLoading:x}=V({queryKey:["year-of-purchase-list",e,s],queryFn:()=>Ie(e,s),enabled:!!i}),{data:h,isLoading:p}=V({queryKey:["maxmin-price-list",e,s],queryFn:()=>Ae(e,s),enabled:!!m}),b=r?r.filter(o=>o.popular===1&&o.item_count!=0):[],j=r?r.filter(o=>o.item_count!=0&&o.popular!=1):[],[P,R]=u.useState([]),[$,_]=u.useState([]),k=o=>{const g=r==null?void 0:r.find(w=>w.brand_id===o);g&&R(w=>w.some(L=>L.brand_id===g.brand_id)?w.filter(L=>L.brand_id!==g.brand_id):[...w,g])},I=o=>{const g=i==null?void 0:i.find(w=>w.state_id===o);g&&_(w=>w.some(L=>L.state_id===g.state_id)?w.filter(L=>L.state_id!==g.state_id):[...w,g])};u.useEffect(()=>{console.log($)},[$]);const y=de(),D=Ne();u.useEffect(()=>{y(we())},[D.pathname,y]);const z=F(o=>o.counter.filterParams.brandId),J=F(o=>o.counter.filterParams.modelId),T=F(o=>o.counter.filterParams.stateId),G=F(o=>o.counter.filterParams.districtId),N=F(o=>o.counter.filterParams.yom),f=F(o=>o.counter.filterParams.minPrice),fe=F(o=>o.counter.filterParams.maxPrice);return console.log(`"${z}"`),console.log(`"${J}"`),console.log(`"${T}"`),console.log(`"${G}"`),console.log(`"${N}"`),console.log(`"${f}"`),console.log(`"${fe}"`),t.jsx(t.Fragment,{children:t.jsxs("aside",{className:n?"filter-product-sidebar active":"filter-product-sidebar",children:[t.jsxs("div",{className:"lg:hidden filter-headeing flex items-center px-5 py-2 sticky -top-[10px] rounded-xl",children:[t.jsx(Re,{className:"text-3xl text-white absolute",onClick:()=>{c(!1)}}),t.jsx("p",{className:"text-xl text-white text-center w-full ",children:"Filter"})]}),t.jsxs("section",{className:"w-full bg-white my-3 p-2 rounded-3xl shadow",children:[e!==6&&e!==8&&e!==9?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"product__brands",children:t.jsxs("details",{open:!0,className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[t.jsx("summary",{className:"list-none",children:t.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[t.jsx("span",{children:"BRANDS"}),t.jsx(A,{className:"inline"})]})}),t.jsx("div",{className:"brands-list border-t p-2 h-[400px] overflow-y-auto",children:t.jsxs("div",{className:"popular-brands text-center",children:[t.jsx("p",{className:"text-sm bg-gradient-green text-white px-3 py-2 mb-2 rounded-xl",children:"POPULAR BRANDS"}),t.jsx("div",{className:"grid grid-cols-3 gap-2",children:l?t.jsx(Z,{}):b&&b.map(o=>t.jsxs("div",{className:"brand-select ",children:[t.jsx("input",{type:"checkbox",id:o.brand_id,className:"hidden"}),t.jsx("label",{htmlFor:o.brand_id,className:" border rounded-2xl p-2",children:t.jsxs("div",{className:"text-center",onClick:()=>{y(re(o.brand_id)),k(o.brand_id)},children:[t.jsx("img",{src:o.brand_logo,alt:"brand-logo",className:"w-[40px] h-[40px] object-contain mx-auto"}),t.jsx("p",{className:"brand-name capitalize text-sm truncate",children:o.brand_name}),t.jsxs("p",{className:"brand-product-count text-sm",children:["(",o.item_count,")"]})]})})]},o.brand_id))}),t.jsx("p",{className:"text-sm bg-gradient-green text-white px-3 py-2 my-3 rounded-xl",children:"OTHER BRANDS"}),t.jsx("div",{className:"grid grid-cols-3 gap-2",children:l?t.jsx(Z,{}):j&&j.map(o=>t.jsxs("div",{className:"brand-select ",children:[t.jsx("input",{type:"checkbox",id:o.brand_id,className:"hidden"}),t.jsx("label",{htmlFor:o.brand_id,className:" border rounded-2xl p-2",children:t.jsxs("div",{className:"text-center",onClick:()=>{y(re(o.brand_id)),k(o.brand_id)},children:[t.jsx("img",{src:o.brand_logo,alt:"brand-logo",className:"w-[40px] h-[40px] object-contain mx-auto"}),t.jsx("p",{className:"brand-name capitalize text-sm truncate",children:o.brand_name}),t.jsxs("p",{className:"brand-product-count text-sm",children:["(",o.item_count,")"]})]})})]},o.brand_id))})]})})]})}),z!=""?t.jsx("div",{className:"brandwise__models",children:t.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[t.jsx("summary",{className:"list-none",children:t.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[t.jsx("span",{children:"MODELS"}),t.jsx(A,{className:"inline"})]})}),P&&P.map(o=>t.jsx("div",{className:"brands-list border-t p-2 overflow-y-auto",children:t.jsxs("div",{className:"popular-brands text-center",children:[t.jsx("p",{className:"text-sm bg-gradient-green text-white px-3 py-2 mb-2 rounded-xl",children:o.brand_name}),t.jsx("div",{className:"grid grid-cols-3 gap-2",children:l?t.jsx(Z,{}):o&&o.model.filter(g=>g.item_count!=0).map(g=>t.jsxs("div",{className:"model-select ",children:[t.jsx("input",{type:"checkbox",id:g.model_id,className:"hidden"}),t.jsx("label",{htmlFor:g.model_id,className:" border rounded-2xl p-2",children:t.jsxs("div",{className:"text-center",onClick:()=>y(_e(g.model_id)),children:[t.jsx("img",{src:g.model_image,alt:"brand-logo",className:"w-[40px] h-[40px] object-contain mx-auto"}),t.jsx("p",{className:"brand-name capitalize text-sm truncate",children:g.model_name}),t.jsxs("p",{className:"brand-product-count text-sm",children:["(",g.item_count,")"]})]})})]},g.model_id))})]})},o.id))]})}):null,t.jsx("div",{className:"product_statewise",children:t.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[t.jsx("summary",{className:"list-none",children:t.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[t.jsx("span",{children:"STATES"}),t.jsx(A,{className:"inline"})]})}),t.jsx("div",{className:"state-list border-t p-2 max-h-[400px] overflow-y-auto",children:t.jsx("ul",{children:i&&i.filter(o=>o.item_count!=0).map(o=>t.jsxs("li",{className:"state-and-district-list ",children:[t.jsx("input",{type:"checkbox",id:o.state_name,className:"hidden"}),t.jsx("label",{htmlFor:o.state_name,className:" bg-white shadow m-3 p-3 rounded-2xl text-sm items-center justify-between transition-[0.3s] hover:scale-105",onClick:()=>{y(ke(o.state_id)),I(o.state_id)},children:t.jsxs("div",{className:"flex justify-between",children:[t.jsx("span",{className:"inline-block",children:o.state_name}),t.jsxs("span",{className:"text-nowrap inline-block",children:[o.item_count," Items"]})]})})]},o.state_id))})})]})}),T!=""?t.jsx("div",{className:"product_districtwise",children:t.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[t.jsx("summary",{className:"list-none",children:t.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[t.jsx("span",{children:"DISTRICT"}),t.jsx(A,{className:"inline"})]})}),$&&$.map(o=>t.jsxs("div",{className:"district-list border-t p-2",children:[t.jsx("p",{className:"text-sm text-center bg-gradient-green text-white px-3 py-2 mb-2 rounded-xl",children:o.state_name}),t.jsx("ul",{children:o.dist.map(g=>t.jsxs("li",{className:"state-and-district-list ",children:[t.jsx("input",{type:"checkbox",id:g.dist_name,className:"hidden"}),t.jsx("label",{htmlFor:g.dist_name,className:" bg-white shadow m-3 p-3 rounded-2xl text-sm items-center justify-between transition-[0.3s] hover:scale-105",onClick:()=>y(Pe(g.dist_id)),children:t.jsxs("div",{className:"flex justify-between",children:[t.jsx("span",{className:"inline-block",children:g.dist_name}),t.jsxs("span",{className:"text-nowrap inline-block",children:[g.item_count," Items"]})]})})]},g.dist_id))})]},o.state_id))]})}):null,t.jsx("div",{className:"product_districtwise",children:t.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[t.jsx("summary",{className:"list-none ",children:t.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[t.jsx("span",{children:"BY YEAR"}),t.jsx(A,{className:"inline"})]})}),t.jsx("div",{className:"state-list border-t p-2 max-h-[400px] overflow-y-auto",children:t.jsx("ul",{children:m&&m.filter(o=>o.item_count!=0).map(o=>t.jsxs("li",{className:"year-of-manufacture",children:[t.jsx("input",{type:"checkbox",id:o.year,className:"hidden"}),t.jsx("label",{htmlFor:o.year,className:" bg-white shadow m-3 p-3 rounded-2xl text-sm justify-between hover:scale-105",onClick:()=>y(Se(o.year)),children:t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx("span",{children:o.year}),t.jsxs("span",{className:"text-nowrap",children:[o.item_count," Items"]})]})})]},o.year))})})]})})]}):null,t.jsx("div",{className:"product_by_year",children:t.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[t.jsx("summary",{className:"list-none ",children:t.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[t.jsx("span",{children:"PRICE"}),t.jsx(A,{className:"inline"})]})}),t.jsx(Je,{max_price:h&&Math.ceil(h.max),min_price:h&&Math.ceil(h.min)})]})})]})]})})},Xe=({sort_btn_state:e,sortBtnActive:s,setSortBtnActive:a})=>{const[n,c]=u.useState(0),{setPriceSort:r}=u.useContext(me),l=i=>{switch(c(i),i){case 1:r("desc"),a(!s),window.scrollTo(0,0);break;case 2:r("asc"),a(!s),window.scrollTo(0,0);break;case 3:r("nf"),a(!s),window.scrollTo(0,0);break}};return t.jsx(t.Fragment,{children:t.jsx("section",{className:"sort-product-tab-section  md:sticky top-[155px] z-10 lg:py-2 bg-whitesmoke",children:t.jsxs("div",{className:e?"active bg-white mx-3 mt-3 flex lg:flex-row flex-col items-center rounded-3xl md:gap-5":" bg-white mx-3 mt-3 flex lg:flex-row flex-col items-center rounded-3xl md:gap-5",children:[t.jsx("p",{className:"label-sort text-white bg-darkGreen px-5 py-2 rounded-3xl m-2",children:"SORT BY"}),t.jsxs("div",{className:"sort-buttons flex lg:flex-row items-center flex-col",children:[t.jsx("button",{onClick:()=>l(1),className:`px-4 py-2 m-2 ${n===1?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Price High to Low"}),t.jsx("button",{onClick:()=>l(2),className:`px-4 py-2 m-2 ${n===2?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Price Low to High"}),t.jsx("button",{onClick:()=>l(3),className:`px-4 py-2 m-2 ${n===3?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Newest First"})]})]})})})};let et={data:""},tt=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||et,st=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,at=/\/\*[^]*?\*\/|  +/g,ne=/\n+/g,C=(e,s)=>{let a="",n="",c="";for(let r in e){let l=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+l+";":n+=r[1]=="f"?C(l,r):r+"{"+C(l,r[1]=="k"?"":s)+"}":typeof l=="object"?n+=C(l,s?s.replace(/([^,])+/g,i=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,i):i?i+" "+d:d)):r):l!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=C.p?C.p(r,l):r+":"+l+";")}return a+(s&&c?s+"{"+c+"}":c)+n},S={},xe=e=>{if(typeof e=="object"){let s="";for(let a in e)s+=a+xe(e[a]);return s}return e},rt=(e,s,a,n,c)=>{let r=xe(e),l=S[r]||(S[r]=(d=>{let m=0,x=11;for(;m<d.length;)x=101*x+d.charCodeAt(m++)>>>0;return"go"+x})(r));if(!S[l]){let d=r!==e?e:(m=>{let x,h,p=[{}];for(;x=st.exec(m.replace(at,""));)x[4]?p.shift():x[3]?(h=x[3].replace(ne," ").trim(),p.unshift(p[0][h]=p[0][h]||{})):p[0][x[1]]=x[2].replace(ne," ").trim();return p[0]})(e);S[l]=C(c?{["@keyframes "+l]:d}:d,a?"":"."+l)}let i=a&&S.g?S.g:null;return a&&(S.g=S[l]),((d,m,x,h)=>{h?m.data=m.data.replace(h,d):m.data.indexOf(d)===-1&&(m.data=x?d+m.data:m.data+d)})(S[l],s,n,i),l},it=(e,s,a)=>e.reduce((n,c,r)=>{let l=s[r];if(l&&l.call){let i=l(a),d=i&&i.props&&i.props.className||/^go/.test(i)&&i;l=d?"."+d:i&&typeof i=="object"?i.props?"":C(i,""):i===!1?"":i}return n+c+(l??"")},"");function W(e){let s=this||{},a=e.call?e(s.p):e;return rt(a.unshift?a.raw?it(a,[].slice.call(arguments,1),s.p):a.reduce((n,c)=>Object.assign(n,c&&c.call?c(s.p):c),{}):a,tt(s.target),s.g,s.o,s.k)}let he,X,ee;W.bind({g:1});let E=W.bind({k:1});function nt(e,s,a,n){C.p=s,he=e,X=a,ee=n}function M(e,s){let a=this||{};return function(){let n=arguments;function c(r,l){let i=Object.assign({},r),d=i.className||c.className;a.p=Object.assign({theme:X&&X()},i),a.o=/ *go\d+/.test(d),i.className=W.apply(a,n)+(d?" "+d:"");let m=e;return e[0]&&(m=i.as||e,delete i.as),ee&&m[0]&&ee(i),he(m,i)}return c}}var lt=e=>typeof e=="function",U=(e,s)=>lt(e)?e(s):e,ot=(()=>{let e=0;return()=>(++e).toString()})(),pe=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let s=matchMedia("(prefers-reduced-motion: reduce)");e=!s||s.matches}return e}})(),ct=20,Q=new Map,dt=1e3,le=e=>{if(Q.has(e))return;let s=setTimeout(()=>{Q.delete(e),O({type:4,toastId:e})},dt);Q.set(e,s)},ut=e=>{let s=Q.get(e);s&&clearTimeout(s)},te=(e,s)=>{switch(s.type){case 0:return{...e,toasts:[s.toast,...e.toasts].slice(0,ct)};case 1:return s.toast.id&&ut(s.toast.id),{...e,toasts:e.toasts.map(r=>r.id===s.toast.id?{...r,...s.toast}:r)};case 2:let{toast:a}=s;return e.toasts.find(r=>r.id===a.id)?te(e,{type:1,toast:a}):te(e,{type:0,toast:a});case 3:let{toastId:n}=s;return n?le(n):e.toasts.forEach(r=>{le(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,visible:!1}:r)};case 4:return s.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==s.toastId)};case 5:return{...e,pausedAt:s.time};case 6:let c=s.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+c}))}}},Y=[],K={toasts:[],pausedAt:void 0},O=e=>{K=te(K,e),Y.forEach(s=>{s(K)})},mt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},xt=(e={})=>{let[s,a]=u.useState(K);u.useEffect(()=>(Y.push(a),()=>{let c=Y.indexOf(a);c>-1&&Y.splice(c,1)}),[s]);let n=s.toasts.map(c=>{var r,l;return{...e,...e[c.type],...c,duration:c.duration||((r=e[c.type])==null?void 0:r.duration)||(e==null?void 0:e.duration)||mt[c.type],style:{...e.style,...(l=e[c.type])==null?void 0:l.style,...c.style}}});return{...s,toasts:n}},ht=(e,s="blank",a)=>({createdAt:Date.now(),visible:!0,type:s,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(a==null?void 0:a.id)||ot()}),B=e=>(s,a)=>{let n=ht(s,e,a);return O({type:2,toast:n}),n.id},v=(e,s)=>B("blank")(e,s);v.error=B("error");v.success=B("success");v.loading=B("loading");v.custom=B("custom");v.dismiss=e=>{O({type:3,toastId:e})};v.remove=e=>O({type:4,toastId:e});v.promise=(e,s,a)=>{let n=v.loading(s.loading,{...a,...a==null?void 0:a.loading});return e.then(c=>(v.success(U(s.success,c),{id:n,...a,...a==null?void 0:a.success}),c)).catch(c=>{v.error(U(s.error,c),{id:n,...a,...a==null?void 0:a.error})}),e};var pt=(e,s)=>{O({type:1,toast:{id:e,height:s}})},ft=()=>{O({type:5,time:Date.now()})},gt=e=>{let{toasts:s,pausedAt:a}=xt(e);u.useEffect(()=>{if(a)return;let r=Date.now(),l=s.map(i=>{if(i.duration===1/0)return;let d=(i.duration||0)+i.pauseDuration-(r-i.createdAt);if(d<0){i.visible&&v.dismiss(i.id);return}return setTimeout(()=>v.dismiss(i.id),d)});return()=>{l.forEach(i=>i&&clearTimeout(i))}},[s,a]);let n=u.useCallback(()=>{a&&O({type:6,time:Date.now()})},[a]),c=u.useCallback((r,l)=>{let{reverseOrder:i=!1,gutter:d=8,defaultPosition:m}=l||{},x=s.filter(b=>(b.position||m)===(r.position||m)&&b.height),h=x.findIndex(b=>b.id===r.id),p=x.filter((b,j)=>j<h&&b.visible).length;return x.filter(b=>b.visible).slice(...i?[p+1]:[0,p]).reduce((b,j)=>b+(j.height||0)+d,0)},[s]);return{toasts:s,handlers:{updateHeight:pt,startPause:ft,endPause:n,calculateOffset:c}}},bt=E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,jt=E`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,yt=E`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,vt=M("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${bt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${jt} 0.15s ease-out forwards;
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
    animation: ${yt} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Nt=E`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,wt=M("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Nt} 1s linear infinite;
`,_t=E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,kt=E`
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
}`,Pt=M("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_t} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${kt} 0.2s ease-out forwards;
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
`,St=M("div")`
  position: absolute;
`,Et=M("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,$t=E`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ft=M("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${$t} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ct=({toast:e})=>{let{icon:s,type:a,iconTheme:n}=e;return s!==void 0?typeof s=="string"?u.createElement(Ft,null,s):s:a==="blank"?null:u.createElement(Et,null,u.createElement(wt,{...n}),a!=="loading"&&u.createElement(St,null,a==="error"?u.createElement(vt,{...n}):u.createElement(Pt,{...n})))},Mt=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Rt=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Lt="0%{opacity:0;} 100%{opacity:1;}",Ot="0%{opacity:1;} 100%{opacity:0;}",It=M("div")`
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
`,At=M("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Tt=(e,s)=>{let a=e.includes("top")?1:-1,[n,c]=pe()?[Lt,Ot]:[Mt(a),Rt(a)];return{animation:s?`${E(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${E(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Bt=u.memo(({toast:e,position:s,style:a,children:n})=>{let c=e.height?Tt(e.position||s||"top-center",e.visible):{opacity:0},r=u.createElement(Ct,{toast:e}),l=u.createElement(At,{...e.ariaProps},U(e.message,e));return u.createElement(It,{className:e.className,style:{...c,...a,...e.style}},typeof n=="function"?n({icon:r,message:l}):u.createElement(u.Fragment,null,r,l))});nt(u.createElement);var Dt=({id:e,className:s,style:a,onHeightUpdate:n,children:c})=>{let r=u.useCallback(l=>{if(l){let i=()=>{let d=l.getBoundingClientRect().height;n(e,d)};i(),new MutationObserver(i).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return u.createElement("div",{ref:r,className:s,style:a},c)},zt=(e,s)=>{let a=e.includes("top"),n=a?{top:0}:{bottom:0},c=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:pe()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${s*(a?1:-1)}px)`,...n,...c}},Gt=W`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,H=16,Vt=({reverseOrder:e,position:s="top-center",toastOptions:a,gutter:n,children:c,containerStyle:r,containerClassName:l})=>{let{toasts:i,handlers:d}=gt(a);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:H,left:H,right:H,bottom:H,pointerEvents:"none",...r},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},i.map(m=>{let x=m.position||s,h=d.calculateOffset(m,{reverseOrder:e,gutter:n,defaultPosition:s}),p=zt(x,h);return u.createElement(Dt,{id:m.id,key:m.id,onHeightUpdate:d.updateHeight,className:m.visible?Gt:"",style:p},m.type==="custom"?U(m.message,m):c?c(m):u.createElement(Bt,{toast:m,position:x}))}))},Ht=v,se=new Map,q=new WeakMap,oe=0,qt=void 0;function Qt(e){return e?(q.has(e)||(oe+=1,q.set(e,oe.toString())),q.get(e)):"0"}function Yt(e){return Object.keys(e).sort().filter(s=>e[s]!==void 0).map(s=>`${s}_${s==="root"?Qt(e.root):e[s]}`).toString()}function Kt(e){const s=Yt(e);let a=se.get(s);if(!a){const n=new Map;let c;const r=new IntersectionObserver(l=>{l.forEach(i=>{var d;const m=i.isIntersecting&&c.some(x=>i.intersectionRatio>=x);e.trackVisibility&&typeof i.isVisible>"u"&&(i.isVisible=m),(d=n.get(i.target))==null||d.forEach(x=>{x(m,i)})})},e);c=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),a={id:s,observer:r,elements:n},se.set(s,a)}return a}function Ut(e,s,a={},n=qt){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const d=e.getBoundingClientRect();return s(n,{isIntersecting:n,target:e,intersectionRatio:typeof a.threshold=="number"?a.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:c,observer:r,elements:l}=Kt(a),i=l.get(e)||[];return l.has(e)||l.set(e,i),i.push(s),r.observe(e),function(){i.splice(i.indexOf(s),1),i.length===0&&(l.delete(e),r.unobserve(e)),l.size===0&&(r.disconnect(),se.delete(c))}}function Wt({threshold:e,delay:s,trackVisibility:a,rootMargin:n,root:c,triggerOnce:r,skip:l,initialInView:i,fallbackInView:d,onChange:m}={}){var x;const[h,p]=u.useState(null),b=u.useRef(),[j,P]=u.useState({inView:!!i,entry:void 0});b.current=m,u.useEffect(()=>{if(l||!h)return;let k;return k=Ut(h,(I,y)=>{P({inView:I,entry:y}),b.current&&b.current(I,y),y.isIntersecting&&r&&k&&(k(),k=void 0)},{root:c,rootMargin:n,threshold:e,trackVisibility:a,delay:s},d),()=>{k&&k()}},[Array.isArray(e)?e.toString():e,h,c,n,r,l,a,d,s]);const R=(x=j.entry)==null?void 0:x.target,$=u.useRef();!h&&R&&!r&&!l&&$.current!==R&&($.current=R,P({inView:!!i,entry:void 0}));const _=[p,j.inView,j.entry];return _.ref=_[0],_.inView=_[1],_.entry=_[2],_}const Jt=new Array(6).fill(!0),rs=()=>{var G;const{category:e,type:s}=ce(),[a,n]=u.useState(0),[c,r]=u.useState(null),{priceSort:l}=u.useContext(me),i=F(N=>N.counter.filterParams);console.log(i),u.useState(null),u.useState(null),u.useState(null),u.useState(null),u.useState(null),u.useState(null),u.useState(null);const[d,m]=u.useState(0),[x,h]=u.useState(12),{data:p,hasNextPage:b,fetchNextPage:j,isFetchingNextPage:P,isLoading:R,isError:$,error:_}=Ke({queryKey:["category-wise-all-product",a,c,d,x,l,i.stateId.toString(),i.districtId.toString(),i.yom.toString(),i.brandId.toString(),i.modelId.toString(),i.minPrice,i.maxPrice],queryFn:({pageParam:N})=>Te(a,c,N*x,x,l,i.stateId.toString(),i.districtId.toString(),i.yom.toString(),i.brandId.toString(),i.modelId.toString(),i.minPrice,i.maxPrice),getNextPageParam:(N,f)=>N&&N.length===12?f.length+1:void 0,initialPageParam:0}),{filterBtnState:k,setFilterBtnState:I}=u.useContext(ue),[y,D]=u.useState(!1),z=()=>{D(!y)},{ref:J,inView:T}=Wt({threshold:0});return u.useEffect(()=>{T&&(b?j():Ht.success("All products are loaded!",{duration:5e3}))},[T,b]),u.useEffect(()=>{e==="tractor"?(n(1),r(s)):e==="goods-vehicle"?(n(3),r(s)):e==="harvester"?(n(4),r(s)):e==="implements"?(n(5),r(s)):e==="tyre"?(n(7),r(s)):e==="agri-inputs"&&(s==="seeds"&&n(6),s==="pesticides"&&n(8),s==="fertilizer"&&n(9))},[e,s]),t.jsxs(t.Fragment,{children:[t.jsx(Be,{}),t.jsx(Ue,{}),t.jsx(Vt,{}),t.jsx("section",{className:"mobile-filter-and-sort-btn lg:hidden block bg-lightgreen sticky md:top-[147px] top-[62px] z-10",children:t.jsxs("div",{className:"container px-10  grid grid-cols-2",children:[t.jsxs("button",{type:"button",className:"sort-btn text-lg text-white border-r border-white h-full py-2",onClick:()=>I(!0),children:[t.jsx(De,{className:"inline mb-1"})," Filter"]}),t.jsxs("button",{type:"button",className:"sort-btn text-lg text-white",onClick:z,children:[t.jsx(ze,{className:"inline mb-1"})," Sort"]})]})}),t.jsxs("main",{className:"products-container-wrapper container bg-whitesmoke md:px-10 ",children:[t.jsx(Ze,{categoryId:a,type:s,categoryProduct:p}),t.jsx(Xe,{sort_btn_state:y,sortBtnActive:y,setSortBtnActive:D}),t.jsx("section",{className:"category-wise-all-product",children:R?t.jsx("div",{className:"product-skeleton grid md:grid-cols-3 2xl:grid-cols-4 grid-cols-2 px-5 gap-x-4",children:Jt.map((N,f)=>t.jsx(qe,{},f))}):t.jsxs("div",{className:"product-list-container mb-5",children:[t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 md:px-5  px-2 md:gap-x-4 gap-x-2",children:(G=p==null?void 0:p.pages)==null?void 0:G.map(N=>N&&N.map(f=>t.jsx(Ee,{to:`${Ge}/${e}/${s}/${f.id}`,children:t.jsx(He,{product_full_details:f,product_image:f.front_image?f.front_image:f.image1,product_title:`${f.brand_name} ${f.model_name}`=="Others Others"||`${f.brand_name} ${f.model_name}`=="undefined undefined"||`${f.brand_name} ${f.model_name}`=="null null"?f.title:`${f.brand_name} ${f.model_name}`,product_location:f.district_name,product_pricing:f.price,distance_product:f.distance,rent_type:s==="rent"&&f.rent_type?` / ${f.rent_type.slice(4)}`:""})},f.id)))}),b?t.jsxs("div",{ref:J,className:"lod-more-product flex items-center gap-2 justify-center w-full mt-5",children:[t.jsxs("div",{className:"relative",children:[t.jsx("span",{className:"loader"}),t.jsx("img",{src:$e,alt:"this is a icon of preloader",className:"absolute top-[49.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg"})]}),t.jsx("span",{className:"text-darkGreen text-2xl",children:"Loading More"})]}):null]})})]}),t.jsx(Ve,{})]})};export{rs as default};
