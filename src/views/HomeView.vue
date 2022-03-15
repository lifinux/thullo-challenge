<script setup lang="ts">
import TheWelcome from "@/components/TheWelcome.vue";
import { ref, onMounted } from 'vue';
import router from "../router";

onMounted(() => {
  router.push('/login');
});

</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
