<script setup>
import { ref } from 'vue'
import Todo from "@/models/todo.js"

const emit = defineEmits(["after-submit"])

const formData = ref(new Todo())

function onSubmit() {
	const todo = formData.value
	// TODO: save todo

	formData.value = new Todo()
	emit("after-submit", todo)
}
</script>

<template>
	<form @submit.prevent="onSubmit">

		<input type="text" v-model="formData.name">
		<input type="date" v-model="formData.date">
		<button>Save</button>
	</form>
</template>