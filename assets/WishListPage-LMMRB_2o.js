import{aC as b,r as i,k as j,q as w,l as h,j as e,K as v,ap as f,X as _,Y as N,aD as k,L as $,B as m,aX as L,N as R,ad as x,aw as H,ax as C,au as S,av as W}from"./index-BADBTgHN.js";import{G as E}from"./index-LNocgaE8.js";function F(c){return b({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Trash"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M19.45,4.06H15.27v-.5a1.5,1.5,0,0,0-1.5-1.5H10.23a1.5,1.5,0,0,0-1.5,1.5v.5H4.55a.5.5,0,0,0,0,1h.72l.42,14.45a2.493,2.493,0,0,0,2.5,2.43h7.62a2.493,2.493,0,0,0,2.5-2.43l.42-14.45h.72A.5.5,0,0,0,19.45,4.06Zm-9.72-.5a.5.5,0,0,1,.5-.5h3.54a.5.5,0,0,1,.5.5v.5H9.73Zm7.58,15.92a1.5,1.5,0,0,1-1.5,1.46H8.19a1.5,1.5,0,0,1-1.5-1.46L6.26,5.06H17.74Z"},child:[]},{tag:"path",attr:{d:"M8.375,8h0a.5.5,0,0,1,1,0l.25,10a.5.5,0,0,1-1,0Z"},child:[]},{tag:"path",attr:{d:"M15.625,8.007a.5.5,0,0,0-1,0h0l-.25,10a.5.5,0,0,0,1,0Z"},child:[]}]}]}]})(c)}const M="/krishi-vikas-udyog/assets/empty-wishlist-CdX17AQy.webp",z=()=>{const[c,n]=i.useState(!1),p=j(),{t}=w(),a=h(s=>s.wishlistings.wishlist),l=h(s=>s.auth.token),u=s=>{switch(s){case"1":return"tractor";case"3":return"goods-vehicle";case"4":return"harvester";case 5:return"implements";case"7":return"tyre";case"6":return"agri-inputs";case"8":return"agri-inputs";case"9":return"agri-inputs"}},g=s=>{switch(s){case"6":return"seeds";case"8":return"pesticides";case"9":return"fertilizer"}},y=async(s,r)=>{x("Removing....."),n(!0);const o=await H(s,r,l);o&&o.success===1&&(n(!1),x.success("Removed from wishlist!",{duration:4e3,style:{border:"2px solid red",boxShadow:"0 0  25px red",padding:"16px",fontSize:"18px",color:"white",background:`url(${C}) no-repeat center/cover`,borderRadius:"8px"}}),d())},d=async()=>{const s=await S(l);p(W(s.response))};return i.useEffect(()=>{d()},[]),e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsx(f,{position:"bottom-center",reverseOrder:!1}),e.jsxs("main",{children:[e.jsx("section",{className:"breadcrumb flex justify-center items-center md:h-[300px] h-[200px]",style:{backgroundImage:`linear-gradient(#13693a, #13693a6e),url(${_})`,backgroundSize:"cover",backgroundPosition:"center"},children:e.jsxs("div",{className:"breadcrumb-content",children:[e.jsxs("div",{className:"breadcrumb-links flex justify-center items-center text-2xl text-white",children:[e.jsx("p",{className:"hover:text-lightgreen px-3",children:t("Home")}),e.jsx(N,{}),e.jsx("p",{className:"hover:text-lightgreen px-3 capitalize",children:t("Wishlist")})]}),e.jsx("p",{className:"text-lightgreen md:text-6xl text-4xl font-bold text-center mt-3 uppercase",style:{textShadow:"0 0 15px black"},children:t("Wishlist")})]})}),a?e.jsx("section",{className:"wishlist-section grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 md:px-5  px-2 md:gap-x-4 gap-x-2 container my-5",children:a==null?void 0:a.map(s=>{var r;return e.jsx("div",{className:"wishlist-card-wrapper m-2 p-1 rounded-2xl shadow border",children:e.jsxs("div",{className:"wishlist-card grid grid-cols-[120px,1fr] md:grid-cols-1 gap-3",children:[(s==null?void 0:s.category_id)==="6"||(s==null?void 0:s.category_id)==="7"||(s==null?void 0:s.category_id)==="8"||(s==null?void 0:s.category_id)==="9"?e.jsx("img",{src:s==null?void 0:s.image1,alt:"this is wishlist product image",className:"w-full aspect-square object-cover object-center rounded-2xl"}):e.jsx("img",{src:s==null?void 0:s.front_image,alt:"this is wishlist product image",className:"w-full aspect-square object-cover object-center rounded-2xl"}),e.jsxs("div",{className:"wishlist-desc truncate p-1 pe-0",children:[e.jsx("h2",{className:"truncate text-lg  md:text-center text-start px-2",children:`${s.brand_name} ${s.model_name}`=="Others Others"||`${s.brand_name} ${s.model_name}`=="undefined undefined"||`${s.brand_name} ${s.model_name}`=="null null"?s.title:`${s.brand_name} ${s.model_name}`}),e.jsxs("div",{className:"flex items-center justify-between wishlist-price-location text-sm p-2 text-white mt-1 rounded-xl",children:[e.jsxs("p",{children:[e.jsx(E,{className:"inline-block mb-2 me-1"}),s.city_name]}),e.jsxs("p",{className:"",children:[e.jsx(k,{className:"inline-block mb-1 "}),s.price,(s==null?void 0:s.category_id)==="6"||(s==null?void 0:s.category_id)==="7"||(s==null?void 0:s.category_id)==="8"||(s==null?void 0:s.category_id)==="9"?"":` ${s.rent_type===null?"":`/ ${(r=s.rent_type)==null?void 0:r.slice(4)}`}`]})]}),e.jsxs("div",{className:"wishlist-action flex justify-center gap-3 px-5 mt-2",children:[e.jsxs($,{to:`${m}/${u(s==null?void 0:s.category_id)}/${["6","8","9"].includes(s.category_id)?g(s==null?void 0:s.category_id):s.type}/${s.id}`,type:"button",className:"bg-lightdark text-white text-sm px-2 py-1 rounded-3xl shadow active:scale-95",children:[e.jsx(L,{className:"inline mb-1"})," View"]}),e.jsxs("button",{type:"button",className:"bg-red-700 text-white text-sm px-2 py-1 rounded-3xl shadow active:scale-95",onClick:()=>{y(s==null?void 0:s.category_id,s==null?void 0:s.id)},children:[e.jsx(F,{className:"inline mb-1"}),"Remove"]})]})]})]})},s.id)})}):e.jsx("img",{src:M,alt:"empty-wishlist",className:" md:w-[350px] w-full aspect-square rounded-3xl my-5  md:mx-auto p-2"})]}),e.jsx(R,{})]})};export{z as default};
