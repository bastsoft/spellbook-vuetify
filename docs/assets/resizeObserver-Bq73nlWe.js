import{r as f,n as i,w as R,u as m}from"./vue.esm-bundler-DN3_H5t5.js";import{t as c,I as g}from"./defineComponent-CQcCBefB.js";function d(o){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const r=c(),t=f();if(g){const n=new ResizeObserver(e=>{o==null||o(e,n),e.length&&(u==="content"?t.value=e[0].contentRect:t.value=e[0].target.getBoundingClientRect())});i(()=>{n.disconnect()}),R(()=>r.el,(e,s)=>{s&&(n.unobserve(s),t.value=void 0),e&&n.observe(e)},{flush:"post"})}return{resizeRef:r,contentRect:m(t)}}export{d as u};
