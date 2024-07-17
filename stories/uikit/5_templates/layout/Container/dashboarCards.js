import CardByItemConfig from "../../../4_organisms/VCard/cardByItem.js";
import VDataTableSimple from "../../../3_molecules/VDataTable/VDataTable-simple.js";
import creditsStub from "./credits.stub.js";
import VDataTableExpanded from "../../../3_molecules/VDataTable/VDataTable-expanded.js";

const dashboarCards = {
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
    itemModel: JSON.stringify(creditsStub.data)
  },
    render: (args) => {
      const itemModel = new Function(`return ${args.itemModel}`)();
      let data = {};

      data[args.prefix] = itemModel;

      let Cards = [];
      let Panels = [];
      let Grids = [];
      
      // верхнеуровневые fields отобразим как карточку
      Cards.push( CardByItemConfig.render({
        prefix: args.prefix,
        title: "",
        itemModel: args.itemModel
      }).template );

      Object.keys(itemModel).forEach(key => {
        const isArray = Array.isArray(itemModel[key]) && (itemModel[key] || []).length > 0;
        // isArrayExpanded eсли в массив объектов содержится поле с типом Array
        const arrayExpandedField = (isArray && Object.keys(itemModel[key][0]).find(key2 => {
          return Array.isArray(itemModel[key][0][key2]) && (itemModel[key][0][key2] || []).length > 0;
        })) || "0";
        const isArrayExpanded = arrayExpandedField !== "0";
        const isObject = !isArray && typeof itemModel[key] === 'object'; 
        const isObjectExpanded = isObject && Object.keys(itemModel[key]).find(key2 => {
          return Array.isArray(itemModel[key][key2]) && itemModel[key][key2].length;
        });
        
        if(isObjectExpanded){
          const panel = dashboarCards.render({
            title: key,
            prefix: args.prefix + "." + key,
            itemModel: JSON.stringify(itemModel[key])
          });
          const panelData = panel.data();
          delete panelData[args.prefix];

          data = {...data, ...panelData};
          Panels.push(`<v-sheet class="my-5 pa-12" elevation="2">
              ${panel.template}
            </v-sheet>`);
        }

         // если fields object отображаем как карточку
        if(isObject && !isObjectExpanded) {
          Cards.push(CardByItemConfig.render({
            prefix: args.prefix + "." + key,
            title: key,
            
            itemModel: JSON.stringify(itemModel[key])
          }).template);
        }

        // если fields array отображаем как грид
        if(!isArrayExpanded && isArray) {
          
          const grid = VDataTableSimple.render({
            prefix: args.prefix + "." + key,
            items: JSON.stringify(itemModel[key])
          });
          const gridDAta = grid.data();
          delete gridDAta[args.prefix];

          data = {...data, ...gridDAta};
          Grids.push("<VRow>" + grid.template + "</VRow>");
        } 

        if(isArrayExpanded){
          const grid = VDataTableExpanded.render({
            prefix: args.prefix + "." + key,
            items: JSON.stringify(itemModel[key]),
            itemExpendedKey: arrayExpandedField
          });
          const gridDAta = grid.data();
          delete gridDAta[args.prefix];

          data = {...data, ...gridDAta};
          Grids.push("<VRow>" + grid.template + "</VRow>");
        }

      });

      return {
      data: () => data,
      template: `

      
  <VContainer>
    <VRow class="mb-5">
      <h2>${args.title}</h2>
    </VRow>
    <VRow justify="space-around" align-items="align-stretch">
          ${Cards.join('\n')}
    </VRow>
    <VRow justify="space-around" align-items="align-stretch">
          ${Panels.join('\n')}
    </VRow>
    ${Grids.join('\n')}
</VContainer>`
    }
  }
};

export default dashboarCards;