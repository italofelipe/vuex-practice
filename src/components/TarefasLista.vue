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

    <ul class="list-group" v-if="tarefas.length > 0">
      <TarafasListaItem
        v-for="tarefa in tarefas"
        :key="tarefa.id"
        :tarefa="tarefa"
        @editar="selecionarTarefaParaEdicao"
      />
    </ul>
    <p v-else>Nenhuma tarefa criada.</p>
    <TarafaSalvar v-if="exibirFormulario" :tarefa="tarefaSelecionada" />
  </div>
</template>

<script>
import { mapState} from 'vuex'
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
    ...mapState(['tarefas'])
  }
};
</script>