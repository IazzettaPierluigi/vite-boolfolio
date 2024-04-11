<script>
import axios from 'axios';

import ProjectCard from './ProjectCard.vue'

export default {
    name: "AppHeader",


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
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Boolfolio</a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <!-- utilizzo tag router-link al posto del tag a -->
                        <router-link :to="{ name: 'home' }" class="nav-link">
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'blog' }" class="nav-link">
                            Blog
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link :to="{ name: 'contact-us' }" class="nav-link">
                            Contattaci
                        </router-link>
                    </li>

                </ul>

            </div>
        </div>
    </nav>

</template>

<style scoped></style>
