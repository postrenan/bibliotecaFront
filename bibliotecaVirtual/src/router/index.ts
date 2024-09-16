import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import HomeView from '@/views/HomeView.vue';
import AlunoView from "@/views/AlunoView.vue";
import ManagerView from '@/views/ManagerView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',
      name: 'selectUser',
      component: HomeView
    },
    {
      path: '/aluno',
      name: 'bibliotecaDoAluno',
      component: AlunoView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/gerenciamento',
      name: 'gerenciamento',
      component: ManagerView

    }

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
  ]
})

export default router
