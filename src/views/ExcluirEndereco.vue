<template>
  <Navegacao></Navegacao>
  <NavegacaoEndereco></NavegacaoEndereco>
  <div>
    <div class="jumbotron">
      <h1 class="display-4">Excluir Endereço</h1>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <form @submit.prevent="excluir">
        <div class="form-group">
          <label for="exampleFormControlSelect1">Selecione o ID</label>
          <select class="form-control" id="select" v-model="selected">
            <option
              v-for="end in enderecos"
              :key="end.id"
              v-bind:value="end.id"
            >
              {{ end.id }}
            </option>
          </select>
        </div>

        <div class="container-options">
          <button class="btn btn-danger" type="submit">Excluir</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import enderecoService from "../services/enderecoService";
import Navegacao from "../views/Navegacao.vue";
import NavegacaoEndereco from "../views/NavegacaoEndereco.vue";


export default {
  name: "ExcluirEndereco",

  data() {
    return {
      enderecos: this.$store.state.enderecos,
      selected: "",
    };
  },

  mounted() {
    this.listarEnderecos();
  },

  methods: {

    listarEnderecos() {
      enderecoService.consultar().then((resposta) => {
        this.$store.state.enderecos = resposta.data;
        this.enderecos = this.$store.state.enderecos;
      });
    },

    excluir() {
      if (this.selected == '') {
          alert('Escolha um id')
      } else {
        enderecoService.deletar(this.selected)
        .then(
          () => {
            this.listarEnderecos();
            alert('Endereço excluido!');
          }
        ).catch(
          () => {
            alert('Erro ao excluir endereço');
          }
        );
      }
    },
  },

  components: {
    Navegacao,
    NavegacaoEndereco,
  },
};
</script>

<style>
  .jumbotron, .card {
    margin-left: 30px;
    margin-right: 30px;
  }
</style>