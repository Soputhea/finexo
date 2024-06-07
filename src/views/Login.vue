<template>
    <div class="container ">
        <div class="row align-items-center">
            <div class="col-sm-6 align-items-start">
                <Form @submit="handleSubmit">
                    <!-- Email input er-->
                    <div class="form-outline ">
                        <label class="form-label" for="form2Example1">Email address</label>
                        <Field type="email" name="email" :rules="emailRule" class="form-control" v-model="email" />
                        <ErrorMessage name="email" class="error" />

                    </div>

                    <!-- Password input -->
                    <div class="form-outline">
                        <label class="form-label" for="form2Example2">Password</label>
                        <Field type="password" name="password" :rules="passwordRule" class="form-control"
                            v-model="password" />
                        <ErrorMessage name="password" class="error" />
                    </div>


                    <!-- Submit button -->
                    <button type="submit" class="btn btn-primary btn-block mb-4">Submit</button>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

export default {
    data() {
        return {
            email: '',
            password: '',
            emailRule: Yup.string().email().required(),
            passwordRule: Yup.string().min(6).required(),
        }
    },
    components: { Form, Field, ErrorMessage },
    methods: {
        async handleSubmit() {
            try {
                const { data } = await axios.post("http://172.23.128.93:3000/register", {
                    email: this.email,
                    password: this.password
                });
                console.log('Login succssful', data)
                // if (data.pass == "true") {
                //     this.$router.push("/")
                // } else {
                //     this.$router.push("/login")
                // }
            } catch (error) {
                console("get failed:", error);
            }
        },
    }
}
</script>

<style>
.error {
    color: brown;
}
</style>