import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WeatherAppView from '../views/WeatherAppView.vue';
import ShoppingView from '../views/ShoppingView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/WeatherAppView',
            name: 'WeatherAppView',
            component: WeatherAppView
        },
        {
            path: '/ShoppingView',
            name: 'ShoppingView',
            component: ShoppingView
        }
    ]
})

export default router
