import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WeatherAppView from '../views/WeatherAppView.vue';
import ShoppingView from '../views/ShoppingView.vue';
import projects from '../views/projectsView.vue';
import about from '../views/AboutView.vue';
import contact from '../views/ContactView.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/WeatherApp',
            name: 'weatherApp',
            component: WeatherAppView
        },
        {
            path: '/Shopping',
            name: 'Shopping',
            component: ShoppingView
        },
        {
            path: '/Projects',
            name: 'projects',
            component: projects
        },
        {
            path: '/About',
            name: 'about',
            component: about
        },
        {
            path: '/Contact',
            name: 'contact',
            component: contact
        },

    ]
})

export default router
