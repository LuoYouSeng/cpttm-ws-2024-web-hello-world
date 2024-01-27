<script setup>
import { ref } from 'vue';

    const emit = defineEmits(['create'])
    const input = ref('')

    function handleClick() {
        emit('create', input.value)
        input.value = ''
    }
</script>

<template>
    <form>
        <input v-model="input">
        <button @click.prevent="handleClick">Save</button>
    </form>
</template>