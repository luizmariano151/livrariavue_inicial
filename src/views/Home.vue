<template>
<Navegacao></Navegacao>

  <div class="grupo">
    <main class="container">
      <div>
        <header>
          <div class="jumbotron mb-0">
            <h1 class="display-4">Lista de Endereços</h1>
          </div>
        </header>
        <div class="listar-endereco" v-for="endereco in enderecos" :key="endereco.id">
          <div class="card">
            <div class="card-header"></div>
            <div class="card-body">
              <div>ID: {{ endereco.id }}</div>
              <div>CEP: {{ endereco.cep }}</div>
              <div>CIDADE: {{ endereco.cidade }}</div>
              <div>RUA: {{ endereco.rua }}</div>
              <div>NÚMERO: {{ endereco.numero }}</div>
              <div>BAIRRO: {{ endereco.bairro }}</div>
              <div>ESTADO: {{ endereco.estado }}</div>
              <div>COMPLEMENTO: {{ endereco.cep }}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navegacao from './Navegacao.vue';
import enderecoService from "../services/enderecoService";

export default {
  name: "Home",
  data() {
    return {
      enderecos: this.$store.state.enderecos,
    }
  },
  mounted(){
    enderecoService.listar().then(resposta =>{
      this.$store.state.enderecos = resposta.data
      this.enderecos = this.$store.state.enderecos
    })
  },
  components: {
    Navegacao
  },
};



</script>

<style>
.grupo{
  margin-top: 25px;
  margin-bottom: 25px;
}
h1{
  text-align: center;
}

</style>


