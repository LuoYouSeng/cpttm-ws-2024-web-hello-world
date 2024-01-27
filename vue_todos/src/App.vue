<script setup>
import { ref } from 'vue';
import TodoForm from './components/TodoForm.vue'

import Todo from './models/todo'
import TodoItem from './components/TodoItem.vue';

const todos = ref([])

function create(task) {
	let todo = new Todo()
	todo.task = task
	todos.value.push(todo)
}

</script>

<template>
	<ul>
		<TodoItem v-for="todo in todos" :todo="todo"></TodoItem>
	</ul>
	<TodoForm @create="create"></TodoForm>
</template>