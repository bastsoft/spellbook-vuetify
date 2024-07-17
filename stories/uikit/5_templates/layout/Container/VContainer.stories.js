import { VContainer } from 'vuetify/components';
import dashboarCardsConfig from "./dashboarCards.js"  
  export default {
    title: 'uikit/5_templates/layout/Container/VContainer',
    component: VContainer,
    parameters: {
      docs: {
        description: {
          component: '[https://vuetifyjs.com/api/v-container](https://vuetifyjs.com/api/v-container)'
        }
      },
      slots: {
  "default": {
    "name": "default",
    "description": "The default Vue slot.",
    "doc-url": "https://vuetifyjs.com/api/v-container#slots"
  }
}
    },
    argTypes: {
  "fluid": {
    "name": "fluid",
    "description": "Removes viewport maximum-width size breakpoints.",
    "doc-url": "https://vuetifyjs.com/api/VContainer#props",
    "default": "false",
    "value": {
      "kind": "expression",
      "type": "boolean"
    },
    "control": "boolean"
  },
  "tag": {
    "name": "tag",
    "description": "Specify a custom tag used on the root element.",
    "doc-url": "https://vuetifyjs.com/api/VContainer#props",
    "default": "'div'",
    "value": {
      "kind": "expression",
      "type": "string"
    },
    "control": {
      "type": "text"
    }
  }
},
  }
  
  export const FillHeight = {
    render: () => ({
      template: `	<VContainer class="fill-height">
    <VRow align="center" justify="center" class="fill-height">
      Center
    </VRow>
</VContainer>`
    })
  };

    
    
export const BgSurfaceVariant = {
    render: () => ({
      template: `<VContainer class="bg-surface-variant">
      <VRow no-gutters>
        <VCol>
          <v-sheet class="pa-2 ma-2">
            .v-col-auto
          </v-sheet>
        </VCol>
        <VCol>
          <v-sheet class="pa-2 ma-2">
            .v-col-auto
          </v-sheet>
        </VCol>
  
        <v-responsive width="100%"></v-responsive>
  
        <VCol>
          <v-sheet class="pa-2 ma-2">
            .v-col-auto
          </v-sheet>
        </VCol>
  
        <VCol>
          <v-sheet class="pa-2 ma-2">
            .v-col-auto
          </v-sheet>
        </VCol>
      </VRow>
    </VContainer>`
    })
  };
  
export const DashboarCards = dashboarCardsConfig;