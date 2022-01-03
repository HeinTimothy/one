<template lang="html">
  <div class="flex flex-col h-full page justify-center">
    <div class="flex flex-row ml-left-pad">
      <div class="w-content flex flex-col">
        <div class="font-thin font-sans text-5xl mb-7">My Experience</div>
        <div class="mt-4">
          <div class="text-xl relative">
            <a href="https://kryx.co" class="font-bold">Keryx</a> - <span class="font-light italic">Co-Founder</span>
            <div class="float-right text-sm pr-2">
              June 2021
            </div>
          </div>
          <div class="font-light">
            Building a workspace for deal based business to manage emails, calendar, and document sharing.
            Responsible for product management and front end development.
          </div>
        </div>
        <div class="mt-4">
          <div class="text-xl">
            <a href="https://robleventures.com/" class="font-bold">Roble Ventures</a> - <span class="font-light italic">Founding Analyst</span>
            <div class="float-right text-sm pr-2">
              March 2020 - December 2020
            </div>
          </div>
          <div class="font-light">
            Venture capital firm focused on education & human enablement.
            Developed the investment thesis and sourced LPs for the first fund.
          </div>
        </div>
        <div class="mt-4">
          <div class="text-xl relative">
            <span class="font-bold">Purdue University</span> - <span class="font-light italic">Comupter Engineering & Philosophy</span>
            <div class="float-right text-sm pr-2">
              class 2024
            </div>
          </div>
          <div class="font-light">Community <a href="https://www.anvilstartups.com/" class="underline italic">@ The Anvil</a> : Purdue's student run startup accelerator</div>
          <div class="font-light">Experience Executive <a href="https://boilermake.org/" class="underline italic">@ Boilermake</a> : Purdue's premier hackathon</div>
        </div>
        <div class="mt-4">
          <div class="text-xl">
            <a href="https://genzscouts.com/" class="font-bold">Gen Z Scouts</a> - <span class="font-light italic">Fellow</span>
            <div class="float-right text-sm pr-2">
              Summer 2021
            </div>
          </div>
        </div>
      </div>
      <div class="flex-grow">
        <img id="keryx" src="@/assets/keryx.svg" alt="Keryx" class="object-contain h-36 relative"/>
        <img id="roble" src="@/assets/roble-ventures.png" alt="Roble Ventures" class="object-contain h-36 relative"/>
        <img id="purdue" src="@/assets/purdue.png" alt="Purdue University" class="object-contain relative"/>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: "Work",
});
</script>

<style lang="css" scoped>

#purdue {
  bottom: 2rem;
  left: 20%;
  height: 8rem;
}

#keryx {
  left: 10%;
  height: 12rem;
}

#roble {
  bottom: 2rem;
  right: 0;
  height: 12rem;
  margin-left: auto;


}

</style>
