<template>
	<div>
		<h2 class="font-weight-light">Contador: {{ contador }}</h2>
		<h4 class="font-weight-light">Contador Alias: {{ contadorAlias }}</h4>
		<h4 class="font-weight-light">Contador Multiplicado: {{ contadorMultiplicado }}</h4>
		<button class="btn btn-sm m-2 btn-danger" @click="decrementar">
			Decrementar
		</button>
		<button class="btn btn-sm m-2 btn-success" @click="incrementar">
			Incrementar
		</button>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Contador",
  // Adicionalmente ao estado global do Vuex, podemos ter instâncias locais de data
  data() {
    return {
      contadorLocal: 2
    }
  },

	methods: {
		decrementar() {
			
			this.$store.state.contador--;
		},
		incrementar() {
			this.$store.state.contador++;
		}
	},
	// Essa computed (contador) é basicamente uma "referência"
	// para $store.state.
   computed: mapState({
      contador: 'contador', /* -> Note que a chave é o que usamos nesse componente,
       e o valor é algo que está dentro do State no Vuex */
       contadorAlias: 'contador',
       contadorMultiplicado(state) {
         return state.contador * this.contadorLocal
       }
    })  	
  /*
    Alternativamente, poderíamos re-escrever essa computed
    das seguints maneiras:
  
    1.
    computed: mapState({
      contador: state => state.contador
    }) 	

    2.

    mapState(['contador'])
  */
};
</script>
