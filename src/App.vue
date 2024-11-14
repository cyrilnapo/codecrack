<template>
  <router-view v-slot="{ Component }">
      <component :is="Component" />
  </router-view>
</template>

<script setup>
import "../styles/main.css";
</script>

<style>

</style>