import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/views/Home/Home.vue'
import Login from '../components/views/Login/Login.vue'
import Navegacao from '../components/views/Home/Navegacao.vue'
import AdicionarEndereco from '../components/views/Endereco/AdicionarEndereco.vue'


const routes = [
  {
	path: '/home',
    name:'home',
	component: Home
  },
  {
    path: '/',
    name: 'login',
    component: Login
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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
