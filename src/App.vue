<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">
          Vuex
        </h1>
        <h2 class="text-success">{{`${scourge} must fall!`}}</h2>
          <p class="lead">Padrão de gerenciamento de Estado Centralizado no Vue</p>
      </div>
      <div class="container">
        <Contador />

      </div>
    </div>
  </div>
</template>

<script> 
import { mapState } from "vuex";

import Contador from './components/Contador'

export default {
  name: 'app',
  components: {
    Contador
  },
  computed: {
    ...mapState({
      scourge: 'nome'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
