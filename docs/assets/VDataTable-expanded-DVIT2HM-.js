const T={argTypes:{prefix:{control:"text",description:"будет использоваться в наименовании переменых и грида"},items:{control:"text",description:"данные для грида"},headers:{control:"text",description:"Есть уже описание заголовков? если нет будет сформирован автоматически"}},args:{prefix:"ItemModel.borower",items:JSON.stringify([{createdAt:"2024-07-17T15:10:52.863778Z",credit:{guid:"624d6beb-3c51-4bb3-9ab2-958d68fa3346",id:"01J30KY2HQ0H6609E146MXZS37"},federation:{country:"Russia",type:"installment"},guid:"b22c2798-3e29-41ca-afc4-fd4392e71995",id:"01J30KY2XB1ETJYB7Y69S7T9C0",model:{guid:"b2cbc279-0692-4cc5-b904-7dddbfad0f37",id:"01HTM5B59HA26ET2Q914ECY78W",name:"name model",type:"type model"},offer:"[]",state:"pending",type:"type",updatedAt:"2024-07-17T15:10:52.863778Z"}])},render:e=>{const b=e.prefix,n=new Function(`return ${e.items}`)(),r=n[0];let o=[];!e.headers&&r?Object.keys(r).forEach(t=>{if(typeof r[t]=="object"&&r[t]!==null&&!Array.isArray(r[t])){const p={title:`${t}`,align:"center",children:[]};Object.keys(r[t]).forEach(c=>{p.children.push({title:`${t}.${c}`,key:`${t}.${c}`,sortable:!1})}),o.push(p)}else o.push({title:t,key:t,sortable:!1})}):o=new Function(`return ${e.headers}`)();let i={};const f=e.prefix.split(".");let a=i,m=null,d=null;f.forEach(t=>{m=t,d=a,a[t]||(a[t]={}),a=a[t]}),d[m]=n;const s=e.prefix.replace(/\./g,"")+"Headers";return i[s]=o,i={...i},{data:()=>i,template:`<VDataTable
    :headers="${s}"
    :items="${e.prefix}"
  >
    <template #top>
      <VToolbar flat>
        <VToolbarTitle text="${b}"></VToolbarTitle>
      </VToolbar>
    </template>
  </VDataTable>
  `}}},h={argTypes:{prefix:{control:"text",description:"будет использоваться в наименовании переменых и грида"},items:{control:"text",description:"данные для грида"},headers:{control:"text",description:"Есть уже описание заголовков? если нет будет сформирован автоматически"}},args:{prefix:"ItemModel.borower",itemExpendedKey:"balances",items:JSON.stringify([{balances:[{accountId:"",amount:0,amountInit:7e6,calculatedAt:"2024-07-11T15:27:31.782890Z",createdAt:"0001-01-01T00:00:00Z",id:"01J2H6G8E6APF56VDDBP5WBN4P",state:"",type:"debit",updatedAt:"0001-01-01T00:00:00Z"}],borrowerId:"",createdAt:"0001-01-01T00:00:00Z",creditId:"01J2H6G6Z3261JJVZ5P5WR15ZN",id:"01J2H6G8CTDF1QYR31859YB49E",state:"",type:"credit_account",updatedAt:"0001-01-01T00:00:00Z"}])},render:e=>{const b=e.prefix,n=new Function(`return ${e.items}`)(),r=e.itemExpendedKey,o=n[0];let i=[];!e.headers&&o?Object.keys(o).forEach(l=>{l!==r&&i.push({title:l,key:l,sortable:!1})}):i=new Function(`return ${e.headers}`)();let f=[];Object.keys(o[r][0]).forEach(l=>{f.push({title:l,key:l,sortable:!1})});let a={};const m=e.prefix.split(".");let d=a,s=null,t=null;m.forEach(l=>{s=l,t=d,d[l]||(d[l]={}),d=d[l]}),t[s]=n;const p=e.prefix.replace(/\./g,"")+"Headers",c=e.prefix.replace(/\./g,"")+"Expanded",u=e.prefix.replace(/\./g,"")+"ItemsPerPage",x=e.prefix.replace(/\./g,"")+"Headers"+r;return a[p]=i,a[c]=[],a[x]=f,a={...a},{data:()=>a,template:`<VDataTable
        v-model:expanded="${c}"
        :headers="${p}"
        :items="${e.prefix}"
        v-model:items-per-page="${u}"
        show-expand
      >
        <template #top>
          <VToolbar flat="">
            <VToolbarTitle text="${b}"></VToolbarTitle>
            <v-spacer></v-spacer>      
            <v-btn  icon="mdi-table-arrow-down"></v-btn>
          </VToolbar>
        </template>
        <template v-slot:expanded-row="{ columns, item }">
          <tr>
            <td :colspan="columns.length"> 
              <VDataTable
                :headers="${x}"
                :items="item.${r}"
                :items-per-page="item.${r}.length"
                hide-default-footer
              >
              </VDataTable>
            </td>
          </tr>
        </template>
      </VDataTable>
  `}}};export{T as V,h as a};
