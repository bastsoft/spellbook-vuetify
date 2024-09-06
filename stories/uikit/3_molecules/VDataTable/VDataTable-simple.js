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
    headers: {
      control: 'text',
      description: 'Есть уже описание заголовков? если нет будет сформирован автоматически'
    }
  },
  args: {
    prefix: "ItemModel.borower",
    items: JSON.stringify([
      {
        "createdAt": "2024-07-17T15:10:52.863778Z",
        "credit": {
            "guid": "624d6beb-3c51-4bb3-9ab2-958d68fa3346",
            "id": "01J30KY2HQ0H6609E146MXZS37"
        },
        "federation": {
            "country": "Russia",
            "type": "installment"
        },
        "guid": "b22c2798-3e29-41ca-afc4-fd4392e71995",
        "id": "01J30KY2XB1ETJYB7Y69S7T9C0",
        "model": {
            "guid": "b2cbc279-0692-4cc5-b904-7dddbfad0f37",
            "id": "01HTM5B59HA26ET2Q914ECY78W",
            "name": "name model",
            "type": "type model"
        },
        "offer": "[]",
        "state": "pending",
        "type": "type",
        "updatedAt": "2024-07-17T15:10:52.863778Z"
      }
    ])
  },
  render: (args) => {
    const title = args.prefix;
    const items = new Function(`return ${args.items}`)();
    const item = items[0]; 
    
    let headers = [];

    //items.push(item);
    
    if(!args.headers && item){
      Object.keys(item).forEach(key => {
        if(typeof(item[key]) === 'object' && item[key] !== null && !Array.isArray(item[key])){
          const parent = { 
            title: `${key}`, 
            align: 'center',
            children: []
          };

          Object.keys(item[key]).forEach(key2 => {
            parent.children.push({ 
              title: `${key}.${key2}`, 
              key: `${key}.${key2}`,
              sortable: false
            });
          });

          headers.push(parent);
        }else{
          headers.push({ 
            title: key, 
            key: key,
            sortable: false
          });
        }

      });
      
    }else{
      headers = new Function(`return ${args.headers}`)();
    }

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
    data[headersKey] = headers;

    data = {...data};

    return {
      data: () => (data),
      template: `<VDataTable
    :headers="${headersKey}"
    :items="${args.prefix}"
  >
    <template #top>
      <VToolbar flat>
        <VToolbarTitle text="${title}"></VToolbarTitle>
      </VToolbar>
    </template>
  </VDataTable>
  `,
    };
  },
};