<template lang="html">
  <div class="flex flex-col h-full page justify-center">
    <div class="flex flex-row ml-left-pad">
      <div class="w-content flex flex-col">
        <h1 class="font-thin font-sans text-5xl mb-7">Hi! my name is Timmy 👋</h1>

        <div class="my-1">
          I'm building a workspace for communication <a class="font-bold" href="https://kryx.co">@kryx.co</a>.
        </div>

        <div class="my-1">
          Communmity building
          <a class="font-bold" href="https://www.anvilstartups.com/">@The Anvil</a>,
          Purdue's hub for students building dope sh*t
        </div>
        <div class="my-1"> </div>
        <div class="my-1">
          Vibing between Purdue and San Francisco
        </div>
        <div class="my-1">
          Come say hi on <a href="https://twitter.com/talltimofficial">twitter</a> :)
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
