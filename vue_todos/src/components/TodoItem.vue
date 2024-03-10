<script setup>
import TodoEditForm from './TodoEditForm.vue';
import { ref } from 'vue'
const emit = defineEmits(['update', 'remove'])
const props = defineProps(['todo', 'index'])
const isEdit = ref(false)
const isChecked = ref(false)

function handleRemove() {
    emit('remove', props.index)
}

function handleUpdate(content, date) {
    isEdit.value = false
    emit('update', props.index, content, date)
}
</script>

<template>
    <div v-if="!(isEdit)">
        <input type="checkbox" v-model="isChecked">
        <span :class="isChecked ? 'ins' : ''">{{ todo.content }} {{ todo.date.format('yyyy/MM/DD') }}</span>
        <button @click="isEdit = true">修改</button>
        <button @click="handleRemove">刪除</button>
    </div>
    <TodoEditForm :todo="todo" @cancel="isEdit = false" @save="handleUpdate" v-else></TodoEditForm>
</template>

<style scoped>
.ins {
    text-decoration: line-through;
}
</style>