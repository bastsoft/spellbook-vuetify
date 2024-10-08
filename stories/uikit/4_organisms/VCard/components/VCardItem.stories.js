import { VCardItem } from 'vuetify/components';
  
  export default {
    title: 'uikit/4_organisms/VCard/components/VCardItem.stories.js',
    component: VCardItem,
    tags: ['autodocs'], 
    parameters: {
      docs: {
        description: {
          component: '[https://vuetifyjs.com/api/v-card-item](https://vuetifyjs.com/api/v-card-item)'
        }
      },
      slots: {
  "default": {
    "name": "default",
    "description": "The default Vue slot.",
    "doc-url": "https://vuetifyjs.com/api/v-card-item#slots"
  },
  "prepend": {
    "name": "prepend",
    "description": "Adds an item outside the input and before input content.",
    "doc-url": "https://vuetifyjs.com/api/v-card-item#slots"
  },
  "append": {
    "name": "append",
    "description": "Adds an item inside the input and after input content.",
    "doc-url": "https://vuetifyjs.com/api/v-card-item#slots"
  },
  "title": {
    "name": "title",
    "description": "Slot for the component's title content.",
    "doc-url": "https://vuetifyjs.com/api/v-card-item#slots"
  },
  "subtitle": {
    "name": "subtitle",
    "description": "Slot for the component's subtitle content.",
    "doc-url": "https://vuetifyjs.com/api/v-card-item#slots"
  }
}
    },
    argTypes: {
  "title": {
    "name": "title",
    "description": "Specify a title text for the component.",
    "doc-url": "https://vuetifyjs.com/api/VCardItem#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "subtitle": {
    "name": "subtitle",
    "description": "Specify a subtitle text for the component.",
    "doc-url": "https://vuetifyjs.com/api/VCardItem#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "appendAvatar": {
    "name": "appendAvatar",
    "description": "Appends a [v-avatar](/components/avatars/) component after default content in the **append** slot.",
    "doc-url": "https://vuetifyjs.com/api/VCardItem#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "appendIcon": {
    "name": "appendIcon",
    "description": "Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot.",
    "doc-url": "https://vuetifyjs.com/api/VCardItem#props",
    "value": {
      "kind": "expression",
      "type": "any"
    },
    "control": {
      "type": "text"
    }
  },
  "prependAvatar": {
    "name": "prependAvatar",
    "description": "Prepends a [v-avatar](/components/avatars/) component in the **prepend** slot before default content.",
    "doc-url": "https://vuetifyjs.com/api/VCardItem#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "prependIcon": {
    "name": "prependIcon",
    "description": "Creates a [v-icon](/api/v-icon/) component in the **prepend** slot before default content.",
    "doc-url": "https://vuetifyjs.com/api/VCardItem#props",
    "value": {
      "kind": "expression",
      "type": "any"
    },
    "control": {
      "type": "text"
    }
  },
  "density": {
    "name": "density",
    "description": "Adjusts the vertical height used by the component.",
    "doc-url": "https://vuetifyjs.com/api/VCardItem#props",
    "default": "'default'",
    "value": {
      "kind": "expression",
      "type": "'default' | 'comfortable' | 'compact'"
    },
    "control": "select",
    "options": [
      null,
      "default",
      "comfortable",
      "compact"
    ]
  }
},
  }
  
  export const Default = {
    args: {
    },
  };
  