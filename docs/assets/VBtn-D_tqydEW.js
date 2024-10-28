import{w as K,B as F,c as d,H as G,b as o,m as N}from"./vue.esm-bundler-DN3_H5t5.js";import{a as H}from"./VBtnToggle-DWWqMPaH.js";import{m as J,u as q}from"./border-A9tpoLC0.js";import{m as M}from"./component-BzmGkC7Q.js";import{m as Q,u as U}from"./density-CJzSG3iM.js";import{m as W,u as X}from"./dimensions-BgLvN08o.js";import{m as Y,u as Z}from"./elevation-P3zsY2KP.js";import{a as $,b as p}from"./group-COkOyDQc.js";import{I as P,V as m}from"./VIcon-B3X9_QNp.js";import{m as ee,a as ae,u as ne,b as te}from"./loader-C7aF6J4b.js";import{m as le,u as oe}from"./position-uzeVc8zo.js";import{m as ie,u as se}from"./rounded-BjGW9D1q.js";import{m as de,u as ue}from"./router-CZzFoG1u.js";import{m as ce,u as re}from"./size-DFYA7rG5.js";import{m as me}from"./tag-CaUsCUob.js";import{m as ve,p as fe}from"./theme-ih7eM7Zv.js";import{m as be,u as ke,g as ye}from"./variant-CLv4R3m-.js";import{R as Pe}from"./index-DTMOUhEl.js";import{V as v}from"./VDefaultsProvider-B_mdbXeZ.js";import{V as Ce}from"./VProgressCircular-CWn4hPDX.js";import{p as Ie,g as Ve}from"./defineComponent-CQcCBefB.js";import{u as ge}from"./useRender-Dx5zp1wG.js";function Be(e,u){K(()=>{var i;return(i=e.isActive)==null?void 0:i.value},i=>{e.isLink.value&&i&&u&&F(()=>{u(!0)})},{immediate:!0})}const Se=Ie({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:H},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:P,appendIcon:P,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...J(),...M(),...Q(),...W(),...Y(),...$(),...ee(),...ae(),...le(),...ie(),...de(),...ce(),...me({tag:"button"}),...ve(),...be({variant:"elevated"})},"VBtn"),Ue=Ve()({name:"VBtn",props:Se(),emits:{"group:selected":e=>!0},setup(e,u){let{attrs:i,slots:n}=u;const{themeClasses:C}=fe(e),{borderClasses:I}=q(e),{densityClasses:V}=U(e),{dimensionStyles:g}=X(e),{elevationClasses:B}=Z(e),{loaderClasses:S}=ne(e),{locationStyles:h}=te(e),{positionClasses:L}=oe(e),{roundedClasses:_}=se(e),{sizeClasses:A,sizeStyles:D}=re(e),a=p(e,e.symbol,!1),t=ue(e,i),f=d(()=>{var l;return e.active!==void 0?e.active:t.isLink.value?(l=t.isActive)==null?void 0:l.value:a==null?void 0:a.isSelected.value}),w=d(()=>f.value?e.activeColor??e.color:e.color),R=d(()=>{var s,r;return{color:(a==null?void 0:a.isSelected.value)&&(!t.isLink.value||((s=t.isActive)==null?void 0:s.value))||!a||((r=t.isActive)==null?void 0:r.value)?w.value??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:T,colorStyles:x,variantClasses:O}=ke(R),c=d(()=>(a==null?void 0:a.disabled.value)||e.disabled),z=d(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),j=d(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function E(l){var s;c.value||t.isLink.value&&(l.metaKey||l.ctrlKey||l.shiftKey||l.button!==0||i.target==="_blank")||((s=t.navigate)==null||s.call(t,l),a==null||a.toggle())}return Be(t,a==null?void 0:a.select),ge(()=>{const l=t.isLink.value?"a":e.tag,s=!!(e.prependIcon||n.prepend),r=!!(e.appendIcon||n.append),b=!!(e.icon&&e.icon!==!0);return G(o(l,N({type:l==="a"?void 0:"button",class:["v-btn",a==null?void 0:a.selectedClass.value,{"v-btn--active":f.value,"v-btn--block":e.block,"v-btn--disabled":c.value,"v-btn--elevated":z.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},C.value,I.value,T.value,V.value,B.value,S.value,L.value,_.value,A.value,O.value,e.class],style:[x.value,g.value,h.value,D.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:c.value||void 0,tabindex:e.loading||e.readonly?-1:void 0,onClick:E,value:j.value},t.linkProps),{default:()=>{var k;return[ye(!0,"v-btn"),!e.icon&&s&&o("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?o(v,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):o(m,{key:"prepend-icon",icon:e.prependIcon},null)]),o("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&b?o(m,{key:"content-icon",icon:e.icon},null):o(v,{key:"content-defaults",disabled:!b,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var y;return[((y=n.default)==null?void 0:y.call(n))??e.text]}})]),!e.icon&&r&&o("span",{key:"append",class:"v-btn__append"},[n.append?o(v,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):o(m,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&o("span",{key:"loader",class:"v-btn__loader"},[((k=n.loader)==null?void 0:k.call(n))??o(Ce,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[Pe,!c.value&&e.ripple,"",{center:!!e.icon}]])}),{group:a}}});export{Ue as V,Se as m};