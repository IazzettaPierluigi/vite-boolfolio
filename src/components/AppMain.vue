<script>
import axios from 'axios';

export default {
  name: "AppMain",

  data() {
    return {

    }
  },

  methods: {
    getProjects() {
      axios.get('http://127.0.0.1:8000/api/test').then(res => {
        console.log(res.data.projects)
      })
    }
  },

  mounted() {
    this.getProjects();
  }


}
</script>

<template>
  <main>
    <p>projects</p>
  </main>

</template>

<style scoped></style>
