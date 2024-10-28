import{C as V}from"./cardByItem-tp3wC2TA.js";import{V as y}from"./VCard-DNSZitpn.js";import{V as b}from"./VForm-Czsm0PEZ.js";import"./vue.esm-bundler-DN3_H5t5.js";import"./VCardActions-DWk1Us3N.js";import"./component-BzmGkC7Q.js";import"./defineComponent-CQcCBefB.js";import"./useRender-Dx5zp1wG.js";import"./VCardItem-BA-oO166.js";import"./VCardSubtitle-BTddC6p5.js";import"./tag-CaUsCUob.js";import"./VCardTitle-BtD1qICH.js";import"./createSimpleFunctional-B4LhTWP6.js";import"./density-CJzSG3iM.js";import"./VIcon-B3X9_QNp.js";import"./color-PPr8Dcou.js";import"./colorUtils-DNhIleq8.js";import"./size-DFYA7rG5.js";import"./theme-ih7eM7Zv.js";import"./VAvatar-D8ogoK9B.js";import"./border-A9tpoLC0.js";import"./rounded-BjGW9D1q.js";import"./variant-CLv4R3m-.js";import"./VImg-BIwmLzns.js";import"./dimensions-BgLvN08o.js";import"./transition-ivEszK5r.js";import"./index-D2LgtEcL.js";import"./VDefaultsProvider-B_mdbXeZ.js";import"./VCardText-BeoqxcCN.js";import"./elevation-P3zsY2KP.js";import"./loader-C7aF6J4b.js";import"./intersectionObserver-DQd14Y87.js";import"./locale-BPiAokE7.js";import"./proxiedModel-jyRWVYhQ.js";import"./anchor-C6oz8yld.js";import"./position-uzeVc8zo.js";import"./router-CZzFoG1u.js";import"./index-DTMOUhEl.js";import"./form-BvtnZTpd.js";import"./forwardRefs-C-GTDzx5.js";const se={title:"uikit/4_organisms/VCard/VCard",component:y,tags:["autodocs"],parameters:{docs:{description:{component:"[https://vuetifyjs.com/api/VCard](https://vuetifyjs.com/api/VCard)"}},slots:{default:{name:"default",description:"The default Vue slot.","doc-url":"https://vuetifyjs.com/api/VCard#slots"},prepend:{name:"prepend",description:"Adds an item outside the input and before input content.","doc-url":"https://vuetifyjs.com/api/VCard#slots"},append:{name:"append",description:"Adds an item inside the input and after input content.","doc-url":"https://vuetifyjs.com/api/VCard#slots"},title:{name:"title",description:"Slot for the component's title content.","doc-url":"https://vuetifyjs.com/api/VCard#slots"},subtitle:{name:"subtitle",description:"Slot for the component's subtitle content.","doc-url":"https://vuetifyjs.com/api/VCard#slots"},actions:{name:"actions",description:"The slot used for the card actions; located at the bottom of the card.","doc-url":"https://vuetifyjs.com/api/VCard#slots"},text:{name:"text",description:"Slot for the component's text content.","doc-url":"https://vuetifyjs.com/api/VCard#slots"},loader:{name:"loader",description:"Slot for custom loader (displayed when [loading](#props-loading) prop is equal to true).","doc-url":"https://vuetifyjs.com/api/VCard#slots","vue-properties":[{name:"color",type:"string"},{name:"isActive",type:"boolean"}]},image:{name:"image",description:"The slot used for the card image. This is used with the [image](#props-image) prop.","doc-url":"https://vuetifyjs.com/api/VCard#slots"},item:{name:"item",description:"Define a custom item appearance.","doc-url":"https://vuetifyjs.com/api/VCard#slots"}}},argTypes:{title:{name:"title",description:"Specify a title text for the component.","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"string | number"},control:"number"},subtitle:{name:"subtitle",description:"Specify a subtitle text for the component.","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"string | number"},control:"number"},text:{name:"text",description:"Specify content text for the component.","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"string | number"},control:"number"},image:{name:"image",description:"Apply a specific background image to the component.","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"string"},control:{type:"text"}},flat:{name:"flat",description:"Removes the card's elevation.","doc-url":"https://vuetifyjs.com/api/VCard#props",default:"false",value:{kind:"expression",type:"boolean"},control:"boolean"},appendAvatar:{name:"appendAvatar",description:"Appends a [v-avatar](/components/avatars/) component after default content in the **append** slot.","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"string"},control:{type:"text"}},appendIcon:{name:"appendIcon",description:"Creates a [VIcon](/api/VIcon/) component after default content in the **append** slot.","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"any"},control:{type:"text"}},disabled:{name:"disabled",description:"Removes the ability to click or target the component.","doc-url":"https://vuetifyjs.com/api/VCard#props",default:"false",value:{kind:"expression",type:"boolean"},control:"boolean"},hover:{name:"hover",description:"Applies **4dp** of elevation when hovered (default 2dp). You can find more information on the [elevation page](/styles/elevation).","doc-url":"https://vuetifyjs.com/api/VCard#props",default:"false",value:{kind:"expression",type:"boolean"},control:"boolean"},link:{name:"link",description:"Designates that the component is a link. This is automatic when using the href or to prop.","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"boolean"},control:"boolean"},prependAvatar:{name:"prependAvatar",description:"Prepends a [v-avatar](/components/avatars/) component in the **prepend** slot before default content.","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"string"},control:{type:"text"}},prependIcon:{name:"prependIcon",description:"Prepends a [VIcon](/components/icons/) component to the header.","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"any"},control:{type:"text"}},ripple:{name:"ripple",description:"Applies the [v-ripple](/directives/ripple) directive.","doc-url":"https://vuetifyjs.com/api/VCard#props",default:"true",value:{kind:"expression",type:"boolean | { class: string }"},control:"select",options:[null,"{class:string}"]},border:{name:"border",description:"Designates the **border-radius** applied to the component. This can be **xs**, **sm**, **md**, **lg**, **xl**.","doc-url":"https://vuetifyjs.com/api/VCard#props",default:"false",value:{kind:"expression",type:"string | number | boolean"},control:"number"},density:{name:"density",description:"Adjusts the vertical height used by the component.","doc-url":"https://vuetifyjs.com/api/VCard#props",default:"'default'",value:{kind:"expression",type:"'default' | 'comfortable' | 'compact'"},control:"select",options:[null,"default","comfortable","compact"]},height:{name:"height",description:"Sets the height for the component.","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"string | number"},control:"number"},maxHeight:{name:"maxHeight",description:"Sets the maximum height for the component.","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"string | number"},control:"number"},maxWidth:{name:"maxWidth",description:"Sets the maximum width for the component.","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"string | number"},control:"number"},minHeight:{name:"minHeight",description:"Sets the minimum height for the component.","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"string | number"},control:"number"},minWidth:{name:"minWidth",description:"Sets the minimum width for the component.","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"string | number"},control:"number"},width:{name:"width",description:"Sets the width for the component.","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"string | number"},control:"number"},elevation:{name:"elevation",description:"Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"string | number"},control:"number"},loading:{name:"loading",description:"Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color.","doc-url":"https://vuetifyjs.com/api/VCard#props",default:"false",value:{kind:"expression",type:"string | boolean"},control:"select",options:[null,"string"]},location:{name:"location",description:"Specifies the component's location. Can combine by using a space separated string.","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:'<a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/anchor.ts#L8-L14" target="_blank">Anchor</a>'},control:{type:"text"}},position:{name:"position",description:"Sets the position for the component.","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"'static' | 'relative' | 'fixed' | 'absolute' | 'sticky'"},control:"select",options:[null,"static","relative","fixed","absolute","sticky"]},rounded:{name:"rounded",description:"Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"string | number | boolean"},control:"number"},tile:{name:"tile",description:"Removes any applied **border-radius** from the component.","doc-url":"https://vuetifyjs.com/api/VCard#props",default:"false",value:{kind:"expression",type:"boolean"},control:"boolean"},href:{name:"href",description:"Designates the component as anchor and applies the **href** attribute.","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"string"},control:{type:"text"}},replace:{name:"replace",description:"Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [replace](https://router.vuejs.org/api/#replace) prop on the vue-router documentation.","doc-url":"https://vuetifyjs.com/api/VCard#props",default:"false",value:{kind:"expression",type:"boolean"},control:"boolean"},exact:{name:"exact",description:"Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.","doc-url":"https://vuetifyjs.com/api/VCard#props",default:"false",value:{kind:"expression",type:"boolean"},control:"boolean"},to:{name:"to",description:"Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"RouteLocationRaw"},control:{type:"text"}},tag:{name:"tag",description:"Specify a custom tag used on the root element.","doc-url":"https://vuetifyjs.com/api/VCard#props",default:"'div'",value:{kind:"expression",type:"string"},control:{type:"text"}},theme:{name:"theme",description:"Specify a theme for this component and all of its children.","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"string"},control:{type:"text"}},color:{name:"color",description:"Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).","doc-url":"https://vuetifyjs.com/api/VCard#props",value:{kind:"expression",type:"string"},control:{type:"text"}},variant:{name:"variant",description:"Applies a distinct style to the component.","doc-url":"https://vuetifyjs.com/api/VCard#props",default:"'elevated'",value:{kind:"expression",type:"'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'"},control:"select",options:[null,"text","flat","elevated","tonal","outlined","plain"]}}},e={args:{},render:r=>({components:{VForm:b,VCard:y},setup(){return{...r}},data:()=>({loginName:"",password:"",showPassword:!1,loadingFormLogin:!1,rules:{}}),mounted(){this.rules={required:i=>!!i||"Обязательное поле.",min:i=>i.length>=2||"Хотя бы два знака"}},methods:{onSubmit(){this.loadingFormLogin=!0,setTimeout(()=>this.loadingFormLogin=!1,6e3)}},template:`<VCard 
        max-width="350" 
        class="w-100"
      >
        <VCard-title>Вход в панель управления</VCard-title>
    
        <VCard-text>
          Не говорите никому свой пароль
        </VCard-text>
    
        <VDivider />
    
        <div v-if="error" class="px-4 pt-6 text-red-darken-3">
          {{ error }}
        </div>
    
        <v-form
          class="px-4 py-6"
          @submit.prevent="onSubmit"
        >
          <v-text-field 
            v-model="loginName" 
            label="Логин" 
            name="login"
            variant="outlined" 
            :readonly="loadingFormLogin"
            :rules="[rules.required, rules.min]"
            required 
            clearable
            class="mb-2"
          />
          <v-text-field 
            v-model="password" 
            label="Пароль"
            name="password"
            variant="outlined" 
            :type="showPassword ? 'text' : 'password'"
            :readonly="loadingFormLogin"
            :rules="[rules.required]" 
            :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
            clearable
            class="mb-2"
            @click:append-inner="showPassword = !showPassword" 
          />
    
          <VBtn 
            :loading="loadingFormLogin"
            block
            color="blue"
            size="large" 
            type="submit" 
            variant="elevated"
          >
            Войти
          </VBtn>
        </v-form>
      </VCard>`})},t={render:r=>({template:`<VCard
    class="mx-auto pa-12 pb-8"
    elevation="8"
    max-width="448"
    rounded="lg"
  >
    <div class="text-subtitle-1 text-medium-emphasis">Account</div>

    <VTextField
      density="compact"
      placeholder="Email address"
      prepend-inner-icon="mdi-email-outline"
      variant="outlined"
    ></VTextField>

    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
      Password

      <a
        class="text-caption text-decoration-none text-blue"
        href="#"
        rel="noopener noreferrer"
        target="_blank"
      >
        Forgot login password?</a>
    </div>

    <VTextField
      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="visible ? 'text' : 'password'"
      density="compact"
      placeholder="Enter your password"
      prepend-inner-icon="mdi-lock-outline"
      variant="outlined"
      @click:append-inner="visible = !visible"
    ></VTextField>

    <VCard
      class="mb-12"
      color="surface-variant"
      variant="tonal"
    >
      <VCardText class="text-medium-emphasis text-caption">
        Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
      </VCardText>
    </VCard>

    <VBtn
      class="mb-8"
      color="blue"
      size="large"
      variant="tonal"
      block
    >
      Log In
    </VBtn>

    <VCardText class="text-center">
      <a
        class="text-blue text-decoration-none"
        href="#"
        rel="noopener noreferrer"
        target="_blank"
      >
        Sign up now <VIcon icon="mdi-chevron-right"></VIcon>
      </a>
    </VCardText>
  </VCard>`})},n={render:r=>({template:`  <VCard
    class="mx-auto my-12"
    max-width="374"
  >
    <template #prepend>
      <VIcon color="grey-lighten-2" icon="mdi-account"></VIcon>
    </template>
    <template #title>
        FIO
    </template>
    <template #subtitle>
        <VIcon class="me-1 pb-1" color="gray" icon="mdi-baby-carriage" size="18"></VIcon>
        02.06.2011 
        <VIcon class="me-1 pb-1" color="gray" icon="mdi-home-clock" size="18"></VIcon>
        EuropeMoscow
    </template>
    <VCardText>
        <VTimeline size="x-small" dot-color="grey-lighten-2" align="start" density="compact">
          <VTimelineItem>
            <strong>Добавлен</strong> 05.06.2024
          </VTimelineItem>
          <VTimelineItem>
            <strong>Обновлен</strong> 05.06.2024
          </VTimelineItem>
        </VTimeline>
    </VCardText>
    <VDivider class="mx-4 mb-1"></VDivider>
  
    <VCardItem >
      <template #prepend>
        <VIcon color="grey-lighten-2" icon="mdi-cash-multiple"></VIcon>
      </template>
      <template #title>
         10 руб.    
      </template>
    
      <template #subtitle>
       Баланс
      </template>
      <template v-slot:append>
          <VBtn
            class="text-none"
            color="primary"
            text="Корректировка"
            variant="text"
            slim
          ></VBtn>
        </template>
    </VCardItem>
  
    <VDivider class="mx-4 mb-1"></VDivider>
    
    <VCardItem >
      <template #prepend>
        <VIcon color="grey-lighten-2" icon="mdi-flag-checkered"></VIcon>
      </template>
      <template #title>
        Flag
      </template>
    
      <template #subtitle>
       Флаги
      </template>
      <template v-slot:append>
          <VBtn
            class="text-none"
            color="primary"
            text="Поставить флаг"
            variant="text"
            slim
          ></VBtn>
        </template>
    </VCardItem>
  
    <VDivider class="mx-4 mb-1"></VDivider>
  
  
    <VCardItem >
      <template #prepend>
        <VIcon color="grey-lighten-2" icon="mdi-identifier"></VIcon>
      </template>
      <template #title>
        1234
      </template>
    
      <template #subtitle>
        id/uuid
      </template>
      <template v-slot:append>
        <VBtn  color="primary" icon="mdi-content-copy" variant="plain">
        </VBtn>
      </template>
    </VCardItem>
  </VCard>
  `})},o=V;var a,s,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      VForm,
      VCard
    },
    setup() {
      return {
        ...args
      };
    },
    data: () => ({
      loginName: "",
      password: "",
      showPassword: false,
      loadingFormLogin: false,
      rules: {}
    }),
    mounted() {
      this.rules = {
        required: value => !!value || "Обязательное поле.",
        min: v => v.length >= 2 || "Хотя бы два знака"
      };
    },
    methods: {
      onSubmit() {
        this.loadingFormLogin = true;
        setTimeout(() => this.loadingFormLogin = false, 6000);
      }
    },
    template: \`<VCard 
        max-width="350" 
        class="w-100"
      >
        <VCard-title>Вход в панель управления</VCard-title>
    
        <VCard-text>
          Не говорите никому свой пароль
        </VCard-text>
    
        <VDivider />
    
        <div v-if="error" class="px-4 pt-6 text-red-darken-3">
          {{ error }}
        </div>
    
        <v-form
          class="px-4 py-6"
          @submit.prevent="onSubmit"
        >
          <v-text-field 
            v-model="loginName" 
            label="Логин" 
            name="login"
            variant="outlined" 
            :readonly="loadingFormLogin"
            :rules="[rules.required, rules.min]"
            required 
            clearable
            class="mb-2"
          />
          <v-text-field 
            v-model="password" 
            label="Пароль"
            name="password"
            variant="outlined" 
            :type="showPassword ? 'text' : 'password'"
            :readonly="loadingFormLogin"
            :rules="[rules.required]" 
            :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
            clearable
            class="mb-2"
            @click:append-inner="showPassword = !showPassword" 
          />
    
          <VBtn 
            :loading="loadingFormLogin"
            block
            color="blue"
            size="large" 
            type="submit" 
            variant="elevated"
          >
            Войти
          </VBtn>
        </v-form>
      </VCard>\`
  })
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var l,d,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    template: \`<VCard
    class="mx-auto pa-12 pb-8"
    elevation="8"
    max-width="448"
    rounded="lg"
  >
    <div class="text-subtitle-1 text-medium-emphasis">Account</div>

    <VTextField
      density="compact"
      placeholder="Email address"
      prepend-inner-icon="mdi-email-outline"
      variant="outlined"
    ></VTextField>

    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
      Password

      <a
        class="text-caption text-decoration-none text-blue"
        href="#"
        rel="noopener noreferrer"
        target="_blank"
      >
        Forgot login password?</a>
    </div>

    <VTextField
      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="visible ? 'text' : 'password'"
      density="compact"
      placeholder="Enter your password"
      prepend-inner-icon="mdi-lock-outline"
      variant="outlined"
      @click:append-inner="visible = !visible"
    ></VTextField>

    <VCard
      class="mb-12"
      color="surface-variant"
      variant="tonal"
    >
      <VCardText class="text-medium-emphasis text-caption">
        Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
      </VCardText>
    </VCard>

    <VBtn
      class="mb-8"
      color="blue"
      size="large"
      variant="tonal"
      block
    >
      Log In
    </VBtn>

    <VCardText class="text-center">
      <a
        class="text-blue text-decoration-none"
        href="#"
        rel="noopener noreferrer"
        target="_blank"
      >
        Sign up now <VIcon icon="mdi-chevron-right"></VIcon>
      </a>
    </VCardText>
  </VCard>\`
  })
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,u,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    template: \`  <VCard
    class="mx-auto my-12"
    max-width="374"
  >
    <template #prepend>
      <VIcon color="grey-lighten-2" icon="mdi-account"></VIcon>
    </template>
    <template #title>
        FIO
    </template>
    <template #subtitle>
        <VIcon class="me-1 pb-1" color="gray" icon="mdi-baby-carriage" size="18"></VIcon>
        02.06.2011 
        <VIcon class="me-1 pb-1" color="gray" icon="mdi-home-clock" size="18"></VIcon>
        Europe\\Moscow
    </template>
    <VCardText>
        <VTimeline size="x-small" dot-color="grey-lighten-2" align="start" density="compact">
          <VTimelineItem>
            <strong>Добавлен</strong> 05.06.2024
          </VTimelineItem>
          <VTimelineItem>
            <strong>Обновлен</strong> 05.06.2024
          </VTimelineItem>
        </VTimeline>
    </VCardText>
    <VDivider class="mx-4 mb-1"></VDivider>
  
    <VCardItem >
      <template #prepend>
        <VIcon color="grey-lighten-2" icon="mdi-cash-multiple"></VIcon>
      </template>
      <template #title>
         10 руб.    
      </template>
    
      <template #subtitle>
       Баланс
      </template>
      <template v-slot:append>
          <VBtn
            class="text-none"
            color="primary"
            text="Корректировка"
            variant="text"
            slim
          ></VBtn>
        </template>
    </VCardItem>
  
    <VDivider class="mx-4 mb-1"></VDivider>
    
    <VCardItem >
      <template #prepend>
        <VIcon color="grey-lighten-2" icon="mdi-flag-checkered"></VIcon>
      </template>
      <template #title>
        Flag
      </template>
    
      <template #subtitle>
       Флаги
      </template>
      <template v-slot:append>
          <VBtn
            class="text-none"
            color="primary"
            text="Поставить флаг"
            variant="text"
            slim
          ></VBtn>
        </template>
    </VCardItem>
  
    <VDivider class="mx-4 mb-1"></VDivider>
  
  
    <VCardItem >
      <template #prepend>
        <VIcon color="grey-lighten-2" icon="mdi-identifier"></VIcon>
      </template>
      <template #title>
        1234
      </template>
    
      <template #subtitle>
        id/uuid
      </template>
      <template v-slot:append>
        <VBtn  color="primary" icon="mdi-content-copy" variant="plain">
        </VBtn>
      </template>
    </VCardItem>
  </VCard>
  \`
  })
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var v,g,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:"CardByItemConfig",...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const pe=["Login350","LoginForm","UserInfo","CardByItem"];export{o as CardByItem,e as Login350,t as LoginForm,n as UserInfo,pe as __namedExportsOrder,se as default};
