<script setup>
import moment from 'moment'
import TodoInputForm from './components/TodoInputForm.vue'
import { computed, ref } from 'vue'
import Todo from './models/todo'
import TodoItem from './components/TodoItem.vue';

const todos = ref([])

function addTodo(content) {
    let todo = new Todo(content)
    todos.value.push(todo)
}

function updateTodo(index, content, date) {
    todos.value.splice(index, 1)
    let todo = new Todo(content, moment(date))
    todos.value.push(todo)
}

function removeTodo(index) {
    todos.value.splice(index, 1)
}

const pass = computed(()=>{
    return todos.value.filter((todo)=>{
        return todo.date.format('yyyyMMDD') < moment().format('yyyyMMDD')
    })
})

const today = computed(()=>{
    return todos.value.filter((todo)=>{
        return todo.date.format('yyyyMMDD') === moment().format('yyyyMMDD')
    })
})

</script>

<template>
    <div>
        <h1>過期</h1>
        <TodoItem v-for="(todo, index) in pass" @update="updateTodo" @remove="removeTodo" :index="index" :todo="todo"></TodoItem>
    </div>
    <div>
        <h1>今天</h1>
        <TodoItem v-for="(todo, index) in today" @update="updateTodo" @remove="removeTodo" :index="index" :todo="todo"></TodoItem>
    </div>
    <TodoInputForm @submit="addTodo"></TodoInputForm>
</template>