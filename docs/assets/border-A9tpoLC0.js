import{c as n,v as a}from"./vue.esm-bundler-DN3_H5t5.js";import{p as u,b as d}from"./defineComponent-CQcCBefB.js";const b=u({border:[Boolean,Number,String]},"border");function f(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:d();return{borderClasses:n(()=>{const r=a(e)?e.value:e.border,s=[];if(r===!0||r==="")s.push(`${o}--border`);else if(typeof r=="string"||r===0)for(const t of String(r).split(" "))s.push(`border-${t}`);return s})}}export{b as m,f as u};