<script setup>
import moment from 'moment';
import { computed, ref } from 'vue';
const props = defineProps(['date'])
const month = ref(moment(props.date))

const start = ref(moment(props.date).startOf('month').subtract(moment(props.date).startOf('month').day(), 'days'))
const end = ref(moment(props.date).endOf('month').add(6 - moment(props.date).endOf('month').day(), 'days'))

const diffDays = computed(() => {
    return moment(end.value).diff(moment(start.value), 'days') + 1
})

</script>

<template>
    <div class="calendar">
        <span style="text-align: center;">{{ moment(month).get('month') + 1 + '月' }}</span>
        <div style="display: flex; flex-wrap: wrap;">
            <div class="date" v-for="index in diffDays" :date="moment(start).add(index - 1, 'days').format('yyyy-MM-DD')">
                <span v-if="moment(start).add(index - 1, 'days').get('month') == moment(month).get('month')">{{ moment(start).add(index - 1, 'days').get('date') }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.calendar {
    width: 350px;
    display: flex;
    flex-direction: column;
}

.date {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 1px solid #eee
}
</style>