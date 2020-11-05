import Vue from 'vue';
import VueRouter from 'vue-router';

// import Home from '../views/home/home.vue'
// import Category from '../views/category/category.vue'
// import Shopcart from '../views/shopcart/shopcart.vue'
// import Profile from '../views/profile/profile.vue'

const Home = () => import('../views/home/home.vue')
const Category = () => import('../views/category/category.vue')
const Shopcart = () => import('../views/shopcart/shopcart.vue')
const Profile = () => import('../views/profile/profile.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  }]

// const router = new VueRouter({
//   routers,
//   mode: 'history'
// })

// 解决报错
const originalPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
  routers,
  mode: 'history'
})