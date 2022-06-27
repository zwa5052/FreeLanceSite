<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav-bar v-show="showNav"></nav-bar>
  <RouterView />
</template>

<script>
import _ from "lodash"
export default {
  data() {
    return {
      showNav: false
    }
  },

    created() {
        // Shows navbar after 8 seconds (once title animation runs and rest of hero is shown)
        _.delay(() => {
            this.showNav = true
        }, 6000)
    },
}

</script>

<style>

</style>
