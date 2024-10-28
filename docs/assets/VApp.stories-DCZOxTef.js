import{V as d}from"./VApp-w0pygppg.js";import"./vue.esm-bundler-DN3_H5t5.js";import"./component-BzmGkC7Q.js";import"./defineComponent-CQcCBefB.js";import"./layout-BWfB5SPU.js";import"./resizeObserver-Bq73nlWe.js";import"./locale-BPiAokE7.js";import"./proxiedModel-jyRWVYhQ.js";import"./theme-ih7eM7Zv.js";import"./colorUtils-DNhIleq8.js";import"./useRender-Dx5zp1wG.js";const L={title:"uikit/5_templates/App/VApp",component:d,tags:["autodocs"],parameters:{docs:{description:{component:"[https://vuetifyjs.com/api/v-app](https://vuetifyjs.com/api/v-app)"}},slots:{default:{name:"default",description:"The default Vue slot.","doc-url":"https://vuetifyjs.com/api/v-app#slots"}}},argTypes:{fullHeight:{name:"fullHeight",description:"Sets the component height to 100%.","doc-url":"https://vuetifyjs.com/api/VApp#props",default:"true",value:{kind:"expression",type:"boolean"},control:"boolean"},overlaps:{name:"overlaps",description:"**FOR INTERNAL USE ONLY**","doc-url":"https://vuetifyjs.com/api/VApp#props",default:"[]",value:{kind:"expression",type:"string[]"},control:{type:"text"}},theme:{name:"theme",description:"Specify a theme for this component and all of its children.","doc-url":"https://vuetifyjs.com/api/VApp#props",value:{kind:"expression",type:"string"},control:{type:"text"}}}},t={args:{},render:e=>({components:{RouterView:{template:"здесь будет router-view"}},setup(){return{...e}},template:`<VApp>
    <VAppBar>
      <VAppBarTitle>Application</VAppBarTitle>
    </VAppBar>

    <VMain>
      content
    </VMain>
  </VApp>`})},n={args:{},render:e=>({components:{RouterView:{template:"здесь будет router-view"}},setup(){return{...e}},template:` <v-app>
    <v-container class="fill-height">
      <v-row 
        align="center"
        justify="center"
        class="fill-height"
      >
        <router-view />
      </v-row>
    </v-container>
  </v-app>`})},i={args:{},render:e=>({components:{RouterView:{template:"здесь будет router-view"}},setup(){return{...e}},data:()=>({drawer:!1,rail:!1,appConfig:{title:"Vuetify App"},mdAndDown:!0,menu:[{name:"home",path:"/",meta:{menu:{title:"Главная",icon:"mdi-home"}}}],theme:"light",authState:{isLoggedIn:!0,info:{user:{last_name:"Иванов",first_name:"Иван",email:"wQwJc@example.com"}}}}),methods:{onClick(){this.theme=this.theme==="light"?"dark":"light"},onCLickLogout(){this.authState.isLoggedIn=!1}},template:`<v-app v-if="authState.isLoggedIn" :theme="theme">
    <v-app-bar 
      v-if="mdAndDown"
      :title="appConfig.title"
    >
      <template #prepend>
        <v-app-bar-nav-icon 
          variant="text"
          @click.stop="drawer = !drawer"
        />
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :rail="mdAndDown ?  rail : false"
      permanent
      @click="rail = false"
    >
      <v-list-item 
        prepend-icon="mdi-account-supervisor-circle-outline"
        :title="appConfig.title"
      >
        <template #append>
          <v-btn 
            variant="text" 
            icon="mdi-chevron-left" 
            @click.stop="rail = !rail"
          />
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item 
          v-for="(item, i) in menu" 
          :key="item.name + i" 
          :prependIcon="item.meta.menu.icon"
          :title="item.meta.menu.title"
          link
          :to="item.path + '/'"
        />
      </v-list>


      <template #append>
        <v-divider />
        <v-list-item
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" 
          :title="theme === 'light' ? 'Светлая' : 'Темная'" 
          @click="onClick"
        />
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/lego/1.jpg"
            :title="(authState.info.user || {}).last_name + ' ' + (authState.info.user || {}).first_name"
            :subtitle="(authState.info.user || {}).email"
          ></v-list-item>
        </v-list>
        <v-list-item
          prepend-icon="mdi-logout-variant"
          title="Выйти"
          @click="onCLickLogout"
        />
      </template>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>`})};var a,r,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      RouterView: {
        template: "здесь будет router-view"
      }
    },
    setup() {
      return {
        ...args
      };
    },
    template: \`<VApp>
    <VAppBar>
      <VAppBarTitle>Application</VAppBarTitle>
    </VAppBar>

    <VMain>
      content
    </VMain>
  </VApp>\`
  })
}`,...(p=(r=t.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};var o,l,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      RouterView: {
        template: "здесь будет router-view"
      }
    },
    setup() {
      return {
        ...args
      };
    },
    template: \` <v-app>
    <v-container class="fill-height">
      <v-row 
        align="center"
        justify="center"
        class="fill-height"
      >
        <router-view />
      </v-row>
    </v-container>
  </v-app>\`
  })
}`,...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var m,u,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      RouterView: {
        template: "здесь будет router-view"
      }
    },
    setup() {
      return {
        ...args
      };
    },
    data: () => ({
      drawer: false,
      rail: false,
      appConfig: {
        title: "Vuetify App"
      },
      mdAndDown: true,
      menu: [{
        name: "home",
        path: "/",
        meta: {
          menu: {
            title: "Главная",
            icon: "mdi-home"
          }
        }
      }],
      theme: "light",
      authState: {
        isLoggedIn: true,
        info: {
          user: {
            last_name: "Иванов",
            first_name: "Иван",
            email: "wQwJc@example.com"
          }
        }
      }
    }),
    methods: {
      onClick() {
        this.theme = this.theme === "light" ? "dark" : "light";
      },
      onCLickLogout() {
        this.authState.isLoggedIn = false;
      }
    },
    template: \`<v-app v-if="authState.isLoggedIn" :theme="theme">
    <v-app-bar 
      v-if="mdAndDown"
      :title="appConfig.title"
    >
      <template #prepend>
        <v-app-bar-nav-icon 
          variant="text"
          @click.stop="drawer = !drawer"
        />
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :rail="mdAndDown ?  rail : false"
      permanent
      @click="rail = false"
    >
      <v-list-item 
        prepend-icon="mdi-account-supervisor-circle-outline"
        :title="appConfig.title"
      >
        <template #append>
          <v-btn 
            variant="text" 
            icon="mdi-chevron-left" 
            @click.stop="rail = !rail"
          />
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item 
          v-for="(item, i) in menu" 
          :key="item.name + i" 
          :prependIcon="item.meta.menu.icon"
          :title="item.meta.menu.title"
          link
          :to="item.path + '/'"
        />
      </v-list>


      <template #append>
        <v-divider />
        <v-list-item
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" 
          :title="theme === 'light' ? 'Светлая' : 'Темная'" 
          @click="onClick"
        />
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/lego/1.jpg"
            :title="(authState.info.user || {}).last_name + ' ' + (authState.info.user || {}).first_name"
            :subtitle="(authState.info.user || {}).email"
          ></v-list-item>
        </v-list>
        <v-list-item
          prepend-icon="mdi-logout-variant"
          title="Выйти"
          @click="onCLickLogout"
        />
      </template>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>\`
  })
}`,...(c=(u=i.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const x=["OnlyVAppBar","ClearScreen","Admin"];export{i as Admin,n as ClearScreen,t as OnlyVAppBar,x as __namedExportsOrder,L as default};
