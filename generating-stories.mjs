import fs from 'fs';
import  path from 'path';
import { fileURLToPath } from 'url';
import webTypesJson from "./node_modules/vuetify/dist/json/web-types.json" assert { type: "json" };

const __dirname = path.dirname(fileURLToPath(import.meta.url));

//const currentTag = webTypesJson.contributions.html.tags[0];

var dir =  path.join(__dirname, "./stories/generated-stories");
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

webTypesJson.contributions.html.tags.forEach(currentTag=>{
  const slots = currentTag.slots.reduce((acc, slot) => {
    acc[slot.name] = slot;
    return acc;
  }, {});
  
  
  const attributes = currentTag.attributes.reduce((acc, attribute) => {
    acc[attribute.name] = attribute;
  
    acc[attribute.name].control = {
      type: "text",
    };
  
    if(attribute.value.type.includes("number")){
      acc[attribute.name].control = "number";
      return acc;
    }
  
    if(attribute.value.type.includes("|")){
      acc[attribute.name].control = "select";
      acc[attribute.name].options = attribute.value.type.split("|").map(item=>{
        return item.replace(/(\ |\'|boolean)/g, "");
      }).filter(Boolean);
      acc[attribute.name].options.unshift(undefined)
      return acc;
    }
  
  
    if(attribute.value.type.includes("boolean")){
      acc[attribute.name].control = "boolean";
      return acc;
    }
    
    return acc;
  }, {});
  
  const eventAttributes = currentTag.events.reduce((acc, event) => {
    const eventName = "on" + event.name.charAt(0).toUpperCase() + event.name.slice(1);
    acc[eventName] = event;
    acc[eventName].action = "@" + event.name;
    return acc;
  }, {});
  
  const addVueParams = {};
  
  
  if(currentTag["vue-model"] &&  eventAttributes["onUpdate:modelValue"]){
    addVueParams['v-model'] = {
      control: {
        type: Boolean,
      }
    }
  }
  
  const fileData = `import { ${currentTag.source.symbol} } from 'vuetify/components';
  
  export default {
    title: 'generated-stories/${currentTag.source.symbol}',
    component: ${currentTag.source.symbol},
    tags: ['autodocs'], 
    parameters: {
      docs: {
        description: {
          component: '[${currentTag["doc-url"]}](${currentTag["doc-url"]})'
        }
      },
      slots: ${JSON.stringify(slots, null, 2)}
    },
    argTypes: ${JSON.stringify({...addVueParams,...eventAttributes, ...attributes}, null, 2)},
  }
  
  export const Default = {
    args: {
    },
  };
  `;
  
  const fileStoriePath = dir + "/" + currentTag.name + ".stories.js";
  
  fs.promises.writeFile(fileStoriePath, fileData);
});
