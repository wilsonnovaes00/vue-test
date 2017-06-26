<template>
    <div id="app">
    <form>
    <div class="cadastro col-md-6">
        <h1 class="text-center col-md-12">Editando Registro</h1>
        <div class="">
            <input type="text" class="form-control"  v-model="nome"/>
            <meu-botao  valor="Enviar" estilo="olhar" :nome="nome" acao="put" :chave="$route.params.id" class="btn-cadastro col-md-12"/>
        </div>
    </div>
    </form>
    </div>
</template>

<script>
import axios from 'axios';
import Botao from '../shared/botao/Botao.vue';

export default{
    components: {
        'meu-botao': Botao
    },
    data: () => ({
        nome: ''
    }),
    created() {
    axios.get(`http://localhost:3000/api/usuarios/` + this.$route.params.id)
    .then(response => {
       this.nome = response.data[0].nome;
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
}

</script>
<style scoped>
.cadastro{
    padding-top: 15%;
    margin-right: 80%;
    margin-left: 26%;
}
.btn-cadastro{
    margin-top:4px;
    padding:8px;
}
</style>