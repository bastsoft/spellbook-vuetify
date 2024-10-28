const h={argTypes:{isTestBtn:{control:"boolean",description:"показывать тестовые кнопки на форме? (1/0)"},countInRow:{control:"number",description:"количество элементов в строке"},keyModel:{control:"text",description:"название переменной для основной модели данных формы"},formModel:{control:"text",description:"нужно вставить основную модель данных формы"},headers:{control:"text",description:"если есть grid, то можно сразу правильно написать title"}},args:{isTestBtn:1,countInRow:3,keyModel:"itemModel",formModel:JSON.stringify({name:"",weight:0,type:null,country:"",state:null,startAt:"0001-01-01T00:00:00Z",endsAt:"0001-01-01T00:00:00Z",parameters:[{code:"",type:"",access:"",comment:"",text:"",numeric:0,logical:!0,integer:"",json:""}],expressions:[{createdAt:"2024-06-05T06:31:42.190330Z",dsl:"",id:"",modelId:"",priority:10,state:"",type:"",updatedAt:"2024-06-05T06:31:42.190330Z",version:""}]}),headers:JSON.stringify([{title:"ID",key:"id",sortable:!1},{title:"Имя",key:"name",sortable:!1},{title:"Вес",key:"weight",sortable:!1},{title:"Статус",key:"state",sortable:!1},{title:"Тип",key:"type",sortable:!1},{title:"Страна",key:"country",sortable:!1},{title:"Версия",key:"version",sortable:!1},{title:"Дата создания",key:"createdAt",sortable:!1,value:t=>`${new Date(t.createdAt).toLocaleDateString()}`},{title:"Дата обновления",key:"updatedAt",sortable:!1,value:t=>`${new Date(t.updatedAt).toLocaleDateString()}`},{title:"Дата окончания действия",key:"endsAt",sortable:!1,value:t=>`${new Date(t.endsAt).toLocaleDateString()}`},{title:"Датa начала действия",key:"startAt",sortable:!1,value:t=>`${new Date(t.startAt).toLocaleDateString()}`}])},render:t=>{let r={loading:!1,isShow:!1,errorMessages:"",rules:{}};const a=t.keyModel;r[a]={};const l=new Function(`return ${t.formModel}`)(),d=new Function(`return ${t.headers||"[]"}`)().reduce((e,s)=>(e[s.key]=s.title,e),{});let i="",o="v-col-md-4 v-col-sm-6 v-col-12";t.countInRow===2&&(o="v-col-sm-6 v-col-12"),Object.keys(l).forEach(e=>{const s=typeof l[e]=="string",c=typeof l[e]=="number",m=/\d{4}-\d{2}-\d{2}/.test(l[e]);let n="text";c&&(n="number"),m&&(n="date",l[e]=new Date(l[e]).toISOString().split("T")[0]),(s||c)&&(i+=`
        <VTextField 
          class="${o}"
          v-model="${a}.${e}" 
          label="${d[e]||e}" 
          :variant="isShow ? 'underlined' : 'outlined'" 
          :readonly="loading || isShow"
          :rules="[rules.required, rules.min]"
          :error-messages="errorMessages"
          required 
          clearable
          type="${n}"
        />
      `),l[e]===null&&(i+=`
        <VSelect
          class="${o}"
          v-model="${a}.${e}" 
          label="${d[e]||e}" 
          :items="['val1', 'val2', 'val3']"
           :variant="isShow ? 'underlined' : 'outlined'" 
          :readonly="loading || isShow"
          :rules="[rules.required]"
          :error-messages="errorMessages"
          clearable
        ></VSelect>
      `)});const u=`<VCol cols="12"/>
      <VBtn 
        class="${o}"
        :loading="loading"
        color="blue"
        size="large" 
        type="button" 
        variant="elevated"
        text="loading"
        @click="onSubmit"
      />
      <VBtn 
        class="${o}"
        :loading="loading"
        size="large" 
        type="button" 
        variant="elevated"
        text="Show"
        @click="onShow"
      />
      <VBtn 
        class="${o}"
        :loading="loading"
        size="large" 
        type="button" 
        variant="tonal"
        text="Validation"
        @click="onValidation"
      />`;return t.isTestBtn&&(new Function(`
          this.loading = true
          setTimeout(() => (this.loading = false), 6000)
        `),new Function(`
            this.isShow = !this.isShow;
        `),new Function(`
            this.errorMessages = "Кастомные ошибки";
        `)),{data:()=>r,mounted(){this.rules={required:e=>!!e||"Обязательное поле.",min:e=>e.length>=2||"Хотя бы два знака"}},methods:{onSubmit(){this.loading=!0,setTimeout(()=>this.loading=!1,6e3)},onShow(){this.isShow=!this.isShow},onValidation(){this.errorMessages="Кастомные ошибки"}},template:`<VForm 
      class="v-row"
      @submit.prevent
    >

      ${i}

      ${t.isTestBtn?u:""}
    </VForm>
    `}}};export{h as V};
