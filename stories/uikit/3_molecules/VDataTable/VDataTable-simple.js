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
        "borrower": null,
        "borrowerId": "",
        "createdAt": "2024-06-11T13:51:36.822303Z",
        "credit": null,
        "creditId": "01J03S32BJEA5Y8A64XE26CJD2",
        "deletedAt": null,
        "dpd": "0",
        "factEndsAt": "0001-01-01T00:00:00Z",
        "id": "01J03S32BP2NJMHCCBGZ9JMPT5",
        "period": "1",
        "planEndsAt": "2024-08-09T21:00:00Z",
        "product": null,
        "productId": "",
        "startAt": "2024-07-10T21:00:00Z",
        "state": "active",
        "status": "opened",
        "updatedAt": "2024-06-11T13:51:36.822303Z"
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
        headers.push({ 
          title: key, 
          key: key,
          sortable: false
        });
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