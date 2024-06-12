export default {
  argTypes: {
    prefix: {
      control: "text",
      description: "namespaceКарточки",
    },
    title: {
      control: "text",
      description: "название карточки",
    },
    class: {
      control: "text",
      description: "классы карточки",
    },
    itemModel: {
      control: "text",
      description: "нужно вставить пример item-а карточки",
    },
  },
  args: {
    prefix: "ItemModel.borower",
    title: "Карточка кредита",
    class: "w-50",
    itemModel: JSON.stringify({
      amount: "1000000",
      borrowerId: "01J00G2DAJ6FQC1YFPKZKVWJP8",
      createdAt: "2024-06-11T13:51:36.819135Z",
      factEndsAt: "0001-01-01T00:00:00Z",
      guid: "e88867de-2329-4a11-a2aa-767a9d36dbd3",
      id: "01J03S32BJEA5Y8A64XE26CJD2",
      issuedAt: "2024-06-11T13:51:36.790598Z",
      periodCount: "4",
      periodLength: "1m",
      planEndsAt: "0001-01-01T00:00:00Z",
      productId: "01J03S32ASR3KTW0ZTW2D5787H",
      rate: 0.008,
      state: "pending",
      term: "122",
      timeZone: "Europe/Moscow",
      updatedAt: "2024-06-11T13:51:36.819135Z",
    }),
  },
  render: (args) => {
    const itemModel = new Function(`return ${args.itemModel}`)();
   
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

    preData[lastKey] = itemModel;
    
    const vCardItems = [];
    Object.keys(itemModel).forEach((key) => {
      if (typeof itemModel[key] !== "object") {
      //   <VCardItem>
      //   <template #title>
      //      ${key}   
      //   </template>
      //   <template v-slot:append>
      //     {{${args.prefix}["${key}"]}}
      //   </template>
      // </VCardItem>
        vCardItems.push(`



    <div class="d-flex py-3 justify-space-between">
      <v-list-item
        density="compact"
      >
        <v-list-item-subtitle>${key}</v-list-item-subtitle>
      </v-list-item>

      <v-list-item
        density="compact"
      >
        {{${args.prefix}["${key}"]}}
      </v-list-item>
    </div>

  
    <VDivider class="mx-4 mb-1"></VDivider>
            
`);
      }
    });



  //   <v-card-text>
  //   <p class="text-h4 font-weight-black"> ${args.title}</p>
  // </v-card-text>
    return {
      data: () => data,
      template: `<VCard ${args.class ? 'class="' + '' + args.class + '"' : ''} hover>

      <template #title>
        ${args.title}
      </template>
    ${vCardItems.join("\n")}
  </VCard>
  `,
    };
  },
};
