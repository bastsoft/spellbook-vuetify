import { VRow } from 'vuetify/components';
  
  export default {
    title: 'uikit/5_templates/layout/VRow',
    component: VRow,
    tags: ['autodocs'], 
    parameters: {
      docs: {
        description: {
          component: '[https://vuetifyjs.com/api/v-row](https://vuetifyjs.com/api/v-row)'
        }
      },
      slots: {
  "default": {
    "name": "default",
    "description": "The default Vue slot.",
    "doc-url": "https://vuetifyjs.com/api/v-row#slots"
  }
}
    },
    argTypes: {
  "dense": {
    "name": "dense",
    "description": "Reduces the gutter between `v-col`s.",
    "doc-url": "https://vuetifyjs.com/api/VRow#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "noGutters": {
    "name": "noGutters",
    "description": "Removes the gutter between `v-col`s.",
    "doc-url": "https://vuetifyjs.com/api/VRow#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "align": {
    "name": "align",
    "description": "Applies the [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) css property. Available options are: **start**, **center**, **end**, **baseline** and **stretch**.",
    "doc-url": "https://vuetifyjs.com/api/VRow#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "'start' | 'end' | 'center' | 'baseline' | 'stretch'"
    },
    "control": "select",
    "options": [
      null,
      "start",
      "end",
      "center",
      "baseline",
      "stretch"
    ]
  },
  "alignSm": {
    "name": "alignSm",
    "description": "Changes the **align-items** property on small and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VRow#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "'start' | 'end' | 'center' | 'baseline' | 'stretch'"
    },
    "control": "select",
    "options": [
      null,
      "start",
      "end",
      "center",
      "baseline",
      "stretch"
    ]
  },
  "alignMd": {
    "name": "alignMd",
    "description": "Changes the **align-items** property on medium and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VRow#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "'start' | 'end' | 'center' | 'baseline' | 'stretch'"
    },
    "control": "select",
    "options": [
      null,
      "start",
      "end",
      "center",
      "baseline",
      "stretch"
    ]
  },
  "alignLg": {
    "name": "alignLg",
    "description": "Changes the **align-items** property on large and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VRow#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "'start' | 'end' | 'center' | 'baseline' | 'stretch'"
    },
    "control": "select",
    "options": [
      null,
      "start",
      "end",
      "center",
      "baseline",
      "stretch"
    ]
  },
  "alignXl": {
    "name": "alignXl",
    "description": "Changes the **align-items** property on extra large and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VRow#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "'start' | 'end' | 'center' | 'baseline' | 'stretch'"
    },
    "control": "select",
    "options": [
      null,
      "start",
      "end",
      "center",
      "baseline",
      "stretch"
    ]
  },
  "alignXxl": {
    "name": "alignXxl",
    "description": "Changes the **align-items** property on extra extra large and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VRow#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "'start' | 'end' | 'center' | 'baseline' | 'stretch'"
    },
    "control": "select",
    "options": [
      null,
      "start",
      "end",
      "center",
      "baseline",
      "stretch"
    ]
  },
  "justifySm": {
    "name": "justifySm",
    "description": "Changes the **justify-content** property on small and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VRow#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "| 'start'\n  | 'end'\n  | 'center'\n  | 'space-between'\n  | 'space-around'\n  | 'space-evenly'"
    },
    "control": "select",
    "options": [
      null,
      "start\n",
      "end\n",
      "center\n",
      "space-between\n",
      "space-around\n",
      "space-evenly"
    ]
  },
  "justifyMd": {
    "name": "justifyMd",
    "description": "Changes the **justify-content** property on medium and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VRow#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "| 'start'\n  | 'end'\n  | 'center'\n  | 'space-between'\n  | 'space-around'\n  | 'space-evenly'"
    },
    "control": "select",
    "options": [
      null,
      "start\n",
      "end\n",
      "center\n",
      "space-between\n",
      "space-around\n",
      "space-evenly"
    ]
  },
  "justifyLg": {
    "name": "justifyLg",
    "description": "Changes the **justify-content** property on large and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VRow#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "| 'start'\n  | 'end'\n  | 'center'\n  | 'space-between'\n  | 'space-around'\n  | 'space-evenly'"
    },
    "control": "select",
    "options": [
      null,
      "start\n",
      "end\n",
      "center\n",
      "space-between\n",
      "space-around\n",
      "space-evenly"
    ]
  },
  "justifyXl": {
    "name": "justifyXl",
    "description": "Changes the **justify-content** property on extra large and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VRow#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "| 'start'\n  | 'end'\n  | 'center'\n  | 'space-between'\n  | 'space-around'\n  | 'space-evenly'"
    },
    "control": "select",
    "options": [
      null,
      "start\n",
      "end\n",
      "center\n",
      "space-between\n",
      "space-around\n",
      "space-evenly"
    ]
  },
  "justifyXxl": {
    "name": "justifyXxl",
    "description": "Changes the **justify-content** property on extra extra large and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VRow#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "| 'start'\n  | 'end'\n  | 'center'\n  | 'space-between'\n  | 'space-around'\n  | 'space-evenly'"
    },
    "control": "select",
    "options": [
      null,
      "start\n",
      "end\n",
      "center\n",
      "space-between\n",
      "space-around\n",
      "space-evenly"
    ]
  },
  "alignContentSm": {
    "name": "alignContentSm",
    "description": "Changes the **align-content** property on small and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VRow#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "| 'start'\n  | 'end'\n  | 'center'\n  | 'stretch'\n  | 'space-between'\n  | 'space-around'\n  | 'space-evenly'"
    },
    "control": "select",
    "options": [
      null,
      "start\n",
      "end\n",
      "center\n",
      "stretch\n",
      "space-between\n",
      "space-around\n",
      "space-evenly"
    ]
  },
  "alignContentMd": {
    "name": "alignContentMd",
    "description": "Changes the **align-content** property on medium and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VRow#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "| 'start'\n  | 'end'\n  | 'center'\n  | 'stretch'\n  | 'space-between'\n  | 'space-around'\n  | 'space-evenly'"
    },
    "control": "select",
    "options": [
      null,
      "start\n",
      "end\n",
      "center\n",
      "stretch\n",
      "space-between\n",
      "space-around\n",
      "space-evenly"
    ]
  },
  "alignContentLg": {
    "name": "alignContentLg",
    "description": "Changes the **align-content** property on large and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VRow#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "| 'start'\n  | 'end'\n  | 'center'\n  | 'stretch'\n  | 'space-between'\n  | 'space-around'\n  | 'space-evenly'"
    },
    "control": "select",
    "options": [
      null,
      "start\n",
      "end\n",
      "center\n",
      "stretch\n",
      "space-between\n",
      "space-around\n",
      "space-evenly"
    ]
  },
  "alignContentXl": {
    "name": "alignContentXl",
    "description": "Changes the **align-content** property on extra large and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VRow#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "| 'start'\n  | 'end'\n  | 'center'\n  | 'stretch'\n  | 'space-between'\n  | 'space-around'\n  | 'space-evenly'"
    },
    "control": "select",
    "options": [
      null,
      "start\n",
      "end\n",
      "center\n",
      "stretch\n",
      "space-between\n",
      "space-around\n",
      "space-evenly"
    ]
  },
  "alignContentXxl": {
    "name": "alignContentXxl",
    "description": "Changes the **align-content** property on extra extra large and greater breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VRow#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "| 'start'\n  | 'end'\n  | 'center'\n  | 'stretch'\n  | 'space-between'\n  | 'space-around'\n  | 'space-evenly'"
    },
    "control": "select",
    "options": [
      null,
      "start\n",
      "end\n",
      "center\n",
      "stretch\n",
      "space-between\n",
      "space-around\n",
      "space-evenly"
    ]
  },
  "justify": {
    "name": "justify",
    "description": "Applies the [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) css property. Available options are: **start**, **center**, **end**, **space-between** and **space-around**.",
    "doc-url": "https://vuetifyjs.com/api/VRow#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "| 'start'\n  | 'end'\n  | 'center'\n  | 'stretch'\n  | 'space-between'\n  | 'space-around'\n  | 'space-evenly'"
    },
    "control": "select",
    "options": [
      null,
      "start\n",
      "end\n",
      "center\n",
      "stretch\n",
      "space-between\n",
      "space-around\n",
      "space-evenly"
    ]
  },
  "alignContent": {
    "name": "alignContent",
    "description": "Applies the [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) css property. Available options are: **start**, **center**, **end**, **space-between**, **space-around** and **stretch**.",
    "doc-url": "https://vuetifyjs.com/api/VRow#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "| 'start'\n  | 'end'\n  | 'center'\n  | 'stretch'\n  | 'space-between'\n  | 'space-around'\n  | 'space-evenly'"
    },
    "control": "select",
    "options": [
      null,
      "start\n",
      "end\n",
      "center\n",
      "stretch\n",
      "space-between\n",
      "space-around\n",
      "space-evenly"
    ]
  },
  "tag": {
    "name": "tag",
    "description": "Specify a custom tag used on the root element.",
    "doc-url": "https://vuetifyjs.com/api/VRow#props",
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
  

export const AlignStart = {
    render: () => ({
      template: `<VRow align="start" justify="center">
      start
</VRow>`
    })
  };
  export const AlignCenter = {
    render: () => ({
      template: `<VRow align="center" justify="center" class="fill-height">
      Center
</VRow>`
    })
  };

  export const AutoAuto2 = {
    render: () => ({
      template: `<VRow no-gutters>
      <VCol>
        <VSheet class="pa-2 ma-2">
          .v-col-auto
        </VSheet>
      </VCol>
      <VCol>
        <VSheet class="pa-2 ma-2">
          .v-col-auto
        </VSheet>
      </VCol>
      <VCol cols="2">
        <v-sheet class="pa-2 ma-2">
          .v-col-2
        </v-sheet>
      </VCol>
</VRow>`
    })
  };