const n={argTypes:{prefix:{control:"text",description:"namespaceКарточки"},title:{control:"text",description:"название карточки"},class:{control:"text",description:"классы карточки"},itemModel:{control:"text",description:"нужно вставить пример item-а карточки"}},args:{prefix:"ItemModel.borower",title:"Карточка кредита",class:"w-50",itemModel:JSON.stringify({amount:"1000000",borrowerId:"01J00G2DAJ6FQC1YFPKZKVWJP8",createdAt:"2024-06-11T13:51:36.819135Z",factEndsAt:"0001-01-01T00:00:00Z",guid:"e88867de-2329-4a11-a2aa-767a9d36dbd3",id:"01J03S32BJEA5Y8A64XE26CJD2",issuedAt:"2024-06-11T13:51:36.790598Z",periodCount:"4",periodLength:"1m",planEndsAt:"0001-01-01T00:00:00Z",productId:"01J03S32ASR3KTW0ZTW2D5787H",rate:.008,state:"pending",term:"122",timeZone:"Europe/Moscow",updatedAt:"2024-06-11T13:51:36.819135Z"})},render:e=>{const o=new Function(`return ${e.itemModel}`)();let s={};const a=e.prefix.split(".");let i=s,l=null,r=null;a.forEach(t=>{l=t,r=i,i[t]||(i[t]={}),i=i[t]}),r[l]=o;const d=[];return Object.keys(o).forEach(t=>{typeof o[t]!="object"&&d.push(`



    <div class="d-flex py-3 justify-space-between">
      <v-list-item
        density="compact"
      >
        <v-list-item-subtitle>${t}</v-list-item-subtitle>
      </v-list-item>

      <v-list-item
        density="compact"
      >
        {{${e.prefix}["${t}"]}}
      </v-list-item>
    </div>

  
    <VDivider class="mx-4 mb-1"></VDivider>
            
`)}),{data:()=>s,template:`<VCard ${e.class?'class="'+e.class+'"':""} hover>

      <template #title>
        ${e.title}
      </template>
    ${d.join(`
`)}
  </VCard>
  `}}};export{n as C};
