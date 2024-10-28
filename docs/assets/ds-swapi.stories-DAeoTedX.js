import{D as q}from"./vue.esm-bundler-DN3_H5t5.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";const U={name:"ds-swapi",data:()=>({data:null,loading:!1}),props:{resources:{type:String,default:""},page:{type:Number,default:1}},watch:{page:{handler(){this.fetchData()},immediate:!0}},computed:{items(){return(this.data||{}).results||[]},totalItems(){return(this.data||{}).count||0}},methods:{fetchData(){this.loading=!0;const e=this.resources?`${this.resources}/`:"",a=this.page>1?`?page=${this.page}`:"";fetch(`https://swapi.dev/api/${e}${a}`).then(s=>s.json()).then(s=>{this.data=s}).finally(()=>{this.loading=!1})}}};function C(e,a,s,d,G,u){return q(e.$slots,"default",{data:e.data,loading:e.loading,items:u.items,totalItems:u.totalItems})}const m=A(U,[["render",C]]);U.__docgenInfo={displayName:"ds-swapi",exportName:"default",description:"",tags:{},props:[{name:"resources",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"page",type:{name:"number"},defaultValue:{func:!1,value:"1"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"data",title:"binding"},{name:"loading",title:"binding"},{name:"items",title:"binding"},{name:"totalItems",title:"binding"}]}],sourceFiles:["/Users/petr/project/zaymigo/spellbook-vuetify/stories/datasource/ds-swapi/ds-swapi.vue"]};const K={title:"datasource/ds-swapi",component:m,tags:["autodocs"],parameters:{docs:{description:{component:""}},slots:{}},argTypes:{},render:e=>({components:{DsSwapi:m},data:()=>({...e}),template:`<DsSwapi :resources="resources">
    <template #default="{ data, items, totalItems, loading, loadItems }">
      loading: {{ loading}} <br/>
      totalItems: {{ totalItems }} <br/>
      items : {{ items }} <br/>
      <pre>{{ data }}</pre>
    </template>
</DsSwapi>`})},t={args:{}},r={args:{resources:"films"}},o={args:{resources:"people"}},n={args:{resources:"planets"}},p={args:{resources:"species"}},i={args:{resources:"starships"}},c={args:{resources:"vehicles"}},l={args:{resources:"people",page:1},render:e=>({components:{DsSwapi:m},data:()=>({...e}),methods:{loadItems:function({page:a,itemsPerPage:s,sortBy:d}){console.log({page:a,itemsPerPage:s,sortBy:d}),this.page=a}},template:`<DsSwapi :resources="resources" :page="page">
    <template #default="{ items, totalItems, loading }">
      <VDataTableServer
        :items-per-page="items.length"
        :items="items"
        :items-length="totalItems"
        :loading="loading"
        @update:options="loadItems"
     ></VDataTableServer>
    </template>
</DsSwapi>`})};var g,h,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {}
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,D,b;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    resources: "films"
  }
}`,...(b=(D=r.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var I,w,v;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    resources: "people"
  }
}`,...(v=(w=o.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var y,_,V;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    resources: "planets"
  }
}`,...(V=(_=n.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var P,T,$;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    resources: "species"
  }
}`,...($=(T=p.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var F,N,j;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    resources: "starships"
  }
}`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var x,B,k;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    resources: "vehicles"
  }
}`,...(k=(B=c.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var z,E,O;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    resources: "people",
    page: 1
  },
  render: args => ({
    components: {
      DsSwapi
    },
    data: () => ({
      ...args
    }),
    methods: {
      loadItems: function ({
        page,
        itemsPerPage,
        sortBy
      }) {
        console.log({
          page,
          itemsPerPage,
          sortBy
        });
        this.page = page;
      }
    },
    template: \`<DsSwapi :resources="resources" :page="page">
    <template #default="{ items, totalItems, loading }">
      <VDataTableServer
        :items-per-page="items.length"
        :items="items"
        :items-length="totalItems"
        :loading="loading"
        @update:options="loadItems"
     ></VDataTableServer>
    </template>
</DsSwapi>\`
  })
}`,...(O=(E=l.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const L=["Default","Films","People","Planets","Species","Starships","Vehicles","VDataTableServer"];export{t as Default,r as Films,o as People,n as Planets,p as Species,i as Starships,l as VDataTableServer,c as Vehicles,L as __namedExportsOrder,K as default};
