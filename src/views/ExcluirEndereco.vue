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
import axios from "axios";
import Navegacao from "../views/Navegacao.vue";
import NavegacaoEndereco from "../views/NavegacaoEndereco.vue";
import servicoEndereco from "../servico/servicoEndereco";

export default {
  name: "ExcluirEndereco",
  data() {
    return {
      enderecos: this.$store.state.enderecos,
      selected: "",
      user: {
        id: "",
      },
    };
  },
  mounted() {
    servicoEndereco.listar().then((resposta) => {
      this.$store.state.enderecos = resposta.data;
      this.enderecos = this.$store.state.enderecos;
    });
  },
  methods: {
    excluir() {
      if (this.selected == '') {
          alert('Escolha um id')
      } else {
        this.user.id = this.selected;
        axios({
          url: "http://localhost:8080/endereco-vue/excluir",
          data: this.user,
          method: "POST",
          responseType: "json",
        });
        this.selected = ''
        alert('Endereço excluido!');
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
.jumbotron,
.card {
  margin-left: 30px;
  margin-right: 30px;
}
</style>