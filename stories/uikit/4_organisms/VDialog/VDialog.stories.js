import { render } from 'vue';
import { VDialog } from 'vuetify/components';
  
  export default {
    title: 'uikit/4_organisms/VDialog/VDialog',
    component: VDialog,
    tags: ['autodocs'], 
    parameters: {
      docs: {
        description: {
          component: '[https://vuetifyjs.com/api/v-dialog](https://vuetifyjs.com/api/v-dialog)'
        }
      },
      slots: {
  "default": {
    "name": "default",
    "description": "The default Vue slot.",
    "doc-url": "https://vuetifyjs.com/api/v-dialog#slots",
    "vue-properties": [
      {
        "name": "isActive",
        "type": "Ref<boolean>"
      }
    ]
  },
  "activator": {
    "name": "activator",
    "description": "When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation.",
    "doc-url": "https://vuetifyjs.com/api/v-dialog#slots",
    "vue-properties": [
      {
        "name": "isActive",
        "type": "boolean"
      },
      {
        "name": "props",
        "type": "Record<string, any>"
      },
      {
        "name": "targetRef",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/helpers.ts#L741-L745\" target=\"_blank\">TemplateRef</a>"
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
    "doc-url": "https://vuetifyjs.com/api/v-dialog#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[boolean]\n"
      }
    ],
    "action": "@update:modelValue"
  },
  "onAfterLeave": {
    "name": "afterLeave",
    "description": "Event that fires after the overlay has finished transitioning out.",
    "doc-url": "https://vuetifyjs.com/api/v-dialog#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[]\n"
      }
    ],
    "action": "@afterLeave"
  },
  "activator": {
    "name": "activator",
    "description": "Explicitly sets the overlay's activator.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "value": {
      "kind": "expression",
      "type": "Element | 'parent' | (string & {}) | ComponentPublicInstance"
    },
    "control": "select",
    "options": [
      null,
      "Element",
      "parent",
      "(string&{})",
      "ComponentPublicInstance"
    ]
  },
  "fullscreen": {
    "name": "fullscreen",
    "description": "Changes layout for fullscreen display.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "retainFocus": {
    "name": "retainFocus",
    "description": "Tab focus will return to the first child of the dialog by default. Disable this when using external tools that require focus such as TinyMCE or vue-clipboard.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "true",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "scrollable": {
    "name": "scrollable",
    "description": "When set to true, expects a `v-card` and a `v-card-text` component with a designated height. For more information, check out the [scrollable example](/components/dialogs#scrollable).",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "absolute": {
    "name": "absolute",
    "description": "Applies **position: absolute** to the content element.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "closeOnBack": {
    "name": "closeOnBack",
    "description": "Closes the overlay content when the browser's back button is pressed or `$router.back()` is called, cancelling the original navigation. `persistent` overlays will cancel navigation and animate as if they were clicked outside instead of closing.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "true",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "contained": {
    "name": "contained",
    "description": "Limits the size of the component and scrim to its offset parent. Implies `absolute` and `attach`. (Note: The parent element must have position: relative.).",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "contentClass": {
    "name": "contentClass",
    "description": "Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "value": {
      "kind": "expression",
      "type": "any"
    },
    "control": {
      "type": "text"
    }
  },
  "contentProps": {
    "name": "contentProps",
    "description": "Apply custom properties to the content.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "value": {
      "kind": "expression",
      "type": "any"
    },
    "control": {
      "type": "text"
    }
  },
  "disabled": {
    "name": "disabled",
    "description": "Removes the ability to click or target the component.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "opacity": {
    "name": "opacity",
    "description": "Sets the overlay opacity.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "noClickAnimation": {
    "name": "noClickAnimation",
    "description": "Disables the bounce effect when clicking outside of a `v-dialog`'s content when using the **persistent** prop.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "modelValue": {
    "name": "modelValue",
    "description": "The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "persistent": {
    "name": "persistent",
    "description": "Clicking outside of the element or pressing **esc** key will not deactivate it.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "scrim": {
    "name": "scrim",
    "description": "Accepts true/false to enable background, and string to define color.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "true",
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
  "zIndex": {
    "name": "zIndex",
    "description": "The z-index used for the component.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "2400",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "target": {
    "name": "target",
    "description": "For locationStrategy=\"connected\", specify an element or array of x,y coordinates that the overlay should position itself relative to. This will be the activator element by default.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "value": {
      "kind": "expression",
      "type": "| Element\n  | 'parent'\n  | 'cursor'\n  | (string & {})\n  | ComponentPublicInstance\n  | [number, number]"
    },
    "control": "number"
  },
  "activatorProps": {
    "name": "activatorProps",
    "description": "Apply custom properties to the activator.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "{}",
    "value": {
      "kind": "expression",
      "type": "unknown"
    },
    "control": {
      "type": "text"
    }
  },
  "openOnClick": {
    "name": "openOnClick",
    "description": "Activate the component when the activator is clicked.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "openOnHover": {
    "name": "openOnHover",
    "description": "Designates whether component should activate when its activator is hovered.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "openOnFocus": {
    "name": "openOnFocus",
    "description": "Activate the component when the activator is focused.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "closeOnContentClick": {
    "name": "closeOnContentClick",
    "description": "Closes component when you click on its content.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "closeDelay": {
    "name": "closeDelay",
    "description": "Milliseconds to wait before closing component. Only applies to hover and focus events.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "openDelay": {
    "name": "openDelay",
    "description": "Milliseconds to wait before opening component. Only applies to hover and focus events.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "height": {
    "name": "height",
    "description": "Sets the height for the component.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "maxHeight": {
    "name": "maxHeight",
    "description": "Sets the maximum height for the component.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "maxWidth": {
    "name": "maxWidth",
    "description": "Sets the maximum width for the component.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "minHeight": {
    "name": "minHeight",
    "description": "Sets the minimum height for the component.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "minWidth": {
    "name": "minWidth",
    "description": "Sets the minimum width for the component.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "width": {
    "name": "width",
    "description": "Sets the width for the component.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "eager": {
    "name": "eager",
    "description": "Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "locationStrategy": {
    "name": "locationStrategy",
    "description": "A function used to specifies how the component should position relative to its activator.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "'static'",
    "value": {
      "kind": "expression",
      "type": "'static' | 'connected' | <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VOverlay/locationStrategies.ts#L36-L40\" target=\"_blank\">LocationStrategyFn</a>"
    },
    "control": "select",
    "options": [
      null,
      "static",
      "connected",
      "<ahref=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VOverlay/locationStrategies.ts#L36-L40\"target=\"_blank\">LocationStrategyFn</a>"
    ]
  },
  "location": {
    "name": "location",
    "description": "Specifies the anchor point for positioning the component, using directional cues to align it either horizontally, vertically, or both..",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "'bottom'",
    "value": {
      "kind": "expression",
      "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/anchor.ts#L8-L14\" target=\"_blank\">Anchor</a>"
    },
    "control": {
      "type": "text"
    }
  },
  "origin": {
    "name": "origin",
    "description": "Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "'center center'",
    "value": {
      "kind": "expression",
      "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/anchor.ts#L8-L14\" target=\"_blank\">Anchor</a> | 'auto' | 'overlap'"
    },
    "control": "select",
    "options": [
      null,
      "<ahref=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/anchor.ts#L8-L14\"target=\"_blank\">Anchor</a>",
      "auto",
      "overlap"
    ]
  },
  "offset": {
    "name": "offset",
    "description": "A single value that offsets content away from the target based upon what side it is on.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "value": {
      "kind": "expression",
      "type": "string | number | number[]"
    },
    "control": "number"
  },
  "scrollStrategy": {
    "name": "scrollStrategy",
    "description": "Strategy used when the component is activate and user scrolls.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "'block'",
    "value": {
      "kind": "expression",
      "type": "'none' | 'close' | 'block' | 'reposition' | <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VOverlay/scrollStrategies.ts#L17-L17\" target=\"_blank\">ScrollStrategyFn</a>"
    },
    "control": "select",
    "options": [
      null,
      "none",
      "close",
      "block",
      "reposition",
      "<ahref=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VOverlay/scrollStrategies.ts#L17-L17\"target=\"_blank\">ScrollStrategyFn</a>"
    ]
  },
  "theme": {
    "name": "theme",
    "description": "Specify a theme for this component and all of its children.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "transition": {
    "name": "transition",
    "description": "Sets the component transition. Can be one of the [built in](/styles/transitions/) or custom transition.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "{component: {name: 'VDialogTransition'}}",
    "value": {
      "kind": "expression",
      "type": "| { component: Component }\n  | string\n  | boolean\n  | (TransitionProps & { component: Component })"
    },
    "control": "select",
    "options": [
      null,
      "{component:Component}\n",
      "string\n",
      "\n",
      "(TransitionProps&{component:Component})"
    ]
  },
  "attach": {
    "name": "attach",
    "description": "Specifies which DOM element the overlay content should teleport to. Can be a direct element reference, querySelector string, or `true` to disable teleporting. Uses `body` by default.",
    "doc-url": "https://vuetifyjs.com/api/VDialog#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "string | boolean | Element"
    },
    "control": "select",
    "options": [
      null,
      "string",
      "Element"
    ]
  }
},
  }
  
  export const Default = {
    render: (args) => ({
      components: {
        VDialog
      },
      setup() {
        return { ...args };
      },
      template: `<VDialog max-width="500">
      <template #activator="{ props: activatorProps }">
        <VBtn
          v-bind="activatorProps"
          color="surface-variant"
          text="Open Dialog"
          variant="flat"
        ></VBtn>
      </template>
    
      <template #default="{ isActive }">
        <v-card title="Dialog">
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>
    
          <v-card-actions>
            <v-spacer></v-spacer>
    
            <VBtn
              text="Close Dialog"
              @click="isActive.value = false"
            ></VBtn>
          </v-card-actions>
        </v-card>
      </template>
    </VDialog>`,
    }),
  };
  