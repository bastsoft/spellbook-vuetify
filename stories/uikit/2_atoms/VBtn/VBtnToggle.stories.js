import { VBtnToggle } from 'vuetify/components';
  
  export default {
    title: 'uikit/2_atoms/Btn/VBtnToggle',
    component: VBtnToggle,
    tags: ['autodocs'], 
    parameters: {
      docs: {
        description: {
          component: '[https://vuetifyjs.com/api/v-btn-toggle](https://vuetifyjs.com/api/v-btn-toggle)'
        }
      },
      slots: {
  "default": {
    "name": "default",
    "description": "The default Vue slot.",
    "doc-url": "https://vuetifyjs.com/api/v-btn-toggle#slots",
    "vue-properties": [
      {
        "name": "isSelected",
        "type": "(id: number) => boolean"
      },
      {
        "name": "select",
        "type": "(id: number, value: boolean) => void"
      },
      {
        "name": "selected",
        "type": "Ref<readonly number[]>"
      },
      {
        "name": "next",
        "type": "() => void"
      },
      {
        "name": "prev",
        "type": "() => void"
      }
    ]
  }
}
    },
    argTypes: {
  "v-model": {
    "control": {}
  },
  "onUpdate:modelValue": {
    "name": "update:modelValue",
    "description": "Event that is emitted when the component's model changes.",
    "doc-url": "https://vuetifyjs.com/api/v-btn-toggle#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[unknown]\n"
      }
    ],
    "action": "@update:modelValue"
  },
  "baseColor": {
    "name": "baseColor",
    "description": "Sets the color of component when not focused.",
    "doc-url": "https://vuetifyjs.com/api/VBtnToggle#props",
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
    "doc-url": "https://vuetifyjs.com/api/VBtnToggle#props",
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
    "doc-url": "https://vuetifyjs.com/api/VBtnToggle#props",
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
    "doc-url": "https://vuetifyjs.com/api/VBtnToggle#props",
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
    "doc-url": "https://vuetifyjs.com/api/VBtnToggle#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "rounded": {
    "name": "rounded",
    "description": "Round edge buttons.",
    "doc-url": "https://vuetifyjs.com/api/VBtnToggle#props",
    "value": {
      "kind": "expression",
      "type": "string | number | boolean"
    },
    "control": "number"
  },
  "tile": {
    "name": "tile",
    "description": "Removes the component's border-radius.",
    "doc-url": "https://vuetifyjs.com/api/VBtnToggle#props",
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
    "doc-url": "https://vuetifyjs.com/api/VBtnToggle#props",
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
    "doc-url": "https://vuetifyjs.com/api/VBtnToggle#props",
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
    "doc-url": "https://vuetifyjs.com/api/VBtnToggle#props",
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
    "doc-url": "https://vuetifyjs.com/api/VBtnToggle#props",
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
  },
  "modelValue": {
    "name": "modelValue",
    "description": "The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.",
    "doc-url": "https://vuetifyjs.com/api/VBtnToggle#props",
    "value": {
      "kind": "expression",
      "type": "unknown"
    },
    "control": {
      "type": "text"
    }
  },
  "multiple": {
    "name": "multiple",
    "description": "Allows one to select multiple items.",
    "doc-url": "https://vuetifyjs.com/api/VBtnToggle#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "max": {
    "name": "max",
    "description": "Sets a maximum number of selections that can be made.",
    "doc-url": "https://vuetifyjs.com/api/VBtnToggle#props",
    "value": {
      "kind": "expression",
      "type": "number"
    },
    "control": "number"
  },
  "selectedClass": {
    "name": "selectedClass",
    "description": "Configure the active CSS class applied when an item is selected.",
    "doc-url": "https://vuetifyjs.com/api/VBtnToggle#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "disabled": {
    "name": "disabled",
    "description": "Puts all children components into a disabled state.",
    "doc-url": "https://vuetifyjs.com/api/VBtnToggle#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "mandatory": {
    "name": "mandatory",
    "description": "Forces at least one item to always be selected (if available).",
    "doc-url": "https://vuetifyjs.com/api/VBtnToggle#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean | 'force'"
    },
    "control": "select",
    "options": [
      null,
      "force"
    ]
  }
},
  }
  
  export const Default = {
    args: {
    },
  };
  