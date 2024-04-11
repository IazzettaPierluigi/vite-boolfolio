<template>

    <div>
        <h2>contact form</h2>

        <div class="alert alert-success " v-if="success" role="alert">
            mesasggio inviato correttamente
        </div>

        <div>
            <form @submit.prevent="sendForm()">
                <div>
                    <input type="text" class="form-control" :class="{ 'is-invalid ': errors.name }" name="name"
                        placeholder="inserisci il tuo nome" v-model="name">

                    <p v-for="(error, index) in error.name" :key='`message-errors-${index}`' class="invalid-feedback">
                        {{ error }}
                    </p>
                </div>


                <div>
                    <input type="email" class="form-control" :class="{ 'is-invalid ': errors.email }" name="name"
                        placeholder="inserisci la tua mail" v-model="email">

                    <p v-for="(error, index) in error.email" :key='`message-errors-${index}`' class="invalid-feedback">
                        {{ error }}
                    </p>
                </div>

                <div>
                    <textarea class="form-control" :class="{ 'is-invalid ': errors.message }" v-model="message"
                        name="message" id="message" cols="30" rows="10"></textarea>

                    <p v-for="(error, index) in error.message" :key='`message-errors-${index}`'
                        class="invalid-feedback">
                        {{ error }}
                    </p>
                </div>

                <button class="btn btn-primary" type="submit">Manda</button>
            </form>
        </div>

    </div>
</template>

<script>
import { Axios } from 'axios';
import { store } from '../store.js';

export default {
    name: 'ContactForm',

    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            errors: {},
            success: false
        }
    },

    methods: {
        sendForm() {
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }

            this.errors = {};

            axios.post(`${this.store.apiBaseUrl / api / contacts}`, data).then(res => {

                this.success = res.data.errors.success;

                if (!this.success) {
                    this.errors = res.data.errors
                } else {
                    this.name = ''
                    this.email = ''
                    this.message = ''
                }


            })
        }
    }
}
</script>

<style scoped></style>