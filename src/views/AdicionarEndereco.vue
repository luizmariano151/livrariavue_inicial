<template>
  <Navegacao></Navegacao>
  <NavegacaoEndereco></NavegacaoEndereco>
  <div>
    <div class="jumbotron">
      <h1 class="display-4">Cadastrar Endereço</h1>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <form @submit.prevent="adicionar"> 
        <div class="row">
          <div class="col-4">
            <div class="form-group">
              <label for="input-cep">CEP:</label>
              <input type="" class="form-control" v-model="endereco.cep"/>
            </div>
          </div>
          <div class="col-8">
            <div class="form-group">
              <label for="input-cidade">Cidade:</label>
              <input type="text" class="form-control" v-model="endereco.cidade"/>
            </div>
          </div>
          <div class="col-10">
            <div class="form-group">
              <label for="input-rua">Rua:</label>
              <input type="text" class="form-control" v-model="endereco.rua"/>
            </div>
          </div>
          <div class="col-2">
            <div class="form-group">
              <label for="input-numero" style="display: flax">Número:</label>
              <input type="number" class="form-control" v-model="endereco.numero"/>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="input-bairro">Bairro:</label>
              <input type="text" class="form-control" v-model="endereco.bairro"/>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="input-numero">Estado:</label>
              <input type="" class="form-control" v-model="endereco.estado"/>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="input-complemento">Complemento:</label>
              <input type="text" class="form-control" v-model="endereco.complemento"/>
            </div>
          </div>
        </div>
        <div class="container-options">
          <button class="btn btn-success" type="submit">Salvar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import mutations from "../store/mutations"
import state from '../store/state'
import Navegacao from "../views/Navegacao.vue";
import NavegacaoEndereco from '../views/NavegacaoEndereco.vue'

export default {
  name: "AdicionarEndereco",
  data: () => ({
    endereco: {
      cep: "",
      numero: "",
      cidade: "",
      estado: "",
      bairro: "",
      rua: "",
      complemento: "",
    },
  }),
  methods: {
    adicionar() {
      axios({
        url: "http://localhost:8080/endereco-vue/adicionar",
        data: this.endereco,
        method: "POST",
        responseType: "json",
      }).then((res) => {
        alert('Endereço adicionado com sucesesso!');
        mutations.adiciona_endereco(state,res.data)
      }).catch((erro) => {
        erro
        alert('Erro ao adicionar endereço');
      })
      this.endereco.cep = "",
      this.endereco.numero = "",
      this.endereco.cidade = "",
      this.endereco.estado = "",
      this.endereco.bairro = "",
      this.endereco.rua = "",
      this.endereco.complemento = ""
    },
  },
  components: {
    Navegacao,
    NavegacaoEndereco,
  },
}
</script>

<style>
.jumbotron,
.card {
  margin-left: 30px;
  margin-right: 30px;
}
</style>