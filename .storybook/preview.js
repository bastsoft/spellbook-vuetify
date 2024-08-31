/** @type { import('@storybook/vue3').Preview } */

import { setup } from '@storybook/vue3';
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

setup((app) => {
  app.use(createVuetify({
    components,
    directives
  }));
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
