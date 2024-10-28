import{V as d}from"./VForm-Generator-CiHUjNsW.js";import{V as m}from"./VForm-Czsm0PEZ.js";import"./vue.esm-bundler-DN3_H5t5.js";import"./component-BzmGkC7Q.js";import"./defineComponent-CQcCBefB.js";import"./form-BvtnZTpd.js";import"./proxiedModel-jyRWVYhQ.js";import"./forwardRefs-C-GTDzx5.js";import"./useRender-Dx5zp1wG.js";const V={title:"uikit/4_organisms/Form/VForm",component:m,tags:["autodocs"],parameters:{docs:{description:{component:"[https://vuetifyjs.com/api/VForm](https://vuetifyjs.com/api/VForm)"}},slots:{default:{name:"default",description:"The default Vue slot.","doc-url":"https://vuetifyjs.com/api/VForm#slots","vue-properties":[{name:"errors",type:"Ref<{ id: string | number; errorMessages: string[]; }[]>"},{name:"isDisabled",type:"ComputedRef<boolean>"},{name:"isReadonly",type:"ComputedRef<boolean>"},{name:"isValidating",type:"ShallowRef<boolean>"},{name:"isValid",type:"Ref<boolean | null> & { externalValue: boolean }"},{name:"items",type:"Ref<{ id: string | number; validate: () => Promise<string[]>; reset: () => Promise<void>; resetValidation: () => Promise<void>; vm: Raw<ComponentInternalInstance>; isValid: boolean | null; errorMessages: string[]; }[]>"},{name:"validate",type:"() => Promise<{ valid: boolean; errors: { id: string | number; errorMessages: string[]; }[]; }>"},{name:"reset",type:"() => void"},{name:"resetValidation",type:"() => void"}]}}},argTypes:{"v-model":{control:{}},"onUpdate:modelValue":{name:"update:modelValue",description:"Event emitted when the form's validity changes.","doc-url":"https://vuetifyjs.com/api/VForm#events",arguments:[{name:"argument",type:`[boolean]
`}],action:"@update:modelValue"},onSubmit:{name:"submit",description:"Emitted when form is submitted.","doc-url":"https://vuetifyjs.com/api/VForm#events",arguments:[{name:"argument",type:`[<a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/form.ts#L51-L51" target="_blank">SubmitEventPromise</a>]
`}],action:"@submit"},modelValue:{name:"modelValue",description:"The value representing the validity of the form. If the value is `null` then no validation has taken place yet, or the form has been reset. Otherwise the value will be a `boolean` that indicates if validation has passed or not.","doc-url":"https://vuetifyjs.com/api/VForm#props",default:"null",value:{kind:"expression",type:"boolean"},control:"boolean"},disabled:{name:"disabled",description:"Puts all children inputs into a disabled state.","doc-url":"https://vuetifyjs.com/api/VForm#props",default:"false",value:{kind:"expression",type:"boolean"},control:"boolean"},fastFail:{name:"fastFail",description:"Stop validation as soon as any rules fail.","doc-url":"https://vuetifyjs.com/api/VForm#props",default:"false",value:{kind:"expression",type:"boolean"},control:"boolean"},readonly:{name:"readonly",description:"Puts all children inputs into a readonly state.","doc-url":"https://vuetifyjs.com/api/VForm#props",default:"false",value:{kind:"expression",type:"boolean"},control:"boolean"},validateOn:{name:"validateOn",description:"Changes the events in which validation occurs.","doc-url":"https://vuetifyjs.com/api/VForm#props",default:"'input'",value:{kind:"expression",type:`| 'blur'
  | 'input'
  | 'submit'
  | 'blur lazy'
  | 'input lazy'
  | 'submit lazy'
  | 'lazy blur'
  | 'lazy input'
  | 'lazy submit'
  | 'lazy'`},control:"select",options:[null,`blur
`,`input
`,`submit
`,`blurlazy
`,`inputlazy
`,`submitlazy
`,`lazyblur
`,`lazyinput
`,`lazysubmit
`,"lazy"]}}},e={args:{},render:u=>({setup(){return{...u}},data:()=>({loginName:"",password:"",showPassword:!1,loading:!1,rules:{}}),mounted(){this.rules={required:a=>!!a||"Обязательное поле.",min:a=>a.length>=2||"Хотя бы два знака"}},methods:{onSubmit(){this.loading=!0,setTimeout(()=>this.loading=!1,6e3)}},template:`<VForm 
        class="px-4 py-6"
        @submit.prevent="onSubmit"
      >
        <v-text-field 
          v-model="loginName" 
          label="Логин" 
          variant="outlined" 
          :readonly="loading"
          :rules="[rules.required, rules.min]"
          required 
          clearable
          class="mb-2"
        />
        <v-text-field 
          v-model="password" 
          label="Пароль"
          variant="outlined" 
          :type="showPassword ? 'text' : 'password'"
          :readonly="loading"
          :rules="[rules.required]" 
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
          clearable
          class="mb-2"
          @click:append-inner="showPassword = !showPassword" 
        />
  
        <v-btn 
          :loading="loading"
          block
          color="blue"
          size="large" 
          type="submit" 
          variant="elevated"
        >
          Войти
        </v-btn>
      </VForm>`})},n=d;var o,t,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    setup() {
      return {
        ...args
      };
    },
    data: () => ({
      loginName: '',
      password: '',
      showPassword: false,
      loading: false,
      rules: {}
    }),
    mounted() {
      this.rules = {
        required: value => !!value || 'Обязательное поле.',
        min: v => v.length >= 2 || 'Хотя бы два знака'
      };
    },
    methods: {
      onSubmit() {
        this.loading = true;
        setTimeout(() => this.loading = false, 6000);
      }
    },
    template: \`<VForm 
        class="px-4 py-6"
        @submit.prevent="onSubmit"
      >
        <v-text-field 
          v-model="loginName" 
          label="Логин" 
          variant="outlined" 
          :readonly="loading"
          :rules="[rules.required, rules.min]"
          required 
          clearable
          class="mb-2"
        />
        <v-text-field 
          v-model="password" 
          label="Пароль"
          variant="outlined" 
          :type="showPassword ? 'text' : 'password'"
          :readonly="loading"
          :rules="[rules.required]" 
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
          clearable
          class="mb-2"
          @click:append-inner="showPassword = !showPassword" 
        />
  
        <v-btn 
          :loading="loading"
          block
          color="blue"
          size="large" 
          type="submit" 
          variant="elevated"
        >
          Войти
        </v-btn>
      </VForm>\`
  })
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var r,i,l;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:"VFormGenerator",...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const F=["Login","Generator"];export{n as Generator,e as Login,F as __namedExportsOrder,V as default};
