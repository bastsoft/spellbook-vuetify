import{y as u,T as g,j as p,k as T}from"./vue.esm-bundler-DN3_H5t5.js";import{g as m,p as x}from"./defineComponent-CQcCBefB.js";const b=x({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function s(o,d,e){return m()({name:o,props:b({mode:e,origin:d}),setup(i,r){let{slots:a}=r;const t={onBeforeEnter(n){i.origin&&(n.style.transformOrigin=i.origin)},onLeave(n){if(i.leaveAbsolute){const{offsetTop:l,offsetLeft:f,offsetWidth:c,offsetHeight:y}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${l}px`,n.style.left=`${f}px`,n.style.width=`${c}px`,n.style.height=`${y}px`}i.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(i.leaveAbsolute&&(n!=null&&n._transitionInitialStyles)){const{position:l,top:f,left:c,width:y,height:S}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=l||"",n.style.top=f||"",n.style.left=c||"",n.style.width=y||"",n.style.height=S||""}}};return()=>{const n=i.group?u:g;return p(n,{name:i.disabled?"":o,css:!i.disabled,...i.group?void 0:{mode:i.mode},...i.disabled?{}:t},a.default)}}})}function h(o,d){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return m()({name:o,props:{mode:{type:String,default:e},disabled:Boolean,group:Boolean},setup(i,r){let{slots:a}=r;const t=i.group?u:g;return()=>p(t,{name:i.disabled?"":o,css:!i.disabled,...i.disabled?{}:d},a.default)}})}function v(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const e=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",i=T(`offset-${e}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[e]:t.style[e]}},onEnter(t){const n=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const l=`${t[i]}px`;t.style[e]="0",t.offsetHeight,t.style.transition=n.transition,o&&t._parent&&t._parent.classList.add(o),requestAnimationFrame(()=>{t.style[e]=l})},onAfterEnter:a,onEnterCancelled:a,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[e]:t.style[e]},t.style.overflow="hidden",t.style[e]=`${t[i]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[e]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(t){o&&t._parent&&t._parent.classList.remove(o),a(t)}function a(t){const n=t._initialStyle[e];t.style.overflow=t._initialStyle.overflow,n!=null&&(t.style[e]=n),delete t._initialStyle}}const w=s("fab-transition","center center","out-in"),L=s("dialog-bottom-transition"),B=s("dialog-top-transition"),A=s("fade-transition"),E=s("scale-transition"),$=s("scroll-x-transition"),P=s("scroll-x-reverse-transition"),C=s("scroll-y-transition"),F=s("scroll-y-reverse-transition"),X=s("slide-x-transition"),I=s("slide-x-reverse-transition"),R=s("slide-y-transition"),Y=s("slide-y-reverse-transition"),k=h("expand-transition",v()),z=h("expand-x-transition",v("",!0));export{L as V,B as a,k as b,R as c,z as d,A as e,E as f,w as g,P as h,$ as i,F as j,C as k,I as l,X as m,Y as n};