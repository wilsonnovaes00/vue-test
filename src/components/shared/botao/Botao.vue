<template>
    <button  :class="estiloButton" :chave="chave" :nome="nome" :acao="acao" @click="crud()" >{{ valor }}</button>
</template>
<script>
import axios from 'axios';
export default {
props: 
    { 
        tipo: {
            type: String
        },
        valor:
         {
            required: true,
            type: String
         },
        estilo: 
        {
            required: false,
            default: 'olhar',
            type: String
        },
        chave:[String, Number],
        nome:
        {
            type: String
        },
        acao:
        {
            type: String
        }
    },
computed: {
    estiloButton() {
        if(this.estilo == 'olhar')   return 'btn btn-success btn-xs';
        if(this.estilo == 'editar')  return 'btn btn-warning btn-xs';
        if(this.estilo == 'excluir') return 'btn btn-danger btn-xs';      
    }
  },
  methods:{
      crud(){
        if(this.estilo == 'excluir') {
           var self = this;
           alert('Você Excluiu ' + self.nome);
           axios(
                {   method: 'delete', url: 'http://localhost:3000/api/usuarios/'+ self.chave,
                    header: {'Content-Type': 'application/x-www-form-urlencoded'},
                 }).then(response => {  
                      this.$router.go('/')
                 }).catch(error => {throw(error);});
               }        
        if(this.acao == 'salvar' ){
            if(!this.nome){
                alert('Você Precisa colocar um Nome');
            }else{
            var self = this;
            alert('Cadastro feito com Sucesso!!!')
            axios(
                {   method: 'post', url: 'http://localhost:3000/api/usuarios/',
                    body: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: {nome: self.nome}
                 }).then(response => {  
                     this.$router.go('/');
                 }).catch(error => {throw(error);});
               }
            }
         if(this.estilo == 'editar') {
           this.$router.push('/editarcadastro/' + this.chave) 
        }
        if(this.acao == 'put'){
            var self = this;
            axios(
            {   method: 'put', url: 'http://localhost:3000/api/usuarios/'+ self.chave,
                body: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: {nome: self.nome}
                 }).then(response => {  
                    alert('Usuario Atualizado com Sucesso, Você será redirecionado para lista de usuairo');
                    this.$router.push('/');
                 }).catch(error => {throw(error);});
            }
    },
    caminhoPath: function(chave){
        alert(this.chave);
      }
    }
  }
</script>
<style>
</style>