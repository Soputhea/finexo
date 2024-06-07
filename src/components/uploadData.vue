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

                    <div class="mb-3">
                        <label for="" class="form-label">Choose file</label>
                        <input type="file" @change="handleFile" class="form-control" name="" id="" multiple ref="fileupload"
                            placeholder="Upload File" aria-describedby="fileHelpId" />
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
            selectedFile: null,
            validExtensions: ['jpg', 'jpeg', 'png', 'gif'],
            maxSize: 2 * 1024 * 1024,
            emailRule: Yup.string().email().required(),
            passwordRule: Yup.string().min(6).required(),
        }
    },
    components: { Form, Field, ErrorMessage },
    methods: {
        handleSubmit() {
            if (!this.selectedFile) {
                alert("Please select a valid file first!");
                return;
            }
            const formData = new FormData();
            formData.append("email", this.email)
            formData.append("password", this.password)
            formData.append("file", this.selectedFile)
            
            // axios.post('http://172.23.128.93:3000/upload-single', formData, {
            //     headers: {
            //         'Content-Type': 'multipart/form-data'
            //     }
            // })
            //     .then(response => {
            //         console.log('File uploaded successfully:', response.data);
            //     })
            //     .catch(error => {
            //         console.error('Error uploading file:', error);
            //     });

            axios.post('http://172.23.128.93:3000/upload-multiple', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    console.log('File uploaded successfully:', response.data);
                })
                .catch(error => {
                    console.error('Error uploading file:', error);
                });

        },
        handleFile(event) {
            const file = event.target.files[0];
            if (file) {
                const fileExtension = file.name.split('.').pop().toLowerCase();
                if (!this.validExtensions.includes(fileExtension)) {
                    alert("Invalid file type. Only jpg, jpeg, png, and gif files are allowed.");
                    this.selectedFile = null;
                    return;
                }
                if (file.size > this.maxSize) {
                    alert("File size exceeds the 2 MB limit.");
                    this.selectedFile = null;
                    return;
                }
                this.selectedFile = file;
            }
        }
    }
}
</script>

<style>
.error {
    color: brown;
}
</style>