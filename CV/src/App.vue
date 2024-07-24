<template>
  <header>
    <NavBar />
  </header>
  <main>
    <Transition name="fade" mode="out-in">
      <RouterView />
    </Transition>
  </main>
  <footer>
    <FooterCV />
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterCV from './components/FooterCV.vue'
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
