import { VTextField } from 'vuetify/components';
  
  export default {
    title: 'uikit/2_atoms/VTextField',
    component: VTextField,
    tags: ['autodocs'], 
    parameters: {
      docs: {
        description: {
          component: '[https://vuetifyjs.com/api/v-text-field](https://vuetifyjs.com/api/v-text-field)'
        }
      },
      slots: {
  "prepend": {
    "name": "prepend",
    "description": "Adds an item outside the input and before input content.",
    "doc-url": "https://vuetifyjs.com/api/v-text-field#slots",
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
    "doc-url": "https://vuetifyjs.com/api/v-text-field#slots",
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
    "doc-url": "https://vuetifyjs.com/api/v-text-field#slots",
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
    "doc-url": "https://vuetifyjs.com/api/v-text-field#slots",
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
    "doc-url": "https://vuetifyjs.com/api/v-text-field#slots"
  },
  "prepend-inner": {
    "name": "prepend-inner",
    "description": "Slot that is prepended to the input.",
    "doc-url": "https://vuetifyjs.com/api/v-text-field#slots",
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
    "doc-url": "https://vuetifyjs.com/api/v-text-field#slots",
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
    "doc-url": "https://vuetifyjs.com/api/v-text-field#slots"
  },
  "loader": {
    "name": "loader",
    "description": "Slot for custom loader (displayed when [loading](#props-loading) prop is equal to true).",
    "doc-url": "https://vuetifyjs.com/api/v-text-field#slots",
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
  "default": {
    "name": "default",
    "description": "The default Vue slot.",
    "doc-url": "https://vuetifyjs.com/api/v-text-field#slots"
  },
  "counter": {
    "name": "counter",
    "description": "Slot for the input’s counter text.",
    "doc-url": "https://vuetifyjs.com/api/v-text-field#slots",
    "vue-properties": [
      {
        "name": "counter",
        "type": "string"
      },
      {
        "name": "max",
        "type": "string | number"
      },
      {
        "name": "value",
        "type": "string | number"
      }
    ]
  }
}
    },
    argTypes: {
  "v-model": {
    "control": {}
  },
  "onClick:prepend": {
    "name": "click:prepend",
    "description": "Emitted when prepended icon is clicked.",
    "doc-url": "https://vuetifyjs.com/api/v-text-field#events",
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
    "doc-url": "https://vuetifyjs.com/api/v-text-field#events",
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
    "doc-url": "https://vuetifyjs.com/api/v-text-field#events",
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
    "doc-url": "https://vuetifyjs.com/api/v-text-field#events",
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
    "doc-url": "https://vuetifyjs.com/api/v-text-field#events",
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
    "doc-url": "https://vuetifyjs.com/api/v-text-field#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[MouseEvent]\n"
      }
    ],
    "action": "@click:prependInner"
  },
  "onClick:control": {
    "name": "click:control",
    "description": "Emitted when the main input is clicked.",
    "doc-url": "https://vuetifyjs.com/api/v-text-field#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[MouseEvent]\n"
      }
    ],
    "action": "@click:control"
  },
  "onMousedown:control": {
    "name": "mousedown:control",
    "description": "Event that is emitted when using mousedown on the main control area.",
    "doc-url": "https://vuetifyjs.com/api/v-text-field#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[MouseEvent]\n"
      }
    ],
    "action": "@mousedown:control"
  },
  "onUpdate:modelValue": {
    "name": "update:modelValue",
    "description": "Event that is emitted when the component's model changes.",
    "doc-url": "https://vuetifyjs.com/api/v-text-field#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[string]\n"
      }
    ],
    "action": "@update:modelValue"
  },
  "label": {
    "name": "label",
    "description": "Sets the text of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "counter": {
    "name": "counter",
    "description": "Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "string | number | boolean"
    },
    "control": "number"
  },
  "flat": {
    "name": "flat",
    "description": "Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "autofocus": {
    "name": "autofocus",
    "description": "Enables autofocus.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "prefix": {
    "name": "prefix",
    "description": "Displays prefix text.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "default": "'text'",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "id": {
    "name": "id",
    "description": "Sets the DOM id on the component.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "prependIcon": {
    "name": "prependIcon",
    "description": "Prepends an icon to the outnside the component's input, uses the same syntax as `v-icon`.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
  "reverse": {
    "name": "reverse",
    "description": "Reverses the input orientation.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "minWidth": {
    "name": "minWidth",
    "description": "Sets the minimum width for the component.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "width": {
    "name": "width",
    "description": "Sets the width for the component.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "theme": {
    "name": "theme",
    "description": "Specify a theme for this component and all of its children.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "error": {
    "name": "error",
    "description": "Puts the input in a manual error state.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "default": "1",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "name": {
    "name": "name",
    "description": "Sets the component's name attribute.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "readonly": {
    "name": "readonly",
    "description": "Puts input in readonly state.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "default": "[]",
    "value": {
      "kind": "expression",
      "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/validation.ts#L16-L20\" target=\"_blank\">ValidationRule</a>[]"
    },
    "control": {
      "type": "text"
    }
  },
  "modelValue": {
    "name": "modelValue",
    "description": "The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "value": {
      "kind": "expression",
      "type": "any"
    },
    "control": {
      "type": "text"
    }
  },
  "validateOn": {
    "name": "validateOn",
    "description": "Change what type of event triggers validation to run.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "value": {
      "kind": "expression",
      "type": "| 'blur'\n  | 'input'\n  | 'submit'\n  | 'blur lazy'\n  | 'input lazy'\n  | 'submit lazy'\n  | 'lazy blur'\n  | 'lazy input'\n  | 'lazy submit'\n  | 'lazy'"
    },
    "control": "select",
    "options": [
      null,
      "blur\n",
      "input\n",
      "submit\n",
      "blurlazy\n",
      "inputlazy\n",
      "submitlazy\n",
      "lazyblur\n",
      "lazyinput\n",
      "lazysubmit\n",
      "lazy"
    ]
  },
  "validationValue": {
    "name": "validationValue",
    "description": "The value used when applying validation rules.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "value": {
      "kind": "expression",
      "type": "any"
    },
    "control": {
      "type": "text"
    }
  },
  "focused": {
    "name": "focused",
    "description": "Forces a focused state styling on the component.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
  "appendInnerIcon": {
    "name": "appendInnerIcon",
    "description": "Creates a [v-icon](/api/v-icon/) component in the **append-inner** slot.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "value": {
      "kind": "expression",
      "type": "any"
    },
    "control": {
      "type": "text"
    }
  },
  "bgColor": {
    "name": "bgColor",
    "description": "Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "clearable": {
    "name": "clearable",
    "description": "Allows for the component to be cleared.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "clearIcon": {
    "name": "clearIcon",
    "description": "Applied when using **clearable** and the input is dirty.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "color": {
    "name": "color",
    "description": "Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "baseColor": {
    "name": "baseColor",
    "description": "Sets the color of the input when it is not focused.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "dirty": {
    "name": "dirty",
    "description": "Manually apply the dirty state styling.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "prependInnerIcon": {
    "name": "prependInnerIcon",
    "description": "Prepends an icon inside the component's input, uses the same syntax as `v-icon`.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "variant": {
    "name": "variant",
    "description": "Applies a distinct style to the component.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "default": "'filled'",
    "value": {
      "kind": "expression",
      "type": "| 'underlined'\n  | 'outlined'\n  | 'filled'\n  | 'solo'\n  | 'solo-inverted'\n  | 'solo-filled'\n  | 'plain'"
    },
    "control": "select",
    "options": [
      null,
      "underlined\n",
      "outlined\n",
      "filled\n",
      "solo\n",
      "solo-inverted\n",
      "solo-filled\n",
      "plain"
    ]
  },
  "loading": {
    "name": "loading",
    "description": "Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
  "rounded": {
    "name": "rounded",
    "description": "Adds a border radius to the input.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "value": {
      "kind": "expression",
      "type": "string | number | boolean"
    },
    "control": "number"
  },
  "tile": {
    "name": "tile",
    "description": "Removes any applied **border-radius** from the component.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "counterValue": {
    "name": "counterValue",
    "description": "Function returns the counter display text.",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
    "value": {
      "kind": "expression",
      "type": "number | ((value: any) => number)"
    },
    "control": "number"
  },
  "modelModifiers": {
    "name": "modelModifiers",
    "description": "**FOR INTERNAL USE ONLY**",
    "doc-url": "https://vuetifyjs.com/api/VTextField#props",
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
  
  export const Default = {
    argTypes: {
      title:{
        control: 'text',
        description: 'название поля на английском без пробела',
      }
    },
    args: {
      title: "Field"
    },
    render: (args) => {
      const component = {};
      const title = args.title.charAt(0).toUpperCase() + args.title.slice(1);
      component.data = new Function(`return { "field${title}": ""}`);
      component.template = `<VTextField v-model="field${title}" label="${title}"></VTextField>`
      return component;
    },
  };

  export const VariantOutlined = {
    render: (args) => ({
      template: `<VTextField
      hint="www.example.com/page"
      label="Your landing page"
      variant="outlined"
      persistent-hint
    ></VTextField>`
    }),
  };
  

  export const SearchTemplates = {
    render: (args) => ({
      data: () => ({
        loading: false,
      }),
      methods: {
        onClick() {
          this.loading = true
  
          setTimeout(() => {
            this.loading = false
          }, 2000)
        },
      },
      template: `<VTextField
      :loading="loading"
      append-inner-icon="mdi-magnify"
      density="compact"
      label="Search templates"
      variant="solo"
      hide-details
      single-line
      @click:append-inner="onClick"
    ></VTextField>`
    }),
  };
  