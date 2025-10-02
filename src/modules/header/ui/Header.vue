<script setup lang="ts">
import { Button } from "primevue";
import { inputHeader } from "../../../components/inputHeader";
import shape from "../assets/Shape.svg";
import theme from "../assets/theme.svg";
</script>

<template>
  <div
    class="wrapper w-full bg-[#FFFFFF14] h-14 flex items-center justify-between"
  >
    <div class="logo">AIRESTO | Супра</div>
    <div class="cont flex gap-4 items-center">
      <inputHeader />
      <Button>
        <img :src="theme" alt="theme" />
      </Button>
      <Button class="flex items-center">
        <img :src="shape" alt="shape" />
        <p>Выйти</p>
      </Button>
    </div>
  </div>
</template>

<style scoped>
.logo {
  font-family: "Saira Semi Condensed", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.p-button {
  height: 25px;
  min-width: 25px;
}
</style>
