<script>
import axios from 'axios';

import ProjectCard from './ProjectCard.vue'

export default {
  name: "AppMain",

  components: {
    ProjectCard
  },

  data() {
    return {
      arrayProjects: []
    }
  },

  methods: {
    getProjects() {
      axios.get('http://127.0.0.1:8000/api/test').then(res => {

        console.log(res.data.projects)

        this.arrayProjects = res.data.projects

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

    <div v-for="project in arrayProjects" :key="project.id">
      <ProjectCard :project="project" />
    </div>
  </main>

</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  gap: 50px;
}
</style>
