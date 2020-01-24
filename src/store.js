import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		contador: 0,
		tarefas: [
			{ id: 1, titulo: "Aprender Vue.js", concluido: true },
			{ id: 2, titulo: "Aprender Vuex", concluido: true },
			{ id: 3, titulo: "Aprender Vue Router", concluido: true },
			{ id: 3, titulo: "Aprender GraphQL", concluido: false },
			{ id: 3, titulo: "Aprender React Native", concluido: false }
		],
		nome: "A message from inside the Vuex Store. Nice, isn'/t it? "
	},
	/* Getters no Vuex são uma forma de se fazer uma tratativa em cima dos dados 
    que temos no estado Global da aplicação. No exemplo abaixo, fiz uma tratativa
    para filtrar somente pelas  tarefas concluídas (e dps fiz outra tratativa para 
    filtrar pelas tarefas incompletas.) Desse modo, tiramos a responsabilidade dos
    componentes de terem que fazer esse trabalho.
  */
	getters: {
		//
		tarefasConcluidas: state => {
			return state.tarefas.filter(tarefa => tarefa.concluido === true);
		},
		tarefasAFazer: state => {
			return state.tarefas.filter(tarefa => tarefa.concluido === false);
		},
		totalTarefasConcluidas: (state, getters) => {
			return getters.tarefasConcluidas.length;
		}
	}
});
