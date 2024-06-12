import { VAppBarNavIcon } from "vuetify/components";

export default {
  title: "uikit/5_templates/App/VAppBarNavIcon",
  component: VAppBarNavIcon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "[https://vuetifyjs.com/api/v-app-bar-nav-icon](https://vuetifyjs.com/api/v-app-bar-nav-icon)",
      },
    },
    slots: {
      default: {
        name: "default",
        description: "The default Vue slot.",
        "doc-url": "https://vuetifyjs.com/api/v-app-bar-nav-icon#slots",
      },
      prepend: {
        name: "prepend",
        description: "Adds an item outside the input and before input content.",
        "doc-url": "https://vuetifyjs.com/api/v-app-bar-nav-icon#slots",
      },
      append: {
        name: "append",
        description: "Adds an item inside the input and after input content.",
        "doc-url": "https://vuetifyjs.com/api/v-app-bar-nav-icon#slots",
      },
      loader: {
        name: "loader",
        description:
          "Slot for custom loader (displayed when [loading](#props-loading) prop is equal to true).",
        "doc-url": "https://vuetifyjs.com/api/v-app-bar-nav-icon#slots",
      },
    },
  },
  argTypes: {
    symbol: {
      name: "symbol",
      description:
        "The [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) used to hook into group functionality for components like [v-btn-toggle](/components/btn-toggle) and [v-bottom-navigation](/components/bottom-navigations/).",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: "any",
      },
      control: {
        type: "text",
      },
    },
    flat: {
      name: "flat",
      description:
        "Removes the button box shadow. This is different than using the 'flat' variant.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      default: "false",
      value: {
        kind: "expression",
        type: "boolean",
      },
      control: "boolean",
    },
    active: {
      name: "active",
      description:
        "Controls the **active** state of the item. This is typically used to highlight the component.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: "boolean",
      },
      control: "boolean",
    },
    baseColor: {
      name: "baseColor",
      description: "Sets the color of component when not focused.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: "string",
      },
      control: {
        type: "text",
      },
    },
    prependIcon: {
      name: "prependIcon",
      description:
        "Creates a [v-icon](/api/v-icon/) component in the **prepend** slot before default content.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: "any",
      },
      control: {
        type: "text",
      },
    },
    appendIcon: {
      name: "appendIcon",
      description:
        "Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: "any",
      },
      control: {
        type: "text",
      },
    },
    block: {
      name: "block",
      description: "Expands the button to 100% of available space.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      default: "false",
      value: {
        kind: "expression",
        type: "boolean",
      },
      control: "boolean",
    },
    readonly: {
      name: "readonly",
      description:
        "Puts the button in a readonly state. Cannot be clicked or navigated to by keyboard.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      default: "false",
      value: {
        kind: "expression",
        type: "boolean",
      },
      control: "boolean",
    },
    slim: {
      name: "slim",
      description: "Reduces padding to 0 8px.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      default: "false",
      value: {
        kind: "expression",
        type: "boolean",
      },
      control: "boolean",
    },
    stacked: {
      name: "stacked",
      description: "Displays the button as a flex-column.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      default: "false",
      value: {
        kind: "expression",
        type: "boolean",
      },
      control: "boolean",
    },
    ripple: {
      name: "ripple",
      description: "Applies the [v-ripple](/directives/ripple) directive.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      default: "true",
      value: {
        kind: "expression",
        type: "boolean | { class: string }",
      },
      control: "select",
      options: [null, "{class:string}"],
    },
    value: {
      name: "value",
      description:
        "The value used when the component is selected in a group. If not provided, a unique ID will be used.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: "any",
      },
      control: {
        type: "text",
      },
    },
    text: {
      name: "text",
      description: "Specify content text for the component.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: "string",
      },
      control: {
        type: "text",
      },
    },
    border: {
      name: "border",
      description:
        "Designates the **border-radius** applied to the component. This can be **xs**, **sm**, **md**, **lg**, **xl**.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      default: "false",
      value: {
        kind: "expression",
        type: "string | number | boolean",
      },
      control: "number",
    },
    density: {
      name: "density",
      description: "Adjusts the vertical height used by the component.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      default: "'default'",
      value: {
        kind: "expression",
        type: "'default' | 'comfortable' | 'compact'",
      },
      control: "select",
      options: [null, "default", "comfortable", "compact"],
    },
    height: {
      name: "height",
      description: "Sets the height for the component.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: "string | number",
      },
      control: "number",
    },
    maxHeight: {
      name: "maxHeight",
      description: "Sets the maximum height for the component.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: "string | number",
      },
      control: "number",
    },
    maxWidth: {
      name: "maxWidth",
      description: "Sets the maximum width for the component.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: "string | number",
      },
      control: "number",
    },
    minHeight: {
      name: "minHeight",
      description: "Sets the minimum height for the component.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: "string | number",
      },
      control: "number",
    },
    minWidth: {
      name: "minWidth",
      description: "Sets the minimum width for the component.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: "string | number",
      },
      control: "number",
    },
    width: {
      name: "width",
      description: "Sets the width for the component.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: "string | number",
      },
      control: "number",
    },
    elevation: {
      name: "elevation",
      description:
        "Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: "string | number",
      },
      control: "number",
    },
    disabled: {
      name: "disabled",
      description: "Removes the ability to click or target the component.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      default: "false",
      value: {
        kind: "expression",
        type: "boolean",
      },
      control: "boolean",
    },
    selectedClass: {
      name: "selectedClass",
      description:
        "Configure the active CSS class applied when an item is selected.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: "string",
      },
      control: {
        type: "text",
      },
    },
    loading: {
      name: "loading",
      description:
        "Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      default: "false",
      value: {
        kind: "expression",
        type: "string | boolean",
      },
      control: "select",
      options: [null, "string"],
    },
    location: {
      name: "location",
      description:
        "Specifies the component's location. Can combine by using a space separated string.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: '<a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/anchor.ts#L8-L14" target="_blank">Anchor</a>',
      },
      control: {
        type: "text",
      },
    },
    position: {
      name: "position",
      description: "Sets the position for the component.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: "'static' | 'relative' | 'fixed' | 'absolute' | 'sticky'",
      },
      control: "select",
      options: [null, "static", "relative", "fixed", "absolute", "sticky"],
    },
    rounded: {
      name: "rounded",
      description:
        "Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: "string | number | boolean",
      },
      control: "number",
    },
    tile: {
      name: "tile",
      description: "Removes any applied **border-radius** from the component.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      default: "false",
      value: {
        kind: "expression",
        type: "boolean",
      },
      control: "boolean",
    },
    href: {
      name: "href",
      description:
        "Designates the component as anchor and applies the **href** attribute.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: "string",
      },
      control: {
        type: "text",
      },
    },
    replace: {
      name: "replace",
      description:
        "Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [replace](https://router.vuejs.org/api/#replace) prop on the vue-router documentation.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      default: "false",
      value: {
        kind: "expression",
        type: "boolean",
      },
      control: "boolean",
    },
    exact: {
      name: "exact",
      description:
        "Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      default: "false",
      value: {
        kind: "expression",
        type: "boolean",
      },
      control: "boolean",
    },
    to: {
      name: "to",
      description:
        "Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: "RouteLocationRaw",
      },
      control: {
        type: "text",
      },
    },
    size: {
      name: "size",
      description:
        "Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: **x-small**, **small**, **default**, **large**, and **x-large**.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      default: "'default'",
      value: {
        kind: "expression",
        type: "string | number",
      },
      control: "number",
    },
    tag: {
      name: "tag",
      description: "Specify a custom tag used on the root element.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      default: "'button'",
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
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: "string",
      },
      control: {
        type: "text",
      },
    },
    color: {
      name: "color",
      description:
        "Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      value: {
        kind: "expression",
        type: "string",
      },
      control: {
        type: "text",
      },
    },
    variant: {
      name: "variant",
      description: "Applies a distinct style to the component.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      default: "'text'",
      value: {
        kind: "expression",
        type: "'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain'",
      },
      control: "select",
      options: [null, "flat", "text", "elevated", "tonal", "outlined", "plain"],
    },
    icon: {
      name: "icon",
      description:
        "Apply a specific icon using the [v-icon](/components/icons/) component. The button will become _round_.",
      "doc-url": "https://vuetifyjs.com/api/VAppBarNavIcon#props",
      default: "'$menu'",
      value: {
        kind: "expression",
        type: "any",
      },
      control: {
        type: "text",
      },
    },
  },
};

export const Default = {
  args: {},
  render: (args) => ({
    setup() {
      return { ...args,}
    }, 
    template: `<v-app-bar-nav-icon></v-app-bar-nav-icon>`,
  })
};