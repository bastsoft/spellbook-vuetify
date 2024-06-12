import { VCardTitle } from 'vuetify/components';
  
  export default {
    title: 'uikit/4_organisms/VCard/components/VCardTitle',
    component: VCardTitle,
    tags: ['autodocs'], 
    parameters: {
      docs: {
        description: {
          component: '[https://vuetifyjs.com/api/v-card-title](https://vuetifyjs.com/api/v-card-title)'
        }
      },
      slots: {
  "default": {
    "name": "default",
    "description": "The default Vue slot.",
    "doc-url": "https://vuetifyjs.com/api/v-card-title#slots"
  }
}
    },
    argTypes: {
  "tag": {
    "name": "tag",
    "description": "Specify a custom tag used on the root element.",
    "doc-url": "https://vuetifyjs.com/api/VCardTitle#props",
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
  