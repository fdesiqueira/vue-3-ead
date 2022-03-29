import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/HomeView.vue'
import MySupports from '@/views/Supports/MySupports'


const routes = [{
    path: '/campus',
    component: () =>
        import ('@/layouts/DefaultTemplate.vue'),
    children: [

        {
            path: '',
            name: 'campus.home',
            component: Home
        },

        {
            path: 'minhas-duvidas',
            name: 'campus.my.supports',
            component: MySupports
        }

    ]
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router