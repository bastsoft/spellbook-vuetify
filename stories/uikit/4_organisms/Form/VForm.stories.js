import { VForm } from 'vuetify/components';
import VFormGenerator from './VForm-Generator';  

  export default {
    title: 'uikit/4_organisms/Form/VForm',
    component: VForm,
    tags: ['autodocs'], 
    parameters: {
      docs: {
        description: {
          component: '[https://vuetifyjs.com/api/VForm](https://vuetifyjs.com/api/VForm)'
        }
      },
      slots: {
  "default": {
    "name": "default",
    "description": "The default Vue slot.",
    "doc-url": "https://vuetifyjs.com/api/VForm#slots",
    "vue-properties": [
      {
        "name": "errors",
        "type": "Ref<{ id: string | number; errorMessages: string[]; }[]>"
      },
      {
        "name": "isDisabled",
        "type": "ComputedRef<boolean>"
      },
      {
        "name": "isReadonly",
        "type": "ComputedRef<boolean>"
      },
      {
        "name": "isValidating",
        "type": "ShallowRef<boolean>"
      },
      {
        "name": "isValid",
        "type": "Ref<boolean | null> & { externalValue: boolean }"
      },
      {
        "name": "items",
        "type": "Ref<{ id: string | number; validate: () => Promise<string[]>; reset: () => Promise<void>; resetValidation: () => Promise<void>; vm: Raw<ComponentInternalInstance>; isValid: boolean | null; errorMessages: string[]; }[]>"
      },
      {
        "name": "validate",
        "type": "() => Promise<{ valid: boolean; errors: { id: string | number; errorMessages: string[]; }[]; }>"
      },
      {
        "name": "reset",
        "type": "() => void"
      },
      {
        "name": "resetValidation",
        "type": "() => void"
      }
    ]
  }
}
    },
    argTypes: {
  "v-model": {
    "control": {}
  },
  "onUpdate:modelValue": {
    "name": "update:modelValue",
    "description": "Event emitted when the form's validity changes.",
    "doc-url": "https://vuetifyjs.com/api/VForm#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[boolean]\n"
      }
    ],
    "action": "@update:modelValue"
  },
  "onSubmit": {
    "name": "submit",
    "description": "Emitted when form is submitted.",
    "doc-url": "https://vuetifyjs.com/api/VForm#events",
    "arguments": [
      {
        "name": "argument",
        "type": "[<a href=\"https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/form.ts#L51-L51\" target=\"_blank\">SubmitEventPromise</a>]\n"
      }
    ],
    "action": "@submit"
  },
  "modelValue": {
    "name": "modelValue",
    "description": "The value representing the validity of the form. If the value is `null` then no validation has taken place yet, or the form has been reset. Otherwise the value will be a `boolean` that indicates if validation has passed or not.",
    "doc-url": "https://vuetifyjs.com/api/VForm#props",
    "default": "null",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "disabled": {
    "name": "disabled",
    "description": "Puts all children inputs into a disabled state.",
    "doc-url": "https://vuetifyjs.com/api/VForm#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "fastFail": {
    "name": "fastFail",
    "description": "Stop validation as soon as any rules fail.",
    "doc-url": "https://vuetifyjs.com/api/VForm#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "readonly": {
    "name": "readonly",
    "description": "Puts all children inputs into a readonly state.",
    "doc-url": "https://vuetifyjs.com/api/VForm#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "validateOn": {
    "name": "validateOn",
    "description": "Changes the events in which validation occurs.",
    "doc-url": "https://vuetifyjs.com/api/VForm#props",
    "default": "'input'",
    "value": {
      "kind": "expression",
      "type": "| 'blur'\n  | 'input'\n  | 'submit'\n  | 'blur lazy'\n  | 'input lazy'\n  | 'submit lazy'\n  | 'lazy blur'\n  | 'lazy input'\n  | 'lazy submit'\n  | 'lazy'"
    },
    "control": "select",
    "options": [
      null,
      "blur\n",
      "input\n",
      "submit\n",
      "blurlazy\n",
      "inputlazy\n",
      "submitlazy\n",
      "lazyblur\n",
      "lazyinput\n",
      "lazysubmit\n",
      "lazy"
    ]
  }
},
  }
  
  export const Login = {
    args: {
    },
    render: (args) => ({
        setup() {
          return { ...args, }
        },
        data: () => ({
          loginName: '',
          password: '',
          showPassword: false,
          loading: false,
          rules: {},
        }),
        mounted(){
          this.rules = {
            required: value => !!value || 'Обязательное поле.',
            min: v => v.length >= 2 || 'Хотя бы два знака',
          };
        },
        methods: {
          onSubmit() {
            this.loading = true
            setTimeout(() => (this.loading = false), 6000)
          }
        },
        template: `<VForm 
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
      </VForm>`
    })
  };

  export const Generator = VFormGenerator;
  
