<template>
    <div>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link class="nav-link " to="/adicionar-endereco">Cadastrar</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/editar">Editar</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/excluir">Excluir</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "NavegacaoEndereco"
}
</script>

<style>

</style>