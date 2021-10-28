<template lang="html">
  <div>
    <Light v-if="mode == 'light'" />
    <Dark v-if="mode == 'dark'" />
  </div>
</template>

<script>
import Vue from 'vue';
import Light from './views/Light.vue';
import Dark from './views/Dark.vue';
export default Vue.extend({
  name: 'App',
  components: {
    Light,
    Dark
  },
  created: function() {
    console.log(this);
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.$store.dispatch('application/setMode', 'dark');
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      const mode = e.matches ? 'dark' : 'light';
      this.$store.dispatch('application/setMode', mode);
    });
    this.$store.dispatch('crypto/loadWeb3');
  },
  computed: {
    mode: function() {
      return this.$store.getters['application/getMode']
    }
  }
})
</script>

<style lang="css">
</style>
