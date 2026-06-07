import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import EuphronInternship from '../views/EuphronInternship.vue'
import ANIInternship from '../views/ANIInternship.vue'
import Pluto from '../components/Plutoproject.vue'
import Sagittarius from '../components/Sagittariusproject.vue'
import SpotCLI from '../components/SpotCLIproject.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/pluto',
      name: 'Pluto',
      component: Pluto,
    },
    {
      path: '/sagittarius',
      name: 'Sagittarius',
      component: Sagittarius,
    },
    {
      path: '/spotcli',
      name: 'SpotCLI',
      component: SpotCLI,
    },
    {
      path: '/internship/euphron',
      name: 'Euphron Internship',
      component: EuphronInternship,
    },
    {
      path: '/internship/ani',
      name: 'ANI Internship',
      component: ANIInternship,
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router
