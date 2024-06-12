import { VCol } from 'vuetify/components';
  
  export default {
    title: 'uikit/5_templates/layout/VCol',
    component: VCol,
    tags: ['autodocs'], 
    parameters: {
      docs: {
        description: {
          component: '[https://vuetifyjs.com/api/v-col](https://vuetifyjs.com/api/v-col)'
        }
      },
      slots: {
  "default": {
    "name": "default",
    "description": "The default Vue slot.",
    "doc-url": "https://vuetifyjs.com/api/v-col#slots"
  }
}
    },
    argTypes: {
  "cols": {
    "name": "cols",
    "description": "Sets the default number of columns the component extends. Available options are: **1 -> 12** and **auto**.",
    "doc-url": "https://vuetifyjs.com/api/VCol#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "string | number | boolean"
    },
    "control": "number"
  },
  "sm": {
    "name": "sm",
    "description": "Changes the number of columns on small and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VCol#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "string | number | boolean"
    },
    "control": "number"
  },
  "md": {
    "name": "md",
    "description": "Changes the number of columns on medium and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VCol#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "string | number | boolean"
    },
    "control": "number"
  },
  "lg": {
    "name": "lg",
    "description": "Changes the number of columns on large and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VCol#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "string | number | boolean"
    },
    "control": "number"
  },
  "xl": {
    "name": "xl",
    "description": "Changes the number of columns on extra large and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VCol#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "string | number | boolean"
    },
    "control": "number"
  },
  "xxl": {
    "name": "xxl",
    "description": "Changes the number of columns on extra extra large and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VCol#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "string | number | boolean"
    },
    "control": "number"
  },
  "offset": {
    "name": "offset",
    "description": "Sets the default offset for the column.",
    "doc-url": "https://vuetifyjs.com/api/VCol#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "offsetSm": {
    "name": "offsetSm",
    "description": "Changes the offset of the component on small and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VCol#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "offsetMd": {
    "name": "offsetMd",
    "description": "Changes the offset of the component on medium and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VCol#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "offsetLg": {
    "name": "offsetLg",
    "description": "Changes the offset of the component on large and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VCol#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "offsetXl": {
    "name": "offsetXl",
    "description": "Changes the offset of the component on extra large and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VCol#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "offsetXxl": {
    "name": "offsetXxl",
    "description": "Changes the offset of the component on extra extra large and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VCol#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "order": {
    "name": "order",
    "description": "Sets the default [order](https://developer.mozilla.org/en-US/docs/Web/CSS/order) for the column.",
    "doc-url": "https://vuetifyjs.com/api/VCol#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "orderSm": {
    "name": "orderSm",
    "description": "Changes the order of the component on small and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VCol#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "orderMd": {
    "name": "orderMd",
    "description": "Changes the order of the component on medium and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VCol#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "orderLg": {
    "name": "orderLg",
    "description": "Changes the order of the component on large and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VCol#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "orderXl": {
    "name": "orderXl",
    "description": "Changes the order of the component on extra large and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VCol#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "orderXxl": {
    "name": "orderXxl",
    "description": "Changes the order of the component on extra extra large and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VCol#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "alignSelf": {
    "name": "alignSelf",
    "description": "Applies the [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) css property. Available options are: **start**, **center**, **end**, **auto**, **baseline** and **stretch**.",
    "doc-url": "https://vuetifyjs.com/api/VCol#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch'"
    },
    "control": "select",
    "options": [
      null,
      "auto",
      "start",
      "end",
      "center",
      "baseline",
      "stretch"
    ]
  },
  "tag": {
    "name": "tag",
    "description": "Specify a custom tag used on the root element.",
    "doc-url": "https://vuetifyjs.com/api/VCol#props",
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
  
  export const AllAuto = {
    render: () => ({
      template: `<VCol>
    <VSheet class="pa-2 ma-2">
      AllAuto
    </VSheet>
  </VCol>`
    })
};

export const All2 = {
  render: () => ({
    template: `<VCol cols="2">
  <VSheet class="pa-2 ma-2">
    All2
  </VSheet>
</VCol>`
  })
};
  
export const Desk5Mob12 = {
  render: () => ({
    template: `<VCol md="5" cols="12" >
    <VSheet class="pa-2 ma-2">Desk5Mob12</VSheet>
</VCol>`
  })
};

export const Desk5Mob10 = {
  render: () => ({
    template: `<VCol md="5" cols="10">
    <VSheet class="pa-2 ma-2">Desk5Mob10</VSheet>
</VCol>`
  })
};