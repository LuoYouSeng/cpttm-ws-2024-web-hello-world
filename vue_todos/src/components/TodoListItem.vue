<script setup>
import { ref, computed } from "vue"
import TodoEditForm from "./TodoEditForm.vue"

const props = defineProps(["todo"])

const emit = defineEmits(['toggle', 'delete'])

const editing = ref(false)

const elClass = computed(() => {
	return {
		done: props.todo?.done
	}
})

function toggle() {
	emit('toggle')
}

function onDel(){
	if (confirm("Are you sure?")) {
		emit('delete', props.todo)
	}
}
</script>

<template>
	<li :class="elClass">
		<TodoEditForm :todo="todo" v-if="editing" @after-submit="editing = false"></TodoEditForm>
		<template v-else>
			<input type="checkbox" @change="toggle">
			{{ todo.name }}
			&middot;
			<a href="#" @click.prevent.stop="editing = !editing">Edit</a>

			&middot;
			<a href="#" @click.prevent.stop="onDel">Del</a>
			<div>
				{{ todo.cDate }}
			</div>
		</template>
	</li>
</template>

<style scoped>
.done {
	text-decoration: line-through;
}
</style>