import { VDialogTopTransition } from 'vuetify/components';
  
  export default {
    title: 'uikit/4_organisms/VDialog/components/VDialogTopTransition',
    component: VDialogTopTransition,
    tags: ['autodocs'], 
    parameters: {
      docs: {
        description: {
          component: '[https://vuetifyjs.com/api/v-dialog-top-transition](https://vuetifyjs.com/api/v-dialog-top-transition)'
        }
      },
      slots: {
  "default": {
    "name": "default",
    "description": "The default Vue slot.",
    "doc-url": "https://vuetifyjs.com/api/v-dialog-top-transition#slots"
  }
}
    },
    argTypes: {
  "disabled": {
    "name": "disabled",
    "description": "Removes the ability to click or target the component.",
    "doc-url": "https://vuetifyjs.com/api/VDialogTopTransition#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "group": {
    "name": "group",
    "description": "Creates a `transition-group` component. You can find more information in the [vue docs](https://vuejs.org/api/built-in-components.html#transitiongroup).",
    "doc-url": "https://vuetifyjs.com/api/VDialogTopTransition#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "hideOnLeave": {
    "name": "hideOnLeave",
    "description": "Hides the leaving element (no exit animation).",
    "doc-url": "https://vuetifyjs.com/api/VDialogTopTransition#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "leaveAbsolute": {
    "name": "leaveAbsolute",
    "description": "Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)).",
    "doc-url": "https://vuetifyjs.com/api/VDialogTopTransition#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "mode": {
    "name": "mode",
    "description": "Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/api/built-in-components.html#transition).",
    "doc-url": "https://vuetifyjs.com/api/VDialogTopTransition#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "origin": {
    "name": "origin",
    "description": "Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).",
    "doc-url": "https://vuetifyjs.com/api/VDialogTopTransition#props",
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
  