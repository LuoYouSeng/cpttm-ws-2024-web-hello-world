<script setup>

import Todo from '@/models/todo';
import { ref, watch } from 'vue';

const props = defineProps(['todo'])
const emit = defineEmits(['submit'])

const formData = ref(null)

watch(props.todo, ((nv, ov) => {
    let todo = new Todo()
    Object.assign(todo, { ...nv })
    formData.value = todo
}), { immediate: true })

function handleClick(isSave = true) {
    if(isSave) emit('submit', formData)
}

</script>

<template>
    <form>
        <input type="text" v-model="formData.task">
        <input type="date" v-model="formData.date">
        <button @click.prevent="handleClick(false)">Cancel</button>
        <button @click.prevent="handleClick">Save</button>
    </form>
</template>