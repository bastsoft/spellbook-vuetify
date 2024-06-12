import { VCardText } from 'vuetify/components';
  
  export default {
    title: 'generated-stories/VCardText',
    component: VCardText,
    tags: ['autodocs'], 
    parameters: {
      docs: {
        description: {
          component: '[https://vuetifyjs.com/api/v-card-text](https://vuetifyjs.com/api/v-card-text)'
        }
      },
      slots: {
  "default": {
    "name": "default",
    "description": "The default Vue slot.",
    "doc-url": "https://vuetifyjs.com/api/v-card-text#slots"
  }
}
    },
    argTypes: {
  "opacity": {
    "name": "opacity",
    "description": "Sets the component's opacity value",
    "doc-url": "https://vuetifyjs.com/api/VCardText#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "tag": {
    "name": "tag",
    "description": "Specify a custom tag used on the root element.",
    "doc-url": "https://vuetifyjs.com/api/VCardText#props",
    "default": "'div'",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  }
},
  }
  
  export const Default = {
    args: {
    },
  };
  