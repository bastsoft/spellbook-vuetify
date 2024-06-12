import { VCardSubtitle } from 'vuetify/components';
  
  export default {
    title: 'uikit/4_organisms/VCard/components/VCardSubtitle',
    component: VCardSubtitle,
    tags: ['autodocs'], 
    parameters: {
      docs: {
        description: {
          component: '[https://vuetifyjs.com/api/v-card-subtitle](https://vuetifyjs.com/api/v-card-subtitle)'
        }
      },
      slots: {
  "default": {
    "name": "default",
    "description": "The default Vue slot.",
    "doc-url": "https://vuetifyjs.com/api/v-card-subtitle#slots"
  }
}
    },
    argTypes: {
  "opacity": {
    "name": "opacity",
    "description": "Sets the component's opacity value",
    "doc-url": "https://vuetifyjs.com/api/VCardSubtitle#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "tag": {
    "name": "tag",
    "description": "Specify a custom tag used on the root element.",
    "doc-url": "https://vuetifyjs.com/api/VCardSubtitle#props",
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
  