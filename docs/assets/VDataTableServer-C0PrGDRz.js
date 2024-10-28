import{t as Z,c,a as r,p as $,b as o,F as T,m as p}from"./vue.esm-bundler-DN3_H5t5.js";import{m as ee,u as ae,a as te,V}from"./VDataTable-D6ORo3_8.js";import{m as oe,a as re,c as le,p as se,V as x}from"./VDataTableFooter-dwVuMJgF.js";import{V as w}from"./VDataTableHeaders-DcG6xJJN.js";import{c as de,p as ue,u as ne,V as B}from"./VDataTableRows-BoDbQ1to.js";import{p as ie}from"./VDataTableRow-BEyKnp0x.js";import{c as me,a as ce,p as pe,b as ge}from"./headers-Bd2sjvUy.js";import{p as ve,g as be,a as fe}from"./defineComponent-CQcCBefB.js";import{a as Pe}from"./VSelect-y6VqIVHP.js";import{u as ye}from"./useRender-Dx5zp1wG.js";const he=ve({itemsLength:{type:[Number,String],required:!0},...oe(),...ee(),...re()},"VDataTableServer"),ke=be()({name:"VDataTableServer",props:he(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0},setup(e,I){let{attrs:F,slots:a}=I;const{groupBy:d}=de(e),{sortBy:l,multiSort:R,mustSort:k}=me(e),{page:u,itemsPerPage:i}=le(e),{disableSort:G}=Z(e),E=c(()=>parseInt(e.itemsLength,10)),{columns:g,headers:H}=ce(e,{groupBy:d,showSelect:r(e,"showSelect"),showExpand:r(e,"showExpand")}),{items:n}=ae(e,g),{toggleSort:v}=ge({sortBy:l,multiSort:R,mustSort:k,page:u}),{opened:N,isGroupOpen:_,toggleGroup:C,extractRows:L}=ue({groupBy:d,sortBy:l,disableSort:G}),{pageCount:O,setItemsPerPage:q}=se({page:u,itemsPerPage:i,itemsLength:E}),{flatItems:b}=ne(n,d,N),{isSelected:A,select:W,selectAll:j,toggleSelect:z,someSelected:J,allSelected:K}=pe(e,{allItems:n,currentPage:n}),{isExpanded:M,toggleExpand:Q}=ie(e),f=c(()=>L(n.value));te({page:u,itemsPerPage:i,sortBy:l,groupBy:d,search:r(e,"search")}),$("v-data-table",{toggleSort:v,sortBy:l}),fe({VDataTableRows:{hideNoData:r(e,"hideNoData"),noDataText:r(e,"noDataText"),loading:r(e,"loading"),loadingText:r(e,"loadingText")}});const t=c(()=>({page:u.value,itemsPerPage:i.value,sortBy:l.value,pageCount:O.value,toggleSort:v,setItemsPerPage:q,someSelected:J.value,allSelected:K.value,isSelected:A,select:W,selectAll:j,toggleSelect:z,isExpanded:M,toggleExpand:Q,isGroupOpen:_,toggleGroup:C,items:f.value.map(m=>m.raw),internalItems:f.value,groupedItems:b.value,columns:g.value,headers:H.value}));ye(()=>{const m=x.filterProps(e),U=w.filterProps(e),X=B.filterProps(e),Y=V.filterProps(e);return o(V,p({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},Y),{top:()=>{var s;return(s=a.top)==null?void 0:s.call(a,t.value)},default:()=>{var s,P,y,h,D,S;return a.default?a.default(t.value):o(T,null,[(s=a.colgroup)==null?void 0:s.call(a,t.value),!e.hideDefaultHeader&&o("thead",{key:"thead",class:"v-data-table__thead",role:"rowgroup"},[o(w,p(U,{sticky:e.fixedHeader}),a)]),(P=a.thead)==null?void 0:P.call(a,t.value),!e.hideDefaultBody&&o("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[(y=a["body.prepend"])==null?void 0:y.call(a,t.value),a.body?a.body(t.value):o(B,p(F,X,{items:b.value}),a),(h=a["body.append"])==null?void 0:h.call(a,t.value)]),(D=a.tbody)==null?void 0:D.call(a,t.value),(S=a.tfoot)==null?void 0:S.call(a,t.value)])},bottom:()=>a.bottom?a.bottom(t.value):!e.hideDefaultFooter&&o(T,null,[o(Pe,null,null),o(x,m,{prepend:a["footer.prepend"]})])})})}});export{ke as V};
