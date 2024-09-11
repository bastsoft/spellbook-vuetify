import { VToolbarTitle } from 'vuetify/components';
  
  export default {
    title: 'uikit/4_organisms/VToolbar/VToolbarTitle',
    component: VToolbarTitle,
    tags: ['autodocs'], 
    parameters: {
      docs: {
        description: {
          component: '[https://vuetifyjs.com/api/v-toolbar-title](https://vuetifyjs.com/api/v-toolbar-title)'
        }
      },
      slots: {
  "default": {
    "name": "default",
    "description": "The default Vue slot.",
    "doc-url": "https://vuetifyjs.com/api/v-toolbar-title#slots"
  },
  "text": {
    "name": "text",
    "description": "Slot for the component's text content.",
    "doc-url": "https://vuetifyjs.com/api/v-toolbar-title#slots"
  }
}
    },
    argTypes: {
  "text": {
    "name": "text",
    "description": "Specify content text for the component.",
    "doc-url": "https://vuetifyjs.com/api/VToolbarTitle#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "tag": {
    "name": "tag",
    "description": "Specify a custom tag used on the root element.",
    "doc-url": "https://vuetifyjs.com/api/VToolbarTitle#props",
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
  