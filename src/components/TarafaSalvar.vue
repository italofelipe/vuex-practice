<template>
  <div class="mt-4">
    <hr />
    <h2 class="font-weight-light">Salvar Tarefa</h2>
    <form @submit.prevent="salvar">
      <div class="row">
        <div :class="classeColuna">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Titulo da tarefa"
              :value="tarefa && tarefa.titulo"
            />
          </div>
        </div>

        <div class="col-sm-2" v-if="tarefa">
          <div class="form-group">
            <label>Tarefa Concluida?</label>

            <button class="btn btn-sm d-block" type="button" :class="classeBotao">
              <i class="fa fa-check"></i>
            </button>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Salvar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TarafaSalvar",
  props: {
    tarefa: {
      type: Object,
      default: undefined
    },
    computed: {
      classeColuna() {
        return this.tarefa ? "col-sm-10" : "col-sm-12";
      },
      classeBotao() {
        return this.tarefa && this.tarefa.concluido
          ? "btn-success"
          : "btn-secondary";
      }
    },
    methods: {
      salvar() {
        const operacao = !this.tarefa ? "criar" : "editar";
        alert("Operacao:", operacao);
      }
    }
  }
};
</script>