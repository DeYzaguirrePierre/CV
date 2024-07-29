<script setup>
import ListeProjets from '@/components/ListeProjets.vue'

</script>

<template>
    <main class="container mx-auto mt-12 p-4">
      <div class="fade-in text-center">
        <ListeProjets />
      </div>
    </main>
  </template>
  
  
  <style scoped>
  [v-cloak] { display: none; }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .fade-in {
    animation: fadeIn 1s ease-out;
  }
  
  </style>
  