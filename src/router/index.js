import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../components/Home.vue'
import Login from "../components/Login.vue"
import Welcome from "../components/Welcome.vue"
const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
        redireact: Welcome,
        meta: {
            title: '首页'
        },
        children: [
            {
                name: 'welcome',
                path: '/welcome',
                component: Welcome,
                meta: {
                    title: '欢迎页'
                },
            },

        ]
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
        meta: {
            title: '登录'
        },
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router