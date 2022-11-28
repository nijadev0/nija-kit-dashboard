import { createRouter, createWebHistory } from 'vue-router'

import Home from '$components/pages/Home.vue'
import Customers from '$components/pages/Customers.vue'
import Products from '$components/pages/Products.vue'
import NotFound from '$components/pages/404.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/customers',
            name: 'Customers',
            component: Customers
        },
        {
            path: '/products',
            name: 'Products',
            component: Products
        },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    ]
})

export default router