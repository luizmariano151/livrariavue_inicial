import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import store from '@/store';
import Navegacao from '../views/Navegacao.vue';
import AdicionarEndereco from '../views/AdicionarEndereco.vue';
import EditarEndereco from '../views/EditarEndereco.vue';
import ExcluirEndereco from '../views/ExcluirEndereco.vue';
import CadastrarUser from '../views/CadastrarUser.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/cadastrar',
    name: 'cadastrar',
    component: CadastrarUser
  },
  {
    path: '/navegacao',
    name: 'navegacao',
    component: Navegacao
  },
  {
    path: '/adicionar-endereco',
    name: 'adicionar-endereco',
    component: AdicionarEndereco
  },
  {
    path: '/editar',
    name: 'editar',
    component: EditarEndereco
  },
  {
    path: '/excluir',
    name: 'excluir',
    component: ExcluirEndereco
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/', '/cadastrar'];
  const authRequired = !publicPages.includes(to.path);
  const logado = store.state.logado;

  if (authRequired && !logado) {
    next('/login');
  } else {
    next();
  }
})

export default router
