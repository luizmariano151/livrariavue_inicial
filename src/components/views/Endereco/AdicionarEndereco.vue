<template>
  <Navegacao></Navegacao>

  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">Cadastrar</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Editar</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Excluir</a>
      </li>
    </ul>
  </div>

  <div>
    <div class="jumbotron">
      <h1 class="display-4">Cadastrar Endereço</h1>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <form>
        <div class="row">
          <div class="col-4">
            <div class="form-group">
              <label for="input-cep">CEP:</label>
              <input type="" class="form-control" />
            </div>
          </div>
          <div class="col-8">
            <div class="form-group">
              <label for="input-cidade">Cidade:</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-10">
            <div class="form-group">
              <label for="input-rua">Rua:</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-2">
            <div class="form-group">
              <label for="input-numero" style="display: flax">Número:</label>
              <input type="number" class="form-control" />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="input-bairro">Bairro:</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="input-numero">Estado:</label>
              <input type="" class="form-control" />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="input-complemento">Complemento:</label>
              <input type="text" class="form-control" />
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
import Navegacao from "../Home/Navegacao.vue";

export default {
  name: "AdicionarEndereco",
  components: {
    Navegacao,
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