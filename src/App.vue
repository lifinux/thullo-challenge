<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
}
</style>

<style lang="scss">
.w-100{
  width: 100%;
}
.t-button{
  height: 38px;
  border-radius: 8px;
  font-size: 14px;
  background-color: var(--color-main);
  border: 0;
  >span{
    font-weight: 600;
  }
}
.t-input{
  >input{
    border: 1px solid var(--color-border);
    border-radius: 8px;
    font-size: 14px;
  }
}
</style>
