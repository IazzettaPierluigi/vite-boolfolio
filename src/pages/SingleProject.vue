<script>
import axios from 'axios';



export default {
    name: "SingleProject",


    data() {
        return {
            project: ''
        }
    },

    methods: {
        getSingleProject() {
            axios.get(`http://127.0.0.1:8000/api/test/${this.$route.params.slug}`).then(res => {
                if (res.data.success) {
                    this.project = res.data.project
                } else {

                }
            })
        }

    },

    mounted() {
        this.getSingleProject()
    }


}
</script>

<template>
    <div class="container">
        <div class="row justify-content-center ">
            <div class="card col-3">
                <img class="card-img-top" :src="`http://127.0.0.1:8000/storage/${project.img}`" alt="Title" />
                <div class="card-body">
                    <h4 class="card-title">{{ project.title }}</h4>
                    <p class="card-text">{{ project.description }}</p>
                    <p class="card-tex">{{ project.technology }}</p>

                </div>
            </div>

        </div>
    </div>


</template>

<style scoped></style>
