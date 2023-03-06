import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WeatherAppView from '../views/WeatherAppView.vue';
import ShoppingView from '../views/ShoppingView.vue';
import projects from '../views/projectsView.vue';
import about from '../views/AboutView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/WeatherApp',
            name: 'WeatherApp',
            component: WeatherAppView
        },
        {
            path: '/Shopping',
            name: 'Shopping',
            component: ShoppingView
        },
        {
            path: '/projects',
            name: 'projects',
            component: projects
        },
        {
            path: '/About',
            name: 'about',
            component: about
        },
    ]
})

export default router
