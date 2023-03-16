import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import CategoriesPage from '../views/CategoriesPage.vue'
import TaskPage from '../views/TaskPage.vue'
import SummaryPage from '../views/SummaryPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/categories',
    name: 'Categories',
    component: CategoriesPage
  },
  {
    path: '/task',
    name: 'Task',
    component: TaskPage
  },
  {
    path: '/summary',
    name: 'Summary',
    component: SummaryPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
