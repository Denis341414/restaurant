<script setup lang="ts">
interface IProps {
  date: string;
  dayWeek: string;
}

const props = defineProps<IProps>();
</script>

<template>
  <div class="card-date bg-[#007AFF] !px-4 !py-2 rounded-2xl">
    <div class="date">{{ props.date }}</div>
    <div class="day-week font-light">{{ props.dayWeek }}</div>
  </div>
</template>

<style scoped></style>
