import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/HomeView.vue'
import MySupports from '@/views/supports/MySupports.vue'
import ModulesAndLessons from '@/views/modules/ModulesAndLessons.vue'
import Login from '@/views/auth/Login.vue'
import ForgotPassword from '@/views/auth/ForgotPassword.vue'

const routes = [{
    path: '/campus',
    component: () =>
        import ('@/layouts/DefaultTemplate.vue'),
    children: [

        {
            path: '/',
            name: 'login',
            component: Login
        },

        {
            path: '/recuperar-senha',
            name: 'forgot.password',
            component: ForgotPassword
        },

        {
            path: '',
            name: 'campus.home',
            component: Home
        },

        {
            path: 'minhas-duvidas',
            name: 'campus.my.supports',
            component: MySupports
        },
        {
            path: 'modulos',
            name: 'campus.modules',
            component: ModulesAndLessons
        }

    ]
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router