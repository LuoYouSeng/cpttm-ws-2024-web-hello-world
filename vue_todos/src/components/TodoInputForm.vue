<script setup>

import {ref} from 'vue'

const emit = defineEmits(['submit'])
const inputText = ref('')

function handleSubmit() {
    emit('submit', inputText.value)
    inputText.value = ''
}

</script>

<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model="inputText">
        <button>添加</button>
    </form>
</template>