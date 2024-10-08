import { VSelect } from 'vuetify/components';
  
  export default {
    title: 'uikit/2_atoms/VSelect',
    component: VSelect,
    tags: ['autodocs'], 
    parameters: {
      docs: {
        description: {
          component: '[https://vuetifyjs.com/api/v-select](https://vuetifyjs.com/api/v-select)'
        }
      },
      slots: {
  "prepend": {
    "name": "prepend",
    "description": "Adds an item outside the input and before input content.",
    "doc-url": "https://vuetifyjs.com/api/v-select#slots",
    "vue-properties": [
      {
        "name": "id",
        "type": "ComputedRef<string>"
      },
      {
        "name": "messagesId",
        "type": "ComputedRef<string>"
      },
      {
        "name": "isDirty",
        "type": "ComputedRef<boolean>"
      },
      {
        "name": "isDisabled",
        "type": "ComputedRef<boolean>"
      },
      {
        "name": "isReadonly",
        "type": "ComputedRef<boolean>"
      },
      {
        "name": "isPristine",
        "type": "Ref<boolean>"
      },
      {
        "name": "isValid",
        "type": "ComputedRef<boolean | null>"
      },
      {
        "name": "isValidating",
        "type": "Ref<boolean>"
      },
      {
        "name": "reset",
        "type": "() => void"
      },
      {
        "name": "resetValidation",
        "type": "() => void"
      },
      {
        "name": "validate",
        "type": "() => void"
      }
    ]
  },
  "append": {
    "name": "append",
    "description": "Adds an item inside the input and after input content.",
    "doc-url": "https://vuetifyjs.com/api/v-select#slots",
    "vue-properties": [
      {
        "name": "id",
        "type": "ComputedRef<string>"
      },
      {
        "name": "messagesId",
        "type": "ComputedRef<string>"
      },
      {
        "name": "isDirty",
        "type": "ComputedRef<boolean>"
      },
      {
        "name": "isDisabled",
        "type": "ComputedRef<boolean>"
      },
      {
        "name": "isReadonly",
        "type": "ComputedRef<boolean>"
      },
      {
        "name": "isPristine",
        "type": "Ref<boolean>"
      },
      {
        "name": "isValid",
        "type": "ComputedRef<boolean | null>"
      },
      {
        "name": "isValidating",
        "type": "Ref<boolean>"
      },
      {
        "name": "reset",
        "type": "() => void"
      },
      {
        "name": "resetValidation",
        "type": "() => void"
      },
      {
        "name": "validate",
        "type": "() => void"
      }
    ]
  },
  "details": {
    "name": "details",
    "description": "Slot for custom input details to modifying the display of [messages](#props-messages).",
    "doc-url": "https://vuetifyjs.com/api/v-select#slots",
    "vue-properties": [
      {
        "name": "id",
        "type": "ComputedRef<string>"
      },
      {
        "name": "messagesId",
        "type": "ComputedRef<string>"
      },
      {
        "name": "isDirty",
        "type": "ComputedRef<boolean>"
      },
      {
        "name": "isDisabled",
        "type": "ComputedRef<boolean>"
      },
      {
        "name": "isReadonly",
        "type": "ComputedRef<boolean>"
      },
      {
        "name": "isPristine",
        "type": "Ref<boolean>"
      },
      {
        "name": "isValid",
        "type": "ComputedRef<boolean | null>"
      },
      {
        "name": "isValidating",
        "type": "Ref<boolean>"
      },
      {
        "name": "reset",
        "type": "() => void"
      },
      {
        "name": "resetValidation",
        "type": "() => void"
      },
      {
        "name": "validate",
        "type": "() => void"
      }
    ]
  },
  "message": {
    "name": "message",
    "description": "Slot used to customize the message content.",
    "doc-url": "https://vuetifyjs.com/api/v-select#slots",
    "vue-properties": [
      {
        "name": "message",
        "type": "string"
      }
    ]
  },
  "clear": {
    "name": "clear",
    "description": "Slot for custom clear icon (displayed when the **clearable** prop is equal to true).",
    "doc-url": "https://vuetifyjs.com/api/v-select#slots"
  },
  "prepend-inner": {
    "name": "prepend-inner",
    "description": "Slot that is prepended to the input.",
    "doc-url": "https://vuetifyjs.com/api/v-select#slots",
    "vue-properties": [
      {
        "name": "isActive",
        "type": "Ref<boolean>"
      },
      {
        "name": "isFocused",
        "type": "Ref<boolean>"
      },
      {
        "name": "controlRef",
        "type": "Ref<HTMLElement | undefined>"
      },
      {
        "name": "focus",
        "type": "() => void"
      },
      {
        "name": "blur",
        "type": "() => void"
      }
    ]
  },
  "append-inner": {
    "name": "append-inner",
    "description": "Adds an item inside the input content.",
    "doc-url": "https://vuetifyjs.com/api/v-select#slots",
    "vue-properties": [
      {
        "name": "isActive",
        "type": "Ref<boolean>"
      },
      {
        "name": "isFocused",
        "type": "Ref<boolean>"
      },
      {
        "name": "controlRef",
        "type": "Ref<HTMLElement | undefined>"
      },
      {
        "name": "focus",
        "type": "() => void"
      },
      {
        "name": "blur",
        "type": "() => void"
      }
    ]
  },
  "label": {
    "name": "label",
    "description": "The default slot of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component.",
    "doc-url": "https://vuetifyjs.com/api/v-select#slots"
  },
  "loader": {
    "name": "loader",
    "description": "Slot for custom loader (displayed when [loading](#props-loading) prop is equal to true).",
    "doc-url": "https://vuetifyjs.com/api/v-select#slots",
    "vue-properties": [
      {
        "name": "color",
        "type": "string"
      },
      {
        "name": "isActive",
        "type": "boolean"
      }
    ]
  },
  "item": {
    "name": "item",
    "description": "Define a custom item appearance. The root element of this slot must be a **v-list-item** with `v-bind=\"props\"` applied. `props` includes everything required for the default select list behaviour - including title, value, click handlers, virtual scrolling, and anything else that has been added with [`item-props`](api/v-select/#props-item-props).",
    "doc-url": "https://vuetifyjs.com/api/v-select#slots",
    "vue-properties": [
      {
        "name": "item",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/list-items.ts#L10-L18\" target=\"_blank\">ListItem</a>"
      },
      {
        "name": "index",
        "type": "number"
      },
      {
        "name": "props",
        "type": "Record<string, unknown>"
      }
    ]
  },
  "chip": {
    "name": "chip",
    "description": "Slot for custom chip when using the [chip](#property-chip) prop.",
    "doc-url": "https://vuetifyjs.com/api/v-select#slots",
    "vue-properties": [
      {
        "name": "item",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/list-items.ts#L10-L18\" target=\"_blank\">ListItem</a>"
      },
      {
        "name": "index",
        "type": "number"
      },
      {
        "name": "props",
        "type": "Record<string, unknown>"
      }
    ]
  },
  "selection": {
    "name": "selection",
    "description": "Define a custom selection appearance.",
    "doc-url": "https://vuetifyjs.com/api/v-select#slots",
    "vue-properties": [
      {
        "name": "item",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/list-items.ts#L10-L18\" target=\"_blank\">ListItem</a>"
      },
      {
        "name": "index",
        "type": "number"
      }
    ]
  },
  "prepend-item": {
    "name": "prepend-item",
    "description": "Adds an item before menu content.",
    "doc-url": "https://vuetifyjs.com/api/v-select#slots"
  },
  "append-item": {
    "name": "append-item",
    "description": "Adds an item after menu content.",
    "doc-url": "https://vuetifyjs.com/api/v-select#slots"
  },
  "no-data": {
    "name": "no-data",
    "description": "Defines content for when no items are provided.",
    "doc-url": "https://vuetifyjs.com/api/v-select#slots"
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
    "doc-url": "https://vuetifyjs.com/api/v-select#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[any]\n"
      }
    ],
    "action": "@update:modelValue"
  },
  "onClick:prepend": {
    "name": "click:prepend",
    "description": "Emitted when prepended icon is clicked.",
    "doc-url": "https://vuetifyjs.com/api/v-select#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[MouseEvent]\n"
      }
    ],
    "action": "@click:prepend"
  },
  "onClick:append": {
    "name": "click:append",
    "description": "Emitted when append icon is clicked.",
    "doc-url": "https://vuetifyjs.com/api/v-select#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[MouseEvent]\n"
      }
    ],
    "action": "@click:append"
  },
  "onUpdate:focused": {
    "name": "update:focused",
    "description": "Emitted when the input is focused or blurred",
    "doc-url": "https://vuetifyjs.com/api/v-select#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[boolean]\n"
      }
    ],
    "action": "@update:focused"
  },
  "onClick:clear": {
    "name": "click:clear",
    "description": "Emitted when clearable icon clicked.",
    "doc-url": "https://vuetifyjs.com/api/v-select#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[MouseEvent]\n"
      }
    ],
    "action": "@click:clear"
  },
  "onClick:appendInner": {
    "name": "click:appendInner",
    "description": "Emitted when appended inner icon is clicked.",
    "doc-url": "https://vuetifyjs.com/api/v-select#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[MouseEvent]\n"
      }
    ],
    "action": "@click:appendInner"
  },
  "onClick:prependInner": {
    "name": "click:prependInner",
    "description": "Emitted when prepended inner icon is clicked.",
    "doc-url": "https://vuetifyjs.com/api/v-select#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[MouseEvent]\n"
      }
    ],
    "action": "@click:prependInner"
  },
  "onUpdate:menu": {
    "name": "update:menu",
    "description": "Event that is emitted when the component's menu state changes.",
    "doc-url": "https://vuetifyjs.com/api/v-select#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[boolean]\n"
      }
    ],
    "action": "@update:menu"
  },
  "label": {
    "name": "label",
    "description": "Sets the text of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "chips": {
    "name": "chips",
    "description": "Changes display of selections to chips.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "closableChips": {
    "name": "closableChips",
    "description": "Enables the [closable](/api/v-chip/#props-closable) prop on all [v-chip](/components/chips/) components.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "closeText": {
    "name": "closeText",
    "description": "Text set to to the inputs `aria-label` and `title` when input menu is closed.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "'$vuetify.close'",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "type": {
    "name": "type",
    "description": "Sets input type.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "'text'",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "openText": {
    "name": "openText",
    "description": "Text set to to the inputs **aria-label** and **title** when input menu is open.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "'$vuetify.open'",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "eager": {
    "name": "eager",
    "description": "Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "hideNoData": {
    "name": "hideNoData",
    "description": "Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "hideSelected": {
    "name": "hideSelected",
    "description": "Do not display in the select menu items that are already selected.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "listProps": {
    "name": "listProps",
    "description": "Pass props through to the `v-list` component. Accepts an object with anything from [v-list](/api/v-list/#props) props, camelCase keys are recommended.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "unknown"
    },
    "control": {
      "type": "text"
    }
  },
  "baseColor": {
    "name": "baseColor",
    "description": "Sets the color of the input when it is not focused.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "bgColor": {
    "name": "bgColor",
    "description": "Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
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
    "description": "Removes the ability to click or target the input.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "multiple": {
    "name": "multiple",
    "description": "Changes select to multiple. Accepts array for value.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "reverse": {
    "name": "reverse",
    "description": "Reverses the orientation.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "flat": {
    "name": "flat",
    "description": "Removes box shadow when using a variant with elevation.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "density": {
    "name": "density",
    "description": "Adjusts the vertical height used by the component.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
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
  "maxWidth": {
    "name": "maxWidth",
    "description": "Sets the maximum width for the component.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "minWidth": {
    "name": "minWidth",
    "description": "Sets the minimum width of the select's `v-menu` content.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "width": {
    "name": "width",
    "description": "Sets the width for the component.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "items": {
    "name": "items",
    "description": "Can be an array of objects or strings. By default objects should have **title** and **value** properties, and can optionally have a **props** property containing any [VListItem props](/api/v-list-item/#props). Keys to use for these can be changed with the **item-title**, **item-value**, and **item-props** props.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "[]",
    "value": {
      "kind": "expression",
      "type": "any[]"
    },
    "control": {
      "type": "text"
    }
  },
  "itemTitle": {
    "name": "itemTitle",
    "description": "Property on supplied `items` that contains its title.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "'title'",
    "value": {
      "kind": "expression",
      "type": "SelectItemKey<any>"
    },
    "control": {
      "type": "text"
    }
  },
  "itemValue": {
    "name": "itemValue",
    "description": "Set property of **items**'s value - **must be primitive**. Dot notation is supported. **Note:** This is currently not supported with `v-combobox` [GitHub Issue](https://github.com/vuetifyjs/vuetify/issues/5479).",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "'value'",
    "value": {
      "kind": "expression",
      "type": "SelectItemKey<any>"
    },
    "control": {
      "type": "text"
    }
  },
  "itemChildren": {
    "name": "itemChildren",
    "description": "This property currently has **no effect**.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/helpers.ts#L73-L77\" target=\"_blank\">SelectItemKey</a>"
    },
    "control": {
      "type": "text"
    }
  },
  "itemProps": {
    "name": "itemProps",
    "description": "Props object that will be applied to each item component. `true` will treat the original object as raw props and pass it directly to the component.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "'props'",
    "value": {
      "kind": "expression",
      "type": "SelectItemKey<any>"
    },
    "control": {
      "type": "text"
    }
  },
  "returnObject": {
    "name": "returnObject",
    "description": "Changes the selection behavior to return the object directly rather than the value specified with **item-value**.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "valueComparator": {
    "name": "valueComparator",
    "description": "Apply a custom comparison algorithm to compare **model-value** and values contains in the **items** prop.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "(a: any, b: any) => boolean"
    },
    "control": "boolean"
  },
  "rounded": {
    "name": "rounded",
    "description": "Adds a border radius to the input.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "string | number | boolean"
    },
    "control": "number"
  },
  "tile": {
    "name": "tile",
    "description": "Removes any applied **border-radius** from the component.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "theme": {
    "name": "theme",
    "description": "Specify a theme for this component and all of its children.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
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
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
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
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "'filled'",
    "value": {
      "kind": "expression",
      "type": "| 'outlined'\n  | 'plain'\n  | 'underlined'\n  | 'filled'\n  | 'solo'\n  | 'solo-inverted'\n  | 'solo-filled'"
    },
    "control": "select",
    "options": [
      null,
      "outlined\n",
      "plain\n",
      "underlined\n",
      "filled\n",
      "solo\n",
      "solo-inverted\n",
      "solo-filled"
    ]
  },
  "name": {
    "name": "name",
    "description": "Sets the component's name attribute.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "menu": {
    "name": "menu",
    "description": "Renders with the menu open by default.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "menuIcon": {
    "name": "menuIcon",
    "description": "Sets the the spin icon.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "'$dropdown'",
    "value": {
      "kind": "expression",
      "type": "any"
    },
    "control": {
      "type": "text"
    }
  },
  "menuProps": {
    "name": "menuProps",
    "description": "Pass props through to the `v-menu` component. Accepts an object with anything from [v-menu](/api/v-menu/#props) props, camelCase keys are recommended.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "unknown"
    },
    "control": {
      "type": "text"
    }
  },
  "id": {
    "name": "id",
    "description": "Sets the DOM id on the component.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "modelValue": {
    "name": "modelValue",
    "description": "The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "any"
    },
    "control": {
      "type": "text"
    }
  },
  "transition": {
    "name": "transition",
    "description": "Sets the component transition. Can be one of the [built in](/styles/transitions/) or custom transition.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "{component: {name: 'VDialogTransition'}}",
    "value": {
      "kind": "expression",
      "type": "| string\n  | boolean\n  | (TransitionProps & { component: Component })\n  | { component: Component }"
    },
    "control": "select",
    "options": [
      null,
      "string\n",
      "\n",
      "(TransitionProps&{component:Component})\n",
      "{component:Component}"
    ]
  },
  "noDataText": {
    "name": "noDataText",
    "description": "Text shown when no items are provided to the component.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "'$vuetify.noDataText'",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "openOnClear": {
    "name": "openOnClear",
    "description": "When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "itemColor": {
    "name": "itemColor",
    "description": "Sets color of selected items.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "autofocus": {
    "name": "autofocus",
    "description": "Enables autofocus.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "counter": {
    "name": "counter",
    "description": "Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "string | number | boolean"
    },
    "control": "number"
  },
  "prefix": {
    "name": "prefix",
    "description": "Displays prefix text.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "placeholder": {
    "name": "placeholder",
    "description": "Sets the input’s placeholder text.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "persistentPlaceholder": {
    "name": "persistentPlaceholder",
    "description": "Forces placeholder to always be visible.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "persistentCounter": {
    "name": "persistentCounter",
    "description": "Forces counter to always be visible.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "suffix": {
    "name": "suffix",
    "description": "Displays suffix text.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "role": {
    "name": "role",
    "description": "The role attribute applied to the input.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "'combobox'",
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
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "any"
    },
    "control": {
      "type": "text"
    }
  },
  "centerAffix": {
    "name": "centerAffix",
    "description": "Vertically align **appendInner**, **prependInner**, **clearIcon** and **label** in the center.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "prependIcon": {
    "name": "prependIcon",
    "description": "Prepends an icon to the outnside the component's input, uses the same syntax as `v-icon`.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "any"
    },
    "control": {
      "type": "text"
    }
  },
  "hideSpinButtons": {
    "name": "hideSpinButtons",
    "description": "Hides spin buttons on the input when type is set to `number`.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "hint": {
    "name": "hint",
    "description": "Displays hint text below the input when focused. Force this always open with the [persistent-hint](#props-persistent-hint) property.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "persistentHint": {
    "name": "persistentHint",
    "description": "Forces [hint](#props-hint) to always be visible.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "messages": {
    "name": "messages",
    "description": "Displays a list of messages or a single message if using a string.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "[]",
    "value": {
      "kind": "expression",
      "type": "string | string[]"
    },
    "control": "select",
    "options": [
      null,
      "string",
      "string[]"
    ]
  },
  "direction": {
    "name": "direction",
    "description": "Changes the direction of the input.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "'horizontal'",
    "value": {
      "kind": "expression",
      "type": "'horizontal' | 'vertical'"
    },
    "control": "select",
    "options": [
      null,
      "horizontal",
      "vertical"
    ]
  },
  "error": {
    "name": "error",
    "description": "Puts the input in a manual error state.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "errorMessages": {
    "name": "errorMessages",
    "description": "Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "[]",
    "value": {
      "kind": "expression",
      "type": "string | string[]"
    },
    "control": "select",
    "options": [
      null,
      "string",
      "string[]"
    ]
  },
  "maxErrors": {
    "name": "maxErrors",
    "description": "Control the maximum number of shown errors from validation.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "1",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "readonly": {
    "name": "readonly",
    "description": "Puts input in readonly state.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "rules": {
    "name": "rules",
    "description": "Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "[]",
    "value": {
      "kind": "expression",
      "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/validation.ts#L16-L20\" target=\"_blank\">ValidationRule</a>[]"
    },
    "control": {
      "type": "text"
    }
  },
  "validateOn": {
    "name": "validateOn",
    "description": "Change what type of event triggers validation to run.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "| 'lazy'\n  | 'blur'\n  | 'input'\n  | 'submit'\n  | 'blur lazy'\n  | 'input lazy'\n  | 'submit lazy'\n  | 'lazy blur'\n  | 'lazy input'\n  | 'lazy submit'"
    },
    "control": "select",
    "options": [
      null,
      "lazy\n",
      "blur\n",
      "input\n",
      "submit\n",
      "blurlazy\n",
      "inputlazy\n",
      "submitlazy\n",
      "lazyblur\n",
      "lazyinput\n",
      "lazysubmit"
    ]
  },
  "focused": {
    "name": "focused",
    "description": "Forces a focused state styling on the component.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "hideDetails": {
    "name": "hideDetails",
    "description": "Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean | 'auto'"
    },
    "control": "select",
    "options": [
      null,
      "auto"
    ]
  },
  "clearable": {
    "name": "clearable",
    "description": "Allows for the component to be cleared.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "clearIcon": {
    "name": "clearIcon",
    "description": "The icon used when the **clearable** prop is set to true.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "'$clear'",
    "value": {
      "kind": "expression",
      "type": "any"
    },
    "control": {
      "type": "text"
    }
  },
  "active": {
    "name": "active",
    "description": "Controls the **active** state of the item. This is typically used to highlight the component.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "persistentClear": {
    "name": "persistentClear",
    "description": "Always show the clearable icon when the input is dirty (By default it only shows on hover).",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "prependInnerIcon": {
    "name": "prependInnerIcon",
    "description": "Creates a [v-icon](/api/v-icon/) component in the **prepend-inner** slot.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "any"
    },
    "control": {
      "type": "text"
    }
  },
  "singleLine": {
    "name": "singleLine",
    "description": "Label does not move on focus/dirty.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "loading": {
    "name": "loading",
    "description": "Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "string | boolean"
    },
    "control": "select",
    "options": [
      null,
      "string"
    ]
  },
  "counterValue": {
    "name": "counterValue",
    "description": "Function returns the counter display text.",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "number | ((value: any) => number)"
    },
    "control": "number"
  },
  "modelModifiers": {
    "name": "modelModifiers",
    "description": "**FOR INTERNAL USE ONLY**",
    "doc-url": "https://vuetifyjs.com/api/VSelect#props",
    "value": {
      "kind": "expression",
      "type": "unknown"
    },
    "control": {
      "type": "text"
    }
  }
},
  }
  
  export const SimpleItems = {
    render: () => ({
      template: `<VSelect
            label="Select"
      :items="['California', 'Colorado', 'Florida']"
    ></VSelect>
    `
    })
  };



    export const ObjectsItem = {
    render: () => ({

    data: () => ({
      val: null,
      items: [
        {
          name: 'John',
          department: 'Marketing',
        },
        {
          name: 'Jane',
          department: 'Engineering',
        }
      ],
    }),
      template: `<VSelect
      v-model="val"
      :item-props="(i)=>({ title: i.name, subtitle: i.department})" 
      :items="items" 
      label="User"
    ></VSelect>
    val: {{(val || {}).department}}
    `
    })
  };