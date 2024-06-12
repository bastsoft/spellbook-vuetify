import VFormGenerator from "../../4_organisms/Form/VForm-Generator.js";

export default {
  argTypes: {
    prefix:{
      control: 'text',
      description: 'будет использоваться в наименовании переменых и грида'
    },
    itemExample: {
      control: 'text',
      description: 'нужно вставить пример item-а в гриде'
    },
    headers: {
      control: 'text',
      description: 'Есть уже описание заголовков? если нет будет сформирован автоматически'
    }
  },
  args: {
    prefix: 'parameters',
    itemExample: JSON.stringify({
      code: "string",
      comment: "string",
  
      access: null,
      state: null,
      type: null,
      
      "text": "string",
      numeric: 0,
      logical: true,
      "integer": 0,
        "json": "",
       
      
      id: "01HZNT86REXKBQ8TH88MSXYVM7",
      productId: "",
  
      createdAt: "2024-06-06T03:42:31.694955Z",
      updatedAt: "2024-06-06T03:42:31.694955Z",
      version: "1",
    }),
    "headers": JSON.stringify([
      {
        "title": "Действия",
        "key": "actions",
        "sortable": false
      },
      {
        "title": "Код-ое имя",
        "key": "code",
        "sortable": false
      },
      {
        "title": "Комментарий",
        "key": "comment",
        "sortable": false
      },
      {
        "title": "Доступ",
        "key": "access",
        "sortable": false
      },
      {
        "title": "Статус",
        "key": "state",
        "sortable": false
      },
      {
        "title": "Тип данных",
        "key": "type",
        "sortable": false
      },
      {
        "title": "Текст",
        "key": "text",
        "sortable": false
      },
      {
        "title": "Число с плавающей точкой",
        "key": "numeric",
        "sortable": false
      },
      {
        "title": "Логическое",
        "key": "logical",
        "sortable": false
      },
      {
        "title": "Целое число",
        "key": "integer",
        "sortable": false
      },
      {
        "title": "Объект",
        "key": "json",
        "sortable": false
      },
      {
        "title": "Id",
        "key": "id",
        "sortable": false
      },
      {
        "title": "ProductId",
        "key": "productId",
        "sortable": false
      },
      {
        "title": "Дата создания",
        "key": "createdAt",
        "sortable": false
      },
      {
        "title": "Дата обновления",
        "key": "updatedAt",
        "sortable": false
      },
      {
        "title": "Версия",
        "key": "version",
        "sortable": false
      }
    ])
  },
  render: (args) => {
    const title = args.prefix;
    const item = new Function(`return ${args.itemExample}`)();
    const items = [];
    let headers = [];

    items.push(item);
    
    if(!args.headers){
      Object.keys(item).forEach(key => {
        headers.push({ 
          title: key, 
          key: key,
          sortable: false
        });
      });
  
      headers.push({ title: 'Actions', key: 'actions', sortable: false });  
    }else{
      headers = new Function(`return ${args.headers}`)();
    }

    let data = {};

    data[args.prefix + "Items"] = items;
    data[args.prefix + "Headers"] = headers;
    data[args.prefix + "FormTitle"] = "";
    data[args.prefix + "IsShowForm"] = false;
    data[args.prefix + "EditedIndex"] = -1;

    let methods = {};

    methods[args.prefix + "onAdd"] = new Function(`
      this.${args.prefix}FormTitle = "Добавить ${args.prefix}";
      this.${args.prefix}IsShowForm = true;
      this.${args.prefix}Form = {};
      this.${args.prefix + "EditedIndex"} = -1
    `);

    methods[args.prefix + "editItem"] = new Function("payload", `
      this.${args.prefix}FormTitle = "Редактировать ${args.prefix}";
      this.${args.prefix}IsShowForm = true;
      this.${args.prefix}Form = payload;
      this.${args.prefix + "EditedIndex"} = this.${args.prefix + "Items"}.indexOf(payload)
    `);
    
    methods[args.prefix + "onClose"] = new Function(`
      this.${args.prefix}IsShowForm = false;
      this.${args.prefix + "EditedIndex"} = -1
    `);
    methods[args.prefix + "onSave"] = new Function(`
      if (this.${args.prefix + "EditedIndex"} > -1) {
        Object.assign(this.${args.prefix + "Items"}[this.${args.prefix + "EditedIndex"}], this.${args.prefix}Form)
      } else {
        this.${args.prefix + "Items"}.push(this.${args.prefix}Form)
      }
      this.${args.prefix}IsShowForm = false;
    `);

    methods[args.prefix + "deleteItem"] = new Function("payload", `
      if(confirm("Удалить элемент из ${args.prefix}?")){
        const editedIndex = this.${args.prefix + "Items"}.indexOf(payload);
        this.${args.prefix + "Items"}.splice(editedIndex, 1);
      }

      this.${args.prefix}IsShowForm = false;
    `);

    const formComponent = VFormGenerator.render({
      isTestBtn: 0,
      countInRow: 2,
      keyModel: args.prefix + "Form",
      formModel: args.itemExample,
      headers: args.headers
    });

    methods = {...methods, ...formComponent.methods};
    data = {...data, ...formComponent.data()};
    return {
      data: () => (data),
      methods: {
        editItem(item) {
        },
        deleteItem(item) {
        },
      },
      mounted: formComponent.mounted,
      methods: methods,
      template: `<VDataTable
    :headers="${args.prefix + 'Headers'}"
    :items="${args.prefix + 'Items'}"
  >
    <template #top>
      <VToolbar flat>
        <VToolbarTitle text="${title}"></VToolbarTitle>
        <VDivider class="mx-4" inset vertical></VDivider>
        <VSpacer></VSpacer>
        <VBtn class="mb-2" color="primary" dark v-bind="props" text="Добавить" @click="${args.prefix + "onAdd"}">
        </VBtn>
        <v-dialog
          v-model="${args.prefix + "IsShowForm"}"
        >
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ ${args.prefix + "FormTitle"} }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                ${formComponent.template}
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="${args.prefix + "onClose"}"
              >
                Отменить
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="${args.prefix + "onSave"}"
              >
                Сохранить
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </VToolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon class="me-2" size="small" icon="mdi-pencil" @click="${args.prefix + "editItem"}(item)">
        
      </v-icon>
      <v-icon size="small" @click="${args.prefix + "deleteItem"}(item)" icon="mdi-delete">  </v-icon>
    </template>
  </VDataTable>`,
    };
  },
};