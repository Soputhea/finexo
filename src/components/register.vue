<template>
    <div class="container mt-5">
        <h2 class="mb-4">Register</h2>
        <form @submit.prevent="register">
            <div class="mb-3">
                <label for="firstname" class="form-label">First Name</label>
                <input type="text" v-model="firstname" class="form-control" id="firstname" placeholder="Enter firstname" required>
            </div>
            <div class="mb-3">
                <label for="lastname" class="form-label">Last Name</label>
                <input type="text" v-model="lastname" class="form-control" id="lastname" placeholder="Enter lastname" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" v-model="email" class="form-control" id="email" placeholder="Enter email" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Role</label>
                <input type="text" v-model="role" class="form-control" id="role" placeholder="Enter password" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" v-model="password" class="form-control" id="password" placeholder="Enter password" required>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    data() {
        return {
            firstname: '',
            lastname:'',
            email: '',
            role:0,
            password: ''
        };
    },
    methods: {
        async register() {
            try {
                
                const response = await axios.post('http://localhost:8080/api/v1/auth/signup', {    
                    firstname: this.firstname,
                    lastname: this.lastname,
                    role: this.role,
                    email: this.email,
                    password: this.password
                });
                console.log('Registration successful:', response.data);

            } catch (error) {
                console.error('Registration failed:', error);

            }
        }
    }
}
</script>