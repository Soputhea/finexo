import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Import your components
import Home from './views/Home.vue'
import About from './views/About.vue'
import Service from './views/Service.vue'
import User from './views/User.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/service', component: Service },
    { path:'/user/:userId', component: User}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

