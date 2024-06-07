<template>
    <Form @submit="handleSubmit">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <Field type="email" name="email" :rules="emailRule" v-model="email" />
        <ErrorMessage name="email" class="error" />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <Field
          type="password"
          name="password"
          :rules="passwordRule"
          v-model="password"
        />
        <ErrorMessage name="password" class="error" />
      </div>
      <div class="form-group">
        <label>Upload File</label>
        <input type="file" @change="handleFile" ref="fileUpload" multiple />
      </div>
      <button class="btn btn-primary">Submit</button>
    </Form>
  </template>
  <script>
  import axios from "axios";
  import { Form, Field, ErrorMessage } from "vee-validate";
  import * as Yup from "yup";
  export default {
    components: { Form, Field, ErrorMessage },
    data() {
      return {
        email: "",
        password: "",
        files: [],
        validExtensions: ["pdf", "png", "jpg"],
        maxSize: 300 * 1024 * 1024,
        emailRule: Yup.string().email().required(),
        passwordRule: Yup.string().min(6).required(),
      };
    },
    methods: {
      async handleSubmit() {
        const formData = new FormData();
        formData.append("email", this.email);
        formData.append("username", this.username);
        for (let i = 0; i < this.files.length; i++) {
          formData.append("files", this.files[i]);
        }
        const { data } = await axios.post(
          "http://172.23.128.93:3000/upload-multiple",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(data);
      },
      handleFile(event) {
        // Logic to handle file check
        console.log(event.target.files);
        const myLists = [...event.target.files];
        console.log(myLists);
        myLists.forEach((file) => {
          if (file) {
            // check extension
            const fileExtension = file.name.split(".").pop().toLowerCase();
            if (!this.validExtensions.includes(fileExtension)) {
              alert(`${file.name} not allowed`);
              this.$refs.fileUpload.value = "";
            }
            if (file.size > this.maxSize) {
              alert(`${file.name} exceeded file size 2MB`);
              this.$refs.fileUpload.value = "";
            }
            this.files.push(file);
            // this.file = file;
            // console.log(file);
          }
        });
      },
    },
  };
  </script>