<template lang="html">
  <div class="flex flex-col h-full page justify-center">
    <div class="flex flex-row ml-left-pad">
      <div class="w-content flex flex-col">
        <h1 class="font-thin font-sans text-5xl mb-7">A little about me...</h1>

        <div class="font-light my-2">
          I love learning.
          Right now I'm learning how to make beautiful renders on blender.
          Often you can also find me reading a book or taking on small side projects.
        </div>
        <div class="font-light my-2">
          Outside of work you can often catch me on my skateboard praciticing tricks or just riding around.<br>
          or, if it's earier in the morning, sipping tea with homies 🍵
        </div>
        <div class="font-light my-2">
          
        </div>

      </div>
      <div class="flex-grow">
        <!-- Images go here -->
      </div>
    </div>
  </div>
  <!--
  <div class="flex flex-col page">
    <div class="flex flex-row pb-1/12 items-stretch flex-grow h-full relative">
      <img src="@/assets/profile.jpg" alt="Timothy Hein" class="object-cover object-center rounded-md h-1/2 my-auto"/>
      <div class="mx-5 flex flex-col flex-nowrap">
        <div class="flex-grow"></div>
        <h3 class="text-2xl font-normal">A little about me...</h3>
        <p class="font-light">
          I was born in San Francisco and raised just outside silicon valley.
          Growing up I was exposed to CS early, building my first computer in elementary school
          and slowly continuing to expand my understanding of software and it's applications.
          In addition to computer science I was an avid swimmer, played rugby, and lead brass in my jazz band.
          Coming out of high school I was fortunate to study at Yale for a summer
          where I was exposed to many different cultures and grew to understand my own.
          To give back to the community my final year in school,
          I took the high position in boy scouts and lead my troop of ~150+ through one of our most active six months.
        </p>
        <br />
        <p class="font-light">
          I've gone on to study computer engineering at Purdue, continuing my experiences at Roble by taking on roles of responsability in our startup & accelerator ecosystem.
          A majority of my time is taken up by my own company with the rest split between learning and student groups.
        </p>
        <br />
        <p class="font-semibold">
          I always make the bandwidth to talk to other builders so if you're working on something: reach out!
          I'd love to hear about it and see what I can do.
        </p>
        <br />
        <p class="font-semibold">
          If you're not building I request a twitter DM with a book reccomendation. Cookbooks to philosophy, send me anything.
        </p>
        <div class="flex-grow"></div>
      </div>
      <div class="absolute left-0 right-0 bottom-1/12 text-center flex flex-row justify-around text-4xl px-1/5">
        <a href="https://twitter.com/talltimofficial"><Icon :icon="['fab', 'twitter']" /></a>
        <a href="https://t.me/talltimofficial"><Icon :icon="['fab', 'telegram']" /></a>
      </div>
    </div>
  </div>
-->
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: "Me",
});
</script>

<style lang="css" scoped>
</style>
