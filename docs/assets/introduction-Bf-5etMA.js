import{ae as t,af as p}from"./index-C1HKtr1h.js";import{u as s}from"./index-DBboPICV.js";import"./iframe-hdOiOemZ.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./index-DLgkWgLR.js";import"./index-DrFu-skq.js";function i(n){const e={code:"code",h2:"h2",pre:"pre",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Configure your project"}),`
`,t.jsx(e.h2,{id:"indexhtml",children:"index.html"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link
      href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css"
      rel="stylesheet"
      />
    <link
      href="https://cdn.jsdelivr.net/npm/vuetify@3.0.5/dist/vuetify.min.css"
      rel="stylesheet"
      />
  </head>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/vuetify@3.0.5/dist/vuetify.min.js"><\/script>
    <script type="text/x-template" id="app-template">
      <v-app>
        <v-card
          class="mx-auto"
          width="400"
          append-icon="mdi-human-greeting"
        >
          <template v-slot:title>
            Title
          </template>
          <v-card-text>
            Description
          </v-card-text>
        </v-card>
      </v-app>
    <\/script>
    <script>
      const { createApp } = Vue;
      const { createVuetify } = Vuetify;
      
      const vuetify = createVuetify();
      
      const app = createApp({
        template: "#app-template", 
      })
        .use(vuetify)
        .mount("#app");
    <\/script>
  </body>
</html>
`})})]})}function h(n={}){const{wrapper:e}={...s(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}export{h as default};
