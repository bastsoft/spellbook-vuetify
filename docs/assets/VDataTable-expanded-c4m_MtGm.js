const E={argTypes:{prefix:{control:"text",description:"будет использоваться в наименовании переменых и грида"},items:{control:"text",description:"данные для грида"},headers:{control:"text",description:"Есть уже описание заголовков? если нет будет сформирован автоматически"}},args:{prefix:"ItemModel.borower",items:JSON.stringify([{createdAt:"2024-07-17T15:10:52.863778Z",credit:{guid:"624d6beb-3c51-4bb3-9ab2-958d68fa3346",id:"01J30KY2HQ0H6609E146MXZS37"},federation:{country:"Russia",type:"installment"},guid:"b22c2798-3e29-41ca-afc4-fd4392e71995",id:"01J30KY2XB1ETJYB7Y69S7T9C0",model:{guid:"b2cbc279-0692-4cc5-b904-7dddbfad0f37",id:"01HTM5B59HA26ET2Q914ECY78W",name:"name model",type:"type model"},offer:"[]",state:"pending",type:"type",updatedAt:"2024-07-17T15:10:52.863778Z"}])},render:e=>{const x=e.prefix,s=new Function(`return ${e.items}`)(),r=s[0];let l=[];!e.headers&&r?Object.keys(r).forEach(t=>{if(typeof r[t]=="object"&&r[t]!==null&&!Array.isArray(r[t])){const p={title:`${t}`,align:"center",children:[]};Object.keys(r[t]).forEach(c=>{p.children.push({title:`${t}.${c}`,key:`${t}.${c}`,sortable:!1})}),l.push(p)}else l.push({title:t,key:t,sortable:!1})}):l=new Function(`return ${e.headers}`)();let o={};const m=e.prefix.split(".");let i=o,f=null,n=null;m.forEach(t=>{f=t,n=i,i[t]||(i[t]={}),i=i[t]}),n[f]=s;const d=e.prefix.replace(/\./g,"")+"Headers";return o[d]=l,o={...o},{data:()=>o,template:`<VDataTable
    :headers="${d}"
    :items="${e.prefix}"
  >
    <template #top>
      <VToolbar flat>
        <VToolbarTitle text="${x}"></VToolbarTitle>
      </VToolbar>
    </template>
  </VDataTable>
  `}}},V={argTypes:{prefix:{control:"text",description:"будет использоваться в наименовании переменых и грида"},items:{control:"text",description:"данные для грида"},itemExpendedKey:{control:"text",description:"в items какой ключь сделать details?, может установиться автоматически"},itemValue:{control:"text",description:"какое поле использовать как ключь для открытия"},headers:{control:"text",description:"Есть уже описание заголовков? если нет будет сформирован автоматически"}},args:{prefix:"task",itemExpendedKey:"tasks",itemValue:"created_at",items:JSON.stringify([{name:"v.24.10.22",tasks:[{task:"fix(KR-111):task"}],web_url:"https://github.com",author_name:"author_name",author_email:"author_name@ya.ru",created_at:"2024-10-22T13:10:38.000Z"}])},render:e=>{const x=e.prefix,s=new Function(`return ${e.items}`)();let r=e.itemExpendedKey;const l=s[0];let o=[];!r&&l&&Object.keys(l).forEach(a=>{Array.isArray(l[a])&&(r=a)}),!e.headers&&l?Object.keys(l).forEach(a=>{if(a===r)return;const h={title:a,key:a,sortable:!1};/\d{4}-\d{2}-\d{2}/.test(l[a])&&(h.xvalue=(T=>`${new Date(T[a]).toLocaleDateString()}`).toString().replace("[key]",`['${a}']`)),o.push(h)}):o=new Function(`return ${e.headers}`)();let m=[];Object.keys(l[r][0]).forEach(a=>{m.push({title:a,key:a,sortable:!1})});let i={};const f=e.prefix.split(".");let n=i,d=null,t=null;f.forEach(a=>{d=a,t=n,n[a]||(n[a]={}),n=n[a]}),t[d]=s;const p=e.prefix.replace(/\./g,"")+"Headers",c=e.prefix.replace(/\./g,"")+"Expanded",u=e.prefix.replace(/\./g,"")+"ItemsPerPage",b=e.prefix.replace(/\./g,"")+"Headers"+r;return i[p]=o,i[c]=[],i[b]=m,i={...i},{data:()=>i,template:`<VDataTable
        v-model:expanded="${c}"
        :headers="${p}"
        :items="${e.prefix}"
        v-model:items-per-page="${u}"
        show-expand
      >
        <template #top>
          <VToolbar flat="">
            <VToolbarTitle text="${x}"></VToolbarTitle>
            <v-spacer></v-spacer>      
            <v-btn  icon="mdi-table-arrow-down"></v-btn>
          </VToolbar>
        </template>
        <template v-slot:expanded-row="{ columns, item }">
          <tr>
            <td :colspan="columns.length"> 
              <VDataTable
                :headers="${b}"
                :items="item.${r}"
                :items-per-page="item.${r}.length"
                hide-default-footer
              >
              </VDataTable>
            </td>
          </tr>
        </template>
      </VDataTable>
  `}}};export{E as V,V as a};
