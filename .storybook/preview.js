/** @type { import('@storybook/vue3').Preview } */

import { setup } from '@storybook/vue3';
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from "vuetify/components";
import { compile, h } from 'vue'
import spell from 'my-spellbook/src/spells-core/spell.js'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
const vuetify = createVuetify({})

const spellbook = {
  install: function (vueApp) {
    Object.keys(components).forEach(key => {
      vueApp.component(key,components[key]);
    });
      vueApp.component("Spell", spell({
          compile, 
          h,
          components,
          ctxExt: {}
      }));
  },
}

setup((app) => {
  app.use(vuetify);
  app.use(spellbook);
});

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
