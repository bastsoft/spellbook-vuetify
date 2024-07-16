<template>
  <slot :data="data" :loading="loading" :items="items" :totalItems="totalItems"> 
  </slot>
</template>

<script>
export default{
  name: 'ds-swapi',
  data: () => ({
    data: null,
    loading: false,
  }),
  props: {
    resources: {
      type: String,
      default: ''
    },
    page: {
      type: Number,
      default: 1
    }
  },
  watch: {
    page: {
      handler(){
        this.fetchData();
      },
      immediate: true
    }
  },
  computed: {
    items(){
      return (this.data || {}).results || [];
    },
    totalItems(){
      return (this.data || {}).count || 0;
    }
  },
  methods: {
    fetchData(){
      this.loading = true;
      const resourcesPath = this.resources ? `${this.resources}/` : '';
      const page = this.page > 1 ? `?page=${this.page}` : '';

      fetch(`https://swapi.dev/api/${resourcesPath}${page}`)
        .then(r => r.json())
        .then(data => {
          this.data = data;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
}
</script>