<template>
  <Navegacao></Navegacao>
  <NavegacaoEndereco></NavegacaoEndereco>
  <div>
    <div class="jumbotron">
      <h1 class="display-4">Editar Endereço</h1>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <form @submit.prevent="editar">
        <div class="form-group">
          <label for="exampleFormControlSelect1">Selecione o ID</label>
          <select
            class="form-control"
            id="select"
            v-model="selected"
            @click="select"
          >
            <option
              v-for="end in enderecos"
              :key="end.id"
              v-bind:value="end.id"
            >
              {{ end.id }}
            </option>
          </select>
        </div>
        <div class="row">
          <div class="col-4">
            <div class="form-group">
              <label for="input-cep">CEP:</label>
              <input type="" class="form-control" v-model="endereco.cep" />
            </div>
          </div>
          <div class="col-8">
            <div class="form-group">
              <label for="input-cidade">Cidade:</label>
              <input
                type="text"
                class="form-control"
                v-model="endereco.cidade"
              />
            </div>
          </div>
          <div class="col-10">
            <div class="form-group">
              <label for="input-rua">Rua:</label>
              <input type="text" class="form-control" v-model="endereco.rua" />
            </div>
          </div>
          <div class="col-2">
            <div class="form-group">
              <label for="input-numero" style="display: flax">Número:</label>
              <input
                type="number"
                class="form-control"
                v-model="endereco.numero"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="input-bairro">Bairro:</label>
              <input
                type="text"
                class="form-control"
                v-model="endereco.bairro"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="input-numero">Estado:</label>
              <input type="" class="form-control" v-model="endereco.estado" />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="input-complemento">Complemento:</label>
              <input
                type="text"
                class="form-control"
                v-model="endereco.complemento"
              />
            </div>
          </div>
        </div>
        <div class="container-options">
          <button class="btn btn-success" type="submit">
            Salvar Alterações
          </button>
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
  name: "EditarEndereco",
  data() {
    return {
      enderecos: this.$store.state.enderecos,
      selected: "",
      endereco: {
        id: "",
        cep: "",
        numero: "",
        cidade: "",
        estado: "",
        bairro: "",
        rua: "",
        complemento: "",
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
    editar() {
      if (this.selected == "") {
        alert("Selecione um ID!");
      } else {
        this.endereco.id = this.selected;
        console.log(this.endereco);
        axios({
          url: "http://localhost:8080/endereco-vue/editar",
          data: this.endereco,
          method: "POST",
          responseType: "json",
        })
          .then((res) => {
            alert("Endereço editado com sucesesso!");
            res;
          })
          .catch((erro) => {
            erro;
            alert("Erro ao editar endereço");
          });
      }
      this.selected == "",
        (this.endereco.cep = ""),
        (this.endereco.numero = ""),
        (this.endereco.cidade = ""),
        (this.endereco.estado = ""),
        (this.endereco.bairro = ""),
        (this.endereco.rua = ""),
        (this.endereco.complemento = "");
      this.router("/");
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