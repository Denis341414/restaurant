<script setup lang="ts">
import { Button } from "primevue";
import { inputHeader } from "../../../components/inputHeader";
</script>

<template>
  <div
    class="wrapper w-full bg-[#FFFFFF14] h-11 flex items-center justify-between !px-8"
  >
    <div class="logo">AIRESTO | Супра</div>
    <div class="cont flex gap-4">
      <inputHeader />
      <Button />
    </div>
  </div>
</template>

<style scoped>
.logo {
  font-family: "Saira Semi Condensed", sans-serif;
  font-weight: 700;
  font-style: normal;
}
</style>
