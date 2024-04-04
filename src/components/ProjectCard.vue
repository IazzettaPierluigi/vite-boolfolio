<template>
    <div class="project-card">
        <h2>{{ project.title }}</h2>
        <img :src="project.img" alt="Project Image">
        <p>descrizione progetto: <span style="color: red;">{{ project.description }}</span></p>
        <!-- Aggiungi qui qualsiasi altra informazione del progetto che vuoi visualizzare -->
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        project: {
            type: Object,
            required: true
        }
    }

}
</script>

<style scoped>
.project-card {
    border: 1px solid grey;
    width: 300px;
    text-align: center;
}
</style>