<script setup>

import TodoEditForm from './TodoEditForm.vue'

const props = defineProps(['todo'])

function handleEdit(data) {
    Object.assign(props.todo, data.value)
}

</script>

<template>
    <div>
        <input type="checkbox" v-model="todo.isDone">
        <span :class="{ 'done': todo.isDone }">{{ todo.task }} {{ todo.date }}</span>
        <button>Edit</button>
        <button>Delete</button>
    </div>
    <div>
        <TodoEditForm @submit="handleEdit" :todo="todo"></TodoEditForm>
    </div>
</template>

<style scoped>
.done {
    text-decoration: line-through;
}
</style>
