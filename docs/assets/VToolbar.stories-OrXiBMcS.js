import{V as n}from"./VToolbar-w2Z7HW7E.js";import"./vue.esm-bundler-DN3_H5t5.js";import"./VToolbarTitle-eqBCGbH5.js";import"./component-BzmGkC7Q.js";import"./defineComponent-CQcCBefB.js";import"./tag-CaUsCUob.js";import"./useRender-Dx5zp1wG.js";import"./index-sGB4oiO6.js";import"./border-A9tpoLC0.js";import"./color-PPr8Dcou.js";import"./colorUtils-DNhIleq8.js";import"./elevation-P3zsY2KP.js";import"./locale-BPiAokE7.js";import"./proxiedModel-jyRWVYhQ.js";import"./rounded-BjGW9D1q.js";import"./theme-ih7eM7Zv.js";import"./VImg-BIwmLzns.js";import"./dimensions-BgLvN08o.js";import"./transition-ivEszK5r.js";import"./index-D2LgtEcL.js";import"./VDefaultsProvider-B_mdbXeZ.js";const w={title:"uikit/4_organisms/VToolbar/VToolbar",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"[https://vuetifyjs.com/api/v-toolbar](https://vuetifyjs.com/api/v-toolbar)"}},slots:{default:{name:"default",description:"The default Vue slot.","doc-url":"https://vuetifyjs.com/api/v-toolbar#slots"},image:{name:"image",description:'Expects the [v-img](/components/images) component. Scoped **props** should be applied with `v-bind="props"`.',"doc-url":"https://vuetifyjs.com/api/v-toolbar#slots"},prepend:{name:"prepend",description:"Adds an item outside the input and before input content.","doc-url":"https://vuetifyjs.com/api/v-toolbar#slots"},append:{name:"append",description:"Adds an item inside the input and after input content.","doc-url":"https://vuetifyjs.com/api/v-toolbar#slots"},title:{name:"title",description:"Slot for the component's title content.","doc-url":"https://vuetifyjs.com/api/v-toolbar#slots"},extension:{name:"extension",description:"Slot positioned directly under the main content of the toolbar. Height of this slot can be set explicitly with the **extension-height** prop. If this slot has no content, the **extended** prop may be used instead.","doc-url":"https://vuetifyjs.com/api/v-toolbar#slots"}}},argTypes:{image:{name:"image",description:"Specifies a [v-img](/components/images) as the component's background.","doc-url":"https://vuetifyjs.com/api/VToolbar#props",value:{kind:"expression",type:"string"},control:{type:"text"}},title:{name:"title",description:"Specify a title text for the component.","doc-url":"https://vuetifyjs.com/api/VToolbar#props",value:{kind:"expression",type:"string"},control:{type:"text"}},flat:{name:"flat",description:"Removes the toolbar's box-shadow.","doc-url":"https://vuetifyjs.com/api/VToolbar#props",default:"false",value:{kind:"expression",type:"boolean"},control:"boolean"},absolute:{name:"absolute",description:"Applies position: absolute to the component.","doc-url":"https://vuetifyjs.com/api/VToolbar#props",default:"false",value:{kind:"expression",type:"boolean"},control:"boolean"},collapse:{name:"collapse",description:"Puts the toolbar into a collapsed state reducing its maximum width.","doc-url":"https://vuetifyjs.com/api/VToolbar#props",default:"false",value:{kind:"expression",type:"boolean"},control:"boolean"},color:{name:"color",description:"Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).","doc-url":"https://vuetifyjs.com/api/VToolbar#props",value:{kind:"expression",type:"string"},control:{type:"text"}},density:{name:"density",description:"Adjusts the vertical height used by the component.","doc-url":"https://vuetifyjs.com/api/VToolbar#props",default:"'default'",value:{kind:"expression",type:"'default' | 'prominent' | 'comfortable' | 'compact'"},control:"select",options:[null,"default","prominent","comfortable","compact"]},extended:{name:"extended",description:"Use this prop to increase the height of the toolbar _without_ using the `extension` slot for adding content. May be used in conjunction with the **extension-height** prop, and any of the other props that affect the height of the toolbar, e.g. **prominent**, **dense**, etc., **WITH THE EXCEPTION** of **height**.","doc-url":"https://vuetifyjs.com/api/VToolbar#props",default:"false",value:{kind:"expression",type:"boolean"},control:"boolean"},extensionHeight:{name:"extensionHeight",description:"Specify an explicit height for the `extension` slot.","doc-url":"https://vuetifyjs.com/api/VToolbar#props",default:"48",value:{kind:"expression",type:"string | number"},control:"number"},floating:{name:"floating",description:"Applies **display: inline-flex** to the component.","doc-url":"https://vuetifyjs.com/api/VToolbar#props",default:"false",value:{kind:"expression",type:"boolean"},control:"boolean"},height:{name:"height",description:"Designates a specific height for the toolbar. Overrides the heights imposed by other props, e.g. **prominent**, **dense**, **extended**, etc.","doc-url":"https://vuetifyjs.com/api/VToolbar#props",default:"64",value:{kind:"expression",type:"string | number"},control:"number"},border:{name:"border",description:"Designates the **border-radius** applied to the component. This can be **xs**, **sm**, **md**, **lg**, **xl**.","doc-url":"https://vuetifyjs.com/api/VToolbar#props",default:"false",value:{kind:"expression",type:"string | number | boolean"},control:"number"},elevation:{name:"elevation",description:"Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).","doc-url":"https://vuetifyjs.com/api/VToolbar#props",value:{kind:"expression",type:"string | number"},control:"number"},rounded:{name:"rounded",description:"Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).","doc-url":"https://vuetifyjs.com/api/VToolbar#props",value:{kind:"expression",type:"string | number | boolean"},control:"number"},tile:{name:"tile",description:"Removes any applied **border-radius** from the component.","doc-url":"https://vuetifyjs.com/api/VToolbar#props",default:"false",value:{kind:"expression",type:"boolean"},control:"boolean"},tag:{name:"tag",description:"Specify a custom tag used on the root element.","doc-url":"https://vuetifyjs.com/api/VToolbar#props",default:"'header'",value:{kind:"expression",type:"string"},control:{type:"text"}},theme:{name:"theme",description:"Specify a theme for this component and all of its children.","doc-url":"https://vuetifyjs.com/api/VToolbar#props",value:{kind:"expression",type:"string"},control:{type:"text"}}}},e={args:{},render:r=>({components:{VToolbar:n},setup(){return{...r}},template:`<VToolbar
  flat
>
  <VToolbarTitle>My Data</VToolbarTitle>
  <VDivider
    class="mx-4"
    inset
    vertical
  ></VDivider>
  <VSpacer></VSpacer>
  <VDialog max-width="500px">
    <template #activator="{ props }">
      <v-btn class="mb-2" color="primary" dark v-bind="props">
        Add
      </v-btn>
    </template>
    <VCard>
      <VCardTitle>
        <span class="text-h5">New Item</span>
      </VCardTitle>
    </VCard>
  </VDialog>
</VToolbar>
        `})};var o,t,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      VToolbar
    },
    setup() {
      return {
        ...args
      };
    },
    template: \`<VToolbar
  flat
>
  <VToolbarTitle>My Data</VToolbarTitle>
  <VDivider
    class="mx-4"
    inset
    vertical
  ></VDivider>
  <VSpacer></VSpacer>
  <VDialog max-width="500px">
    <template #activator="{ props }">
      <v-btn class="mb-2" color="primary" dark v-bind="props">
        Add
      </v-btn>
    </template>
    <VCard>
      <VCardTitle>
        <span class="text-h5">New Item</span>
      </VCardTitle>
    </VCard>
  </VDialog>
</VToolbar>
        \`
  })
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const C=["ToolbarDataTable"];export{e as ToolbarDataTable,C as __namedExportsOrder,w as default};
