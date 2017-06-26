<template>
    <div id="app">
    <form>
    <div class="cadastro col-md-6">
        <h1 class="text-center col-md-12">Cadastre seu nome</h1>
        <div class="">
            <input type="text" class="form-control" v-model="nome"/>
            <meu-botao  valor="Enviar" estilo="olhar" :nome="nome" acao="salvar" class="btn-cadastro col-md-12"/>
        </div>
    </div>
    </form>
    </div>
</template>  
<script>
import Botao from '../shared/botao/Botao.vue';
export default{
    components: {
        'meu-botao': Botao
    },
    data: () => ({
        nome: ''
    }),
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