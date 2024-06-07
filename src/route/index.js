import Register from '@/components/register.vue'
import Service from '@/components/service.vue'
import Team from '@/components/team.vue'
import UploadData from '@/components/uploadData.vue'
import UploadMultiple from '@/components/uploadMultiple.vue'
import Why from '@/components/why.vue'
import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import User from '@/views/User.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/service', component: Service },
    { path: '/why', component: Why },
    { path: '/team', component: Team },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/user', component: User },
    { 
      path: '/upload', 
      component: UploadData,
     },
     { 
      path: '/multiple', 
      component: UploadMultiple,
     },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})


export default router