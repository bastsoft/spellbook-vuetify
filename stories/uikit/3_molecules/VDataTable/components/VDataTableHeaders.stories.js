import { VDataTableHeaders } from 'vuetify/components';
  
  export default {
    title: 'uikit/3_molecules/VDataTable/components/VDataTableHeaders',
    component: VDataTableHeaders,
    tags: ['autodocs'], 
    parameters: {
      docs: {
        description: {
          component: '[https://vuetifyjs.com/api/v-data-table-headers](https://vuetifyjs.com/api/v-data-table-headers)'
        }
      },
      slots: {
  "headers": {
    "name": "headers",
    "description": "MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/vuetify/src/components/VDataTable/VDataTableHeaders.tsx#L30-L40.json))",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-headers#slots",
    "vue-properties": [
      {
        "name": "headers",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>[][]"
      },
      {
        "name": "columns",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>[]"
      },
      {
        "name": "sortBy",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/sort.ts#L30-L30\" target=\"_blank\">SortItem</a>[]"
      },
      {
        "name": "someSelected",
        "type": "boolean"
      },
      {
        "name": "allSelected",
        "type": "boolean"
      },
      {
        "name": "toggleSort",
        "type": "(column: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>) => void"
      },
      {
        "name": "selectAll",
        "type": "(value: boolean) => void"
      },
      {
        "name": "getSortIcon",
        "type": "(column: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>) => any"
      },
      {
        "name": "isSorted",
        "type": "(column: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>) => boolean"
      }
    ]
  },
  "loader": {
    "name": "loader",
    "description": "Slot for custom loader (displayed when [loading](#props-loading) prop is equal to true).",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-headers#slots",
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
  "header.data-table-select": {
    "name": "header.data-table-select",
    "description": "MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/vuetify/src/components/VDataTable/VDataTableHeaders.tsx#L42-L51.json))",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-headers#slots",
    "vue-properties": [
      {
        "name": "column",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>"
      },
      {
        "name": "selectAll",
        "type": "(value: boolean) => void"
      },
      {
        "name": "isSorted",
        "type": "(column: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>) => boolean"
      },
      {
        "name": "toggleSort",
        "type": "(column: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>) => void"
      },
      {
        "name": "sortBy",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/sort.ts#L30-L30\" target=\"_blank\">SortItem</a>[]"
      },
      {
        "name": "someSelected",
        "type": "boolean"
      },
      {
        "name": "allSelected",
        "type": "boolean"
      },
      {
        "name": "getSortIcon",
        "type": "(column: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>) => any"
      }
    ]
  },
  "header.data-table-expand": {
    "name": "header.data-table-expand",
    "description": "MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/vuetify/src/components/VDataTable/VDataTableHeaders.tsx#L42-L51.json))",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-headers#slots",
    "vue-properties": [
      {
        "name": "column",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>"
      },
      {
        "name": "selectAll",
        "type": "(value: boolean) => void"
      },
      {
        "name": "isSorted",
        "type": "(column: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>) => boolean"
      },
      {
        "name": "toggleSort",
        "type": "(column: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>) => void"
      },
      {
        "name": "sortBy",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/sort.ts#L30-L30\" target=\"_blank\">SortItem</a>[]"
      },
      {
        "name": "someSelected",
        "type": "boolean"
      },
      {
        "name": "allSelected",
        "type": "boolean"
      },
      {
        "name": "getSortIcon",
        "type": "(column: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>) => any"
      }
    ]
  },
  "[`header.${string}`]": {
    "name": "[`header.${string}`]",
    "description": "MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/vuetify/src/components/VDataTable/VDataTableHeaders.tsx#L42-L51.json))",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-headers#slots",
    "vue-properties": [
      {
        "name": "column",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>"
      },
      {
        "name": "selectAll",
        "type": "(value: boolean) => void"
      },
      {
        "name": "isSorted",
        "type": "(column: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>) => boolean"
      },
      {
        "name": "toggleSort",
        "type": "(column: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>) => void"
      },
      {
        "name": "sortBy",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/sort.ts#L30-L30\" target=\"_blank\">SortItem</a>[]"
      },
      {
        "name": "someSelected",
        "type": "boolean"
      },
      {
        "name": "allSelected",
        "type": "boolean"
      },
      {
        "name": "getSortIcon",
        "type": "(column: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>) => any"
      }
    ]
  }
}
    },
    argTypes: {
  "color": {
    "name": "color",
    "description": "Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).",
    "doc-url": "https://vuetifyjs.com/api/VDataTableHeaders#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "sticky": {
    "name": "sticky",
    "description": "Sticks the header to the top of the table.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableHeaders#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "disableSort": {
    "name": "disableSort",
    "description": "Toggles rendering of sort button.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableHeaders#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "multiSort": {
    "name": "multiSort",
    "description": "MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableHeaders.json))",
    "doc-url": "https://vuetifyjs.com/api/VDataTableHeaders#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "sortAscIcon": {
    "name": "sortAscIcon",
    "description": "Icon used for ascending sort button.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableHeaders#props",
    "default": "'$sortAsc'",
    "value": {
      "kind": "expression",
      "type": "any"
    },
    "control": {
      "type": "text"
    }
  },
  "sortDescIcon": {
    "name": "sortDescIcon",
    "description": "Icon used for descending sort button.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableHeaders#props",
    "default": "'$sortDesc'",
    "value": {
      "kind": "expression",
      "type": "any"
    },
    "control": {
      "type": "text"
    }
  },
  "headerProps": {
    "name": "headerProps",
    "description": "MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableHeaders.json))",
    "doc-url": "https://vuetifyjs.com/api/VDataTableHeaders#props",
    "value": {
      "kind": "expression",
      "type": "unknown"
    },
    "control": {
      "type": "text"
    }
  },
  "mobile": {
    "name": "mobile",
    "description": "Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint",
    "doc-url": "https://vuetifyjs.com/api/VDataTableHeaders#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "mobileBreakpoint": {
    "name": "mobileBreakpoint",
    "description": "Overrides the display configuration default screen size that the component should be considered in mobile.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableHeaders#props",
    "value": {
      "kind": "expression",
      "type": "number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'"
    },
    "control": "number"
  },
  "loading": {
    "name": "loading",
    "description": "Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableHeaders#props",
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
  }
},
  }
  
  export const Default = {
    args: {
    },
  };
  