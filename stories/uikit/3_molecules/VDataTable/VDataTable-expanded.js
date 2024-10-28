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
      description: 'в items какой ключь сделать details, если оставить пустым то будет сгенерирован автоматически'
    },
    headers: {
      control: 'text',
      description: 'Есть уже описание заголовков? если нет будет сформирован автоматически'
    }
  },
  args: {
    prefix: "ItemModel.borower",
    itemExpendedKey: "balances",
    items: JSON.stringify([
      {
        "balances": [
            {
                "accountId": "",
                "amount": 0,
                "amountInit": 7000000,
                "calculatedAt": "2024-07-11T15:27:31.782890Z",
                "createdAt": "0001-01-01T00:00:00Z",
                "id": "01J2H6G8E6APF56VDDBP5WBN4P",
                "state": "",
                "type": "debit",
                "updatedAt": "0001-01-01T00:00:00Z"
            }
        ],
        "borrowerId": "",
        "createdAt": "0001-01-01T00:00:00Z",
        "creditId": "01J2H6G6Z3261JJVZ5P5WR15ZN",
        "id": "01J2H6G8CTDF1QYR31859YB49E",
        "state": "",
        "type": "credit_account",
        "updatedAt": "0001-01-01T00:00:00Z"
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

        headers.push({ 
          title: key, 
          key: key,
          sortable: false
        });
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