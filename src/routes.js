import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';
import EditarCadastro from './components/editarcadastro/EditarCadastro.vue';
export const routes = [
    {path: '', component: Home, nome: 'Home' },
    {path: '/cadastro', component: Cadastro, nome: 'Cadastro' },
    {path: '/editarcadastro/:id', component: EditarCadastro, nome: 'Edit' },
    
    ];
