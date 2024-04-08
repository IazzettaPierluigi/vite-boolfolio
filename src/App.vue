<script>
// import AppMain from './components/AppMain.vue'

import axios from 'axios';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader
  },

  data() {
    return {

    }
  },

  methods: {

  },

  mounted() {

  }


}
</script>

<template>
  <!-- <h1>questi sono i tuoi projects</h1> -->
  <!-- <AppMain /> -->

  <!-- ciò che scrivo qui diventa statico, quindi presente in tutte le pagine -->

  <!-- header -->
  <AppHeader></AppHeader>

  <!-- questo router inserisce in modo dinamico il contenuto delle pagine  -->
  <router-view></router-view>
</template>

<style scoped></style>
