<template>
  <header>
    <NavBar />
  </header>
  <main class="min-h-screen flex items-center justify-center green-bg">
    <RouterView />
  </main>
  <footer>
    <FooterCV />
  </footer>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import FooterCV from '@/components/FooterCV.vue'
</script>

<style scoped>

</style>
