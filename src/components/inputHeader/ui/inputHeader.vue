<script setup lang="ts">
import { InputText } from "primevue";
</script>

<template>
  <div class="wrapper relative">
    <InputText
      class="!pl-10 h-[25px] w-[256px]"
      placeholder="⌘+Л поиск по имени"
    />
  </div>
</template>

<style scoped>
.wrapper::after {
  position: absolute;
  content: url(../assets/Frame.png);
  left: 12%;
  top: 15%;
  cursor: pointer;
}
</style>
