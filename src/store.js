import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		contador: 0,
		tarefas: [],
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
		tarefasConcluidas: (state) => {
			return state.tarefas.filter((tarefa) => tarefa.concluido === true);
		},
		tarefasAFazer: (state) => {
			return state.tarefas.filter((tarefa) => tarefa.concluido === false);
		},
		totalTarefasConcluidas: (state, getters) => {
			return getters.tarefasConcluidas.length;
		},
		buscarTarefaPorId: (state) => {
			/* Implementação feita para que o componente possa chamar um getter como function
        e poder passar argumentos pra ela.
      */
			return (id) => {
				return state.tarefas.find((t) => t.id === id);
			};
		}
	},
	/*
		Mutations: Maneira do Vuex de alterar o estado global de uma forma previsivel (predictable way)
		Mutations sempre sao objetos, e dentro do objeto escrevemos funcoes. Essas funcoes recebem o 
		state como primeiro parametro, e entao, no corpo da funcao, podemos descrever o que acontecera
		com o state caso invoquemos a funcao. Bem semelhante aos Reducers.
	*/
	mutations: {
		listarTarefas: (state, { tarefas }) => {
			state.tarefas = tarefas;
		}
	},

	/* ACTIONS: Forma do Vuex de se mexer no Estado de forma assincrona. Cada chave no objeto, representa uma action diferente
		1 - Context: Recebe todas as propriedades e metodos que podemos acessar dentro do Vuex.store()
		2 - Payload: 
	*/
	actions: {
		listarTarefas: (context, payload) => {
			context.commit('listarTarefas', payload);
		}
	}
});
