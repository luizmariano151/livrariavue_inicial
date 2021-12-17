<template>
<div id="container-login" class="container">
  <div class="card" id="card-login">
    <div class="card-body">
        <h4 class="titulo">Login</h4>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Endereço de email</label>
          <input type="email" class="form-control" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Senha</label>
          <input type="password" class="form-control" placeholder="Senha" />
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="login">Login</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
    login (){
      this.$router.push({name:'home'});
    }
  }
};
</script>

<style>
#container-login{
    max-width: 600px;
    margin-top: 15%;
}
#card-login{
  background-color: aquamarine;
  
}
.titulo{
    text-align: center;
}

</style>