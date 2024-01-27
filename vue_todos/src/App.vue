<script setup>
	import { ref, computed } from 'vue'
	import TodoListItem from './components/TodoListItem.vue'

	import TodoForm from './components/TodoForm.vue'

	const todos = ref([])

	const overdueTodos = computed(() => {
		return todos.value.filter(d => d.isOverdue).sort((a, b) => a.date > b.date ? 1 : -1)
	})

	const todayTodos = computed(() => {
		return todos.value.filter(d => d.isToday)
	})

	function afterSubmit(todo) {
		todos.value.push(todo)
	}

	function toggle(todo) {
		todo.done = !todo.done
	}

	function onDelete(todo) {
		const idx = todos.value.indexOf(todo)
		if (idx > -1) {
			todos.value.splice(idx, 1)
		}
	}
</script>

<template>
	<h1>My Todo List</h1>

	<div>{{ todos.length }}個任務</div>

	<h2>過期</h2>
	<ul>
		<TodoListItem v-for="todo in overdueTodos" :todo="todo" @toggle="toggle(todo)" @delete="onDelete"></TodoListItem>
	</ul>

	<h2>今天</h2>
	<ul>
		<TodoListItem v-for="todo in todayTodos" :todo="todo" @toggle="toggle(todo)" @delete="onDelete"></TodoListItem>
	</ul>

	<TodoForm @after-submit="afterSubmit"></TodoForm>
</template>

<style scoped>
</style>