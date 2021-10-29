<template lang="html">
  <div class="flex flex-col justify-around px-8">
    <label class="switch">
      <input type="checkbox" v-model="mode">
      <span class="slider round"></span>
    </label>
    <div></div>
    <div class="nav-item" @click="navigate('home')">
      Home
    </div>
    <div class="nav-item" @click="navigate('work')">
      Experience
    </div>
    <div class="nav-item" @click="navigate('me')">
      Me
    </div>
    <!--
    <div class="nav-item">
      Notion
    </div>
    -->
    <div></div>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: "Nav",
  methods: {
    navigate: function(to) {
      this.$emit('navigate', to);
    }
  },
  computed: {
    mode: {
      get () {
        return this.$store.getters['application/getMode']
      },
      set(newMode) {
        this.$store.dispatch('application/setMode', newMode ? 'dark' : 'light');
      }
    }
  }
})
</script>

<style lang="css" scoped>

/* The switch - the box around the slider */
.switch {
  margin-left: auto;
  position: relative;
  display: inline-block;
  width: 32px;
  height: 12px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  @apply bg-gradient-to-r from-fuchsia-500 to-amber-400 via-purple-400;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
  content: "";
  height: 18px;
  width: 18px;
  left: -2px;
  bottom: -3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(18px);
  -ms-transform: translateX(18px);
  transform: translateX(18px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

</style>
