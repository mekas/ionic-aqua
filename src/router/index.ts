import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/Tabs.vue'
import PondsPage from '../views/PondsPage.vue'
import HomePage from '../views/HomePage.vue'
import PondsRegistration from '../views/PondRegistration.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/newpond', 
    component: PondsRegistration
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => HomePage
      },
      {
        path: 'tab2',
        component: () => PondsPage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
