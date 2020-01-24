<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Vuex</h1>
        <h2 class="text-success">{{`${scourge}`}}</h2>
        <p class="lead">Padrão de gerenciamento de Estado Centralizado no Vue</p>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-9 border-right">
            <TarefasLista />
          </div>
          <div class="col-sm-3">
            <Contador />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Contador from "./components/Contador";
import TarefasLista from "./components/TarefasLista";

export default {
  name: "app",
  components: {
    Contador,
    TarefasLista
  },
  computed: {
    ...mapState({
      scourge: "nome"
    })
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
