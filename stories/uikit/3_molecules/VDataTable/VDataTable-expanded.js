export default {
  argTypes: {
    prefix:{
      control: 'text',
      description: 'будет использоваться в наименовании переменых и грида'
    },
    items: {
      control: 'text',
      description: 'данные для грида'
    },
    itemExpendedKey: {
      control: 'text',
      description: 'в items какой ключь сделать details?, может установиться автоматически'
    },
    itemValue: {
      control: 'text',
      description: 'какое поле использовать как ключь для открытия'
    },
    headers: {
      control: 'text',
      description: 'Есть уже описание заголовков? если нет будет сформирован автоматически'
    }
  },
  args: {
    prefix: "task",
    itemExpendedKey: "tasks",
    itemValue: "created_at",
    items: JSON.stringify([
      {
        "name": "v.24.10.22",
        "tasks": [
          {
            "task": "fix(KR-111):task"
          }
        ],
        "web_url": "https://github.com",
        "author_name": "author_name",
        "author_email": "author_name@ya.ru",
        "created_at": "2024-10-22T13:10:38.000Z"
      }
    ])
  },
  render: (args) => {
    const title = args.prefix;
    const items = new Function(`return ${args.items}`)();
    let itemExpendedKey = args.itemExpendedKey;
    const item = items[0]; 
    
    let headers = [];
  
    if(!itemExpendedKey && item){
      Object.keys(item).forEach(key => {
        if(Array.isArray(item[key])){
          itemExpendedKey = key;
        }
      });
    }

    //items.push(item);
    
    if(!args.headers && item){
      Object.keys(item).forEach(key => {
        if(key === itemExpendedKey){
          return;
        }

        const headerItem = { 
          title: key, 
          key: key,
          sortable: false
        };

        const isIsoDate = /\d{4}-\d{2}-\d{2}/.test(item[key]);

        if(isIsoDate){
          headerItem.xvalue = (item => `${(new Date(item[key])).toLocaleDateString()}`).toString().replace("[key]", `['${key}']`);
        }

        headers.push(headerItem);
      });
    }else{
      headers = new Function(`return ${args.headers}`)();
    }

    let headersExpanded = [];

    Object.keys(item[itemExpendedKey][0]).forEach(key => {
      headersExpanded.push({ 
        title: key, 
        key: key,
        sortable: false
      });
    });


    let data = {};

    const prefixArr = args.prefix.split(".");
    let prefixData = data;
    let lastKey = null;
    let preData = null;
    prefixArr.forEach((key) => {
      lastKey = key;
      preData = prefixData;
      if (!prefixData[key]) {
        prefixData[key] = {};
      }
      prefixData = prefixData[key];
    });

    preData[lastKey] = items;
    const headersKey = args.prefix.replace(/\./g, "") + "Headers";
    const expandedKey = args.prefix.replace(/\./g, "") + "Expanded";
    const itemsPerPageKey = args.prefix.replace(/\./g, "") + "ItemsPerPage";
    const headerItemExpandedKey = args.prefix.replace(/\./g, "") + "Headers" + itemExpendedKey;
    data[headersKey] = headers;
    data[expandedKey] = [];
    data[headerItemExpandedKey] = headersExpanded;
    data = {...data};

    return {
      data: () => (data),
      template: `<VDataTable
        v-model:expanded="${expandedKey}"
        :headers="${headersKey}"
        :items="${args.prefix}"
        v-model:items-per-page="${itemsPerPageKey}"
        show-expand
      >
        <template #top>
          <VToolbar flat="">
            <VToolbarTitle text="${title}"></VToolbarTitle>
            <v-spacer></v-spacer>      
            <v-btn  icon="mdi-table-arrow-down"></v-btn>
          </VToolbar>
        </template>
        <template v-slot:expanded-row="{ columns, item }">
          <tr>
            <td :colspan="columns.length"> 
              <VDataTable
                :headers="${headerItemExpandedKey}"
                :items="item.${itemExpendedKey}"
                :items-per-page="item.${itemExpendedKey}.length"
                hide-default-footer
              >
              </VDataTable>
            </td>
          </tr>
        </template>
      </VDataTable>
  `,
    };
  },
};