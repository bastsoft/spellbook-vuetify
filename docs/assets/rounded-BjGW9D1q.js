import{c as r,v as s}from"./vue.esm-bundler-DN3_H5t5.js";import{p as a,b as l}from"./defineComponent-CQcCBefB.js";const c=a({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function g(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:l();return{roundedClasses:r(()=>{const n=s(e)?e.value:e.rounded,o=s(e)?e.value:e.tile,t=[];if(n===!0||n==="")t.push(`${u}--rounded`);else if(typeof n=="string"||n===0)for(const d of String(n).split(" "))t.push(`rounded-${d}`);else(o||n===!1)&&t.push("rounded-0");return t})}}export{c as m,g as u};