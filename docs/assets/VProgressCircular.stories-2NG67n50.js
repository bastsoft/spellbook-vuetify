import{V as l}from"./VProgressCircular-CWn4hPDX.js";import"./vue.esm-bundler-DN3_H5t5.js";import"./color-PPr8Dcou.js";import"./defineComponent-CQcCBefB.js";import"./colorUtils-DNhIleq8.js";import"./component-BzmGkC7Q.js";import"./intersectionObserver-DQd14Y87.js";import"./resizeObserver-Bq73nlWe.js";import"./size-DFYA7rG5.js";import"./tag-CaUsCUob.js";import"./theme-ih7eM7Zv.js";import"./useRender-Dx5zp1wG.js";const v={title:"uikit/2_atoms/VProgressCircular",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"[https://vuetifyjs.com/api/v-progress-circular](https://vuetifyjs.com/api/v-progress-circular)"}},slots:{default:{name:"default",description:"The default Vue slot.","doc-url":"https://vuetifyjs.com/api/v-progress-circular#slots","vue-properties":[{name:"value",type:"number"}]}}},argTypes:{bgColor:{name:"bgColor",description:"Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).","doc-url":"https://vuetifyjs.com/api/VProgressCircular#props",value:{kind:"expression",type:"string"},control:{type:"text"}},color:{name:"color",description:"Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).","doc-url":"https://vuetifyjs.com/api/VProgressCircular#props",value:{kind:"expression",type:"string"},control:{type:"text"}},modelValue:{name:"modelValue",description:"The percentage value for current progress.","doc-url":"https://vuetifyjs.com/api/VProgressCircular#props",default:"0",value:{kind:"expression",type:"string | number"},control:"number"},rotate:{name:"rotate",description:"Rotates the circle start point in degrees.","doc-url":"https://vuetifyjs.com/api/VProgressCircular#props",default:"0",value:{kind:"expression",type:"string | number"},control:"number"},width:{name:"width",description:"Sets the stroke of the circle in pixels.","doc-url":"https://vuetifyjs.com/api/VProgressCircular#props",default:"4",value:{kind:"expression",type:"string | number"},control:"number"},size:{name:"size",description:"Sets the diameter of the circle in pixels.","doc-url":"https://vuetifyjs.com/api/VProgressCircular#props",default:"'default'",value:{kind:"expression",type:"string | number"},control:"number"},tag:{name:"tag",description:"Specify a custom tag used on the root element.","doc-url":"https://vuetifyjs.com/api/VProgressCircular#props",default:"'div'",value:{kind:"expression",type:"string"},control:{type:"text"}},theme:{name:"theme",description:"Specify a theme for this component and all of its children.","doc-url":"https://vuetifyjs.com/api/VProgressCircular#props",value:{kind:"expression",type:"string"},control:{type:"text"}},indeterminate:{name:"indeterminate",description:"Constantly animates, use when loading progress is unknown. If set to the string `'disable-shrink'` it will use a simpler animation that does not run on the main thread.","doc-url":"https://vuetifyjs.com/api/VProgressCircular#props",default:"false",value:{kind:"expression",type:"boolean | 'disable-shrink'"},control:"select",options:[null,"disable-shrink"]}}},r={args:{color:"primary",size:128,width:12,indeterminate:!0},render:e=>({components:{VProgressCircular:l},setup(){return{args:e}},template:`<VProgressCircular
        v-bind="args"
      >
      </VProgressCircular>`})},s={render:()=>({data:()=>({timer:{endMS:0,startMs:0,curTimer:null,secPass:0,secForward:0,pauseTimerMS:0}}),methods:{timerStart(e){this.timer.endMS=e*60*1e3,this.timer.startMs=+new Date,this.timerTiktak()},timerStop(){this.timer.endMS=0,this.timer.startMs=0,this.timer.secPass=0,this.timer.secForward=0,this.timer.pauseTimerMS=0,clearTimeout(this.timer.curTimer)},timerPause(){if(this.timer.pauseTimerMS){const t=+new Date-this.timer.pauseTimerMS;this.timer.startMs=this.timer.startMs+t,this.timer.pauseTimerMS=0,this.timer.curTimer=setTimeout(this.timerTiktak.bind(this),1e3)}else this.timer.pauseTimerMS=+new Date,clearTimeout(this.timer.curTimer)},timerTiktak(){let t=+new Date-this.timer.startMs,u=(this.timer.endMS-t)/1e3;if(t>this.timer.endMS){this.timerStop();return}this.timer.secPass=t/1e3,this.timer.secForward=u,this.timer.curTimer=setTimeout(this.timerTiktak.bind(this),1e3)},timerFormatTime(){return new Date(this.timer.secForward*1e3).toString().split(" ")[4].slice(3)},timerValue(){return this.timer.endMS&&this.timer.secPass?Math.ceil(this.timer.secPass*1e3/(this.timer.endMS/100))+1:0}},template:`<VProgressCircular
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
    `})};var i,n,o;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 128,
    width: 12,
    indeterminate: true
  },
  render: args => ({
    components: {
      VProgressCircular
    },
    setup() {
      return {
        args
      };
    },
    template: \`<VProgressCircular
        v-bind="args"
      >
      </VProgressCircular>\`
  })
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var a,m,c;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => ({
    data: () => ({
      timer: {
        endMS: 0,
        startMs: 0,
        curTimer: null,
        secPass: 0,
        secForward: 0,
        pauseTimerMS: 0
      }
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
      timerFormatTime() {
        const timeStr = new Date(this.timer.secForward * 1000).toString().split(" ")[4].slice(3);
        return timeStr;
      },
      timerValue() {
        return this.timer.endMS && this.timer.secPass ? Math.ceil(this.timer.secPass * 1000 / (this.timer.endMS / 100)) + 1 : 0;
      }
    },
    template: \`<VProgressCircular
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
    \`
  })
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const w=["CircularLoader","Timer"];export{r as CircularLoader,s as Timer,w as __namedExportsOrder,v as default};
