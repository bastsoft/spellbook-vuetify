import{w as g,C as h,J as w,r as P,c as f,K as b}from"./vue.esm-bundler-DN3_H5t5.js";import{d as O,u as y}from"./defineComponent-CQcCBefB.js";function x(a,e){let n;function o(){n=w(),n.run(()=>e.length?e(()=>{n==null||n.stop(),o()}):e())}g(a,l=>{l&&!n?o():l||(n==null||n.stop(),n=void 0)},{immediate:!0}),h(()=>{n==null||n.stop()})}function k(a,e,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:t=>t,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:t=>t;const s=O("useProxiedModel"),r=P(a[e]!==void 0?a[e]:n),c=y(e),i=c!==e?f(()=>{var t,u,d,v;return a[e],!!(((t=s.vnode.props)!=null&&t.hasOwnProperty(e)||(u=s.vnode.props)!=null&&u.hasOwnProperty(c))&&((d=s.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${e}`)||(v=s.vnode.props)!=null&&v.hasOwnProperty(`onUpdate:${c}`)))}):f(()=>{var t,u;return a[e],!!((t=s.vnode.props)!=null&&t.hasOwnProperty(e)&&((u=s.vnode.props)!=null&&u.hasOwnProperty(`onUpdate:${e}`)))});x(()=>!i.value,()=>{g(()=>a[e],t=>{r.value=t})});const m=f({get(){const t=a[e];return o(i.value?t:r.value)},set(t){const u=l(t),d=b(i.value?a[e]:r.value);d===u||o(d)===t||(r.value=u,s==null||s.emit(`update:${e}`,u))}});return Object.defineProperty(m,"externalValue",{get:()=>i.value?a[e]:r.value}),m}export{x as a,k as u};