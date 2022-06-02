import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StartVIew from '../views/StartVIew.vue'
import PayCatView from '../views/PayCatView.vue'
import DishesView from '../views/DishesView.vue'
import PayView from '../views/PayView.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'index',
        component: HomeView
    },
    {
        path: '/start',
        name: 'start',
        component: StartVIew

    }, {
        path: '/paycat',
        name: 'paycat',
        component: PayCatView
    }, {
        path: '/Dishes',
        name: 'Dishes',
        component: DishesView
    }, {
        path: '/pay',
        name: 'Pay',
        component: PayView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router