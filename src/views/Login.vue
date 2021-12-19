<template>
  <div id="container-login" class="container">
    <div class="card" id="card-login">
      <div class="card-body">
        <h4 class="titulo">Login</h4>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="exampleInputEmail1">Endereço de email</label>
            <input
              type="text"
              class="form-control"
              v-model="user.username"
              placeholder="email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Senha</label>
            <input
              v-model="user.password"
              type="password"
              class="form-control"
              placeholder="Senha"
            />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import mutations from "../store/mutations"
import state from '../store/state'

export default {
  name: "Login",
  data: () => ({
    user: {
      username: "",
      password: "",
    },

  }),
  methods: {
    login() {
      axios({
        url: "http://localhost:8080/user/autenticar",
        data: this.user,
        method: "POST",
        responseType: "json",
      }).then((res) => {
        mutations.loginSucesso(state, res.data)
        this.$router.push("/");
      }).catch((erro) => {
        mutations.loginFailure(state)
        erro
        alert('Erro na autenticação do usuário');
      })
      this.user.username = "";
      this.user.password = "";
    },
  },
};
</script>

<style>
#container-login {
  max-width: 600px;
  margin-top: 15%;
}
#card-login {
  background-color: aquamarine;
}
.titulo {
  text-align: center;
}
</style>