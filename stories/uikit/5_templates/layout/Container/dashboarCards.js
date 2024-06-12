import CardByItemConfig from "../../../4_organisms/VCard/cardByItem.js";
import VDataTableSimple from "../../../3_molecules/VDataTable/VDataTable-simple.js";

export default {
  argTypes: {
    title: {
      control: "text",
      description: "title",
    },
    prefix: {
      control: "text",
      description: "namespace",
    },
    itemModel:{
      control: 'text',
      description: 'нужно вставить пример item-а карточки'
    },
  },
  args: {
    title: "Займ",
    prefix: "itemModel",
    itemModel: JSON.stringify({
      "amount": 1000000,
      "borrower": {
        "createdAt": "2024-06-10T07:16:14.803586Z",
        "dateOfBirth": "2011-06-02",
        "firstName": "first name",
        "guid": "80b41c6e-7adc-4840-ac9a-e0089f3dd9f4",
        "id": "01J00G2DAJ6FQC1YFPKZKVWJP8",
        "lastName": "last name",
        "middleName": "middle name",
        "state": "active",
        "timeZone": "Europe/Moscow",
        "updatedAt": "2024-06-10T07:16:14.803586Z"
      },
      "borrowerId": "01J00G2DAJ6FQC1YFPKZKVWJP8",
      "createdAt": "2024-06-11T13:51:36.819135Z",
      "factEndsAt": "0001-01-01T00:00:00Z",
      "guid": "e88867de-2329-4a11-a2aa-767a9d36dbd3",
      "id": "01J03S32BJEA5Y8A64XE26CJD2",
      "issuedAt": "2024-06-11T13:51:36.790598Z",
      "model": {
        "country": "russia",
        "createdAt": "2024-06-08T05:24:51.441124Z",
        "endsAt": "2024-07-10T13:20:17.411Z",
        "id": "01HZV4X0KG6DN93NT65TGEWAEM",
        "name": "Модель432",
        "startAt": "2024-06-10T13:20:17.411Z",
        "state": "active",
        "type": "il_monthly",
        "updatedAt": "2024-06-10T13:20:39.702196Z",
        "version": 2,
        "weight": 13
      },
      "periodCount": 4,
      "periodLength": "1m",
      "planEndsAt": "0001-01-01T00:00:00Z",
      "product": {
        "createdAt": "2024-06-11T13:51:36.793531Z",
        "id": "01J03S32ASR3KTW0ZTW2D5787H",
        "modelId": "01HZV4X0KG6DN93NT65TGEWAEM",
        "offer": "[]",
        "state": "pending",
        "type": "il_monthly",
        "updatedAt": "2024-06-11T13:51:36.793531Z"
      },
      "productId": "01J03S32ASR3KTW0ZTW2D5787H",
      "rate": 0.008,
      "schedules": [
        {
          "createdAt": "2024-06-11T13:51:36.822303Z",
          "creditId": "01J03S32BJEA5Y8A64XE26CJD2",
          "dpd": 0,
          "factEndsAt": "0001-01-01T00:00:00Z",
          "id": "01J03S32BP2NJMHCCBGZ9JMPT5",
          "interest": 240000,
          "num": 1,
          "payment": 418800,
          "planEndsAt": "2024-08-09T21:00:00Z",
          "principal": 178800,
          "startAt": "2024-07-10T21:00:00Z",
          "state": "active",
          "status": "opened",
          "updatedAt": "2024-06-11T13:51:36.822303Z"
        },
        {
          "createdAt": "2024-06-11T13:51:36.822304Z",
          "creditId": "01J03S32BJEA5Y8A64XE26CJD2",
          "dpd": 0,
          "factEndsAt": "0001-01-01T00:00:00Z",
          "id": "01J03S32BP2NJMHCCBH28DW192",
          "interest": 203657,
          "num": 2,
          "payment": 418800,
          "planEndsAt": "2024-09-10T21:00:00Z",
          "principal": 215143,
          "startAt": "2024-08-10T21:00:00Z",
          "state": "active",
          "status": "opened",
          "updatedAt": "2024-06-11T13:51:36.822304Z"
        },
        {
          "createdAt": "2024-06-11T13:51:36.822304Z",
          "creditId": "01J03S32BJEA5Y8A64XE26CJD2",
          "dpd": 0,
          "factEndsAt": "0001-01-01T00:00:00Z",
          "id": "01J03S32BP2NJMHCCBH31KDH78",
          "interest": 150302,
          "num": 3,
          "payment": 418800,
          "planEndsAt": "2024-10-11T21:00:00Z",
          "principal": 268498,
          "startAt": "2024-09-10T21:00:00Z",
          "state": "active",
          "status": "opened",
          "updatedAt": "2024-06-11T13:51:36.822304Z"
        },
        {
          "createdAt": "2024-06-11T13:51:36.822304Z",
          "creditId": "01J03S32BJEA5Y8A64XE26CJD2",
          "dpd": 0,
          "factEndsAt": "0001-01-01T00:00:00Z",
          "id": "01J03S32BP2NJMHCCBH6TP9K3G",
          "interest": 81014,
          "num": 4,
          "payment": 418500,
          "planEndsAt": "2024-11-09T21:00:00Z",
          "principal": 337786,
          "startAt": "2024-10-10T21:00:00Z",
          "state": "active",
          "status": "opened",
          "updatedAt": "2024-06-11T13:51:36.822304Z"
        }
      ],
      "services": [
        {
          "createdAt": "2024-06-11T13:51:36.816536Z",
          "id": "01J03S32BGZA4D20MWF9SV1V93",
          "modelId": "01HZVM59P9TM46JNSAEPS8Y02H",
          "offer": "[]",
          "state": "pending",
          "type": "some_service",
          "updatedAt": "2024-06-11T13:51:36.816536Z"
        }
      ],
      "state": "pending",
      "term": 122,
      "timeZone": "Europe/Moscow",
      "transactions": [],
      "updatedAt": "2024-06-11T13:51:36.819135Z"
    })
  },
    render: (args) => {
      const itemModel = new Function(`return ${args.itemModel}`)();
      let data = {};

      data[args.prefix] = itemModel;

      let Cards = [];
      let Grids = [];
      
      Cards.push('<v-col cols="12" md="6">'  + CardByItemConfig.render({
        prefix: args.prefix,
        title: args.title,
        itemModel: args.itemModel
      }).template + '</v-col>');

      Object.keys(itemModel).forEach(key => {
        const isObject = typeof itemModel[key] === 'object'; 
        if(isObject && !Array.isArray(itemModel[key])) {
          Cards.push('<v-col cols="12" md="6">'  + CardByItemConfig.render({
            prefix: args.prefix + "." + key,
            title: key,
            
            itemModel: JSON.stringify(itemModel[key])
          }).template + '</v-col>');
        }

        if(isObject && Array.isArray(itemModel[key])) {
          
          const grid = VDataTableSimple.render({
            prefix: args.prefix + "." + key,
            items: JSON.stringify(itemModel[key])
          });
          const gridDAta = grid.data();
          delete gridDAta[args.prefix];

          data = {...data, ...gridDAta};
          Grids.push("<VRow>" + grid.template + "</VRow>");
        } 

      });

      return {
      data: () => data,
      template: `<VContainer>
  <VRow justify="space-around" align-items="align-stretch">
        ${Cards.join('\n')}
  </VRow>
  ${Grids.join('\n')}
</VContainer>`
    }
  }
};
