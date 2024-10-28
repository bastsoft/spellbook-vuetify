import{u as O}from"./proxiedModel-jyRWVYhQ.js";import{c as w,p as I,e as T,a as P,b as K,r as b,g as L,h as _}from"./vue.esm-bundler-DN3_H5t5.js";import{p as B,l as W,w as A,o as R,y as k,z as $,c as F}from"./defineComponent-CQcCBefB.js";import{u as G,c as Q}from"./locale-BPiAokE7.js";const U={showSelectAll:!1,allSelected:()=>[],select:e=>{var a;let{items:t,value:l}=e;return new Set(l?[(a=t[0])==null?void 0:a.value]:[])},selectAll:e=>{let{selected:t}=e;return t}},H={showSelectAll:!0,allSelected:e=>{let{currentPage:t}=e;return t},select:e=>{let{items:t,value:l,selected:a}=e;for(const r of t)l?a.add(r.value):a.delete(r.value);return a},selectAll:e=>{let{value:t,currentPage:l,selected:a}=e;return H.select({items:l,value:t,selected:a})}},M={showSelectAll:!0,allSelected:e=>{let{allItems:t}=e;return t},select:e=>{let{items:t,value:l,selected:a}=e;for(const r of t)l?a.add(r.value):a.delete(r.value);return a},selectAll:e=>{let{value:t,allItems:l,selected:a}=e;return M.select({items:l,value:t,selected:a})}},se=B({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:W}},"DataTable-select"),V=Symbol.for("vuetify:data-table-selection");function ue(e,t){let{allItems:l,currentPage:a}=t;const r=O(e,"modelValue",e.modelValue,o=>new Set(A(o).map(s=>{var x;return((x=l.value.find(p=>e.valueComparator(s,p.value)))==null?void 0:x.value)??s})),o=>[...o.values()]),n=w(()=>l.value.filter(o=>o.selectable)),u=w(()=>a.value.filter(o=>o.selectable)),c=w(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return U;case"all":return M;case"page":default:return H}});function f(o){return A(o).every(s=>r.value.has(s.value))}function i(o){return A(o).some(s=>r.value.has(s.value))}function d(o,s){const x=c.value.select({items:o,value:s,selected:new Set(r.value)});r.value=x}function h(o){d([o],!f([o]))}function v(o){const s=c.value.selectAll({value:o,allItems:n.value,currentPage:u.value,selected:new Set(r.value)});r.value=s}const y=w(()=>r.value.size>0),g=w(()=>{const o=c.value.allSelected({allItems:n.value,currentPage:u.value});return!!o.length&&f(o)}),m=w(()=>c.value.showSelectAll),S={toggleSelect:h,select:d,selectAll:v,isSelected:f,isSomeSelected:i,someSelected:y,allSelected:g,showSelectAll:m};return I(V,S),S}function ce(){const e=T(V);if(!e)throw new Error("Missing selection!");return e}const oe=B({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),C=Symbol.for("vuetify:data-table-sort");function ie(e){const t=O(e,"sortBy"),l=P(e,"mustSort"),a=P(e,"multiSort");return{sortBy:t,mustSort:l,multiSort:a}}function fe(e){const{sortBy:t,mustSort:l,multiSort:a,page:r}=e,n=f=>{if(f.key==null)return;let i=t.value.map(h=>({...h}))??[];const d=i.find(h=>h.key===f.key);d?d.order==="desc"?l.value?d.order="asc":i=i.filter(h=>h.key!==f.key):d.order="desc":a.value?i=[...i,{key:f.key,order:"asc"}]:i=[{key:f.key,order:"asc"}],t.value=i,r&&(r.value=1)};function u(f){return!!t.value.find(i=>i.key===f.key)}const c={sortBy:t,toggleSort:n,isSorted:u};return I(C,c),c}function de(){const e=T(C);if(!e)throw new Error("Missing sort!");return e}function he(e,t,l,a){const r=G();return{sortedItems:w(()=>{var u,c;return l.value.length?J(t.value,l.value,r.current.value,{transform:a==null?void 0:a.transform,sortFunctions:{...e.customKeySort,...(u=a==null?void 0:a.sortFunctions)==null?void 0:u.value},sortRawFunctions:(c=a==null?void 0:a.sortRawFunctions)==null?void 0:c.value}):t.value})}}function J(e,t,l,a){const r=new Intl.Collator(l,{sensitivity:"accent",usage:"sort"});return e.map(u=>[u,a!=null&&a.transform?a.transform(u):u]).sort((u,c)=>{var f,i;for(let d=0;d<t.length;d++){let h=!1;const v=t[d].key,y=t[d].order??"asc";if(y===!1)continue;let g=R(u[1],v),m=R(c[1],v),S=u[0].raw,o=c[0].raw;if(y==="desc"&&([g,m]=[m,g],[S,o]=[o,S]),(f=a==null?void 0:a.sortRawFunctions)!=null&&f[v]){const s=a.sortRawFunctions[v](S,o);if(s==null)continue;if(h=!0,s)return s}if((i=a==null?void 0:a.sortFunctions)!=null&&i[v]){const s=a.sortFunctions[v](g,m);if(s==null)continue;if(h=!0,s)return s}if(!h){if(g instanceof Date&&m instanceof Date)return g.getTime()-m.getTime();if([g,m]=[g,m].map(s=>s!=null?s.toString().toLocaleLowerCase():s),g!==m)return k(g)&&k(m)?0:k(g)?-1:k(m)?1:!isNaN(g)&&!isNaN(m)?Number(g)-Number(m):r.compare(g,m)}}return 0}).map(u=>{let[c]=u;return c})}const me=$({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String],maxWidth:[Number,String],nowrap:Boolean},(e,t)=>{let{slots:l}=t;const a=e.tag??"td";return K(a,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding,"v-data-table-column--nowrap":e.nowrap},`v-data-table-column--align-${e.align}`],style:{height:F(e.height),width:F(e.width),maxWidth:F(e.maxWidth),left:F(e.fixedOffset||null)}},{default:()=>{var r;return[(r=l.default)==null?void 0:r.call(l)]}})}),ge=B({headers:Array},"DataTable-header"),E=Symbol.for("vuetify:data-table-headers"),q={title:"",sortable:!1},X={...q,width:48};function Y(){const t=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(l=>({element:l,priority:0}));return{enqueue:(l,a)=>{let r=!1;for(let n=0;n<t.length;n++)if(t[n].priority>a){t.splice(n,0,{element:l,priority:a}),r=!0;break}r||t.push({element:l,priority:a})},size:()=>t.length,count:()=>{let l=0;if(!t.length)return 0;const a=Math.floor(t[0].priority);for(let r=0;r<t.length;r++)Math.floor(t[r].priority)===a&&(l+=1);return l},dequeue:()=>t.shift()}}function D(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)t.push(e);else for(const l of e.children)D(l,t);return t}function j(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const l of e)l.key&&t.add(l.key),l.children&&j(l.children,t);return t}function Z(e){if(e.key){if(e.key==="data-table-group")return q;if(["data-table-expand","data-table-select"].includes(e.key))return X}}function N(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(t,...e.children.map(l=>N(l,t+1))):t}function ee(e){let t=!1;function l(n){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n)if(u&&(n.fixed=!0),n.fixed)if(n.children)for(let c=n.children.length-1;c>=0;c--)l(n.children[c],!0);else t?isNaN(+n.width)&&Q(`Multiple fixed columns should have a static width (key: ${n.key})`):n.lastFixed=!0,t=!0;else if(n.children)for(let c=n.children.length-1;c>=0;c--)l(n.children[c]);else t=!1}for(let n=e.length-1;n>=0;n--)l(e[n]);function a(n){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!n)return u;if(n.children){n.fixedOffset=u;for(const c of n.children)u=a(c,u)}else n.fixed&&(n.fixedOffset=u,u+=parseFloat(n.width||"0")||0);return u}let r=0;for(const n of e)r=a(n,r)}function te(e,t){const l=[];let a=0;const r=Y(e);for(;r.size()>0;){let u=r.count();const c=[];let f=1;for(;u>0;){const{element:i,priority:d}=r.dequeue(),h=t-a-N(i);if(c.push({...i,rowspan:h??1,colspan:i.children?D(i).length:1}),i.children)for(const v of i.children){const y=d%1+f/Math.pow(10,a+2);r.enqueue(v,a+h+y)}f+=1,u-=1}a+=1,l.push(c)}return{columns:e.map(u=>D(u)).flat(),headers:l}}function z(e){const t=[];for(const l of e){const a={...Z(l),...l},r=a.key??(typeof a.value=="string"?a.value:null),n=a.value??r??null,u={...a,key:r,value:n,sortable:a.sortable??(a.key!=null||!!a.sort),children:a.children?z(a.children):void 0};t.push(u)}return t}function ve(e,t){const l=b([]),a=b([]),r=b({}),n=b({}),u=b({});L(()=>{var m,S,o;const i=(e.headers||Object.keys(e.items[0]??{}).map(s=>({key:s,title:_(s)}))).slice(),d=j(i);(m=t==null?void 0:t.groupBy)!=null&&m.value.length&&!d.has("data-table-group")&&i.unshift({key:"data-table-group",title:"Group"}),(S=t==null?void 0:t.showSelect)!=null&&S.value&&!d.has("data-table-select")&&i.unshift({key:"data-table-select"}),(o=t==null?void 0:t.showExpand)!=null&&o.value&&!d.has("data-table-expand")&&i.push({key:"data-table-expand"});const h=z(i);ee(h);const v=Math.max(...h.map(s=>N(s)))+1,y=te(h,v);l.value=y.headers,a.value=y.columns;const g=y.headers.flat(1);for(const s of g)s.key&&(s.sortable&&(s.sort&&(r.value[s.key]=s.sort),s.sortRaw&&(n.value[s.key]=s.sortRaw)),s.filter&&(u.value[s.key]=s.filter))});const c={headers:l,columns:a,sortFunctions:r,sortRawFunctions:n,filterFunctions:u};return I(E,c),c}function ye(){const e=T(E);if(!e)throw new Error("Missing headers!");return e}export{me as V,ve as a,fe as b,ie as c,de as d,ce as e,ye as f,se as g,oe as h,ge as m,ue as p,he as u};
