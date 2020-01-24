import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contador: 0,
    tarefas: [
      { id: 1, titulo: "Aprender Vue.js", concluido: true },
      { id: 2, titulo: "Aprender Vuex", concluido: false },
      { id: 3, titulo: "Aprender Vue Router", concluido: false }
    ],
    nome: "A message from inside the Vuex Store. Nice, isn'/t it? "

  }
})