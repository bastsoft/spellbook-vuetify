import DsSwapi from "./ds-swapi.vue"

export default {
  title: 'datasource/ds-swapi',
  component: DsSwapi,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ``
      }
    },
    slots: {}
  },
  argTypes: {},
  render: (args) => ({
    components: { DsSwapi },
    data: () => ({
      ...args,
    }),
    template: `<DsSwapi :resources="resources">
    <template #default="{ data, items, totalItems, loading, loadItems }">
      loading: {{ loading}} <br/>
      totalItems: {{ totalItems }} <br/>
      items : {{ items }} <br/>
      <pre>{{ data }}</pre>
    </template>
</DsSwapi>`
  })
}

export const Default = {
  args: {
  }
}

export const Films = {
  args: {
    resources: "films"
  }
}

export const People = {
  args: {
    resources: "people"
  }
}

export const Planets = {
  args: {
    resources: "planets"
  }
}

export const Species = {
  args: {
    resources: "species"
  }
}

export const Starships = {
  args: {
    resources: "starships"
  }
}

export const Vehicles = {
  args: {
    resources: "vehicles"
  }
}

export const VDataTableServer = {
  args: {
     resources: "people",
     page: 1
  },
  render: (args) => ({
    components: { DsSwapi },
    data: () => ({
      ...args
    }),
    methods: {
      loadItems: function ({ page, itemsPerPage, sortBy }) {
        console.log({ page, itemsPerPage, sortBy });
        this.page = page;
      }
    },
    template: `<DsSwapi :resources="resources" :page="page">
    <template #default="{ items, totalItems, loading }">
      <VDataTableServer
        :items-per-page="items.length"
        :items="items"
        :items-length="totalItems"
        :loading="loading"
        @update:options="loadItems"
     ></VDataTableServer>
    </template>
</DsSwapi>`
})
}