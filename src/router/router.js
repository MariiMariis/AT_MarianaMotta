import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../views/Home.vue'
import AdicionarLivro from '../views/Adicionar.vue'



const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/adicionar',
        name: 'adicionar',
        component: AdicionarLivro
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

const DEFAULT_TITLE = 'Gerenciador de Livros';
router.beforeEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router