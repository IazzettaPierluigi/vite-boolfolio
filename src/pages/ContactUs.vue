<script>
import ContactForm from '../components/ContactForm.vue';


export default {
    name: "ContactUs",

    components: {
        ContactForm
    },

    data() {
        return {
            project: ''
        }
    },

    methods: {


    },

    mounted() {

    }


}
</script>

<template>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <ContactForm></ContactForm>
            </div>
        </div>
    </div>

</template>

<style scoped></style>
