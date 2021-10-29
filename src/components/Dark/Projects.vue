<template lang="html">
  <div class="flex flex-col h-full page justify-center">
    <div class="flex flex-row ml-left-pad">
      <div class="w-content flex flex-col">
        <div class="">

        </div>
      </div>
      <div class="flex-1">
        <!-- Images go here -->
        <div class="flex flex-col items-stretch">
          <div class="flex flex-row justify-center">
            <div class="m-2 whitespace-nowrap overflow-hidden overflow-ellipsis cursor-pointer" @click="connect">
              Tea Room
            </div>
            <div class="flex-1"> </div>
            <div class="flex items-center">
              <div
                v-if="account != null"
                class="text-amber-500 bg-amber-ghost px-2 rounded overflow-hidden overflow-ellipsis"
                :style="{ 'max-width': '160px' }"
              >
                {{ account }}
              </div>
            </div>
            <div className="flex-1"> </div>
            <div class="m-2 cursor-pointer">
              <Icon :icon="['fas', 'arrow-left']" @click="scrollLeft" />
            </div>
            <div class="m-2 cursor-pointer" v-if="this.me == this.account">
              <Icon :icon="['fas', 'plus']" @click="startUpload" />
            </div>
            <div class="m-2 cursor-pointer" v-if="this.me == this.account">
                <Icon :icon="['fas', 'trash-alt']" @click="burn" />
            </div>
            <div class="m-2 cursor-pointer">
              <Icon :icon="['fas', 'arrow-right']" @click="scrollRight" />
            </div>
          </div>
          <!-- Main view -->
          <div class="flex-1">
            <div class="flex flex-col items-center img-h" v-if="brewing">
              <input
                type="text"
                v-model="uri"
                class="rounded px-2 my-2 outline-none img-w bg-moon text-night"
                placeholder="URI"
              >
              <div class="inline-block text-xl rounded px-2 bg-moon text-night cursor-pointer" @click="mint">
                submit
              </div>
            </div>
            <div class="" v-else>
              <img v-if="tokens.length > 0" :src="tokens[view].image" class="img-dimenstions object-cover object-center mx-auto" alt=""/>
              <div v-else class="img-h">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: "Projects",
  data: function() {
    return {
      selected: 0,
      brewing: false,
      owner: false,
      //new token fields
      uri: "",
    }
  },
  computed: {
    me: function() {
      return this.$store.getters['crypto/getMe'];
    },
    account: function() {
      return this.$store.getters['crypto/getAccount'];
    },
    tokens: function() {
      return Object.values(this.$store.getters['crypto/getTokens']);
    }
  },
  methods: {
    //App state
    scrollLeft: function() {
      this.selected = (this.tokens.length + this.selected - 1) % this.tokens.length;
    },

    scrollRight: function() {
      this.selected = (this.selected + 1) % this.tokens.length;
    },

    //Web3
    connect: async function() {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      this.$store.dispatch('crypto/connect', accounts[0]);
    },

    //Managing NFTS
    startUpload: function() {
      this.brewing = true;
    },

    mint: async function() {
      if(this.name.length > 0 && this.description.length > 0) {
        this.$store.dispatch('crypto/brewToken', this.uri);
        this.brewing = false;
        this.image = null;
        this.imageURL = null;
        this.name = "";
        this.description = "";
      }
    },

    burn: async function(tokenId) {
      this.$store.dispatch('crpyto/burn', tokenId);
    }
  },
});
</script>

<style lang="css" scoped>

.img-w {
  width: 350px;
}

.img-h {
  height: 350px;
}

</style>
