<template>


    <div class="card">
        <img class="card-img-top" :src="`http://127.0.0.1:8000/storage/${project.img}`" alt="Title" />
        <div class="card-body">
            <router-link class="card-title" :to="{ name: 'project', params: { slug: project.slug } }">
                {{ project.title }}
            </router-link>
            <p class="card-text">descrizione progetto: <span style="color: red;">{{ project.description }}</span></p>
        </div>
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