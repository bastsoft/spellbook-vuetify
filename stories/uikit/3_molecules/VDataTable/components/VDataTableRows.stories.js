import { VDataTableRows } from 'vuetify/components';
  
  export default {
    title: 'uikit/3_molecules/VDataTable/components/VDataTableRows',
    component: VDataTableRows,
    tags: ['autodocs'], 
    parameters: {
      docs: {
        description: {
          component: '[https://vuetifyjs.com/api/v-data-table-rows](https://vuetifyjs.com/api/v-data-table-rows)'
        }
      },
      slots: {
  "data-table-group": {
    "name": "data-table-group",
    "description": "Slot for custom rendering of a group.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-rows#slots",
    "vue-properties": [
      {
        "name": "item",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25\" target=\"_blank\">Group</a>"
      },
      {
        "name": "count",
        "type": "number"
      },
      {
        "name": "props",
        "type": "Record<string, unknown>"
      }
    ]
  },
  "data-table-select": {
    "name": "data-table-select",
    "description": "Slot for custom rendering of a header cell with the select checkbox.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-rows#slots",
    "vue-properties": [
      {
        "name": "props",
        "type": "Record<string, unknown>"
      }
    ]
  },
  "item.data-table-select": {
    "name": "item.data-table-select",
    "description": "Slot for custom rendering of a row cell with the select checkbox.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-rows#slots"
  },
  "item.data-table-expand": {
    "name": "item.data-table-expand",
    "description": "Slot for custom rendering of a row cell with the expand icon.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-rows#slots"
  },
  "header.data-table-select": {
    "name": "header.data-table-select",
    "description": "MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/vuetify/src/components/VDataTable/VDataTableHeaders.tsx#L42-L51.json))",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-rows#slots",
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
    "doc-url": "https://vuetifyjs.com/api/v-data-table-rows#slots",
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
  "item": {
    "name": "item",
    "description": "Define a custom item appearance.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-rows#slots"
  },
  "loading": {
    "name": "loading",
    "description": "Slot for custom rendering of the loading state.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-rows#slots"
  },
  "group-header": {
    "name": "group-header",
    "description": "Slot for custom rendering of a group header.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-rows#slots",
    "vue-properties": [
      {
        "name": "index",
        "type": "number"
      },
      {
        "name": "item",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25\" target=\"_blank\">Group</a>"
      },
      {
        "name": "columns",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>[]"
      },
      {
        "name": "isExpanded",
        "type": "(item: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L48-L54\" target=\"_blank\">DataTableItem</a>) => boolean"
      },
      {
        "name": "toggleExpand",
        "type": "(item: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L48-L54\" target=\"_blank\">DataTableItem</a>) => void"
      },
      {
        "name": "isSelected",
        "type": "(items: { value: any; selectable: boolean } | SelectableItem[]) => boolean"
      },
      {
        "name": "toggleSelect",
        "type": "(item: { value: any; selectable: boolean }) => void"
      },
      {
        "name": "toggleGroup",
        "type": "(group: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25\" target=\"_blank\">Group</a>) => void"
      },
      {
        "name": "isGroupOpen",
        "type": "(group: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25\" target=\"_blank\">Group</a>) => boolean"
      }
    ]
  },
  "no-data": {
    "name": "no-data",
    "description": "Defines content for when no items are provided.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-rows#slots"
  },
  "expanded-row": {
    "name": "expanded-row",
    "description": "Slot for custom rendering of an expanded row.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-rows#slots"
  },
  "[`item.${string}`]": {
    "name": "[`item.${string}`]",
    "description": "MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/vuetify/src/components/VDataTable/types.ts#L82-L85.json))",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-rows#slots"
  },
  "[`header.${string}`]": {
    "name": "[`header.${string}`]",
    "description": "MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/vuetify/src/components/VDataTable/VDataTableHeaders.tsx#L42-L51.json))",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-rows#slots",
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
  "cellProps": {
    "name": "cellProps",
    "description": "An object of additional props to be passed to each `<td>` in the table body. Also accepts a function that will be called for each cell. If the same prop is defined both here and in `cellProps` in a headers object, the value from the headers object will be used.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableRows#props",
    "value": {
      "kind": "expression",
      "type": "| Record<string, any>\n  | ((\n      data: Pick<\n        ItemKeySlot<any>,\n        'value' | 'item' | 'index' | 'internalItem' | 'column'\n      >,\n    ) => Record<string, any>)"
    },
    "control": "select",
    "options": [
      null,
      "Record<string,any>\n",
      "((\ndata:Pick<\nItemKeySlot<any>,\nvalue",
      "item",
      "index",
      "internalItem",
      "column\n>,\n)=>Record<string,any>)"
    ]
  },
  "mobile": {
    "name": "mobile",
    "description": "Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint",
    "doc-url": "https://vuetifyjs.com/api/VDataTableRows#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "loading": {
    "name": "loading",
    "description": "Displays `loading` slot if set to `true`",
    "doc-url": "https://vuetifyjs.com/api/VDataTableRows#props",
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
  "loadingText": {
    "name": "loadingText",
    "description": "Text shown when the data is loading.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableRows#props",
    "default": "'$vuetify.dataIterator.loadingText'",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "hideNoData": {
    "name": "hideNoData",
    "description": "Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableRows#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "items": {
    "name": "items",
    "description": "An array of strings or objects used for automatically generating children components.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableRows#props",
    "default": "[]",
    "value": {
      "kind": "expression",
      "type": "(<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L48-L54\" target=\"_blank\">DataTableItem</a> | <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25\" target=\"_blank\">Group</a>)[]"
    },
    "control": "select",
    "options": [
      null,
      "(<ahref=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L48-L54\"target=\"_blank\">DataTableItem</a>",
      "<ahref=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25\"target=\"_blank\">Group</a>)[]"
    ]
  },
  "noDataText": {
    "name": "noDataText",
    "description": "Text shown when no items are provided to the component.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableRows#props",
    "default": "'$vuetify.noDataText'",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "mobileBreakpoint": {
    "name": "mobileBreakpoint",
    "description": "Overrides the display configuration default screen size that the component should be considered in mobile.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableRows#props",
    "value": {
      "kind": "expression",
      "type": "number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'"
    },
    "control": "number"
  },
  "rowProps": {
    "name": "rowProps",
    "description": "An object of additional props to be passed to each `<tr>` in the table body. Also accepts a function that will be called for each row.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableRows#props",
    "value": {
      "kind": "expression",
      "type": "| Record<string, any>\n  | ((\n      data: Pick<ItemKeySlot<any>, 'item' | 'index' | 'internalItem'>,\n    ) => Record<string, any>)"
    },
    "control": "select",
    "options": [
      null,
      "Record<string,any>\n",
      "((\ndata:Pick<ItemKeySlot<any>,item",
      "index",
      "internalItem>,\n)=>Record<string,any>)"
    ]
  }
},
  }
  
  export const Default = {
    args: {
    },
  };
  