<script setup>
import { ref, computed } from 'vue';
import moment from 'moment';
import Calendar from './components/Calendar.vue'
const startMonth = ref('2024-01-01')
const endMonth = ref('2024-03-01')

const diffMonths = computed(()=>{
    return moment(endMonth.value).diff(moment(startMonth.value), 'months')
})
</script>

<template>
    <Calendar v-for="index in diffMonths" :date="moment(startMonth).add(index - 1, 'month')"/>
</template>