<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav-bar></nav-bar>
  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    }
  },
}

</script>

<style>

</style>
