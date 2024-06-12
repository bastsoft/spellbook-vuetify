import { VAppBar } from "vuetify/components";

export default {
  title: "uikit/5_templates/App/VAppBar",
  component: VAppBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "[https://vuetifyjs.com/api/v-app-bar](https://vuetifyjs.com/api/v-app-bar)",
      },
    },
    slots: {
      default: {
        name: "default",
        description: "The default Vue slot.",
        "doc-url": "https://vuetifyjs.com/api/v-app-bar#slots",
      },
      image: {
        name: "image",
        description: "Expects the [`v-img`](/components/images/) component.",
        "doc-url": "https://vuetifyjs.com/api/v-app-bar#slots",
      },
      prepend: {
        name: "prepend",
        description: "Adds an item outside the input and before input content.",
        "doc-url": "https://vuetifyjs.com/api/v-app-bar#slots",
      },
      append: {
        name: "append",
        description: "Adds an item inside the input and after input content.",
        "doc-url": "https://vuetifyjs.com/api/v-app-bar#slots",
      },
      title: {
        name: "title",
        description: "Slot for the component's title content.",
        "doc-url": "https://vuetifyjs.com/api/v-app-bar#slots",
      },
      extension: {
        name: "extension",
        description:
          "Slot positioned directly under the main content of the toolbar. Height of this slot can be set explicitly with the **extension-height** prop.",
        "doc-url": "https://vuetifyjs.com/api/v-app-bar#slots",
      },
    },
  },
  argTypes: {
    "v-model": {
      control: {},
    },
    "onUpdate:modelValue": {
      name: "update:modelValue",
      description: "Event that is emitted when the component's model changes.",
      "doc-url": "https://vuetifyjs.com/api/v-app-bar#events",
      arguments: [
        {
          name: "argument",
          type: "[boolean]\n",
        },
      ],
      action: "@update:modelValue",
    },
    image: {
      name: "image",
      description:
        "Specifies a [v-img](/components/images) as the component's background.",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      value: {
        kind: "expression",
        type: "string",
      },
      control: {
        type: "text",
      },
    },
    title: {
      name: "title",
      description: "Specify a title text for the component.",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      value: {
        kind: "expression",
        type: "string",
      },
      control: {
        type: "text",
      },
    },
    flat: {
      name: "flat",
      description: "Removes the component's **box-shadow**.",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      default: "false",
      value: {
        kind: "expression",
        type: "boolean",
      },
      control: "boolean",
    },
    collapse: {
      name: "collapse",
      description:
        "Morphs the component into a collapsed state, reducing its maximum width.",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      default: "false",
      value: {
        kind: "expression",
        type: "boolean",
      },
      control: "boolean",
    },
    modelValue: {
      name: "modelValue",
      description:
        "The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      default: "true",
      value: {
        kind: "expression",
        type: "boolean",
      },
      control: "boolean",
    },
    location: {
      name: "location",
      description: "Aligns the component towards the top or bottom.",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      default: "'top'",
      value: {
        kind: "expression",
        type: "'top' | 'bottom'",
      },
      control: "select",
      options: [null, "top", "bottom"],
    },
    absolute: {
      name: "absolute",
      description: "Applies position: absolute to the component.",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      default: "false",
      value: {
        kind: "expression",
        type: "boolean",
      },
      control: "boolean",
    },
    color: {
      name: "color",
      description:
        "Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      value: {
        kind: "expression",
        type: "string",
      },
      control: {
        type: "text",
      },
    },
    density: {
      name: "density",
      description: "Adjusts the vertical height used by the component.",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      default: "'default'",
      value: {
        kind: "expression",
        type: "'default' | 'prominent' | 'comfortable' | 'compact'",
      },
      control: "select",
      options: [null, "default", "prominent", "comfortable", "compact"],
    },
    extended: {
      name: "extended",
      description:
        "Use this prop to increase the height of the toolbar _without_ using the `extension` slot for adding content. May be used in conjunction with the **extension-height** prop, and any of the other props that affect the height of the toolbar, e.g. **prominent**, **dense**, etc., **WITH THE EXCEPTION** of **height**.",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      default: "false",
      value: {
        kind: "expression",
        type: "boolean",
      },
      control: "boolean",
    },
    extensionHeight: {
      name: "extensionHeight",
      description: "Designate an explicit height for the `extension` slot.",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      default: "48",
      value: {
        kind: "expression",
        type: "string | number",
      },
      control: "number",
    },
    floating: {
      name: "floating",
      description: "Applies **display: inline-flex** to the component.",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      default: "false",
      value: {
        kind: "expression",
        type: "boolean",
      },
      control: "boolean",
    },
    height: {
      name: "height",
      description:
        "Designates a specific height for the toolbar. Overrides the heights imposed by other props, e.g. **prominent**, **dense**, **extended**, etc.",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      default: "64",
      value: {
        kind: "expression",
        type: "string | number",
      },
      control: "number",
    },
    border: {
      name: "border",
      description:
        "Designates the **border-radius** applied to the component. This can be **xs**, **sm**, **md**, **lg**, **xl**.",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      default: "false",
      value: {
        kind: "expression",
        type: "string | number | boolean",
      },
      control: "number",
    },
    elevation: {
      name: "elevation",
      description:
        "Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      value: {
        kind: "expression",
        type: "string | number",
      },
      control: "number",
    },
    rounded: {
      name: "rounded",
      description:
        "Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      value: {
        kind: "expression",
        type: "string | number | boolean",
      },
      control: "number",
    },
    tile: {
      name: "tile",
      description: "Removes any applied **border-radius** from the component.",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      default: "false",
      value: {
        kind: "expression",
        type: "boolean",
      },
      control: "boolean",
    },
    tag: {
      name: "tag",
      description: "Specify a custom tag used on the root element.",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      default: "'header'",
      value: {
        kind: "expression",
        type: "string",
      },
      control: {
        type: "text",
      },
    },
    theme: {
      name: "theme",
      description:
        "Specify a theme for this component and all of its children.",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      value: {
        kind: "expression",
        type: "string",
      },
      control: {
        type: "text",
      },
    },
    name: {
      name: "name",
      description: "Assign a specific name for layout registration.",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      value: {
        kind: "expression",
        type: "string",
      },
      control: {
        type: "text",
      },
    },
    order: {
      name: "order",
      description:
        "Adjust the order of the component in relation to its registration order.",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      default: "0",
      value: {
        kind: "expression",
        type: "string | number",
      },
      control: "number",
    },
    scrollTarget: {
      name: "scrollTarget",
      description:
        "The element to target for scrolling events. Uses `window` by default.",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      value: {
        kind: "expression",
        type: "string",
      },
      control: {
        type: "text",
      },
    },
    scrollThreshold: {
      name: "scrollThreshold",
      description:
        "The amount of scroll distance down before **scroll-behavior** activates.",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      default: "300",
      value: {
        kind: "expression",
        type: "string | number",
      },
      control: "number",
    },
    scrollBehavior: {
      name: "scrollBehavior",
      description:
        "Specify an action to take when the scroll position of **scroll-target** reaches **scroll-threshold**. Accepts any combination of hide, inverted, collapse, elevate, and fade-image. Multiple values can be used, separated by a space.",
      "doc-url": "https://vuetifyjs.com/api/VAppBar#props",
      value: {
        kind: "expression",
        type: "| (string & {})\n  | 'hide'\n  | 'inverted'\n  | 'collapse'\n  | 'elevate'\n  | 'fade-image'",
      },
      control: "select",
      options: [
        null,
        "(string&{})\n",
        "hide\n",
        "inverted\n",
        "collapse\n",
        "elevate\n",
        "fade-image",
      ],
    },
  },
};

export const Default = {
  args: {},
  render: (args) => ({
    setup() {
      return { ...args };
    },
    template: `<VApp>
      <VAppBar :elevation="2">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title>Application Bar</v-app-bar-title>
      </VAppBar>
  </VApp>`,
  }),
};

export const threeButtons = {
  args: {},
  render: () => ({
    template: `<VApp>
    <VAppBar
    color="teal-darken-4"
    >
    <template v-slot:prepend>
      <v-icon
        color="error"
        icon="mdi-information"
        size="x-large"
      ></v-icon>
    </template>
    <v-app-bar-title>Title</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon="mdi-magnify">
    </v-btn>

    <v-btn icon="mdi-heart">
    </v-btn>

    <v-btn icon="mdi-dots-vertical">
    </v-btn>
  </VAppBar>
  </VApp>`,
  }),
};

export const FlatWithContainer = {
  args: {},
  render: (args) => ({
    setup() {
      return { ...args };
    },
    template: `<VApp>
      <VAppBar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar
          class="me-4 "
          color="grey-darken-1"
          size="32"
        ></v-avatar>

        <v-btn
          text="link"
          variant="text"
        ></v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="160">
          <v-text-field
            density="compact"
            label="Search"
            rounded="lg"
            variant="solo-filled"
            flat
            hide-details
            single-line
          ></v-text-field>
        </v-responsive>
      </v-container>
    </VAppBar>
  </VApp>`,
  }),
};
