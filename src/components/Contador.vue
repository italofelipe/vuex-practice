<template>
	<div>
		<h2 class="font-weight-light">Contador: {{ $store.state.contador }}</h2>
		<button class="btn btn-sm m-2 btn-danger" @click="decrementar">
			Decrementar
		</button>
		<button class="btn btn-sm m-2 btn-success" @click="incrementar">
			Incrementar
		</button>
	</div>
</template>

<script>
export default {
	name: "Contador",
  
	methods: {
		decrementar() {
      this.$store()
			this.$store.state.contador--;
		},
		incrementar() {
			this.$store.state.contador++;
		}
	}
};
</script>
