import{c as o,H as N,I as E,b as t,m as H}from"./vue.esm-bundler-DN3_H5t5.js";import{V as O}from"./VCardActions-DWk1Us3N.js";import{V as _}from"./VCardItem-BA-oO166.js";import{V as j}from"./VCardText-BeoqxcCN.js";import{m as w,u as F}from"./border-A9tpoLC0.js";import{m as q}from"./component-BzmGkC7Q.js";import{m as z,u as G}from"./density-CJzSG3iM.js";import{m as J,u as K}from"./dimensions-BgLvN08o.js";import{m as M,u as Q}from"./elevation-P3zsY2KP.js";import{I as r}from"./VIcon-B3X9_QNp.js";import{m as U,a as W,u as X,b as Y,L as Z}from"./loader-C7aF6J4b.js";import{m as $,u as ee}from"./position-uzeVc8zo.js";import{m as ae,u as te}from"./rounded-BjGW9D1q.js";import{m as ie,u as ne}from"./router-CZzFoG1u.js";import{m as se}from"./tag-CaUsCUob.js";import{m as le,p as oe}from"./theme-ih7eM7Zv.js";import{m as re,u as me,g as de}from"./variant-CLv4R3m-.js";import{R as ue}from"./index-DTMOUhEl.js";import{V as ce}from"./VImg-BIwmLzns.js";import{V as ve}from"./VDefaultsProvider-B_mdbXeZ.js";import{p as fe,g as ge}from"./defineComponent-CQcCBefB.js";import{u as ke}from"./useRender-Dx5zp1wG.js";const be=fe({appendAvatar:String,appendIcon:r,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:r,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...w(),...q(),...z(),...J(),...M(),...U(),...W(),...$(),...ae(),...ie(),...se(),...le(),...re({variant:"elevated"})},"VCard"),Fe=ge()({name:"VCard",directives:{Ripple:ue},props:be(),setup(e,m){let{attrs:d,slots:a}=m;const{themeClasses:u}=oe(e),{borderClasses:c}=F(e),{colorClasses:v,colorStyles:f,variantClasses:g}=me(e),{densityClasses:k}=G(e),{dimensionStyles:b}=K(e),{elevationClasses:C}=Q(e),{loaderClasses:P}=X(e),{locationStyles:V}=Y(e),{positionClasses:p}=ee(e),{roundedClasses:y}=te(e),i=ne(e,d),I=o(()=>e.link!==!1&&i.isLink.value),n=o(()=>!e.disabled&&e.link!==!1&&(e.link||i.isClickable.value));return ke(()=>{const h=I.value?"a":e.tag,S=!!(a.title||e.title!=null),x=!!(a.subtitle||e.subtitle!=null),A=S||x,L=!!(a.append||e.appendAvatar||e.appendIcon),B=!!(a.prepend||e.prependAvatar||e.prependIcon),D=!!(a.image||e.image),T=A||B||L,R=!!(a.text||e.text!=null);return N(t(h,H({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":n.value},u.value,c.value,v.value,k.value,C.value,P.value,p.value,y.value,g.value,e.class],style:[f.value,b.value,V.value,e.style],onClick:n.value&&i.navigate,tabindex:e.disabled?-1:void 0},i.linkProps),{default:()=>{var s;return[D&&t("div",{key:"image",class:"v-card__image"},[a.image?t(ve,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):t(ce,{key:"image-img",cover:!0,src:e.image},null)]),t(Z,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),T&&t(_,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),R&&t(j,{key:"text"},{default:()=>{var l;return[((l=a.text)==null?void 0:l.call(a))??e.text]}}),(s=a.default)==null?void 0:s.call(a),a.actions&&t(O,null,{default:a.actions}),de(n.value,"v-card")]}}),[[E("ripple"),n.value&&e.ripple]])}),{}}});export{Fe as V};