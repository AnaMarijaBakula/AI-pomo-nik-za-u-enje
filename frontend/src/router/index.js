import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UploadProjectView from '../views/UploadProjectView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/uploadproject',
      name: 'uploadproject',
      component: UploadProjectView,
    },
  ],
})

export default router
