<script>
import axios from 'axios';

import ProjectCard from '../components/ProjectCard.vue'

export default {
    name: "ProjectList",

    components: {
        ProjectCard
    },

    data() {
        return {
            arrayProjects: [],
            currentPage: '',
            lastPage: ''
        }
    },

    methods: {
        getProjects(projectApiPage) {
            axios.get('http://127.0.0.1:8000/api/test',
                {
                    params: {
                        page: projectApiPage
                    }
                }

            ).then(res => {

                console.log(res.data.projects)

                this.arrayProjects = res.data.projects.data

                this.currentPage = res.data.projects.current_page

                this.lastPage = res.data.projects.last_page

            })
        }
    },

    mounted() {
        this.getProjects(1);
    }


}
</script>

<template>
    <main class="d-flex flex-column ">
        <div class="container alignitemscen">
            <div class="row justify-content-center ">

                <div class="col-3" v-for="project in arrayProjects" :key="project.id">
                    <ProjectCard :project="project" />
                </div>
            </div>


            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                        <button class="page-link" @click="getProjects(currentPage - 1)">Previous</button>
                    </li>


                    <li class="page-item" v-for=" ( element, index ) in lastPage" :key="index">
                        <button class="page-link" @click="getProjects(element)">{{ element }}</button>
                    </li>

                    <li class="page-item" :class="{ 'disabled': currentPage === lastPage }">
                        <button class="page-link" @click="getProjects(currentPage + 1)">Next</button>
                    </li>
                </ul>
            </nav>

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
