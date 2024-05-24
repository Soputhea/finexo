import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Import your components
import Home from './views/Home.vue'
import About from './views/About.vue'
import Service from './views/Service.vue'
import Why from './views/Why.vue'
import Team from './views/Team.vue'

import User from './views/User.vue'
import Profile from '@/components/user/Profile'
import Setting from '@/components/user/Setting'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/service', component: Service },
    { path: '/why', component: Why },
    { path: '/team', component: Team },
    { path:'/user/:userId', component: User, 
        children:[
            {path:'' , component: Profile },
            {path:'Setting' , component: Setting }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

const app = createApp(App)
app.use(router)
app.mount('#app')

