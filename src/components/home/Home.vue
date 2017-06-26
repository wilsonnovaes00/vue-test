<template>
   <div id="app">
   <div class="row busca col-md-12">
        <div class="col-md-4 pull-right"> 
           Buscar<input type="search" id="search" value="" class="form-control col-md-4" v-on:input="filtro = $event.target.value" placeholder="Filtro">
        </div>
        <div class="col-md-4 busca"> <router-link to="/cadastro" type="button" class="btn btn-primary">+ Adicionar</router-link></div>
    </div>
      <minha-tabela>
        <tr v-for="dado of busca">
            <td>{{ dado.id }}</td>
            <td>{{ dado.nome }}</td>
            <td class="actions">
                <meu-botao  valor="Editar"  estilo="editar"  :chave="dado.id"/>
                <meu-botao  valor="Deletar" estilo="excluir" :nome="dado.nome" acao="excluir" caminho="deletar" :chave="dado.id"/>
            </td>
        </tr>
        </minha-tabela>
  </div>
  </div>
</template>
<script>
import axios from 'axios';
import Menu from '../shared/menu/Menu.vue';
import Tabela from '../shared/tabela/Tabela.vue';
import Botao from '../shared/botao/Botao.vue';
import { routes } from '../../routes';
export default {
  components: {
    'meu-menu' : Menu,
    'minha-tabela': Tabela,
    'meu-botao' : Botao
  },
  data: () => ({
    dados: [],
    buscarPalvra: '',
    filtro: '',
    titulo: 'Teste'
  }),
  computed: {
    busca(){
      if(this.filtro){
      let expressao = new RegExp(this.filtro.trim(), 'i');
        return this.dados.filter(dado => expressao.test(dado.nome))
      }else{
        return this.dados;
      }
    }
  },
  created() {
    this.$router.push('/')
    axios.get(`http://localhost:3000/api/usuarios/`)
    .then(response => {
       this.dados = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
}
</script>
<style>
body {
  padding-top: 50px;
  margin-top: 10px
}
.busca{
  margin-top: 10px;
  margin-right: 10px;
}
</style>