<template>
  <div id="container-cadastro" class="container">
    <div class="card" id="card-cadastro">
      <div class="card-body">
        
        <h4 class="titulo">Cadastra-se</h4>


        <form @submit.prevent="cadastrar">

            <div>
              <div class="form-check">
                <input 
                  class="form-check-input" 
                  type="radio"
                  name="tipo-usuario" 
                  v-model="user.tipoUsuario"
                  id="user-cliente"
                  value="CLIENTE"
                />
                <label class="form-check-label" for="user-cliente">
                  CLIENTE
                </label>
              </div>
              <div class="form-check">
                <input 
                  class="form-check-input" 
                  type="radio" 
                  name="tipo-usuario" 
                  id="user-administrador" 
                  v-model="user.tipoUsuario" 
                  checked
                  value="ADMINISTRADOR"
                />
                <label class="form-check-label" for="user-administrador">
                  ADMINISTRADOR
                </label>
              </div>
            </div>
            <div class="form-group">
                <label for="input-nome">Nome:</label>
                <input
                  id="input-nome"
                  v-model="user.nome"
                  class="form-control"
                  required
                />
            </div>
            <div class="form-group">
                <label for="input-cpf">CPF:</label>
                <input
                    id="input-cpf"
                    v-model="user.cpf"
                    class="form-control"
                    required
                />
            </div>
            <div class="form-group">
                <label for="input-telefone">Telefone:</label>
                <input
                  id="input-telefone"
                  v-model="user.telefone"
                  class="form-control"
                  required
                />
           </div>
           <div class="form-group">
              <label for="input-email">Email:</label>
              <input
                id="input-email"
                type="email"
                class="form-control"
                v-model="user.email"
                required
              />
            </div>
            <div class="form-group">
              <label for="input-password">Senha:</label>
              <input
                id="input-password"
                v-model="user.senha"
                type="password"
                class="form-control"
                required
              />
            </div>
            
          <button type="submit" class="btn btn-primary">Finalizar</button>
        </form>

      </div>
    </div>
  </div>
</template>

<script>

import authService from "../services/authService";

export default {

  name: "Login",

  data: () => ({   
    user: {
        email: '',
        senha: '',
        nome: '',
        cpf: '',
        telefone: '',
        tipoUsuario: ''
    },
  }),

  methods: {

    cadastrar() {
      authService.signUp(this.user)
     .then(() => {
        this.$router.push("/login");
      }).catch(() => {
        alert('Erro ao cadastrar novo usuário');
      })
    }

  },
};
</script>

<style>
  #container-cadastro {
    max-width: 600px;
    margin-top: 50px;
  }

  #card-cadastro {
    background-color: aquamarine;
  }

  .titulo {
    text-align: center;
  }

  .space {
    margin: 5px;
  }
</style>