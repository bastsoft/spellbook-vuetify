import { VToolbarItems } from 'vuetify/components';
  
  export default {
    title: 'generated-stories/VToolbarItems',
    component: VToolbarItems,
    tags: ['autodocs'], 
    parameters: {
      docs: {
        description: {
          component: '[https://vuetifyjs.com/api/v-toolbar-items](https://vuetifyjs.com/api/v-toolbar-items)'
        }
      },
      slots: {
  "default": {
    "name": "default",
    "description": "The default Vue slot.",
    "doc-url": "https://vuetifyjs.com/api/v-toolbar-items#slots"
  }
}
    },
    argTypes: {
  "color": {
    "name": "color",
    "description": "Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).",
    "doc-url": "https://vuetifyjs.com/api/VToolbarItems#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "variant": {
    "name": "variant",
    "description": "Applies a distinct style to the component.",
    "doc-url": "https://vuetifyjs.com/api/VToolbarItems#props",
    "default": "'text'",
    "value": {
      "kind": "expression",
      "type": "'flat' | 'elevated' | 'tonal' | 'outlined' | 'text' | 'plain'"
    },
    "control": "select",
    "options": [
      null,
      "flat",
      "elevated",
      "tonal",
      "outlined",
      "text",
      "plain"
    ]
  }
},
  }
  
  export const Default = {
    args: {
    },
  };
  