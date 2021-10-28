<template lang="html">
  <div class="flex flex-row flex-nowrap w-screen h-screen overflow-hidden bg-night text-moon bg-night text-moon font-serif absolute top-0 left-0">
    <div class="overflow-y-scroll overflow-x-hidden h-screen flex-grow scroller">
      <Home ref="home" />
      <Projects ref="projects" />
      <!-- <Projects ref="projects" /> -->
    </div>
    <Nav class="w-navbar" @navigate="navigate($event)"/>
  </div>
</template>

<script>
import Vue from 'vue';
import Nav from "@/components/Dark/Nav.vue";
import Home from "@/components/Dark/Home.vue";
import Projects from "@/components/Dark/Projects.vue";
//import Projects from "@/components/Dark/Projects.vue";
export default Vue.extend({
  name: "DarkHome",
  components: {
    Nav,
    Home,
    Projects,
},
methods: {
  navigate: function(to) {
    console.log(to);
    console.log(this.$refs[to]);
    (this.$refs[to].$el).scrollIntoView();
  }
}
});
</script>

<style lang="css" scoped>
</style>
