import { VProgressCircular } from 'vuetify/components';
  
  export default {
    title: 'uikit/2_atoms/VProgressCircular',
    component: VProgressCircular,
    tags: ['autodocs'], 
    parameters: {
      docs: {
        description: {
          component: '[https://vuetifyjs.com/api/v-progress-circular](https://vuetifyjs.com/api/v-progress-circular)'
        }
      },
      slots: {
  "default": {
    "name": "default",
    "description": "The default Vue slot.",
    "doc-url": "https://vuetifyjs.com/api/v-progress-circular#slots",
    "vue-properties": [
      {
        "name": "value",
        "type": "number"
      }
    ]
  }
}
    },
    argTypes: {
  "bgColor": {
    "name": "bgColor",
    "description": "Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).",
    "doc-url": "https://vuetifyjs.com/api/VProgressCircular#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "color": {
    "name": "color",
    "description": "Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).",
    "doc-url": "https://vuetifyjs.com/api/VProgressCircular#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "modelValue": {
    "name": "modelValue",
    "description": "The percentage value for current progress.",
    "doc-url": "https://vuetifyjs.com/api/VProgressCircular#props",
    "default": "0",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "rotate": {
    "name": "rotate",
    "description": "Rotates the circle start point in degrees.",
    "doc-url": "https://vuetifyjs.com/api/VProgressCircular#props",
    "default": "0",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "width": {
    "name": "width",
    "description": "Sets the stroke of the circle in pixels.",
    "doc-url": "https://vuetifyjs.com/api/VProgressCircular#props",
    "default": "4",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "size": {
    "name": "size",
    "description": "Sets the diameter of the circle in pixels.",
    "doc-url": "https://vuetifyjs.com/api/VProgressCircular#props",
    "default": "'default'",
    "value": {
      "kind": "expression",
      "type": "string | number"
    },
    "control": "number"
  },
  "tag": {
    "name": "tag",
    "description": "Specify a custom tag used on the root element.",
    "doc-url": "https://vuetifyjs.com/api/VProgressCircular#props",
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
    "doc-url": "https://vuetifyjs.com/api/VProgressCircular#props",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  },
  "indeterminate": {
    "name": "indeterminate",
    "description": "Constantly animates, use when loading progress is unknown. If set to the string `'disable-shrink'` it will use a simpler animation that does not run on the main thread.",
    "doc-url": "https://vuetifyjs.com/api/VProgressCircular#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean | 'disable-shrink'"
    },
    "control": "select",
    "options": [
      null,
      "disable-shrink"
    ]
  }
},
  }
  
  export const CircularLoader = {
    args: {
      color: 'primary',
      size: 128,
      width: 12,
      indeterminate: true
    },
    render: (args) => ({
      components:{
        VProgressCircular
      },
      setup() {
        return { args,}
      }, 
      template: `<VProgressCircular
        v-bind="args"
      >
      </VProgressCircular>`,
    })
  };
  

  export const Timer = {
    render: () => ({
      data: () => ({
        timer:{
          endMS: 0,
          startMs: 0,
          curTimer: null,
          secPass: 0,
          secForward: 0,
          pauseTimerMS: 0
        },
      }),
      methods: {
        timerStart(min) {
          this.timer.endMS = min * 60 * 1000;
          this.timer.startMs = +new Date();
      
          this.timerTiktak();
        },
        timerStop() {
          this.timer.endMS = 0;
          this.timer.startMs = 0;
          this.timer.secPass = 0;
          this.timer.secForward = 0;
          this.timer.pauseTimerMS = 0;
          clearTimeout(this.timer.curTimer);
        },
        timerPause() {
          if (this.timer.pauseTimerMS) {
            const curentMs = +new Date();
            const diff = curentMs - this.timer.pauseTimerMS;
      
            this.timer.startMs = this.timer.startMs + diff;
            this.timer.pauseTimerMS = 0;
            this.timer.curTimer = setTimeout(this.timerTiktak.bind(this), 1000);
            //this._emmitPauseOff();
          } else {
            this.timer.pauseTimerMS = +new Date();
            clearTimeout(this.timer.curTimer);
            //this._emmitPauseOn();
          }
        },
        timerTiktak() {
          let curentMs = +new Date();
          let ms = curentMs - this.timer.startMs;
          let sec = (this.timer.endMS - ms) / 1000;
      
          if (ms > this.timer.endMS) {
            this.timerStop();
            return;
          }
          this.timer.secPass = ms / 1000;
          this.timer.secForward = sec;
         
          this.timer.curTimer = setTimeout(this.timerTiktak.bind(this), 1000);
        },
        timerFormatTime(){
          const timeStr = (new Date(this.timer.secForward*1000)).toString().split(" ")[4].slice(3);
          return timeStr;
        },
        timerValue(){
          return (this.timer.endMS && this.timer.secPass) ? Math.ceil((this.timer.secPass*1000)/(this.timer.endMS/100)) + 1 : 0;
        }
      },
      template: `<VProgressCircular
      :model-value="timerValue()"
      :rotate="360"
      :size="300"
      :width="40"
      color="teal"
    >
      {{ timerFormatTime() }}
    </VProgressCircular>
    <VBtn @click="timerStart(1)">timerStart</VBtn>
    <VBtn @click="timerPause()">timerPause</VBtn>
    <VBtn @click="timerStop()">timerStop</VBtn>
    `,
    })
  };