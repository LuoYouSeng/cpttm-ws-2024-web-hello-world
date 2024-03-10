<script setup>
import { ref } from 'vue'
const emit = defineEmits(['save', 'cancel'])
const props = defineProps(['todo'])
const inputText = ref(props.todo.content)
const inputDate = ref(props.todo.date.format('yyyy-MM-DD'))

function handleCancel() {
    inputText.value = props.todo.content
    emit('cancel')
}

function handleUpdate() {
    emit('save', inputText.value, inputDate.value)
}
</script>

<template>
    <form>
        <input v-model="inputText">
        <input type="date" v-model="inputDate">
        <button @click.prevent="handleCancel">取消</button>
        <button @click.prevent="handleUpdate">保存</button>
    </form>
</template>