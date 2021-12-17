<template>
  <div class="barra">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#"
        ><img
          src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/30/000000/external-agenda-interface-kiranshastry-lineal-color-kiranshastry.png"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/adicionar-endereco">Meus Endereços</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navegacao",
  data() {
    return {};
  },
};
</script>

<style>
.barra {
  background-color: aquamarine;
}
</style>