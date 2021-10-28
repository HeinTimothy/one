<template lang="html">
  <div class="flex flex-col h-full page justify-center">
    <div class="flex flex-row ml-left-pad">
      <div class="w-content flex flex-col">
        <h1 class="font-thin font-sans text-5xl mb-7">Hi! my name is Timmy 👋</h1>

        <div class="">
          I'm building a workspace for communication <a class="font-bold" href="https://kryx.co">@kryx.co</a>.
        </div>

        <div class="">
          Vibing between Purdue and San Francisco
        </div>
        <div class="mt-7 flex flex-row items-center">
          <div class="pr-3">
            Exploring the future
          </div>
          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
        </div>

      </div>
      <div class="flex-grow">
        <!-- Images go here -->
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: "Home",
});
</script>

<style lang="css" scoped>


</style>
