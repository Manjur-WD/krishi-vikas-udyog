import{r as q,J as de,a2 as ge,G as fe,j as o,C as oe,m as me,a1 as be,$ as he,P as ve,L as xe}from"./index-DTdVTfyl.js";import{h as Ce,i as ye,H as Pe,q as ke,U as Ne,V as Le,F as je}from"./Header-BFZVyRKI.js";import{b as we}from"./img_hero-DAQ5Jl1R.js";import{G as Oe}from"./index-riOz_v38.js";import{a as Ee,b as Re}from"./index-YusNSRw_.js";var le={exports:{}};(function(N,T){(function(Z,B){N.exports=B(q)})(de,Z=>(()=>{var B={703:(d,f,C)=>{var a=C(414);function P(){}function I(){}I.resetWarningCache=P,d.exports=function(){function m(J,w,U,$,ie,Y){if(Y!==a){var ee=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw ee.name="Invariant Violation",ee}}function L(){return m}m.isRequired=m;var l={array:m,bigint:m,bool:m,func:m,number:m,object:m,string:m,symbol:m,any:m,arrayOf:L,element:m,elementType:m,instanceOf:L,node:m,objectOf:L,oneOf:L,oneOfType:L,shape:L,exact:L,checkPropTypes:I,resetWarningCache:P};return l.PropTypes=l,l}},697:(d,f,C)=>{d.exports=C(703)()},414:d=>{d.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:d=>{d.exports=Z}},X={};function v(d){var f=X[d];if(f!==void 0)return f.exports;var C=X[d]={exports:{}};return B[d](C,C.exports,v),C.exports}v.n=d=>{var f=d&&d.__esModule?()=>d.default:()=>d;return v.d(f,{a:f}),f},v.d=(d,f)=>{for(var C in f)v.o(f,C)&&!v.o(d,C)&&Object.defineProperty(d,C,{enumerable:!0,get:f[C]})},v.o=(d,f)=>Object.prototype.hasOwnProperty.call(d,f),v.r=d=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})};var z={};return(()=>{v.r(z),v.d(z,{default:()=>pe});var d=v(98),f=v.n(d),C=v(697),a=v.n(C);function P(){return P=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var p in c)Object.prototype.hasOwnProperty.call(c,p)&&(r[p]=c[p])}return r},P.apply(this,arguments)}var I=function(r){var s=r.pageClassName,c=r.pageLinkClassName,p=r.page,G=r.selected,K=r.activeClassName,A=r.activeLinkClassName,t=r.getEventListener,e=r.pageSelectedHandler,g=r.href,n=r.extraAriaContext,i=r.pageLabelBuilder,u=r.rel,h=r.ariaLabel||"Page "+p+(n?" "+n:""),y=null;return G&&(y="page",h=r.ariaLabel||"Page "+p+" is your current page",s=s!==void 0?s+" "+K:K,c!==void 0?A!==void 0&&(c=c+" "+A):c=A),f().createElement("li",{className:s},f().createElement("a",P({rel:u,role:g?void 0:"button",className:c,href:g,tabIndex:G?"-1":"0","aria-label":h,"aria-current":y,onKeyPress:e},t(e)),i(p)))};I.propTypes={pageSelectedHandler:a().func.isRequired,selected:a().bool.isRequired,pageClassName:a().string,pageLinkClassName:a().string,activeClassName:a().string,activeLinkClassName:a().string,extraAriaContext:a().string,href:a().string,ariaLabel:a().string,page:a().number.isRequired,getEventListener:a().func.isRequired,pageLabelBuilder:a().func.isRequired,rel:a().string};const m=I;function L(){return L=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var p in c)Object.prototype.hasOwnProperty.call(c,p)&&(r[p]=c[p])}return r},L.apply(this,arguments)}var l=function(r){var s=r.breakLabel,c=r.breakAriaLabel,p=r.breakClassName,G=r.breakLinkClassName,K=r.breakHandler,A=r.getEventListener,t=p||"break";return f().createElement("li",{className:t},f().createElement("a",L({className:G,role:"button",tabIndex:"0","aria-label":c,onKeyPress:K},A(K)),s))};l.propTypes={breakLabel:a().oneOfType([a().string,a().node]),breakAriaLabel:a().string,breakClassName:a().string,breakLinkClassName:a().string,breakHandler:a().func.isRequired,getEventListener:a().func.isRequired};const J=l;function w(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return r??s}function U(r){return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},U(r)}function $(){return $=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var p in c)Object.prototype.hasOwnProperty.call(c,p)&&(r[p]=c[p])}return r},$.apply(this,arguments)}function ie(r,s){for(var c=0;c<s.length;c++){var p=s[c];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(r,p.key,p)}}function Y(r,s){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,p){return c.__proto__=p,c},Y(r,s)}function ee(r,s){if(s&&(U(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return O(r)}function O(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ae(r){return ae=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(s){return s.__proto__||Object.getPrototypeOf(s)},ae(r)}function k(r,s,c){return s in r?Object.defineProperty(r,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[s]=c,r}var ne=function(r){(function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Y(t,e)})(A,r);var s,c,p,G,K=(p=A,G=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,e=ae(p);if(G){var g=ae(this).constructor;t=Reflect.construct(e,arguments,g)}else t=e.apply(this,arguments);return ee(this,t)});function A(t){var e,g;return function(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}(this,A),k(O(e=K.call(this,t)),"handlePreviousPage",function(n){var i=e.state.selected;e.handleClick(n,null,i>0?i-1:void 0,{isPrevious:!0})}),k(O(e),"handleNextPage",function(n){var i=e.state.selected,u=e.props.pageCount;e.handleClick(n,null,i<u-1?i+1:void 0,{isNext:!0})}),k(O(e),"handlePageSelected",function(n,i){if(e.state.selected===n)return e.callActiveCallback(n),void e.handleClick(i,null,void 0,{isActive:!0});e.handleClick(i,null,n)}),k(O(e),"handlePageChange",function(n){e.state.selected!==n&&(e.setState({selected:n}),e.callCallback(n))}),k(O(e),"getEventListener",function(n){return k({},e.props.eventListener,n)}),k(O(e),"handleClick",function(n,i,u){var h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},y=h.isPrevious,S=y!==void 0&&y,V=h.isNext,Q=V!==void 0&&V,W=h.isBreak,E=W!==void 0&&W,_=h.isActive,D=_!==void 0&&_;n.preventDefault?n.preventDefault():n.returnValue=!1;var H=e.state.selected,b=e.props.onClick,R=u;if(b){var j=b({index:i,selected:H,nextSelectedPage:u,event:n,isPrevious:S,isNext:Q,isBreak:E,isActive:D});if(j===!1)return;Number.isInteger(j)&&(R=j)}R!==void 0&&e.handlePageChange(R)}),k(O(e),"handleBreakClick",function(n,i){var u=e.state.selected;e.handleClick(i,n,u<n?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),k(O(e),"callCallback",function(n){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:n})}),k(O(e),"callActiveCallback",function(n){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:n})}),k(O(e),"getElementPageRel",function(n){var i=e.state.selected,u=e.props,h=u.nextPageRel,y=u.prevPageRel,S=u.selectedPageRel;return i-1===n?y:i===n?S:i+1===n?h:void 0}),k(O(e),"pagination",function(){var n=[],i=e.props,u=i.pageRangeDisplayed,h=i.pageCount,y=i.marginPagesDisplayed,S=i.breakLabel,V=i.breakClassName,Q=i.breakLinkClassName,W=i.breakAriaLabels,E=e.state.selected;if(h<=u)for(var _=0;_<h;_++)n.push(e.getPageElement(_));else{var D=u/2,H=u-D;E>h-u/2?D=u-(H=h-E):E<u/2&&(H=u-(D=E));var b,R,j=function(M){return e.getPageElement(M)},x=[];for(b=0;b<h;b++){var te=b+1;if(te<=y)x.push({type:"page",index:b,display:j(b)});else if(te>h-y)x.push({type:"page",index:b,display:j(b)});else if(b>=E-D&&b<=E+(E===0&&u>1?H-1:H))x.push({type:"page",index:b,display:j(b)});else if(S&&x.length>0&&x[x.length-1].display!==R&&(u>0||y>0)){var se=b<E?W.backward:W.forward;R=f().createElement(J,{key:b,breakAriaLabel:se,breakLabel:S,breakClassName:V,breakLinkClassName:Q,breakHandler:e.handleBreakClick.bind(null,b),getEventListener:e.getEventListener}),x.push({type:"break",index:b,display:R})}}x.forEach(function(M,F){var re=M;M.type==="break"&&x[F-1]&&x[F-1].type==="page"&&x[F+1]&&x[F+1].type==="page"&&x[F+1].index-x[F-1].index<=2&&(re={type:"page",index:M.index,display:j(M.index)}),n.push(re.display)})}return n}),t.initialPage!==void 0&&t.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(t.initialPage,") and forcePage (").concat(t.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),g=t.initialPage?t.initialPage:t.forcePage?t.forcePage:0,e.state={selected:g},e}return s=A,(c=[{key:"componentDidMount",value:function(){var t=this.props,e=t.initialPage,g=t.disableInitialCallback,n=t.extraAriaContext,i=t.pageCount,u=t.forcePage;e===void 0||g||this.callCallback(e),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(i)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(i,"). Did you forget a Math.ceil()?")),e!==void 0&&e>i-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(i-1,").")),u!==void 0&&u>i-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(u," > ").concat(i-1,")."))}},{key:"componentDidUpdate",value:function(t){this.props.forcePage!==void 0&&this.props.forcePage!==t.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(t.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var t=this.state.selected,e=this.props,g=e.pageCount,n=t+e.pageRangeDisplayed;return n>=g?g-1:n}},{key:"getBackwardJump",value:function(){var t=this.state.selected-this.props.pageRangeDisplayed;return t<0?0:t}},{key:"getElementHref",value:function(t){var e=this.props,g=e.hrefBuilder,n=e.pageCount,i=e.hrefAllControls;if(g)return i||t>=0&&t<n?g(t+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(t){var e=t===this.state.selected;if(this.props.ariaLabelBuilder&&t>=0&&t<this.props.pageCount){var g=this.props.ariaLabelBuilder(t+1,e);return this.props.extraAriaContext&&!e&&(g=g+" "+this.props.extraAriaContext),g}}},{key:"getPageElement",value:function(t){var e=this.state.selected,g=this.props,n=g.pageClassName,i=g.pageLinkClassName,u=g.activeClassName,h=g.activeLinkClassName,y=g.extraAriaContext,S=g.pageLabelBuilder;return f().createElement(m,{key:t,pageSelectedHandler:this.handlePageSelected.bind(null,t),selected:e===t,rel:this.getElementPageRel(t),pageClassName:n,pageLinkClassName:i,activeClassName:u,activeLinkClassName:h,extraAriaContext:y,href:this.getElementHref(t),ariaLabel:this.ariaLabelBuilder(t),page:t+1,pageLabelBuilder:S,getEventListener:this.getEventListener})}},{key:"render",value:function(){var t=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&t!==void 0)return t&&t(this.props);var e=this.props,g=e.disabledClassName,n=e.disabledLinkClassName,i=e.pageCount,u=e.className,h=e.containerClassName,y=e.previousLabel,S=e.previousClassName,V=e.previousLinkClassName,Q=e.previousAriaLabel,W=e.prevRel,E=e.nextLabel,_=e.nextClassName,D=e.nextLinkClassName,H=e.nextAriaLabel,b=e.nextRel,R=this.state.selected,j=R===0,x=R===i-1,te="".concat(w(S)).concat(j?" ".concat(w(g)):""),se="".concat(w(_)).concat(x?" ".concat(w(g)):""),M="".concat(w(V)).concat(j?" ".concat(w(n)):""),F="".concat(w(D)).concat(x?" ".concat(w(n)):""),re=j?"true":"false",ue=x?"true":"false";return f().createElement("ul",{className:u||h,role:"navigation","aria-label":"Pagination"},f().createElement("li",{className:te},f().createElement("a",$({className:M,href:this.getElementHref(R-1),tabIndex:j?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":re,"aria-label":Q,rel:W},this.getEventListener(this.handlePreviousPage)),y)),this.pagination(),f().createElement("li",{className:se},f().createElement("a",$({className:F,href:this.getElementHref(R+1),tabIndex:x?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":ue,"aria-label":H,rel:b},this.getEventListener(this.handleNextPage)),E)))}}])&&ie(s.prototype,c),Object.defineProperty(s,"prototype",{writable:!1}),A}(d.Component);k(ne,"propTypes",{pageCount:a().number.isRequired,pageRangeDisplayed:a().number,marginPagesDisplayed:a().number,previousLabel:a().node,previousAriaLabel:a().string,prevPageRel:a().string,prevRel:a().string,nextLabel:a().node,nextAriaLabel:a().string,nextPageRel:a().string,nextRel:a().string,breakLabel:a().oneOfType([a().string,a().node]),breakAriaLabels:a().shape({forward:a().string,backward:a().string}),hrefBuilder:a().func,hrefAllControls:a().bool,onPageChange:a().func,onPageActive:a().func,onClick:a().func,initialPage:a().number,forcePage:a().number,disableInitialCallback:a().bool,containerClassName:a().string,className:a().string,pageClassName:a().string,pageLinkClassName:a().string,pageLabelBuilder:a().func,activeClassName:a().string,activeLinkClassName:a().string,previousClassName:a().string,nextClassName:a().string,previousLinkClassName:a().string,nextLinkClassName:a().string,disabledClassName:a().string,disabledLinkClassName:a().string,breakClassName:a().string,breakLinkClassName:a().string,extraAriaContext:a().string,ariaLabelBuilder:a().func,eventListener:a().string,renderOnZeroPageCount:a().func,selectedPageRel:a().string}),k(ne,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(r){return r},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const pe=ne})(),z})())})(le);var Ae=le.exports;const Se=ge(Ae);function Te(N){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(N)}const ce=q.forwardRef(({className:N,type:T,...Z},B)=>o.jsx("input",{type:T,className:Ce("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",N),ref:B,...Z}));ce.displayName="Input";const Me=()=>{const{companyDealerData:N}=q.useContext(oe),[T,Z]=q.useState(""),[B,X]=q.useState(0),v=22,{id:z}=me(),{companyLogo:d}=q.useContext(oe),{data:f,isLoading:C}=ye({queryKey:["iffco-dealers",z],queryFn:()=>be(z==="4"?"2":z),enabled:!(N!=null&&N.length)}),a=N!=null&&N.length?N:f,P=q.useMemo(()=>a==null?void 0:a.filter(l=>{var J,w,U;return((J=l==null?void 0:l.name)==null?void 0:J.toLowerCase().includes(T.toLowerCase()))||((w=l==null?void 0:l.company_name)==null?void 0:w.toLowerCase().includes(T.toLowerCase()))||((U=l==null?void 0:l.address)==null?void 0:U.toLowerCase().includes(T.toLowerCase()))||(l==null?void 0:l.zipcode)&&l.zipcode.toString().includes(T)}),[a,T]),I=(P==null?void 0:P.length)||0,m=q.useMemo(()=>{const l=B*v;return P==null?void 0:P.slice(l,l+v)},[P,B]),L=l=>{X(l.selected),window.scrollTo(0,0)};return o.jsxs(o.Fragment,{children:[o.jsx(Pe,{}),o.jsx(he,{}),o.jsx("section",{className:"breadcrumb flex justify-center items-center md:h-[300px] h-[200px]",style:{backgroundImage:`linear-gradient(#13693a, #13693a6e),url(${we})`,backgroundSize:"cover",backgroundPosition:"center"},children:o.jsxs("div",{className:"breadcrumb-content",children:[o.jsxs("div",{className:"breadcrumb-links flex justify-center items-center text-2xl text-white",children:[o.jsx("p",{className:"hover:text-lightgreen px-3",children:"Home"}),o.jsx(ke,{}),o.jsx("p",{className:"hover:text-lightgreen px-3 capitalize",children:"Company Dealer"})]}),o.jsx("p",{className:"text-lightgreen md:text-6xl text-4xl font-bold text-center mt-3 uppercase",style:{textShadow:"0 0 15px black"},children:"Company Dealer"})]})}),o.jsx("section",{className:"search-section-contact p-4 sticky lg:top-[158.25px] top-[62.44px] z-10 bg-lightdark",children:o.jsx("div",{className:"bg-white rounded-lg container lg:w-[500px] w-auto",children:o.jsx(ce,{type:"text",placeholder:"Search with dealer name, location, pincode, etc.",className:"placeholder:text-gray-300",onChange:l=>Z(l.target.value)})})}),o.jsx("section",{className:"dealer-wrapper",children:C?o.jsx(ve,{}):o.jsx("div",{className:"container",children:o.jsx("div",{className:"iffco-dealer-list grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-5 place-content-center",children:m.length>0?m==null?void 0:m.map((l,J)=>o.jsxs("div",{className:"dealer-card bg-white flex gap-5 shadow rounded-3xl hover:scale-105 transition-[0.5s]",children:[o.jsx("img",{src:d,alt:"company-logo",className:"w-[100px] p-2 object-contain"}),o.jsxs("div",{className:"dealer-details w-full text-center",children:[o.jsxs("p",{className:"uppercase text-start py-3",children:[o.jsx(Ne,{className:"inline me-2 "}),l.name]}),l.address&&o.jsxs("p",{className:"text-start text-sm bg-whitesmoke p-3",children:[o.jsx(Oe,{className:"inline"})," ",l.address]}),l.zipcode&&o.jsxs("p",{className:"uppercase text-start py-3",children:[o.jsx(Te,{className:"inline mb-1"}),"Pincode: ",l.zipcode]}),o.jsxs(xe,{to:`tel:${l.mobile}`,className:"py-2 shadow-lg px-5 text-white my-3 rounded-3xl md:text-xl text-sm bg-gradient-green inline-flex items-center animate-pulse",children:[o.jsx(Le,{className:"inline me-3"}),"CALL NOW"]})]})]},J)):o.jsx("div",{className:"text-center",children:o.jsx("p",{className:"text-2xl p-5 border text-center inline-block",children:"NO DATA FOUND"})})})})}),I>v&&o.jsx("div",{className:"pagination-iffco-dealer my-5",children:o.jsx(Se,{breakLabel:"...",nextLabel:o.jsx(Ee,{}),onPageChange:L,pageRangeDisplayed:5,pageCount:Math.ceil(I/v),previousLabel:o.jsx(Re,{}),renderOnZeroPageCount:null})}),o.jsx(je,{})]})};export{Me as default};