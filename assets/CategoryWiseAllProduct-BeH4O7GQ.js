import{v as de,w as ke,x as Pe,y as fe,j as t,z as be,r as u,A as Se,B as Ee,F as ge,C as $e,D as Fe,E as R,G as ue,H as Ce,J as Me,K as Oe,M as Re,N as Le,O as Ie,Q as Ae,S as Te,T as je,L as Be,U as De,V as ze}from"./index--TC-clE4.js";import{Q as Ge,b as Ve,c as He,u as G,d as qe,e as T,H as Qe,f as Ye,g as Ue,B as Ke,F as We}from"./Header-DiU10t4C.js";import{P as Je}from"./ProductCard-DenQEgfP.js";import{P as Ze}from"./ProductCardSkeleton-BMLk4vgG.js";import{b as Xe}from"./img_hero-DAQ5Jl1R.js";import"./index-C8yf4Nmi.js";var et=class extends Ge{constructor(e,s){super(e,s)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,s){super.setOptions({...e,behavior:de()},s)}getOptimisticResult(e){return e.behavior=de(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,s){var j,_;const{state:a}=e,i=super.createResult(e,s),{isFetching:c,isRefetching:r,isError:o,isRefetchError:n}=i,d=(_=(j=a.fetchMeta)==null?void 0:j.fetchMore)==null?void 0:_.direction,m=o&&d==="forward",h=c&&d==="forward",x=o&&d==="backward",g=c&&d==="backward";return{...i,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:ke(s,a.data),hasPreviousPage:Pe(s,a.data),isFetchNextPageError:m,isFetchingNextPage:h,isFetchPreviousPageError:x,isFetchingPreviousPage:g,isRefetchError:n&&!m&&!x,isRefetching:r&&!h&&!g}}};function tt(e,s){return Ve(e,et)}const st=()=>{const{category:e,type:s}=fe();return t.jsx(t.Fragment,{children:t.jsx("section",{className:"breadcrumb flex justify-center items-center md:h-[300px] h-[200px]",style:{backgroundImage:`linear-gradient(#13693a, #13693a6e),url(${Xe})`,backgroundSize:"cover",backgroundPosition:"center"},children:t.jsxs("div",{className:"breadcrumb-content",children:[t.jsxs("div",{className:"breadcrumb-links flex justify-center items-center md:text-2xl text-white",children:[t.jsx("p",{className:"hover:text-lightgreen px-3",children:"Home"}),t.jsx(He,{}),t.jsx("p",{className:"hover:text-lightgreen px-3 capitalize ",children:e==="goods-vehicle"?"goods vehicle":e==="agri-inputs"?"agri inputs":e})]}),t.jsx("p",{className:"text-lightgreen md:text-6xl text-3xl font-bold text-center mt-3 uppercase",style:{textShadow:"0 0 15px black"},children:e==="goods-vehicle"?`${s==="old"?"used":s} goods vehicle`:e==="agri-inputs"?s:`${s==="old"?"used":s} ${e}`})]})})})},X=()=>t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:t.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),t.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:t.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),t.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:t.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),t.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:t.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),t.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:t.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})}),t.jsx("div",{className:"brand-select text-center border rounded-2xl p-2",children:t.jsx("div",{className:"brand-skeleton skeleton-loading-gray h-[60px]"})})]}),at=(e,s)=>{let a;return(...i)=>{clearTimeout(a),a=setTimeout(()=>e(...i),s)}},me=e=>e>=1e7?(e/1e7).toFixed(2)+" Cr":e>=1e5?(e/1e5).toFixed(2)+" L":e>=1e3?(e/1e3).toFixed(2)+" T":e.toString(),rt=e=>{const s=be(),a=(e==null?void 0:e.max_price)??1e4,i=(e==null?void 0:e.min_price)??0,c=(e==null?void 0:e.priceGap)??10,[r,o]=u.useState(i),[n,d]=u.useState(a);u.useEffect(()=>{o(i),d(a)},[i,a]);const m=u.useCallback(at((x,g)=>{s(Se(g)),s(Ee(x))},300),[]),h=(x,g)=>{const f=parseFloat(g);if(x==="min"){const j=Math.min(n-c,f);o(j),m(j,n)}else if(x==="max"){const j=Math.max(r+c,f);d(j),m(r,j)}};return t.jsxs("div",{className:"wrapper price-range",children:[t.jsx("header",{children:t.jsx("p",{children:"Use slider to adjust min and max price"})}),t.jsxs("div",{className:"price-input",children:[t.jsxs("div",{className:"field",children:[t.jsx("label",{htmlFor:"min-price",children:"Min"}),t.jsx("input",{id:"min-price",type:"text",className:"input-min text-[12px]",value:me(r),readOnly:!0})]}),t.jsx("div",{className:"separator",children:"-"}),t.jsxs("div",{className:"field",children:[t.jsx("label",{htmlFor:"max-price",children:"Max"}),t.jsx("input",{id:"max-price",type:"text",className:"input-max md:text-sm text-[12px]",value:me(n),readOnly:!0})]})]}),t.jsx("div",{className:"slider",children:t.jsx("div",{className:"progress",style:{left:`${(r-i)/(a-i)*100}%`,right:`${100-(n-i)/(a-i)*100}%`}})}),t.jsxs("div",{className:"range-input",children:[t.jsx("input",{type:"range",className:"range-min",min:i,max:a,value:r,step:"1",onChange:x=>h("min",x.target.value)}),t.jsx("input",{type:"range",className:"range-max",min:i,max:a,value:n,step:"1",onChange:x=>h("max",x.target.value)})]})]})},it=({categoryId:e,type:s,categoryProduct:a})=>{const{filterBtnState:i,setFilterBtnState:c}=u.useContext(ge);console.log(e),console.log(s);const{data:r,isLoading:o}=G({queryKey:["brand-list",e,s],queryFn:()=>Le(e,s),enabled:!!a}),{data:n,isLoading:d}=G({queryKey:["state-district-list",e,s],queryFn:()=>Ie(e,s),enabled:!!r}),{data:m,isLoading:h}=G({queryKey:["year-of-purchase-list",e,s],queryFn:()=>Ae(e,s),enabled:!!n}),{data:x,isLoading:g}=G({queryKey:["maxmin-price-list",e,s],queryFn:()=>Te(e,s),enabled:!!m}),f=r?r.filter(l=>l.popular===1&&l.item_count!=0):[],j=r?r.filter(l=>l.item_count!=0&&l.popular!=1):[],[_,I]=u.useState([]),[P,S]=u.useState([]),N=l=>{const p=r==null?void 0:r.find(w=>w.brand_id===l);p&&I(w=>w.some(k=>k.brand_id===p.brand_id)?w.filter(k=>k.brand_id!==p.brand_id):[...w,p])},B=l=>{const p=n==null?void 0:n.find(w=>w.state_id===l);p&&S(w=>w.some(k=>k.state_id===p.state_id)?w.filter(k=>k.state_id!==p.state_id):[...w,p])};u.useEffect(()=>{console.log(P)},[P]);const y=be(),re=$e();u.useEffect(()=>{y(Fe())},[re.pathname,y]);const A=R(l=>l.counter.filterParams.brandId),ie=R(l=>l.counter.filterParams.modelId),O=R(l=>l.counter.filterParams.stateId),D=R(l=>l.counter.filterParams.districtId),W=R(l=>l.counter.filterParams.yom),ne=R(l=>l.counter.filterParams.minPrice),J=R(l=>l.counter.filterParams.maxPrice);return console.log(`"${A}"`),console.log(`"${ie}"`),console.log(`"${O}"`),console.log(`"${D}"`),console.log(`"${W}"`),console.log(`"${ne}"`),console.log(`"${J}"`),t.jsx(t.Fragment,{children:t.jsxs("aside",{className:i?"filter-product-sidebar active":"filter-product-sidebar",children:[t.jsxs("div",{className:"lg:hidden filter-headeing flex items-center px-5 py-2 sticky -top-[10px] rounded-xl",children:[t.jsx(qe,{className:"text-3xl text-white absolute",onClick:()=>{c(!1)}}),t.jsx("p",{className:"text-xl text-white text-center w-full ",children:"Filter"})]}),t.jsxs("section",{className:"w-full bg-white my-3 p-2 rounded-3xl shadow",children:[e!==6&&e!==8&&e!==9?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"product__brands",children:t.jsxs("details",{open:!0,className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[t.jsx("summary",{className:"list-none",children:t.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[t.jsx("span",{children:"BRANDS"}),t.jsx(T,{className:"inline"})]})}),t.jsx("div",{className:"brands-list border-t p-2 h-[400px] overflow-y-auto",children:t.jsxs("div",{className:"popular-brands text-center",children:[t.jsx("p",{className:"text-sm bg-gradient-green text-white px-3 py-2 mb-2 rounded-xl",children:"POPULAR BRANDS"}),t.jsx("div",{className:"grid grid-cols-3 gap-2",children:o?t.jsx(X,{}):f&&f.map(l=>t.jsxs("div",{className:"brand-select ",children:[t.jsx("input",{type:"checkbox",id:l.brand_id,className:"hidden"}),t.jsx("label",{htmlFor:l.brand_id,className:" border rounded-2xl p-2",children:t.jsxs("div",{className:"text-center",onClick:()=>{y(ue(l.brand_id)),N(l.brand_id)},children:[t.jsx("img",{src:l.brand_logo,alt:"brand-logo",className:"w-[40px] h-[40px] object-contain mx-auto"}),t.jsx("p",{className:"brand-name capitalize text-sm truncate",children:l.brand_name}),t.jsxs("p",{className:"brand-product-count text-sm",children:["(",l.item_count,")"]})]})})]},l.brand_id))}),t.jsx("p",{className:"text-sm bg-gradient-green text-white px-3 py-2 my-3 rounded-xl",children:"OTHER BRANDS"}),t.jsx("div",{className:"grid grid-cols-3 gap-2",children:o?t.jsx(X,{}):j&&j.map(l=>t.jsxs("div",{className:"brand-select ",children:[t.jsx("input",{type:"checkbox",id:l.brand_id,className:"hidden"}),t.jsx("label",{htmlFor:l.brand_id,className:" border rounded-2xl p-2",children:t.jsxs("div",{className:"text-center",onClick:()=>{y(ue(l.brand_id)),N(l.brand_id)},children:[t.jsx("img",{src:l.brand_logo,alt:"brand-logo",className:"w-[40px] h-[40px] object-contain mx-auto"}),t.jsx("p",{className:"brand-name capitalize text-sm truncate",children:l.brand_name}),t.jsxs("p",{className:"brand-product-count text-sm",children:["(",l.item_count,")"]})]})})]},l.brand_id))})]})})]})}),A!=""?t.jsx("div",{className:"brandwise__models",children:t.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[t.jsx("summary",{className:"list-none",children:t.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[t.jsx("span",{children:"MODELS"}),t.jsx(T,{className:"inline"})]})}),_&&_.map(l=>t.jsx("div",{className:"brands-list border-t p-2 overflow-y-auto",children:t.jsxs("div",{className:"popular-brands text-center",children:[t.jsx("p",{className:"text-sm bg-gradient-green text-white px-3 py-2 mb-2 rounded-xl",children:l.brand_name}),t.jsx("div",{className:"grid grid-cols-3 gap-2",children:o?t.jsx(X,{}):l&&l.model.filter(p=>p.item_count!=0).map(p=>t.jsxs("div",{className:"model-select ",children:[t.jsx("input",{type:"checkbox",id:p.model_id,className:"hidden"}),t.jsx("label",{htmlFor:p.model_id,className:" border rounded-2xl p-2",children:t.jsxs("div",{className:"text-center",onClick:()=>y(Ce(p.model_id)),children:[t.jsx("img",{src:p.model_image,alt:"brand-logo",className:"w-[40px] h-[40px] object-contain mx-auto"}),t.jsx("p",{className:"brand-name capitalize text-sm truncate",children:p.model_name}),t.jsxs("p",{className:"brand-product-count text-sm",children:["(",p.item_count,")"]})]})})]},p.model_id))})]})},l.id))]})}):null,t.jsx("div",{className:"product_statewise",children:t.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[t.jsx("summary",{className:"list-none",children:t.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[t.jsx("span",{children:"STATES"}),t.jsx(T,{className:"inline"})]})}),t.jsx("div",{className:"state-list border-t p-2 max-h-[400px] overflow-y-auto",children:t.jsx("ul",{children:n&&n.filter(l=>l.item_count!=0).map(l=>t.jsxs("li",{className:"state-and-district-list ",children:[t.jsx("input",{type:"checkbox",id:l.state_name,className:"hidden"}),t.jsx("label",{htmlFor:l.state_name,className:" bg-white shadow m-3 p-3 rounded-2xl text-sm items-center justify-between transition-[0.3s] hover:scale-105",onClick:()=>{y(Me(l.state_id)),B(l.state_id)},children:t.jsxs("div",{className:"flex justify-between",children:[t.jsx("span",{className:"inline-block",children:l.state_name}),t.jsxs("span",{className:"text-nowrap inline-block",children:[l.item_count," Items"]})]})})]},l.state_id))})})]})}),O!=""?t.jsx("div",{className:"product_districtwise",children:t.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[t.jsx("summary",{className:"list-none",children:t.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[t.jsx("span",{children:"DISTRICT"}),t.jsx(T,{className:"inline"})]})}),P&&P.map(l=>t.jsxs("div",{className:"district-list border-t p-2",children:[t.jsx("p",{className:"text-sm text-center bg-gradient-green text-white px-3 py-2 mb-2 rounded-xl",children:l.state_name}),t.jsx("ul",{children:l.dist.map(p=>t.jsxs("li",{className:"state-and-district-list ",children:[t.jsx("input",{type:"checkbox",id:p.dist_name,className:"hidden"}),t.jsx("label",{htmlFor:p.dist_name,className:" bg-white shadow m-3 p-3 rounded-2xl text-sm items-center justify-between transition-[0.3s] hover:scale-105",onClick:()=>y(Oe(p.dist_id)),children:t.jsxs("div",{className:"flex justify-between",children:[t.jsx("span",{className:"inline-block",children:p.dist_name}),t.jsxs("span",{className:"text-nowrap inline-block",children:[p.item_count," Items"]})]})})]},p.dist_id))})]},l.state_id))]})}):null,t.jsx("div",{className:"product_districtwise",children:t.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[t.jsx("summary",{className:"list-none ",children:t.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[t.jsx("span",{children:"BY YEAR"}),t.jsx(T,{className:"inline"})]})}),t.jsx("div",{className:"state-list border-t p-2 max-h-[400px] overflow-y-auto",children:t.jsx("ul",{children:m&&m.filter(l=>l.item_count!=0).map(l=>t.jsxs("li",{className:"year-of-manufacture",children:[t.jsx("input",{type:"checkbox",id:l.year,className:"hidden"}),t.jsx("label",{htmlFor:l.year,className:" bg-white shadow m-3 p-3 rounded-2xl text-sm justify-between hover:scale-105",onClick:()=>y(Re(l.year)),children:t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx("span",{children:l.year}),t.jsxs("span",{className:"text-nowrap",children:[l.item_count," Items"]})]})})]},l.year))})})]})})]}):null,t.jsx("div",{className:"product_by_year",children:t.jsxs("details",{className:"rounded-3xl bg-white overflow-hidden shadow mb-3",children:[t.jsx("summary",{className:"list-none ",children:t.jsxs("div",{className:"flex text-darkGreen w-full justify-between items-center px-5 py-4",children:[t.jsx("span",{children:"PRICE"}),t.jsx(T,{className:"inline"})]})}),t.jsx(rt,{max_price:x&&Math.ceil(x.max),min_price:x&&Math.ceil(x.min)})]})})]})]})})},nt=({sort_btn_state:e,sortBtnActive:s,setSortBtnActive:a})=>{const[i,c]=u.useState(0),{setPriceSort:r}=u.useContext(je),o=n=>{switch(c(n),n){case 1:r("desc"),a(!s),window.scrollTo(0,0);break;case 2:r("asc"),a(!s),window.scrollTo(0,0);break;case 3:r("nf"),a(!s),window.scrollTo(0,0);break}};return t.jsx(t.Fragment,{children:t.jsx("section",{className:"sort-product-tab-section  md:sticky top-[155px] z-10 lg:py-2 bg-whitesmoke",children:t.jsxs("div",{className:e?"active bg-white mx-3 mt-3 flex lg:flex-row flex-col items-center rounded-3xl md:gap-5":" bg-white mx-3 mt-3 flex lg:flex-row flex-col items-center rounded-3xl md:gap-5",children:[t.jsx("p",{className:"label-sort text-white bg-darkGreen px-5 py-2 rounded-3xl m-2",children:"SORT BY"}),t.jsxs("div",{className:"sort-buttons flex lg:flex-row items-center flex-col",children:[t.jsx("button",{onClick:()=>o(1),className:`px-4 py-2 m-2 ${i===1?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Price High to Low"}),t.jsx("button",{onClick:()=>o(2),className:`px-4 py-2 m-2 ${i===2?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Price Low to High"}),t.jsx("button",{onClick:()=>o(3),className:`px-4 py-2 m-2 ${i===3?"border-b border-darkGreen text-darkGreen":"border-b text-black"}`,children:"Newest First"})]})]})})})};let lt={data:""},ot=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||lt,ct=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,dt=/\/\*[^]*?\*\/|  +/g,xe=/\n+/g,C=(e,s)=>{let a="",i="",c="";for(let r in e){let o=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+o+";":i+=r[1]=="f"?C(o,r):r+"{"+C(o,r[1]=="k"?"":s)+"}":typeof o=="object"?i+=C(o,s?s.replace(/([^,])+/g,n=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,n):n?n+" "+d:d)):r):o!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=C.p?C.p(r,o):r+":"+o+";")}return a+(s&&c?s+"{"+c+"}":c)+i},E={},ye=e=>{if(typeof e=="object"){let s="";for(let a in e)s+=a+ye(e[a]);return s}return e},ut=(e,s,a,i,c)=>{let r=ye(e),o=E[r]||(E[r]=(d=>{let m=0,h=11;for(;m<d.length;)h=101*h+d.charCodeAt(m++)>>>0;return"go"+h})(r));if(!E[o]){let d=r!==e?e:(m=>{let h,x,g=[{}];for(;h=ct.exec(m.replace(dt,""));)h[4]?g.shift():h[3]?(x=h[3].replace(xe," ").trim(),g.unshift(g[0][x]=g[0][x]||{})):g[0][h[1]]=h[2].replace(xe," ").trim();return g[0]})(e);E[o]=C(c?{["@keyframes "+o]:d}:d,a?"":"."+o)}let n=a&&E.g?E.g:null;return a&&(E.g=E[o]),((d,m,h,x)=>{x?m.data=m.data.replace(x,d):m.data.indexOf(d)===-1&&(m.data=h?d+m.data:m.data+d)})(E[o],s,i,n),o},mt=(e,s,a)=>e.reduce((i,c,r)=>{let o=s[r];if(o&&o.call){let n=o(a),d=n&&n.props&&n.props.className||/^go/.test(n)&&n;o=d?"."+d:n&&typeof n=="object"?n.props?"":C(n,""):n===!1?"":n}return i+c+(o??"")},"");function K(e){let s=this||{},a=e.call?e(s.p):e;return ut(a.unshift?a.raw?mt(a,[].slice.call(arguments,1),s.p):a.reduce((i,c)=>Object.assign(i,c&&c.call?c(s.p):c),{}):a,ot(s.target),s.g,s.o,s.k)}let ve,ee,te;K.bind({g:1});let $=K.bind({k:1});function xt(e,s,a,i){C.p=s,ve=e,ee=a,te=i}function M(e,s){let a=this||{};return function(){let i=arguments;function c(r,o){let n=Object.assign({},r),d=n.className||c.className;a.p=Object.assign({theme:ee&&ee()},n),a.o=/ *go\d+/.test(d),n.className=K.apply(a,i)+(d?" "+d:"");let m=e;return e[0]&&(m=n.as||e,delete n.as),te&&m[0]&&te(n),ve(m,n)}return c}}var ht=e=>typeof e=="function",U=(e,s)=>ht(e)?e(s):e,pt=(()=>{let e=0;return()=>(++e).toString()})(),Ne=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let s=matchMedia("(prefers-reduced-motion: reduce)");e=!s||s.matches}return e}})(),ft=20,q=new Map,bt=1e3,he=e=>{if(q.has(e))return;let s=setTimeout(()=>{q.delete(e),L({type:4,toastId:e})},bt);q.set(e,s)},gt=e=>{let s=q.get(e);s&&clearTimeout(s)},se=(e,s)=>{switch(s.type){case 0:return{...e,toasts:[s.toast,...e.toasts].slice(0,ft)};case 1:return s.toast.id&&gt(s.toast.id),{...e,toasts:e.toasts.map(r=>r.id===s.toast.id?{...r,...s.toast}:r)};case 2:let{toast:a}=s;return e.toasts.find(r=>r.id===a.id)?se(e,{type:1,toast:a}):se(e,{type:0,toast:a});case 3:let{toastId:i}=s;return i?he(i):e.toasts.forEach(r=>{he(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===i||i===void 0?{...r,visible:!1}:r)};case 4:return s.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==s.toastId)};case 5:return{...e,pausedAt:s.time};case 6:let c=s.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+c}))}}},Q=[],Y={toasts:[],pausedAt:void 0},L=e=>{Y=se(Y,e),Q.forEach(s=>{s(Y)})},jt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},yt=(e={})=>{let[s,a]=u.useState(Y);u.useEffect(()=>(Q.push(a),()=>{let c=Q.indexOf(a);c>-1&&Q.splice(c,1)}),[s]);let i=s.toasts.map(c=>{var r,o;return{...e,...e[c.type],...c,duration:c.duration||((r=e[c.type])==null?void 0:r.duration)||(e==null?void 0:e.duration)||jt[c.type],style:{...e.style,...(o=e[c.type])==null?void 0:o.style,...c.style}}});return{...s,toasts:i}},vt=(e,s="blank",a)=>({createdAt:Date.now(),visible:!0,type:s,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(a==null?void 0:a.id)||pt()}),z=e=>(s,a)=>{let i=vt(s,e,a);return L({type:2,toast:i}),i.id},v=(e,s)=>z("blank")(e,s);v.error=z("error");v.success=z("success");v.loading=z("loading");v.custom=z("custom");v.dismiss=e=>{L({type:3,toastId:e})};v.remove=e=>L({type:4,toastId:e});v.promise=(e,s,a)=>{let i=v.loading(s.loading,{...a,...a==null?void 0:a.loading});return e.then(c=>(v.success(U(s.success,c),{id:i,...a,...a==null?void 0:a.success}),c)).catch(c=>{v.error(U(s.error,c),{id:i,...a,...a==null?void 0:a.error})}),e};var Nt=(e,s)=>{L({type:1,toast:{id:e,height:s}})},wt=()=>{L({type:5,time:Date.now()})},_t=e=>{let{toasts:s,pausedAt:a}=yt(e);u.useEffect(()=>{if(a)return;let r=Date.now(),o=s.map(n=>{if(n.duration===1/0)return;let d=(n.duration||0)+n.pauseDuration-(r-n.createdAt);if(d<0){n.visible&&v.dismiss(n.id);return}return setTimeout(()=>v.dismiss(n.id),d)});return()=>{o.forEach(n=>n&&clearTimeout(n))}},[s,a]);let i=u.useCallback(()=>{a&&L({type:6,time:Date.now()})},[a]),c=u.useCallback((r,o)=>{let{reverseOrder:n=!1,gutter:d=8,defaultPosition:m}=o||{},h=s.filter(f=>(f.position||m)===(r.position||m)&&f.height),x=h.findIndex(f=>f.id===r.id),g=h.filter((f,j)=>j<x&&f.visible).length;return h.filter(f=>f.visible).slice(...n?[g+1]:[0,g]).reduce((f,j)=>f+(j.height||0)+d,0)},[s]);return{toasts:s,handlers:{updateHeight:Nt,startPause:wt,endPause:i,calculateOffset:c}}},kt=$`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Pt=$`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,St=$`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Et=M("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${kt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Pt} 0.15s ease-out forwards;
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
    animation: ${St} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,$t=$`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ft=M("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${$t} 1s linear infinite;
`,Ct=$`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Mt=$`
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
}`,Ot=M("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ct} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Mt} 0.2s ease-out forwards;
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
`,Rt=M("div")`
  position: absolute;
`,Lt=M("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,It=$`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,At=M("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${It} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Tt=({toast:e})=>{let{icon:s,type:a,iconTheme:i}=e;return s!==void 0?typeof s=="string"?u.createElement(At,null,s):s:a==="blank"?null:u.createElement(Lt,null,u.createElement(Ft,{...i}),a!=="loading"&&u.createElement(Rt,null,a==="error"?u.createElement(Et,{...i}):u.createElement(Ot,{...i})))},Bt=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Dt=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,zt="0%{opacity:0;} 100%{opacity:1;}",Gt="0%{opacity:1;} 100%{opacity:0;}",Vt=M("div")`
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
`,Ht=M("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,qt=(e,s)=>{let a=e.includes("top")?1:-1,[i,c]=Ne()?[zt,Gt]:[Bt(a),Dt(a)];return{animation:s?`${$(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${$(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Qt=u.memo(({toast:e,position:s,style:a,children:i})=>{let c=e.height?qt(e.position||s||"top-center",e.visible):{opacity:0},r=u.createElement(Tt,{toast:e}),o=u.createElement(Ht,{...e.ariaProps},U(e.message,e));return u.createElement(Vt,{className:e.className,style:{...c,...a,...e.style}},typeof i=="function"?i({icon:r,message:o}):u.createElement(u.Fragment,null,r,o))});xt(u.createElement);var Yt=({id:e,className:s,style:a,onHeightUpdate:i,children:c})=>{let r=u.useCallback(o=>{if(o){let n=()=>{let d=o.getBoundingClientRect().height;i(e,d)};n(),new MutationObserver(n).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return u.createElement("div",{ref:r,className:s,style:a},c)},Ut=(e,s)=>{let a=e.includes("top"),i=a?{top:0}:{bottom:0},c=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Ne()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${s*(a?1:-1)}px)`,...i,...c}},Kt=K`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,V=16,Wt=({reverseOrder:e,position:s="top-center",toastOptions:a,gutter:i,children:c,containerStyle:r,containerClassName:o})=>{let{toasts:n,handlers:d}=_t(a);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:V,left:V,right:V,bottom:V,pointerEvents:"none",...r},className:o,onMouseEnter:d.startPause,onMouseLeave:d.endPause},n.map(m=>{let h=m.position||s,x=d.calculateOffset(m,{reverseOrder:e,gutter:i,defaultPosition:s}),g=Ut(h,x);return u.createElement(Yt,{id:m.id,key:m.id,onHeightUpdate:d.updateHeight,className:m.visible?Kt:"",style:g},m.type==="custom"?U(m.message,m):c?c(m):u.createElement(Qt,{toast:m,position:h}))}))},Jt=v,ae=new Map,H=new WeakMap,pe=0,Zt=void 0;function Xt(e){return e?(H.has(e)||(pe+=1,H.set(e,pe.toString())),H.get(e)):"0"}function es(e){return Object.keys(e).sort().filter(s=>e[s]!==void 0).map(s=>`${s}_${s==="root"?Xt(e.root):e[s]}`).toString()}function ts(e){const s=es(e);let a=ae.get(s);if(!a){const i=new Map;let c;const r=new IntersectionObserver(o=>{o.forEach(n=>{var d;const m=n.isIntersecting&&c.some(h=>n.intersectionRatio>=h);e.trackVisibility&&typeof n.isVisible>"u"&&(n.isVisible=m),(d=i.get(n.target))==null||d.forEach(h=>{h(m,n)})})},e);c=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),a={id:s,observer:r,elements:i},ae.set(s,a)}return a}function ss(e,s,a={},i=Zt){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const d=e.getBoundingClientRect();return s(i,{isIntersecting:i,target:e,intersectionRatio:typeof a.threshold=="number"?a.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:c,observer:r,elements:o}=ts(a),n=o.get(e)||[];return o.has(e)||o.set(e,n),n.push(s),r.observe(e),function(){n.splice(n.indexOf(s),1),n.length===0&&(o.delete(e),r.unobserve(e)),o.size===0&&(r.disconnect(),ae.delete(c))}}function as({threshold:e,delay:s,trackVisibility:a,rootMargin:i,root:c,triggerOnce:r,skip:o,initialInView:n,fallbackInView:d,onChange:m}={}){var h;const[x,g]=u.useState(null),f=u.useRef(),[j,_]=u.useState({inView:!!n,entry:void 0});f.current=m,u.useEffect(()=>{if(o||!x)return;let N;return N=ss(x,(B,y)=>{_({inView:B,entry:y}),f.current&&f.current(B,y),y.isIntersecting&&r&&N&&(N(),N=void 0)},{root:c,rootMargin:i,threshold:e,trackVisibility:a,delay:s},d),()=>{N&&N()}},[Array.isArray(e)?e.toString():e,x,c,i,r,o,a,d,s]);const I=(h=j.entry)==null?void 0:h.target,P=u.useRef();!x&&I&&!r&&!o&&P.current!==I&&(P.current=I,_({inView:!!n,entry:void 0}));const S=[g,j.inView,j.entry];return S.ref=S[0],S.inView=S[1],S.entry=S[2],S}const rs=new Array(6).fill(!0),us=()=>{var ce;const{category:e,type:s}=fe(),[a,i]=u.useState(0),[c,r]=u.useState(null),{priceSort:o}=u.useContext(je),[n,d]=u.useState(null),[m,h]=u.useState(null),[x,g]=u.useState(null),[f,j]=u.useState(null),[_,I]=u.useState(null),[P,S]=u.useState(null),[N,B]=u.useState(null),[y,re]=u.useState(0),[A,ie]=u.useState(12),{data:O,hasNextPage:D,fetchNextPage:W,isFetchingNextPage:ne,isLoading:J,isError:l,error:p}=tt({queryKey:["category-wise-all-product",a,c,y,A,o,n,m,x,f,_,P,N],queryFn:({pageParam:F})=>ze(a,c,o,n,m,x,f,_,P,N,F*A,A),getNextPageParam:(F,b)=>F&&F.length===12?b.length+1:void 0,initialPageParam:0}),{filterBtnState:w,setFilterBtnState:Z}=u.useContext(ge),[k,le]=u.useState(!1),we=()=>{le(!k)},{ref:_e,inView:oe}=as({threshold:0});return u.useEffect(()=>{oe&&(D?W():Jt.success("All products are loaded!",{duration:5e3}))},[oe,D]),u.useEffect(()=>{e==="tractor"?(i(1),r(s)):e==="goods-vehicle"?(i(3),r(s)):e==="harvester"?(i(4),r(s)):e==="implements"?(i(5),r(s)):e==="tyre"?(i(7),r(s)):e==="agri-inputs"&&(s==="seeds"&&i(6),s==="pesticides"&&i(8),s==="fertilizer"&&i(9))},[e,s]),t.jsxs(t.Fragment,{children:[t.jsx(Qe,{}),t.jsx(st,{}),t.jsx(Wt,{}),t.jsx("section",{className:"mobile-filter-and-sort-btn lg:hidden block bg-lightgreen sticky md:top-[147px] top-[62px] z-10",children:t.jsxs("div",{className:"container px-10  grid grid-cols-2",children:[t.jsxs("button",{type:"button",className:"sort-btn text-lg text-white border-r border-white h-full py-2",onClick:()=>Z(!0),children:[t.jsx(Ye,{className:"inline mb-1"})," Filter"]}),t.jsxs("button",{type:"button",className:"sort-btn text-lg text-white",onClick:we,children:[t.jsx(Ue,{className:"inline mb-1"})," Sort"]})]})}),t.jsxs("main",{className:"products-container-wrapper container bg-whitesmoke md:px-10 ",children:[t.jsx(it,{categoryId:a,type:s,categoryProduct:O}),t.jsx(nt,{sort_btn_state:k,sortBtnActive:k,setSortBtnActive:le}),t.jsx("section",{className:"category-wise-all-product",children:J?t.jsx("div",{className:"product-skeleton grid md:grid-cols-3 2xl:grid-cols-4 grid-cols-2 px-5 gap-x-4",children:rs.map((F,b)=>t.jsx(Ze,{},b))}):t.jsxs("div",{className:"product-list-container mb-5",children:[t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 md:px-5  px-2 md:gap-x-4 gap-x-2",children:(ce=O==null?void 0:O.pages)==null?void 0:ce.map(F=>F&&F.map(b=>t.jsx(Be,{to:`${Ke}/${e}/${s}/${b.id}`,children:t.jsx(Je,{product_full_details:b,product_image:b.front_image?b.front_image:b.image1,product_title:`${b.brand_name} ${b.model_name}`=="Others Others"||`${b.brand_name} ${b.model_name}`=="undefined undefined"||`${b.brand_name} ${b.model_name}`=="null null"?b.title:`${b.brand_name} ${b.model_name}`,product_location:b.district_name,product_pricing:b.price,distance_product:b.distance,rent_type:s==="rent"&&b.rent_type?` / ${b.rent_type.slice(4)}`:""})},b.id)))}),D?t.jsxs("div",{ref:_e,className:"lod-more-product flex items-center gap-2 justify-center w-full mt-5",children:[t.jsxs("div",{className:"relative",children:[t.jsx("span",{className:"loader"}),t.jsx("img",{src:De,alt:"this is a icon of preloader",className:"absolute top-[49.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg"})]}),t.jsx("span",{className:"text-darkGreen text-2xl",children:"Loading More"})]}):null]})})]}),t.jsx(We,{})]})};export{us as default};
