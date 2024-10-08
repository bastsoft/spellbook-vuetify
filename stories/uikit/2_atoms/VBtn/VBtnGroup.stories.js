import { VBtnGroup } from 'vuetify/components';
  
  export default {
    title: 'uikit/2_atoms/Btn/VBtnGroup',
    component: VBtnGroup,
    tags: ['autodocs'], 
    parameters: {
      docs: {
        description: {
          component: '[https://vuetifyjs.com/api/v-btn-group](https://vuetifyjs.com/api/v-btn-group)'
        }
      },
      slots: {
  "default": {
    "name": "default",
    "description": "The default Vue slot.",
    "doc-url": "https://vuetifyjs.com/api/v-btn-group#slots"
  }
}
    },
    argTypes: {
  "baseColor": {
    "name": "baseColor",
    "description": "Sets the color of component when not focused.",
    "doc-url": "https://vuetifyjs.com/api/VBtnGroup#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "divided": {
    "name": "divided",
    "description": "Add dividers between children [v-btn](/components/buttons) components.",
    "doc-url": "https://vuetifyjs.com/api/VBtnGroup#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "border": {
    "name": "border",
    "description": "Designates the **border-radius** applied to the component. This can be **xs**, **sm**, **md**, **lg**, **xl**.",
    "doc-url": "https://vuetifyjs.com/api/VBtnGroup#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "string | number | boolean"
    },
    "control": "number"
  },
  "density": {
    "name": "density",
    "description": "Adjusts the vertical height used by the component.",
    "doc-url": "https://vuetifyjs.com/api/VBtnGroup#props",
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
  },
  "elevation": {
    "name": "elevation",
    "description": "Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).",
    "doc-url": "https://vuetifyjs.com/api/VBtnGroup#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "rounded": {
    "name": "rounded",
    "description": "Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).",
    "doc-url": "https://vuetifyjs.com/api/VBtnGroup#props",
    "value": {
      "kind": "expression",
      "type": "string | number | boolean"
    },
    "control": "number"
  },
  "tile": {
    "name": "tile",
    "description": "Removes any applied **border-radius** from the component.",
    "doc-url": "https://vuetifyjs.com/api/VBtnGroup#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "tag": {
    "name": "tag",
    "description": "Specify a custom tag used on the root element.",
    "doc-url": "https://vuetifyjs.com/api/VBtnGroup#props",
    "default": "'div'",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "theme": {
    "name": "theme",
    "description": "Specify a theme for this component and all of its children.",
    "doc-url": "https://vuetifyjs.com/api/VBtnGroup#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "color": {
    "name": "color",
    "description": "Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).",
    "doc-url": "https://vuetifyjs.com/api/VBtnGroup#props",
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
    "doc-url": "https://vuetifyjs.com/api/VBtnGroup#props",
    "default": "'elevated'",
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
  