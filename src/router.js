import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';

import ProjectList from './pages/ProjectList.vue';

import SingleProject from './pages/SingleProject.vue'

import ContactUs from './pages/ContactUs.vue'



const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },

        {
            path: '/blog',
            name: 'blog',
            component: ProjectList
        },

        {
            path: '/blog/:slug',
            name: 'project',
            component: SingleProject
        },
        {
            path: '/contact-us',
            name: 'contact-us',
            component: ContactUs

        },
    ]
});

export { router };