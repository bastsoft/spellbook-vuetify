import { render } from 'vue';
import { VDataTableVirtual } from 'vuetify/components';
  
  export default {
    title: 'uikit/3_molecules/VDataTable/VDataTableVirtual',
    component: VDataTableVirtual,
    tags: ['autodocs'], 
    parameters: {
      docs: {
        description: {
          component: `
Виртуальный вариант таблицы данных, как и стандартный вариант, основан на локальном доступе ко всем данным. Но, в отличие от стандартного варианта, он использует виртуализацию только для отображения небольшой части строк. Это делает его хорошо подходящим для отображения больших наборов данных. Он поддерживает сортировку и фильтрацию на стороне клиента, но не разбивку на страницы.

[https://vuetifyjs.com/api/v-data-table-virtual](https://vuetifyjs.com/api/v-data-table-virtual)
`
        }
      },
      slots: {
  "data-table-group": {
    "name": "data-table-group",
    "description": "Slot for custom rendering of a group.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#slots",
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
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#slots",
    "vue-properties": [
      {
        "name": "props",
        "type": "Record<string, unknown>"
      }
    ]
  },
  "item.data-table-select": {
    "name": "item.data-table-select",
    "description": "Slot to replace the default checkbox used when selecting rows.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#slots"
  },
  "item.data-table-expand": {
    "name": "item.data-table-expand",
    "description": "Slot to replace the default `v-icon` used when expanding rows.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#slots"
  },
  "header.data-table-select": {
    "name": "header.data-table-select",
    "description": "MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/vuetify/src/components/VDataTable/VDataTableHeaders.tsx#L42-L51.json))",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#slots",
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
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#slots",
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
    "description": "Slot to replace the default rendering of a row.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#slots"
  },
  "loading": {
    "name": "loading",
    "description": "Defines content for when `loading` is true and no items are provided.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#slots"
  },
  "group-header": {
    "name": "group-header",
    "description": "Slot for custom rendering of a group header.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#slots",
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
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#slots"
  },
  "expanded-row": {
    "name": "expanded-row",
    "description": "Slot for custom rendering of an expanded row.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#slots"
  },
  "headers": {
    "name": "headers",
    "description": "Slot to replace the default rendering of the `<thead>` element.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#slots",
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
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#slots",
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
  "colgroup": {
    "name": "colgroup",
    "description": "Slot to replace the default rendering of the `<colgroup>` element.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#slots",
    "vue-properties": [
      {
        "name": "headers",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>[][]"
      },
      {
        "name": "items",
        "type": "any[]"
      },
      {
        "name": "sortBy",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/sort.ts#L30-L30\" target=\"_blank\">SortItem</a>[]"
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
        "name": "toggleSort",
        "type": "(column: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>) => void"
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
        "name": "select",
        "type": "(items: SelectableItem[], value: boolean) => void"
      },
      {
        "name": "selectAll",
        "type": "(value: boolean) => void"
      },
      {
        "name": "isGroupOpen",
        "type": "(group: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25\" target=\"_blank\">Group</a>) => boolean"
      },
      {
        "name": "toggleGroup",
        "type": "(group: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25\" target=\"_blank\">Group</a>) => void"
      },
      {
        "name": "internalItems",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L48-L54\" target=\"_blank\">DataTableItem</a>[]"
      },
      {
        "name": "groupedItems",
        "type": "(<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L48-L54\" target=\"_blank\">DataTableItem</a> | <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25\" target=\"_blank\">Group</a>)[]"
      },
      {
        "name": "columns",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>[]"
      }
    ]
  },
  "top": {
    "name": "top",
    "description": "Slot to add content above the table",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#slots",
    "vue-properties": [
      {
        "name": "headers",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>[][]"
      },
      {
        "name": "items",
        "type": "any[]"
      },
      {
        "name": "sortBy",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/sort.ts#L30-L30\" target=\"_blank\">SortItem</a>[]"
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
        "name": "toggleSort",
        "type": "(column: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>) => void"
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
        "name": "select",
        "type": "(items: SelectableItem[], value: boolean) => void"
      },
      {
        "name": "selectAll",
        "type": "(value: boolean) => void"
      },
      {
        "name": "isGroupOpen",
        "type": "(group: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25\" target=\"_blank\">Group</a>) => boolean"
      },
      {
        "name": "toggleGroup",
        "type": "(group: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25\" target=\"_blank\">Group</a>) => void"
      },
      {
        "name": "internalItems",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L48-L54\" target=\"_blank\">DataTableItem</a>[]"
      },
      {
        "name": "groupedItems",
        "type": "(<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L48-L54\" target=\"_blank\">DataTableItem</a> | <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25\" target=\"_blank\">Group</a>)[]"
      },
      {
        "name": "columns",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>[]"
      }
    ]
  },
  "bottom": {
    "name": "bottom",
    "description": "Slot to add content below the table.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#slots",
    "vue-properties": [
      {
        "name": "headers",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>[][]"
      },
      {
        "name": "items",
        "type": "any[]"
      },
      {
        "name": "sortBy",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/sort.ts#L30-L30\" target=\"_blank\">SortItem</a>[]"
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
        "name": "toggleSort",
        "type": "(column: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>) => void"
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
        "name": "select",
        "type": "(items: SelectableItem[], value: boolean) => void"
      },
      {
        "name": "selectAll",
        "type": "(value: boolean) => void"
      },
      {
        "name": "isGroupOpen",
        "type": "(group: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25\" target=\"_blank\">Group</a>) => boolean"
      },
      {
        "name": "toggleGroup",
        "type": "(group: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25\" target=\"_blank\">Group</a>) => void"
      },
      {
        "name": "internalItems",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L48-L54\" target=\"_blank\">DataTableItem</a>[]"
      },
      {
        "name": "groupedItems",
        "type": "(<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L48-L54\" target=\"_blank\">DataTableItem</a> | <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25\" target=\"_blank\">Group</a>)[]"
      },
      {
        "name": "columns",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>[]"
      }
    ]
  },
  "body.prepend": {
    "name": "body.prepend",
    "description": "MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/vuetify/src/components/VDataTable/VDataTableVirtual.tsx#L32-L38.json))",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#slots",
    "vue-properties": [
      {
        "name": "headers",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>[][]"
      },
      {
        "name": "items",
        "type": "any[]"
      },
      {
        "name": "sortBy",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/sort.ts#L30-L30\" target=\"_blank\">SortItem</a>[]"
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
        "name": "toggleSort",
        "type": "(column: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>) => void"
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
        "name": "select",
        "type": "(items: SelectableItem[], value: boolean) => void"
      },
      {
        "name": "selectAll",
        "type": "(value: boolean) => void"
      },
      {
        "name": "isGroupOpen",
        "type": "(group: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25\" target=\"_blank\">Group</a>) => boolean"
      },
      {
        "name": "toggleGroup",
        "type": "(group: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25\" target=\"_blank\">Group</a>) => void"
      },
      {
        "name": "internalItems",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L48-L54\" target=\"_blank\">DataTableItem</a>[]"
      },
      {
        "name": "groupedItems",
        "type": "(<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L48-L54\" target=\"_blank\">DataTableItem</a> | <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25\" target=\"_blank\">Group</a>)[]"
      },
      {
        "name": "columns",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>[]"
      }
    ]
  },
  "body.append": {
    "name": "body.append",
    "description": "MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/vuetify/src/components/VDataTable/VDataTableVirtual.tsx#L32-L38.json))",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#slots",
    "vue-properties": [
      {
        "name": "headers",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>[][]"
      },
      {
        "name": "items",
        "type": "any[]"
      },
      {
        "name": "sortBy",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/sort.ts#L30-L30\" target=\"_blank\">SortItem</a>[]"
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
        "name": "toggleSort",
        "type": "(column: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>) => void"
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
        "name": "select",
        "type": "(items: SelectableItem[], value: boolean) => void"
      },
      {
        "name": "selectAll",
        "type": "(value: boolean) => void"
      },
      {
        "name": "isGroupOpen",
        "type": "(group: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25\" target=\"_blank\">Group</a>) => boolean"
      },
      {
        "name": "toggleGroup",
        "type": "(group: <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25\" target=\"_blank\">Group</a>) => void"
      },
      {
        "name": "internalItems",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L48-L54\" target=\"_blank\">DataTableItem</a>[]"
      },
      {
        "name": "groupedItems",
        "type": "(<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L48-L54\" target=\"_blank\">DataTableItem</a> | <a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25\" target=\"_blank\">Group</a>)[]"
      },
      {
        "name": "columns",
        "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46\" target=\"_blank\">InternalDataTableHeader</a>[]"
      }
    ]
  },
  "[`item.${string}`]": {
    "name": "[`item.${string}`]",
    "description": "Slot for custom rendering of a row cell.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#slots"
  },
  "[`header.${string}`]": {
    "name": "[`header.${string}`]",
    "description": "MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/vuetify/src/components/VDataTable/VDataTableHeaders.tsx#L42-L51.json))",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#slots",
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
  "v-model": {
    "control": {}
  },
  "onUpdate:expanded": {
    "name": "update:expanded",
    "description": "Emits when the **expanded** property of the **options** prop is updated.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[any]\n"
      }
    ],
    "action": "@update:expanded"
  },
  "onUpdate:modelValue": {
    "name": "update:modelValue",
    "description": "Emits when the component's model changes.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[unknown]\n"
      }
    ],
    "action": "@update:modelValue"
  },
  "onUpdate:sortBy": {
    "name": "update:sortBy",
    "description": "Emits when the **sort-by** property of the **options** prop is updated.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[any]\n"
      }
    ],
    "action": "@update:sortBy"
  },
  "onUpdate:options": {
    "name": "update:options",
    "description": "Emits when one of the **options** properties is updated.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[any]\n"
      }
    ],
    "action": "@update:options"
  },
  "onUpdate:groupBy": {
    "name": "update:groupBy",
    "description": "Emits when the **group-by** property of the **options** property is updated.",
    "doc-url": "https://vuetifyjs.com/api/v-data-table-virtual#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[any]\n"
      }
    ],
    "action": "@update:groupBy"
  },
  "width": {
    "name": "width",
    "description": "Sets the width for the component.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "headerProps": {
    "name": "headerProps",
    "description": "MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableHeaders.json))",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "value": {
      "kind": "expression",
      "type": "unknown"
    },
    "control": {
      "type": "text"
    }
  },
  "cellProps": {
    "name": "cellProps",
    "description": "An object of additional props to be passed to each `<td>` in the table body. Also accepts a function that will be called for each cell. If the same prop is defined both here and in `cellProps` in a headers object, the value from the headers object will be used.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
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
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "headers": {
    "name": "headers",
    "description": "An array of objects that each describe a header column.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "value": {
      "kind": "expression",
      "type": "{\n  readonly key?:\n    | 'data-table-group'\n    | 'data-table-select'\n    | 'data-table-expand'\n    | (string & {})\n    | undefined\n  readonly value?: SelectItemKey<Record<string, any>>\n  readonly title?: string | undefined\n  readonly fixed?: boolean | undefined\n  readonly align?: 'start' | 'end' | 'center' | undefined\n  readonly width?: string | number | undefined\n  readonly minWidth?: string | undefined\n  readonly maxWidth?: string | undefined\n  readonly nowrap?: boolean | undefined\n  readonly headerProps?: { readonly [x: string]: any } | undefined\n  readonly cellProps?:\n    | { readonly [x: string]: any }\n    | ((\n        data: Pick<\n          ItemKeySlot<any>,\n          'value' | 'item' | 'index' | 'internalItem'\n        >,\n      ) => Record<string, any>)\n    | undefined\n  readonly sortable?: boolean | undefined\n  readonly sort?: DataTableCompareFunction<any> | undefined\n  readonly sortRaw?: DataTableCompareFunction<any> | undefined\n  readonly filter?: FilterFunction | undefined\n  readonly mobile?: boolean | undefined\n  readonly children?:\n    | readonly {\n        readonly key?:\n          | 'data-table-group'\n          | 'data-table-select'\n          | 'data-table-expand'\n          | (string & {})\n          | undefined\n        readonly value?: SelectItemKey<Record<string, any>>\n        readonly title?: string | undefined\n        readonly fixed?: boolean | undefined\n        readonly align?: 'start' | 'end' | 'center' | undefined\n        readonly width?: string | number | undefined\n        readonly minWidth?: string | undefined\n        readonly maxWidth?: string | undefined\n        readonly nowrap?: boolean | undefined\n        readonly headerProps?: { readonly [x: string]: any } | undefined\n        readonly cellProps?:\n          | { readonly [x: string]: any }\n          | ((\n              data: Pick<\n                ItemKeySlot<any>,\n                'value' | 'item' | 'index' | 'internalItem'\n              >,\n            ) => Record<string, any>)\n          | undefined\n        readonly sortable?: boolean | undefined\n        readonly sort?: DataTableCompareFunction<any> | undefined\n        readonly sortRaw?: DataTableCompareFunction<any> | undefined\n        readonly filter?: FilterFunction | undefined\n        readonly mobile?: boolean | undefined\n        readonly children?: readonly any[] | undefined\n      }[]\n    | undefined\n}[]"
    },
    "control": "number"
  },
  "loading": {
    "name": "loading",
    "description": "Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
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
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
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
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
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
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "[]",
    "value": {
      "kind": "expression",
      "type": "any[]"
    },
    "control": {
      "type": "text"
    }
  },
  "noDataText": {
    "name": "noDataText",
    "description": "Text shown when no items are provided to the component.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
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
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "value": {
      "kind": "expression",
      "type": "number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'"
    },
    "control": "number"
  },
  "rowProps": {
    "name": "rowProps",
    "description": "An object of additional props to be passed to each `<tr>` in the table body. Also accepts a function that will be called for each row.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
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
  },
  "hideDefaultBody": {
    "name": "hideDefaultBody",
    "description": "MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/DataTable.json))",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "hideDefaultFooter": {
    "name": "hideDefaultFooter",
    "description": "MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/DataTable.json))",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "hideDefaultHeader": {
    "name": "hideDefaultHeader",
    "description": "MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/DataTable.json))",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "search": {
    "name": "search",
    "description": "Text input used to filter items.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "expandOnClick": {
    "name": "expandOnClick",
    "description": "Expands item when the row is clicked.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "showExpand": {
    "name": "showExpand",
    "description": "Shows the expand icon.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "expanded": {
    "name": "expanded",
    "description": "Whether the item is expanded or not.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "[]",
    "value": {
      "kind": "expression",
      "type": "string[]"
    },
    "control": {
      "type": "text"
    }
  },
  "groupBy": {
    "name": "groupBy",
    "description": "Defines the grouping of the table items.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "[]",
    "value": {
      "kind": "expression",
      "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/sort.ts#L30-L30\" target=\"_blank\">SortItem</a>[]"
    },
    "control": {
      "type": "text"
    }
  },
  "itemValue": {
    "name": "itemValue",
    "description": "Property on supplied `items` that contains its value.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "'id'",
    "value": {
      "kind": "expression",
      "type": "SelectItemKey<any>"
    },
    "control": {
      "type": "text"
    }
  },
  "itemSelectable": {
    "name": "itemSelectable",
    "description": "Property on supplied `items` that indicates whether the item is selectable.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "null",
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
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "showSelect": {
    "name": "showSelect",
    "description": "Shows the column with checkboxes for selecting items in the list.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "selectStrategy": {
    "name": "selectStrategy",
    "description": "Defines the strategy of selecting items in the list. Possible values are: 'single' (only one item can be selected at a time), 'page' ('Select all' button will select only items on the current page), 'all' ('Select all' button will select all items in the list).",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "'page'",
    "value": {
      "kind": "expression",
      "type": "'single' | 'page' | 'all'"
    },
    "control": "select",
    "options": [
      null,
      "single",
      "page",
      "all"
    ]
  },
  "modelValue": {
    "name": "modelValue",
    "description": "The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "[]",
    "value": {
      "kind": "expression",
      "type": "unknown"
    },
    "control": {
      "type": "text"
    }
  },
  "valueComparator": {
    "name": "valueComparator",
    "description": "Apply a custom comparison algorithm to compare **model-value** and values contains in the **items** prop.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "value": {
      "kind": "expression",
      "type": "(a: any, b: any) => boolean"
    },
    "control": "boolean"
  },
  "sortBy": {
    "name": "sortBy",
    "description": "Array of column keys and sort orders that determines the sort order of the table.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "[]",
    "value": {
      "kind": "expression",
      "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/sort.ts#L30-L30\" target=\"_blank\">SortItem</a>[]"
    },
    "control": {
      "type": "text"
    }
  },
  "multiSort": {
    "name": "multiSort",
    "description": "Allows sorting by multiple columns.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "mustSort": {
    "name": "mustSort",
    "description": "Forces sorting on the column(s).",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "customKeySort": {
    "name": "customKeySort",
    "description": "Function used on specific keys within the item object. `customSort` is skipped for columns with `customKeySort` specified.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "value": {
      "kind": "expression",
      "type": "unknown"
    },
    "control": {
      "type": "text"
    }
  },
  "color": {
    "name": "color",
    "description": "Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
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
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
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
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
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
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
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
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "'$sortDesc'",
    "value": {
      "kind": "expression",
      "type": "any"
    },
    "control": {
      "type": "text"
    }
  },
  "fixedHeader": {
    "name": "fixedHeader",
    "description": "Use the fixed-header prop together with the height prop to fix the header to the top of the table.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "fixedFooter": {
    "name": "fixedFooter",
    "description": "Use the fixed-footer prop together with the height prop to fix the footer to the bottom of the table.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "height": {
    "name": "height",
    "description": "Use the height prop to set the height of the table.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "hover": {
    "name": "hover",
    "description": "Will add a hover effect to a table's row when the mouse is over it.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
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
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
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
  "tag": {
    "name": "tag",
    "description": "Specify a custom tag used on the root element.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
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
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "itemHeight": {
    "name": "itemHeight",
    "description": "Height in pixels of each item to display.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "filterMode": {
    "name": "filterMode",
    "description": "Controls how the results of `customFilter` and `customKeyFilter` are combined. All modes only apply `customFilter` to columns not specified in `customKeyFilter`.\n\n- **some**: There is at least one match from either the custom filter or the custom key filter.\n- **every**: All columns match either the custom filter or the custom key filter.\n- **union**: There is at least one match from the custom filter, or all columns match the custom key filters.\n- **intersection**: There is at least one match from the custom filter, and all columns match the custom key filters.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "'intersection'",
    "value": {
      "kind": "expression",
      "type": "'every' | 'some' | 'union' | 'intersection'"
    },
    "control": "select",
    "options": [
      null,
      "every",
      "some",
      "union",
      "intersection"
    ]
  },
  "noFilter": {
    "name": "noFilter",
    "description": "Disables all item filtering.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "customFilter": {
    "name": "customFilter",
    "description": "Function used to filter items, called for each filterable key on each item in the list. The first argument is the filterable value from the item, the second is the search term, and the third is the internal item object. The function should return true if the item should be included in the filtered list, or the index of the match in the value if it should be included with the result highlighted.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "value": {
      "kind": "expression",
      "type": "<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/filter.ts#L19-L19\" target=\"_blank\">FilterFunction</a>"
    },
    "control": {
      "type": "text"
    }
  },
  "customKeyFilter": {
    "name": "customKeyFilter",
    "description": "Function used on specific keys within the item object. `customFilter` is skipped for columns with `customKeyFilter` specified.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
    "value": {
      "kind": "expression",
      "type": "unknown"
    },
    "control": {
      "type": "text"
    }
  },
  "filterKeys": {
    "name": "filterKeys",
    "description": "Array of specific keys to filter on the item.",
    "doc-url": "https://vuetifyjs.com/api/VDataTableVirtual#props",
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
  }
},
  }
  
  export const Default = {
    args: {
    },
    render: (args) => ({
      components: {
        VDataTableVirtual
      },    
      data() {
        return {
          headers: [
            { title: 'Boat Type', align: 'start', key: 'name' },
            { title: 'Speed (knots)', align: 'end', key: 'speed' },
            { title: 'Length (m)', align: 'end', key: 'length' },
            { title: 'Price ($)', align: 'end', key: 'price' },
            { title: 'Year', align: 'end', key: 'year' },
          ],
          virtualBoats: [],
          boats: [
            {
              name: 'Speedster',
              speed: 35,
              length: 22,
              price: 300000,
              year: 2021,
            },
            {
              name: 'OceanMaster',
              speed: 25,
              length: 35,
              price: 500000,
              year: 2020,
            }
          ],
        }
      },
      mounted(){
        this.virtualBoats = [...Array(100).keys()].map(i => {
          const boat = { ...this.boats[i % this.boats.length] }
          boat.name = `${boat.name} #${i}`
          return boat
        });
      },
      template: `<VDataTableVirtual
        :headers="headers"
        :items="virtualBoats"
        height="400"
        item-value="name"
      />`,
    }),
  };
  