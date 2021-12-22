<template>
  <div id="container-login" class="container">
    <div class="card" id="card-login">
      <div class="card-body">
        
        <h4 class="titulo">Login</h4>

        <form @submit.prevent="login">
          <div class="form-group">
            <label for="input-email">Endereço de email</label>
            <input
              id="input-email"
              type="text"
              class="form-control"
              v-model="user.username"
              placeholder="email"
            />
          </div>

          <div class="form-group">
            <label for="input-password">Senha</label>
            <input
              id="input-password"
              v-model="user.password"
              type="password"
              class="form-control"
              placeholder="Senha"
            />
          </div>

          <button type="submit" class="btn btn-primary">Login</button>
          <span class="space"></span>
          <router-link to="/cadastrar">
              <button type="button" class="btn btn-primary">Cadastra-se</button>
          </router-link>
        </form>

      </div>
    </div>
  </div>
</template>

<script>

import authService from "../services/authService";
import mutations from "../store/mutations";
import state from '../store/state';

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
      authService.signIn(this.user)
     .then((res) => {
        mutations.loginSucesso(state, res.data)
        this.$router.push("/");
      }).catch(() => {
        mutations.loginFailure(state)
        alert('Erro na autenticação do usuário');
      })
    }

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

  .space {
    margin: 5px;
  }
</style>