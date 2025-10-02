<script setup lang="ts">
import { cardDate } from "../../../components/cardDate";
</script>

<template>
  <div class="wrapper !mt-10 font-bold flex flex-col gap-10">
    <h1 class="title !text-4xl">Бронирования</h1>

    <div class="date">
      <h3 class="subtitle">Дата</h3>
      <div class="cont flex gap-6">
        <cardDate date="4 апреля" day-week="сегодня" />
        <cardDate date="4 апреля" day-week="сегодня" />
        <cardDate date="4 апреля" day-week="сегодня" />
        <cardDate date="4 апреля" day-week="сегодня" />
      </div>
    </div>

    <div class="displayed-zones">
      <h3 class="subtitle">Отображаемые зоны</h3>
      <div class="cont flex gap-6">
        <div class="zone">1 этаж</div>
        <div class="zone">2 этаж</div>
        <div class="zone">Банкетный зал</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.subtitle {
  color: gray;
  margin: 4px;
  font-size: 14px;
}

.zone {
  background: #007aff;
  padding: 6px;
  border-radius: 6px;
  font-weight: 400;
  font-size: 12px;
}
</style>
