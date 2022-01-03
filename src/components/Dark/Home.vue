<template lang="html">
  <div class="flex flex-col h-full page justify-center">
    <div class="flex flex-row ml-left-pad">
      <div class="w-content flex flex-col">
        <h1 class="font-medium font-serif text-7xl mb-7">

          <div class="inline-block bg-gradient-to-r from-fuchsia-500 to-amber-400 via-purple-400 bg-clip-text text-transparent py-4">
            howdy! i'm Timmy
          </div> 👋
        </h1>

        <div class="text-2xl pb-4">
          I'm manifesting a cs student with healthy work life balance
        </div>

        <div class=" text-2xl">
          Currently:
        </div>

        <div class="text-lg pl-4">
          🏗️ building a workspace for people who work with people
          <a class="underline italic bold cursor-pointer" href="https://kryx.co">@ kryx.co</a>
          <br>
          🎨 exploring web3
          <a class="underline italic bold cursor-pointer" href="https://twitter.com/developer_dao">@ developer dao</a>
          <br>
        </div>

      </div>
      <div class="flex-grow">
        <!-- Images go here -->
        <!-- <img src="@/assets/night-profile.jpg" alt="" class="object-contain h-36 relative"/> -->
      </div>
    </div>
  </div>
  <!--
  <div class="flex flex-col page">
    <div class="flex flex-row pb-1/12 items-stretch flex-grow h-full relative">

      <div class="mx-5 flex flex-col flex-nowrap flex-grow justify-center items-center">
        <div class="inline-block font-serif font-light text-8xl text-center  py-4">
          Howdy.
          <br />
          I'm Timmy
        </div>
        <div>
          Currently under construction 🏗️
        </div>
      </div>
    </div>
  </div>
-->
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: "Home",
  methods: {
    navigate: function(to) {
      this.$emit('navigate', to);
    }
  }
});
</script>

<style lang="css" scoped>
</style>
