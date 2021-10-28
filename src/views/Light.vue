<template lang="html">
  <div class="flex flex-row flex-nowrap w-screen h-screen overflow-hidden bg-light text-gray absolute top-0 left-0">
    <div class="overflow-y-scroll overflow-x-hidden h-screen flex-grow scroller">
      <Home ref="home" />
      <Work ref="work" />
      <Me ref="me" />
    </div>
    <Nav class="w-navbar" @navigate="navigate($event)"/>
  </div>
</template>

<script>
import Vue from 'vue';
import Nav from "@/components/Light/Nav.vue";
import Home from "@/components/Light/Home.vue";
import Work from "@/components/Light/Work.vue";
import Me from "@/components/Light/Me.vue";
export default Vue.extend({
  name: "Light",
  components: {
    Nav,
    Home,
    Work,
    Me,
  },
  methods: {
    navigate: function(to) {
      console.log(to);
      console.log(this.$refs[to]);
      (this.$refs[to].$el).scrollIntoView();
    }
  },
});
</script>

<style lang="css" scoped>

</style>
