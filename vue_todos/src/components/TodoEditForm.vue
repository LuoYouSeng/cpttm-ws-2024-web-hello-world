<script setup>
import { ref, watch } from 'vue'
import Todo from "@/models/todo.js"

const props = defineProps(["todo"])

const emit = defineEmits(["after-submit"])

const formData = ref(null)

watch(props.todo, val => {
	const todo = new Todo()
	Object.assign(todo, {...val})
	formData.value = todo
}, {immediate: true })

function onSubmit(isSave = true) {
	if(isSave) Object.assign(props.todo, formData.value)
	emit('after-submit')
}

</script>

<template>
	<form>
		<input type="text" v-model="formData.name">
		<input type="date" v-model="formData.date">
		<button @click.prevent="onSubmit(false)">Cancel</button>
		<button @click.prevent="onSubmit">Save</button>
	</form>
</template>