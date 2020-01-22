<template>
	<div>
		<h2 class="font-weight-light">Contador: {{ contador }}</h2>
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
	props: {},
	data() {
		return { contador: 0 };
	},
	methods: {
		decrementar() {
			this.contador--;
		},
		incrementar() {
			this.contador++;
		}
	}
};
</script>
