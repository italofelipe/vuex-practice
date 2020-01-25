<template>
  <div>
    <div class="row">
      <div class="col-sm-10">
        <h1 class="font-weight-light">Lista de Tarefas</h1>
      </div>
      <div class="col-sm-2">
        <button class="btn btn-primary float-right" @click="exibirFormularioCriarTarefa">
          <i class="fa fa-plus mr-2"></i>
          <span>Criar</span>
        </button>
      </div>
    </div>

    <h3 class="font-weight-light mt-4">A fazer: ({{ tarefasAFazer.length }})</h3>

    <ul class="list-group" v-if="tarefasAFazer.length > 0">
      <TarafasListaItem
        v-for="tarefa in tarefasAFazer"
        :key="tarefa.id"
        :tarefa="tarefa"
        @editar="selecionarTarefaParaEdicao"
      />
    </ul>
    <p v-else>Nenhuma tarefa a fazer.</p>

    <h3 class="font-weight-light mt-4">Concluídas: ({{ totalTarefasConcluidas }})</h3>

    <ul class="list-group" v-if="tarefasConcluidas.length > 0">
      <TarafasListaItem
        v-for="tarefa in tarefasConcluidas"
        :key="tarefa.id"
        :tarefa="tarefa"
        @editar="selecionarTarefaParaEdicao"
      />
    </ul>
    <p v-else>Nenhuma tarefa Foi concluída</p>

    <TarafaSalvar v-if="exibirFormulario" :tarefa="tarefaSelecionada" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import TarafasListaItem from "./TarafasListaItem";
import TarafaSalvar from "./TarafaSalvar";
export default {
  name: "TarefasLista",
  components: {
    TarafasListaItem,
    TarafaSalvar
  },
  data() {
    return {
      exibirFormulario: false,
      tarefaSelecionada: undefined
    };
  },
  created() {
    // Commit e a maneira do Vuex de chamar uma mutation no Store do Vuex
    this.$store.commit("listarTarefas");
  },
  methods: {
    exibirFormularioCriarTarefa() {
      // Verificar se ja temos uma tarefa selecionada (ja temos isso lcoalmente no Data)
      if (this.tarefaSelecionada) {
        this.tarefaSelecionada = undefined;
        return;
      }
      this.exibirFormulario = !this.exibirFormulario;
    },
    selecionarTarefaParaEdicao(tarefa) {
      this.exibirFormulario = true;
      this.tarefaSelecionada = tarefa;
    },
    resetar() {
      this.exibirFormulario = false;
      this.tarefaSelecionada = undefined;
    }
  },
  computed: {
    ...mapState(["tarefas"]),
    /* mapGetters funciona basicamente como mapState, onde temos que referenciar
		 propriedades existentes no store do Vuex 
		 */

    ...mapGetters([
      "tarefasConcluidas",
      "tarefasAFazer",
      "totalTarefasConcluidas",
      "buscarTarefaPorId"
    ])
  }
};
</script>
