<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <el-icon :size="5" class="el-input__icon">
    <span class="material-icons">{{ name }}</span>
  </el-icon>
</template>
