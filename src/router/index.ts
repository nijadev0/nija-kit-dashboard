import { createRouter, createWebHistory } from 'vue-router'

import Home from '$components/pages/Home.vue'
import Customers from '$components/pages/Customers.vue'

// Products
import Products from '$components/pages/products/Products.vue'
import EmptyProducts from '$components/pages/products/Empty.vue'
import AddProducts from '$components/pages/products/Add.vue'
import DetailProducts from '$components/pages/products/Detail.vue'

// Variants
import Variants from '$components/pages/Variants.vue'

// Categories
import Categories from '$components/pages/categories/Categories.vue'
import AddCategories from '$components/pages/categories/Add.vue'

// Users
import Users from '$components/pages/users/Users.vue'
import DetailsUser from '$components/pages/users/Detail.vue'

// Buyers
import Buyers from '$components/pages/buyers/Buyers.vue'
import DetailsBuyer from '$components/pages/buyers/Detail.vue'
import UpdateBuyer from '$components/pages/buyers/Update.vue'

// Transactions
import Transactions from '$components/pages/transactions/Transactions.vue'
import Refund from '$components/pages/transactions/Refund.vue'

// Authentication
import Login from '$components/pages/auth/Login.vue'
import Forgot from '$components/pages/auth/Forgot.vue'
import Verify from '$components/pages/auth/Verify.vue'
import New from '$components/pages/auth/New.vue'
import Reseted from '$components/pages/auth/Reseted.vue'

import Sandbox from '$components/pages/Sandbox.vue'
import NotFound from '$components/pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    /**
     * Dashboard
     */
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
    {
      path: '/products/empty',
      name: 'Empty Products',
      component: EmptyProducts
    },
    {
      path: '/products/add',
      name: 'Add Products',
      component: AddProducts
    },
    {
      path: '/products/detail',
      name: 'Detail Products',
      component: DetailProducts
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/users/detail',
      name: 'Details User',
      component: DetailsUser
    },
    {
      path: '/buyers',
      name: 'Buyers',
      component: Buyers
    },
    {
      path: '/buyers/detail',
      name: 'Details Buyer',
      component: DetailsBuyer
    },
    {
      path: '/buyers/update',
      name: 'Update Buyer',
      component: UpdateBuyer
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/variants',
      name: 'Variants',
      component: Variants
    },
    {
      path: '/transactions/manage',
      name: 'Transactions',
      component: Transactions
    },
    {
      path: '/transactions/refund',
      name: 'Refund',
      component: Refund
    },
    {
      path: '/categories/add',
      name: 'Add Categories',
      component: AddCategories
    },
    /**
     * Authentication
     */
    {
      path: '/account/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/password/forgot',
      name: 'Forgot',
      component: Forgot
    },
    {
      path: '/password/verify',
      name: 'Verify',
      component: Verify
    },
    {
      path: '/password/new',
      name: 'New',
      component: New
    },
    {
      path: '/password/reseted',
      name: 'Reseted',
      component: Reseted
    },
    /**
     * Testing & 404
     */
    {
      path: '/sandbox',
      name: 'Sandbox',
      component: Sandbox
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
