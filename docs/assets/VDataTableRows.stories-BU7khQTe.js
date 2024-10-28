import{V as s}from"./VDataTableRows-BoDbQ1to.js";import"./vue.esm-bundler-DN3_H5t5.js";import"./headers-Bd2sjvUy.js";import"./proxiedModel-jyRWVYhQ.js";import"./defineComponent-CQcCBefB.js";import"./locale-BPiAokE7.js";import"./VBtn-D_tqydEW.js";import"./VBtnToggle-DWWqMPaH.js";import"./VBtnGroup-DqOdcUEq.js";import"./border-A9tpoLC0.js";import"./component-BzmGkC7Q.js";import"./density-CJzSG3iM.js";import"./elevation-P3zsY2KP.js";import"./rounded-BjGW9D1q.js";import"./tag-CaUsCUob.js";import"./theme-ih7eM7Zv.js";import"./colorUtils-DNhIleq8.js";import"./variant-CLv4R3m-.js";import"./color-PPr8Dcou.js";import"./useRender-Dx5zp1wG.js";import"./group-COkOyDQc.js";import"./dimensions-BgLvN08o.js";import"./VIcon-B3X9_QNp.js";import"./size-DFYA7rG5.js";import"./loader-C7aF6J4b.js";import"./intersectionObserver-DQd14Y87.js";import"./anchor-C6oz8yld.js";import"./position-uzeVc8zo.js";import"./router-CZzFoG1u.js";import"./index-DTMOUhEl.js";import"./VDefaultsProvider-B_mdbXeZ.js";import"./VProgressCircular-CWn4hPDX.js";import"./resizeObserver-Bq73nlWe.js";import"./VCheckboxBtn-CSn5bCvD.js";import"./VLabel-DkRRNEWJ.js";import"./VDataTableRow-BEyKnp0x.js";import"./display-CXz21PgD.js";const K={title:"uikit/3_molecules/VDataTable/components/VDataTableRows",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"[https://vuetifyjs.com/api/v-data-table-rows](https://vuetifyjs.com/api/v-data-table-rows)"}},slots:{"data-table-group":{name:"data-table-group",description:"Slot for custom rendering of a group.","doc-url":"https://vuetifyjs.com/api/v-data-table-rows#slots","vue-properties":[{name:"item",type:'<a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25" target="_blank">Group</a>'},{name:"count",type:"number"},{name:"props",type:"Record<string, unknown>"}]},"data-table-select":{name:"data-table-select",description:"Slot for custom rendering of a header cell with the select checkbox.","doc-url":"https://vuetifyjs.com/api/v-data-table-rows#slots","vue-properties":[{name:"props",type:"Record<string, unknown>"}]},"item.data-table-select":{name:"item.data-table-select",description:"Slot for custom rendering of a row cell with the select checkbox.","doc-url":"https://vuetifyjs.com/api/v-data-table-rows#slots"},"item.data-table-expand":{name:"item.data-table-expand",description:"Slot for custom rendering of a row cell with the expand icon.","doc-url":"https://vuetifyjs.com/api/v-data-table-rows#slots"},"header.data-table-select":{name:"header.data-table-select",description:"MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/vuetify/src/components/VDataTable/VDataTableHeaders.tsx#L42-L51.json))","doc-url":"https://vuetifyjs.com/api/v-data-table-rows#slots","vue-properties":[{name:"column",type:'<a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46" target="_blank">InternalDataTableHeader</a>'},{name:"selectAll",type:"(value: boolean) => void"},{name:"isSorted",type:'(column: <a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46" target="_blank">InternalDataTableHeader</a>) => boolean'},{name:"toggleSort",type:'(column: <a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46" target="_blank">InternalDataTableHeader</a>) => void'},{name:"sortBy",type:'<a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/sort.ts#L30-L30" target="_blank">SortItem</a>[]'},{name:"someSelected",type:"boolean"},{name:"allSelected",type:"boolean"},{name:"getSortIcon",type:'(column: <a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46" target="_blank">InternalDataTableHeader</a>) => any'}]},"header.data-table-expand":{name:"header.data-table-expand",description:"MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/vuetify/src/components/VDataTable/VDataTableHeaders.tsx#L42-L51.json))","doc-url":"https://vuetifyjs.com/api/v-data-table-rows#slots","vue-properties":[{name:"column",type:'<a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46" target="_blank">InternalDataTableHeader</a>'},{name:"selectAll",type:"(value: boolean) => void"},{name:"isSorted",type:'(column: <a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46" target="_blank">InternalDataTableHeader</a>) => boolean'},{name:"toggleSort",type:'(column: <a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46" target="_blank">InternalDataTableHeader</a>) => void'},{name:"sortBy",type:'<a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/sort.ts#L30-L30" target="_blank">SortItem</a>[]'},{name:"someSelected",type:"boolean"},{name:"allSelected",type:"boolean"},{name:"getSortIcon",type:'(column: <a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46" target="_blank">InternalDataTableHeader</a>) => any'}]},item:{name:"item",description:"Define a custom item appearance.","doc-url":"https://vuetifyjs.com/api/v-data-table-rows#slots"},loading:{name:"loading",description:"Slot for custom rendering of the loading state.","doc-url":"https://vuetifyjs.com/api/v-data-table-rows#slots"},"group-header":{name:"group-header",description:"Slot for custom rendering of a group header.","doc-url":"https://vuetifyjs.com/api/v-data-table-rows#slots","vue-properties":[{name:"index",type:"number"},{name:"item",type:'<a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25" target="_blank">Group</a>'},{name:"columns",type:'<a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46" target="_blank">InternalDataTableHeader</a>[]'},{name:"isExpanded",type:'(item: <a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L48-L54" target="_blank">DataTableItem</a>) => boolean'},{name:"toggleExpand",type:'(item: <a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L48-L54" target="_blank">DataTableItem</a>) => void'},{name:"isSelected",type:"(items: { value: any; selectable: boolean } | SelectableItem[]) => boolean"},{name:"toggleSelect",type:"(item: { value: any; selectable: boolean }) => void"},{name:"toggleGroup",type:'(group: <a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25" target="_blank">Group</a>) => void'},{name:"isGroupOpen",type:'(group: <a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25" target="_blank">Group</a>) => boolean'}]},"no-data":{name:"no-data",description:"Defines content for when no items are provided.","doc-url":"https://vuetifyjs.com/api/v-data-table-rows#slots"},"expanded-row":{name:"expanded-row",description:"Slot for custom rendering of an expanded row.","doc-url":"https://vuetifyjs.com/api/v-data-table-rows#slots"},"[`item.${string}`]":{name:"[`item.${string}`]",description:"MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/vuetify/src/components/VDataTable/types.ts#L82-L85.json))","doc-url":"https://vuetifyjs.com/api/v-data-table-rows#slots"},"[`header.${string}`]":{name:"[`header.${string}`]",description:"MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/vuetify/src/components/VDataTable/VDataTableHeaders.tsx#L42-L51.json))","doc-url":"https://vuetifyjs.com/api/v-data-table-rows#slots","vue-properties":[{name:"column",type:'<a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46" target="_blank">InternalDataTableHeader</a>'},{name:"selectAll",type:"(value: boolean) => void"},{name:"isSorted",type:'(column: <a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46" target="_blank">InternalDataTableHeader</a>) => boolean'},{name:"toggleSort",type:'(column: <a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46" target="_blank">InternalDataTableHeader</a>) => void'},{name:"sortBy",type:'<a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/sort.ts#L30-L30" target="_blank">SortItem</a>[]'},{name:"someSelected",type:"boolean"},{name:"allSelected",type:"boolean"},{name:"getSortIcon",type:'(column: <a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L36-L46" target="_blank">InternalDataTableHeader</a>) => any'}]}}},argTypes:{cellProps:{name:"cellProps",description:"An object of additional props to be passed to each `<td>` in the table body. Also accepts a function that will be called for each cell. If the same prop is defined both here and in `cellProps` in a headers object, the value from the headers object will be used.","doc-url":"https://vuetifyjs.com/api/VDataTableRows#props",value:{kind:"expression",type:`| Record<string, any>
  | ((
      data: Pick<
        ItemKeySlot<any>,
        'value' | 'item' | 'index' | 'internalItem' | 'column'
      >,
    ) => Record<string, any>)`},control:"select",options:[null,`Record<string,any>
`,`((
data:Pick<
ItemKeySlot<any>,
value`,"item","index","internalItem",`column
>,
)=>Record<string,any>)`]},mobile:{name:"mobile",description:"Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint","doc-url":"https://vuetifyjs.com/api/VDataTableRows#props",default:"false",value:{kind:"expression",type:"boolean"},control:"boolean"},loading:{name:"loading",description:"Displays `loading` slot if set to `true`","doc-url":"https://vuetifyjs.com/api/VDataTableRows#props",default:"false",value:{kind:"expression",type:"string | boolean"},control:"select",options:[null,"string"]},loadingText:{name:"loadingText",description:"Text shown when the data is loading.","doc-url":"https://vuetifyjs.com/api/VDataTableRows#props",default:"'$vuetify.dataIterator.loadingText'",value:{kind:"expression",type:"string"},control:{type:"text"}},hideNoData:{name:"hideNoData",description:"Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open.","doc-url":"https://vuetifyjs.com/api/VDataTableRows#props",default:"false",value:{kind:"expression",type:"boolean"},control:"boolean"},items:{name:"items",description:"An array of strings or objects used for automatically generating children components.","doc-url":"https://vuetifyjs.com/api/VDataTableRows#props",default:"[]",value:{kind:"expression",type:'(<a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L48-L54" target="_blank">DataTableItem</a> | <a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25" target="_blank">Group</a>)[]'},control:"select",options:[null,'(<ahref="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/types.ts#L48-L54"target="_blank">DataTableItem</a>','<ahref="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/composables/group.ts#L18-L25"target="_blank">Group</a>)[]']},noDataText:{name:"noDataText",description:"Text shown when no items are provided to the component.","doc-url":"https://vuetifyjs.com/api/VDataTableRows#props",default:"'$vuetify.noDataText'",value:{kind:"expression",type:"string"},control:{type:"text"}},mobileBreakpoint:{name:"mobileBreakpoint",description:"Overrides the display configuration default screen size that the component should be considered in mobile.","doc-url":"https://vuetifyjs.com/api/VDataTableRows#props",value:{kind:"expression",type:"number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'"},control:"number"},rowProps:{name:"rowProps",description:"An object of additional props to be passed to each `<tr>` in the table body. Also accepts a function that will be called for each row.","doc-url":"https://vuetifyjs.com/api/VDataTableRows#props",value:{kind:"expression",type:`| Record<string, any>
  | ((
      data: Pick<ItemKeySlot<any>, 'item' | 'index' | 'internalItem'>,
    ) => Record<string, any>)`},control:"select",options:[null,`Record<string,any>
`,`((
data:Pick<ItemKeySlot<any>,item`,"index",`internalItem>,
)=>Record<string,any>)`]}}},e={args:{}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {}
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const M=["Default"];export{e as Default,M as __namedExportsOrder,K as default};