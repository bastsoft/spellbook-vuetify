
export default {
  argTypes: {
    isTestBtn:{
      control: 'boolean',
      description: 'показывать тестовые кнопки на форме? (1/0)',
    },
    countInRow:{
      control: 'number',
      description: 'количество элементов в строке'
    },
    keyModel: {
      control: 'text',
      description: 'название переменной для основной модели данных формы'
    }, 
    formModel: {
      control: 'text',
      description: 'нужно вставить основную модель данных формы'
    },
    headers: {
      control: 'text',
      description: 'если есть grid, то можно сразу правильно написать title'
    },
  },
  args: {
    isTestBtn: 1,
    countInRow: 3,
    keyModel: 'itemModel',
    formModel: JSON.stringify({
      // "createdAt": "2024-06-05T06:31:42.164241Z",
       // "id": "",
      // "updatedAt": "2024-06-05T06:31:42.164241Z",
      // "version": "0",
    
      "name": "",
      "weight": 0,
      "type": null,
      "country": "",
    
      "state": null,
      "startAt": "0001-01-01T00:00:00Z",
      "endsAt": "0001-01-01T00:00:00Z",
    
      "parameters": [
        {
          "code": "",
          "type": "",
          "access": "",
          "comment": "",
          "text": "",
          "numeric": 0,
          "logical": true,
          "integer": "",
          "json": ""
        }
      ],
      "expressions": [
        {
          "createdAt": "2024-06-05T06:31:42.190330Z",
          "dsl": "", 
          "id": "",
          "modelId": "",
          "priority": 10,
          "state": "",
          "type": "",
          "updatedAt": "2024-06-05T06:31:42.190330Z",
          "version": ""
        }
      ],
    }),
    headers: JSON.stringify([
      { 
        "title": "ID",
        "key": "id",
        "sortable": false
      },
      {
        "title": "Имя",
        "key": "name",
        "sortable": false
      },
      {
        "title": "Вес",
        "key": "weight",
        "sortable": false
      },
      {
        "title": "Статус",
        "key": "state",
        "sortable": false
      },
      {
        "title": "Тип",
        "key": "type",
        "sortable": false
      },
      {
        "title": "Страна",
        "key": "country",
        "sortable": false
      },
      {
        "title": "Версия",
        "key": "version",
        "sortable": false
      },
      {
        "title": "Дата создания",
        "key": "createdAt",
        "sortable": false,
        value: item => `${(new Date(item.createdAt)).toLocaleDateString()}`,
      },
      {
        "title": "Дата обновления",
        "key": "updatedAt",
        "sortable": false,
        value: item => `${(new Date(item.updatedAt)).toLocaleDateString()}`,
      },
      {
        "title": "Дата окончания действия",
        "key": "endsAt",
        "sortable": false,
        value: item => `${(new Date(item.endsAt)).toLocaleDateString()}`,
      },
      {
        "title": "Датa начала действия",
        "key": "startAt",
        "sortable": false,
        value: item => `${(new Date(item.startAt)).toLocaleDateString()}`,
      },
    ])
  },
  render: (args) => {
    let data = {
      loading: false,
      isShow: false,
      errorMessages:"",
      rules: {},
    }
    const keyModel = args.keyModel;
    data[keyModel] = {};
    const formModel = new Function(`return ${args.formModel}`)();
    const headers = new Function(`return ${args.headers || '[]'}`)();
    const titleByKey = headers.reduce((obj, item) => {
      obj[item.key] = item.title;
      return obj
    }, {});
    let templateFields = "";
    let classTmpl = "v-col-md-4 v-col-sm-6 v-col-12";

    if(args.countInRow === 2){
      classTmpl = "v-col-sm-6 v-col-12";
    } 

    Object.keys(formModel).forEach(key => {
      const isString = typeof(formModel[key])  === 'string';
      const isNumber = typeof(formModel[key])  === 'number';
      const isIsoDate = /\d{4}-\d{2}-\d{2}/.test(formModel[key]);

      let type = 'text';
     
      if(isNumber){
        type = 'number';
      }

      if(isIsoDate){
        type = 'date';
        formModel[key] = (new Date(formModel[key])).toISOString().split("T")[0];
      }

      if(isString || isNumber) {
        templateFields += `
        <VTextField 
          class="${classTmpl}"
          v-model="${keyModel}.${key}" 
          label="${titleByKey[key] || key}" 
          :variant="isShow ? 'underlined' : 'outlined'" 
          :readonly="loading || isShow"
          :rules="[rules.required, rules.min]"
          :error-messages="errorMessages"
          required 
          clearable
          type="${type}"
        />
      `;
      }

      if(formModel[key] === null){
        templateFields += `
        <VSelect
          class="${classTmpl}"
          v-model="${keyModel}.${key}" 
          label="${titleByKey[key] || key}" 
          :items="['val1', 'val2', 'val3']"
           :variant="isShow ? 'underlined' : 'outlined'" 
          :readonly="loading || isShow"
          :rules="[rules.required]"
          :error-messages="errorMessages"
          clearable
        ></VSelect>
      `;
      }
    });


    const btnTemplate = `<VCol cols="12"/>
      <VBtn 
        class="${classTmpl}"
        :loading="loading"
        color="blue"
        size="large" 
        type="button" 
        variant="elevated"
        text="loading"
        @click="onSubmit"
      />
      <VBtn 
        class="${classTmpl}"
        :loading="loading"
        size="large" 
        type="button" 
        variant="elevated"
        text="Show"
        @click="onShow"
      />
      <VBtn 
        class="${classTmpl}"
        :loading="loading"
        size="large" 
        type="button" 
        variant="tonal"
        text="Validation"
        @click="onValidation"
      />`;


      let methods = {};

      if(args.isTestBtn ){
        methods.onSubmit = new Function(`
          this.loading = true
          setTimeout(() => (this.loading = false), 6000)
        `);
        methods.onShow = new Function(`
            this.isShow = !this.isShow;
        `);
        methods.onValidation = new Function(`
            this.errorMessages = "Кастомные ошибки";
        `);
      }


    return {
      data: () => (data),
      mounted(){
        this.rules = {
          required: value => !!value || 'Обязательное поле.',
          min: v => v.length >= 2 || 'Хотя бы два знака',
        };
      },
      methods: {
        onSubmit() {
          this.loading = true
          setTimeout(() => (this.loading = false), 6000)
        },
        onShow(){
          this.isShow = !this.isShow;
        },
        onValidation(){
          this.errorMessages = "Кастомные ошибки";
        }
      },
      template: `<VForm 
      class="v-row"
      @submit.prevent
    >

      ${templateFields}

      ${ args.isTestBtn ? btnTemplate : ""}
    </VForm>
    `
    };
  },
};