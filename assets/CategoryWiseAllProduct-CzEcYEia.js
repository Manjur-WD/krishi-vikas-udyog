import{i as ne,h as je,b as ye,c as me,j as t,a as re,r as u,d as ve,e as Ne,F as xe,f as we,g as _e,k as F,l as le,m as ke,n as Pe,o as Se,p as Ee,S as pe,L as $e,q as Fe}from"./index-DYkw6Rta.js";import{Q as Ce,w as Me,x as Le,i as q,y as Re,z as I,A as Oe,C as Ie,D as Ae,E as Te,J as Be,H as De,K as ze,L as Ge,B as Ve,F as qe}from"./Header-4rwBK3KW.js";import{P as He}from"./ProductCard-Ck3TP9jS.js";import{P as Qe}from"./ProductCardSkeleton-R9dX9PH4.js";import{b as Ye}from"./img_hero-DAQ5Jl1R.js";import"./index-DycNYACj.js";var Ke=class extends Ce{constructor(e,s){super(e,s)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,s){super.setOptions({...e,behavior:ne()},s)}getOptimisticResult(e){return e.behavior=ne(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,s){var j,_;const{state:a}=e,n=super.createResult(e,s),{isFetching:o,isRefetching:r,isError:d,isRefetchError:i}=n,c=(_=(j=a.fetchMeta)==null?void 0:j.fetchMore)==null?void 0:_.direction,m=d&&c==="forward",x=o&&c==="forward",p=d&&c==="backward",b=o&&c==="backward";return{...n,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:je(s,a.data),hasPreviousPage:ye(s,a.data),isFetchNextPageError:m,isFetchingNextPage:x,isFetchPreviousPageError:p,isFetchingPreviousPage:b,isRefetchError:i&&!m&&!p,isRefetching:r&&!x&&!b}}};function Ue(e,s){return Me(e,Ke)}const We=()=>{const{category:e,type:s}=me();return t.jsx(t.Fragment,{children:t.jsx("section",{className:"breadcrumb flex justify-center items-center md:h-[300px] h-[200px]",style:{backgroundImage:`linear-gradient(#13693a, #13693a6e),url(${Ye})`,backgroundSize:"cover",backgroundPosition:"center"},children:t.jsxs("div",{className:"breadcrumb-content",children:[t.jsxs("div",{className:"breadcrumb-links flex justify-center items-center md:text-2xl text-white",children:[t.jsx("p",{className:"hover:text-lightgreen px-3",children:"Home"}),t.jsx(Le,{}),t.jsx("p",{className:"hover:text-lightgreen px-3 capitalize ",children:e==="goods-vehicle"?"goods vehicle":e==="agri-inputs"?"agri inputs":e})]}),t.jsx("p",{className:"text-lightgreen md:text-6xl text-3xl font-bold text-center mt-3 uppercase",style:{textShadow:"0 0 15px black"},children:e==="goods-vehicle"?`${s==="old"?"used":s} goods vehicle`:e==="agri-inputs"?s:`${s==="old"?"used":s} ${e}`})]})})})},X=()=>t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:t.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),t.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:t.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),t.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:t.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),t.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:t.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),t.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:t.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),t.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:t.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})})]}),Je=(e,s)=>{let a;return(...n)=>{clearTimeout(a),a=setTimeout(()=>e(...n),s)}},oe=e=>e>=1e7?(e/1e7).toFixed(2)+" Cr":e>=1e5?(e/1e5).toFixed(2)+" L":e>=1e3?(e/1e3).toFixed(2)+" T":e.toString(),Ze=e=>{const s=re(),a=(e==null?void 0:e.max_price)??1e4,n=(e==null?void 0:e.min_price)??0,o=(e==null?void 0:e.priceGap)??10,[r,d]=u.useState(n),[i,c]=u.useState(a);u.useEffect(()=>{d(n),c(a)},[n,a]);const m=u.useCallback(Je((p,b)=>{s(ve(b)),s(Ne(p))},300),[]),x=(p,b)=>{const h=parseFloat(b);if(p==="min"){const j=Math.min(i-o,h);d(j),m(j,i)}else if(p==="max"){const j=Math.max(r+o,h);c(j),m(r,j)}};return t.jsxs("div",{className:"wrapper price-range",children:[t.jsx("header",{children:t.jsx("p",{children:"Use slider to adjust min and max price"})}),t.jsxs("div",{className:"price-input",children:[t.jsxs("div",{className:"field",children:[t.jsx("label",{htmlFor:"min-price",children:"Min"}),t.jsx("input",{id:"min-price",type:"text",className:"input-min text-[12px]",value:oe(r),readOnly:!0})]}),t.jsx("div",{className:"separator",children:"-"}),t.jsxs("div",{className:"field",children:[t.jsx("label",{htmlFor:"max-price",children:"Max"}),t.jsx("input",{id:"max-price",type:"text",className:"input-max md:text-sm text-[12px]",value:oe(i),readOnly:!0})]})]}),t.jsx("div",{className:"slider",children:t.jsx("div",{className:"progress",style:{left:`${(r-n)/(a-n)*100}%`,right:`${100-(i-n)/(a-n)*100}%`}})}),t.jsxs("div",{className:"range-input",children:[t.jsx("input",{type:"range",className:"range-min",min:n,max:a,value:r,step:"1",onChange:p=>x("min",p.target.value)}),t.jsx("input",{type:"range",className:"range-max",min:n,max:a,value:i,step:"1",onChange:p=>x("max",p.target.value)})]})]})},Xe=({categoryId:e,type:s,categoryProduct:a})=>{const{filterBtnState:n,setFilterBtnState:o}=u.useContext(xe);console.log(e),console.log(s);const{data:r,isLoading:d}=q({queryKey:["brand-list",e,s],queryFn:()=>Oe(e,s),enabled:!!a}),{data:i,isLoading:c}=q({queryKey:["state-district-list",e,s],queryFn:()=>Ie(e,s),enabled:!!r}),{data:m,isLoading:x}=q({queryKey:["year-of-purchase-list",e,s],queryFn:()=>Ae(e,s),enabled:!!i}),{data:p,isLoading:b}=q({queryKey:["maxmin-price-list",e,s],queryFn:()=>Te(e,s),enabled:!!m}),h=r?r.filter(l=>l.popular===1&&l.item_count!=0):[],j=r?r.filter(l=>l.item_count!=0&&l.popular!=1):[],[_,O]=u.useState([]),[S,k]=u.useState([]),P=l=>{const g=r==null?void 0:r.find(w=>w.brand_id===l);g&&O(w=>w.some(L=>L.brand_id===g.brand_id)?w.filter(L=>L.brand_id!==g.brand_id):[...w,g])},A=l=>{const g=i==null?void 0:i.find(w=>w.state_id===l);g&&k(w=>w.some(L=>L.state_id===g.state_id)?w.filter(L=>L.state_id!==g.state_id):[...w,g])};u.useEffect(()=>{console.log(S)},[S]);const y=re(),T=we();u.useEffect(()=>{y(_e())},[T.pathname,y]);const B=F(l=>l.counter.filterParams.brandId),Z=F(l=>l.counter.filterParams.modelId),z=F(l=>l.counter.filterParams.stateId),G=F(l=>l.counter.filterParams.districtId),V=F(l=>l.counter.filterParams.yom),N=F(l=>l.counter.filterParams.minPrice),f=F(l=>l.counter.filterParams.maxPrice);console.log(`"${B}"`),console.log(`"${Z}"`),console.log(`"${z}"`),console.log(`"${G}"`),console.log(`"${V}"`),console.log(`"${N}"`),console.log(`"${f}"`);const ie=sessionStorage.getItem("brand-name");return t.jsx(t.Fragment,{children:t.jsxs("aside",{className:n?"filter-product-sidebar active":"filter-product-sidebar",children:[t.jsxs("div",{className:"lg:hidden filter-headeing flex items-center px-5 py-2 sticky -top-[10px] rounded-xl",children:[t.jsx(Re,{className:"text-3xl text-white absolute",onClick:()=>{o(!1)}}),t.jsx("p",{className:"text-xl text-white text-center w-full ",children:"Filter"})]}),t.jsxs("section",{className:"w-full bg-white my-3 p-2 rounded-3xl shadow",children:[e!==6&&e!==8&&e!==9?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"product__brands",children:t.jsxs("details",{open:!0,className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[t.jsx("summary",{className:"list-none",children:t.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[t.jsx("span",{children:"BRANDS"}),t.jsx(I,{className:"inline"})]})}),t.jsx("div",{className:"brands-list border-t p-2 h-[400px] overflow-y-auto",children:t.jsxs("div",{className:"popular-brands text-center",children:[t.jsx("p",{className:"text-sm bg-gradient-green text-white px-3 py-2 mb-2 rounded-xl",children:"POPULAR BRANDS"}),t.jsx("div",{className:"grid grid-cols-3 gap-2",children:d?t.jsx(X,{}):h&&h.map(l=>t.jsxs("div",{className:"brand-select ",children:[t.jsx("input",{type:"checkbox",id:l.brand_id,className:"hidden",checked:(l==null?void 0:l.brand_id)===+ie}),console.log(typeof(l==null?void 0:l.brand_id)),console.log(typeof+ie),t.jsx("label",{htmlFor:l.brand_id,className:" border rounded-2xl p-2",children:t.jsxs("div",{className:"text-center",onClick:()=>{y(le(l.brand_id)),P(l.brand_id)},children:[t.jsx("img",{src:l.brand_logo,alt:"brand-logo",className:"w-[40px] h-[40px] object-contain mx-auto"}),t.jsx("p",{className:"brand-name capitalize text-sm truncate",children:l.brand_name}),t.jsxs("p",{className:"brand-product-count text-sm",children:["(",l.item_count,")"]})]})})]},l.brand_id))}),t.jsx("p",{className:"text-sm bg-gradient-green text-white px-3 py-2 my-3 rounded-xl",children:"OTHER BRANDS"}),t.jsx("div",{className:"grid grid-cols-3 gap-2",children:d?t.jsx(X,{}):j&&j.map(l=>t.jsxs("div",{className:"brand-select ",children:[t.jsx("input",{type:"checkbox",id:l.brand_id,className:"hidden"}),t.jsx("label",{htmlFor:l.brand_id,className:" border rounded-2xl p-2",children:t.jsxs("div",{className:"text-center",onClick:()=>{y(le(l.brand_id)),P(l.brand_id)},children:[t.jsx("img",{src:l.brand_logo,alt:"brand-logo",className:"w-[40px] h-[40px] object-contain mx-auto"}),t.jsx("p",{className:"brand-name capitalize text-sm truncate",children:l.brand_name}),t.jsxs("p",{className:"brand-product-count text-sm",children:["(",l.item_count,")"]})]})})]},l.brand_id))})]})})]})}),B!=""?t.jsx("div",{className:"brandwise__models",children:t.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[t.jsx("summary",{className:"list-none",children:t.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[t.jsx("span",{children:"MODELS"}),t.jsx(I,{className:"inline"})]})}),_&&_.map(l=>t.jsx("div",{className:"brands-list border-t p-2 overflow-y-auto",children:t.jsxs("div",{className:"popular-brands text-center",children:[t.jsx("p",{className:"text-sm bg-gradient-green text-white px-3 py-2 mb-2 rounded-xl",children:l.brand_name}),t.jsx("div",{className:"grid grid-cols-3 gap-2",children:d?t.jsx(X,{}):l&&l.model.filter(g=>g.item_count!=0).map(g=>t.jsxs("div",{className:"model-select ",children:[t.jsx("input",{type:"checkbox",id:g.model_id,className:"hidden"}),t.jsx("label",{htmlFor:g.model_id,className:" border rounded-2xl p-2",children:t.jsxs("div",{className:"text-center",onClick:()=>y(ke(g.model_id)),children:[t.jsx("img",{src:g.model_image,alt:"brand-logo",className:"w-[40px] h-[40px] object-contain mx-auto"}),t.jsx("p",{className:"brand-name capitalize text-sm truncate",children:g.model_name}),t.jsxs("p",{className:"brand-product-count text-sm",children:["(",g.item_count,")"]})]})})]},g.model_id))})]})},l.id))]})}):null,t.jsx("div",{className:"product_statewise",children:t.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[t.jsx("summary",{className:"list-none",children:t.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[t.jsx("span",{children:"STATES"}),t.jsx(I,{className:"inline"})]})}),t.jsx("div",{className:"state-list border-t p-2 max-h-[400px] overflow-y-auto",children:t.jsx("ul",{children:i&&i.filter(l=>l.item_count!=0).map(l=>t.jsxs("li",{className:"state-and-district-list ",children:[t.jsx("input",{type:"checkbox",id:l.state_name,className:"hidden"}),t.jsx("label",{htmlFor:l.state_name,className:" bg-white shadow m-3 p-3 rounded-2xl text-sm items-center justify-between transition-[0.3s] hover:scale-105",onClick:()=>{y(Pe(l.state_id)),A(l.state_id)},children:t.jsxs("div",{className:"flex justify-between",children:[t.jsx("span",{className:"inline-block",children:l.state_name}),t.jsxs("span",{className:"text-nowrap inline-block",children:[l.item_count," Items"]})]})})]},l.state_id))})})]})}),z!=""?t.jsx("div",{className:"product_districtwise",children:t.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[t.jsx("summary",{className:"list-none",children:t.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[t.jsx("span",{children:"DISTRICT"}),t.jsx(I,{className:"inline"})]})}),S&&S.map(l=>t.jsxs("div",{className:"district-list border-t p-2",children:[t.jsx("p",{className:"text-sm text-center bg-gradient-green text-white px-3 py-2 mb-2 rounded-xl",children:l.state_name}),t.jsx("ul",{children:l.dist.map(g=>t.jsxs("li",{className:"state-and-district-list ",children:[t.jsx("input",{type:"checkbox",id:g.dist_name,className:"hidden"}),t.jsx("label",{htmlFor:g.dist_name,className:" bg-white shadow m-3 p-3 rounded-2xl text-sm items-center justify-between transition-[0.3s] hover:scale-105",onClick:()=>y(Se(g.dist_id)),children:t.jsxs("div",{className:"flex justify-between",children:[t.jsx("span",{className:"inline-block",children:g.dist_name}),t.jsxs("span",{className:"text-nowrap inline-block",children:[g.item_count," Items"]})]})})]},g.dist_id))})]},l.state_id))]})}):null,t.jsx("div",{className:"product_districtwise",children:t.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[t.jsx("summary",{className:"list-none ",children:t.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[t.jsx("span",{children:"BY YEAR"}),t.jsx(I,{className:"inline"})]})}),t.jsx("div",{className:"state-list border-t p-2 max-h-[400px] overflow-y-auto",children:t.jsx("ul",{children:m&&m.filter(l=>l.item_count!=0).map(l=>t.jsxs("li",{className:"year-of-manufacture",children:[t.jsx("input",{type:"checkbox",id:l.year,className:"hidden"}),t.jsx("label",{htmlFor:l.year,className:" bg-white shadow m-3 p-3 rounded-2xl text-sm justify-between hover:scale-105",onClick:()=>y(Ee(l.year)),children:t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx("span",{children:l.year}),t.jsxs("span",{className:"text-nowrap",children:[l.item_count," Items"]})]})})]},l.year))})})]})})]}):null,t.jsx("div",{className:"product_by_year",children:t.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[t.jsx("summary",{className:"list-none ",children:t.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[t.jsx("span",{children:"PRICE"}),t.jsx(I,{className:"inline"})]})}),t.jsx(Ze,{max_price:p&&Math.ceil(p.max),min_price:p&&Math.ceil(p.min)})]})})]}),t.jsx("div",{className:"text-center animate-pulse sticky bottom-[-100px] right-0 md:hidden block",children:t.jsx("button",{onClick:()=>{o(!1)},type:"button",className:"apply-filter w-[160px] text-center px-5 py-2 bg-gradient-green shadow-lg rounded-3xl  text-white ms-auto",children:"APPLY"})})]})})},et=({sort_btn_state:e,sortBtnActive:s,setSortBtnActive:a})=>{const[n,o]=u.useState(0),{setPriceSort:r}=u.useContext(pe),d=i=>{switch(o(i),i){case 1:r("desc"),a(!s),window.scrollTo(0,0);break;case 2:r("asc"),a(!s),window.scrollTo(0,0);break;case 3:r("nf"),a(!s),window.scrollTo(0,0);break}};return t.jsx(t.Fragment,{children:t.jsx("section",{className:"sort-product-tab-section  md:sticky top-[155px] z-10 lg:py-2 bg-whitesmoke",children:t.jsxs("div",{className:e?"active bg-white mx-3 mt-3 flex lg:flex-row flex-col items-center rounded-3xl md:gap-5":" bg-white mx-3 mt-3 flex lg:flex-row flex-col items-center rounded-3xl md:gap-5",children:[t.jsx("p",{className:"label-sort text-white bg-darkGreen px-5 py-2 rounded-3xl m-2",children:"SORT BY"}),t.jsxs("div",{className:"sort-buttons flex lg:flex-row items-center flex-col",children:[t.jsx("button",{onClick:()=>d(1),className:`px-4 py-2 m-2 ${n===1?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Price High to Low"}),t.jsx("button",{onClick:()=>d(2),className:`px-4 py-2 m-2 ${n===2?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Price Low to High"}),t.jsx("button",{onClick:()=>d(3),className:`px-4 py-2 m-2 ${n===3?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Newest First"})]})]})})})};let tt={data:""},st=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||tt,at=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,rt=/\/\*[^]*?\*\/|  +/g,de=/\n+/g,C=(e,s)=>{let a="",n="",o="";for(let r in e){let d=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+d+";":n+=r[1]=="f"?C(d,r):r+"{"+C(d,r[1]=="k"?"":s)+"}":typeof d=="object"?n+=C(d,s?s.replace(/([^,])+/g,i=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,i):i?i+" "+c:c)):r):d!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=C.p?C.p(r,d):r+":"+d+";")}return a+(s&&o?s+"{"+o+"}":o)+n},E={},he=e=>{if(typeof e=="object"){let s="";for(let a in e)s+=a+he(e[a]);return s}return e},it=(e,s,a,n,o)=>{let r=he(e),d=E[r]||(E[r]=(c=>{let m=0,x=11;for(;m<c.length;)x=101*x+c.charCodeAt(m++)>>>0;return"go"+x})(r));if(!E[d]){let c=r!==e?e:(m=>{let x,p,b=[{}];for(;x=at.exec(m.replace(rt,""));)x[4]?b.shift():x[3]?(p=x[3].replace(de," ").trim(),b.unshift(b[0][p]=b[0][p]||{})):b[0][x[1]]=x[2].replace(de," ").trim();return b[0]})(e);E[d]=C(o?{["@keyframes "+d]:c}:c,a?"":"."+d)}let i=a&&E.g?E.g:null;return a&&(E.g=E[d]),((c,m,x,p)=>{p?m.data=m.data.replace(p,c):m.data.indexOf(c)===-1&&(m.data=x?c+m.data:m.data+c)})(E[d],s,n,i),d},nt=(e,s,a)=>e.reduce((n,o,r)=>{let d=s[r];if(d&&d.call){let i=d(a),c=i&&i.props&&i.props.className||/^go/.test(i)&&i;d=c?"."+c:i&&typeof i=="object"?i.props?"":C(i,""):i===!1?"":i}return n+o+(d??"")},"");function J(e){let s=this||{},a=e.call?e(s.p):e;return it(a.unshift?a.raw?nt(a,[].slice.call(arguments,1),s.p):a.reduce((n,o)=>Object.assign(n,o&&o.call?o(s.p):o),{}):a,st(s.target),s.g,s.o,s.k)}let fe,ee,te;J.bind({g:1});let $=J.bind({k:1});function lt(e,s,a,n){C.p=s,fe=e,ee=a,te=n}function M(e,s){let a=this||{};return function(){let n=arguments;function o(r,d){let i=Object.assign({},r),c=i.className||o.className;a.p=Object.assign({theme:ee&&ee()},i),a.o=/ *go\d+/.test(c),i.className=J.apply(a,n)+(c?" "+c:"");let m=e;return e[0]&&(m=i.as||e,delete i.as),te&&m[0]&&te(i),fe(m,i)}return o}}var ot=e=>typeof e=="function",W=(e,s)=>ot(e)?e(s):e,dt=(()=>{let e=0;return()=>(++e).toString()})(),ge=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let s=matchMedia("(prefers-reduced-motion: reduce)");e=!s||s.matches}return e}})(),ct=20,Y=new Map,ut=1e3,ce=e=>{if(Y.has(e))return;let s=setTimeout(()=>{Y.delete(e),R({type:4,toastId:e})},ut);Y.set(e,s)},mt=e=>{let s=Y.get(e);s&&clearTimeout(s)},se=(e,s)=>{switch(s.type){case 0:return{...e,toasts:[s.toast,...e.toasts].slice(0,ct)};case 1:return s.toast.id&&mt(s.toast.id),{...e,toasts:e.toasts.map(r=>r.id===s.toast.id?{...r,...s.toast}:r)};case 2:let{toast:a}=s;return e.toasts.find(r=>r.id===a.id)?se(e,{type:1,toast:a}):se(e,{type:0,toast:a});case 3:let{toastId:n}=s;return n?ce(n):e.toasts.forEach(r=>{ce(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,visible:!1}:r)};case 4:return s.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==s.toastId)};case 5:return{...e,pausedAt:s.time};case 6:let o=s.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+o}))}}},K=[],U={toasts:[],pausedAt:void 0},R=e=>{U=se(U,e),K.forEach(s=>{s(U)})},xt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},pt=(e={})=>{let[s,a]=u.useState(U);u.useEffect(()=>(K.push(a),()=>{let o=K.indexOf(a);o>-1&&K.splice(o,1)}),[s]);let n=s.toasts.map(o=>{var r,d;return{...e,...e[o.type],...o,duration:o.duration||((r=e[o.type])==null?void 0:r.duration)||(e==null?void 0:e.duration)||xt[o.type],style:{...e.style,...(d=e[o.type])==null?void 0:d.style,...o.style}}});return{...s,toasts:n}},ht=(e,s="blank",a)=>({createdAt:Date.now(),visible:!0,type:s,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(a==null?void 0:a.id)||dt()}),D=e=>(s,a)=>{let n=ht(s,e,a);return R({type:2,toast:n}),n.id},v=(e,s)=>D("blank")(e,s);v.error=D("error");v.success=D("success");v.loading=D("loading");v.custom=D("custom");v.dismiss=e=>{R({type:3,toastId:e})};v.remove=e=>R({type:4,toastId:e});v.promise=(e,s,a)=>{let n=v.loading(s.loading,{...a,...a==null?void 0:a.loading});return e.then(o=>(v.success(W(s.success,o),{id:n,...a,...a==null?void 0:a.success}),o)).catch(o=>{v.error(W(s.error,o),{id:n,...a,...a==null?void 0:a.error})}),e};var ft=(e,s)=>{R({type:1,toast:{id:e,height:s}})},gt=()=>{R({type:5,time:Date.now()})},bt=e=>{let{toasts:s,pausedAt:a}=pt(e);u.useEffect(()=>{if(a)return;let r=Date.now(),d=s.map(i=>{if(i.duration===1/0)return;let c=(i.duration||0)+i.pauseDuration-(r-i.createdAt);if(c<0){i.visible&&v.dismiss(i.id);return}return setTimeout(()=>v.dismiss(i.id),c)});return()=>{d.forEach(i=>i&&clearTimeout(i))}},[s,a]);let n=u.useCallback(()=>{a&&R({type:6,time:Date.now()})},[a]),o=u.useCallback((r,d)=>{let{reverseOrder:i=!1,gutter:c=8,defaultPosition:m}=d||{},x=s.filter(h=>(h.position||m)===(r.position||m)&&h.height),p=x.findIndex(h=>h.id===r.id),b=x.filter((h,j)=>j<p&&h.visible).length;return x.filter(h=>h.visible).slice(...i?[b+1]:[0,b]).reduce((h,j)=>h+(j.height||0)+c,0)},[s]);return{toasts:s,handlers:{updateHeight:ft,startPause:gt,endPause:n,calculateOffset:o}}},jt=$`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,yt=$`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,vt=$`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Nt=M("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${jt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${yt} 0.15s ease-out forwards;
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
    animation: ${vt} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,wt=$`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,_t=M("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${wt} 1s linear infinite;
`,kt=$`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Pt=$`
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
}`,St=M("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${kt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Pt} 0.2s ease-out forwards;
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
`,Et=M("div")`
  position: absolute;
`,$t=M("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Ft=$`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ct=M("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ft} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Mt=({toast:e})=>{let{icon:s,type:a,iconTheme:n}=e;return s!==void 0?typeof s=="string"?u.createElement(Ct,null,s):s:a==="blank"?null:u.createElement($t,null,u.createElement(_t,{...n}),a!=="loading"&&u.createElement(Et,null,a==="error"?u.createElement(Nt,{...n}):u.createElement(St,{...n})))},Lt=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Rt=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ot="0%{opacity:0;} 100%{opacity:1;}",It="0%{opacity:1;} 100%{opacity:0;}",At=M("div")`
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
`,Tt=M("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Bt=(e,s)=>{let a=e.includes("top")?1:-1,[n,o]=ge()?[Ot,It]:[Lt(a),Rt(a)];return{animation:s?`${$(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${$(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Dt=u.memo(({toast:e,position:s,style:a,children:n})=>{let o=e.height?Bt(e.position||s||"top-center",e.visible):{opacity:0},r=u.createElement(Mt,{toast:e}),d=u.createElement(Tt,{...e.ariaProps},W(e.message,e));return u.createElement(At,{className:e.className,style:{...o,...a,...e.style}},typeof n=="function"?n({icon:r,message:d}):u.createElement(u.Fragment,null,r,d))});lt(u.createElement);var zt=({id:e,className:s,style:a,onHeightUpdate:n,children:o})=>{let r=u.useCallback(d=>{if(d){let i=()=>{let c=d.getBoundingClientRect().height;n(e,c)};i(),new MutationObserver(i).observe(d,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return u.createElement("div",{ref:r,className:s,style:a},o)},Gt=(e,s)=>{let a=e.includes("top"),n=a?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:ge()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${s*(a?1:-1)}px)`,...n,...o}},Vt=J`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,H=16,qt=({reverseOrder:e,position:s="top-center",toastOptions:a,gutter:n,children:o,containerStyle:r,containerClassName:d})=>{let{toasts:i,handlers:c}=bt(a);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:H,left:H,right:H,bottom:H,pointerEvents:"none",...r},className:d,onMouseEnter:c.startPause,onMouseLeave:c.endPause},i.map(m=>{let x=m.position||s,p=c.calculateOffset(m,{reverseOrder:e,gutter:n,defaultPosition:s}),b=Gt(x,p);return u.createElement(zt,{id:m.id,key:m.id,onHeightUpdate:c.updateHeight,className:m.visible?Vt:"",style:b},m.type==="custom"?W(m.message,m):o?o(m):u.createElement(Dt,{toast:m,position:x}))}))},Ht=v,ae=new Map,Q=new WeakMap,ue=0,Qt=void 0;function Yt(e){return e?(Q.has(e)||(ue+=1,Q.set(e,ue.toString())),Q.get(e)):"0"}function Kt(e){return Object.keys(e).sort().filter(s=>e[s]!==void 0).map(s=>`${s}_${s==="root"?Yt(e.root):e[s]}`).toString()}function Ut(e){const s=Kt(e);let a=ae.get(s);if(!a){const n=new Map;let o;const r=new IntersectionObserver(d=>{d.forEach(i=>{var c;const m=i.isIntersecting&&o.some(x=>i.intersectionRatio>=x);e.trackVisibility&&typeof i.isVisible>"u"&&(i.isVisible=m),(c=n.get(i.target))==null||c.forEach(x=>{x(m,i)})})},e);o=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),a={id:s,observer:r,elements:n},ae.set(s,a)}return a}function Wt(e,s,a={},n=Qt){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const c=e.getBoundingClientRect();return s(n,{isIntersecting:n,target:e,intersectionRatio:typeof a.threshold=="number"?a.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:o,observer:r,elements:d}=Ut(a),i=d.get(e)||[];return d.has(e)||d.set(e,i),i.push(s),r.observe(e),function(){i.splice(i.indexOf(s),1),i.length===0&&(d.delete(e),r.unobserve(e)),d.size===0&&(r.disconnect(),ae.delete(o))}}function Jt({threshold:e,delay:s,trackVisibility:a,rootMargin:n,root:o,triggerOnce:r,skip:d,initialInView:i,fallbackInView:c,onChange:m}={}){var x;const[p,b]=u.useState(null),h=u.useRef(),[j,_]=u.useState({inView:!!i,entry:void 0});h.current=m,u.useEffect(()=>{if(d||!p)return;let P;return P=Wt(p,(A,y)=>{_({inView:A,entry:y}),h.current&&h.current(A,y),y.isIntersecting&&r&&P&&(P(),P=void 0)},{root:o,rootMargin:n,threshold:e,trackVisibility:a,delay:s},c),()=>{P&&P()}},[Array.isArray(e)?e.toString():e,p,o,n,r,d,a,c,s]);const O=(x=j.entry)==null?void 0:x.target,S=u.useRef();!p&&O&&!r&&!d&&S.current!==O&&(S.current=O,_({inView:!!i,entry:void 0}));const k=[b,j.inView,j.entry];return k.ref=k[0],k.inView=k[1],k.entry=k[2],k}const Zt=new Array(6).fill(!0),is=()=>{var V;const{category:e,type:s}=me(),[a,n]=u.useState(0),[o,r]=u.useState(null),{priceSort:d}=u.useContext(pe),i=F(N=>N.counter.filterParams);console.log(i);const[c,m]=u.useState(0),[x,p]=u.useState(12);re();const b=sessionStorage.getItem("brand-name"),{data:h,hasNextPage:j,fetchNextPage:_,isFetchingNextPage:O,isLoading:S,isError:k,error:P}=Ue({queryKey:["category-wise-all-product",a,o,c,x,d,i.stateId.toString(),i.districtId.toString(),i.yom.toString(),i.brandId.toString()||b,i.modelId.toString(),i.minPrice,i.maxPrice],queryFn:({pageParam:N})=>Be(a,o,N*x,x,d,i.stateId.toString(),i.districtId.toString(),i.yom.toString(),i.brandId.toString()||b,i.modelId.toString(),i.minPrice,i.maxPrice),getNextPageParam:(N,f)=>N&&N.length===12?f.length+1:void 0,initialPageParam:0}),{filterBtnState:A,setFilterBtnState:y}=u.useContext(xe),[T,B]=u.useState(!1),Z=()=>{B(!T)},{ref:z,inView:G}=Jt({threshold:0});return u.useEffect(()=>{G&&(j?_():Ht.success("All products are loaded!",{duration:5e3}))},[G,j]),u.useEffect(()=>{e==="tractor"?(n(1),r(s)):e==="goods-vehicle"?(n(3),r(s)):e==="harvester"?(n(4),r(s)):e==="implements"?(n(5),r(s)):e==="tyre"?(n(7),r(s)):e==="agri-inputs"&&(s==="seeds"&&n(6),s==="pesticides"&&n(8),s==="fertilizer"&&n(9))},[e,s]),t.jsxs(t.Fragment,{children:[t.jsx(De,{}),t.jsx(We,{}),t.jsx(qt,{}),t.jsx("section",{className:"mobile-filter-and-sort-btn lg:hidden block bg-lightgreen sticky md:top-[147px] top-[62px] z-10",children:t.jsxs("div",{className:"container px-10  grid grid-cols-2",children:[t.jsxs("button",{type:"button",className:"sort-btn text-lg text-white border-r border-white h-full py-2",onClick:()=>y(!0),children:[t.jsx(ze,{className:"inline mb-1"})," Filter"]}),t.jsxs("button",{type:"button",className:"sort-btn text-lg text-white",onClick:Z,children:[t.jsx(Ge,{className:"inline mb-1"})," Sort"]})]})}),t.jsxs("main",{className:"products-container-wrapper container bg-whitesmoke md:px-10 ",children:[t.jsx(Xe,{categoryId:a,type:s,categoryProduct:h}),t.jsx(et,{sort_btn_state:T,sortBtnActive:T,setSortBtnActive:B}),t.jsx("section",{className:"category-wise-all-product",children:S?t.jsx("div",{className:"product-skeleton grid md:grid-cols-3 2xl:grid-cols-4 grid-cols-2 px-5 gap-x-4",children:Zt.map((N,f)=>t.jsx(Qe,{},f))}):t.jsxs("div",{className:"product-list-container mb-5",children:[t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 md:px-5  px-2 md:gap-x-4 gap-x-2",children:(V=h==null?void 0:h.pages)==null?void 0:V.map(N=>N&&N.map(f=>t.jsx($e,{to:`${Ve}/${e}/${s}/${f.id}`,children:t.jsx(He,{product_full_details:f,product_image:f.front_image?f.front_image:f.image1,product_title:`${f.brand_name} ${f.model_name}`=="Others Others"||`${f.brand_name} ${f.model_name}`=="undefined undefined"||`${f.brand_name} ${f.model_name}`=="null null"?f.title:`${f.brand_name} ${f.model_name}`,product_location:f.district_name,product_pricing:f.price,distance_product:f.distance,rent_type:s==="rent"&&f.rent_type?` / ${f.rent_type.slice(4)}`:""})},f.id)))}),j?t.jsxs("div",{ref:z,className:"lod-more-product flex items-center gap-2 justify-center w-full mt-5",children:[t.jsxs("div",{className:"relative",children:[t.jsx("span",{className:"loader"}),t.jsx("img",{src:Fe,alt:"this is a icon of preloader",className:"absolute top-[49.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg"})]}),t.jsx("span",{className:"text-darkGreen text-2xl",children:"Loading More"})]}):null]})})]}),t.jsx(qe,{})]})};export{is as default};
